import { useEffect, useState } from "react"
import Episodes from "./Episodes";


function NavBar({page,setPage}){
  return(
    <div className="flex justify-between items-center px-10">
      <button onClick={()=>setPage(page > 1 ? page - 1 : page)} className="bg-blue-500 text-white rounded-lg px-6 py-2">Page {page-1}</button>
      <button onClick={()=>setPage(page < 3 ? page + 1 : page)} className="bg-blue-500 text-white rounded-lg px-6 py-2">Page {page+1}</button>
    </div>
  )
}

export default function EpisodesList(){
    const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(()=>{
      async function fetchData(){
        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
        const data = await response.json();
        setLoading(false)
        setEpisodes(data.results);
      }
  
      fetchData();
    },[page]);

    return(
      <div className="pb-8">
        <NavBar page={page} setPage={setPage}/>
        <div className="grid grid-cols-2 sm:grid-cols-4 pb-12 gap-4">
          
          {
            loading ? (<h1>loading...</h1>) :
            
           episodes.map(episodes =>{
            return(
              <div key={episodes.id} className="w-2/3 h-full container mx-auto flex justify-center">
                 <Episodes episodes={episodes}/>
              </div>
              
                  )
              })
          }
          
        </div>
        <NavBar page={page} setPage={setPage}/>
        </div>
    )
}