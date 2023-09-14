import{o,c as l,b as s,d as n,a as t,e,_ as p}from"./app.e52adfea.js";const r=s("h1",{id:"installation",tabindex:"-1"},[n("Installation "),s("a",{class:"header-anchor vp-link",href:"#installation","aria-hidden":"true"},"#")],-1),c=s("h2",{id:"compatibility",tabindex:"-1"},[n("Compatibility "),s("a",{class:"header-anchor vp-link",href:"#compatibility","aria-hidden":"true"},"#")],-1),i={href:"https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},u={href:"https://caniuse.com/resizeobserver",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},d={href:"https://babeljs.io/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},k=e('<p>Since Vue 3 no longer supports IE11, Element Plus does not support IE either.</p><div class="vp-table"><table><thead><tr><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png" alt=""></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png" alt=""></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png" alt=""></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png" alt=""></th></tr></thead><tbody><tr><td>Edge \u2265 79</td><td>Firefox \u2265 78</td><td>Chrome \u2265 64</td><td>Safari \u2265 12</td></tr></tbody></table></div><h3 id="version" tabindex="-1">Version <a class="header-anchor vp-link" href="#version" aria-hidden="true">#</a></h3><p>Element Plus is currently in a rapid development iteration.</p>',4),h={href:"https://www.npmjs.org/package/element-plus",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},_=s("img",{src:"https://img.shields.io/npm/v/element-plus.svg?style=flat-square",alt:""},null,-1),m=s("h2",{id:"using-package-manager",tabindex:"-1"},[n("Using Package Manager "),s("a",{class:"header-anchor vp-link",href:"#using-package-manager","aria-hidden":"true"},"#")],-1),g={href:"https://classic.yarnpkg.com/lang/en/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},v={href:"https://pnpm.io/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},f={href:"https://vitejs.dev",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},b={href:"https://webpack.js.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},y=e(`<div class="language-shell"><pre><code><span class="token comment"># Choose a package manager you like.</span>

<span class="token comment"># NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> element-plus <span class="token parameter variable">--save</span>

<span class="token comment"># Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> element-plus

<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> element-plus
</code></pre></div>`,1),w={href:"https://github.com/cnpm/cnpm",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},j={href:"https://registry.npmmirror.com/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},x=s("h2",{id:"import-in-browser",tabindex:"-1"},[n("Import in Browser "),s("a",{class:"header-anchor vp-link",href:"#import-in-browser","aria-hidden":"true"},"#")],-1),q=s("p",null,[n("Import Element Plus through browser HTML tags directly, and use global variable "),s("code",null,"ElementPlus"),n(".")],-1),P={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},I={href:"https://jsdelivr.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},T=e(`<h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor vp-link" href="#unpkg" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import style --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/vue@3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import component library --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor vp-link" href="#jsdelivr" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import style --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/vue@3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import component library --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4),V={class:"tip custom-block"},S=s("p",{class:"custom-block-title"},"TIP",-1),E={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},C=s("h2",{id:"hello-world",tabindex:"-1"},[n("Hello World "),s("a",{class:"header-anchor vp-link",href:"#hello-world","aria-hidden":"true"},"#")],-1),N={href:"https://codepen.io/iamkun/pen/YzWMaVr",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},D=s("iframe",{height:"469",style:{width:"100%"},scrolling:"no",title:"YzWMaVr",src:"https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),A=s("p",null,[n("If you are installing via package manager and want to use it with a packaging tool, please read the next section: "),s("a",{href:"/en-US/guide/quickstart.html",class:"vp-link"},"Quick Start"),n(".")],-1),U='{"title":"Installation","description":"","frontmatter":{"title":"Installation","lang":"en-US"},"headers":[{"level":2,"title":"Compatibility","slug":"compatibility"},{"level":3,"title":"Version","slug":"version"},{"level":2,"title":"Using Package Manager","slug":"using-package-manager"},{"level":2,"title":"Import in Browser","slug":"import-in-browser"},{"level":3,"title":"unpkg","slug":"unpkg"},{"level":3,"title":"jsDelivr","slug":"jsdelivr"},{"level":2,"title":"Hello World","slug":"hello-world"}],"relativePath":"en-US/guide/installation.md","lastUpdated":1694656254000}',W={},H=Object.assign(W,{__name:"installation",setup(M){return(z,Y)=>{const a=p;return o(),l("div",null,[r,c,s("p",null,[n("Element Plus can run on browsers that support "),s("a",i,[n("ES2018"),t(a,{class:"link-icon"})]),n(" and "),s("a",u,[n("ResizeObserver"),t(a,{class:"link-icon"})]),n(". If you really need to support outdated browsers, please add "),s("a",d,[n("Babel"),t(a,{class:"link-icon"})]),n(" and Polyfill yourself.")]),k,s("p",null,[s("a",h,[_,t(a,{class:"link-icon"})])]),m,s("p",null,[s("strong",null,[n("We recommend using the package manager (NPM, "),s("a",g,[n("Yarn"),t(a,{class:"link-icon"})]),n(", "),s("a",v,[n("pnpm"),t(a,{class:"link-icon"})]),n(") to install Element Plus")]),n(", so that you can utilize bundlers like "),s("a",f,[n("Vite"),t(a,{class:"link-icon"})]),n(" and "),s("a",b,[n("webpack"),t(a,{class:"link-icon"})]),n(".")]),y,s("p",null,[n("If your network environment is not good, it is recommended to use a mirror registry "),s("a",w,[n("cnpm"),t(a,{class:"link-icon"})]),n(" or "),s("a",j,[n("Alibaba"),t(a,{class:"link-icon"})]),n(".")]),x,q,s("p",null,[n("According to different CDN providers, there are different introduction methods. Here we use "),s("a",P,[n("unpkg"),t(a,{class:"link-icon"})]),n(" and "),s("a",I,[n("jsDelivr"),t(a,{class:"link-icon"})]),n(" as example. You can also use other CDN providers.")]),T,s("div",V,[S,s("p",null,[n("We recommend using CDN to import Element Plus users to lock the version on the link address, so as not to be affected by incompatible updates when Element Plus is upgraded in the future. Please check "),s("a",E,[n("unpkg.com"),t(a,{class:"link-icon"})]),n(" for the method to lock the version.")])]),C,s("p",null,[n("With CDN, we can easily use Element Plus to write a Hello World page. "),s("a",N,[n("Online Demo"),t(a,{class:"link-icon"})])]),D,A])}}});export{U as __pageData,H as default};
