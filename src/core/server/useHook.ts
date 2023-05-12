import { use } from "react";

export const useHook = <T>(hookName: string, promise: Promise<T>) => {
    try {
        return use(promise);
    } catch (error) {
        if (error instanceof TypeError) {
            throw new Error(`${hookName} is not callable within an async component`)
        }
        throw error;
    }
}