class calci
{
    
    add(a,b)
    {
        return a+b;
    }
    sub(a,b)
    {
        return a-b;
    }
    mul(a,b)
    {
        return a*b;
    }
}


var res =  new calci();
console.log(res.add(9,7));
console.log(res.sub(9,7));
console.log(res.mul(9,7));