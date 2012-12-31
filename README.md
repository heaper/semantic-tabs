semantic-tabs
=============

jQuery plugin that applies a tabbed interface to semantic markup.

##Markup
```
<div class="beer">  				
	<section id="stout">
			<h3>Stout</h3>
      <p>Description 1</p>
	</section>
  <section id="stout">
  		<h3>IPA</h3>
      <p>Description 2</p>
	</section>
  <section id="stout">
  		<h3>Porter</h3>
      <p>Description 3</p>
	</section>
</div>
```
##Usage
```
$(".beer").tabs();
```
### header=h3
The jQuery selector used to target the elements that will be used to create the tab names.
### activeIndex=0
The index of the tab that will be initially active.
### onChange=null
A callback function that will be invoked whenever the active tab changes.
### destroy=false
A value of true will completely remove all generated markup and event listeners associated with the plugin.

