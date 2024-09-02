import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import Campus from './components/Campus';
import About from './components/About';
import CseStudents from './components/cse/CseStudents';
import UpdateCseStudent from './components/cse/UpdateCseStudent';
import DeleteCseStudent from './components/cse/DeleteCseStudent';
import FindStudent from './components/cse/findStudent';
import Home from './components/faculty/Home';
import CseStudentAcademics from './components/faculty/CseStudentAcademics';
import UpdateCseStudentAcademic from './components/faculty/UpdateCseStudentAcademic';
import StudentHome from './components/student/StudentHome';
import StudentDetails from './components/student/StudentDetails';
import Companies from './components/Companies';
import Events from './components/Events';
import CseFaculty from './components/cse/cseFaculty/CseFaculty';
import DeleteCseFaculty from './components/cse/cseFaculty/DeleteCseFaculty';
import VisionMission from './components/VisionMission';

function App() {
  return(
    <>
    <div className='components'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<>
            <Navbar title="College Database Management System" buttonTitle="Log In" path="openLogin"/>
            <Campus />
            <Events />
            <About />
            <VisionMission />
            <Companies />
            <Footer />
            </>}>
          </Route>
          <Route exact path='/admin' element={<>
            <Navbar title="College Database Management System - Admin" buttonTitle="Log Out"/>
            <Admin  heading="Click on the department in which you want to update the details"/>
          </>}>
          </Route>
          <Route exact path='/admin/cse' element={<>
            <Navbar title="Computer Science & Engineering - Students Details" buttonTitle="Log Out" />
            <CseStudents />
          </>}>
          </Route>
          <Route exact path='/admin/cse/updatecsestudent/:usn' element={<>
            <Navbar title="Computer Science & Engineering - Students Details"  buttonTitle="Log Out"/>
            <UpdateCseStudent />
          </>}>
          </Route>
          <Route exact path='/admin/cse/deletecsestudent/:usn' element={<>
            <Navbar title="Computer Science & Engineering - Students Details"  buttonTitle="Log Out"/>
            <DeleteCseStudent />
          </>}>
          </Route>
          <Route exact path='/admin/cse/findstudent/:usn' element={<>
            <Navbar title="Computer Science & Engineering - Students Details"  buttonTitle="Log Out"/>
            <FindStudent />
          </>}>
          </Route>
          <Route exact path='/faculty' element={<>
            <Navbar title="Computer Science & Engineering - Faculty"  buttonTitle="Log Out"/>  
            <Home />
          </>}>
          </Route>
          <Route exact path='/faculty/csestudentacademics' element={<>
            <Navbar title="Computer Science & Engineering - Faculty"  buttonTitle="Log Out"/>  
            <CseStudentAcademics />
          </>}>
          </Route>
          <Route exact path='/faculty/update/:usn' element={<>
            <Navbar title="Computer Science & Engineering - Faculty"  buttonTitle="Log Out"/>  
            <UpdateCseStudentAcademic />
          </>}>
          </Route>
          <Route exact path='/student' element={<>
            <Navbar title="Computer Science & Engineering - Student"  buttonTitle="Log Out"/>  
            <StudentHome />
          </>}>
          </Route>
          <Route exact path='/student/studentDetails/:usn' element={<>
            <Navbar title="Computer Science & Engineering - Student"  buttonTitle="Log Out"/>  
            <StudentHome />
            <StudentDetails />
          </>}>
          </Route>
          <Route exact path='/admin/cse/faculty' element={<>
            <Navbar title="Computer Science & Engineering - Faculty Details" />
            <CseFaculty />
          </>}>
          </Route>
          <Route exact path='/admin/faculty/deleteCseFaculty/:facultyid' element={<>
          <Navbar />
          <DeleteCseFaculty />
          </>}> </Route>
        </Routes>
      </BrowserRouter>  
    </div>
    </>
  )
}

export default App;
