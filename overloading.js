"use strict";
//overloading
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));
console.log(add("hello", " dma"));
const guest = {
    name: "Elephant",
    place: "Amazon",
    role: "guest"
};
const user = {
    name: "Michelle",
    role: "user",
    country: "Germany"
};
function getDetails(details) {
    return details;
}
;
const user1 = getDetails(user);
const guest1 = getDetails(guest);
user1.country;
guest1.name;
console.log(user1, guest1);
//# sourceMappingURL=overloading.js.map