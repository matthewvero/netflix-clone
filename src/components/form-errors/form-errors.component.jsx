import React from 'react'
import { FormErrorsContainer, FormErrorText } from './form-errors.styles'

const FormErrors = ({state, inputName, color}) => {
      return (
            <FormErrorsContainer>
            {state.interacted[inputName] &&
            state.errors[inputName]?.map((el, idx) => (
                  <FormErrorText key={idx} className="inputerror" color={color}>
                        {el}
                  </FormErrorText>
            ))}
            </FormErrorsContainer>
            
      )
}

export default FormErrors
