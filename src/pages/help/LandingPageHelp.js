import React from 'react';
import landingPage from '../../images/landingPageHelp.png';
import loginIcon from '../../images/loginHelp.png';
import signupIcon from '../../images/signupHelp.png';
import featuresIcon from '../../images/featuresHelp.png';
import aboutusIcon from '../../images/aboutusHelp.png';
import helpIcon from '../../images/helpHelp.png';


/**
 * LandingPageHelp.js
 * Purpose: Display the Landing Page table on /help
 * @author Elisa Rexinger
*/

function LandingPageHelp() {
    
        return (
            <table className="table table-striped table-dark" style={{'margin-top': '25px'}} >
            <thead class="thead-dark">
                <tr>
                    <th>Landing Page</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th rowspan="6"><img src={landingPage} className="Help-pages" alt="landing-page" /></th>
                    <th>Element</th>
                    <th>Description</th>
                </tr>
    
                <tr>
                    <td><img src={loginIcon} className="Mini-aang" alt="navigation bar" /></td>
                    <td>Redirect to Login page at /login</td>
                </tr>

                <tr>
                    <td><img src={signupIcon} className="Mini-aang" alt="navigation bar" /></td>
                    <td>Redirect to Sign Up page at /sign-up</td>
                </tr>

                <tr>
                    <td><img src={featuresIcon} className="Mini-aang" alt="navigation bar" /></td>
                    <td>Redirect to Features page at /sign-up</td>
                </tr>

                <tr>
                    <td><img src={aboutusIcon} className="Mini-aang" alt="navigation bar" /></td>
                    <td>Redirect to About Us page at /about</td>
                </tr>

                <tr>
                    <td><img src={helpIcon} className="Mini-aang" alt="navigation bar" /></td>
                    <td>Redirect to Help page at /help</td>
                </tr>
            </tbody>
        </table> 
        );
    
}

export default LandingPageHelp;