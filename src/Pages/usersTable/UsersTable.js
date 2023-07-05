import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [suite, setSuite] = useState(0);
  const [appt, setAppt] = useState(0);
  const [isLoading, setIsloading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    setTimeout(() => {

      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'

      }).then(res => res.json())
        .then(data => {
          setUsers(data);
          let apptNow = 0;
          let suiteNow = 0;

          data.map(user => {
            let fLetter = user.address.suite.charAt(0);
            if (fLetter === 'A') apptNow += 1;
            if (fLetter === 'S') suiteNow += 1;
            return true;
          });

          setAppt(apptNow);
          setSuite(suiteNow);
          setIsloading(false);
        })
    }, 1000);
  }, []);


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

                    <td><Link to={'UsersPosts/' + user.id} className='cursor'>View Posts</Link></td>
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