import Backdrop from "./components/backdrop";
import Header from "./components/header";
import Review from "./components/review";



function Homepage() {
    return (
        <div className="bg-[#0D0D0D] w-full h-[200vh] flex flex-col justify-center items-center">
            <div className="container w-350 h-full">
                <Header></Header>

                <div className="flex-1 flex justify-center items-center h-170">
                    <Backdrop></Backdrop>
                </div>
                
                <Review></Review>
            </div>

        </div>
    );
}

export default Homepage