import { getAllData } from "./request.js";
import { productURL } from "./url.js";
const cards = document.querySelector(".cards")
const exit=document.querySelector(".exit")
exit.addEventListener("click",()=>{
    localStorage.clear()
    location.href="./index.html";
})
console.log(cards);
const createCard = async (source, url) => {

    const data = await getAllData(productURL)
    data.forEach((element) => {
        element.forEach(elem => {
            const productCard = document.createElement("div");
        productCard.id = elem.id;
        const badge = document.createElement("div");
        const productTumb = document.createElement("div");
        const productDetails = document.createElement("div");
        const productImg = document.createElement("img");
        const productSpan = document.createElement("span");
        const productName = document.createElement("h4");
        const productDescription = document.createElement("p");
        const productBottom = document.createElement("div");
        const productPrice = document.createElement("div");
        const productLinks = document.createElement("div");
        const productNavigation = document.createElement("a");
        const addToBasket = document.createElement("i");
        const productHeart = document.createElement("a");
        const productFav = document.createElement("i");



        productCard.className = "product-card";
        badge.className = "badge";
        productTumb.className = "product-tumb";
        productDetails.className = "product-details";
        productSpan.className = "product-catagory";
        productBottom.className = "product-bottom";
        productPrice.className = "product-price";
        productLinks.className = "product-links";
        addToBasket.className = "fa fa-shopping-cart";
        productFav.className = "fa fa-heart";

        // productCard.setAttribute("data", elem.id);
        // productFav.setAttribute("data", elem.id);


        productCard.append(badge);
        productCard.append(productTumb);
        productCard.append(productDetails);
        productTumb.append(productImg);
        productDetails.append(productSpan);
        productDetails.append(productName);
        productDetails.append(productDescription);
        productDetails.append(productBottom);
        productBottom.append(productPrice);
        productBottom.append(productLinks);
        productLinks.append(productNavigation);
        productNavigation.append(addToBasket);
        productHeart.append(productFav);
        productLinks.append(productHeart);
        productCard.append(productLinks);
        cards.append(productCard);

        badge.innerText = "New";
        productImg.src = elem.image;

        productSpan.innerText = elem.category;
        productName.innerText = elem.title;
      
        productDescription.innerText =
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimusnostrum!";
        productPrice.innerText = elem.price + "$";
    });
            
        });
        
};

createCard(cards, productURL)
