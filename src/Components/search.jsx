import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchAction } from "./../app/reducer";

export default function Search() {
  let [searchInput, setSearchInput] = useState("London");
  const dispatchNow = useDispatch();

  let onSearchHandle = () => {
    let url =
      "http://api.weatherapi.com/v1/current.json?key=254b2ff666be4fdfb84105611222103&q=" +
      searchInput +
      "&aqi=no";

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }

        return res.json();
      })
      .then(
        (result) => {
          dispatchNow(searchAction(result));
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex" style={{ margin: "auto" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(evt) => {
                setSearchInput(evt.target.value);
              }}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={onSearchHandle}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
