import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div>
            <ul>
                <li><Link to={`/by-category/comedy`}>Comedy</Link></li>
                <li><Link to={`/by-category/drama`}>Drama</Link></li>
            </ul>
        </div>
    );
}

export default Categories;