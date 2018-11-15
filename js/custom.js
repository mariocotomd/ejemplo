//        $(document).on('click', '#butonsubmit', function(){
//            var nombre, apellido, asunto, correo;
//
//            nombre = $('#nombre').val();
//            apellido = $('#apellido').val();
//            asunto = $('#asunto').val();
//            correo = $('#correo').val();
//
//            if(nombre === ''){
////                alert("ejemplo de nombre");
//                $('div .box-input').insertBefore('text');
//            }else {
//                alert("campo lleno");
//            }
//
//        });


/* -----------Signicados de Funciones----------- */

/*.trim() = con esto estamos indicando que nos quite los espacios al rededor */

/*.length = lo utilizamos para que el usuario */

/*.on = adjunte una función de controlador de eventos para uno o más eventos a los elementos
 seleccionados.*/

/*.on('input', function () {
 this.value = this.value.replace(/[^0-9]/g, '');
 }); Esto significa que cuando el usuario toque la tecla de texto la funcion lo remplace por numeros*/

/* change(es hablar de cambio) vincule un controlador de eventos al evento "cambiar" de JavaScript, o active ese evento en un elemento.*/

/* keypress active ese evento en un elemento. */


/* ------------------------------------------- */

$(document).ready(function () {
    
    $('input[type="submit"]').attr('disabled', 'disabled').addClass('desabilitado');

    $('input[type="text"]').keypress(function () {
        if($(this).val()!= ''){
            $('input[type="submit"]').removeAttr('disabled').removeClass('desabilitado');
        }
    });

    $('textarea').keypress(function () {
        if($(this).val()!= ''){
            $('input[type="submit"]').removeAttr('disabled').removeClass('desabilitado');
        }
    });


    $('#butonsubmit').click(function () {

        var nombre, apellido, asunto, telefono, correo, mensaje;

        nombre = $('#nombre').val().trim();
        apellido = $('#apellido').val().trim();
        asunto = $('#asunto').val().trim();
        telefono = $('#telefono').val().trim();
        correo = $('#correo').val().trim();
        mensaje = $('#mensajes').val().trim();


        // if(nombre.length < 1 || apellido.length < 1 || asunto.length < 1 || telefono.length < 1 || correo.length < 1) {
        //     $('input').addClass('campovacio');
        // }

        /******** Nombre *******/
        if(nombre.length < 1){
            $('#mnombre').fadeIn();
            $('#nombre').addClass('campovacio');
            return false;
        }else{
            $('#mnombre').fadeOut();
            $('#nombre').removeClass('campovacio').addClass('campolleno');
        }

        /******** Apellido *******/
        if(apellido.length < 1) {
            $('#mpellido').fadeIn();
            $('#apellido').addClass('campovacio');
            return false;
        }else {
            $('#mpellido').fadeOut();
            $('#apellido').removeClass('campovacio').addClass('campolleno');
        }

        /******** Asunto *******/
        if(asunto.length < 1) {
            $('#masunto').fadeIn();
            $('#asunto').addClass('campovacio');
            return false;
        }else {
            $('#masunto').fadeOut();
            $('#asunto').removeClass('campovacio').addClass('campolleno');
        }

        /******** telefono *******/
        if(telefono.length < 1) {
            $('#mtelefono').fadeIn();
            $('#telefono').addClass('campovacio').on('input', function () {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
            return false;
        }else {
            $('#mtelefono').fadeOut();
            $('#telefono').removeClass('campovacio').addClass('campolleno');
        }

        /******** Correo *******/
        if(correo.length < 1) {
            $('#mcorreo').fadeIn();
            $('#correo').addClass('campovacio');
            return false;
        }else {
            $('#mcorreo').fadeOut();
            $('#correo').removeClass('campovacio').addClass('campolleno');
        }

        /******** Mensaje *******/
        if(mensaje.length < 1) {
            $('#mmensaje').fadeIn();
            $('#mensajes').addClass('campovacio');
            return false;
        }else {
            $('#mmensaje').fadeOut();
            $('#mensajes').removeClass('campovacio').addClass('campolleno');
        }



    });/* End #butonsubmit */


    /******** Validando campo de telefono, email *******/
        $('#telefono').attr('maxlength', 8);

    /*Cambiando el Color de border a verde cuando el usuario este llenando un campo de lo
    contrario aparecera el tooltip y desaparecera cuando llene el campo y pase a otro*/

        $('#nombre').change(function () {
            if($('#nombre').removeClass('campovacio').addClass('campolleno')){
                $('#mnombre').fadeOut();
                return false;
            }
        });

        $('#apellido').change(function () {
            if($('#apellido').removeClass('campovacio').addClass('campolleno')) {
                $('#mpellido').fadeOut();
                return false;
            }
        });

        $('#asunto').change(function () {
            if($('#asunto').removeClass('campovacio').addClass('campolleno')) {
                $('#masunto').fadeOut();
                return false;
            }
        });

        $('#telefono').change(function () {
            if($('#telefono').removeClass('campovacio').addClass('campolleno')) {
                $('#mtelefono').fadeOut();
                return false;
            }
        });

        $('#correo').change(function () {
            if($('#correo').removeClass('campovacio').addClass('campolleno')) {
                $('#mcorreo').fadeOut();
                return false;
            }
        });

        $('#mensajes').change(function () {
            if($('#mensajes').removeClass('campovacio').addClass('campolleno')) {
                $('#mmensaje').fadeOut();
                return false;
            }
        });


        // $('#butonsubmit').submit(function () {
        //
        // });


});

