import { useEffect, useState } from "react"
import Character from "./Character";


function NavBar({page,setPage}){
  return(
    <div className="flex justify-between items-center px-10">
      <p>Page {page}</p>
      <button onClick={()=>setPage(page + 1)} className="bg-blue-500 text-white rounded-lg px-6 py-2">Page {page+1}</button>
    </div>
  )
}

export default function CharacterList(){



    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(()=>{
      async function fetchData(){
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        setLoading(false)
        setCharacters(data.results);
      }
  
      fetchData();
    },[page]);

    return(
      <div>
        <NavBar page={page} setPage={setPage}/>
        <div className="grid grid-cols-3 pb-12 gap-4">
          
          {
            loading ? (<h1>loading...</h1>) :
            
           characters.map(character =>{
            return(
              <div key={character.id} className="w-2/3 h-full container mx-auto flex justify-center">
                 <Character character={character}/>
              </div>
                  )
              })
          }
        </div>
        </div>
    )
}