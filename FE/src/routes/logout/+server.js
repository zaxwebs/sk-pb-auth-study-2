import { redirect } from '@sveltejs/kit'

export const POST = async ({ locals }) => {
	const pb = locals.pb

	pb.authStore.clear();

	redirect(303, '/');
}