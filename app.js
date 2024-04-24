import { getAllData, postData } from "./request.js";
import { userURL } from "./url.js"; 
const signInBtn=document.querySelector(".signInBtn")
const usernameInp=document.querySelector(".usernameInp")
const passInp=document.querySelector(".passInp")
const regUser=document.querySelector(".regUser")
const regPass=document.querySelector(".regPass")
const register=document.querySelector(".register")



const isLogin=JSON.parse(localStorage.getItem("islogin")) || false;
console.log(isLogin);
isLogin?location.href="./home.html":null
signInBtn.addEventListener("click",async()=>{
    const data = await getAllData(userURL)
    console.log(data);
    const findElem=data.find(
        (elem)=>(elem.password==passInp.value) && (elem.username==usernameInp.value)
    );
    if (findElem) {
        console.log("xos geldin");
        Toastify({

            text: "Buyur kec Nunuu",
            
            duration: 3000
            
            }).showToast();
            location.href="./home.html"
            localStorage.setItem("islogin",JSON.stringify(true))
            localStorage.setItem("loginUser",JSON.stringify(findElem))       
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Nunuu duzgun yaz!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        console.log("xos getdin");
    }
})

register.addEventListener("click",()=>{
    let obj={
        username:regUser.value,
        pass:regPass.value
    }
    postData(userURL,obj);
    location.href="./index.html";

})