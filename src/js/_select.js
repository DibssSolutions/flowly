import select2 from 'select2';

$(document).ready(function() {
  let select_2 = $('.js-select');

  select_2.each(function(index, val) {
    $(val).select2({
      width: '100%',
      dropdownAutoWidth: true,
      minimumResultsForSearch: Infinity,
      placeholder: $(val).data('placeholder')
    });
  });

  $('.js-select').each(function() {
    $($(this).data('select2').$container).addClass('select_ordinary');
    $($(this).data('select2').$dropdown).addClass('select_ordinary');
  });
});
