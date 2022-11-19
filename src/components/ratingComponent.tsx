import React from 'react';

import RatingSvg from '../assets/svg/ratingSvgComponent';
import RatingSvgSm from '../assets/svg/ratingSvgComponentSm';

interface Props {
    rate: number;
}

const RatingComponent = ({rate}: Props) => {


    const rateExampleRandomiser = (max: number): number => Math.floor(Math.random() * max);

    const forExampleRate = rateExampleRandomiser(rate);
    
    const rateStars = [];

   for (let i = 0; i <= forExampleRate; i++) {
    rateStars.push(window.innerWidth < 768 ? <RatingSvgSm key={i}/> : <RatingSvg key={i}/>)

   }
    return (
          <div className='flex'>{forExampleRate && forExampleRate !== 0 ? rateStars : ''}</div>
    );
};

export default RatingComponent;