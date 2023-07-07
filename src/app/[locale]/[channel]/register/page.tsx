import type { Locale } from "@/locale-config";
import type { Channel } from "@/channel-config";
import { getLanguageCode } from "@/core/server/locale";
import TextInput from "@/app/daisyui/text-input";
interface RegisterProps {
  params: {
    locale: Locale;
    channel: Channel;
  };
}

export default function RegisterPage({
  params: { channel, locale },
}: RegisterProps) {
  const languageCode = getLanguageCode(locale);

  return (
    <main className="h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1>Create A Free Account.</h1>
        <TextInput
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        ></TextInput>
      </div>
    </main>
  );
}
