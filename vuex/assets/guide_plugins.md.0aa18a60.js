import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const m='{"title":"Plugins","description":"","frontmatter":{},"headers":[{"level":2,"title":"Committing Mutations Inside Plugins","slug":"committing-mutations-inside-plugins"},{"level":2,"title":"Taking State Snapshots","slug":"taking-state-snapshots"},{"level":2,"title":"Built-in Logger Plugin","slug":"built-in-logger-plugin"}],"relativePath":"guide/plugins.md","lastUpdated":1702210160123}',p={},o=t(`<h1 id="plugins" tabindex="-1">Plugins <a class="header-anchor" href="#plugins" aria-hidden="true">#</a></h1><div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/cvp8ZkCR" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div><p>Vuex stores accept the <code>plugins</code> option that exposes hooks for each mutation. A Vuex plugin is simply a function that receives the store as the only argument:</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">myPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// called when the store is initialized</span>
  store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// called after every mutation.</span>
    <span class="token comment">// The mutation comes in the format of \`{ type, payload }\`.</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>And can be used like this:</p><div class="language-js"><pre><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>myPlugin<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="committing-mutations-inside-plugins" tabindex="-1">Committing Mutations Inside Plugins <a class="header-anchor" href="#committing-mutations-inside-plugins" aria-hidden="true">#</a></h2><p>Plugins are not allowed to directly mutate state - similar to your components, they can only trigger changes by committing mutations.</p><p>By committing mutations, a plugin can be used to sync a data source to the store. For example, to sync a websocket data source to the store (this is just a contrived example, in reality the <code>createWebSocketPlugin</code> function can take some additional options for more complex tasks):</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">createWebSocketPlugin</span> <span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;receiveData&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">mutation</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;UPDATE_DATA&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        socket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span> mutation<span class="token punctuation">.</span>payload<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token function">createWebSocketPlugin</span><span class="token punctuation">(</span>socket<span class="token punctuation">)</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>plugin<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="taking-state-snapshots" tabindex="-1">Taking State Snapshots <a class="header-anchor" href="#taking-state-snapshots" aria-hidden="true">#</a></h2><p>Sometimes a plugin may want to receive &quot;snapshots&quot; of the state, and also compare the post-mutation state with pre-mutation state. To achieve that, you will need to perform a deep-copy on the state object:</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">myPluginWithSnapshot</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> prevState <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
  store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> nextState <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

    <span class="token comment">// compare \`prevState\` and \`nextState\`...</span>

    <span class="token comment">// save state for next mutation</span>
    prevState <span class="token operator">=</span> nextState
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>Plugins that take state snapshots should be used only during development.</strong> When using webpack or Browserify, we can let our build tools handle that for us:</p><div class="language-js"><pre><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span>
    <span class="token operator">?</span> <span class="token punctuation">[</span>myPluginWithSnapshot<span class="token punctuation">]</span>
    <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>The plugin will be used by default. For production, you will need <a href="https://webpack.js.org/plugins/define-plugin/" target="_blank" rel="noopener noreferrer">DefinePlugin</a> for webpack or <a href="https://github.com/hughsk/envify" target="_blank" rel="noopener noreferrer">envify</a> for Browserify to convert the value of <code>process.<wbr>env.NODE_ENV !== &#39;production&#39;</code> to <code>false</code> for the final build.</p><h2 id="built-in-logger-plugin" tabindex="-1">Built-in Logger Plugin <a class="header-anchor" href="#built-in-logger-plugin" aria-hidden="true">#</a></h2><p>Vuex comes with a logger plugin for common debugging usage:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createLogger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>The <code>createLogger</code> function takes a few options:</p><div class="language-js"><pre><code><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">collapsed</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// auto-expand logged mutations</span>
  <span class="token function">filter</span> <span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span> stateBefore<span class="token punctuation">,</span> stateAfter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// returns \`true\` if a mutation should be logged</span>
    <span class="token comment">// \`mutation\` is a \`{ type, payload }\`</span>
    <span class="token keyword">return</span> mutation<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&quot;aBlocklistedMutation&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">actionFilter</span> <span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// same as \`filter\` but for actions</span>
    <span class="token comment">// \`action\` is a \`{ type, payload }\`</span>
    <span class="token keyword">return</span> action<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&quot;aBlocklistedAction&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">transformer</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// transform the state before logging it.</span>
    <span class="token comment">// for example return only a specific sub-tree</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>subTree
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mutationTransformer</span> <span class="token punctuation">(</span><span class="token parameter">mutation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// mutations are logged in the format of \`{ type, payload }\`</span>
    <span class="token comment">// we can format it any way we want.</span>
    <span class="token keyword">return</span> mutation<span class="token punctuation">.</span>type
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">actionTransformer</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Same as mutationTransformer but for actions</span>
    <span class="token keyword">return</span> action<span class="token punctuation">.</span>type
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">logActions</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Log Actions</span>
  <span class="token literal-property property">logMutations</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Log mutations</span>
  <span class="token literal-property property">logger</span><span class="token operator">:</span> console<span class="token punctuation">,</span> <span class="token comment">// implementation of the \`console\` API, default \`console\`</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>The logger file can also be included directly via a <code>&lt;script&gt;</code> tag, and will expose the <code>createVuexLogger</code> function globally.</p><p>Note the logger plugin takes state snapshots, so use it only during development.</p>`,24),e=[o];function c(l,u,i,r,k,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
