

export function parseJSONText(data: JSONString): EditorJSObject | null {
    try {
        return JSON.parse(data);
    } catch {
        return null;
    }
};