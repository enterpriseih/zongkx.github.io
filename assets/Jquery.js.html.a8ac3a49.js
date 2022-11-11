import{_ as n,c as s}from"./app.0a5e9105.js";const a={},t=s(`<h2 id="\u5E38\u7528\u7684\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684\u9009\u62E9\u5668" aria-hidden="true">#</a> \u5E38\u7528\u7684\u9009\u62E9\u5668</h2><h3 id="\u7EB5\u5411\u83B7\u53D6\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u7EB5\u5411\u83B7\u53D6\u5143\u7D20" aria-hidden="true">#</a> \u7EB5\u5411\u83B7\u53D6\u5143\u7D20</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input:nth-child(1)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B2C1\u4E2A\u5B50\u5143\u7D20</span>
<span class="token function">$</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input:nth-child(2)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B2C2\u4E2A\u5B50\u5143\u7D20</span>

<span class="token function">$</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input:first&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B2C1\u4E2A\u5B50\u5143\u7D20</span>
<span class="token function">$</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input:last&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6700\u540E1\u4E2A\u5B50\u5143\u7D20</span>

<span class="token function">$</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;tr&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B2C1\u4E2A\u5B50\u5143\u7D20</span>
<span class="token function">$</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;tr&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B2C2\u4E2A\u5B50\u5143\u7D20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u6A2A\u5411\u83B7\u53D6\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u6A2A\u5411\u83B7\u53D6\u5143\u7D20" aria-hidden="true">#</a> \u6A2A\u5411\u83B7\u53D6\u5143\u7D20</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//siblings\u83B7\u53D6\u9664\u81EA\u5DF1\u4EE5\u5916\u7684\u540C\u7EA7\u5143\u7D20</span>
<span class="token function">$</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">siblings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u540C\u7EA7\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A</span>
<span class="token function">$</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">siblings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u540C\u7EA7\u5143\u7D20\u7684\u7B2C\u4E8C\u4E2A</span>
<span class="token function">$</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">siblings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u540C\u7EA7\u5143\u7D20\u7684\u6700\u540E\u4E00\u4E2A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5C5E\u6027\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u9009\u62E9" aria-hidden="true">#</a> \u5C5E\u6027\u9009\u62E9</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#select option[value=&#39;&quot;</span><span class="token operator">+</span>str<span class="token operator">+</span><span class="token string">&quot;&#39;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6839\u636Eoption:value\u9009\u62E9select\u4E2D\u7684\u67D0\u4E2Aoption</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#select option:selected&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u5DF2\u9009\u4E2D\u7684select:option\u503C	</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;td input[type=&#39;text&#39;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u591A\u6761\u4EF6\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u591A\u6761\u4EF6\u9009\u62E9" aria-hidden="true">#</a> \u591A\u6761\u4EF6\u9009\u62E9</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;table&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;td input[type=&#39;text&#39;],td select,td textarea&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,9);function p(o,c){return t}var u=n(a,[["render",p],["__file","Jquery.js.html.vue"]]);export{u as default};