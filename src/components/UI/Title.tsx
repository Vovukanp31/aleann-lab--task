import React from 'react';

interface Props {
    size: number;
    title: string;
}

const Title = ({size, title}: Props) => {

    let header;
    if (size === 1) {
        header = <h1 className='text-2xl pb-2 border-b-2 border-gray-200 font-proximaBold'>{title}</h1>
    } else if (size === 2) {
        header = <h2 className='text-xl font-proximaBold mt-8 mb-2'>{title}</h2>
    } else if (size === 3) {
        header = <h3 className='text-lg font-proxima'>{title}</h3>
    }
    return (
        <>
            {header}
        </>
    )
};

export default Title;