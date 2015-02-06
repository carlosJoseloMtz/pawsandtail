/*Tomás Martínez Arenas*/
/*This is the controller for the gallery, it has all the functions used in the "galeria" page.*/

//This function opens an image in a dialog using bootstrap modal.
function previewImage(event){
   $("#myModal").modal('show');
   updateImageDialog(event.currentTarget.getAttribute("id"),event.currentTarget.getAttribute("image_large"),event.currentTarget.getAttribute("alt"));
}
//This function load the "next/prev" image and title based in the current image preview in the carousel
$("#modalCarousel").click("slid",function(event){
    var image_selected=event.target.getAttribute('data-slide');
    var current_image_index=   $('#carouselimage').attr("current_image").substring(5,6);
    var initial_current_image_index=   $('#carouselimage').attr("current_image").substring(5,6);
    if(image_selected=="prev"){
        if($("#Image"+(--current_image_index)).length>0){
             updateImageDialog("Image"+current_image_index,$("#Image"+current_image_index).attr("image_large"),$("#Image"+current_image_index).attr("alt"));
        }else{
            current_image_index=initial_current_image_index;
        }
    }else if(image_selected=="next"){
        if($("#Image"+(++current_image_index)).length>0){
             updateImageDialog("Image"+current_image_index,$("#Image"+current_image_index).attr("image_large"),$("#Image"+current_image_index).attr("alt"));
        }else{
            current_image_index=initial_current_image_index;
        }
    }
});
//This function updates the dialog image and properties in te carousel
function updateImageDialog(current_image,src,title){
   $('#carouselimage').attr("current_image",current_image);
   $('#carouselimage').attr("src",src);
   $('#myModalLabel').html(title);
}
//This function loads a group of "n" more images from the collection to the gallery
//Note: Just for testing now the "test" element is been cloned.
function loadMoreImages(){
    var divclone=document.getElementById("test").cloneNode(true);
    var limit=divclone.getElementsByTagName("img").length;
    var last_index=parseInt(divclone.getElementsByTagName("img")[limit-1].getAttribute("id").substring(5,6));
    for(var r=0;r<limit;r++){
        divclone.getElementsByTagName("img")[r].setAttribute("id","Image"+(last_index+r+1));
    }
    document.getElementById("test").setAttribute("id","");
    document.getElementById("galeria").appendChild(divclone);
}