package me.big.dataset.tools.parser;

import lombok.extern.slf4j.Slf4j;
import me.big.dataset.tools.model.ArchimateElement;
import me.big.dataset.tools.model.ArchimateModel;
import me.big.dataset.tools.model.ArchimateRelationship;
import me.big.dataset.tools.model.ArchimateView;
import me.big.dataset.tools.parser.util.ParserUtils;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static me.big.dataset.tools.parser.util.ParserConstants.Xml.*;

@Slf4j
public final class XmlFileParser {

    private XmlFileParser() {}

    public static ArchimateModel parseArchimateModel(File file) {
        Document doc = ParserUtils.setupDocument(file);
        if (doc == null) {
            log.error("Failed to setup document!");
            return null;
        }
        // parse <model> as ArchiMateModel
        Element root = doc.getDocumentElement();
        if (!root.getNodeName().equals(MODEL_TAG)) {
            log.error("Root node tag should be <{}> but was <{}>", MODEL_TAG, root.getNodeName());
            return null;
        }
        validateModel(root);
        ArchimateModel model = createEmptyArchiModel(root, file.getPath());

        // parse <element> as ArchimateElement and add to model
        Map<String, ArchimateElement> idToElement = new HashMap<>();
        NodeList elements = root.getElementsByTagName(ELEMENT_TAG);
        for (int i = 0; i < elements.getLength(); i++) {
            Node node = elements.item(i);
            Element element = (Element) node;
            validateElement(element);
            ArchimateElement archiElement = createArchiElement(node);
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
            validateRelation(element);
            ArchimateRelationship relation = createArchiRelation(node, idToElement);
            if (relation != null) {
                model.getRelationships().add(relation);
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

    private static ArchimateModel createEmptyArchiModel(Element element, String sourceFile) {
        String name = "";
        String language = "";
        Element nameElement = ParserUtils.getDirectChild(element, NAME_TAG);
        // use <name> tag for model name and if present, get language
        if (nameElement != null) {
            name = nameElement.getTextContent();
            if (nameElement.hasAttribute(LANGUAGE_ATTR)) {
                language = nameElement.getAttribute(LANGUAGE_ATTR);
            }
        } else {
            log.error("Missing <{}> tag, using empty name for model.", NAME_TAG);
        }
        return ArchimateModel.builder()
                .id(element.getAttribute(ID_ATTR))
                .name(name)
                .documentation(getDocumentation(element))
                .file(sourceFile)
                .source("")
                .archiVersion("")
                .format(FILE_EXTENSION.toUpperCase())
                .language(language)
                .timestamp(new Date())
                .tags(new ArrayList<>())
                .elements(new ArrayList<>())
                .relationships(new ArrayList<>())
                .views(new ArrayList<>())
                .build();
    }

    private static ArchimateElement createArchiElement(Node node) {
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

    private static ArchimateRelationship createArchiRelation(Node node, Map<String, ArchimateElement> idLookup) {
        Element r = (Element) node;
        if (!r.hasAttribute(ID_ATTR) || !r.hasAttribute(SOURCE_ATTR) || !r.hasAttribute(TARGET_ATTR) || !r.hasAttribute(TYPE_ATTR)) {
            log.error("Missing attributes in {}", r.getNodeName());
            return null;
        }
        // verify source and target elements have been added to model
        ArchimateElement source = idLookup.getOrDefault(r.getAttribute(SOURCE_ATTR), null);
        ArchimateElement target = idLookup.getOrDefault(r.getAttribute(TARGET_ATTR), null);
        if (source == null || target == null) {
            log.error("Unknown source={} or target={} id", r.getAttribute(SOURCE_ATTR), r.getAttribute(TARGET_ATTR));
            return null;
        }
        return ArchimateRelationship.builder()
                .id(r.getAttribute(ID_ATTR))
                .name(r.hasAttribute(NAME_ATTR) ? r.getAttribute(NAME_ATTR) : "") // TODO: verify name attr (and not nested <name>)
                .sourceId(source.getId())
                .targetId(target.getId())
                .documentation(getDocumentation(r))
                .type(r.getAttribute(TYPE_ATTR))
                .build();
    }

    private static ArchimateView createView(Node node) {
        Element e = (Element) node;
        String name = "";
        Element nameElement = ParserUtils.getDirectChild(e, NAME_TAG);
        if (nameElement != null) {
            name = nameElement.getTextContent();
        }
        return ArchimateView.builder()
                .id(e.getAttribute(ID_ATTR))
                .name(name)
                .documentation(getDocumentation(e))
                .viewpoint(e.hasAttribute(VIEWPOINT_ATTR) ? e.getAttribute(VIEWPOINT_ATTR) : "")
                .build();
    }

    private static void validateModel(Element model) {
        String xmlns = model.getAttribute(ARCHIMATE_NS_ATTR);
        if (!xmlns.equals(ARCHIMATE_NS_VAL)) {
            log.error("Unknown xmlns value '{}'", xmlns);
        }
        if (!model.hasAttribute(ID_ATTR)) {
            log.error("Missing one of attributes: 'name', 'id' or 'version'");
        }
    }

    private static void validateElement(Element element) {
        if (!element.hasAttribute(ID_ATTR) || !element.hasAttribute(TYPE_ATTR)) {
            log.error("Missing one of required attributes: 'id' or 'xsi:type'");
        }
    }

    private static void validateRelation(Element relation) {
        if (!relation.hasAttribute(ID_ATTR) || !relation.hasAttribute(TYPE_ATTR) ||
                !relation.hasAttribute(SOURCE_ATTR) || !relation.hasAttribute(TARGET_ATTR)) {
            log.error("Missing one of attributes: 'id', 'xsi:type', 'source' or 'target'");
        }
    }

    private static String getDocumentation(Element element) {
        Element docElement = ParserUtils.getDirectChild(element, "documentation");
        if (docElement != null) {
            return docElement.getTextContent();
        }
        return "";
    }
}
