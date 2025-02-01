import './Menu.css'
import construction from '/construction.svg'
import { Link } from 'react-router'

export function Menu(){
    return(
        <>
      
       
                <div className="menu-container">
            <h1 className="menu-title">Our Menu</h1>
            <div className="menu-section">
                <h2>Breakfast</h2>
                <div className="menu-item">
                    <h3>Avocado Toast with Roasted Tomatoes</h3>
                    <p>Sourdough toast topped with creamy avocado, slow-roasted cherry tomatoes, and a drizzle of balsamic glaze.</p>
                    <span className="menu-price">$16</span>
                </div>
                <div className="menu-item">
                    <h3>Tofu Scramble with Sweet Potato Hash</h3>
                    <p>Scrambled tofu seasoned with turmeric, served with crispy sweet potato hash and sautéed greens.</p>
                    <span className="menu-price">$18</span>
                </div>
            </div>

            <div className="menu-section">
                <h2>Lunch</h2>
                <div className="menu-item">
                    <h3>Mediterranean Quinoa Bowl</h3>
                    <p>Quinoa, roasted chickpeas, cucumbers, cherry tomatoes, olives, and hummus, drizzled with a lemon-tahini dressing.</p>
                    <span className="menu-price">$21</span>
                </div>
                <div className="menu-item">
                    <h3>Buffalo Cauliflower Wrap</h3>
                    <p>Spicy roasted cauliflower, crisp lettuce, and ranch-style cashew dressing wrapped in a warm tortilla.</p>
                    <span className="menu-price">$20</span>
                </div>
            </div>

            <div className="menu-section">
                <h2>Dinner</h2>
                <div className="menu-item">
                    <h3>Mushroom & Walnut Bolognese</h3>
                    <p>A hearty pasta dish with a rich, savory mushroom and walnut-based tomato sauce over al dente spaghetti.</p>
                    <span className="menu-price">$32</span>
                </div>
                <div className="menu-item">
                    <h3>Stuffed Acorn Squash</h3>
                    <p>Roasted acorn squash filled with wild rice, cranberries, pecans, and fresh herbs.</p>
                    <span className="menu-price">$34</span>
                </div>
            </div>

            <div className="menu-section">
                <h2>Dessert</h2>
                <div className="menu-item">
                    <h3>Peanut Butter Banana Ice Cream</h3>
                    <p>A creamy, dairy-free ice cream made with frozen bananas and natural peanut butter.</p>
                    <span className="menu-price">$15</span>
                </div>
                <div className="menu-item">
                    <h3>Coconut Mango Cheesecake</h3>
                    <p>A no-bake cashew cheesecake infused with tropical mango and coconut flavors.</p>
                    <span className="menu-price">$18</span>
                </div>
            </div>
        </div>
                
        </>
    )
}