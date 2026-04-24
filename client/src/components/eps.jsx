import { href, useSearchParams } from "react-router-dom"
import { useState } from "react";




function Epsdiv({ episodes = [], url }) {

    console.log(episodes);
    console.log(url);
    const [selectedGroup, setSelectedGroup] = useState(0);

    const episodePerGroup = 100;


    const totalGroups = Math.ceil(episodes.length / episodePerGroup);



    const visibleEpisodes = episodes.slice(selectedGroup * episodePerGroup, (selectedGroup + 1) * episodePerGroup);
 



    return (


        <>

            <div className="w-full h-100 bg-background flex flex-col gap-3">
                <div className="flex gap-10 p-3 text-foreground font-body">

                    {Array.from({length: totalGroups}, (_, i)=> {
                        const start = i * episodePerGroup + 1;
                        const end = Math.min((i + 1) * episodePerGroup, episodes.length);

                        return(
                            <button key={i} onClick={()=> setSelectedGroup(i)}
                            className={`px-3 py-2 rounded-md cursor-pointer ${selectedGroup === i ? " text-white" : "bg-foreground text-background"}`}
                            >

                                {start}-{end}

                            </button>
                        )
                    })}

                    

                </div>



              <div className="flex flex-wrap gap-3 p-3">
                    {visibleEpisodes.map((episodes, index)=> (
                        <button key={episodes.id} className="w-12 h-6 bg-foreground rounded-md cursor-pointer" onClick={()=> window.open(url, "_blank")}>
                            {selectedGroup * episodePerGroup + index + 1}
                        </button>
                    ))}
                </div> 



            </div>
        </>


    );

}

export default Epsdiv