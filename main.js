$(document).on('ready', function() {
  console.log('READY, PLAYER ONE?');
  
  function getRepos() {
    var i = 1;
    var repoArray = [];
    var shouldContinue = true;
    while (true) {
      $.get("https://api.github.com/users/dennisbailey/repos?page="+i).done(function(response) {
        if(response.length < 30) {
          shouldContinue = false;
        } else { 
          i++;
        } 
        repoArray.push(response);
      });
    }
    return repoArray;   
  } 
  console.log(getRepos()); 
});