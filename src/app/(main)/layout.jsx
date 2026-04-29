import Navbar from '@/components/shared/Navbar';
import React from 'react';

const Authlayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default Authlayout;