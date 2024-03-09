$(function(){
 $('.load-more').on('click',function(){
	 const btn = $.find('span');
	 $.ajax({url: '../data.html',type: 'GET',
			beforSend: function(){btn.attr('disabled',true);
								 loader.addrclass('d-inline-block');
								 },
			success:Function(responce){
			 setTimeout(function(){
			 loader.removeClass('d-inline-block');
			 btn.attr('disabled', false);
			 console.log(responce);
			 $('.after-posts').before(responce);
			}, 1000);
		},
		error:function(){
	 alert('Error!'):
	 loader.removeClass('d-inline-block');
	 btn.attr('disabled', false);
    }			
			
	})
					
					
	}):

});