import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[calc(100vh-473px)]' >
                <div>
                    <h1 className='text-4xl font-semibold text-orange-600'>LOADING......</h1>
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;