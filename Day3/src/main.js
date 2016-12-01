import {fetchArticles} from "./fetchArticles";

require("../css/style.css");

document.addEventListener("DOMContentLoaded", function(event) { 
		
		console.log("DOMContentLoaded");

var articlesElement = document.querySelector("section.news");
var url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=07a7bf7bcca4498cbc133cff62e726a0';

fetchArticles(url);

});