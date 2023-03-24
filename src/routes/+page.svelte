<script>
	import Navbar from './components/navbar.svelte';
	import Footer from './components/footer.svelte';
</script>

<div class="bg-gray-500	shadow-lg ">
	<title>Siravij Praevisavakij - Home</title>
	<Navbar />
	<main class="fontPage box-border bg-gray-300 m4 rounded-xl p-4 shadow-xl limitPage">
        <img src="siravij.webp" alt="It's Me,Siravij!" class="mx-auto justify-center -pt-5 object-scale-downpt-10" width="30%" />

		<p class="pb-5 py-4 	">
			<p class="text-center text-xl">
                <b>Siravij Praevisavakij</p>
 
			<p class="box-decoration-slice text-left ">Currently works as Electrical Failure Analysis with experience in analyzing the possibility failure in component and coming up with possible solutions and redundancy in preventions and reduction in failure. Worked in team with 4-5 team members. Also, in spare time works as Website development in own project.
		</p>
	</main>
</div>
<Footer />

<style>
	.fontPage {
		font-family: 'Helventica Nue', sans-serif;
	}
	.limitPage {
		font-size: 2rem auto;
		max-width: 1280px;
		margin: 40px auto;
	}
	* {
		box-sizing: border-box;
	}
    .customFont {
        font-family: 'Helventica Nue', sans-serif;
    }

</style>
