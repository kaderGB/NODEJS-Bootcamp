import {URL} from "url";

const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash") ;
console.log(myURL.host);
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.searchParams);
console.log(myURL.href);

//Both work at the same 
console.log(myURL.toString());
console.log(myURL.toJSON());