import{_ as n,c as s}from"./app.0a5e9105.js";const a={},p=s(`<h2 id="\u5FFD\u7565ssl" tabindex="-1"><a class="header-anchor" href="#\u5FFD\u7565ssl" aria-hidden="true">#</a> \u5FFD\u7565SSL</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">SimpleClientHttpRequestFactory</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>net<span class="token punctuation">.</span>ssl<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">HttpURLConnection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">SecureRandom</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>cert<span class="token punctuation">.</span></span><span class="token class-name">X509Certificate</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1\u5C01\u88C5
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SSL</span> <span class="token keyword">extends</span> <span class="token class-name">SimpleClientHttpRequestFactory</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">prepareConnection</span><span class="token punctuation">(</span><span class="token class-name">HttpURLConnection</span> connection<span class="token punctuation">,</span> <span class="token class-name">String</span> httpMethod<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>connection <span class="token keyword">instanceof</span> <span class="token class-name">HttpsURLConnection</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">prepareHttpsConnection</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">HttpsURLConnection</span><span class="token punctuation">)</span> connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">prepareConnection</span><span class="token punctuation">(</span>connection<span class="token punctuation">,</span> httpMethod<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">prepareHttpsConnection</span><span class="token punctuation">(</span><span class="token class-name">HttpsURLConnection</span> connection<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        connection<span class="token punctuation">.</span><span class="token function">setHostnameVerifier</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SkipHostnameVerifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            connection<span class="token punctuation">.</span><span class="token function">setSSLSocketFactory</span><span class="token punctuation">(</span><span class="token function">createSslSocketFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Ignore</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">SSLSocketFactory</span> <span class="token function">createSslSocketFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">SSLContext</span> context <span class="token operator">=</span> <span class="token class-name">SSLContext</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;TLS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">TrustManager</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">new</span> <span class="token class-name">SkipX509TrustManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">SecureRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> context<span class="token punctuation">.</span><span class="token function">getSocketFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">SkipHostnameVerifier</span> <span class="token keyword">implements</span> <span class="token class-name">HostnameVerifier</span> <span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">verify</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">SSLSession</span> sslSession<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SkipX509TrustManager</span> <span class="token keyword">implements</span> <span class="token class-name">X509TrustManager</span> <span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">X509Certificate</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getAcceptedIssuers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">X509Certificate</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkClientTrusted</span><span class="token punctuation">(</span><span class="token class-name">X509Certificate</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chain<span class="token punctuation">,</span> <span class="token class-name">String</span> authType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkServerTrusted</span><span class="token punctuation">(</span><span class="token class-name">X509Certificate</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chain<span class="token punctuation">,</span> <span class="token class-name">String</span> authType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RestTemplate</span> <span class="token function">restTemplate</span><span class="token punctuation">(</span><span class="token class-name">ClientHttpRequestFactory</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ClientHttpRequestFactory</span> <span class="token function">simpleClientHttpRequestFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SSL</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SSL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setReadTimeout</span><span class="token punctuation">(</span><span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setConnectTimeout</span><span class="token punctuation">(</span><span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> factory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> POST</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">HttpEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> httpEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>postData<span class="token punctuation">,</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">HttpEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> o <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">postForEntity</span><span class="token punctuation">(</span><span class="token string">&quot;URL&quot;</span><span class="token punctuation">,</span>httpEntity<span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JSONObject</span> jsonObject1 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> GET</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">HttpEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> requestEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> resEntity <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">exchange</span><span class="token punctuation">(</span><span class="token string">&quot;URL&quot;</span><span class="token punctuation">,</span> <span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span> requestEntity<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JSONObject</span> hostJsonObject <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>resEntity<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> PUT</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">URI</span> uri <span class="token operator">=</span> <span class="token class-name">UriComponentsBuilder</span><span class="token punctuation">.</span><span class="token function">fromUriString</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">RequestEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> requestEntity <span class="token operator">=</span> <span class="token class-name">RequestEntity</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">headers</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span>jsonObject<span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> resEntity <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">exchange</span><span class="token punctuation">(</span>requestEntity<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> resEntity<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> DELETE</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">HttpEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> requestEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> resEntity <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">exchange</span><span class="token punctuation">(</span><span class="token string">&quot;URL&quot;</span><span class="token punctuation">,</span> <span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">DELETE</span><span class="token punctuation">,</span> requestEntity<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">HttpStatus</span> httpStatus <span class="token operator">=</span> resEntity<span class="token punctuation">.</span><span class="token function">getStatusCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
result <span class="token operator">=</span> httpStatus<span class="token punctuation">.</span><span class="token function">is2xxSuccessful</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,11);function t(e,c){return p}var l=n(a,[["render",t],["__file","RestTemplate.html.vue"]]);export{l as default};