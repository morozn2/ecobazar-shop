import './PopCategories.css'

export function PopCategories() {
    return (
        <section className='pop-categories'>
            <div className='categories-heading-wrap'>
                <p className='categories-heading'>Popular Categories</p>
                <a href="#" className='view-all'>
                    <p>View All</p>
                    <p>🡢</p>
                </a>
            </div>
            <div className='categories-container'>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="./categories/fruits.png" alt="" />
                        <p>Fresh Fruit</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="./categories/vegetables.png" alt="" />
                        <p>Fresh Vegetables</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="./categories/fish.png" alt="" />
                        <p>Meat & Fish</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="./categories/snacks.png" alt="" />
                        <p>Snacks</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="./categories/beverages.png" alt="" />
                        <p>Beverages</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="./categories/beauty.png" alt="" />
                        <p>Beauty & Health</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="./categories/bread-n-bakery.png" alt="" />
                        <p>Bread & Bakery</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="./categories/baking.png" alt="" />
                        <p>Baking Needs</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="./categories/cooking.png" alt="" />
                        <p>Cooking</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="./categories/diabetic.png" alt="" />
                        <p>Diabetic Food</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="./categories/dish-detergents.png" alt="" />
                        <p>Dish Detergents</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="./categories/oil.png" alt="" />
                        <p>Oil</p>
                    </div>
                </a>
            </div>
        </section>
    )
}