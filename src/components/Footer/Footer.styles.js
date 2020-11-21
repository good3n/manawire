import styled from "styled-components"

export const SiteFooter = styled.footer`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 100px 80px 50px;
  color: #fff;
  background: var(--color-green);
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 1400px) {
    padding: 100px 50px 50px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    width: 20px;
    position: relative;
    top: 5px;
    margin: 0 6px;
    /* fill: #f05228; */
    fill: #fff;
  }

  div:last-of-type {
    justify-self: end;

    @media (max-width: 1000px) {
      justify-self: center;
      margin-top: 20px;
    }

    a {
      margin-left: 20px;
    }

    svg {
      top: 3px;
      fill: #fff;
      width: 16px;
      margin: 0;
    }
  }
`
