import Image from 'next/image';
import React from 'react';

const SingleProcess1 = ({ process }) => {
    const { activeClass, thumb, steps, title, text } = process

    return (
        <>
            <div className={`process-style-one ${activeClass}`}>
                <div className="thumb">
                    <Image src={`/assets/img/about/${thumb}`} width={800} height={800} alt="Thumb" />
                    <span>{steps}</span>
                </div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleProcess1;