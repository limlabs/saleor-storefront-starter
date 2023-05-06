import { cache } from 'react';
import { dictionaries } from '@/i18n-dictionaries';
import type { Locale } from '@/i18n-config';

export const getI18N = cache(async (locale: Locale) => {
    const translations = await dictionaries[locale]?.();
    return (path: string) => {
        const pathParts = path.split('.');
        let prop = pathParts.pop();
        let namespace = translations;

        const error = `(${pathParts.join('.')}.${prop})`;

        for (let part of pathParts) {
            namespace = namespace?.[part];
            if (namespace !== undefined) continue;
            return error;
        }
        return namespace[prop as string] ?? error;
    }
});
