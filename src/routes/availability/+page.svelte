<script>
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
</script>
	<Navbar />
<main class="  fontPage customFont z-30">

	<title>Siravij - Availability</title>
	<div class="  shadow-lg overflow-hidden ">
		

		<div class="z-10 bg-siravijw p-4 rounded-xl hover:bg-gray-400 text-white">
			<h1 class="text-center "><b>Siravij's availability</b></h1>
			<br />
			<h2 class="text-center">Please check my availability before booking a meeting with me.</h2>
		</div>
		<div class="darkmo">
			<p class="text-center text-2xl rounded-xl darkmo">My availability</p>
			<div class="grid md:grid-cols-3 sm:grid-cols-1 py-2 gap-1">
				<p
					class="text-left text-2xl bg-green-500 p-4 px-4 mx-4 rounded-xl hover:bg-gray-400 cursor-default"
				>
					Facebook
				</p>
				<p
					class="text-left text-2xl bg-green-500 p-4 px-4 mx-4 rounded-xl hover:bg-gray-400 cursor-default"
				>
					Twitter
				</p>
				<p
					class="text-left text-2xl bg-[#ECA869] p-4 px-4 mx-4 rounded-xl hover:bg-gray-400 cursor-no-drop"
				>
					Instragram
				</p>
			
			</div>

			
			<h4 class="px-4 flex justify-start ">
				<span class="text-gray-200 rounded-xl bg-red-500 p-2">Red:Not Available</span>
				<span class="text-gray-200 rounded-xl bg-[#ECA869] p-2">Yellow:Patial Available</span>
				<span class="text-gray-200 rounded-xl bg-green-500 p-2">Green:Available</span>
			</h4>
			<p class="px-6 py-1 darkmo">Updated: 5/1/2023</p>
			<p class="px-6 py-1 darkmo">Updated: 5/21/2023</p>
					<div class="grid md:grid-cols-1 sm:grid-cols-1 py-2 gap-1">
				<p
					class="text-center text-2xl bg-[#ECA869] p-4 px-4 mx-4 rounded-xl hover:bg-gray-400 cursor-default"
				>
					Incident Report
				</p>

			</div>
		</div>
		<div class="  items-center mx-auto">
			<iframe
				src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23E67C73&ctz=Asia%2FBangkok&showNav=1&showTitle=0&showDate=1&showTabs=0&showPrint=0&showTz=0&showCalendars=0&src=c2lyYXZpamJiQGdtYWlsLmNvbQ&color=%237986CB"
				title="availability Map"
				width="100%"
				height="450"
				style="border:0"
				loading="lazy"
				allowfullscreen
			/>
		</div>
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
	.darkmo {
			background-color: #ffffff;

		}
		@media (prefers-color-scheme: dark) {
			.darkmo {
			background-color: #1f2937;
			color: #ffffff;
		}
		}
</style>
