import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<MovieDetails />} path="/movies/:movieId" />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
