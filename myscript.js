$(document).ready(function(){
  //var name = prompt('What is your name?');
  //alert('Hi there, ' + name + '.');
  //$('li:odd').append('...is super rad!');
  //$('ul').prepend('<li>Nate is not super charming.</li>');
  $('p').text('What am I doing here?');
  $('#destruct').click(function(){
    var answer = prompt('Are you sure? Y/N:');
    if (answer === 'Y'){
      $('body').html('<h1>YOU KILLED IT</h1>');
    } else {
      alert('Good decision.');
    }
    });
  $('#vanilla').click(function(){
    $('body').removeClass().addClass('vanilla');
  });
  $('#chocolate').click(function(){
    $('body').removeClass().addClass('chocolate');
  });

})