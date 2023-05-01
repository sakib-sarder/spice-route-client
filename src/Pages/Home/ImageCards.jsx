import React from 'react';

const ImageCards = ({photo}) => {
    return (
        <div className='w-[20vw] '>
            <img className='w-full h-full rounded-lg' src={photo.image} alt="" />
        </div>
    );
};

export default ImageCards;