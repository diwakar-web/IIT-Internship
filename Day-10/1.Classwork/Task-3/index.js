const fs = require('fs');




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