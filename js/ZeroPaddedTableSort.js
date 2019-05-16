/* Sort an HTML Table in-place, in descending order.
	Uses two fields (columns 1 and 8) of an HTML table to create a unique key.
	Left-pads column 8 so that it can be treated as text instead of a number for sorting purposes.
	Replaces the original table with the sorted table.
	
	Requires jQuery
*/

function sortTable(table) {

     tbody = table.find('tbody');     
     tbody.find('tr').sort(function(a, b) {      
           
           var levelA = ($('td:first', a).text().split(" ")[0]); // "IL4 Solution being created" becomes SL4
           var zeroPaddedA = AddZeros ($('td:nth-of-type(8)', a).text().split(",").join("")); // "3,500" becomes 0000003500
           var A = levelA +""+ zeroPaddedA;
           
           var levelB = ($('td:first', b).text().split(" ")[0]) 
           var zeroPaddedB = AddZeros ($('td:nth-of-type(8)', b).text().split(",").join(""));
           var B = levelB +""+ zeroPaddedB;

           return B.localeCompare(A); 
           
     }).appendTo(tbody);

}  

function AddZeros(s){
     
     var count = 10 - s.length;
     var r = "";
     for(i = 0 ; i < count; i++)
     {
           r += "0";
     }
     return r +""+ s; 
// r+s will always be a string with length 10
// output eg. 0000003500
}
