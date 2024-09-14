import './CallToAction.css'
import restaurantFood from '../../../images/restauranfood.jpg'
const CallToAction = () => {
    return (<section className="callToAction">
        <article>
            <h1 className='restaurant-name'>Little Lemon</h1>
            <h3 className='restaurant-location'>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>Reserve a Table</button>
        </article>
        <img src={restaurantFood}></img>
    </section>);
}

export default CallToAction;