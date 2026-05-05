import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




function Backdrop() {

    const [backdrop, setBackdrop] = useState(null);
    const [spotlight, setSpotlight] = useState([]);
    const [watchLater, setWatchLater] = useState([]);

    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await fetch('https://framekai.onrender.com/spotlight');
        const data = await response.json();
        console.log(data[0]);

        setBackdrop(data[2].banner);
        setSpotlight(data);
    }


    const watchSubmit = (anime) => {
        const saved = JSON.parse(localStorage.getItem("watchLater")) || [];

        const updatedWatchLater = [...saved, anime];

        const exists = saved.some(item => item.id === anime.id);

        if(exists) {
            return;
        }

        localStorage.setItem("watchLater", JSON.stringify(updatedWatchLater));

        setWatchLater(updatedWatchLater);

        alert("BOOKMARK ADDED");
    };

    const handleURI = (e) => {

        const id = e.id

        navigate(`/watch?anim=${encodeURIComponent(id)}&dub=${encodeURIComponent(false)}`)


    }

    useEffect(() => {

        fetchData();

    }, [])

    return (
        <>
            <div className="h-150 flex relative max-sm:h-100">
                {spotlight.slice(0, 1).map((e, index) => (<>

                    <img src={e.banner} className="w-350 object-cover rounded-sm saturate-160 border border-gray-200/50 max-sm:w-full"></img>
                    <div className="absolute inset-0 flex justify-end flex-col gap-3 m-12 ">
                        <div className="flex gap-5">
                            {e.genres.map((i) => (
                                <>
                                    <h1 className="rounded-2xl bg-[#00FF85] text-center w-20 text-sm font-heading cursor-pointer truncate max-sm:w-15 max-sm:h-5 max-sm:text-sm">{i}</h1>
                                </>
                            ))}
                        </div>
                        <h1 className="h1-headers font-heading text-2xl max-w-90 max-sm:text-md max-sm:line-clamp-2">{e.title}</h1>
                        <p className="text-white opacity-90 max-w-120 line-clamp-2 text-sm font-body">{e.description}</p>
                        <div className="flex flex-row gap-5">
                            <button className="bg-[#00FF85] w-25 h-10 rounded-md font-body font-bold cursor-pointer" onClick={() => handleURI(e)}>Play</button>
                            <button className="bg-transparent w-30 h-10 rounded-md font-body font-bold text-[#00FF85] cursor-pointer border p-1 text-sm" onClick={() => watchSubmit(e)} >Watch Later</button>
                        </div>
                    </div>

                </>))}

            </div>
        </>
    );
}

export default Backdrop