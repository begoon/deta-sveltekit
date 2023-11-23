export async function GET(event: Event) {
	return new Response(JSON.stringify(process.env), { status: 200 });
}
