$(document).ready(function(){
	
	
	//butona tıklandığında hızlı menü açılsın, tekrar tıklandığında
	//kapansın
	$(".btnMenu977").click(function() {
		$(".menu977").slideToggle();
	});

	/*
		butona tıklandığında hızlı menü açıldığında tarayıcıyı
		uzattığımda, hızlı menü hala oradaydı.
		böyle bir çözüm uyguladık.
		tarayıcı yeni bir boyut kazandığında yani uzadığında ya da
		kısaldığında hızlı menü direkt olarak gizleniyor.
		çözüm alttaki kod bloğudur.
	*/
	
	
	
	/*Scroll olduğunda en üste çık butonu
	Üste çık butonu olduğu için, sabit menü yapmayacağım
	*/
	$(window).scroll(function() {
		var sc = $(window).scrollTop();
		if(sc > 300){
			$(".usteCik").css('display', 'block');
		}
		else{
  			$(".usteCik").css('display', 'none');
		}
	});

	//Eğer üste çık butonuna basılırsa, ekran sayfanın en üstüne çıksın
	$(".usteCik").click(function() {
		$(window).scrollTop(0);
	});


	$(window).resize(function() {
		$(".menu977").hide();
	});
	/*
		resmin yüksekliğiyle slider kapsama
		divinin yüksekliğini eşitleyelim
	*/
	$(".testiCon").outerHeight() = $(".sliderTesti>li>img").outerHeight();
});