
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "About",
    "body": "  Hi, I'm Lakeida Sprenkle.  Lovingly nicknamed, The DataWhisperer by my colleagues. Born and raised a cali girl, but currently calling Michigan home. This is my personal blog and what you'll find here are tidbits, quips and examples of daily wins and stumbles, that I thought might be useful to others.   Although I started my career in Web Development, I quickly transitioned into Software Engineering (mostly C#, with dabbles of Ruby), but it was not long before I slowly started gravitating towards SQL. A toe dip here, writing stored procedures and views, slowly sitting down on the first step, data modeling and indexes. . . , fast forward a few years and I'm swimming in the deep end. . . , migrating data(SSIS), creating reports(SSRS), modeling and analysis(SSAS), data wrangling (Python, Power Query, R), crafting insightful visualizations (Python, Power BI, R) and more. . .    Disclaimer: This pool is just an analogy, you will not find me anywhere near the deep end, as I cannot actually swim; there's just something about not having constant access to oxygen *shivers*.   So now, 15+ years after that first, SELECT * FROM. . . I am a self-professed data addict. You can often find me frequenting public data set sites or participating in weekly and monthly viz challenges. I've listed a few of my favorite haunts in the side bar.   I love all things data. So much so, that it doesnt even feel like work anymore. Business Intelligence is like playing on the swings, building visualizations is like spinning on the merry go-round, perfoming advanced analytics - sliding down. . . well you get the idea, right?   When I'm not playing with data, I enjoy photography - Still Life and Minatures (dolls, toys, figurines, etc. . . ). You can find samples of my work on Instagram (sprenkle_me), my photography site at LakeidaSprenkle. com, and unsplash. com/@lakeida   Thanks for stopping by!  Haunts:                                                                                                                                                                                                                                                                                                                                                        "
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                 What Had Happened Was. . .                               :               Started out the year going strong.  Plans of participating in my first Makeover Monday and completing and entire year.  Makeover Monday:                                                                      10 Oct 2020                                                                                                                             Makeover Monday                                                                                                                                                                                                                                                                                                                                                                          Could more Peace bring more Popularity?                              :               Is it any wonder that nearly 1/3 of Generation Z and Millennials think other countries are better than the U. S. , given the U. S. has been. . . :                                                                      10 Feb 2020                                                                                                                             Makeover Monday                                                                                                                                                                                                                  All Posts:                                                                                                                   What Had Happened Was. . .               :       Started out the year going strong.  Plans of participating in my first Makeover Monday and completing and entire year.  Makeover Monday:                              10 Oct 2020                                                                     Makeover Monday                                                                                                                                                                        Scheduled Refresh Can Disable Itself?              :       Whut… #skynet, #selfaware… Just stumbled upon a helpful tidbit of information. You all probably know this, but I must have been absent on that day when they covered it in. . . :                              19 Apr 2020                                                                     PowerBI                                                                                                                                                                        Could more Peace bring more Popularity?              :       Is it any wonder that nearly 1/3 of Generation Z and Millennials think other countries are better than the U. S. , given the U. S. has been at war for more than. . . :                              10 Feb 2020                                                                     Makeover Monday                                                                                                                                                                        Brexit 007, in favor of change or more control?              :       Are people in favor of leaving the EU, opposed to changing 007? This week’s Makeover Monday challenge. :                              03 Feb 2020                                                                     Makeover Monday                                                                                                                                                                        Bridges Per Capita              :       Rural isolation is a root cause of poverty; connection it the foundation for opportunity. Bridges to Prosperity:                              27 Jan 2020                                                                     Makeover Monday                                                                             &laquo; Prev       1        2      Next &raquo; "
    }, {
    "id": 4,
    "url": "/projects",
    "title": "Projects",
    "body": "{% for post in site. posts %} {% if post. project == true and post. featured == true %}  &lt;article class= project &gt;   {% if post. image %}       {% else %}   {% endif %}   &lt;div class= project-content &gt;    &lt;h2 class= project-title &gt;{{post. title}}&lt;/h2&gt;    &lt;p&gt;{{ post. description | strip_html | truncatewords: 40 }}&lt;/p&gt;    &lt;p&gt;{{ post. status | strip_html }}&lt;/p&gt;    {{post. date | date: ‘%Y, %b %d’}}   —     {% capture words %}{{ post. content | number_of_words }}{% endcapture %}{% unless words contains “-“ %}{{ words | plus: 250 | divided_by: 250 | append: “ minute read” }}{% endunless %}   &lt;/div&gt;  &lt;/article&gt; {% endif %}{%endfor%} {% for post in site. posts %} {% if post. project == true and post. featured == false %}  &lt;article class= project &gt;   {% if post. image %}       {% else %}   {% endif %}   &lt;div class= project-content &gt;    &lt;h2 class= project-title &gt;{{post. title}}&lt;/h2&gt;    &lt;p&gt;{{ post. description | strip_html | truncatewords: 15 }}&lt;/p&gt;    {{post. date | date: ‘%Y, %b %d’}}   —     {% capture words %}{{ post. content | number_of_words }}{% endcapture %}{% unless words contains “-“ %}{{ words | plus: 250 | divided_by: 250 | append: “ minute read” }}{% endunless %}   &lt;/div&gt;  &lt;/article&gt; {% endif %}{%endfor%} "
    }, {
    "id": 5,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "/posts/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true and post. project != true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Posts:         {% for post in paginator. posts %}    {% if post. project != true %}      {% include postbox. html %}    {% endif %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 7,
    "url": "/posts/Resume-Project/",
    "title": "Interactive Resume",
    "body": "2020/10/18 -  He who represents himself has a fool for a client    Abraham Lincoln So I started to design and online version of my resume but realized that I was just recreating what is already available on LinkedIn, and with more detail than my one page hard copy version, which I can just make available for download here. So instead I decided to not only create an Interactive version, but to document the process here, nothing like some good old fashion public learning and sharing to get the juices flowing. The idea behind this little exercise, is to see if I can treat this like I would any other project. First Step is Exploratory / Requirements gathering session with the stakeholder(s):  Lakeida (BI Engineer) - “What is it that you want do?”  Lakeida (Stakeholder) - “I want to create an Interactive version of my resume. ”  Lakeida (BI Engineer) - “Why?” okay just kidding, i’m not going type out the entire interview session I had with myself, and risk getting more side-eye looks like the ones I got from the other coffee shop patrons, during this interview. I’ll spare you the details and get to the outcome.  Project Goal: Create an interactive resume that allows potential employers to quickly access my expertise level and years of professional experience across each of my skills, while also acting as a showcase.  Cover Photo by Branko Stancevic on Unsplash "
    }, {
    "id": 8,
    "url": "/posts/What-had-happened-was/",
    "title": "What Had Happened Was...",
    "body": "2020/10/10 - Started out the year going strong.  Plans of participating in my first Makeover Monday and completing and entire year.  Makeover Monday And then 2020 happened… Now I’m faced with the decision.  Do I let this year win and continue to derail me from my tasks? Or do I take back control? You guessed it, taking back control. Starting with going back to participate in the weeks that I missed.  My plan is to start with the datasets and business questions that interest me most.  That should make it easier to build some momentum.  We are looking at 30+ weeks to make up for.  If I can get at least 50% of that, I’m gonna call it a win.  Photo by Pavel Anoshin on Unsplash "
    }, {
    "id": 9,
    "url": "/posts/scheduled-refresh-can-disable-itself/",
    "title": "Scheduled Refresh Can Disable Itself?",
    "body": "2020/04/19 - Whut… #skynet, #selfaware… Just stumbled upon a helpful tidbit of information. You all probably know this, but I must have been absent on that day when they covered it in class, lol. Scheduled Refresh will turn off automatically after 4 consecutive refresh failures. So if anyone was like me and was puzzeled why one of their schedules was disabled, this might be the culprit. &lt;https://docs. microsoft. com/en-us/power-bi/refresh-troubleshooting-refresh-scenarios&gt; "
    }, {
    "id": 10,
    "url": "/posts/makeover-monday-2020-week-06/",
    "title": "Could more Peace bring more Popularity?",
    "body": "2020/02/10 - Is it any wonder that nearly 1/3 of Generation Z and Millennials think other countries are better than the U. S. , given the U. S. has been at war for more than half their lives.  Cover Photo by Jacalyn Beales on Unsplash "
    }, {
    "id": 11,
    "url": "/posts/makeover-monday-2020-week-05/",
    "title": "Brexit 007, in favor of change or more control?",
    "body": "2020/02/03 - Are people in favor of leaving the EU, opposed to changing 007? This week’s Makeover Monday challenge.  Cover Photo by David Guenther on Unsplash  "
    }, {
    "id": 12,
    "url": "/posts/makeover-monday-2020-week-04/",
    "title": "Bridges Per Capita",
    "body": "2020/01/27 - Rural isolation is a root cause of poverty; connection it the foundation for opportunity. Bridges to Prosperity Bridges to Prosperity envisions a world where poverty caused by rural isolation no longer exists. Rural isolation is a root cause of poverty, and we believe that connection is the foundation to opportunity. We work with local communities, partners and foundations, to build footbridges that connect residents to education, health care and economic opportunity. With a sophisticated data collection and evaluation program, we’re able to prove that the value and impact of our work is sustained long after the opening celebration.   Photo by Andre A. Xavier on Unsplash  "
    }, {
    "id": 13,
    "url": "/posts/makeover-monday-2020-week-03/",
    "title": "Do as I do and as I Say",
    "body": "2020/01/20 - We need to take charge of our children’s diet. Since 2008 our children’s diet, on average, has been consistently higher in free sugars than adults. Kids ages 2-18 should have less than 25 grams or 6 teaspoons of added sugar daily for a healthy heart. Heart. org Photo by Hugues de BUYER-MIMEURE on Unsplash "
    }, {
    "id": 14,
    "url": "/posts/makeover-monday-2020-week-02/",
    "title": "Pesticides used in USA",
    "body": "2020/01/13 - I know that we have this hate, hate relationship with pie charts.  But I honestly believe that they have their special use case.  Like when you really want to send the message of just how much a data point is weighted against another. In those special cases where it’s a clear difference in percentage. When compared to pesticides that all 3 countries have banned, the USA is painted in a brighter light. This is for Makeover Monday 2020 Week 2. "
    }, {
    "id": 15,
    "url": "/posts/makeover-monday-2020-week-01/",
    "title": "Outdoor sports maintain a steady lead over indoor sports",
    "body": "2020/01/06 - Sports. Well… The votes are in Americans love Outdoor Sports.  I struggled with this weeks Makeover Monday dataset (2020 Week 1).  I am not a big sports fan and did not feel motivated to study the data.  I tried to imagine that the data represented something else. Don’t laugh, it almost worked.  IN the end I just buckled down and started looking for patterns.  I started to wonder if there might be one when similar sports are grouped. And eureka, that was it.  It got a little hard to clearly define a sports one way or the other. So I took the approach of, “at the national level, when televised”, where is it usually played, indoors, outdoors, or both? Then I noted that in the visual so anyone studying the data would be aware of any assumptions I had made. "
    }, {
    "id": 16,
    "url": "/posts/makeover-monday-2019-week-53/",
    "title": "Why is participation at it's lowest in the first week of every month",
    "body": "2019/12/30 - I only just discovered Makeover_Monday and was planning to start with the new year.  However I found this last dataset of 2019 just too interesting to pass up.  What stood out to me right away was the pattern of a dip in downloads every 3-4 weeks.  A closer look revealed that it coincides with the first week of each month. Why? I can only speak from my own experience, but the beginning of the month can be a very busy time for me, with month end reporting due.  Possibly this is the case for others. Knowing the trend, I am more determined than ever to make sure I make time to participate during the first week of each month. Downloads increase by 2x, after the first week. "
    }, {
    "id": 17,
    "url": "/posts/makeover-monday-submissions/",
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
