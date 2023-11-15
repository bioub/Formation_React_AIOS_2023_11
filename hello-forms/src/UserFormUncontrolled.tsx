import { FormEvent, ReactNode, useRef } from 'react';

interface User {
  username: string;
  password: string;
  active: boolean;
  description: string;
  gender: string;
}

function UserFormUncontrolled(): ReactNode {
  console.log('UserFormUncontrolled renders');

  const usernameRef = useRef<HTMLInputElement>(null);
  
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: Partial<User> = {
      username: usernameRef.current?.value,
    }

    console.log(user);
  }

  return (
    <form className="UserFormUncontrolled" onSubmit={handleSubmit}>
      <div>
        Username : <input ref={usernameRef} type="text" name="username" />
      </div>
      <div>
        Password : <input type="password" name="password" />
      </div>
      <div>
        Active : <input type="checkbox" name="active" />
      </div>
      <div>
        Description : <textarea name="description"></textarea>
      </div>
      <div>
        Gender :{' '}
        <select name="gender">
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

export default UserFormUncontrolled;
