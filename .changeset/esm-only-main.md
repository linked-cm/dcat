---
'@_linked/dcat': patch
---

`main` now points at `lib/esm/index.js`. It named `lib/index.js`, which the build has never produced, so any resolver that reads `main` instead of `exports` could not find the package. The unused `tsconfig-cjs.json` is removed, and a test checks the manifest's entry points against the build output.
