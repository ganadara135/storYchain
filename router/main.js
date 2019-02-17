var request = require("request");


module.exports = function(app)
{ 
    app.get('/', async (req,res,next) => {
        
        try{
            const result = await asyncFunction();
             console.log(" -------------------- " + result[0].title);

            res.render('index',{
                title: "Redirecting",
                medium_data: result || 'test'
            })
        } catch (error){
            next(error)
        }
    });
    
    //var feed = new mediumFeed();
    const MEDIUM_URL = "https://medium.com/@storichain/latest?format=json";

    const asyncFunction = () => {
        //var data = null;
        return new Promise(resolve => {
            request.get(MEDIUM_URL, (err, apiRes, body) => {
                if (!err && apiRes.statusCode === 200) {
                    //let i = body.indexOf("{");
                    // const data = body.substr(i);
                    //console.log(body);

                    
                    const prefix = `])}while(1);</x>`
                    const strip = payload => payload.replace(prefix, ``)
                    const data = JSON.parse(strip(body));
                    


                    // res.send(data);
                    // console.log(data);
                    //console.log(Object.values(data.payload.references.Post).toString());

                    const { Post } = data.payload.references
                    const posts = Object.values(Post).map(({ id, title, createdAt, virtuals, uniqueSlug }) => Object.assign({},{
                        title,
                        createdAt,
                        subtitle: virtuals.subtitle,
                        image: virtuals.previewImage.imageId ? `https://cdn-images-1.medium.com/max/800/${virtuals.previewImage.imageId}` : null,
                        url: `https://medium.com/@storichain/${uniqueSlug}`
                        })
                    )
                    console.log(posts);


                    // console.log(" -------- request -------------" );
                    // return data;
                    //resolve(data);
                    resolve(posts);
                    
                } else {
                    //res.sendStatus(500).json(err);
                    console.log(err);
                    throw new Error(err);
                }
            });
            //return data;
        })
    };

    app.get("/posts", (req, res, next) => {
        request.get(MEDIUM_URL, (err, apiRes, body) => {
            if (!err && apiRes.statusCode === 200) {
            let i = body.indexOf("{");
            const data = body.substr(i);
            res.send(data);
            } else {
            res.sendStatus(500).json(err);
            }
        });
    });



/*
    

    app.get('/',function(req,res,next) {
        //let data = null;
        //var data;
        const result = await asyncFunction();

        // const loadMedium_data  = async function() {
        //     var data_test =  await rp(MEDIUM_URL);

        //     return data_test;
        // }

        console.log(result);

        res.render('index',{
            title: "Redirecting",
            medium_data: result || 'test'
        })
    });
*/


    /*
     app.get('/',function(req,res){
        
        //res.writeHead(301, {"Location": "http://storichain.io"});
        //res.end('ok');
        /////  index.html  ���� for �̹��� ����
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