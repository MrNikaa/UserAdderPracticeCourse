import React, {useState} from 'react';
import Error from './Error';
import './FormComponent.css'


const FormComponent = props => {
    
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState(0);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Ooops error!');

    const usernameChanged = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChanged = (e) => {
        setEnteredAge(e.target.value);
    }

    const addUser = (event) => {
        event.preventDefault();

        switch (true) {
            case enteredUsername === '':
              setShowError(true);
              setErrorMessage("Please enter a username! Username cannot be empty.");
              return;
            case enteredAge <= 0:
              setShowError(true);
              setErrorMessage("Please enter an age that is greater than 0.");
              return;
            default:
              setShowError(false);
              break;
          }

        // Update userData with the new user
        const newUserData = {
            username: enteredUsername,
            age: +enteredAge
        }

        props.onFormChanged(newUserData);
    }

    return(
        <div>
        <form className='form' onSubmit={addUser}>
        <label className='form-label'>Username</label>
        <input type="text" id="use(rname" name="username" className='form-input' value={enteredUsername} onChange={usernameChanged}/>
        <label className='form-label'>Age (Years)</label>
        <input type="number" id="username" name="username" className='form-input' value={enteredAge} onChange={ageChanged}/>

        <button type="submit" className='submit-button'>Add User</button>
      </form>
      {showError === true && <Error errorMessage={errorMessage} setError={setShowError}/>}
      </div>
    );
}

export default FormComponent;