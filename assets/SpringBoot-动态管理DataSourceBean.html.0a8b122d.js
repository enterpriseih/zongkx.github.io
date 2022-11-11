import{_ as n,c as s}from"./app.0a5e9105.js";const a={},p=s(`<h2 id="centraldogma" tabindex="-1"><a class="header-anchor" href="#centraldogma" aria-hidden="true">#</a> CentralDogma</h2><p>\u914D\u7F6E\u4E2D\u5FC3,\u4E5F\u53EF\u4EE5\u662F\u522B\u7684\u6BD4\u5982\u5E93\u7B49,\u6838\u5FC3\u7528\u4E8E\u5B58\u50A8\u6570\u636E\u6E90\u914D\u7F6E\u4FE1\u606F,\u4E5F\u53EF\u4EE5\u7ED3\u5408openmetadata\u8FDB\u884C\u8D44\u4EA7\u7BA1\u7406</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>        <span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
            <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>com<span class="token punctuation">.</span>linecorp<span class="token punctuation">.</span>centraldogma<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>centraldogma<span class="token operator">-</span>client<span class="token operator">-</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">0.51</span><span class="token number">.1</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>centraldogma<span class="token operator">:</span>
  enable<span class="token operator">:</span> <span class="token boolean">true</span>
  hosts<span class="token operator">:</span>
    <span class="token operator">-</span> localhost<span class="token operator">:</span><span class="token number">36462</span>
  access<span class="token operator">-</span>token<span class="token operator">:</span> appToken<span class="token operator">-</span>d
  project<span class="token operator">:</span> datasource
  repo<span class="token operator">:</span> dev
  filename<span class="token operator">:</span> <span class="token operator">/</span>conf<span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;61e9107e283fcc36e66213a1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;supportPool&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;maximumPoolSize&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token string">&quot;maxLifetime&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string">&quot;driver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.mysql.jdbc.Driver&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;connectionTestQuery&quot;</span><span class="token operator">:</span> <span class="token string">&quot;select 1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="mydatasource" tabindex="-1"><a class="header-anchor" href="#mydatasource" aria-hidden="true">#</a> MyDataSource</h2><p>\u6210\u5458\u53D8\u91CF <code>dataSourceManager</code> \u548C dataSource, \u524D\u8005\u4E3A\u914D\u7F6E\u4E2D\u5FC3\u7684\u914D\u7F6E\u6570\u636E,\u540E\u8005\u7528\u4E8E<code>DataSource</code>\u63A5\u53E3\u4E2D\u58F0\u660E\u7684\u65B9\u6CD5.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyDataSource</span> <span class="token keyword">implements</span> <span class="token class-name">DataSource</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Setter</span>
    <span class="token keyword">private</span> <span class="token class-name">DataSourceManager</span> dataSourceManager<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">DataSource</span> dataSource<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@SneakyThrows</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getSupportPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">HikariConfig</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HikariConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            config<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            config<span class="token punctuation">.</span><span class="token function">setJdbcUrl</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            config<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            config<span class="token punctuation">.</span><span class="token function">setMaximumPoolSize</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getMaximumPoolSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            config<span class="token punctuation">.</span><span class="token function">setMaxLifetime</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getMaxLifetime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            config<span class="token punctuation">.</span><span class="token function">setDriverClassName</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getDriver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            config<span class="token punctuation">.</span><span class="token function">setConnectionTestQuery</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getConnectionTestQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HikariDataSource</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">SimpleDriverDataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDriverDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            dataSource<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            dataSource<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            dataSource<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            dataSource<span class="token punctuation">.</span><span class="token function">setDriverClass</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Driver</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getDriver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>dataSource <span class="token operator">=</span> dataSource<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">String</span> s1<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> aClass<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> dataSource<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span>aClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isWrapperFor</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> aClass<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> dataSource<span class="token punctuation">.</span><span class="token function">isWrapperFor</span><span class="token punctuation">(</span>aClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">PrintWriter</span> <span class="token function">getLogWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> dataSource<span class="token punctuation">.</span><span class="token function">getLogWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLogWriter</span><span class="token punctuation">(</span><span class="token class-name">PrintWriter</span> printWriter<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        dataSource<span class="token punctuation">.</span><span class="token function">setLogWriter</span><span class="token punctuation">(</span>printWriter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getLoginTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> dataSource<span class="token punctuation">.</span><span class="token function">getLoginTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLoginTimeout</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        dataSource<span class="token punctuation">.</span><span class="token function">setLoginTimeout</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">.</span><span class="token function">getLoginTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Logger</span> <span class="token function">getParentLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLFeatureNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> dataSource<span class="token punctuation">.</span><span class="token function">getParentLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><h2 id="commandlinerunner" tabindex="-1"><a class="header-anchor" href="#commandlinerunner" aria-hidden="true">#</a> CommandLineRunner</h2><ol><li>\u76D1\u542C\u914D\u7F6E\u4E2D\u5FC3\u4F20\u6765\u7684\u6570\u636E</li><li>\u5FAA\u73AF\u6CE8\u518Cbean</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;centraldogma&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;enable&quot;</span><span class="token punctuation">,</span> havingValue <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ConditionalOnMissingBean</span>
    <span class="token keyword">public</span> <span class="token class-name">CommandLineRunner</span> <span class="token function">dataSourceCommandLineRunner</span><span class="token punctuation">(</span><span class="token class-name">CentralDogma</span> dogma<span class="token punctuation">,</span> <span class="token class-name">ObjectMapper</span> objectMapper<span class="token punctuation">,</span> <span class="token class-name">ConfigurableApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Watcher</span> watcher <span class="token operator">=</span> dogma<span class="token punctuation">.</span><span class="token function">fileWatcher</span><span class="token punctuation">(</span>configuration<span class="token punctuation">.</span><span class="token function">getProject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> configuration<span class="token punctuation">.</span><span class="token function">getRepo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Query</span><span class="token punctuation">.</span><span class="token function">ofText</span><span class="token punctuation">(</span>configuration<span class="token punctuation">.</span><span class="token function">getFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        watcher<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>revision<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Updated to {} at {}&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> revision<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">BeanDefinitionRegistry</span> beanFactory <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BeanDefinitionRegistry</span><span class="token punctuation">)</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DataSourceManager</span><span class="token punctuation">&gt;</span></span> all <span class="token operator">=</span> objectMapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">TypeReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">DataSourceManager</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">DataSourceManager</span> dataSourceManager <span class="token operator">:</span> all<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                   <span class="token keyword">if</span> <span class="token punctuation">(</span>beanFactory<span class="token punctuation">.</span><span class="token function">containsBeanDefinition</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;datasource exist id:{},name:{}&quot;</span><span class="token punctuation">,</span> dataSourceManager<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dataSourceManager<span class="token punctuation">.</span><span class="token function">getAlias</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        beanFactory<span class="token punctuation">.</span><span class="token function">removeBeanDefinition</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;old datasource remove id:{},name:{}&quot;</span><span class="token punctuation">,</span> dataSourceManager<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dataSourceManager<span class="token punctuation">.</span><span class="token function">getAlias</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    <span class="token class-name">BeanDefinitionBuilder</span> beanDefinitionBuilder <span class="token operator">=</span> <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span><span class="token function">genericBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">OneserviceDataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    beanDefinitionBuilder<span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;dataSourceManager&quot;</span><span class="token punctuation">,</span> dataSourceManager<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// setter \u6CE8\u5165</span>
                    beanDefinitionBuilder<span class="token punctuation">.</span><span class="token function">setInitMethodName</span><span class="token punctuation">(</span><span class="token string">&quot;init&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// init \u65B9\u6CD5\u521D\u59CB\u5316 \u79C1\u6709\u53D8\u91CF</span>
                    beanFactory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span>dataSourceManager<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> beanDefinitionBuilder<span class="token punctuation">.</span><span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;datasource register success  id :{},alias:{}&quot;</span><span class="token punctuation">,</span> dataSourceManager<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dataSourceManager<span class="token punctuation">.</span><span class="token function">getAlias</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JsonProcessingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json convert  error&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> args <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u5165" aria-hidden="true">#</a> \u6CE8\u5165</h2><p>\u7531\u4E8E\u76D1\u542C\u662F\u5F02\u6B65\u64CD\u4F5C ,\u6545bean\u5E94\u8BE5\u662F\u61D2\u52A0\u8F7D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token annotation punctuation">@Autowired</span>
    <span class="token annotation punctuation">@Lazy</span>
    <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;61e9107e283fcc36e66213a1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">DataSource</span> dataSource<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,14);function t(o,e){return p}var u=n(a,[["render",t],["__file","SpringBoot-\u52A8\u6001\u7BA1\u7406DataSourceBean.html.vue"]]);export{u as default};
