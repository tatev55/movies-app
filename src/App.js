import React, { useContext } from "react";
import { Header } from "./components/header/header";
import { SearchMovies } from "./pages/search-movies/search-movies";
import { Movies } from "./pages/movies/movies";
import { Quiz } from "./pages/quiz/quiz";
import { MoviesProvider, tab, MoviesContext } from "./contexts/movies-context";



const Layout = () => {
  const { activeTab } = useContext(MoviesContext);



  return (
    <>
      {activeTab === tab.search && <SearchMovies />}
      {activeTab === tab.movies && <Movies />}
      {activeTab === tab.quiz && <Quiz />}
    </>
  );
};

function App() {
  return (
    <MoviesProvider>
      <div>
        <Header />
        <Layout />
      </div>
    </MoviesProvider>
  );
}

export default App;
