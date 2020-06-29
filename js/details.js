
 
  
function myFunction() { 
    modal.style.display = "block";
}
     
var modal = document.getElementById("myModal");  
var span = document.getElementsByClassName("close")[0];
     
span.onclick = function() {
  modal.style.display = "none";
} 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
    }

    function showhideprev() {
        if (document.getElementById('backgroundgreyprev').style.display == 'none') {

            $("#toggleleftarrayimgprev").addClass("rotate");
        } else {

            $("#toggleleftarrayimgprev").removeClass("rotate");
        }
        $('#backgroundgreyprev').toggle('hide');
    }
    
    function showhide() {
        if (document.getElementById('toggleleftarray').style.display == 'none') {

            $("#toggleleftarrayimg").addClass("rotate");
        } else {

            $("#toggleleftarrayimg").removeClass("rotate");
        } 
        $('.toggleleftarray').toggle('hide');
    }

    function showrighthide() { 
        if (document.getElementById('hiderightpanel').style.display == 'none') {
     
            $("#rightimagesarrow").addClass("rotate");
        } else { 
            $("#rightimagesarrow").removeClass("rotate");
        }
        
        $('.hiderightpanel').toggle('hide');
       } 
