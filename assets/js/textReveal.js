var $el, $ps, $up, totalHeight;

$(".hidden-box .button").click(function () {
    totalHeight = 0;

    $el = $(this);
    $p = $el.parent();
    $up = $p.parent();
    $ps = $up.find("p:not('.read-more')");

    // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
    $ps.each(function () {
        totalHeight += $(this).outerHeight();
    });

    $up
        .css({
            "height": $up.height(),
            "max-height": 9999,
            "color": "#333333",
        })
        .animate({
            "height": totalHeight,
        });

    $ps.animate({
        "opacity": 0.9
    });

    // fade out read-more button
    $p.fadeOut();

    // prevent jump-down
    return false;

});