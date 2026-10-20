
import readline from "readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todos = []


const showMenu = () =>{
  console.log("\n1: Add a Task");
  console.log("2: View Tasks\n");
  console.log("3:Exist");

  rl.question("Choose an options :-" , handleInput)

  
}


const handleInput = (options)=>{
  if(options === "1"){
    rl.question("Enter the Task:" , (task) =>{
        todos.push(task);
        console.log("Task added" , task);
        showMenu()

    })
  }
  else if(options === "2"){
    console.log("\n Your Todo List");
    todos.forEach((task , index) =>{
        console.log(`${index + 1} . ${task}` );
        showMenu()
    })
    
  }else if(options === "3"){
    console.log("Good Bye");
    rl.close() ;
    
  }else{
    console.log("Invalid Options  . Please Try again" );
    showMenu();
    
  }
}

showMenu()



