import { productURL } from "./url.js";
import { getById } from "./requests.js";

const urlId = new URLSearchParams(location.search);
const detailPage = document.querySelector(".detailPage");

async function createDetailPage() {
  const elem = await getById(productURL, urlId.get("id"));
  //   console.log(elem);
  detailPage.innerHTML = `
    <nav>
    <ul>
      <li><a href="">${elem.id}</li>
      <li><a href="./basket.html">${elem.title}</a></li>
      <li><a href="./favorite.html">Fav</a></li>
      <li><a href="./home.html">Home</a></li>
      <li><button>Profile</button> <span class="profName">Username</span></li>
      <li>
        <button class="exit">Log Out</button>
      </li>
    </ul>
  </nav>
    
    `;
}

createDetailPage();
