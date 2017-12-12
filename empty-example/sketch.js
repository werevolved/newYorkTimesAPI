

var apiPath = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=';

var apiKey = '&api-key=fdc5a395ba7141269816dce9388c2ad2';
var dateParam = '&begin_date=20170101&end_date=20171231'
function setup() {
  noCanvas();

  var button = select('#submit');
  button.mousePressed(infoGrab);

  input = select('#topic');
  
}

function infoGrab(){
	var url = apiPath + input.value() + apiKey + dateParam;
  loadJSON(url, gotData);
}

function gotData(data){

	var articles = data.response.docs;


	for (var i = 0; i < articles.length; i++) {
		createElement('h1', articles[i].headline.main);
		createP(articles[i].snippet);
		createA(articles[i].web_url, 'Link to article');
	}

	


	console.log(data.response.docs[1].headline.main);
}