import Backdrop from "./components/backdrop";
import Footer from "./components/footer";
import Grid from "./components/grid";
import Header from "./components/header";
import Movies from "./components/movies";
import Gridpages from "./components/page";
import Review from "./components/review";
import Sidepanel from "./components/sidepanel";
import Trending from "./components/trending";




function Homepage() {
    return (
        <div className="bg-[#0D0D0D] w-full min-h-screen flex flex-col justify-center items-center max-sm:grid max-sm:grid-cols-1  max-sm:overflow-x-hidden">
            <div className="container w-350 h-full flex flex-col gap-5  ">
                <Header></Header>

                <div className=" flex justify-center items-center max-sm:justify-start max-sm:order-1">
                    <Backdrop></Backdrop>
                </div>

                <div className="max-sm:order-2">
                    <Review></Review>
                </div>
                <div className="flex flex-row justify-between mt-40 max-sm:mt-10 max-sm:order-3 max-sm:flex-col max-sm:m-10 ">
                    <div className="flex flex-col w-full h-full gap-2 max-sm:justify-center max-sm:order-2 ">
                        <h1 className="font-heading text-2xl text-white opacity-90">New Releases</h1>
                        <Grid></Grid>
                    </div>


                    <div className="flex flex-col w-90  max-sm:order-1">
                        <Sidepanel></Sidepanel>
                        <Trending></Trending>
                    </div>



                </div>

                <div className="flex flex-col mt-10 max-sm:order-4 max-sm:hidden">
                    <h1 className="font-heading text-2xl text-white opacity-90">Latest Complete</h1>
                    <Gridpages></Gridpages>
                </div>


                <div className="flex flex-col mt-40 max-sm:hidden">
                    <h1 className="font-heading text-2xl text-white opacity-90 mb-2">Movies</h1>
                    <Movies></Movies>
                </div>

            </div>

            <div className="mt-45 w-full max-sm:mt-450">
                <Footer></Footer>
            </div>

        </div>
    );
}

export default Homepage