import { useEffect, useState } from "react";



function Grid() {

    const [newReleases, setNewreleases] = useState([]);

    const fetchData = async () => {
        const res = await fetch('https://proxies-fawn.vercel.app/anime/animekai/new-releases');
        const data = await res.json();
        setNewreleases(data.results);
        console.log(data.results);
    }

    useEffect(() => {

        fetchData();

    }, [])

    return (
        <>
            <div className=" grid grid-cols-5 w-full h-200"> {newReleases.slice(0, 10).map((e) => (
                <>
                    <div className=" h-75 w-50">
                        <img src={e.image} className="object-cover w-full h-full rounded-md"></img>
                        <div className="flex flex-col">
                            <h1 className="font-body text-white text-sm text-left opacity-45 line-clamp-1 m-2">{e.title}</h1>
                            <div className="flex flex-row">
                                <div className="bg-[#00FF85] w-10 text-center rounded-4xl h-4 text-[0.7rem] font-heading">CC: {e.episodes}</div>
                            </div>

                        </div>
                    </div>
                </>
            ))}

            </div>
        </>
    );

}

export default Grid