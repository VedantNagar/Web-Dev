//using callbacks

let stocks={
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","nuts"]
};

let order = (fruits_name,production_order)=>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruits_name]} has been selected`);
        production_order();
    },3000);
    
};

let production=()=>{
    setTimeout(()=>{
        console.log("Production has started.")
        setTimeout(()=>{
            console.log("The fruits have been chopped")
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added.`)
                setTimeout(()=>{
                    console.log("Machine has been started.")
                    setTimeout(()=>{
                        console.log(`${stocks.holder[0]} has been selected as the holder.`)
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was chosen as a topping`)
                            setTimeout(()=>{
                                console.log("Ice Cream has been served.")
                            },2000)
                        },3000);
                    },2000);
                },1000);
            },1000);
        },2000);
    },0)
};


order(3,production);