import Mapping from '../../components/mapping/Mapping';
import useFetch from '../../hooks/useFetchHook/useFetch';


const UsersTable = () => {
  const { users, suite, appt, isLoading } =
    useFetch('https://jsonplaceholder.typicode.com/users');


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