import { Search } from "./Search";

function MobileToggle() {
  var x = document.getElementById("mob-menu-items");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

export function Navbar({ movies, query, setQuery }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <div className="hide-div">
        <Search query={query} setQuery={setQuery} />
      </div>
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
      <div className="mob-menu">
        <p onClick={MobileToggle}>≣</p>
        <div className="mob-menu-items" id="mob-menu-items">
          <p className="mob-close" onClick={MobileToggle}>
            ×
          </p>
          <p className="mob-num-results">
            Found <strong>{movies.length}</strong> results
          </p>
          <Search />
        </div>
      </div>
    </nav>
  );
}
