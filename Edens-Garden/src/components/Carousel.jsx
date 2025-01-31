import './Carousel.css'
import { useState, useEffect } from 'react'

export function Carousel({reviews}){
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    const next = () =>{
        setCurrent(current===reviews.length - 1 ? 0 : current+1);
    };

    useEffect( ()=>{
        timeOut= autoPlay && setTimeout(() => {
            next();
        }, 5000);
    });

    return(
    <div className='carousel'onMouseEnter={()=>{setAutoPlay(false)}} onMouseLeave={()=>{setAutoPlay(true)}}>
        <div className='carousel-wrapper'>
            {reviews.map((review, index)=>{
                        return(
                            <div key={index} className={index==current ? 'card card-active':'card'}>
                                <p className='summary'>{review.summary}</p>
                                <p className='review'>{review.review}</p>
                                <p className='credit'>{review.credit}</p>
                            </div>
                        )
                    })}
            
        </div>
        <div className='dots'>
                {reviews.map((_,index)=>{
                    return(
                        <div key={index} className={index==current?'dot dot-active':'dot'} onClick={()=>setCurrent(index)}></div>
                    )
                }

                )}
            </div>
    </div>
    )
    
}