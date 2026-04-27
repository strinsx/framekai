
import { useSearchParams } from "react-router-dom"
import Header from "./components/header";
import Review from "./components/review";
import Sidepanel from "./components/sidepanel";
import Trending from "./components/trending";
import Footer from "./components/footer";
import Search from "./components/search";
import { useEffect, useState } from "react";


function Browser() {

    const [searchparams] = useSearchParams();
    const [query, setQuery] = useState([]);
    

    const anim = searchparams.get('anim');
    console.log(anim);

    const fetchData = async()=> {
        try {

            const response = await fetch(`https://proxies-fawn.vercel.app/anime/animekai/${anim}?page=1`)
            const data = await response.json();
            console.log(data);
            setQuery(data.results);
            
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(()=> {

        fetchData();

    },[anim])

    return(

        <>
        <div className="bg-[#0D0D0D] w-full h-[430vh] flex flex-col justify-center items-center">
            <div className="container w-350 h-full flex flex-col gap-5">
                <Header></Header>


                <div className="flex flex-row justify-between mt-10">
                    <div className="flex flex-col w-full h-full gap-2">
                        <h1 className="font-heading text-2xl text-white opacity-90">{anim}</h1>
                        <Search props={query}/>
                    </div>

                   
                    <div className="flex flex-col w-90 ">
                         <Sidepanel></Sidepanel>
                        <Trending></Trending>
                    </div>

                    

                </div>

            


              

            </div>

            <Footer></Footer>

        </div>
        </>
    )

}

export default Browser