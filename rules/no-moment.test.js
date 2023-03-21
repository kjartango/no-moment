const rule = require("./no-moment");
const { RuleTester } = require("eslint");
import { test } from "vitest";

const ruleTester = new RuleTester({
  parserOptions: { sourceType: "module", ecmaVersion: 2020 },
});

test("no moment library", () => {
  ruleTester.run("no-moment", rule, {
    valid: [
      {
        code: "const foo = 1;",
      },
      {
        code: "import someOtherLib from 'some-other-lib';",
      },
      {
        code: "require('some-other-lib');",
      },
    ],
    invalid: [
      {
        code: "import moment from 'moment';",
        errors: [{ message: "Do not import the moment library" }],
      },
      {
        code: "const moment = require('moment');",
        errors: [{ message: "Do not use the moment.js library." }],
      },
    ],
  });
});
