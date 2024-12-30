<script>
	let { data } = $props();
</script>

<div>
	{data.email}
</div>

<form method="POST">
	<input
		class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
		type="submit"
		value="Login"
	/>
</form>
