import Backdrop from "./components/backdrop";
import Grid from "./components/grid";
import Header from "./components/header";
import Review from "./components/review";
import Sidepanel from "./components/sidepanel";



function Homepage() {
    return (
        <div className="bg-[#0D0D0D] w-full h-[300vh] flex flex-col justify-center items-center">
            <div className="container w-350 h-full flex flex-col gap-5">
                <Header></Header>

                <div className=" flex justify-center items-center">
                    <Backdrop></Backdrop>
                </div>
                
                <Review></Review>
                <div className="flex flex-row justify-evenly mt-40">
                    <div className="flex flex-col w-full h-full gap-2">
                        <h1 className="font-heading text-2xl text-white opacity-90">New Releases</h1>
                        <Grid></Grid>
                    </div>
                    
                    <Sidepanel></Sidepanel>
                </div>
            </div>

        </div>
    );
}

export default Homepage