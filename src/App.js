import { useState } from 'react'; 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admission from './Components/Admission/Admission';
import Alumni from './Components/Alumni/Alumni';
import Contact from './Components/ContactDetails/Contact';
import FacultyAndStaf from './Components/FacultyAndStaff/FacultyAndStaf';
import Home from './Components/Home/Home';
import Leadership from './Components/Leadership/Leadership';
import Navbar from './Navbar/Navbar';
function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [overView, setOverview] = useState('');
  const [leadership, setLidership] = useState(''); 
  const [programsOffered, setProgramsOffered] = useState(''); 
  const [alumni, setAlumni] = useState(''); 
  const [admission, setAdmission] = useState(''); 
  const [facultiStaff, setFacultiStaff] = useState(''); 
  const [contactUs, setContactUs] = useState('');
  console.log(showNavbar); 
  return (
    <div className="">
      <Navbar setShowNavbar={[showNavbar, setShowNavbar]} setOverview={[overView, setOverview]} setLidership={[leadership, setLidership]} setProgramsOffered={[programsOffered, setProgramsOffered]} setAlumni={[alumni, setAlumni]} setAdmission={[admission, setAdmission]} setFacultiStaff={[facultiStaff, setFacultiStaff]} setContactUs={[contactUs, setContactUs]}></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/contact' element={<Contact></Contact>}></Route>

        <Route path='/faculty' element={<FacultyAndStaf></FacultyAndStaf>}></Route>

        <Route path='/alumni' element={<Alumni setShowNavbar={[showNavbar, setShowNavbar]} setOverview={[overView, setOverview]} setLidership={[leadership, setLidership]} setProgramsOffered={[programsOffered, setProgramsOffered]} setAlumni={[alumni, setAlumni]} setAdmission={[admission, setAdmission]} setFacultiStaff={[facultiStaff, setFacultiStaff]} setContactUs={[contactUs, setContactUs]}></Alumni>}></Route>

        <Route path='/leadership' element={<Leadership setShowNavbar={[showNavbar, setShowNavbar]} setOverview={[overView, setOverview]} setLidership={[leadership, setLidership]} setProgramsOffered={[programsOffered, setProgramsOffered]} setAlumni={[alumni, setAlumni]} setAdmission={[admission, setAdmission]} setFacultiStaff={[facultiStaff, setFacultiStaff]} setContactUs={[contactUs, setContactUs]}></Leadership>}></Route>

        <Route path='/admission' element={<Admission setShowNavbar={[showNavbar, setShowNavbar]} setOverview={[overView, setOverview]} setLidership={[leadership, setLidership]} setProgramsOffered={[programsOffered, setProgramsOffered]} setAlumni={[alumni, setAlumni]} setAdmission={[admission, setAdmission]} setFacultiStaff={[facultiStaff, setFacultiStaff]} setContactUs={[contactUs, setContactUs]}></Admission>}></Route>
      </Routes>
    </div>
  );
}

export default App;
