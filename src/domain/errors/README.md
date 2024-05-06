## 📝 Folder description

- Description: Define custom error class here (error thrown from model).
- File name: `<error-name>.error.ts`
- Steps to create an error:
  1. Define your custom error class to extend Error
  2. Done. 👏

## 💁 Example

#### Description: Define invalid user props error.

#### File name: `invalid-user-props.error.ts`

```TypeScript
export class InvalidUserPropsError extends Error {}
```
