import { c as create_ssr_component } from './index-154f249b.js';

const css = {
  code: ".contact.svelte-8uenfs.svelte-8uenfs{margin:20px;display:flex;width:100%;max-width:1200px;align-items:center;justify-content:center;padding:0 20px;cursor:pointer}.card.svelte-8uenfs.svelte-8uenfs{font-size:15px;background:#2F3542;padding:0 20px;color:aliceblue;margin:0 10px;width:calc(33% - 20px);height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center}.card-icon.svelte-8uenfs.svelte-8uenfs{font-size:28px;width:60px;height:60px;text-align:center;line-height:60px !important;border-radius:50%;transition:0.3s linear}h2.svelte-8uenfs.svelte-8uenfs{color:aliceblue}.card.svelte-8uenfs:hover .card-icon.svelte-8uenfs{background:none;transform:scale(1.6)}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"contact"}" class="${"contact svelte-8uenfs"}"><h2 class="${"svelte-8uenfs"}">Contact Me</h2>

	<div class="${"card svelte-8uenfs"}"><a class="${"btn"}" href="${"mailto:gilmanovab@gmail.com"}"><i class="${"card-icon far fa-envelope svelte-8uenfs"}"></i></a>
		<p>gilmanovab@gmail.com</p></div>

	<div class="${"card svelte-8uenfs"}"><i class="${"card-icon fas fa-phone svelte-8uenfs"}"></i>
		<p>+7(777)158-52-02</p></div>

	<div class="${"card svelte-8uenfs"}"><i class="${"card-icon fas fa-map-marker-alt svelte-8uenfs"}"></i>
		<p>Astana, Kazakhstan</p></div>

	<div class="${"card svelte-8uenfs"}"><a href="${"https://www.linkedin.com/in/aigerim-gilmanova-8b721a1a1/"}"><i class="${"card-icon fab fa-linkedin svelte-8uenfs"}"></i></a>
		<p>LinkedIn</p></div></div>
<hr>`;
});

export { Contact as C };
//# sourceMappingURL=Contact-b9bb851e.js.map
