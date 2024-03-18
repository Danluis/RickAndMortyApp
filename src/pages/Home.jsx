import CharacterList from "../components/Home/CharacterList";
import Navbar from "../components/Home/Navbar";
export default function Home(){

  return(
    <div className="bg-gray-950 text-white">
      <h1 className="text-center py-4 sm:text-6xl text-5xl mb-8">Rick and Morty Characters</h1>
      <Navbar/>
      <CharacterList/>
    </div>
  )
}