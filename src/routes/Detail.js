import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (<div>
        <span>Loading...</span>
      </div>) : (
        <div>
          <img src={detail.large_cover_image}/>
          <h1>{detail.title}</h1>
          <span>year : {detail.year} , runtime: {detail.runtime}, rating : {detail.rating}</span>
          <p>
            {detail.description_full}
          </p>
        </div>
      )}
    </div>
  );
}
export default Detail;
