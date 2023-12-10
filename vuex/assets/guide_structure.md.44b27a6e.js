import{_ as t,y as e,x as s,W as n}from"./plugin-vue_export-helper.0b0d78d5.js";const _='{"title":"Application Structure","description":"","frontmatter":{},"relativePath":"guide/structure.md","lastUpdated":1702210160124}',o={},a=n(`<h1 id="application-structure" tabindex="-1">Application Structure <a class="header-anchor" href="#application-structure" aria-hidden="true">#</a></h1><p>Vuex doesn&#39;t really restrict how you structure your code. Rather, it enforces a set of high-level principles:</p><ol><li><p>Application-level state is centralized in the store.</p></li><li><p>The only way to mutate the state is by committing <strong>mutations</strong>, which are synchronous transactions.</p></li><li><p>Asynchronous logic should be encapsulated in, and can be composed with <strong>actions</strong>.</p></li></ol><p>As long as you follow these rules, it&#39;s up to you how to structure your project. If your store file gets too big, simply start splitting the actions, mutations and getters into separate files.</p><p>For any non-trivial app, we will likely need to leverage modules. Here&#39;s an example project structure:</p><div class="language-bash"><pre><code>\u251C\u2500\u2500 index.html
\u251C\u2500\u2500 main.js
\u251C\u2500\u2500 api
\u2502   \u2514\u2500\u2500 <span class="token punctuation">..</span>. <span class="token comment"># abstractions for making API requests</span>
\u251C\u2500\u2500 components
\u2502   \u251C\u2500\u2500 App.vue
\u2502   \u2514\u2500\u2500 <span class="token punctuation">..</span>.
\u2514\u2500\u2500 store
    \u251C\u2500\u2500 index.js          <span class="token comment"># where we assemble modules and export the store</span>
    \u251C\u2500\u2500 actions.js        <span class="token comment"># root actions</span>
    \u251C\u2500\u2500 mutations.js      <span class="token comment"># root mutations</span>
    \u2514\u2500\u2500 modules
        \u251C\u2500\u2500 cart.js       <span class="token comment"># cart module</span>
        \u2514\u2500\u2500 products.js   <span class="token comment"># products module</span>
</code></pre></div><p>As a reference, check out the <a href="https://github.com/vuejs/vuex/tree/4.0/examples/classic/shopping-cart" target="_blank" rel="noopener noreferrer">Shopping Cart Example</a>.</p>`,7),r=[a];function c(i,p,l,u,d,m){return s(),e("div",null,r)}var g=t(o,[["render",c]]);export{_ as __pageData,g as default};
