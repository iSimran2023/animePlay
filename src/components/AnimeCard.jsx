function AnimeCard({anime}) {

function onFavoriteClick(){
    alert("clicked")
}
    return <div className="anime-card">
        <div className="anime-poster">
            <img src={anime.url} alt={anime.title} />
            <div className="anime-overplay">
            <button className="favorite-btn" onClick={onFavoriteClick}>♥</button>
            </div>
        </div>
        <div className="anime-info"></div>
        <h3>{anime.title}</h3>
        <p>{anime.release_date}</p>
    </div>
}

export default AnimeCard