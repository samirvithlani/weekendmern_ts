var direction;
direction = "right";
var userStatus = "pending";
//enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 101] = "ADMIN";
    Role[Role["USER"] = 102] = "USER";
    Role[Role["MANAGER"] = 103] = "MANAGER";
})(Role || (Role = {}));
var myrole = Role.USER;
console.log(myrole);
