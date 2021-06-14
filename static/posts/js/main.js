console.log('activated min.js')


// examples of for each loop
// var day_values = ["saturday","sunday","monday","tuesday","wednessday","thusday","friday"]
//
// console.log(day_values[0])
// using creating by function
// let sayHellow = function () {
//     console.log("hellow from function")
// }
// now we are going to use a function which doesnt contain a name
// day_values.forEach(function (day,index) {
//     console.log(`${index+1} --- ${day}`)
// })


// const test_js = document.getElementById('test_js');
// test_js.textContent='hellow from java script';
//
// //ajex reques
// const test_ajax = document.getElementById('test_ajax')
//
// $.ajax({
//     type:'GET',
//     url:'/AjexResponse/',
//     success: function (response) {
//         console.log('succress_text:',response.text)
//         test_ajax.textContent=response.text
//     },
//     error:function (error) {
//         console.log('error_text',error)
//     }
// })


//get post data
const post_box = document.getElementById('post_box');
const spinner_box = document.getElementById('spinner_div');
const load_button = document.getElementById('load_button');
const end_box = document.getElementById('end_box');

let visible = 3; // using for post visi

//csrf django
const getCookie=(name)=>{
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');


const LikeUnlikePost = ()=>
{
    const LikeUnlikeForms = [...document.getElementsByClassName('like_unlike_form')]
    console.log(LikeUnlikeForms)

}


const getData = () =>{
    $.ajax({
    type: 'GET',
    url: `/postViewResponse/${visible}`,
    success:function (response) {
        console.log('request success')
        console.log(response.data)



        setTimeout(()=>{
            spinner_box.classList.add('not-visible')
            const data = response.data


            // just for showing the data
            // data.forEach(ele =>{
            //        //console.log(ele)
            //     post_box.innerHTML+=`<h3>ID-${ele.id} | title - ${ele.title} | author - ${ele.author}</h3><br>`
            // });
            //apply it for cards
            data.forEach(ele =>{
                   //console.log(ele)
                post_box.innerHTML+=`
                    <div class="card shadow p-3 mb-5 bg-white rounded">
<!--                      <img class="card-img-top" src="..." alt="Card image cap">-->
                      <div class="card-body">
                            <h5 class="card-title">${ele.title}</h5>
                            <p class="card-text">${ele.body}</p>
                            <small>by ${ele.author}</small><br>
                            <div class="card-footer">
                                <div class="row">
                                        <div class="col-sm-2">
                                            <a href="#" class="btn btn-dark btn-sm">Go somewhere</a>
                                        </div>
                                        <div class="col-sm-1">
                                        <form class="like_unlike_form" data-form-id="${ele.id}">
                                                <button href="#" class="btn btn-dark btn-sm">${ele.liked ? `Unlike ${ele.like_count}`:`like ${ele.like_count} `}</button>
                                        </form>
                                        </div>
                                    
                                   </div>
                                </div>
                            
                        </div>
                        </div>
                        `
            });
            LikeUnlikePost() // execute function

        },1000);
        //limitation status
        if (response.size === 0)
        {
            end_box.textContent='no post has added yet';
        }
        else if (response.size<= visible)
        {
            load_button.classList.add('not-visible');
            end_box.textContent = 'No more post! '
        }



    },
    error:function (error) {
        console.log(error)
    }


})

}

load_button.addEventListener('click',()=>{
    spinner_box.classList.remove('not-visible')
    visible +=3; // increment data by three!
    getData()
})

getData()

// $.ajax({
//     type: 'GET',
//     url: `/postViewResponse/${visible}`,
//     success:function (response) {
//         console.log('request success')
//         console.log(response.data)
//
//
//
//         setTimeout(()=>{
//             spinner_box.classList.add('not-visible')
//             const data = response.data
//
//
//             // just for showing the data
//             // data.forEach(ele =>{
//             //        //console.log(ele)
//             //     post_box.innerHTML+=`<h3>ID-${ele.id} | title - ${ele.title} | author - ${ele.author}</h3><br>`
//             // });
//             //apply it for cards
//             data.forEach(ele =>{
//                    //console.log(ele)
//                 post_box.innerHTML+=`
//                     <div class="card shadow p-3 mb-5 bg-white rounded">
// <!--                      <img class="card-img-top" src="..." alt="Card image cap">-->
//                       <div class="card-body">
//                             <h5 class="card-title">${ele.title}</h5>
//                             <p class="card-text">${ele.body}</p>
//                             <small>by ${ele.author}</small><br>
//                             <div class="card-footer">
//                                 <div class="row">
//                                         <div class="col-sm-2">
//                                             <a href="#" class="btn btn-dark btn-sm">Go somewhere</a>
//                                         </div>
//                                         <div class="col-sm-1">
//                                              <a href="#" class="btn btn-dark btn-sm">Like</a>
//                                         </div>
//
//                                    </div>
//                                 </div>
//
//                         </div>
//                         </div>
//                         `
//             });
//
//
//         },1000);
//
//
//
//     },
//     error:function (error) {
//         console.log(error)
//     }
//
//
// })

// for each loop demo

        //     post_box.innerHTML+=`<h1>ID-${el.id} | title - ${el.title} | author - ${el.author}</h1><br>`
