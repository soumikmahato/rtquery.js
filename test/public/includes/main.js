//require rtquery
const rt = new rtquery();
rt.include("includes/style.css", "css");
rt.include("includes/header.js", "javascript", false, document.getElementsByTagName("h1")[0])

rt.render("h1", {"class":"top"}, document.body, "Rtquery").catch(err=>console.log(err));