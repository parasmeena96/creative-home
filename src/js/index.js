
$(document).ready(function () {
    $('#seacrh_').click(function () {
        $('#searchPart').toggle().css({
            "display": "block",
            "margin-top": "2%"
        });
    });
});

// hero slider 

wow = new WOW(
    {
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    }
);
wow.init();
document.getElementById('moar').onclick = function () {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
};
