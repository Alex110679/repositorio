<div id="Modalinformacion_personal" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content bd-0">
            <div class="modal-header pd-y-20 pd-x-25">
                <h6 id="titulo_modal" class="tx-14 mg-b-0 tx-uppercase tx-inverser tx-bold"></h6>
            </div>
            <!----formulario mantenimiento-->
            <form method="post" id="informacion_personal_form">
                <div class="modal-body">
                    
                    <input type="hidden" name="idinformacion_personal" id="idinformacion_personal"/>
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label class="form-control-label">F. Nacimiento:<span class="tx-danger">*</span></label>
                            <input class="form-control" id="info_nacimiento" type="text" name="info_nacimiento"required/>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label class="form-control-label">Celular:<span class="tx-danger">*</span></label>
                            <input class="form-control" id="info_celular" type="text" name="info_celular"required/>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label class="form-control-label">Email:<span class="tx-danger">*</span></label>
                            <input class="form-control" id="info_email" type="text" name="info_email"required/>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label class="form-control-label">Direccion:<span class="tx-danger">*</span></label>
                            <input class="form-control" id="info_direccion" type="text" name="info_direccion"required/>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label class="form-control-label">Ocupacion:<span class="tx-danger">*</span></label>
                            <input class="form-control" id="info_ocupacion" type="text" name="info_ocupacion"required/>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" name="action" value="add" class="btn btn-outline-primary tx-11 tx-uppercase pd-y-12 pd-x-2">Guardar</button>
                    <button type="reset" class="btn btn-outline-secondary tx-11 tx-uppercase pd-y-12 pd-x-25 tx-mont tx-medium" aria-label="Close" aria-hidden="true" data-dismiss="modal">cerrar</button>
                </div>
            </form>
        </div>
    </div>
</div>    