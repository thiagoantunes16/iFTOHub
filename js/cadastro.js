$(function () {
    var $resetCadastro = $("#reset").validate();
    $resetCadastro.resetForm();

    var $formCadastro = $(".form-signin");
    $.validator.addMethod("noSpace", function(value, element){
        return value == "" || value.trim().length != 0
    }, "Espaços não são permitidos" );
    
    if ($formCadastro.length) {
        $formCadastro.validate({
            rules: {
                nome: {
                    required: true,
                    noSpace: true,
                },
                email: {
                    required: true,
                    email: true,
                    noSpace: true
                },
                senha: {
                    required: true,
                    noSpace: true
                },
                confirma: {
                    required: true,
                    equalTo: "#campoSenha",
                    noSpace: true
                },
                campus: {
                    required: true
                }
            },
            messages: {
                nome: {
                    required: "Nome completo é necessário"
                },
                email: {
                    required: "E-mail é indispensável",
                    email: "Por favor, digite um e-mail válido!"
                },
                senha: {
                    required: "Senha é importante."
                },
                confirma : {
                    required: "Confirme sua senha",
                    equalTo: "Por favor, digite a mesma senha de novo"
                }
            }
        })
    }
});