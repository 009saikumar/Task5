var request = new XMLHttpRequest;
var url = "https://restcountries.eu/rest/v2/all";
request.open('GET',url,true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response);
    //console.log(data);
//print follwoig details  name , capital , flag  - using foreach
 let ans4 = data.forEach(element => {
     console.log(element.name);
     console.log(element.capital);
     console.log(element.flag);
 });

 //Print the total population of the countries  - using reduce
let ans5 = data.reduce((currentTotal,item)=>{
return item.population + currentTotal
},0)
console.log(ans5);

//Print the total population of the countries in asia - filter & reduce*/
let ans6 = data.filter((item)=>item.region=='Asia');
let ans7 = ans6.reduce((currentTotal,item)=>{
    return item.population + currentTotal
},0);
console.log(ans7);
}