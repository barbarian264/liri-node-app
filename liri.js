// var tweet = require('./keys.js');
var request = require("request");
var Twitter = require('twitter');
var $ = require('jQuery');


var client = new Twitter({
    consumer_key: '2tb65x5jUhEL57GSUhrQyYOUC',
    consumer_secret: 'yLCLVozbzTdoQff5joLwBX4My5uUr04WQiTJbRP6EABOYfeVTQ',
    access_token_key: '881912451805171717-QnQfhnZ1EWmG47DYPidDIYKVMpDlokB',
    access_token_secret: '6GXbd8ZddI4kbtMT3KoVdADzayNanxRdnqi6a8mXIZrp0',
});


if (process.argv[2] == "my-tweets") {



    var params = { screen_name: 'nodejs' };
    client.get('statuses/user_timeline', function(error, tweets, response) {
        for (i = 0; i < 20; i++) {
            if (!error) {
                console.log(tweets[i].text);
                console.log(tweets[i].created_at);
            }
        }
    });


}

if (process.argv[2] == "spotify-this-song") {

	var song = process.argv[3] + process.argv[4];
    
    var URL = 'https://api.spotify.com/v1/search?q=' + song + 'type=track';

    request(URL,function(error,response,body){

    	if(error) {
    		return error;
    	}
        
        console.log(response);
        console.log(body);

    });

    
}

if (process.argv[2] == "movie-this") {

	var movie = process.argv[3] + process.argv[4];

	var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

	request(queryURL,function(error,response,body){

    	if(error) {
    		return error;
    	}
        
        console.log(body);
        console.log(body.Title);
        console.log(body.Year);
        // console.log(body.Ratings.imdbRating);
        // console.log(body.Ratings.Source[1].Value);
        // console.log(body.Country);

    });



}
