# GetGround Frontend Developer Test

This is my solution of the GetGround tech assessment.
Sorry for having delayed this, but I had a personal problem that basically prevent me from working for most of the last 2 weeks.

I'm unfamiliar with Redux, on my company we manage the global state of the application (either on the monorepo or on the micro-frontends applications) with the Context API, so I had to reuse an old project of mine that I did in parallel with a Redux course, so the dependencies are not updated.

On my company we use functional components and styled-components (instead of CSS/SASS), however, for this, as a way of saving a bit of time, I decided to also use Material-UI with emotion (more or less the same philosophy of styled-components :)) to develop the application.

It was mostly useful for the page and for the pagination.

Considering the amount of data being retrieved from the API, I thought that displaying a table with the possibility of going through several pages was more appropriate instead of an infinite scrolling, or a 'load more' button.

I tried using some performance enhancements, like useCallback and useMemo hooks.
I discarded the chance of using React.Lazy (and Suspense), as I don't think it's worth to use that React feature on such a small application.

### Features
- Tech stack: Typescript, React (functional and classes), Material-UI, Emotion, RTL, Jest, Redux;
- There is a loading state to display while the data is being fetched;
- The data is being fetched and saved with Thunks pattern;
- The search queries are being stored/persisted on the URL;
- To clear any search just click on the 'X' on the search-bar, on the GetGround text;
- There is the possibility of filtering books by the nationality of their writers by clicking on the buttons above the search bar;
- There are some unit-tests, for example on the button, button-link and pagination components;
- There are some class based components, like the button, button-link or banner;
- I've decoupled some logic into custom hooks in order to streamline some components and also exercise some kind of separation of concerns.

### Possible improvements
- Eventually adding a debouncer for the search-bar option;
- Eventually enabling the user to search by books after filtering (for example, search on italian books category, or german, etc);
- More unit tests;
- Responsive design (albeit hard to implement given the requirements).

### Getting started

### `npm install`

Install all the needed dependencies.

#### `npm start`

Runs the app in the development mode.

#### `npm test`

Runs the app in the test mode. To run all test suits press a.