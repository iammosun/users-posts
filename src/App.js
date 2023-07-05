import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersTable from './pages/usersTable/UsersTable';
import UsersPosts from './pages/usersPosts/UsersPosts';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/UsersPosts/:userId' element={<UsersPosts />} />
          <Route path='/' element={<UsersTable />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
