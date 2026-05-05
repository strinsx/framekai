import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";



function Grid() {

    const [newReleases, setNewreleases] = useState([]);
    const [getId, setgetId] = useState('');
    const [url, setURL] = useState('');
    const [isDub, setisDub] = useState(false);
    const navigate = useNavigate();

    const fetchData = async () => {
        const res = await fetch('https://proxies-fawn.vercel.app/anime/animekai/new-releases');
        const data = await res.json();
        setNewreleases(data.results);
        console.log(data.results);
    }

    useEffect(() => {

        fetchData();

    }, [])

    useEffect(() => {
    if (getId) { // only fetch when getId has a value
        fetchUrl();
    }
}, [getId]);





    console.log(getId);

    const fetchUrl = async () => {
        try {

            const url = await fetch(`https://proxies-fawn.vercel.app/anime/animekai/info?id=${getId}`);
            const data = await url.json();
            console.log(data.episodes[0].id);
            console.log(data);
           const episodeIDs = data.episodes[0].id;
           const isDub = false;

           await navigate(`/watch?anim=${encodeURIComponent(getId)}&dub=${encodeURIComponent(isDub)}`);
           
           

/*      
            const getServer = await fetch(`https://proxies-fawn.vercel.app/anime/animekai/servers/${episodeID}?dub=${isDub}`)
            const getServerdata = await getServer.json();
            console.log(getServerdata);
            const serverID = await getServerdata[1].url
            setURL(getServerdata[1].url);


            const getlinks = await fetch (`https://proxies-fawn.vercel.app/anime/animekai/watch/${episodeID}?server=${serverID}&dub=false`); 
            const datas = await getlinks.json();
            console.log(datas);  
 */
            

        } catch (error) {
            console.error(error)
        }
    }



    return (
        <>
                
       
            <div className=" grid grid-cols-5 w-full h-400 max-sm:grid-cols-2 max-sm:w-85 max-sm:gap-y-20"> {newReleases.slice(0, 20).map((e) => (
                <>
                    <div className=" h-75 w-50 cursor-pointer max-sm:h-60 max-sm:w-40" onClick={() => setgetId(e.id)}>
                        <img src={e.image} className="object-cover w-full h-full rounded-md" ></img>
                        <div className="flex flex-col">
                            <h1 className="font-body text-white text-sm text-left opacity-45 line-clamp-1 m-2">{e.title}</h1>
                            <div className="flex flex-row gap-2 justify-between">
                                <div className="flex gap-4">
                                    <div className="bg-[#00FF85] w-10 text-center rounded-4xl h-4.5 text-[0.7rem] font-heading">CC: {e.episodes}</div>
                                    <div className="bg-transparent text-[#00FF85] w-10 text-center rounded-4xl h-4.5 text-[0.7rem] font-heading border-[#00FF85] border-1 ">SUB: {e.sub}</div>

                                </div>
                                <div className="flex">
                                    <div className="bg-transparent text-[#00FF85] w-10 text-center rounded-4xl h-4 text-[0.7rem] font-heading">TYPE: {e.type}</div>
                                </div>
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