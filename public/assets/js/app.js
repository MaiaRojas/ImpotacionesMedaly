(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
const root = $(".root");
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    switch (state.pagina) {
       
        case 1:
            wrapper.append(DetailBrand(updated));
            break;
        case 2:
            wrapper.append(DetailType(updated));
            break;
        case 3:
            wrapper.append(DetailSubType(updated));
            break;
        case 4:
            wrapper.append(DetailProduct(updated));
            break;
        case 5:
            wrapper.append(Servicios(updated));
            break;
        case 6:
            wrapper.append(Empresa(updated));
            break;
        case 7:
            wrapper.append(Contacto(updated));
            break;
    }

    root.append(wrapper);

}

const updated = function () {
    render(root);
}
const state = {
    pagina: null,
}


$(_ => {

    const root = $(".root");
    if(state.pagina != null){
        render(root);
    }

});

$(document).ready(function () {
    var date = new Date()
    $('.slider').slider();
    $(".copy-year").text(date.getFullYear());
});

},{}]},{},[1])