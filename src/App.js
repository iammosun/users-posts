import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersTable from './pages/usersTable/UsersTable';
import Posts from './pages/usersPosts/UsersPosts';
import NameChanged from './pages/nameChanged/NameChanged';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/posts/:userId' element={<Posts />} />
          <Route path='/nameChanged' element={<NameChanged />} />
          <Route path='/' element={<UsersTable />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
