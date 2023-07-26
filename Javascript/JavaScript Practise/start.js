const myObj={
    name:"Vedant",
    hobbies:["Read","Sleep","Play"],
    work:function(){
        console.log("Study and do stuff");
    }
};
/* console.log(myObj); */
myObj.work();
console.log(myObj.hobbies[2]);
console.log(typeof myObj);

const sendJSON=JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

const receiveJSON=JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);