import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const h='{"title":"\u7EC4\u5408\u5F0FAPI","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BBF\u95EE State \u548C Getter","slug":"\u8BBF\u95EE-state-\u548C-getter"},{"level":2,"title":"\u8BBF\u95EE Mutation \u548C Action","slug":"\u8BBF\u95EE-mutation-\u548C-action"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"}],"relativePath":"zh/guide/composition-api.md","lastUpdated":1702210160142}',p={},o=t(`<h1 id="\u7EC4\u5408\u5F0Fapi" tabindex="-1">\u7EC4\u5408\u5F0FAPI <a class="header-anchor" href="#\u7EC4\u5408\u5F0Fapi" aria-hidden="true">#</a></h1><p>\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528 <code>useStore</code> \u51FD\u6570\uFF0C\u6765\u5728 <code>setup</code> \u94A9\u5B50\u51FD\u6570\u4E2D\u8BBF\u95EE store\u3002\u8FD9\u4E0E\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u9009\u9879\u5F0F API \u8BBF\u95EE <code>this.$store</code> \u662F\u7B49\u6548\u7684\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8BBF\u95EE-state-\u548C-getter" tabindex="-1">\u8BBF\u95EE State \u548C Getter <a class="header-anchor" href="#\u8BBF\u95EE-state-\u548C-getter" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u8BBF\u95EE state \u548C getter\uFF0C\u9700\u8981\u521B\u5EFA <code>computed</code> \u5F15\u7528\u4EE5\u4FDD\u7559\u54CD\u5E94\u6027\uFF0C\u8FD9\u4E0E\u5728\u9009\u9879\u5F0F API \u4E2D\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u7B49\u6548\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5728 computed \u51FD\u6570\u4E2D\u8BBF\u95EE state</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token comment">// \u5728 computed \u51FD\u6570\u4E2D\u8BBF\u95EE getter</span>
      <span class="token literal-property property">double</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>double<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8BBF\u95EE-mutation-\u548C-action" tabindex="-1">\u8BBF\u95EE Mutation \u548C Action <a class="header-anchor" href="#\u8BBF\u95EE-mutation-\u548C-action" aria-hidden="true">#</a></h2><p>\u8981\u4F7F\u7528 mutation \u548C action \u65F6\uFF0C\u53EA\u9700\u8981\u5728 <code>setup</code> \u94A9\u5B50\u51FD\u6570\u4E2D\u8C03\u7528 <code>commit</code> \u548C <code>dispatch</code> \u51FD\u6570\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4F7F\u7528 mutation</span>
      <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token comment">// \u4F7F\u7528 action</span>
      <span class="token function-variable function">asyncIncrement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;asyncIncrement&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u67E5\u770B<a href="https://github.com/vuejs/vuex/tree/4.0/examples/composition" target="_blank" rel="noopener noreferrer">\u7EC4\u5408\u5F0F API \u6848\u4F8B</a>\uFF0C\u4EE5\u4FBF\u4E86\u89E3\u4F7F\u7528 Vuex \u548C Vue \u7684\u7EC4\u5408\u5F0F API \u7684\u5E94\u7528\u6848\u4F8B\u3002</p>`,11),e=[o];function c(u,l,i,r,k,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{h as __pageData,f as default};
