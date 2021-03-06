import React from 'react';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import grabReciept from './pages/grabReciept';
import SplitEvenly from './pages/splitEvenly1';
import SplitEvenlyRequest from './pages/splitEventlyRequest';
import home from './pages/Home';
import ConfirmItemDetails from './pages/ConfirmItems';
import CategorizeItems from './pages/CategorizeItems';
import AddTax from './pages/AddTax';
import settings from './pages/Settings';
import ThankYou from './pages/ThankYou';
import request from './pages/Requests';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar={true}>

                <Scene key="auth">
                    <Scene
                        key="loginPage"
                        component={LoginForm}
                        hideNavBar={true}
                        navigationBarStyle={{
                        backgroundColor: 'transparent',
                        marginTop: 8
                    }}/>
                </Scene>
                <Scene key="main">

                    <Scene key="home" component={home} hideNavBar={true}/>
                    <Scene key="scanReciept" component={grabReciept} hideNavBar={true}/>
                    <Scene
                        key="ConfirmItemDetails"
                        component={ConfirmItemDetails}
                        hideNavBar={true}/>
                    <Scene key="AddTip" component={AddTax} hideNavBar={true}/>
                    <Scene key="SplitEvenly" component={SplitEvenly} hideNavBar={true}/>
                    <Scene key="CategorizeItems" component={CategorizeItems} hideNavBar={true}/>
                    <Scene
                        key="splitEvenlyRequest"
                        component={SplitEvenlyRequest}
                        hideNavBar={true}/>
                    <Scene key="ThankYou" component={ThankYou} hideNavBar={true}/>
                    <Scene key="request" component={request} hideNavBar={true}/>
                    <Scene key="settings" component={settings} hideNavBar={true}/>
                </Scene>

            </Stack>
        </Router>
    )
}

export default RouterComponent;