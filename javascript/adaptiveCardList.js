(function($) {
  $.fn.adaptiveCardList = function(param) {

    // Params
    let count;
    (param.count && param.count <= 4) ? count = param.count : count = 3;
    let imageHeight;
    
    (param.imgHeight && param.imgHeight <= 360) ? imageHeight = '360' : imageHeight = param.imgHeight;
    
    this.css({'border':'none'})
    this.children('img').css({'max-height': imageHeight + 'px', 'object-fit':'cover'});
    this.children('.card-body').addClass('d-flex flex-column justify-content-between');

    // Call function
    (hideCard() == true) ? hideShowBtn(this) : false;
    splittingAnArray(this)
    
    // Add wrapper
    // this.parent().append('<div class="asdfsda">')
    this.wrapAll('<div class="row">');

    // Splitting an array
    function splittingAnArray(item) {
      let subarray = [];
      for (let i = 0; i < Math.ceil(item.length / count); i++) {
        subarray[i] = item.slice((i * count), (i * count) + count);
        let numArr = 1;

        (i == 0) ? resizeCard(subarray[i]) : false;
        (i > 0) ? hideCard(subarray[i]) : false;

        hideBtn();

        $('#show_btn').on('click', function(e) {
          e.preventDefault();
          $(subarray[numArr]).css({'display':'block'});
          $('#hide_btn').removeClass('disabled'); 
          resizeCard(subarray[numArr]);

          (numArr + 1 == subarray.length) ? showBtn() : false;

          numArr++;
        })

        $('#hide_btn').on('click', function(e) {
          e.preventDefault();
          numArr--;
          (numArr > 0) ? $(subarray[numArr]).css({'display':'none'}) + $('#show_btn').removeClass('disabled') : false;
          (numArr <= 1) ? hideBtn() : false;
        })

      };
    };

    // Resize card
    function resizeCard(subArr) {
      $.each(subArr, function() {
        (subArr.length == 1) ? $(this).addClass('col-12') : false;
        (subArr.length == 2) ? $(this).addClass('col-12 col-md-6') : false;
        (subArr.length == 3) ? $(this).addClass('col-12 col-sm-6 col-md-4') : false;
        (subArr.length == 4) ? $(this).addClass('col-12 col-sm-6 col-md-4 col-lg-3') : false;
      });
    };

    // Hide Block
    function hideCard(subArr) {
      $.each(subArr, function() {
        $(this).css({'display':'none'});
      })

      return true;
    }

    // Add Button Show and Hide 
    function hideShowBtn(item) {
      item.parent().append(
        '<div class="row"><div class="col-12 text-center"><div class="btn-group"><a href="#" id="show_btn" class="btn btn-outline-primary " aria-current="page">Показать ещё</a><a href="#" id="hide_btn" class="btn btn-outline-primary">Скрыть</a></div></div></div>'
      )
    }

    function showBtn() {
      $('#show_btn').addClass('disabled');
    }

    function hideBtn() {
      $('#hide_btn').addClass('disabled');
    }


  };
})(jQuery);