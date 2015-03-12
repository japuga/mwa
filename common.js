$("#searchResults").hide();

$("#priceRange").change(function () {
    var x = document.getElementById("priceRange").value;
    //document.getElementById("maxPrice").innerHTML = x;
    $("#maxPrice").attr("value", x);
});

function search(){
	/*
	var src = 	"<div class='container'> " + 
				"	<div class='row'>" +
				"		<p>Home &gt; Search Results</p>" +
				"	</div>" +
				"</div>";
				*/
	$("#searchResults").show();
	$("#pagebody").html($("#searchResults"));
}

