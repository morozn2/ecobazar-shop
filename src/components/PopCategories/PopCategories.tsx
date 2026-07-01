import './PopCategories.css'

export function PopCategories() {
    return (
        <div className='pop-categories'>
            <div className='categories-heading-wrap'>
                <p className='pop-categories-heading'>Popular Categories</p>
                <a href="#" className='view-all'>
                    <p>View All</p>
                    <p>🡢</p>
                </a>
            </div>
            <div className='categories-container'>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="fruits.png" alt="" />
                        <p>Fresh Fruit</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="vegetables.png" alt="" />
                        <p>Fresh Vegetables</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="fish.png" alt="" />
                        <p>Meat & Fish</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="snacks.png" alt="" />
                        <p>Snacks</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="beverages.png" alt="" />
                        <p>Beverages</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="beauty.png" alt="" />
                        <p>Beauty & Health</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="bread-n-bakery.png" alt="" />
                        <p>Bread & Bakery</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="baking.png" alt="" />
                        <p>Baking Needs</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="cooking.png" alt="" />
                        <p>Cooking</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="diabetic.png" alt="" />
                        <p>Diabetic Food</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="dish-detergents.png" alt="" />
                        <p>Dish Detergents</p>
                    </div>
                </a>
                <a href="#" className='category-link'>
                    <div className='category'>
                        <img src="oil.png" alt="" />
                        <p>Oil</p>
                    </div>
                </a>
            </div>
        </div>
    )
}