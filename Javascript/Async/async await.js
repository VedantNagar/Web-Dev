/* Async is multi-thread, which means operations or programs can run in parallel. Sync is single-thread, so only one operation or program will run at a time */

let stocks={
    fruits:["Strawberry","Grapes","Banana","Apple"],
    liquid:["Water","Ice"],
    holder:["Cone","Cup","Stick"],
    toppings:["Chocolate","Nuts"]
};

let is_shop_open = true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log("The shop is closed."));
        }
    });
}

async function kitchen(){ //The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
    
    try{
        await time(2000);//The keyword await makes JavaScript wait until that promise settles and returns its result.
        console.log(`${stocks.fruits[0]} has been added.`);

        await time(0);
        console.log("Start the production.");

        await time(2000);
        console.log("Cutting the fruit.");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added.`);

        await time(1000);
        console.log("Started the machine.");

        await time(2000);
        console.log(`Ice Cream was placed on ${stocks.holder[0]}.`);

        await time(3000);
        console.log(`${stocks.toppings[0]} was added as the topping.`);

        await time(2000);
        console.log('Ice cream was served.');
    }
    catch(error){
        console.log("Customers left",error);
    }
    finally{
        console.log("Shop is closed.");
    }
}

kitchen();