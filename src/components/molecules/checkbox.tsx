import React, { useId } from "react";
import styled from "styled-components";
interface ICheckbox {
  name: string
  checked: boolean
  onValueChange: (name: string, value: boolean) => void
  label: string
}
const Label = styled.label`
  margin-left: 10px;
`
const Input = styled.input`
  margin-left: 5px;
`
const Checkbox = (props: ICheckbox) => {
  const {
    name,
    checked,
    label,
    onValueChange,
  } = props;

  const id = useId()

  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(name, e.target.checked)
  }

  return (
    <>
      <Input id={id} type="checkbox" name={name} checked={checked} onChange={onChangeHandler} />
      <Label htmlFor={id}>{label}</Label>
    </>
  )
}

export default Checkbox