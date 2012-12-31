(function($) {

  $.fn.tabs = function(args) {

		var defaults = {header:'h3', destroy: false, activeIndex: 0, onChange: null};
		var settings = jQuery.extend(defaults,args);

		if(settings.destroy) {

			settings.onChange = null;

			this.each(function() {
				var container = $(this);
				container.removeClass("tabs");

				container.find("ul.tab-items").remove();

				container.children().show();
			});

			return;
		}



		return this.each(function() {

	  		var container = $(this);
	  		container.addClass("tabs");

	  		var panels = container.children();

	      	panels.hide();

	  		panels.filter(":eq(" + settings.activeIndex + ")").show();

	  		container.prepend("<ul class=\"tab-items\"></ul>");
	  		var tabList = container.children("ul.tab-items");

	  		panels.each( function() {
	  			var $this = $(this);
	  		  	var title = $this.find(settings.header).text();
	  		  	var className = $this.attr("class");
	  		  	var id = $this.attr("id");

	  		  	tabList.append("<li class=\"" + className + "\"><a href=\"#" + id + "\">"+title+"</a></li>");
	  		});
	  		tabList.children("li:eq(" + settings.activeIndex + ")").addClass("active");


	  		tabList.find("a").click(function(){
	  			var $this = $(this);
	  			var id = this.hash.slice(1);
	  			panels.hide();
	  			tabList.children().removeClass("active");
	  			var panel = panels.filter("[id='"+id+"']");
	  			panel.show();

	  			$this.parent().addClass("active");

	  			if(settings.onChange)
	  				settings.onChange.call(this, panel);

	  			return false;
	  		});

		});
	};

})(jQuery);
