"use client";

import NextLink from "next/link";
import { useMemo } from "react";
import { useApp } from "@/core/client/useApp";
import type { FC, ComponentProps } from "react";

type NextLinkProps = Omit<ComponentProps<typeof NextLink>, "locale">;

export interface LinkProps extends NextLinkProps {
  locale?: string | false;
  channel?: string | false;
}

//TODO: maybe add options to hide the default locale and channel
export const Link: FC<LinkProps> = ({
  children,
  href,
  locale,
  channel,
  ...props
}) => {
  const { params } = useApp();
  const hrefWithLocale = useMemo(() => {
    const hrefLocale = locale ?? params.locale;
    const hrefChannel = channel ?? 'default-channel';

    if (typeof href === "string") {
      return `/${hrefLocale}/${hrefChannel}${href}`;
    }
    return {
      ...href,
      pathname: `/${hrefLocale}/${hrefChannel}${href.pathname}`,
    };

  }, [params.locale, locale, channel, href]);

  return (
    <NextLink href={hrefWithLocale} {...props}>
      {children}
    </NextLink>
  );
};
