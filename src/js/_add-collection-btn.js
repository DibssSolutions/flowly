$('.js-add-collection-btn').each((index, el) => {
  const btn = $(el);
  const anchor = btn.closest('a');
  anchor.on('click', e => e.preventDefault());
  btn.on('click', e => {
    btn.addClass('btn_blue').removeClass('btn_light-grey');
    btn.find('.btn__text').text('Сохранено');
  });
});
