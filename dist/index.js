var e=new Map,t=function(t,n){var a=e.get(t);a.active.tabIndex=-1,a.active=n,a.active.tabIndex=0,a.active.focus()};exports.rovingIndex=function(n){var a=n.element,r=a.querySelectorAll(n.target||":scope *"),i=r[0];a.tabIndex=-1,r.forEach(function(e){return e.tabIndex=-1}),i.tabIndex=0,e.set(a,{targets:r,active:i,index:0}),a.addEventListener("focusin",function(n){e.get("last_rover")!=a&&(t(a,e.get(a).active),e.set("last_rover",a))}),a.addEventListener("keydown",function(n){switch(n.keyCode){case 39:n.preventDefault(),function(n){var a=e.get(n);a.index+=1,a.index>a.targets.length-1&&(a.index=a.targets.length-1);var r=a.targets[a.index];r&&t(n,r)}(a);break;case 37:n.preventDefault(),function(n){var a=e.get(n);a.index-=1,a.index<1&&(a.index=0);var r=a.targets[a.index];r&&t(n,r)}(a)}})};
//# sourceMappingURL=index.js.map