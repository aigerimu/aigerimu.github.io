import { c as create_ssr_component, v as validate_component } from './index-154f249b.js';

const css = {
  code: "h1.svelte-79llsx.svelte-79llsx{color:#7F5283;font-size:2.625rem;margin:50px auto 0 auto;margin:0 auto}h2.svelte-79llsx.svelte-79llsx{color:#FEFBF6}h3.svelte-79llsx.svelte-79llsx{margin:50px auto 0 auto}p.svelte-79llsx.svelte-79llsx{color:#A6D1E6}.top.svelte-79llsx.svelte-79llsx{margin:0 auto;background-color:#FEFBF6;position:initial;width:100%;padding-top:100px;padding-bottom:100px}.cv.svelte-79llsx a.svelte-79llsx{margin:10px 100px;text-decoration:none;display:inline-flex;align-items:center;background:#A6D1E6;border-radius:5px;border:2px solid black;font-size:12px}.profile.svelte-79llsx.svelte-79llsx{color:#FEFBF6}.profile_pic.svelte-79llsx.svelte-79llsx{display:block;max-width:15%;height:50%}.profile.svelte-79llsx p.svelte-79llsx{margin-top:2em}.circle_pic.svelte-79llsx.svelte-79llsx{margin:auto;border-radius:50%}ul.svelte-79llsx li.svelte-79llsx{margin:5px}.skills.svelte-79llsx.svelte-79llsx{width:500px;margin:60px auto;color:#fff;padding:20px;box-shadow:0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)}.bar.svelte-79llsx.svelte-79llsx{background:#353b48;display:block;height:20px;border:1px solid rgba(0, 0, 0, 0.3);border-radius:10px;overflow:hidden;box-shadow:0 14px 28px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);transition:all 0.3s cubic-bezier(.25, .8, .25, 1)}.bar.svelte-79llsx.svelte-79llsx:hover{box-shadow:0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)}.bar.svelte-79llsx span.svelte-79llsx{height:20px;float:left;background:linear-gradient(135deg, rgba(236, 0, 140, 1)0%, rgba(252, 103, 103, 1)100%)}.python.svelte-79llsx.svelte-79llsx{width:90%;animation:svelte-79llsx-python 3s}.java.svelte-79llsx.svelte-79llsx{width:90%;animation:svelte-79llsx-java 3s}.cpp.svelte-79llsx.svelte-79llsx{width:50%;animation:svelte-79llsx-cpp 3s}.matlab.svelte-79llsx.svelte-79llsx{width:70%;animation:svelte-79llsx-matlab 3s}@keyframes svelte-79llsx-python{0%{width:0%}100%{width:90%}}@keyframes svelte-79llsx-java{0%{width:0%}100%{width:90%}}@keyframes svelte-79llsx-cpp{0%{width:0%}100%{width:50%}}@keyframes svelte-79llsx-matlab{0%{width:0%}100%{width:70%}}.projects.svelte-79llsx.svelte-79llsx{margin:20px;color:#FEFBF6}.projects.svelte-79llsx a.svelte-79llsx{color:#FEFBF6}.project-row.svelte-79llsx.svelte-79llsx{padding:10px;font-family:serif;width:50%;text-align:left}.card-icon.svelte-79llsx.svelte-79llsx{font-size:28px;width:60px;height:60px;text-align:center;line-height:60px !important;border-radius:50%;transition:0.3s linear}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"top svelte-79llsx"}"><img class="${"profile_pic circle_pic svelte-79llsx"}" src="${"/images/pic2.png"}" alt="${"pic"}" style="${"border: 3px solid #353b48;"}">
	<h1 class="${"svelte-79llsx"}">Aigerim Gilmanova</h1>
	<p class="${"svelte-79llsx"}">AI/ML Researcher</p></div>


<div class="${"profile svelte-79llsx"}"><p class="${"svelte-79llsx"}">This is my personal website to show my work experince, projects and skills.</p>

	<div class="${"cv svelte-79llsx"}"><a href="${"files/Aigerim_Gilmanova.pdf"}" download="${""}" class="${"svelte-79llsx"}"><input type="${"button"}" value="${"Download CV"}"></a></div></div>
<hr>


<div class="${"skills svelte-79llsx"}" id="${"skills"}"><h2 class="${"svelte-79llsx"}">My Skills</h2>

	<h3 class="${"svelte-79llsx"}">python</h3>
	<span class="${"bar svelte-79llsx"}"><span class="${"python svelte-79llsx"}"></span></span>   

	<h3 class="${"svelte-79llsx"}">java</h3>
	<span class="${"bar svelte-79llsx"}"><span class="${"java svelte-79llsx"}"></span></span>

	<h3 class="${"svelte-79llsx"}">cpp</h3>
	<span class="${"bar svelte-79llsx"}"><span class="${"cpp svelte-79llsx"}"></span></span>

	<h3 class="${"svelte-79llsx"}">matlab</h3>
	<span class="${"bar svelte-79llsx"}"><span class="${"matlab svelte-79llsx"}"></span></span></div>
<hr>


<div id="${"proj"}" class="${"projects svelte-79llsx"}"><h2 class="${"svelte-79llsx"}">My Projects</h2>
	<div class="${"project-row svelte-79llsx"}"><a href="${"https://github.com/aigerimu/Surgical-Instrument-tracking"}" class="${"svelte-79llsx"}"><h3 class="${"svelte-79llsx"}">Surgical Instrument Tracking</h3></a>
		<p class="${"svelte-79llsx"}">A model that tracks surgical instruments.</p>
		<ul class="${"svelte-79llsx"}"><h6><li class="${"svelte-79llsx"}">Reduced noise by Gaussian filter with different sigma and detected surgical instruments using Otsu\u2018s method.</li>
			<li class="${"svelte-79llsx"}">Involved in creating surgical instrument dataset using Roboflow.</li>
			<li class="${"svelte-79llsx"}">Trained fully based CNN model (YOLOv5).</li></h6></ul></div>

	<div class="${"project-row svelte-79llsx"}"><a href="${"https://github.com/aigerimu/ML_A2"}" class="${"svelte-79llsx"}"><h3 class="${"svelte-79llsx"}">Network Intrusions Clustering</h3></a>
		<p class="${"svelte-79llsx"}">A notebook that clusters network intrusions by using unsupervised approach.</p>
		<ul class="${"svelte-79llsx"}"><h6><li class="${"svelte-79llsx"}">Preprocessed data and visualized it using PCA.</li>
			<li class="${"svelte-79llsx"}">Implemented K-Mean and DBSCAN models to cluster networks including Elbow and Silhouette methods as hyperparameters.</li>
			<li class="${"svelte-79llsx"}">Detected outliers.</li></h6></ul></div>

	<div class="${"project-row svelte-79llsx"}"><a href="${"https://github.com/aigerimu/ML_A2"}" class="${"svelte-79llsx"}"><h3 class="${"svelte-79llsx"}">Human Iris Center Calculation</h3></a>
		<p class="${"svelte-79llsx"}">A CNN model that calculates human iris center.</p>
		<ul class="${"svelte-79llsx"}"><h6><li class="${"svelte-79llsx"}">Visualized images, normalized them and cropped eye regions.</li>
			<li class="${"svelte-79llsx"}">Built a CNN model including different combinations of different optimizers, loss and activations functions</li></h6></ul></div>

	<div class="${"project-row svelte-79llsx"}"><a href="${"https://github.com/aigerimu/HW2/blob/main/HW2.ipynb"}" class="${"svelte-79llsx"}"><h3 class="${"svelte-79llsx"}">Camera Calibration</h3></a>
		<p class="${"svelte-79llsx"}">A notebook that calibrates camera using chessboard pattern.</p>
		<ul class="${"svelte-79llsx"}"><h6><li class="${"svelte-79llsx"}">Calibrated camera.</li>
			<li class="${"svelte-79llsx"}">Estimated height and width of another object by using calibrated camera, and calculated the distance between the camera and object.</li></h6></ul></div>

	<div class="${"project-row svelte-79llsx"}"><h3 class="${"svelte-79llsx"}">Quadcopter</h3>
		<ul class="${"svelte-79llsx"}"><h6><li class="${"svelte-79llsx"}">Implemented PID Controller.</li>
			<li class="${"svelte-79llsx"}">Soldered electronics.</li></h6></ul></div>

	<h2 class="${"svelte-79llsx"}">More projects can be seen on GitHub <a href="${"https://github.com/aigerimu"}" class="${"svelte-79llsx"}"><i class="${"card-icon fab fa-github svelte-79llsx"}"></i></a></h2></div>
<hr>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-aaf290bd.js.map
