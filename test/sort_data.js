var data = { information :[] };
var row_count = -1;
var ascending = false;
$(function(){
	$("#data_form").submit(function(e){
		e.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		data.information.push({
			"name" : name,
			"email" : email
		});
		row_count++;
		//console.log(data);
		displayData(data.information, row_count);

	});

	// Call the sortable function when any header of the table is clicked
	$(".sort").click(function(){
		console.log("hello");
		sortable($(this));
		/*$.each(data.information, function(key,value){
			console.log(value.name);
		});*/
	});

});

//Insert the name and email into the table
function displayData(this_data, row_count){
	//console.log(this_data[row_count].name);
	var data_row = $('<tr />');
	var id_cell = $('<td />').text(row_count+1);
	var name_cell = $('<td />').text(this_data[row_count].name);
	var email_cell = $('<td />').text(this_data[row_count].email);
	data_row.append(id_cell).append(name_cell).append(email_cell);
	$("#tbody").append(data_row);
}

//Sorts the table 
function sortable(this_item){
	var rows = $("table tbody tr").get();
	var get_class = this_item.hasClass('asc') ? 'desc' : 'asc';
    $('.sort').removeClass('asc').removeClass('desc');
    this_item.addClass(get_class);
	//console.log($(this).prevAll('td').length);
	var column_index = this_item.prevAll('td').length;
	//displaySortData($(this), column_index);
	//console.log(column_index);
	rows.sort(function(a,b){
       	var first_value = $(a).find("td").eq(column_index).text();
       	var second_value = $(b).find("td").eq(column_index).text();

       	//console.log(first_value);
       	if (ascending) {
   			if (first_value > second_value) return -1;
   			if( first_value < second_value) return 1;
		} else {
   			if (first_value > second_value) return 1;
   			if( first_value < second_value) return -1;
		}
   		return 0;
        	
   	});
   	if (ascending) {
   		ascending = false; 
   	} else {
   		ascending = true; 
   	}
   	$.each(rows, function(data, row){
   		$("#data").append(row);
   	});
}
