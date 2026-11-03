//Functions - declaration, expression, arrow
greetUser("John","Las-Vegas")
function greetUser(name, title){
    
    console.log("Hello ", name);
    console.log("Welcome to ", title);
    console.log("I'm very happy to se you!");
    console.log('---------------------------');
    
}
greetUser("Ben","Florida")
greetUser("Jack","New York")
greetUser("Noah","Tokyo")


//Function - =>
const doHomework=(assgnmentNumber, title, hours)=>{
    console.log(`I did ${assgnmentNumber}assignment`);
    console.log(`That was ${title} and i spent ${hours} hours`);
    console.log('---------------');
    
    
}
doHomework("2nd ", "Reding", 4)
doHomework("3nd ", "Phusics", 6)