let box = document.getElementsByClassName('box-2');
let boxWithContent = document.getElementsByClassName('box-1');
let images  = [{
    name:"flyDuck",
    image:'images/img1.png'
},
{
    name:"flyFish",
    image:'images/img2.png'
},
{
    name:"HumerDude",
    image:'images/img3.png'
},
{
    name:"Sun",
    image:'images/img4.png'
},
{
    name:"Mario",
    image:'images/img5.png'
},
{
    name:"Plant",
    image:'images/img6.png'
},
{
    name:"Dragon",
    image:'images/img7.png'
},
{
    name:"Medusa",
    image:'images/img8.png'
}];
let divContentArray = [];
let hiddenBoxArray = [];

//shuffle array
images = images.concat(images);
images.sort(() => Math.random() - 0.5);



for(let i = 0 ; i < box.length; i++){
    
   //box[i].style.visibility='hidden'; //da otvorim sva polja

    let imgs = document.createElement('img');
    imgs.setAttribute('src',images[i].image);
    boxWithContent[i].appendChild(imgs);
    
     
   
    
    box[i].addEventListener('click',()=>{
      
           box[i].style.visibility='hidden';
            //let divContent = boxWithContent[i].children[0]; // o ovoga dijela sam stigao moram da izbacim objkkeat kad k,liknem
            let divContent = images[i].name;
           // console.log(imgs.src);
            console.log(divContent);
            
            
            divContentArray.push(divContent);
            hiddenBoxArray.push(i)
            
            

            let content1 = divContentArray[0];
            let content2 = divContentArray[1];

             console.log('sadrzaj diva ',divContentArray);
            // console.log('skriveni divovi po indexu ',hiddenBoxArray);

            if((content1 == content2) && hiddenBoxArray.length == 2){
                setTimeout(()=>{
                boxWithContent[hiddenBoxArray[0]].style.visibility='hidden';
                boxWithContent[hiddenBoxArray[1]].style.visibility='hidden'; 
                divContentArray.length=0;
                hiddenBoxArray.length=0;
                
                }, 500);
                
            }if((content1 !== content2) && hiddenBoxArray.length == 2){
                setTimeout(() => {
                box[hiddenBoxArray[0]].style.visibility='visible';
                box[hiddenBoxArray[1]].style.visibility='visible';  
                divContentArray.length=0;
                hiddenBoxArray.length=0;
                }, 500);
            }
           

})

}
