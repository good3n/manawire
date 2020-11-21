import styled from "styled-components"

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  div {
    position: relative;

    &:last-of-type {
      grid-column: 1 / 3;
    }

    &::after {
      content: "";
      height: 0;
      transition: height 0.35s ease;
    }

    label {
      display: block;
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 16px;
      transition: all 0.2s ease-in-out;
    }

    &:focus-within {
      label {
        top: 8px;
        font-size: 14px;
        color: var(--color-lightgray);
      }

      &::after {
        content: "";
        background: var(--color-green);
        height: 4px;
        width: 100%;
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
  }

  input,
  textarea {
    display: block;
    background: var(--color-graybg);
    border: none;
    outline: 0;
    width: 100%;
    padding: 30px 20px 15px;
    box-sizing: border-box;

    &:not(:placeholder-shown) + label {
      top: 8px;
      font-size: 14px;
      color: var(--color-lightgray);
    }
  }

  textarea {
    height: 150px;
    line-height: 1.4;
  }

  button {
    grid-column: 1 / 3;
    color: #fff;
    padding: 17px 30px;
    background: var(--color-green);
    border-radius: 3px;
    box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.2);
    line-height: 1;
    border: none;
    outline: 0;
    font-weight: 700;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    }
  }
`
