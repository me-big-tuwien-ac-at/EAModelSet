package me.big.cli.app.parser;

import lombok.extern.slf4j.Slf4j;
import me.big.cli.app.model.*;
import me.big.cli.app.parser.util.ParserUtils;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import static me.big.cli.app.parser.util.ParserConstants.Archimate.*;
import static me.big.cli.app.parser.util.ParserConstants.Xml.SOURCE_ATTR;
import static me.big.cli.app.parser.util.ParserConstants.Xml.TARGET_ATTR;

@Slf4j
public final class ArchimateFileParser {

    private ArchimateFileParser() { }

    public static ParsedModel parseArchimateModel(File file) {
        Document doc = ParserUtils.setupDocument(file);
        if (doc == null) {
            log.error("Failed to setup document!");
            return null;
        }

        // <archimate:model>
        Element root = doc.getDocumentElement();
        if (!root.getNodeName().equals(MODEL_TAG)) {
            log.error("Root node tag should be <{}> but was <{}>", MODEL_TAG, root.getNodeName());
            return null;
        }
        boolean isValidModel = validateModel(root);
        ParsedModel model = createEmptyArchiModel(root, file.getPath());
        if (!isValidModel) {
            model.setHasWarning(true);
        }

        // <element> (can be element, relationship or diagram/sketch model)
        NodeList list = doc.getElementsByTagName(ELEMENT_TAG);
        if (list == null || list.getLength() == 0) {
            log.info("Empty model: no <{}> tags found!", ELEMENT_TAG);
            return model;
        }

        // store processed elements for later look-up (e.g. creating relationships)
        Map<String, ArchimateElement> idToElement = new HashMap<>();
        Map<String, ArchimateRelationship> idToRelationship = new HashMap<>();
        for (int i = 0; i < list.getLength(); i++) {
            Element element = (Element) list.item(i);
            String elementType = ParserUtils.convertType(element.getAttribute(TYPE_ATTR));

            if (ParserUtils.isElement(elementType)) {
                // -- ELEMENT --
                boolean isValidElement = validateElement(element);
                if (!isValidElement) {
                    model.setHasWarning(true);
                }
                ArchimateElement archiElement = createArchiElement(element, elementType);
                model.getElements().add(archiElement);
                idToElement.put(archiElement.getId(), archiElement);
            } else if (ParserUtils.isRelationship(elementType)) {
                // -- RELATIONSHIP --
                boolean isValidRelationship = validateRelation(element);
                ArchimateRelationship relation = createArchiRelation(element, elementType, idToElement, idToRelationship);
                if (!isValidRelationship || relation == null) {
                    model.setHasWarning(true);
                }
                if (relation != null) {
                    model.getRelationships().add(relation);
                }
            } else if (ParserUtils.isDiagramModel(elementType)) {
                // -- VIEW --
                boolean isValidView = validateView(element);
                if (!isValidView) {
                    model.setHasWarning(true);
                }
                ArchimateView view = createView(element);
                model.getViews().add(view);
            } else if (ParserUtils.isSketchModel(elementType)) {
                // can be used to handle sketch objects
            } else {
                log.error("Unknown element type '{}'", elementType);
            }
        }
        return model;
    }

    private static ParsedModel createEmptyArchiModel(Element e, String sourceFile) {
        return ParsedModel.builder()
                .id(e.getAttribute(ID_ATTR))
                .name(e.getAttribute(NAME_ATTR))
                .documentation(getDocumentation(e))
                .file(sourceFile)
                .format(FILE_EXTENSION.toUpperCase())
                .elements(new ArrayList<>())
                .relationships(new ArrayList<>())
                .views(new ArrayList<>())
                .build();
    }

    private static ArchimateElement createArchiElement(Element e, String type) {
        return ArchimateElement.builder()
                .id(e.getAttribute(ID_ATTR))
                .name(e.hasAttribute(NAME_ATTR) ? e.getAttribute(NAME_ATTR) : "")
                .type(type)
                .documentation(getDocumentation(e))
                .layer(ParserUtils.typeToLayer(type))
                .build();
    }

    private static ArchimateView createView(Element e) {
        return ArchimateView.builder()
                .id(e.getAttribute(ID_ATTR))
                .name(e.hasAttribute(NAME_ATTR) ? e.getAttribute(NAME_ATTR) : "")
                .documentation(getDocumentation(e))
                .viewpoint(e.hasAttribute(VIEWPOINT_ATTR) ? e.getAttribute(VIEWPOINT_ATTR) : "")
                .build();
    }

    private static ArchimateRelationship createArchiRelation(Element e, String type, Map<String, ArchimateElement> idLookup, Map<String, ArchimateRelationship> idLookup2) {
        if (!e.hasAttribute(ID_ATTR) || !e.hasAttribute(SOURCE_ATTR) || !e.hasAttribute(TARGET_ATTR)) {
            log.error("Missing attributes in {}", e.getNodeName());
            return null;
        }
        // verify source and target elements have already been parsed
        String sourceId = null;
        String targetId = null;
        ArchimateElement source = idLookup.getOrDefault(e.getAttribute(SOURCE_ATTR), null);
        if (source == null) {
            ArchimateRelationship sourceRel = idLookup2.getOrDefault(e.getAttribute(SOURCE_ATTR), null);
            if (sourceRel == null) {
                log.error("Unknown source={}", e.getAttribute(SOURCE_ATTR));
                return null;
            }
            sourceId = sourceRel.getId();
        } else {
            sourceId = source.getId();
        }
        ArchimateElement target = idLookup.getOrDefault(e.getAttribute(TARGET_ATTR), null);
        if (target == null) {
            ArchimateRelationship targetRel = idLookup2.getOrDefault(e.getAttribute(TARGET_ATTR), null);
            if (targetRel == null) {
                log.error("Unknown target={}", e.getAttribute(TARGET_ATTR));
                return null;
            }
            targetId = targetRel.getId();
        } else {
            targetId = target.getId();
        }
        return ArchimateRelationship.builder()
                .id(e.getAttribute(ID_ATTR))
                .name(e.hasAttribute(NAME_ATTR) ? e.getAttribute(NAME_ATTR) : "")
                .sourceId(sourceId)
                .targetId(targetId)
                .type(type)
                .documentation(getDocumentation(e))
                .build();
    }

    private static String getDocumentation(Element e) {
        // elements use 'documentation', while model uses 'purpose' attribute for documentation
        String docTag = "documentation";
        if (e.getTagName().equals(MODEL_TAG)) {
            docTag = "purpose";
        }
        NodeList docElements = e.getElementsByTagName(docTag);
        if (docElements.getLength() == 1) {
            return docElements.item(0).getTextContent();
        }
        if (docElements.getLength() > 1) {
            log.error("Element with id={} has more than 1 documentation element!");
            return null;
        }
        return "";
    }


    private static boolean validateModel(Element model) {
        String archimateNs = model.getAttribute(ARCHIMATE_NS_ATTR);
        if (!archimateNs.equals(ARCHIMATE_NS_VAL)) {
            log.error("Unknown '{}' value: '{}'", ARCHIMATE_NS_ATTR, archimateNs);
        }
        if (!model.hasAttribute(NAME_ATTR) || !model.hasAttribute(ID_ATTR) || !model.hasAttribute(VERSION_ATTR)) {
            log.error("Missing one of attributes: 'name', 'id' or 'version'");
            return false;
        }
        return true;
    }

    private static boolean validateElement(Element element) {
        if (!element.hasAttribute(ID_ATTR) || !element.hasAttribute(TYPE_ATTR)) {
            log.error("Missing one of required attributes: '{}' or '{}'", ID_ATTR, TYPE_ATTR);
            return false;
        }
        return true;
    }

    private static boolean validateRelation(Element relation) {
        if (!relation.hasAttribute(ID_ATTR) || !relation.hasAttribute(TYPE_ATTR) ||
                !relation.hasAttribute(SOURCE_ATTR) || !relation.hasAttribute(TARGET_ATTR)
        ) {
            log.error("Missing one of attributes: 'id', 'xsi:type', 'source' or 'target'");
            return false;
        }
        return true;
    }

    private static boolean validateView(Element element) {
        if (!element.hasAttribute(ID_ATTR) || !element.hasAttribute(NAME_ATTR)) {
            log.error("Missing one of required attributes: '{}' or '{}'", ID_ATTR, NAME_ATTR);
            return false;
        }
        return true;
    }
}
