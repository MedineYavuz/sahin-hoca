//----sınav ortalama----

// let vize1=Number(prompt("vize1 notunuz:"));
// let vize2=Number(prompt("vize2 notunuz:"));
// let final=Number(prompt("final notunuz:"));

// let ortalama=vize1*0.3+vize2*0.3+final*0.4;

// if(ortalama>=50){
//     alert("Tebrikler,geçtiniz!" +ortalama);

// }
// else{
//     alert("Kaldınız!" +ortalama);
// }

//----TYT PUAN HESAPLAMA:
//ilk olarak değişkenlere 0 atayarak hepsini tanımladık.

// let turkceDogru, turkceYanlis=0;
// let matematikDogru,matematikYanlis=0;
// let sosyalDogru,sosyalYanlis=0;
// let fenDogru,fenYanlis=0;

// let puan=0;
// let okulPuani=0;

// //2.olarak mesajımızı yazdık.

// let mesaj=`TYT PUAN HESAPLAMA UYGULAMASINA HOŞGELDİNİZ.
// 1-PUAN HESAPLAMA
// 2-ÇIKIŞ`;

// let secim=prompt(mesaj); //3.olarak kullanıcıdan değer alınır.

// switch(secim){
//     case "1":
//         okulPuani=Number(prompt("Okul puanını giriniz"));
//         turkceDogru=Number(prompt("Türkçe doğru sayısı:"));
//         turkceYanlis=Number(prompt("Türkçe yanlış sayısı:"));

//         matematikDogru=Number(prompt("Matematik doğru sayısı:"));
//         matematikYanlis=Number(prompt("Matematik yanlış sayısı:"));
        
//         sosyalDogru=Number(prompt("Sosyal doğru sayısı:"));
//         sosyalYanlis=Number(prompt("Sosyal yanlış sayısı:"));

//         fenDogru=Number(prompt("Fen doğru sayısı:"));
//         fenYanlis=Number(prompt("Fen yanlış sayısı:"));

//         let dogruSayisi=turkceDogru+matematikDogru+sosyalDogru+fenDogru;
//         let yanlisSayisi=turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;

//         let net=dogruSayisi-(yanlisSayisi/4);

//         puan=(net*4)+okulPuani+100;
        
//         alert("TYT PUANINIZ:"+puan);
//         break;
    
//     case "2":
//         alert("sistemden çıkış yaptınız...");
//         break;

//     default:
//         alert("lütfen geçerli değer giriniz! ");
//         break;

// }


//children-parent ulaşma:
// const row=document.querySelector(".row");
 
// let value;
// value=row;
// value=row.children[0].children[0];



// console.log(value);




function zaman(){

    const time=new Date;

    let saat=time.getHours();
    let dakika=time.getMinutes();
    let saniye=time.getSeconds();

    let clock=document.querySelector("#myClock1");
    clock.innerHTML=`${saat}:${dakika}:${saniye}`;
}

setInterval(zaman,1000);

function zaman2(){

    const time=new Date;
    time.setHours(12);

    let saat=time.getHours();
    let dakika=time.getMinutes();
    let saniye=time.getSeconds();

    let clock=document.querySelector("#myClock2");
    clock.innerHTML=`${saat}:${dakika}:${saniye}`;
}

setInterval(zaman2,1000);

function zaman3(){

    const time=new Date;
    time.setHours(7);

    let saat=time.getHours();
    let dakika=time.getMinutes();
    let saniye=time.getSeconds();

    let clock=document.querySelector("#myClock3");
    clock.innerHTML=`${saat}:${dakika}:${saniye}`;
}

setInterval(zaman3,1000);

