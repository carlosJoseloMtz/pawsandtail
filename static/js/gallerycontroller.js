/*This is the controller for the gallery, it has all the functions used in the "galeria" page.*/

//This function opens an image in a dialog using jquery-ui.
function previewImage(event){
   $("#myModal").modal('show');
   $('#carouselimage').attr("current_image",event.currentTarget.getAttribute("id"));
}