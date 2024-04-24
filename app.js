import { getAllData } from "./request.js";
import { userURL } from "./url.js"; 
const signInBtn=document.querySelector(".signInBtn")
const usernameInp=document.querySelector(".usernameInp")
const passInp=document.querySelector(".passInp")


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
