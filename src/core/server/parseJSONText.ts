

export function parseJSONText(data: JSONString): EditorJSObject | null {
    return JSON.parse(data);
};