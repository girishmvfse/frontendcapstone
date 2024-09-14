import FoodCard from '../FoodCard/FoodCard';
import './Specials.css'
import greekSalad from '../../../images/greek salad.jpg'
import bruchetta from '../../../images/bruchetta.svg'
import lemonDessert from '../../../images/lemon dessert.jpg'
const Specials = () => {

    const foodCardDetails = [
        {
            foodCardClassName: 'foodcard foodcard1',
            img: greekSalad,
            title: 'Greek Salad',
            price: '$12.99',
            description: `The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished 
                with crunchy garlic and rosemary croutons. `
        },
        {
            foodCardClassName: 'foodcard',
            img: bruchetta,
            title: 'Bruchetta',
            price: '$5.99',
            description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. `
        },
        {
            foodCardClassName: 'foodcard',
            img: lemonDessert,
            title: 'Lemon Dessert',
            price: '$5.00',
            description: `This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as 
            can be imagined.`
        }
    ]
    return (
        <section className="specials">
            <header>
                <h1>This Week Specials!</h1>
                <button>Online Menu</button>
            </header>
            <section>
                {foodCardDetails.map((foodCardDetail => <FoodCard foodCardDetail={foodCardDetail}></FoodCard>
                ))}
            </section>
        </section>
    )
}

export default Specials;