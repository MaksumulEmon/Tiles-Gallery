import React from 'react';

const DetailsPage = async ({params}) => {
    const {id} =  await params;
    console.log(id)
    return (
        <div>
            Tiles Details....
        </div>
    );
};

export default DetailsPage ;