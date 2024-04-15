import { useEffect, useMemo, useState } from "react"

export const useForm = (initialForm={}, formValidations={}) => {

  const [formState, setFormState] = useState(initialForm)
  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    createValidations()
  }, [formState])

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }

    return true;
  }, [formValidation])

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const aumentQuantity = () => {
    setFormState(prevState => ({
      ...prevState,
      quantity: prevState.quantity + 1
    }))
  }

  const decrementQuantity = () => {
    setFormState(prevState => ({
      ...prevState,
      quantity: prevState.quantity === 1 ? 1 : prevState.quantity - 1
    }))
  }
  
  const onReset = () => {
    setFormState(initialForm);
  }

  const createValidations = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField]
      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
    }
    setFormValidation(formCheckedValues);
  }

  return {
    onInputChange,
    ...formState,
    formState,
    onReset,
    ...formValidation,
    isFormValid,
    aumentQuantity,
    decrementQuantity
  }
}
