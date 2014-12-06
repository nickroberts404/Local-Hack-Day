
$(document).ready(function () {
        $.ajax({
            type: 'GET',
            url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=16&page=1&country=us&apikey=mhev5k6bwufz7q5drc9yk7nr',
            dataType: 'jsonp',
            success: function (data) {
                console.log(data);
            }
        });
});