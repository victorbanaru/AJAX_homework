$(onHtmlLoaded)

function onHtmlLoaded() {
  console.log('HTML loaded')
  
   
  var getWeatherData = function (query) {
    var url = `https://www.metaweather.com/api/location/search/?query=` + query
    $.ajax({
      url: url,
      method: 'GET',
      success: manageData
    })
  }
  
  $('#ajax_call').on('click', function() {
    var query = $('input').val()
    getWeatherData(query)
    console.log(query);
  })
  
  function manageData (data) {
    $(".container").html(renderHtml(data))
  }
  
  function renderHtml (data) {
    var html = `<ul>`
    for (i = 0; i<data.length; i++) {
    console.log('Title', data[i].title);
     var name = data[i].title;
     var type = data[i].location_type;
     var woeid = data[i].woeid;
     console.log(name, type, woeid);
     html += `<li>` + name + " , " + type + `</li>`
    }
    
    html += `</ul>`
    return html;
  } 
}