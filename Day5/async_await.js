const fetch = require("node-fetch");

async function fetchUsers(response){
    try{                         
        let data = await fetch("http://jsonplaceholder.typicode.com/users/");
        let users = await data.json();  
        response.render("userlist", {users: users});                      
    }catch(error){
        console.log(error);
    }
};

module.exports = fetchUsers;