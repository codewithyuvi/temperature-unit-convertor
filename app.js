console.log('Welcome')
let btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    let temperature = document.getElementById('temperature').value;
    // console.log(temperature)

    let type_of_temperature = document.getElementById('type_of_temperature').value;
    // console.log(type_of_temperature);


    if(type_of_temperature == 'Celcius'){
        var new_temp = (temperature - 32) / 1.8
        // console.log(new_temp)
    }
    else if(type_of_temperature == 'Fahrenheit'){
        var new_temp = temperature * 1.8 + 32
        // console.log(new_temp)
    }
    
    // console.log(new_temp)
    let html;
    html = `Temperature in ${type_of_temperature} is ${new_temp}`
    // console.log(html)
    document.getElementById('answer').innerHTML = html;
})