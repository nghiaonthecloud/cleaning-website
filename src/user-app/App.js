import React, {useEffect, useState} from 'react';
import ScriptTag from 'react-script-tag';
import {Route, useLocation} from 'react-router';
import {Layout} from './components/Layout';
import Home from './components/home/Home';
import Page404 from './components/404/Page404';
import {Login} from './components/login/Login';
import {Signup} from './components/login/Signup';

import {PrivateRoute} from '../auth/Auth';
import AuthService from '../services/auth.service';

import './css/animate.css';
import './css/hover-min.css';
import './css/datepicker.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/jquery-ui.min.css';
import './css/bootstrap.min.css';
import './css/bootsnav.css';
import './css/style.css';
import './css/responsive.css';
import {Info} from "./components/info/Info";
import {AnimatedSwitch} from "react-router-transition";

// Custom hook to add script to document
// const useScript = url => {
//   useEffect(() => {
//     const script = document.createElement('script');
//
//     script.src = url;
//
//     document.body.appendChild(script);
//
//     return () => {
//       document.body.removeChild(script);
//     }
//   }, [url]);
// };


const App = () => {
  const location = useLocation();

  const [user, setUser] = useState(AuthService.getCurrentUser());

  useEffect(() => {
    if (location.hash) {

      const yOffset = -70;
      const element = document.getElementById(location.hash.slice(1))
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [location,])

  return (
    <Layout user={user} setUser={setUser}>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <Route exact path='/' component={Home}/>
          <Route exact path='/login' render={(props) => (
            <Login {...props} setUser={setUser}/>
          )}
          />
          <Route exact path='/signup' component={Signup}/>
          <PrivateRoute path='/info' Info>
            <Info/>
          </PrivateRoute>
          <Route path='*' component={Page404}/>
      </AnimatedSwitch>
      <ScriptTag defer type="text/javascript"
                 src={'https://code.jquery.com/jquery-3.5.1.min.js'}/>
      <ScriptTag defer type="text/javascript"
                 src={'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js'}/>
      <ScriptTag defer type="text/javascript"
                 src={process.env.PUBLIC_URL + '/js/bootstrap.min.js'}/>
      <ScriptTag defer type="text/javascript"
                 src={process.env.PUBLIC_URL + '/js/bootsnav.js'}/>
      <ScriptTag defer type="text/javascript"
                 src={process.env.PUBLIC_URL + '/js/jquery.filterizr.min.js'}/>
      <ScriptTag defer type="text/javascript"
                 src={'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js'}/>
      <ScriptTag defer type="text/javascript"
                 src={'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'}/>
      <ScriptTag defer type="text/javascript"
                 src={process.env.PUBLIC_URL + '/js/jquery.counterup.min.js'}/>
      <ScriptTag defer type="text/javascript"
                 src={process.env.PUBLIC_URL + '/js/waypoints.min.js'}/>
      <ScriptTag defer type="text/javascript"
                 src={process.env.PUBLIC_URL + '/js/owl.carousel.min.js'}/>
      <ScriptTag defer type="text/javascript"
                 src={process.env.PUBLIC_URL + '/js/jquery.sticky.js'}/>
      <ScriptTag defer type="text/javascript"
                 src={process.env.PUBLIC_URL + '/js/custom.js'}/>
    </Layout>
  );

}

export default App;
