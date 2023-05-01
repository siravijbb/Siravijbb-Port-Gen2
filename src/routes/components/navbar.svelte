<script>
	let y;
	import {
		Button,
		Dropdown,
		DropdownItem,
		Chevron,
		DropdownDivider,
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi
	} from 'flowbite-svelte';
	import { text } from 'svelte/internal';
	let group3 = 2;
</script>

<nav class="sticky top-0">
	<Navbar class=" text-white navcolor px-4 py-4 z-40  w-screen" let:hidden let:toggle>
		<NavBrand href="/"><h1 class="customFont max-w-7xl text-5xl mb-1">Siravij</h1></NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden} class="ml-3 navcolor">
			<NavLi
				href="/"
				class="cursor-pointer text-white navcolor rounded-2xl  hover:text-siravijw md:hover:text-siravijw"
				>Home</NavLi
			>
			<NavLi
				href="https://blog.siravijbb.me/"
				class="cursor-pointer text-white navcolor rounded-2xl hover:text-siravijw md:hover:text-siravijw"
				>Article</NavLi
			>
			<NavLi
				href="/availability"
				class="cursor-pointer text-white navcolor rounded-2xl hover:text-siravijw md:hover:text-siravijw"
				>Availability</NavLi
			>
			<NavLi
				class="cursor-pointer text-white navcolor rounded-2xl z-40 hover:text-siravijw md:hover:text-siravijw"
				><Chevron aligned>Project</Chevron></NavLi
			>

			<Dropdown offset="18" class=" bg-siravijpp z-40 	">
				<DropdownItem
					class="text-white  border-2 border-siravijw hover:text-gray-500 "
					href="https://github.com/KNACKSAT2-TGPS">KNACKSAT2 TGPS</DropdownItem
				>
				<!--  <DropdownItem class="text-gray-500">Settings</DropdownItem>
		<DropdownItem class="text-gray-500">Earnings</DropdownItem> -->
				<DropdownItem
					class="bg-siravijpp text-white border-2 border-siravijw hover:text-gray-500   z-40 "
					href="https://nbgears.tech/">NBGEARS</DropdownItem
				>
			</Dropdown>
			<!--<NavLi class="text-gray-500" href="/services">Services</NavLi>
	  <NavLi class="text-gray-500" href="/pricing">Pricing</NavLi>-->
			<NavLi
				class="cursor-pointer text-white navcolor rounded-2xl z-40 hover:text-siravijw md:hover:text-siravijw"
				href="/me">Biography</NavLi
			>
			<NavLi
				class="cursor-pointer text-white navcolor rounded-2xl z-40 hover:text-siravijw md:hover:text-siravijw"
				href="/contact">Contact</NavLi
			>
		</NavUl>
		<script src="https://nbgears.statuspage.io/embed/script.js"></script>
	</Navbar>
</nav>
{#if y < 100}
	<style>
		.navcolor {
			background-color: #554994;
		}
	</style>
{:else}
	<style>
		.navcolor {
			background-color: #ffffff;
			color: #554994;
		}
	</style>
{/if}
<svelte:window bind:scrollY={y} />
