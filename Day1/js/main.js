document.addEventListener("DOMContentLoaded", function(event) { 

class Article {
	constructor(title, author, description, urlToImage, url, publishedAt){
		this.title = title;
		this.author = author;
		this.description = description;
		this.urlToImage = urlToImage;
		this.url = url;
		this.publishedAt = publishedAt;
	}
}

var articlesElement = document.querySelector("section.news");

console.log("aaaa");
var url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=07a7bf7bcca4498cbc133cff62e726a0';

var articles =[];
var articlesFetched = new Promise((resolve, reject) => {
	fetch(url).then(response => {
		if(response.ok)
		return response.json();
	}).then(json => {
		for(let a of json.articles){
			articles.push(new Article(a.title, a.author, a.description, a.urlToImage, a.url, a.publishedAt));
		}
		resolve("Articles fetched!");

	}).catch(err => console.log(err));
});

articlesFetched.then(
	result => {

		for(let article of articles){

			let articleElement = document.createElement('article');

			let urlElement = document.createElement('a');
			urlElement.href = article.url;

			let container = document.createElement('div');
			container.className += ('article-container');

			let image = document.createElement('img');
			image.src = article.urlToImage;

			let textContainer = document.createElement('div');
			textContainer.className += ('text-container');

			let header = document.createElement('header');

			let title = document.createElement('h2');
			title.className += ('title');
			title.innerText = article.title;

			let description = document.createElement('p');
			description.innerText = article.description;

			let time = document.createElement('time');
			time.innerText = article.publishedAt;

			let author = document.createElement('span');
			author.innerText = article.author;

			header.append(title);
			header.append(author);
			header.append(time);

			textContainer.append(header);
			textContainer.append(description);

			container.append(image);
			container.append(textContainer);

			urlElement.append(container);

			articleElement.appendChild(urlElement);
			articlesElement.appendChild(articleElement);
		}
	},
	error => alert("rejected!")
);

});