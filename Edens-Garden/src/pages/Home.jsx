import { Link } from "react-router-dom";
import './Home.css'
import leaves from '/leaves.svg'

import risotto from '/risotto.jpg'
import truffle from '/truffle.jpg'
import saffron from '/saffron.jpg'
import avocado from '/avocado.jpg'
import { Carousel } from "../components/Carousel";

export function Home(){
    const reviews = [
        {
            summary:'"A Culinary Oasis"',
            review:'"Eden’s Garden is truly a hidden gem! From the moment I stepped inside, the elegant ambiance and impeccable service made me feel like royalty. The Mushroom Risotto with Truffle Oil was nothing short of perfection—the flavors were so rich and complex that I savored every bite. It’s amazing to see a vegetarian restaurant deliver such refined, unforgettable dishes. I’m already planning my next visit!"',
            credit: "– Lila M., Food Enthusiast"

        },
        {
            summary: '"Sustainability Meets Luxury"',
            review: '"I’ve never experienced a restaurant that marries sustainability and sophistication so seamlessly. The Zucchini Blossoms Tempura were a revelation—light, crispy, and paired beautifully with the basil-tomato sauce. Eden’s Garden has set a new standard for plant-based fine dining. It’s a place where you can indulge guilt-free while supporting an ethical approach to dining."',
            credit: '– James R., Conscious Diner'
        },
        {
            summary: '"An Unforgettable Evening"',
            review: '"I took my partner to Eden’s Garden for our anniversary, and it was one of the best decisions I’ve ever made. The attention to detail was astounding, from the carefully curated menu to the intimate atmosphere. We loved the Heirloom Tomato Tartare—it was vibrant and refreshing, with every element perfectly balanced. This is more than just a meal; it’s an experience we’ll cherish forever."',
            credit: '– Sofia L., Happy Guest'
        },
        {
            summary: '"Perfection on Every Plate"',
            review: '"I wasn’t sure what to expect from a vegetarian fine dining restaurant, but Eden’s Garden completely exceeded my expectations. The Grilled Eggplant Steak was hearty and flavorful, and the saffron couscous added a delightful touch. The staff was attentive without being intrusive, and the dessert—Chocolate Avocado Mousse—was the perfect ending to a flawless evening. I’m officially a fan!"',
            credit: '– Elliot P., First-Time Visitor'
        }
    ]
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
        
        <div className='quote'>
            <p>Nestled at the crossroads of culinary artistry and sustainability, Eden’s Garden offers a plant-based dining experience unlike any other. Every dish tells a story of fresh, organic ingredients, skillfully transformed into elegant masterpieces. Whether you're celebrating a special moment or seeking an indulgent escape, Eden’s Garden is your sanctuary.</p>
        </div>
        <div id='specialties'>
            <h2>Specialties</h2>
            <div className="items-container">
                <div className='item'>
                    <img className='item-img'src={risotto}/>
                    <div className="item-details">
                        <h3>Velvety Beetroot Risotto
                        </h3>
                        <p>A symphony of flavors, featuring roasted beets and creamy cashew cheese, garnished with edible flowers.</p>
                    </div>
                </div>
                <div className='item'>
                    <img className='item-img' src={avocado}/>
                    <div className="item-details">
                        <h3>Charred Avocado Salad
                        </h3>
                        <p>Perfectly grilled avocado on a bed of arugula, with citrus vinaigrette and toasted almonds.</p>
                    </div>
                </div>
                <div className='item'>
                    <img className='item-img' src={truffle}/>
                    <div className="item-details">
                        <h3>Truffle-infused Wild Mushroom Tart
                        </h3>
                        <p>Earthy mushrooms meet decadent truffle essence in a crisp pastry shell.</p>
                    </div>
                </div>
                <div className='item'>
                    <img className='item-img' src={saffron}/>
                    <div className="item-details">
                        <h3>Golden Saffron Pistachio Cake
                        </h3>
                        <p>A luxurious blend of saffron and pistachio, topped with a delicate rose glaze.</p>
                    </div>
                </div>
            </div>
            
        </div> 
        <div className="quote">
            <p>Our farm-to-table philosophy ensures that every ingredient is thoughtfully sourced from local, sustainable farms. By prioritizing eco-friendly practices, Eden’s Garden delivers a dining experience that harmonizes indulgence with responsibility.</p>
        </div>
        <div id='review'>
            <h2>Experiences</h2>
            <Carousel reviews={reviews}/>
            
        </div>
        </>
        
    )
}