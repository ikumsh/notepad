// class Router{
//   constuctor(routes, el){
//     this.routes = routes;
//     this.el = el;
//     // window.onhashchange = this.hashChanged.bind(this);
//     // this.hashChanged();
//   }
//
//   hashChanged(ev){
//     console.log("test")
//     if(window.location.hash.length > 0){
//       var pageName = window.location.hash.substr(1);
//       //this.loadPage()
//     }
//   }
//
//   loadPage(page){
//     var mainElem = document.getElementById(this.el);
//     mainElem.innerHTML = "";
//     mainElem.innerHtml += this.routes.page
//   }
// }
//
//
pages = {
  home: "<h1>Hello world</h1>",
}
//
// router = new Router("hello", 'noteapp');
// router2 = new Router(pages, 'noteapp');
// console.log(router)
// console.log(router2)

class Router{
  constructor(routes, el){
    this.routes = routes;
    this.el = el;
    window.onhashchange = this.hashChanged.bind(this);
    this.hashChanged();
  }

  hashChanged(ev){
    console.log("test");
    if(window.location.hash.length > 0){
      var pageName = window.location.hash.substr(1);
      // Only load if page is a property of this.routes
      this.loadPage(pageName);
    }
  }

  loadPage(page){
    var mainElem = document.getElementById(this.el);
    console.log(mainElem)
    mainElem.innerHTML = "";
    console.log(this.routes)
    mainElem.innerHTML += this.routes[page]
  }
}

window.onload = function(){
  fetch('/views/test.html')
  var router = new Router(pages, "notepadapp");
  console.log(router);
}
