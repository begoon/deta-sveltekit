import { env } from '$env/dynamic/private';
import { Deta } from 'deta';

const deta = Deta(env.DETA_PROJECT_KEY);
const drive = deta.Drive('drive');

export async function GET({ url }) {
	const name = url.searchParams.get('name');
	if (!name) return new Response(null, { status: 400 });
	console.log('name', name);
	const data = await drive.get(name);
	console.log('type', data?.type);
	const type = data?.type ?? 'octet/stream';
	return new Response(data, { status: 200, headers: { 'content-type': data?.type! } });
}
