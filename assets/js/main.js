(function($) {
	function resizeHeader() {
		var height = $("#sheet-header-content").outerHeight(true);

		$("#sheet-layer-bottom").height(height);
		$("#sheet-layer-top").css("margin-top", height);
	}

	resizeHeader();
	$(window).resize(resizeHeader);

	$("table:has(thead)").addClass("pure-table pure-table-striped");
	$("table:not(:has(thead))").addClass("pure-table pure-table-horizontal");
}(jQuery));