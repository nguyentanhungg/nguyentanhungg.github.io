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
$(document).ready(function() {
    var stt = 0;
    starimg = $("img.slide:first").attr("stt");
    endimg = $("img.slide:last").attr("stt");
    $("img.slide").each(function() {
        if ($(this).is(':visible'))
            stt = $(this).attr("stt");
    });
    $("#next").click(function() {
        if (stt == endimg) {
            stt = -1;
        }
        next = ++stt;
        $("img.slide").hide();
        $("img.slide").eq(next).show();
    });
    $("#prev").click(function() {
        if (stt == 0) {
            stt = endimg;
            prev = stt++;
        }
        prev = --stt;
        $("img.slide").hide();
        $("img.slide").eq(prev).show();
    });
    setInterval(function() {
        $("#next").click();
    }, 3000)
});
$(document).ready(function() {
    var typed = new Typed(".text-slider", {
        strings: ["Blogger", "Creative Lover", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
/* Dark - Sun*/
let colorIcons = document.querySelector(".color-icon"),
    icons = document.querySelector(".color-icon .icons");
let buttons = document.querySelectorAll(".btn");

for (var button of buttons) {
    button.addEventListener("click", (e) => {
        let target = e.target;

        let open = document.querySelector(".open");
        if (open) open.classList.remove("open");

        document.querySelector(".active").classList.remove("active");
        target.classList.add("active");

        let root = document.querySelector(":root");
        let dataColor = target.getAttribute("data-color");
        let color = dataColor.split(" ");

        root.style.setProperty("--white", color[0]);
        root.style.setProperty("--black", color[1]);
        root.style.setProperty("--nav-main", color[2]);
        root.style.setProperty("--switchers-main", color[3]);
        root.style.setProperty("--light-bg", color[4]);

        let iconName = target.className.split(" ")[2];

        let coloText = document.querySelector("#trangchu");

        if (target.classList.contains("fa-moon")) {
            target.classList.replace(iconName, "fa-sun")
            colorIcons.style.display = "none";
            coloText.classList.add("darkMode");
        } else if (target.classList.contains("fa-sun")) {
            target.classList.replace("fa-sun", "fa-moon");
            colorIcons.style.display = "block";
            coloText.classList.remove("darkMode");
            document.querySelector(".btn.black").click();
        }
    });
}