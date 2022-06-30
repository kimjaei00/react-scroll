import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Video from '../../videos/video.mp4'
import { VideoBg, HeroContainer, HeroBg,HeroContent,HeroH1,HeroP,HeroWrapper,ArrowForward,ArrowRight} from './HeroElements'
import { Button } from '../ButtonElements'
const HeroSection = () => {
  const [hover,setHover]=useState(false)
  const onHover=()=>{
    setHover(!hover)
  }
  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoplay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new accoun today and receive $250 in credit towards your next payment.
          </HeroP>
          <HeroWrapper>
            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
            primary='true' dark='true' smooth ={true} duration={500} spy={true} exact='true' offset={-80}>
              Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
            </Button>
          </HeroWrapper>
        </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection;
