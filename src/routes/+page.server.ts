import { env } from '$env/dynamic/private';
import { Deta } from 'deta';

const deta = Deta(env.DETA_PROJECT_KEY);
const db = deta.Base('db');

export const actions = {
	list: async () => {
		const response = await db.fetch();
		const result = response.items;
		console.log('result', result);
		return { success: true, result };
	},
	set: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const value = data.get('value') as string;
		console.log({ name, value });
		const result = await db.put(value, name);
		console.log('result', result);
		return { success: true, result };
	},
	get: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		console.log({ name });
		const result = await db.get(name);
		console.log('result', result);
		return { success: true, result };
	}
};
