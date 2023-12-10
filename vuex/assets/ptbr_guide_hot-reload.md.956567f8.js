import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const g='{"title":"Hot Reloading (Recarregamento R\xE1pido)","description":"","frontmatter":{},"headers":[{"level":2,"title":"M\xF3dulo din\xE2mico de hot reloading","slug":"modulo-dinamico-de-hot-reloading"}],"relativePath":"ptbr/guide/hot-reload.md","lastUpdated":1702210160131}',o={},p=t(`<h1 id="hot-reloading-recarregamento-rapido" tabindex="-1">Hot Reloading (Recarregamento R\xE1pido) <a class="header-anchor" href="#hot-reloading-recarregamento-rapido" aria-hidden="true">#</a></h1><p>O Vuex suporta <em>hot-reloading</em> de muta\xE7\xF5es, m\xF3dulos, a\xE7\xF5es e <em>getters</em> durante o desenvolvimento, utilizando o <em>webpack</em> <a href="https://webpack.js.org/guides/hot-module-replacement/" target="_blank" rel="noopener noreferrer">Hot Module Replacement API</a>. Voc\xEA tamb\xE9m pode us\xE1-lo no Browserify com o <em>plugin</em> <a href="https://github.com/AgentME/browserify-hmr/" target="_blank" rel="noopener noreferrer">browserify-hmr</a>.</p><p>Para muta\xE7\xF5es e m\xF3dulos, voc\xEA precisa usar o m\xE9todo da API <code>store.hotUpdate()</code>:</p><div class="language-js"><pre><code><span class="token comment">// store.js</span>
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
  <span class="token comment">// aceita a\xE7\xF5es e muta\xE7\xF5es como &#39;hot modules&#39;</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./mutations&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./modules/a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// requer os m\xF3dulos atualizados</span>
    <span class="token comment">// tem que adicionar .default aqui devido \xE0 sa\xEDda do m\xF3dulo babel 6</span>
    <span class="token keyword">const</span> newMutations <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mutations&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
    <span class="token keyword">const</span> newModuleA <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./modules/a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
    <span class="token comment">// troca nas novas a\xE7\xF5es e muta\xE7\xF5es</span>
    store<span class="token punctuation">.</span><span class="token function">hotUpdate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">mutations</span><span class="token operator">:</span> newMutations<span class="token punctuation">,</span>
      <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> newModuleA
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Confira o <a href="https://github.com/vuejs/vuex/tree/main/examples/counter-hot" target="_blank" rel="noopener noreferrer">counter-hot example</a> para brincar com o <em>hot-reload</em>.</p><h2 id="modulo-dinamico-de-hot-reloading" tabindex="-1">M\xF3dulo din\xE2mico de hot reloading <a class="header-anchor" href="#modulo-dinamico-de-hot-reloading" aria-hidden="true">#</a></h2><p>Se voc\xEA usa exclusivamente m\xF3dulos, voc\xEA pode usar <code>require.context</code> para carregar e recarregar todos os m\xF3dulos dinamicamente.</p><div class="language-js"><pre><code><span class="token comment">// store.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// Carrega todos os m\xF3dulos.</span>
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
  <span class="token comment">// Hot reload sempre que qualquer m\xF3dulo for alterado.</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> modules <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">loadModules</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    store<span class="token punctuation">.</span><span class="token function">hotUpdate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      modules
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),e=[p];function c(u,l,r,i,k,d){return a(),s("div",null,e)}var f=n(o,[["render",c]]);export{g as __pageData,f as default};
