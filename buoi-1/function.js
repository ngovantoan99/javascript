const longStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum"
const cutStr = longStr.slice(0, 10) + "...";
console.log(cutStr);

function truncate(str, number){
    let result = str.slice(0, number) + "...";
    return result;
}
console.log(truncate("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum", 20));

function reverseStr(str){
    const reverseStr = str.split(" ").reverse().join(" ");
    return reverseStr;
}
console.log(reverseStr("I am Toan"));