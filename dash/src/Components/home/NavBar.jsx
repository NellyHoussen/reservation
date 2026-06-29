import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function NavBar(){
    return(
      <div className="sticky top-0 z-50 flex items-center justify-between h-12 bg-gray-900 text-white px-10">
        <div className="font-bold ml-4">Logo</div>
        <div className="flex gap-5 items-center">
          <Link to="/voitures" className="cursor-pointer transition duration-300 hover:text-blue-500 hover:scale-110">Nos Voitures</Link>
          <Link to="/about" className="cursor-pointer transition duration-300 hover:text-blue-500 hover:scale-110">About</Link>
          <Link to="/contact" className="cursor-pointer transition duration-300 hover:text-blue-500 hover:scale-110">Contact</Link>
          <Link to="/connexion" className="flex items-center gap-2 px-5 py-2.5 cursor-pointer transition duration-300 ease-in hover:bg-blue-500 hover:text-white rounded">
            <FiUser/> Connexion
          </Link>
        </div>
      </div>
    )
}

export default NavBar;