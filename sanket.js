let obj={
        name: "laptop",
        price:800
    }
   function disscount(disscountRate){
    let disscountprice = obj.price*disscountrate;
       obj.price-=disscountprice
     return disscountprice
   }
let disscountprice=disscount(0.15)
console.log("disscountprice:",disscountprice);
console.log("new price",obj.price);
