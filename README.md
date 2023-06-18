<h2>Motivation</h2>
Given a simple one file index.js project which import zod you have a problem

<h2>Initial setup</h2>
from the command line 
```
npm init -y
npm i zod
```

create index.js file
```
import z from 'zod';
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

