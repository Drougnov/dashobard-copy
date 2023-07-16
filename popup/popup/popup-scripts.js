function initiate_popup(args) {
    let target = args.target || false,
        overlay_color = args.overlay_color || false;
    if (!target) {
        return false;
    }

    if (overlay_color) {
        $(target).css("background-color", overlay_color);
    }

    popup_fade_in($(target));

    $(target).on("click", function (e) {
        if ($(e.target).hasClass("DuKSh")) {
            popup_fade_out($(this));
        }
    });

    $(target)
        .find(".AYaOY")
        .on("click", function () {
            popup_fade_out($(this).closest(".DuKSh"));
        });

    $(target)
        .find(".AYaOY")
        .on("click", function () {
            popup_fade_out($(this).closest(".DuKSh"));
        });

    $(target)
        .find("[type=submit]")
        .on("click", function (e) {
            e.preventDefault();
            $(this).closest(".DuKSh").find(".iDzey").addClass("gsCWf");
        });
}

function popup_fade_in($ele) {
    $ele.addClass("gsCWf");
    $("body").css("overflow", "hidden");
}

function popup_fade_out($ele) {
    $ele.removeClass("gsCWf");
    $("body").css("overflow", "auto");
}
