import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { Section, Container } from "../global"

const Services = () => (
  <Section id="services">
    <Backimg><StyledContainer>
      <SectionTitle>Services</SectionTitle>
      <Subtitle>Just the Highlights</Subtitle>
      <FeaturesGrid>
        <FeatureItem>
        <StaticImage width={300} src="../../images/ills/Website-Login.svg" alt="website login" />
          <TitleContainer><FeatureTitle>Web Development</FeatureTitle></TitleContainer>
          <FeatureText>
            Whether you are looking for redesign of an existing site, or looking to deploy from the ground up, we can help. Some common solutions we offer are websites build Wordpress or Shopify (eCommerce), or for more advanced uses we can build out your site using a static site generator and custom CMS.
          </FeatureText>
          <a class="headbuttonlink" href="#services"><HeaderButton>Learn More</HeaderButton></a>
        </FeatureItem>
        <FeatureItem>
        <StaticImage width={300} src="../../images/ills/Socialmedia-Marketing.svg" alt="social-media" />
        <TitleContainer><FeatureTitle>Social Media Management</FeatureTitle></TitleContainer>
          <FeatureText>
            Social Media is one of the most important elements of business today. Whether you need full managment of all platforms, content creation, or simply consulting, we will work with you to unlock the full potential of social media.
          </FeatureText>
          <a class="headbuttonlink" href="#services"><HeaderButton>Learn More</HeaderButton></a>
        </FeatureItem>
        <FeatureItem>
        <StaticImage width={300} src="../../images/ills/Design-collaboration.svg" alt="design" />
        <TitleContainer><FeatureTitle>Graphic Design</FeatureTitle></TitleContainer>
          <FeatureText>
            We are Adobe Suite experts! We offer logo creation, brand assets, digitizing services, content creation, and much more.
          </FeatureText>
          <a class="headbuttonlink" href="#services"><HeaderButton>Learn More</HeaderButton></a>
        </FeatureItem>
        <FeatureItem>
        <StaticImage width={300} src="../../images/ills/Server.svg" alt="server" />
        <TitleContainer><FeatureTitle>Solution Integration</FeatureTitle></TitleContainer>
          <FeatureText>
            We work with your business to audit your work flows and impliment software (or hardware) that will increase effeciency.
          </FeatureText>
          <a class="headbuttonlink" href="#services"><HeaderButton>Learn More</HeaderButton></a>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer></Backimg>
  </Section>
)

export default Services

const StyledContainer = styled(Container)`
& .services__TitleContainer-eJdOdW DyWUw {
  margin-bottom: 120px;
}
& a {
  text-decoration: none;
}
`
const Backimg = styled.div`
}

`

const TitleContainer = styled.div`

`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 24px;
  text-align: center;
  margin-top: 0px;
`

const FeaturesGrid = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  background: white;
  text-align: center;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  height: 100%;
  padding: 5%;
  width: 100%;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
  }
  & .gatsby-image-wrapper {
    overflow: visible !important;
    }
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  margin-bottom: 10px;
  margin-top: 1%;
  text-align: center;
`

const FeatureText = styled.p`
  text-align: center;
  height: 100%;
`
const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
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