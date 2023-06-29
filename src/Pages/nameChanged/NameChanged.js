import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const NameChanged = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId, newName } = location.state;
  const [isLoading, setIsloading] = useState(true);


  useEffect(() => {
    setTimeout(() => {

      fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: newName,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
        .then(json => {
          console.log(json);
          setIsloading(false);
        });

    }, 1000);
  }, [userId, newName]);


  return (
    <>
      {isLoading && (<p>Wait a moment...</p>)}

      {!isLoading && (
        <div>
          <h2>Name Changed Successfully!</h2>
          <button onClick={() => { navigate('/') }}>Back</button>
        </div>
      )}
    </>
  );
}

export default NameChanged;