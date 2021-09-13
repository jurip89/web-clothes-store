import React from "react";
import './form.input.style.scss'

const FormInput = ({HandleChange,label, ...otherProps}) => (
    <div className='group'>
        <input type="submit" onChange={HandleChange} {...otherProps} className='form-input' />
        {
            label ?
                (
                    <label className={`${otherProps.value.length ? 'srink' : ''}form-input-label`}>{label}</label>
                )
                : null
        }
    </div>
)

export default FormInput