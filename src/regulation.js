// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//     <form class="user">
//           <input type="text" id="input">
//           <button type="submit">Submit</button>
//           <div class="feedback"></div>
//     </form>
    

//     <script>

// const form=document.querySelector(".user")
// const input=document.querySelector("#input")
// const text=document.querySelector(".feedback")
// form.addEventListener("keyup",(e)=>{
//     event.preventDefault()
//     console.log(input.value)
//     let uservalue=input.value
//     let pattern=/^[A-Z]?[a-z]+[0-9]+[!@#$%^&*()]+$/
//     // test()
//     if(pattern.test(uservalue)){
//         console.log("i am passed")
//         text.innerHTML="UserName is valid"
//         text.style.color="green"
//     }
//     else if(input.value==""){
       
//         text.innerHTML=""
 
//     }
   
//     else{
//         console.log("i am failed")
//         text.innerHTML="Username is invalid"
//         text.style.color="red"
//     }
// })




//         // Regular Expression  -- to make pattern 
//         // qunatify operators --  +, * , ?
//         // +  --> takes min 1- max infinite 
//                 // eg: a+  --> aaaaaaaaaaaaaaaaaa
//         // *  --> takes min 0 - max infinite 
//                 //eg : a*  --> aaaaaaaaaaaaaaaaaaaa
//         // ?  --> take min 0 - max 1 time 
//                //eg : a?    -- 

//         // escape operator --- access specila charactore - \
//         // group opearator -- [a-zA-Z0-9]*
//         // or operator     -- helo||abc   --> helabc
//         // range operator  --> {2,6}
//         // \d             -- disgits
//         // \w            -- alphanumer charcater 


//         // regula exp syntax
//         // /^pattern$/
        







//     </script>


// </body>
// </html>