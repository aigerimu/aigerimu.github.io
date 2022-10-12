import { c as create_ssr_component, v as validate_component, e as escape } from './index-154f249b.js';
import { b as base } from './paths-aa23c6e2.js';
import { C as Contact } from './Contact-b9bb851e.js';

const css$1 = {
  code: ".nav-link.svelte-im92a8{color:#FEFBF6;display:block;position:relative;left:34em;justify-content:space-between;margin-left:2em;padding:0}",
  map: null
};
const NavComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { link } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$1);
  return `<a class="${"nav-link svelte-im92a8"}" href="${escape(base, true) + "/" + escape(link, true)}">${escape(text)}</a>`;
});
const css = {
  code: "nav.svelte-1ggh7wd{background-color:#FEFBF6}div.navBar.svelte-1ggh7wd{color:#FEFBF6;position:fixed;display:flex;top:-0.5em;align-items:center;background-color:#7F5283;height:75px;width:130%;font-size:large;font:bold 20px/30px Helvetica}.logo.svelte-1ggh7wd{display:inline-block;position:relative;right:18em;top:0.01em;color:#FEFBF6;font-size:35px;line-height:80px;padding:0 100px;font-weight:bold}.nav-link.svelte-1ggh7wd{color:#FEFBF6;display:block;position:relative;left:34em;justify-content:space-between;margin-left:2em;padding:0}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-1ggh7wd"}"><div class="${"navBar svelte-1ggh7wd"}">${validate_component(NavComponent, "NavComponent").$$render($$result, { text: "Home", link: "" }, {}, {})}
		${validate_component(NavComponent, "NavComponent").$$render($$result, { text: "RANDOM DOG API", link: "randog" }, {}, {})}
		
		<a class="${"nav-link svelte-1ggh7wd"}" href="${"/#skills"}">Skills</a>
		<a class="${"nav-link svelte-1ggh7wd"}" href="${"#contact"}">Contact</a>

	<div class="${"logo svelte-1ggh7wd"}">Aigerim Gilmanova</div></div>
</nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-318babad.js.map
