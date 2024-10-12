### Media Slideshow


> Task:
Create a media player skeleton that loads a playlist of slides (images and videos), plays them in sequence, and loops indefinitely using state management (Redux for React or Vuex/Pinia for Vue).

Key Requirements (Simplified):

	1.	Mock server request:
	  •	Simulate a server request to fetch a playlist with 2-3 slides (both images and videos).
	  •	Each slide will have the fields: id, duration, src, type (either image or video).
	2.	Loader:
	  •	Display a loading spinner while the playlist is being fetched from the mock server.
	  •	Start the slideshow as soon as the playlist is loaded.
	3.	Slideshow logic:
	  •	Play the slides in sequence based on the provided duration.
	  •	Loop back to the first slide after the last one is shown.
	4.	Basic state management:
	  •	Use Redux (for React) or Vuex/Pinia (for Vue) to manage the playlist and current slide index.

JSON example:
```json
[
  {
    "id": 1,
    "type": "image",
    "src": "https://via.placeholder.com/800x600.png?text=Sample+Image+1",
    "duration": 5
  },
  {
    "id": 2,
    "type": "video",
    "src": "https://www.w3schools.com/html/mov_bbb.mp4",
    "duration": 10
  },
  {
    "id": 3,
    "type": "image",
    "src": "https://via.placeholder.com/800x600.png?text=Sample+Image+2",
    "duration": 4
  }
]
```

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
