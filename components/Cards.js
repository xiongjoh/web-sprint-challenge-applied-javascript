// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    return res.data.articles;
  })
  .then((articles) => {

    for (const topic in articles) {

      articles[topic].forEach((author) => {
        createCard(author);
      });
    }
    const cardClick = document.querySelectorAll(".card");

    cardClick.forEach(card => {
        card.addEventListener("click", (event) => {
            console.log(event.currentTarget.querySelector('.headline').textContent)
        })
    })

  })
  .catch((err) => {
    console.log("error");
    console.log(err);
  });

function createCard(article) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageContainer);
  author.appendChild(authorName);
  imageContainer.appendChild(image);

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");

  headline.textContent = article.headline;
  image.src = article.authorPhoto;
  authorName.textContent = `By ${article.authorName}`;

  document.querySelector(".cards-container").appendChild(card);

  return card;
}
