import { useState } from "react";
import AnimeCard from "../components/AnimeCard"

function Home(){
    const[searchQuery, setSearchQuery] = useState("");

    const animes = [
        {id: 1, title: "Naruto: Shippuden", release_date: "2007"},
        {id: 2, title: "Jujutsu Kaisen", release_date: "2020"},
        {id: 3, title: "Gachiakuta", release_date: "2025"},
        {id: 4, title: "Your Lie in April", release_date: "2014"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for animes..." 
            className="search-input" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="animes-grid">
            {animes.map(
                (anime) => 
            anime.title.toLowerCase().startsWith(searchQuery) && (
                <AnimeCard anime={anime} key={anime.id} />
              )
            )}
        </div>
    </div>
}

export default Home