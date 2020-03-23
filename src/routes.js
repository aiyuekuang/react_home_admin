import React, {Fragment} from 'react';
import {
    Router,
    Route,
    Switch, Redirect
} from 'react-router-dom';
import {baseRoutes, urlCompEnum} from './work/router/data';
import {ConfigProvider} from 'antd';
import {inject, observer} from 'mobx-react';
import intl from "react-intl-universal";
import {toJS} from "mobx";
import {localesList} from "@mobx/locales";
import Home from '@page/home';
import NotFound from "@components/public/404/404"
import {RouterPro} from "react-router-pro"


@inject('locales', "userStore")
@observer
class App extends React.Component {
    constructor(props, context) {
        super(props, context);


        intl.init({
            currentLocale: toJS(this.props.locales.language).locales,  // 设置初始语音
            locales: localesList
        }).then(() => {

        });
    }


    render() {
        const {locales, userStore} = this.props;

        return (
            <ConfigProvider locale={locales.language.data}>
                <RouterPro data={[...baseRoutes, ...userStore.user.routes]} compEnum={urlCompEnum} HomeComp={Home} NotFound={NotFound}/>
            </ConfigProvider>
        );
    }
}

export default App;
