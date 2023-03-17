import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${props => (props.isSubscribed ? '#5CD3A8' : '#EBD8FF')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 196px;
  height: 50px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  border: none;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    background-color: ${props => (props.isSubscribed ? ' #49a886' : '#bcaccc')};
  }
`;
