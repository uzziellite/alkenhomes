<script>
	import axios from "axios"

	let name
	let email
	let phone
	let loading
	let error
	let report

	const requestCallback = () => {
		loading = true
		axios.post('/api/callback',{
			name,
			email,
			phone
		}).then((resp) => {
			loading = false
			report = "Successful. We will contact you soon"
		}).catch((error) => {
			console.error(error)
			loading = false
			error = "Unable to request callback. Please try again"
		})
	}
</script>

<form on:submit|preventDefault={() => requestCallback()}>
  <div class="form">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="form__grup wow fadeInLeft" data-wow-delay="0.6s">
            <span class="wpcf7-form-control-wrap" data-name="text-667">
              <input type="text" bind:value={name} size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-popup__input" aria-required="true" aria-invalid="false" required placeholder="Full Name" />
            </span>
          </div>
        </div>
        <div class="col-sm">
          <div class="form__grup wow fadeInLeft" data-wow-delay="0.7s">
            <span class="wpcf7-form-control-wrap" data-name="email-217">
              <input type="email" bind:value={email} size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-popup__input" aria-required="true" aria-invalid="false" placeholder="Email Address" required />
            </span>
          </div>
        </div>
        <div class="col-sm">
          <div class="form__grup wow fadeInRight" data-wow-delay="0.8s">
            <span class="wpcf7-form-control-wrap" data-name="text-661">
              <input type="text" bind:value={phone} size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-popup__input" aria-required="true" aria-invalid="false" placeholder="Phone Number" required />
            </span>
          </div>
        </div>
        <div class="col-md-12 wow fadeInUp" data-wow-delay="0.9s">
          <div class="form__grup">
		        {#if loading}
		        	<input type="submit" value="Please wait ..." class="wpcf7-form-control has-spinner wpcf7-submit custom-button-form" />
		        {:else}
		        	<input type="submit" value="Request call Back →" class="wpcf7-form-control has-spinner wpcf7-submit custom-button-form" />
		        {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
  {#if error}
		<span class="text-danger">
			{error}
		</span>
	{/if}
	{#if report}
		<span class="text-success">
			{report}
		</span>
	{/if}
</form>
