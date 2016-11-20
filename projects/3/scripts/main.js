var SITE_NAME = 'saadsaad'
var ENV = 'development'
var URL = 'http://product.noddl.me:8082/api/' + SITE_NAME

$(document).ready(function() {
    $('#login').click(function() {
        $('#login-box').toggle(300);
    })
    $.ajax({
        url: URL + '/article',
        method: 'get',
        success: function(result) {
            var articles = result.content.articles
            var articleLen = articles.length
            for(var i = 0; i < articleLen; ++i) {
                var article = $('<div></div>').addClass('article')
                // Content of each article
                var articleInfo = $('<div></div>').addClass('article-info')
                // Content of the article-info
                var articleTitle = $('<h2></h2>').addClass('article-title').text(articles[i].title)
                var articleSubtitle = $('<h4></h4>').addClass('article-subtitle').text(articles[i].subtitle)
                var articleDate = $('<p></p>').addClass('article-date').text(articles[i].createTime)
                
                articleInfo.append(articleTitle, articleSubtitle, articleDate)
                article.append(articleInfo)
                $('#right-part').append(article)
            }
        }
    })
})