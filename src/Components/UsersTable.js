import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {

      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'

      }).then(res => res.json())
        .then(data => {
          // converting the received obj to array
          // console.log(data);
          setUsers(data);
          setIsloading(false);
        });

    }, 1000);
  }, []);

  let appt = 0;
  let suite = 0;

  return (
    <>
      {isLoading && (<section className='mainBody' ><h1>loading...</h1></section>)}

      {!isLoading && (
        <section className='mainBody'>
          <table>
            <tbody>
              <tr>
                <th>Users</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
                <th>View</th>
              </tr>

              {users.map(user => {
                let newName;
                let fLetter = user.address.suite.charAt(0);
                if (fLetter === 'A') appt += 1;
                if (fLetter === 'S') suite += 1;

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
                      {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}.
                    </td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.company.name}</td>

                    <td><Link to={'posts/' + user.id} className='cursor'>View Posts</Link></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <h2 className='h2'>There are {suite} users living in a Suite and {appt} users living in an Apartment. </h2>
        </section >
      )}
    </>
  );
}

export default UsersTable;