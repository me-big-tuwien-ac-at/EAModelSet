package me.big.dataset.tools.parser.util;

public final class ParserConstants {

    private ParserConstants() { }

    public static final class Archimate {
        private Archimate() {}

        public static final String FILE_EXTENSION = "archimate";
        public static final String MODEL_TAG = "archimate:model";
        public static final String ELEMENT_TAG = "element";
        public static final String ID_ATTR = "id";
        public static final String NAME_ATTR = "name";
        public static final String TYPE_ATTR = "xsi:type";
        public static final String SOURCE_ATTR = "source";
        public static final String TARGET_ATTR = "target";
        public static final String VERSION_ATTR = "version";
        public static final String VIEWPOINT_ATTR = "viewpoint";
        public static final String ARCHIMATE_NS_ATTR = "xmlns:archimate";
        public static final String ARCHIMATE_NS_VAL = "http://www.archimatetool.com/archimate";
    }

    public static final class Xml {
        private Xml() {}

        public static final String FILE_EXTENSION = "xml";
        public static final String MODEL_TAG = "model";
        public static final String ELEMENT_TAG = "element";
        public static final String RELATIONSHIP_TAG = "relationship";
        public static final String VIEW_TAG = "view";
        public static final String NAME_TAG = "name";
        public static final String LABEL_TAG = "label";
        public static final String ID_ATTR = "identifier";
        public static final String TYPE_ATTR = "xsi:type";
        public static final String NAME_ATTR = "name";
        public static final String LANGUAGE_ATTR = "xml:lang";
        public static final String SOURCE_ATTR = "source";
        public static final String TARGET_ATTR = "target";
        public static final String VIEWPOINT_ATTR = "viewpoint";
        public static final String ARCHIMATE_NS_ATTR = "xmlns";
        public static final String ARCHIMATE_NS_VAL = "http://www.opengroup.org/xsd/archimate/3.0/";
    }
}
