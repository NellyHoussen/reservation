//import modules image
import NavBar from "./Components/home/NavBar";
import AvantageSliper from "./Components/home/AvantageSliper";
import Reserver from "./Components/home/Reserver";
function App() {
  /*
  h-* : hauteur
  flex : active flexbox
  justify-between : espace entre éléments
  items-center:aligne text
  gap-* : espace entre items
  p-* : padding
  font-bold : texte gras
  ml-* / mr-* : marges gauche/droite
  cursor-pointer : élément cliquable
  hover:* : effet au survol
  transition + duration : animation fluide
  -------------------------** npm install react-icons----------------
  --->import pour apporter des icons

  */


    
    
return (
    <div >
     <NavBar />
      <main>
        <AvantageSliper />
      </main>
      <Reserver/>
    </div>
);
} 

export default App;