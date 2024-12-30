<script>
	let { data } = $props();
</script>

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

	<form method="POST">
		<input
			class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			type="submit"
			value="Login"
		/>
	</form>
</section>
