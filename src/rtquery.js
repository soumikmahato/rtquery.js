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

        
        
    }
    
