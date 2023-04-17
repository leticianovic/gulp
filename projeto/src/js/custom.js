$(document).ready(function(){
    $('.owl-carousel').owlCarousel();

    // configuração de produtos
    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>');

    $('.featured-item h4').dblclick(function(){
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100'
        });
    });

    /* Ouvinte de eventos .nav-modal-open */
    $('.nav-modal-open').on('click', function(e){

        e.preventDefault();
  
        let elem = $(this).attr('rel')
  
        $('.modal-body').html($('#'+elem).html())
        
        $('.modal-header h5.modal-title').html($(this).text())
  
        let myModal = new bootstrap.Modal($('#modalId'))
  
        myModal.show()
    })

    /*
     * TODO: incrementar a validação
     * - checar se o nome é válido (mais de 2 caracteres)
     * - checar se o email é válido com ao menos um "@" e "."
     * - checar se o cpf é válido com regex
    */

    // Irá verificar se caso os campos estejam vazios irá retorar campo inválido
    function validate(elem){
        if (elem.val() == ''){
            
            console.log('O campo ' + elem.attr('name') + ' é obrigatório')

            elem.parent().find('.text-muted').show()

            elem.addClass('invalid')

            return false
        }
        else {
            elem.parent().find('.text-muted').hide()

            elem.removeClass('invalid')
        }
    }

    function validateNome(nome){
        if(nome.val() <= 2){
            console.log('O campo de nome deve conter ao menos 3 caracteres')

            nome.addClass('invalid')

            return false
        }
        else {
            nome.removeClass('invalid')
        }
    }

    function validateEmail(email) {
        user = email.val().substr(0, email.val().indexOf("@"));
        domain = email.val().substr(email.val().indexOf("@")+ 1, email.val().length);
        
        if ((user.length >= 3) && (domain.length >= 3) && (user.search("@") == -1) && (domain.search("@") == -1) && (user.search(" ") == -1) && (domain.search(" ") == -1) && (domain.search(".") != -1) && (domain.indexOf(".") >= 1) && (domain.lastIndexOf(".") < domain.length - 1)){
            email.removeClass('invalid')
        }
        else {
            console.log('O campo de email deve conter um "@" e ao menos 1 "."')

            email.addClass('invalid')

            return false
        }
    }

    // Serão validos os campos de nome, email e CPF
    $('body').on('submit', '.form', function(e){
        e.preventDefault()

        const inputName = $('#nome')
        const inputEmail = $('#email')
        const inputTelefone = $('#telefone')

        validate(inputName)
        validate(inputEmail)
        validate(inputTelefone)

        validateNome(inputName)
        validateEmail(inputEmail)

        if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid') || inputTelefone.hasClass('invalid')){
            
            console.log('Os campos são obrigatórios!')

            return false
        }
        else {
            $(this).submit()
        }
    })

    // Validar caso tire o campo de foco
    $('body').on('blur', '#nome', function(){
        validate($(this))
        validateNome($(this))
    })
  
    $('body').on('blur', '#email', function(){
        validate($(this))
        validateEmail($(this))
    })

    $('body').on('blur', '#telefone', function(){
        validate($(this))
        $(this).mask('(00) 00000-0000');
     })
     
});