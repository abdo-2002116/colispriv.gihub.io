import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export default function Result(){
  const [conterOn,setCounterOn]=useState(false);
  console.log(conterOn)
return(

 
   <div className="flex flex-wrap justify-center md:justify-between mx-4 p-8 md:mx-8 lg:mx-16">
  <div className="flex flex-col items-center justify-center p-4md:w-48 lg:w-64">
    <div className="flex flex-row justify-between mb-4">
      <img className='w-24 h-24' src={require('./image/delivery-box.png')} alt="Delivery Box"/>
      <div className="flex flex-col ml-5">
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className="text-xl font-bold text-orange-600"> +{conterOn &&
          <CountUp start={0} end={985500} duration={2} delay={0}/>}</div>
          </ScrollTrigger>
        <div className="text-gray-500 font-bold text-lg	">Colis traités par ans</div>
      </div>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center p-4 md:w-48 lg:w-64">
    <div className="flex flex-row justify-between mb-4">
      <img className='w-24 h-24' src={require('./image/location.png')} alt="Location"/>
      <div className="flex flex-col ml-5">
        <div className="text-xl font-bold text-orange-600">+{conterOn &&
          <CountUp start={0} end={76} duration={2} delay={0}/>}</div>
        <div className="font-bold text-gray-500	text-lg		">Villes couvertes</div>
      </div>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center p-4 md:w-48 lg:w-64">
    <div className="flex flex-row justify-between mb-4">
      <img className='w-24 h-24' src={require('./image/call-center-agent.png')} alt="Call Center Agent"/>
      <div className="flex flex-col ml-5">
        <div className="text-xl font-bold text-orange-600">+{conterOn &&
          <CountUp start={0} end={1776} duration={2} delay={0}/>}</div>
        <div className="text-gray-500	text-lg	font-bold">Clients satisfaits</div>
      </div>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center p-4 md:w-48 lg:w-64">
    <div className="flex flex-row justify-between mb-4">
      <img className='w-24 h-24' src={require('./image/box.png')} alt="Box"/>
      <div className="flex flex-col ml-5">
        <div className="text-xl font-bold text-orange-600">+
        {conterOn &&
          <CountUp start={0} end={36} duration={1} delay={0}/>}</div>
        <div className="text-gray-500	text-lg	 font-bold">Types de marchandises</div>
      </div>
    </div>
  </div>
</div>

    
    )
}


