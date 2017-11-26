import React, { Component } from 'react';
import validateField from "../decorators/validateField";

const TextArea = props => <textarea {...props} onChange= {props.changeHandler} className={props.valid ? '' : 'error-validation'} />

export default validateField(TextArea)