function morePaymentOptions(){
    $('.more').removeClass('fadeOut');
    $("#morePaymentOptionsButton").fadeOut();
}

function chooseInstallment() {
    $('.selectable_checked__8jQXY').removeClass('selectable_checked__8jQXY');
    $('#installmentsOption').addClass('selectable_checked__8jQXY');
    $('#paymentContent').fadeOut();
    $('#installmentsContent').fadeIn(2000);
}

function continueToDeliver() {
    $('#deliveryContent').fadeIn();
    $('#addressContent').fadeOut();
    $('#shoppingCartContent').fadeOut();
}

function chooseOtherPayment() {
    $('.selectable_checked__8jQXY').removeClass('selectable_checked__8jQXY');
    $('#installmentsOption').addClass('selectable_checked__8jQXY');
    $('#paymentContent').fadeIn();
    $('#installmentsContent').fadeOut();
}

function displayShoppingCart() {
    $('#deliveryContent').fadeOut();
    $('#addressContent').fadeIn(2000);
    $('#shoppingCartContent').fadeIn();
    $('#installmentsContent').fadeOut();
    $('#paymentContent').fadeOut();
}

function continueToPayment() {
    $('#paymentContent').fadeIn();
    $('#deliveryContent').fadeOut();
    $('#addressContent').fadeOut();
    $('#shoppingCartContent').fadeOut();
}

function show6monthfee() {
    $('#rate1').html('5.8%');
    $('#rate2').html('5.5%');
    $('#rate3').html('6.5%');
    $('#mc1').html('3170 sek/month');
    $('#mc2').html('3161 sek/month');
    $('#mc3').html('3191 sek/month');


}

function show12monthfee() {
    $('#rate1').html('3.8%');
    $('#rate2').html('3.5%');
    $('#rate3').html('4.5%');
    $('#mc1').html('1555 sek/month');
    $('#mc2').html('1550 sek/month');
    $('#mc3').html('1565 sek/month');
}

function login() {
    $('#signForm').fadeOut();
    $('#adddressInformation').fadeIn();
    $('#continueToDeliver').fadeIn();
}