# Hacker News Frontend Challenge

### Objective
The goal of this challenge is to recreate a light weight version of [hackernews](https://news.ycombinator.com/) using React and the [Firebase Hackernews API](https://github.com/HackerNews/API). You can make improvements to the UI of Hacker News if you wish (not required), however please keep the spirit of the site the same (At most it should look like an updated version of HN)

### Example
You can find a working example here:
- [https://yc-demo-8bde7.firebaseapp.com](https://yc-demo-8bde7.firebaseapp.com)

### Tech Stack
- [Hacker News Firebase API](https://github.com/HackerNews/API) (this is where you will get the data)
- [React](https://reactjs.org/docs/getting-started.html)
- [Firebase Hosting](https://firebase.google.com/)

### Tips
Although you could probably just make normal ajax requests for to the firebase api to get data, I would strongly recommend using the Firebase library and subscribing to the Firebase URLs for those data endpoints. This will allow you to get large amounts of data without making HTTP requests. You can learn more about reading data from a Firebase URL in [their documentation](https://firebase.google.com/docs/database/web/read-and-write?authuser=0). Also, keep in mind you will be reading from the Hacker News Firebase, so when you initialize your firebase app it will look like this:
```
firebase.initializeApp({
  authDomain: "hacker-news.firebaseio.com",
  databaseURL: "https://hacker-news.firebaseio.com",
});
```

### Instructions
1. Create a repository on Github and add an initial commit.
2. All development work should happen on a separate branch. Once you're done, open a pull request from that development branch to master, so we can review your work.
3. Recreate a working version of the homepage for Hacker News. It should only display 30 items at a time and display the next page when you click the **More** button.
4. Create a Comments page. This page should display the info at the top from the original post and all of the comments for this post.
5. You do not need to build other pages, nor should you
6. You don't need to recreate all the top nav links, they won't work anyway
7. You will be using the following [Hacker News API endpoints](https://github.com/HackerNews/API), you should not need to use any other endpoints:
- **Top Stories** -  [https://hacker-news.firebaseio.com/v0/topstories](https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty) This simply return a list of ids for all the top stories
- **Story API** -  [https://hacker-news.firebaseio.com/v0/item/8863](https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty) This returns data for a story
- **Comment API** -  [ https://hacker-news.firebaseio.com/v0/item/2921983]( https://hacker-news.firebaseio.com/v0/item/2921983.json?print=pretty) This returns data for a comment and is the same URL as above. **note: the numbers in those urls are ids for stories or comments**
8. Each page should have a unique URL (ex. localhost:8080/article/12121. note, it doesn't need to work on refresh as this will require some server side modifications
9. Once you're finished, create a pull request and then assign @alexwolfe, @pierrebeaucamp, and @alex-kovoy as reviewers.

### Questions
If you have questions ping the test administrator in your slack channel or email them ASAP. **There are no dumb questions**. If you ask a question that cannot be answered the test administrator will simply let you know they cannot provide the answer.

**Good Luck!**