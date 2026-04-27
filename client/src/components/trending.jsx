import { useEffect, useState } from "react";
import { } from '@fortawesome/free-regular-svg-icons'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Trending() {

    const [topTrending, setToptrending] = useState([]);
    const [hover, setHover] = useState(null);
    const navigate = useNavigate();



    const fetchData = async () => {
        const res = await fetch('https://proxies-fawn.vercel.app/anime/animekai/spotlight');
        const data = await res.json();
        console.log(data)
        setToptrending(data.results);
    }

    const handleURI = (e)=> {

        const id = e.id;

        navigate(`/watch?anim=${encodeURIComponent(id)}&dub=${encodeURIComponent(false)}`)

        window.location.reload();

    }


    useEffect(() => {
        fetchData();
    }, [])


    return (

        <>
            <div className=" w-full h-200 bg-transparent rounded-lg mt-10 flex flex-col">

                <h1 className="text-foreground font-heading m-3 text-lg">Top Trending</h1>
                <div className="flex flex-col gap-5">
                    {topTrending.slice(0, 7).map((e, index) => (
                        <>
                            <div className="bg-transparent w-full h-20 flex items-center justify-around cursor-pointer" onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)}>
                                <h1 className="text-foreground font-heading text-2xl rounded-full">{index + 1}</h1>
                                <img src={e.banner} onClick={()=> handleURI(e)} className="bg-amber-500 h-20 w-[85%] object-cover rounded-2xl saturate-10">
                                </img>

                                {hover === index && (
                                    <>

                                        <div className="bg-background w-90 h-55 rounded-2xl left-[49%] absolute flex flex-col z-1">
                                            <div className="flex flex-col relative">

                                                <h1 className="text-lg mt-3 mr-3 text-right text-foreground font-heading line-clamp-2">{e.title}</h1>
                                                <div className="flex relative justify-end m-3 gap-2">
                                                    {e.genres.map((i) => (
                                                        <>
                                                            <div className="rounded-2xl bg-foreground w-20 h-3 text-[.5rem] text-center font-heading">
                                                                {i}
                                                            </div>

                                                        </>
                                                    ))}
                                                </div>
                                                <p className="text-[.7rem] text-right text-foreground font-heading mb-2 mr-3">{e.japaneseTitle}</p>
                                                <p className="text-[.5rem] text-right text-foreground font-heading mb-2 mr-3">{e.description}</p>
                                            </div>



                                        </div>



                                    </>
                                )}
                            </div>
                        </>
                    ))}

                </div>

            </div>

        </>

    );



}

export default Trending