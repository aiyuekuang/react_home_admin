import {observable, computed, action} from 'mobx';
import {arrKeySelected, quObj} from 'esn';
import zh_CN from 'antd/es/locale/zh_CN';
import en_US from 'antd/es/locale/en_US';
import intl from 'react-intl-universal';
import {LANG} from "@enum/storage";

export const localesList = {
    'en-US': require('../locales/en-US.json'),
    'zh-CN': require('../locales/zh-CN.json')
};
export let lang = [{
    label: '中文',
    value: 'zh_CN',
    data: zh_CN,
    locales: 'zh-CN'
}, {
    label: 'English',
    value: 'en_US',
    data: en_US,
    locales: 'en-US'
}]

let langStorage = quObj(LANG);


class userStoreClass {
    @observable language = langStorage ? langStorage : lang[0];

    @action changeLanguage(value) {
        this.language = arrKeySelected(lang, (obj) => {
            return obj.value === value
        })[0];
        intl.init({
            currentLocale: this.language.locales,  // 设置初始语音
            locales: localesList
        }).then(() => {

        });
    }
}

export default new userStoreClass();
