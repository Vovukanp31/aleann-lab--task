import React from 'react';

const PageLoader = () => {

    return (
        <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">

    <div className="flex space-x-2 animate-pulse">
        <div className={`w-8 h-8 bg-blue-500 rounded-full`}></div>
        <div className={`w-8 h-8 bg-blue-500 rounded-full`}></div>
        <div className={`w-8 h-8 bg-blue-500 rounded-full`}></div>
    </div>

</div>
    );
};

export default PageLoader;