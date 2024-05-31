import React from 'react';
import Navbar from '../Navbar/Navbar'

const Layout =({children}) =>{
    return(
        <>
        <div>
            <Navbar/>
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;