(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
const render = (root)=>{
   root.empty();

   const section = $('<section class="components">HOLI bOLI</section>');
   root.append(section);

};

const state = {
   page: 0,
};

const update = function (){
 render(root);
};

$( _ => {

  var holaMundo = document.getElementById('holaMundo');
  var database = firebase.database();
  database.ref().on("value", function(snap){

    state.autonics = snap.val();
    console.log(snap.val());
  });


 // dbRef.on('value', snap => holaMundo.innerText = snap.val() );

    const root = $('#root');
    render(root);

 });

},{}]},{},[1])