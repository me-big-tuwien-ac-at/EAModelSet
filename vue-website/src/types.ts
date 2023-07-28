// TODO: declare types for common interfaces (e.g. dataset, model, modelinfo, stats...)

export interface ModelInfo {
    id: string,
    name: string,
    source: string,
    repository: string,
    license: string,
    language: string,
    formats: string[],
    tags: string[],
    duplicateCount: number,
    elementCount: number,
    relationshipCount: number,
    viewCount: number
}
