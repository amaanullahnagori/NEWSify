let api="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6c052c42ae834af0a4edc5ca35d50bef";
let busi=document.getElementById("business");
busi.addEventListener("click",function(){
    let n1=document.getElementById("a");
let n2=document.getElementById("b");
let n3=document.getElementById("c");
let n4=document.getElementById("d");
let n5=document.getElementById("f");

let a1=document.getElementById("a1");
let a2=document.getElementById("a2");
let a3=document.getElementById("a3");
let a4=document.getElementById("a4");
let a5=document.getElementById("a5");


// let HomeAPI= "https://newsapi.org/v2/top-headlines?country=in&apiKey=6c052c42ae834af0a4edc5ca35d50bef";
fetch(api).then(Response=>Response.json()).then(data=>{
        let obj=data;
        let articles=obj.articles;
       
        
        let article1=articles[7];
        let image1=article1.urlToImage;
        let url1=article1.url;
        let des1=article1.title;

        let article2=articles[8];
        let image2=article2.urlToImage;
        let url2=article2.url;
        let des2=article2.title;

        let article3=articles[4];
        let image3=article3.urlToImage;
        let url3=article3.url;
        let des3=article3.title;
       
        let article4=articles[5];
        let image4=article4.urlToImage;
        let url4=article4.url;
        let des4=article4.title;
        
        let article5=articles[6];
        let image5=article5.urlToImage;
        let url5=article5.url;
        let des5=article5.title;

       
       if (image1!=null)n1.src=image1;else n1.src= n1.src="./notAvailable.jpg";
       if (image2!=null)n2.src=image2; else n2.src="./notAvailable.jpg";
       if (image3!=null)n3.src=image3; else n3.src="./notAvailable.jpg";
       if (image5!=null)n5.src=image5;else{n5.src="./notAvailable.jpg";}
       if (image4!=null)n4.src=image4;else{ n4.src="./notAvailable.jpg";}

        a1.href=url5;
        a2.href=url1;
        a3.href=url2;
        a4.href=url3;
        a5.href=url4;

        a1.innerHTML=des5;
        a2.innerHTML=des1;
        a3.innerHTML=des2;
        a4.innerHTML=des3;
        a5.innerHTML=des4;
       
        
});
let aa1=document.getElementById("aa1");
let aa2=document.getElementById("aa2");
let aa3=document.getElementById("aa3");
let aa4=document.getElementById("aa4");
let aa5=document.getElementById("aa5");

 let d1=document.getElementById("one");
    let d2=document.getElementById("two");
    let d3=document.getElementById("three");
    let d4=document.getElementById("four");
    let d5=document.getElementById("five");
    let d6=document.getElementById("six");

// let InterAPI= "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c052c42ae834af0a4edc5ca35d50bef";
fetch(api).then(Response=>Response.json()).then(data=>{
   
           
        let obj=data;
        let articles=obj.articles;
        let article1=articles[10];
        let image1=article1.urlToImage;
        let url1=article1.url;
        let des1=article1.title;

        let article2=articles[11];
        let image2=article2.urlToImage;
        let url2=article2.url;
        let des2=article2.title;

        let article3=articles[12];
        let image3=article3.urlToImage;
        let url3=article3.url;
        let des3=article3.title;
       
        let article4=articles[13];
        let image4=article4.urlToImage;
        let url4=article4.url;
        let des4=article4.title;
        
        let article5=articles[14];
        let image5=article5.urlToImage;
        let url5=article5.url;
        let des5=article5.title;
        
        let article6=articles[15];
        let image6=article6.urlToImage;
        let url6=article6.url;
        let des6=article6.title;

       if (image1!=null) d1.src=image1;else d1.src="./notAvailable.jpg";
       if (image2!=null)d2.src=image2;else d2.src="./notAvailable.jpg";
       if (image3!=null)d3.src=image3;else d3.src="./notAvailable.jpg";
       if (image5!=null)d5.src=image5;else{d5.src="./notAvailable.jpg";}
       if (image4!=null)d4.src=image4;else{ d4.src="./notAvailable.jpg";}
       if (image6!=null)d6.src=image4;else{ d6.src="./notAvailable.jpg";}
       
        aa1.href=url1;
        aa2.href=url2;
        aa3.href=url3;
        aa4.href=url4;
        aa5.href=url5;
        aa6.href=url6;

        aa1.innerHTML=des1;
        aa2.innerHTML=des2;
        aa3.innerHTML=des3;
        aa4.innerHTML=des4;
        aa5.innerHTML=des5;
        aa6.innerHTML=des6;

});
})