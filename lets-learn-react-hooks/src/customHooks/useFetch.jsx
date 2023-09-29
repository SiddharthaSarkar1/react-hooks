//This is a custom hook
//"https://jsonplaceholder.typicode.com/users"
import React, { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [responses, setResponses] = useState([]);

    useEffect(() => {
      fetch(url)
      .then((res) => res.json())
      .then((data) => setResponses(data));
      }, []);
    

  return responses;
}

export default useFetch