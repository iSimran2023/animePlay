import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-indigo-600 text-white shadow-md">
            <div className="text-2xl font-bold">
                <Link to="/" className="hover:text-indigo-200 transition-colors">Anime App</Link>
            </div>
            <div>
                <Link 
                    to="/favorites" 
                    className="px-4 py-2 rounded hover:bg-indigo-500 transition-colors"
                >
                    Favorites
                </Link>
            </div>
        </nav>
    )
}

export default Navbar