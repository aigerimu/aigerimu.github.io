<script lang="ts">
		import NavComponent from './NavComponent.svelte';
</script>

<nav>
    <div class="navBar">
		<NavComponent text={'Home'} link={''} />
		<NavComponent text={'RANDOM DOG API'} link={'randog'} />
		
		<a class="nav-link" href="/#skills">Skills</a>
		<a class="nav-link" href="#contact">Contact</a>

	<div class="logo">Aigerim Gilmanova</div>
    </div>
</nav>

<style>

nav{
	background-color: #FEFBF6;
}

div.navBar{
	color: #FEFBF6;
	position:fixed;
	display: flex;
	top:-0.5em;
	/* justify-content: space-between; */
	align-items: center;
	background-color: #7F5283;

	height: 75px;
	width: 130%;
    font-size: large;
    font: bold 20px/30px Helvetica;
	/* left: -2em; */
}

.logo{
	display: inline-block;
	position: relative;
    right:18em;
	top: 0.01em;
	color: #FEFBF6;
	font-size: 35px;
	line-height: 80px;
	padding: 0 100px;
	font-weight: bold;
}

.nav-link{
	color: #FEFBF6;
	display: block;
	position: relative;
	left: 34em;
	/* position:absolute; */
	justify-content: space-between;
	margin-left: 2em;
	padding: 0;
}

</style>