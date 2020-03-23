import React, {Fragment, Component, PureComponent} from 'react';
import Setting from "@page/setting"
import Index from "@page/index"
import {history,Link} from "react-router-pro"
import {createMap, qus} from 'esn';

let get_token = () => qus('token');
export const urlCompEnum = createMap([{
    alias: "home",
    component: Index
},{
    alias: "user_set",
    component: Setting
}], "alias")


export let baseRoutes = [{
    name: "主页",
    zh_CN: "主页",
    en_US: "home",
    path: "/",
    isMenuShow: false,
    component: "home",
    icon: "home",
}, {
    name: "设置",
    zh_CN: "设置",
    en_US: "setting",
    icon: "setting",
    path: "/setting",
    isMenuShow: true,
    component: null,
    children: [
        {
            name: "用户设置",
            zh_CN: "用户设置",
            en_US: "user setting",
            icon: "user",
            path: "/user_set",
            isMenuShow: true,
            component: "user_set",
        }
    ]
}
];
