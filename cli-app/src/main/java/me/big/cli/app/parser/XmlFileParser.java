package me.big.cli.app.parser;

import lombok.extern.slf4j.Slf4j;
import me.big.cli.app.model.ArchimateElement;
import me.big.cli.app.model.ArchimateRelationship;
import me.big.cli.app.model.ArchimateView;
import me.big.cli.app.model.ParsedModel;
import me.big.cli.app.parser.util.ParserUtils;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import static me.big.cli.app.parser.util.ParserConstants.Xml.*;

@Slf4j
public final class XmlFileParser {

    public XmlFileParser() { }

    public static ParsedModel parseArchimateModel(File file) {
        Document doc = ParserUtils.setupDocument(file);
        if (doc == null) {
            log.error("Failed to setup document!");
            return null;
        }
        Element root = doc.getDocumentElement();
        if (!root.getNodeName().equals(MODEL_TAG)) {
            log.error("Root node tag should be <{}> but was <{}>", MODEL_TAG, root.getNodeName());
            return null;
        }
        boolean isValidModel = validateModel(root);
        ParsedModel model = createEmptyModel(root, file.getPath());
        if (!isValidModel) {
            model.setHasWarning(true);
        }

        // parse <element> as ArchimateElement and add to model
        Map<String, ArchimateElement> idToElement = new HashMap<>();
        Map<String, ArchimateRelationship> idToRelationship = new HashMap<>();
        NodeList elements = root.getElementsByTagName(ELEMENT_TAG);
        for (int i = 0; i < elements.getLength(); i++) {
            Node node = elements.item(i);
            Element element = (Element) node;

            boolean isValidElement = validateElement(element);
            if (!isValidElement) {
                model.setHasWarning(true);
            }

            ArchimateElement archiElement = createElement(node);
            if (archiElement != null) {
                model.getElements().add(archiElement);
                idToElement.put(archiElement.getId(), archiElement);
            }
        }

        // parse <relationship> as ArchimateRelationship and add to model
        NodeList relationships = root.getElementsByTagName(RELATIONSHIP_TAG);
        for (int i = 0; i < relationships.getLength(); i++) {
            Node node = relationships.item(i);
            Element element = (Element) node;
            boolean isValidRelationship = validateRelationship(element);
            ArchimateRelationship relation = createRelationship(node, idToElement, idToRelationship);
            if (!isValidRelationship || relation == null) {
                model.setHasWarning(true);
            }
            if (relation != null) {
                model.getRelationships().add(relation);
                idToRelationship.put(relation.getId(), relation);
            }
        }

        NodeList views = root.getElementsByTagName(VIEW_TAG);
        for (int i = 0; i < views.getLength(); i++) {
            Node node = views.item(i);
            // Element element = (Element) node;
            // validateView(element);
            ArchimateView view = createView(node);
            if (view != null) {
                model.getViews().add(view);
            }
        }
        return model;
    }

    // ----------------------
    // ----- CREATION -----
    // ----------------------

    private static ParsedModel createEmptyModel(Element e, String sourceFile) {
        // use <name> tag for model
        Element name = ParserUtils.getDirectChild(e, NAME_TAG);
        return ParsedModel.builder()
                .id(e.getAttribute(ID_ATTR))
                .name(name != null ? name.getTextContent() : "")
                .documentation(getDocumentation(e))
                .file(sourceFile)
                .format(FILE_EXTENSION.toUpperCase())
                .elements(new ArrayList<>())
                .relationships(new ArrayList<>())
                .views(new ArrayList<>())
                .build();
    }

    private static ArchimateElement createElement(Node node) {
        Element element = (Element) node;
        if (!element.hasAttribute(ID_ATTR) || !element.hasAttribute(TYPE_ATTR)) {
            log.error("Failed to parse element, missing attributes in {}", element.getNodeName());
            return null;
        }
        String elementType = ParserUtils.convertType(element.getAttribute(TYPE_ATTR));
        String elementName = "";
        // junctions do not contain a <name> tag
        if (elementType.equals("Junction") || elementType.equals("AndJunction") || elementType.equals("OrJunction")) {
            elementName = "Junction";
        } else {
            // all other elements -> look for <name> tag
            Node nameNode = element.getElementsByTagName(NAME_TAG).item(0);
            if (nameNode == null) {
                // if missing, check for <label> tag (used in older archimate versions)
                nameNode = element.getElementsByTagName(LABEL_TAG).item(0);
                if (nameNode == null) {
                    log.error("Could not find <name> or <label> tag for element {}", element);
                    return null;
                }
            }
            elementName = nameNode.getTextContent();
        }
        return ArchimateElement.builder()
                .id(element.getAttribute(ID_ATTR))
                .name(elementName)
                .type(elementType)
                .layer(ParserUtils.typeToLayer(elementType))
                .documentation(getDocumentation(element))
                .build();
    }

    private static ArchimateRelationship createRelationship(Node node, Map<String, ArchimateElement> idLookup, Map<String, ArchimateRelationship> idLookup2) {
        Element r = (Element) node;
        if (!r.hasAttribute(ID_ATTR) || !r.hasAttribute(SOURCE_ATTR) || !r.hasAttribute(TARGET_ATTR) || !r.hasAttribute(TYPE_ATTR)) {
            log.error("Missing attributes in {}", r.getNodeName());
            return null;
        }
        // verify source and target elements TODO: fix cognitive complexity
        String sourceId = null;
        String targetId = null;
        ArchimateElement source = idLookup.getOrDefault(r.getAttribute(SOURCE_ATTR), null);
        if (source == null) {
            ArchimateRelationship sourceRel = idLookup2.getOrDefault(r.getAttribute(SOURCE_ATTR), null);
            if (sourceRel == null) {
                log.error("Unknown source={}", r.getAttribute(SOURCE_ATTR));
                return null;
            }
            sourceId = sourceRel.getId();
        } else {
            sourceId = source.getId();
        }
        ArchimateElement target = idLookup.getOrDefault(r.getAttribute(TARGET_ATTR), null);
        if (target == null) {
            ArchimateRelationship targetRel = idLookup2.getOrDefault(r.getAttribute(TARGET_ATTR), null);
            if (targetRel == null) {
                log.error("Unknown target={}", r.getAttribute(TARGET_ATTR));
                return null;
            }
            targetId = targetRel.getId();
        } else {
            targetId = target.getId();
        }
        return ArchimateRelationship.builder()
                .id(r.getAttribute(ID_ATTR))
                .name(r.hasAttribute(NAME_ATTR) ? r.getAttribute(NAME_ATTR) : "") // TODO: verify name attr (and not nested <name>)
                .sourceId(sourceId)
                .targetId(targetId)
                .documentation(getDocumentation(r))
                .type(r.getAttribute(TYPE_ATTR))
                .build();
    }

    private static ArchimateView createView(Node node) {
        Element e = (Element) node;
        Element nameElement = ParserUtils.getDirectChild(e, NAME_TAG);
        return ArchimateView.builder()
                .id(e.getAttribute(ID_ATTR))
                .name(nameElement != null ? nameElement.getTextContent() : "")
                .documentation(getDocumentation(e))
                .viewpoint(e.hasAttribute(VIEWPOINT_ATTR) ? e.getAttribute(VIEWPOINT_ATTR) : "")
                .build();
    }

    private static String getDocumentation(Element element) {
        Element docElement = ParserUtils.getDirectChild(element, "documentation");
        if (docElement != null) {
            return docElement.getTextContent();
        }
        return "";
    }

    // ----------------------
    // ----- VALIDATION -----
    // ----------------------

    private static boolean validateModel(Element model) {
        String xmlns = model.getAttribute(ARCHIMATE_NS_ATTR);
        if (!xmlns.equals(ARCHIMATE_NS_VAL)) {
            log.error("Unknown xmlns value '{}'", xmlns);
        }
        if (!model.hasAttribute(ID_ATTR)) {
            log.error("Missing one of attributes: 'name', 'id' or 'version'");
            return false;
        }
        return true;
    }

    private static boolean validateElement(Element element) {
        if (!element.hasAttribute(ID_ATTR) || !element.hasAttribute(TYPE_ATTR)) {
            log.error("Missing one of required attributes: 'id' or 'xsi:type'");
            return false;
        }
        return true;
    }

    private static boolean validateRelationship(Element relation) {
        if (!relation.hasAttribute(ID_ATTR) || !relation.hasAttribute(TYPE_ATTR) ||
                !relation.hasAttribute(SOURCE_ATTR) || !relation.hasAttribute(TARGET_ATTR)) {
            log.error("Missing one of attributes: 'id', 'xsi:type', 'source' or 'target'");
            return false;
        }
        return true;
    }
}
