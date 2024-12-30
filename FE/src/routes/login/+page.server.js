import { redirect } from '@sveltejs/kit'

export async function load({ locals }) {

}

export const actions = {
	default: async ({ locals }) => {
		const pb = locals.pb

		const authData = await pb.collection('users').authWithPassword(
			'bob@example.com',
			'password123',
		);

		redirect(303, '/');
	}
}