// this is our development JavaScript file

$(document).ready(function(){

  for(var i = 0; i < 100; i++){

    $('#projects').append('<div class="col-md-6"><h4>Project ' + (i + 1) + '</h4><p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>');

  }

});
