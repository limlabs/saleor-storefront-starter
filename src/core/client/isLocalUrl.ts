import NextLink from 'next/link';
import type { ComponentProps } from 'react';

type Url = ComponentProps<typeof NextLink>['href'];

export const isLocalUrl = (url: Url) => {
    if (typeof url === 'object') {
        return url.host == null && url.hostname == null;
    }
    const hasProtocol = /^[a-z]+:/i.test(url);
    return !hasProtocol;
}