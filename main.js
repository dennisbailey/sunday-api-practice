$(document).on('ready', function() {
  console.log('READY, PLAYER ONE?');
  
  // Accept a title keyword and search based on that keyword
    $('form').on('submit', function(e){
      e.preventDefault();
      $('#results').empty();
      var keyword = $('input').val();
      var url = 'http://www.omdbapi.com/?s='+keyword+'&r=json'
      
      
      function getMovies() {
        $.get(url).done(function(res) {
    
        res.Search.forEach(function(obj){
        $('body').append('<img src="'+obj.poster+'">');
      });
      
      // Reset the input field
      $('input').val('');
        });     
      });
}); 

// Michael's
$(document).ready(function() {

  $('#filter-btn').hide();

  $('form').on('submit', function(e){
    e.preventDefault();
    $('#results').empty();
    var keyword = $('input').val();
    getMovies(keyword);
  });

  function getMovies(keyword) {
    var url = 'http://www.omdbapi.com/?s='+keyword+'&r=json';
    $.get(url)
    .done(function(res) {
      res.Search.forEach(function(obj){
        // $('#results').append('<img src="'+obj.Poster+'">');
        $('#results').append('<li>'+obj.Title+'&nbsp;-&nbsp;'+obj.Year+'</li>');
        $('#filter-btn').show();
      });
      $('input').val('');
    });
  }

    /*
    On button click...
      1. get all movies from the dom
      2. isolate the year
      3. logic to find if year >= 2000
      4. add those movies back to the dom
    */
    $('#filter-btn').on('click', function(){
      var test = $('li').val('');
      console.log(test[0].innerText);
    });

});