import styled from 'styled-components'

export const StyledQuote = styled.div`
  display: grid;
  grid-template-columns: 1fr 460px;
  grid-template-areas:
    'one two'
    'three three';
  grid-gap: 80px;
  align-items: center;
  margin: 0 auto -50px;
  padding: 80px 50px;
  max-width: 1100px;
  background: #fff;
  position: relative;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'one'
      'two'
      'three';
    margin: 0 20px -50px;
    padding: 50px 30px;
  }

  p {
    margin: 0;
  }

  .ql {
    grid-area: one;
    text-align: center;

    svg {
      width: 40px;
      fill: var(--color-green);
      margin-bottom: 30px;
    }

    p {
      font-weight: 800;
      color: var(--color-headertext);
    }
  }

  .qr {
    grid-area: two;
    border-radius: 3px;
    box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid #f6f6f6;
    padding: 60px;

    @media (max-width: 1000px) {
      width: 460px;
      margin: 0 auto;
    }

    @media (max-width: 600px) {
      width: auto;
      padding: 50px;
      margin: 0 -20px;
    }

    .grid {
      display: grid;
      grid-template-columns: 70px 1fr;
      grid-gap: 20px;
      align-items: center;

      p:first-of-type {
        color: var(--color-green);
        font-weight: 700;
      }
    }

    .gatsby-image-wrapper {
      border-radius: 70px;
      background: #f5f5f5;
      border: 1px solid #e5e5e5;
    }

    svg {
      width: 20px;
    }
  }

  .q3 {
    grid-area: three;

    @media (max-width: 1000px) {
      text-align: center;
    }

    p {
      text-align: center;
      margin-bottom: 50px;
      font-weight: 700;
      color: var(--color-lightgray);
    }

    span {
      display: grid;
      grid-template-columns: 140px 280px 160px 200px;
      grid-gap: 50px;
      align-items: center;
      justify-content: center;
      opacity: 0.5;

      @media (max-width: 1000px) {
        grid-template-columns: 150px 150px;
      }

      @media (max-width: 640px) {
        grid-template-columns: 100px 100px;
        grid-gap: 30px;
      }
    }
  }
`
