student_array=[];
function submit() {
   var display_array=[];
   for (var i = 1; i <= 4; i++) {
  var studentname=document.getElementById("name_of_the_student_"+i).value;
  student_array.push(studentname) ;  
       
   } 
   var l=student_array.length;
   for (var i = 0; i < l; i++) {
       display_array.push("<h4> name-"+student_array[i]+"</h4>");

   }
document.getElementById("display_name_with_commas").innerHTML=display_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
var remove_commas=display_array.join(" ");
document.getElementById("diplay_name_without_commas").innerHTML=remove_commas;
}
function sorting(){
    student_array.sort();
     var display_array=[];
     var l=student_array.length;
   for (var i = 0; i < l; i++) {
       display_array.push("<h4> name-"+student_array[i]+"</h4>");

   }
var remove_commas=display_array.join(" ");
document.getElementById("diplay_name_without_commas").innerHTML=remove_commas;
}