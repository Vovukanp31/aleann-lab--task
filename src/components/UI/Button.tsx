import React from 'react';

import ArrowSvg from '../../assets/svg/arrowSvg';

interface Props {
    text: string;
    onClick?: (params: any) => any;
    isMain: boolean;
    isNav?: boolean;
}

const Button = ({text, onClick, isMain, isNav}: Props) => {

    const typeOfButton = isMain ? 
    'bg-blue-btn-main text-white hover:bg-gray-layer hover:text-blue-btn-main' : 'bg-gray-layer text-blue-btn-main hover:bg-blue-btn-main hover:text-white'
    return (
        <button onClick={onClick} type="button" className={`${typeOfButton} focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 transition-all focus:outline-none`}>
            {isNav ? <span className='flex gap-2'><ArrowSvg/>{text}</span> : text}
            </button>
    );
};

export default Button;