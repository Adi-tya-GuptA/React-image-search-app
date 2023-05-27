import { useState } from "react";
// import { useState } from "react";
import "./style.css";

function Searchbar({ onsubmit }) {
  const [term, setterm] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
    // console.log(term);
    onsubmit(term);
  };
  const handlechange = (event) => {
    setterm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handlesubmit}>
        <div className="input">
          <div className="icon">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
              {/* <PhotoIcon class="h-6 w-6 text-gray-500" /> */}
            </svg>
          </div>
          <input onChange={handlechange} type="text" value={term} />
          <div className="icon search" onClick={handlesubmit}>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </div>
        </div>
      </form>
      {/* <button onClick={handleclick}>Click me</button> */}
    </div>
  );
}

export default Searchbar;