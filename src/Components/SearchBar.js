import React, { useState, useEffect } from "react";
import youtube from "../apis/youtube.js"

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("beagles");

    const getVideos = () => {

        youtube.get('/search', {
            params : {
                q: searchTerm,
                type: 'video'
            }
        })
        .then((response) => console.log(response))
        .catch((error) => console.log("error msg API", error ))
        
    }

    return (
        <div>
            <input 
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            
            />
            <button onClick={getVideos}>Search</button>
        </div>
    )
}

export default SearchBar;