import{_ as e,c as a}from"./app.0a5e9105.js";const o={},t=a('<h2 id="centos-8-eol\u5207\u6362\u6E90" tabindex="-1"><a class="header-anchor" href="#centos-8-eol\u5207\u6362\u6E90" aria-hidden="true">#</a> CentOS 8 EOL\u5207\u6362\u6E90</h2><p><a href="https://help.aliyun.com/document_detail/405635.html?spm=5176.smartservice_service_chat.0.0.712c3f1bBoZ19I" target="_blank" rel="noopener noreferrer">https://help.aliyun.com/document_detail/405635.html?spm=5176.smartservice_service_chat.0.0.712c3f1bBoZ19I</a></p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h2 id="\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E" aria-hidden="true">#</a> \u67E5\u627E</h2><h3 id="locate" tabindex="-1"><a class="header-anchor" href="#locate" aria-hidden="true">#</a> locate</h3><p>\u5E38\u7528\u7684\u67E5\u627E\u6587\u4EF6\u7684\u547D\u4EE4find\uFF0C\u4F46find\u662F\u8BFB\u76D8\u641C\u7D22\uFF0C\u6548\u7387\u8F83\u4F4E\u3002 \u5F53\u7CFB\u7EDF\u521A\u521A\u5EFA\u7ACB\u65F6\uFF0C\u6216\u8005\u65B0\u589E\u3001\u5220\u9664\u6587\u4EF6\u65F6\uFF0Cmlocate\u7684\u6570\u636E\u5E93\u6587\u4EF6\u5E76\u4E0D\u80FD\u540C\u6B65\u66F4\u65B0\uFF0C\u9700\u8981\u4F7F\u7528root\u7528\u6237\u624B\u52A8\u6267\u884Cupdatedb\u547D\u4EE4\u8FDB\u884C\u66F4\u65B0\u3002</p><blockquote><p>sudo -i updatedb</p></blockquote><ol><li>\u67E5\u627E\u5305\u542Bpasswd\u7684\u6587\u4EF6\u3002</li></ol><blockquote><p>locate passwd</p></blockquote><ol start="2"><li>\u7CBE\u786E\u67E5\u627E\u540D\u53EBpasswd\u7684\u6587\u4EF6\u3002</li></ol><blockquote><p>locate -b &#39;\\passwd&#39;</p></blockquote><ol start="3"><li>\u67E5\u627E\u4EE5passwd\u7ED3\u5C3E\u7684\u6587\u4EF6\u3002</li></ol><blockquote><p>locate &#39;*passwd&#39;</p></blockquote><h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h3><blockquote><p>find / -name demo</p></blockquote><p>\u627E\u51FA / \u76EE\u5F55\u4E0B \u540D\u5B57\u5305\u542B demo\u7684\u6587\u4EF6</p><h2 id="\u5305\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5305\u7BA1\u7406" aria-hidden="true">#</a> \u5305\u7BA1\u7406</h2><h3 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> yum</h3><blockquote><p>yum install *.rpm //\u5B89\u88C5\u67D0\u4E2Arpm\u8F6F\u4EF6</p></blockquote><blockquote><p>yum install java-1.8.0-openjdk* -y</p></blockquote><h3 id="rpm" tabindex="-1"><a class="header-anchor" href="#rpm" aria-hidden="true">#</a> rpm</h3><blockquote><p>rpm -qa|grep dremio // \u67E5\u627E\u5305\u4FE1\u606F</p></blockquote><blockquote><p>rpm -e *.noarch //\u79FB\u9664\u8F6F\u4EF6</p></blockquote><h2 id="\u67E5\u627E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u67E5\u627E\u73AF\u5883\u53D8\u91CF</h2><h3 id="which" tabindex="-1"><a class="header-anchor" href="#which" aria-hidden="true">#</a> which</h3><blockquote><p>which python</p></blockquote>',26);function r(h,d){return t}var i=e(o,[["render",r],["__file","Linux\u6307\u4EE4.html.vue"]]);export{i as default};
