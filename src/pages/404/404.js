import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppBlackNavbar from '../../components/appBlackNavbar/appBlackNavbar';
import AppFooter from '../../components/appFooter/appFooter';

import cat404 from './404cat.png';
import './404.css';

const Page404 = () => {
    return(
        <div>
            <Helmet>
                <meta
                name="description"
                content="saveApet page not found error"
                />

                <title>saveApet 404</title>
            </Helmet>

            <div className="navbar_404">
                <AppBlackNavbar/>
            </div>

            <div className="message404">
                 <img src={cat404} alt="404-saveApet" />
            </div>
            
        <p className='message-error'>Ehm... You didn't saw anything</p>

        <div className="go-home-container">
           <Link className='go-home' to='/'>GO HOMEPAGE</Link>
        </div>

        <div className="footer_404">
                <AppFooter/>
            </div>

     </div>
    )
}

export default Page404;