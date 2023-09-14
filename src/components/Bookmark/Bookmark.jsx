import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-red-400 px-5 py-5 mb-5'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

export default Bookmark;