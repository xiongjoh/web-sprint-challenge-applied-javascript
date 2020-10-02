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

    const articleCards = document.querySelectorAll('.card')
    const javascriptTab = document.querySelector('.tab:nth-of-type(1)')
    const bootstrapTab = document.querySelector('.tab:nth-of-type(2)')
    const technologyTab = document.querySelector('.tab:nth-of-type(3)')
    const jqueryTab = document.querySelector('.tab:nth-of-type(4)')
    const nodeTab = document.querySelector('.tab:nth-of-type(5)')

    javascriptTab.addEventListener('click', () => {
        const javascriptArticles = articles.javascript.map((article) => {
            return article.headline
        })
        console.log(javascriptArticles)
        articleCards.forEach((card) => {
            card.classList.remove('hidden-card')
            if (javascriptArticles.includes(card.querySelector('.headline').textContent))
            {
                console.log('this is a javascript article')
            }
            else{
                card.classList.add('hidden-card')
            }

        })
    })
    bootstrapTab.addEventListener('click', () => {
        const bootstrapArticles = articles.bootstrap.map((article) => {
            return article.headline
        })
        console.log(bootstrapArticles)
        articleCards.forEach((card) => {
            card.classList.remove('hidden-card')
            if (bootstrapArticles.includes(card.querySelector('.headline').textContent))
            {
                console.log('this is a bootstrap article')
            }
            else{
                card.classList.add('hidden-card')
            }

        })
    })
    technologyTab.addEventListener('click', () => {
        const technologyArticles = articles.technology.map((article) => {
            return article.headline
        })
        console.log(technologyArticles)
        articleCards.forEach((card) => {
            card.classList.remove('hidden-card')
            if (technologyArticles.includes(card.querySelector('.headline').textContent))
            {
                console.log('this is a technology article')
            }
            else{
                card.classList.add('hidden-card')
            }

        })
    })
    jqueryTab.addEventListener('click', () => {
        const jqueryArticles = articles.jquery.map((article) => {
            return article.headline
        })
        console.log(jqueryArticles)
        articleCards.forEach((card) => {
            card.classList.remove('hidden-card')
            if (jqueryArticles.includes(card.querySelector('.headline').textContent))
            {
                console.log('this is a jquery article')
            }
            else{
                card.classList.add('hidden-card')
            }

        })
    })
    nodeTab.addEventListener('click', () => {
        const nodeArticles = articles.node.map((article) => {
            return article.headline
        })
        console.log(nodeArticles)
        articleCards.forEach((card) => {
            card.classList.remove('hidden-card')
            if (nodeArticles.includes(card.querySelector('.headline').textContent))
            {
                console.log('this is a node article')
            }
            else{
                card.classList.add('hidden-card')
            }

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
