let sectionBox=document.getElementById("section");
let business=document.getElementById("business");
let homeNav=document.getElementById("homeNav");
let home=document.getElementById("home");
let homeentertainment=document.getElementById("entertainment");

async function fetchApi(url){
    try{
        let res=await fetch(url);
        let data=await res.text();
        let fetchJsonData=JSON.parse(data);
        let length=fetchJsonData.articles.length;
        for(i=0;i<length;i++){
            let imgUrl=fetchJsonData.articles[i].urlToImage;
            let title=fetchJsonData.articles[i].title;
            let url=fetchJsonData.articles[i].url;
            let content=fetchJsonData.articles[i].content;
            let element=document.createElement("div");
            element.classList.add("card");
            element.setAttribute("style","width: 18rem;");
            let img=document.createElement("img");
            if(imgUrl!=null){
                img.src=imgUrl;
            }
            else{
                img.src="https://highlandhairtherapy.co.uk/wp-content/plugins/radiantthemes-addons/assets/images/No-Image-Found-400x264.png"
            }
            img.alt="..."
            let div=document.createElement("div");
            div.classList.add("card-body");
            element.appendChild(img);
            element.appendChild(div);
            let h5=document.createElement("h5");
            let p=document.createElement("p");
            let a=document.createElement("a");
            h5.classList.add("card-title");
            if(title!=null){
                h5.innerText=`${title.slice(0,40)}...`;
            }
            p.classList.add("card-text");
            if(content!=null){
                p.innerText=`${content.slice(0,50)}....`;
            }else{
                p.innerText='.....'
            }
            a.classList.add("btn");
            a.classList.add("btn-primary");
            a.innerText="Read More"
            a.href=url;
            div.appendChild(h5);
            div.appendChild(p);
            div.appendChild(a);
            for(j=0;j<length;j++){
                sectionBox.appendChild(element);
            }
        }
    }
    catch{
        console.log("some erro");
    }
}
fetchApi("https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=100&apiKey=0757bcb1bdd94500b9a25e3269bf6ac2");