function jump(){
    var dom = document.getElementById("string-input").value;
    var selectcConvert = parseInt(document.getElementById("month").value);
    
    if(selectcConvert==0){
        var convertedString = dom.toUpperCase();
        document.querySelector('.add-text').innerHTML = convertedString;
    }
    if(selectcConvert==1){
        var convertedString = dom.toLowerCase();
        document.querySelector('.add-text').innerHTML = convertedString;
    }
    if(selectcConvert==2){
        var convertedString = toPascalCase(dom);
        document.querySelector('.add-text').innerHTML = convertedString;
    }
    if(selectcConvert==3){
        var convertedString = toSnakeCase(dom);
        document.querySelector('.add-text').innerHTML = convertedString;
    }
    if(selectcConvert==4){
        var convertedString = toKebebCase(dom);
        document.querySelector('.add-text').innerHTML = convertedString;
    }
    if(selectcConvert==5){
        var convertedString = toCamelCase(dom);
        document.querySelector('.add-text').innerHTML = convertedString;
    }
    if(selectcConvert==6){
        var convertedString = toUpperSnakeCase(dom);
        document.querySelector('.add-text').innerHTML = convertedString;
    }

}



function toPascalCase(string) {
    var str = string.split(" ");
    var result="";
    str.forEach(str=>{
        var a = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        result += a;
    });
    return result;
}

function toSnakeCase(string){
    var str = string.split(" ");
    var result="";
    var counter = str.length;
    str.forEach(str=>{
        if(counter>1){
        var a = str.toLowerCase();
        result += a + '_';
        counter--;
        }
        else{
            var a = str.toLowerCase();
            result += a;
        }
    });
    return result;
}

function toKebebCase(string){
    var str = string.split(" ");
    var result="";
    var counter = str.length;
    str.forEach(str=>{
        if(counter>1){
            var a = str.toLowerCase();
            result += a + '-';
            counter--;
            }
            else{
                var a = str.toLowerCase();
                result += a;
            }
    });
    return result;
}

function toCamelCase(string){
    var str = string.split(" ");
    var result="";
    var counter = true;
    str.forEach(str=>{
        if(counter){
            var a = str.charAt(0).toLowerCase() + str.slice(1).toLowerCase();
            counter= false;
        }
        else{
        var a = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
        result += a;
    });
    return result;
}

function toUpperSnakeCase(string){
    var str = string.split(" ");
    var result="";
    var counter = str.length;
    str.forEach(str=>{
        if(counter>1){
        var a = str.toUpperCase();
        result += a + '_';
        counter--;
        }
        else{
            var a = str.toUpperCase();
            result += a;
        }
    });
    return result;
}