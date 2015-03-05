<?php
if (!isset($TEMPLATE)) {
	$TITLE = 'Buttons';
	$NAVIGATION = true;

	$HEAD = '
			<style>
				h3.button-example {
					margin-bottom: 16px;
				}
			</style>
	';

	include 'template.inc.php';
}
?>

<section class="buttons docs">
	<p>
		Here are some examples of default styles for buttons, and also some examples
		of class modifiers you can use for a consistent look with common button usage.
	</p>

	<h2>Button</h2>
	<p>
		This is the default style applied to all buttons, it also displays the
		disabled state.
	</p>
	<h3 class="button-example">Example</h3>
	<button>Enabled</button>
	<button disabled>Disabled</button>
	<h3>Usage</h3>
	<pre><code>&lt;button&gt;Enabled&lt;button&gt;
	&lt;button disabled&gt;Disabled&lt;button&gt;
	</code></pre>


	<h2>Button States</h2>
	<p>
		When color styles are applied to buttons the disabled state does not
		inherit the background color. The disabled state can be set using the disabled
		attribute or by applying the class <code>.disabled</code>.
	</p>
	<h3 class="button-example">Example</h3>
	<button class="green">Yes</button>
	<button>No</button>
	<br>
	<button class="green" disabled>Yes</button>
	<button disabled>No</button>
	<h3>Usage</h3>
	<pre><code>&lt;button class="green"&gt;Yes&lt;button&gt;
	&lt;button&gt;No&lt;button&gt;
	&lt;br&gt;
	&lt;button class="green" disabled&gt;Yes&lt;button&gt;
	&lt;button disabled&gt;No&lt;button&gt;
	</code></pre>

	<h2>Example 3</h2>
	<p>
		There are two classes that can be applied to buttons for use with a yes/no
		type of response. These classes are <code>.confirm</code> and
		<code>.cancel</code> and they add an icon to the button.
	</p>
	<h3 class="button-example">Example</h3>
	<button class="green confirm">Yes</button>
	<button class="cancel">No</button>
	<br>
	<button class="green confirm" disabled>Yes</button>
	<button class="cancel" disabled>No</button>
	<h3>Usage</h3>
	<pre><code>&lt;button class="confirm green"&gt;Yes&lt;button&gt;
	&lt;button class="cancel"&gt;No&lt;button&gt;
	&lt;br&gt;
	&lt;button class="confirm green" disabled&gt;Yes&lt;button&gt;
	&lt;button class="cancel" disabled&gt;No&lt;button&gt;
	</code></pre>

	<h2>Example 4</h2>
	<p>
		There are five predefined colors that can be applied to buttons. If you add
		the class <code>.red</code>, <code>.orange</code>, <code>.yellow</code>,
		<code>.green</code>, or <code>.blue</code>, then the button will be styled
		with that color scheme. 
	</p>
	<h3 class="button-example">Example</h3>
	<button class="red">Red</button>
	<button class="orange">Orange</button>
	<button class="yellow">Yellow</button>
	<button class="green">Green</button>
	<button class="blue">Blue</button>
	<br>
	<button class="red" disabled>Red</button>
	<button class="orange" disabled>Orange</button>
	<button class="yellow" disabled>Yellow</button>
	<button class="green" disabled>Green</button>
	<button class="blue" disabled>Blue</button>
	<h3>Usage</h3>
	<pre><code>&lt;button class="red"&gt;Red&lt;button&gt;
	&lt;button class="orange"&gt;Orange&lt;button&gt;
	&lt;button class="yellow"&gt;Yellow&lt;button&gt;
	&lt;button class="green"&gt;Green&lt;button&gt;
	&lt;button class="blue"&gt;Blue&lt;button&gt;
	&lt;br&gt;
	&lt;button class="red" disabled&gt;Red&lt;button&gt;
	&lt;button class="orange" disabled&gt;Orange&lt;button&gt;
	&lt;button class="yellow" disabled&gt;Yellow&lt;button&gt;
	&lt;button class="green" disabled&gt;Green&lt;button&gt;
	&lt;button class="blue" disabled&gt;Blue&lt;button&gt;
	</code></pre>



	<h2>Button Groups</h2>
	<p>
		To group together buttons in a navigation style list, use this markup.
	</p>
	<h3 class="button-example">Example</h3>
	<nav class="button-group">
		<button>List</button>
		<button>Map</button>
		<button>Settings</button>
	</nav>

	<nav class="button-group">
		<button class="blue">List</button>
		<button class="blue">Map</button>
		<button class="blue">Settings</button>
	</nav>

	<nav class="button-group">
		<button class="green">List</button>
		<button class="green">Map</button>
		<button class="green">Settings</button>
	</nav>

	<nav class="button-group">
		<button class="yellow">List</button>
		<button class="yellow">Map</button>
		<button class="yellow">Settings</button>
	</nav>

	<nav class="button-group">
		<button class="orange">List</button>
		<button class="orange">Map</button>
		<button class="orange">Settings</button>
	</nav>

	<nav class="button-group">
		<button class="red">List</button>
		<button class="red">Map</button>
		<button class="red">Settings</button>
	</nav>

	<h3>Usage</h3>
	<pre><code>&lt;nav class="button-group"&gt;
		&lt;button&gt;List&lt;/button&gt;
		&lt;button class="active"&gt;Map&lt;/button&gt;
		&lt;button class="active"&gt;Settings&lt;/button&gt;
	&lt;/nav&gt;
	&lt;nav class="button-group"&gt;
		&lt;button class="blue"&gt;List&lt;/button&gt;
		&lt;button class="blue active"&gt;Map&lt;/button&gt;
		&lt;button class="blue active"&gt;Settings&lt;/button&gt;
	&lt;/nav&gt;
	...
	</code></pre>

</section>