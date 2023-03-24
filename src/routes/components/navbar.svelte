<script>
	
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
	let group3 = 2;
</script>

<Navbar
	class="  px-4 md:px-6  bg-base-100 rounded-2xl shadow-lg flex justify-between max-w-screen-xl m-auto bg-gray-900 text-white bg-siravijpurple px-4 py-4"
	let:hidden
	let:toggle
>
	<NavBrand href="/"><h1 class="customFont max-w-7xl text-5xl mb-1   ">Siravij</h1>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} class="ml-3 bg-siravijpurple text-white">
		<NavLi href="/" class="cursor-pointer text-white rounded-2xl ">Home</NavLi>
        <NavLi href="https://blog.siravijbb.me/" class="cursor-pointer text-white rounded-2xl ">Article</NavLi>
		<NavLi class="cursor-pointer text-white rounded-2xl "
			><Chevron aligned>Project</Chevron></NavLi>

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
		<NavLi class="text-white" href="/contact-us">Contact</NavLi>
	</NavUl>
    	<script src="https://nbgears.statuspage.io/embed/script.js"></script>
</Navbar>
