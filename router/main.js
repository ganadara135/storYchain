module.exports = function(app)
{ 
    app.get('/',function(req,res) {
        res.render('index',{
            title: "Redirecting"
        })
    });

    /*
     app.get('/',function(req,res){
        
        //res.writeHead(301, {"Location": "http://storichain.io"});
        //res.end('ok');
        /////  index.html  수정 for 이미지 삽입
        //res.render('index.html');
       
        res.render() {
            return (
                '<html>'
                    '<head>'
                '<title>Main</title>'
                '<meta http-equiv="refresh" content="60; url=http://storichain.io" />'
                    '</head>'
                '<body>'
                '<img src="/views/storYchain_test.png" style="width: 1024px; height: 1024px;" usemap="#imagemap">'
                '<map name="imagemap">'
                '<area shape="rect" coords="20,20,900,900" href="http://storichain.io" alt="usemap">'
                '</map>'
                '<br>'
                'Hey, this is index page'
                'redirecting in 60 seconds automatically.'
                '</body>'
                '</html>'
            );
        }
       
     });
 
     app.get('/about',function(req,res){
        res.render('about.html');
    });
    */
}