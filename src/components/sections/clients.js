import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { Section, Container, Clientsimg } from "../global"

const Clients = () => (
  <Section id="clients">
    <StyledContainer>
      <SectionTitle>Featured Clients</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
        <StaticImage width="300px" src="/Users/loganspeck/Documents/Strapi/gatsby-starter-saas-marketing/src/images/logos/sds-logo.png" alt="sds-logo" />
          <FeatureTitle>Saturday Down South</FeatureTitle>
          <Subtitle2inline><Subtitle2>Social Media</Subtitle2><Subtitle2>Graphic Design</Subtitle2></Subtitle2inline>
          <FeatureText>
            Receive budget and spending alerts based on your favorite triggers.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <StaticImage width="300px" src="/Users/loganspeck/Documents/Strapi/gatsby-starter-saas-marketing/src/images/logos/bnb-logo.png" alt="bnb-logo" />
          <FeatureTitle>B&B Beverage Management</FeatureTitle>
          <Subtitle2inline><Subtitle2>Web Development</Subtitle2><Subtitle2>Social Media</Subtitle2></Subtitle2inline>
          <FeatureText>
            Your data is always safe with us as we use the latest security
            protocols.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <StaticImage width="300px" src="/Users/loganspeck/Documents/Strapi/gatsby-starter-saas-marketing/src/images/logos/auburn-logo.jpeg" alt="auburn-logo" />
          <FeatureTitle>Auburn University</FeatureTitle>
          <Subtitle2inline><Subtitle2>Web Development</Subtitle2><Subtitle2>Solutions Integration</Subtitle2></Subtitle2inline>
          <FeatureText>
            Create smart automated workflows and triggers for your money.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <StaticImage width="300px" src="/Users/loganspeck/Documents/Strapi/gatsby-starter-saas-marketing/src/images/logos/soco-logo.jpeg" alt="soco-logo" />
          <FeatureTitle>Soco Hernando</FeatureTitle>
          <Subtitle2inline><Subtitle2>Web Development</Subtitle2><Subtitle2>Graphic Design</Subtitle2></Subtitle2inline><Subtitle2>Social Media</Subtitle2>
          <FeatureText>
            Easily link up to 5 banks to your finance account.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <StaticImage width="300px" src="/Users/loganspeck/Documents/Strapi/gatsby-starter-saas-marketing/src/images/logos/ampro-logo.jpg" alt="ampro-logo" />
          <FeatureTitle>AmPro Promotional Marketing</FeatureTitle>
          <Subtitle2inline><Subtitle2>Web Development</Subtitle2><Subtitle2>Solutions Integration</Subtitle2></Subtitle2inline>
          <FeatureText>Send money to friends and family with ease.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <MoreButton>View More</MoreButton>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Clients

const StyledContainer = styled(Container)``


const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
  margin-top: 0;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const Subtitle2 = styled.h5`
  font-size: 16px;
  background-color: ${props => props.theme.color.background.light};
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin: 5px 5px;
  text-align: center;
  padding: 2px 5px 2px 5px;
  float: left;
`

const FeaturesGrid = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const Subtitle2inline = styled.div`
display: inline;
`

const FeatureItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
transition: 0.3s;
padding: 25px;
border-radius: 5px;
&:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
}
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 5;
  margin-bottom: 3px;
`

const FeatureText = styled.p`
  text-align: center;
`
const MoreButton = styled.button`
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
