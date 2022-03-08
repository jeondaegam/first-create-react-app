import { useEffect } from "react";
import { useParams } from "react-router-dom"

function Detail() {

    const { id } = useParams(); // url의 id 라는 파라미터 값을 받아온다.
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year&movie_id=${id}`)
        ).json();
        console.log(json);
    }
    useEffect(() => {
        getMovie();

    }, []);
    return <h1>Detail..</h1>
}

export default Detail;