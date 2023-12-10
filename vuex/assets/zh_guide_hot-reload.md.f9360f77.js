import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const f='{"title":"\u70ED\u91CD\u8F7D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u52A8\u6001\u6A21\u5757\u70ED\u91CD\u8F7D","slug":"\u52A8\u6001\u6A21\u5757\u70ED\u91CD\u8F7D"}],"relativePath":"zh/guide/hot-reload.md","lastUpdated":1702210160142}',p={},o=t(`<h1 id="\u70ED\u91CD\u8F7D" tabindex="-1">\u70ED\u91CD\u8F7D <a class="header-anchor" href="#\u70ED\u91CD\u8F7D" aria-hidden="true">#</a></h1><p>\u4F7F\u7528 webpack \u7684 <a href="https://webpack.js.org/guides/hot-module-replacement/" target="_blank" rel="noopener noreferrer">Hot Module Replacement API</a>\uFF0CVuex \u652F\u6301\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u70ED\u91CD\u8F7D mutation\u3001module\u3001action \u548C getter\u3002\u4F60\u4E5F\u53EF\u4EE5\u5728 Browserify \u4E2D\u4F7F\u7528 <a href="https://github.com/AgentME/browserify-hmr/" target="_blank" rel="noopener noreferrer">browserify-hmr</a> \u63D2\u4EF6\u3002</p><p>\u5BF9\u4E8E mutation \u548C\u6A21\u5757\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 <code>store.hotUpdate()</code> \u65B9\u6CD5\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// store.js</span>
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
  <span class="token comment">// \u4F7F action \u548C mutation \u6210\u4E3A\u53EF\u70ED\u91CD\u8F7D\u6A21\u5757</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./mutations&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./modules/a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u66F4\u65B0\u540E\u7684\u6A21\u5757</span>
    <span class="token comment">// \u56E0\u4E3A babel 6 \u7684\u6A21\u5757\u7F16\u8BD1\u683C\u5F0F\u95EE\u9898\uFF0C\u8FD9\u91CC\u9700\u8981\u52A0\u4E0A \`.default\`</span>
    <span class="token keyword">const</span> newMutations <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mutations&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
    <span class="token keyword">const</span> newModuleA <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./modules/a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
    <span class="token comment">// \u52A0\u8F7D\u65B0\u6A21\u5757</span>
    store<span class="token punctuation">.</span><span class="token function">hotUpdate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">mutations</span><span class="token operator">:</span> newMutations<span class="token punctuation">,</span>
      <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> newModuleA
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53C2\u8003\u70ED\u91CD\u8F7D\u793A\u4F8B <a href="https://github.com/vuejs/vuex/tree/main/examples/counter-hot" target="_blank" rel="noopener noreferrer">counter-hot</a>\u3002</p><h2 id="\u52A8\u6001\u6A21\u5757\u70ED\u91CD\u8F7D" tabindex="-1">\u52A8\u6001\u6A21\u5757\u70ED\u91CD\u8F7D <a class="header-anchor" href="#\u52A8\u6001\u6A21\u5757\u70ED\u91CD\u8F7D" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u4EC5\u4F7F\u7528\u6A21\u5757\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>require.context</code> \u6765\u52A8\u6001\u5730\u52A0\u8F7D\u6216\u70ED\u91CD\u8F7D\u6240\u6709\u7684\u6A21\u5757\u3002</p><div class="language-js"><pre><code><span class="token comment">// store.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// \u52A0\u8F7D\u6240\u6709\u6A21\u5757\u3002</span>
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

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  modules
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5728\u4EFB\u4F55\u6A21\u5757\u53D1\u751F\u6539\u53D8\u65F6\u8FDB\u884C\u70ED\u91CD\u8F7D\u3002</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> modules <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">loadModules</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    store<span class="token punctuation">.</span><span class="token function">hotUpdate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      modules
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{f as __pageData,g as default};
