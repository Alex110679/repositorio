var usu_id = $('#usu_idx').val();

function init(){
    /*$("#socialMedia_form").on("submit",function(e){ 
        guardaryeditar(e);
    });*/
}

function guardaryeditar(e){
    e.preventDefault();
    var formData = new FormData($("#socialMedia_form")[0]);/* se cambio social_media ojo*/
    
    $.ajax({
        url:"/thiago/controller/social_media.php?opc=guardaryeditar",
        type:"POST",
        data:formData,
        contentType:false,
        processData:false,

        success: function(data){
            console.log(data);
            $('#socialMedia_data').DataTable().ajax.reload();
            $('#Modalsocialmedia').modal('hide');

            Swal.fire({
                title:'Correcto!',
                text:'Se registro Correctamente',
                icon: 'success',
                confirmButtonText:'Aceptar'
            })
        }
    });
}

$(document).ready(function(){
    
    $('#socialMedia_data').DataTable({
        "aProcessing":true,
        "aServerSide":true,
        dom: 'Bfrtip',
        buttons:[
            'excelHtml5',
            'csvHtml5',
        ],
        "ajax":{
            url:"/thiago/controller/social_media.php?opc=listar",
            type:"post",
        },
        "bDestroy":true,
        "responsive":true,
        "bInfo":true,
        "iDisplaylength":15,
        "order":[[0,"desc"]],
        "language":{
            "sProcessing":      "Procesando...",
            "sLengthMenu":      "Mostrar _MENU_ registros",
            "sZeroRecords":     "No se encontraron resultados",
            "sEmptyTable":      "Ningún dato disponible en esta tabla",
            "sInfo":            "Mostrando registro del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":       "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":    "(filtrado de un total de _MAX_ registros",
            "sInfoPostFix":     "",
            "sSearch":          "Buscar:",
            "sUrl":             "",
            "sInfoThousands":   ",",
            "sLoadingRecords":  "Cargando...",
            "oPaginate":{
                "sFirst":       "Primero",
                "sLast":        "Ultimo",
                "sNext":        "Siguiente",
                "sPrevious":    "Anterior",
            },
            "oAria":{
                "sSortAscending":   ":Activar para ordenar la columna de manera ascendente",
                "sSortDescending":   ":Activar para ordenar la columna de manera descendente",
            }
        },
            
    });
});
function nuevo(){
    $('#titulo_modal').html('Nueva Red Social');
    //$('#socialMedia_form')[0].reset();
    $('#Modalsocialmedia').modal('show');
}

function editar (idsocial_media){
    $.post("/thiago/controller/social_media.php?opc=mostrar",{idsocial_media:idsocial_media},function (data){
        data = JSON.parse(data);
        console.log(data)
        $('#idsocial_media').val (data.idsocial_media);
        $('#socmed_icono').val (data.socmed_icono);
        $('#socmed_url').val (data.socmed_url);
    });
    $('#titulo_modal').html('Editar red');
    $('#Modalsocialmedia').modal('show');
}

function eliminar(idsocial_media){
    Swal.fire({
        title:'Eliminar!',
        text:'Desea eliminar el Registro?',
        icon:'error',
        showCancelButton:true,
        /*ShowCancelButton:true,*/
        confirmButtonText:'Aceptar',
        cancelButtonText:'Cancelar',
    }).then((result)=>{
        if(result.value){
            $.post("/thiago/controller/social_media.php?opc=eliminar",{idsocial_media:idsocial_media},function(data){
                $('#socialMedia_data').DataTable().ajax.reload();
                Swal.fire({
                    title:'Correcto!',
                    text:'Se elimino Correctamente',
                    icon:'success',
                    confirmButtonText:'Aceptar'
                })
            });
        }
    });
}