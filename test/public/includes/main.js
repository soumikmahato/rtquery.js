//require rtquery
const rt = new rtquery();
rt.include("includes/style.css", "css");
rt.include("includes/header.js", "javascript", false, document.getElementById('root'));

//rt.render("h1", {"class":"top"}, document.body, "Rtquery").catch(err=>console.log(err));