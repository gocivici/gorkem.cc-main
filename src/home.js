
//Simple RSS Embed Plugin by 55sketch https://github.com/55sketch/simple-rss/tree/master

var simpleRSSPlugin = (function() {
	// get all the feed containers
	var feedsNodes = document.querySelectorAll('[data-rss-feed]');
	// Convert to array
	// console.log(feedsNodes);
	var feeds = [].slice.call(feedsNodes);
	for (var i = 0; i < feeds.length; i++) {
		var container = feedsNodes[i];
		
		// get feed URL
		var url = container.getAttribute('data-rss-feed');
		// get whether to link titles
		var addLink = container.getAttribute('data-rss-link-titles') || 'true';
		
		// get title wrapper element
		var titleWrapper = container.getAttribute('data-rss-title-wrapper') || 'h2';
		// Max outputs
		var max = container.getAttribute('data-rss-max') || 10;
		// Get data - append as script with callback to avoid CORS
		var script = document.createElement('script');
		script.src = document.location.protocol + '//api.rss2json.com/v1/api.json?callback=simpleRSSPlugin.handleJSON&rss_url=' + encodeURIComponent(url);
		script.async=false // load in order not dynamically
		document.querySelector('head').appendChild(script);
		// console.log(script);
		
		// Remove script
		script.parentNode.removeChild(script);
	}
	// Callback function
	var loops = 0;
    var dates = [];
	function handleJSON(data) {
		if (data.feed && data.items) {
			// console.log(data);
			var docFrag = document.createDocumentFragment();
			for (var i = 0; i < data.items.length; i++) {
				var e = data.items[i];
				// console.log(data.items[i]);
				var tempNode = document.createElement('div');
                dates[i] = new Date(e.pubDate);
                
				// var template = '<' + titleWrapper + '><a href="' + e.link + '">' + e.title + '</a></' + titleWrapper + '>' + e.content;
				var template = '<' + titleWrapper + e.title + titleWrapper + '>' + e.content;
				var ratingPoint = "";
				if (addLink === 'false') {
					if(e.title.split("-")[1]){ratingPoint = " - " + e.title.split("-")[1];}else{ratingPoint="";}
					// template = e.content;
					// template = e.content.split(" <")[0] + '<' + titleWrapper + '>' +  dates[i].toLocaleDateString('en-us', { day:"numeric", month:"short"}) + " - " + e.title.split("-")[1] + '</' + titleWrapper + '>';
					// template = "<a href=" + e.link + ">" + e.content.split(" <")[0] +  '<' + titleWrapper + '>' +  dates[i].toLocaleDateString('en-us', { day:"numeric", month:"short"}) + ratingPoint + '</' + titleWrapper + '>'+ "</a>";
					template = "<a href=" + e.link + ">" + e.content.split(" <")[0] + "</a>" + '<' + titleWrapper + '>' +  "<a target='_blank' href=" + e.link + ">" +dates[i].toLocaleDateString('en-us', { day:"2-digit", month:"short"}) + '</' + titleWrapper + '>'+ "</a>";
				}
				if (i < max) {
					
					tempNode.innerHTML = template;
					
					docFrag.appendChild(tempNode);
				}
			}
			container = feedsNodes[loops];
			container.appendChild(docFrag);
			loops++;
		}
        // console.log(data.items)
	}
	// Return function for use in global scope
	return {
		handleJSON:handleJSON
	}
})();