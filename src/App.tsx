import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/Homepage/HomePage.tsx";
import DetailsPage from "./components/MovieDetails/Detailspage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailsPage />} />
      </Routes>
    </Router> 
  )
};

export default App;
