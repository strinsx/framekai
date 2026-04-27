import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Movies() {


    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();


    const fetchData = async () => {
        const res = await fetch('https://proxies-fawn.vercel.app/anime/animekai/movies');
        const data = await res.json();
        setMovies(data.results)
    }

    const handleURI = (e)=> {
        const id = e.id

        navigate(`/watch?anim=${encodeURIComponent(id)}&dub=${encodeURIComponent(false)}`);

        window.location.reload();


    }


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div className="grid grid-cols-7 gap-10">
                {movies.slice(1, 8).map((e) => (
                    <>
                        <div className=" h-75 w-50 cursor-pointer" onClick={()=> handleURI(e)}>
                            <img src={e.image} className="object-cover w-full h-full rounded-md"></img>
                            <h1 className="font-body text-white text-sm text-left opacity-45 line-clamp-2 m-2">{e.title}</h1>
                        </div>
                    </>
                ))}
            </div>
        </>
    )

}


export default Movies 
