/**
 * Created by zengtao on 2017/5/19.
 */
import React, {Fragment, Component, PureComponent} from 'react';
import {history,Link} from "react-router-pro"
import './index.scss';
import {inject, observer} from "mobx-react";
import {baseRoutes} from "../../../../router/data";
import {MenuUp} from "anup"
//本项目的模板页面


@inject('locales', "userStore")
@observer
export default class Index extends Component {

    static defaultProps = {}

    static getDerivedStateFromProps(nextProps, prevState) {
        // const {value} = nextProps;
        // 当传入的type发生变化的时候，更新state
        // if ("value" in nextProps && value !== prevState.value) {
        //     console.log(value)
        //     return {
        //         value,
        //     };
        // }
        return null;
    }

    constructor(props) {
        super(props);
        this.state={

        }
        //一套算法获取默认展开的父

    }

    componentDidMount = () => {

    }


    //移除
    componentWillUnmount() {
        //离开页面消除所有接口请求
        //window.requestCancel();
    }

    render() {
        const {userStore} = this.props;
        const {} = this.state;

        let routeData = [...baseRoutes, ...userStore.user.routes]


        return (
            <React.Fragment>
                <MenuUp {...this.props} routeData={routeData} history={history}/>
            </React.Fragment>
        );
    }
}

