function Product({photoName, name, description, price}) {
    return (
        <li className="product">
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>${price}</span>
            </div>
        </li>
    );
}

export default Product;