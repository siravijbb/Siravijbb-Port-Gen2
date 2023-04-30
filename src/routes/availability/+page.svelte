<script>
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';

	
</script>
<main class="  fontPage customFont ">
    <div class="  shadow-lg overflow-hidden ">
        <Navbar />
    </div>
    <div class=" bg-siravijw  p-4 rounded-xl hover:bg-gray-400 text-white">
    <h1 class="text-center"><b>Siravij's availability</b></h1>
    <br>
    <h2 class="text-center">Please check my availability before booking a meeting with me. </h2></div>
    <div class="  items-center mx-auto ">
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23E67C73&ctz=Asia%2FBangkok&showNav=1&showTitle=0&showDate=1&showTabs=0&showPrint=0&showTz=0&showCalendars=0&src=c2lyYXZpamJiQGdtYWlsLmNvbQ&color=%237986CB" 					
        title="availability Map"
        width="100%"
        height="450"
        style="border:0"
        loading="lazy"
        allowfullscreen></iframe>
    </div>

</main>
<Footer />
<style>
	.fontPage {
		font-family: 'Helventica Nue', sans-serif;
	}
	.limitPage {
		font-size: 2rem auto;
		max-width: 1280px;
	}
	* {
		box-sizing: border-box;
	}
	.customFont {
		font-family: 'Helventica Nue', sans-serif;
	}
</style>
