(function(t){function e(e){for(var i,c,o=e[0],a=e[1],u=e[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},s=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/simon/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"app"}},[n("h1",[t._v("Simon The Game")]),n("div",{staticClass:"game-board"},[n("div",{staticClass:"simon"},[n("div",{staticClass:"tile red",on:{click:function(e){return t.press(0)}}}),n("div",{staticClass:"tile blue",on:{click:function(e){return t.press(1)}}}),n("div",{staticClass:"tile yellow",on:{click:function(e){return t.press(2)}}}),n("div",{staticClass:"tile green",on:{click:function(e){return t.press(3)}}})]),n("div",{staticClass:"game-info-wrapper"},[n("div",{staticClass:"game-info"},[t.gameOverMsg?n("h2",[t._v("\n          Game over!"),n("br"),t._v("\n          Score: "+t._s(t.round)+"\n        ")]):n("h2",[t._v("Round: "+t._s(t.round))]),n("button",{attrs:{disabled:t.gameIsOn},on:{click:t.start}},[t._v("START")])]),n("div",{staticClass:"game-options"},[n("h2",[t._v("Difficulty:")]),n("label",[n("input",{attrs:{type:"radio"},domProps:{checked:t.difficulty===t.difficultyTimes[0]},on:{click:function(e){return t.setDifficulty(0)}}}),t._v("\n          Easy\n        ")]),n("label",[n("input",{attrs:{type:"radio"},domProps:{checked:t.difficulty===t.difficultyTimes[1]},on:{click:function(e){return t.setDifficulty(1)}}}),t._v("\n          Normal\n        ")]),n("label",[n("input",{attrs:{type:"radio"},domProps:{checked:t.difficulty===t.difficultyTimes[2]},on:{click:function(e){return t.setDifficulty(2)}}}),t._v("\n          Hard\n        ")])])])])])},s=[],c={name:"app",data:function(){return{difficultyTimes:[1500,1e3,400],difficulty:1e3,round:0,sequence:[],timer:null,index:0,locked:!0,gameOverMsg:!1,gameIsOn:!1}},methods:{setDifficulty:function(t){this.difficulty=this.difficultyTimes[t]},start:function(){this.gameOverMsg=!1,this.gameIsOn=!0,this.round=0,this.sequence=[],this.startRound()},startRound:function(){this.round++,this.generateSequence(),this.index=0,this.timer=setInterval(this.show,this.difficulty),this.locked=!0},generateSequence:function(){var t=Math.floor(4*Math.random());this.sequence.push(t)},show:function(){this.active(this.sequence[this.index]),this.index++,this.index>=this.sequence.length&&(clearInterval(this.timer),this.index=0,this.locked=!1)},press:function(t){this.locked||(t===this.sequence[this.index]?(this.index++,this.active(t),this.index===this.sequence.length&&this.startRound()):(this.gameOver(),clearInterval(this.timer)))},gameOver:function(){this.gameOverMsg=this.locked=!0,this.gameIsOn=!1},active:function(t){var e=document.querySelectorAll(".tile");e[t].classList.add("active");var n=new Audio("https://raw.githubusercontent.com/kellyk/javascript-simon/master/sounds/".concat(t+1,".mp3"));n.play(),e[t].addEventListener("webkitAnimationEnd",this.clear)},clear:function(){for(var t=document.querySelectorAll(".tile"),e=0;e<4;e++)t[e].classList.remove("active")}}},o=c,a=(n("5c0b"),n("2877")),u=Object(a["a"])(o,r,s,!1,null,null,null),l=u.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("e332"),r=n.n(i);r.a},e332:function(t,e,n){}});
//# sourceMappingURL=app.2eda8662.js.map