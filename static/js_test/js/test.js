console.log("active")

const test_ele = document.getElementById('test_element').innerText;
console.log(test_ele)


// change text content
const test_ele_2 = document.getElementById('show_event');
// test_ele_2.textContent = 'bye bye'


// add eventlisterner
// test_ele_2.addEventListener('click',()=>{
//     console.log("button prassed")
// })


//change button text
test_ele_2.addEventListener('click',()=>{
    console.log("button prassed")
    test_ele_2.innerHTML="<b>button clicked</b>"

})




//mouse over
const mouse_over = document.getElementById('mouse_over');

const in_field = document.getElementById('mouse_in');
const out_field = document.getElementById('mouse_out');
mouse_over.addEventListener('mousemove',()=>{
    console.log("mouse over")
    in_field.innerHTML="<b>in</b>"

})
//mouse out

mouse_over.addEventListener('mouseout',()=>{
    console.log("mouse out")
    in_field.innerHTML="<b>out</b>"
})




