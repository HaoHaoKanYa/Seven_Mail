import { parseHTML } from 'linkedom';

const emailUtils = {

	getDomain(email) {
		if (typeof email !== 'string') return '';
		const parts = email.split('@');
		return parts.length === 2 ? parts[1] : '';
	},

	getName(email) {
		if (typeof email !== 'string') return '';
		const parts = email.trim().split('@');
		return parts.length === 2 ? parts[0] : '';
	},

	htmlToText(content) {
		const { document } = parseHTML(content);
		document.querySelectorAll('style, script, title').forEach(el => el.remove());
		return document.documentElement.innerText;
	}
};

export default emailUtils;
