import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const h='{"title":"Hot Reloading","description":"","frontmatter":{},"headers":[{"level":2,"title":"Dynamic module hot reloading","slug":"dynamic-module-hot-reloading"}],"relativePath":"guide/hot-reload.md","lastUpdated":1702210160122}',p={},o=t(`<h1 id="hot-reloading" tabindex="-1">Hot Reloading <a class="header-anchor" href="#hot-reloading" aria-hidden="true">#</a></h1><p>Vuex supports hot-reloading mutations, modules, actions and getters during development, using webpack&#39;s <a href="https://webpack.js.org/guides/hot-module-replacement/" target="_blank" rel="noopener noreferrer">Hot Module Replacement API</a>. You can also use it in Browserify with the <a href="https://github.com/AgentME/browserify-hmr/" target="_blank" rel="noopener noreferrer">browserify-hmr</a> plugin.</p><p>For mutations and modules, you need to use the <code>store.hotUpdate()</code> API method:</p><div class="language-js"><pre><code><span class="token comment">// store.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> mutations <span class="token keyword">from</span> <span class="token string">&#39;./mutations&#39;</span>
<span class="token keyword">import</span> moduleA <span class="token keyword">from</span> <span class="token string">&#39;./modules/a&#39;</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> moduleA
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// accept actions and mutations as hot modules</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./mutations&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./modules/a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// require the updated modules</span>
    <span class="token comment">// have to add .default here due to babel 6 module output</span>
    <span class="token keyword">const</span> newMutations <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mutations&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
    <span class="token keyword">const</span> newModuleA <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./modules/a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
    <span class="token comment">// swap in the new modules and mutations</span>
    store<span class="token punctuation">.</span><span class="token function">hotUpdate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">mutations</span><span class="token operator">:</span> newMutations<span class="token punctuation">,</span>
      <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> newModuleA
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Checkout the <a href="https://github.com/vuejs/vuex/tree/main/examples/counter-hot" target="_blank" rel="noopener noreferrer">counter-hot example</a> to play with hot-reload.</p><h2 id="dynamic-module-hot-reloading" tabindex="-1">Dynamic module hot reloading <a class="header-anchor" href="#dynamic-module-hot-reloading" aria-hidden="true">#</a></h2><p>If you use modules exclusively, you can use <code>require.context</code> to load and hot reload all modules dynamically.</p><div class="language-js"><pre><code><span class="token comment">// store.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// Load all modules.</span>
<span class="token keyword">function</span> <span class="token function">loadModules</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&quot;./modules&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z_]+)\\.js$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> modules <span class="token operator">=</span> context
    <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> key<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z_]+)\\.js$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token parameter">modules<span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token punctuation">,</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token operator">...</span>modules<span class="token punctuation">,</span>
        <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token function">context</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span>default
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> context<span class="token punctuation">,</span> modules <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> context<span class="token punctuation">,</span> modules <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">loadModules</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  modules
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Hot reload whenever any module changes.</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> modules <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">loadModules</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    store<span class="token punctuation">.</span><span class="token function">hotUpdate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      modules
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
