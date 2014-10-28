// JavaScript Document
var basliklar = ['The Tourism Paradise of Antalya','Medical Tourism']
var icerik = 
			[
			'<p>Antalya is a kind capital of tourism; hosting historical and natural beauties in which all kinds of transportation opportunities are easily provided, having higher hotel management standards, and in which qualified medical people with advanced health infrastructure are living therein.</p><p>Antalya; with a surface area of 20.723 km2 and a population of 2.158.268, having a special 640 km-coast line, is a rich city with its historical places and ruins. In the economy of Antalya; tourism, trade and agriculture are at the fore front, and industrial activates have been developing improvements recently. Besides, see, sand and sun tourism, the city has a big liveliness and action due to its culture tourism, golf tourism, sports tourism, congress tourism, yacht tourism, mountain tourism, tableland tourism, winter tourism and health tourism which continue through the year. Mediterranean University and International Antalya University are available in Antalya and students utilize from all opportunities provided by the modern education. There are two airports in Antalya; Antalya Airport and Gazipaşa Airport. Around 60.000 planes are landing to International Antalya Airport, within the scope of international flights, which is one of the biggest airport of the Europe, and 345 direct flight point connection are available. Antalya Airport meets around eleven million visitors coming from 184 countries. In terms of distribution of tourists visiting Turkey in 2013 according to border gates; 35% of them are entering through Antalya, and the 38% of the tourists visiting Antalya in 2013 are older than 45, in terms of their ages. There are totally 912 touristic plants of which 296 of them have five- star qualification in Antalya and total number of beds is at a capacity to be capable of hosting 469.000 guests. Besides, SPA-Wellness applications are executed by professional teams at hotels. There are 15 golf courses in Antalya and these courses are among the best destinations in Turkey.</p><p>Besides, Antalya is a destination which is preferred for camp works by various professional sport clubs. Antalya is the top city among the cities having blue flag-beaches worldwide in 2014. Antalya is very favorable for touristic actions in terms of its climate for 12 months a year. Annual temperature average is; 18, 4°C’dir, mild climate conditions are a factor of preference by all age groups year-round.</p><p>The main theme of ‘children and flowers’ EXPO 2016 to be held in Antalya in 2016 that the message is a green world for future generations.</p><p>Health sector has made breakthroughs in Turkey in recent years, the quality and efficiency of it has been raised. In Turkey, health sector serves in European standards with modern hospitals, its raised manpower, expert doctors, technological infrastructure and experience. All hospitals in Turkey have international service quality and most of private hospitals have been certified by world- famous accreditation institutions. Coordination of health services supplied to foreign patients within Ministry of Health is provided. Foreign citizens are enabled translation and consultancy service in 6 languages (English, German, Arabic, Russian, Persian and French) through overseas calls by; +90 312 444 47 28 and calls within Turkey by; 444 47 28 within the scope of International Patient Support Department. Furthermore, in case of emergency; phone no: 112, and for complaints; phone no: 184 also provide foreign- language- services. Works and transactions supplied to foreign patients in Antalya in relation with health services are followed up by Antalya Health Directorate Provincial Tourism Department.</p>'
			,
			'<p>In Antalya, health quality and infrastructure has also developed in parallel with the general level of Turkey. In total; there exist; 14 public hospitals, 27 private hospitals and 2 university hospitals, 22 private branch centers, 23 dialysis centers, 5 treatment centers for supporting reproduction, 6 oral and dental health centers, 20 policlinics, 79 mouth–dental health polyclinics, 1 hyperbaric oxygen treatment center, 2 organ transplantation centered laboratory and institutions. All relevant organizations are licensed by the Ministry of Health. All organizations in Antalya supply service in accordance with National accreditation criteria and audited by the Ministry of Health; 2 private hospitals have JCI quality certificates. Foreign visitors in Antalya are supplied health service in existing health organizations in all branches. With its raised manpower and qualified expert physicians, Antalya plays a leading role in health tourism. Antalya health tourism service areas are; Eye, Dental, Orthopedics, Brain Surgery, Cardiology-KVC, Test-Tube Baby (IVF) applications, Oncology, Radiotherapy, Plastic Surgery, Transplantation, Dialysis, Hair Transplantation, Physical Treatment, advanced age group patients requiring medical care.</p><p>In 2013, 118.611 foreign visitors who visited Antalya but required medical service were provided health service. 6225 foreign patient have come to Antalya as planned within the scope of health tourism and were treated.</p><p>All kinds of services which may be needed by the visitors during the period beginning from arriving to Antalya and until leaving are provided by expert health personnel and other officials. The primary double arm transplantation made in 2010 and the primary face transplantation made in 2013 in Akdeniz University Hospital has been concrete evidence showing the developments achieved by Antalya.</p><p>In the content of the Guide; Antalya’s cultural and natural beauties, modern accommodation facilities, favorable climate conditions, qualified health manpower and qualified developed health infrastructure are introduced, it is thereby aimed that; health tourists who wish to utilize from health services could reach those health services which they need. Both due to city’s historical and cultural richness and its development level in the field of health, health tourists utilize health services throughout 12 months in Antalya and also able to find an opportunity to make a nice holiday simultaneously. Antalya; with its health services using advanced technology and supplying qualified and reliable health service, is the shining star of the health sector.</p>'
			]
var resimler = ['<div id="div1" class="slidingSpaces demo5" data-bgimage="fotolar/1.jpg"></div><div id="div2" class="slidingSpaces demo5"  data-bgimage="fotolar/2.jpg"></div><div id="div3" class="slidingSpaces demo5"  data-bgimage="fotolar/3.jpg"></div><div id="div4" class="slidingSpaces demo5"  data-bgimage="fotolar/4.jpg"></div><div id="div5" class="slidingSpaces demo5"  data-bgimage="fotolar/5.jpg"></div>',
				'<div id="div1" class="slidingSpaces demo5" data-bgimage="fotolar/medical_guide.jpg"></div>'
				];

var pages = [$('#ana_menu')];
var sayac=0;

$(document).ready(function(e) {
    

	$('.btn').each(function(index, element) {
		if($(this).attr("menu_no"))
			$(this).click(function(e) {
				getpage(index-1,$(this).attr("menu_no"));//
			});
    });
	
	$('.exit').live("click",function(){
		$('.popup').fadeTo("fast",0,function(){
			$('.popup').remove();
		});
	})	
	document.addEventListener("backbutton", onBackKeyDown, false);
	document.addEventListener("deviceready", onDeviceReady, false);
	versionCheck();
});

function onDeviceReady() {
	//AppMobi.device.setRotateOrientation("portrait");
	anim_1();
}

function onBackKeyDown() {
	if(sayac)
		return_home(pages[sayac],pages[sayac-1])
	else
		navigator.app.exitApp();
}

function anim_1(){
	$('#anim_1').fadeTo(1000,1,function(){
			anim_2()
		});
}
function anim_2(){
	$('#anim_2').fadeTo(2000,1,function(){
			$('#anim_1').hide();
			$('#ana_menu').show();
			anim_3()
		});
}

function anim_3(){
	$('#ana_menu').fadeTo(3000,1,function(){
			$('#anim_2').hide();			
		});
}

function getpage(say,rel){
	if(rel!="-2"){
		$('body').append('<div class="page ilk theme_'+(say+1)+'"><div class="baslik"></div><div class="sliderCont"><div class="container_slider"></div></div><div class="icerik"></div></div>');
		$('.page.ilk .baslik').append(basliklar[say]+' <div class="home_btn"></div>');//$('.page .baslik').append(donenSonuc.baslik+' <div class="home_btn"></div>');					
		$('.page.ilk .icerik').append(icerik[say]);//$('.page .icerik').append(donenSonuc.metin);
		$('.page.ilk .sliderCont').append(resimler[say]);//$('.page .sliderCont').append(donenSonuc.resimler);
		
		$('.slidingSpaces').ferroSlider({
			container				: ".container_slider",
			createMap				: true,
			easing					: 'snap',
			mapPosition				: "bottom_center"
		});
		page_show($('.page.ilk'),$('#anamenu'));
		$('.home_btn').click(function(e) {
			return_home($('.page.ilk'),$('#anamenu'))
		});
	}
	else{
		$.ajax({
			beforeSend: function(){
				preloader(true);
			},
			data : {menu:rel},
			url: "http://www.antalyasaglikturizmi.saglik.gov.tr/sakin_silme.php",
			type: "POST",
			cache: false,
			dataType:"json",
			success : function(donenSonuc){
				$('body').append('<div class="page ilk theme_'+(say+1)+'"><div class="baslik"></div><div class="itemdoldur"></div></div>');
				$('.page.ilk .baslik').append('GUIDE <div class="home_btn"></div>');
				$('.page.ilk .itemdoldur').append(donenSonuc.items);
				
				$('.alt_baslik').each(function(index, element) {
					$(this).click(function(e) {
						getkats($(this).attr("rel"),$(this).html(),$('.page.ilk'))
					});
				});
				
				page_show($('.page.ilk'),$('#anamenu'));
				$('.home_btn').click(function(e) {					
					return_home($('.page.ilk'),$('#anamenu'))
				});
				preloader(false);
			},
			error: function(){
				preloader(false);
				alert("Check your connection")
			}
		})
	}
	
	
	/*$.ajax({
		beforeSend: function(){
			preloader(true);
		},
		data : {menu:rel},
		url: "http://www.antalyasaglikturizmi.saglik.gov.tr/sakin_silme.php",
		type: "POST",
		cache: false,
   		dataType:"json",
		success : function(donenSonuc){
			if(rel!="-2"){
				$('body').append('<div class="page ilk theme_'+(say+1)+'"><div class="baslik"></div><div class="sliderCont"><div class="container_slider"></div></div><div class="icerik"></div></div>');
				$('.page .baslik').append(basliklar[say]+' <div class="home_btn"></div>');//$('.page .baslik').append(donenSonuc.baslik+' <div class="home_btn"></div>');					
				$('.page .icerik').append(icerik[say]);//$('.page .icerik').append(donenSonuc.metin);
				$('.page .sliderCont').append(donenSonuc.resimler);
				
				$('.slidingSpaces').ferroSlider({
					container				: ".container_slider",
					createMap				: true,
					easing					: 'snap',
					mapPosition				: "bottom_center"
				});
			}
			else{
				$('body').append('<div class="page ilk theme_'+(say+1)+'"><div class="baslik"></div><div class="itemdoldur"></div></div>');
				$('.page.ilk .baslik').append('GUIDE <div class="home_btn"></div>');
				$('.page.ilk .itemdoldur').append(donenSonuc.items);
				
				$('.alt_baslik').each(function(index, element) {
                    $(this).click(function(e) {
                        //alert($(this).attr("rel"))
						getkats($(this).attr("rel"),$(this).html(),$('.page.ilk'))
                    });
                });
			}
			
			page_show($('.page.ilk'),$('#anamenu'));
			$('.home_btn').click(function(e) {
				return_home($('.page.ilk'),$('#anamenu'))
			});
			preloader(false);
		}
	})*/
	/*pages[j-1] = $('#anamenu');	
	pages[j] = $('.page.ilk');*/
	//pages.push($('#anamenu'),$('.page.ilk'));
	//pages.push();
	
	//page1 = $('.page.ilk');	page2 = $('#anamenu');
}

function getkats(rel,basl,elm){
	$.ajax({
		beforeSend: function(){
			preloader(true);
		},
		data : {kat_id:rel},
		url: "http://www.antalyasaglikturizmi.saglik.gov.tr/kat_listele.php",
		type: "POST",
		cache: false,
		success : function(donenSonuc){
			$('body').append('<div class="page theme_3 alt_cat kats"><div class="baslik"></div><div class="itemdoldur"></div></div>');
			$('.page.alt_cat .baslik').append(basl+' <div class="home_btn alt"></div>');
			$('.page.alt_cat .itemdoldur').append(donenSonuc);
			$('.page.alt_cat .alt_baslik').each(function(index, element) {
                    $(this).click(function(e) {
						getdetay($(this).attr("rel"),$('.page.alt_cat.kats'))						
                    });
                });
				
			page_show($('.page.alt_cat.kats'),elm);
			
			$('.home_btn.alt').click(function(e) {
				return_home($('.page.alt_cat.kats'),elm)
			});
			preloader(false);
		},
		error: function(){
			preloader(false);
			alert("Check your connection")
		}
	})
}

function getdetay(rel,elm2){
	$.ajax({
		beforeSend: function(){
			preloader(true);
		},
		data : {item_no:rel},
		url: "http://www.antalyasaglikturizmi.saglik.gov.tr/get_detay.php",
		type: "POST",
		cache: false,
   		dataType:"json",
		success : function(donenSonuc){
			$('body').append('<div class="page theme_3 alt_cat detay"><div class="baslik"></div><div class="sliderCont"><div class="container_slider"></div></div><div class="icerik"><div class="pop_btn phone_icn" basl="Phone & Fax" icrk="<p><strong>T :</strong> '+donenSonuc.telefon+'<br /></p> <p><strong>F :</strong> '+donenSonuc.faks+'</p>"></div><div class="pop_btn adres_icn _a" basl="Address" icrk="<p>'+donenSonuc.adres+'</p>"></div><div class="pop_btn web_icn" basl="Web & Email" icrk="<p><strong>W :</strong> '+donenSonuc.web+'<br /></p> <p><strong>M :</strong> '+donenSonuc.email+'</p>"></div></div></div>');
			$('.page.alt_cat.detay .baslik').append(donenSonuc.baslik+' <div class="home_btn altpage"></div>');
			$('.page.alt_cat.detay .sliderCont').append(donenSonuc.resim);
			$('.page.alt_cat.detay .icerik').append(donenSonuc.metin);
			
			$('.slidingSpaces').ferroSlider({
				container				: ".container_slider",
				createMap				: true,
				easing					: 'snap',
				mapPosition				: "bottom_center"
			});

			page_show($('.page.alt_cat.detay'),elm2);
			
			$('.pop_btn').each(function(index, element) {
               $(this).click(function(e) {
					popla($(this).attr("icrk"),$(this).attr("basl"))
				}); 
            });
			
			$('.home_btn.altpage').click(function(e) {
				return_home($('.page.alt_cat.detay'),elm2)
			});
			preloader(false);
		}
	})
}

function preloader(bayrak){
	if(bayrak){
		$('body').append('<div class="ajax_loader"></div>');
		$('.ajax_loader').fadeTo("fast",1);
	}
	else
		$('.ajax_loader').remove()
}
function return_home(elm,onceki){
	sayac--;
	//window.scrollTo(0, 0);
	if(onceki)
		onceki.show()
	elm.fadeTo("fast",0,function(){
		elm.remove()
	});
	pages.pop();
	//pages.pop();
}

function page_show(page,ana_page){
	versionCheck()
	sayac++;
	window.scrollTo(0, 0);
	page.fadeTo("fast",1,function(){
		if(ana_page)
			ana_page.hide();
	});
	pages.push(page);
}

function popla(icrk,basl){
	$('body').append('<div class="popup"><div class="top">'+basl+'<div class="exit"></div></div><div class="detay">'+icrk+'</div></div>');
	$('.popup').fadeTo("fast",1,function(){
		versionCheck();
	});
	
}

function versionCheck(){
	var verNum = parseInt(getAndroidVersion());
	if(verNum<3)
		$('.bas_img, .second_img, .logo, .home_btn, .alt_cat .baslik, .phone_icn, .adres_icn, .web_icn, .serit, .btn._0, .exit').addClass('vers');
}

function getAndroidVersion(ua) {
    var ua = ua || navigator.userAgent; 
    var match = ua.match(/Android\s([0-9\.]*)/);
    return match ? match[1] : false;
};
