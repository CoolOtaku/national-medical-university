$(".btn_hiden").click(function() {
    var v = $(this).text();
    switch(v){
        case 'Головна':
            window.location.href = window.location.origin+"/index.html";
            break;
        case 'Контакти':
            window.location.href = window.location.origin+"/contact.html";
            break;
    }
  
})