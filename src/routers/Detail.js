import { useEffect } from "react";
import { useParams } from "react-router-dom"

function Detail() {

    const { id } = useParams();
    
    useEffect(() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
        ).json();
    }, []);
    console.log(x);
    return <h1>Detail</h1>
}

export default Detail;