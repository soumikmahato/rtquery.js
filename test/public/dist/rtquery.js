/*
(c) 2021 Soumik Mahato
License: MIT
Version: 1.0.0-alpha-2

*/

class rtquery{
    constructor(url){
        if(url){
            this.url = url;
        }
    }
    
    
    render(elem, attrs, parent, html){
        if(!elem || !attrs || !parent ){
            return new Promise((success, failed)=>{
                failed("parameters should not be empty");
        });
    } 
    //if innerhtml not defined
    if(!html){
        html = "";
      }
        //to create Element and embed in parent
        let node = document.createElement(elem);
        parent.appendChild(node);
        node.innerHTML = html;

        //array 
        var array = attrs;
        for(var key in attrs){
            node.setAttribute(key, attrs[key]);
           }
         return new Promise((success, unsuccess)=>{
            success("Success");
        });
        }

        realtime(callback){
            var url = location.href;
            setInterval(()=>{
                //make the page realtime
             fetch('#').then(data => data.text()).then((html) =>{ 
            
            document.getElementsByTagName('html')[0].innerHTML = html;
            callback();
                
            });
            console.clear();
            return new Promise((success, unsuccess)=>{
                success("Success");
            });
            },1000);

        }

        include(url, type, $async, parent){
            if(!url || !type){
                return new Promise((success, failed)=>{
                    failed("Failed to include. Parameters should be correct");
                });
            
           }
           if(type == "javascript"){
               if(!$async){
                   var elem = document.createElement("script");
                   elem.src = url;
                   elem.type="text/javascript";
                   parent.appendChild(elem);
               }
               else{
                var elem = document.createElement("script");
                elem.async = true;
                elem.src = url;
                elem.type="text/javascript";
                parent.appendChild(elem);
            }
           }
           if(type == "css"){
               var elem = document.createElement("link");
               document.head.appendChild(elem);
               elem.rel = "stylesheet";
               elem.type = "text/css";
               elem.href = url;
           }
        }

        navlink (url, e, calllback){
            (e || window.event).preventDefault();
            fetch(url).then(res => res.text()).then((html) =>{
                document.getElementsByTagName("html")[0].innerHTML = html;
                calllback();
            }).catch((err)=>{
              console.log(err);
            })
        }
        
    }
    
