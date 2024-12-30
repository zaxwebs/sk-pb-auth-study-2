<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="p-4">
	<nav class="space-x-4 font-semibold text-gray-900">
		<a href="/">Home</a>
		<a href="/login">Login</a>
	</nav>
</div>

{@render children()}
