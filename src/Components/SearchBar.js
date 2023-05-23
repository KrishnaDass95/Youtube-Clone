import React, { useState, useEffect } from "react";
import youtube from "../apis/youtube.js"

const SearchBar = ({ addVideos }) => {

    const [searchTerm, setSearchTerm] = useState("beagles");

    // add a useEffect here later to search for a default thing
    useEffect(() => getVideos(), [])

    const getVideos = () => {

        youtube.get('/search', {
            params : {
                q: searchTerm,
                type: 'video'
            }
        })
        .then((response) => addVideos(response.data.items))
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