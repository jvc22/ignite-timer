import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 4px;
  color: ${(props) => props.theme['gray-100']};

  background-color: ${(props) => props.theme['green-500']};
`
