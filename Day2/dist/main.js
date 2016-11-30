"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener("DOMContentLoaded", function (event) {
			var Article = function Article(title, author, description, urlToImage, url, publishedAt) {
						_classCallCheck(this, Article);

						this.title = title;
						this.author = author;
						this.description = description;
						this.urlToImage = urlToImage;
						this.url = url;
						this.publishedAt = publishedAt;
			};

			var articlesElement = document.querySelector("section.news");

			console.log("aaaa");
			var url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=07a7bf7bcca4498cbc133cff62e726a0';

			var articles = [];
			var articlesFetched = new Promise(function (resolve, reject) {
						fetch(url).then(function (response) {
									if (response.ok) return response.json();
						}).then(function (json) {
									var _iteratorNormalCompletion = true;
									var _didIteratorError = false;
									var _iteratorError = undefined;

									try {
												for (var _iterator = json.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
															var a = _step.value;

															articles.push(new Article(a.title, a.author, a.description, a.urlToImage, a.url, a.publishedAt));
												}
									} catch (err) {
												_didIteratorError = true;
												_iteratorError = err;
									} finally {
												try {
															if (!_iteratorNormalCompletion && _iterator.return) {
																		_iterator.return();
															}
												} finally {
															if (_didIteratorError) {
																		throw _iteratorError;
															}
												}
									}

									resolve("Articles fetched!");
						}).catch(function (err) {
									return console.log(err);
						});
			});

			articlesFetched.then(function (result) {
						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;

						try {

									for (var _iterator2 = articles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
												var article = _step2.value;


												var articleElement = document.createElement('article');

												var urlElement = document.createElement('a');
												urlElement.href = article.url;

												var container = document.createElement('div');
												container.className += 'article-container';

												var image = document.createElement('img');
												image.src = article.urlToImage;

												var textContainer = document.createElement('div');
												textContainer.className += 'text-container';

												var header = document.createElement('header');

												var title = document.createElement('h2');
												title.className += 'title';
												title.innerText = article.title;

												var description = document.createElement('p');
												description.innerText = article.description;

												var time = document.createElement('time');
												time.innerText = article.publishedAt;

												var author = document.createElement('span');
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
						} catch (err) {
									_didIteratorError2 = true;
									_iteratorError2 = err;
						} finally {
									try {
												if (!_iteratorNormalCompletion2 && _iterator2.return) {
															_iterator2.return();
												}
									} finally {
												if (_didIteratorError2) {
															throw _iteratorError2;
												}
									}
						}
			}, function (error) {
						return alert("rejected!");
			});
});