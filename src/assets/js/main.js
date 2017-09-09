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
