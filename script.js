let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
$(document).ready(function() {
    $('#toggle').click(function() {
        $('nav').slideToggle();
    });

})