<script>
	import axios from "axios"
	let name
	let email
	let phone
	let message
	let loading
	let error
	let report

	const sendMessage = () => {
		loading = true
		axios.post(`/api/contact`,{
			name,
			email,
			phone,
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

<form on:submit|preventDefault={() => sendMessage()}>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="form__grup wow fadeInLeft" data-wow-delay="0.5s">
          <span class="wpcf7-form-control-wrap" data-name="text-667">
            <input type="text" bind:value={name} size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-popup__input" aria-required="true" aria-invalid="false" placeholder="Full Name" required />
          </span>
          <br />
          <label for="name" class="form__label">Name (Required)</label>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form__grup wow fadeInLeft" data-wow-delay="0.6s">
          <span class="wpcf7-form-control-wrap" data-name="email-217">
            <input type="email" bind:value={email} size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-popup__input" aria-required="true" required aria-invalid="false" placeholder="Email Address" />
          </span>
          <br />
          <label for="email" class="form__label">Email Address (Required)</label>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form__grup wow fadeInRight" data-wow-delay="0.7s">
          <span class="wpcf7-form-control-wrap" data-name="text-661">
            <input type="text" bind:value={phone} size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-popup__input" aria-required="true" aria-invalid="false" placeholder="Phone Number" required />
          </span>
          <br />
          <label for="telefon" class="form__label">Phone</label>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form__grup wow fadeInUp" data-wow-delay="0.8s">
          <span class="wpcf7-form-control-wrap" data-name="textarea-8">
            <textarea cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea form__input" aria-invalid="false" required placeholder="Your Message" bind:value={message}></textarea>
          </span>
          <br />
          <label for="message" class="form__label">Your Message (Required)</label>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form__grup wow fadeInUp" data-wow-delay="0.9s">
        	{#if loading}
        		<input type="submit" value="Please wait ..." class="wpcf7-form-control has-spinner wpcf7-submit custom-button" />
        	{:else}
	          <input type="submit" value="Contact Us →" class="wpcf7-form-control has-spinner wpcf7-submit custom-button" />
        	{/if}
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
