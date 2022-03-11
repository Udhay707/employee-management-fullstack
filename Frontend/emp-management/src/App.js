import './App.css';
import EmployeeList from './component/EmployeeList';
import Header from './component/Header';
import Footer from './component/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddEmployee from './component/AddEmployee';
import EditComponent from './component/EditComponent';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Header />
        <Routes>
          <Route path="/" exact={true}  element = {<EmployeeList />}/>
          <Route path="/add" element={<AddEmployee/>} />
          <Route path="/edit/:id" element={<EditComponent />} />
        </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
