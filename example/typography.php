<?php

if (!isset($TEMPLATE)) {
	$TITLE = 'Typography';
	$NAVIGATION = true;

	$HEAD = '
		<style>
			pre {
				white-space: pre-wrap;
				white-space: -moz-pre-wrap;
				white-space: -o-pre-wrap;
				background: #f6f6f6;
				color:#666;
				font-size:14px;
				font-family:monospace;
			}

			.code {
				display: block;
				padding: 0.5em 1em;
				border: 1px solid #ededed;
			}

		</style>
	';
	$FOOT = '<script src="js/index.js"></script>';

	include('template.inc.php');
}

?>

<p>This page gives examples of different typographic styles.</p>

<h2 class="underline">Headers</h2>

<h1>h1 Header</h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipisici<strong>*</strong> g elit,
sed do eius<strong>*</strong> od tempor<strong>*</strong> incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.
</p>
<p>
aliquip ex ea commodo consequat. Duis aute irure dolor
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.
</p>

<h2>h2 Header</h2>
<p>
Lorem ipsum dolor sit amet, consectetur adipisici<strong>*</strong> g elit,
sed do eius<strong>*</strong> od tempor<strong>*</strong> incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.
</p>

<h3>h3 Header</h3>
<p>
Lorem ipsum dolor sit amet, consectetur adipisici<strong>*</strong> g elit,
sed do eius<strong>*</strong> od tempor<strong>*</strong> incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.
</p>

<h4>h4 Header</h4>
<p>
Lorem ipsum dolor sit amet, consectetur adipisici<strong>*</strong> g elit,
sed do eius<strong>*</strong> od tempor<strong>*</strong> incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.
</p>

<h5>h5 Header</h5>
<p>
Lorem ipsum dolor sit amet, consectetur adipisici<strong>*</strong> g elit,
sed do eius<strong>*</strong> od tempor<strong>*</strong> incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.
</p>


<h2 class="underline">Nested Headers</h2>

<p>
	This is an example of what happens when you nest headers inside
	&lt;section&gt; tags.
</p>

<pre class="code">
&lt;h1&gt;h1 Header&lt;/h1&gt;
&lt;section&gt;
	&lt;h1&gt;h1 Header&lt;/h1&gt;
	&lt;section&gt;
		&lt;h1&gt;h1 Header&lt;/h1&gt;
		&lt;section&gt;
			&lt;h1&gt;h1 Header&lt;/h1&gt;
			&lt;section&gt;
				&lt;h1&gt;h1 Header&lt;/h1&gt;
			&lt;/section&gt;
		&lt;/section&gt;
	&lt;/section&gt;
&lt;/section&gt;
</pre>

<h1>h1 Header</h1>
<section>
	<h1>h1 Header</h1>
	<section>
		<h1>h1 Header</h1>
		<section>
			<h1>h1 Header</h1>
			<section>
				<h1>h1 Header</h1>
			</section>
		</section>
	</section>
</section>


<h2 class="underline">Stylized Headers</h2>

<p>There are three different types of stylized headers.</p>
<ul>
	<li>Thin</li>
	<li>Subheader</li>
	<li>Underline</li>
</ul>

<h1 class="thin">h1.thin Header</h1>
<h2 class="thin">h2.thin Header</h2>
<h3 class="thin">h3.thin Header</h3>
<h4 class="thin">h4.thin Header</h4>
<h5 class="thin">h5.thin Header</h5>


<h1 class="subheader">h1.subheader Header</h1>
<h2 class="subheader">h2.subheader Header</h2>
<h3 class="subheader">h3.subheader Header</h3>
<h4 class="subheader">h4.subheader Header</h4>
<h5 class="subheader">h5.subheader Header</h5>


<h1 class="underline">h1.underline Header</h1>
<h2 class="underline">h2.underline Header</h2>
<h3 class="underline">h3.underline Header</h3>
<h4 class="underline">h4.underline Header</h4>
<h5 class="underline">h5.underline Header</h5>

