
for(let i=1;i<=21;i++)
{
fetch(`https://api-thirukkural.vercel.app/api?num=${i}`)
//fetch(`https://api-thirukkural.vercel.app/api?num=1`)
.then (function(resp) {
    return resp.json();
})
.then(function(data){
    foo(data);
})
.catch(function(error){
    console.log(error);
})
}

function foo(data){
    // let cardImg = document.createElement("img");
    //     cardImg.setAttribute("class","card-img-top");
    //     cardImg.setAttribute("src","t1.jpg");
    let container =document.createElement("div");
    container.setAttribute("class","container");
    let row = document.createElement("div");
    row.setAttribute("class","row");
    
       // data.forEach((element) => 
        let col=document.createElement("div");
        col.setAttribute("class","col-12 mb-3");

        let card=document.createElement("div");
        card.setAttribute("class","card h-100");
        
        // let cardImg = document.createElement("img");
        // cardImg.setAttribute("class","card-img-top");
        // cardImg.setAttribute("src","t1.jpg");
        // cardImg.setAttribute("width","100px");
        // cardImg.setAttribute("height","100px");
        

        let cardBody =document.createElement("div")
        cardBody.setAttribute("class","card-body");
        
        let cardTilte =document.createElement("h2");
        cardTilte.setAttribute("class","cardTitle");
        cardTilte.innerHTML="திருக்குறள் : "+ data.sect_tam;
        

        let cardtext=document.createElement('h4');
        cardtext.setAttribute("class","card-text");
        cardtext.innerHTML = data.number + "-" + data.chapgrp_tam +"-" +data.chap_tam;

        let cardtext1=document.createElement('p');
        cardtext1.setAttribute("class","card-text");
        cardtext1.innerHTML = `<b><u>குறள்</u></b> ${data.line1} <br> ${data.line2} <hr> <b><u>விளக்கம்:</b></u>${data.tam_exp} <hr>`;

        let cardtext2=document.createElement('p');
        cardtext2.setAttribute("class","card-text");
        cardtext2.innerHTML = `<b><u>Chapter: ${data.chap_eng}</u></b> <br>  English Explaination: ${data.eng_exp} <hr>`;

        cardBody.append(cardTilte,cardtext,cardtext1,cardtext2);

        card.append(cardBody);
        col.append(card);
        row.append(col);
    
        container.append(row);
        document.body.append(container);
}