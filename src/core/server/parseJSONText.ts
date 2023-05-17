

export function parseJSONText(data: JSONString | null | undefined): EditorJSObject | null {
    try {
        if (data) {
            return JSON.parse(data);
        }
    } catch { }
    return null;
};