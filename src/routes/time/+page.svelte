<script>
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
</script>

<main class="  fontPage customFont z-30 h-screen w-screen dark:bg-dwarn">
	<title>Siravij - Availability</title>
	<Navbar />
	<div class="  shadow-lg overflow-hidden">
		<div
			class="z-10 bg-siravijw md:mt-20 p-4 hover:bg-gray-400 text-white shadow-xl dark:text-gray-200 dark:bg-dwarn"
		>
			<h1 class="text-center"><b>Siravij's availability</b></h1>
			<br />
			<h2 class="text-center">Please check my availability before booking a meeting with me.</h2>
		</div>
		<div class="mx-auto space-y-6 sm:px-6 lg:px-8 dark:bg-gray-900 rounded-xl">
			<p class="text-center text-2xl rounded-xl shadow-xl dark:text-gray-300">My availability</p>
			<div class="grid md:grid-cols-3 sm:grid-cols-1 py-2 gap-1">
				<p
					class="text-left text-2xl bg-green-500 p-4 px-4 mx-4 rounded-xl hover:bg-gray-400 cursor-default shadow-xl dark:text-[#03001c] dark:shadow-white-500/40"
				>
					Facebook
				</p>
				<p
					class="text-left text-2xl bg-green-500 p-4 px-4 mx-4 rounded-xl hover:bg-gray-400 cursor-default shadow-xl dark:text-[#03001c]"
				>
					Twitter
				</p>
				<p
					class="text-left text-2xl bg-green-500 p-4 px-4 mx-4 rounded-xl hover:bg-gray-400 cursor-no-drop shadow-xl dark:text-[#03001c]"
				>
					Instragram
				</p>
			</div>

			<h4 class="px-4 flex justify-start">
				<span class="text-gray-200 rounded-xl bg-red-500 p-2 shadow-xl dark:text-[#03001c]"
					>Red:Not Available</span
				>
				<span class="text-gray-200 rounded-xl bg-[#ECA869] p-2 shadow-xl dark:text-[#03001c]"
					>Yellow:Patial Available</span
				>
				<span class="text-gray-200 rounded-xl bg-green-500 p-2 shadow-xl dark:text-[#03001c]"
					>Green:Available</span
				>
			</h4>
			<p class="px-6 py-1 darkmo dark:text-gray-200">Updated: 7/10/2023</p>

			<div class="  items-center mx-auto">
				<div>
					<iframe
						class="map"
						src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23E67C73&ctz=Asia%2FBangkok&showNav=1&showTitle=0&showDate=1&showTabs=0&showPrint=0&showTz=0&showCalendars=0&src=c2lyYXZpamJiQGdtYWlsLmNvbQ&color=%237986CB"
						title="availability Map"
						width="100%"
						height="450"
						style=""
						loading="lazy"
						allowfullscreen
					/>
				</div>
				<div>
					<!-- Google Calendar Appointment Scheduling begin -->
					<iframe
						class="map"
						src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3tryV4X0Y-fZDqoJNZO2JWH1gATAVoK3AY3wKaXkDNAc3XNH9iORsGQH61ulew0-Pt86MJy0_O?gv=true"
						title="availability Map"
						width="100%"
						height="700"
						style=""
						loading="lazy"
						allowfullscreen
					/>
					<!-- end Google Calendar Appointment Scheduling -->
				</div>
			</div>
			<div class="hover:bg-gray-400">
				<a
					target="_blank"
					href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;add=siravijbb@gmail.com&amp;text=Request+Meet/Talk+About+XXXX+At+DDMMYYYY"
					><p
						class="text-center text-2xl shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 px-4 mx-4 my-2 rounded-xl"
					>
						Request Advance Booking
					</p></a
				>
			</div>
			<div class="grid md:grid-cols-1 sm:grid-cols-1 py-2 gap-1" />
		</div>
	</div>

	<Footer />
</main>

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
	@media (prefers-color-scheme: dark) {
		.map {
			filter: invert(0.9) saturate(0.5) hue-rotate(145deg);
		}
	}
</style>
