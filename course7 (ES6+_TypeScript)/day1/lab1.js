/* 1 */
let obj = {name:"omar" , age : 24 , city : "alex"};
for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
}
/* 2 */
const arr = [10,20,30,40,50,60,70]
for (const elem of arr) {
    console.log(elem);
}
/* 3 */
for (const idx in arr) {
    console.log(idx);
}
/* 4 */
[a , b , ...c] = arr;
console.log(a,b,c);
/* 5 */
let std_name = "ahmed" , fac_name = "faculty of engineering" , uni_name = "alexandria university" , grad = 88;
console.log(`${std_name} studies at ${fac_name} ${uni_name} with grade = ${grad}`);
/* 6 */
console.log("heloo".includes("e"));
/* 7 */
let newObj = { fullName : null};
// newObj.fullName = newObj.fullName?? "omar";
console.log(newObj);
/* 8 */
// console.log(newObj.fullName.firstName);
console.log(newObj.fullName?.firstName);
/* 9 */
// let obj = {name:"omar" , age : 24 , city : "alex"};
let {...copyObj}  = {obj}
console.log(copyObj);
copyObj.name = "said";
console.log(copyObj.name);
console.log(obj.name);
/* 10 */
const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: ['de-gen', 'de-or'],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            titles: 'JavaScript-Umgebung'
        }
    ],
};
let {title , translations:[ {locale , localization_tags:[x,y] , last_edit } ]  } = metadata
console.log(title, locale, x,y , last_edit);
/* 11 */
// let obj = {name:"omar" , age : 24 , city : "alex"};
let Entries = Object.entries(obj);
for (let [key,val] of Entries) {
    console.log(key.toUpperCase());
}
/* 12 */
let privateName = Symbol("name");
let privateAge = Symbol("age");
let person = {
    [privateName] : "mahmoud",
    [privateAge] : 30,
    city : "cairo"
};
console.log(Object.keys(person));
console.log(Object.entries(person));
for (const key in person) {
    console.log(`${key} : ${person[key]}`);
}