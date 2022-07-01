import { useParams } from "react-router-dom";

const OneCategory = () => {

    let params = useParams();
    let category = params.category ? params.category : "";
    let capitalizedCategory = category?.charAt(0).toUpperCase() + category?.slice(1);

    return (
        <h2>Category: {capitalizedCategory}</h2>
    );
}

export default OneCategory;