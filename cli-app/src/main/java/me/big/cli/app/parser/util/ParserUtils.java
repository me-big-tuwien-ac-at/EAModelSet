package me.big.cli.app.parser.util;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.xml.sax.SAXException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.File;
import java.io.IOException;

public final class ParserUtils {

    private ParserUtils() {}

    public static Document setupDocument(File file) {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        try {
            // SonarLint S2755
            factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
            DocumentBuilder db = factory.newDocumentBuilder();
            Document doc = db.parse(file);
            doc.getDocumentElement().normalize();
            return doc;
        } catch (IOException | SAXException | ParserConfigurationException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Element getDirectChild(Element parent, String name) {
        for (Node child = parent.getFirstChild(); child != null; child = child.getNextSibling()) {
            if (child instanceof Element element && name.equals(child.getNodeName())) {
                return element;
            }
        }
        return null;
    }

    public static String convertType(String type) {
        type = type.strip();
        if (type.startsWith("archimate:")) {
            type = type.substring(10);
        }
        // handle naming of concepts in deprecated/older versions
        if (type.equals("InfrastructureService")) {
            type = "TechnologyService";
        } else if (type.equals("InfrastructureInterface")) {
            type = "TechnologyInterface";
        } else if (type.equals("InfrastructureFunction")) {
            type = "TechnologyFunction";
        } else if (type.equals("Network")) {
            type = "CommunicationNetwork";
        } else if (type.equals("CommunicationPath")) {
            type = "Path";
        }
        return type;
    }

    public static String typeToLayer(String type) {
        if (isMotivationElement(type)) {
            return "motivation";
        } else if (isStrategyElement(type)) {
            return "strategy";
        } else if (isBusinessElement(type)) {
            return "business";
        } else if (isApplicationElement(type)) {
            return "application";
        } else if (isTechnologyElement(type)) {
            return "technology";
        } else if (isImplementationMigrationElement(type)) {
            return "implementation_migration";
        } else if (isOtherElement(type)) {
            return "other";
        } else {
            return "unknown";
        }
    }

    public static boolean isElement(String type) {
        return isMotivationElement(type) || isStrategyElement(type) || isBusinessElement(type)
                || isApplicationElement(type) || isTechnologyElement(type) || isImplementationMigrationElement(type)
                || isOtherElement(type);
    }

    public static boolean isMotivationElement(String type) {
        return type.equals("Stakeholder") || type.equals("Driver") || type.equals("Assessment")
                || type.equals("Goal") || type.equals("Outcome") || type.equals("Principle")
                || type.equals("Requirement") || type.equals("Constraint") || type.equals("Meaning")
                || type.equals("Value");
    }

    public static boolean isStrategyElement(String type) {
        return type.equals("Resource") || type.equals("Capability") || type.equals("ValueStream")
                || type.equals("CourseOfAction");
    }

    public static boolean isBusinessElement(String type) {
        return type.startsWith("Business") || type.equals("Contract") || type.equals("Representation")
                || type.equals("Product");
    }

    public static boolean isApplicationElement(String type) {
        return type.startsWith("Application") || type.equals("DataObject");
    }

    public static boolean isTechnologyElement(String type) {
        return type.startsWith("Technology") || type.equals("Node") || type.equals("Device")
                || type.equals("SystemSoftware") || type.equals("Path") || type.equals("CommunicationNetwork")
                || type.equals("Artifact") || type.equals("Equipment") || type.equals("Facility")
                || type.equals("DistributionNetwork") || type.equals("Material");
    }

    public static boolean isImplementationMigrationElement(String type) {
        return type.equals("WorkPackage") || type.equals("Deliverable") || type.equals("ImplementationEvent")
                || type.equals("Plateau") || type.equals("Gap");
    }

    public static boolean isOtherElement(String type) {
        return type.equals("Grouping") || type.equals("Location") || type.equals("Junction")
                // for older archimate models (e.g. 3.1.x)
                || type.equals("AndJunction") || type.equals("OrJunction");
    }

    public static boolean isRelationship(String type) {
        return type.endsWith("Relationship");
    }

    public static boolean isDiagramModel(String type) {
        return type.equals("ArchimateDiagramModel");
    }

    public static boolean isSketchModel(String type) {
        return type.equals("SketchModel");
    }

}
