
//string
{
    'use strict';
    
    let nama = 'Fachru dahri';
    let alamat = 'Medan';
    
    console.log('nama saya '+nama+', dan tinggal di '+alamat);
}

//object string
{
    'use strict';
    
    let nama = new String('Fachru dahri');
    let alamat = new String('Medan');
    
    console.log('nama saya '+nama+', dan tinggal di '+alamat);
}

//contoh object 
{
    let object = new Object();
    let boolean = new Boolean(true);
    let array = new Array();
}

//number
{
    'use strict';

    let a = 10;
    let b = 30;
    let c = a + b;
    
    console.log('hasil dari '+a+' + '+b+' = '+c);
}

//boolean
{
    'use strict';
    let kamu = true;
    let aku = false;

    console.log(kamu);
    console.log(aku);
    console.log(kamu || aku);
    console.log(kamu && aku);
    console.log(kamu != aku);
}

//array
{
    'use strict';

    let binatang = ['Ayam','Kambing','Sapi','Bebek'];
    let buah = ['Pisang', 'Apel', 'Semangka', 'Anggur'];
    console.log(binatang);
    console.log(buah);

    //menentukan indexnya
    let iBuah = buah[0];
    let iBinatang = binatang[3];
    console.log(iBuah);
    console.log(iBinatang);
}
