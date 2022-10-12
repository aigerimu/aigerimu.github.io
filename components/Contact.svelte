<div id="contact" class="contact">
	<h2>Contact Me</h2>

	<div class="card">
		<a class="btn" href="mailto:gilmanovab@gmail.com"><i class="card-icon far fa-envelope"></i></a>
		<p>gilmanovab@gmail.com</p>
	</div>

	<div class="card">
		<i class="card-icon fas fa-phone"></i>
		<p>+7(777)158-52-02</p>
	</div>

	<div class="card">
		<i class="card-icon fas fa-map-marker-alt"></i>
		<p>Astana, Kazakhstan</p>
	</div>

	<div class="card">
		<a href="https://www.linkedin.com/in/aigerim-gilmanova-8b721a1a1/"><i class="card-icon fab fa-linkedin"></i></a>
		<p>LinkedIn</p>
	</div>
</div>
<hr>

<style>
.contact{
	margin: 20px;
	display: flex;
	width: 100%;
	max-width: 1200px;
	align-items: center;
	justify-content: center;
	padding: 0 20px;
	cursor: pointer;
}

.card{ 
	font-size: 15px;
	background: #2F3542;
	padding: 0 20px;
	color: aliceblue;
	margin: 0 10px;
	width: calc(33% - 20px);
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.card-icon{
	font-size: 28px;
	width: 60px;
	height: 60px;
	text-align: center;
	line-height: 60px !important;
	border-radius: 50%;
	transition: 0.3s linear;
}

h2{
	color: aliceblue;
}

.card:hover .card-icon{
	background: none;
	transform: scale(1.6);	
}
</style>