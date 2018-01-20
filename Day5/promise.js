const fetch = require("node-fetch");

function fetchUsers(response){
    var promise = fetch("http://jsonplaceholder.typicode.com/users/"); 
    promise.then(data => data.json())
                        .then(users => {                                
                            response.render("userlist", {users: users});                                
                        })
                        .catch((error) => {console.error(error)}); 
}

module.exports = fetchUsers;
