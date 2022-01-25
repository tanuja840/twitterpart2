const res = require('express/lib/response');
var Twitter = require('twitter');
 module.exports=function(screen_name){

 
var client = new Twitter({
  consumer_key: 'xPextTlFkUtw8qSf1pIkLwrgp',
  consumer_secret: 'w8C7qr6q3Mqy6Rj0mf93bSAQtMseJTlxwT4I3q0WCPGbIF4w3x',
  access_token_key: '1483541906458296320-armysHzv7AXus0ONGun4iVW3oTA8NL',
  access_token_secret: 'NzJllZtyN8biWAxdoVfxfrVFq2OY2PXtsIw0ckrfg7s7K'
});
 
var params = {screen_name: screen_name};
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
  res.render('list', {users: users_to_display});
});
  });
});


 }