
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './views/DashboardPage'
import CreatePage from './views/CreatePage'
import TestPage from './views/TestPage'
import DetailsPage from './views/DetailsPage'
import EditPage from './views/EditPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Authors</h1>
      <Routes>
        <Route path='/api/test' element={<TestPage />} />
        <Route path='/authors' element={<DashboardPage />} />
        <Route path='/authors/add' element={<CreatePage />} />
        <Route path='/authors/:id' element={<DetailsPage />} />
        <Route path='/authors/:id/edit' element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
