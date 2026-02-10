function Product({ photoName, name, description, price, soldOut }) {
    return (
        <li className={`product ${soldOut ? 'sold-out' : ''}`}>
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>{soldOut ? 'SOLD-OUT' : `$${price}`}</span>
            </div>
        </li>
    );
}

export default Product;
