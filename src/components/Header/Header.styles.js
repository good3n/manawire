import styled from "styled-components"

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #fff;
  z-index: 997;
  padding: 28px 0;

  @media (max-width: 1000px) {
    position: static;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 0 80px;
  align-items: center;

  @media (max-width: 1400px) {
    padding: 0 50px;
  }

  @media (max-width: 1000px) {
    padding: 0 30px;
    grid-template-columns: 3fr 1fr;
  }

  img {
    width: 210px;
    max-width: 100%;
    display: block;
  }
`

export const NavWrap = styled.div`
  text-align: right;

  nav {
    @media (max-width: 1000px) {
      display: none;
    }

    a {
      text-decoration: none;
      color: var(--color-headertext);
      margin-left: 70px;
      font-weight: 700;

      &:last-of-type {
        color: #fff;
        padding: 10px 30px;
        background: var(--color-green);
        border-radius: 3px;
        box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.2);
        line-height: 1;
      }
    }
  }

  &.active nav {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(23, 28, 47, 0.95);
    z-index: 998;
    text-align: center;
    padding-top: 100px;

    a {
      display: block;
      color: #fff;
      padding: 15px 0;
      margin: 0;

      &:last-of-type {
        background: none;
        box-shadow: none;
        border-radius: 0;
        line-height: inherit;
      }
    }
  }
`

export const NavToggle = styled.button`
  display: none;
  overflow: visible;
  margin: 0;
  padding: 10px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  outline: none;
  background-color: transparent;
  position: relative;
  z-index: 999;

  @media (max-width: 1000px) {
    display: inline-block;
    position: fixed;
    top: 30px;
    right: 20px;
  }

  .toggle-box {
    position: relative;
    display: inline-block;
    width: 35px;
    height: 24px;
  }

  .toggle-inner {
    position: absolute;
    top: 10px;
    right: 0;
    left: 0;
    /* width: 35px; */
    height: 4px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
    background-color: #000;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition-duration: 75ms;

    &::before,
    &::after {
      position: absolute;
      width: 35px;
      height: 4px;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
      border-radius: 4px;
      background-color: #000;
    }

    &::before {
      content: "";
      display: block;
      top: -10px;
      transition: top 75ms ease 0.12s, opacity 75ms ease;
    }

    &::after {
      content: "";
      display: block;
      bottom: -10px;
      transition: bottom 75ms ease 0.12s,
        transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  &.active .toggle-inner {
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: rotate(45deg);
    background-color: #fff;
    background-color: var(--color-green);

    &::before {
      top: 0;
      transition: top 75ms ease, opacity 75ms ease 0.12s;
      opacity: 0;
      background-color: var(--color-green);
    }

    &::after {
      bottom: 0;
      transition: bottom 75ms ease,
        transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
      transform: rotate(-90deg);
      background-color: var(--color-green);
    }
  }
`
