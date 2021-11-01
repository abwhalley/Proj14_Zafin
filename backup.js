let pointType = prompt("What points are you entering?\nPC Optimum is 1\nScene is 2\nAeroplan is 3"); //point type would actually be chosen based on a button in website
let inpoints = prompt("Enter points: "); //points entered and pulled from website from box

console.log(`${pointType} , ${inpoints}`);

if(pointType==1){
    console.log ( (inpoints) / 1000 ); //ideally these conversions would be performed in seperate function but I wasn't able to figure that out
    } else if(pointType==2){
        console.log ( (inpoints) / 100 );
        } else if(pointType==3){
            console.log ( (inpoints) / 128 ); //based on a 50$ starbucks card
            }
            