import React from 'react';
import {Field as ReduxField} from 'redux-form';

// TODO rechtstreeks connect met redux.
const Field = props =>
    <div>
        <ReduxField name={props.name} component={FieldContainer} />
    </div>;

const FieldContainer = props =>
    <div>TEST</div>;

Field.propTypes = {
    name: React.PropTypes.any,
    children: React.PropTypes.element,
    input: React.PropTypes.shape({
        name: React.PropTypes.string,
        value: React.PropTypes.any
    }),
    meta: React.PropTypes.shape({
        touched: React.PropTypes.bool,
        error: React.PropTypes.string
    })
};

Field.defaultProps = {};

export default Field;
