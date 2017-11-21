$(document).ready(function(){
   $(".btn-1").click(function (){
      $('.resume').toggle(1000);
   });

   $(".btn-2").mouseenter(function (){
     $(".other-prj").show(1000);
   });

   $(".btn-2").mouseleave(function (){
     $(".other-prj").hide(1000);
   });
});
