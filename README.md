# Trivia Game

This project was created for a tech interview. The main objective was to implement a full-working game of trivia, by using react-native (Expo version).

## Running

clone the repo, then:

```
$ yarn
$ yarn start
```

## Technical considerations

One of the requirements for this project was to use solely Expo, and not barebones React-Native. Because of that, no features that would require modules (like short vibrations, for instance) were implemented. Also, because of time constraints, no tests of storybooks were written. In a more complete project, I would've added tests, code coverage, and storybook for the components.

Also, the `config` folder is a convention that I used for practical purposes for this project. In a real app, I would've used environment variables (by using `dotenv` or something similar) to optimize CI/CD integrations.

Finally, the component/view structure adopted is:

- `components`: stateless elements that are shared for several views;
- `store`: the redux store and all common items (reducers, action creators, thunks, etc);
- `styles`: Shared non-semantical components (like typography);
- `utils`: shared functions for formatting, etc;
- `hooks`: shared React custom hooks;
- `views`: The actual screens of the App. Comprised of:
  - `View.tsx`: the UI component of the screen - it is meant to be disconnected from the redux store, navigators, to allow easier testing and storybooking;
  - `index.tsx`: The actual connected component, that uses the redux store and navigator to render the UI component;
  - `styledComponents.ts`: the Visual elements styled by using `styled-components`, to declutter the UI component file;
  - `components`: more complex UI components elements that are not shared with other views - and that are good candidates to be migrated to the shared `components` folder to allow reuse.
