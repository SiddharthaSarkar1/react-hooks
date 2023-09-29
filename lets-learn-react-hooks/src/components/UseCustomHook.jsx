import React from 'react';
import useFetch from '../customHooks/useFetch';

const UseCustomHook = () => {

    const data = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
        {data.map((res) => {
            return (
                <h4 key={res.id}>
                    {res.id}. {res.name}
                </h4>
            );
        })}
    </>
  )
}

export default UseCustomHook