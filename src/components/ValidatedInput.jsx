import React, { Component } from 'react';
import validateField from "../decorators/validateField";

const Input = props => <input {...props} onChange= {props.changeHandler} className={props.valid ? '' : 'error-validation'}  />


export default validateField(Input)