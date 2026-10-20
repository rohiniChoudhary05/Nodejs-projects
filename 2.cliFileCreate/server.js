 import  fs from "fs"

 import readline from "readline"

 const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
 })



const fileCreate  =() =>{
   rl.question("Enter Your File :-" , (fileName) =>{
    rl.question("Enter the Content for the File:-" ,(data) =>{
        fs.writeFile(`${fileName}.txt` , data ,(err) =>{
         if(err) {
            console.log("Error Creating File:-" , err.message);
            
         }else{
         console.log("File created successfully:", fileName);

         }
        })
    })
   })
}

fileCreate()











