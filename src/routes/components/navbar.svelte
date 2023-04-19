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

<Navbar
	class="fixed sticky top-0 text-white navcolor px-4 py-4 z-10  w-screen"
	let:hidden
	let:toggle
>
	<NavBrand href="/"><h1 class="customFont max-w-7xl text-5xl mb-1">Siravij</h1></NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} class="ml-3 navcolor">
		<NavLi href="/" class="cursor-pointer text-white navcolor rounded-2xl  ">Home</NavLi>
		<NavLi href="https://blog.siravijbb.me/" class="cursor-pointer text-white navcolor rounded-2xl "
			>Article</NavLi
		>
		<NavLi class="cursor-pointer text-white navcolor rounded-2xl "
			><Chevron aligned>Project</Chevron></NavLi
		>

		<Dropdown offset="18" class=" bg-gray-800 divide-y ">
			<DropdownItem class="text-gray-500 " href="/about-us">KNACKSAT2 TGPS</DropdownItem>
			<!--  <DropdownItem class="text-gray-500">Settings</DropdownItem>
		<DropdownItem class="text-gray-500">Earnings</DropdownItem> -->
			<DropdownItem class="text-gray-500 bg-gray-800  " href="https://first.ncresa.org/"
				>NBGEARS</DropdownItem
			>
		</Dropdown>
		<!--<NavLi class="text-gray-500" href="/services">Services</NavLi>
	  <NavLi class="text-gray-500" href="/pricing">Pricing</NavLi>-->
		<NavLi class="text-white navcolor" href="/contact-us">Contact</NavLi>
	</NavUl>
	<script src="https://nbgears.statuspage.io/embed/script.js"></script>
</Navbar>

{#if y < 10}
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
