/**
 * Created by zengtao on 2017/5/19.
 */
import React, {Fragment, Component, PureComponent} from 'react';
import { Button, Input, Modal } from 'antd';

import {history,Link} from "react-router-pro"
import {cuns} from 'esn';
import './index.scss';
import {inject, observer} from "mobx-react";
//本项目的模板页面


@inject("locales")
@observer
class Index extends Component {

    static defaultProps={

    }

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

        this.state = {

        };
    }

    componentDidMount = () => {

    }


    //移除
    componentWillUnmount(){
        //离开页面消除所有接口请求
        //window.requestCancel();
    }

    render() {
        const {} =this.props;
        const {} =this.state;
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}

