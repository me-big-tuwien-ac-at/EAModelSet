package me.big.dataset.tools.util;

import java.io.File;
import java.util.List;

public final class DatasetUtils {

    public static final String ARCHIMATE_EXT = "archimate";
    public static final String XML_EXT = "xml";
    public static final String DATASET_PATH = "../../dataset/";

    private DatasetUtils() { }

    public static List<File> getIndividualJsonFiles() {
        return FileUtils.getFiles(DATASET_PATH + "individual-models/", "json");
    }

    public static List<File> getRawDataFiles() {
        return FileUtils.mergeFiles(getArchimateFiles(), getXmlFiles());
    }

    public static List<File> getRawDataTestFiles() {
        List<File> files1 = FileUtils.getFiles("../../raw-data/test/", ARCHIMATE_EXT);
        List<File> files2 = FileUtils.getFiles("../../raw-data/test/", XML_EXT);
        return FileUtils.mergeFiles(files1, files2);
    }

    public static List<File> getArchimateFiles() {
        List<File> files1 = FileUtils.getFiles("../../raw-data/github/archimate/", ARCHIMATE_EXT);
        List<File> files2 = FileUtils.getFiles("../../raw-data/github/grafico/", ARCHIMATE_EXT);
        return FileUtils.mergeFiles(files1, files2);
    }

    public static List<File> getXmlFiles() {
        List<File> files1 = FileUtils.getFiles("../../raw-data/github/xml/", XML_EXT);
        List<File> files2 = FileUtils.getFiles("../../raw-data/github/grafico/", XML_EXT);
        List<File> files3 = FileUtils.getFiles("../../raw-data/genmymodel/", XML_EXT);
        return FileUtils.mergeFiles(FileUtils.mergeFiles(files1, files2), files3);
    }
}
