/**
 * Created by jeanfreitas on 23/06/2017.
 */
$(document).ready(function () {
    $("#inc").click(function () {
        $("#exc").css("display", "none");
        $("#inc").attr("disabled", true);
        $("#can").css("display", "inline");
        $("#alt").css("display", "none");
        $("#gra").css("display", "inline");
    });
    $("#can").click(function () {
        $(this).css("display", "none");
        $("#gra").css("display", "none");
        $("#alt").css("display", "inline");
        $("#exc").css("display", "inline");
        $("#inc").attr("disabled", false);
    });
    $("#gra").click(function () {
        $("#inc").attr("disabled", false);
        $(this).css("display", "none");
        $("#exc").css("display", "inline");
        $("#can").css("display", "none");
        $("#alt").css("display", "inline");
    });
    $("#alt").click(function () {
        $("#inc").attr("disabled", true);
        $("#can").css("display", "inline");
        $("#gra").css("display", "inline");
        $("#exc").css("display", "none");
        $(this).css("display", "none");
    });
    $("#exc").click(function () {
        if (confirm("Realmente quer Excluir esse Registro?")) {
            alert("True!");
        } else {
            alert("False!");
        }
    });
});