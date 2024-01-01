import path from "path";

console.log(path.basename("c:\\nodejs\\app.js"));
console.log(path.basename("c:\\nodejs\\app.html",".html"));
console.log(path.extname("c:\\nodejs\\app.html"));
console.log(path.dirname("c:\\nodejs\\courses\\app.html"));
console.log(path.join("c:","nodejs","app.html"));


//GO UP A LEVEL
console.log(path.join("c:","nodejs","app.html",".."));
console.log(path.normalize("c:\\nodejs\\courses\\github"));


//Parse

console.log(path.parse("c:\\nodejs\\app\\node.js"));
console.log(path.parse("c:\\nodejs\\app\\node.js").name);
console.log(path.parse("c:\\nodejs\\app\\node.js").ext);
console.log(path.parse("c:\\nodejs\\app\\node.js").base);

