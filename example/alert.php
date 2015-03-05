<?php 

	if (!isset($TEMPLATE)) {
		$TITLE = 'Alerts';
		$NAVIGATION = true;

		$HEAD = '
			<style>
				div.help {
					width: 2em;
					height: 2em;
					text-align: center;
					font-weight: bold;
					border-radius: 1em;
					line-height: 2em;
					padding: 0;
				}

				dl.example > dd {
					margin-bottom: 1em;
				}

				input.error:focus {
					background: #fff;
					color: #555;
					border: 1px solid #d8d8d8;
				}
			</style>

			<link rel="stylesheet" href="/theme/css/alert.css"/>
		';

		include 'template.inc.php';
	}
?>

<section class="docs">
<p>
	The alert classes can be used to emphasize single items, or blocks of
	information.
</p>
	<h2>Example 1</h2>
	<h3>Usage</h3>
	<p>
		It is suggested that alert classes are added on <code>&lt;p&gt;</code>
		tags. This way the element will inherit a top/bottom margin. 
	</p>
	<p class="alert">
		To indicate additional information add the <code>.alert</code> class.
	</p>
	<p class="alert info">
		To emphasize important information add the <code>.alert .info</code>
		classes.
	</p>
	<p class="alert success">
		To indicate success or a positive message add the
		<code>.alert .success</code> classes.
	</p>
	<p class="alert warning">
		To highlight a message containing a warning add the
		<code>.alert .warning</code> classes.
	</p>
	<p class="alert error">
		To highlight a message containing an error add the
		<code>.alert .error</code> classes.
	</p>
	<h3>Code</h3>
<pre><code>&lt;p class="alert"&gt;&hellip;&lt;/p&gt;
&lt;p class="alert info"&gt;&hellip;&lt;/p&gt;
&lt;p class="alert success"&gt;&hellip;&lt;/p&gt;
&lt;p class="alert warning"&gt;&hellip;&lt;/p&gt;
&lt;p class="alert error"&gt;&hellip;&lt;/p&gt;</code></pre>



	<h2>Example 2</h2>
	<h3>Usage</h3>
	<p>
		The alert classes <code>.info</code>, <code>.success</code>,
		<code>.warning</code>, and <code>.error</code>, can be applied to
		any HTML elements. If they are applied without the <code>.alert</code>
		sibling class then they will only inherit a color, background-color,
		and border-color.
	</p>
	<dl class="vertical example">
		<dt>Input Elements</dt>
		<dd>
			<input type="text" class="error" value="Error state">
		</dd>
		<dt>Span Elements</dt>
		<dd>
			<span class="alert info">
				This text is inside a <code>span</code> tag, and is styled with
				<code>.alert .info</code>
			</span>
		</dd>
		<dt>Div Elements</dt>
		<dd>
			<div class="alert success help">&#10003;</div>
		</dd>
	</dl>
	<h3>Code</h3>
	<pre>
	<code>&lt;input type="text" class="alert error" value="Error state"&gt;
	&lt;span class="alert info"&gt;&hellip;&lt;/span&gt;
	&lt;div class="alert success help""&gt;&#10003;&lt;/div&gt;</code>
	</pre>
</section>
