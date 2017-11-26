import React from 'react';

export default (FormComponent) => class ReactFormComponent extends React.Component {
    state = {
        value: '',
        valid: true
    }

    changeHandler = (e) => {
        const {value} = e.target;
        
        this.setState({
            value: value,
            valid: (value.length > this.props.minLength) && (value.length < this.props.maxLength)
        })
    }

    render() {
        return (
        <FormComponent 
            {...this.props}
            {...this.state}
            changeHandler = {this.changeHandler} 
        />);
    }
}