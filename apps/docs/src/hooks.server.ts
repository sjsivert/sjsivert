import { BASIC_AUTH_LOGIN } from "$env/static/private";
import type { Handle } from "@sveltejs/kit";

/**
 * Handles Basic auth for the entire site
 */
export const handle: Handle = async ({ event, resolve }) => {
	const auth = event.request.headers.get("Authorization");

	if (auth !== `Basic ${btoa(BASIC_AUTH_LOGIN)}`) {
		return new Response("Not authorized", {
			status: 401,
			headers: {
				"WWW-Authenticate": 'Basic realm="User Visible Realm", charset="UTF-8"',
			},
		});
	}

	return resolve(event);
};
