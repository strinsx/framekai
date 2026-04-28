import { href, useSearchParams } from "react-router-dom"
import { useState } from "react";




function Epsdiv({ episodes = [], onEpisodeChange, currentEpisode }) {

    console.log(episodes);
    const [selectedGroup, setSelectedGroup] = useState(0);

    const episodePerGroup = 100;


    const totalGroups = Math.ceil(episodes.length / episodePerGroup);



    const visibleEpisodes = episodes.slice(selectedGroup * episodePerGroup, (selectedGroup + 1) * episodePerGroup);




    return (


        <>

            <div className="w-full h-auto bg-background flex flex-col gap-3">
                <div className="flex gap-2 p-3 text-foreground font-body">

                    {Array.from({ length: totalGroups }, (_, i) => {
                        const start = i * episodePerGroup + 1;
                        const end = Math.min((i + 1) * episodePerGroup, episodes.length);

                        return (
                            <button key={i} onClick={() => setSelectedGroup(i)}
                                className={`px-3 py-2 rounded-md cursor-pointer ${selectedGroup === i ? " text-white" : "bg-foreground text-background"}`}
                            >

                                {start}-{end}

                            </button>
                        )
                    })}



                </div>



                <div className="flex flex-wrap gap-3 p-3">
                    {visibleEpisodes.map((episode, index) => {
                        const episodeNumber = selectedGroup * episodePerGroup + index + 1;

                        return (
                            <button
                                key={episode.id}
                                onClick={() => onEpisodeChange(episode.id, episodeNumber)}
                                className={`w-12 h-6 rounded-md cursor-pointer ${currentEpisode === episodeNumber
                                        ? "bg-background text-white"
                                        : "bg-foreground text-background"
                                    }`}
                            >
                                {episodeNumber}
                            </button>
                        );
                    })}
                </div>



            </div>
        </>


    );

}

export default Epsdiv