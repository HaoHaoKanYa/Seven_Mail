import { createI18n } from 'vue-i18n';
import en from './en.js'
import zh from './zh.js'
import zhTW from './zh-tw.js'
const i18n = createI18n({
    legacy: false,
    messages: {
        zh,
        en,
        zhTW
    },
});

export default i18n;
