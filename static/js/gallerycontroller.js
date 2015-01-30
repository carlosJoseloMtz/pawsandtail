/*This is the controller for the gallery, it has all the functions used in the "galeria" page.*/

//This function opens an image in a dialog using jquery-ui.
function previewImage(url){
    var image=$("#image");
    image.attr("src",url);
    image.load(function(){
        $("#dialog").dialog({
            modal:true,
            resizable:false,
            draggable:false,
            width:'auto',
            title:'Imagen'
        });
    });
}