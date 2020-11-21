import styled from "styled-components"

export const StyledValueProps = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0;
  }

  .gatsby-image-wrapper {
    margin-top: -50px;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  div.value-props {
    background: var(--color-graybg);
    margin-left: -80px;
    padding: 80px;

    @media (max-width: 1000px) {
      margin: 0;
      padding: 50px 30px;
    }
  }

  h2 {
    margin-top: 0;
  }

  ul {
    margin: 40px 0 10px;
    padding: 0;
  }

  li {
    display: block;
    position: relative;
    padding-left: 20px;
    margin-top: 10px;
    font-weight: 800;
    color: var(--color-headertext);

    &::before {
      content: "";
      height: 3px;
      width: 10px;
      background: var(--color-green);
      position: absolute;
      top: 13px;
      left: 0;
    }
  }
`
