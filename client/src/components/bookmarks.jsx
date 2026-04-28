import { useNavigate } from "react-router-dom";

function Bookmarks() {

    const saved = localStorage.getItem("watchLater");
    const parsed = JSON.parse(saved);
    const navigate = useNavigate();

    const updatedParsed = [...parsed];

    console.log(updatedParsed);

   const handleNavi = (anime)=> {

    const id = anime.id;

    navigate(`/watch?anim=${encodeURIComponent(id)}&dub=${encodeURIComponent(false)}`)

   }
    

    return (

        <>
            <div className="flex flex-row flex-wrap gap-3 gap-y-20">
                {updatedParsed.map((e) => (
                    <>
                        <div className=" h-75 w-50 cursor-pointer" onClick={() => handleNavi(e)}>
                            <img src={e.banner} className="object-cover w-full h-full rounded-md"></img>
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
                    </>
                ))} 
            </div>
        </>

    );

}

export default Bookmarks