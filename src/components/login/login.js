import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import TextField from "./textField";
import Button from '@material-ui/core/Button';
import { history } from '../app';

import './login.css';

export default class Login extends Component {

  _onSubmit = values => {
    if (values.username === 'admin' && values.password === 'admin'){
      history.push('/grid');
    }
  };
  
  _validate = values => {
    const errors = {};
    
    if (!values.username) {
      errors.username = "Required";
    };

    if (!values.password) {
      errors.password = "Required";
    };

    return errors;
  };
  

  render(){
    return(
      <div className="login-page">
        <Form
          onSubmit={this._onSubmit}
          validate={this._validate}
          render={({ handleSubmit, submitting, pristine }) => (
            <form className='login-form' onSubmit={handleSubmit}>
              <div className= 'input-fields-containere'>
                <div className = 'input-login-field'> 
                  <Field
                    name="username"
                    component={TextField}
                    type="text"
                    label="Username"
                  />
                </div>
                <div className = 'input-login-field'>
                  <Field
                    name="password"
                    component={TextField}
                    type="password"
                    label="Password"
                  />
                </div>
              </div>
              <div className="submit-buttons">
                <Button
                  className = 'submit-button' 
                  type="submit" 
                  disabled={submitting || pristine} 
                  variant="contained" 
                  color="primary">
                  Log in
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}
  

