<script>
	let { data } = $props();
</script>

<section class="p-4">
	<h1>Welcome to SvelteKit</h1>
	<p>
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>
</section>

<section class="p-4">
	<div class="mb-4">
		<div class="text-sm font-semibold uppercase text-slate-600">
			{#if data.email}
				Logged in as
			{:else}
				Not logged in
			{/if}
		</div>
		<div>
			{data.email}
		</div>
	</div>

	<form method="post" action="logout">
		<input
			class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			type="submit"
			value="Logout"
		/>
	</form>
</section>
