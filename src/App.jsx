import CharacterList from "./components/CharacterList";

export default function App(){

  return(
    <div className="bg-gray-950 text-white">
      <h1 className="text-center py-4 text-6xl">Rick and Morty</h1>
      <CharacterList/>
    </div>
  )
}