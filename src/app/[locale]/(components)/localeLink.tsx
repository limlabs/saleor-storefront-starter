'use client';

import Link from "next/link";
import { useMemo } from "react";
import { useApp } from "@/core/client/useApp";
import type { FC, ComponentProps } from "react";

export type LocaleLinkProps = ComponentProps<typeof Link>;

export const LocaleLink: FC<LocaleLinkProps> = ({
    children,
    href,
    ...props
}) => {
    const {params} = useApp();
    const hrefWithLocale = useMemo(()=>{
        if(typeof href === 'string' ){
            return `/${params.locale}${href}`;
        }
        return {
            ...href,
            pathname: `/${params.locale}${href.pathname}`
        };
    }, [params.locale, href]);

    return <Link href={hrefWithLocale} {...props}>{children}</Link>
};