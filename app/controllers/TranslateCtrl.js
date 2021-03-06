var app = angular.module('BibliotekaApp');
app.config(function ($translateProvider) {

    $translateProvider.translations('en', {

        clanstvo_produzi: 'You should extend membership!',
        katalog: 'Catalog',
        vec_rezervisano: 'You already booked this book!',
        pogr_username: 'Username is incorrect!',
        doci_po_knjigu: 'You need to come in the coming days to get book!',
        obavjest_raspolozivost: 'We will notify you when the book becomes available!',
        rok_istekao: 'Expired waiting for the debt!',
        knjiga_zaduzena: 'The book you borrowed!',
        nije_zaduzio_knjigu: 'The book you are not indebted!',
        istekao_rok_razduzivanje: 'Deadline for deleveraging!',
        nije_istekao_rok_razduzivanje: 'Not deadline for deleveraging!',
        knjiga_razduzena: 'Book discharge!',
        vec_posjeduje_knjigu: 'The user already has this book!',
        uspjesno_ste_razduzili: 'You have successfully discharged book!',
        knjiga_nije_vracena: 'The book was not returned!',
        knjiga_je_vracena: 'The book was returned!',
        pocetna: 'Home',
        knjige: 'Books',
        informacije: 'Information',
        kontakt: 'Contact',
        prijava: 'Login',
        odjava: 'Logout',
        registracija: 'Register',
        korisnicko_ime: 'Username:',
        sifra: 'Password:',
        jednostavna: 'Basic',
        jednostavna_pretraga: 'Basic search',
        napredna: 'Advanced',
        napredna_pretraga: 'Advanced search',
        po_kodu: 'By code',
        tip_knjige: 'Type of book',
        jezici: 'Languages',
        zaduzenja: 'Assignments',
        kriticne_knjige: 'Critical books',
        zaduzenje: 'Assignment',
        razduzenje: 'Discharge',
        zaduzene_knjige: 'Charged books',
        rezervacije_korisnika: 'User reservations',
        naziv: 'Title',
        autor: 'Author',
        naziv_ili_autor_su_obavezni: 'Title or author are required',
        naziv_je_obavezan: 'Title is required',
        autor_je_obavezan: 'Author is required',
        izdavac: 'Publisher',
        godina: 'Year',
        kljucne_rijeci: 'Keywords',
        pretrazi: 'Search',
        kod: 'Code:',
        pretraga_po_kodu: 'Search by code',
        kod_je_obavezan: 'The code is required',
        uredu: 'Ok',
        rezervisi: 'Reserve',
        zaduzi: 'Charge',
        razduzi: 'Discharge',
        admin: 'Administrator',
        rezervacije: 'Reservations',
        potvrdi_pass: 'Retype pass:',
        email: 'Email:',
        adresa: 'Address:',
        telefon: 'Phone:',
        prezime: 'Surname:',
        ime: 'Name:',
        registruj_me: 'Register',
        sve_podatke_unijeti: 'You must populate all fields!',
        sifre_nisu_iste: 'Passwords dont match!',
        sifra_treba_da_bude: 'Password must be between 4 and 8 digits long and include at least one numeric digit.',
        email_nije_validan: 'Email is not valid!',
        drugi_username: 'Please take another username!',
        uspjesna_registracija: 'You have successfully registered! Please verify account with your e-mail!',
        greska_ponovo: 'Error! Try again!',
        nema_kriticnih: 'No critical books!',
        da_li_ste_sig_za_zaduzenje: 'Are you sure you want to charge this book?',
        da_li_ste_sig_za_rezervaciju: 'Are you sure you want to reserve this book?',
        rok: 'Period:',
        da: 'Yes',
        ne: 'No',
        ok: 'Ok',
        uspjesna_rezervaicija: 'You have successfully reserved a book! You should come in the next two days!',
        uspjesna_rezervaicija_wa: 'You have successfully reserved a book! In the coming days you will be notified about charge!',
        trebate_biti_clan: 'To reserve a book you need to be a member!',
        da_li_ste_sigurni_za_razd: 'Are you sure you want to discarge this book?',
        korisnik_nema_zaduzenja: 'User has no charges!',
        treba_usename: 'Username is required!',
        nema_rez: 'No reservations!',
        nema_zadu_knjiga: 'There is no charged books!',
        korisnik_nema_rez: 'User has no reservations!',
        rok_treba_biti: 'The period should be between 5 and 30 days!',
        uspjesno_zaduzenje: 'You have successfully charged book!',
        nemate_zaduzenja: 'You have no charges!',
        zaduzenja_korisnika: 'User assignments',
        rezervacija: 'Reservation',
        captcha_validacija: 'Confirm captcha!',
        galerija: 'Gallery',
        dopusti: 'Allow access',
        zabrani: 'Deny access',
        banovanje: 'Access',
        role: 'Role',
        korisnici: 'Users',
        promjeni_rolu: 'Change role',
        statistika: 'Statistics',
        dom_tipovi_knjiga: 'Dominance of book types',
        rezervacije_u_godini: 'Reservations during the year'
    });
    $translateProvider.translations('bs', {
        katalog: 'Katalog',
        clanstvo_produzi : 'Trebate produziti clanstvo!',
        vec_rezervisano : 'Vec ste rezervisali ovu knjigu!',
        pogr_username : 'Username je pogresan!',
        doci_po_knjigu : 'Po knjigu trebate doci u narednim danima!',
        obavjest_raspolozivost : 'Obavjestit cemo vas kada knjiga bude raspoloziva!',
        rok_istekao : 'Istekao rok cekanja na zaduzenje!',
        knjiga_zaduzena : 'Knjigu ste zaduzili!',
        nije_zaduzio_knjigu : 'Korisnik nije zaduzio knjigu!',
        istekao_rok_razduzivanje : 'Istekao rok za razduzivanje!',
        nije_istekao_rok_razduzivanje : 'Nije istekao rok za razduzivanje!',
        knjiga_razduzena : 'Knjiga razduzena!',
        vec_posjeduje_knjigu : 'Korisnik vec posjeduje ovu knjigu!',
        uspjesno_ste_razduzili : 'Uspjesno ste razduzili knjigu!',
        knjiga_nije_vracena : 'Knjiga nije vracena!',
        knjiga_je_vracena: 'Knjiga je vracena!',
        pocetna : 'Pocetna',
        knjige : 'Knjige',
        informacije : 'Informacije',
        kontakt : 'Kontakt',
        prijava: 'Prijava',
        odjava: 'Odjava',
        registracija : 'Registracija',
        korisnicko_ime : 'Korisnicko ime:',
        sifra : 'Sifra:',
        jednostavna: 'Jednostavna',
        jednostavna_pretraga: 'Jednostavna pretraga',
        napredna_pretraga: 'Napredna pretraga',
        napredna : 'Napredna',
        po_kodu : 'Po kodu',
        tip_knjige : 'Tip knjige',
        jezici : 'Jezici',
        zaduzenja : 'Zaduzenja',
        kriticne_knjige : 'Kriticne knjige',
        zaduzenje : 'Zaduzenje',
        razduzenje : 'Razduzenje',
        zaduzene_knjige : 'Zaduzene knjige',
        rezervacije_korisnika : 'Rezervacije korisnika',
        naziv : 'Naziv',
        autor : 'Autor',
        naziv_ili_autor_su_obavezni: 'Naziv ili autor su obavezni',
        naziv_je_obavezan: 'Naziv je obavezan',
        autor_je_obavezan: 'Autor je obavezan',
        izdavac : 'Izdavac',
        godina : 'Godina',
        kljucne_rijeci : 'Kljucne rijeci',
        pretrazi : 'Pretrazi',
        kod : 'Kod:',
        pretraga_po_kodu : 'Pretraga po kodu',
        kod_je_obavezan : 'Kod je obavezan',
        uredu : 'Uredu',
        rezervisi : 'Rezervisi',
        zaduzi : 'Zaduzi',
        razduzi: 'Razduzi',
        admin: 'Administrator',
        rezervacije: 'Rezervacije',
        potvrdi_pass: 'Potvrdi sifru:',
        email: 'E-posta:',
        adresa: 'Adresa:',
        telefon: 'Telefon:',
        prezime: 'Prezime:',
        ime: 'Ime:',
        registruj_me: 'Registruj me',
        sve_podatke_unijeti: 'Morate unijeti sve podatke!',
        sifre_nisu_iste: 'Passwordi nisu isti!',
        sifra_treba_da_bude: 'Password moze biti izmedju 4 i 8 karaktera, i mora imati barem jedan broj!',
        email_nije_validan: 'Email nije validan!',
        drugi_username: 'Molimo uzmite drugi username!',
        uspjesna_registracija: 'Uspjesno ste registrovani! Molimo vas da se jos verifikujete putem vaseg email-a!',
        greska_ponovo: 'Greska! Pokusajte ponovo!',
        nema_kriticnih: 'Nema kriticnih knjiga!',
        da_li_ste_sig_za_zaduzenje: 'Da li ste sigurni da zelite zaduziti ovu knjigu?',
        da_li_ste_sig_za_rezervaciju: 'Da li ste sigurni da zelite rezervisati ovu knjigu?',
        rok: 'Rok:',
        da: 'Da',
        ne: 'Ne',
        ok: 'Uredu',
        uspjesna_rezervaicija: 'Uspjesno ste rezervisali knjigu! Po knjigu bi trebali doci u naredna dva dana.',
        uspjesna_rezervaicija_wa: 'Uspjesno ste rezervisali knjigu! U narednim danima cemo vas obavjestiti o zaduzenju iste!',
        trebate_biti_clan: 'Da bi rezervisali knjigu trebate biti clan!',
        da_li_ste_sigurni_za_razd: 'Da li ste sigurni da zelite razaduziti ovu knjigu?',
        korisnik_nema_zaduzenja: 'Korisnik nema zaduzenja!',
        treba_usename: 'Trebate unijeti username!',
        nema_rez: 'Nemate rezervacija!',
        nema_zadu_knjiga: 'Nema zaduzenih knjiga!',
        korisnik_nema_rez: 'Korisnik nema rezervacija!',
        rok_treba_biti: 'Rok treba biti izmedju 5 i 30 dana!',
        uspjesno_zaduzenje: 'Uspjesno ste zaduzili knjigu!',
        nemate_zaduzenja: 'Nemate zaduzenja!',
        zaduzenja_korisnika: 'Zaduzenja korisika',
        rezervacija: 'Rezervacija',
        captcha_validacija: 'Potvrdite captchu!',
        galerija: 'Galerija',
        dopusti: 'Dopusti',
        zabrani: 'Zabrani',
        banovanje: 'Banovanje',
        role: 'Role',
        korisnici: 'Korisnici',
        promjeni_rolu: 'Promjeni rolu',
        statistika: 'Statistika',
        dom_tipovi_knjiga: 'Dominantnost tipova knjiga',
        rezervacije_u_godini: 'Rezervacije tokom godine'
    });

    $translateProvider.preferredLanguage('bs');
    $translateProvider.fallbackLanguage('en');
    
});

app.controller('TranslateCtrl', function ($scope, $translate) {
    $scope.changeLanguage = function (event) {

        var currentLang = document.getElementById(event.target.id).innerHTML;
        if (currentLang == "BS")
        {
            document.getElementById(event.target.id).innerHTML = "EN";
            $translate.use('en');
        }
        else
        {
            document.getElementById(event.target.id).innerHTML = "BS";
            $translate.use('bs');
        }
    };
});