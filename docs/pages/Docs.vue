<template>
<section class="container">

<h2>Getting started</h2>
<p>Start out by installing slate css and slate vue.</p>

<pre class="code">npm i -s @dsbn/slate-css @dsbn/slate-vue</pre>

<p>In your js entry file, import Slate and through it in a Vue.use()</p>

<pre class="code">import {Slate} from '@dsbn/slate-vue';
Vue.use(Slate);
</pre>

<p>Next, include the slate css include in either your js file, or css file.</p>

<pre class="code">@import '../node_modules/@dsbn/slate-css/css/slate.css';</pre>

</section> 
</template>