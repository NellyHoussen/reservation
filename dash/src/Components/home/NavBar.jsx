import { FiUser } from "react-icons/fi";
function NavBar(){
    return(
    <div className=" flex items-center justify-between h-12 bg-gray-900 text-white px-10" >
      <div className="font-bold ml-4">Logo</div>
      <div className="flex gap-5 items-center">
        <span  className="cursor-pointer transition duration-300 hover:text-blue-500 hover:scale-110">Nos Voiture</span>
        <span className="cursor-pointer transition duration-300 hover:text-blue-500 hover:scale-110">About</span>
        <span className="cursor-pointer transition duration-300 hover:text-blue-500 hover:scale-110">Contact</span>
          <button className="flex items-center gap-2 px-5 py-2.5 cursor-pointer transition duration-300 ease-in hover:bg-blue-500 hover:text-white rounded">
            <FiUser/> Connexion</button>
      </div>
    </div>
    )

}
export default NavBar;