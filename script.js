const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

const generateQuote = async () => {
  const res = await fetch("https://dummyjson.com/quotes");
  const data = await res.json();

  bindData(data.quotes);
};

const bindData = (quotes) => {
  let random = Math.floor(Math.random() * 29);
  quote.innerText = quotes[random].quote;
  author.innerText = `Author : ${quotes[random].author}`;
};

btn.addEventListener("click", generateQuote);
