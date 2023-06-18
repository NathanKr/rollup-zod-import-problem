<h2>0.4 (18 June 2023)</h2>
improve the solution from 0.3 to be fit to production

remove from rollup.config.js

```
  external: ['zod'] 
```

looking at <a href='https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency'>The warning docs</a> you can see that beside 'external' you can use @rollup/plugin-node-resolve

so 

```
npm i -D @rollup/plugin-node-resolve
```

now add to rollup.config.js

```
...
import { nodeResolve } from '@rollup/plugin-node-resolve';
....
const plugins = [typescript(),nodeResolve()];
....

```

invoke
```
npm run build
npm run dev
```

THe following should work clean and dist/index.js has zod code , thus ready for production

<h2>0.3 (18 June 2023)</h2>
<h3>Introduction</h3>
use rollup to build and run index.ts with import zod

<h3>Motivation</h3>
I have a browser extension typescript project with rollup . I use rollup because there are few entry points(poup,content,background) . I have used @rollup/plugin-typescript before <a href='https://github.com/NathanKr/rollup-plugin-complex-playground'>rollup-plugin-complex-playground</a> and it is working but here i import zod and 

<h3>Setup</h3>

install rollup and its plugin

```
npm i -D rollup @rollup/plugin-typescript tslib
```

create rollup.config.js

```
import typescript from "@rollup/plugin-typescript";

const DIST_DIRECTORY = "dist";
const format = "esm";
const plugins = [typescript()];

export default {
  input: "src/index.ts",
  output: {
    dir: DIST_DIRECTORY,
    format,
  },
  plugins,
};


```

remove the scripts from package.json and use instead

```
    "build": "rollup -c -w",
    "dev": "node --watch dist/index.js",
    "start": "node  dist/index.js"
```


invoke build script

```
npm run build
```
You will get and error 

```
bundles src/index.ts → dist...
(!) Unresolved dependencies
https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency
zod (imported by "src/index.ts")
```

solution 1 :

add to rollup.config.js

```
  external: ['zod'] 
```

now it is compililing via build and you can run it via dev or start

<h3>solution limitation</h3>
you will see 

```
import { z } from 'zod';
```
looking in dist/index.js. thus node_modules is required and this may be solution for development not production 


<h2>0.2 (18 June 2023)</h2>
<h3>Motivation</h3>
using index.js is easy but what happen if we change index extension from .js to .ts

<h3>Setup</h3>

add to package.json
```
    "build": "tsc src/index.ts"
```
run

```
npm run build
```
This is issue a lot of error about zod

<h3>Possible solution</h3>
use tsconfig.js as done in <a href='https://github.com/NathanKr/node-typescript-setup-tsconfig-ts-node'>node-typescript-setup-tsconfig-ts-node</a>. But i will not use this solution because i want to solve this using rollup (check ver 0.2 motivation)

<h2>0.1 (18 June 2023)</h2>
<h3>Motivation</h3>
Given a simple one file index.js project which import zod you have a problem

<h3>Initial setup</h3>
from the command line 
```
npm init -y
npm i zod
```

create index.js file
```
import {z} from 'zod';
console.log('index.js is starting ...');

const userSchema = z.object({name : z.string(),age : z.number()})

const res = userSchema.safeParse({name:"John Doe" , age:23});
console.log(res);
```

create a dev script
```
    "dev": "node --watch src/index.js"
```

run the script
```
npm run dev
```

You will get an error 'SyntaxError: Cannot use import statement outside a module'. You can fix the error by adding to package.json

```
  "type":"module",
```

