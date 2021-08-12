import styled from 'styled-components'

const SelectorButton = styled.button`
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 16.5px;
  background: ${props => props.selected ? 'rgb(50, 123, 239)' : 'transparent'};
  color: ${props => props.selected ? 'rgb(255, 255, 255)' : 'rgb(50, 123, 239)'};
  border: 1px solid rgb(50, 123, 239);
  margin: 6px;

  &&:hover {
    transform: scale(1.1)
  }
`

export default SelectorButton
