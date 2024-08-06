"""
EA ModelSet CLI
"""

__app_name__ = "eamodelset"
__version__ = "0.1.0"

(
    SUCCESS, 
    FILE_ERROR, 
    DIR_ERROR,
    DATA_READ_ERROR,
    DATA_WRITE_ERROR,
    JSON_ERROR,
    ID_ERROR,
    PARSER_ERROR
) = range(8)

ERRORS = {
    FILE_ERROR: "config file error",
    DIR_ERROR: "config directory error",
    DATA_READ_ERROR: "dataset read error",
    DATA_WRITE_ERROR: "dataset write error",
    ID_ERROR: "model id error",
    PARSER_ERROR: "parser error"
}