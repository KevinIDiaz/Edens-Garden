import './Contact.css'
import construction from '/construction.svg'
import { Link } from 'react-router'

export function Contact(){
    return(
        <>
        <div className='construction'>
            <img src={construction}/>
            <h1>Page Under Construction</h1>
            <Link to='/'><button>Go Home</button></Link>
            </div>
        </>
    )
}