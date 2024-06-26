var usu_id = $('#usu_idx').val();

function init(){
    /*$("#trabajos_realizados_form").on("submit",function(e){ 
        guardaryeditar(e);
    });*/
}

function guardaryeditar(e){
    e.preventDefault();
    var formData= new FormData($("#trabajos_realizados_form")[0]);
    
    $.ajax({
        url:"/thiago/controller/trabajos_realizados.php?opc=guardaryeditar",
        type:"POST",
        data:formData,
        contentType:false,
        processData:false,

        success: function(data){
            console.log(data);
            $('#trabajos_realizados_data').DataTable().ajax.reload();
            $('#Modaltrabajos_realizados').modal('hide');

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
    $('#trabajos_realizados_data').DataTable({
        "aProcessing":true,
        "aServerSide":true,
        dom: 'Bfrtip',
        buttons:[
            'excelHtml5',
            'csvHtml5',
        ],
        "ajax":{
            url:"/thiago/controller/trabajos_realizados.php?opc=listar",
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
    $('#titulo_modal').html('Trabajos Realizados');
    //$('#socialMedia_form')[0].reset();
    $('#Modaltrabajos_realizados').modal('show');
}

function editar (idtrabajos_realizados){
    $.post("/thiago/controller/trabajos_realizados.php?opc=mostrar",{idtrabajos_realizados:idtrabajos_realizados},function (data){
        data = JSON.parse(data);
        
        $('#idtrabajos_realizados').val (data.idtrabajos_realizados);
        $('#work_titulo').val (data.work_titulo);
        $('#work_descripcion').val (data.work_descripcion);
        $('#work_fecha').val (data.work_fecha);
        $('#work_rol').val (data.work_rol);
    });
    $('#titulo_modal').html('Editar red');
    $('#Modaltrabajos_realizados').modal('show');
}

function eliminar(idtrabajos_realizados){
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
            $.post("/thiago/controller/trabajos_realizados.php?opc=eliminar",{idtrabajos_realizados:idtrabajos_realizados},function(data){
                $('#trabajos_realizados_data').DataTable().ajax.reload();
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