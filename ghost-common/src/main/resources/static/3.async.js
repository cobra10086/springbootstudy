(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1buV":function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var l=n(a("2/Rp"));a("14J3");var o=n(a("BMrR"));a("jCWc");var s=n(a("kPKH"));a("T2oS");var c=n(a("W9HT"));a("qVdP");var u=n(a("jsC+"));a("Pwec");var i=n(a("CtXQ"));a("lUTK");var d=n(a("BvKs"));a("miYZ");var f=n(a("tsqr")),p=n(a("lwsE")),m=n(a("W8MJ")),h=n(a("a1gu")),v=n(a("Nsbk")),b=n(a("7W2i")),k=n(a("PJYZ"));a("2qtc");var y=n(a("kLXV"));a("Znn+");var g=n(a("ZTPi"));a("ozfa");var E,C,w=n(a("MJZm")),F=r(a("q1tI")),M=a("MuoO"),T=n(a("usdK")),D=n(a("zHco")),N=a("a2PE"),K=n(a("qLOP")),P=n(a("IFou")),z=n(a("gBuh")),H=n(a("Bdex"));a("+dQi"),a("p77/"),a("1duh");var I=w.default.TreeNode,O=g.default.TabPane,L=y.default.confirm,j=(E=(0,M.connect)(function(e){var t=e.task,a=e.loading;return{taskTreeData:t.treeData,treeDataLoading:a.effects["task/fetchTaskTreeData"]}}),E(C=function(e){function t(e,a){var n;return(0,p.default)(this,t),n=(0,h.default)(this,(0,v.default)(t).call(this,e,a)),n.editor=null,n.onSelect=function(e,t){var a=t.node;console.log(n.state);var r=a.props,l=r.title,o=(r.shelltype,r.nodeid),s=(0,k.default)((0,k.default)(n)),c=s.state,u=c.panes,i=c.activeKey,d=c.currentCodeContent;u.forEach(function(e){e.key==i&&(e.content=d)}),n.state.panes.some(function(e){return e.key==o})?n.setState({panes:u,activeKey:o,currentCodeContent:n.state.panes.filter(function(e){return e.key==o})[0].content}):n.props.dispatch({type:"task/fetchCodeContent",payload:o}).then(function(e){var t={title:l,key:o,content:e};u.push(t),s.setState({panes:u,activeKey:o,currentCodeContent:e},function(){s.editor&&s.editor.focus()})})},n.removePane=function(e,t){e.stopPropagation();var a,r=n.state,l=r.activeKey,o=r.currentCodeContent,s=r.panes;s.forEach(function(e,n){e.key==t&&(a=n?n-1:n+1)});var c=s.filter(function(e){return e.key!==t});if(l==t&&s[a]){var u=s[a],i=u.key,d=u.content;l=i,o=d}n.setState({panes:c,activeKey:l,currentCodeContent:o})},n.saveCode=function(e){var t=n.state,a=t.activeKey,r=t.currentCodeContent,l=n.props.dispatch;l({type:"task/".concat(e?"submit":"save","TaskContent"),payload:{fileId:a,content:r}}).then(function(e){var t=e.result,a=e.message;t?f.default.success("\u4fdd\u5b58\u6210\u529f"):f.default.error(a)})},n.submitCode=function(){var e=(0,k.default)((0,k.default)(n));L({title:"\u786e\u8ba4\u63d0\u4ea4",content:"\u4f60\u786e\u5b9a\u8981\u63d0\u4ea4\u8fd9\u4e2a\u4efb\u52a1\u5417\uff0c\u5982\u679c\u786e\u5b9a\u7684\u8bdd\uff0c\u8bf7\u70b9\u51fb\u786e\u5b9a\u6309\u94ae\u3002",onOk:function(){e.saveCode(!0)},onCancel:function(){}})},n.closeTab=function(e){var t=n.state,a=t.panes,r=t.activeKey;n.setState({panes:e?[]:a.filter(function(e){return e.key==r})})},n.dropDownMenu=function(){var e=F.default.createElement(d.default,null,F.default.createElement(d.default.Item,null,F.default.createElement("a",{href:"javascript:;",onClick:function(){return n.closeTab()}},"\u5173\u95ed\u5176\u4ed6")),F.default.createElement(d.default.Item,null,F.default.createElement("a",{href:"javascript:;",onClick:function(){return n.closeTab(!0)}},"\u5173\u95ed\u6240\u6709")));return F.default.createElement(u.default,{overlay:e,className:H.default.dropDownMenu},F.default.createElement("a",{className:"ant-dropdown-link",href:"#"},F.default.createElement(i.default,{component:z.default,className:H.default.dropDownMenuIcon})))},n.LeafIcon=function(){return F.default.createElement("span",{className:H.default.leafDot})},n.TreeNodeList=function(e){return e.map(function(e){return e.type?F.default.createElement(I,{key:e.id,nodeid:e.id,icon:n.LeafIcon(),shelltype:e.shelltype,title:e.name,isLeaf:!0}):F.default.createElement(I,{icon:function(e){var t=e.expanded;return F.default.createElement(i.default,{component:t?P.default:K.default})},title:e.name,key:e.id,selectable:!1},e.children&&n.TreeNodeList(e.children))})},n.onTabChange=function(e){var t={},a=n.state,r=a.panes,l=a.activeKey,o=a.currentCodeContent;r.forEach(function(a){a.key==l&&(a.content=o),a.key==e&&(t=a)});var s=t,c=s.content,u=void 0===c?"":c;n.setState({panes:r,currentCodeContent:u,activeKey:e})},n.state={activeKey:0,panes:[],currentCodeContent:""},n}return(0,b.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"task/fetchTaskTreeData"});var t=document.body.clientHeight-152;document.getElementsByClassName("task-submit-container")[0].style.height="".concat(t,"px")}},{key:"render",value:function(){var e=this,t=this.props,a=t.treeDataLoading,n=t.taskTreeData,r=this.state.panes.length>0?"block":"none",u=this.state.panes.length>0?"visible":"hidden";return F.default.createElement(D.default,null,F.default.createElement(o.default,{className:"task-submit-container",style:{background:"#FFF"}},F.default.createElement(s.default,{span:6,style:{height:"100%",background:"#fff",borderRight:"1px solid #E7E7E7",overflow:"auto"}},a?F.default.createElement(c.default,null):F.default.createElement(w.default,{onSelect:this.onSelect,showIcon:!0,selectedKeys:[this.state.activeKey.toString()]},this.TreeNodeList(n))),F.default.createElement(s.default,{span:18,style:{height:"100%",background:"#FAFAFA",position:"relative"}},F.default.createElement(o.default,{style:{display:r},className:H.default.tabWrap},F.default.createElement(g.default,{type:"card",onChange:this.onTabChange,activeKey:this.state.activeKey.toString()},this.state.panes.map(function(t){return F.default.createElement(O,{key:t.key,tab:F.default.createElement("span",{className:H.default.tab},t.title,F.default.createElement(i.default,{className:H.default["close-icon"],type:"close-circle",theme:"outlined",onClick:function(a){return e.removePane(a,t.key)}}))})})),this.dropDownMenu()),F.default.createElement(o.default,{style:{visibility:u,height:"calc(100% - 48px)"}},F.default.createElement(N.Controlled,{value:this.state.currentCodeContent,options:{theme:"neo",lineNumbers:!0},editorDidMount:function(t){e.editor=t},onBeforeChange:function(t,a,n){e.setState({currentCodeContent:n})}})))),F.default.createElement(o.default,{style:{display:r},className:H.default["btn-wrap"]},F.default.createElement(s.default,{span:24,className:H.default.btnCol},F.default.createElement(l.default,{type:"primary",onClick:function(){return e.saveCode()},className:H.default.btn},"\u4fdd\u5b58"),F.default.createElement(l.default,{onClick:this.submitCode,className:H.default.btn},"\u63d0\u4ea4"),F.default.createElement(l.default,{onClick:function(){return T.default.push("/jobPlan")},className:H.default.btn2},"\u67e5\u770b\u4f9d\u8d56"))))}}]),t}(F.Component))||C),S=j;t.default=S},Bdex:function(e,t,a){e.exports={leafDot:"antd-pro-main-resources-web-src-src-pages-task-task-submit-leafDot",tabWrap:"antd-pro-main-resources-web-src-src-pages-task-task-submit-tabWrap",dropDownMenu:"antd-pro-main-resources-web-src-src-pages-task-task-submit-dropDownMenu",dropDownMenuIcon:"antd-pro-main-resources-web-src-src-pages-task-task-submit-dropDownMenuIcon",tab:"antd-pro-main-resources-web-src-src-pages-task-task-submit-tab","close-icon":"antd-pro-main-resources-web-src-src-pages-task-task-submit-close-icon","btn-wrap":"antd-pro-main-resources-web-src-src-pages-task-task-submit-btn-wrap",btnCol:"antd-pro-main-resources-web-src-src-pages-task-task-submit-btnCol",btn:"antd-pro-main-resources-web-src-src-pages-task-task-submit-btn",btn2:"antd-pro-main-resources-web-src-src-pages-task-task-submit-btn2"}},IFou:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}var o=r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("path",{d:"M0-1h16v16H0z"}),r.a.createElement("path",{d:"M7.64.5H.5v13h14.07l.93-6.144V2.5H8.306L7.64.5z",stroke:"#016FFF",fill:"#FFF",fillRule:"nonzero"}),r.a.createElement("path",{d:"M2.401 5.5l-1.778 8H15.6l1.778-8H2.4z",stroke:"#016FFF",fill:"#FFF",fillRule:"nonzero"})),s=function(e){return r.a.createElement("svg",l({width:18,height:14},e),o)};t["default"]=s},gBuh:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}var o=r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("path",{d:"M-1-2h20v20H-1z"}),r.a.createElement("path",{d:"M0 0h18v2H0V0zm0 7h18v2H0V7zm0 7h18v2H0v-2z",fillOpacity:.65,fill:"#000",fillRule:"nonzero"})),s=function(e){return r.a.createElement("svg",l({width:18,height:16},e),o)};t["default"]=s},qLOP:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}var o=r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("path",{d:"M0-2h18v18H0z"}),r.a.createElement("path",{d:"M.5.5v3h7.86l-.75-3H.5zM.5 3.5v10h15v-10H.5z",stroke:"#016FFF",fill:"#FFF",fillRule:"nonzero"})),s=function(e){return r.a.createElement("svg",l({width:16,height:14},e),o)};t["default"]=s}}]);