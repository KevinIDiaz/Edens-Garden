import { Link } from "react-router-dom";
import './Home.css'
import leaves from '/leaves.svg'
import image from '/banner.jpg'

export function Home(){
    return(
        <>
        <div id='parallax'>
            <div id='banner'>
                        <h1>Eden's Garden</h1>
                        <p className="fade-in">Savor Elegance in Every Bite.</p>
                        <ul>
                            <li><Link to='/Menu'><button>Explore Our Menu</button></Link></li>
                            <li><Link to='/Dine'><button>Reserve Your Table</button></Link></li>
                        </ul>
                    
            </div>
            <img id='leaves-1' src={leaves}/>
           
                <img id='leaves-2' src={leaves}/>
         
            
        </div>
        
        <div id='about'>
            <p>Nestled at the crossroads of culinary artistry and sustainability, Eden’s Garden offers a plant-based dining experience unlike any other. Every dish tells a story of fresh, organic ingredients, skillfully transformed into elegant masterpieces. Whether you're celebrating a special moment or seeking an indulgent escape, Eden’s Garden is your sanctuary.</p>
        </div>
        <div id='specialties'>
            <h2>Specialties</h2>
            <div className="items-container">
                <div className='item'>
                    <img className='item-img'src={image}/>
                    <div className="item-details">
                        <h3>Velvety Beetroot Risotto
                        </h3>
                        <p>A symphony of flavors, featuring roasted beets and creamy cashew cheese, garnished with edible flowers.</p>
                    </div>
                </div>
                <div className='item'>
                    <img className='item-img' src={image}/>
                    <div className="item-details">
                        <h3>Charred Avocado Salad
                        </h3>
                        <p>Perfectly grilled avocado on a bed of arugula, with citrus vinaigrette and toasted almonds.</p>
                    </div>
                </div>
                <div className='item'>
                    <img className='item-img' src={image}/>
                    <div className="item-details">
                        <h3>Truffle-infused Wild Mushroom Tart
                        </h3>
                        <p>Earthy mushrooms meet decadent truffle essence in a crisp pastry shell.</p>
                    </div>
                </div>
                <div className='item'>
                    <img className='item-img' src={image}/>
                    <div className="item-details">
                        <h3>Golden Saffron Pistachio Cake
                        </h3>
                        <p>A luxurious blend of saffron and pistachio, topped with a delicate rose glaze.</p>
                    </div>
                </div>
            </div>
            
        </div>
        </>
        
    )
}