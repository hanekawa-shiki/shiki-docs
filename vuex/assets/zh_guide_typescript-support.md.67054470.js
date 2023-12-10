import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const y='{"title":"TypeScript \u652F\u6301","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue \u7EC4\u4EF6\u4E2D $store \u5C5E\u6027\u7684\u7C7B\u578B\u58F0\u660E","slug":"vue-\u7EC4\u4EF6\u4E2D-store-\u5C5E\u6027\u7684\u7C7B\u578B\u58F0\u660E"},{"level":2,"title":"useStore \u7EC4\u5408\u5F0F\u51FD\u6570\u7C7B\u578B\u58F0\u660E","slug":"usestore-\u7EC4\u5408\u5F0F\u51FD\u6570\u7C7B\u578B\u58F0\u660E"},{"level":3,"title":"\u7B80\u5316 useStore \u7528\u6CD5","slug":"\u7B80\u5316-usestore-\u7528\u6CD5"}],"relativePath":"zh/guide/typescript-support.md","lastUpdated":1702210160145}',e={},o=t(`<h1 id="typescript-\u652F\u6301" tabindex="-1">TypeScript \u652F\u6301 <a class="header-anchor" href="#typescript-\u652F\u6301" aria-hidden="true">#</a></h1><p>Vuex \u63D0\u4F9B\u4E86\u7C7B\u578B\u58F0\u660E\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4F7F\u7528 TypeScript \u5B9A\u4E49 store\uFF0C\u5E76\u4E14\u4E0D\u9700\u8981\u4EFB\u4F55\u7279\u6B8A\u7684 TypeScript \u914D\u7F6E\u3002\u8BF7\u9075\u5FAA <a href="https://v3.cn.vuejs.org/guide/typescript-support.html" target="_blank" rel="noopener noreferrer">Vue \u7684\u57FA\u672C TypeScript \u914D\u7F6E</a>\u6765\u914D\u7F6E\u9879\u76EE\u3002</p><p>\u4F46\u662F\uFF0C\u5982\u679C\u4F60\u4F7F\u7528 TypeScript \u6765\u7F16\u5199 Vue \u7EC4\u4EF6\uFF0C\u5219\u9700\u8981\u9075\u5FAA\u4E00\u4E9B\u6B65\u9AA4\u624D\u80FD\u6B63\u786E\u5730\u4E3A store \u63D0\u4F9B\u7C7B\u578B\u58F0\u660E\u3002</p><h2 id="vue-\u7EC4\u4EF6\u4E2D-store-\u5C5E\u6027\u7684\u7C7B\u578B\u58F0\u660E" tabindex="-1">Vue \u7EC4\u4EF6\u4E2D <code>$store</code> \u5C5E\u6027\u7684\u7C7B\u578B\u58F0\u660E <a class="header-anchor" href="#vue-\u7EC4\u4EF6\u4E2D-store-\u5C5E\u6027\u7684\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a></h2><p>Vuex \u6CA1\u6709\u4E3A <code>this.$store</code> \u5C5E\u6027\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u7C7B\u578B\u58F0\u660E\u3002\u5982\u679C\u4F60\u8981\u4F7F\u7528 TypeScript\uFF0C\u9996\u5148\u9700\u8981\u58F0\u660E\u81EA\u5B9A\u4E49\u7684<a href="https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation" target="_blank" rel="noopener noreferrer">\u6A21\u5757\u8865\u5145(module augmentation)</a>\u3002</p><p>\u4E3A\u6B64\uFF0C\u9700\u8981\u5728\u9879\u76EE\u6587\u4EF6\u5939\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u58F0\u660E\u6587\u4EF6\u6765\u58F0\u660E Vue \u7684\u81EA\u5B9A\u4E49\u7C7B\u578B <code>ComponentCustomProperties</code> \uFF1A</p><div class="language-ts"><pre><code><span class="token comment">// vuex.d.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@vue/runtime-core&#39;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u58F0\u660E\u81EA\u5DF1\u7684 store state</span>
  <span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u4E3A \`this.$store\` \u63D0\u4F9B\u7C7B\u578B\u58F0\u660E</span>
  <span class="token keyword">interface</span> <span class="token class-name">ComponentCustomProperties</span> <span class="token punctuation">{</span>
    $store<span class="token operator">:</span> Store<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="usestore-\u7EC4\u5408\u5F0F\u51FD\u6570\u7C7B\u578B\u58F0\u660E" tabindex="-1"><code>useStore</code> \u7EC4\u5408\u5F0F\u51FD\u6570\u7C7B\u578B\u58F0\u660E <a class="header-anchor" href="#usestore-\u7EC4\u5408\u5F0F\u51FD\u6570\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a></h2><p>\u5F53\u4F7F\u7528\u7EC4\u5408\u5F0F API \u7F16\u5199 Vue \u7EC4\u4EF6\u65F6\uFF0C\u60A8\u53EF\u80FD\u5E0C\u671B <code>useStore</code> \u8FD4\u56DE\u7C7B\u578B\u5316\u7684 store\u3002\u4E3A\u4E86 <code>useStore</code> \u80FD\u6B63\u786E\u8FD4\u56DE\u7C7B\u578B\u5316\u7684 store\uFF0C\u5FC5\u987B\u6267\u884C\u4EE5\u4E0B\u6B65\u9AA4\uFF1A</p><ol><li>\u5B9A\u4E49\u7C7B\u578B\u5316\u7684 <code>InjectionKey</code>\u3002</li><li>\u5C06 store \u5B89\u88C5\u5230 Vue \u5E94\u7528\u65F6\u63D0\u4F9B\u7C7B\u578B\u5316\u7684 <code>InjectionKey</code> \u3002</li><li>\u5C06\u7C7B\u578B\u5316\u7684 <code>InjectionKey</code> \u4F20\u7ED9 <code>useStore</code> \u65B9\u6CD5\u3002</li></ol><p>\u8BA9\u6211\u4EEC\u9010\u6B65\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u9996\u5148\uFF0C\u4F7F\u7528 Vue \u7684 <code>InjectionKey</code> \u63A5\u53E3\u548C\u81EA\u5DF1\u7684 store \u7C7B\u578B\u5B9A\u4E49\u6765\u5B9A\u4E49 key \uFF1A</p><div class="language-ts"><pre><code><span class="token comment">// store.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> InjectionKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// \u4E3A store state \u58F0\u660E\u7C7B\u578B</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49 injection key</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> key<span class="token operator">:</span> InjectionKey<span class="token operator">&lt;</span>Store<span class="token operator">&lt;</span>State<span class="token operator">&gt;&gt;</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createStore</span><span class="token generic class-name"><span class="token operator">&lt;</span>State<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u7136\u540E\uFF0C\u5C06 store \u5B89\u88C5\u5230 Vue \u5E94\u7528\u65F6\u4F20\u5165\u5B9A\u4E49\u597D\u7684 injection key\u3002</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store<span class="token punctuation">,</span> key <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u4F20\u5165 injection key</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> key<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6700\u540E\uFF0C\u5C06\u4E0A\u8FF0 injection key \u4F20\u5165 <code>useStore</code> \u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u7C7B\u578B\u5316\u7684 store\u3002</p><div class="language-ts"><pre><code><span class="token comment">// vue \u7EC4\u4EF6</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> key <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

    store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token comment">// \u7C7B\u578B\u4E3A number</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u672C\u8D28\u4E0A\uFF0CVuex \u5C06store \u5B89\u88C5\u5230 Vue \u5E94\u7528\u4E2D\u4F7F\u7528\u4E86 Vue \u7684 <a href="https://v3.cn.vuejs.org/api/composition-api.html#provide-inject" target="_blank" rel="noopener noreferrer">Provide/Inject</a> \u7279\u6027\uFF0C\u8FD9\u5C31\u662F injection key \u662F\u5F88\u91CD\u8981\u7684\u56E0\u7D20\u7684\u539F\u56E0\u3002</p><h3 id="\u7B80\u5316-usestore-\u7528\u6CD5" tabindex="-1">\u7B80\u5316 <code>useStore</code> \u7528\u6CD5 <a class="header-anchor" href="#\u7B80\u5316-usestore-\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u5F15\u5165 <code>InjectionKey</code> \u5E76\u5C06\u5176\u4F20\u5165 <code>useStore</code> \u4F7F\u7528\u8FC7\u7684\u4EFB\u4F55\u5730\u65B9\uFF0C\u5F88\u5FEB\u5C31\u4F1A\u6210\u4E3A\u4E00\u9879\u91CD\u590D\u6027\u7684\u5DE5\u4F5C\u3002\u4E3A\u4E86\u7B80\u5316\u95EE\u9898\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u81EA\u5DF1\u7684\u7EC4\u5408\u5F0F\u51FD\u6570\u6765\u68C0\u7D22\u7C7B\u578B\u5316\u7684 store \uFF1A</p><div class="language-ts"><pre><code><span class="token comment">// store.ts</span>
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

<span class="token comment">// \u5B9A\u4E49\u81EA\u5DF1\u7684 \`useStore\` \u7EC4\u5408\u5F0F\u51FD\u6570</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useStore</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">baseUseStore</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u73B0\u5728\uFF0C\u901A\u8FC7\u5F15\u5165\u81EA\u5B9A\u4E49\u7684\u7EC4\u5408\u5F0F\u51FD\u6570\uFF0C\u4E0D\u7528\u63D0\u4F9B injection key \u548C\u7C7B\u578B\u58F0\u660E\u5C31\u53EF\u4EE5\u76F4\u63A5\u5F97\u5230\u7C7B\u578B\u5316\u7684 store\uFF1A</p><div class="language-ts"><pre><code><span class="token comment">// vue \u7EC4\u4EF6</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token comment">// \u7C7B\u578B\u4E3A number</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,22),p=[o];function c(r,u,l,k,i,d){return a(),s("div",null,p)}var g=n(e,[["render",c]]);export{y as __pageData,g as default};
