import{_ as e,y as a,x as s,W as o}from"./plugin-vue_export-helper.0b0d78d5.js";const v='{"title":"Estrutura da Aplica\xE7\xE3o","description":"","frontmatter":{},"relativePath":"ptbr/guide/structure.md","lastUpdated":1702210160134}',t={},n=o(`<h1 id="estrutura-da-aplicacao" tabindex="-1">Estrutura da Aplica\xE7\xE3o <a class="header-anchor" href="#estrutura-da-aplicacao" aria-hidden="true">#</a></h1><p>O Vuex n\xE3o restringe realmente como voc\xEA estrutura seu c\xF3digo. Em vez disso, ele imp\xF5e um conjunto de princ\xEDpios de alto n\xEDvel:</p><ol><li><p>O estado do n\xEDvel da aplica\xE7\xE3o \xE9 centralizado no <em>store</em>.</p></li><li><p>A \xFAnica maneira de mudar o estado \xE9 confirmando (ou fazendo <em>commit</em> das) <strong>muta\xE7\xF5es</strong>, que s\xE3o transa\xE7\xF5es s\xEDncronas.</p></li><li><p>A l\xF3gica ass\xEDncrona deve ser encapsulada e pode ser composta com <strong>a\xE7\xF5es</strong>.</p></li></ol><p>Enquanto voc\xEA seguir estas regras, depende de voc\xEA como estruturar seu projeto. Se o arquivo do seu <em>store</em> for muito grande, basta come\xE7ar a dividir as a\xE7\xF5es, muta\xE7\xF5es e <em>getters</em> em arquivos separados.</p><p>Para qualquer aplica\xE7\xE3o mais complexa, provavelmente precisaremos aproveitar os m\xF3dulos. Aqui est\xE1 um exemplo de estrutura de projeto:</p><div class="language-bash"><pre><code>\u251C\u2500\u2500 index.html
\u251C\u2500\u2500 main.js
\u251C\u2500\u2500 api
\u2502   \u2514\u2500\u2500 <span class="token punctuation">..</span>. <span class="token comment"># abstra\xE7\xF5es para fazer requisi\xE7\xF5es a API</span>
\u251C\u2500\u2500 components
\u2502   \u251C\u2500\u2500 App.vue
\u2502   \u2514\u2500\u2500 <span class="token punctuation">..</span>.
\u2514\u2500\u2500 store
    \u251C\u2500\u2500 index.js          <span class="token comment"># onde montamos os m\xF3dulos e exportamos o store</span>
    \u251C\u2500\u2500 actions.js        <span class="token comment"># a\xE7\xF5es raiz</span>
    \u251C\u2500\u2500 mutations.js      <span class="token comment"># muta\xE7\xF5es raiz</span>
    \u2514\u2500\u2500 modules
        \u251C\u2500\u2500 cart.js       <span class="token comment"># m\xF3dulo cart</span>
        \u2514\u2500\u2500 products.js   <span class="token comment"># m\xF3dulo products</span>
</code></pre></div><p>Como refer\xEAncia, confira o <a href="https://github.com/vuejs/vuex/tree/4.0/examples/classic/shopping-cart" target="_blank" rel="noopener noreferrer">Exemplo do Carrinho de Compras</a>.</p>`,7),r=[n];function p(c,i,m,d,u,l){return s(),a("div",null,r)}var g=e(t,[["render",p]]);export{v as __pageData,g as default};
