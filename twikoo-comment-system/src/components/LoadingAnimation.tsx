import React from 'react';

const LoadingAnimation: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
            <span className="ml-4 text-xl text-gray-700">加载中...</span>
        </div>
    );
};

export default LoadingAnimation;