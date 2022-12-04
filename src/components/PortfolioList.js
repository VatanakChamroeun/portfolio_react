import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio'
import { developmentPortfolio, researchPortfolio } from '../datas/Portfolio'
import { fadeIn } from '../animations'
import { motion } from 'framer-motion'
const PortfolioList = ({ portfolioSection, isDarkMode }) => {
  return (
    <StyledContainer
      ref={portfolioSection}
      variants={fadeIn}
      initial='hidden'
      animate='show'
    >
      <StyledTitle>Portfolio</StyledTitle>
      {developmentPortfolio.map((data, index) => (
        <Portfolio
          key={index}
          title={data.title}
          subtitle={data.subtitle}
          content={data.content}
          technologyImages={data.technologyImages}
          links={data.links}
          projectImages={data.projectImages}
          isDarkMode={isDarkMode}
        />
      ))}
      <br></br>
      <br></br>
      <StyledTitle>Research Projects</StyledTitle>
      {researchPortfolio.map((data, index) => (
        <Portfolio
          key={index}
          title={data.title}
          subtitle={data.subtitle}
          content={data.content}
          technologyImages={data.technologyImages}
          links={data.links}
          projectImages={data.projectImages}
          isDarkMode={isDarkMode}
        />
      ))}
    </StyledContainer>
  )
}

const StyledContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 64px;
  color: #ced6f3;
`

const StyledTitle = styled.h2`
  text-align: center;
  font-weight: lighter;
`

export default PortfolioList
