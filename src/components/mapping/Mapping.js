import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Mapping = (props) => {
  const navigate = useNavigate();
  const users = props.users;

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

                  <button className='noBorder' onClick={() => {
                    if (newName) {
                      navigate('/nameChanged', {
                        state: {
                          userId: user.id,
                          newName: newName
                        }
                      })
                    } else alert('Input Required!');
                  }}>Submit</button>
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