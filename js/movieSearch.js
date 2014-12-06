function search(title) {
	var result = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=";
	result += title;
	result += "&page_limit=10&page=1&apikey=mhev5k6bwufz7q5drc9yk7nr";
	$(document).ready(function () {
        $.ajax({
            type: 'GET',
            url: result,
            dataType: 'jsonp',
            success: function (data) {
                console.log(data);
            }
        });
	});
}


