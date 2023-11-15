import { ChangeEvent, ReactNode, useState } from 'react';

interface User {
  username: string;
  password: string;
  active: boolean;
  description: string;
  gender: string;
}

function UserFormControlled(): ReactNode {
  console.log('UserFormControlled renders');

  const [user, setUser] = useState<User>({
    username: 'romain',
    password: '123456',
    active: true,
    description: 'Bonjour...',
    gender: 'Female'
  });

  function handleChange(event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement>) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setUser({...user, [event.target.name]: value})
  }

  return (
    <form className="UserFormControlled">
      <div>
        Username : <input type="text" name="username" value={user.username} onChange={handleChange} />
      </div>
      <div>
        Password : <input type="password" name="password" value={user.password} onChange={handleChange} />
      </div>
      <div>
        Active : <input type="checkbox" name="active" checked={user.active} onChange={handleChange} />
      </div>
      <div>
        Description : <textarea name="description" value={user.description} onChange={handleChange}></textarea>
      </div>
      <div>
        Gender :{' '}
        <select name="gender" value={user.gender} onChange={handleChange}>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default UserFormControlled;
