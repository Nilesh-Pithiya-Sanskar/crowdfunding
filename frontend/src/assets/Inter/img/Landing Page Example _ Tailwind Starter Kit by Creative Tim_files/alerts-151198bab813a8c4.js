(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2445],{71332:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/vue/alerts",function(){return n(43706)}])},4677:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(85893),o=n(67294),l=n(45697),i=n.n(l),a=n(5227),s=n(26671),c=n(74855);function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function f(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var g=["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],y={slate:"bg-slate-500",gray:"bg-gray-500",zinc:"bg-zinc-500",neutral:"bg-neutral-500",stone:"bg-stone-500",red:"bg-red-500",orange:"bg-orange-500",amber:"bg-amber-500",yellow:"bg-yellow-500",lime:"bg-lime-500",green:"bg-green-500",emerald:"bg-emerald-500",teal:"bg-teal-500",cyan:"bg-cyan-500",sky:"bg-sky-500",blue:"bg-blue-500",indigo:"bg-indigo-500",violet:"bg-violet-500",purple:"bg-purple-500",fuchsia:"bg-fuchsia-500",pink:"bg-pink-500",rose:"bg-rose-500"},x={slate:"bg-slate-200",gray:"bg-gray-200",zinc:"bg-zinc-200",neutral:"bg-neutral-200",stone:"bg-stone-200",red:"bg-red-200",orange:"bg-orange-200",amber:"bg-amber-200",yellow:"bg-yellow-200",lime:"bg-lime-200",green:"bg-green-200",emerald:"bg-emerald-200",teal:"bg-teal-200",cyan:"bg-cyan-200",sky:"bg-sky-200",blue:"bg-blue-200",indigo:"bg-indigo-200",violet:"bg-violet-200",purple:"bg-purple-200",fuchsia:"bg-fuchsia-200",pink:"bg-pink-200",rose:"bg-rose-200"},w=["html","react","vue","angular"],v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,o,l=h(i);function i(){return u(this,i),l.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"border border-solid border-slate-300 rounded my-4 p-4 pt-6 relative"+(this.props.bgColor?" "+this.props.bgColor:""),children:[this.props.activeColor?(0,r.jsx)("div",{id:"colors",className:"flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",style:{width:"100%",bottom:"-14px"},children:(0,r.jsx)("div",{className:"flex flew-wrap justify-center items-center bg-white px-2",children:g.map((function(t,n){var o=e;return(0,r.jsx)("span",{className:"cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 ".concat(e.props.activeColor===t?"".concat(y[t]," shadow-md"):x[t]),onClick:function(){o.props.onColorClick(t),o.props.onCopy(!1)}},n)}))})}):null,this.props.children,(0,r.jsxs)("div",{className:"relative mt-4",children:[(0,r.jsx)("div",{id:"languages",className:"absolute w-full right-0 border-b border-slate-600 py-1",style:{width:"100%"},children:w.map((function(t,n){var o=e;return(0,r.jsx)("button",{className:"flex-auto text-sm px-3 outline-none focus:outline-none mb-1 text-slate-"+(e.props.activeFramework===t?"400":"600"),onClick:function(){o.props.onFrameworkClick(t),o.props.onCopy(!1)},type:"button",children:function(){switch(t){default:return"HTML";case"react":return"React";case"angular":return"Angular";case"vue":return"Vue"}}()},n)}))}),(0,r.jsx)(c.CopyToClipboard,{text:this.props.codeToShow,onCopy:function(){return e.props.onCopy(!0)},children:(0,r.jsxs)("div",{className:"docs-code-preview",children:[(0,r.jsx)("button",{className:"text-slate-300 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",type:"button",children:this.props.copyText}),(0,r.jsx)(a.Z,{language:"jsx",style:s.BJ,customStyle:{fontSize:"1rem",padding:"14px",borderRadius:"4px"},children:this.props.codeToShow})]})})]})]})})}}])&&p(t.prototype,n),o&&p(t,o),i}(o.Component);v.propTypes={copyText:i().string.isRequired,onCopy:i().func.isRequired,activeColor:i().oneOf(["slate","red","orange","amber","emerald","teal","sky","indigo","purple","pink",!1]).isRequired,activeFramework:i().oneOf(["html","react","vue","angular"]).isRequired,codeToShow:i().string.isRequired,children:i().node.isRequired,onColorClick:i().func.isRequired,onFrameworkClick:i().func.isRequired}},27190:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(85893),o=(n(67294),n(45697)),l=n.n(o);function i(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"font-semibold text-xl mb-2 mt-8 text-slate-700",children:e.title}),(0,r.jsx)("p",{className:"text-slate-600",children:e.description})]})}i.propTypes={title:l().oneOfType([l().string,l().node]),description:l().oneOfType([l().string,l().node])}},43706:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(85893),o=n(67294),l=n(9008),i=n(47239),a=n(96215),s=n(16372),c=n(7635),u=n(4677);function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function h(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?p(e):t}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}var y=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}var w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,n,o,l=x(i);function i(){var e;return d(this,i),b(p(e=l.apply(this,arguments)),"state",{color:"pink",showAlert:!0,type:"vue"}),b(p(e),"onFrameworkClick",(function(t){switch(t){case"vue":break;case"angular":window.location="/learning-lab/tailwind-starter-kit/documentation/angular/alerts";break;case"html":window.location="/learning-lab/tailwind-starter-kit/documentation/javascript/alerts";break;case"react":window.location="/learning-lab/tailwind-starter-kit/documentation/react/alerts";break;default:e.setState({showModal:!0,modalText:t})}})),e}return t=i,(n=[{key:"render",value:function(){var e=this,t='<template>\n  <div v-if="alertOpen" class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-'+this.state.color+'-500">\n    <span class="text-xl inline-block mr-5 align-middle">\n      <i class="fas fa-bell"></i>\n    </span>\n    <span class="inline-block align-middle mr-8">\n      <b class="capitalize">'+this.state.color+"!</b> This is a "+this.state.color+' alert - check it out!\n    </span>\n    <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" v-on:click="closeAlert()">\n      <span>\xd7</span>\n    </button>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "'+this.state.color+'-alert",\n  data() {\n    return {\n      alertOpen: true\n    }\n  },\n  methods: {\n    closeAlert: function(){\n      this.alertOpen = false;\n    }\n  }\n}\n<\/script>';return(0,r.jsxs)(r.Fragment,{children:[this.state.showModal?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",onClick:function(){return e.setState({showModal:!1})},children:(0,r.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-sm",children:(0,r.jsxs)("div",{className:"border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[(0,r.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",children:[(0,r.jsx)("h5",{className:"text-2xl font-normal mt-0 mb-0 ",children:"Component not supported"}),(0,r.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:function(){return e.setState({showModal:!1})},children:(0,r.jsx)("span",{className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),(0,r.jsx)("div",{className:"relative p-6 flex-auto",children:(0,r.jsxs)("p",{className:"text-base font-light leading-relaxed text-slate-500 font-normal mt-0 mb-4",children:["At the moment we do not support the choosen framework (",this.state.modalText,") for this component."]})})]})})}),(0,r.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null,(0,r.jsx)(u.Z,{copyText:this.props.copyText,onCopy:this.props.onCopy,activeColor:this.state.color,activeFramework:this.state.type,codeToShow:t,onColorClick:function(t){return e.setState({color:t})},onFrameworkClick:this.onFrameworkClick,children:this.state.showAlert?(0,r.jsxs)("div",{className:"text-white px-6 py-4 border-0 rounded relative mb-4 bg-"+this.state.color+"-500",children:[(0,r.jsx)("span",{className:"text-xl inline-block mr-5 align-middle",children:(0,r.jsx)("i",{className:"fas fa-bell"})}),(0,r.jsxs)("span",{className:"inline-block align-middle mr-8",children:[(0,r.jsxs)("b",{className:"capitalize",children:[this.state.color,"!"]})," This is a"," ",this.state.color," alert - check it out!"]}),(0,r.jsx)("button",{className:"absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none",onClick:function(){return e.setState({showAlert:!1})},children:(0,r.jsx)("span",{children:"\xd7"})})]}):(0,r.jsx)("button",{className:"bg-"+this.state.color+"-500 text-white active:bg-"+this.state.color+"-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1",type:"button",onClick:function(){return e.setState({showAlert:!0})},children:"Revert changes"})})]})}}])&&f(t.prototype,n),o&&f(t,o),i}(o.Component),v=n(11812),j=n(27190);function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(s){a=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(){var e=C(o.useState(null),2),t=e[0],n=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("link",{rel:"canonical",href:"https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/vue/alerts"}),(0,r.jsx)("meta",{property:"og:url",content:"https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/vue/alerts"}),(0,r.jsx)("title",{children:"VueJS Closing Alerts | Tailwind Starter Kit by Creative Tim"})]}),(0,r.jsx)(s.Z,{fixed:!0}),(0,r.jsx)("div",{className:"container mx-auto mt-4 pt-12",children:(0,r.jsxs)("div",{className:"flex flex-wrap",children:[(0,r.jsx)("div",{className:"w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left",children:(0,r.jsx)(i.Z,{routes:a.Z})}),(0,r.jsx)("div",{className:"w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4",children:(0,r.jsxs)("div",{className:"my-8",children:[(0,r.jsx)(v.Z,{title:"Vue.js Alerts",description:"Leave your user the choice to close the feedback message using Vue.js for your Tailwind CSS projects."}),(0,r.jsx)(j.Z,{title:"Alert Examples",description:(0,r.jsxs)(r.Fragment,{children:["Alerts can have how many words you want, as well as an optional close button. For styling, use one of the color classes presented below. (e.g.,"," ",(0,r.jsx)("code",{className:"text-pink-600 text-sm bg-slate-100",children:".bg-red-500"}),")."]})}),(0,r.jsx)(w,{copyText:"Alerts"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Alerts":"")}})]})}),(0,r.jsx)("div",{className:"w-full lg:w-2/12 px-4 hidden lg:block"})]})}),(0,r.jsx)(c.Z,{})]})}}},function(e){e.O(0,[197,6650,4676,9774,2888,179],(function(){return t=71332,e(e.s=t);var t}));var t=e.O();_N_E=t}]);