import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-indigo-600 shadow-md">
            <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 text-white">
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-indigo-200 transition-colors">
                        Anime App
                    </Link>
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
        </div>
    );
}

export default Navbar;