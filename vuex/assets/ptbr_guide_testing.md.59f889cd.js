import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const g='{"title":"Testando","description":"","frontmatter":{},"headers":[{"level":2,"title":"Testando Muta\xE7\xF5es","slug":"testando-mutacoes"},{"level":2,"title":"Testando A\xE7\xF5es","slug":"testando-acoes"},{"level":2,"title":"Testando Getters","slug":"testando-getters"},{"level":2,"title":"Executando Testes","slug":"executando-testes"},{"level":3,"title":"Executando no Node","slug":"executando-no-node"},{"level":3,"title":"Executando no Navegador","slug":"executando-no-navegador"},{"level":3,"title":"Executando no Navegador com Karma + karma-webpack","slug":"executando-no-navegador-com-karma-karma-webpack"}],"relativePath":"ptbr/guide/testing.md","lastUpdated":1702210160134}',p={},o=t(`<h1 id="testando" tabindex="-1">Testando <a class="header-anchor" href="#testando" aria-hidden="true">#</a></h1><div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/cPGkpJhq" target="_blank" rel="noopener noreferrer">Tente esta li\xE7\xE3o no Scrimba</a></div><p>As partes principais que queremos testar unit\xE1riamente no Vuex s\xE3o muta\xE7\xF5es e a\xE7\xF5es.</p><h2 id="testando-mutacoes" tabindex="-1">Testando Muta\xE7\xF5es <a class="header-anchor" href="#testando-mutacoes" aria-hidden="true">#</a></h2><p>As muta\xE7\xF5es s\xE3o muito simples de testar, porque s\xE3o apenas fun\xE7\xF5es que dependem completamente de seus argumentos. Um truque \xE9 que se voc\xEA estiver usando m\xF3dulos ES2015 e colocar suas muta\xE7\xF5es dentro do arquivo <code>store.js</code>, al\xE9m da exporta\xE7\xE3o padr\xE3o, voc\xEA tamb\xE9m deve exportar as muta\xE7\xF5es como uma exporta\xE7\xE3o nomeada:</p><div class="language-js"><pre><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token comment">// exporta \`muta\xE7\xF5es\` como uma exporta\xE7\xE3o nomeada</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>
  mutations
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Exemplo de teste de uma muta\xE7\xE3o usando <em>Mocha</em> + <em>Chai</em> (voc\xEA pode usar qualquer biblioteca de <em>framework</em>/<em>assertion</em> que desejar):</p><div class="language-js"><pre><code><span class="token comment">// mutations.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>count<span class="token operator">++</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// mutations.spec.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chai&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mutations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token comment">// desestrutura \`muta\xE7\xF5es\` atribuidas</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> increment <span class="token punctuation">}</span> <span class="token operator">=</span> mutations

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;mutations&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;INCREMENT&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// estado mockado (ou simulado)</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
    <span class="token comment">// aplica a muta\xE7\xE3o</span>
    <span class="token function">increment</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
    <span class="token comment">// afirma o resultado</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="testando-acoes" tabindex="-1">Testando A\xE7\xF5es <a class="header-anchor" href="#testando-acoes" aria-hidden="true">#</a></h2><p>As a\xE7\xF5es podem ser um pouco mais complicadas porque podem chamar as APIs externas. Ao testar a\xE7\xF5es, geralmente precisamos fazer algum n\xEDvel de <em>mocking</em> - por exemplo, podemos abistrair as chamadas da API em um servi\xE7o e simular (ou mockar (<em>mock</em>)) esse servi\xE7o dentro de nossos testes. A fim de simular facilmente as depend\xEAncias, podemos usar o <em>webpack</em> e <a href="https://github.com/plasticine/inject-loader" target="_blank" rel="noopener noreferrer">inject-loader</a> para empacotar (ou criar um <em>bundle</em> dos) nossos arquivos de teste.</p><p>Exemplo de teste de uma a\xE7\xE3o ass\xEDncrona:</p><div class="language-js"><pre><code><span class="token comment">// actions.js</span>
<span class="token keyword">import</span> shop <span class="token keyword">from</span> <span class="token string">&#39;../api/shop&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getAllProducts</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;REQUEST_PRODUCTS&#39;</span><span class="token punctuation">)</span>
  shop<span class="token punctuation">.</span><span class="token function">getProducts</span><span class="token punctuation">(</span><span class="token parameter">products</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;RECEIVE_PRODUCTS&#39;</span><span class="token punctuation">,</span> products<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// actions.spec.js</span>

<span class="token comment">// use a sintaxe &#39;require&#39; para inline loaders.</span>
<span class="token comment">// com inject-loader, isso retorna um factory de m\xF3dulos</span>
<span class="token comment">// que nos permite injetar depend\xEAncias mockadas (ou simuladas).</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chai&#39;</span>
<span class="token keyword">const</span> actionsInjector <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;inject-loader!./actions&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// cria o m\xF3dulo com nossos mocks</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token function">actionsInjector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&#39;../api/shop&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getProducts</span> <span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token comment">/* resposta simulada */</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// m\xE9todo auxiliar para teste de a\xE7\xE3o com muta\xE7\xF5es esperadas</span>
<span class="token keyword">const</span> <span class="token function-variable function">testAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> state<span class="token punctuation">,</span> expectedMutations<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// confirma\xE7\xE3o simulada (ou mock commit)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">commit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mutation <span class="token operator">=</span> expectedMutations<span class="token punctuation">[</span>count<span class="token punctuation">]</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>deep<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>payload<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">done</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    count<span class="token operator">++</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;=</span> expectedMutations<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// chame a a\xE7\xE3o com store mockado (ou simulado) e argumentos</span>
  <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">{</span> commit<span class="token punctuation">,</span> state <span class="token punctuation">}</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>

  <span class="token comment">// verifica se nenhuma muta\xE7\xE3o deveria ter sido despachada</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>expectedMutations<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;actions&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;getAllProducts&#39;</span><span class="token punctuation">,</span> <span class="token parameter">done</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">testAction</span><span class="token punctuation">(</span>actions<span class="token punctuation">.</span>getAllProducts<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;REQUEST_PRODUCTS&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;RECEIVE_PRODUCTS&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* resposta simulada */</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> done<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Se voc\xEA tem <em>spies</em> dispon\xEDveis em seu ambiente de teste (por exemplo via <a href="http://sinonjs.org/" target="_blank" rel="noopener noreferrer">Sinon.JS</a>), voc\xEA pode us\xE1-los em vez do m\xE9todo auxiliar <code>testAction</code>:</p><div class="language-js"><pre><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;actions&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;getAllProducts&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> commit <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">spy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    actions<span class="token punctuation">.</span><span class="token function">getAllProducts</span><span class="token punctuation">(</span><span class="token punctuation">{</span> commit<span class="token punctuation">,</span> state <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>commit<span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>deep<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token string">&#39;REQUEST_PRODUCTS&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">&#39;RECEIVE_PRODUCTS&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">/* resposta simulada */</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="testando-getters" tabindex="-1">Testando Getters <a class="header-anchor" href="#testando-getters" aria-hidden="true">#</a></h2><p>Se seus <em>getters</em> tiverem um c\xF3digo complexo, vale a pena test\xE1-los. Os <em>Getters</em> tamb\xE9m s\xE3o muito simples de testar pelo mesmo motivo que as muta\xE7\xF5es.</p><p>Exemplo testando um <em>getter</em>:</p><div class="language-js"><pre><code><span class="token comment">// getters.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">filteredProducts</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> <span class="token punctuation">{</span> filterCategory <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>products<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">product</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> product<span class="token punctuation">.</span>category <span class="token operator">===</span> filterCategory
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// getters.spec.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chai&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./getters&#39;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;getters&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;filteredProducts&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// estado mockado (ou simulado)</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">products</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Apple&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;fruit&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Orange&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;fruit&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Carrot&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;vegetable&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// getter mockado (ou simulado)</span>
    <span class="token keyword">const</span> filterCategory <span class="token operator">=</span> <span class="token string">&#39;fruit&#39;</span>

    <span class="token comment">// obtem o resultado do getter</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> getters<span class="token punctuation">.</span><span class="token function">filteredProducts</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span> filterCategory <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// afirma o resultado</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>deep<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Apple&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;fruit&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Orange&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;fruit&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="executando-testes" tabindex="-1">Executando Testes <a class="header-anchor" href="#executando-testes" aria-hidden="true">#</a></h2><p>Se suas muta\xE7\xF5es e a\xE7\xF5es estiverem escritas corretamente, os testes n\xE3o devem ter depend\xEAncia direta das APIs do navegador ap\xF3s uma simula\xE7\xE3o apropriada. Assim, voc\xEA pode simplesmente empacotar (ou criar um <em>bundle</em>) dos testes com o <em>webpack</em> e execut\xE1-lo diretamente no <em>Node</em>. Alternativamente, voc\xEA pode usar <code>mocha-loader</code> ou <em>Karma</em> + <code>karma-webpack</code> para executar os testes em navegadores reais.</p><h3 id="executando-no-node" tabindex="-1">Executando no Node <a class="header-anchor" href="#executando-no-node" aria-hidden="true">#</a></h3><p>Crie a seguinte configura\xE7\xE3o de <em>webpack</em> (juntamente com <a href="https://babeljs.io/docs/usage/babelrc/" target="_blank" rel="noopener noreferrer"><code>.babelrc</code></a>):</p><div class="language-js"><pre><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./test.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> __dirname<span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;test-bundle.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loaders</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Ent\xE3o:</p><div class="language-bash"><pre><code>webpack
mocha test-bundle.js
</code></pre></div><h3 id="executando-no-navegador" tabindex="-1">Executando no Navegador <a class="header-anchor" href="#executando-no-navegador" aria-hidden="true">#</a></h3><ol><li>Instale o <code>mocha-loader</code>.</li><li>Mude o <code>entry</code> da configura\xE7\xE3o do <em>webpack</em> acima para <code>&#39;mocha-loader!babel-loader!./test.js&#39;</code>.</li><li>Inicie o <code>webpack-dev-server</code> usando a configura\xE7\xE3o.</li><li>V\xE1 para <code>localhost:8080/webpack-dev-server/test-bundle</code>.</li></ol><h3 id="executando-no-navegador-com-karma-karma-webpack" tabindex="-1">Executando no Navegador com Karma + karma-webpack <a class="header-anchor" href="#executando-no-navegador-com-karma-karma-webpack" aria-hidden="true">#</a></h3><p>Consulte a instala\xE7\xE3o na <a href="https://vue-loader.vuejs.org/pt_BR/workflow/testing.html" target="_blank" rel="noopener noreferrer">documenta\xE7\xE3o do vue-loader</a>.</p>`,32),e=[o];function c(u,l,r,i,k,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{g as __pageData,y as default};
