<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div>
	<nav>
		<a href="/">Home</a>
		<a href="/login">Login</a>
	</nav>
</div>
{@render children()}
