<script>
	import axios from "axios"
	let name
	let email
	let message
	let loading
	let error
	let report

	const sendMessage = () => {
		loading = true
		axios.post(`${import.meta.env.PUBLIC_BACKEND}email`,{
			name,
			email,
			message
		}).then(() => {
			loading = false
			report = "Message sent successfully"
		}).catch(err => {
			loading = false
			error = "An error occured. Unable to send message at the moment. Please try again later"
			console.error(err)
		})
	}
</script>
<form class="flex flex-col py-6 space-y-6 md:py-0 md:px-6" on:submit|preventDefault={() => sendMessage()}>
	<label class="block">
		<span class="mb-1">Full name</span>
		<input type="text" placeholder="Leroy Jenkins" class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-indigo-400" bind:value={name}>
	</label>
	<label class="block">
		<span class="mb-1">Email address</span>
		<input type="email" placeholder="leroy@jenkins.com" class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-indigo-400" bind:value={email}>
	</label>
	<label class="block">
		<span class="mb-1">Message</span>
		<textarea rows="3" class="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400" bind:value={message}></textarea>
	</label>
	{#if !report}
		{#if loading}
			<button type="submit" class="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 focus:ring-indigo-400 hover:ring-indigo-400 bg-indigo-600 text-white">Sending message <span class="animate-ping">...</span></button>
		{:else}
			<button type="submit" class="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 focus:ring-indigo-400 hover:ring-indigo-400 bg-indigo-600 text-white">Submit</button>
		{/if}
	{/if}
	{#if error}
		<span class="text-red-600">
			{error}
		</span>
	{/if}
	{#if report}
		<span class="text-green-600">
			{report}
		</span>
	{/if}
</form>
