import { Provider } from "react-redux";
import { store } from "./app/store";

import MediaPlayer from "./components/MediaPlayer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <MediaPlayer />
    </Provider>
  );
}

export default App;
