import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { buildUrlMovie } from '../../utils/api';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const DEFAULT_IMAGE_POSTER = 'https://image.tmdb.org/t/p/w500';

const Show = ({}) => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState([]);

  const movieApiUrl = buildUrlMovie(id);

  useEffect(() => {
    axios.get(movieApiUrl).then((res) => {
      console.log(res);
      const showRes = res.data;
      setShow(showRes);
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      <p>{show.title}</p>
    </div>
  );
};

export default Show;
