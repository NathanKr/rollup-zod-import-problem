import {z} from 'zod';
console.log('index.js is starting ...');

const userSchema = z.object({name : z.string(),age : z.number()})

const res = userSchema.safeParse({name:"John Doe" , age:23});
console.log(res);