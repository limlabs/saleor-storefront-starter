import { useMemo } from 'react';

type Translatable = {
	translation: ProductTranslation | null;
} & { [K in keyof ProductTranslation]?: ProductTranslation[K] };

export function useProductTranslation({ translation, name, description }: Translatable) {
	return useMemo(
		() => {
			if (translation) {
				return translation;
			}
			return { name, description };
		},
		[ translation, name, description ]
	);
}
