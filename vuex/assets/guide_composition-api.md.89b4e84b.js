import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const h='{"title":"Composition API","description":"","frontmatter":{},"headers":[{"level":2,"title":"Accessing State and Getters","slug":"accessing-state-and-getters"},{"level":2,"title":"Accessing Mutations and Actions","slug":"accessing-mutations-and-actions"},{"level":2,"title":"Examples","slug":"examples"}],"relativePath":"guide/composition-api.md","lastUpdated":1702210160121}',e={},o=t(`<h1 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api" aria-hidden="true">#</a></h1><p>To access the store within the <code>setup</code> hook, you can call the <code>useStore</code> function. This is the equivalent of retrieving <code>this.$store</code> within a component using the Option API.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="accessing-state-and-getters" tabindex="-1">Accessing State and Getters <a class="header-anchor" href="#accessing-state-and-getters" aria-hidden="true">#</a></h2><p>In order to access state and getters, you will want to create <code>computed</code> references to retain reactivity. This is the equivalent of creating computed properties using the Option API.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// access a state in computed function</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token comment">// access a getter in computed function</span>
      <span class="token literal-property property">double</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>double<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="accessing-mutations-and-actions" tabindex="-1">Accessing Mutations and Actions <a class="header-anchor" href="#accessing-mutations-and-actions" aria-hidden="true">#</a></h2><p>When accessing mutations and actions, you can simply provide the <code>commit</code> and <code>dispatch</code> method inside the <code>setup</code> hook.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// access a mutation</span>
      <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token comment">// access an action</span>
      <span class="token function-variable function">asyncIncrement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;asyncIncrement&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><p>Check out the <a href="https://github.com/vuejs/vuex/tree/4.0/examples/composition" target="_blank" rel="noopener noreferrer">Composition API example</a> to see example applications utilizing Vuex and Vue&#39;s Composition API.</p>`,11),p=[o];function c(i,u,l,r,k,d){return a(),s("div",null,p)}var g=n(e,[["render",c]]);export{h as __pageData,g as default};
