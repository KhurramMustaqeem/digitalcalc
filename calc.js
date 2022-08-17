// function add() {
//     var output = document.querySelector('#outputl')
//     let input1 = Number(document.querySelector('#input1').value)
//     let input2 = +document.querySelector('#input2').value
//     output.value = input1 + input2;
// }
// function subt() {
//     var output = document.querySelector('#outputl')
//     let input1 = Number(document.querySelector('#input1').value)
//     let input2 = +document.querySelector('#input2').value
//     output.value = input1 - input2;
// }
// function mult() {
//     var output = document.querySelector('#outputl')
//     let input1 = Number(document.querySelector('#input1').value)
//     let input2 = +document.querySelector('#input2').value
//     output.value = input1 * input2;
// }
// function div() {
//     var output = document.querySelector('#outputl')
//     let input1 = Number(document.querySelector('#input1').value)
//     let input2 = +document.querySelector('#input2').value
//     output.value = input1 / input2;
// }
// function res(){
//     output.value = input1 + input2;
//     output.value =" ";

// }
let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string= eval(string);
            document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML == 'C'){
            string= " ";
            document.querySelector('input').value = string;

        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})