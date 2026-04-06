import { useEffect, useState } from "react";



function Gridpages() {


    const [latest, setLatest] = useState([]);


    const fetchData = async () => {
        const res = await fetch('https://proxies-fawn.vercel.app/anime/animekai/latest-completed');
        const data = await res.json();
        console.log(data.results);
        setLatest(data.results)
    }


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div className="grid grid-cols-7 gap-10">
                {latest.slice(0, 7).map((e) => (
                    <>
                        <div className=" h-75 w-50 ">
                            <img src={e.image} className="object-cover w-full h-full rounded-md"></img>
                            <h1 className="font-body text-white text-sm text-left opacity-45 line-clamp-2 m-2">{e.title}</h1>
                        </div>
                    </>
                ))}
            </div>
        </>
    )

}

export default Gridpages