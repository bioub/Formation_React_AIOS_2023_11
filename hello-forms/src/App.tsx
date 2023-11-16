import { useState } from 'react'
import './App.css'
import UserFormControlled from './UserFormControlled'
import UserFormSSR from './UserFormSSR'
import UserFormUncontrolled from './UserFormUncontrolled'
import Select from './Select'

function App() {
  const [name, setName] = useState('Toto');

  return (
    <>
      <UserFormControlled />
      <UserFormUncontrolled />
      <UserFormSSR />
      <p className='menu'>Name : {name}</p>
      <Select items={['Toto', 'Titi', 'Tata']} selected={name} onSelected={setName} />
    </>
  )
}

export default App
