


<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>vendor/assets/javascripts/soyutils.js at master from igrigorik/closure-sprockets - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="6db453ad598b174947bec55cb40468dc6498c87e" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundle_github.css?a5bcffab45c442622b8cec11fd14a9df3334f766" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundle_jquery.js?7882abd39e9d12ad0242cb71f1709c2d9107e5b6" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundle_github.js?088580da0df4f745d0358f6e1fc5bf781c164c17" type="text/javascript"></script>
    

      <link rel='permalink' href='/igrigorik/closure-sprockets/blob/6a13edf63e7b1cf9098c6c87e96576e064d09251/vendor/assets/javascripts/soyutils.js'>
    

    <meta name="description" content="closure-sprockets - Sprockets processor for Google's Closure tools" />
  <link href="https://github.com/igrigorik/closure-sprockets/commits/master.atom" rel="alternate" title="Recent Commits to closure-sprockets:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows env-production ">
    


    

    <div id="main">
      <div id="header" class="true">
          <a class="logo" href="https://github.com/">
            <img alt="github" class="default svg" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6.svg" />
            <img alt="github" class="default png" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6.png" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover svg" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6-hover.svg" />
            <img alt="github" class="hover png" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6-hover.png" />
            <!--<![endif]-->
          </a>

          


    <div class="userbox">
      <div class="avatarname">
        <a href="https://github.com/brettm523"><img height="20" src="https://secure.gravatar.com/avatar/66cde16b94321912fea7b56ae56288cc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
        <a href="https://github.com/brettm523" class="name">brettm523</a>

      </div>
      <ul class="usernav">
        <li><a href="https://github.com/">Dashboard</a></li>
        <li>
          <a href="https://github.com/inbox">Inbox</a>
          <a href="https://github.com/inbox" class="unread_count ">0</a>
        </li>
        <li><a href="https://github.com/account">Account Settings</a></li>
        <li><a href="/logout">Log Out</a></li>
      </ul>
    </div><!-- /.userbox -->


        <div class="topsearch">
<form action="/search" id="top_search_form" method="get">      <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search">Advanced Search</a>
      <div class="search placeholder-field js-placeholder-field">
        <label class="placeholder" for="global-search-field">Search…</label>
        <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" /> <input type="submit" value="Search" class="button" />
      </div>
      <input type="hidden" name="type" value="Everything" />
      <input type="hidden" name="repo" value="" />
      <input type="hidden" name="langOverride" value="" />
      <input type="hidden" name="start_value" value="1" />
</form>    <ul class="nav">
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
        <li><a href="https://gist.github.com">Gist</a></li>
        <li><a href="/blog">Blog</a></li>
      <li><a href="http://help.github.com">Help</a></li>
    </ul>
</div>

      </div>

      
            <div class="site">
      <div class="pagehead repohead vis-public   instapaper_ignore readability-menu">


      <div class="title-actions-bar">
        <h1>
          <a href="/igrigorik">igrigorik</a> /
          <strong><a href="/igrigorik/closure-sprockets" class="js-current-repository">closure-sprockets</a></strong>
        </h1>
        



            <ul class="pagehead-actions">

        <li>
            <a href="/igrigorik/closure-sprockets/toggle_watch" class="minibutton btn-watch watch-button" data-method="post"><span><span class="icon"></span>Watch</span></a>
        </li>
            <li><a href="/igrigorik/closure-sprockets/fork" class="minibutton btn-fork fork-button" data-method="post"><span><span class="icon"></span>Fork</span></a></li>

      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers ">
            <a href="/igrigorik/closure-sprockets/watchers" title="Watchers" class="tooltipped downwards">
              15
            </a>
          </li>
          <li class="forks">
            <a href="/igrigorik/closure-sprockets/network" title="Forks" class="tooltipped downwards">
              2
            </a>
          </li>
        </ul>
      </li>
    </ul>

      </div>

        

  <ul class="tabs">
    <li><a href="/igrigorik/closure-sprockets" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/igrigorik/closure-sprockets/network" highlight="repo_networkrepo_fork_queue">Network</a>
    <li><a href="/igrigorik/closure-sprockets/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/igrigorik/closure-sprockets/issues" highlight="repo_issues">Issues <span class='counter'>0</span></a></li>


    <li><a href="/igrigorik/closure-sprockets/graphs" highlight="repo_graphsrepo_contributors">Stats &amp; Graphs</a></li>

  </ul>

  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/igrigorik/closure-sprockets/tree-list/6a13edf63e7b1cf9098c6c87e96576e064d09251"
      data-blob-url-prefix="/igrigorik/closure-sprockets/blob/6a13edf63e7b1cf9098c6c87e96576e064d09251"
    >

  <div class="breadcrumb">
    <b><a href="/igrigorik/closure-sprockets">closure-sprockets</a></b> /
    <input class="tree-finder-input" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/igrigorik/closure-sprockets/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever">Dismiss</a>
        <strong>Octotip:</strong> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form>
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions">
    
      <li class="switcher">

        <div class="context-menu-container js-menu-container">
          <span class="text">Current branch:</span>
          <a href="#"
             class="minibutton bigger switcher context-menu-button js-menu-target js-commitish-button btn-branch repo-tree"
             data-master-branch="master"
             data-ref="master">
            <span><span class="icon"></span>master</span>
          </a>

          <div class="context-pane commitish-context js-menu-content">
            <a href="javascript:;" class="close js-menu-close"></a>
            <div class="title">Switch Branches/Tags</div>
            <div class="body pane-selector commitish-selector js-filterable-commitishes">
              <div class="filterbar">
                <div class="placeholder-field js-placeholder-field">
                  <label class="placeholder" for="context-commitish-filter-field" data-placeholder-mode="sticky">Filter branches/tags</label>
                  <input type="text" id="context-commitish-filter-field" class="commitish-filter" />
                </div>

                <ul class="tabs">
                  <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                  <li><a href="#" data-filter="tags">Tags</a></li>
                </ul>
              </div>

                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/igrigorik/closure-sprockets/blob/master/vendor/assets/javascripts/soyutils.js" data-name="master">master</a>
                  </h4>
                </div>

                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/igrigorik/closure-sprockets/blob/v0.1.0/vendor/assets/javascripts/soyutils.js" data-name="v0.1.0">v0.1.0</a>
                  </h4>
                </div>

              <div class="no-results" style="display:none">Nothing to show</div>
            </div>
          </div><!-- /.commitish-context-context -->
        </div>

      </li>
  </ul>

  <ul class="subnav">
    <li><a href="/igrigorik/closure-sprockets" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/igrigorik/closure-sprockets/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/igrigorik/closure-sprockets/branches" class="" highlight="repo_branches">Branches <span class="counter">1</span></a></li>
    <li><a href="/igrigorik/closure-sprockets/tags" class="" highlight="repo_tags">Tags <span class="counter">1</span></a></li>
    <li><a href="/igrigorik/closure-sprockets/downloads" class="blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
  </ul>

</div>

  
  
  


        

      </div><!-- /.pagehead -->

      




  
  <p class="last-commit">Latest commit to the <strong>master</strong> branch</p>

<div class="commit commit-tease js-details-container">
  <p class="commit-title ">
      <a href="/igrigorik/closure-sprockets"><a href="/igrigorik/closure-sprockets/commit/6a13edf63e7b1cf9098c6c87e96576e064d09251" class="message">add note about disabling deps.js in readme</a></a>
      
  </p>
  <div class="commit-meta">
    <a href="/igrigorik/closure-sprockets/commit/6a13edf63e7b1cf9098c6c87e96576e064d09251" class="sha-block">commit <span class="sha">6a13edf63e</span></a>

    <div class="authorship">
      <img class="gravatar" height="20" src="https://secure.gravatar.com/avatar/a17f0025641b4be419a6cd3845e55dd2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" />
      <span class="author-name"><a href="/igrigorik">igrigorik</a></span>
      authored <time class="js-relative-date" datetime="2011-10-14T00:16:47-07:00" title="2011-10-14 00:16:47">October 14, 2011</time>

    </div>
  </div>
</div>


  <div id="slider">

    <div class="breadcrumb" data-path="vendor/assets/javascripts/soyutils.js/">
      <b><a href="/igrigorik/closure-sprockets/tree/6a13edf63e7b1cf9098c6c87e96576e064d09251" class="js-rewrite-sha">closure-sprockets</a></b> / <a href="/igrigorik/closure-sprockets/tree/6a13edf63e7b1cf9098c6c87e96576e064d09251/vendor" class="js-rewrite-sha">vendor</a> / <a href="/igrigorik/closure-sprockets/tree/6a13edf63e7b1cf9098c6c87e96576e064d09251/vendor/assets" class="js-rewrite-sha">assets</a> / <a href="/igrigorik/closure-sprockets/tree/6a13edf63e7b1cf9098c6c87e96576e064d09251/vendor/assets/javascripts" class="js-rewrite-sha">javascripts</a> / soyutils.js       <span style="display:none" id="clippy_808" class="clippy-text">vendor/assets/javascripts/soyutils.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://a248.e.akamai.net/assets.github.com/flash/clippy?v5.swf"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_808&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://a248.e.akamai.net/assets.github.com/flash/clippy?v5.swf"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_808&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="vendor/assets/javascripts/soyutils.js/" data-permalink-url="/igrigorik/closure-sprockets/blob/6a13edf63e7b1cf9098c6c87e96576e064d09251/vendor/assets/javascripts/soyutils.js" data-title="vendor/assets/javascripts/soyutils.js at master from igrigorik/closure-sprockets - GitHub" data-type="blob">
          <ul class="big-actions">
            <li><a class="file-edit-link minibutton js-rewrite-sha" href="/igrigorik/closure-sprockets/edit/6a13edf63e7b1cf9098c6c87e96576e064d09251/vendor/assets/javascripts/soyutils.js" data-method="post"><span>Edit this file</span></a></li>
          </ul>

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://a248.e.akamai.net/assets.github.com/images/icons/txt.png" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>881 lines (758 sloc)</span>
                <span>27.999 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/igrigorik/closure-sprockets/raw/master/vendor/assets/javascripts/soyutils.js" id="raw-url">raw</a></li>
                  <li><a href="/igrigorik/closure-sprockets/blame/master/vendor/assets/javascripts/soyutils.js">blame</a></li>
                <li><a href="/igrigorik/closure-sprockets/commits/master/vendor/assets/javascripts/soyutils.js">history</a></li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * Copyright 2008 Google Inc.</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></div><div class='line' id='LC5'><span class="cm"> * you may not use this file except in compliance with the License.</span></div><div class='line' id='LC6'><span class="cm"> * You may obtain a copy of the License at</span></div><div class='line' id='LC7'><span class="cm"> *</span></div><div class='line' id='LC8'><span class="cm"> *     http://www.apache.org/licenses/LICENSE-2.0</span></div><div class='line' id='LC9'><span class="cm"> *</span></div><div class='line' id='LC10'><span class="cm"> * Unless required by applicable law or agreed to in writing, software</span></div><div class='line' id='LC11'><span class="cm"> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></div><div class='line' id='LC12'><span class="cm"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></div><div class='line' id='LC13'><span class="cm"> * See the License for the specific language governing permissions and</span></div><div class='line' id='LC14'><span class="cm"> * limitations under the License.</span></div><div class='line' id='LC15'><span class="cm"> */</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="c1">// Utility functions and classes for Soy.</span></div><div class='line' id='LC18'><span class="c1">//</span></div><div class='line' id='LC19'><span class="c1">// The top portion of this file contains utilities for Soy users:</span></div><div class='line' id='LC20'><span class="c1">//   + soy.StringBuilder: Compatible with the &#39;stringbuilder&#39; code style.</span></div><div class='line' id='LC21'><span class="c1">//   + soy.renderElement: Render template and set as innerHTML of an element.</span></div><div class='line' id='LC22'><span class="c1">//   + soy.renderAsFragment: Render template and return as HTML fragment.</span></div><div class='line' id='LC23'><span class="c1">//</span></div><div class='line' id='LC24'><span class="c1">// The bottom portion of this file contains utilities that should only be called</span></div><div class='line' id='LC25'><span class="c1">// by Soy-generated JS code. Please do not use these functions directly from</span></div><div class='line' id='LC26'><span class="c1">// your hand-writen code. Their names all start with &#39;$$&#39;.</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'><span class="cm">/**</span></div><div class='line' id='LC29'><span class="cm"> * Base name for the soy utilities, when used outside of Closure Library.</span></div><div class='line' id='LC30'><span class="cm"> * Check to see soy is already defined in the current scope before asigning to</span></div><div class='line' id='LC31'><span class="cm"> * prevent clobbering if soyutils.js is loaded more than once.</span></div><div class='line' id='LC32'><span class="cm"> * @type {Object}</span></div><div class='line' id='LC33'><span class="cm"> */</span></div><div class='line' id='LC34'><span class="kd">var</span> <span class="nx">soy</span> <span class="o">=</span> <span class="nx">soy</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'><span class="c1">// Just enough browser detection for this file.</span></div><div class='line' id='LC38'><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ua</span> <span class="o">=</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">;</span></div><div class='line' id='LC40'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isOpera</span> <span class="o">=</span> <span class="nx">ua</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;Opera&#39;</span><span class="p">)</span> <span class="o">==</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC41'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC42'><span class="cm">   * @type {boolean}</span></div><div class='line' id='LC43'><span class="cm">   * @private</span></div><div class='line' id='LC44'><span class="cm">   */</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="nx">soy</span><span class="p">.</span><span class="nx">IS_OPERA_</span> <span class="o">=</span> <span class="nx">isOpera</span><span class="p">;</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC47'><span class="cm">   * @type {boolean}</span></div><div class='line' id='LC48'><span class="cm">   * @private</span></div><div class='line' id='LC49'><span class="cm">   */</span></div><div class='line' id='LC50'>&nbsp;&nbsp;<span class="nx">soy</span><span class="p">.</span><span class="nx">IS_IE_</span> <span class="o">=</span> <span class="o">!</span><span class="nx">isOpera</span> <span class="o">&amp;&amp;</span> <span class="nx">ua</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;MSIE&#39;</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC52'><span class="cm">   * @type {boolean}</span></div><div class='line' id='LC53'><span class="cm">   * @private</span></div><div class='line' id='LC54'><span class="cm">   */</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="nx">soy</span><span class="p">.</span><span class="nx">IS_WEBKIT_</span> <span class="o">=</span> <span class="o">!</span><span class="nx">isOpera</span> <span class="o">&amp;&amp;</span> <span class="nx">ua</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;WebKit&#39;</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC56'><span class="p">})();</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'><span class="c1">// -----------------------------------------------------------------------------</span></div><div class='line' id='LC60'><span class="c1">// StringBuilder (compatible with the &#39;stringbuilder&#39; code style).</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'><span class="cm">/**</span></div><div class='line' id='LC64'><span class="cm"> * Utility class to facilitate much faster string concatenation in IE,</span></div><div class='line' id='LC65'><span class="cm"> * using Array.join() rather than the &#39;+&#39; operator.  For other browsers</span></div><div class='line' id='LC66'><span class="cm"> * we simply use the &#39;+&#39; operator.</span></div><div class='line' id='LC67'><span class="cm"> *</span></div><div class='line' id='LC68'><span class="cm"> * @param {Object|number|string|boolean=} opt_a1 Optional first initial item</span></div><div class='line' id='LC69'><span class="cm"> *     to append.</span></div><div class='line' id='LC70'><span class="cm"> * @param {Object|number|string|boolean} var_args Other initial items to</span></div><div class='line' id='LC71'><span class="cm"> *     append, e.g., new soy.StringBuilder(&#39;foo&#39;, &#39;bar&#39;).</span></div><div class='line' id='LC72'><span class="cm"> * @constructor</span></div><div class='line' id='LC73'><span class="cm"> */</span></div><div class='line' id='LC74'><span class="nx">soy</span><span class="p">.</span><span class="nx">StringBuilder</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">opt_a1</span><span class="p">,</span> <span class="nx">var_args</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC77'><span class="cm">   * Internal buffer for the string to be concatenated.</span></div><div class='line' id='LC78'><span class="cm">   * @type {string|Array}</span></div><div class='line' id='LC79'><span class="cm">   * @private</span></div><div class='line' id='LC80'><span class="cm">   */</span></div><div class='line' id='LC81'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">buffer_</span> <span class="o">=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">IS_IE_</span> <span class="o">?</span> <span class="p">[]</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">opt_a1</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">append</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC85'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC86'><span class="p">};</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'><span class="cm">/**</span></div><div class='line' id='LC90'><span class="cm"> * Length of internal buffer (faster than calling buffer_.length).</span></div><div class='line' id='LC91'><span class="cm"> * Only used for IE.</span></div><div class='line' id='LC92'><span class="cm"> * @type {number}</span></div><div class='line' id='LC93'><span class="cm"> * @private</span></div><div class='line' id='LC94'><span class="cm"> */</span></div><div class='line' id='LC95'><span class="nx">soy</span><span class="p">.</span><span class="nx">StringBuilder</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">bufferLength_</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'><span class="cm">/**</span></div><div class='line' id='LC99'><span class="cm"> * Appends one or more items to the string.</span></div><div class='line' id='LC100'><span class="cm"> *</span></div><div class='line' id='LC101'><span class="cm"> * Calling this with null, undefined, or empty arguments is an error.</span></div><div class='line' id='LC102'><span class="cm"> *</span></div><div class='line' id='LC103'><span class="cm"> * @param {Object|number|string|boolean} a1 Required first string.</span></div><div class='line' id='LC104'><span class="cm"> * @param {Object|number|string|boolean=} opt_a2 Optional second string.</span></div><div class='line' id='LC105'><span class="cm"> * @param {Object|number|string|boolean} var_args Other items to append,</span></div><div class='line' id='LC106'><span class="cm"> *     e.g., sb.append(&#39;foo&#39;, &#39;bar&#39;, &#39;baz&#39;).</span></div><div class='line' id='LC107'><span class="cm"> * @return {soy.StringBuilder} This same StringBuilder object.</span></div><div class='line' id='LC108'><span class="cm"> */</span></div><div class='line' id='LC109'><span class="nx">soy</span><span class="p">.</span><span class="nx">StringBuilder</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">append</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a1</span><span class="p">,</span> <span class="nx">opt_a2</span><span class="p">,</span> <span class="nx">var_args</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">soy</span><span class="p">.</span><span class="nx">IS_IE_</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">opt_a2</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span>  <span class="c1">// no second argument (note: undefined == null)</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Array assignment is 2x faster than Array push.  Also, use a1</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// directly to avoid arguments instantiation, another 2x improvement.</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">buffer_</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">bufferLength_</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">buffer_</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">buffer_</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">bufferLength_</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">buffer_</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Use a1 directly to avoid arguments instantiation for single-arg case.</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">buffer_</span> <span class="o">+=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">opt_a2</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span>  <span class="c1">// no second argument (note: undefined == null)</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">buffer_</span> <span class="o">+=</span> <span class="nx">arguments</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC133'><span class="p">};</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'><span class="cm">/**</span></div><div class='line' id='LC137'><span class="cm"> * Clears the string.</span></div><div class='line' id='LC138'><span class="cm"> */</span></div><div class='line' id='LC139'><span class="nx">soy</span><span class="p">.</span><span class="nx">StringBuilder</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clear</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">soy</span><span class="p">.</span><span class="nx">IS_IE_</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">buffer_</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>  <span class="c1">// reuse array to avoid creating new object</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">bufferLength_</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">buffer_</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC148'><span class="p">};</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'><span class="cm">/**</span></div><div class='line' id='LC152'><span class="cm"> * Returns the concatenated string.</span></div><div class='line' id='LC153'><span class="cm"> *</span></div><div class='line' id='LC154'><span class="cm"> * @return {string} The concatenated string.</span></div><div class='line' id='LC155'><span class="cm"> */</span></div><div class='line' id='LC156'><span class="nx">soy</span><span class="p">.</span><span class="nx">StringBuilder</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">soy</span><span class="p">.</span><span class="nx">IS_IE_</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">buffer_</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Given a string with the entire contents, simplify the StringBuilder by</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// setting its contents to only be this string, rather than many fragments.</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">clear</span><span class="p">();</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="cm">/** @type {string} */</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">buffer_</span><span class="p">);</span></div><div class='line' id='LC170'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC171'><span class="p">};</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'><span class="c1">// -----------------------------------------------------------------------------</span></div><div class='line' id='LC175'><span class="c1">// Public utilities.</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'><span class="cm">/**</span></div><div class='line' id='LC179'><span class="cm"> * Helper function to render a Soy template and then set the output string as</span></div><div class='line' id='LC180'><span class="cm"> * the innerHTML of an element. It is recommended to use this helper function</span></div><div class='line' id='LC181'><span class="cm"> * instead of directly setting innerHTML in your hand-written code, so that it</span></div><div class='line' id='LC182'><span class="cm"> * will be easier to audit the code for cross-site scripting vulnerabilities.</span></div><div class='line' id='LC183'><span class="cm"> *</span></div><div class='line' id='LC184'><span class="cm"> * @param {Element} element The element whose content we are rendering.</span></div><div class='line' id='LC185'><span class="cm"> * @param {Function} template The Soy template defining the element&#39;s content.</span></div><div class='line' id='LC186'><span class="cm"> * @param {Object=} opt_templateData The data for the template.</span></div><div class='line' id='LC187'><span class="cm"> */</span></div><div class='line' id='LC188'><span class="nx">soy</span><span class="p">.</span><span class="nx">renderElement</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">template</span><span class="p">,</span> <span class="nx">opt_templateData</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC189'>&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">template</span><span class="p">(</span><span class="nx">opt_templateData</span><span class="p">);</span></div><div class='line' id='LC190'><span class="p">};</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'><span class="cm">/**</span></div><div class='line' id='LC194'><span class="cm"> * Helper function to render a Soy template into a single node or a document</span></div><div class='line' id='LC195'><span class="cm"> * fragment. If the rendered HTML string represents a single node, then that</span></div><div class='line' id='LC196'><span class="cm"> * node is returned. Otherwise a document fragment is returned containing the</span></div><div class='line' id='LC197'><span class="cm"> * rendered nodes.</span></div><div class='line' id='LC198'><span class="cm"> *</span></div><div class='line' id='LC199'><span class="cm"> * @param {Function} template The Soy template defining the element&#39;s content.</span></div><div class='line' id='LC200'><span class="cm"> * @param {Object=} opt_templateData The data for the template.</span></div><div class='line' id='LC201'><span class="cm"> * @return {Node} The resulting node or document fragment.</span></div><div class='line' id='LC202'><span class="cm"> */</span></div><div class='line' id='LC203'><span class="nx">soy</span><span class="p">.</span><span class="nx">renderAsFragment</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">opt_templateData</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tempDiv</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">);</span></div><div class='line' id='LC206'>&nbsp;&nbsp;<span class="nx">tempDiv</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">template</span><span class="p">(</span><span class="nx">opt_templateData</span><span class="p">);</span></div><div class='line' id='LC207'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">tempDiv</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">tempDiv</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span></div><div class='line' id='LC209'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fragment</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createDocumentFragment</span><span class="p">();</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">tempDiv</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">tempDiv</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fragment</span><span class="p">;</span></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC216'><span class="p">};</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'><span class="c1">// -----------------------------------------------------------------------------</span></div><div class='line' id='LC220'><span class="c1">// Below are private utilities to be used by Soy-generated code only.</span></div><div class='line' id='LC221'><br/></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'><span class="cm">/**</span></div><div class='line' id='LC224'><span class="cm"> * Builds an augmented data object to be passed when a template calls another,</span></div><div class='line' id='LC225'><span class="cm"> * and needs to pass both original data and additional params. The returned</span></div><div class='line' id='LC226'><span class="cm"> * object will contain both the original data and the additional params. If the</span></div><div class='line' id='LC227'><span class="cm"> * same key appears in both, then the value from the additional params will be</span></div><div class='line' id='LC228'><span class="cm"> * visible, while the value from the original data will be hidden. The original</span></div><div class='line' id='LC229'><span class="cm"> * data object will be used, but not modified.</span></div><div class='line' id='LC230'><span class="cm"> *</span></div><div class='line' id='LC231'><span class="cm"> * @param {!Object} origData The original data to pass.</span></div><div class='line' id='LC232'><span class="cm"> * @param {Object} additionalParams The additional params to pass.</span></div><div class='line' id='LC233'><span class="cm"> * @return {Object} An augmented data object containing both the original data</span></div><div class='line' id='LC234'><span class="cm"> *     and the additional params.</span></div><div class='line' id='LC235'><span class="cm"> */</span></div><div class='line' id='LC236'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$augmentData</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">origData</span><span class="p">,</span> <span class="nx">additionalParams</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>&nbsp;&nbsp;<span class="c1">// Create a new object whose &#39;__proto__&#39; field is set to origData.</span></div><div class='line' id='LC239'>&nbsp;&nbsp;<span class="cm">/** @constructor */</span></div><div class='line' id='LC240'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">tempCtor</span><span class="p">()</span> <span class="p">{};</span></div><div class='line' id='LC241'>&nbsp;&nbsp;<span class="nx">tempCtor</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="nx">origData</span><span class="p">;</span></div><div class='line' id='LC242'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">newData</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">tempCtor</span><span class="p">();</span></div><div class='line' id='LC243'><br/></div><div class='line' id='LC244'>&nbsp;&nbsp;<span class="c1">// Add the additional params to the new object.</span></div><div class='line' id='LC245'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">additionalParams</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">newData</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">additionalParams</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC247'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">newData</span><span class="p">;</span></div><div class='line' id='LC250'><span class="p">};</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'><br/></div><div class='line' id='LC253'><span class="cm">/**</span></div><div class='line' id='LC254'><span class="cm"> * Escapes HTML special characters in a string. Escapes double quote &#39;&quot;&#39; in</span></div><div class='line' id='LC255'><span class="cm"> * addition to &#39;&amp;&#39;, &#39;&lt;&#39;, and &#39;&gt;&#39; so that a string can be included in an HTML</span></div><div class='line' id='LC256'><span class="cm"> * tag attribute value within double quotes.</span></div><div class='line' id='LC257'><span class="cm"> *</span></div><div class='line' id='LC258'><span class="cm"> * @param {*} str The string to be escaped. Can be other types, but the value</span></div><div class='line' id='LC259'><span class="cm"> *     will be coerced to a string.</span></div><div class='line' id='LC260'><span class="cm"> * @return {string} An escaped copy of the string.</span></div><div class='line' id='LC261'><span class="cm">*/</span></div><div class='line' id='LC262'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$escapeHtml</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'>&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nb">String</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>&nbsp;&nbsp;<span class="c1">// This quick test helps in the case when there are no chars to replace, in</span></div><div class='line' id='LC267'>&nbsp;&nbsp;<span class="c1">// the worst case this makes barely a difference to the time taken.</span></div><div class='line' id='LC268'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">soy</span><span class="p">.</span><span class="nx">$$EscapeHtmlRe_</span><span class="p">.</span><span class="nx">ALL_SPECIAL_CHARS</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">str</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC270'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>&nbsp;&nbsp;<span class="c1">// Since we&#39;re only checking one char at a time, we use String.indexOf(),</span></div><div class='line' id='LC273'>&nbsp;&nbsp;<span class="c1">// which is faster than RegExp.test(). Important: Must replace &#39;&amp;&#39; first!</span></div><div class='line' id='LC274'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;&amp;&#39;</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">soy</span><span class="p">.</span><span class="nx">$$EscapeHtmlRe_</span><span class="p">.</span><span class="nx">AMP</span><span class="p">,</span> <span class="s1">&#39;&amp;amp;&#39;</span><span class="p">);</span></div><div class='line' id='LC276'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC277'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;&lt;&#39;</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">soy</span><span class="p">.</span><span class="nx">$$EscapeHtmlRe_</span><span class="p">.</span><span class="nx">LT</span><span class="p">,</span> <span class="s1">&#39;&amp;lt;&#39;</span><span class="p">);</span></div><div class='line' id='LC279'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC280'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;&gt;&#39;</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">soy</span><span class="p">.</span><span class="nx">$$EscapeHtmlRe_</span><span class="p">.</span><span class="nx">GT</span><span class="p">,</span> <span class="s1">&#39;&amp;gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC282'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC283'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;&quot;&#39;</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">soy</span><span class="p">.</span><span class="nx">$$EscapeHtmlRe_</span><span class="p">.</span><span class="nx">QUOT</span><span class="p">,</span> <span class="s1">&#39;&amp;quot;&#39;</span><span class="p">);</span></div><div class='line' id='LC285'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC286'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC287'><span class="p">};</span></div><div class='line' id='LC288'><br/></div><div class='line' id='LC289'><span class="cm">/**</span></div><div class='line' id='LC290'><span class="cm"> * Regular expressions used within escapeHtml().</span></div><div class='line' id='LC291'><span class="cm"> * @enum {RegExp}</span></div><div class='line' id='LC292'><span class="cm"> * @private</span></div><div class='line' id='LC293'><span class="cm"> */</span></div><div class='line' id='LC294'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$EscapeHtmlRe_</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC295'>&nbsp;&nbsp;<span class="nx">ALL_SPECIAL_CHARS</span><span class="o">:</span> <span class="sr">/[&amp;&lt;&gt;\&quot;]/</span><span class="p">,</span></div><div class='line' id='LC296'>&nbsp;&nbsp;<span class="nx">AMP</span><span class="o">:</span> <span class="sr">/&amp;/g</span><span class="p">,</span></div><div class='line' id='LC297'>&nbsp;&nbsp;<span class="nx">LT</span><span class="o">:</span> <span class="sr">/&lt;/g</span><span class="p">,</span></div><div class='line' id='LC298'>&nbsp;&nbsp;<span class="nx">GT</span><span class="o">:</span> <span class="sr">/&gt;/g</span><span class="p">,</span></div><div class='line' id='LC299'>&nbsp;&nbsp;<span class="nx">QUOT</span><span class="o">:</span> <span class="sr">/\&quot;/g</span></div><div class='line' id='LC300'><span class="p">};</span></div><div class='line' id='LC301'><br/></div><div class='line' id='LC302'><br/></div><div class='line' id='LC303'><span class="cm">/**</span></div><div class='line' id='LC304'><span class="cm"> * Escapes characters in the string to make it a valid content for a JS string literal.</span></div><div class='line' id='LC305'><span class="cm"> *</span></div><div class='line' id='LC306'><span class="cm"> * @param {*} s The string to be escaped. Can be other types, but the value</span></div><div class='line' id='LC307'><span class="cm"> *     will be coerced to a string.</span></div><div class='line' id='LC308'><span class="cm"> * @return {string} An escaped copy of the string.</span></div><div class='line' id='LC309'><span class="cm">*/</span></div><div class='line' id='LC310'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$escapeJs</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC311'>&nbsp;&nbsp;<span class="nx">s</span> <span class="o">=</span> <span class="nb">String</span><span class="p">(</span><span class="nx">s</span><span class="p">);</span></div><div class='line' id='LC312'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sb</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC313'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sb</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$escapeChar</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">));</span></div><div class='line' id='LC315'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC316'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">sb</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC317'><span class="p">};</span></div><div class='line' id='LC318'><br/></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'><span class="cm">/**</span></div><div class='line' id='LC321'><span class="cm"> * Takes a character and returns the escaped string for that character. For</span></div><div class='line' id='LC322'><span class="cm"> * example escapeChar(String.fromCharCode(15)) -&gt; &quot;\\x0E&quot;.</span></div><div class='line' id='LC323'><span class="cm"> * @param {string} c The character to escape.</span></div><div class='line' id='LC324'><span class="cm"> * @return {string} An escaped string representing {@code c}.</span></div><div class='line' id='LC325'><span class="cm"> */</span></div><div class='line' id='LC326'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$escapeChar</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC327'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">c</span> <span class="k">in</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$escapeCharJs_</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$escapeCharJs_</span><span class="p">[</span><span class="nx">c</span><span class="p">];</span></div><div class='line' id='LC329'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC330'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rv</span> <span class="o">=</span> <span class="nx">c</span><span class="p">;</span></div><div class='line' id='LC331'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cc</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC332'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cc</span> <span class="o">&gt;</span> <span class="mi">31</span> <span class="o">&amp;&amp;</span> <span class="nx">cc</span> <span class="o">&lt;</span> <span class="mi">127</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rv</span> <span class="o">=</span> <span class="nx">c</span><span class="p">;</span></div><div class='line' id='LC334'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// tab is 9 but handled above</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cc</span> <span class="o">&lt;</span> <span class="mi">256</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rv</span> <span class="o">=</span> <span class="s1">&#39;\\x&#39;</span><span class="p">;</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cc</span> <span class="o">&lt;</span> <span class="mi">16</span> <span class="o">||</span> <span class="nx">cc</span> <span class="o">&gt;</span> <span class="mi">256</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rv</span> <span class="o">+=</span> <span class="s1">&#39;0&#39;</span><span class="p">;</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rv</span> <span class="o">=</span> <span class="s1">&#39;\\u&#39;</span><span class="p">;</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cc</span> <span class="o">&lt;</span> <span class="mi">4096</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// \u1000</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rv</span> <span class="o">+=</span> <span class="s1">&#39;0&#39;</span><span class="p">;</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rv</span> <span class="o">+=</span> <span class="nx">cc</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">).</span><span class="nx">toUpperCase</span><span class="p">();</span></div><div class='line' id='LC348'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC349'><br/></div><div class='line' id='LC350'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$escapeCharJs_</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span> <span class="o">=</span> <span class="nx">rv</span><span class="p">;</span></div><div class='line' id='LC351'><span class="p">};</span></div><div class='line' id='LC352'><br/></div><div class='line' id='LC353'><span class="cm">/**</span></div><div class='line' id='LC354'><span class="cm"> * Character mappings used internally for soy.$$escapeJs</span></div><div class='line' id='LC355'><span class="cm"> * @private</span></div><div class='line' id='LC356'><span class="cm"> * @type {Object}</span></div><div class='line' id='LC357'><span class="cm"> */</span></div><div class='line' id='LC358'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$escapeCharJs_</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC359'>&nbsp;&nbsp;<span class="s1">&#39;\b&#39;</span><span class="o">:</span> <span class="s1">&#39;\\b&#39;</span><span class="p">,</span></div><div class='line' id='LC360'>&nbsp;&nbsp;<span class="s1">&#39;\f&#39;</span><span class="o">:</span> <span class="s1">&#39;\\f&#39;</span><span class="p">,</span></div><div class='line' id='LC361'>&nbsp;&nbsp;<span class="s1">&#39;\n&#39;</span><span class="o">:</span> <span class="s1">&#39;\\n&#39;</span><span class="p">,</span></div><div class='line' id='LC362'>&nbsp;&nbsp;<span class="s1">&#39;\r&#39;</span><span class="o">:</span> <span class="s1">&#39;\\r&#39;</span><span class="p">,</span></div><div class='line' id='LC363'>&nbsp;&nbsp;<span class="s1">&#39;\t&#39;</span><span class="o">:</span> <span class="s1">&#39;\\t&#39;</span><span class="p">,</span></div><div class='line' id='LC364'>&nbsp;&nbsp;<span class="s1">&#39;\x0B&#39;</span><span class="o">:</span> <span class="s1">&#39;\\x0B&#39;</span><span class="p">,</span> <span class="c1">// &#39;\v&#39; is not supported in JScript</span></div><div class='line' id='LC365'>&nbsp;&nbsp;<span class="s1">&#39;&quot;&#39;</span><span class="o">:</span> <span class="s1">&#39;\\&quot;&#39;</span><span class="p">,</span></div><div class='line' id='LC366'>&nbsp;&nbsp;<span class="s1">&#39;\&#39;&#39;</span><span class="o">:</span> <span class="s1">&#39;\\\&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC367'>&nbsp;&nbsp;<span class="s1">&#39;\\&#39;</span><span class="o">:</span> <span class="s1">&#39;\\\\&#39;</span></div><div class='line' id='LC368'><span class="p">};</span></div><div class='line' id='LC369'><br/></div><div class='line' id='LC370'><br/></div><div class='line' id='LC371'><span class="cm">/**</span></div><div class='line' id='LC372'><span class="cm"> * Escapes a string so that it can be safely included in a URI.</span></div><div class='line' id='LC373'><span class="cm"> *</span></div><div class='line' id='LC374'><span class="cm"> * @param {*} str The string to be escaped. Can be other types, but the value</span></div><div class='line' id='LC375'><span class="cm"> *     will be coerced to a string.</span></div><div class='line' id='LC376'><span class="cm"> * @return {string} An escaped copy of the string.</span></div><div class='line' id='LC377'><span class="cm">*/</span></div><div class='line' id='LC378'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$escapeUri</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC379'><br/></div><div class='line' id='LC380'>&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nb">String</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC381'><br/></div><div class='line' id='LC382'>&nbsp;&nbsp;<span class="c1">// Checking if the search matches before calling encodeURIComponent avoids an</span></div><div class='line' id='LC383'>&nbsp;&nbsp;<span class="c1">// extra allocation in IE6. This adds about 10us time in FF and a similiar</span></div><div class='line' id='LC384'>&nbsp;&nbsp;<span class="c1">// over head in IE6 for lower working set apps, but for large working set</span></div><div class='line' id='LC385'>&nbsp;&nbsp;<span class="c1">// apps, it saves about 70us per call.</span></div><div class='line' id='LC386'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">soy</span><span class="p">.</span><span class="nx">$$ENCODE_URI_REGEXP_</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">str</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC388'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC390'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC391'><span class="p">};</span></div><div class='line' id='LC392'><br/></div><div class='line' id='LC393'><span class="cm">/**</span></div><div class='line' id='LC394'><span class="cm"> * Regular expression used for determining if a string needs to be encoded.</span></div><div class='line' id='LC395'><span class="cm"> * @type {RegExp}</span></div><div class='line' id='LC396'><span class="cm"> * @private</span></div><div class='line' id='LC397'><span class="cm"> */</span></div><div class='line' id='LC398'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$ENCODE_URI_REGEXP_</span> <span class="o">=</span> <span class="sr">/^[a-zA-Z0-9\-_.!~*&#39;()]*$/</span><span class="p">;</span></div><div class='line' id='LC399'><br/></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'><span class="cm">/**</span></div><div class='line' id='LC402'><span class="cm"> * Inserts word breaks (&#39;wbr&#39; tags) into a HTML string at a given interval. The</span></div><div class='line' id='LC403'><span class="cm"> * counter is reset if a space is encountered. Word breaks aren&#39;t inserted into</span></div><div class='line' id='LC404'><span class="cm"> * HTML tags or entities. Entites count towards the character count; HTML tags</span></div><div class='line' id='LC405'><span class="cm"> * do not.</span></div><div class='line' id='LC406'><span class="cm"> *</span></div><div class='line' id='LC407'><span class="cm"> * @param {*} str The HTML string to insert word breaks into. Can be other</span></div><div class='line' id='LC408'><span class="cm"> *     types, but the value will be coerced to a string.</span></div><div class='line' id='LC409'><span class="cm"> * @param {number} maxCharsBetweenWordBreaks Maximum number of non-space</span></div><div class='line' id='LC410'><span class="cm"> *     characters to allow before adding a word break.</span></div><div class='line' id='LC411'><span class="cm"> * @return {string} The string including word breaks.</span></div><div class='line' id='LC412'><span class="cm"> */</span></div><div class='line' id='LC413'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$insertWordBreaks</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">maxCharsBetweenWordBreaks</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC414'><br/></div><div class='line' id='LC415'>&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nb">String</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC416'><br/></div><div class='line' id='LC417'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resultArr</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC418'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resultArrLen</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC419'><br/></div><div class='line' id='LC420'>&nbsp;&nbsp;<span class="c1">// These variables keep track of important state while looping through str.</span></div><div class='line' id='LC421'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isInTag</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>  <span class="c1">// whether we&#39;re inside an HTML tag</span></div><div class='line' id='LC422'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isMaybeInEntity</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>  <span class="c1">// whether we might be inside an HTML entity</span></div><div class='line' id='LC423'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">numCharsWithoutBreak</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>  <span class="c1">// number of characters since last word break</span></div><div class='line' id='LC424'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">flushIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>  <span class="c1">// index of first char not yet flushed to resultArr</span></div><div class='line' id='LC425'><br/></div><div class='line' id='LC426'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">charCode</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If hit maxCharsBetweenWordBreaks, and not space next, then add &lt;wbr&gt;.</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">numCharsWithoutBreak</span> <span class="o">&gt;=</span> <span class="nx">maxCharsBetweenWordBreaks</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">charCode</span> <span class="o">!=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$CharCode_</span><span class="p">.</span><span class="nx">SPACE</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resultArr</span><span class="p">[</span><span class="nx">resultArrLen</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">flushIndex</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flushIndex</span> <span class="o">=</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resultArr</span><span class="p">[</span><span class="nx">resultArrLen</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">WORD_BREAK_</span><span class="p">;</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">numCharsWithoutBreak</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC437'><br/></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isInTag</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If inside an HTML tag and we see &#39;&gt;&#39;, it&#39;s the end of the tag.</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">charCode</span> <span class="o">==</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$CharCode_</span><span class="p">.</span><span class="nx">GREATER_THAN</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isInTag</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC443'><br/></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">isMaybeInEntity</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">charCode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If maybe inside an entity and we see &#39;;&#39;, it&#39;s the end of the entity.</span></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The entity that just ended counts as one char, so increment</span></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// numCharsWithoutBreak.</span></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$CharCode_</span><span class="p">.</span><span class="nx">SEMI_COLON</span><span class="o">:</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isMaybeInEntity</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">++</span><span class="nx">numCharsWithoutBreak</span><span class="p">;</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If maybe inside an entity and we see &#39;&lt;&#39;, we weren&#39;t actually in an</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// entity. But now we&#39;re inside and HTML tag.</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$CharCode_</span><span class="p">.</span><span class="nx">LESS_THAN</span><span class="o">:</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isMaybeInEntity</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isInTag</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If maybe inside an entity and we see &#39; &#39;, we weren&#39;t actually in an</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// entity. Just correct the state and reset the numCharsWithoutBreak</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// since we just saw a space.</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$CharCode_</span><span class="p">.</span><span class="nx">SPACE</span><span class="o">:</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isMaybeInEntity</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">numCharsWithoutBreak</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC467'><br/></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span>  <span class="c1">// !isInTag &amp;&amp; !isInEntity</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">charCode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// When not within a tag or an entity and we see &#39;&lt;&#39;, we&#39;re now inside</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// an HTML tag.</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$CharCode_</span><span class="p">.</span><span class="nx">LESS_THAN</span><span class="o">:</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isInTag</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// When not within a tag or an entity and we see &#39;&amp;&#39;, we might be inside</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// an entity.</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$CharCode_</span><span class="p">.</span><span class="nx">AMPERSAND</span><span class="o">:</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isMaybeInEntity</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// When we see a space, reset the numCharsWithoutBreak count.</span></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$CharCode_</span><span class="p">.</span><span class="nx">SPACE</span><span class="o">:</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">numCharsWithoutBreak</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// When we see a non-space, increment the numCharsWithoutBreak.</span></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">++</span><span class="nx">numCharsWithoutBreak</span><span class="p">;</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC490'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC491'><br/></div><div class='line' id='LC492'>&nbsp;&nbsp;<span class="c1">// Flush the remaining chars at the end of the string.</span></div><div class='line' id='LC493'>&nbsp;&nbsp;<span class="nx">resultArr</span><span class="p">[</span><span class="nx">resultArrLen</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">flushIndex</span><span class="p">);</span></div><div class='line' id='LC494'><br/></div><div class='line' id='LC495'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">resultArr</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC496'><span class="p">};</span></div><div class='line' id='LC497'><br/></div><div class='line' id='LC498'><span class="cm">/**</span></div><div class='line' id='LC499'><span class="cm"> * Special characters used within insertWordBreaks().</span></div><div class='line' id='LC500'><span class="cm"> * @enum {number}</span></div><div class='line' id='LC501'><span class="cm"> * @private</span></div><div class='line' id='LC502'><span class="cm"> */</span></div><div class='line' id='LC503'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$CharCode_</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC504'>&nbsp;&nbsp;<span class="nx">SPACE</span><span class="o">:</span> <span class="mi">32</span><span class="p">,</span>  <span class="c1">// &#39; &#39;.charCodeAt(0)</span></div><div class='line' id='LC505'>&nbsp;&nbsp;<span class="nx">AMPERSAND</span><span class="o">:</span> <span class="mi">38</span><span class="p">,</span>  <span class="c1">// &#39;&amp;&#39;.charCodeAt(0)</span></div><div class='line' id='LC506'>&nbsp;&nbsp;<span class="nx">SEMI_COLON</span><span class="o">:</span> <span class="mi">59</span><span class="p">,</span>  <span class="c1">// &#39;;&#39;.charCodeAt(0)</span></div><div class='line' id='LC507'>&nbsp;&nbsp;<span class="nx">LESS_THAN</span><span class="o">:</span> <span class="mi">60</span><span class="p">,</span>  <span class="c1">// &#39;&lt;&#39;.charCodeAt(0)</span></div><div class='line' id='LC508'>&nbsp;&nbsp;<span class="nx">GREATER_THAN</span><span class="o">:</span> <span class="mi">62</span>  <span class="c1">// &#39;&gt;&#39;.charCodeAt(0)</span></div><div class='line' id='LC509'><span class="p">};</span></div><div class='line' id='LC510'><br/></div><div class='line' id='LC511'><span class="cm">/**</span></div><div class='line' id='LC512'><span class="cm"> * String inserted as a word break by insertWordBreaks(). Safari requires</span></div><div class='line' id='LC513'><span class="cm"> * &lt;wbr&gt;&lt;/wbr&gt;, Opera needs the &#39;shy&#39; entity, though this will give a visible</span></div><div class='line' id='LC514'><span class="cm"> * hyphen at breaks. Other browsers just use &lt;wbr&gt;.</span></div><div class='line' id='LC515'><span class="cm"> * @type {string}</span></div><div class='line' id='LC516'><span class="cm"> * @private</span></div><div class='line' id='LC517'><span class="cm"> */</span></div><div class='line' id='LC518'><span class="nx">soy</span><span class="p">.</span><span class="nx">WORD_BREAK_</span> <span class="o">=</span></div><div class='line' id='LC519'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">soy</span><span class="p">.</span><span class="nx">IS_WEBKIT_</span> <span class="o">?</span> <span class="s1">&#39;&lt;wbr&gt;&lt;/wbr&gt;&#39;</span> <span class="o">:</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">IS_OPERA_</span> <span class="o">?</span> <span class="s1">&#39;&amp;shy;&#39;</span> <span class="o">:</span> <span class="s1">&#39;&lt;wbr&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC520'><br/></div><div class='line' id='LC521'><br/></div><div class='line' id='LC522'><span class="cm">/**</span></div><div class='line' id='LC523'><span class="cm"> * Converts \r\n, \r, and \n to &lt;br&gt;s</span></div><div class='line' id='LC524'><span class="cm"> * @param {*} str The string in which to convert newlines.</span></div><div class='line' id='LC525'><span class="cm"> * @return {string} A copy of {@code str} with converted newlines.</span></div><div class='line' id='LC526'><span class="cm"> */</span></div><div class='line' id='LC527'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$changeNewlineToBr</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC528'><br/></div><div class='line' id='LC529'>&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nb">String</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC530'><br/></div><div class='line' id='LC531'>&nbsp;&nbsp;<span class="c1">// This quick test helps in the case when there are no chars to replace, in</span></div><div class='line' id='LC532'>&nbsp;&nbsp;<span class="c1">// the worst case this makes barely a difference to the time taken.</span></div><div class='line' id='LC533'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">soy</span><span class="p">.</span><span class="nx">$$CHANGE_NEWLINE_TO_BR_RE_</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">str</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC535'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC536'><br/></div><div class='line' id='LC537'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\r\n|\r|\n)/g</span><span class="p">,</span> <span class="s1">&#39;&lt;br&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC538'><span class="p">};</span></div><div class='line' id='LC539'><br/></div><div class='line' id='LC540'><span class="cm">/**</span></div><div class='line' id='LC541'><span class="cm"> * Regular expression used within $$changeNewlineToBr().</span></div><div class='line' id='LC542'><span class="cm"> * @type {RegExp}</span></div><div class='line' id='LC543'><span class="cm"> * @private</span></div><div class='line' id='LC544'><span class="cm"> */</span></div><div class='line' id='LC545'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$CHANGE_NEWLINE_TO_BR_RE_</span> <span class="o">=</span> <span class="sr">/[\r\n]/</span><span class="p">;</span></div><div class='line' id='LC546'><br/></div><div class='line' id='LC547'><br/></div><div class='line' id='LC548'><span class="cm">/**</span></div><div class='line' id='LC549'><span class="cm"> * Estimate the overall directionality of text. If opt_isHtml, makes sure to</span></div><div class='line' id='LC550'><span class="cm"> * ignore the LTR nature of the mark-up and escapes in text, making the logic</span></div><div class='line' id='LC551'><span class="cm"> * suitable for HTML and HTML-escaped text.</span></div><div class='line' id='LC552'><span class="cm"> * @param {string} text The text whose directionality is to be estimated.</span></div><div class='line' id='LC553'><span class="cm"> * @param {boolean=} opt_isHtml Whether text is HTML/HTML-escaped.</span></div><div class='line' id='LC554'><span class="cm"> *     Default: false.</span></div><div class='line' id='LC555'><span class="cm"> * @return {number} 1 if text is LTR, -1 if it is RTL, and 0 if it is neutral.</span></div><div class='line' id='LC556'><span class="cm"> */</span></div><div class='line' id='LC557'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiTextDir</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC558'>&nbsp;&nbsp;<span class="nx">text</span> <span class="o">=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiStripHtmlIfNecessary_</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">);</span></div><div class='line' id='LC559'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC560'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC561'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC562'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiDetectRtlDirectionality_</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="o">?</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC563'><span class="p">};</span></div><div class='line' id='LC564'><br/></div><div class='line' id='LC565'><br/></div><div class='line' id='LC566'><span class="cm">/**</span></div><div class='line' id='LC567'><span class="cm"> * Returns &quot;dir=ltr&quot; or &quot;dir=rtl&quot;, depending on text&#39;s estimated</span></div><div class='line' id='LC568'><span class="cm"> * directionality, if it is not the same as bidiGlobalDir.</span></div><div class='line' id='LC569'><span class="cm"> * Otherwise, returns the empty string.</span></div><div class='line' id='LC570'><span class="cm"> * If opt_isHtml, makes sure to ignore the LTR nature of the mark-up and escapes</span></div><div class='line' id='LC571'><span class="cm"> * in text, making the logic suitable for HTML and HTML-escaped text.</span></div><div class='line' id='LC572'><span class="cm"> * @param {number} bidiGlobalDir The global directionality context: 1 if ltr, -1</span></div><div class='line' id='LC573'><span class="cm"> *     if rtl, 0 if unknown.</span></div><div class='line' id='LC574'><span class="cm"> * @param {string} text The text whose directionality is to be estimated.</span></div><div class='line' id='LC575'><span class="cm"> * @param {boolean=} opt_isHtml Whether text is HTML/HTML-escaped.</span></div><div class='line' id='LC576'><span class="cm"> *     Default: false.</span></div><div class='line' id='LC577'><span class="cm"> * @return {string} &quot;dir=rtl&quot; for RTL text in non-RTL context; &quot;dir=ltr&quot; for LTR</span></div><div class='line' id='LC578'><span class="cm"> *     text in non-LTR context; else, the empty string.</span></div><div class='line' id='LC579'><span class="cm"> */</span></div><div class='line' id='LC580'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiDirAttr</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">bidiGlobalDir</span><span class="p">,</span> <span class="nx">text</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC581'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dir</span> <span class="o">=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiTextDir</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">);</span></div><div class='line' id='LC582'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">dir</span> <span class="o">!=</span> <span class="nx">bidiGlobalDir</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC583'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">dir</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="s1">&#39;dir=rtl&#39;</span> <span class="o">:</span> <span class="nx">dir</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="s1">&#39;dir=ltr&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC584'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC585'>&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC586'><span class="p">};</span></div><div class='line' id='LC587'><br/></div><div class='line' id='LC588'><br/></div><div class='line' id='LC589'><span class="cm">/**</span></div><div class='line' id='LC590'><span class="cm"> * Returns a Unicode BiDi mark matching bidiGlobalDir (LRM or RLM) if the</span></div><div class='line' id='LC591'><span class="cm"> * directionality or the exit directionality of text are opposite to</span></div><div class='line' id='LC592'><span class="cm"> * bidiGlobalDir. Otherwise returns the empty string.</span></div><div class='line' id='LC593'><span class="cm"> * If opt_isHtml, makes sure to ignore the LTR nature of the mark-up and escapes</span></div><div class='line' id='LC594'><span class="cm"> * in text, making the logic suitable for HTML and HTML-escaped text.</span></div><div class='line' id='LC595'><span class="cm"> * @param {number} bidiGlobalDir The global directionality context: 1 if ltr, -1</span></div><div class='line' id='LC596'><span class="cm"> *     if rtl, 0 if unknown.</span></div><div class='line' id='LC597'><span class="cm"> * @param {string} text The text whose directionality is to be estimated.</span></div><div class='line' id='LC598'><span class="cm"> * @param {boolean=} opt_isHtml Whether text is HTML/HTML-escaped.</span></div><div class='line' id='LC599'><span class="cm"> *     Default: false.</span></div><div class='line' id='LC600'><span class="cm"> * @return {string} A Unicode bidi mark matching bidiGlobalDir, or</span></div><div class='line' id='LC601'><span class="cm"> *     the empty string when text&#39;s overall and exit directionalities both match</span></div><div class='line' id='LC602'><span class="cm"> *     bidiGlobalDir.</span></div><div class='line' id='LC603'><span class="cm"> */</span></div><div class='line' id='LC604'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiMarkAfter</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">bidiGlobalDir</span><span class="p">,</span> <span class="nx">text</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC605'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dir</span> <span class="o">=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiTextDir</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">);</span></div><div class='line' id='LC606'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiMarkAfterKnownDir</span><span class="p">(</span><span class="nx">bidiGlobalDir</span><span class="p">,</span> <span class="nx">dir</span><span class="p">,</span> <span class="nx">text</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">);</span></div><div class='line' id='LC607'><span class="p">};</span></div><div class='line' id='LC608'><br/></div><div class='line' id='LC609'><br/></div><div class='line' id='LC610'><span class="cm">/**</span></div><div class='line' id='LC611'><span class="cm"> * Returns a Unicode BiDi mark matching bidiGlobalDir (LRM or RLM) if the</span></div><div class='line' id='LC612'><span class="cm"> * directionality or the exit directionality of text are opposite to</span></div><div class='line' id='LC613'><span class="cm"> * bidiGlobalDir. Otherwise returns the empty string.</span></div><div class='line' id='LC614'><span class="cm"> * If opt_isHtml, makes sure to ignore the LTR nature of the mark-up and escapes</span></div><div class='line' id='LC615'><span class="cm"> * in text, making the logic suitable for HTML and HTML-escaped text.</span></div><div class='line' id='LC616'><span class="cm"> * @param {number} bidiGlobalDir The global directionality context: 1 if ltr, -1</span></div><div class='line' id='LC617'><span class="cm"> *     if rtl, 0 if unknown.</span></div><div class='line' id='LC618'><span class="cm"> * @param {number} dir text&#39;s directionality: 1 if ltr, -1 if rtl, 0 if unknown.</span></div><div class='line' id='LC619'><span class="cm"> * @param {string} text The text whose directionality is to be estimated.</span></div><div class='line' id='LC620'><span class="cm"> * @param {boolean=} opt_isHtml Whether text is HTML/HTML-escaped.</span></div><div class='line' id='LC621'><span class="cm"> *     Default: false.</span></div><div class='line' id='LC622'><span class="cm"> * @return {string} A Unicode bidi mark matching bidiGlobalDir, or</span></div><div class='line' id='LC623'><span class="cm"> *     the empty string when text&#39;s overall and exit directionalities both match</span></div><div class='line' id='LC624'><span class="cm"> *     bidiGlobalDir.</span></div><div class='line' id='LC625'><span class="cm"> */</span></div><div class='line' id='LC626'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiMarkAfterKnownDir</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">bidiGlobalDir</span><span class="p">,</span> <span class="nx">dir</span><span class="p">,</span> <span class="nx">text</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC627'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span></div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bidiGlobalDir</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">dir</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">||</span></div><div class='line' id='LC629'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiIsRtlExitText_</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">))</span> <span class="o">?</span> <span class="s1">&#39;\u200E&#39;</span> <span class="o">:</span> <span class="c1">// LRM</span></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bidiGlobalDir</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">dir</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">||</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiIsLtrExitText_</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">))</span> <span class="o">?</span> <span class="s1">&#39;\u200F&#39;</span> <span class="o">:</span> <span class="c1">// RLM</span></div><div class='line' id='LC632'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC633'><span class="p">};</span></div><div class='line' id='LC634'><br/></div><div class='line' id='LC635'><br/></div><div class='line' id='LC636'><span class="cm">/**</span></div><div class='line' id='LC637'><span class="cm"> * Strips str of any HTML mark-up and escapes. Imprecise in several ways, but</span></div><div class='line' id='LC638'><span class="cm"> * precision is not very important, since the result is only meant to be used</span></div><div class='line' id='LC639'><span class="cm"> * for directionality detection.</span></div><div class='line' id='LC640'><span class="cm"> * @param {string} str The string to be stripped.</span></div><div class='line' id='LC641'><span class="cm"> * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.</span></div><div class='line' id='LC642'><span class="cm"> *     Default: false.</span></div><div class='line' id='LC643'><span class="cm"> * @return {string} The stripped string.</span></div><div class='line' id='LC644'><span class="cm"> * @private</span></div><div class='line' id='LC645'><span class="cm"> */</span></div><div class='line' id='LC646'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiStripHtmlIfNecessary_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC647'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">opt_isHtml</span> <span class="o">?</span> <span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">soy</span><span class="p">.</span><span class="nx">$$BIDI_HTML_SKIP_RE_</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="o">:</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC648'><span class="p">};</span></div><div class='line' id='LC649'><br/></div><div class='line' id='LC650'><br/></div><div class='line' id='LC651'><span class="cm">/**</span></div><div class='line' id='LC652'><span class="cm"> * Simplified regular expression for am HTML tag (opening or closing) or an HTML</span></div><div class='line' id='LC653'><span class="cm"> * escape - the things we want to skip over in order to ignore their ltr</span></div><div class='line' id='LC654'><span class="cm"> * characters.</span></div><div class='line' id='LC655'><span class="cm"> * @type {RegExp}</span></div><div class='line' id='LC656'><span class="cm"> * @private</span></div><div class='line' id='LC657'><span class="cm"> */</span></div><div class='line' id='LC658'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$BIDI_HTML_SKIP_RE_</span> <span class="o">=</span> <span class="sr">/&lt;[^&gt;]*&gt;|&amp;[^;]+;/g</span><span class="p">;</span></div><div class='line' id='LC659'><br/></div><div class='line' id='LC660'><br/></div><div class='line' id='LC661'><span class="cm">/**</span></div><div class='line' id='LC662'><span class="cm"> * Returns str wrapped in a &lt;span dir=ltr|rtl&gt; according to its directionality -</span></div><div class='line' id='LC663'><span class="cm"> * but only if that is neither neutral nor the same as the global context.</span></div><div class='line' id='LC664'><span class="cm"> * Otherwise, returns str unchanged.</span></div><div class='line' id='LC665'><span class="cm"> * Always treats str as HTML/HTML-escaped, i.e. ignores mark-up and escapes when</span></div><div class='line' id='LC666'><span class="cm"> * estimating str&#39;s directionality.</span></div><div class='line' id='LC667'><span class="cm"> * @param {number} bidiGlobalDir The global directionality context: 1 if ltr, -1</span></div><div class='line' id='LC668'><span class="cm"> *     if rtl, 0 if unknown.</span></div><div class='line' id='LC669'><span class="cm"> * @param {*} str The string to be wrapped. Can be other types, but the value</span></div><div class='line' id='LC670'><span class="cm"> *     will be coerced to a string.</span></div><div class='line' id='LC671'><span class="cm"> * @return {string} The wrapped string.</span></div><div class='line' id='LC672'><span class="cm"> */</span></div><div class='line' id='LC673'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiSpanWrap</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">bidiGlobalDir</span><span class="p">,</span> <span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC674'>&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nb">String</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC675'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">textDir</span> <span class="o">=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiTextDir</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC676'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">reset</span> <span class="o">=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiMarkAfterKnownDir</span><span class="p">(</span><span class="nx">bidiGlobalDir</span><span class="p">,</span> <span class="nx">textDir</span><span class="p">,</span> <span class="nx">str</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC677'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">textDir</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">bidiGlobalDir</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC678'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="s1">&#39;&lt;span dir=ltr&gt;&#39;</span> <span class="o">+</span> <span class="nx">str</span> <span class="o">+</span> <span class="s1">&#39;&lt;/span&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC679'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">textDir</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">bidiGlobalDir</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC680'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="s1">&#39;&lt;span dir=rtl&gt;&#39;</span> <span class="o">+</span> <span class="nx">str</span> <span class="o">+</span> <span class="s1">&#39;&lt;/span&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC681'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC682'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span> <span class="o">+</span> <span class="nx">reset</span><span class="p">;</span></div><div class='line' id='LC683'><span class="p">};</span></div><div class='line' id='LC684'><br/></div><div class='line' id='LC685'><br/></div><div class='line' id='LC686'><span class="cm">/**</span></div><div class='line' id='LC687'><span class="cm"> * Returns str wrapped in Unicode BiDi formatting characters according to its</span></div><div class='line' id='LC688'><span class="cm"> * directionality, i.e. either LRE or RLE at the beginning and PDF at the end -</span></div><div class='line' id='LC689'><span class="cm"> * but only if str&#39;s directionality is neither neutral nor the same as the</span></div><div class='line' id='LC690'><span class="cm"> * global context. Otherwise, returns str unchanged.</span></div><div class='line' id='LC691'><span class="cm"> * Always treats str as HTML/HTML-escaped, i.e. ignores mark-up and escapes when</span></div><div class='line' id='LC692'><span class="cm"> * estimating str&#39;s directionality.</span></div><div class='line' id='LC693'><span class="cm"> * @param {number} bidiGlobalDir The global directionality context: 1 if ltr, -1</span></div><div class='line' id='LC694'><span class="cm"> *     if rtl, 0 if unknown.</span></div><div class='line' id='LC695'><span class="cm"> * @param {*} str The string to be wrapped. Can be other types, but the value</span></div><div class='line' id='LC696'><span class="cm"> *     will be coerced to a string.</span></div><div class='line' id='LC697'><span class="cm"> * @return {string} The wrapped string.</span></div><div class='line' id='LC698'><span class="cm"> */</span></div><div class='line' id='LC699'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiUnicodeWrap</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">bidiGlobalDir</span><span class="p">,</span> <span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC700'>&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nb">String</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC701'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">textDir</span> <span class="o">=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiTextDir</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC702'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">reset</span> <span class="o">=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiMarkAfterKnownDir</span><span class="p">(</span><span class="nx">bidiGlobalDir</span><span class="p">,</span> <span class="nx">textDir</span><span class="p">,</span> <span class="nx">str</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC703'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">textDir</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">bidiGlobalDir</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC704'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="s1">&#39;\u202A&#39;</span> <span class="o">+</span> <span class="nx">str</span> <span class="o">+</span> <span class="s1">&#39;\u202C&#39;</span><span class="p">;</span></div><div class='line' id='LC705'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">textDir</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">bidiGlobalDir</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC706'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="s1">&#39;\u202B&#39;</span> <span class="o">+</span> <span class="nx">str</span> <span class="o">+</span> <span class="s1">&#39;\u202C&#39;</span><span class="p">;</span></div><div class='line' id='LC707'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC708'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span> <span class="o">+</span> <span class="nx">reset</span><span class="p">;</span></div><div class='line' id='LC709'><span class="p">};</span></div><div class='line' id='LC710'><br/></div><div class='line' id='LC711'><br/></div><div class='line' id='LC712'><span class="cm">/**</span></div><div class='line' id='LC713'><span class="cm"> * A practical pattern to identify strong LTR character. This pattern is not</span></div><div class='line' id='LC714'><span class="cm"> * theoretically correct according to unicode standard. It is simplified for</span></div><div class='line' id='LC715'><span class="cm"> * performance and small code size.</span></div><div class='line' id='LC716'><span class="cm"> * @type {string}</span></div><div class='line' id='LC717'><span class="cm"> * @private</span></div><div class='line' id='LC718'><span class="cm"> */</span></div><div class='line' id='LC719'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiLtrChars_</span> <span class="o">=</span></div><div class='line' id='LC720'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF&#39;</span> <span class="o">+</span></div><div class='line' id='LC721'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF&#39;</span><span class="p">;</span></div><div class='line' id='LC722'><br/></div><div class='line' id='LC723'><br/></div><div class='line' id='LC724'><span class="cm">/**</span></div><div class='line' id='LC725'><span class="cm"> * A practical pattern to identify strong neutral and weak character. This</span></div><div class='line' id='LC726'><span class="cm"> * pattern is not theoretically correct according to unicode standard. It is</span></div><div class='line' id='LC727'><span class="cm"> * simplified for performance and small code size.</span></div><div class='line' id='LC728'><span class="cm"> * @type {string}</span></div><div class='line' id='LC729'><span class="cm"> * @private</span></div><div class='line' id='LC730'><span class="cm"> */</span></div><div class='line' id='LC731'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiNeutralChars_</span> <span class="o">=</span></div><div class='line' id='LC732'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\u0000-\u0020!-@[-`{-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u2BFF&#39;</span><span class="p">;</span></div><div class='line' id='LC733'><br/></div><div class='line' id='LC734'><br/></div><div class='line' id='LC735'><span class="cm">/**</span></div><div class='line' id='LC736'><span class="cm"> * A practical pattern to identify strong RTL character. This pattern is not</span></div><div class='line' id='LC737'><span class="cm"> * theoretically correct according to unicode standard. It is simplified for</span></div><div class='line' id='LC738'><span class="cm"> * performance and small code size.</span></div><div class='line' id='LC739'><span class="cm"> * @type {string}</span></div><div class='line' id='LC740'><span class="cm"> * @private</span></div><div class='line' id='LC741'><span class="cm"> */</span></div><div class='line' id='LC742'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiRtlChars_</span> <span class="o">=</span> <span class="s1">&#39;\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC&#39;</span><span class="p">;</span></div><div class='line' id='LC743'><br/></div><div class='line' id='LC744'><br/></div><div class='line' id='LC745'><span class="cm">/**</span></div><div class='line' id='LC746'><span class="cm"> * Regular expressions to check if a piece of text is of RTL directionality</span></div><div class='line' id='LC747'><span class="cm"> * on first character with strong directionality.</span></div><div class='line' id='LC748'><span class="cm"> * @type {RegExp}</span></div><div class='line' id='LC749'><span class="cm"> * @private</span></div><div class='line' id='LC750'><span class="cm"> */</span></div><div class='line' id='LC751'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiRtlDirCheckRe_</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span></div><div class='line' id='LC752'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;^[^&#39;</span> <span class="o">+</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiLtrChars_</span> <span class="o">+</span> <span class="s1">&#39;]*[&#39;</span> <span class="o">+</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiRtlChars_</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">);</span></div><div class='line' id='LC753'><br/></div><div class='line' id='LC754'><br/></div><div class='line' id='LC755'><span class="cm">/**</span></div><div class='line' id='LC756'><span class="cm"> * Regular expressions to check if a piece of text is of neutral directionality.</span></div><div class='line' id='LC757'><span class="cm"> * Url are considered as neutral.</span></div><div class='line' id='LC758'><span class="cm"> * @type {RegExp}</span></div><div class='line' id='LC759'><span class="cm"> * @private</span></div><div class='line' id='LC760'><span class="cm"> */</span></div><div class='line' id='LC761'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiNeutralDirCheckRe_</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span></div><div class='line' id='LC762'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;^[&#39;</span> <span class="o">+</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiNeutralChars_</span> <span class="o">+</span> <span class="s1">&#39;]*$|^http://&#39;</span><span class="p">);</span></div><div class='line' id='LC763'><br/></div><div class='line' id='LC764'><br/></div><div class='line' id='LC765'><span class="cm">/**</span></div><div class='line' id='LC766'><span class="cm"> * Check the directionality of the a piece of text based on the first character</span></div><div class='line' id='LC767'><span class="cm"> * with strong directionality.</span></div><div class='line' id='LC768'><span class="cm"> * @param {string} str string being checked.</span></div><div class='line' id='LC769'><span class="cm"> * @return {boolean} return true if rtl directionality is being detected.</span></div><div class='line' id='LC770'><span class="cm"> * @private</span></div><div class='line' id='LC771'><span class="cm"> */</span></div><div class='line' id='LC772'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiIsRtlText_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC773'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiRtlDirCheckRe_</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC774'><span class="p">};</span></div><div class='line' id='LC775'><br/></div><div class='line' id='LC776'><br/></div><div class='line' id='LC777'><span class="cm">/**</span></div><div class='line' id='LC778'><span class="cm"> * Check the directionality of the a piece of text based on the first character</span></div><div class='line' id='LC779'><span class="cm"> * with strong directionality.</span></div><div class='line' id='LC780'><span class="cm"> * @param {string} str string being checked.</span></div><div class='line' id='LC781'><span class="cm"> * @return {boolean} true if all characters have neutral directionality.</span></div><div class='line' id='LC782'><span class="cm"> * @private</span></div><div class='line' id='LC783'><span class="cm"> */</span></div><div class='line' id='LC784'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiIsNeutralText_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC785'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiNeutralDirCheckRe_</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC786'><span class="p">};</span></div><div class='line' id='LC787'><br/></div><div class='line' id='LC788'><br/></div><div class='line' id='LC789'><span class="cm">/**</span></div><div class='line' id='LC790'><span class="cm"> * This constant controls threshold of rtl directionality.</span></div><div class='line' id='LC791'><span class="cm"> * @type {number}</span></div><div class='line' id='LC792'><span class="cm"> * @private</span></div><div class='line' id='LC793'><span class="cm"> */</span></div><div class='line' id='LC794'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiRtlDetectionThreshold_</span> <span class="o">=</span> <span class="mf">0.40</span><span class="p">;</span></div><div class='line' id='LC795'><br/></div><div class='line' id='LC796'><br/></div><div class='line' id='LC797'><span class="cm">/**</span></div><div class='line' id='LC798'><span class="cm"> * Returns the RTL ratio based on word count.</span></div><div class='line' id='LC799'><span class="cm"> * @param {string} str the string that need to be checked.</span></div><div class='line' id='LC800'><span class="cm"> * @return {number} the ratio of RTL words among all words with directionality.</span></div><div class='line' id='LC801'><span class="cm"> * @private</span></div><div class='line' id='LC802'><span class="cm"> */</span></div><div class='line' id='LC803'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiRtlWordRatio_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC804'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rtlCount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC805'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">totalCount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC806'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tokens</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39; &#39;</span><span class="p">);</span></div><div class='line' id='LC807'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC808'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiIsRtlText_</span><span class="p">(</span><span class="nx">tokens</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC809'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rtlCount</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC810'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">totalCount</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC811'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiIsNeutralText_</span><span class="p">(</span><span class="nx">tokens</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC812'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">totalCount</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC813'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC814'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC815'><br/></div><div class='line' id='LC816'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">totalCount</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">rtlCount</span> <span class="o">/</span> <span class="nx">totalCount</span><span class="p">;</span></div><div class='line' id='LC817'><span class="p">};</span></div><div class='line' id='LC818'><br/></div><div class='line' id='LC819'><br/></div><div class='line' id='LC820'><span class="cm">/**</span></div><div class='line' id='LC821'><span class="cm"> * Check the directionality of a piece of text, return true if the piece of</span></div><div class='line' id='LC822'><span class="cm"> * text should be laid out in RTL direction.</span></div><div class='line' id='LC823'><span class="cm"> * @param {string} str The piece of text that need to be detected.</span></div><div class='line' id='LC824'><span class="cm"> * @return {boolean} true if this piece of text should be laid out in RTL.</span></div><div class='line' id='LC825'><span class="cm"> * @private</span></div><div class='line' id='LC826'><span class="cm"> */</span></div><div class='line' id='LC827'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiDetectRtlDirectionality_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC828'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiRtlWordRatio_</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="o">&gt;</span></div><div class='line' id='LC829'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiRtlDetectionThreshold_</span><span class="p">;</span></div><div class='line' id='LC830'><span class="p">};</span></div><div class='line' id='LC831'><br/></div><div class='line' id='LC832'><br/></div><div class='line' id='LC833'><span class="cm">/**</span></div><div class='line' id='LC834'><span class="cm"> * Regular expressions to check if the last strongly-directional character in a</span></div><div class='line' id='LC835'><span class="cm"> * piece of text is LTR.</span></div><div class='line' id='LC836'><span class="cm"> * @type {RegExp}</span></div><div class='line' id='LC837'><span class="cm"> * @private</span></div><div class='line' id='LC838'><span class="cm"> */</span></div><div class='line' id='LC839'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiLtrExitDirCheckRe_</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span></div><div class='line' id='LC840'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;[&#39;</span> <span class="o">+</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiLtrChars_</span> <span class="o">+</span> <span class="s1">&#39;][^&#39;</span> <span class="o">+</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiRtlChars_</span> <span class="o">+</span> <span class="s1">&#39;]*$&#39;</span><span class="p">);</span></div><div class='line' id='LC841'><br/></div><div class='line' id='LC842'><br/></div><div class='line' id='LC843'><span class="cm">/**</span></div><div class='line' id='LC844'><span class="cm"> * Regular expressions to check if the last strongly-directional character in a</span></div><div class='line' id='LC845'><span class="cm"> * piece of text is RTL.</span></div><div class='line' id='LC846'><span class="cm"> * @type {RegExp}</span></div><div class='line' id='LC847'><span class="cm"> * @private</span></div><div class='line' id='LC848'><span class="cm"> */</span></div><div class='line' id='LC849'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiRtlExitDirCheckRe_</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span></div><div class='line' id='LC850'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;[&#39;</span> <span class="o">+</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiRtlChars_</span> <span class="o">+</span> <span class="s1">&#39;][^&#39;</span> <span class="o">+</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiLtrChars_</span> <span class="o">+</span> <span class="s1">&#39;]*$&#39;</span><span class="p">);</span></div><div class='line' id='LC851'><br/></div><div class='line' id='LC852'><br/></div><div class='line' id='LC853'><span class="cm">/**</span></div><div class='line' id='LC854'><span class="cm"> * Check if the exit directionality a piece of text is LTR, i.e. if the last</span></div><div class='line' id='LC855'><span class="cm"> * strongly-directional character in the string is LTR.</span></div><div class='line' id='LC856'><span class="cm"> * @param {string} str string being checked.</span></div><div class='line' id='LC857'><span class="cm"> * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.</span></div><div class='line' id='LC858'><span class="cm"> *     Default: false.</span></div><div class='line' id='LC859'><span class="cm"> * @return {boolean} Whether LTR exit directionality was detected.</span></div><div class='line' id='LC860'><span class="cm"> * @private</span></div><div class='line' id='LC861'><span class="cm"> */</span></div><div class='line' id='LC862'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiIsLtrExitText_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC863'>&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiStripHtmlIfNecessary_</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">);</span></div><div class='line' id='LC864'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiLtrExitDirCheckRe_</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC865'><span class="p">};</span></div><div class='line' id='LC866'><br/></div><div class='line' id='LC867'><br/></div><div class='line' id='LC868'><span class="cm">/**</span></div><div class='line' id='LC869'><span class="cm"> * Check if the exit directionality a piece of text is RTL, i.e. if the last</span></div><div class='line' id='LC870'><span class="cm"> * strongly-directional character in the string is RTL.</span></div><div class='line' id='LC871'><span class="cm"> * @param {string} str string being checked.</span></div><div class='line' id='LC872'><span class="cm"> * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.</span></div><div class='line' id='LC873'><span class="cm"> *     Default: false.</span></div><div class='line' id='LC874'><span class="cm"> * @return {boolean} Whether RTL exit directionality was detected.</span></div><div class='line' id='LC875'><span class="cm"> * @private</span></div><div class='line' id='LC876'><span class="cm"> */</span></div><div class='line' id='LC877'><span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiIsRtlExitText_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC878'>&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiStripHtmlIfNecessary_</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">opt_isHtml</span><span class="p">);</span></div><div class='line' id='LC879'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">soy</span><span class="p">.</span><span class="nx">$$bidiRtlExitDirCheckRe_</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC880'><span class="p">};</span></div><div class='line' id='LC881'><br/></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading" style="display:none;" data-tree-list-url="/igrigorik/closure-sprockets/tree-list/6a13edf63e7b1cf9098c6c87e96576e064d09251" data-blob-url-prefix="/igrigorik/closure-sprockets/blob/6a13edf63e7b1cf9098c6c87e96576e064d09251">
  <img src="https://a248.e.akamai.net/assets.github.com/images/modules/ajax/big_spinner_336699.gif" height="32" width="32">
</div>

    </div>

    </div>

    <!-- footer -->
    <div id="footer" >
      
  <div class="upper_footer">
     <div class="site" class="clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="https://gist.github.com">Gist: Code Snippets</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="site" class="clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2011 <span id="_rrt" title="0.12670s from fe8.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspace_logo.png?v2" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

    </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style=&#39;display:none&#39;>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style=&#39;display:none&#39;>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style=&#39;display:none&#39;>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selection as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selection as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selection from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style=&#39;display:none&#39;>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style=&#39;display:none&#39;>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:
> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>

    <div class="context-overlay"></div>

    
    
    
  </body>
</html>

