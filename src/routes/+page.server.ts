// import turnstileSchema from '$lib/schemas/turnstile';
import type { Actions } from '@sveltejs/kit';
import { CONTACT_FORM_RECIPIENT, EMAIL_PROVIDER_KEY, TURNSTILE_SECRET } from '$env/static/private';
import sendgridClient from '@sendgrid/mail';
// import type { Config } from '@sveltejs/adapter-vercel';
import { strongify } from '$lib/utils';

// export const config: Config = {
// 	runtime: 'nodejs18.x'
// };


import { fail } from '@sveltejs/kit';

interface TokenValidateResponse {
	'error-codes': string[];
	success: boolean;
	action: string;
	cdata: string;
}

export const actions = {
	default: async (event) => {
		sendgridClient.setApiKey(EMAIL_PROVIDER_KEY);
		const data = await event.request.formData();

		const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				response: data.get('cf-turnstile-response'),
				secret: TURNSTILE_SECRET
			})
		});

		if (!response.ok) {
			return fail(400, { validationFailed: true });
		}
		const json: TokenValidateResponse = await response.json();
		const { success } = json;
		if (!success) {
			return fail(400, { validationFailed: true });
		}

		const fullName = `${data.get('first-name')} ${data.get('last-name')}`;
		try {
			await sendgridClient.send({
				to: CONTACT_FORM_RECIPIENT,
				from: 'Freedom Electric Website <noreply@jaspin.io>',
				replyTo: data.get('email')?.toString(),
				subject: `[New Form Submission] from ${fullName}`,
				html: `
				Someone submitted the contact form on https://freedom-electric.net! Here are the details:
				<br/>
				<br/>
				${strongify('Name')}: ${fullName}
				<br/>
				${strongify('Email Address')}: ${data.get('email')}
				<br/>
				${strongify('Phone Number')}: ${data.get('phone-number')}
				<br/>
				${strongify(`${data.get('first-name')} said we could help with the following`)}: "${data.get('message')}"
				<br/>
				<br/>
			`
			});
		} catch (error) {
			console.error(error);
			return fail(400, { sendFailed: true });
		}
		return { success: true };
	},
} satisfies Actions;