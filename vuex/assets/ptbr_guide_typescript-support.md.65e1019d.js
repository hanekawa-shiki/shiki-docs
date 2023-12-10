import{_ as n,y as s,x as a,W as e}from"./plugin-vue_export-helper.0b0d78d5.js";const f='{"title":"Suporte ao TypeScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"Tipando a propriedade $store no Componente Vue","slug":"tipando-a-propriedade-store-no-componente-vue"},{"level":2,"title":"Tipando a Fun\xE7\xE3o de Composi\xE7\xE3o useStore","slug":"tipando-a-funcao-de-composicao-usestore"},{"level":3,"title":"Simplificando o uso do useStore","slug":"simplificando-o-uso-do-usestore"}],"relativePath":"ptbr/guide/typescript-support.md","lastUpdated":1702210160135}',o={},t=e(`<h1 id="suporte-ao-typescript" tabindex="-1">Suporte ao TypeScript <a class="header-anchor" href="#suporte-ao-typescript" aria-hidden="true">#</a></h1><p>O Vuex fornece suas tipagens para que voc\xEA possa usar o TypeScript para escrever uma defini\xE7\xE3o do <em>store</em>. Voc\xEA n\xE3o precisa de nenhuma configura\xE7\xE3o especial do TypeScript para Vuex. Por favor siga a <a href="https://v3.vuejs.org/guide/typescript-support.html" target="_blank" rel="noopener noreferrer">configura\xE7\xE3o b\xE1sica do TypeScript no Vue</a> para configurar seu projeto.</p><p>No entanto, se voc\xEA estiver escrevendo seus componentes Vue em TypeScript, h\xE1 algumas etapas a seguir que exigem que voc\xEA forne\xE7a a tipagem correta para um <em>store</em>.</p><h2 id="tipando-a-propriedade-store-no-componente-vue" tabindex="-1">Tipando a propriedade <code>$store</code> no Componente Vue <a class="header-anchor" href="#tipando-a-propriedade-store-no-componente-vue" aria-hidden="true">#</a></h2><p>O Vuex n\xE3o fornece tipagens para a propriedade <code>this.$store</code> <em>out</em> <em>of</em> <em>the</em> <em>box</em>. Quando usado com TypeScript, voc\xEA deve declarar seu pr\xF3prio <em>module</em> <em>augmentation</em>.</p><p>Para fazer isso, declare tipagens personalizadas para o <code>ComponentCustomProperties</code> do Vue adicionando um arquivo de declara\xE7\xE3o na pasta do seu projeto:</p><div class="language-ts"><pre><code><span class="token comment">// vuex.d.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentCustomProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@vue/runtime-core&#39;</span> <span class="token punctuation">{</span>
  <span class="token comment">// declare seus pr\xF3prios estados do store</span>
  <span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// fornece tipagem para \`this.$store\`</span>
  <span class="token keyword">interface</span> <span class="token class-name">ComponentCustomProperties</span> <span class="token punctuation">{</span>
    $store<span class="token operator">:</span> Store<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="tipando-a-funcao-de-composicao-usestore" tabindex="-1">Tipando a Fun\xE7\xE3o de Composi\xE7\xE3o <code>useStore</code> <a class="header-anchor" href="#tipando-a-funcao-de-composicao-usestore" aria-hidden="true">#</a></h2><p>Quando voc\xEA est\xE1 escrevendo seu componente Vue na API de Composi\xE7\xE3o (ou <em>Composition</em> API), provavelmente desejar\xE1 que <code>useStore</code> retorne o <em>store</em> tipado. Para que <code>useStore</code> retorne corretamente o <em>store</em> tipado, voc\xEA deve:</p><ol><li>Defina o <code>InjectionKey</code> tipado.</li><li>Forne\xE7a o <code>InjectionKey</code> tipado ao instalar um <em>store</em> na aplica\xE7\xE3o Vue.</li><li>Passe o <code>InjectionKey</code> tipado para o m\xE9todo <code>useStore</code>.</li></ol><p>Vamos abordar isso passo a passo. Primeiro, defina a chave usando a interface <code>InjectionKey</code> do Vue junto com sua pr\xF3pria defini\xE7\xE3o de tipo do <em>store</em>:</p><div class="language-ts"><pre><code><span class="token comment">// store.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> InjectionKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// defina suas tipagens para o estado do store</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// defina o injection key</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> key<span class="token operator">:</span> InjectionKey<span class="token operator">&lt;</span>Store<span class="token operator">&lt;</span>State<span class="token operator">&gt;&gt;</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createStore</span><span class="token generic class-name"><span class="token operator">&lt;</span>State<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Em seguida, passe o <em>injection</em> <em>key</em> definido ao instalar o <em>store</em> para a aplica\xE7\xE3o Vue:</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store<span class="token punctuation">,</span> key <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// passe o injection key</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> key<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>Finalmente, voc\xEA pode passar a chave para o m\xE9todo <code>useStore</code> para recuperar o <em>store</em> tipado.</p><div class="language-ts"><pre><code><span class="token comment">// in a vue component</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> key <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

    store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token comment">// tipado como number</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Por baixo dos panos, o Vuex instala o <em>store</em> para a aplica\xE7\xE3o Vue usando o <a href="https://v3.vuejs.org/api/composition-api.html#provide-inject" target="_blank" rel="noopener noreferrer">Provide/Inject</a> do Vue, caracter\xEDstica que \xE9 a raz\xE3o pela qual o <em>injection</em> <em>key</em> \xE9 um fator importante.</p><h3 id="simplificando-o-uso-do-usestore" tabindex="-1">Simplificando o uso do <code>useStore</code> <a class="header-anchor" href="#simplificando-o-uso-do-usestore" aria-hidden="true">#</a></h3><p>Ter que importar <code>InjectionKey</code> e pass\xE1-lo para <code>useStore</code> em todos os lugares em que \xE9 usado pode rapidamente se tornar uma tarefa repetitiva. Para simplificar as coisas, voc\xEA pode definir sua pr\xF3pria fun\xE7\xE3o combin\xE1vel (ou <em>composable</em> <em>function</em>) para recuperar um <em>store</em> tipado:</p><div class="language-ts"><pre><code><span class="token comment">// store.ts</span>
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

<span class="token comment">// defina sua pr\xF3pria fun\xE7\xE3o de composi\xE7\xE3o \`useStore\`</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useStore</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">baseUseStore</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Agora, ao importar sua pr\xF3pria fun\xE7\xE3o combin\xE1vel (ou <em>composable</em> <em>function</em>), voc\xEA pode recuperar o <em>store</em> tipado <strong>sem</strong> ter que fornecer o <em>injection</em> <em>key</em> e ela est\xE1 tipada:</p><div class="language-ts"><pre><code><span class="token comment">// em um componente vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token comment">// tipado como number</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,22),p=[t];function c(r,u,i,l,k,d){return a(),s("div",null,p)}var y=n(o,[["render",c]]);export{f as __pageData,y as default};
