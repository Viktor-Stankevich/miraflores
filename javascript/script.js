
$(document).ready(function() {

  $('#card_list .card').adaptiveCardList({
    'count': 3,
    'imgHeight': 360
  });

  // Card List !!!РАБОТАЕТ!!!
  // const cardList = $('#card_list .card');
  // console.log(typeof(cardList))
  // const size = 3;
  
  // let subarray = [];
  
  // for (let i = 0; i < Math.ceil(cardList.length / size); i++) {
  //   subarray[i] = cardList.slice((i * size), (i * size) + size);
  //   let count = 1;

  //   if (i == 0) {
  //     resizeCard(subarray[i]);
  //   }

  //   if (i > 0) {
  //     $(subarray[i]).css({'display':'none'});
  //   }

  //   hideBtn()

    // $('#show_btn').on('click', function(e) {
    //   e.preventDefault();
    //   $(subarray[count]).css({'display':'block'})
    //   resizeCard(subarray[count]);
    //   $('#hide_btn').removeClass('disabled');


    //   if (count + 1 == subarray.length) {
    //     showBtn()
    //   }

    //   // console.log(count + 1 + ' --- ' + subarray.length)
      
      
      
    //   count++;
    // })

    // $('#hide_btn').on('click', function(e) {
    //   e.preventDefault();
    //   count--
    //   if (count > 0) {
    //     $(subarray[count]).css({'display':'none'})
        

    //     if (count <= 1) {
    //       hideBtn()
    //     }

    //     console.log(i)

    //     $('#show_btn').removeClass('disabled');


    //   }
    // })



  // }

  // function hideBtn() {
  //   $('#hide_btn').addClass('disabled');
  // }

  // function showBtn() {
  //   $('#show_btn').addClass('disabled');
  // }


  // function resizeCard(arr) {
    
  //   $rand = Math.floor(Math.random() * arr.length);

  //   $.each(arr, function() {
  //     if (arr.length == 1) {
  //       $(this).addClass('col-12')
  //     }

  //     if (arr.length == 2) {
  //       $(this).addClass('col-12 col-md-6')
  //     }

  //     if (arr.length == 3) {
  //       $(this).addClass('col-12 col-md-4')
  //     }

  //     if (arr.length == 4) {
  //       $(this).addClass('col-12 col-md-3')
  //     }

  //   })
  // }

})