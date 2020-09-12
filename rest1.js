var request = new XMLHttpRequest;
var url = "https://restcountries.eu/rest/v2/all";
request.open('GET',url,true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response);
    //console.log(data);

//Get the countries in asia - using filter
let ans = data.filter((item)=>item.region=='Asia');
console.log(ans);

//Get the countries with population less than 2L - using fliter
let ans1 = data.filter((item)=>item.population<200000)
console.log(ans1)

//Bumpup the current population  of all the counteirs by 1L - using Map
let ans2 = data.map((item)=>item.population+100000);
console.log(ans2);

//convert all the names to capital - using map
 let ans3 = data.map((item)=>item.name.toUpperCase());
 console.log(ans3);
}