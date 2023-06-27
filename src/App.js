import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersTable from './Components/UsersTable';
import Posts from './Components/Posts';
import NameChanged from './Components/NameChanged';

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
