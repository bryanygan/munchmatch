function GOOGLEIMAGESEARCH(query) {
  query = encodeURIComponent(query);
  
  var apiKey = 'AIzaSyB6TGVlNYYLaaQbtqiTb8vth7TOCvE2shI'; // Replace with your own API key
  var cx = '871c638868f774743'; // Replace with your own Custom Search Engine ID
  var url = "https://www.googleapis.com/customsearch/v1?q=" + query + "&cx=" + cx + "&key=" + apiKey + "&searchType=image";
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  if (data.items && data.items.length > 0) {
    return data.items[0].link;
  } else {
    return "No image found.";
  }
}