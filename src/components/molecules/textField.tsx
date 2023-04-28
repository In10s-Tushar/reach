import React from 'react'
interface ITextField {
  name: string
  fieldType: 'text' | 'password' | 'email'
  value: string | number
  setValue: (name: string, value: string | number) => void
  ariaLabel: string
  placeholder: string
  isError: boolean
  errorMessage: string
}

const TextField = (props: ITextField) => {
  const { fieldType, value, name, setValue, ariaLabel, placeholder, isError, errorMessage } = props

  return (
    <React.Fragment>
      <div className="form-group mb-3">
        <input
          type={fieldType}
          className="form-control"
          value={value}
          name={name}
          onChange={(e) => setValue(name, e.target.value)}
          aria-label={ariaLabel}
          placeholder={placeholder}
        />
        {isError && <small className="text-danger">{errorMessage}</small>}
      </div>
    </React.Fragment>
  )
}

export default TextField
