Function.createDelegate=function(a,b){return function(){return b.apply(a,arguments)}};
Function.createCallback=function(b,a){return function(){var e=arguments.length;if(e>0){var d=[];for(var c=0;c<e;c++)d[c]=arguments[c];d[e]=a;return b.apply(this,d)}return b.call(this,a)}};
Function.emptyFunction=Function.emptyMethod=function(){};
