import React, { useState } from 'react';
import '../../styles/Form.css';
import {
    MDBBtn
} from 'mdb-react-ui-kit';

// import helper function to check if the email entered is valid
import { validateEmail } from '../../utils/helpers';

const styles = {
    heading: {
        fontSize: '1.2rem',
        padding: '0',
        minHeight: 50,
        lineHeight: 3.5,
    },
    body: {
        margin: 0,
        padding: 20,
    },
}

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // check to see if the email is not valid, and set an error message to be displayed on the page
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            // exit out of this code block if something is wrong so that the user can correct it
            return;
        }

        // clear out the input after a successful registration.
        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    }

    return (
        <div style={styles.body}>
            <h2>Contact me</h2>
            <form className="form">
                <label>Name</label>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                />
                <label>Email</label>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                />


                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <br></br>
                </div>

                <MDBBtn type='submit' className='mb-4' block onClick={handleFormSubmit}>
                    Submit
                </MDBBtn>

            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
};
export default Form;



