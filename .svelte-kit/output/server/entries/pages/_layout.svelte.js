import { c as create_ssr_component, a as add_attribute, e as escape, b as subscribe, d as each, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { f as focusedText, r as related } from "../../chunks/searchStores.js";
import { w as writable } from "../../chunks/index2.js";
const SearchEntry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { entry } = $$props;
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  return `<div class="py-2 w-full"><div class="text-sm"><a class="underline"${add_attribute("href", "/" + entry.parent + "?search=" + entry.content, 0)}>${escape(entry.parent.split("/").pop())}</a> <span class="text-red-700">[${escape(Math.floor(entry.score * 100))}% similar]</span></div> <div class="w-full break-words whitespace-pre-wrap">${escape(entry.content)}</div></div>`;
});
const modalStore = writable(false);
const showingTagFilters = writable(false);
const focusedTag = writable(null);
const TagFilter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showingTagFilters, $$unsubscribe_showingTagFilters;
  let $focusedTag, $$unsubscribe_focusedTag;
  $$unsubscribe_showingTagFilters = subscribe(showingTagFilters, (value) => $showingTagFilters = value);
  $$unsubscribe_focusedTag = subscribe(focusedTag, (value) => $focusedTag = value);
  let { tags } = $$props;
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  {
    console.log("showing filters?", $showingTagFilters);
  }
  $$unsubscribe_showingTagFilters();
  $$unsubscribe_focusedTag();
  return `<div><button class="px-1 bg-red-400 hover:bg-red-500 transition-colors border border-black shadow filterMenu">${$showingTagFilters ? `
			hide tags
		` : ` ${$focusedTag ? `tagged: ${escape($focusedTag)}` : `show tags`} `}</button> <a class="inline-block px-1 bg-blue-300 hover:bg-blue-400 transition-colors border border-black shadow" href="/" data-svelte-h="svelte-r4hxu3">now</a></div> ${$showingTagFilters ? `<div class="border border-black bg-white shadow p-2 w-56 filterMenu">${each(tags, (tag) => {
    return `<button class="${[
      "px-1 mr-2 mb-1 border border-black bg-red-100 hover:bg-red-400 transition-colors",
      $focusedTag === tag ? "bg-red-400" : ""
    ].join(" ").trim()}">${escape(tag)}</button>`;
  })}</div>` : ``}`;
});
const MobileModalNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { posts } = $$props;
  let { tags } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$unsubscribe_page();
  return `<button class="md:hidden z-40 absolute top-0 left-0 bg-slate-500 opacity-50 w-full h-full"></button> <div class="md:hidden z-50 absolute p-2 pt-10 left-[12.5%] top-[10%] overflow-y-auto w-4/5 h-5/6 bg-white border border-black"><div class="absolute top-3 left-2">${validate_component(TagFilter, "TagFilter").$$render($$result, { tags }, {}, {})}</div> ${each(posts, (post) => {
    return `<a class="${[
      "block px-1 transition-colors mb-2",
      $page.params.pathName === post ? "bg-red-400" : ""
    ].join(" ").trim()}"${add_attribute("href", "/" + post, 0)}>${escape(post.replace("posts/", ""))}</a>`;
  })}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let relatedContent;
  let posts;
  let $focusedTag, $$unsubscribe_focusedTag;
  let $focusedText, $$unsubscribe_focusedText;
  let $related, $$unsubscribe_related;
  let $modalStore, $$unsubscribe_modalStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_focusedTag = subscribe(focusedTag, (value) => $focusedTag = value);
  $$unsubscribe_focusedText = subscribe(focusedText, (value) => $focusedText = value);
  $$unsubscribe_related = subscribe(related, (value) => $related = value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const allTags = Array.from(new Set(Object.values(data.tagIndex).reduce(
    (acc, curr) => {
      acc.push(...curr);
      return acc;
    },
    []
  )));
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  relatedContent = $related?.filter((el) => el.content?.trim() !== $focusedText?.trim());
  posts = data.posts.filter((el) => {
    if (el === data.nowPage)
      return false;
    if ($focusedTag === null)
      return true;
    else
      return data.tagIndex[el].includes($focusedTag);
  });
  $$unsubscribe_focusedTag();
  $$unsubscribe_focusedText();
  $$unsubscribe_related();
  $$unsubscribe_modalStore();
  $$unsubscribe_page();
  return `<button class="md:hidden absolute top-3 left-3 px-1 border border-black bg-red-400" data-svelte-h="svelte-7vwp57">menu</button> <div class="h-full flex"> <div class="hidden md:block p-2 pt-10 overflow-y-auto basis-1/5"><div class="absolute top-3 left-2">${validate_component(TagFilter, "TagFilter").$$render($$result, { tags: allTags }, {}, {})}</div> ${each(posts, (post) => {
    return `<a class="${[
      "block px-1 transition-colors mb-3 hover:bg-red-200",
      $page.params.pathName === post ? "bg-red-400" : ""
    ].join(" ").trim()}"${add_attribute("href", "/" + post, 0)}>${escape(post.replace("posts/", "").split(".")[0])}</a>`;
  })}</div>  ${$modalStore ? `${validate_component(MobileModalNav, "MobileModalNav").$$render($$result, { posts, tags: allTags }, {}, {})}` : ``} <div class="flex-grow overflow-y-auto py-10">${slots.default ? slots.default({}) : ``}</div> ${$focusedText !== null ? ` <div class="hidden md:flex flex-col p-2 pt-10 basis-1/5 w-1/5 h-full"><div class="text-red-700">related <button class="float-right hover:underline" data-svelte-h="svelte-1wq5lkc">[X]</button></div> <div class="overflow-y-auto w-full">${each(relatedContent || [], (entry) => {
    return `${validate_component(SearchEntry, "SearchEntry").$$render($$result, { entry }, {}, {})}`;
  })} ${relatedContent?.length === 0 ? `<div data-svelte-h="svelte-16747">no related content.</div>` : ``}</div></div>  <div class="md:hidden absolute flex flex-col h-2/5 bottom-0 left-0 w-full bg-gray-200 border-t border-t-black shadow-black shadow"><h1 class="text-red-700 px-2 border-b border-b-black">related <button class="float-right hover:underline" data-svelte-h="svelte-1wq5lkc">[X]</button></h1> <div class="overflow-y-auto w-full px-2">${each(relatedContent || [], (entry) => {
    return `${validate_component(SearchEntry, "SearchEntry").$$render($$result, { entry }, {}, {})}`;
  })} ${relatedContent?.length === 0 ? `<div data-svelte-h="svelte-16747">no related content.</div>` : ``}</div></div>` : ``}</div>`;
});
export {
  Layout as default
};
