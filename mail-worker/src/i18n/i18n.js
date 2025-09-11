import i18next from 'i18next';
import zh from './zh.js'
import en from './en.js'
import app from '../hono/hono';
import zhTW from './zh-tw';

app.use('*', async (c, next) => {
	const lang = c.req.header('accept-language')?.split('-')[0]
	i18next.init({
		lng: lang,
	});
	return await next()
})

const resources = {
	en: {
		translation: en
	},
	zh: {
		translation: zh,
	},
	zhTW: {
		translation: zhTW
	}
};

i18next.init({
	fallbackLng: 'zh',
	resources,
});

export const t = (key) => i18next.t(key)

export default i18next;
