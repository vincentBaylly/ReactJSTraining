function click() {
  var div1 = document.getElementById("div1");
  //ajouter un troisieme parametre a addEventListener pour controler l'ordre d'execution de vos evenements
  div1.addEventListener(
    "click",
    function () {
      alert("div clique");
    }
    //,false
  );
  var p2 = document.getElementById("p2");
  //ajouter un troisieme parametre a addEventListener pour controler l'ordre d'execution de vos evenements
  p2.addEventListener(
    "click",
    function () {
      alert("paragraphe clique");
    }
    //,true
  );
}

function Home() {
  return (
    <div id="div1">
      <p id="p1">paragraphe 1</p>
      <p id="p2">paragraphe 2</p>
    </div>
  );
}

export default Home;
