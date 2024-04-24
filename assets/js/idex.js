import { getAllData, postData } from "./requests.js";
import { userURL } from "./url.js";

const signInBtn = document.querySelector(".signInBtn");
const register = document.querySelector(".register");

const usernameInp = document.querySelector(".usernameInp");
const passInp = document.querySelector(".passInp");
const regUser = document.querySelector(".regUser");
const regPass = document.querySelector(".regPass");

const isLogin = JSON.parse(localStorage.getItem("islogin")) || false;
console.log(isLogin);

isLogin ? (location.href = "./home.html") : null;

signInBtn.addEventListener("click", async () => {
  const data = await getAllData(userURL);

  const findElem = data.find(
    (elem) => elem.pass == passInp.value && elem.username == usernameInp.value
  );

  if (findElem) {
    Toastify({
      text: "Giris olundu",

      duration: 3000,
    }).showToast();
    location.href = "./home.html";

    localStorage.setItem("islogin", JSON.stringify(true));
    localStorage.setItem("logionUser", JSON.stringify(findElem));
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Istifadeci adi ve ya sifre yalnisdir",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  }
});

register.addEventListener("click", () => {
  let obj = {
    username: regUser.value,
    pass: regPass.value,
  };
  postData(userURL, obj);
  location.href = "./index.html";
  //   console.log("asdfghj");
});
