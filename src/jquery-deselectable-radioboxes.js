jQuery.fn.deSelectable = function () {
  return this.each(function () {
    var elName = $(this).attr("name");
    var checked = $("input[name='" + elName + "']:checked");
    window[elName] = checked.val();
    $(this).on("click", function (e) {
      if ($(this).val() == window[elName]) {
        $(this).prop("checked", false);
        window[elName] = "";
        $(this).trigger("change");
      }
    });
    $(this).on("change", function (e) {
      if ($(this).is(":checked")) {
        window[elName] = $(this).val();
      } else {
        window[elName] = "";
      }
    });
  });
};
