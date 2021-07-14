import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const GetStarted = () => (
  <StyledSection>
    <GetStartedContainer>
      <ContactGrid>
        <ContactItem>
          <GetStartedTitle>Contact Me</GetStartedTitle>
          <Subtitle>I'm easy to get ahold of!</Subtitle>
          <Subtitle><a href="mailto:logan@loganspeck.com">logan@loganspeck.com</a></Subtitle>
          <Subtitle><a href="tel:3343323331">(334) 332-3331</a></Subtitle>
        </ContactItem>
        <ContactItem>
          <GetStartedTitleForm><form method="post" action="#">
  <label>
    <p>Name</p>
    
  </label>

  <button type="submit">Send</button>
  <input type="reset" value="Clear" />
</form></GetStartedTitleForm>
        </ContactItem>
      </ContactGrid>
    </GetStartedContainer>
  </StyledSection>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`
const ContactGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`
const ContactItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`
const GetStartedTitleForm = styled.input`
  width: 50px;
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.primary};
`
