import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import Backdrop from "./components/backdrop";
import Grid from "./components/grid";
import Header from "./components/header";
import Movies from "./components/movies";
import Gridpages from "./components/page";
import Review from "./components/review";
import Sidepanel from "./components/sidepanel";
import Trending from "./components/trending";
import Epsdiv from "./components/eps";
import Recommendations from "./components/recommendations";
import Footer from "./components/footer";



function IFRAME() {

    const [Searchparams] = useSearchParams();
    const [url, getURL] = useState('');
    const [servers, setServers] = useState([]);
    const [animeData, setanimData] = useState([]);
    const [parsedDATA, setParsed] = useState([]);
    const [currentEpisode, setCurrentEpisode] = useState(1);
    const anim = Searchparams.get('anim');
    const dub = Searchparams.get('dub');

    console.log(anim);




    const fetchData = async () => {
        try {

            const animInfo = await fetch(`https://proxies-fawn.vercel.app/anime/animekai/info?id=${anim}`)
            const animData = await animInfo.json();
            setanimData(animData);
            console.log('helllloo', animeData);
            const episodeID = animData.episodes[0].id;


        } catch (error) {

            console.error(error);

        }
    }

    const handleEpisodeChange = async (episodeID, episodeNumber) => {
        try {
            const response = await fetch(
                `https://proxies-fawn.vercel.app/anime/animekai/servers/${episodeID}?${dub}`
            );

            const data = await response.json();

            setServers(data);
            getURL(data[0].url);
            setCurrentEpisode(episodeNumber);

        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {

        fetchData();

    }, [anim])


    return (
        <>
            <div className="bg-[#0D0D0D] w-full h-[400vh] flex flex-col justify-center items-center">
                <div className="container w-350 h-full flex flex-col gap-5">
                    <Header></Header>

                    <div className=" flex justify-center items-center">
                        <Backdrop></Backdrop>
                    </div>

                    <Review></Review>
                    <div className="flex flex-row justify-between items-center mt-10 gap-5">
                        <div className="flex flex-col w-full h-full gap-6">
                            <p className="text-foreground italic">  The server does not allow embedded links in iframes for now due to DDoS protection. Please click the episodes to watch.
                                . </p>
                            <iframe src={url} allowFullScreen className="w-full h-150"></iframe>
                            <Epsdiv episodes={animeData.episodes} currentEpisode={currentEpisode}
                                onEpisodeChange={handleEpisodeChange}
                            ></Epsdiv>
                            <div className="flex bg-foreground w-full h-40 flex-col">
                                <div className="flex bg-background w-full h-10 items-center text-white font-header text-sm p-3">
                                    <p>You are watching Episode 1.</p>
                                </div>

                                <div className="flex w-full h-full items-center pl-3 gap-5">

                                    <p className="text-sm w-70 font-body">If the current server doesn't work, please try the other servers below.</p>
                                    <div className="flex gap-3 items-center flex-wrap">
                                        <p className="text-md font-heading">Sub: </p>

                                        {servers.map((e) =>

                                        (<>
                                            <div className="bg-background w-30 h-6 rounded-lg cursor-pointer text-center text-foreground font-heading text-[.8rem]">{e.name}</div>


                                        </>)

                                        )}
                                    </div>


                                </div>
                            </div>


                            <div className=" w-full h-100">
                                <div className="flex p-3">
                                    <div className=" w-60 h-80">
                                        <img src={animeData.image} className="rounded-lg"></img>
                                    </div>

                                    <div className="flex flex-col p-3 gap-3">
                                        <div>
                                            <h1 className="text-foreground text-xl font-heading">{animeData.title}</h1>
                                            <h1 className="text-white text-md opacity-50 font-heading">{animeData.japaneseTitle}</h1>
                                        </div>
                                        <p className="text-white text-sm w-200 font-body">{animeData.description}</p>

                                        <div className="font-heading">
                                            <p className="text-white text-sm w-200 ">Type: {animeData.type}</p>
                                            <p className="text-white text-sm w-200 ">Status: {animeData.status}</p>
                                            <p className="text-white text-sm w-200 ">{animeData.genres}</p>


                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="flex flex-col mt-5 p-3 w-full">
                                <h1 className="font-heading text-2xl text-white opacity-90">Recommendations</h1>
                                <Recommendations animData={animeData} />
                            </div>




                        </div>




                        <div className="flex flex-col w-120 ">
                            <Trending></Trending>
                        </div>



                    </div>



                </div>

                <Footer></Footer>


            </div>
        </>
    )

}


export default IFRAME