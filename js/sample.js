console.log('js is working');

document.getElementById('showmore').addEventListener('click' ,loadText);

function loadText(){
var xhr = new XMLHttpRequest();

var url='https://google-books.p.rapidapi.com/volumes';
xhr.open('GET', url,true);
xhr.setRequestHeader('x-rapidapi-host', 'google-books.p.rapidapi.com');
xhr.setRequestHeader('x-rapidapi-key', '150f85fb17msh3e380415d9acdb9p10f19bjsnc3b49764c19f');


xhr.onload=function(){
    if(this.status==200){
        console.log(this.responseText);
    var output = JSON.parse(this.responseText);
    console.log(output);
    var out = JSON.stringify(output)
    console.log(out);

    var anchor1=document.createElement("a");
    anchor1.setAttribute("id","anchor1");
    anchor1.setAttribute("href",output.items[0].volumeInfo.previewLink);

    var anchor2=document.createElement("a");
    anchor2.setAttribute("id","anchor2");
    anchor2.setAttribute("href",output.items[1].volumeInfo.previewLink);
    
    var anchor3=document.createElement("a");
    anchor3.setAttribute("id","anchor3");
    anchor3.setAttribute("href",output.items[2].volumeInfo.previewLink);
    
    var anchor4=document.createElement("a");
    anchor4.setAttribute("id","anchor4");
    anchor4.setAttribute("href",output.items[3].volumeInfo.previewLink);
    
    var anchor5=document.createElement("a");
    anchor5.setAttribute("id","anchor5");
    anchor5.setAttribute("href",output.items[4].volumeInfo.previewLink);
    
    var anchor6=document.createElement("a");
    anchor6.setAttribute("id","anchor6");
    anchor6.setAttribute("href",output.items[5].volumeInfo.previewLink);
    
    var anchor7=document.createElement("a");
    anchor7.setAttribute("id","anchor7");
    anchor7.setAttribute("href",output.items[6].volumeInfo.previewLink);
    
    var anchor8=document.createElement("a");
    anchor8.setAttribute("id","anchor8");
    anchor8.setAttribute("href",output.items[7].volumeInfo.previewLink);
    
    var img1=document.createElement("img")
    img1.setAttribute("id","1");
    img1.setAttribute("width","320");
    img1.setAttribute("height","500");
    img1.setAttribute("margin-left","10px");
    img1.setAttribute("src","http://books.google.com/books/content?id=aqeCwxbRWvsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")
    
    
    var img2=document.createElement("img")
    img2.setAttribute("id","2");
    img2.setAttribute("width","320");
    img2.setAttribute("height","500");
    img2.setAttribute("margin-left","10px");
    img2.setAttribute("src","http://books.google.com/books/content?id=UbhoOXySYewC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_ap")
   
    
    var img3=document.createElement("img")
    img3.setAttribute("id","3");
    img3.setAttribute("width","320");
    img3.setAttribute("height","500");
    img3.setAttribute("margin-left","10px");
    img3.setAttribute("src","http://books.google.com/books/content?id=0HmB3ix5IQ8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")
    
    
    
    var img4=document.createElement("img")
    img4.setAttribute("id","4");
    img4.setAttribute("width","320");
    img4.setAttribute("height","500");
    img4.setAttribute("margin-left","10px");
    img4.setAttribute("src","http://books.google.com/books/content?id=-LB3EUeg4okC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")
  
    
    var img5=document.createElement("img")
    img5.setAttribute("id","5");
    img5.setAttribute("width","320");
    img5.setAttribute("height","500");
    img5.setAttribute("margin-left","10px");
    img5.setAttribute("src","http://books.google.com/books/content?id=0HmB3ix5IQ8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")
   
    
    var img6=document.createElement("img")
    img6.setAttribute("id","6");
    img6.setAttribute("width","320");
    img6.setAttribute("height","500");
    img6.setAttribute("margin-left","10px");
    img6.setAttribute("src","http://books.google.com/books/content?id=9SGbSjx1CYcC&printsec=frontcover&img=1&zoom=5&source=gbs_api")
  
    
    var img7=document.createElement("img")
    img7.setAttribute("id","7");
    img7.setAttribute("width","320");
    img7.setAttribute("height","500");
    img7.setAttribute("margin-left","10px");
    img7.setAttribute("src","http://books.google.com/books/content?id=z6JKO4C3tUQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")
  

    
    var img8=document.createElement("img")
    img8.setAttribute("id","8");
    img8.setAttribute("width","320");
    img8.setAttribute("height","500");
    img8.setAttribute("margin-left","10px");
    img8.setAttribute("src","http://books.google.com/books/content?id=q5DchsHkxnoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")
    



    document.getElementById('li1').appendChild(img1);
    document.getElementById('li2').appendChild(img2);
    document.getElementById('li3').appendChild(img3);
    document.getElementById('li4').appendChild(img4);
    document.getElementById('li5').appendChild(img5);
    document.getElementById('li6').appendChild(img6);
    document.getElementById('li7').appendChild(img7);
    document.getElementById('li8').appendChild(img8);
   

    document.getElementById('first').appendChild(anchor1);
    document.getElementById('anchor1').innerHTML="read";
    document.getElementById('second').appendChild(anchor2);
    document.getElementById('anchor2').innerHTML="read";
    document.getElementById('third').appendChild(anchor3);
    document.getElementById('anchor3').innerHTML="read";
    document.getElementById('fourth').appendChild(anchor4);
    document.getElementById('anchor4').innerHTML="read";
    document.getElementById('five').appendChild(anchor5);
    document.getElementById('anchor5').innerHTML="read";
    document.getElementById('six').appendChild(anchor6);
    document.getElementById('anchor6').innerHTML="read";
    document.getElementById('seven').appendChild(anchor7);
    document.getElementById('anchor7').innerHTML="read";
    document.getElementById('eight').appendChild(anchor8);
    document.getElementById('anchor8').innerHTML="read";
   


}

}

xhr.send();
}
