import styled from 'styled-components';

// const Label = styled.label`
//   font-size: 2rem;
//   font-weight: 200;
//   padding-top: 1rem;
// `;

const Input = styled.input`
  width: 100%;
  background-color: var(--color-grey-900);
  color: var(--color-grey-0);
  padding: 1rem 4rem;
  height: 10rem;
  font-size: 4rem;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 10rem;
`;

function FormInput({ label, ...otherProps }) {
  return (
    <>
      {/* {label && <Label>{label}</Label>} */}
      <Input {...otherProps} />
    </>
  );
}
export default FormInput;
