



function getSubReddit(subReddit) {
 	var promise = $.ajax({
 		url: "https://www.reddit.com/r/" + subReddit + ".json",
 	 	type: 'get',
 	 });

 	promise.then(function(response){
 		console.log(response);
 		var information = response.data.children.map(function(info){
 			return{
 				score : info.data.score,
 				title : info.data.title,
 				url : info.data.url,
 				countComment : info.data.num_comments,
 				archived : info.data.archived,
 			};
 		});
 		console.log(information);



 		//Display The Information to the Browser
 		var theInformation = {
 			data: information
 		};

 		console.log(theInformation);

 		var templateSource = $('#RedditInfoTemplate').html();
 		var template = Handlebars.compile(templateSource);

 		var html = template(theInformation);

 		$('#subredditInfo').html(html);
 	})


 }

 $(document).ready(function(){
	$("#btn").click(function(){
		var inputValue = document.getElementById("Search").value;
		getSubReddit(inputValue);
	});
});



