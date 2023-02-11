$(document).ready(function () {

  let url = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=d18695987d2b4c6b930bda6836da659f";

  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",

      success: function (newsdata) {
        let output = "";
        let latestNews = newsdata.articles;
        for (var i in latestNews) {
          if(i >1 && i<= 5){
            let time_pub = latestNews[i].publishedAt;
            time_pub = time_pub.slice(0,10)

            output += `
          <div class="py-8 flex flex-wrap md:flex-nowrap">
          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <img src ="${latestNews[i].urlToImage}" class ="pr-5">
            <span class="mt-1 text-black-500 text-sm pl-16">${time_pub}</span>

          </div>
          <div class="md:flex-grow">
            <h2 class="text-xl font-medium text-gray-900 title-font mb-2"></${latestNews[i].title}h2>
            <p class="leading-relaxed">${latestNews[i].description}</p>
            
            <a href="${latestNews[i].url}" class="text-indigo-500 inline-flex items-center mt-4">Learn More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>  
            </a>
          </div>
        </div>
          `;
          }
        }
      if (output !== "") {
        $("#newsResults").html(output);
      }
    }
  })
});