/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["7 Rings", "Thank You, Next", "Lovely","No Te Contaron Mal"];
var images =["https://i0.wp.com/www.hip-hopvibe.com/wp-content/uploads/2019/01/7-Rings-1.jpg?resize=800%2C440&ssl=1", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Ariana_Grande_Thank_U_Next.png/220px-Ariana_Grande_Thank_U_Next.png","https://i.ytimg.com/vi/V1Pl8CzNzCw/maxresdefault.jpg","https://m.media-amazon.com/images/I/71P5YMUr4WL._SS500_.jpg"];
var artists =["Ariana Grande","Ariana Grande", "Billi Eilish","Christian Nodal"];
var lengths =["3:05","5.31","3:21","2:37"];
var links =["https://www.youtube.com/watch?v=QYh6mYIJG2Y","https://www.youtube.com/watch?v=gl1aHhXnN1k","https://www.youtube.com/watch?v=V1Pl8CzNzCw","https://www.youtube.com/watch?v=2YNwIasgoxw"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
songs.forEach(function(song)
{
    $("#songs").append("<p>"+ song +"</p>");
     
})
images.forEach(function(image)
{
    $("#images").append("<img src= '"+ image +"'>");
     
})
artists.forEach(function(artist)
{
    $("#artists").append("<p>"+ artist +"</p>");
     
})
lengths.forEach(function(length)
{
    $("#lengths").append("<p>"+ length +"</p>");
     
})
links.forEach(function(link)
{
    $("#links").append("<a href='"+ link +"'>Listen</a>");
     
})
}

function emptySongInfo(){ 
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
var sin = $("#song").val();
var iin = $("#image").val();
var ain = $("#artist").val();
var lein =$("#length").val();
var lin = $("#link").val();
songs.push(sin);
images.push(iin);
artists.push(ain);
lengths.push(lein);
links.push(lin);
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
 $("#delete").click(function()
 {
     songs = [];
    images = [];
     artists = [];
     links = [];
     lengths = [];
     $("#images").html('');
     $("#songs").html('');
     $("#artists").html('');
     $("#lengths").html('');
      $("#links").html('');
 });