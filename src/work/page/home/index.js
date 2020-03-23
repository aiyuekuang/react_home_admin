/**
 * Created by zengtao on 2017/5/19.
 */
import React, {useEffect, useState} from 'react';
import {Card, Layout, Menu, Icon, Breadcrumb, Dropdown, Button} from 'antd';
import {cun, cuns} from 'esn';
import intl from 'react-intl-universal';
import locales, {lang} from '@mobx/locales';
import "./index.scss"
import {LANG} from "@enum/storage";
import {inject, observer} from 'mobx-react';
import {MenuUp} from "anup";
import {baseRoutes} from "../../router/data";
import {history,Link} from "react-router-pro"


const {Header, Sider, Content} = Layout;


let index = (props) => {
    const {locales,userStore} = props;
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [collapsed, changeCollapsed] = useState(0);
    //当前语言


    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        console.log('组件加载')

        return () => {
            console.log('组件即将卸载----')
        }
    }, [count]);


    let langLi = lang.map((data, i) => {
        return (
            <Menu.Item key={data.value} langdata={data}>{data.label}</Menu.Item>
        )
    })

    const menu = (
        <Menu onClick={(e) => {
            let data = e.item.props.langdata
            cun(LANG, data)
            locales.changeLanguage(data.value)
        }}>
            {langLi}
        </Menu>
    );

    let routeData = [...baseRoutes, ...userStore.user.routes]

    return (
        <div id="components-layout-demo-custom-trigger" className="react_home_index">
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo"><Link to="/">{!collapsed ? intl.get("app_name") :
                        <Icon type="coffee"/>}</Link></div>
                    <MenuUp collapsed={collapsed} routeData={routeData} history={history}/>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <div className="react_home_admin_header">
                            <div>
                                <Icon
                                    className="trigger"
                                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={() => changeCollapsed(!collapsed)}
                                />
                            </div>
                            <div className="react_home_oppo_admin_header_r">
                                <div>
                                    <Dropdown overlay={menu}>
                                        <Button>
                                            {locales.language.label} <Icon type="down"/>
                                        </Button>
                                    </Dropdown>
                                </div>
                                <div>
                                    <a>注销</a>
                                </div>
                            </div>
                        </div>
                    </Header>
                    <Breadcrumb style={{margin: '16px 24px'}}>
                    </Breadcrumb>
                    <Content
                        style={{
                            margin: '0 24px 16px 24px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 'auto'
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default inject('locales', "userStore")(observer(index));