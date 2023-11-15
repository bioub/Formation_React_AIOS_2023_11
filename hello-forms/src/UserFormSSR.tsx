import { FormEvent, ReactNode } from 'react';

function UserFormSSR(): ReactNode {
  console.log('UserFormSSR renders');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log(data);
  }

  return (
    <form className="UserFormSSR" onSubmit={handleSubmit}>
      <div>
        Username : <input type="text" name="username" />
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

export default UserFormSSR;
