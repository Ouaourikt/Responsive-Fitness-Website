$('#navbar a, .btn').on("click", function(event) {
    if(this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;
        $("html, body").animate({scrollTop: $(hash).offset().top - 100},800);
    }
});

/********opacity**********/
window.addEventListener("scroll", function() {
    if(window.scrollY  > 150 ) {
        document.querySelector("#navbar").style.opacity = 0.9;
        document.querySelector('#navbar').style.background = 'rgba(0,0,0,0.2)';
        
        
    } 
    else {
        document.querySelector("#navbar").style.opacity = 1;
        document.querySelector('#navbar').style.background = '#4C4556';

    }
});

//menu///
$(document).ready(function() {
    $('#icon').click(function() {
        $('ul').toggleClass('show');
    });
});















