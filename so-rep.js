var user_so_ids_array = ["184367", // stefan
                        "731385", // joan
                        "1972279",// diego 
                        "225503",  // jose
                        "644592", // aleix
                        "62368", // victor
                        "2630039", // fran
                        "2096817", // adam
                        "595245", // luciano
                        "972850"  // jordi
                        ];
var so_user_ids = "";
for (var i = 0, len = user_so_ids_array.length; i<len; i++){
    so_user_ids += user_so_ids_array[i] + ";";
}
var addr = "https://api.stackexchange.com/2.2/users/" + so_user_ids.slice(0, -1) + "?order=desc&sort=reputation&site=stackoverflow"

function Get(whateverUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",whateverUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var so_users = JSON.parse(Get(addr));
var total_so_reputation = 0;
for (var i = 0; i < so_users.items.length; i++) {
    console.log(so_users.items[i].reputation + " - " + so_users.items[i].display_name);
    total_so_reputation += so_users.items[i].reputation;
}
console.log(total_so_reputation)

//var targetElement = document.getElementById('so_result');
//targetElement.innerHTML = total_so_reputation;

document.write("<h1>Rep: " + total_so_reputation + "</h1>")