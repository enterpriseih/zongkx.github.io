import{_ as n,c as s}from"./app.a9933e9e.js";const a={},p=s(`<h1 id="dremio" tabindex="-1"><a class="header-anchor" href="#dremio" aria-hidden="true">#</a> Dremio</h1><blockquote><p><a href="https://docs.dremio.com/" target="_blank" rel="noopener noreferrer">https://docs.dremio.com/</a></p></blockquote><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u6570\u636E\u6E56:\u4E0D\u540C\u5B58\u50A8\u7C7B\u578B\u79CD\u7C7B\u7684\u6570\u636E\u6C47\u805A\u5728\u4E00\u8D77,\u5B9E\u73B0\u7C7B\u4F3CHub\u7684\u529F\u80FD</p><p>\u57FA\u4E8EArrow\u7684\u6570\u636E\u52A0\u901F</p><h1 id="dremio\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#dremio\u5B89\u88C5" aria-hidden="true">#</a> Dremio\u5B89\u88C5</h1><ol><li>docker</li></ol><blockquote><p>docker pull dremio/dremio-oss</p></blockquote><ol start="2"><li>docker run</li></ol><blockquote><p>docker run -d -p 9047:9047 -p 31010:31010 -p 45678:45678 dremio/dremio-oss</p></blockquote><ol start="3"><li>docker log</li></ol><blockquote><p>docker logs --tail 300 -f bold_fermat</p></blockquote><ol start="4"><li>docker\u542F\u52A8\u540E,\u8BBF\u95EE localhost:9047</li></ol><p>\u521D\u6B21\u542F\u52A8\u9700\u8981\u6CE8\u518C\u7528\u6237,\u6CE8\u518C\u5B8C\u6210\u540E\u8FDB\u5165.</p><h1 id="dremio\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#dremio\u529F\u80FD" aria-hidden="true">#</a> Dremio\u529F\u80FD</h1><ol><li>Spaces</li></ol><p>\u865A\u62DF\u8868,\u5728\u8FD9\u91CC\u521B\u5EFAspace\u4E2D\u7684\u865A\u62DF\u8868(\u7C7B\u4F3C\u89C6\u56FE),+New Query \u4FDD\u5B58\u540E\u53EF\u5B58\u50A8\u5230\u6307\u5B9A\u4F4D\u7F6E.</p><ol start="2"><li>Data Lakes</li></ol><p>\u6570\u636E\u6E56,\u53EF\u6DFB\u52A0Table Stores/File Stores,\u53EF\u7406\u89E3\u4E3A\u8868/\u6587\u4EF6\u7BA1\u7406\u5668,\u6BD4\u5982\u6DFB\u52A0\u4E00\u4E2ANAS\u4F5C\u4E3A\u6587\u4EF6\u7BA1\u7406\u5B9E\u4F8B,\u5176\u4E2D\u7684json/excle/csv\u7B49\u6587\u4EF6\u53EF\u76F4\u63A5\u4F5C\u4E3A\u67E5\u8BE2\u7684&#39;\u8868&#39;\u8FDB\u884C\u67E5\u8BE2</p><ol start="3"><li>External Sources</li></ol><p>\u5916\u90E8\u6E90,\u8FD9\u91CC\u6DFB\u52A0\u591A\u79CDdb\u6E90,\u4F5C\u4E3A\u865A\u62DF\u8868\u7684\u6570\u636E\u6765\u6E90.\u5982Mysql/PostgreSQL/Oracle\u7B49</p><h1 id="dremio-jdbc" tabindex="-1"><a class="header-anchor" href="#dremio-jdbc" aria-hidden="true">#</a> Dremio JDBC</h1><p>\u53EF\u53C2\u8003</p><blockquote><p><a href="https://www.cnblogs.com/charlypage/p/13335145.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/charlypage/p/13335145.html</a></p></blockquote><p>\u6CE8\u610F</p><ul><li>jar\u5728maven\u4E2D\u592E\u4ED3\u5E93\u6CA1\u6709,\u6240\u4EE5\u9700\u8981\u5355\u72EC\u4E0B\u8F7D.</li></ul><blockquote><p><a href="https://www.dremio.com/drivers/" target="_blank" rel="noopener noreferrer">https://www.dremio.com/drivers/</a></p></blockquote><ul><li>\u4EC5\u652F\u6301select</li><li>\u96C6\u6210Mybatis\u4E0D\u652F\u6301#{}</li></ul><h1 id="dremio-restapi" tabindex="-1"><a class="header-anchor" href="#dremio-restapi" aria-hidden="true">#</a> Dremio RestAPI</h1><h2 id="token-api" tabindex="-1"><a class="header-anchor" href="#token-api" aria-hidden="true">#</a> Token API</h2><blockquote><p>POST \xA0[http://<img src="https://g.yuque.com/gr/latex?](http%3A%2F%2F#card=math&amp;code=](http%3A%2F%2F&amp;id=U9Aba)" alt="">{ip}:9047/apiv2/login</p><p>BODY : { &quot;userName&quot;: &quot;name&quot;, &quot;password&quot;: &quot;pwd&quot; }</p></blockquote><p>\u6BD4\u5982\u53D6\u5230\u54CD\u5E94\u4E2D\u7684token:AAAAA</p><p>\u4E4B\u540E\u7684\u8BF7\u6C42\u9700\u8981\u5728Header\u4E2D\u6DFB\u52A0</p><p>Authorization:_dremioAAAAA</p><h2 id="sql-api" tabindex="-1"><a class="header-anchor" href="#sql-api" aria-hidden="true">#</a> SQL API</h2><blockquote><p>POST [http://<img src="https://g.yuque.com/gr/latex?](http%3A%2F%2F#card=math&amp;code=](http%3A%2F%2F&amp;id=vBgAY)" alt="">{ip}:9047/apiv2/sql</p><p>BODY : { &quot;sql&quot;: &quot;SELECT * FROM cmpsync.&quot;user-mapper&quot;&quot; }</p></blockquote><h1 id="python-curl-demo" tabindex="-1"><a class="header-anchor" href="#python-curl-demo" aria-hidden="true">#</a> Python CURL Demo</h1><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> json


<span class="token keyword">def</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">}</span>
    url <span class="token operator">=</span> <span class="token string">&quot;http://\${ip}:9047/apiv2/login&quot;</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;userName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">}</span>
    res <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
    token <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>res<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token keyword">return</span> token<span class="token punctuation">[</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">]</span>


<span class="token keyword">def</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    token <span class="token operator">=</span> getToken<span class="token punctuation">(</span><span class="token punctuation">)</span>
    headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;_dremio&quot;</span> <span class="token operator">+</span> token<span class="token punctuation">}</span>
    url <span class="token operator">=</span> <span class="token string">&quot;http://\${ip}:9047/apiv2/sql&quot;</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;sql&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;SELECT * FROM cmpsync.\\&quot;user-mapper\\&quot; limit 2 &quot;</span><span class="token punctuation">}</span>
    res <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
    result <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>res<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    getResult<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h1 id="dremio-arp-\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#dremio-arp-\u5F00\u53D1" aria-hidden="true">#</a> Dremio ARP \u5F00\u53D1</h1><p><a href="https://www.dremio.com/resources/tutorials/how-to-create-an-arp-connector/#toc_item_Maven%20Build%20Failures" target="_blank" rel="noopener noreferrer">doc</a></p><p>dremio \u57FA\u4E8Epf4j\u5B9E\u73B0\u4E86\u63D2\u4EF6\u5316\u5F00\u53D1\u7684\u529F\u80FD,dremio-hub\u5B98\u65B9\u4E5F\u63D0\u4F9B\u4E86\u6BD4\u5982sqlite\u7684\u8FDE\u63A5\u5668.</p><h2 id="_1-\u5B89\u88C5rpm\u7248\u5355\u673Adremio\u65B9\u4FBF\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5rpm\u7248\u5355\u673Adremio\u65B9\u4FBF\u6D4B\u8BD5" aria-hidden="true">#</a> 1. \u5B89\u88C5rpm\u7248\u5355\u673Adremio\u65B9\u4FBF\u6D4B\u8BD5</h2><ul><li>\u4E0B\u8F7Drpm\u5305\u5230 <code>/opt/dremio</code><code>https://download.dremio.com/community-server/20.1.0-202202061055110045-36733c65/</code></li><li>\u5B89\u88C5 <code>sudo yum install dremio-community-20.1.0-202202061055110045_36733c65_1.noarch.rpm</code></li><li>\u542F\u52A8 <code>sudo service dremio start</code></li><li>\u67E5\u770B\u65E5\u5FD7 <code>tail -f /var/log/dremio/server.log</code></li><li>\u5378\u8F7D* <code>rpm -qa|grep dremio</code><code>rpm -e dremio-community-20.1.0-202202061055110045_36733c65_1.noarch</code></li><li>\u6E05\u7A7A\u5378\u8F7D\u6B8B\u7559 <code>find / -name dremio</code><code>rm -rf /var/lib/dremio</code>\u7B49</li></ul><h2 id="_2-windows\u6D4B\u8BD5\u57FA\u7C7B\u8C03\u6574" tabindex="-1"><a class="header-anchor" href="#_2-windows\u6D4B\u8BD5\u57FA\u7C7B\u8C03\u6574" aria-hidden="true">#</a> 2. windows\u6D4B\u8BD5\u57FA\u7C7B\u8C03\u6574</h2><p>\u5B98\u65B9\u63D0\u4F9B\u7684<code>BaseTestQuery</code>\u9700\u8981\u672C\u5730\u5305\u542B<code>Hadoop</code>\u73AF\u5883,windows\u76EE\u524D\u6D4B\u8BD5\u4E0D\u901A,\u6545\u5BF9\u5176\u8FDB\u884C\u4E86\u8C03\u6574,\u79FB\u9664\u4E86<code>hadoop</code>\u7684\u5185\u5BB9</p><p><code>com.dremio.BaseTestQuery</code> \u4E0B\u6587\u4E2D\u79FB\u9664\u7B2C3/10\u884C\u4EE3\u7801</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">openClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        clusterCoordinator <span class="token operator">=</span> <span class="token class-name">LocalClusterCoordinator</span><span class="token punctuation">.</span><span class="token function">newRunningCoordinator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">// dfsTestTmpSchemaLocation = TestUtilities.createTempDir();</span>
        nodes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SabotNode</span><span class="token punctuation">[</span>nodeCount<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nodeCount<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nodes<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">SABOT_NODE_RULE</span><span class="token punctuation">.</span><span class="token function">newSabotNode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BaseTestQuery<span class="token punctuation">.</span>SabotProviderConfig</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            nodes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//TestUtilities.addDefaultTestPlugins(nodes[i].getContext().getCatalogService(), dfsTestTmpSchemaLocation, true);</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        client <span class="token operator">=</span> <span class="token class-name">QueryTestUtil</span><span class="token punctuation">.</span><span class="token function">createClient</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> clusterCoordinator<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> defaultProperties<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setEnableReAttempts</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u79FB\u9664\u7B2C\u4E94\u884C\u4EE3\u7801</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token annotation punctuation">@BeforeClass</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setupDefaultTestCluster</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        config <span class="token operator">=</span> <span class="token class-name">SabotConfig</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token constant">TEST_CONFIGURATIONS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">openClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//localFs = HadoopFileSystem.getLocal(new Configuration());</span>
        <span class="token function">setSessionOption</span><span class="token punctuation">(</span><span class="token string">&quot;exec.errors.verbose&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h2 id="_3-questdb-\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#_3-questdb-\u5F00\u53D1" aria-hidden="true">#</a> 3. questDB \u5F00\u53D1</h2><p>questDB\u5B9E\u73B0\u4E86\u90E8\u5206pg\u534F\u8BAE,\u9664\u4E86\u90E8\u5206\u6570\u636E\u5E93\u65B9\u8A00\u9700\u8981\u8C03\u6574\u4EE5\u5916,\u91CD\u70B9\u5728\u4E8E\u548Cpg\u7684\u5DEE\u522B:\u6CA1\u6709information_tables\u8868,\u4E14\u65E0\u5B9E\u9645\u7684schema\u6982\u5FF5</p><h3 id="questdbconf-java" tabindex="-1"><a class="header-anchor" href="#questdbconf-java" aria-hidden="true">#</a> QuestDBConf.java</h3><p>\u8BE5\u7C7B\u7684\u6838\u5FC3\u5728\u4E8E<code>QuestDBDialect</code>/<code>QuestDBSchemaFetcher</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package com.dremio.exec.store.jdbc.conf;

import com.dremio.exec.catalog.conf.DisplayMetadata;
import com.dremio.exec.catalog.conf.NotMetadataImpacting;
import com.dremio.exec.catalog.conf.Secret;
import com.dremio.exec.catalog.conf.SourceType;
import com.dremio.exec.store.jdbc.CloseableDataSource;
import com.dremio.exec.store.jdbc.DataSources;
import com.dremio.exec.store.jdbc.JdbcFetcherProto;
import com.dremio.exec.store.jdbc.JdbcPluginConfig;
import com.dremio.exec.store.jdbc.dialect.arp.ArpDialect;
import com.dremio.exec.store.jdbc.dialect.arp.ArpYaml;
import com.dremio.options.OptionManager;
import com.dremio.security.CredentialsService;
import com.google.common.annotations.VisibleForTesting;
import io.protostuff.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.Properties;

@SourceType(value = &quot;QUESTDB&quot;, label = &quot;questDB&quot;, uiConfig = &quot;questdb-layout.json&quot;)
public class QuestDBConf extends AbstractArpConf&lt;QuestDBConf&gt; {
    private static final String ARP_FILENAME = &quot;arp/implementation/questdb-arp.yaml&quot;;
    private static final String DRIVER = &quot;org.postgresql.Driver&quot;;

    static class QuestDBSchemaFetcherV2 extends ArpDialect.ArpSchemaFetcher {
        private static final Logger logger = LoggerFactory.getLogger(QuestDBConf.QuestDBSchemaFetcherV2.class);
        private final JdbcPluginConfig config;
        @Override
        protected long getRowCount(List&lt;String&gt; tablePath) {
            Optional&lt;Long&gt; estimate = this.executeQueryAndGetFirstLong(&quot;select count(*) from TABLES &quot;);
            if (estimate.isPresent() &amp;&amp; estimate.get() != 0L) {
                return estimate.get();
            } else {
                return super.getRowCount(tablePath);
            }
        }
        public QuestDBSchemaFetcherV2(String query, JdbcPluginConfig config) {
            super(query, config);
            this.config = config;
            logger.info(&quot;query schema:{}&quot;, query);
        }

        @Override
        protected JdbcFetcherProto.CanonicalizeTablePathResponse getDatasetHandleViaGetTables(JdbcFetcherProto.CanonicalizeTablePathRequest request, Connection connection) throws SQLException {
            JdbcFetcherProto.CanonicalizeTablePathResponse.Builder responseBuilder = JdbcFetcherProto.CanonicalizeTablePathResponse.newBuilder();
            responseBuilder.setTable(request.getTable());
            responseBuilder.setSchema(&quot;&quot;);
            responseBuilder.setCatalog(&quot;&quot;);
            return responseBuilder.build();
        }

        private static void closeResource(Throwable throwable, AutoCloseable autoCloseable) throws Exception {
            if (throwable != null) {
                try {
                    autoCloseable.close();
                } catch (Throwable throwable1) {
                    throwable.addSuppressed(throwable1);
                }
            } else {
                autoCloseable.close();
            }

        }

    }

    static class QuestDBDialect extends ArpDialect {
        public QuestDBDialect(ArpYaml yaml) {
            super(yaml);
        }

        @Override
        public ArpSchemaFetcher newSchemaFetcher(JdbcPluginConfig config) {
            return new QuestDBSchemaFetcherV2(&quot;select null,null  , name AS NME from TABLES&quot;, config);
        }

        @Override
        public ContainerSupport supportsCatalogs() {
            return ContainerSupport.UNSUPPORTED;
        }

        @Override
        public boolean supportsNestedAggregations() {
            return false;
        }
    }


    @Tag(1)
    @DisplayMetadata(label = &quot;host (Ex: 127.0.0.1)&quot;)
    public String host;
    @Tag(2)
    @DisplayMetadata(label = &quot;port (Ex : 8812)&quot;)
    public String port;


    @Tag(3)
    @DisplayMetadata(label = &quot;username&quot;)
    @NotMetadataImpacting
    public String username = &quot;admin&quot;;
    @Tag(4)
    @Secret
    @DisplayMetadata(label = &quot;password&quot;)
    @NotMetadataImpacting
    public String password = &quot;quest&quot;;
    @Tag(5)
    @DisplayMetadata(label = &quot;Record fetch size&quot;)
    @NotMetadataImpacting
    public int fetchSize = 200;
    @Tag(6)
    @DisplayMetadata(
            label = &quot;Maximum idle connections&quot;
    )
    @NotMetadataImpacting
    public int maxIdleConns = 8;

    @Tag(7)
    @DisplayMetadata(
            label = &quot;Connection idle time (s)&quot;
    )
    @NotMetadataImpacting
    public int idleTimeSec = 60;



    @Override
    @VisibleForTesting
    public JdbcPluginConfig buildPluginConfig(JdbcPluginConfig.Builder configBuilder, CredentialsService credentialsService, OptionManager optionManager) {
        return configBuilder.withDialect(getDialect())
                .withFetchSize(fetchSize)
                .clearHiddenSchemas()
                .addHiddenSchema(&quot;sys&quot;)
                .withDatasourceFactory(this::newDataSource)
                .build();
    }
    //jdbc:postgresql://192.168.203.128:8812/admin?sslmode=disable
    private CloseableDataSource newDataSource() {
        Properties properties = new Properties();
        String jdbcURL = &quot;jdbc:postgresql://&quot;+this.host+&quot;:&quot;+this.port+&quot;/admin?sslmode=disable&quot;;
        CloseableDataSource dataSource = DataSources.newGenericConnectionPoolDataSource(DRIVER, jdbcURL, this.username, this.password, properties, DataSources.CommitMode.DRIVER_SPECIFIED_COMMIT_MODE, this.maxIdleConns, this.idleTimeSec);
        return dataSource;
    }

    @Override
    public ArpDialect getDialect() {
        return AbstractArpConf.loadArpFile(ARP_FILENAME, t-&gt;new QuestDBDialect(t));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br></div></div><h3 id="questdb-arp-yaml" tabindex="-1"><a class="header-anchor" href="#questdb-arp-yaml" aria-hidden="true">#</a> questdb-arp.yaml</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#</span>
<span class="token comment"># Copyright (C) 2017-2019 Dremio Corporation</span>
<span class="token comment">#</span>
<span class="token comment"># Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span>
<span class="token comment"># you may not use this file except in compliance with the License.</span>
<span class="token comment"># You may obtain a copy of the License at</span>
<span class="token comment">#</span>
<span class="token comment">#     http://www.apache.org/licenses/LICENSE-2.0</span>
<span class="token comment">#</span>
<span class="token comment"># Unless required by applicable law or agreed to in writing, software</span>
<span class="token comment"># distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span>
<span class="token comment"># WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span>
<span class="token comment"># See the License for the specific language governing permissions and</span>
<span class="token comment"># limitations under the License.</span>
<span class="token comment">#</span>

<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token comment"># Manually Configured Metadata Section.</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> QUESTDB
  <span class="token key atrule">apiname</span><span class="token punctuation">:</span> questdb
  <span class="token key atrule">spec_version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>

<span class="token key atrule">syntax</span><span class="token punctuation">:</span>
  <span class="token key atrule">identifier_quote</span><span class="token punctuation">:</span> <span class="token string">&#39;&quot;&#39;</span>
  <span class="token key atrule">identifier_length_limit</span><span class="token punctuation">:</span> <span class="token number">256</span>
  <span class="token key atrule">allows_boolean_literal</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">map_boolean_literal_to_bit</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">supports_catalogs</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">supports_schemas</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>


<span class="token key atrule">data_types</span><span class="token punctuation">:</span>
  <span class="token key atrule">mappings</span><span class="token punctuation">:</span>
    <span class="token comment">#------------Boolean types--------------#</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
      <span class="token key atrule">dremio</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>

    <span class="token comment">#------------Numeric types--------------#</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;int&quot;</span>
      <span class="token key atrule">dremio</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
      <span class="token key atrule">dremio</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
      <span class="token key atrule">dremio</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;long&quot;</span>
      <span class="token key atrule">dremio</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;long256&quot;</span>
      <span class="token key atrule">dremio</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;byte&quot;</span>
      <span class="token key atrule">dremio</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>

    <span class="token comment">#------------String types--------------#</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span>
      <span class="token key atrule">dremio</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;char&quot;</span>
      <span class="token key atrule">dremio</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>

    <span class="token comment">#------------Binary--------------#</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;binary&quot;</span>
      <span class="token key atrule">dremio</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;varbinary&quot;</span>

    <span class="token comment">#------------Date types--------------#</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
      <span class="token key atrule">dremio</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
      <span class="token key atrule">dremio</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>

<span class="token key atrule">relational_algebra</span><span class="token punctuation">:</span>
  <span class="token key atrule">aggregation</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">group_by_ordinal</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">distinct</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">count_functions</span><span class="token punctuation">:</span>
      <span class="token key atrule">count_star</span><span class="token punctuation">:</span>
        <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">count</span><span class="token punctuation">:</span>
        <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">count_distinct</span><span class="token punctuation">:</span>
        <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

    <span class="token key atrule">functions</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;avg&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;max&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;min&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;sum&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
  <span class="token key atrule">except</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">project</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">join</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">cross</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;{0}, {1}&quot;</span>
    <span class="token key atrule">inner</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">inequality</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">left</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">inequality</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">right</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">inequality</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">full</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">inequality</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">sort</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">order_by</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">default_nulls_ordering</span><span class="token punctuation">:</span> high
    <span class="token key atrule">fetch_offset</span><span class="token punctuation">:</span>
      <span class="token key atrule">offset_fetch</span><span class="token punctuation">:</span>
        <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&#39;LIMIT {1} OFFSET {0}&#39;</span>
      <span class="token key atrule">offset_only</span><span class="token punctuation">:</span>
        <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token key atrule">fetch_only</span><span class="token punctuation">:</span>
        <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&#39;LIMIT {0}&#39;</span>
  <span class="token key atrule">union</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">union_all</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">values</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">method</span><span class="token punctuation">:</span> values

<span class="token key atrule">expressions</span><span class="token punctuation">:</span>
  <span class="token key atrule">subqueries</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">correlated</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">scalar</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">in_clause</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">exists_clause</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">supports_case</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">supports_over</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">datetime_formats</span><span class="token punctuation">:</span>
    <span class="token key atrule">era</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;AD&quot;</span>
    <span class="token key atrule">meridian</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;AM&quot;</span>
    <span class="token key atrule">century</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;CC&quot;</span>
    <span class="token key atrule">week_of_year</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;WW&quot;</span>
    <span class="token key atrule">day_of_week</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;D&quot;</span>
    <span class="token key atrule">day_name_abbreviated</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;Dy&quot;</span>
    <span class="token key atrule">day_name</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;Day&quot;</span>
    <span class="token key atrule">year_4</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;YYYY&quot;</span>
    <span class="token key atrule">year_2</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;YY&quot;</span>
    <span class="token key atrule">day_of_year</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;DDD&quot;</span>
    <span class="token key atrule">month</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;MM&quot;</span>
    <span class="token key atrule">month_name_abbreviated</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;Mon&quot;</span>
    <span class="token key atrule">month_name</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;Month&quot;</span>
    <span class="token key atrule">day_of_month</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;DD&quot;</span>
    <span class="token key atrule">hour_12</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;HH&quot;</span>
    <span class="token key atrule">hour_24</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;HH24&quot;</span>
    <span class="token key atrule">minute</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;MI&quot;</span>
    <span class="token key atrule">second</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;SS&quot;</span>
    <span class="token key atrule">millisecond</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;MS&quot;</span>
    <span class="token key atrule">timezone_abbreviation</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;TZ&quot;</span>
    <span class="token key atrule">timezone_offset</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;OF&quot;</span>
  <span class="token key atrule">operators</span><span class="token punctuation">:</span>
    <span class="token comment"># Custom Expressions</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;cast&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(TRUNC(CAST({0} AS DECIMAL), 0) AS INTEGER)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(TRUNC(CAST({0} AS DECIMAL), 0) AS BIGINT)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;to_char&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token comment"># Numeric TO_CHAR variations are not added as Dremio format strings don&#39;t match Postgres.</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;trim&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;left&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;right&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;ltrim&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;rtrim&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;sign&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;floor&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;position&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;locate&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;STRPOS({1}, {0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL OR {2} IS NULL THEN NULL WHEN STRPOS(SUBSTRING({1}, {2}), {0}) &gt; 0 THEN CASE WHEN {2} &gt;= 1 THEN STRPOS(SUBSTRING({1}, {2}), {0}) + {2} - 1 ELSE STRPOS({1}, {0}) END ELSE 0 END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL OR {2} IS NULL THEN NULL WHEN STRPOS(SUBSTRING({1}, {2}), {0}) &gt; 0 THEN CASE WHEN {2} &gt;= 1 THEN STRPOS(SUBSTRING({1}, {2}), {0}) + {2} - 1 ELSE STRPOS({1}, {0}) END ELSE 0 END &quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;pi&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;truncate&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;trunc&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;TRUNC({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;TRUNC(CAST({0} as decimal), {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;TRUNC(CAST({0} as decimal), {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(TRUNC({0}, {1}) AS BIGINT)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(TRUNC({0}, {1}) AS INTEGER)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;TRUNC({0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;TRUNC(CAST({0} as decimal))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;TRUNC(CAST({0} as decimal))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(TRUNC({0}) AS INTEGER)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(TRUNC({0}) AS BIGINT)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;reverse&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;rpad&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;RPAD({0}, {1}, &#39;&#39; &#39;&#39;)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;RPAD({0}, {1}, &#39;&#39; &#39;&#39;)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;lpad&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LPAD({0}, {1}, &#39;&#39; &#39;&#39;)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LPAD({0}, {1}, &#39;&#39; &#39;&#39;)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_year
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(YEAR FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(YEAR FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(YEAR FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(YEAR FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(YEAR FROM {0}) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_month
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MONTH FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MONTH FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MONTH FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MONTH FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MONTH FROM {0}) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_day
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DAY FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DAY FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DAY FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DAY FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DAY FROM {0}) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_hour
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(HOUR FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(HOUR FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(HOUR FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(HOUR FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(HOUR FROM {0}) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_minute
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MINUTE FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MINUTE FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MINUTE FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MINUTE FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MINUTE FROM {0}) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_second
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(SECOND FROM DATE_TRUNC(&#39;&#39;SECOND&#39;&#39;, {0})) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(SECOND FROM DATE_TRUNC(&#39;&#39;SECOND&#39;&#39;, {0})) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(SECOND FROM DATE_TRUNC(&#39;&#39;SECOND&#39;&#39;, {0})) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(SECOND FROM DATE_TRUNC(&#39;&#39;SECOND&#39;&#39;, {0})) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(SECOND FROM DATE_TRUNC(&#39;&#39;SECOND&#39;&#39;, {0})) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_century
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(CENTURY FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(CENTURY FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(CENTURY FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(CENTURY FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(CENTURY FROM {0}) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_decade
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DECADE FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DECADE FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DECADE FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DECADE FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DECADE FROM {0}) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_dow
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DOW FROM {0}) + 1 AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DOW FROM {0}) + 1 AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DOW FROM {0}) + 1 AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DOW FROM {0}) + 1 AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DOW FROM {0}) + 1 AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_doy
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DOY FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DOY FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DOY FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DOY FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(DOY FROM {0}) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_epoch
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(EPOCH FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(EPOCH FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(EPOCH FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(EPOCH FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(EPOCH FROM {0}) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_millennium
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MILLENIUM FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MILLENIUM FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MILLENIUM FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MILLENIUM FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(MILLENIUM FROM {0}) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_quarter
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(QUARTER FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(QUARTER FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(QUARTER FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(QUARTER FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(QUARTER FROM {0}) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> extract_week
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> date
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(WEEK FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(WEEK FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> time
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(WEEK FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_year_month
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(WEEK FROM {0}) AS INT8)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> bigint
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> interval_day_second
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXTRACT(WEEK FROM {0}) AS INT8)&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;to_date&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;TO_DATE(CAST({0} AS VARCHAR), {1})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;date_trunc_year&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;year&#39;&#39;, {0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;year&#39;&#39;, {0})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;date_trunc_quarter&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;quarter&#39;&#39;, {0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;quarter&#39;&#39;, {0})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;date_trunc_month&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;month&#39;&#39;, {0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;month&#39;&#39;, {0})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;date_trunc_week&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;week&#39;&#39;, {0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;week&#39;&#39;, {0})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;date_trunc_day&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;day&#39;&#39;, {0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;day&#39;&#39;, {0})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;date_trunc_hour&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;hour&#39;&#39;, {0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;hour&#39;&#39;, {0})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;date_trunc_minute&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;minute&#39;&#39;, {0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;minute&#39;&#39;, {0})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;date_trunc_second&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;second&#39;&#39;, {0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;second&#39;&#39;, {0})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;date_trunc_decade&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;decade&#39;&#39;, {0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;decade&#39;&#39;, {0})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;date_trunc_century&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;century&#39;&#39;, {0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;DATE_TRUNC(&#39;&#39;century&#39;&#39;, {0})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;-&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;+&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;/&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;*&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;interval_day_second&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;interval_day_second&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;interval_day_second&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;interval_day_second&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;interval_year_month&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;interval_year_month&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;interval_year_month&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;interval_year_month&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;%&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE ({0} % {1}) END &quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;-&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;interval_day_second&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;interval_year_month&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;+&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_day_second&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;interval_day_second&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;interval_year_month&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;interval_year_month&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;log&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LN(CAST({0} AS DOUBLE PRECISION))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LN({0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LN({0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LN({0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LN({0})&quot;</span>
        <span class="token comment"># Note: Postgres doesn&#39;t have a log function which takes an approx numeric as the second argument.</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(LOG({0}, {1}) AS DOUBLE PRECISION)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(LOG({0}, {1}) AS DOUBLE PRECISION)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(LOG({0}, {1}) AS DOUBLE PRECISION)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0}, {1})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;log10&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(LOG({0}) AS DOUBLE PRECISION)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;LOG({0})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;round&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;ROUND(CAST({0} as decimal), {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;ROUND(CAST({0} as decimal), {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;ROUND(CAST({0} as decimal), {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;ROUND(CAST({0} as decimal), {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;ROUND(CAST({0} as decimal), {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;ROUND(CAST({0} as decimal), {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;ROUND(CAST({0} as decimal), {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;ROUND(CAST({0} as decimal), {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;ROUND(CAST({0} as decimal), {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;ROUND(CAST({0} as decimal), {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
    <span class="token comment"># Modified Expressions</span>

    <span class="token comment"># Generated expressions</span>

    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;+&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;-&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} + CAST({1} AS DOUBLE PRECISION))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} + CAST({1} AS FLOAT))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DOUBLE PRECISION) + {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS FLOAT) + {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;timestamp&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;/&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DOUBLE PRECISION) / {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DOUBLE PRECISION) / {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DOUBLE PRECISION) / {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DOUBLE PRECISION) / {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DOUBLE PRECISION) / {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DOUBLE PRECISION) / {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;*&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;is null&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;is not null&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;is distinct from&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^-?[0-9]+$&#39;&#39; AND CAST({0} AS INT8) = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^-?[0-9]+$&#39;&#39; AND {0} = CAST({1} AS INT8)) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^-?[0-9]+$&#39;&#39; AND CAST({0} AS INT8) = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^-?[0-9]+$&#39;&#39; AND {0} = CAST({1} AS INT8)) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^[+\\\\-]?[0-9]+\\\\.?[0-9]*$&#39;&#39; AND CAST({0} AS FLOAT8) = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^[+\\\\-]?[0-9]+\\\\.?[0-9]*$&#39;&#39; AND {0} = CAST({1} AS FLOAT8)) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^[0-9]+\\\\-[0-9][0-9]\\\\-[0-9][0-9]( [0-9]+:[0-9][0-9]:[0-9][0-9](\\\\.[0-9]+)?)?$&#39;&#39; AND CAST({0} AS TIMESTAMP) = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^[0-9]+\\\\-[0-9][0-9]\\\\-[0-9][0-9]( [0-9]+:[0-9][0-9]:[0-9][0-9](\\\\.[0-9]+)?)?$&#39;&#39; AND {0} = CAST({1} AS TIMESTAMP)) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^[0-9]+:[0-9][0-9](:[0-9][0-9](\\\\.[0-9]+))?$&#39;&#39; AND CAST({0} AS TIME) = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^[0-9]+:[0-9][0-9](:[0-9][0-9](\\\\.[0-9]+))?$&#39;&#39; AND {0} = CAST({1} AS TIME)) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^[0-9]+\\\\-[0-9][0-9]\\\\-[0-9][0-9]( 00:00:00(.0+)?)?$&#39;&#39; AND CAST({0} AS DATE) = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^[0-9]+\\\\-[0-9][0-9]\\\\-[0-9][0-9]( 00:00:00(.0+)?)?$&#39;&#39; AND {0} = CAST({1} AS DATE)) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR (LOWER({1}) ~ &#39;&#39;^([tf01yn]|yes|no|true|false|on|off)$&#39;&#39; AND {0} = CAST({1} AS BOOLEAN)) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR (LOWER({0}) ~ &#39;&#39;^([tf01yn]|yes|no|true|false|on|off)$&#39;&#39; AND CAST({0} AS BOOLEAN) = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^[+\\\\-]?[0-9]+\\\\.?[0-9]*$&#39;&#39; AND {0} = CAST({1} AS FLOAT4)) THEN 0 ELSE 1 END = 1 &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN ({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^[+\\\\-]?[0-9]+\\\\.?[0-9]*$&#39;&#39; AND CAST({1} AS FLOAT4) = {1}) THEN 0 ELSE 1 END = 1 &quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;is not distinct from&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^-?[0-9]+$&#39;&#39; AND CAST({0} AS INT8) = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^-?[0-9]+$&#39;&#39; AND {0} = CAST({1} AS INT8)))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^-?[0-9]+$&#39;&#39; AND CAST({0} AS INT8) = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^-?[0-9]+$&#39;&#39; AND {0} = CAST({1} AS INT8)))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^[+\\\\-]?[0-9]+\\\\.?[0-9]*$&#39;&#39; AND CAST({0} AS FLOAT8) = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^[+\\\\-]?[0-9]+\\\\.?[0-9]*$&#39;&#39; AND {0} = CAST({1} AS FLOAT8)))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^[0-9]+\\\\-[0-9][0-9]\\\\-[0-9][0-9]( [0-9]+:[0-9][0-9]:[0-9][0-9](\\\\.[0-9]+)?)?$&#39;&#39; AND CAST({0} AS TIMESTAMP) = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^[0-9]+\\\\-[0-9][0-9]\\\\-[0-9][0-9]( [0-9]+:[0-9][0-9]:[0-9][0-9](\\\\.[0-9]+)?)?$&#39;&#39; AND {0} = CAST({1} AS TIMESTAMP)))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^[0-9]+:[0-9][0-9](:[0-9][0-9](\\\\.[0-9]+))?$&#39;&#39; AND CAST({0} AS TIME) = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^[0-9]+:[0-9][0-9](:[0-9][0-9](\\\\.[0-9]+))?$&#39;&#39; AND {0} = CAST({1} AS TIME)))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^[0-9]+\\\\-[0-9][0-9]\\\\-[0-9][0-9]( 00:00:00(.0+)?)?$&#39;&#39; AND CAST({0} AS DATE) = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^[0-9]+\\\\-[0-9][0-9]\\\\-[0-9][0-9]( 00:00:00(.0+)?)?$&#39;&#39; AND {0} = CAST({1} AS DATE)))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR (LOWER({1}) ~ &#39;&#39;^([tf01yn]|yes|no|true|false|on|off)$&#39;&#39; AND {0} = CAST({1} AS BOOLEAN)))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR (LOWER({0}) ~ &#39;&#39;^([tf01yn]|yes|no|true|false|on|off)$&#39;&#39; AND CAST({0} AS BOOLEAN) = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} = {1}))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({1} ~ &#39;&#39;^[+\\\\-]?[0-9]+\\\\.?[0-9]*$&#39;&#39; AND {0} = CAST({1} AS FLOAT4)))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(({0} IS NULL AND {1} IS NULL) OR ({0} ~ &#39;&#39;^[+\\\\-]?[0-9]+\\\\.?[0-9]*$&#39;&#39; AND CAST({1} AS FLOAT4) = {1}))&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;=&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;!=&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;&lt;&gt;&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;&gt;&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;&gt;=&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;&lt;&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;&lt;=&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;=&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DATE) = {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS TIME) = {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS TIMESTAMP) = {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} = CAST({1} AS DATE))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} = CAST({1} AS TIMESTAMP))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} = CAST({1} AS TIME))&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;&gt;&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DATE) &gt; {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS TIME) &gt; {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS TIMESTAMP) &gt; {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} &lt; CAST({1} AS DATE))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} &lt; CAST({1} AS TIMESTAMP))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} &lt; CAST({1} AS TIME))&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;&gt;=&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DATE) &gt;= {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS TIME) &gt;= {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS TIMESTAMP) &gt;= {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} &lt;= CAST({1} AS DATE))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} &lt;= CAST({1} AS TIMESTAMP))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} &lt;= CAST({1} AS TIME))&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;&lt;&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DATE) &lt; {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS TIME) &lt; {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS TIMESTAMP) &lt; {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} &gt; CAST({1} AS DATE))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} &gt; CAST({1} AS TIMESTAMP))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} &gt; CAST({1} AS TIME))&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;&lt;=&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DATE) &lt;= {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS TIME) &lt;= {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS TIMESTAMP) &lt;= {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} &gt;= CAST({1} AS DATE))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} &gt;= CAST({1} AS TIMESTAMP))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} &gt;= CAST({1} AS TIME))&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;!=&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;&lt;&gt;&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS DATE) != {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS TIME) != {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;(CAST({0} AS TIMESTAMP) != {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} != CAST({1} AS DATE))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} != CAST({1} AS TIMESTAMP))&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} != CAST({1} AS TIME))&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;regexp_like&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;({0} ~ {1})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;like&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;not&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;||&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;time&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varbinary&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varbinary&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;timestamp&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;date&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {0} IS NULL OR {1} IS NULL THEN NULL ELSE CONCAT({0}, {1}) END &quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;or&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;boolean&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;abs&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;acos&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;asin&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;atan&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;atan2&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;cbrt&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;ceil&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;ceiling&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;cos&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;cot&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;degrees&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;e&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;exp&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(EXP({0}) AS DOUBLE PRECISION)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;ln&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(LN({0}) AS DOUBLE PRECISION)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;mod&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CASE WHEN {1} = 0 THEN NULL ELSE MOD({0}, {1}) END &quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;power&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;pow&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(POWER({0}, {1}) AS DOUBLE PRECISION)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(POWER({0}, {1}) AS DOUBLE PRECISION)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(POWER({0}, {1}) AS DOUBLE PRECISION)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(POWER({0}, {1}) AS DOUBLE PRECISION)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;CAST(POWER({0}, {1}) AS DOUBLE PRECISION)&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">rewrite</span><span class="token punctuation">:</span> <span class="token string">&quot;POWER({0}, {1})&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;radians&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;sin&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;sqrt&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;tan&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;decimal&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;bigint&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;float&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;double&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;char_length&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;character_length&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;lower&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;replace&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;substring&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;substr&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;substring&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;substr&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;integer&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;upper&quot;</span>
      <span class="token key atrule">signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;varchar&quot;</span>
          <span class="token key atrule">return</span><span class="token punctuation">:</span> <span class="token string">&quot;varchar&quot;</span>
  <span class="token key atrule">variable_length_operators</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> concat
      <span class="token key atrule">variable_signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> varchar
          <span class="token key atrule">arg_type</span><span class="token punctuation">:</span> varchar
          <span class="token key atrule">variable_rewrite</span><span class="token punctuation">:</span>
            <span class="token key atrule">separator_sequence</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token string">&#39;, &#39;</span>
            <span class="token key atrule">rewrite_format</span><span class="token punctuation">:</span> <span class="token string">&#39;CONCAT({separator[0]})&#39;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> and
      <span class="token key atrule">variable_signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> boolean
          <span class="token key atrule">arg_type</span><span class="token punctuation">:</span> boolean
    <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> or
      <span class="token key atrule">variable_signatures</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">return</span><span class="token punctuation">:</span> boolean
          <span class="token key atrule">arg_type</span><span class="token punctuation">:</span> boolean
  <span class="token key atrule">window_functions</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br><span class="line-number">433</span><br><span class="line-number">434</span><br><span class="line-number">435</span><br><span class="line-number">436</span><br><span class="line-number">437</span><br><span class="line-number">438</span><br><span class="line-number">439</span><br><span class="line-number">440</span><br><span class="line-number">441</span><br><span class="line-number">442</span><br><span class="line-number">443</span><br><span class="line-number">444</span><br><span class="line-number">445</span><br><span class="line-number">446</span><br><span class="line-number">447</span><br><span class="line-number">448</span><br><span class="line-number">449</span><br><span class="line-number">450</span><br><span class="line-number">451</span><br><span class="line-number">452</span><br><span class="line-number">453</span><br><span class="line-number">454</span><br><span class="line-number">455</span><br><span class="line-number">456</span><br><span class="line-number">457</span><br><span class="line-number">458</span><br><span class="line-number">459</span><br><span class="line-number">460</span><br><span class="line-number">461</span><br><span class="line-number">462</span><br><span class="line-number">463</span><br><span class="line-number">464</span><br><span class="line-number">465</span><br><span class="line-number">466</span><br><span class="line-number">467</span><br><span class="line-number">468</span><br><span class="line-number">469</span><br><span class="line-number">470</span><br><span class="line-number">471</span><br><span class="line-number">472</span><br><span class="line-number">473</span><br><span class="line-number">474</span><br><span class="line-number">475</span><br><span class="line-number">476</span><br><span class="line-number">477</span><br><span class="line-number">478</span><br><span class="line-number">479</span><br><span class="line-number">480</span><br><span class="line-number">481</span><br><span class="line-number">482</span><br><span class="line-number">483</span><br><span class="line-number">484</span><br><span class="line-number">485</span><br><span class="line-number">486</span><br><span class="line-number">487</span><br><span class="line-number">488</span><br><span class="line-number">489</span><br><span class="line-number">490</span><br><span class="line-number">491</span><br><span class="line-number">492</span><br><span class="line-number">493</span><br><span class="line-number">494</span><br><span class="line-number">495</span><br><span class="line-number">496</span><br><span class="line-number">497</span><br><span class="line-number">498</span><br><span class="line-number">499</span><br><span class="line-number">500</span><br><span class="line-number">501</span><br><span class="line-number">502</span><br><span class="line-number">503</span><br><span class="line-number">504</span><br><span class="line-number">505</span><br><span class="line-number">506</span><br><span class="line-number">507</span><br><span class="line-number">508</span><br><span class="line-number">509</span><br><span class="line-number">510</span><br><span class="line-number">511</span><br><span class="line-number">512</span><br><span class="line-number">513</span><br><span class="line-number">514</span><br><span class="line-number">515</span><br><span class="line-number">516</span><br><span class="line-number">517</span><br><span class="line-number">518</span><br><span class="line-number">519</span><br><span class="line-number">520</span><br><span class="line-number">521</span><br><span class="line-number">522</span><br><span class="line-number">523</span><br><span class="line-number">524</span><br><span class="line-number">525</span><br><span class="line-number">526</span><br><span class="line-number">527</span><br><span class="line-number">528</span><br><span class="line-number">529</span><br><span class="line-number">530</span><br><span class="line-number">531</span><br><span class="line-number">532</span><br><span class="line-number">533</span><br><span class="line-number">534</span><br><span class="line-number">535</span><br><span class="line-number">536</span><br><span class="line-number">537</span><br><span class="line-number">538</span><br><span class="line-number">539</span><br><span class="line-number">540</span><br><span class="line-number">541</span><br><span class="line-number">542</span><br><span class="line-number">543</span><br><span class="line-number">544</span><br><span class="line-number">545</span><br><span class="line-number">546</span><br><span class="line-number">547</span><br><span class="line-number">548</span><br><span class="line-number">549</span><br><span class="line-number">550</span><br><span class="line-number">551</span><br><span class="line-number">552</span><br><span class="line-number">553</span><br><span class="line-number">554</span><br><span class="line-number">555</span><br><span class="line-number">556</span><br><span class="line-number">557</span><br><span class="line-number">558</span><br><span class="line-number">559</span><br><span class="line-number">560</span><br><span class="line-number">561</span><br><span class="line-number">562</span><br><span class="line-number">563</span><br><span class="line-number">564</span><br><span class="line-number">565</span><br><span class="line-number">566</span><br><span class="line-number">567</span><br><span class="line-number">568</span><br><span class="line-number">569</span><br><span class="line-number">570</span><br><span class="line-number">571</span><br><span class="line-number">572</span><br><span class="line-number">573</span><br><span class="line-number">574</span><br><span class="line-number">575</span><br><span class="line-number">576</span><br><span class="line-number">577</span><br><span class="line-number">578</span><br><span class="line-number">579</span><br><span class="line-number">580</span><br><span class="line-number">581</span><br><span class="line-number">582</span><br><span class="line-number">583</span><br><span class="line-number">584</span><br><span class="line-number">585</span><br><span class="line-number">586</span><br><span class="line-number">587</span><br><span class="line-number">588</span><br><span class="line-number">589</span><br><span class="line-number">590</span><br><span class="line-number">591</span><br><span class="line-number">592</span><br><span class="line-number">593</span><br><span class="line-number">594</span><br><span class="line-number">595</span><br><span class="line-number">596</span><br><span class="line-number">597</span><br><span class="line-number">598</span><br><span class="line-number">599</span><br><span class="line-number">600</span><br><span class="line-number">601</span><br><span class="line-number">602</span><br><span class="line-number">603</span><br><span class="line-number">604</span><br><span class="line-number">605</span><br><span class="line-number">606</span><br><span class="line-number">607</span><br><span class="line-number">608</span><br><span class="line-number">609</span><br><span class="line-number">610</span><br><span class="line-number">611</span><br><span class="line-number">612</span><br><span class="line-number">613</span><br><span class="line-number">614</span><br><span class="line-number">615</span><br><span class="line-number">616</span><br><span class="line-number">617</span><br><span class="line-number">618</span><br><span class="line-number">619</span><br><span class="line-number">620</span><br><span class="line-number">621</span><br><span class="line-number">622</span><br><span class="line-number">623</span><br><span class="line-number">624</span><br><span class="line-number">625</span><br><span class="line-number">626</span><br><span class="line-number">627</span><br><span class="line-number">628</span><br><span class="line-number">629</span><br><span class="line-number">630</span><br><span class="line-number">631</span><br><span class="line-number">632</span><br><span class="line-number">633</span><br><span class="line-number">634</span><br><span class="line-number">635</span><br><span class="line-number">636</span><br><span class="line-number">637</span><br><span class="line-number">638</span><br><span class="line-number">639</span><br><span class="line-number">640</span><br><span class="line-number">641</span><br><span class="line-number">642</span><br><span class="line-number">643</span><br><span class="line-number">644</span><br><span class="line-number">645</span><br><span class="line-number">646</span><br><span class="line-number">647</span><br><span class="line-number">648</span><br><span class="line-number">649</span><br><span class="line-number">650</span><br><span class="line-number">651</span><br><span class="line-number">652</span><br><span class="line-number">653</span><br><span class="line-number">654</span><br><span class="line-number">655</span><br><span class="line-number">656</span><br><span class="line-number">657</span><br><span class="line-number">658</span><br><span class="line-number">659</span><br><span class="line-number">660</span><br><span class="line-number">661</span><br><span class="line-number">662</span><br><span class="line-number">663</span><br><span class="line-number">664</span><br><span class="line-number">665</span><br><span class="line-number">666</span><br><span class="line-number">667</span><br><span class="line-number">668</span><br><span class="line-number">669</span><br><span class="line-number">670</span><br><span class="line-number">671</span><br><span class="line-number">672</span><br><span class="line-number">673</span><br><span class="line-number">674</span><br><span class="line-number">675</span><br><span class="line-number">676</span><br><span class="line-number">677</span><br><span class="line-number">678</span><br><span class="line-number">679</span><br><span class="line-number">680</span><br><span class="line-number">681</span><br><span class="line-number">682</span><br><span class="line-number">683</span><br><span class="line-number">684</span><br><span class="line-number">685</span><br><span class="line-number">686</span><br><span class="line-number">687</span><br><span class="line-number">688</span><br><span class="line-number">689</span><br><span class="line-number">690</span><br><span class="line-number">691</span><br><span class="line-number">692</span><br><span class="line-number">693</span><br><span class="line-number">694</span><br><span class="line-number">695</span><br><span class="line-number">696</span><br><span class="line-number">697</span><br><span class="line-number">698</span><br><span class="line-number">699</span><br><span class="line-number">700</span><br><span class="line-number">701</span><br><span class="line-number">702</span><br><span class="line-number">703</span><br><span class="line-number">704</span><br><span class="line-number">705</span><br><span class="line-number">706</span><br><span class="line-number">707</span><br><span class="line-number">708</span><br><span class="line-number">709</span><br><span class="line-number">710</span><br><span class="line-number">711</span><br><span class="line-number">712</span><br><span class="line-number">713</span><br><span class="line-number">714</span><br><span class="line-number">715</span><br><span class="line-number">716</span><br><span class="line-number">717</span><br><span class="line-number">718</span><br><span class="line-number">719</span><br><span class="line-number">720</span><br><span class="line-number">721</span><br><span class="line-number">722</span><br><span class="line-number">723</span><br><span class="line-number">724</span><br><span class="line-number">725</span><br><span class="line-number">726</span><br><span class="line-number">727</span><br><span class="line-number">728</span><br><span class="line-number">729</span><br><span class="line-number">730</span><br><span class="line-number">731</span><br><span class="line-number">732</span><br><span class="line-number">733</span><br><span class="line-number">734</span><br><span class="line-number">735</span><br><span class="line-number">736</span><br><span class="line-number">737</span><br><span class="line-number">738</span><br><span class="line-number">739</span><br><span class="line-number">740</span><br><span class="line-number">741</span><br><span class="line-number">742</span><br><span class="line-number">743</span><br><span class="line-number">744</span><br><span class="line-number">745</span><br><span class="line-number">746</span><br><span class="line-number">747</span><br><span class="line-number">748</span><br><span class="line-number">749</span><br><span class="line-number">750</span><br><span class="line-number">751</span><br><span class="line-number">752</span><br><span class="line-number">753</span><br><span class="line-number">754</span><br><span class="line-number">755</span><br><span class="line-number">756</span><br><span class="line-number">757</span><br><span class="line-number">758</span><br><span class="line-number">759</span><br><span class="line-number">760</span><br><span class="line-number">761</span><br><span class="line-number">762</span><br><span class="line-number">763</span><br><span class="line-number">764</span><br><span class="line-number">765</span><br><span class="line-number">766</span><br><span class="line-number">767</span><br><span class="line-number">768</span><br><span class="line-number">769</span><br><span class="line-number">770</span><br><span class="line-number">771</span><br><span class="line-number">772</span><br><span class="line-number">773</span><br><span class="line-number">774</span><br><span class="line-number">775</span><br><span class="line-number">776</span><br><span class="line-number">777</span><br><span class="line-number">778</span><br><span class="line-number">779</span><br><span class="line-number">780</span><br><span class="line-number">781</span><br><span class="line-number">782</span><br><span class="line-number">783</span><br><span class="line-number">784</span><br><span class="line-number">785</span><br><span class="line-number">786</span><br><span class="line-number">787</span><br><span class="line-number">788</span><br><span class="line-number">789</span><br><span class="line-number">790</span><br><span class="line-number">791</span><br><span class="line-number">792</span><br><span class="line-number">793</span><br><span class="line-number">794</span><br><span class="line-number">795</span><br><span class="line-number">796</span><br><span class="line-number">797</span><br><span class="line-number">798</span><br><span class="line-number">799</span><br><span class="line-number">800</span><br><span class="line-number">801</span><br><span class="line-number">802</span><br><span class="line-number">803</span><br><span class="line-number">804</span><br><span class="line-number">805</span><br><span class="line-number">806</span><br><span class="line-number">807</span><br><span class="line-number">808</span><br><span class="line-number">809</span><br><span class="line-number">810</span><br><span class="line-number">811</span><br><span class="line-number">812</span><br><span class="line-number">813</span><br><span class="line-number">814</span><br><span class="line-number">815</span><br><span class="line-number">816</span><br><span class="line-number">817</span><br><span class="line-number">818</span><br><span class="line-number">819</span><br><span class="line-number">820</span><br><span class="line-number">821</span><br><span class="line-number">822</span><br><span class="line-number">823</span><br><span class="line-number">824</span><br><span class="line-number">825</span><br><span class="line-number">826</span><br><span class="line-number">827</span><br><span class="line-number">828</span><br><span class="line-number">829</span><br><span class="line-number">830</span><br><span class="line-number">831</span><br><span class="line-number">832</span><br><span class="line-number">833</span><br><span class="line-number">834</span><br><span class="line-number">835</span><br><span class="line-number">836</span><br><span class="line-number">837</span><br><span class="line-number">838</span><br><span class="line-number">839</span><br><span class="line-number">840</span><br><span class="line-number">841</span><br><span class="line-number">842</span><br><span class="line-number">843</span><br><span class="line-number">844</span><br><span class="line-number">845</span><br><span class="line-number">846</span><br><span class="line-number">847</span><br><span class="line-number">848</span><br><span class="line-number">849</span><br><span class="line-number">850</span><br><span class="line-number">851</span><br><span class="line-number">852</span><br><span class="line-number">853</span><br><span class="line-number">854</span><br><span class="line-number">855</span><br><span class="line-number">856</span><br><span class="line-number">857</span><br><span class="line-number">858</span><br><span class="line-number">859</span><br><span class="line-number">860</span><br><span class="line-number">861</span><br><span class="line-number">862</span><br><span class="line-number">863</span><br><span class="line-number">864</span><br><span class="line-number">865</span><br><span class="line-number">866</span><br><span class="line-number">867</span><br><span class="line-number">868</span><br><span class="line-number">869</span><br><span class="line-number">870</span><br><span class="line-number">871</span><br><span class="line-number">872</span><br><span class="line-number">873</span><br><span class="line-number">874</span><br><span class="line-number">875</span><br><span class="line-number">876</span><br><span class="line-number">877</span><br><span class="line-number">878</span><br><span class="line-number">879</span><br><span class="line-number">880</span><br><span class="line-number">881</span><br><span class="line-number">882</span><br><span class="line-number">883</span><br><span class="line-number">884</span><br><span class="line-number">885</span><br><span class="line-number">886</span><br><span class="line-number">887</span><br><span class="line-number">888</span><br><span class="line-number">889</span><br><span class="line-number">890</span><br><span class="line-number">891</span><br><span class="line-number">892</span><br><span class="line-number">893</span><br><span class="line-number">894</span><br><span class="line-number">895</span><br><span class="line-number">896</span><br><span class="line-number">897</span><br><span class="line-number">898</span><br><span class="line-number">899</span><br><span class="line-number">900</span><br><span class="line-number">901</span><br><span class="line-number">902</span><br><span class="line-number">903</span><br><span class="line-number">904</span><br><span class="line-number">905</span><br><span class="line-number">906</span><br><span class="line-number">907</span><br><span class="line-number">908</span><br><span class="line-number">909</span><br><span class="line-number">910</span><br><span class="line-number">911</span><br><span class="line-number">912</span><br><span class="line-number">913</span><br><span class="line-number">914</span><br><span class="line-number">915</span><br><span class="line-number">916</span><br><span class="line-number">917</span><br><span class="line-number">918</span><br><span class="line-number">919</span><br><span class="line-number">920</span><br><span class="line-number">921</span><br><span class="line-number">922</span><br><span class="line-number">923</span><br><span class="line-number">924</span><br><span class="line-number">925</span><br><span class="line-number">926</span><br><span class="line-number">927</span><br><span class="line-number">928</span><br><span class="line-number">929</span><br><span class="line-number">930</span><br><span class="line-number">931</span><br><span class="line-number">932</span><br><span class="line-number">933</span><br><span class="line-number">934</span><br><span class="line-number">935</span><br><span class="line-number">936</span><br><span class="line-number">937</span><br><span class="line-number">938</span><br><span class="line-number">939</span><br><span class="line-number">940</span><br><span class="line-number">941</span><br><span class="line-number">942</span><br><span class="line-number">943</span><br><span class="line-number">944</span><br><span class="line-number">945</span><br><span class="line-number">946</span><br><span class="line-number">947</span><br><span class="line-number">948</span><br><span class="line-number">949</span><br><span class="line-number">950</span><br><span class="line-number">951</span><br><span class="line-number">952</span><br><span class="line-number">953</span><br><span class="line-number">954</span><br><span class="line-number">955</span><br><span class="line-number">956</span><br><span class="line-number">957</span><br><span class="line-number">958</span><br><span class="line-number">959</span><br><span class="line-number">960</span><br><span class="line-number">961</span><br><span class="line-number">962</span><br><span class="line-number">963</span><br><span class="line-number">964</span><br><span class="line-number">965</span><br><span class="line-number">966</span><br><span class="line-number">967</span><br><span class="line-number">968</span><br><span class="line-number">969</span><br><span class="line-number">970</span><br><span class="line-number">971</span><br><span class="line-number">972</span><br><span class="line-number">973</span><br><span class="line-number">974</span><br><span class="line-number">975</span><br><span class="line-number">976</span><br><span class="line-number">977</span><br><span class="line-number">978</span><br><span class="line-number">979</span><br><span class="line-number">980</span><br><span class="line-number">981</span><br><span class="line-number">982</span><br><span class="line-number">983</span><br><span class="line-number">984</span><br><span class="line-number">985</span><br><span class="line-number">986</span><br><span class="line-number">987</span><br><span class="line-number">988</span><br><span class="line-number">989</span><br><span class="line-number">990</span><br><span class="line-number">991</span><br><span class="line-number">992</span><br><span class="line-number">993</span><br><span class="line-number">994</span><br><span class="line-number">995</span><br><span class="line-number">996</span><br><span class="line-number">997</span><br><span class="line-number">998</span><br><span class="line-number">999</span><br><span class="line-number">1000</span><br><span class="line-number">1001</span><br><span class="line-number">1002</span><br><span class="line-number">1003</span><br><span class="line-number">1004</span><br><span class="line-number">1005</span><br><span class="line-number">1006</span><br><span class="line-number">1007</span><br><span class="line-number">1008</span><br><span class="line-number">1009</span><br><span class="line-number">1010</span><br><span class="line-number">1011</span><br><span class="line-number">1012</span><br><span class="line-number">1013</span><br><span class="line-number">1014</span><br><span class="line-number">1015</span><br><span class="line-number">1016</span><br><span class="line-number">1017</span><br><span class="line-number">1018</span><br><span class="line-number">1019</span><br><span class="line-number">1020</span><br><span class="line-number">1021</span><br><span class="line-number">1022</span><br><span class="line-number">1023</span><br><span class="line-number">1024</span><br><span class="line-number">1025</span><br><span class="line-number">1026</span><br><span class="line-number">1027</span><br><span class="line-number">1028</span><br><span class="line-number">1029</span><br><span class="line-number">1030</span><br><span class="line-number">1031</span><br><span class="line-number">1032</span><br><span class="line-number">1033</span><br><span class="line-number">1034</span><br><span class="line-number">1035</span><br><span class="line-number">1036</span><br><span class="line-number">1037</span><br><span class="line-number">1038</span><br><span class="line-number">1039</span><br><span class="line-number">1040</span><br><span class="line-number">1041</span><br><span class="line-number">1042</span><br><span class="line-number">1043</span><br><span class="line-number">1044</span><br><span class="line-number">1045</span><br><span class="line-number">1046</span><br><span class="line-number">1047</span><br><span class="line-number">1048</span><br><span class="line-number">1049</span><br><span class="line-number">1050</span><br><span class="line-number">1051</span><br><span class="line-number">1052</span><br><span class="line-number">1053</span><br><span class="line-number">1054</span><br><span class="line-number">1055</span><br><span class="line-number">1056</span><br><span class="line-number">1057</span><br><span class="line-number">1058</span><br><span class="line-number">1059</span><br><span class="line-number">1060</span><br><span class="line-number">1061</span><br><span class="line-number">1062</span><br><span class="line-number">1063</span><br><span class="line-number">1064</span><br><span class="line-number">1065</span><br><span class="line-number">1066</span><br><span class="line-number">1067</span><br><span class="line-number">1068</span><br><span class="line-number">1069</span><br><span class="line-number">1070</span><br><span class="line-number">1071</span><br><span class="line-number">1072</span><br><span class="line-number">1073</span><br><span class="line-number">1074</span><br><span class="line-number">1075</span><br><span class="line-number">1076</span><br><span class="line-number">1077</span><br><span class="line-number">1078</span><br><span class="line-number">1079</span><br><span class="line-number">1080</span><br><span class="line-number">1081</span><br><span class="line-number">1082</span><br><span class="line-number">1083</span><br><span class="line-number">1084</span><br><span class="line-number">1085</span><br><span class="line-number">1086</span><br><span class="line-number">1087</span><br><span class="line-number">1088</span><br><span class="line-number">1089</span><br><span class="line-number">1090</span><br><span class="line-number">1091</span><br><span class="line-number">1092</span><br><span class="line-number">1093</span><br><span class="line-number">1094</span><br><span class="line-number">1095</span><br><span class="line-number">1096</span><br><span class="line-number">1097</span><br><span class="line-number">1098</span><br><span class="line-number">1099</span><br><span class="line-number">1100</span><br><span class="line-number">1101</span><br><span class="line-number">1102</span><br><span class="line-number">1103</span><br><span class="line-number">1104</span><br><span class="line-number">1105</span><br><span class="line-number">1106</span><br><span class="line-number">1107</span><br><span class="line-number">1108</span><br><span class="line-number">1109</span><br><span class="line-number">1110</span><br><span class="line-number">1111</span><br><span class="line-number">1112</span><br><span class="line-number">1113</span><br><span class="line-number">1114</span><br><span class="line-number">1115</span><br><span class="line-number">1116</span><br><span class="line-number">1117</span><br><span class="line-number">1118</span><br><span class="line-number">1119</span><br><span class="line-number">1120</span><br><span class="line-number">1121</span><br><span class="line-number">1122</span><br><span class="line-number">1123</span><br><span class="line-number">1124</span><br><span class="line-number">1125</span><br><span class="line-number">1126</span><br><span class="line-number">1127</span><br><span class="line-number">1128</span><br><span class="line-number">1129</span><br><span class="line-number">1130</span><br><span class="line-number">1131</span><br><span class="line-number">1132</span><br><span class="line-number">1133</span><br><span class="line-number">1134</span><br><span class="line-number">1135</span><br><span class="line-number">1136</span><br><span class="line-number">1137</span><br><span class="line-number">1138</span><br><span class="line-number">1139</span><br><span class="line-number">1140</span><br><span class="line-number">1141</span><br><span class="line-number">1142</span><br><span class="line-number">1143</span><br><span class="line-number">1144</span><br><span class="line-number">1145</span><br><span class="line-number">1146</span><br><span class="line-number">1147</span><br><span class="line-number">1148</span><br><span class="line-number">1149</span><br><span class="line-number">1150</span><br><span class="line-number">1151</span><br><span class="line-number">1152</span><br><span class="line-number">1153</span><br><span class="line-number">1154</span><br><span class="line-number">1155</span><br><span class="line-number">1156</span><br><span class="line-number">1157</span><br><span class="line-number">1158</span><br><span class="line-number">1159</span><br><span class="line-number">1160</span><br><span class="line-number">1161</span><br><span class="line-number">1162</span><br><span class="line-number">1163</span><br><span class="line-number">1164</span><br><span class="line-number">1165</span><br><span class="line-number">1166</span><br><span class="line-number">1167</span><br><span class="line-number">1168</span><br><span class="line-number">1169</span><br><span class="line-number">1170</span><br><span class="line-number">1171</span><br><span class="line-number">1172</span><br><span class="line-number">1173</span><br><span class="line-number">1174</span><br><span class="line-number">1175</span><br><span class="line-number">1176</span><br><span class="line-number">1177</span><br><span class="line-number">1178</span><br><span class="line-number">1179</span><br><span class="line-number">1180</span><br><span class="line-number">1181</span><br><span class="line-number">1182</span><br><span class="line-number">1183</span><br><span class="line-number">1184</span><br><span class="line-number">1185</span><br><span class="line-number">1186</span><br><span class="line-number">1187</span><br><span class="line-number">1188</span><br><span class="line-number">1189</span><br><span class="line-number">1190</span><br><span class="line-number">1191</span><br><span class="line-number">1192</span><br><span class="line-number">1193</span><br><span class="line-number">1194</span><br><span class="line-number">1195</span><br><span class="line-number">1196</span><br><span class="line-number">1197</span><br><span class="line-number">1198</span><br><span class="line-number">1199</span><br><span class="line-number">1200</span><br><span class="line-number">1201</span><br><span class="line-number">1202</span><br><span class="line-number">1203</span><br><span class="line-number">1204</span><br><span class="line-number">1205</span><br><span class="line-number">1206</span><br><span class="line-number">1207</span><br><span class="line-number">1208</span><br><span class="line-number">1209</span><br><span class="line-number">1210</span><br><span class="line-number">1211</span><br><span class="line-number">1212</span><br><span class="line-number">1213</span><br><span class="line-number">1214</span><br><span class="line-number">1215</span><br><span class="line-number">1216</span><br><span class="line-number">1217</span><br><span class="line-number">1218</span><br><span class="line-number">1219</span><br><span class="line-number">1220</span><br><span class="line-number">1221</span><br><span class="line-number">1222</span><br><span class="line-number">1223</span><br><span class="line-number">1224</span><br><span class="line-number">1225</span><br><span class="line-number">1226</span><br><span class="line-number">1227</span><br><span class="line-number">1228</span><br><span class="line-number">1229</span><br><span class="line-number">1230</span><br><span class="line-number">1231</span><br><span class="line-number">1232</span><br><span class="line-number">1233</span><br><span class="line-number">1234</span><br><span class="line-number">1235</span><br><span class="line-number">1236</span><br><span class="line-number">1237</span><br><span class="line-number">1238</span><br><span class="line-number">1239</span><br><span class="line-number">1240</span><br><span class="line-number">1241</span><br><span class="line-number">1242</span><br><span class="line-number">1243</span><br><span class="line-number">1244</span><br><span class="line-number">1245</span><br><span class="line-number">1246</span><br><span class="line-number">1247</span><br><span class="line-number">1248</span><br><span class="line-number">1249</span><br><span class="line-number">1250</span><br><span class="line-number">1251</span><br><span class="line-number">1252</span><br><span class="line-number">1253</span><br><span class="line-number">1254</span><br><span class="line-number">1255</span><br><span class="line-number">1256</span><br><span class="line-number">1257</span><br><span class="line-number">1258</span><br><span class="line-number">1259</span><br><span class="line-number">1260</span><br><span class="line-number">1261</span><br><span class="line-number">1262</span><br><span class="line-number">1263</span><br><span class="line-number">1264</span><br><span class="line-number">1265</span><br><span class="line-number">1266</span><br><span class="line-number">1267</span><br><span class="line-number">1268</span><br><span class="line-number">1269</span><br><span class="line-number">1270</span><br><span class="line-number">1271</span><br><span class="line-number">1272</span><br><span class="line-number">1273</span><br><span class="line-number">1274</span><br><span class="line-number">1275</span><br><span class="line-number">1276</span><br><span class="line-number">1277</span><br><span class="line-number">1278</span><br><span class="line-number">1279</span><br><span class="line-number">1280</span><br><span class="line-number">1281</span><br><span class="line-number">1282</span><br><span class="line-number">1283</span><br><span class="line-number">1284</span><br><span class="line-number">1285</span><br><span class="line-number">1286</span><br><span class="line-number">1287</span><br><span class="line-number">1288</span><br><span class="line-number">1289</span><br><span class="line-number">1290</span><br><span class="line-number">1291</span><br><span class="line-number">1292</span><br><span class="line-number">1293</span><br><span class="line-number">1294</span><br><span class="line-number">1295</span><br><span class="line-number">1296</span><br><span class="line-number">1297</span><br><span class="line-number">1298</span><br><span class="line-number">1299</span><br><span class="line-number">1300</span><br><span class="line-number">1301</span><br><span class="line-number">1302</span><br><span class="line-number">1303</span><br><span class="line-number">1304</span><br><span class="line-number">1305</span><br><span class="line-number">1306</span><br><span class="line-number">1307</span><br><span class="line-number">1308</span><br><span class="line-number">1309</span><br><span class="line-number">1310</span><br><span class="line-number">1311</span><br><span class="line-number">1312</span><br><span class="line-number">1313</span><br><span class="line-number">1314</span><br><span class="line-number">1315</span><br><span class="line-number">1316</span><br><span class="line-number">1317</span><br><span class="line-number">1318</span><br><span class="line-number">1319</span><br><span class="line-number">1320</span><br><span class="line-number">1321</span><br><span class="line-number">1322</span><br><span class="line-number">1323</span><br><span class="line-number">1324</span><br><span class="line-number">1325</span><br><span class="line-number">1326</span><br><span class="line-number">1327</span><br><span class="line-number">1328</span><br><span class="line-number">1329</span><br><span class="line-number">1330</span><br><span class="line-number">1331</span><br><span class="line-number">1332</span><br><span class="line-number">1333</span><br><span class="line-number">1334</span><br><span class="line-number">1335</span><br><span class="line-number">1336</span><br><span class="line-number">1337</span><br><span class="line-number">1338</span><br><span class="line-number">1339</span><br><span class="line-number">1340</span><br><span class="line-number">1341</span><br><span class="line-number">1342</span><br><span class="line-number">1343</span><br><span class="line-number">1344</span><br><span class="line-number">1345</span><br><span class="line-number">1346</span><br><span class="line-number">1347</span><br><span class="line-number">1348</span><br><span class="line-number">1349</span><br><span class="line-number">1350</span><br><span class="line-number">1351</span><br><span class="line-number">1352</span><br><span class="line-number">1353</span><br><span class="line-number">1354</span><br><span class="line-number">1355</span><br><span class="line-number">1356</span><br><span class="line-number">1357</span><br><span class="line-number">1358</span><br><span class="line-number">1359</span><br><span class="line-number">1360</span><br><span class="line-number">1361</span><br><span class="line-number">1362</span><br><span class="line-number">1363</span><br><span class="line-number">1364</span><br><span class="line-number">1365</span><br><span class="line-number">1366</span><br><span class="line-number">1367</span><br><span class="line-number">1368</span><br><span class="line-number">1369</span><br><span class="line-number">1370</span><br><span class="line-number">1371</span><br><span class="line-number">1372</span><br><span class="line-number">1373</span><br><span class="line-number">1374</span><br><span class="line-number">1375</span><br><span class="line-number">1376</span><br><span class="line-number">1377</span><br><span class="line-number">1378</span><br><span class="line-number">1379</span><br><span class="line-number">1380</span><br><span class="line-number">1381</span><br><span class="line-number">1382</span><br><span class="line-number">1383</span><br><span class="line-number">1384</span><br><span class="line-number">1385</span><br><span class="line-number">1386</span><br><span class="line-number">1387</span><br><span class="line-number">1388</span><br><span class="line-number">1389</span><br><span class="line-number">1390</span><br><span class="line-number">1391</span><br><span class="line-number">1392</span><br><span class="line-number">1393</span><br><span class="line-number">1394</span><br><span class="line-number">1395</span><br><span class="line-number">1396</span><br><span class="line-number">1397</span><br><span class="line-number">1398</span><br><span class="line-number">1399</span><br><span class="line-number">1400</span><br><span class="line-number">1401</span><br><span class="line-number">1402</span><br><span class="line-number">1403</span><br><span class="line-number">1404</span><br><span class="line-number">1405</span><br><span class="line-number">1406</span><br><span class="line-number">1407</span><br><span class="line-number">1408</span><br><span class="line-number">1409</span><br><span class="line-number">1410</span><br><span class="line-number">1411</span><br><span class="line-number">1412</span><br><span class="line-number">1413</span><br><span class="line-number">1414</span><br><span class="line-number">1415</span><br><span class="line-number">1416</span><br><span class="line-number">1417</span><br><span class="line-number">1418</span><br><span class="line-number">1419</span><br><span class="line-number">1420</span><br><span class="line-number">1421</span><br><span class="line-number">1422</span><br><span class="line-number">1423</span><br><span class="line-number">1424</span><br><span class="line-number">1425</span><br><span class="line-number">1426</span><br><span class="line-number">1427</span><br><span class="line-number">1428</span><br><span class="line-number">1429</span><br><span class="line-number">1430</span><br><span class="line-number">1431</span><br><span class="line-number">1432</span><br><span class="line-number">1433</span><br><span class="line-number">1434</span><br><span class="line-number">1435</span><br><span class="line-number">1436</span><br><span class="line-number">1437</span><br><span class="line-number">1438</span><br><span class="line-number">1439</span><br><span class="line-number">1440</span><br><span class="line-number">1441</span><br><span class="line-number">1442</span><br><span class="line-number">1443</span><br><span class="line-number">1444</span><br><span class="line-number">1445</span><br><span class="line-number">1446</span><br><span class="line-number">1447</span><br><span class="line-number">1448</span><br><span class="line-number">1449</span><br><span class="line-number">1450</span><br><span class="line-number">1451</span><br><span class="line-number">1452</span><br><span class="line-number">1453</span><br><span class="line-number">1454</span><br><span class="line-number">1455</span><br><span class="line-number">1456</span><br><span class="line-number">1457</span><br><span class="line-number">1458</span><br><span class="line-number">1459</span><br><span class="line-number">1460</span><br><span class="line-number">1461</span><br><span class="line-number">1462</span><br><span class="line-number">1463</span><br><span class="line-number">1464</span><br><span class="line-number">1465</span><br><span class="line-number">1466</span><br><span class="line-number">1467</span><br><span class="line-number">1468</span><br><span class="line-number">1469</span><br><span class="line-number">1470</span><br><span class="line-number">1471</span><br><span class="line-number">1472</span><br><span class="line-number">1473</span><br><span class="line-number">1474</span><br><span class="line-number">1475</span><br><span class="line-number">1476</span><br><span class="line-number">1477</span><br><span class="line-number">1478</span><br><span class="line-number">1479</span><br><span class="line-number">1480</span><br><span class="line-number">1481</span><br><span class="line-number">1482</span><br><span class="line-number">1483</span><br><span class="line-number">1484</span><br><span class="line-number">1485</span><br><span class="line-number">1486</span><br><span class="line-number">1487</span><br><span class="line-number">1488</span><br><span class="line-number">1489</span><br><span class="line-number">1490</span><br><span class="line-number">1491</span><br><span class="line-number">1492</span><br><span class="line-number">1493</span><br><span class="line-number">1494</span><br><span class="line-number">1495</span><br><span class="line-number">1496</span><br><span class="line-number">1497</span><br><span class="line-number">1498</span><br><span class="line-number">1499</span><br><span class="line-number">1500</span><br><span class="line-number">1501</span><br><span class="line-number">1502</span><br><span class="line-number">1503</span><br><span class="line-number">1504</span><br><span class="line-number">1505</span><br><span class="line-number">1506</span><br><span class="line-number">1507</span><br><span class="line-number">1508</span><br><span class="line-number">1509</span><br><span class="line-number">1510</span><br><span class="line-number">1511</span><br><span class="line-number">1512</span><br><span class="line-number">1513</span><br><span class="line-number">1514</span><br><span class="line-number">1515</span><br><span class="line-number">1516</span><br><span class="line-number">1517</span><br><span class="line-number">1518</span><br><span class="line-number">1519</span><br><span class="line-number">1520</span><br><span class="line-number">1521</span><br><span class="line-number">1522</span><br><span class="line-number">1523</span><br><span class="line-number">1524</span><br><span class="line-number">1525</span><br><span class="line-number">1526</span><br><span class="line-number">1527</span><br><span class="line-number">1528</span><br><span class="line-number">1529</span><br><span class="line-number">1530</span><br><span class="line-number">1531</span><br><span class="line-number">1532</span><br><span class="line-number">1533</span><br><span class="line-number">1534</span><br><span class="line-number">1535</span><br><span class="line-number">1536</span><br><span class="line-number">1537</span><br><span class="line-number">1538</span><br><span class="line-number">1539</span><br><span class="line-number">1540</span><br><span class="line-number">1541</span><br><span class="line-number">1542</span><br><span class="line-number">1543</span><br><span class="line-number">1544</span><br><span class="line-number">1545</span><br><span class="line-number">1546</span><br><span class="line-number">1547</span><br><span class="line-number">1548</span><br><span class="line-number">1549</span><br><span class="line-number">1550</span><br><span class="line-number">1551</span><br><span class="line-number">1552</span><br><span class="line-number">1553</span><br><span class="line-number">1554</span><br><span class="line-number">1555</span><br><span class="line-number">1556</span><br><span class="line-number">1557</span><br><span class="line-number">1558</span><br><span class="line-number">1559</span><br><span class="line-number">1560</span><br><span class="line-number">1561</span><br><span class="line-number">1562</span><br><span class="line-number">1563</span><br><span class="line-number">1564</span><br><span class="line-number">1565</span><br><span class="line-number">1566</span><br><span class="line-number">1567</span><br><span class="line-number">1568</span><br><span class="line-number">1569</span><br><span class="line-number">1570</span><br><span class="line-number">1571</span><br><span class="line-number">1572</span><br><span class="line-number">1573</span><br><span class="line-number">1574</span><br><span class="line-number">1575</span><br><span class="line-number">1576</span><br><span class="line-number">1577</span><br><span class="line-number">1578</span><br><span class="line-number">1579</span><br><span class="line-number">1580</span><br><span class="line-number">1581</span><br><span class="line-number">1582</span><br><span class="line-number">1583</span><br><span class="line-number">1584</span><br><span class="line-number">1585</span><br><span class="line-number">1586</span><br><span class="line-number">1587</span><br><span class="line-number">1588</span><br><span class="line-number">1589</span><br><span class="line-number">1590</span><br><span class="line-number">1591</span><br><span class="line-number">1592</span><br><span class="line-number">1593</span><br><span class="line-number">1594</span><br><span class="line-number">1595</span><br><span class="line-number">1596</span><br><span class="line-number">1597</span><br><span class="line-number">1598</span><br><span class="line-number">1599</span><br><span class="line-number">1600</span><br><span class="line-number">1601</span><br><span class="line-number">1602</span><br><span class="line-number">1603</span><br><span class="line-number">1604</span><br><span class="line-number">1605</span><br><span class="line-number">1606</span><br><span class="line-number">1607</span><br><span class="line-number">1608</span><br><span class="line-number">1609</span><br><span class="line-number">1610</span><br><span class="line-number">1611</span><br><span class="line-number">1612</span><br><span class="line-number">1613</span><br><span class="line-number">1614</span><br><span class="line-number">1615</span><br><span class="line-number">1616</span><br><span class="line-number">1617</span><br><span class="line-number">1618</span><br><span class="line-number">1619</span><br><span class="line-number">1620</span><br><span class="line-number">1621</span><br><span class="line-number">1622</span><br><span class="line-number">1623</span><br><span class="line-number">1624</span><br><span class="line-number">1625</span><br><span class="line-number">1626</span><br><span class="line-number">1627</span><br><span class="line-number">1628</span><br><span class="line-number">1629</span><br><span class="line-number">1630</span><br><span class="line-number">1631</span><br><span class="line-number">1632</span><br><span class="line-number">1633</span><br><span class="line-number">1634</span><br><span class="line-number">1635</span><br><span class="line-number">1636</span><br><span class="line-number">1637</span><br><span class="line-number">1638</span><br><span class="line-number">1639</span><br><span class="line-number">1640</span><br><span class="line-number">1641</span><br><span class="line-number">1642</span><br><span class="line-number">1643</span><br><span class="line-number">1644</span><br><span class="line-number">1645</span><br><span class="line-number">1646</span><br><span class="line-number">1647</span><br><span class="line-number">1648</span><br><span class="line-number">1649</span><br><span class="line-number">1650</span><br><span class="line-number">1651</span><br><span class="line-number">1652</span><br><span class="line-number">1653</span><br><span class="line-number">1654</span><br><span class="line-number">1655</span><br><span class="line-number">1656</span><br><span class="line-number">1657</span><br><span class="line-number">1658</span><br><span class="line-number">1659</span><br><span class="line-number">1660</span><br><span class="line-number">1661</span><br><span class="line-number">1662</span><br><span class="line-number">1663</span><br><span class="line-number">1664</span><br><span class="line-number">1665</span><br><span class="line-number">1666</span><br><span class="line-number">1667</span><br><span class="line-number">1668</span><br><span class="line-number">1669</span><br><span class="line-number">1670</span><br><span class="line-number">1671</span><br><span class="line-number">1672</span><br><span class="line-number">1673</span><br><span class="line-number">1674</span><br><span class="line-number">1675</span><br><span class="line-number">1676</span><br><span class="line-number">1677</span><br><span class="line-number">1678</span><br><span class="line-number">1679</span><br><span class="line-number">1680</span><br><span class="line-number">1681</span><br><span class="line-number">1682</span><br><span class="line-number">1683</span><br><span class="line-number">1684</span><br><span class="line-number">1685</span><br><span class="line-number">1686</span><br><span class="line-number">1687</span><br><span class="line-number">1688</span><br><span class="line-number">1689</span><br><span class="line-number">1690</span><br><span class="line-number">1691</span><br><span class="line-number">1692</span><br><span class="line-number">1693</span><br><span class="line-number">1694</span><br><span class="line-number">1695</span><br><span class="line-number">1696</span><br><span class="line-number">1697</span><br><span class="line-number">1698</span><br><span class="line-number">1699</span><br><span class="line-number">1700</span><br><span class="line-number">1701</span><br><span class="line-number">1702</span><br><span class="line-number">1703</span><br><span class="line-number">1704</span><br><span class="line-number">1705</span><br><span class="line-number">1706</span><br><span class="line-number">1707</span><br><span class="line-number">1708</span><br><span class="line-number">1709</span><br><span class="line-number">1710</span><br><span class="line-number">1711</span><br><span class="line-number">1712</span><br><span class="line-number">1713</span><br><span class="line-number">1714</span><br><span class="line-number">1715</span><br><span class="line-number">1716</span><br><span class="line-number">1717</span><br><span class="line-number">1718</span><br><span class="line-number">1719</span><br><span class="line-number">1720</span><br><span class="line-number">1721</span><br><span class="line-number">1722</span><br><span class="line-number">1723</span><br><span class="line-number">1724</span><br><span class="line-number">1725</span><br><span class="line-number">1726</span><br><span class="line-number">1727</span><br><span class="line-number">1728</span><br><span class="line-number">1729</span><br><span class="line-number">1730</span><br><span class="line-number">1731</span><br><span class="line-number">1732</span><br><span class="line-number">1733</span><br><span class="line-number">1734</span><br><span class="line-number">1735</span><br><span class="line-number">1736</span><br><span class="line-number">1737</span><br><span class="line-number">1738</span><br><span class="line-number">1739</span><br><span class="line-number">1740</span><br><span class="line-number">1741</span><br><span class="line-number">1742</span><br><span class="line-number">1743</span><br><span class="line-number">1744</span><br><span class="line-number">1745</span><br><span class="line-number">1746</span><br><span class="line-number">1747</span><br><span class="line-number">1748</span><br><span class="line-number">1749</span><br><span class="line-number">1750</span><br><span class="line-number">1751</span><br><span class="line-number">1752</span><br><span class="line-number">1753</span><br><span class="line-number">1754</span><br><span class="line-number">1755</span><br><span class="line-number">1756</span><br><span class="line-number">1757</span><br><span class="line-number">1758</span><br><span class="line-number">1759</span><br><span class="line-number">1760</span><br><span class="line-number">1761</span><br><span class="line-number">1762</span><br><span class="line-number">1763</span><br><span class="line-number">1764</span><br><span class="line-number">1765</span><br><span class="line-number">1766</span><br><span class="line-number">1767</span><br><span class="line-number">1768</span><br><span class="line-number">1769</span><br><span class="line-number">1770</span><br><span class="line-number">1771</span><br><span class="line-number">1772</span><br><span class="line-number">1773</span><br><span class="line-number">1774</span><br><span class="line-number">1775</span><br><span class="line-number">1776</span><br><span class="line-number">1777</span><br><span class="line-number">1778</span><br><span class="line-number">1779</span><br><span class="line-number">1780</span><br><span class="line-number">1781</span><br><span class="line-number">1782</span><br><span class="line-number">1783</span><br><span class="line-number">1784</span><br><span class="line-number">1785</span><br><span class="line-number">1786</span><br><span class="line-number">1787</span><br><span class="line-number">1788</span><br><span class="line-number">1789</span><br><span class="line-number">1790</span><br><span class="line-number">1791</span><br><span class="line-number">1792</span><br><span class="line-number">1793</span><br><span class="line-number">1794</span><br><span class="line-number">1795</span><br><span class="line-number">1796</span><br><span class="line-number">1797</span><br><span class="line-number">1798</span><br><span class="line-number">1799</span><br><span class="line-number">1800</span><br><span class="line-number">1801</span><br><span class="line-number">1802</span><br><span class="line-number">1803</span><br><span class="line-number">1804</span><br><span class="line-number">1805</span><br><span class="line-number">1806</span><br><span class="line-number">1807</span><br><span class="line-number">1808</span><br><span class="line-number">1809</span><br><span class="line-number">1810</span><br><span class="line-number">1811</span><br><span class="line-number">1812</span><br><span class="line-number">1813</span><br><span class="line-number">1814</span><br><span class="line-number">1815</span><br><span class="line-number">1816</span><br><span class="line-number">1817</span><br><span class="line-number">1818</span><br><span class="line-number">1819</span><br><span class="line-number">1820</span><br><span class="line-number">1821</span><br><span class="line-number">1822</span><br><span class="line-number">1823</span><br><span class="line-number">1824</span><br><span class="line-number">1825</span><br><span class="line-number">1826</span><br><span class="line-number">1827</span><br><span class="line-number">1828</span><br><span class="line-number">1829</span><br><span class="line-number">1830</span><br><span class="line-number">1831</span><br><span class="line-number">1832</span><br><span class="line-number">1833</span><br><span class="line-number">1834</span><br><span class="line-number">1835</span><br><span class="line-number">1836</span><br><span class="line-number">1837</span><br><span class="line-number">1838</span><br><span class="line-number">1839</span><br><span class="line-number">1840</span><br><span class="line-number">1841</span><br><span class="line-number">1842</span><br><span class="line-number">1843</span><br><span class="line-number">1844</span><br><span class="line-number">1845</span><br><span class="line-number">1846</span><br><span class="line-number">1847</span><br><span class="line-number">1848</span><br><span class="line-number">1849</span><br><span class="line-number">1850</span><br><span class="line-number">1851</span><br><span class="line-number">1852</span><br><span class="line-number">1853</span><br><span class="line-number">1854</span><br><span class="line-number">1855</span><br><span class="line-number">1856</span><br><span class="line-number">1857</span><br><span class="line-number">1858</span><br><span class="line-number">1859</span><br><span class="line-number">1860</span><br><span class="line-number">1861</span><br><span class="line-number">1862</span><br><span class="line-number">1863</span><br><span class="line-number">1864</span><br><span class="line-number">1865</span><br><span class="line-number">1866</span><br><span class="line-number">1867</span><br><span class="line-number">1868</span><br><span class="line-number">1869</span><br><span class="line-number">1870</span><br><span class="line-number">1871</span><br><span class="line-number">1872</span><br><span class="line-number">1873</span><br><span class="line-number">1874</span><br><span class="line-number">1875</span><br><span class="line-number">1876</span><br><span class="line-number">1877</span><br><span class="line-number">1878</span><br><span class="line-number">1879</span><br><span class="line-number">1880</span><br><span class="line-number">1881</span><br><span class="line-number">1882</span><br><span class="line-number">1883</span><br><span class="line-number">1884</span><br><span class="line-number">1885</span><br><span class="line-number">1886</span><br><span class="line-number">1887</span><br><span class="line-number">1888</span><br><span class="line-number">1889</span><br><span class="line-number">1890</span><br><span class="line-number">1891</span><br><span class="line-number">1892</span><br><span class="line-number">1893</span><br><span class="line-number">1894</span><br><span class="line-number">1895</span><br><span class="line-number">1896</span><br><span class="line-number">1897</span><br><span class="line-number">1898</span><br><span class="line-number">1899</span><br><span class="line-number">1900</span><br><span class="line-number">1901</span><br><span class="line-number">1902</span><br><span class="line-number">1903</span><br><span class="line-number">1904</span><br><span class="line-number">1905</span><br><span class="line-number">1906</span><br><span class="line-number">1907</span><br><span class="line-number">1908</span><br><span class="line-number">1909</span><br><span class="line-number">1910</span><br><span class="line-number">1911</span><br><span class="line-number">1912</span><br><span class="line-number">1913</span><br><span class="line-number">1914</span><br><span class="line-number">1915</span><br><span class="line-number">1916</span><br><span class="line-number">1917</span><br><span class="line-number">1918</span><br><span class="line-number">1919</span><br><span class="line-number">1920</span><br><span class="line-number">1921</span><br><span class="line-number">1922</span><br><span class="line-number">1923</span><br><span class="line-number">1924</span><br><span class="line-number">1925</span><br><span class="line-number">1926</span><br><span class="line-number">1927</span><br><span class="line-number">1928</span><br><span class="line-number">1929</span><br><span class="line-number">1930</span><br><span class="line-number">1931</span><br><span class="line-number">1932</span><br><span class="line-number">1933</span><br><span class="line-number">1934</span><br><span class="line-number">1935</span><br><span class="line-number">1936</span><br><span class="line-number">1937</span><br><span class="line-number">1938</span><br><span class="line-number">1939</span><br><span class="line-number">1940</span><br><span class="line-number">1941</span><br><span class="line-number">1942</span><br><span class="line-number">1943</span><br><span class="line-number">1944</span><br><span class="line-number">1945</span><br><span class="line-number">1946</span><br><span class="line-number">1947</span><br><span class="line-number">1948</span><br><span class="line-number">1949</span><br><span class="line-number">1950</span><br><span class="line-number">1951</span><br><span class="line-number">1952</span><br><span class="line-number">1953</span><br><span class="line-number">1954</span><br><span class="line-number">1955</span><br><span class="line-number">1956</span><br><span class="line-number">1957</span><br><span class="line-number">1958</span><br><span class="line-number">1959</span><br><span class="line-number">1960</span><br><span class="line-number">1961</span><br><span class="line-number">1962</span><br><span class="line-number">1963</span><br><span class="line-number">1964</span><br><span class="line-number">1965</span><br><span class="line-number">1966</span><br><span class="line-number">1967</span><br><span class="line-number">1968</span><br><span class="line-number">1969</span><br><span class="line-number">1970</span><br><span class="line-number">1971</span><br><span class="line-number">1972</span><br><span class="line-number">1973</span><br><span class="line-number">1974</span><br><span class="line-number">1975</span><br><span class="line-number">1976</span><br><span class="line-number">1977</span><br><span class="line-number">1978</span><br><span class="line-number">1979</span><br><span class="line-number">1980</span><br><span class="line-number">1981</span><br><span class="line-number">1982</span><br><span class="line-number">1983</span><br><span class="line-number">1984</span><br><span class="line-number">1985</span><br><span class="line-number">1986</span><br><span class="line-number">1987</span><br><span class="line-number">1988</span><br><span class="line-number">1989</span><br><span class="line-number">1990</span><br><span class="line-number">1991</span><br><span class="line-number">1992</span><br><span class="line-number">1993</span><br><span class="line-number">1994</span><br><span class="line-number">1995</span><br><span class="line-number">1996</span><br><span class="line-number">1997</span><br><span class="line-number">1998</span><br><span class="line-number">1999</span><br><span class="line-number">2000</span><br><span class="line-number">2001</span><br><span class="line-number">2002</span><br><span class="line-number">2003</span><br><span class="line-number">2004</span><br><span class="line-number">2005</span><br><span class="line-number">2006</span><br><span class="line-number">2007</span><br><span class="line-number">2008</span><br><span class="line-number">2009</span><br><span class="line-number">2010</span><br><span class="line-number">2011</span><br><span class="line-number">2012</span><br><span class="line-number">2013</span><br><span class="line-number">2014</span><br><span class="line-number">2015</span><br><span class="line-number">2016</span><br><span class="line-number">2017</span><br><span class="line-number">2018</span><br><span class="line-number">2019</span><br><span class="line-number">2020</span><br><span class="line-number">2021</span><br><span class="line-number">2022</span><br><span class="line-number">2023</span><br><span class="line-number">2024</span><br><span class="line-number">2025</span><br><span class="line-number">2026</span><br><span class="line-number">2027</span><br><span class="line-number">2028</span><br><span class="line-number">2029</span><br><span class="line-number">2030</span><br><span class="line-number">2031</span><br><span class="line-number">2032</span><br><span class="line-number">2033</span><br><span class="line-number">2034</span><br><span class="line-number">2035</span><br><span class="line-number">2036</span><br><span class="line-number">2037</span><br><span class="line-number">2038</span><br><span class="line-number">2039</span><br><span class="line-number">2040</span><br><span class="line-number">2041</span><br><span class="line-number">2042</span><br><span class="line-number">2043</span><br><span class="line-number">2044</span><br><span class="line-number">2045</span><br><span class="line-number">2046</span><br><span class="line-number">2047</span><br><span class="line-number">2048</span><br><span class="line-number">2049</span><br><span class="line-number">2050</span><br><span class="line-number">2051</span><br><span class="line-number">2052</span><br><span class="line-number">2053</span><br><span class="line-number">2054</span><br><span class="line-number">2055</span><br><span class="line-number">2056</span><br><span class="line-number">2057</span><br><span class="line-number">2058</span><br><span class="line-number">2059</span><br><span class="line-number">2060</span><br><span class="line-number">2061</span><br><span class="line-number">2062</span><br><span class="line-number">2063</span><br><span class="line-number">2064</span><br><span class="line-number">2065</span><br><span class="line-number">2066</span><br><span class="line-number">2067</span><br><span class="line-number">2068</span><br><span class="line-number">2069</span><br><span class="line-number">2070</span><br><span class="line-number">2071</span><br><span class="line-number">2072</span><br><span class="line-number">2073</span><br><span class="line-number">2074</span><br><span class="line-number">2075</span><br><span class="line-number">2076</span><br><span class="line-number">2077</span><br><span class="line-number">2078</span><br><span class="line-number">2079</span><br><span class="line-number">2080</span><br><span class="line-number">2081</span><br><span class="line-number">2082</span><br><span class="line-number">2083</span><br><span class="line-number">2084</span><br><span class="line-number">2085</span><br><span class="line-number">2086</span><br><span class="line-number">2087</span><br><span class="line-number">2088</span><br><span class="line-number">2089</span><br><span class="line-number">2090</span><br><span class="line-number">2091</span><br><span class="line-number">2092</span><br><span class="line-number">2093</span><br><span class="line-number">2094</span><br><span class="line-number">2095</span><br><span class="line-number">2096</span><br><span class="line-number">2097</span><br><span class="line-number">2098</span><br><span class="line-number">2099</span><br><span class="line-number">2100</span><br><span class="line-number">2101</span><br><span class="line-number">2102</span><br><span class="line-number">2103</span><br><span class="line-number">2104</span><br><span class="line-number">2105</span><br><span class="line-number">2106</span><br><span class="line-number">2107</span><br><span class="line-number">2108</span><br><span class="line-number">2109</span><br><span class="line-number">2110</span><br><span class="line-number">2111</span><br><span class="line-number">2112</span><br><span class="line-number">2113</span><br><span class="line-number">2114</span><br><span class="line-number">2115</span><br><span class="line-number">2116</span><br><span class="line-number">2117</span><br><span class="line-number">2118</span><br><span class="line-number">2119</span><br><span class="line-number">2120</span><br><span class="line-number">2121</span><br><span class="line-number">2122</span><br><span class="line-number">2123</span><br><span class="line-number">2124</span><br><span class="line-number">2125</span><br><span class="line-number">2126</span><br><span class="line-number">2127</span><br><span class="line-number">2128</span><br><span class="line-number">2129</span><br><span class="line-number">2130</span><br><span class="line-number">2131</span><br><span class="line-number">2132</span><br><span class="line-number">2133</span><br><span class="line-number">2134</span><br><span class="line-number">2135</span><br><span class="line-number">2136</span><br><span class="line-number">2137</span><br><span class="line-number">2138</span><br><span class="line-number">2139</span><br><span class="line-number">2140</span><br><span class="line-number">2141</span><br><span class="line-number">2142</span><br><span class="line-number">2143</span><br><span class="line-number">2144</span><br><span class="line-number">2145</span><br><span class="line-number">2146</span><br><span class="line-number">2147</span><br><span class="line-number">2148</span><br><span class="line-number">2149</span><br><span class="line-number">2150</span><br><span class="line-number">2151</span><br><span class="line-number">2152</span><br><span class="line-number">2153</span><br><span class="line-number">2154</span><br><span class="line-number">2155</span><br><span class="line-number">2156</span><br><span class="line-number">2157</span><br><span class="line-number">2158</span><br><span class="line-number">2159</span><br><span class="line-number">2160</span><br><span class="line-number">2161</span><br><span class="line-number">2162</span><br><span class="line-number">2163</span><br><span class="line-number">2164</span><br><span class="line-number">2165</span><br><span class="line-number">2166</span><br><span class="line-number">2167</span><br><span class="line-number">2168</span><br><span class="line-number">2169</span><br><span class="line-number">2170</span><br><span class="line-number">2171</span><br><span class="line-number">2172</span><br><span class="line-number">2173</span><br><span class="line-number">2174</span><br><span class="line-number">2175</span><br><span class="line-number">2176</span><br><span class="line-number">2177</span><br><span class="line-number">2178</span><br><span class="line-number">2179</span><br><span class="line-number">2180</span><br><span class="line-number">2181</span><br><span class="line-number">2182</span><br><span class="line-number">2183</span><br><span class="line-number">2184</span><br><span class="line-number">2185</span><br><span class="line-number">2186</span><br><span class="line-number">2187</span><br><span class="line-number">2188</span><br><span class="line-number">2189</span><br><span class="line-number">2190</span><br><span class="line-number">2191</span><br><span class="line-number">2192</span><br><span class="line-number">2193</span><br><span class="line-number">2194</span><br><span class="line-number">2195</span><br><span class="line-number">2196</span><br><span class="line-number">2197</span><br><span class="line-number">2198</span><br><span class="line-number">2199</span><br><span class="line-number">2200</span><br><span class="line-number">2201</span><br><span class="line-number">2202</span><br><span class="line-number">2203</span><br><span class="line-number">2204</span><br><span class="line-number">2205</span><br><span class="line-number">2206</span><br><span class="line-number">2207</span><br><span class="line-number">2208</span><br><span class="line-number">2209</span><br><span class="line-number">2210</span><br><span class="line-number">2211</span><br><span class="line-number">2212</span><br><span class="line-number">2213</span><br><span class="line-number">2214</span><br><span class="line-number">2215</span><br><span class="line-number">2216</span><br><span class="line-number">2217</span><br><span class="line-number">2218</span><br><span class="line-number">2219</span><br><span class="line-number">2220</span><br><span class="line-number">2221</span><br><span class="line-number">2222</span><br><span class="line-number">2223</span><br><span class="line-number">2224</span><br><span class="line-number">2225</span><br><span class="line-number">2226</span><br><span class="line-number">2227</span><br><span class="line-number">2228</span><br><span class="line-number">2229</span><br><span class="line-number">2230</span><br><span class="line-number">2231</span><br><span class="line-number">2232</span><br><span class="line-number">2233</span><br><span class="line-number">2234</span><br><span class="line-number">2235</span><br><span class="line-number">2236</span><br><span class="line-number">2237</span><br><span class="line-number">2238</span><br><span class="line-number">2239</span><br><span class="line-number">2240</span><br><span class="line-number">2241</span><br><span class="line-number">2242</span><br><span class="line-number">2243</span><br><span class="line-number">2244</span><br><span class="line-number">2245</span><br><span class="line-number">2246</span><br><span class="line-number">2247</span><br><span class="line-number">2248</span><br><span class="line-number">2249</span><br><span class="line-number">2250</span><br><span class="line-number">2251</span><br><span class="line-number">2252</span><br><span class="line-number">2253</span><br><span class="line-number">2254</span><br><span class="line-number">2255</span><br><span class="line-number">2256</span><br><span class="line-number">2257</span><br><span class="line-number">2258</span><br><span class="line-number">2259</span><br><span class="line-number">2260</span><br><span class="line-number">2261</span><br><span class="line-number">2262</span><br><span class="line-number">2263</span><br><span class="line-number">2264</span><br><span class="line-number">2265</span><br><span class="line-number">2266</span><br><span class="line-number">2267</span><br><span class="line-number">2268</span><br><span class="line-number">2269</span><br><span class="line-number">2270</span><br><span class="line-number">2271</span><br><span class="line-number">2272</span><br><span class="line-number">2273</span><br><span class="line-number">2274</span><br><span class="line-number">2275</span><br><span class="line-number">2276</span><br><span class="line-number">2277</span><br><span class="line-number">2278</span><br><span class="line-number">2279</span><br><span class="line-number">2280</span><br><span class="line-number">2281</span><br><span class="line-number">2282</span><br><span class="line-number">2283</span><br><span class="line-number">2284</span><br><span class="line-number">2285</span><br><span class="line-number">2286</span><br><span class="line-number">2287</span><br><span class="line-number">2288</span><br><span class="line-number">2289</span><br><span class="line-number">2290</span><br><span class="line-number">2291</span><br><span class="line-number">2292</span><br><span class="line-number">2293</span><br><span class="line-number">2294</span><br><span class="line-number">2295</span><br><span class="line-number">2296</span><br><span class="line-number">2297</span><br><span class="line-number">2298</span><br><span class="line-number">2299</span><br><span class="line-number">2300</span><br><span class="line-number">2301</span><br><span class="line-number">2302</span><br><span class="line-number">2303</span><br><span class="line-number">2304</span><br><span class="line-number">2305</span><br><span class="line-number">2306</span><br><span class="line-number">2307</span><br><span class="line-number">2308</span><br><span class="line-number">2309</span><br><span class="line-number">2310</span><br><span class="line-number">2311</span><br><span class="line-number">2312</span><br><span class="line-number">2313</span><br><span class="line-number">2314</span><br><span class="line-number">2315</span><br><span class="line-number">2316</span><br><span class="line-number">2317</span><br><span class="line-number">2318</span><br><span class="line-number">2319</span><br><span class="line-number">2320</span><br><span class="line-number">2321</span><br><span class="line-number">2322</span><br><span class="line-number">2323</span><br><span class="line-number">2324</span><br><span class="line-number">2325</span><br><span class="line-number">2326</span><br><span class="line-number">2327</span><br><span class="line-number">2328</span><br><span class="line-number">2329</span><br><span class="line-number">2330</span><br><span class="line-number">2331</span><br><span class="line-number">2332</span><br><span class="line-number">2333</span><br><span class="line-number">2334</span><br><span class="line-number">2335</span><br><span class="line-number">2336</span><br><span class="line-number">2337</span><br><span class="line-number">2338</span><br><span class="line-number">2339</span><br><span class="line-number">2340</span><br><span class="line-number">2341</span><br><span class="line-number">2342</span><br><span class="line-number">2343</span><br><span class="line-number">2344</span><br><span class="line-number">2345</span><br><span class="line-number">2346</span><br><span class="line-number">2347</span><br><span class="line-number">2348</span><br><span class="line-number">2349</span><br><span class="line-number">2350</span><br><span class="line-number">2351</span><br><span class="line-number">2352</span><br><span class="line-number">2353</span><br><span class="line-number">2354</span><br><span class="line-number">2355</span><br><span class="line-number">2356</span><br><span class="line-number">2357</span><br><span class="line-number">2358</span><br><span class="line-number">2359</span><br><span class="line-number">2360</span><br><span class="line-number">2361</span><br><span class="line-number">2362</span><br><span class="line-number">2363</span><br><span class="line-number">2364</span><br><span class="line-number">2365</span><br><span class="line-number">2366</span><br><span class="line-number">2367</span><br><span class="line-number">2368</span><br><span class="line-number">2369</span><br><span class="line-number">2370</span><br><span class="line-number">2371</span><br><span class="line-number">2372</span><br><span class="line-number">2373</span><br><span class="line-number">2374</span><br><span class="line-number">2375</span><br><span class="line-number">2376</span><br><span class="line-number">2377</span><br><span class="line-number">2378</span><br><span class="line-number">2379</span><br><span class="line-number">2380</span><br><span class="line-number">2381</span><br><span class="line-number">2382</span><br><span class="line-number">2383</span><br><span class="line-number">2384</span><br><span class="line-number">2385</span><br><span class="line-number">2386</span><br><span class="line-number">2387</span><br><span class="line-number">2388</span><br><span class="line-number">2389</span><br><span class="line-number">2390</span><br><span class="line-number">2391</span><br><span class="line-number">2392</span><br><span class="line-number">2393</span><br><span class="line-number">2394</span><br><span class="line-number">2395</span><br><span class="line-number">2396</span><br><span class="line-number">2397</span><br><span class="line-number">2398</span><br><span class="line-number">2399</span><br><span class="line-number">2400</span><br><span class="line-number">2401</span><br><span class="line-number">2402</span><br><span class="line-number">2403</span><br><span class="line-number">2404</span><br><span class="line-number">2405</span><br><span class="line-number">2406</span><br><span class="line-number">2407</span><br><span class="line-number">2408</span><br><span class="line-number">2409</span><br><span class="line-number">2410</span><br><span class="line-number">2411</span><br><span class="line-number">2412</span><br><span class="line-number">2413</span><br><span class="line-number">2414</span><br><span class="line-number">2415</span><br><span class="line-number">2416</span><br><span class="line-number">2417</span><br><span class="line-number">2418</span><br><span class="line-number">2419</span><br><span class="line-number">2420</span><br><span class="line-number">2421</span><br><span class="line-number">2422</span><br><span class="line-number">2423</span><br><span class="line-number">2424</span><br><span class="line-number">2425</span><br><span class="line-number">2426</span><br><span class="line-number">2427</span><br><span class="line-number">2428</span><br><span class="line-number">2429</span><br><span class="line-number">2430</span><br><span class="line-number">2431</span><br><span class="line-number">2432</span><br><span class="line-number">2433</span><br><span class="line-number">2434</span><br><span class="line-number">2435</span><br><span class="line-number">2436</span><br><span class="line-number">2437</span><br><span class="line-number">2438</span><br><span class="line-number">2439</span><br><span class="line-number">2440</span><br><span class="line-number">2441</span><br><span class="line-number">2442</span><br><span class="line-number">2443</span><br><span class="line-number">2444</span><br><span class="line-number">2445</span><br><span class="line-number">2446</span><br><span class="line-number">2447</span><br><span class="line-number">2448</span><br><span class="line-number">2449</span><br><span class="line-number">2450</span><br><span class="line-number">2451</span><br><span class="line-number">2452</span><br><span class="line-number">2453</span><br><span class="line-number">2454</span><br><span class="line-number">2455</span><br><span class="line-number">2456</span><br><span class="line-number">2457</span><br><span class="line-number">2458</span><br><span class="line-number">2459</span><br><span class="line-number">2460</span><br><span class="line-number">2461</span><br><span class="line-number">2462</span><br><span class="line-number">2463</span><br><span class="line-number">2464</span><br><span class="line-number">2465</span><br><span class="line-number">2466</span><br><span class="line-number">2467</span><br><span class="line-number">2468</span><br><span class="line-number">2469</span><br><span class="line-number">2470</span><br><span class="line-number">2471</span><br><span class="line-number">2472</span><br><span class="line-number">2473</span><br><span class="line-number">2474</span><br><span class="line-number">2475</span><br><span class="line-number">2476</span><br><span class="line-number">2477</span><br><span class="line-number">2478</span><br><span class="line-number">2479</span><br><span class="line-number">2480</span><br><span class="line-number">2481</span><br><span class="line-number">2482</span><br><span class="line-number">2483</span><br><span class="line-number">2484</span><br><span class="line-number">2485</span><br><span class="line-number">2486</span><br><span class="line-number">2487</span><br><span class="line-number">2488</span><br><span class="line-number">2489</span><br><span class="line-number">2490</span><br><span class="line-number">2491</span><br><span class="line-number">2492</span><br><span class="line-number">2493</span><br><span class="line-number">2494</span><br><span class="line-number">2495</span><br><span class="line-number">2496</span><br><span class="line-number">2497</span><br><span class="line-number">2498</span><br><span class="line-number">2499</span><br><span class="line-number">2500</span><br><span class="line-number">2501</span><br><span class="line-number">2502</span><br><span class="line-number">2503</span><br><span class="line-number">2504</span><br><span class="line-number">2505</span><br><span class="line-number">2506</span><br><span class="line-number">2507</span><br><span class="line-number">2508</span><br><span class="line-number">2509</span><br><span class="line-number">2510</span><br><span class="line-number">2511</span><br><span class="line-number">2512</span><br><span class="line-number">2513</span><br><span class="line-number">2514</span><br><span class="line-number">2515</span><br><span class="line-number">2516</span><br><span class="line-number">2517</span><br><span class="line-number">2518</span><br><span class="line-number">2519</span><br><span class="line-number">2520</span><br><span class="line-number">2521</span><br><span class="line-number">2522</span><br><span class="line-number">2523</span><br><span class="line-number">2524</span><br><span class="line-number">2525</span><br><span class="line-number">2526</span><br><span class="line-number">2527</span><br><span class="line-number">2528</span><br><span class="line-number">2529</span><br><span class="line-number">2530</span><br><span class="line-number">2531</span><br><span class="line-number">2532</span><br><span class="line-number">2533</span><br><span class="line-number">2534</span><br><span class="line-number">2535</span><br><span class="line-number">2536</span><br><span class="line-number">2537</span><br><span class="line-number">2538</span><br><span class="line-number">2539</span><br><span class="line-number">2540</span><br><span class="line-number">2541</span><br><span class="line-number">2542</span><br><span class="line-number">2543</span><br><span class="line-number">2544</span><br><span class="line-number">2545</span><br><span class="line-number">2546</span><br><span class="line-number">2547</span><br><span class="line-number">2548</span><br><span class="line-number">2549</span><br><span class="line-number">2550</span><br><span class="line-number">2551</span><br><span class="line-number">2552</span><br><span class="line-number">2553</span><br><span class="line-number">2554</span><br><span class="line-number">2555</span><br><span class="line-number">2556</span><br><span class="line-number">2557</span><br><span class="line-number">2558</span><br><span class="line-number">2559</span><br><span class="line-number">2560</span><br><span class="line-number">2561</span><br><span class="line-number">2562</span><br><span class="line-number">2563</span><br><span class="line-number">2564</span><br><span class="line-number">2565</span><br><span class="line-number">2566</span><br><span class="line-number">2567</span><br><span class="line-number">2568</span><br><span class="line-number">2569</span><br><span class="line-number">2570</span><br><span class="line-number">2571</span><br><span class="line-number">2572</span><br><span class="line-number">2573</span><br><span class="line-number">2574</span><br><span class="line-number">2575</span><br><span class="line-number">2576</span><br><span class="line-number">2577</span><br><span class="line-number">2578</span><br><span class="line-number">2579</span><br><span class="line-number">2580</span><br><span class="line-number">2581</span><br><span class="line-number">2582</span><br><span class="line-number">2583</span><br><span class="line-number">2584</span><br><span class="line-number">2585</span><br><span class="line-number">2586</span><br><span class="line-number">2587</span><br><span class="line-number">2588</span><br><span class="line-number">2589</span><br><span class="line-number">2590</span><br><span class="line-number">2591</span><br><span class="line-number">2592</span><br><span class="line-number">2593</span><br><span class="line-number">2594</span><br><span class="line-number">2595</span><br><span class="line-number">2596</span><br><span class="line-number">2597</span><br><span class="line-number">2598</span><br><span class="line-number">2599</span><br><span class="line-number">2600</span><br><span class="line-number">2601</span><br><span class="line-number">2602</span><br><span class="line-number">2603</span><br><span class="line-number">2604</span><br><span class="line-number">2605</span><br><span class="line-number">2606</span><br><span class="line-number">2607</span><br><span class="line-number">2608</span><br><span class="line-number">2609</span><br><span class="line-number">2610</span><br><span class="line-number">2611</span><br><span class="line-number">2612</span><br><span class="line-number">2613</span><br><span class="line-number">2614</span><br><span class="line-number">2615</span><br><span class="line-number">2616</span><br><span class="line-number">2617</span><br><span class="line-number">2618</span><br><span class="line-number">2619</span><br><span class="line-number">2620</span><br><span class="line-number">2621</span><br><span class="line-number">2622</span><br><span class="line-number">2623</span><br><span class="line-number">2624</span><br><span class="line-number">2625</span><br><span class="line-number">2626</span><br><span class="line-number">2627</span><br><span class="line-number">2628</span><br><span class="line-number">2629</span><br><span class="line-number">2630</span><br><span class="line-number">2631</span><br><span class="line-number">2632</span><br><span class="line-number">2633</span><br><span class="line-number">2634</span><br><span class="line-number">2635</span><br><span class="line-number">2636</span><br><span class="line-number">2637</span><br><span class="line-number">2638</span><br><span class="line-number">2639</span><br><span class="line-number">2640</span><br><span class="line-number">2641</span><br><span class="line-number">2642</span><br><span class="line-number">2643</span><br><span class="line-number">2644</span><br><span class="line-number">2645</span><br><span class="line-number">2646</span><br><span class="line-number">2647</span><br><span class="line-number">2648</span><br><span class="line-number">2649</span><br><span class="line-number">2650</span><br><span class="line-number">2651</span><br><span class="line-number">2652</span><br><span class="line-number">2653</span><br><span class="line-number">2654</span><br><span class="line-number">2655</span><br><span class="line-number">2656</span><br><span class="line-number">2657</span><br><span class="line-number">2658</span><br><span class="line-number">2659</span><br><span class="line-number">2660</span><br><span class="line-number">2661</span><br><span class="line-number">2662</span><br><span class="line-number">2663</span><br><span class="line-number">2664</span><br><span class="line-number">2665</span><br><span class="line-number">2666</span><br><span class="line-number">2667</span><br><span class="line-number">2668</span><br><span class="line-number">2669</span><br><span class="line-number">2670</span><br><span class="line-number">2671</span><br><span class="line-number">2672</span><br><span class="line-number">2673</span><br><span class="line-number">2674</span><br><span class="line-number">2675</span><br><span class="line-number">2676</span><br><span class="line-number">2677</span><br><span class="line-number">2678</span><br><span class="line-number">2679</span><br><span class="line-number">2680</span><br><span class="line-number">2681</span><br><span class="line-number">2682</span><br><span class="line-number">2683</span><br><span class="line-number">2684</span><br><span class="line-number">2685</span><br><span class="line-number">2686</span><br><span class="line-number">2687</span><br><span class="line-number">2688</span><br><span class="line-number">2689</span><br><span class="line-number">2690</span><br><span class="line-number">2691</span><br><span class="line-number">2692</span><br><span class="line-number">2693</span><br><span class="line-number">2694</span><br><span class="line-number">2695</span><br><span class="line-number">2696</span><br><span class="line-number">2697</span><br><span class="line-number">2698</span><br><span class="line-number">2699</span><br><span class="line-number">2700</span><br><span class="line-number">2701</span><br><span class="line-number">2702</span><br><span class="line-number">2703</span><br><span class="line-number">2704</span><br><span class="line-number">2705</span><br><span class="line-number">2706</span><br><span class="line-number">2707</span><br><span class="line-number">2708</span><br><span class="line-number">2709</span><br><span class="line-number">2710</span><br><span class="line-number">2711</span><br><span class="line-number">2712</span><br><span class="line-number">2713</span><br><span class="line-number">2714</span><br><span class="line-number">2715</span><br><span class="line-number">2716</span><br><span class="line-number">2717</span><br><span class="line-number">2718</span><br><span class="line-number">2719</span><br><span class="line-number">2720</span><br><span class="line-number">2721</span><br><span class="line-number">2722</span><br><span class="line-number">2723</span><br><span class="line-number">2724</span><br><span class="line-number">2725</span><br><span class="line-number">2726</span><br><span class="line-number">2727</span><br><span class="line-number">2728</span><br><span class="line-number">2729</span><br><span class="line-number">2730</span><br><span class="line-number">2731</span><br><span class="line-number">2732</span><br><span class="line-number">2733</span><br><span class="line-number">2734</span><br><span class="line-number">2735</span><br><span class="line-number">2736</span><br><span class="line-number">2737</span><br><span class="line-number">2738</span><br><span class="line-number">2739</span><br><span class="line-number">2740</span><br><span class="line-number">2741</span><br><span class="line-number">2742</span><br><span class="line-number">2743</span><br><span class="line-number">2744</span><br><span class="line-number">2745</span><br><span class="line-number">2746</span><br><span class="line-number">2747</span><br><span class="line-number">2748</span><br><span class="line-number">2749</span><br><span class="line-number">2750</span><br><span class="line-number">2751</span><br><span class="line-number">2752</span><br><span class="line-number">2753</span><br><span class="line-number">2754</span><br><span class="line-number">2755</span><br><span class="line-number">2756</span><br><span class="line-number">2757</span><br><span class="line-number">2758</span><br><span class="line-number">2759</span><br><span class="line-number">2760</span><br><span class="line-number">2761</span><br><span class="line-number">2762</span><br><span class="line-number">2763</span><br><span class="line-number">2764</span><br><span class="line-number">2765</span><br><span class="line-number">2766</span><br><span class="line-number">2767</span><br><span class="line-number">2768</span><br><span class="line-number">2769</span><br><span class="line-number">2770</span><br><span class="line-number">2771</span><br><span class="line-number">2772</span><br><span class="line-number">2773</span><br><span class="line-number">2774</span><br><span class="line-number">2775</span><br><span class="line-number">2776</span><br><span class="line-number">2777</span><br><span class="line-number">2778</span><br><span class="line-number">2779</span><br><span class="line-number">2780</span><br><span class="line-number">2781</span><br><span class="line-number">2782</span><br><span class="line-number">2783</span><br><span class="line-number">2784</span><br><span class="line-number">2785</span><br><span class="line-number">2786</span><br><span class="line-number">2787</span><br><span class="line-number">2788</span><br><span class="line-number">2789</span><br><span class="line-number">2790</span><br><span class="line-number">2791</span><br><span class="line-number">2792</span><br><span class="line-number">2793</span><br><span class="line-number">2794</span><br><span class="line-number">2795</span><br><span class="line-number">2796</span><br><span class="line-number">2797</span><br><span class="line-number">2798</span><br><span class="line-number">2799</span><br><span class="line-number">2800</span><br><span class="line-number">2801</span><br><span class="line-number">2802</span><br><span class="line-number">2803</span><br><span class="line-number">2804</span><br><span class="line-number">2805</span><br><span class="line-number">2806</span><br><span class="line-number">2807</span><br><span class="line-number">2808</span><br><span class="line-number">2809</span><br><span class="line-number">2810</span><br><span class="line-number">2811</span><br><span class="line-number">2812</span><br><span class="line-number">2813</span><br><span class="line-number">2814</span><br><span class="line-number">2815</span><br><span class="line-number">2816</span><br><span class="line-number">2817</span><br><span class="line-number">2818</span><br><span class="line-number">2819</span><br><span class="line-number">2820</span><br><span class="line-number">2821</span><br><span class="line-number">2822</span><br><span class="line-number">2823</span><br><span class="line-number">2824</span><br><span class="line-number">2825</span><br><span class="line-number">2826</span><br><span class="line-number">2827</span><br><span class="line-number">2828</span><br><span class="line-number">2829</span><br><span class="line-number">2830</span><br><span class="line-number">2831</span><br><span class="line-number">2832</span><br><span class="line-number">2833</span><br><span class="line-number">2834</span><br><span class="line-number">2835</span><br><span class="line-number">2836</span><br><span class="line-number">2837</span><br><span class="line-number">2838</span><br><span class="line-number">2839</span><br><span class="line-number">2840</span><br><span class="line-number">2841</span><br><span class="line-number">2842</span><br><span class="line-number">2843</span><br><span class="line-number">2844</span><br><span class="line-number">2845</span><br><span class="line-number">2846</span><br><span class="line-number">2847</span><br><span class="line-number">2848</span><br><span class="line-number">2849</span><br><span class="line-number">2850</span><br><span class="line-number">2851</span><br><span class="line-number">2852</span><br><span class="line-number">2853</span><br><span class="line-number">2854</span><br><span class="line-number">2855</span><br><span class="line-number">2856</span><br><span class="line-number">2857</span><br><span class="line-number">2858</span><br><span class="line-number">2859</span><br><span class="line-number">2860</span><br><span class="line-number">2861</span><br><span class="line-number">2862</span><br><span class="line-number">2863</span><br><span class="line-number">2864</span><br><span class="line-number">2865</span><br><span class="line-number">2866</span><br><span class="line-number">2867</span><br><span class="line-number">2868</span><br><span class="line-number">2869</span><br><span class="line-number">2870</span><br><span class="line-number">2871</span><br><span class="line-number">2872</span><br><span class="line-number">2873</span><br><span class="line-number">2874</span><br><span class="line-number">2875</span><br><span class="line-number">2876</span><br><span class="line-number">2877</span><br><span class="line-number">2878</span><br><span class="line-number">2879</span><br><span class="line-number">2880</span><br><span class="line-number">2881</span><br><span class="line-number">2882</span><br><span class="line-number">2883</span><br><span class="line-number">2884</span><br><span class="line-number">2885</span><br><span class="line-number">2886</span><br><span class="line-number">2887</span><br><span class="line-number">2888</span><br><span class="line-number">2889</span><br><span class="line-number">2890</span><br><span class="line-number">2891</span><br><span class="line-number">2892</span><br><span class="line-number">2893</span><br><span class="line-number">2894</span><br><span class="line-number">2895</span><br><span class="line-number">2896</span><br><span class="line-number">2897</span><br><span class="line-number">2898</span><br><span class="line-number">2899</span><br><span class="line-number">2900</span><br><span class="line-number">2901</span><br><span class="line-number">2902</span><br><span class="line-number">2903</span><br><span class="line-number">2904</span><br><span class="line-number">2905</span><br><span class="line-number">2906</span><br><span class="line-number">2907</span><br><span class="line-number">2908</span><br><span class="line-number">2909</span><br><span class="line-number">2910</span><br><span class="line-number">2911</span><br><span class="line-number">2912</span><br><span class="line-number">2913</span><br><span class="line-number">2914</span><br><span class="line-number">2915</span><br><span class="line-number">2916</span><br><span class="line-number">2917</span><br><span class="line-number">2918</span><br><span class="line-number">2919</span><br><span class="line-number">2920</span><br><span class="line-number">2921</span><br><span class="line-number">2922</span><br><span class="line-number">2923</span><br><span class="line-number">2924</span><br><span class="line-number">2925</span><br><span class="line-number">2926</span><br><span class="line-number">2927</span><br><span class="line-number">2928</span><br><span class="line-number">2929</span><br><span class="line-number">2930</span><br><span class="line-number">2931</span><br><span class="line-number">2932</span><br><span class="line-number">2933</span><br><span class="line-number">2934</span><br><span class="line-number">2935</span><br><span class="line-number">2936</span><br><span class="line-number">2937</span><br><span class="line-number">2938</span><br><span class="line-number">2939</span><br><span class="line-number">2940</span><br><span class="line-number">2941</span><br><span class="line-number">2942</span><br><span class="line-number">2943</span><br><span class="line-number">2944</span><br><span class="line-number">2945</span><br><span class="line-number">2946</span><br><span class="line-number">2947</span><br><span class="line-number">2948</span><br><span class="line-number">2949</span><br><span class="line-number">2950</span><br><span class="line-number">2951</span><br><span class="line-number">2952</span><br><span class="line-number">2953</span><br><span class="line-number">2954</span><br><span class="line-number">2955</span><br><span class="line-number">2956</span><br><span class="line-number">2957</span><br><span class="line-number">2958</span><br><span class="line-number">2959</span><br><span class="line-number">2960</span><br><span class="line-number">2961</span><br><span class="line-number">2962</span><br><span class="line-number">2963</span><br><span class="line-number">2964</span><br><span class="line-number">2965</span><br><span class="line-number">2966</span><br><span class="line-number">2967</span><br><span class="line-number">2968</span><br><span class="line-number">2969</span><br><span class="line-number">2970</span><br><span class="line-number">2971</span><br><span class="line-number">2972</span><br><span class="line-number">2973</span><br><span class="line-number">2974</span><br><span class="line-number">2975</span><br><span class="line-number">2976</span><br><span class="line-number">2977</span><br><span class="line-number">2978</span><br><span class="line-number">2979</span><br><span class="line-number">2980</span><br><span class="line-number">2981</span><br><span class="line-number">2982</span><br><span class="line-number">2983</span><br><span class="line-number">2984</span><br><span class="line-number">2985</span><br><span class="line-number">2986</span><br><span class="line-number">2987</span><br><span class="line-number">2988</span><br><span class="line-number">2989</span><br><span class="line-number">2990</span><br><span class="line-number">2991</span><br><span class="line-number">2992</span><br><span class="line-number">2993</span><br><span class="line-number">2994</span><br><span class="line-number">2995</span><br><span class="line-number">2996</span><br><span class="line-number">2997</span><br><span class="line-number">2998</span><br><span class="line-number">2999</span><br><span class="line-number">3000</span><br><span class="line-number">3001</span><br><span class="line-number">3002</span><br><span class="line-number">3003</span><br><span class="line-number">3004</span><br><span class="line-number">3005</span><br><span class="line-number">3006</span><br><span class="line-number">3007</span><br><span class="line-number">3008</span><br><span class="line-number">3009</span><br><span class="line-number">3010</span><br><span class="line-number">3011</span><br><span class="line-number">3012</span><br><span class="line-number">3013</span><br><span class="line-number">3014</span><br><span class="line-number">3015</span><br><span class="line-number">3016</span><br><span class="line-number">3017</span><br><span class="line-number">3018</span><br><span class="line-number">3019</span><br><span class="line-number">3020</span><br><span class="line-number">3021</span><br><span class="line-number">3022</span><br><span class="line-number">3023</span><br><span class="line-number">3024</span><br><span class="line-number">3025</span><br><span class="line-number">3026</span><br><span class="line-number">3027</span><br><span class="line-number">3028</span><br><span class="line-number">3029</span><br><span class="line-number">3030</span><br><span class="line-number">3031</span><br><span class="line-number">3032</span><br><span class="line-number">3033</span><br><span class="line-number">3034</span><br><span class="line-number">3035</span><br><span class="line-number">3036</span><br><span class="line-number">3037</span><br><span class="line-number">3038</span><br><span class="line-number">3039</span><br><span class="line-number">3040</span><br><span class="line-number">3041</span><br><span class="line-number">3042</span><br><span class="line-number">3043</span><br><span class="line-number">3044</span><br><span class="line-number">3045</span><br><span class="line-number">3046</span><br><span class="line-number">3047</span><br><span class="line-number">3048</span><br><span class="line-number">3049</span><br><span class="line-number">3050</span><br><span class="line-number">3051</span><br><span class="line-number">3052</span><br><span class="line-number">3053</span><br><span class="line-number">3054</span><br><span class="line-number">3055</span><br><span class="line-number">3056</span><br><span class="line-number">3057</span><br><span class="line-number">3058</span><br><span class="line-number">3059</span><br><span class="line-number">3060</span><br><span class="line-number">3061</span><br><span class="line-number">3062</span><br><span class="line-number">3063</span><br><span class="line-number">3064</span><br><span class="line-number">3065</span><br><span class="line-number">3066</span><br><span class="line-number">3067</span><br><span class="line-number">3068</span><br><span class="line-number">3069</span><br><span class="line-number">3070</span><br><span class="line-number">3071</span><br><span class="line-number">3072</span><br><span class="line-number">3073</span><br><span class="line-number">3074</span><br><span class="line-number">3075</span><br><span class="line-number">3076</span><br><span class="line-number">3077</span><br><span class="line-number">3078</span><br><span class="line-number">3079</span><br><span class="line-number">3080</span><br><span class="line-number">3081</span><br><span class="line-number">3082</span><br><span class="line-number">3083</span><br><span class="line-number">3084</span><br><span class="line-number">3085</span><br><span class="line-number">3086</span><br><span class="line-number">3087</span><br><span class="line-number">3088</span><br><span class="line-number">3089</span><br><span class="line-number">3090</span><br><span class="line-number">3091</span><br><span class="line-number">3092</span><br><span class="line-number">3093</span><br><span class="line-number">3094</span><br><span class="line-number">3095</span><br><span class="line-number">3096</span><br><span class="line-number">3097</span><br><span class="line-number">3098</span><br><span class="line-number">3099</span><br><span class="line-number">3100</span><br><span class="line-number">3101</span><br><span class="line-number">3102</span><br><span class="line-number">3103</span><br><span class="line-number">3104</span><br><span class="line-number">3105</span><br><span class="line-number">3106</span><br><span class="line-number">3107</span><br><span class="line-number">3108</span><br><span class="line-number">3109</span><br><span class="line-number">3110</span><br><span class="line-number">3111</span><br><span class="line-number">3112</span><br><span class="line-number">3113</span><br><span class="line-number">3114</span><br><span class="line-number">3115</span><br><span class="line-number">3116</span><br><span class="line-number">3117</span><br><span class="line-number">3118</span><br><span class="line-number">3119</span><br><span class="line-number">3120</span><br><span class="line-number">3121</span><br><span class="line-number">3122</span><br><span class="line-number">3123</span><br><span class="line-number">3124</span><br><span class="line-number">3125</span><br><span class="line-number">3126</span><br><span class="line-number">3127</span><br><span class="line-number">3128</span><br><span class="line-number">3129</span><br><span class="line-number">3130</span><br><span class="line-number">3131</span><br><span class="line-number">3132</span><br><span class="line-number">3133</span><br><span class="line-number">3134</span><br><span class="line-number">3135</span><br><span class="line-number">3136</span><br><span class="line-number">3137</span><br><span class="line-number">3138</span><br><span class="line-number">3139</span><br><span class="line-number">3140</span><br><span class="line-number">3141</span><br><span class="line-number">3142</span><br><span class="line-number">3143</span><br><span class="line-number">3144</span><br><span class="line-number">3145</span><br><span class="line-number">3146</span><br><span class="line-number">3147</span><br><span class="line-number">3148</span><br><span class="line-number">3149</span><br><span class="line-number">3150</span><br><span class="line-number">3151</span><br><span class="line-number">3152</span><br><span class="line-number">3153</span><br><span class="line-number">3154</span><br><span class="line-number">3155</span><br><span class="line-number">3156</span><br><span class="line-number">3157</span><br><span class="line-number">3158</span><br><span class="line-number">3159</span><br><span class="line-number">3160</span><br><span class="line-number">3161</span><br><span class="line-number">3162</span><br><span class="line-number">3163</span><br><span class="line-number">3164</span><br><span class="line-number">3165</span><br><span class="line-number">3166</span><br><span class="line-number">3167</span><br><span class="line-number">3168</span><br><span class="line-number">3169</span><br><span class="line-number">3170</span><br><span class="line-number">3171</span><br><span class="line-number">3172</span><br><span class="line-number">3173</span><br><span class="line-number">3174</span><br><span class="line-number">3175</span><br><span class="line-number">3176</span><br><span class="line-number">3177</span><br><span class="line-number">3178</span><br><span class="line-number">3179</span><br><span class="line-number">3180</span><br><span class="line-number">3181</span><br><span class="line-number">3182</span><br><span class="line-number">3183</span><br><span class="line-number">3184</span><br><span class="line-number">3185</span><br><span class="line-number">3186</span><br><span class="line-number">3187</span><br><span class="line-number">3188</span><br><span class="line-number">3189</span><br><span class="line-number">3190</span><br><span class="line-number">3191</span><br><span class="line-number">3192</span><br><span class="line-number">3193</span><br><span class="line-number">3194</span><br><span class="line-number">3195</span><br><span class="line-number">3196</span><br><span class="line-number">3197</span><br><span class="line-number">3198</span><br><span class="line-number">3199</span><br><span class="line-number">3200</span><br><span class="line-number">3201</span><br><span class="line-number">3202</span><br><span class="line-number">3203</span><br><span class="line-number">3204</span><br><span class="line-number">3205</span><br><span class="line-number">3206</span><br><span class="line-number">3207</span><br><span class="line-number">3208</span><br><span class="line-number">3209</span><br><span class="line-number">3210</span><br><span class="line-number">3211</span><br><span class="line-number">3212</span><br><span class="line-number">3213</span><br><span class="line-number">3214</span><br><span class="line-number">3215</span><br><span class="line-number">3216</span><br><span class="line-number">3217</span><br><span class="line-number">3218</span><br><span class="line-number">3219</span><br><span class="line-number">3220</span><br><span class="line-number">3221</span><br><span class="line-number">3222</span><br><span class="line-number">3223</span><br><span class="line-number">3224</span><br><span class="line-number">3225</span><br><span class="line-number">3226</span><br><span class="line-number">3227</span><br><span class="line-number">3228</span><br><span class="line-number">3229</span><br><span class="line-number">3230</span><br><span class="line-number">3231</span><br><span class="line-number">3232</span><br><span class="line-number">3233</span><br><span class="line-number">3234</span><br><span class="line-number">3235</span><br><span class="line-number">3236</span><br><span class="line-number">3237</span><br><span class="line-number">3238</span><br><span class="line-number">3239</span><br><span class="line-number">3240</span><br><span class="line-number">3241</span><br><span class="line-number">3242</span><br><span class="line-number">3243</span><br><span class="line-number">3244</span><br><span class="line-number">3245</span><br><span class="line-number">3246</span><br><span class="line-number">3247</span><br><span class="line-number">3248</span><br><span class="line-number">3249</span><br><span class="line-number">3250</span><br><span class="line-number">3251</span><br><span class="line-number">3252</span><br><span class="line-number">3253</span><br><span class="line-number">3254</span><br><span class="line-number">3255</span><br><span class="line-number">3256</span><br><span class="line-number">3257</span><br><span class="line-number">3258</span><br><span class="line-number">3259</span><br><span class="line-number">3260</span><br><span class="line-number">3261</span><br><span class="line-number">3262</span><br><span class="line-number">3263</span><br><span class="line-number">3264</span><br><span class="line-number">3265</span><br><span class="line-number">3266</span><br><span class="line-number">3267</span><br><span class="line-number">3268</span><br><span class="line-number">3269</span><br><span class="line-number">3270</span><br><span class="line-number">3271</span><br><span class="line-number">3272</span><br><span class="line-number">3273</span><br><span class="line-number">3274</span><br><span class="line-number">3275</span><br><span class="line-number">3276</span><br><span class="line-number">3277</span><br><span class="line-number">3278</span><br><span class="line-number">3279</span><br><span class="line-number">3280</span><br><span class="line-number">3281</span><br><span class="line-number">3282</span><br><span class="line-number">3283</span><br><span class="line-number">3284</span><br><span class="line-number">3285</span><br><span class="line-number">3286</span><br><span class="line-number">3287</span><br><span class="line-number">3288</span><br><span class="line-number">3289</span><br><span class="line-number">3290</span><br><span class="line-number">3291</span><br><span class="line-number">3292</span><br><span class="line-number">3293</span><br><span class="line-number">3294</span><br><span class="line-number">3295</span><br><span class="line-number">3296</span><br><span class="line-number">3297</span><br><span class="line-number">3298</span><br><span class="line-number">3299</span><br><span class="line-number">3300</span><br><span class="line-number">3301</span><br><span class="line-number">3302</span><br><span class="line-number">3303</span><br><span class="line-number">3304</span><br><span class="line-number">3305</span><br><span class="line-number">3306</span><br><span class="line-number">3307</span><br><span class="line-number">3308</span><br><span class="line-number">3309</span><br><span class="line-number">3310</span><br><span class="line-number">3311</span><br><span class="line-number">3312</span><br><span class="line-number">3313</span><br><span class="line-number">3314</span><br><span class="line-number">3315</span><br><span class="line-number">3316</span><br><span class="line-number">3317</span><br><span class="line-number">3318</span><br><span class="line-number">3319</span><br><span class="line-number">3320</span><br><span class="line-number">3321</span><br><span class="line-number">3322</span><br><span class="line-number">3323</span><br><span class="line-number">3324</span><br><span class="line-number">3325</span><br><span class="line-number">3326</span><br><span class="line-number">3327</span><br><span class="line-number">3328</span><br><span class="line-number">3329</span><br><span class="line-number">3330</span><br><span class="line-number">3331</span><br><span class="line-number">3332</span><br><span class="line-number">3333</span><br><span class="line-number">3334</span><br><span class="line-number">3335</span><br><span class="line-number">3336</span><br><span class="line-number">3337</span><br><span class="line-number">3338</span><br><span class="line-number">3339</span><br><span class="line-number">3340</span><br><span class="line-number">3341</span><br><span class="line-number">3342</span><br><span class="line-number">3343</span><br><span class="line-number">3344</span><br><span class="line-number">3345</span><br><span class="line-number">3346</span><br><span class="line-number">3347</span><br><span class="line-number">3348</span><br><span class="line-number">3349</span><br><span class="line-number">3350</span><br><span class="line-number">3351</span><br><span class="line-number">3352</span><br><span class="line-number">3353</span><br><span class="line-number">3354</span><br><span class="line-number">3355</span><br><span class="line-number">3356</span><br><span class="line-number">3357</span><br><span class="line-number">3358</span><br><span class="line-number">3359</span><br><span class="line-number">3360</span><br><span class="line-number">3361</span><br><span class="line-number">3362</span><br><span class="line-number">3363</span><br><span class="line-number">3364</span><br><span class="line-number">3365</span><br><span class="line-number">3366</span><br><span class="line-number">3367</span><br><span class="line-number">3368</span><br><span class="line-number">3369</span><br><span class="line-number">3370</span><br><span class="line-number">3371</span><br><span class="line-number">3372</span><br><span class="line-number">3373</span><br><span class="line-number">3374</span><br><span class="line-number">3375</span><br><span class="line-number">3376</span><br><span class="line-number">3377</span><br><span class="line-number">3378</span><br><span class="line-number">3379</span><br><span class="line-number">3380</span><br><span class="line-number">3381</span><br><span class="line-number">3382</span><br><span class="line-number">3383</span><br><span class="line-number">3384</span><br><span class="line-number">3385</span><br><span class="line-number">3386</span><br><span class="line-number">3387</span><br><span class="line-number">3388</span><br><span class="line-number">3389</span><br><span class="line-number">3390</span><br><span class="line-number">3391</span><br><span class="line-number">3392</span><br><span class="line-number">3393</span><br><span class="line-number">3394</span><br><span class="line-number">3395</span><br><span class="line-number">3396</span><br><span class="line-number">3397</span><br><span class="line-number">3398</span><br><span class="line-number">3399</span><br><span class="line-number">3400</span><br><span class="line-number">3401</span><br><span class="line-number">3402</span><br><span class="line-number">3403</span><br><span class="line-number">3404</span><br><span class="line-number">3405</span><br><span class="line-number">3406</span><br><span class="line-number">3407</span><br><span class="line-number">3408</span><br><span class="line-number">3409</span><br><span class="line-number">3410</span><br><span class="line-number">3411</span><br><span class="line-number">3412</span><br><span class="line-number">3413</span><br><span class="line-number">3414</span><br><span class="line-number">3415</span><br><span class="line-number">3416</span><br><span class="line-number">3417</span><br><span class="line-number">3418</span><br><span class="line-number">3419</span><br><span class="line-number">3420</span><br><span class="line-number">3421</span><br><span class="line-number">3422</span><br><span class="line-number">3423</span><br><span class="line-number">3424</span><br><span class="line-number">3425</span><br><span class="line-number">3426</span><br><span class="line-number">3427</span><br><span class="line-number">3428</span><br><span class="line-number">3429</span><br><span class="line-number">3430</span><br><span class="line-number">3431</span><br><span class="line-number">3432</span><br><span class="line-number">3433</span><br><span class="line-number">3434</span><br><span class="line-number">3435</span><br><span class="line-number">3436</span><br><span class="line-number">3437</span><br><span class="line-number">3438</span><br><span class="line-number">3439</span><br><span class="line-number">3440</span><br><span class="line-number">3441</span><br><span class="line-number">3442</span><br><span class="line-number">3443</span><br><span class="line-number">3444</span><br><span class="line-number">3445</span><br><span class="line-number">3446</span><br><span class="line-number">3447</span><br><span class="line-number">3448</span><br><span class="line-number">3449</span><br><span class="line-number">3450</span><br><span class="line-number">3451</span><br><span class="line-number">3452</span><br><span class="line-number">3453</span><br><span class="line-number">3454</span><br><span class="line-number">3455</span><br><span class="line-number">3456</span><br><span class="line-number">3457</span><br><span class="line-number">3458</span><br><span class="line-number">3459</span><br><span class="line-number">3460</span><br><span class="line-number">3461</span><br><span class="line-number">3462</span><br><span class="line-number">3463</span><br><span class="line-number">3464</span><br><span class="line-number">3465</span><br><span class="line-number">3466</span><br><span class="line-number">3467</span><br><span class="line-number">3468</span><br><span class="line-number">3469</span><br><span class="line-number">3470</span><br><span class="line-number">3471</span><br><span class="line-number">3472</span><br><span class="line-number">3473</span><br><span class="line-number">3474</span><br><span class="line-number">3475</span><br><span class="line-number">3476</span><br><span class="line-number">3477</span><br><span class="line-number">3478</span><br><span class="line-number">3479</span><br><span class="line-number">3480</span><br><span class="line-number">3481</span><br><span class="line-number">3482</span><br><span class="line-number">3483</span><br><span class="line-number">3484</span><br><span class="line-number">3485</span><br><span class="line-number">3486</span><br><span class="line-number">3487</span><br><span class="line-number">3488</span><br><span class="line-number">3489</span><br><span class="line-number">3490</span><br><span class="line-number">3491</span><br><span class="line-number">3492</span><br><span class="line-number">3493</span><br><span class="line-number">3494</span><br><span class="line-number">3495</span><br><span class="line-number">3496</span><br><span class="line-number">3497</span><br><span class="line-number">3498</span><br><span class="line-number">3499</span><br><span class="line-number">3500</span><br><span class="line-number">3501</span><br><span class="line-number">3502</span><br><span class="line-number">3503</span><br><span class="line-number">3504</span><br><span class="line-number">3505</span><br><span class="line-number">3506</span><br><span class="line-number">3507</span><br><span class="line-number">3508</span><br><span class="line-number">3509</span><br><span class="line-number">3510</span><br><span class="line-number">3511</span><br><span class="line-number">3512</span><br><span class="line-number">3513</span><br><span class="line-number">3514</span><br><span class="line-number">3515</span><br><span class="line-number">3516</span><br><span class="line-number">3517</span><br><span class="line-number">3518</span><br><span class="line-number">3519</span><br><span class="line-number">3520</span><br><span class="line-number">3521</span><br><span class="line-number">3522</span><br><span class="line-number">3523</span><br><span class="line-number">3524</span><br><span class="line-number">3525</span><br><span class="line-number">3526</span><br><span class="line-number">3527</span><br><span class="line-number">3528</span><br><span class="line-number">3529</span><br><span class="line-number">3530</span><br><span class="line-number">3531</span><br><span class="line-number">3532</span><br><span class="line-number">3533</span><br><span class="line-number">3534</span><br><span class="line-number">3535</span><br><span class="line-number">3536</span><br><span class="line-number">3537</span><br><span class="line-number">3538</span><br><span class="line-number">3539</span><br><span class="line-number">3540</span><br><span class="line-number">3541</span><br><span class="line-number">3542</span><br><span class="line-number">3543</span><br><span class="line-number">3544</span><br><span class="line-number">3545</span><br><span class="line-number">3546</span><br><span class="line-number">3547</span><br><span class="line-number">3548</span><br><span class="line-number">3549</span><br><span class="line-number">3550</span><br><span class="line-number">3551</span><br><span class="line-number">3552</span><br><span class="line-number">3553</span><br><span class="line-number">3554</span><br><span class="line-number">3555</span><br><span class="line-number">3556</span><br><span class="line-number">3557</span><br><span class="line-number">3558</span><br><span class="line-number">3559</span><br><span class="line-number">3560</span><br><span class="line-number">3561</span><br><span class="line-number">3562</span><br><span class="line-number">3563</span><br><span class="line-number">3564</span><br><span class="line-number">3565</span><br><span class="line-number">3566</span><br><span class="line-number">3567</span><br><span class="line-number">3568</span><br><span class="line-number">3569</span><br><span class="line-number">3570</span><br><span class="line-number">3571</span><br><span class="line-number">3572</span><br><span class="line-number">3573</span><br><span class="line-number">3574</span><br><span class="line-number">3575</span><br><span class="line-number">3576</span><br><span class="line-number">3577</span><br><span class="line-number">3578</span><br><span class="line-number">3579</span><br><span class="line-number">3580</span><br><span class="line-number">3581</span><br><span class="line-number">3582</span><br><span class="line-number">3583</span><br><span class="line-number">3584</span><br><span class="line-number">3585</span><br><span class="line-number">3586</span><br><span class="line-number">3587</span><br><span class="line-number">3588</span><br><span class="line-number">3589</span><br><span class="line-number">3590</span><br><span class="line-number">3591</span><br><span class="line-number">3592</span><br><span class="line-number">3593</span><br><span class="line-number">3594</span><br><span class="line-number">3595</span><br><span class="line-number">3596</span><br><span class="line-number">3597</span><br><span class="line-number">3598</span><br><span class="line-number">3599</span><br><span class="line-number">3600</span><br><span class="line-number">3601</span><br><span class="line-number">3602</span><br><span class="line-number">3603</span><br><span class="line-number">3604</span><br><span class="line-number">3605</span><br><span class="line-number">3606</span><br><span class="line-number">3607</span><br><span class="line-number">3608</span><br><span class="line-number">3609</span><br><span class="line-number">3610</span><br><span class="line-number">3611</span><br><span class="line-number">3612</span><br><span class="line-number">3613</span><br><span class="line-number">3614</span><br><span class="line-number">3615</span><br><span class="line-number">3616</span><br><span class="line-number">3617</span><br><span class="line-number">3618</span><br><span class="line-number">3619</span><br><span class="line-number">3620</span><br><span class="line-number">3621</span><br><span class="line-number">3622</span><br><span class="line-number">3623</span><br><span class="line-number">3624</span><br><span class="line-number">3625</span><br><span class="line-number">3626</span><br><span class="line-number">3627</span><br><span class="line-number">3628</span><br><span class="line-number">3629</span><br><span class="line-number">3630</span><br><span class="line-number">3631</span><br><span class="line-number">3632</span><br><span class="line-number">3633</span><br><span class="line-number">3634</span><br><span class="line-number">3635</span><br><span class="line-number">3636</span><br><span class="line-number">3637</span><br><span class="line-number">3638</span><br><span class="line-number">3639</span><br><span class="line-number">3640</span><br><span class="line-number">3641</span><br><span class="line-number">3642</span><br><span class="line-number">3643</span><br><span class="line-number">3644</span><br><span class="line-number">3645</span><br><span class="line-number">3646</span><br><span class="line-number">3647</span><br><span class="line-number">3648</span><br><span class="line-number">3649</span><br><span class="line-number">3650</span><br><span class="line-number">3651</span><br><span class="line-number">3652</span><br><span class="line-number">3653</span><br><span class="line-number">3654</span><br><span class="line-number">3655</span><br><span class="line-number">3656</span><br><span class="line-number">3657</span><br><span class="line-number">3658</span><br><span class="line-number">3659</span><br><span class="line-number">3660</span><br><span class="line-number">3661</span><br><span class="line-number">3662</span><br><span class="line-number">3663</span><br><span class="line-number">3664</span><br><span class="line-number">3665</span><br><span class="line-number">3666</span><br><span class="line-number">3667</span><br><span class="line-number">3668</span><br><span class="line-number">3669</span><br><span class="line-number">3670</span><br><span class="line-number">3671</span><br><span class="line-number">3672</span><br><span class="line-number">3673</span><br><span class="line-number">3674</span><br><span class="line-number">3675</span><br><span class="line-number">3676</span><br><span class="line-number">3677</span><br><span class="line-number">3678</span><br><span class="line-number">3679</span><br><span class="line-number">3680</span><br><span class="line-number">3681</span><br><span class="line-number">3682</span><br><span class="line-number">3683</span><br><span class="line-number">3684</span><br><span class="line-number">3685</span><br><span class="line-number">3686</span><br><span class="line-number">3687</span><br><span class="line-number">3688</span><br><span class="line-number">3689</span><br><span class="line-number">3690</span><br><span class="line-number">3691</span><br><span class="line-number">3692</span><br><span class="line-number">3693</span><br><span class="line-number">3694</span><br><span class="line-number">3695</span><br><span class="line-number">3696</span><br><span class="line-number">3697</span><br><span class="line-number">3698</span><br><span class="line-number">3699</span><br><span class="line-number">3700</span><br><span class="line-number">3701</span><br><span class="line-number">3702</span><br><span class="line-number">3703</span><br><span class="line-number">3704</span><br><span class="line-number">3705</span><br><span class="line-number">3706</span><br><span class="line-number">3707</span><br><span class="line-number">3708</span><br><span class="line-number">3709</span><br><span class="line-number">3710</span><br><span class="line-number">3711</span><br><span class="line-number">3712</span><br><span class="line-number">3713</span><br><span class="line-number">3714</span><br><span class="line-number">3715</span><br><span class="line-number">3716</span><br><span class="line-number">3717</span><br><span class="line-number">3718</span><br><span class="line-number">3719</span><br><span class="line-number">3720</span><br><span class="line-number">3721</span><br><span class="line-number">3722</span><br><span class="line-number">3723</span><br><span class="line-number">3724</span><br><span class="line-number">3725</span><br><span class="line-number">3726</span><br><span class="line-number">3727</span><br><span class="line-number">3728</span><br><span class="line-number">3729</span><br><span class="line-number">3730</span><br><span class="line-number">3731</span><br><span class="line-number">3732</span><br><span class="line-number">3733</span><br><span class="line-number">3734</span><br><span class="line-number">3735</span><br><span class="line-number">3736</span><br><span class="line-number">3737</span><br><span class="line-number">3738</span><br><span class="line-number">3739</span><br><span class="line-number">3740</span><br><span class="line-number">3741</span><br><span class="line-number">3742</span><br><span class="line-number">3743</span><br><span class="line-number">3744</span><br><span class="line-number">3745</span><br><span class="line-number">3746</span><br><span class="line-number">3747</span><br><span class="line-number">3748</span><br><span class="line-number">3749</span><br><span class="line-number">3750</span><br><span class="line-number">3751</span><br><span class="line-number">3752</span><br><span class="line-number">3753</span><br><span class="line-number">3754</span><br><span class="line-number">3755</span><br><span class="line-number">3756</span><br><span class="line-number">3757</span><br><span class="line-number">3758</span><br><span class="line-number">3759</span><br><span class="line-number">3760</span><br><span class="line-number">3761</span><br><span class="line-number">3762</span><br><span class="line-number">3763</span><br><span class="line-number">3764</span><br><span class="line-number">3765</span><br><span class="line-number">3766</span><br><span class="line-number">3767</span><br><span class="line-number">3768</span><br><span class="line-number">3769</span><br><span class="line-number">3770</span><br><span class="line-number">3771</span><br><span class="line-number">3772</span><br><span class="line-number">3773</span><br><span class="line-number">3774</span><br><span class="line-number">3775</span><br><span class="line-number">3776</span><br><span class="line-number">3777</span><br><span class="line-number">3778</span><br><span class="line-number">3779</span><br><span class="line-number">3780</span><br><span class="line-number">3781</span><br><span class="line-number">3782</span><br><span class="line-number">3783</span><br><span class="line-number">3784</span><br><span class="line-number">3785</span><br><span class="line-number">3786</span><br><span class="line-number">3787</span><br><span class="line-number">3788</span><br><span class="line-number">3789</span><br><span class="line-number">3790</span><br><span class="line-number">3791</span><br><span class="line-number">3792</span><br><span class="line-number">3793</span><br><span class="line-number">3794</span><br><span class="line-number">3795</span><br><span class="line-number">3796</span><br><span class="line-number">3797</span><br><span class="line-number">3798</span><br><span class="line-number">3799</span><br><span class="line-number">3800</span><br><span class="line-number">3801</span><br><span class="line-number">3802</span><br><span class="line-number">3803</span><br><span class="line-number">3804</span><br><span class="line-number">3805</span><br><span class="line-number">3806</span><br><span class="line-number">3807</span><br><span class="line-number">3808</span><br><span class="line-number">3809</span><br><span class="line-number">3810</span><br><span class="line-number">3811</span><br><span class="line-number">3812</span><br><span class="line-number">3813</span><br><span class="line-number">3814</span><br><span class="line-number">3815</span><br><span class="line-number">3816</span><br><span class="line-number">3817</span><br><span class="line-number">3818</span><br><span class="line-number">3819</span><br><span class="line-number">3820</span><br><span class="line-number">3821</span><br><span class="line-number">3822</span><br><span class="line-number">3823</span><br><span class="line-number">3824</span><br><span class="line-number">3825</span><br><span class="line-number">3826</span><br><span class="line-number">3827</span><br><span class="line-number">3828</span><br></div></div><h2 id="_4-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_4-\u6D4B\u8BD5" aria-hidden="true">#</a> 4. \u6D4B\u8BD5</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuestTest</span> <span class="token keyword">extends</span> <span class="token class-name">BaseTestQuery2</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">QuestDBConf</span> questDBConf<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Before</span>
    <span class="token keyword">public</span>  <span class="token keyword">void</span> <span class="token function">initSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">SabotContext</span> sabotContext <span class="token operator">=</span> <span class="token function">getSabotContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sabotContext<span class="token punctuation">.</span><span class="token function">getOptionManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token class-name">OptionValue</span><span class="token punctuation">.</span><span class="token function">createBoolean</span><span class="token punctuation">(</span><span class="token class-name">OptionValue<span class="token punctuation">.</span>OptionType</span><span class="token punctuation">.</span><span class="token constant">SYSTEM</span><span class="token punctuation">,</span>
                <span class="token string">&quot;hadoop_block_affinity_cache.enabled&quot;</span><span class="token punctuation">,</span>
                <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SourceConfig</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SourceConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sc<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;questdb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        questDBConf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QuestDBConf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        questDBConf<span class="token punctuation">.</span>host <span class="token operator">=</span> <span class="token string">&quot;192.168.203.128&quot;</span><span class="token punctuation">;</span>
        questDBConf<span class="token punctuation">.</span>port <span class="token operator">=</span> <span class="token string">&quot;8812&quot;</span><span class="token punctuation">;</span>
        questDBConf<span class="token punctuation">.</span>username<span class="token operator">=</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">;</span>
        questDBConf<span class="token punctuation">.</span>password<span class="token operator">=</span><span class="token string">&quot;quest&quot;</span><span class="token punctuation">;</span>
        sc<span class="token punctuation">.</span><span class="token function">setConnectionConf</span><span class="token punctuation">(</span>questDBConf<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sc<span class="token punctuation">.</span><span class="token function">setMetadataPolicy</span><span class="token punctuation">(</span><span class="token class-name">CatalogService</span><span class="token punctuation">.</span><span class="token constant">REFRESH_EVERYTHING_NOW</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sabotContext<span class="token punctuation">.</span><span class="token function">getCatalogService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createSourceIfMissingWithThrow</span><span class="token punctuation">(</span>sc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span>  <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> query  <span class="token operator">=</span> <span class="token string">&quot;select id,name from questdb.qdb.test limit 1&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">TestResult</span> testResult<span class="token operator">=</span>  <span class="token function">testBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">sqlQuery</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">unOrdered</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">baselineColumns</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">baselineValues</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="_5-\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#_5-\u6253\u5305" aria-hidden="true">#</a> 5. \u6253\u5305</h2><p><code> mvn clean package -DskipTests</code> jar\u4E0A\u4F20\u81F3 <code>/opt/dremio/jars/3rdparty</code>\u4E2D,\u91CD\u542Fdremio \u670D\u52A1\u5373\u53EF. <code>service dremio start</code><code>service dremio stop</code><img src="https://cdn.nlark.com/yuque/0/2022/png/21561641/1646791598887-4f58e531-28a5-4510-8aba-d7849e340f3b.png#clientId=u40010713-cff7-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=295&amp;id=u147c65a8&amp;margin=[object Object]&amp;name=image.png&amp;originHeight=484&amp;originWidth=958&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=29586&amp;status=done&amp;style=none&amp;taskId=u7f5f2198-a4bb-4c47-b0e0-17165e52f51&amp;title=&amp;width=584" alt="image.png"><img src="https://cdn.nlark.com/yuque/0/2022/png/21561641/1646791638602-58803202-75f1-495c-b8ee-3bf086ed6d1a.png#clientId=u40010713-cff7-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=135&amp;id=ud79cf6bb&amp;margin=[object Object]&amp;name=image.png&amp;originHeight=254&amp;originWidth=1109&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=16148&amp;status=done&amp;style=none&amp;taskId=u8773e75f-d376-4cb0-9f77-e3cad5afbc7&amp;title=&amp;width=588" alt="image.png"><img src="https://cdn.nlark.com/yuque/0/2022/png/21561641/1646791622058-c55898ed-d810-4bc6-910b-4f8a488d02d6.png#clientId=u40010713-cff7-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=297&amp;id=u1de14f66&amp;margin=[object Object]&amp;name=image.png&amp;originHeight=640&amp;originWidth=1220&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=36473&amp;status=done&amp;style=none&amp;taskId=u159c12d4-cecc-4d0b-bdbf-9d08017b95b&amp;title=&amp;width=566" alt="image.png"></p><h1 id="dremio-\u5E38\u7528sql" tabindex="-1"><a class="header-anchor" href="#dremio-\u5E38\u7528sql" aria-hidden="true">#</a> Dremio \u5E38\u7528sql</h1><ol><li>\u5143\u6570\u636E</li></ol><blockquote><p>SELECT * FROM table(&quot;mysql-demo&quot; .external_query(&#39;select table_name,column_name,data_type from all_tab_cols WHERE table_name in(&#39;&#39;table1&#39;&#39;) AND HIDDEN_COLUMN=&#39;&#39;NO&#39;&#39;&#39;))</p></blockquote><ol start="2"><li>\u8868</li></ol><blockquote><p>select * from table(&quot;mysql-demo&quot;.external_query(&#39;select * from table1&#39;))</p></blockquote>`,66);function t(e,u){return p}var l=n(a,[["render",t],["__file","Dremio.html.vue"]]);export{l as default};