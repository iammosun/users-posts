import React from 'react';
import { Link } from 'react-router-dom';

const Mapping = (props) => {
  const users = props.users;

  const changeNameClick = (newName, userId) => {
    if (newName) {
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
        });
    } else {
      alert('input required');
    }
  }

  return (
    <>
      {
        users.map(user => {
          let newName;

          return (
            <tr key={user.id}>
              <td><h3>{user.name}</h3>
                <form className='flex'>
                  <label><b>Edit Name</b></label>

                  <input type='text'
                    value={newName}
                    onChange={(e) => newName = e.target.value} required
                  />

                  <Link to={'/'} className='cursor, noBorder' onClick={
                    () => { changeNameClick(newName, user.id) }
                  }>Submit</Link>
                </form>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.address.street},
                {user.address.suite},
                {user.address.city},
                {user.address.zipcode}.
              </td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>

              <td><Link to={'UsersPosts/' + user.id} className='cursor'>View Posts</Link></td>
            </tr>
          )
        })
      }
    </>
  )
}

export default Mapping;