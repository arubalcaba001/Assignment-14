 // from data.js
 var tableData = data;

 //Select "Filter Table" button  and body
 var filterTableButton = d3.select("#filter-btn"); 
 var tbody = d3.select("tbody"); 

 //set the data query
 var searchDate="tbd"; 

 //Click for the "Filter Table" button
 filterTableButton.on("click", function (){
     d3.event.preventDefault();
     var inputField = d3.select("#datetime");
     var searchDate = inputField.property ("value");
     var filteredData = tableData.filter(function(sighting){
         return sighting.datetime === searchDate;
     });
     tbody.text(""); 
     filteredData.forEach(record=> {
         var row = tbody.append("tr"); 
         Object.entries(record).forEach(([key, value]) => {
             row.append("td").text(value); 
         });
     });
 });