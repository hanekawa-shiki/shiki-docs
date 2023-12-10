import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const m='{"title":"TypeScript Support","description":"","frontmatter":{},"headers":[{"level":2,"title":"Typing $store Property in Vue Component","slug":"typing-store-property-in-vue-component"},{"level":2,"title":"Typing useStore Composition Function","slug":"typing-usestore-composition-function"},{"level":3,"title":"Simplifying useStore usage","slug":"simplifying-usestore-usage"}],"relativePath":"guide/typescript-support.md","lastUpdated":1702210160125}',e={},o=t(`<h1 id="typescript-support" tabindex="-1">TypeScript Support <a class="header-anchor" href="#typescript-support" aria-hidden="true">#</a></h1><p>Vuex provides its typings so you can use TypeScript to write a store definition. You don&#39;t need any special TypeScript configuration for Vuex. Please follow <a href="https://v3.vuejs.org/guide/typescript-support.html" target="_blank" rel="noopener noreferrer">Vue&#39;s basic TypeScript setup</a> to configure your project.</p><p>However, if you&#39;re writing your Vue components in TypeScript, there&#39;re a few steps to follow that require for you to correctly provide typings for a store.</p><h2 id="typing-store-property-in-vue-component" tabindex="-1">Typing <code>$store</code> Property in Vue Component <a class="header-anchor" href="#typing-store-property-in-vue-component" aria-hidden="true">#</a></h2><p>Vuex doesn&#39;t provide typings for <code>this.$store</code> property out of the box. When used with TypeScript, you must declare your own module augmentation.</p><p>To do so, declare custom typings for Vue&#39;s <code>ComponentCustomProperties</code> by adding a declaration file in your project folder:</p><div class="language-ts"><pre><code><span class="token comment">// vuex.d.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@vue/runtime-core&#39;</span> <span class="token punctuation">{</span>
  <span class="token comment">// declare your own store states</span>
  <span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// provide typings for \`this.$store\`</span>
  <span class="token keyword">interface</span> <span class="token class-name">ComponentCustomProperties</span> <span class="token punctuation">{</span>
    $store<span class="token operator">:</span> Store<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="typing-usestore-composition-function" tabindex="-1">Typing <code>useStore</code> Composition Function <a class="header-anchor" href="#typing-usestore-composition-function" aria-hidden="true">#</a></h2><p>When you&#39;re writing your Vue component in Composition API, you will most likely want <code>useStore</code> to return the typed store. For <code>useStore</code> to correctly return the typed store, you must:</p><ol><li>Define the typed <code>InjectionKey</code>.</li><li>Provide the typed <code>InjectionKey</code> when installing a store to the Vue app.</li><li>Pass the typed <code>InjectionKey</code> to the <code>useStore</code> method.</li></ol><p>Let&#39;s tackle this step by step. First, define the key using Vue&#39;s <code>InjectionKey</code> interface along with your own store typing definition:</p><div class="language-ts"><pre><code><span class="token comment">// store.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> InjectionKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// define your typings for the store state</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// define injection key</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> key<span class="token operator">:</span> InjectionKey<span class="token operator">&lt;</span>Store<span class="token operator">&lt;</span>State<span class="token operator">&gt;&gt;</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createStore</span><span class="token generic class-name"><span class="token operator">&lt;</span>State<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Next, pass the defined injection key when installing the store to the Vue app:</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store<span class="token punctuation">,</span> key <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// pass the injection key</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> key<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>Finally, you can pass the key to the <code>useStore</code> method to retrieve the typed store.</p><div class="language-ts"><pre><code><span class="token comment">// in a vue component</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> key <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

    store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token comment">// typed as number</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Under the hood, Vuex installs the store to the Vue app using Vue&#39;s <a href="https://v3.vuejs.org/api/composition-api.html#provide-inject" target="_blank" rel="noopener noreferrer">Provide/Inject</a> feature which is why the injection key is an important factor.</p><h3 id="simplifying-usestore-usage" tabindex="-1">Simplifying <code>useStore</code> usage <a class="header-anchor" href="#simplifying-usestore-usage" aria-hidden="true">#</a></h3><p>Having to import <code>InjectionKey</code> and passing it to <code>useStore</code> everywhere it&#39;s used can quickly become a repetitive task. To simplify matters, you can define your own composable function to retrieve a typed store:</p><div class="language-ts"><pre><code><span class="token comment">// store.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> InjectionKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> useStore <span class="token keyword">as</span> baseUseStore<span class="token punctuation">,</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> key<span class="token operator">:</span> InjectionKey<span class="token operator">&lt;</span>Store<span class="token operator">&lt;</span>State<span class="token operator">&gt;&gt;</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createStore</span><span class="token generic class-name"><span class="token operator">&lt;</span>State<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// define your own \`useStore\` composition function</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useStore</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">baseUseStore</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Now, by importing your own composable function, you can retrieve the typed store <strong>without</strong> having to provide the injection key and its typing:</p><div class="language-ts"><pre><code><span class="token comment">// in a vue component</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token comment">// typed as number</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,22),p=[o];function c(r,i,u,l,k,d){return a(),s("div",null,p)}var g=n(e,[["render",c]]);export{m as __pageData,g as default};
