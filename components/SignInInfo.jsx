
import FeatureCard from './FeatureCard'
import IMG2 from "../app/assets/ChatsCircle.png"
import IMG1 from "../app/assets/ProjectorScreenChart.png"

import Image from 'next/image'
const SignInInfo = () => {
  return (
    <div className=' min-h-[430px] flex flex-col justify-around'>
      <FeatureCard 
      img={<Image src={IMG1} alt="image-1"/>} 
      heading="Boost Your Sales Instantly"
       para="Unlock the power of targeted advertising on our platform. Create impactful ads that convert and drive sales, helping your business grow."
       flag="false"
       />
     <FeatureCard 
      img={<Image src={IMG2} alt="image-1"/>} 
      heading="Discover Powerful Insight"
       para="Gain access to in-depth analytics that reveal how your ads are performing. Use this data to optimize your campaigns and achieve better results."
       flag="false"
       />
       <FeatureCard 
      img={<Image src={IMG1} alt="image-1"/>} 
      heading=" Maximize Your Rewards"
       para="Join our cashback program and earn more as you advertise. The more campaigns you run, the greater your rewards, making every ad investment count."
       
       />
    </div>
  )
}

export default SignInInfo
