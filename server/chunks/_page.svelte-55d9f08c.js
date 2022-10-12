import { c as create_ssr_component, v as validate_component } from './index-154f249b.js';

const css = {
  code: ".api-dog.svelte-15wtvmi{display:block;background-color:#FEFBF6;height:35em;margin-top:-2em}#rand.svelte-15wtvmi{display:block;background-color:#FEFBF6;padding-top:8em}.api-dog-img.svelte-15wtvmi{display:block;position:top;top:10em;margin-left:auto;margin-right:auto;border-radius:1em;border:1px solid rgba(78, 78, 100, 0.736);width:300px;height:300px}#btn-dog.svelte-15wtvmi{top:1em;margin:0 auto;position:relative;display:flex;color:#fff;background-color:#2F3542;padding:15px 25px;font-size:24px;text-align:center;cursor:pointer;outline:none;border:none;border-radius:15px;box-shadow:0 9px #999}#btn-dog.svelte-15wtvmi:hover{background-color:#7F5283}#btn-dog.svelte-15wtvmi:active{background-color:#7F5283;box-shadow:0 5px #666;transform:translateY(4px)}",
  map: null
};
async function getRandomImage() {
  let imageRandom = document.getElementById("imageRandom");
  const randomImageApiUrl = "https://dog.ceo/api/breeds/image/random";
  console.log(randomImageApiUrl);
  await fetch(randomImageApiUrl).then(function(response) {
    return response.json();
  }).then(function(json) {
    if (imageRandom != null) {
      console.log(json);
      imageRandom.src = json.message;
    }
  }).catch(function(error) {
    console.log(error);
  });
}
const RanDog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getRandomImage();
  $$result.css.add(css);
  return `<div class="${"api-dog svelte-15wtvmi"}"><div id="${"rand"}" class="${"svelte-15wtvmi"}"><img id="${"imageRandom"}" class="${"api-dog-img svelte-15wtvmi"}" src="${""}" alt="${"click the button below"}"></div>
    <button id="${"btn-dog"}" class="${"svelte-15wtvmi"}">Get a dog ;)</button>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(RanDog, "RanDog").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-55d9f08c.js.map
