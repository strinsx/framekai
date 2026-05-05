import Logo from '../assets/logo.png'



function Footer() {

    return (

        <>
            <footer className="w-full bg-black h-30 flex justify-between max-sm:items-center">

                <div className="flex flex-col pl-10 justify-center">

                    <p className="text-white font-heading max-sm:text-sm">
                        Copyright &copy; {new Date().getFullYear()} FrameKai. All Rights Reserved
                    </p>

                    <p className='text-white max-sm:text-sm max-sm:line-clamp-1'>
                        FrameKai is a project-based anime streaming website built for educational and portfolio purposes.
                    </p>



                </div>


                <img src={Logo} className='mr-10 max-sm:w-20 max-sm:h-20'></img>

            </footer>
        </>


    )

}

export default Footer