$(document).ready(function(){
    //$('h1').hide(5000);
    
  for ( var i = 0; i < 5; i++ ) {
    $( '<div class="col-1">' ).appendTo( '#effets' );
  }
    $('#test').click(function() {
      $( "#effets div" ).show(2000);
      $( "#tests div" ).show(2000);
    });
     $( "#effets div" ).click(function() {
      $( this ).hide(2000, function() {
        //$( this ).remove();
      });
    });
$('#animate div').click(function(){
        $(this).animate({
            "left":"300px"
        }, 3000);
        $(this).animate({
            "top":"-300px"
        }, 4000).css('background-color','yellow');
        
//        $(this).animate({
//            "left":"300px",
//            "top":"-300px"
//        }, 2000);
        
