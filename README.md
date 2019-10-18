# Hacker News Frontend Challenge

### Objective
The goal of this challenge is to recreate a light weight version of [hackernews](https://news.ycombinator.com/) using React and the [Firebase Hackernews API](https://github.com/HackerNews/API). You can make improvements to the UI of Hacker News if you wish (not required), however please keep the spirit of the site the same (At most it should look like an updated version of HN)

### Example
You can find a working example here:
- [https://yc-demo-8bde7.firebaseapp.com](https://yc-demo-8bde7.firebaseapp.com)

### Tech Stack
- [Hacker News Firebase API](https://github.com/HackerNews/API) (this is where you will get the data)
- [React](https://reactjs.org/docs/getting-started.html) (You will use react to create your UI)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) (please use this to navigate to each page)
- Data Storage - You can use whatever you want but using redux is not required for this small app. In fact no store is required.
- Styles/CSS - [Styled components](https://www.styled-components.com/) package is already included, however if you'd like to use a more traditiaonal feel free to
- [Firebase Hosting](https://firebase.google.com/) - Firebase config is setup to allow for Firebase Hosting. You can create a Firebase account if you'd like to use this feature
- [Webpack](https://webpack.js.org/) - Webpack is already setup with Babel and plugins to complile react. Feel free to modify this file.

### Tips
Although you could probably just make normal ajax requests for to the firebase api to get data, I would strongly reccomend using the Firebase library and subscribing to the Firebase URLs for those data endpoints. This will allow you to get large amounts of data without making http requests. You can learn more about reading data from a Firebase URL in [their documenation](https://firebase.google.com/docs/database/web/read-and-write?authuser=0). Also, keep in mind you will be reading from the Hacker News Firebase, so when you initilize your firebase app it will look like this:
```
firebase.initializeApp({
  authDomain: "hacker-news.firebaseio.com",
  databaseURL: "https://hacker-news.firebaseio.com",
});
```

### Setup Directions
This repo is setup with webpack and the npm modules needed to get started. To start the project simply do the following:
1. run `npm install`
2. run `npm run start` this will start a dev server on [http://localhost:8080](http://localhost:8080).
3. Modify code in the `/src` directory. The page will automatically update
4. When you're done, commit your code to github so it can be checked out and reviewed
5. The test must be completed within **24-48 hours**.

### Build
1. To build the production version of your app run `npm run build`
2. The run `firebase deploy` assuming you setup firebase hosting

### Questions
If you have questions ping the test administrator in your slack channel or email them ASAP. **There are no dumb questions**. If you ask a question that cannot be answered the test administrator will simply let you know they cannot provide the answer.

**Good Luck!**