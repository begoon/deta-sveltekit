<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
	console.log(data);

	export let form;
	console.log(form);
</script>

{#if Object.keys(data).length}
	<pre>{JSON.stringify(data, null, 2)}</pre>
{/if}

{#if form}
	<pre>{JSON.stringify(form, null, 2)}</pre>
{/if}

<form method="POST" action="?/list">
	<button>list</button>
</form>
<hr />
<form method="POST" action="?/get">
	<label>
		name
		<input name="name" type="text" />
	</label>
	<button>get</button>
</form>
<hr />
<form method="POST" action="?/set" use:enhance>
	<label>
		name
		<input name="name" type="text" />
	</label>
	<label>
		value
		<input name="value" type="text" />
	</label>
	<button>save</button>
</form>
