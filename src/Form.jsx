import React from 'react';
import {reduxForm} from 'redux-form';

const FormContainer = ({children}) =>
    <form>
        {children}
    </form>;

FormContainer.propTypes = {
    children: React.PropTypes.children
};

FormContainer.defaultProps = {};

const Form = props =>
    React.createElement(reduxForm({form:props.formId})(FormContainer), props);


Form.propTypes = {
    formId: React.PropTypes.any
};

Form.defaultProps = {};

export default Form;
