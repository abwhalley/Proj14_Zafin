

const conversion=document.querySelector('#point_conversion');
let inpoints=document.querySelector('#inpoints');
let outpoints;

conversion.addEventListener('PC Optimum', onSubmit);
conversion.addEventListener('Scene', onSubmit);
conversion.addEventListener('Aeroplan', onSubmit);

function onSubmit(e) {
    e.preventDefault();

if(conversion.addEventListener('PC Optimum', onSubmit)){
    outpoints = inpoints.value/1000; //ideally these conversions would be performed in seperate function but I wasn't able to figure that out
    } else if(conversion.addEventListener('Scene', onSubmit)){
    outpoints = inpoints.value/100;
        } else (conversion.addEventListener('Aeroplan', onSubmit))
        outpoints = inpoints.value/128; //based on a 50$ starbucks card

console.log(`${outpoints}`);

const li=document.createElement('li');
li.appendChild(document.createTextNode(`${outpoints}`));

conversions.appendChild(li);
outpoints='';

}



    
