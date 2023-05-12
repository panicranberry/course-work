function loadGoods() {
   $.getJSON('goods.json', function (data) {
      var out = '';
      for (var key in data){
         out+='<div class="single-goods">';
         out+='<img src="'+data[key].image+'">';
         out+='<p>'+data[key]['name']+'</p>';
         out+='<p>'+data[key]['cost']+'</p>';
         out+='<button>КУПИТЬ</button>';
         out+='</div>';
      }
      $('#goods').html(out);
   })
}