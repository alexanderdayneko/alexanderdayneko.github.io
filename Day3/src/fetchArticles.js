import Article from "article";

export function fetchArticles(url) {
    var articles = [];
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
        var articlesElement = document.querySelector("section.news");
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
}