// Decimal to anything
function binaryCon(decimal, toNumSys) {
    // let decimal = decimal;
    let reminder = decimal;
    let result = Array();
    while (reminder>=1) {
        result.push(reminder%toNumSys);
        reminder = Math.floor(reminder/toNumSys);
    }
    result.reverse();
    let out = '';
    for (x of result) {
        out += x;
    }
    return out;
}
var decimalValue;
var toNumSys;
function getValue() {
    if (document.getElementById('decimalValue').value !== ''){
        decimalValue = Number(document.getElementById('decimalValue').value);
        convertTo = document.getElementById('convertTo').value;
        switch (convertTo) {
            case "Binary":
                toNumSys = 2;
                break;
            case "Octal":
                toNumSys = 8;
                break;
            default:
                toNumSys = 16;
                break;
        }
        document.querySelector(".title span").innerHTML = convertTo;
        document.querySelector(".result span").innerHTML = convertTo;
        show(decimalValue, toNumSys);
    }
    else {
        alert("Decimal Value Required.")
    }
}

function show(decimalValue, toNumSys) {
    result = binaryCon(decimalValue, toNumSys);
    document.querySelector(".result p").innerHTML = result;
}
