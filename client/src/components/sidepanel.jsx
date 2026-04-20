import { useEffect, useState } from "react";
import { } from '@fortawesome/free-regular-svg-icons'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidepanel() {

    const [genres, setGenres] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [cup, setCup] = useState([]);


    const fetchData = async () => {
        const res = await fetch('https://proxies-fawn.vercel.app/anime/animekai/schedule/monday}');
        const genreRes = await fetch('https://proxies-fawn.vercel.app/anime/animekai/genre/list');
        const data = await genreRes.json();
        console.log(data)
        setGenres(data);
    }


    useEffect(() => {
        fetchData();
    }, [])


    return (

        <>
            <div className=" w-80 h-80 bg-background rounded-lg mt-10 flex flex-col border-1 border-foreground">
                <h1 className="text-foreground font-heading text-2xl m-5 ">Quick filter</h1>
                <div className="flex flex-col items-center gap-3">
                    <div className=" text-lg relative font-heading bg-background text-foreground border-1 border-foreground font-semibold rounded-lg w-70 text-center cursor-pointer" onClick={() => setClicked(!clicked)}>Genres <FontAwesomeIcon icon={faAnglesDown}></FontAwesomeIcon>
                        {clicked && (
                            <div className="bg-foreground w-full h-75 rounded-lg grid grid-cols-3 p-5 absolute">
                                {genres.map((e) => (
                                    <>
                                        <div className="text-background text-[0.7rem] font-body text-left ">{e}</div>
                                    </>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-3">

                        <div className="text-lg font-heading bg-foreground text-background rounded-lg w-70 text-center cursor-pointer" >Ova </div>
                        <div className="text-lg font-heading bg-foreground text-background rounded-lg w-70 text-center cursor-pointer" >Ona </div>
                        <div className="text-lg font-heading bg-foreground text-background rounded-lg w-70 text-center cursor-pointer" >Tv series </div>
                        <input type="text" placeholder="Search.." className="w-full h-5 text-center text-sm font-body focus:outline-none focus:ring-0e text-foreground"></input>
                        <button className="bg-foreground font-heading cursor-pointer h-full rounded-2xl ">Submit</button>
                    </div>

                </div>
            </div>
            
        </>

    );



}

export default Sidepanel