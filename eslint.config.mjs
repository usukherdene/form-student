import path from "node:path";
import Components from "eslint-plugin-react/lib/util/Components.js";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Use the same component detection as react/no-multi-comp.
const componentFilename = {
  meta: {
    schema: [],
    messages: {
      mismatch: "Use {{name}} as the filename for this component.",
      anonymous: "Give the component a name that matches its filename.",
    },
  },
};

export default eslintConfig;
