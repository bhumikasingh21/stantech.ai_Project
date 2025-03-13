import React from 'react'
import MemberStories from '../../components/memberStories/MemberStories';
import Footer from '../../components/footer/Footer';
import LandingSection from '../../components/landingSection/LandingSection';

const Home = () => {
  return (
    <div>
      <LandingSection />
      <MemberStories />
      <Footer />
    </div>
  )
}

export default Home