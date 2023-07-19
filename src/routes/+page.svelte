<script>
	import Navbar from './components/navbar.svelte';
	import Footer from './components/footer.svelte';
</script>

<div class="  shadow-lg overflow-hidden h-screen customFont">
	<title>Siravij - Home</title>
	<Navbar />
	<main class="  fontPage">
		<img
			src="Siravij-RedDepot.jpg"
			alt="It's Me,Siravij!"
			class=" h-full w-screen mx-auto lg:-mt-96 sm:-mt-72 -mt-auto"
		/>
	</main>
	<Footer />
</div>

<style>
	.fontPage {
		font-family: 'Helventica Nue', sans-serif;
	}
	* {
		box-sizing: border-box;
	}
	.customFont {
		font-family: 'Helventica Nue', sans-serif;
	}
</style>
