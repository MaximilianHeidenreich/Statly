/**
 * A representation of a stored room.
 * This does not include any state like connections.
 */
export interface Room {
    pages: Page[]
}

/**
 * A single page which can be used to display information or collect data.
 */
export interface Page {
    type: PageType
}

export enum PageType {
    TEXT_DISPLAY,
    IMAGE_DISPLAY,
    // VIDEO_DISPLAY,
    CATEGORY_SELECT,
    RANGE_SELECT,
}

export enum DataInput {
    TEXT,
    NUMBER,
    SLIDER,
    // todo: RANGE,
    SELECT,
}