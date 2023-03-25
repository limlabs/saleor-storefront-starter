import { FC, PropsWithChildren } from 'react';

export const ProductGallery: FC<PropsWithChildren> = ({ children }) => {
	return <ul>{children}</ul>;
};
