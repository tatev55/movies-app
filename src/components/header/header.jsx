  import { useRef, useContext, useEffect } from "react";
  import { MoviesContext, tab } from "../../contexts/movies-context";
  import Button from "../button/button"
  import "./header.css";

  export const Header = () => {
    const { searchQuery, onSearch,} = useContext(MoviesContext);
    const inputRef = useRef(null);
    const { setActiveTab, activeTab } = useContext(MoviesContext);



    useEffect(() => {
      inputRef?.current?.focus();
    }, []);

    return (
      <div className="header-container">
        <div className="transparent-background"></div>
        <div className="title-app">
          <h1 className = "movies-title">Movies</h1>
          <i className="fa-solid fa-film"></i>
        </div>
          <header className = "header">
          <h2 className="header-text">Unlimited movies, TV shows, and more</h2>
          <p className="about-text">Yoy can search for your favorite movie and watch.</p>
              <input
                ref={inputRef}
                value={searchQuery}
                type="text"
                className="search-input"
                placeholder="Search..."
                onChange={(e) => onSearch(e.target.value)}
              />
              <ul className="nav-tabs">
                <li className="nav-list">
                  <Button
                    onClick={() => setActiveTab(tab.search)}
                    className="nav-item"
                  >
                    Search Movies
                    <i className={activeTab === tab.search ? "fa-solid fa-chevron-right active" : "fa-solid fa-chevron-right"}></i>
                  </Button>
                </li>
                <li className="nav-list">
                  <Button
                    onClick={() => setActiveTab(tab.movies)}
                    className="nav-item"
              
                  >
                    My Movie List
                    <i className={activeTab === tab.movies ? "fa-solid fa-chevron-right active" : "fa-solid fa-chevron-right"}></i>
                  </Button>
                </li>
                <li className="nav-list">
                  <Button
                    onClick={() => setActiveTab(tab.quiz)}
                    className="nav-item"
                    
                  >
                    Quiz
                    <i className={activeTab === tab.quiz ? "fa-solid fa-chevron-right active" : "fa-solid fa-chevron-right"}></i>
                  </Button>
                </li>
              </ul>
          </header>
      </div>
      
    );
  };


