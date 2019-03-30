(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,,,,function(t,i,e){"use strict";e.r(i);var n=e(18),r=e(19),s=e(21);function o(t,i,e){s.a.call(this),this.tiling=t,this.a=i,this.b=e}function a(t,i,e){o.call(this,t,i,e),this.v=[new n.a(1,0),new n.a(this.tiling.x+1,this.tiling.y),new n.a(this.tiling.x,this.tiling.y)],this.xt=new n.a(1,0),this.yt=new n.a(this.tiling.x,this.tiling.y)}function h(t,i,e){o.call(this,t,i,e),this.v=[new n.a(0,0),new n.a(1,0),new n.a(this.tiling.x,this.tiling.y)],this.xt=new n.a(1,0),this.yt=new n.a(this.tiling.x,this.tiling.y)}function c(t,i){this.x=t,this.y=i}(o.prototype=Object.create(s.a.prototype)).getVertex=function(t){return this.v[t].add(this.xt.scale(this.a)).add(this.yt.scale(this.b))},(a.prototype=Object.create(o.prototype)).numSides=function(){return 3},a.prototype.getOpposite=function(t){switch(t){case 0:return new r.a(new h(this.tiling,this.a+1,this.b),2);case 1:return new r.a(new h(this.tiling,this.a,this.b+1),0);case 2:return new r.a(new h(this.tiling,this.a,this.b),1);default:throw new Error("Called getOpposite() on a DownTriangle with invalid i=".concat(t))}},(h.prototype=Object.create(o.prototype)).numSides=function(){return 3},h.prototype.getOpposite=function(t){switch(t){case 0:return new r.a(new a(this.tiling,this.a,this.b-1),1);case 1:return new r.a(new a(this.tiling,this.a,this.b),2);case 2:return new r.a(new a(this.tiling,this.a-1,this.b),0);default:throw new Error("Called getOpposite() on a UpTriangle with invalid i=".concat(t))}},e.d(i,"default",function(){return c}),c.prototype.getOriginPolygon=function(){return new h(this,0,0)},c.prototype.fromParameters=function(t){var i=function(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){var e=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(e.push(o.value),!i||e.length!==i);n=!0);}catch(t){r=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return e}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(t,1)[0],e=t[1]*Math.PI/180;return new c(i*Math.cos(e),i*Math.sin(e))},c.prototype.fromAngles=function(t){var i=t[0]*Math.PI/180,e=t[1]*Math.PI/180;return new c(Math.tan(i)/(Math.tan(e)+Math.tan(i)),Math.tan(i)*Math.tan(e)/(Math.tan(e)+Math.tan(i)))}},function(t,i,e){"use strict";function n(t){this.paper=t}e.r(i),n.prototype.getWidth=function(){return this.paper.width},n.prototype.getHeight=function(){return this.paper.height},n.prototype.setBackgroundColor=function(t){this.paper.canvas.style.backgroundColor=t},n.prototype.setViewBox=function(t){this.paper.setViewBox(t.getX(),t.getY(),t.getWidth(),t.getHeight(),!1)},n.prototype.hexColor=function(t){var i=Raphael.color(t);if(i.error)throw new Error("Error: invalid color");return i.hex};var r=e(24),s=e(20);function o(t){var i=window.innerWidth,e=window.innerHeight,o=new n(Raphael(0,0,i,e));return o.setBackgroundColor(s.a.backgroundColor),window.frame=new r.a(t.getOriginPolygon(),o),window.frame}e.d(i,"default",function(){return o})},function(t,i,e){"use strict";e.r(i),function(t){e.d(i,"default",function(){return a});var n=e(26),r=e(27),s=e(5),o=e(28);function a(i){switch(i){case"hexagon-triangle":window.currentFrame=Object(s.default)(new r.a);break;case"octagon-square":window.currentFrame=Object(s.default)(new o.a);break;default:!function(i){var e,r,o,a=n.a[i];t("#error-messages").empty(),t("#my-modal-label").html(a.name),t("#modal-form").html((r=i,o='<p class="help-block">'.concat((e=a).message,"</p>"),"set-iters"===r&&(o+="The current number of iterations is <b>".concat(window.currentFrame.trajLayer.L,"</b>.")),e.parameters.forEach(function(t){o+='<div class="form-group">',o+='<div class="input-group">',o+='<span class="input-group-addon">',o+=t.name,o+="</span>",o+='<input name = "',o+=t.id,o+='" type="text" class="form-control" placeholder="',o+="".concat(t.placeholder,'">'),o+='<span class="glyphicon form-control-feedback"></span>',o+="</div>",o+="</div>"}),o)),t("#modal-form-submit").on("click",function(i){i.preventDefault(),t("#modal-form").submit()}),t("#my-modal").on("hidden.bs.modal",function(){t("#modal-form").find("input[type=text], textarea").val("")}),t("#modal-form").unbind("submit").on("submit",function(e){e.preventDefault();var r=!0,o=t(this).serializeArray();if(t("#error-messages").empty(),o.forEach(function(i){if(i.value=parseFloat(i.value),isNaN(i.value))h("".concat(i.name," must be a real number!"),i.name),r=!1;else{var e=function(t,i){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var n=t[e];if(n.id===i)return n}throw new Error("findParameterByID called when no parameter had ID")}(a.parameters,i.name);(function(t,i){var e=i>=t.minInclusive,n=i>t.minExclusive,r=i<=t.maxInclusive,s=i<t.maxExclusive;return!(e&&n&&r&&s)})(e,i.value)?(h("".concat(e.placeholder," is out of bounds!"),i.name),r=!1):function(i){var e=t("input[name=".concat(i,"]")).parent(".input-group").parent(".form-group");e.removeClass("has-error"),e.addClass("has-feedback has-success"),e.children(".input-group").children(".glyphicon").removeClass("glyphicon-remove"),e.children(".input-group").children(".glyphicon").addClass("glyphicon-ok"),t("#error-messages > #".concat(i)).remove()}(i.name)}}),r){var c=o.map(function(t){return t.value});if(n.a[i].newTiling){var l=new n.a[i].tiling(c);window.currentFrame=Object(s.default)(l)}else"set-iters"===i&&window.currentFrame.setIterations(c[0]);t("#my-modal").modal("hide")}}),t("#my-modal").modal()}(i)}}function h(i,e){var n=t("input[name=".concat(e,"]")).parent(".input-group").parent(".form-group");n.removeClass("has-success"),n.addClass("has-feedback has-error"),n.children(".input-group").children(".glyphicon").removeClass("glyphicon-ok"),n.children(".input-group").children(".glyphicon").addClass("glyphicon-remove"),t("#error-messages").append('<span id="'.concat(e,'">').concat(i,"</span><br>"))}}.call(this,e(0))},,,,,,,,,,,,function(t,i,e){"use strict";function n(t,i,e){this.a=t,this.b=i,this.c=e}function r(t,i){this.x=t,this.y=i}n.prototype.intersect=function(t){var i=this.a*t.b-this.b*t.a;if(0==i)throw new Error("Error: lines do not intersect");return new r((this.b*t.c-this.c*t.b)/i,(this.c*t.a-this.a*t.c)/i)},e.d(i,"a",function(){return r}),r.prototype.getX=function(){return this.x},r.prototype.getY=function(){return this.y},r.prototype.subtract=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.rotate90Clockwise=function(){return new r(this.y,-this.x)},r.prototype.rotate90CounterClockwise=function(){return new r(-this.y,this.x)},r.prototype.dot=function(t){return this.x*t.x+this.y*t.y},r.prototype.scale=function(t){return new r(t*this.x,t*this.y)},r.prototype.normalize=function(){return this.scale(1/this.norm())},r.prototype.neg=function(){return new r(-this.x,-this.y)},r.prototype.toString=function(){return"(".concat(this.x.toString(),", ").concat(this.y.toString(),")")},r.prototype.midpoint=function(t){return new r((this.x+t.x)/2,(this.y+t.y)/2)},r.prototype.join=function(t){return new n(this.y-t.y,t.x-this.x,this.x*t.y-this.y*t.x)},r.prototype.cxConj=function(){return new r(this.x,-this.y)},r.prototype.normSquared=function(){return this.x*this.x+this.y*this.y},r.prototype.norm=function(){return Math.sqrt(this.normSquared())},r.prototype.cxInv=function(){return this.cxConj().scale(1/this.normSquared())},r.prototype.cxMult=function(t){return new r(this.x*t.x-this.y*t.y,this.x*t.y+this.y*t.x)}},function(t,i,e){"use strict";e.d(i,"a",function(){return r});var n=e(23);function r(t,i){this.p=t,this.i=0<=i?i%this.p.numSides():this.p.numSides()-i%this.p.numSides()}r.prototype.getI=function(){return this.i},r.prototype.end=function(){return this.p.getV(this.i+1)},r.prototype.start=function(){return this.p.getV(this.i)},r.prototype.nextEdge=function(){return new r(this.p,this.i+1)},r.prototype.previousEdge=function(){return new r(this.p,this.i+1)},r.prototype.opposite=function(){return this.p.getO(this.i)},r.prototype.getMidpoint=function(){return this.start().midpoint(this.end())},r.prototype.reflect=function(t){return n.a.reflectIn(this,t)},r.prototype.reflectDir=function(t){return n.a.reflectDir(this,t)},r.prototype.getPolygon=function(){return this.p},r.prototype.toLine=function(){return this.start().join(this.end())}},function(t,i,e){"use strict";i.a={initialDisplayBoxScale:5,nudgeAmt:.015,screenShift:.02,trajectoryEndpointRadius:5,trajectoryIters:100,backgroundColor:"white",polyColor:"lightgrey",polyStrokeColor:"blue",orbitColor:"red",startCircleColor:"green",endCircleColor:"red",draggingCircleColor:"yellow",endTrajectoryColor:"pink",zoomBoxStrokeColor:"orange",directionMap:{up:0,left:1,down:2,right:3,w:0,a:1,s:2,d:3},zoomScaleMap:{i:.9,o:1.1},moveTrajPointsMap:{alt:!1,shift:!0}}},function(t,i,e){"use strict";var n=e(22);function r(){this.xValues=[],this.yValues=[],this.startX=null,this.startY=null,this.closed=!1}r.prototype.moveTo=function(t,i){this.xValues=[],this.yValues=[],this.xValues.push(t),this.yValues.push(i),this.closed=!1,this.startX=t,this.startY=i},r.prototype.lineTo=function(t,i){if(closed)throw new Error("Attempting to manipulate a closed path.");this.xValues.push(t),this.yValues.push(i)},r.prototype.copy=function(){var t=new r;return t.xValues=this.xValues.slice(0),t.yValues=this.yValues.slice(0),t.startX=this.startX,t.startY=this.startY,t.closed=this.closed,t},r.prototype.closePath=function(){this.closed=!0,this.xValues.push(this.startX),this.yValues.push(this.startY)},r.prototype.toString=function(){for(var t="M".concat(this.xValues[0].toString(),",").concat(this.yValues[0].toString()),i=1;i<this.xValues.length;i++)t="".concat(t,"L").concat(this.xValues[i].toString(),",").concat(this.yValues[i].toString());return t},r.prototype.getBoundingBox=function(){var t=Raphael.pathBBox(this.toString());return new n.a(t.x,t.y2,t.width,t.height)};var s=e(18),o=e(19);function a(){this.tiling=null}e.d(i,"a",function(){return a}),a.prototype.getV=function(t){var i=t%this.numSides();return i<0?this.getVertex(i+this.numSides()):this.getVertex(i)},a.prototype.getEdge=function(t){return new o.a(this,t)},a.prototype.getO=function(t){var i=t%this.numSides();return i<0?this.getOpposite(i+this.numSides()):this.getOpposite(i)},a.prototype.getPath=function(){var t=new r,i=this.getVertex(0);t.moveTo(i.getX(),i.getY());for(var e=1;e<this.numSides();e++)i=this.getVertex(e),t.lineTo(i.getX(),i.getY());return t.closePath(),t},a.prototype.getCenterOfMass=function(){for(var t=0,i=0,e=this.numSides(),n=0;n<e;n++){var r=this.getVertex(n);t+=r.getX(),i+=r.getY()}return new s.a(t/e,i/e)},a.prototype.tilingToString=function(){return this.tiling.toString()}},function(t,i,e){"use strict";function n(t,i,e,n){this.x=t,this.y=i,this.width=e,this.height=n}e.d(i,"a",function(){return n}),n.prototype.getX=function(){return this.x},n.prototype.getY=function(){return this.y},n.prototype.getWidth=function(){return this.width},n.prototype.getHeight=function(){return this.height},n.prototype.getCenterX=function(){return this.getMinX()+this.width/2},n.prototype.getCenterY=function(){return this.getMinY()+this.height/2},n.prototype.getMinX=function(){return this.x},n.prototype.getMinY=function(){return this.y-this.height}},function(t,i,e){"use strict";var n={triangleSign:function(t,i,e){var r=i.getX()-t.getX(),s=i.getY()-t.getY(),o=e.getX()-t.getX(),a=r*(e.getY()-t.getY())-s*o;return n.signum(a)},rightOf:function(t,i){return 0<n.triangleSign(t.start(),i,t.end())},lengthSquared:function(t){return(t.start().getX()-t.end().getX())*(t.start().getX()-t.end().getX())+(t.start().getY()-t.end().getY())*(t.start().getY()-t.end().getY())},reflectIn:function(t,i){var e=i.subtract(t.start()),n=t.end().subtract(t.start());return e.cxMult(n.cxConj()).cxConj().cxMult(n).scale(1/n.normSquared()).add(t.start())},reflectDir:function(t,i){var e=t.end().subtract(t.start());return i.cxMult(e.cxConj()).cxConj().cxMult(e).scale(1/e.normSquared())},signum:function(t){return 0===t?0:0<t?1:-1}};i.a=n},function(t,i,e){"use strict";(function(t){e.d(i,"a",function(){return c});var n=e(29),r=e(18),s=e(25),o=e(22),a=e(30),h=e(20);function c(t,i){this.d=new n.a(i,t,this),this.d.tm.setDisplayBox(t.getPath().getBoundingBox()),this.d.tm.scale(h.a.initialDisplayBoxScale),this.initialDisplayBox=this.d.tm.getDisplayBox(),this.polyLayer=new s.a(this.d),this.polyLayer.render(),this.zoomBox=null,this.trajLayer=new a.a(this.d),this.trajLayer.render(),Mousetrap.bind("up",this.move.bind(this)),Mousetrap.bind("left",this.move.bind(this)),Mousetrap.bind("down",this.move.bind(this)),Mousetrap.bind("right",this.move.bind(this)),Mousetrap.bind("o",this.zoom.bind(this)),Mousetrap.bind("i",this.zoom.bind(this)),Mousetrap.bind("r",this.zoom.bind(this)),Mousetrap.bind("w",this.moveTrajPoints.bind(this)),Mousetrap.bind("a",this.moveTrajPoints.bind(this)),Mousetrap.bind("s",this.moveTrajPoints.bind(this)),Mousetrap.bind("d",this.moveTrajPoints.bind(this)),Mousetrap.bind("shift+w",this.moveTrajPoints.bind(this)),Mousetrap.bind("shift+a",this.moveTrajPoints.bind(this)),Mousetrap.bind("shift+s",this.moveTrajPoints.bind(this)),Mousetrap.bind("shift+d",this.moveTrajPoints.bind(this)),Mousetrap.bind("esc",this.toggleHelpBox.bind(this)),document.onmousedown=this.mouseEvent.bind(this),document.onmouseup=this.mouseEvent.bind(this),document.onmousemove=this.mouseEvent.bind(this)}c.prototype.move=function(t,i){switch(h.a.directionMap[i]){case 0:this.d.tm.shiftUp(1);break;case 1:this.d.tm.shiftRight(-1);break;case 2:this.d.tm.shiftUp(-1);break;case 3:this.d.tm.shiftRight(1);break;default:throw new Error("Error: invalid direction")}this.polyLayer.render2(),this.trajLayer.render2()},c.prototype.zoom=function(t,i){switch(i){case"r":this.d.tm.setDisplayBox(this.initialDisplayBox);break;default:this.d.tm.scale(h.a.zoomScaleMap[i])}this.polyLayer.render2(),this.trajLayer.render2()},c.prototype.setZoomBox=function(){this.zoomBox=this.d.component.paper.rect(0,0,0,0)},c.prototype.moveTrajPoints=function(t,i){var e=i.split("+"),n=2===e.length;switch(2===e.length?h.a.directionMap[e[1]]:h.a.directionMap[e[0]]){case 0:this.trajLayer.shiftEndPointUp(h.a.nudgeAmt,n);break;case 1:this.trajLayer.shiftEndPointRight(-h.a.nudgeAmt,n);break;case 2:this.trajLayer.shiftEndPointUp(-h.a.nudgeAmt,n);break;case 3:this.trajLayer.shiftEndPointRight(h.a.nudgeAmt,n);break;default:throw new Error("Error: invalid direction")}this.trajLayer.render()},c.prototype.mouseEvent=function(t){switch(t.type){case"mousedown":t.ctrlKey&&(this.fixX=t.clientX,this.fixY=t.clientY,this.zoomBox=this.d.component.paper.rect(this.fixX,this.fixY,0,0),this.zoomBox.attr({stroke:h.a.zoomBoxStrokeColor}));break;case"mousemove":if(null!==this.zoomBox){var i=t.clientX,e=t.clientY,n=this.fixX>i?i:this.fixX,s=this.fixY>e?e:this.fixY,a=this.fixX>i?this.fixX:i,c=this.fixY>e?this.fixY:e;this.zoomBox.attr({x:n,y:s,width:a-n,height:c-s})}break;case"mouseup":if(null!==this.zoomBox){var l=this.d.tm.toMathCoordinates(new r.a(this.zoomBox.attr("x"),this.zoomBox.attr("y"))),u=this.d.tm.toMathCoordinates(new r.a(this.zoomBox.attr("x")+this.zoomBox.attr("width"),this.zoomBox.attr("y")+this.zoomBox.attr("height"))),p=new o.a(l.getX(),u.getY(),u.getX()-l.getX(),u.getY()-l.getY());this.d.tm.setDisplayBox(p),this.trajLayer.render2(),this.polyLayer.render2(),this.zoomBox.remove(),this.zoomBox=null}}},c.prototype.toggleHelpBox=function(){"true"===t("#my-modal").attr("aria-hidden")&&t("#help-popup").fadeToggle()},c.prototype.setIterations=function(t){this.trajLayer.setIterations(t),this.trajLayer.render()}}).call(this,e(0))},function(t,i,e){"use strict";e.d(i,"a",function(){return r});var n=e(20);function r(t){this.d=t,this.p=null}r.prototype.render=function(){this.p=this.d.component.paper.path(this.d.p.getPath().toString()),this.p.transform(this.d.tm.transformString()),this.p.attr({fill:n.a.polyColor,stroke:n.a.polyStrokeColor})},r.prototype.render2=function(){this.p.transform(""),this.p.transform(this.d.tm.transformString())},r.prototype.clear=function(){var t=this.p.copy();this.d.component.paper.remove(this.p),this.p=t()}},function(t,i,e){"use strict";var n=e(18),r=e(19),s=e(21);function o(t,i,e){s.a.call(this),this.tiling=t,this.a=i,this.b=e,this.v=[new n.a(0,0),new n.a(this.tiling.t,0),new n.a(1,0),new n.a(1,1),new n.a(1-this.tiling.t,1),new n.a(0,1)],this.xt=new n.a(1,0),this.yt=new n.a(1-this.tiling.t,1)}function a(t){this.t=t}function h(t,i,e){s.a.call(this),this.tiling=t,this.a=i,this.b=e,this.v=[new n.a(0,0),new n.a(1,0),new n.a(this.tiling.x+1,this.tiling.y),new n.a(this.tiling.x,this.tiling.y)],this.xt=new n.a(1,0),this.yt=new n.a(this.tiling.x,this.tiling.y)}function c(t,i){this.x=t,this.y=i}(o.prototype=Object.create(s.a.prototype)).numSides=function(){return 6},o.prototype.getVertex=function(t){return this.v[t].add(this.xt.scale(this.a)).add(this.yt.scale(this.b))},o.prototype.getOpposite=function(t){switch(t){case 0:return new r.a(new o(this.tiling,this.a,this.b-1),3);case 1:return new r.a(new o(this.tiling,this.a+1,this.b-1),4);case 2:return new r.a(new o(this.tiling,this.a+1,this.b),5);case 3:return new r.a(new o(this.tiling,this.a,this.b+1),0);case 4:return new r.a(new o(this.tiling,this.a-1,this.b+1),1);case 5:return new r.a(new o(this.tiling,this.a-1,this.b),2);default:throw new Error("Called getOpposite() with invalid i.")}},a.prototype.getOriginPolygon=function(){return new o(this,0,0)},a.prototype.toString=function(){return"BrickTiling ".concat(this.t.toString())},a.prototype.fromParameters=function(t){return new a(function(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){var e=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(e.push(o.value),!i||e.length!==i);n=!0);}catch(t){r=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return e}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(t,1)[0])},(h.prototype=Object.create(s.a.prototype)).numSides=function(){return 4},h.prototype.getVertex=function(t){return this.v[t].add(this.xt.scale(this.a)).add(this.yt.scale(this.b))},h.prototype.getOpposite=function(t){switch(t){case 0:return new r.a(new h(this.tiling,this.a,this.b-1),2);case 1:return new r.a(new h(this.tiling,this.a+1,this.b),3);case 2:return new r.a(new h(this.tiling,this.a,this.b+1),0);case 3:return new r.a(new h(this.tiling,this.a-1,this.b),1);default:throw new Error("Called getOpposite() with invalid i.")}},c.prototype.getOriginPolygon=function(){return new h(this,0,0)},c.prototype.toString=function(){return"ParallelogramTiling ".concat(this.x.toString()," ").concat(this.y.toString())},c.prototype.fromParameters=function(t){var i=function(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){var e=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(e.push(o.value),!i||e.length!==i);n=!0);}catch(t){r=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return e}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(t,2),e=i[0],n=i[1];return new c(e*Math.cos(n*Math.PI/180),e*Math.sin(n*Math.PI/180))};var l=e(4);function u(t,i,e){s.a.call(this),this.tiling=t,this.a=i,this.b=e,this.v=[],this.xt=new n.a(this.tiling.m,this.tiling.n),this.yt=new n.a(-this.tiling.n,this.tiling.m)}function p(t,i,e){u.call(this,t,i,e),this.v=[new n.a(this.tiling.m,0),new n.a(this.tiling.m+this.tiling.n,0),new n.a(this.tiling.m+this.tiling.n,this.tiling.n),new n.a(this.tiling.m,this.tiling.n)]}function g(t,i,e){u.call(this,t,i,e),this.v=[new n.a(0,0),new n.a(this.tiling.n,0),new n.a(this.tiling.m,0),new n.a(this.tiling.m,this.tiling.n),new n.a(this.tiling.m,this.tiling.m),new n.a(this.tiling.m-this.tiling.n,this.tiling.m),new n.a(0,this.tiling.m),new n.a(0,this.tiling.m-this.tiling.n)]}function d(t,i){if(i<t)this.m=t,this.n=i;else{if(!(t<i))throw new Error("called new TwoSquareTiling(length1,length2) with length1 = length2");this.m=i,this.n=t}}(u.prototype=Object.create(s.a.prototype)).translate=function(t,i){return new n.a(t+this.a*this.tiling.m-this.b*this.tiling.n,i+this.a*this.tiling.n+this.b*this.tiling.m)},u.prototype.getVertex=function(t){return this.v[t].add(this.xt.scale(this.a)).add(this.yt.scale(this.b))},(p.prototype=Object.create(u.prototype)).numSides=function(){return 4},p.prototype.getOpposite=function(t){switch(t){case 0:return new r.a(new g(this.tiling,this.a,this.b-1),4);case 1:return new r.a(new g(this.tiling,this.a+1,this.b-1),6);case 2:return new r.a(new g(this.tiling,this.a+1,this.b),0);case 3:return new r.a(new g(this.tiling,this.a,this.b),2);default:throw new Error("Called getOpposite() with invalid i.")}},(g.prototype=Object.create(u.prototype)).numSides=function(){return 8},g.prototype.getOpposite=function(t){switch(t){case 0:return new r.a(new p(this.tiling,this.a-1,this.b),2);case 1:return new r.a(new g(this.tiling,this.a,this.b-1),5);case 2:return new r.a(new p(this.tiling,this.a,this.b),3);case 3:return new r.a(new g(this.tiling,this.a+1,this.b),7);case 4:return new r.a(new p(this.tiling,this.a,this.b+1),4);case 5:return new r.a(new g(this.tiling,this.a,this.b+1),1);case 6:return new r.a(new p(this.tiling,this.a-1,this.b+1),1);case 7:return new r.a(new g(this.tiling,this.a-1,this.b),3);default:throw new Error("Called getOpposite() with invalid i.")}},d.prototype.toString=function(){return"TwoSquareTiling ".concat(this.m," ").concat(this.n)},d.prototype.getOriginPolygon=function(){return new g(this,0,0)},d.prototype.fromParameters=function(t){var i=function(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){var e=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(e.push(o.value),!i||e.length!==i);n=!0);}catch(t){r=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return e}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(t,2),e=i[0],n=i[1];return e!==n?new d(e,n):new a(0)};var f=e(20),y={"set-iters":{name:"Set Iterations",message:"This sets the number of iterations computed, N. The default is ".concat(f.a.trajectoryIters,".")+" We won't enforce a maximum, but even 10,000 takes a while.",parameters:[{name:"Iterations",placeholder:"N",id:"N",minInclusive:0,minExclusive:0,maxInclusive:Number.POSITIVE_INFINITY,maxExclusive:Number.POSITIVE_INFINITY}],newTiling:!1,tiling:void 0},parallelogram:{name:"Parallelogram Tiling",message:"This window sets the tiling to the standard tiling by parallelograms with  sides of length 1 and L, and an angle &#952; measured in degrees.",parameters:[{name:"Length",placeholder:"L",id:"L",minInclusive:0,minExclusive:0,maxInclusive:Number.POSITIVE_INFINITY,maxExclusive:Number.POSITIVE_INFINITY},{name:"Angle",placeholder:"&#952;",id:"theta",minInclusive:0,minExclusive:0,maxInclusive:180,maxExclusive:180}],newTiling:!0,tiling:c.prototype.fromParameters},triangle:{name:"Triangle Tiling",message:"This window sets the tiling to the standard tiling by triangulated parallelograms with sides of length 1 and L, and an angle &#952; measured in  degrees. The diagonal is opposite &#952;.",parameters:[{name:"Length",placeholder:"L",id:"L",minInclusive:0,minExclusive:0,maxInclusive:Number.POSITIVE_INFINITY,maxExclusive:Number.POSITIVE_INFINITY},{name:"Angle",placeholder:"&#952;",id:"theta",minInclusive:0,minExclusive:0,maxInclusive:180,maxExclusive:180}],newTiling:!0,tiling:l.default.prototype.fromParameters},"triangle-angles":{name:"Triangle Tiling",message:"This window sets the tiling to the standard tiling by triangulated parallelograms with angles &#966; and &#952; (both measured in degrees), and a base  length of 1. The diagonal is opposite &#952;.",parameters:[{name:"Angle &#966;",placeholder:"&#966;",id:"phi",minInclusive:0,minExclusive:0,maxInclusive:180,maxExclusive:180},{name:"Angle &#952;",placeholder:"&#952;",id:"theta",minInclusive:0,minExclusive:0,maxInclusive:180,maxExclusive:180}],newTiling:!0,tiling:l.default.prototype.fromAngles},brick:{name:"Brick Tiling",message:"This window constructs the tiling by square bricks with offset T, a real number between zero and one.",parameters:[{name:"Offset",placeholder:"T",id:"T",minInclusive:0,minExclusive:Number.NEGATIVE_INFINITY,maxInclusive:1,maxExclusive:Number.POSITIVE_INFINITY}],newTiling:!0,tiling:a.prototype.fromParameters},"two-square":{name:"Two Square Tiling",message:"This window sets the tiling to two-square tiling with side-lengths L<sub>1</sub> and L<sub>2</sub>.",parameters:[{name:"Length 1",placeholder:"L_1",id:"L_1",minInclusive:0,minExclusive:0,maxInclusive:Number.POSITIVE_INFINITY,maxExclusive:Number.POSITIVE_INFINITY},{name:"Length 2",placeholder:"L_2",id:"L_2",minInclusive:0,minExclusive:0,maxInclusive:Number.POSITIVE_INFINITY,maxExclusive:Number.POSITIVE_INFINITY}],newTiling:!0,tiling:d.prototype.fromParameters}};i.a=y},function(t,i,e){"use strict";var n=e(18),r=e(21);function s(t,i,e){r.a.call(this),this.tiling=t,this.a=i,this.b=e,this.v=[],this.xt=new n.a(2,0),this.yt=new n.a(-1,Math.sqrt(3))}(s.prototype=Object.create(r.a.prototype)).getVertex=function(t){return this.v[t].add(this.xt.scale(this.a)).add(this.yt.scale(this.b))},s.prototype.compareTo=function(t){return l.compare(this,t)};var o=e(19);function a(t,i,e){s.call(this,t,i,e),this.v=[new n.a(1,0),new n.a(1.5,Math.sqrt(3)/2),new n.a(.5,Math.sqrt(3)/2)]}function h(t,i,e){s.call(this,t,i,e),this.v=[new n.a(1,0),new n.a(.5,-Math.sqrt(3)/2),new n.a(1.5,-Math.sqrt(3)/2)]}function c(t,i,e){s.call(this,t,i,e),this.v=[new n.a(1,0),new n.a(.5,Math.sqrt(3)/2),new n.a(-.5,Math.sqrt(3)/2),new n.a(-1,0),new n.a(-.5,-Math.sqrt(3)/2),new n.a(.5,-Math.sqrt(3)/2)]}function l(){}(a.prototype=Object.create(s.prototype)).numSides=function(){return 3},a.prototype.getOpposite=function(t){switch(t){case 0:return new o.a(new c(this.tiling,this.a+1,this.b),2);case 1:return new o.a(new c(this.tiling,this.a+1,this.b+1),4);case 2:return new o.a(new c(this.tiling,this.a,this.b),0);default:throw new Error("Called getOpposite() on a HexDownTriangle with invalid i=".concat(t))}},(h.prototype=Object.create(s.prototype)).numSides=function(){return 3},h.prototype.getOpposite=function(t){switch(t){case 0:return new o.a(new c(this.tiling,this.a,this.b),5);case 1:return new o.a(new c(this.tiling,this.a,this.b-1),1);case 2:return new o.a(new c(this.tiling,this.a+1,this.b),3);default:throw new Error("Called getOpposite() on a HexUpTriangle with invalid i=".concat(t))}},(c.prototype=Object.create(s.prototype)).numSides=function(){return 6},c.prototype.getOpposite=function(t){switch(t){case 0:return new o.a(new a(this.tiling,this.a,this.b),2);case 1:return new o.a(new h(this.tiling,this.a,this.b+1),1);case 2:return new o.a(new a(this.tiling,this.a-1,this.b),0);case 3:return new o.a(new h(this.tiling,this.a-1,this.b),2);case 4:return new o.a(new a(this.tiling,this.a-1,this.b-1),1);case 5:return new o.a(new h(this.tiling,this.a,this.b),0);default:throw new Error("Called getOpposite() on a Hexagon with invalid i=".concat(t))}},e.d(i,"a",function(){return l}),l.prototype.getOriginPolygon=function(){return new c(this,0,0)},l.prototype.toString=function(){return"HexagonTriangleTiling"}},function(t,i,e){"use strict";var n=e(18),r=e(21);function s(t,i,e){r.a.call(this),this.tiling=t,this.a=i,this.b=e,this.v=[],this.xt=new n.a(2+Math.sqrt(2),-2-Math.sqrt(2)),this.yt=new n.a(2+Math.sqrt(2),2+Math.sqrt(2))}(s.prototype=Object.create(r.a.prototype)).getVertex=function(t){return this.v[t].add(this.xt.scale(this.a)).add(this.yt.scale(this.b))},s.prototype.compareTo=function(t){return c.compare(this,t)};var o=e(19);function a(t,i,e){s.call(this,t,i,e),this.v=[new n.a(0,0),new n.a(0,-2),new n.a(2,-2),new n.a(2,0)]}function h(t,i,e){s.call(this,t,i,e),this.v=[new n.a(0,0),new n.a(2,0),new n.a(2+Math.sqrt(2),Math.sqrt(2)),new n.a(2+Math.sqrt(2),2+Math.sqrt(2)),new n.a(2,2+2*Math.sqrt(2)),new n.a(0,2+2*Math.sqrt(2)),new n.a(-Math.sqrt(2),2+Math.sqrt(2)),new n.a(-Math.sqrt(2),Math.sqrt(2))]}function c(){}(a.prototype=Object.create(s.prototype)).numSides=function(){return 4},a.prototype.getOpposite=function(t){switch(t){case 0:return new o.a(new h(this.tiling,this.a,this.b-1),2);case 1:return new o.a(new h(this.tiling,this.a+1,this.b-1),4);case 2:return new o.a(new h(this.tiling,this.a+1,this.b),6);case 3:return new o.a(new h(this.tiling,this.a,this.b),0);default:throw new Error("Called getOpposite() on a Octasquare with invalid i=".concat(t))}},(h.prototype=Object.create(s.prototype)).numSides=function(){return 8},h.prototype.getOpposite=function(t){switch(t){case 0:return new o.a(new a(this.tiling,this.a,this.b),3);case 1:return new o.a(new h(this.tiling,this.a+1,this.b),5);case 2:return new o.a(new a(this.tiling,this.a,this.b+1),0);case 3:return new o.a(new h(this.tiling,this.a,this.b+1),7);case 4:return new o.a(new a(this.tiling,this.a-1,this.b+1),1);case 5:return new o.a(new h(this.tiling,this.a-1,this.b),1);case 6:return new o.a(new a(this.tiling,this.a-1,this.b),2);case 7:return new o.a(new h(this.tiling,this.a,this.b-1),3);default:throw new Error("Called getOpposite() on a Octagon with invalid i=".concat(t))}},e.d(i,"a",function(){return c}),c.prototype.getOriginPolygon=function(){return new h(this,0,0)},c.prototype.toString=function(){return"OctagonSquareTiling"}},function(t,i,e){"use strict";var n=e(22),r=e(18),s=e(20);function o(t,i){this.displayBox=t,this.currentTransform=new Raphael.matrix(1,0,0,0,1,0),this.c=i}function a(t,i,e){this.component=t,this.tm=new o(new n.a(-2,2,4,4),t),this.p=i,this.frame=e}o.prototype.getDisplayBox=function(){return this.displayBox},o.prototype.displayBoxString=function(){return this.displayBox.getX().toString().concat(" ",this.displayBox.getY().toString()," ",this.displayBox.getWidth().toString()," ",this.displayBox.getHeight().toString())},o.prototype.setDisplayBox=function(t){this.displayBox=t,this.updateTransform()},o.prototype.updateTransform=function(){var t=new r.a(this.displayBox.getCenterX(),this.displayBox.getCenterY()),i=Raphael.matrix(),e=1;0!==this.displayBox.getWidth()&&0!==this.c.getWidth()?e=0!==this.displayBox.getHeight()&&0!==this.c.getHeight()?Math.min(this.c.getWidth()/this.displayBox.getWidth(),this.c.getHeight()/this.displayBox.getHeight()):this.c.getWidth()/this.displayBox.getWidth():0!==this.displayBox.getHeight()&&0!==this.c.getHeight()&&(e=this.c.getHeight()/this.displayBox.getHeight()),i.scale(e,e);var n=new r.a(i.x(t.getX(),t.getY()),i.y(t.getX(),t.getY())),s=-n.getX()+this.c.getWidth()/2,o=-n.getY()+this.c.getHeight()/2;i.translate(s/e,o/e),this.currentTransform=i},o.prototype.toScreenCoordinates=function(t){return new r.a(this.currentTransform.x(t.getX(),t.getY()),this.currentTransform.y(t.getX(),t.getY()))},o.prototype.toMathCoordinates=function(t){var i=this.getInverseTransform();return new r.a(i.x(t.getX(),t.getY()),i.y(t.getX(),t.getY()))},o.prototype.getTransform=function(){return this.currentTransform},o.prototype.getInverseTransform=function(){return this.currentTransform.invert()},o.prototype.transformString=function(){return this.currentTransform.toTransformString()},o.prototype.scale=function(t,i){if(0<t){var e=i||new r.a(this.displayBox.getCenterX(),this.displayBox.getCenterY());this.setDisplayBox(new n.a(t*(this.displayBox.getX()-e.getX())+e.getX(),t*(this.displayBox.getY()-e.getY())+e.getY(),t*this.displayBox.getWidth(),t*this.displayBox.getHeight()))}},o.prototype.shiftUp=function(t){var i=this.displayBox.getHeight()*s.a.screenShift;this.setDisplayBox(new n.a(this.displayBox.getX(),this.displayBox.getY()-t*i,this.displayBox.getWidth(),this.displayBox.getHeight()))},o.prototype.shiftRight=function(t){var i=this.displayBox.getWidth()*s.a.screenShift;this.setDisplayBox(new n.a(this.displayBox.getX()+t*i,this.displayBox.getY(),this.displayBox.getWidth(),this.displayBox.getHeight()))},e.d(i,"a",function(){return a})},function(t,i,e){"use strict";var n=e(23);function r(t,i,e){for(this.s=i,this.dir=e.subtract(this.s).normalize(),this.edge=t.getEdge(0);n.a.triangleSign(e,this.edge.start(),this.s)<=0;)if(this.edge=this.edge.nextEdge(),0===this.edge.getI())throw new Error("WHAT IS HAPPENING");for(;0<n.a.triangleSign(e,this.edge.end(),this.s);)this.edge=this.edge.nextEdge()}r.prototype.getPolygon=function(){return this.edge.getPolygon()},r.prototype.next=function(){var t=this.edge.getI();this.edge=this.edge.nextEdge();for(var i=this.s.add(this.dir);0<=n.a.triangleSign(this.s,this.edge.end(),i);)if(this.edge=this.edge.nextEdge(),this.edge.getI()===t)throw new Error("Failed to continue path due to numerical errors!");return this.s=this.s.join(i).intersect(this.edge.toLine()),this.dir=this.edge.reflectDir(this.dir).neg(),this.edge=this.edge.opposite(),this.s};var s=e(18),o=e(20);function a(t){this.d=t,this.s=null,this.e=null,this.traj=[],this.polys=[],this.L=o.a.trajectoryIters,this.R=o.a.trajectoryEndpointRadius,this.orbitColor=o.a.orbitColor,this.trajectoryPath=null,this.polygonPathSet=[],this.circles=[],this.reset()}e.d(i,"a",function(){return a}),a.prototype.reset=function(){this.s=this.d.p.getCenterOfMass();var t=this.d.p.getEdge(0);this.e=t.start().scale(2).add(t.end()).scale(1/3),this.traj=[],this.polys=[],this.trajectoryPath=null,this.polygonPathSet=[],this.circles=[]},a.prototype.computeTrajectory=function(){this.clearLayerObjects(),this.trajectoryPath=null,this.polygonPathSet=[],this.circles=[],this.traj=[],this.polys=[],this.traj.push(this.s);for(var t=new r(this.d.p,this.s,this.e),i=!0;this.traj.length<=this.L&&i;){var e;this.polys.push(t.getPolygon()),(e=t.next())?this.traj.push(e):i=!1}},a.prototype.setIterations=function(t){this.L=t},a.prototype.render=function(){var t=this;this.computeTrajectory(),this.polys.forEach(function(i){var e=t.d.component.paper.path(i.getPath().toString());e.attr({stroke:o.a.polyStrokeColor}),e.transform(t.d.tm.transformString()),t.polygonPathSet.push(e)});for(var i=function(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){var e=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(e.push(o.value),!i||e.length!==i);n=!0);}catch(t){r=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return e}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(this.traj,1)[0],e="M".concat(i.getX().toString(),",").concat(i.getY().toString()),n=1;n<this.traj.length;n++){var r=this.traj[n];e+="L".concat(r.getX().toString(),",").concat(r.getY().toString())}if(this.trajectoryPath=this.d.component.paper.path(e),this.trajectoryPath.attr({stroke:o.a.orbitColor}),this.trajectoryPath.transform(this.d.tm.transformString()),1<this.traj.length){var s=this.traj[this.traj.length-1],a=this.d.tm.toScreenCoordinates(s),h=this.d.component.paper.ellipse(a.getX(),a.getY(),this.R,this.R);h.attr({fill:o.a.endTrajectoryColor}),this.circles.push([h,s])}var c=this.d.tm.toScreenCoordinates(this.s),l=this.d.tm.toScreenCoordinates(this.e),u=this.d.component.paper.ellipse(c.getX(),c.getY(),this.R,this.R),p=this.d.component.paper.ellipse(l.getX(),l.getY(),this.R,this.R);u.attr({fill:o.a.startCircleColor}),p.attr({fill:o.a.endCircleColor}),u.drag(this.dragEvents.move,this.dragEvents.start,this.dragEvents.end),p.drag(this.dragEvents.move,this.dragEvents.start,this.dragEvents.end),u.layer=this,p.layer=this,u.pointObject=this.s,p.pointObject=this.e,u.tm=this.d.tm,p.tm=this.d.tm,u.canEscapePolygon=!1,p.canEscapePolygon=!0,this.circles.push([u,this.s]),this.circles.push([p,this.e])},a.prototype.render2=function(){var t=this;this.polygonPathSet.forEach(function(i){i.transform(""),i.transform(t.d.tm.transformString())}),this.circles.forEach(function(i){var e=t.d.tm.toScreenCoordinates(i[1]);i[0].attr({cx:e.getX(),cy:e.getY()})}),this.trajectoryPath.transform(""),this.trajectoryPath.transform(this.d.tm.transformString())},a.prototype.clearLayerObjects=function(){null!==this.trajectoryPath&&this.trajectoryPath.remove(),this.polygonPathSet.forEach(function(t){t.remove()}),this.circles.forEach(function(t){t[0].undrag(),t[0].remove()})},a.prototype.shiftEndPointRight=function(t,i){if(i){var e=new s.a(this.s.getX()+t,this.s.getY());this.pointInsideStartPolygon(e)&&(this.s=e)}var n=this.e.getX(),r=this.e.getY();this.e=new s.a(n+t,r)},a.prototype.shiftEndPointUp=function(t,i){if(i){var e=new s.a(this.s.getX(),this.s.getY()-t);this.pointInsideStartPolygon(e)&&(this.s=e)}var n=this.e.getX(),r=this.e.getY();this.e=new s.a(n,r-t)},a.prototype.pointInsideStartPolygon=function(t){for(var i=0;i<this.d.p.numSides();i++){var e=this.d.p.getEdge(i);if(n.a.rightOf(e,t))return!1}return!0},a.prototype.dragEvents={start:function(){this.preDragFill=this.attr("fill"),this.ox=this.attr("cx"),this.oy=this.attr("cy"),this.attr({fill:o.a.draggingCircleColor})},move:function(t,i){(this.canEscapePolygon||this.layer.pointInsideStartPolygon(this.tm.toMathCoordinates(new s.a(this.ox+t,this.oy+i))))&&this.attr({cx:this.ox+t,cy:this.oy+i})},end:function(){this.attr({fill:this.preDragFill});var t=this.tm.toMathCoordinates(new s.a(this.attr("cx"),this.attr("cy")));this.pointObject.x=t.getX(),this.pointObject.y=t.getY(),this.layer.render()}}}]]);