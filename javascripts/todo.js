(function(){
  var item = document.querySelector("#item"),
      form = document.querySelector("#todo-form"),
      list = document.querySelector("#list");

  form.addEventListener("submit", function(e){
    e.preventDefault();
    list.innerHTML += "<div>"+item.value+"</div>";
    item.value = "";
    store()
  }, false);

  list.addEventListener("click", function(e){
    e.preventDefault();

    var elem = e.target,
        classList = elem.classList;

    if(elem == list){
      return
    }

    if(classList.contains('done')) {
      elem.parentNode.removeChild(elem);
    } else if(classList.contains('checked')) {
      elem.classList.add('done');
    } else {
      elem.classList.add('checked');
    }
    
    store()
  }, false);

  function store(){
    window.localStorage.todos = list.innerHTML;
  }

  function load(){
    if(window.localStorage.todos){
      list.innerHTML = window.localStorage.todos;
    }
  }

  load()

})()
