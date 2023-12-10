import{_ as n,y as t,x as s,W as e}from"./plugin-vue_export-helper.0b0d78d5.js";const h='{"title":"\u9879\u76EE\u7ED3\u6784","description":"","frontmatter":{},"relativePath":"zh/guide/structure.md","lastUpdated":1702210160145}',a={},o=e(`<h1 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1">\u9879\u76EE\u7ED3\u6784 <a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a></h1><p>Vuex \u5E76\u4E0D\u9650\u5236\u4F60\u7684\u4EE3\u7801\u7ED3\u6784\u3002\u4F46\u662F\uFF0C\u5B83\u89C4\u5B9A\u4E86\u4E00\u4E9B\u9700\u8981\u9075\u5B88\u7684\u89C4\u5219\uFF1A</p><ol><li><p>\u5E94\u7528\u5C42\u7EA7\u7684\u72B6\u6001\u5E94\u8BE5\u96C6\u4E2D\u5230\u5355\u4E2A store \u5BF9\u8C61\u4E2D\u3002</p></li><li><p>\u63D0\u4EA4 <strong>mutation</strong> \u662F\u66F4\u6539\u72B6\u6001\u7684\u552F\u4E00\u65B9\u6CD5\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u540C\u6B65\u7684\u3002</p></li><li><p>\u5F02\u6B65\u903B\u8F91\u90FD\u5E94\u8BE5\u5C01\u88C5\u5230 <strong>action</strong> \u91CC\u9762\u3002</p></li></ol><p>\u53EA\u8981\u4F60\u9075\u5B88\u4EE5\u4E0A\u89C4\u5219\uFF0C\u5982\u4F55\u7EC4\u7EC7\u4EE3\u7801\u968F\u4F60\u4FBF\u3002\u5982\u679C\u4F60\u7684 store \u6587\u4EF6\u592A\u5927\uFF0C\u53EA\u9700\u5C06 action\u3001mutation \u548C getter \u5206\u5272\u5230\u5355\u72EC\u7684\u6587\u4EF6\u3002</p><p>\u5BF9\u4E8E\u5927\u578B\u5E94\u7528\uFF0C\u6211\u4EEC\u4F1A\u5E0C\u671B\u628A Vuex \u76F8\u5173\u4EE3\u7801\u5206\u5272\u5230\u6A21\u5757\u4E2D\u3002\u4E0B\u9762\u662F\u9879\u76EE\u7ED3\u6784\u793A\u4F8B\uFF1A</p><div class="language-bash"><pre><code>\u251C\u2500\u2500 index.html
\u251C\u2500\u2500 main.js
\u251C\u2500\u2500 api
\u2502   \u2514\u2500\u2500 <span class="token punctuation">..</span>. <span class="token comment"># \u62BD\u53D6\u51FAAPI\u8BF7\u6C42</span>
\u251C\u2500\u2500 components
\u2502   \u251C\u2500\u2500 App.vue
\u2502   \u2514\u2500\u2500 <span class="token punctuation">..</span>.
\u2514\u2500\u2500 store
    \u251C\u2500\u2500 index.js          <span class="token comment"># \u6211\u4EEC\u7EC4\u88C5\u6A21\u5757\u5E76\u5BFC\u51FA store \u7684\u5730\u65B9</span>
    \u251C\u2500\u2500 actions.js        <span class="token comment"># \u6839\u7EA7\u522B\u7684 action</span>
    \u251C\u2500\u2500 mutations.js      <span class="token comment"># \u6839\u7EA7\u522B\u7684 mutation</span>
    \u2514\u2500\u2500 modules
        \u251C\u2500\u2500 cart.js       <span class="token comment"># \u8D2D\u7269\u8F66\u6A21\u5757</span>
        \u2514\u2500\u2500 products.js   <span class="token comment"># \u4EA7\u54C1\u6A21\u5757</span>
</code></pre></div><p>\u8BF7\u53C2\u8003<a href="https://github.com/vuejs/vuex/tree/4.0/examples/classic/shopping-cart" target="_blank" rel="noopener noreferrer">\u8D2D\u7269\u8F66\u793A\u4F8B</a>\u3002</p>`,7),p=[o];function c(r,i,l,m,u,_){return s(),t("div",null,p)}var g=n(a,[["render",c]]);export{h as __pageData,g as default};
