# Zoi Rocks Frontend

## Naming Convention

- PascalCase -> class, interface, type, enum

  Example: `MyClass`, `MyInterface`, `MyEnum`, `MyTypeParameter` and `MyComponent`.

- camelCase -> variable, parameter, function, method, property

  Example: `myVariable`, `myParameter`, `myFunction`, `myMethod`, `myProperty`, and `myModuleAlias`.

- CONSTANT_CASE -> global constant values, enum value

  Example: `MY_CONSTANT_VALUE` and `MY_ENUM_VALUE`

## File naming

Should use `ke-bab` style

Example: `list-user.usecase.ts`

## Interface Naming

✅ IUserRepository

❌ UserRepositoryInterface

## Repository Naming

✅ `getUserById`

❌ `findUserById`

✅ `listUsers`

❌ `getAllUsers`

## Import/ Export

**NOTE** : do not use `export default`

Every folder should have index.ts file to use it as importing

```TypeScript
export * from './pages'
```

Import should group as following order:

- Standard libray first

```TypeScript
import React, { useState, useEffect, useEffect } from "react";
```

- Third-party import

```TypeScript
import { Button, Input, Select, } from "antd";
```

- Local Import

```Typescript
import { someThing } from "../../thing"
import { ISomeInterface } from "./hra_types";
```

## `Prettier` configuration :

```Typescript
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "jsxBracketSameLine": true
}
```

## `ESLint` configuration

```TypeScript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules", "*.config.ts", "*.d.ts"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: ["eslint:recommended", "google", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "require-jsdoc": "off",
  },
};
```

## `Error Boundary` configuration:

- Define a hook:

```Typescript
  import { useErrorBoundary } from "react-error-boundary";
  const {showBoundary} = useErrorBoundary();
```

- Catch error with showBoundary(error) to show Error Page.
## Commit message format

This project uses `commitlint` to check if your commit messages meet the [conventional commit format](https://conventionalcommits.org).

Commit message must follow this pattern:

```sh
type(scope?): subject  #scope is optional
```

### Type

The type of change being made in the commit.

Common types according to [commitlint-config-conventional (based on the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) can be:

- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
- `ci`: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs).
- `chore`: add something without touching production code (Eg: update npm dependencies).
- `docs`: Documentation only changes.
- `feat`: A new feature.
- `fix`: A bug fix.
- `perf`: A code change that improves performance.
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `revert`: Reverts a previous commit.
- `style`: Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons, etc).
- `test`: Adding missing tests or correcting existing tests.

### Scope (optional)

The scope of the changes, such as the name of a module or component that was changed.

A scope can be useful for providing additional contextual information and is contained within parenthesis.

### Subject

A brief summary of the changes being made in the commit.

The subject should be a short, imperative sentence that describes what the commit does.

It should **start with a lowercase verb and not end with a period**.

### Examples

```text
chore: run tests on travis ci
```

```text
fix(server): send cors headers
```

```text
feat: add comment section in blog
```
