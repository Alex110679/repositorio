<?php 
require_once("../config/conexion.php");
require_once("../model/trabajos_realizados.php");
$trabajos_realizados=new Trabajos_realizados();
switch($_GET["opc"]){
    
    case"mostrar":
        $datos =$trabajos_realizados->get_trabajos_realizadosXid($_POST["idtrabajos_realizados"]);
        if(is_array($datos)==true and count($datos)<>0){
            foreach($datos as $row){
                $output["work_titulo"] = $row["work_titulo"];
                $output["work_descripcion"] = $row["work_descripcion"];
                $output["work_fecha"] = $row["work_fecha"];
                $output["work_rol"] = $row["work_rol"];
            }
            echo json_encode($output);
        }
        break;

    case"modificar":
        $trabajos_realizados->update_trabajos_realizados(
            $_POST["idtrabajos_realizados"],
            $_POST["work_titulo"],
            $_POST["work_descripcion"],
            $_POST["work_fecha"],
            $_POST["work_rol"],
        );
        break;

    case"guardaryeditar":
        if(empty($_POST["idtrabajos_realizados"])){
            $trabajos_realizados->insert_trabajos_realizados($_POST["work_titulo"],$_POST["work_descripcion"],$_POST["work_fecha"],$_POST["work_rol"]);
        }else{
            $trabajos_realizados->update_trabajos_realizados($_POST["idtrabajos_realizados"],$_POST["work_titulo"],$_POST["work_descripcion"],$_POST["work_fecha"],$_POST["work_rol"]);
        }
        break;

    case"eliminar":
        $trabajos_realizados->delete_trabajos_realizados($_POST["idtrabajos_realizados"]);
        break;

    case"listar":
        $datos=$trabajos_realizados->get_trabajos_realizados();
        $data=Array();
        foreach($datos as $row){
            $sub_array=array();
            $sub_array[]=$row["work_titulo"];
            $sub_array[]=$row["work_descripcion"];
            $sub_array[]=$row["work_fecha"];
            $sub_array[]=$row["work_rol"];

            $sub_array[]='<button type="button" onClick="editar('.$row["idtrabajos_realizados"].');" id="'.$row["idtrabajos_realizados"].'"
            class="btn btn-outline-warning btn-icon"><div><i class="bx bx-edit-alt"></i></div></button>';
            $sub_array[]='<button type="button" onClick="eliminar('.$row["idtrabajos_realizados"].');" id="'.$row["idtrabajos_realizados"].'"
            class="btn btn-outline-danger btn-icon"><div><i class="bx bx-trash"></i></div></button>';
            $data[]=$sub_array;            
        }
        $results=array(
            "sEcho"=>1,
            "iTotalRecords"=>count($data),
            "iTotalDisplayRecords"=>count($data),
            "aaData"=>$data);
        echo json_encode($results);
        

        break;
}
?>