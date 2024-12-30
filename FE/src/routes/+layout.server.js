export async function load({ locals }) {
	const pb = locals.pb

	return {
		email: pb.authStore.isValid ? pb.authStore.record.email : undefined,
	}
}