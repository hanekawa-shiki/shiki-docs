import{_ as s,y as n,x as a,W as e}from"./plugin-vue_export-helper.0b0d78d5.js";const f='{"title":"API de Composi\xE7\xE3o (ou Composition API)","description":"","frontmatter":{},"headers":[{"level":2,"title":"Acessando Estado e Getters","slug":"acessando-estado-e-getters"},{"level":2,"title":"Acessando Muta\xE7\xF5es e A\xE7\xF5es","slug":"acessando-mutacoes-e-acoes"},{"level":2,"title":"Exemplos","slug":"exemplos"}],"relativePath":"ptbr/guide/composition-api.md","lastUpdated":1702210160131}',o={},t=e(`<h1 id="api-de-composicao-ou-composition-api" tabindex="-1">API de Composi\xE7\xE3o (ou Composition API) <a class="header-anchor" href="#api-de-composicao-ou-composition-api" aria-hidden="true">#</a></h1><p>Para acessar o <em>store</em> dentro do gatilho (ou <em>hook</em>) <code>setup</code>, voc\xEA pode chamar a fun\xE7\xE3o <code>useStore</code>. Isso \xE9 o equivalente a recuperar <code>this.$store</code> dentro de um componente usando a API de Op\xE7\xF5es (ou <em>Option</em> API).</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="acessando-estado-e-getters" tabindex="-1">Acessando Estado e Getters <a class="header-anchor" href="#acessando-estado-e-getters" aria-hidden="true">#</a></h2><p>Para acessar o estado e os <em>getters</em>, voc\xEA deve criar refer\xEAncias <code>computed</code> para reter a reatividade. Isso \xE9 o equivalente a criar dados computados usando a API de Op\xE7\xF5es (ou <em>Option</em> API).</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// acessar um estado em uma fun\xE7\xE3o de dados computados</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token comment">// acessar um getter em uma fun\xE7\xE3o de dados computados</span>
      <span class="token literal-property property">double</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>double<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="acessando-mutacoes-e-acoes" tabindex="-1">Acessando Muta\xE7\xF5es e A\xE7\xF5es <a class="header-anchor" href="#acessando-mutacoes-e-acoes" aria-hidden="true">#</a></h2><p>Ao acessar muta\xE7\xF5es e a\xE7\xF5es, voc\xEA pode simplesmente fornecer as fun\xE7\xF5es <code>commit</code> e <code>dispatch</code> dentro do gatilho (ou <em>hook</em>) <code>setup</code>.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// acessa uma muta\xE7\xE3o</span>
      <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token comment">// acessa uma a\xE7\xE3o</span>
      <span class="token function-variable function">asyncIncrement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;asyncIncrement&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="exemplos" tabindex="-1">Exemplos <a class="header-anchor" href="#exemplos" aria-hidden="true">#</a></h2><p>Confira o <a href="https://github.com/vuejs/vuex/tree/4.0/examples/composition" target="_blank" rel="noopener noreferrer">exemplo da API de Composi\xE7\xE3o</a> para ver exemplos de aplica\xE7\xF5es que utilizam Vuex e a API de Composi\xE7\xE3o (ou <em>Composition</em> API) do Vue.</p>`,11),p=[t];function c(u,r,i,l,d,k){return a(),n("div",null,p)}var h=s(o,[["render",c]]);export{f as __pageData,h as default};
