/*Tomás Martínez Arenas*/
/*This script is for read the content that can be change in the "Patitas y Colitas" Site*/

/*The content that can change is:*/
/*== NOSOTROS ==*/
var JSON_FILE_NOSOTROS="../../static/xml/secciones/nosotros.json";//Mision,Vision,Filosofia

var JSON_FILES_LOADED= new Array();
/*This function shows the content in a "jsonfile" base in the "object" selected in a "htmlelementprefix" design
if the json data has already been loaded it's read from the JSON_FILES_LOADED array instead to open the file*/
function showJSONInCard(jsonfile,object,htmlelementprefix){
     if(JSON_FILES_LOADED[jsonfile]==undefined){//The jsondata has not been loaded
        $.getJSON(jsonfile,function(data){
                JSON_FILES_LOADED[jsonfile]=data;
                fillCardWithJSONData(data,object,htmlelementprefix);
            }
        );
     }else{//The jsondata has been already loaded
        fillCardWithJSONData(JSON_FILES_LOADED[jsonfile],object,htmlelementprefix);
     }
}

/*This function fill the card based in the "htmlelementprefix" with the specific json "data"*/
function fillCardWithJSONData(data,object,htmlelementprefix){
    var objectselected=null;
    for(var i=0;i<data.ROOT.length;i++){
        if(data.ROOT[i].apartado.value==object){
            objectselected=data.ROOT[i];
            break;
        }
    }
    if(objectselected!=null){//Fill all the containers with the data:
        //Imagen:
        $("#"+htmlelementprefix+"_Imagen").attr("src",objectselected.imagen.value);
        //Titulo:
         $("#"+htmlelementprefix+"_Titulo").html(objectselected.titulo.value);
        //Texto:
        $("#"+htmlelementprefix+"_Texto").html(objectselected.texto.value);
    }
}