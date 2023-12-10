import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const g='{"title":"Modules","description":"","frontmatter":{},"headers":[{"level":2,"title":"Module Local State","slug":"module-local-state"},{"level":2,"title":"Namespacing","slug":"namespacing"},{"level":3,"title":"Accessing Global Assets in Namespaced Modules","slug":"accessing-global-assets-in-namespaced-modules"},{"level":3,"title":"Register Global Action in Namespaced Modules","slug":"register-global-action-in-namespaced-modules"},{"level":3,"title":"Binding Helpers with Namespace","slug":"binding-helpers-with-namespace"},{"level":3,"title":"Caveat for Plugin Developers","slug":"caveat-for-plugin-developers"},{"level":2,"title":"Dynamic Module Registration","slug":"dynamic-module-registration"},{"level":3,"title":"Preserving state","slug":"preserving-state"},{"level":2,"title":"Module Reuse","slug":"module-reuse"}],"relativePath":"guide/modules.md","lastUpdated":1702210160123}',e={},p=t(`<h1 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-hidden="true">#</a></h1><div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/cqKK4psq" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div><p>Due to using a single state tree, all states of our application are contained inside one big object. However, as our application grows in scale, the store can get really bloated.</p><p>To help with that, Vuex allows us to divide our store into <strong>modules</strong>. Each module can contain its own state, mutations, actions, getters, and even nested modules - it&#39;s fractal all the way down:</p><div class="language-js"><pre><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> moduleB <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> moduleA<span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> moduleB
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>a <span class="token comment">// -&gt; \`moduleA\`&#39;s state</span>
store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>b <span class="token comment">// -&gt; \`moduleB\`&#39;s state</span>
</code></pre></div><h2 id="module-local-state" tabindex="-1">Module Local State <a class="header-anchor" href="#module-local-state" aria-hidden="true">#</a></h2><p>Inside a module&#39;s mutations and getters, the first argument received will be <strong>the module&#39;s local state</strong>.</p><div class="language-js"><pre><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \`state\` is the local module state</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">doubleCount</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Similarly, inside module actions, <code>context.state</code> will expose the local state, and root state will be exposed as <code>context.rootState</code>:</p><div class="language-js"><pre><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">incrementIfOddOnRootSum</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> state<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> rootState <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> rootState<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Also, inside module getters, the root state will be exposed as their 3rd argument:</p><div class="language-js"><pre><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">sumWithRootCount</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> rootState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> rootState<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="namespacing" tabindex="-1">Namespacing <a class="header-anchor" href="#namespacing" aria-hidden="true">#</a></h2><p>By default, actions and mutations are still registered under the <strong>global namespace</strong> - this allows multiple modules to react to the same action/mutation type. Getters are also registered in the global namespace by default. However, this currently has no functional purpose (it&#39;s as is to avoid breaking changes). You must be careful not to define two getters with the same name in different, non-namespaced modules, resulting in an error.</p><p>If you want your modules to be more self-contained or reusable, you can mark it as namespaced with <code>namespaced: true</code>. When the module is registered, all of its getters, actions and mutations will be automatically namespaced based on the path the module is registered at. For example:</p><div class="language-js"><pre><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// module assets</span>
      <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// module state is already nested and not affected by namespace option</span>
      <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">isAdmin</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; getters[&#39;account/isAdmin&#39;]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">login</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; dispatch(&#39;account/login&#39;)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">login</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; commit(&#39;account/login&#39;)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// nested modules</span>
      <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// inherits the namespace from parent module</span>
        <span class="token literal-property property">myPage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">profile</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; getters[&#39;account/profile&#39;]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// further nest the namespace</span>
        <span class="token literal-property property">posts</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

          <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">popular</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; getters[&#39;account/posts/popular&#39;]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Namespaced getters and actions will receive localized <code>getters</code>, <code>dispatch</code> and <code>commit</code>. In other words, you can use the module assets without writing prefix in the same module. Toggling between namespaced or not does not affect the code inside the module.</p><h3 id="accessing-global-assets-in-namespaced-modules" tabindex="-1">Accessing Global Assets in Namespaced Modules <a class="header-anchor" href="#accessing-global-assets-in-namespaced-modules" aria-hidden="true">#</a></h3><p>If you want to use global state and getters, <code>rootState</code> and <code>rootGetters</code> are passed as the 3rd and 4th arguments to getter functions, and also exposed as properties on the <code>context</code> object passed to action functions.</p><p>To dispatch actions or commit mutations in the global namespace, pass <code>{ root: true }</code> as the 3rd argument to <code>dispatch</code> and <code>commit</code>.</p><div class="language-js"><pre><code><span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \`getters\` is localized to this module&#39;s getters</span>
      <span class="token comment">// you can use rootGetters via 4th argument of getters</span>
      <span class="token function">someGetter</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> rootGetters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        getters<span class="token punctuation">.</span>someOtherGetter <span class="token comment">// -&gt; &#39;foo/someOtherGetter&#39;</span>
        rootGetters<span class="token punctuation">.</span>someOtherGetter <span class="token comment">// -&gt; &#39;someOtherGetter&#39;</span>
        rootGetters<span class="token punctuation">[</span><span class="token string">&#39;bar/someOtherGetter&#39;</span><span class="token punctuation">]</span> <span class="token comment">// -&gt; &#39;bar/someOtherGetter&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">someOtherGetter</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// dispatch and commit are also localized for this module</span>
      <span class="token comment">// they will accept \`root\` option for the root dispatch/commit</span>
      <span class="token function">someAction</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> rootGetters <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        getters<span class="token punctuation">.</span>someGetter <span class="token comment">// -&gt; &#39;foo/someGetter&#39;</span>
        rootGetters<span class="token punctuation">.</span>someGetter <span class="token comment">// -&gt; &#39;someGetter&#39;</span>
        rootGetters<span class="token punctuation">[</span><span class="token string">&#39;bar/someGetter&#39;</span><span class="token punctuation">]</span> <span class="token comment">// -&gt; &#39;bar/someGetter&#39;</span>

        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;someOtherAction&#39;</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; &#39;foo/someOtherAction&#39;</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;someOtherAction&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; &#39;someOtherAction&#39;</span>

        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;someMutation&#39;</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; &#39;foo/someMutation&#39;</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;someMutation&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; &#39;someMutation&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">someOtherAction</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="register-global-action-in-namespaced-modules" tabindex="-1">Register Global Action in Namespaced Modules <a class="header-anchor" href="#register-global-action-in-namespaced-modules" aria-hidden="true">#</a></h3><p>If you want to register global actions in namespaced modules, you can mark it with <code>root: true</code> and place the action definition to function <code>handler</code>. For example:</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">someOtherAction</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>dispatch<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;someAction&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">someAction</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function">handler</span> <span class="token punctuation">(</span><span class="token parameter">namespacedContext<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; &#39;someAction&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="binding-helpers-with-namespace" tabindex="-1">Binding Helpers with Namespace <a class="header-anchor" href="#binding-helpers-with-namespace" aria-hidden="true">#</a></h3><p>When binding a namespaced module to components with the <code>mapState</code>, <code>mapGetters</code>, <code>mapActions</code> and <code>mapMutations</code> helpers, it can get a bit verbose:</p><div class="language-js"><pre><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>some<span class="token punctuation">.</span>nested<span class="token punctuation">.</span>module<span class="token punctuation">.</span>a<span class="token punctuation">,</span>
    <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>some<span class="token punctuation">.</span>nested<span class="token punctuation">.</span>module<span class="token punctuation">.</span>b
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">&#39;some/nested/module/someGetter&#39;</span><span class="token punctuation">,</span> <span class="token comment">// -&gt; this[&#39;some/nested/module/someGetter&#39;]</span>
    <span class="token string">&#39;some/nested/module/someOtherGetter&#39;</span><span class="token punctuation">,</span> <span class="token comment">// -&gt; this[&#39;some/nested/module/someOtherGetter&#39;]</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">&#39;some/nested/module/foo&#39;</span><span class="token punctuation">,</span> <span class="token comment">// -&gt; this[&#39;some/nested/module/foo&#39;]()</span>
    <span class="token string">&#39;some/nested/module/bar&#39;</span> <span class="token comment">// -&gt; this[&#39;some/nested/module/bar&#39;]()</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>In such cases, you can pass the module namespace string as the first argument to the helpers so that all bindings are done using that module as the context. The above can be simplified to:</p><div class="language-js"><pre><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&#39;some/nested/module&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>a<span class="token punctuation">,</span>
    <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>b
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token string">&#39;some/nested/module&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;someGetter&#39;</span><span class="token punctuation">,</span> <span class="token comment">// -&gt; this.someGetter</span>
    <span class="token string">&#39;someOtherGetter&#39;</span><span class="token punctuation">,</span> <span class="token comment">// -&gt; this.someOtherGetter</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">&#39;some/nested/module&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token comment">// -&gt; this.foo()</span>
    <span class="token string">&#39;bar&#39;</span> <span class="token comment">// -&gt; this.bar()</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Furthermore, you can create namespaced helpers by using <code>createNamespacedHelpers</code>. It returns an object having new component binding helpers that are bound with the given namespace value:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createNamespacedHelpers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapActions <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createNamespacedHelpers</span><span class="token punctuation">(</span><span class="token string">&#39;some/nested/module&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// look up in \`some/nested/module\`</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>a<span class="token punctuation">,</span>
      <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>b
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// look up in \`some/nested/module\`</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;bar&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="caveat-for-plugin-developers" tabindex="-1">Caveat for Plugin Developers <a class="header-anchor" href="#caveat-for-plugin-developers" aria-hidden="true">#</a></h3><p>You may care about unpredictable namespacing for your modules when you create a <a href="./plugins.html">plugin</a> that provides the modules and let users add them to a Vuex store. Your modules will be also namespaced if the plugin users add your modules under a namespaced module. To adapt this situation, you may need to receive a namespace value via your plugin option:</p><div class="language-js"><pre><code><span class="token comment">// get namespace value via plugin option</span>
<span class="token comment">// and returns Vuex plugin function</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createPlugin</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// add namespace to plugin module&#39;s types</span>
    <span class="token keyword">const</span> namespace <span class="token operator">=</span> options<span class="token punctuation">.</span>namespace <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>namespace <span class="token operator">+</span> <span class="token string">&#39;pluginAction&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="dynamic-module-registration" tabindex="-1">Dynamic Module Registration <a class="header-anchor" href="#dynamic-module-registration" aria-hidden="true">#</a></h2><p>You can register a module <strong>after</strong> the store has been created with the <code>store.registerModule</code> method:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* options */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// register a module \`myModule\`</span>
store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">&#39;myModule&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// register a nested module \`nested/myModule\`</span>
store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;nested&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;myModule&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>The module&#39;s state will be exposed as <code>store.state.myModule</code> and <code>store.state.nested.myModule</code>.</p><p>Dynamic module registration makes it possible for other Vue plugins to also leverage Vuex for state management by attaching a module to the application&#39;s store. For example, the <a href="https://github.com/vuejs/vuex-router-sync" target="_blank" rel="noopener noreferrer"><code>vuex-router-sync</code></a> library integrates vue-router with vuex by managing the application&#39;s route state in a dynamically attached module.</p><p>You can also remove a dynamically registered module with <code>store.unregisterModule(moduleName)</code>. Note you cannot remove static modules (declared at store creation) with this method.</p><p>Note that you may check if the module is already registered to the store or not via <code>store.hasModule(moduleName)</code> method. One thing to keep in mind is that nested modules should be passed as arrays for both the <code>registerModule</code> and <code>hasModule</code> and not as a string with the path to the module.</p><h3 id="preserving-state" tabindex="-1">Preserving state <a class="header-anchor" href="#preserving-state" aria-hidden="true">#</a></h3><p>It may be likely that you want to preserve the previous state when registering a new module, such as preserving state from a Server Side Rendered app. You can achieve this with <code>preserveState</code> option: <code>store.registerModule(&#39;a&#39;, module, { preserveState: true })</code></p><p>When you set <code>preserveState: true</code>, the module is registered, actions, mutations and getters are added to the store, but the state is not. It&#39;s assumed that your store state already contains state for that module and you don&#39;t want to overwrite it.</p><h2 id="module-reuse" tabindex="-1">Module Reuse <a class="header-anchor" href="#module-reuse" aria-hidden="true">#</a></h2><p>Sometimes we may need to create multiple instances of a module, for example:</p><ul><li>Creating multiple stores that use the same module (e.g. To <a href="https://ssr.vuejs.org/en/structure.html#avoid-stateful-singletons" target="_blank" rel="noopener noreferrer">avoid stateful singletons in the SSR</a> when the <code>runInNewContext</code> option is <code>false</code> or <code>&#39;once&#39;</code>);</li><li>Register the same module multiple times in the same store.</li></ul><p>If we use a plain object to declare the state of the module, then that state object will be shared by reference and cause cross store/module state pollution when it&#39;s mutated.</p><p>This is actually the exact same problem with <code>data</code> inside Vue components. So the solution is also the same - use a function for declaring module state (supported in 2.3.0+):</p><div class="language-js"><pre><code><span class="token keyword">const</span> MyReusableModule <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// mutations, actions, getters...</span>
<span class="token punctuation">}</span>
</code></pre></div>`,50),o=[p];function c(l,u,r,i,k,d){return a(),s("div",null,o)}var h=n(e,[["render",c]]);export{g as __pageData,h as default};
