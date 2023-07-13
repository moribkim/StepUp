const input = document.getElementById('textinput').value;

if(input.length <= 0) {
    input.style.height = 70 + "px";
}
else {
    input.style.height = 220 + "px";
}
console.log(input.value)