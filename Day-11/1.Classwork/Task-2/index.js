const fs = require('fs');
const path = require('path');
const os=require("os");
const http=require("http");
const url = require('url');




// const toMB=(bytes)=>(bytes/1024/1024).toFixed(2);




// console.log("Hello from index.js using Node.js!");
//  const fs=require("fs"); //FILE SYSTEM
// console.log(fs);

// const data=fs.readFileSync('./contacts.txt','utf8');
// console.log(data);



//READ MEATHOD

// const data=fs.readFile("./contact.txt",'utf8',(err,data)=>{
//     console.log("data drom file is:",data)
// });
// console.log(data);




//APPEND MEATHOD

// fs.appendFile('./contact.txt','console.log("Hello World");\n',(err)=>{
//     if (err) {
//     console.error("Error appending to file:", err);
//     return;
//   }
//   console.log('Data successfully appended to contact.txt');
// })







// //WRITE FILE

// fs.writeFile('test.txt', 'Name: Diwakar\nPhone: 1234567890', (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);
//     return;
//   }
//   console.log('File written successfully!');
// });

//FOR CREATING NEW FILE AND INSERTING DATA SET FOLDER NAME AND WRITE DATA..COMP WILL AUTOMETICALLY CREATE FOLDER.

//FS.WRITEFILE===FS.MKDIR for folder


//USER INPUT AND PATH METHOD->




// process.argv[];




// const content = process.argv[4];

// fs.writeFile('INTRO.txt', content, (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//         return;
//     }
//     console.log('File written successfully with content:', content);
// });






//path

// const projectpath=path.join(_dirname,folder)

// if(!fs.existsSync(projctpath)){
//     fs.mkdirSync(projectpath);
//     console.log(`folder `);
// }






// Create index.html

// Define project directory path
// const projectPath = path.join(__dirname, 'myProject');

// // Create the project folder if it doesn't exist
// if (!fs.existsSync(projectPath)) {
//   fs.mkdirSync(projectPath);
// }



// // File paths
// const htmlPath = path.join(projectPath, 'index.html');
// const cssPath = path.join(projectPath, 'style.css');
// const jsPath = path.join(projectPath, 'script.js');
// // Create files
// fs.writeFileSync(htmlPath, 'HI');
// fs.writeFileSync(cssPath, 'HI');
// fs.writeFileSync(jsPath, 'hi');

// console.log('✅ index.html, style.css, and script.js created in:', projectPath);






//http module

//dns resolution

//SERVER
// const myServer=http.createServer((req,res)=>{
//    const url=req.url;
//    console.log(url)
//    switch(url)
//    {
//     case"/":
//     res.end("hi")
//     break;
//     case"/about":
//     res.end("HI I AM DIWAKAR")
//     break;
//    }
// });

// const Port=9600;

// myServer.listen(Port,()=>{
//     console.log(`Server is running at ${Port}`)
// })



// const server = http.createServer((req, res) => {

//     console.log(url.parse(req.url,true))
//   const data = {
//     name: "Diwakar",
//     role: "Student",
//     skills: ["HTML", "CSS", "JavaScript"]
//   };

//   // Set header to tell client it's JSON
//   res.writeHead(200, { 'Content-Type': 'application/json' });

//   // Convert JS object to JSON string and send
//   res.end(JSON.stringify(data));
// });

// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });





// for sending files






