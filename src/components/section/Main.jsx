import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

import Header from './Header'
import Footer from './Footer'
import Search from './Search'

const Main = (props) => {
    return (
        <HelmetProvider>

            <Helmet
            titleTemplate="%s | DS Youtube"
            defaultTitle="DS Youtube"
            defer={false}
            >
                {props.title&&<title>{props.title}</title>}
            </Helmet>
            <Header/>
            <main id='main' role='main'>
                <Search/>
                {props.children}
            </main>
            <Footer/>
        </HelmetProvider>
    )
}

export default Main