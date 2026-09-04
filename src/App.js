import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Favorites from "./pages/favorites";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Movie />} />
                <Route path="/favoritos" element={<Favorites />} />
            </Routes>
        </div>
    );
};

export default App;
