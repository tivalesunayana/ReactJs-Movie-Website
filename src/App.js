import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SingleMovies from "./SingleMovies";
import Movies from "./Movies";
import Search from "./Search";
import Error from "./Error";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovies />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
