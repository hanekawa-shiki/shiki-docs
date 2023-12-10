import{_ as n,y as s,x as a,W as o}from"./plugin-vue_export-helper.0b0d78d5.js";const g='{"title":"M\xF3dulos","description":"","frontmatter":{},"headers":[{"level":2,"title":"Estado Local do M\xF3dulo","slug":"estado-local-do-modulo"},{"level":2,"title":"Namespacing","slug":"namespacing"},{"level":3,"title":"Acessando Recursos Globais em M\xF3dulos com Namespaces","slug":"acessando-recursos-globais-em-modulos-com-namespaces"},{"level":3,"title":"Registrar A\xE7\xE3o Global em M\xF3dulos com Namespaces","slug":"registrar-acao-global-em-modulos-com-namespaces"},{"level":3,"title":"Vinculando M\xE9todos Auxiliares com Namespace","slug":"vinculando-metodos-auxiliares-com-namespace"},{"level":3,"title":"Advert\xEAncia para Desenvolvedores de Plug-ins","slug":"advertencia-para-desenvolvedores-de-plug-ins"},{"level":2,"title":"Registro de M\xF3dulo Din\xE2mico","slug":"registro-de-modulo-dinamico"},{"level":3,"title":"Preservando o estado","slug":"preservando-o-estado"},{"level":2,"title":"Reutiliza\xE7\xE3o do M\xF3dulo","slug":"reutilizacao-do-modulo"}],"relativePath":"ptbr/guide/modules.md","lastUpdated":1702210160133}',t={},e=o(`<h1 id="modulos" tabindex="-1">M\xF3dulos <a class="header-anchor" href="#modulos" aria-hidden="true">#</a></h1><div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/cqKK4psq" target="_blank" rel="noopener noreferrer">Tente esta li\xE7\xE3o no Scrimba</a></div><p>Devido ao uso de uma \xFAnica \xE1rvore de estado, todos os estados da nossa aplica\xE7\xE3o est\xE3o contidos dentro de um grande objeto. No entanto, \xE0 medida que nossa aplica\xE7\xE3o cresce em escala, o <em>store</em> pode ficar realmente inchado.</p><p>Para ajudar com isso, o Vuex nos permite dividir nosso <em>store</em> em <strong>m\xF3dulos</strong>. Cada m\xF3dulo pode conter seu pr\xF3prio estado, muta\xE7\xF5es, a\xE7\xF5es, <em>getters</em> e at\xE9 m\xF3dulos aninhados - o padr\xE3o se repete em todo o fluxo abaixo:</p><div class="language-js"><pre><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre></div><h2 id="estado-local-do-modulo" tabindex="-1">Estado Local do M\xF3dulo <a class="header-anchor" href="#estado-local-do-modulo" aria-hidden="true">#</a></h2><p>Dentro das muta\xE7\xF5es e <em>getters</em> de um m\xF3dulo, o 1\xBA argumento recebido ser\xE1 <strong>o estado local do m\xF3dulo</strong>.</p><div class="language-js"><pre><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \`state\` \xE9 o estado local do m\xF3dulo</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">doubleCount</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Da mesma forma, dentro das a\xE7\xF5es do m\xF3dulo, <code>context.state</code> ir\xE1 expor o estado local, e o estado raiz ser\xE1 exposto como <code>context.rootState</code>:</p><div class="language-js"><pre><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">incrementIfOddOnRootSum</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> state<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> rootState <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> rootState<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Al\xE9m disso, dentro do m\xF3dulo <em>getters</em>, o estado raiz ser\xE1 exibido como seu 3\xBA argumento:</p><div class="language-js"><pre><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">sumWithRootCount</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> rootState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> rootState<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="namespacing" tabindex="-1">Namespacing <a class="header-anchor" href="#namespacing" aria-hidden="true">#</a></h2><p>Por padr\xE3o, a\xE7\xF5es, muta\xE7\xF5es e <em>getters</em> dentro dos m\xF3dulos ainda s\xE3o registrados sob o <strong><em>namespace</em> global</strong> - isso permite que v\xE1rios m\xF3dulos reajam ao mesmo tipo de a\xE7\xE3o/muta\xE7\xE3o.</p><p>Se voc\xEA quer que seus m\xF3dulos sejam mais independentes ou reutiliz\xE1veis, voc\xEA pode us\xE1-los com <em>namespaces</em> atrav\xE9s do <code>namespaced: true</code>. Quando o m\xF3dulo \xE9 registrado, todos os <em>getters</em>, a\xE7\xF5es e muta\xE7\xF5es ter\xE3o automaticamente o <em>namespace</em> com base no caminho no qual o m\xF3dulo est\xE1 registrado. Por exemplo:</p><div class="language-js"><pre><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// recursos do m\xF3dulo</span>
      <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// o estado do m\xF3dulo j\xE1 est\xE1 aninhado e n\xE3o \xE9 afetado pela op\xE7\xE3o namespace</span>
      <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">isAdmin</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; getters[&#39;account/isAdmin&#39;]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">login</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; dispatch(&#39;account/login&#39;)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">login</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; commit(&#39;account/login&#39;)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// m\xF3dulos aninhados</span>
      <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// herda o namespace do m\xF3dulo pai</span>
        <span class="token literal-property property">myPage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">profile</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; getters[&#39;account/profile&#39;]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// aninhar ainda mais o namespace</span>
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
</code></pre></div><p>Os <em>getters</em> e as a\xE7\xF5es com <em>namespace</em> receber\xE3o <code>getters</code>, <code>dispatch</code> e <code>commit</code> localizados. Em outras palavras, voc\xEA pode usar os recursos do m\xF3dulo sem escrever prefixo no mesmo m\xF3dulo. Alternar entre com <em>namespace</em> ou n\xE3o, n\xE3o afeta o c\xF3digo dentro do m\xF3dulo.</p><h3 id="acessando-recursos-globais-em-modulos-com-namespaces" tabindex="-1">Acessando Recursos Globais em M\xF3dulos com Namespaces <a class="header-anchor" href="#acessando-recursos-globais-em-modulos-com-namespaces" aria-hidden="true">#</a></h3><p>Se voc\xEA quiser usar estado global e <em>getters</em>, <code>rootState</code> e <code>rootGetters</code> s\xE3o passados como o 3\xBA e 4\xBA argumentos para fun\xE7\xF5es <em>getter</em>, e tamb\xE9m expostos como propriedades no objeto <code>context</code> passado para fun\xE7\xF5es de a\xE7\xE3o.</p><p>Para despachar a\xE7\xF5es ou confirmar (ou fazer um <em>commit</em> de) muta\xE7\xF5es no <em>namespace</em> global, passe <code>{root: true}</code> como o 3\xBA argumento para <code>dispatch</code> e <code>commit</code>.</p><div class="language-js"><pre><code><span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \`getters\` est\xE1 localizado nos getters deste m\xF3dulo</span>
      <span class="token comment">// voc\xEA pode usar rootGetters como 4\xBA argumento de getters</span>
      <span class="token function">someGetter</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> rootGetters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        getters<span class="token punctuation">.</span>someOtherGetter <span class="token comment">// -&gt; &#39;foo/someOtherGetter&#39;</span>
        rootGetters<span class="token punctuation">.</span>someOtherGetter <span class="token comment">// -&gt; &#39;someOtherGetter&#39;</span>
        rootGetters<span class="token punctuation">[</span><span class="token string">&#39;bar/someOtherGetter&#39;</span><span class="token punctuation">]</span> <span class="token comment">// -&gt; &#39;bar/someOtherGetter&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">someOtherGetter</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// dispatch e commit tamb\xE9m est\xE3o localizados para este m\xF3dulo</span>
      <span class="token comment">// eles aceitar\xE3o a op\xE7\xE3o \`root\` para o dispatch/commit raiz</span>
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
</code></pre></div><h3 id="registrar-acao-global-em-modulos-com-namespaces" tabindex="-1">Registrar A\xE7\xE3o Global em M\xF3dulos com Namespaces <a class="header-anchor" href="#registrar-acao-global-em-modulos-com-namespaces" aria-hidden="true">#</a></h3><p>Se voc\xEA quiser registrar a\xE7\xF5es globais em m\xF3dulos com <em>namespaces</em>, voc\xEA pode marc\xE1-lo com <code>root: true</code> e colocar a defini\xE7\xE3o de a\xE7\xE3o na fun\xE7\xE3o <code>handler</code>. Por exemplo:</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
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
</code></pre></div><h3 id="vinculando-metodos-auxiliares-com-namespace" tabindex="-1">Vinculando M\xE9todos Auxiliares com Namespace <a class="header-anchor" href="#vinculando-metodos-auxiliares-com-namespace" aria-hidden="true">#</a></h3><p>Ao vincular um m\xF3dulo com <em>namespace</em> aos componentes com os auxiliares <code>mapState</code>, <code>mapGetters</code>, <code>mapActions</code> e <code>mapMutations</code>, ele pode ficar um pouco verboso:</p><div class="language-js"><pre><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
</code></pre></div><p>Nesses casos, voc\xEA pode passar a <em>String</em> do <em>namespace</em> do m\xF3dulo como o 1\xBA argumento para os m\xE9todos auxiliares, de modo que todas as liga\xE7\xF5es sejam feitas usando esse m\xF3dulo como o contexto. O acima pode ser simplificado para:</p><div class="language-js"><pre><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
</code></pre></div><p>Al\xE9m disso, voc\xEA pode criar m\xE9todos auxiliares com <em>namespace</em> usando <code>createNamespacedHelpers</code>. Ele retorna um objeto com novos m\xE9todos auxiliares dos componentes vinculados ao valor do <em>namespace</em> fornecido:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createNamespacedHelpers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapActions <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createNamespacedHelpers</span><span class="token punctuation">(</span><span class="token string">&#39;some/nested/module&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// procura em \`some/nested/module\`</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>a<span class="token punctuation">,</span>
      <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>b
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// procura em \`some/nested/module\`</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;bar&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="advertencia-para-desenvolvedores-de-plug-ins" tabindex="-1">Advert\xEAncia para Desenvolvedores de Plug-ins <a class="header-anchor" href="#advertencia-para-desenvolvedores-de-plug-ins" aria-hidden="true">#</a></h3><p>Voc\xEA pode se preocupar com <em>namespacing</em> imprevis\xEDvel para seus m\xF3dulos ao criar um [plugin] (<a href="http://plugins.md" target="_blank" rel="noopener noreferrer">plugins.md</a>) que fornece os m\xF3dulos e permite que os usu\xE1rios os adicionem a um <em>store</em> Vuex. Seus m\xF3dulos tamb\xE9m ter\xE3o <em>namespaces</em> se os usu\xE1rios do <em>plugin</em> adicionarem seus m\xF3dulos em um m\xF3dulo com <em>namespace</em>. Para se adaptar a essa situa\xE7\xE3o, pode ser necess\xE1rio receber um valor de <em>namespace</em> por meio das op\xE7\xF5es do seu <em>plugin</em>:</p><div class="language-js"><pre><code><span class="token comment">// obtem valor do namespace via op\xE7\xE3o do plugin</span>
<span class="token comment">// e retorna a fun\xE7\xE3o plugin do Vuex</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createPlugin</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// adiciona namespace aos tipos de m\xF3dulos do plugin</span>
    <span class="token keyword">const</span> namespace <span class="token operator">=</span> options<span class="token punctuation">.</span>namespace <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>namespace <span class="token operator">+</span> <span class="token string">&#39;pluginAction&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="registro-de-modulo-dinamico" tabindex="-1">Registro de M\xF3dulo Din\xE2mico <a class="header-anchor" href="#registro-de-modulo-dinamico" aria-hidden="true">#</a></h2><p>Voc\xEA pode registrar um m\xF3dulo <strong>ap\xF3s</strong> o <em>store</em> ser criado com o m\xE9todo <code>store.registerModule</code>:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* options */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// registra um m\xF3dulo \`myModule\`</span>
store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">&#39;myModule&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// registra um m\xF3dulo aninhado \`nested/myModule\`</span>
store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;nested&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;myModule&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Os estados do m\xF3dulo ser\xE3o expostos como <code>store.state.myModule</code> e <code>store.state.nested.myModule</code>.</p><p>O registro de m\xF3dulo din\xE2mico possibilita que outros <em>plugins</em> Vue aproveitem tamb\xE9m o Vuex para gerenciamento de estado, anexando um m\xF3dulo ao <em>store</em> da aplica\xE7\xE3o. Por exemplo, a biblioteca <a href="https://github.com/vuejs/vuex-router-sync" target="_blank" rel="noopener noreferrer"><code>vuex-router-sync</code></a> integra o vue-router com o vuex gerenciando o estado da rota da aplica\xE7\xE3o em um m\xF3dulo conectado dinamicamente.</p><p>Voc\xEA tamb\xE9m pode remover um m\xF3dulo dinamicamente registrado com o <code>store.unregisterModule(moduleName)</code>. Note que voc\xEA n\xE3o pode remover m\xF3dulos est\xE1ticos (declarados na cria\xE7\xE3o do <em>store</em>) com este m\xE9todo.</p><p>Observe que voc\xEA pode verificar se o m\xF3dulo j\xE1 est\xE1 registrado no <em>store</em> ou n\xE3o atrav\xE9s do m\xE9todo <code>store.hasModule (moduleName)</code>.</p><h3 id="preservando-o-estado" tabindex="-1">Preservando o estado <a class="header-anchor" href="#preservando-o-estado" aria-hidden="true">#</a></h3><p>\xC9 bem prov\xE1vel que voc\xEA queira preservar o estado anterior ao registrar um novo m\xF3dulo, como preservar o estado de uma aplica\xE7\xE3o Renderizada no Lado do Servidor (<em>Server</em> <em>Side</em> <em>Rendered</em>). Voc\xEA pode fazer isso com a op\xE7\xE3o <code>preserveState</code>:<code>store.registerModule(&#39;a&#39;, module, {preserveState: true})</code></p><p>Quando voc\xEA define <code>preserveState: true</code>, o m\xF3dulo \xE9 registrado, as a\xE7\xF5es, muta\xE7\xF5es e <em>getters</em> s\xE3o inclu\xEDdos no <em>store</em>, mas o estado n\xE3o. \xC9 assumido que estado da sua <em>store</em> j\xE1 cont\xE9m um estado para aquele m\xF3dulo e voc\xEA n\xE3o quer sobrescrev\xEA-lo.</p><h2 id="reutilizacao-do-modulo" tabindex="-1">Reutiliza\xE7\xE3o do M\xF3dulo <a class="header-anchor" href="#reutilizacao-do-modulo" aria-hidden="true">#</a></h2><p>\xC0s vezes, podemos precisar criar v\xE1rias inst\xE2ncias de um m\xF3dulo, por exemplo:</p><ul><li>Criando m\xFAltiplos <em>stores</em> que usam o mesmo m\xF3dulo (e.g. Para <a href="https://ssr.vuejs.org/en/structure.html#avoid-stateful-singletons" target="_blank" rel="noopener noreferrer">evitar Singletons com informa\xE7\xF5es do estado no SSR</a> quando a op\xE7\xE3o <code>runInNewContext</code> \xE9 <code>false</code> ou <code>&#39;_once_&#39;</code>);</li><li>Registrar o mesmo m\xF3dulo v\xE1rias vezes no mesmo <em>store</em>.</li></ul><p>Se usarmos um objeto simples para declarar o estado do m\xF3dulo, esse objeto de estado ser\xE1 compartilhado por refer\xEAncia e causar\xE1 polui\xE7\xE3o entre estados de <em>store</em>/m\xF3dulo quando ele sofrer uma muta\xE7\xE3o.</p><p>Este \xE9 exatamente o mesmo problema com <code>data</code> dentro dos componentes Vue. Ent\xE3o, a solu\xE7\xE3o tamb\xE9m \xE9 a mesma - use uma fun\xE7\xE3o para declarar o estado do m\xF3dulo (suportado em 2.3.0+):</p><div class="language-js"><pre><code><span class="token keyword">const</span> MyReusableModule <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// mutations, actions, getters...</span>
<span class="token punctuation">}</span>
</code></pre></div>`,50),p=[e];function c(u,l,r,i,k,m){return a(),s("div",null,p)}var v=n(t,[["render",c]]);export{g as __pageData,v as default};
