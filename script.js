// Demo : Functions

var bakiye = 4000;
var adsoyad = 'sena turan';

var hesapA = {
    ad : 'Sena Turan',
    hesapNo : '12345678',
    bakiye : 4000,
    ekHesap : 1000
}

var hesapB= {
    ad : 'Emel Turan',
    hesapNo : '12356479',
    bakiye : 3000,
    ekHesap : 2000
}


function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);

    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye - miktar;
        console.log('paranızı alabilirsiniz');
    }else {
        var toplam = hesap.bakiye + hesap.ekHesap;

        if(toplam>=miktar){
            if(confirm('ek hesabınızı kullanmak istermisiniz')){
                console.log('paranızı alabilirsiniz');
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekhesap = hesap.ekhesap - ekhesap;
            }else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır.`);
            }
        }else{
            console.log('üzgünüz bakiye yetersiz');
        }
    }

}

paraCek(hesapA,3000);
paraCek(hesapA,3100);
// paraCek(hesapB,2000);