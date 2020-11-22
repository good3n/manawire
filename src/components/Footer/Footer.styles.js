import styled from 'styled-components'

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

export const StyledFooCta = styled.div`
  text-align: center;
  margin: 0 auto -50px;
  padding: 80px 100px;
  max-width: 1100px;
  background: #fff;
  position: relative;

  @media (max-width: 1000px) {
    padding: 70px 50px;
  }

  svg {
    width: 40px;
    fill: var(--color-green);
  }

  p {
    margin: 40px 0 30px;
    font-weight: 800;
    color: var(--color-headertext);
  }
`
