

// const car={
// //     brand:"huwei",
// //     color:"black",
// //     year:2025
// // }

// console.log(car.brand);

// objcreation=(brandVal,brandColor,Year)=>
// {
//     const obj={
//         brand:brandVal,
//         Color:brandColor,
//         year:Year
//     }
//     return obj;
// }

// const hundai=objcreation("hundai","yellow",2029);

// const huwei=JSON.parse(JSON.stringify(hundai));

// huwei.Color="brown";

// console.log(hundai);

// console.log(huwei);


let car ={
    brand:'honda',
    color:'black',
    display:()=>{
        console.log(this.brand);
    }
};

car.display();


const name=function()
{
    console.log(this);
}

name();