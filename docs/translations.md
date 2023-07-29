# Saleor Storefront Translations

The **Saleor Storefront Starter** uses NextJS with the App router for server-side rendering of the UI. This means that some components are rendered **server side** and others will be rendered **client side**. The **Saleor API** also provides translation information for some of the entities that can be queried. 

The setup used by the starter project to handle each of these cases is described in this document. 

## Setup

### Supported Languages
The supported languages for the application must be listed in the *src/locale-config.ts* file. The configuration object has the following structure

```ts
export const localeConfig = {
  defaultLocale: "en-us", 
  locales: {
    // <locale>: <UI Display label>
    "en-us": "English 🇺🇸",
    "es-mx": "Español 🇲🇽",
    // ...specify additional locales
  },
} as const;
```

### Language Route Selection

The server will use the language that is specified by the request URL as long as it is supported. If the language is not present or supported then the value of **defaultLocale** will be used.

Additionally, we can add logic to identify a user's region or use cookies to store preferences should we wish to. 

*src/middleware.ts*
```ts
// ...
/*
    change this function's implementation to add user locale detection
*/
function getLocale(request: NextRequest) {
    return defaultLocale;
}
// ...
```

### Defining Translation Dictionaries 

For every *locale* key defined in the **localeConfig** file, there must be a **\<locale>.json** file defined in */src/dictionaries/**

These dictionaries will be made available to the server-side components via the loader defined in *src/translation-dictionaries.ts*

```ts
import { localeConfig } from "./locale-config";;

export const dictionaries = Object.fromEntries(
    Object.keys(localeConfig.locales).map(
        (key) => [key, async () => (await import(`@/dictionaries/${key}.json`)).default]));
```

#### Dictionary Schema

The structure of a *locale dictionary* is a simple object with key-value pairs.

en-us.json
```JSON
{
    "welcome": "Welcome to the Saleor Starter"
}
```

It is possible to group several translations by nesting objects as well.

en-us.json
```JSON
{
    "Home": {
        "welcome": "Welcome to the saleor Starter",
        "subText": "We hope you find what you need",
    }
}
```

## Serve-Side Components

The **locale** information for each NextJS top-level **Server Side Component** (*SSC*), such as layouts and pages, is made available as part of its props 

```tsx
export default async function RootLayout({params}:PropsWithChildren<{
    params: {
        locale: Locale;
        channel: string;
    };
}>){
    //...
}
```
 **Locale** is a type that holds all locale keys from the *localeConfig.locale* object. This typed string value can be used. It is defined in the */src/locale-config.ts* file

### Accessing Translations (non-async components)

To get the translation in a **non-async** server-side component, we make use of **useTranslations**

*"@/core/server/useTranslations"*
```ts
useTranslations(locale?: Locale): (path: string) => string|{[string]: string}
```

This hooks requires the language *locale key* in order to get the appropriate language dictionary. This key is easy to get for those top-level SSCs, but it can become a problem for nested SSCs. Possible approaches include passing the locale information as part of the props, or to use the *AsyncLocalStorage* implemented by NextJS 13 and made available through the [*cache* function](https://prismic.io/blog/advanced-nextjs-server-context)


To facilitate getting the locale value in nested SSCs, it is recommended to wrap the top-level SSCs with the Higher-Order-Component (HOC) *withTranslations* that is defined in *src/core/server/locale.ts*

```ts
export default withTranslations<HomePageProps>(function HomePage() {
    const t = useTranslations();
    ///...
}
```

### Accessing Translations (async components)

NextJS allows us to make DB and other async calls that require the component to be defined as *async*. Due to technical limitations, it is not possible to use the hook *useTranslations* under this circumstance. The solution to this problem is to make use of *getTranslations* defined in *src/core/server/getTranslations.ts*

```ts
export default withTranslations<PageProps>(async function AllProductsPage() {
    const t = await getTranslations();
    //...
}
```

### Saleor API Translations

The Saleor API can provide translations for some entity properties. The translations object may be null if there are no values for the specific data requested. 

An example GraphQL query for requesting **Products**
```gql
fragment GalleryProductFragment on Product {
  id
  slug
  name
  description
  translation(languageCode: $languageCode) {
    name
    description
  }
}
```

The *$languageCode* value is required to be an all-caps ISO format language code (e.g. EN_US). Although there is no standard for defining the *locale* value in the [localeConfig](#supported-languages), we have adopted a \<language>-\<country-code> format (e.g. en-us). A helper function was defined to translate this format to the required Saleor API standard.

*src/core/server/locale.ts
```ts
function getLanguageCode(locale: Locale): ILanguageCodeEnum
```

The product data is defined in the *Saleor Dashboard* with a base language which will be the values returned by the *name* and *description* properties of **Product**. If the product has translation values for the requested locale, then those will be part of the *translation* property of the returned data. This make it possible to use a default fallback language in case translations are not available, but as-is, will require some complex logic and condition to identify existing translations for each property. 

A proposed solution to this problem is to make use of hooks that will create a new Saleor entity object that will prefer to use the translation values if available, and fallback to the default value if translations are not available. There are experimental implementations using this approach for the **Product** and **Menu** entities.

*src/core/client/useProductTranslation.tsx*
```ts
function useProductTranslation(product: Translatable)
```

*src/core/server/getMenuTranslation.ts*
```ts
function getMenuTranslation<T extends IMenuItemFragment>(item: T)
```

Note that one is defined in core/client and the other is in core/server. There is no technical reason for this inconsistency since both could be executed safely on the server or client side. 

## Client-Side Components

Keeping the bulk of the dictionary information on the server helps reduce bandwidth requirements and improves load times, but at some point translation data will need to be used by *client-side* components.

### Client Side Translation Type Safety
 In an effort to standardize and provide type safety, a **Translated Function Component** (*TFC*) type was defined. This type is essentially a Function Component (FC) type with the added prop *t* that is typed with the string translations it needs.

@/core/server/useTranslationValues
```ts

type TranslationsDictionary<K extends string> = { [k in K]: string };

interface TranslationsProp<K extends string> {
  t: TranslationsDictionary<K>;
}

export type TFC<P, K extends string> = FC<P & TranslationsProp<K>>;
```

Any client-side component that will include translation information can be defined as a *TFC* rather than a *FC* and this will allow it provide type safety for the translation values

```ts
export const SearchFilter: TFC<
  SearchFilterProps,
  SearchFilterTranslationKeys
> = ({ filter, t }) => {
    //...
}
```

The first generic type is the normal component props type and the second value is the list of string keys that must be present in the translations dictionary object *t*.

The list of values required **must** be defined in a separate file due to technical limitations imposed by React. Any module using 'use client' can only export components and no properties can be accessed from them. 

To work around this limitation, the translations key list is defined in */src/app/translations/\**

/src/app/translations/searchFilter.ts
```ts
export const searchFilterTranslationKeys = [
    "price range",
    "is available",
    "search",
    "filter",
    "apply",
] as const;

export type SearchFilterTranslationKeys = typeof searchFilterTranslationKeys[number];
```

### Bundling Translations for Client Side

The dictionaries are primarily located on the server side, and a client-side component may require many translation values. The best way to pass the values is in a single translation property as the alternative would be to pass as individual props. 

To get a bundle of translation values we can make use of the *useTranslationValues* hook.

*src/core/server/useTranslationValues.ts*
```ts
export const useTranslationValues = <Keys extends string>(
  translationKeys: readonly Keys[],
  namespace?: string,
) => { 
    //...
}
```
Arguments:
- *translationKeys*: an array of key values to get from the dictionary 
- *namespace*: a dot-separated path that describes the location of the keys. This path is relative to the [dictionary schema](#dictionary-schema) that was defined.

Example usage:
```ts
 const searchFilterTranslations = useTranslationValues(
    searchFilterTranslationKeys,
    "component"
  );
```

If a translation value is not found in the locale dictionary then the output will be in the form of "(path.to.translation.value)". 

## Navigation

The *locale* is defined by the request route along with the *channel* of the storefront. The path has the pattern /[locale]/[channel]/\<path>. When navigating, it is required for the client-side to be aware of what the locale and channel values are so they may persist from page-request to page-request. It is possible to parse these values from *window.location*, but this logic is better placed in a dedicated module that can work automatically with the links. 


### App Provider
The **AppProvider** has the role of holding the *locale* and *channel* information and making it available to all client-side components that need it. Its definition is located in */src/core/client/useApp.tsx*

### Link Component

A custom **Link** component has been defined in */src/[locale]/(components)/link.tsx* that makes use of the AppProvider context information to provide the correct locale and channel information for navigation. It uses the NextJS \<Link> component as a base and adds the option to override the *locale* or *channel*. If no locale or channel props are provided, then it will keep the current values.

```tsx
<Link locale="fr-fr" channel="default-channel">

```


## Notes
- The Salero API entity translation bundling hooks/functions could use some standardization and simplification. 
    - It may be untenable to maintain as it requires each storefront to customize them 
    - There are many entities that each will require their own hook
- Using a special type for client-side components and having to define lists of keys may not be optimal and too problematic for components that require very few values to be passed. I couldn't find a simple and clean solution to this. 


