import React from "react";
import { Button as B4Button } from "react-bootstrap";

interface IButton {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = (props: IButton) => {
  const { label, onClick, disabled = false, variant = 'primary' } = props

  return (
    <B4Button
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </B4Button>
  )
}

export default Button