import { Link } from "gatsby"
import styled from "styled-components"

const BorderLink = styled(Link)`
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  border-bottom: 1px solid var(--color-headertext);
  display: inline-block;
  font-size: 16px;
  margin-top: 30px;
`

export default BorderLink
