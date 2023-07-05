import React, { useEffect, useState } from 'react';
import Mapping from '../../components/mapping/Mapping';


const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [suite, setSuite] = useState(0);
  const [appt, setAppt] = useState(0);
  const [isLoading, setIsloading] = useState(true);


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
    }, 100);
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

              <Mapping users={users} />

            </tbody>
          </table>
          <h2 className='h2'>There are {suite} users living in a Suite and {appt} users living in an Apartment. </h2>
        </section >
      )}
    </>
  );
}


export default UsersTable;