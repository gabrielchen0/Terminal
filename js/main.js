//derictory

hljs.initHighlightingOnLoad();

$(document).ready(function(){
                  $("h2,h3,h4,h5,h6").each(function(i,item){
                                           var tag = $(item).get(0).localName;
                                           $(item).attr("id","dir"+i);
                                           $("#category").append('<a class="new'+tag+'" href="#dir'+i+'">'+$(this).text()+'</a></br>');
                                           $(".newh2").css("margin-left",25);
                                           $(".newh3").css("margin-left",45);
                                           $(".newh4").css("margin-left",65);
                                           $(".newh5").css("margin-left",85);
                                           $(".newh6").css("margin-left",105);
                                           });
                  });

//welcome
$(function(){
  $("#index-typed").typed({
                          strings: ['At last ^800 <br>Welcome ^500 <br>I know why you are here. ^500 <br>I know ^300 what you ve been doing^100.^100.^100.^100 ^500 <br>why you hardly^300 sleep,^500 <br>why you live alone,^500 <br>and why night^500 after night,^500 you sit by your computer.^500 <br>You are looking for him.^500 <br>I know^300 because I was once looking for the same thing.^500 <br>And when he found me,^500 <br>he told me I wasnt^300 really looking for him.^500 <br>I was looking for^300 an answer.^500 <br>Its the question^200 that drives us.^500 <br>Its the question that brought you here.^500 <br>You know the^280 question,^500 <br>Just as I did.','Now,^500 Which one would you like to choose?^500 <p><a href="/red/"><span class="red"> RED </span></a> ^500 <br><a href="/blue/"><span class="blue"> BLUE </span></a></p>'],
                          typeSpeed: 100,
                          startDelay: 500,
                          backDelay: 800,
                          cursorChar: "|",
                          });
  });

//terminal
function keyDown(e) {
    var keycode = e.which;
    var realkey = String.fromCharCode(e.which);
        console.log(realkey);
    }

document.onkeydown = keyDown;


//the first page
function notRun(){
    return false;
}


$(function(){
  $("#blue-pwd").click(function(){
                  $(function(){
                    $("#blue-pwd-typed").typed({
                                           strings: ['~/../Terminal/_Blue/'],
                                           typeSpeed: 10,
                                           startDelay: 500,
                                           cursorChar: " ",
                                           });
                    });
                  });
});



$(function(){
  $("#blue-ls").click(function(){
                       $(function(){
                         $("#blue-ls-typed").typed({
                                                strings: [' . .. posts/ about/ '],
                                                typeSpeed: 10,
                                                startDelay: 500,
                                                cursorChar: " ",
                                                });
                         });
                       });
  });


$(function(){
  $("#red-ls").click(function(){
                      $(function(){
                        $("#red-ls-typed").typed({
                                                  strings: [' . .. posts/ about/ '],
                                                  typeSpeed: 10,
                                                  startDelay: 500,
                                                  cursorChar: " ",
                                                  });
                        });
                      });
  });

$(function(){
  $("#red-pwd").click(function(){
                      $(function(){
                        $("#red-pwd-typed").typed({
                                                  strings: ['~/../Terminal/_Red/'],
                                                  typeSpeed: 10,
                                                  startDelay: 500,
                                                  cursorChar: " ",
                                                  });
                        });
                      });
  });


//404 page
$(function(){
  $("#notfound-content").typed({
                          strings: ['Then ^800 <br>You are here ^500 <br>Its a really^100 small site^500 <br>Sometimes^300 Just sometimes^800 <br>I want to distory these all^800 <br>and now you know my^300 Secret^200 Secret.'],
                          typeSpeed: 100,
                          startDelay: 500,
                          backDelay: 800,
                          cursorChar: " ",
                          });
  });







