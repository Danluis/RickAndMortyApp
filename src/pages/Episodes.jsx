
import EpisodesList from "../components/Episodes/EpisodesList";
import Navbar from "../components/Home/Navbar";
export default function Episodes(){

  return(
    <div className="bg-gray-950 text-white">
      <h1 className="text-center py-4 sm:text-6xl text-5xl mb-8">Rick and Morty Episodes</h1>
      <Navbar/>
      <EpisodesList/>
    </div>
  )
}