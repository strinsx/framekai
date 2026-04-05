import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';



function Review() {


    const [hovered, setHovered] = useState(false);
    const [hasSubmit, setHassubmit] = useState(false);
    const [submit, setSubmit] = useState(0);
    const [view, setView] = useState(0);
    const fetchSubmit = async () => {

        const response = await fetch('https://framekai.onrender.com/reviews', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const data = await response.json();
        setSubmit(data.data.length)


    }

    const submitRatings = async () => {

        if (hasSubmit) return

        setHovered(true);
        setHassubmit(true);
        setSubmit(submit + 1);
        localStorage.setItem("isSubmit", "true")

        const response = await fetch('https://framekai.onrender.com/ratings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ratings: submit
            })
        })

        const data = await response.json();

    }



    useEffect(() => {

        const isSubmit = localStorage.getItem('isSubmit');
        if (isSubmit === "true") {
            setHovered(true);
            setHassubmit(true);
        }
        fetchSubmit();
    }, [])


    return (

        <>
            <div className="w-full h-25 bg-[#00FF85] flex items-center p-10 justify-between rounded-sm">
                <div>
                    <h1 className="font-heading text-xl font-semibold">Rate This Site?</h1>
                    <p className="font-body">Enjoying the site? Give us a quick rating!</p>
                </div>

                <div className='flex gap-2 items-center '>
                    <FontAwesomeIcon icon={hovered || hasSubmit ? solidHeart : regularHeart} onClick={() => submitRatings()} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className='text-2xl hover:text-red-500 cursor-pointer'></FontAwesomeIcon>
                    <h1 className='font-heading'>{submit}</h1>
                </div>

            </div>
        </>

    );

}

export default Review