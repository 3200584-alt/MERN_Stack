const vegetables=["onion","brinjal","potato","carrot","cabbage","mushroom","pumpkin","cauliflower"];
//vegetables.forEach(veg=>console.log(veg));
function something(m,callback)
{
    console.log(m+"Something Something");
    callback();
}
function character()
{
    console.log("Casting:Jayamravi,Thrisha");
}
//something("Movie:",character);
//Promise
let promise = new Promise((resolve , reject)=>{
resolve("Success");}
);
//promise.then(result => console.log(result));
async function sum()
{
 return 7+8;
}
//sum().then(console.log);
let std=
{
    NAME:"Deepak",
    AGE:20
};
let json= JSON.stringify(std);
console.log(json);