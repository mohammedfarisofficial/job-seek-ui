//styles
import "./App.scss";
//router
import { Route, BrowserRouter, Routes } from "react-router-dom";
//pages
import Home from "./pages/Home/Home";
import PostJob from "./pages/PostJob/PostJob";
import About from "./pages/About/About";
import Jobs from "./pages/Jobs/Jobs";
import Insights from "./pages/Insights/Insights";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostJob />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
