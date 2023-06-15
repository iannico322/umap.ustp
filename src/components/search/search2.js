import React, { useState } from "react";
import Magnifying from "./../../media/image/Magnifier.png";
import Ex from "../../media/image/x-icon.svg";
// import {rooms} from "./rooms"

import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { users } from "./../../cache/userCredentials";
import { searchs, addSearch } from "../../cache/userSearch";
import { rooms } from "../../cache/umapRoom";


// const SearchLog = (text, userid) => {
//   const url = "http://localhost/umap-server/searchlog.php";
//   let fData = new FormData();
//   fData.append("searchtext", text);
//   fData.append("timestamp", displayTime());
//   fData.append("userid", userid);
//   axios.post(url, fData).catch((error) => alert(error));
// };

export const Search2 = (props) => {
  const [show, setShow] = useState(false);
  const roomses = useSelector(rooms);
  const dispatch = useDispatch();
  const searches = useSelector(searchs);
  const [query, setQuery] = useState(""); // state to hold the search query
  const [suggestions, setSuggestions] = useState([]); // state to hold the suggestions
  const [originalSearchTerm, setoriginalSearchTerm] = useState(""); // state to hold the temporary query when hovering over a suggestion

  const search = (event) => {
    const searchTerm = event.target.value;
    if (searchTerm === "") {
      setShow(false);
    } else {
      setShow(true);
    }

    setQuery(searchTerm.toLowerCase());
    setoriginalSearchTerm(searchTerm.toLowerCase()); // update the search query
    const suggestions = roomses[0].filter(
      (word) =>
        word.roomName.toLowerCase().startsWith(query) ||
        word.roomName.toLowerCase().includes(query)
    ); // filter the words that match the query
    setSuggestions(suggestions.slice(0, 10)); // update the suggestions state with the top 5 matching words
  };

  const selectSuggestion = (suggestion) => {
    setQuery(suggestion); // update the search query with the selected suggestion
    setSuggestions([]); // clear the suggestions
  };

  const handleHover = (suggestion) => {
    setQuery(suggestion); // update the temporary query with the hovered suggestion
  };

  const handleHoverOut = () => {
    dispatch(
      addSearch({
        location: "",
        buildingID: "",
        room: "",
        floor: "",
        block: "",
      })
    );
    setQuery(originalSearchTerm); // clear the temporary query
  };

  return (
    <div className="relative w-full h-full ">
      <div className="relative flex flex-col justify-end w-full h-14 ">
      <p className="text-base text-[#323232] mb-1 font-semibold">Distination</p>
        <input
          id="animationActived"
          type="text"
          className= "  p-2 pl-4 text-sm  outline-none focus:border-yellow   border-[1px] border-[#9494945a] rounded-md w-full box-border  "

          placeholder="search something"
          value={query}
          onChange={search}
        />

        
      </div>

      <ul
        id="animatedUL"
        className={
          show
            ? " scroll w-full  mt-1 gap-2 min-h-[0px] max-h-[300px] bg-[#ffffff53] border-[1px] border-[#80808058] backdrop-blur-sm overflow-y-scroll rounded-md absolute self-end "
            : "hidden"
        }
      >
        {suggestions == 0 ? (
          <div className="flex items-center justify-center w-full h-12 ">
            <h1 className=" text-[#484848] cursor-pointer border-[#80808058]">
              No result found
            </h1>
          </div>
        ) : (
          suggestions.map((suggestion, key) => (
            <li
              className="px-2 py-2 border-b-[1px] hover:bg-[#1aff004f] text-[#484848] cursor-pointer border-[#80808058] text-base font-medium truncate "
              key={key}
              onClick={() => {
                selectSuggestion(suggestion.roomName);
                setShow(false);
             
                props.onDistination(`${suggestion.roomID}`)
                

                
              
              }}
              onMouseOver={() => {
                handleHover(suggestion.roomName);
                dispatch(
                  addSearch({
                    location: "",
                    buildingID: `${suggestion.buildingNumber}`,
                    room: suggestion.roomName,
                    floor: `F ${suggestion.floorNumber}`,
                    block: `B ${suggestion.blockNumber}`,
                  })
                );
              }}
              onMouseOut={handleHoverOut}
            >
              {suggestion.roomName}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
