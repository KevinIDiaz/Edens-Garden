import { Link } from "react-router-dom";
import './Navigation.css'
import Logo from '/logo.png'
import menu from'/menuButton.svg'
import close from '/close.svg'

export function Navigation(){
    return(
        <>
        <div id='nav'>
            <ul>
                <li><Link to='/References'><button>References</button></Link></li>
                <li><Link to='/Contact'><button>Contact</button></Link></li>
            </ul>
            
            
            <Link to='/'><img id='logo' src={Logo}/></Link>
            <ul>
                <li><Link to='/Menu'><button>Menu</button></Link></li>
                <li><Link to='/Dine'><button>Dine</button></Link></li>
                <li><Link to='/About'><button>About</button></Link></li>
            </ul>
            <img onClick={showSide} id='menu'src={menu}/> 
               
            
        </div>
        <div id='side'>
            <img onClick={hideSide} src={close}/>
            <Link to='/References'><button>References</button></Link>
            <Link to='/Contact'><button>Contact</button></Link>
            <Link to='/Menu'><button>Menu</button></Link>
            <Link to='/Dine'><button>Dine</button></Link>
            <Link to='/About'><button>About</button></Link>

            </div>
        </>
        
        
    )
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    const nav = document.getElementById("nav");
    const logo = document.getElementById("logo");
    if (window.scrollY > 0) {  // 'scrollY' is more reliable than 'scrollTop'
        nav.style.height = '70px';
        logo.style.height = '60px';
        
       
    } else {
        nav.style.height = '100px';
        logo.style.height = '90px'
        
    }
   
    }

function showSide(){
    const side = document.getElementById('side');
    side.style.transform='translateX(0%)';
}

function hideSide(){
    const side = document.getElementById('side');
    side.style.transform='translateX(100%)';
    
}