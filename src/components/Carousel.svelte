<script>
	import {onMount} from "svelte"

	const images = [
		"/images/banner-2.png",
		"/images/brushes.jpg",
		"/images/banner-5.jpg",
	]

	const titles = [
		'Welcome',
		'How we operate',
	  'Why choose us'
	]

	const texts = [
		'Eburon Company Ltd. engages in the mixing, sale and administering/installation of paints, adhesives, decorating sundries, polyvinyl acetate emulsion, and alkyd resins.',
		'We operate our business through the Paints, Adhesives, related products and general supply segment.',
	  'We deliver the very best value in interior and exterior painting, in the shortest time possible without charging you a premium and also without compromising on quality.'
	]

	let index = 0

	const loadNextBanner = () => {
		const max = 2
	  const nindex = index + 1
	  if(nindex > max){
	    index = 0
	  }else{
	    index += 1
	  }
	}

	const loadPrevBanner = () => {
		const min = 0
	  const nindex = index - 1
	  if(nindex < min){
	    index = 2
	  }else{
	    index -= 1
	  }
	}

	onMount(() => {
		setInterval(() => {
			loadNextBanner()
		},5000)
	})
</script>

<div class="bg-cover mt-4 sm:-mt-16 xl:mt-0 h-[36rem] relative" style={`background-image:url(${images[index]})`}>
	<div class="h-full bg-black bg-opacity-30"></div>
	<div class="grid place-items-center place-content-center h-full">
	  <svg on:click={() => loadPrevBanner()} class="hidden w-12 h-12 absolute left-2 text-white cursor-pointer z-10" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
	  <svg on:click={() => loadNextBanner()} class="hidden w-12 h-12 absolute right-2 text-white cursor-pointer z-10" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
		<div class="absolute grid gap-6 px-2 pt-12 top-32 text-white overflow-x-hidden w-full">
			<div class="bg-black p-2 md:p-20 lg:p-12 shadow-md bg-opacity-50 rounded-lg w-full">
				{#each titles as a,b}
					<h1 class={`text-2xl md:text-3xl lg:text-5xl uppercase font-bold text-center ${b == index ? '' : 'hidden'}`}>
	    			{ titles[index] }
	    		</h1>
				{/each}
				{#each texts as c,d}
					<div class="flex justify-center">
						<div class="sm:max-w-4xl">
							<p class={`md:text-xl mt-6 animate-text-left md:text-center ${d == index ? '' : 'hidden'}`}>
			    			{texts[index]}
			    		</p>
							
						</div>
					</div>
				{/each}
			</div>
			<div class="flex justify-center space-x-4">
				<a href="/about" class="block bg-indigo-600 p-3 rounded font-extrabold">
					Learn More
				</a>
				<a href="/contact" class="block bg-yellow-600 p-3 rounded font-extrabold">
					Contact Us
				</a>
			</div>
		</div>
	</div>
</div>


<style>
.animate-text-left {
  animation-duration: 2s;
  animation-name: slideleft;
  animation-timing-function: linear;
}

@keyframes slideleft {
  from {
    margin-right: -50%;
  }

  to {
    margin-left: 0%;
  }
}
</style>
