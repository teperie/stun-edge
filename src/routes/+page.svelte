<script lang="ts">
	let message = '짜장';
	let loading = false;
	async function restartDocker() {
		loading = true;
		try {
			const response = await fetch('/api/restart', { method: 'POST' });
			if (response.ok) {
				message = await response.text();
			} else {
				alert('Failed to restart');
			}
		} catch (error) {
			console.error('Error:', error);
			alert('An error occurred');
		} finally {
			loading = false;
		}
	}
</script>

<h1>{message}</h1>
<button on:click={restartDocker} disabled={loading}>Restart</button>
