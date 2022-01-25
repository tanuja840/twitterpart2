var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'H6UpKtyA9KLmYatpbqTXnXBIW',
  consumer_secret: 'o6xBhd6oukgTxCrn0XcNBszYHrZhU9E5O418YjCBMbBznRKY8L',
  access_token_key: '1483541906458296320-SahmbfvX1q4L547ZXS7RRp6saXN7F2',
  access_token_secret: 'ddt7FNYrpR8sjSvkUh5CoJtZaoRIihxje3AleV2rxCNnM'
});
 
var params = {screen_name: 'tanuja'};
var one_way_following = [];
var users_to_display = [];

client.get('followers/ids', params, function(error, followers_results, response) {
  if (error) 
    throw error;
  

  var followers = followers_results.ids;

  client.get('friends/ids',params, function(error, following_results, response) {
    if (error) 
      throw error;
    
  
    var following = following_results.ids;
    
    following.forEach(function(person){

    if(followers.indexOf(person)=== -1){
      one_way_following.push(person);

    }
      
    });
    
    one_way_following = one_way_following.slice(0, 99);
    
    var one_way_following_string = one_way_following.join();
    
    client.get('users/lookup', {user_id: one_way_following_string}, function(){
    users_results.forEach(function(user){

    var userObject={

    name: user.name,
    screen_name: user.screen_name,
    avatar: user.profile_image_url
    };
   
    users_to_display.push(userObject);
  });
  console.log(users_to_display);
});
  });
});


