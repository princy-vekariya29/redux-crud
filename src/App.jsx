
import { Route, Routes } from 'react-router'
import Employee from './Components/Employee/Employee'
import ViewData from './Components/ViewData/ViewData'
import Edit from './Components/Edit_emp/Edit'
import SignUp from './Components/SignUp/SignUp'
import SignIn from './Components/SignIn/SignIn'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ViewData />} />
        <Route path='/add' element={<Employee />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </>
  )
}

export default App
