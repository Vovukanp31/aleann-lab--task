import { spawn } from 'child_process';
import React from 'react';

interface Props {
    color: string;
    data: string | string[];
}

const Banner = ({color, data}:Props) => {

    const colorSetup = color === 'blue' ? 'border-blue-banner-text-border text-blue-banner-text-border bg-blue-banner-bg' :
     color === 'yellow' ? 'border-yellow-banner-text-border text-yellow-banner-text-border bg-yellow-banner-bg' :
      'border-black';

      let banner;

    if (typeof data === 'object') {
        banner = data.map(i => <span className={`${colorSetup} border-1 rounded-lg py-2 px-14 font-bold`}>{i}</span>)
    } else {
        banner =  <span className={`${colorSetup} border-2 rounded-sm p-4`}>{data}</span>
    }

    return (
        <div className='flex gap-2 py-2 flex-wrap'>
            {banner}
        </div>
    );
};

export default Banner;