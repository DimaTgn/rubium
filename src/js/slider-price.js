$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 100000,
    values: [ 10, 30000 ],
    slide: function( event, ui ) {
      $( "#price_min" ).val( ui.values[ 0 ]);
      $( "#price_max" ).val( ui.values[ 1 ]);
    }
  });
  $('#price_min').val($("#slider-range").slider("values", 0))
  $('#price_max').val($("#slider-range").slider("values", 1))

  $('#price_min').change(function() {
    $("#slider-range").slider('values', 0, $(this).val());
  });

  $('#price_max').change(function() {
    $("#slider-range").slider('values', 1, $(this).val());
  });
} );
