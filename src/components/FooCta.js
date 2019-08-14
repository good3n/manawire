import React from "react"
import styled from "styled-components"
import BorderLink from "../components/styled/BorderLink"

const StyledFooCta = styled.div`
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

const FooCta = (props) => (
  <StyledFooCta className="foo-cta">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.13 309.13">
      <path d="M30.08 172.93c23.7-34.1 37.63-56.08 47.8-72.32-39.06 3.46-76.5 52.05-76.5 52.05l25.78 25.78c.75-1.9 1.7-3.76 2.92-5.5zM130.72 282l25.76 25.76s48.6-37.43 52.05-76.49a1676.54 1676.54 0 0 0-72.32 47.8 26.82 26.82 0 0 1-5.49 2.93zM91.55 268.68c-4.42 1.78-8.77 3.68-13.3 5.2a205.98 205.98 0 0 1-37.2 8.52c-5.3.73-10.65 1.35-16 1.76l.15-1.99a239.88 239.88 0 0 1 6.23-38.22 196.35 196.35 0 0 1 5.56-17.8c1.3-3.66 2.92-7.15 4.56-10.65l-2.83-2.83a70.32 70.32 0 0 0-16.44 15.64 102.61 102.61 0 0 0-15.66 29.81 124.09 124.09 0 0 0-6.55 35.8c-.05 1.7-.17 3.44.1 5.13a11.94 11.94 0 0 0 8.12 9.5c1.75.56 3.5.57 5.31.56 11.01-.1 22.2-2 32.74-5.14 19.28-5.72 38.74-16.5 50.15-33.53l-2.76-2.75c-.72.34-1.45.67-2.18.99zM306 3.15a10.69 10.69 0 0 0-7.77-3.13c-34.4.67-119.3 7.11-164.39 52.2-20.47 20.47-27.12 31.12-41.7 54.47-10.5 16.8-24.87 39.83-51.15 77.65A10.7 10.7 0 0 0 42.22 198l68.92 68.93a10.68 10.68 0 0 0 13.66 1.22c37.83-26.28 60.85-40.65 77.65-51.15 23.35-14.58 34-21.23 54.47-41.7 45.17-45.17 51.56-130 52.21-164.39.06-2.9-1.07-5.7-3.13-7.76zM226.2 133.2a35.53 35.53 0 1 1-50.25-50.25 35.53 35.53 0 0 1 50.25 50.25z" />
    </svg>
    <h2>{props.title}</h2>
    <p>{props.text}</p>
    {props.children}
    <BorderLink to="/contact/">{props.link}</BorderLink>
  </StyledFooCta>
)

export default FooCta
