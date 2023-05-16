import type { CodegenConfig } from "@graphql-codegen/cli";
import { env } from "./next.config";

const schema = (env as NonNullable<typeof env>).SALEOR_ENDPOINT;

const config: CodegenConfig = {
  schema,
  documents: ['src/**/*.graphql'],
  generates: {
    './src/gql/sdk.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
        {
          add: {
            /**
            * patches issue with generated types
            * https://github.com/dotansimha/graphql-code-generator/issues/9046
            * https://github.com/jasonkuhrt/graphql-request/issues/467
            */
            content: '// @ts-nocheck',
          }
        }
      ],
      config: {
        documentMode: 'string',
        fragmentVariablePrefix: 'frag',
        interfacePrefix: "I",
        typesPrefix: "I",
        scalars: {
          JSONString: "JSONString",
          JSON: "Record<string, any>",
          UUID: "string",
          Metadata: "Record<string, string>",
          DateTime: "string",
        },
        dedupeOperationSuffix: true,
        enumsAsTypes: true,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;