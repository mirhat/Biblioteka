var app = angular.module('BibliotekaApp', ['ngRoute', 'ngCookies', 'pascalprecht.translate', 'noCAPTCHA', 'chart.js', 'angularUtils.directives.dirPagination'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
            .when('/Login', {
                templateUrl: 'views/LoginForm.html'
            })
			.when('/Register', {
			    templateUrl: 'views/RegisterForm.html'
			})
            .when('/Napredna', {
                templateUrl: 'views/NaprednaPretragaForm.html'
            })
            .when('/Pocetna', {
                templateUrl: 'views/Home.html'
            })
            .when('/Jednostavna', {
                templateUrl: 'views/JednostavnaPretragaForm.html'
            })
            .when('/Knjige', {
                templateUrl: 'views/JednostavnaPretragaForm.html'
            })
            .when('/PoKodu', {
                templateUrl: 'views/PoKoduPretragaForm.html'
            })
            .when('/Zaduzenja', {
                templateUrl: 'views/ZaduzenjeForm.html'
            })
            .when('/Zaduzenje', {
                templateUrl: 'views/ZaduzenjeForm.html'
            })
            .when('/Zaduzeneknjige', {
                templateUrl: 'views/ZaduzeneknjigeForm.html'
            })
            .when('/Razduzenje', {
                templateUrl: 'views/RazduzenjeForm.html'
            })
            .when('/KKnjige', {
                templateUrl: 'views/KKnjigeForm.html'
            })
            .when('/RKnjige', {
                templateUrl: 'views/RKnjigeForm.html'
            })
            .when('/ZKnjige', {
                templateUrl: 'views/ZKnjigeForm.html'
            })
            .when('/ResetPass', {
                templateUrl: 'views/ResetPass.html'
            })
            .when('/Katalog', {
                templateUrl: 'views/Katalog.html'
            })
            .when('/Kontakt', {
                 templateUrl: 'views/KontaktForm.html'
            })
            .when('/Informacije', {
                templateUrl: 'views/InformacijeForm.html'
            })
            .when('/Galerija', {
                templateUrl: 'views/GalerijaForm.html'
            })
            .when('/Upload', {
                templateUrl: 'views/UploadForm.html'
            })
            .when('/Banovanje', {
                templateUrl: 'views/KorisniciForm.html'
            })
            .when('/Rola', {
                templateUrl: 'views/RoleForm.html'
            })
            .when('/Statistika', {
                templateUrl: 'views/StatistikaForm.html'
            })
            .otherwise({
                templateUrl: 'views/Home.html'
            });
        }
    ])