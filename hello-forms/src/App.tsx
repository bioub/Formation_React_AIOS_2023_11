import './App.css'
import UserFormControlled from './UserFormControlled'
import UserFormSSR from './UserFormSSR'
import UserFormUncontrolled from './UserFormUncontrolled'

function App() {

  return (
    <>
      <UserFormControlled />
      <UserFormUncontrolled />
      <UserFormSSR />
    </>
  )
}

export default App
