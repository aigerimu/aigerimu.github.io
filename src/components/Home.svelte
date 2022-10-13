<div class="top">
	<img class="profile_pic circle_pic" src="/images/pic2.png" alt="pic" style="border: 3px solid #353b48;">
	<h1>Aigerim Gilmanova</h1>
	<p>AI/ML Researcher</p>
</div>


<div class="profile">

	<p>This is my personal website to show my work experince, projects and skills.</p>

	<div class="cv">  
		<a href="/files/Aigerim_Gilmanova2.pdf" download="">
			<input type="button" value="Download CV">
		</a>
	</div>
</div>
<hr>


<div class="skills" id="skills">
	<h2>My Skills</h2>

	<h3>python</h3>
	<span class="bar"><span class="python"></span></span>   

	<h3>java</h3>
	<span class="bar"><span class="java"></span></span>

	<h3>cpp</h3>
	<span class="bar"><span class="cpp"></span></span>

	<h3>matlab</h3>
	<span class="bar"><span class="matlab"></span></span>

</div>
<hr>


<div id="proj" class="projects">
	<h2>My Projects</h2>
	<div class="project-row">

		<a href="https://github.com/aigerimu/Surgical-Instrument-tracking"><h3>Surgical Instrument Tracking</h3></a>
		<p>A model that tracks surgical instruments.</p>
		<ul><h6>
			<li>Reduced noise by Gaussian filter with different sigma and detected surgical instruments using Otsu‘s method.</li>
			<li>Involved in creating surgical instrument dataset using Roboflow.</li>
			<li>Trained fully based CNN model (YOLOv5).</li>
		</h6>
		</ul>
	</div>

	<div class="project-row">
	
		<a href="https://github.com/aigerimu/ML_A2"><h3>Network Intrusions Clustering</h3></a>
		<p>A notebook that clusters network intrusions by using unsupervised approach.</p>
		<ul><h6>
			<li>Preprocessed data and visualized it using PCA.</li>
			<li> Implemented K-Mean and DBSCAN models to cluster networks including Elbow and Silhouette methods as hyperparameters.</li>
			<li>Detected outliers.</li>
		</h6>
		</ul>
	</div>

	<div class="project-row">
	
		<a href="https://github.com/aigerimu/ML_A2"><h3>Human Iris Center Calculation</h3></a>
		<p>A CNN model that calculates human iris center.</p>
		<ul><h6>
			<li>Visualized images, normalized them and cropped eye regions.</li>
			<li>Built a CNN model including different combinations of different optimizers, loss and activations functions</li>
		</h6>
		</ul>
	</div>

	<div class="project-row">
	
		<a href="https://github.com/aigerimu/HW2/blob/main/HW2.ipynb"><h3>Camera Calibration</h3></a>
		<p>A notebook that calibrates camera using chessboard pattern.</p>
		<ul><h6>
			<li>Calibrated camera.</li>
			<li>Estimated height and width of another object by using calibrated camera, and calculated the distance between the camera and object.</li>
		</h6>
		</ul>
	</div>

	<div class="project-row">

		<h3>Quadcopter</h3>
		<ul>
		<h6>
			<li> Implemented PID Controller.</li>
			<li>Soldered electronics.</li>
		</h6>
		</ul>
	</div>

	<h2>More projects can be seen on GitHub <a href="https://github.com/aigerimu"><i class="card-icon fab fa-github"></i></a></h2>

</div>
<hr>



<style>

body{
	background: #3D3C42;
	text-transform: uppercase;
	font-family: none;
	color: #40514E;
	margin: 0;
	text-align: center;
	font-family: 'Merriweather';
}

h1{	
	color: #7F5283;
	font-size: 2.625rem;
	margin:50px auto 0 auto;
	margin: 0 auto;
}

h2{
	color: #FEFBF6;
}

h3{	
	margin:50px auto 0 auto;

}


p{
	color: #A6D1E6;
}

.top {
	margin:0 auto;
	background-color: #FEFBF6;
	position: initial;
	width: 100%;
	padding-top: 100px;
	padding-bottom: 100px;
}

.cv a{
	margin: 10px 100px;
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	background: #A6D1E6;
	border-radius: 5px;
	border: 2px solid black;
	font-size: 12px;
}

.profile{
	color: #FEFBF6;
}

.profile_pic {
	display: block;
	max-width: 15%;
	height: 50%;
}

.profile p{
	margin-top: 2em;
}

.circle_pic {
	margin: auto;
    border-radius: 50%;
}


ul li{
	margin: 5px;
}

.skills{
	width: 500px;
	margin: 60px auto;
	color: #fff;
	padding: 20px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.skills li{
	margin: 20px 0;
	padding: 10px;
}

.bar{
	background: #353b48;
	display: block;
	height: 20px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.bar:hover{
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.bar span{
	height: 20px;
	float: left;
	background: linear-gradient(135deg, rgba(236, 0, 140, 1)0%, rgba(252, 103, 103, 1)100%);
}

.python{
	width: 90%;
	animation: python 3s;
}

.java{
	width: 90%;
	animation: java 3s;
}

.cpp{
	width: 50%;
	animation: cpp 3s;
} 

.matlab{
	width: 70%;
	animation: matlab 3s;
}

@keyframes python{
	0%{width: 0%;}
	100%{width: 90%;}
}

@keyframes java{
	0%{width: 0%;}
	100%{width: 90%;}
}

@keyframes cpp{
	0%{width: 0%;}
	100%{width: 50%;}
}

@keyframes matlab{
	0%{width: 0%;}
	100%{width: 70%;}
}


.projects{
	margin: 20px;
	color: #FEFBF6;
}

.projects a{
	
	color: #FEFBF6;
}

.project-row{
	padding: 10px;
	font-family: serif;
	width: 50%;
	text-align: left;
}

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
	background: #2F3542;
	padding: 0 20px;
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

.card:hover .card-icon{
	background: none;
	transform: scale(1.6);	
}


</style>