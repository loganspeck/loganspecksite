import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="services">
    <Backimg><StyledContainer>
      <SectionTitle>Services</SectionTitle>
      <Subtitle>Just the Highlights</Subtitle>
      <FeaturesGrid>
        <FeatureItem>
        <StaticImage width="300px" src="/Users/loganspeck/Documents/loganspecksite/src/images/ills/Website-Login.svg" alt="website login" />
          <FeatureTitle>Web Development</FeatureTitle>
          <FeatureText>
            Receive budget and spending alerts based on your favorite triggers.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <StaticImage width="300px" src="/Users/loganspeck/Documents/loganspecksite/src/images/ills/Socialmedia-Marketing.svg" alt="social-media" />
          <FeatureTitle>Social Media Management</FeatureTitle>
          <FeatureText>
            Your data is always safe with us as we use the latest security
            protocols.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <StaticImage width="300px" src="/Users/loganspeck/Documents/loganspecksite/src/images/ills/Design-collaboration.svg" alt="design" />
          <FeatureTitle>Graphic Design</FeatureTitle>
          <FeatureText>
            Create smart automated workflows and triggers for your money.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <StaticImage width="300px" src="/Users/loganspeck/Documents/loganspecksite/src/images/ills/Server.svg" alt="server" />
          <FeatureTitle>Solution Integration</FeatureTitle>
          <FeatureText>
            Easily link up to 5 banks to your finance account.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer></Backimg>
  </Section>
)

export default Features

const StyledContainer = styled(Container)`
}

`
const Backimg = styled.div`
}

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
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  height: 500px;
  padding: 5%;
  width: 100%;
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
`

const FeatureText = styled.p`
  text-align: center;
`
