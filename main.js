$(document).on('ready', function() {
  console.log('READY, PLAYER ONE?');
  
  // Accept a title keyword and search based on that keyword
    $('form').on('submit', function(e){
      e.preventDefault();
      
      var keyword = $('input').val();
      
      var url = 'http://www.omdbapi.com/?s='+keyword+'&r=json'
      $.get(url).done(function(res) {
    
      console.log(res);
      $('input').val('');
    });     
  });
}); 