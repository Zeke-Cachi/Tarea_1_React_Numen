import Card from "./Card"
import '../App.css'
import '../styles/cardArray.css'



const CardArray = (props) => {
    return (
        <div>
            <h1>Basado en tu última visita</h1>

            <section>{
                props.data.map(element => <Card card={element}
                />)
            }</section>
        </div>
    )
}

export default CardArray

