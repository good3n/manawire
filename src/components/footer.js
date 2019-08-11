import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const SiteFooter = styled.footer`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 100px 80px 50px;
  color: #fff;
  background: var(--color-green);
  font-weight: 600;
  font-size: 16px;

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

const Footer = () => (
  <SiteFooter>
    <div>
      Manawire © {new Date().getFullYear()}, Built with
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
        <path d="M401.79 74.48c-63.5-82.44-188.45-33.8-188.45 49.92 0-83.72-124.96-132.36-188.46-49.92-65.63 85.22-.94 234.5 188.46 320.26C402.74 309 467.42 159.7 401.79 74.48z" />
      </svg>
      on <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer nofollow">React</a> and <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer nofollow">Gatsby</a>
    </div>
    <div>
      <Link to="/privacy/">Privacy</Link>
      <Link to="/sitemap/">Sitemap</Link>
      <a href="https://twitter.com/manawire">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
          <path d="M612 116.26a250.71 250.71 0 0 1-72.09 19.77 126.07 126.07 0 0 0 55.19-69.41 253.1 253.1 0 0 1-79.78 30.48 125.19 125.19 0 0 0-91.63-39.66c-69.33 0-125.55 56.22-125.55 125.51 0 9.83 1.1 19.43 3.25 28.61-104.32-5.24-196.83-55.22-258.75-131.17a124.6 124.6 0 0 0-16.98 63.1c0 43.56 22.18 81.99 55.84 104.48a125.56 125.56 0 0 1-56.87-15.76v1.57c0 60.8 43.29 111.55 100.7 123.1a127.16 127.16 0 0 1-33.09 4.4c-8.1 0-15.94-.8-23.63-2.33 15.98 49.9 62.33 86.2 117.25 87.2A251.89 251.89 0 0 1 29.95 499.8c-10.14 0-20.12-.62-29.95-1.72a354.88 354.88 0 0 0 192.44 56.48c230.95 0 357.19-191.3 357.19-357.19l-.42-16.25A250.7 250.7 0 0 0 612 116.26z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/manawire/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.12 430.12">
          <path d="M430.12 261.54v159.02h-92.2V272.19c0-37.27-13.32-62.7-46.7-62.7-25.47 0-40.63 17.14-47.3 33.72-2.43 5.93-3.05 14.18-3.05 22.48v154.87h-92.22s1.24-251.28 0-277.32h92.2v39.3c-.18.3-.42.62-.6.9h.6v-.9c12.26-18.86 34.14-45.81 83.11-45.81 60.67 0 106.16 39.63 106.16 124.81zM52.18 9.56C20.64 9.56 0 30.26 0 57.46c0 26.62 20.04 47.94 50.96 47.94h.62c32.15 0 52.15-21.31 52.15-47.94-.6-27.2-20-47.9-51.55-47.9zm-46.7 411h92.18V143.24H5.48v277.32z" />
        </svg>
      </a>
    </div>
  </SiteFooter>
)

export default Footer
