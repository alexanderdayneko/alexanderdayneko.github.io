##ES2015
1. Go to https://newsapi.org/
2. Press ‘Get Api Key’ on the right
3. Enter your desired creds and promise to add an attribution link to newsapi
4. Press submit and store your API key - this one will be used for api requests
5. Test you did well - https://newsapi.org/v1/articles?source=bbc-news&apiKey={{YOUR_API_KEY}}
6. Create application, using your github page on your github account: https://pages.github.com/
7. Using es6 knowledge create an application that uses newsapi, which will run purely on the client-side in Chrome-54 browser (no server-side work expected). Your app should get all the news in the available section and display them;
8. Score points for every usage of the es6, but points will be descored for prehistoric things (such as XMLHttpRequest);
9. Styling is not the requirement for this task, but it will be an additional bonus;
10. You're not allowed to use any framework :)
11. Add attribution link, remember, you promised!

##Babel
For 1-4 stars:
Use babel for your solution from week1, and make it run inside IE10. Please, find virtual machine with installed IE10 for your OS here:
https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/windows/?utm_source=SitePoint

For 5 stars:
Write a babel plugin. Please, negotiate with your mentor what exactly will you do; you're free to do anything (if this anything is approved by him :)
You can use https://github.com/RReverser/babel-plugin-hello-world as a starting point.

Please, see below the example of how the home task can look like:

Task:
Write your own plugin which will convert all true values to the false.
Ex.:
var q = true; => var q  = false;
if (a === true) => if (a === true)
