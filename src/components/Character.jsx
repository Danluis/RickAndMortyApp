export default function Character({character}){
    return(
        <div className="flex items-center text-center pt-8" key={character.id}>
            <div className="">
                <h3 className="pb-2">{character.name}</h3>
                <img className="rounded-full" src={character.image} alt={character.name} />
                <p className="pt-2">{character.origin.name}</p>
            </div>
        </div>
    )
}