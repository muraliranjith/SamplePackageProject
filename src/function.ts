import { userDetails } from "./types";


export function sayHello(params: userDetails) {
    if (params.age) {
        console.log(`your Age is: ${params.age} `);
    }
    if (params.name) {
        console.log(`your Name is: ${params.name} `);
    }
}