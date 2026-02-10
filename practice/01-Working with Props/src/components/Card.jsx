import { v4 as uuidv4 } from 'uuid';
import CardTag from './CardTag';

function Card({ title, description, date, imageUrl, tags, archived }) {
    if (archived) return null;

    return (
        <div className="card">
            <img className="card-image" src={imageUrl} alt="" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <div className="card-description">{description}</div>
                <div className="card-date">{date}</div>
                <div className="card-tags">
                    {tags.map((item) => (
                        <CardTag tag={item} key={uuidv4()} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
