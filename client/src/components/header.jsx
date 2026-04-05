import Logo from '../assets/logo.png'


function Header() {

    return (
        <nav className='flex flex-row w-full h-15'>
            <ul className='flex items-center justify-start w-full p-7 gap-15'>
                <div>
                    <img src={Logo} className='w-20'></img>
                </div>

                <div className='flex gap-15 items-center'>
                    <a href='#' className='a-headers font-heading'>Home</a>
                    <a href='#' className='a-headers font-heading'>Movies</a>
                    <a href='#' className='a-headers font-heading'>Trending</a>
                </div>

                    <input type='text' placeholder='Search' className='bg-[#00FF85] text-black w-70 h-7 p-2 rounded-md placeholder:text-black'></input>


            </ul>
        </nav>
    );

}


export default Header