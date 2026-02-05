import Card from './Card';

function CardContainer({ cards }) {
    return (
        <div className="card-container">
            <Card cardObj={cards[0]} />
            {cards[1] && <Card cardObj={cards[1]} />}
        </div>
    );
}

export default CardContainer;
