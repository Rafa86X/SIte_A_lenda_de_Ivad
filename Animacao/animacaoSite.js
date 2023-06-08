let sec2 = 5;
let sec7 = 1;
let i=1;
let j=5;
let tempoadd
let f
let g
let h
let m = false
setInterval(()=>secpass2(),100);
setInterval(()=>secpass3(),500);


const secpass2 = () =>{
    
    if(sec2>0){
        sec2 = sec2 - 1;   
    }
    else{   
        sec2=5;
        }

    switch (sec2) {
            case 0:
                document.getElementById("T_Ivad").src="./Imagens/Ivad/Ivad1.png";
                break;
            case 1:
                document.getElementById("T_Ivad").src="./Imagens/Ivad/Ivad2.png";
                break;
            case 2:
                document.getElementById("T_Ivad").src="./Imagens/Ivad/Ivad3.png";
                break;
            case 3:
                document.getElementById("T_Ivad").src="./Imagens/Ivad/Ivad4.png";
                break;
            case 4:
                document.getElementById("T_Ivad").src="./Imagens/Ivad/Ivad3.png";
                break;
            case 5:
                document.getElementById("T_Ivad").src="./Imagens/Ivad/Ivad2.png";
                break;
        } 

}

const secpass3 = () =>{

    if(sec7>0){
        sec7 = sec7 - 1   
    }
    else{   
        sec7=1
        }

    switch (sec7) {
            case 0:
                document.getElementById("banner_botao").style="transition: 0.5s;  transform: scale(1.1);"
                break
            case 1:
                document.getElementById("banner_botao").style="transition: 0.5s;  transform: scale(1.05);"          
                break

        } 

}

const passa1 = (num)=>{ 
       
    let valor 
    if(num==1)
    valor = '0'
    if(num==2)
    valor = '-20%'
    if(num==3)
    valor = '-40%'
    if(num==4)
    valor = '-60%'
    if(num==5)
    valor = '-80%'
    document.getElementById("first").style=`margin-left: ${valor}`
    
}

const automatico = () =>{
    i=i+1
    if(i<6){
     passa1(i)
     document.getElementById("r"+i).checked=true
    }
    if((i>=6)&&(i<10)){
        j=j-1
        passa1(j)
        document.getElementById("r"+j).checked=true
    }
    if(i==10){
        i=2
        j=5
        passa1(i)
        document.getElementById("r"+2).checked=true
    }
    
}

const clk = (t)=>{
    i=t
    j=5
    passa1(t)
    clearInterval(f)
    tempo()    
}

tempo()

function tempo(){

     f = setInterval(()=>automatico(),2500)         
}

function imgfull(num){
    m=true
    if(num==1)
    document.getElementById("p_imagens_imgtelatoda__img").src="./Imagens/PrintGame/b1.png"
    if(num==2)
    document.getElementById("p_imagens_imgtelatoda__img").src="./Imagens/PrintGame/b8.png"
    if(num==3)
    document.getElementById("p_imagens_imgtelatoda__img").src="./Imagens/PrintGame/b7.png"  
    if(num==4)
    document.getElementById("p_imagens_imgtelatoda__img").src="./Imagens/PrintGame/b4.png"  
    if(num==5)
    document.getElementById("p_imagens_imgtelatoda__img").src="./Imagens/PrintGame/b5.png"      

    imgfull0()
    clearTimeout(g)
    g = setTimeout(()=>imgfull1(),100) 
       
}

function imgfull0(){
    document.querySelector("html").style.scrollBehavior = 'auto'
}
function imgfull1(){
    document.getElementById("p_imagens__imgtelatoda").style.display = 'block'
    window.scrollTo(0,0)   
    document.querySelector("html").style.overflowY = 'hidden'
}

function imfDesfull()
{   
    imfDesfull1()
    clearTimeout(h)
    h = setTimeout(()=>imfDesfull0(),10) 

}

function imfDesfull0()
{
    document.querySelector("html").style.scrollBehavior = 'smooth'
    m=false
}

function imfDesfull1()
{
    document.getElementById("p_imagens__imgtelatoda").style.display = 'none'
    document.querySelector("html").style.overflowY = 'auto'
    movepImagens()
    
}

function movepImagens(){
    var imagens = document.getElementById('imagens')
    imagens.scrollIntoView()
}

document.querySelector('body').addEventListener('keydown', function(event){
       
        if((event.key=='Escape') && (m==true))
        {
            imfDesfull()
            movepImagens()
        }


    })




