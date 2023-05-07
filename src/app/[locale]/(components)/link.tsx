"use client";

import NextLink from "next/link";
import { useMemo } from "react";
import { useApp } from "@/core/client/useApp";
import { isLocalUrl } from "@/core/client/isLocalUrl";
import type { FC, ComponentProps } from "react";

type NextLinkProps = Omit<ComponentProps<typeof NextLink>, "locale">;

export interface LinkProps extends NextLinkProps {
  locale?: string;
  channel?: string;
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
    if (isLocalUrl(href)) {
      const hrefLocale = locale ?? params.locale;
      const hrefChannel = channel ?? params.channel;
      const prefix = [hrefLocale, hrefChannel]
        .flatMap((p) => p || [])
        .join("/");
      if (typeof href === "string") {
        return `/${prefix}${href}`;
      }
      return {
        ...href,
        pathname: `/${prefix}${href.pathname}`,
      };
    }
    return href;
  }, [params.locale, locale, channel, href]);

  return (
    <NextLink href={hrefWithLocale} {...props}>
      {children}
    </NextLink>
  );
};
