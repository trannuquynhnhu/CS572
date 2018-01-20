const fetch = require("node-fetch");
const Rx = require("@reactivex/rxjs");

function fetchUsers(response){
    var promise = fetch("http://jsonplaceholder.typicode.com/users/");
    Rx.Observable.fromPromise(promise)
                            .subscribe((data) => {
                                Rx.Observable.fromPromise(data.json())
                                            .subscribe((users) => {
                                                response.render("userlist", {users: users});
                                            })
                            });
}

module.exports = fetchUsers;
   