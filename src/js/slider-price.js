$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 100000,
    values: [ 10, 30000 ],
    slide: function( event, ui ) {
      $( "#price_min" ).val( "$" + ui.values[ 0 ]);
      $( "#price_max" ).val( "$" + ui.values[ 1 ]);
    }
  });
} );
