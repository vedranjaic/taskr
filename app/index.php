<?php include('header.php'); ?>

	<div class="container">

		<div class="info-box">

			<a href="http://validator.w3.org/" target="_blank" tabindex="-1" class="lead">http://validator.w3.org/</a>
			<p>Input any webpage url and the W3C Markup validation service will point out the HTML, CSS or XML coding errors. Why fix coding errors? At time of writing, Google.com throws up 23 HTML validation errors. Furthermore HTML errors are usually invisible to the end user - I have seen webpages that throw up hundreds of HTML errors without having any noticeable affect when browsing the webpage. So why bother? Apart from demonstrating a healthy website, having a page free of errors makes for a more stable website that is easier to maintain and easier to upgrade.</p>

		</div>
		<!-- /.info-box -->

		<form action="#">

			<ul>
				<li>
					<ul>
						<li>&nbsp;</li>
						<li><label for="input-1">Task</label></li>
						<li>About</li>
					</ul>
				</li>
				<hr>
				<li>
					<ul>
						<li><input tabindex="1" type="checkbox" id="input-1" class="store-state"></li>
						<li><label for="input-1">W3C Validation</label></li>
						<li><a tabindex="-1" href="#">info</a></li>
					</ul>
				</li>
				<li>
					<ul>
						<li><input tabindex="2" type="checkbox" id="input-2" class="store-state"></li>
						<li><label for="input-2">Google Pagespeed tool</label></li>
						<li><a tabindex="-1" href="#">info</a></li>
					</ul>						
				</li>
			</ul>

		</form>

	</div>
	<!-- /.container -->

<?php include('footer.php'); ?>