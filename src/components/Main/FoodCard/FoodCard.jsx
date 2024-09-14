import './FoodCard.css'

import lemonDessert from '../../../images/lemon dessert.jpg'

const FoodCard = ({ foodCardDetail }) => {
    let { foodCardClassName, img, title, price, description } = foodCardDetail;
    let className = 'foodcard ' + foodCardClassName
    return (<article className={className}>
        <img src={img} />
        <header className='food-card-header'>
            <p className='food-title'>{title}</p>
            <p className='food-price'>{price}</p>
        </header>
        <p className='food-description'>{description} </p>
        <p className='order-delivery'>Order a delivery</p>
    </article>)
}

export default FoodCard;