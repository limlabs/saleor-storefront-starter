import { AppProvider } from "@/core/client/useApp";
import { Translation } from "../[locale]/(components)/(translation)";

import { localeConfig } from "@/locale-config";
import { channelConfig } from "@/channel-config";

export default function TranslationsTest() {
  return (
    <AppProvider
      value={{
        params: {
          locale: "en-us",
          channel: "default-channel",
        },
        localeConfig: localeConfig,
        channelConfig: channelConfig,
      }}
    >
      <div>
        <Translation t="metadata.siteTitle" />
      </div>
    </AppProvider>
  );
}
