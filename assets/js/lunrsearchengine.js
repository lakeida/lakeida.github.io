
var documents = [{
    "id": 0,
    "url": "http://datawhispering.net/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://datawhispering.net/about",
    "title": "Lakeida Sprenkle",
    "body": "About Me? Skillsskills list "
    }, {
    "id": 2,
    "url": "http://datawhispering.net/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://datawhispering.net/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Could more Peace bring more Popularity?                              :               Are people in favor of leaving the EU, opposed to changing 007?:                                                                      10 Feb 2020                                                                                                                             Makeover Monday                                                                                                                                                                                                                                                                                                                                                                    Brexit 007, in favor of change or more control?                              :               Are people in favor of leaving the EU, opposed to changing 007? This week’s Makeover Monday challenge. :                                                                      03 Feb 2020                                                                                                                             Makeover Monday                                                                                                                                                                                                            All Posts:                                                                                                     Could more Peace bring more Popularity?              :       Are people in favor of leaving the EU, opposed to changing 007?:                              10 Feb 2020                                                                     Makeover Monday                                                                                                                                                              Brexit 007, in favor of change or more control?              :       Are people in favor of leaving the EU, opposed to changing 007? This week’s Makeover Monday challenge. :                              03 Feb 2020                                                                     Makeover Monday                                                                                                                                                              Bridges Per Capita              :       2018, 2019, 2020 Bridges To Prosperity:                              27 Jan 2020                                                                     Makeover Monday                                                                                                                                                              Do as I do and as I Say              :       Since 2008 our children’s diet, on average, has been consistently higher in free sugars than adults. :                              20 Jan 2020                                                                     Makeover Monday                                                                                                                                                              Pesticides used in USA              :       I know that we have this hate, hate relationship with pie charts. But I honestly believe that they have their special use case. Like when you really want to send. . . :                              13 Jan 2020                                                                     Makeover Monday                                                                                                                                                              Outdoor sports maintain a steady lead over indoor sports              :       Sports. Well…:                              06 Jan 2020                                                                     Makeover Monday                                                                         &laquo; Prev       1        2      Next &raquo; "
    }, {
    "id": 4,
    "url": "http://datawhispering.net/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://datawhispering.net/posts/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Posts:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "http://datawhispering.net/posts/makeover-monday-2020-week-06/",
    "title": "Could more Peace bring more Popularity?",
    "body": "2020/02/10 - Are people in favor of leaving the EU, opposed to changing 007? "
    }, {
    "id": 7,
    "url": "http://datawhispering.net/posts/makeover-monday-2020-week-05/",
    "title": "Brexit 007, in favor of change or more control?",
    "body": "2020/02/03 - Are people in favor of leaving the EU, opposed to changing 007? This week’s Makeover Monday challenge. "
    }, {
    "id": 8,
    "url": "http://datawhispering.net/posts/makeover-monday-2020-week-04/",
    "title": "Bridges Per Capita",
    "body": "2020/01/27 - 2018, 2019, 2020 Bridges To Prosperity "
    }, {
    "id": 9,
    "url": "http://datawhispering.net/posts/makeover-monday-2020-week-03/",
    "title": "Do as I do and as I Say",
    "body": "2020/01/20 - Since 2008 our children’s diet, on average, has been consistently higher in free sugars than adults. We need to take charge of our children’s diet. "
    }, {
    "id": 10,
    "url": "http://datawhispering.net/posts/makeover-monday-2020-week-02/",
    "title": "Pesticides used in USA",
    "body": "2020/01/13 - I know that we have this hate, hate relationship with pie charts.  But I honestly believe that they have their special use case.  Like when you really want to send the message of just how much a data point is weighted against another. When compared to pesticides that all 3 countries have banned, the USA is painted in a brighter light. "
    }, {
    "id": 11,
    "url": "http://datawhispering.net/posts/makeover-monday-2020-week-01/",
    "title": "Outdoor sports maintain a steady lead over indoor sports",
    "body": "2020/01/06 - Sports. Well… The votes are in Americans love Outdoor Sports.  I struggled with this weeks Makeover Monday dataset (2020 Week 1).  I am not a big sports fan and did not feel motivated to study the data.  I tried to imagine that the data represented something else. Don’t laugh, it almost worked.  IN the end I just buckled down and started looking for patterns.  I started to wonder if there might be one when similar sports are grouped. And eureka, that was it.  It got a little hard to clearly define a sports one way or the other. So I took the approach of, “at the national level, when televised”, where is it usually played, indoors, outdoors, or both? Then I noted that in the visual so anyone studying the data would be aware of any assumptions I had made. "
    }, {
    "id": 12,
    "url": "http://datawhispering.net/posts/makeover-monday-2019-week-53/",
    "title": "Why is participation at it's lowest in the first week of every month",
    "body": "2019/12/30 - I only just discovered Makeover_Monday and was planning to start with the new year.  However I found this last dataset of 2019 just too interesting to pass up.  What stood out to me right away was the pattern of a dip in downloads every 3-4 weeks.  A closer look revealed that it coincides with the first week of each month. Why? I can only speak from my own experience, but the beginning of the month can be a very busy time for me, with month end reporting due.  Possibly this is the case for others. Knowing the trend, I am more determined than ever to make sure I make time to participate during the first week of each month. Downloads increase by 2x, after the first week. "
    }, {
    "id": 13,
    "url": "http://datawhispering.net/posts/makeover-monday-submissions/",
    "title": "2020 Makeover Monday Participation",
    "body": "2019/12/01 - I’ve set out to complete all 52 weeks this year.  Ambitious for my first year I know, but I am determined to learn and grow my skills. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});