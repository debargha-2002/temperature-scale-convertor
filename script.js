let resetBtn = document.querySelector("#resetbtn");
let celsiusInput = document.querySelector("#celsius");
let kelvinInput = document.querySelector("#kelvin");
let fahrenheitInput = document.querySelector("#fahrenheit");

celsiusInput.addEventListener('input',(e)=>{
    let val = parseFloat(e.target.value);
    let kelvinval = val+273.15;
    let farval = ((val*9)/5)+32;
    kelvinInput.value = kelvinval.toFixed(4);
    fahrenheitInput.value = farval.toFixed(4);
});

kelvinInput.addEventListener('input',(e)=>{
    let val = parseFloat(e.target.value);
    let celsiusval = val-273.15;
    let farval = ((celsiusval*9)/5)+32;
    celsiusInput.value = celsiusval.toFixed(4);
    fahrenheitInput.value = farval.toFixed(4);
});

fahrenheitInput.addEventListener('input',(e)=>{
    let val = parseFloat(e.target.value);
    let celsiusval = ((val-32)*5)/9;
    let kelvinval = celsiusval+273.15;
    kelvinInput.value = kelvinval.toFixed(4);
    celsiusInput.value = celsiusval.toFixed(4);
});


resetBtn.addEventListener('click',()=>{
    celsiusInput.value = "";
    kelvinInput.value = "";
    fahrenheitInput.value = "";
})