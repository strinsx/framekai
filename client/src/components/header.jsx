import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from './login';
import AuthForm from './login';





function Header() {

    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [authType, setAuthType] = useState("login");
    const [isOpen, setisOpen] = useState(false);
    const handleSubmit = (e) => {

        e.preventDefault();


        if (query === "") {
            return
        }

        navigate(`/browser?anim=${encodeURIComponent(query)}&page=${encodeURIComponent(1)}`)

    }

    const watchlater = () => {
        navigate('/watchlater');
    }

    return (
        <nav className='flex flex-row w-full h-15 '>
            <ul className='flex items-center justify-evenly w-full p-7 gap-15'>
                <div>
                    <img src={Logo} className='w-20'></img>
                </div>

                <div className='flex gap-15 items-center'>
                    <a href='/' className='a-headers font-heading'>Home</a>
                    <a className='a-headers font-heading'>Movies</a>
                    <a onClick={watchlater} className='a-headers font-heading cursor-pointer'>Watch Later</a>
                </div>

                <form onSubmit={handleSubmit}>
                    <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search' className='bg-[#00FF85] text-black w-70 h-7 p-2 rounded-md placeholder:text-black'></input>
                </form>

                <div className=''>
                    <div className='rounded-full bg-foreground w-8 h-8 flex items-center justify-center cursor-pointer' onClick={() => setisOpen(!isOpen)}>
                        <FontAwesomeIcon icon={faUser} className='text-gray-900 opacity-55 text-xl'></FontAwesomeIcon>
                        {isOpen && (
                            <div
                                className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 cursor-default"
                                onClick={() => setisOpen(false)}
                            >
                                <div onClick={(e) => e.stopPropagation()}>
                                    <AuthForm
                                        type={authType}
                                        onClose={() => setisOpen(false)}
                                        onSwitch={() =>
                                            setAuthType(authType === "login" ? "register" : "login")
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </ul>
        </nav>
    );

}


export default Header