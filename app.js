const selectFormat = document.getElementsByName('temp-format');
const temp_form = document.querySelector('#temp-form');
const format_form = document.querySelector('#format-form');
const temp_input = document.querySelector('#temp');
const conversion_result = document.querySelector('.collection');
const header1 =document.getElementById('header1');
const header2 =document.getElementById('header2');
const body1 =document.getElementById('body1');
const body2 =document.getElementById('body2');
let temp_format;
loadEventListeners();

function loadEventListeners(){
     //  choose format event
    for(var i=0;i<selectFormat.length;i++){
         temp_f = selectFormat[i].addEventListener('change',tempFormat)
    }
    // convert temperature
    temp_form.addEventListener('submit',convertTemp);
}
function tempFormat(e){
    formatSelected = e.target.value;
    if(formatSelected === 'celsius'){
        temp_format = 'celsius';
    }else if(formatSelected === 'fahrenheit'){
        temp_format = 'fahrenheit';
    }else if(formatSelected === 'kelvin'){
        temp_format = 'kelvin';
    }
  e.preventDefault();
}
function convertTemp(e){
    let temp_value = parseInt(temp_input.value);
    if(temp_value === ''){
        alert('Enter temperature!')
    }
    else{
        if(temp_format === 'celsius'){
            console.log(temp_format);
            fromCelsius(temp_value);
        }else if(temp_format === 'fahrenheit'){
            console.log(temp_format);
            fromFahrenheit(temp_value);
        }else if(temp_format === 'kelvin'){
            console.log(temp_format);
            fromKelvin(temp_value);
        }
    }
  

    e.preventDefault();
}
function fromCelsius(temp){
    let temp_Fahrenheit;
    let temp_kelvin;
    temp_Fahrenheit = (temp*(9/5))+32;
    temp_kelvin = temp + 273.15;

    header1.innerText='Fahrenheit';
    body1.innerText= temp_Fahrenheit;
    header2.innerText='Kelvin';
    body2.innerText=temp_kelvin;
   
    // console.log(temp,'TF='+temp_Fahrenheit+',TK='+temp_kelvin)
}

function fromFahrenheit(temp){
    let temp_kelvin;
    let temp_celsius;

    temp_celsius = (temp-32)*(5/9);
    temp_kelvin =(temp + 459.67)*(5/9);

    header1.innerText='Celsius';
    body1.innerText= temp_celsius;
    header2.innerText='Kelvin';
    body2.innerText=temp_kelvin;
    // console.log(temp,'Tc='+temp_celsius+',TK='+temp_kelvin)
}

function fromKelvin(temp){
    let temp_Fahrenheit;
    let temp_celsius;
   
    temp_celsius = temp - 273.15;
    temp_Fahrenheit = (9/5)*(temp-273.15)+32;

    header1.innerText='Fahrenheit';
    body1.innerText= temp_Fahrenheit;
    header2.innerText='Celsius';
    body2.innerText=temp_celsius;

    // console.log(temp,'TF='+temp_Fahrenheit+',Tc='+temp_celsius)
}