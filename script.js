/*------------------------------------нажатие на станцию----------------------------------------------*/
$("#image").on('click', function() {
  $(".fill").toggleClass('scale')
  $(".station").toggleClass('hide')
  $(".krug").toggleClass('hide')
  $(".yellow").toggleClass('hide')
  $(".blue").toggleClass('hide')
  $(".red").toggleClass('hide')
  $(".violet").toggleClass('hide')
  $(".green").toggleClass('hide')

  $(".top").toggleClass('top_final')
  $(".menue").toggleClass('menue_final')
  $(".podvalimg").toggleClass('podval_final')
});
/*------------------------------------нажатие на станцию----------------------------------------------*/

/*------------------------------------кнопки верхнего блока----------------------------------------------*/
const el = document.getElementById('container1');
const hiddenDiv = document.getElementById('hidden-word1');
el.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv.style.visibility = 'visible';
});
el.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv.style.visibility = 'hidden';
});

const el2 = document.getElementById('container2');
const hiddenDiv2 = document.getElementById('hidden-word2');
el2.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv2.style.visibility = 'visible';
});
el2.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv2.style.visibility = 'hidden';
});

const el3 = document.getElementById('container3');
const hiddenDiv3 = document.getElementById('hidden-word3');
el3.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv3.style.visibility = 'visible';
});
el3.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv3.style.visibility = 'hidden';
});

const el4 = document.getElementById('container4');
const hiddenDiv4 = document.getElementById('hidden-word4');
el4.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv4.style.visibility = 'visible';
});
el4.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv4.style.visibility = 'hidden';
});

const el5 = document.getElementById('container5');
const hiddenDiv5 = document.getElementById('hidden-word5');
el5.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv5.style.visibility = 'visible';
});
el5.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv5.style.visibility = 'hidden';
});
/*------------------------------------кнопки верхнего блока----------------------------------------------*/

/*------------------------------------нажатие на стрелочку----------------------------------------------*/
$(".arrow-right").on('click', function() {
  $(".Историяimage").toggleClass('hide')
  $(".arrow-right").toggleClass('hide')
  $(".Афишаimage").toggleClass('center')
});

$(".arrow-right2").on('click', function() {
  $(".Афишаimage").toggleClass('hide')
  $(".arrow-right2").toggleClass('hide')
  $(".Сувенирыimage").toggleClass('center')
});

$(".arrow-right3").on('click', function() {
  $(".Сувенирыimage").toggleClass('hide')
  $(".arrow-right3").toggleClass('hide')
  $(".Новостиimage").toggleClass('center')
});
/*------------------------------------нажатие на стрелочку----------------------------------------------*/
