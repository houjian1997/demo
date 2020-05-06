let timer = null;
$("#header_tip").css("right", -$("#header_tip").width())
timer = setInterval(() => {
    let positionX = $("#header_tip").position().left;
    let selfWidth = $("#header_tip").width();
    let parentWidth = $("#header_tip").parent().width()
    positionX -= 1;
    $("#header_tip").css("right", parentWidth - selfWidth - positionX)
    if (positionX <= -selfWidth) {
        $("#header_tip").css("right", -$("#header_tip").width())
    }
}, 80)