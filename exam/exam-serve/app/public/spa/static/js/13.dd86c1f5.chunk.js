(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{733:function(e,t,n){e.exports={logo:"BasicLayout_logo__1vs5H",header:"BasicLayout_header__1FsuM",layoutContent:"BasicLayout_layoutContent__13wOL",layout:"BasicLayout_layout__1xysh",logout:"BasicLayout_logout__3Jid7",slide:"BasicLayout_slide__3G1xS"}},745:function(e,t,n){e.exports={user:"Header_user__NM2WH",menu:"Header_menu__TK5gP"}},819:function(e,t,n){"use strict";n.r(t);var a,r,o,i,c=n(26),u=n(27),l=n(29),s=n(28),m=n(30),p=n(13),h=n(1),d=n.n(h),f=(n(392),n(393)),b=n(733),y=n.n(b),g=f.a.Header,E=f.a.Content,O=f.a.Sider,j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.aside,n=e.breadcrumb,a=e.header;return d.a.createElement(f.a,{className:y.a.layout},d.a.createElement(g,{className:y.a.header},d.a.createElement("div",{className:y.a.logo},d.a.createElement("img",{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg",alt:""})),d.a.createElement("div",{className:y.a.logout},a)),d.a.createElement(f.a,{className:y.a.layoutContent},d.a.createElement(O,{width:200,collapsible:!0,collapsedWidth:0,style:{background:"#fff"},className:y.a.slide},t),d.a.createElement(f.a,{style:{padding:"0 24px 24px"}},n,d.a.createElement(E,null,d.a.Children.map(this.props.children,function(e){return e})))))}}]),t}(h.Component),_=n(154),v=(n(544),n(80)),w=(n(712),n(485)),k=n(51),x=n(65),N=w.a.SubMenu,C=Object(x.connect)(function(e){return Object(p.a)({},e.main,e.global)},function(e){return{setOpenKeys:function(t){e({type:"main/setOpenKeys",openKeys:t})}}})(a=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={groups:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){window.aab=this;var e=this.state.groups,t=this.props,n=t.openKeys,a=t.setOpenKeys;return d.a.createElement(w.a,{mode:"inline",style:{height:"100%",borderRight:0},openKeys:n,theme:"dark",onOpenChange:function(e){return a(e)}},e&&e.map(function(e){return e.noAutho?null:d.a.createElement(N,{key:e.id,title:d.a.createElement("span",null,d.a.createElement(v.a,{type:e.groupIcon}),e.groupName)},e.items&&e.items.map(function(t){return t.noAutho?null:d.a.createElement(w.a.Item,{key:t.id},d.a.createElement(k.Link,{to:{pathname:t.path,state:{parent:e.groupName,child:t.text,id:t.id}}},t.text))}))}))}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.childRoutes,n=e.viewAuthority;if(0===n.length)return{};var a=[];return t&&t.forEach(function(e){var t=a.find(function(t){return t.groupName===e.groupName});t?t.items.push(e):a.push({groupName:e.groupName,groupIcon:e.groupIcon,items:[e],id:e.id})}),function e(t){t.forEach(function(t,a){-1===n.findIndex(function(e){return e.view_id===t.id})&&(t.noAutho=!0),t.items&&e(t.items)})}(a),a.forEach(function(e){e.items=e.items.filter(function(e){return"no"!==e.showAside}),e.items.every(function(e){return e.noAutho})?e.noAutho=!0:e.noAutho=!1}),{groups:a}}}]),t}(h.Component))||a,I=Object(k.withRouter)(r=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.location.state,t="";return e&&(t=e.child),d.a.createElement("h2",{style:{padding:"20px 0",marginTop:"10px"}},t)}}]),t}(h.Component))||r,A=(n(490),n(438)),R=(n(742),n(747)),F=n(745),L=n.n(F),K=(o=Object(x.connect)(function(e){return window.store=e,Object(p.a)({},e.login,e.main)}),Object(k.withRouter)(i=o(i=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"main/getUserInfo"})}},{key:"render",value:function(){var e=this,t=this.props.userInfo.user_name,n=d.a.createElement(w.a,{style:{width:"120px"}},d.a.createElement(w.a.Item,null,d.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"},"\u4e2a\u4eba\u4e2d\u5fc3")),d.a.createElement(w.a.Item,null,d.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"},"\u6211\u7684\u73ed\u7ea7")),d.a.createElement(w.a.Divider,null),d.a.createElement(w.a.Item,null,d.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"},"\u8bbe\u7f6e")),d.a.createElement(w.a.Item,{key:"logout",onClick:function(){return e.props.dispatch({type:"login/logout"})}},"\u9000\u51fa\u767b\u5f55"));return d.a.createElement("div",null,d.a.createElement(A.a,{overlay:n,placement:"bottomRight"},d.a.createElement("span",{className:L.a.user},d.a.createElement(R.a,{src:"https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png"}),t)))}}]),t}(h.Component))||i)||i);var B,H=function(){return d.a.createElement("div",{style:{textAlign:"center"}},d.a.createElement(v.a,{style:{color:"red",fontSize:"50px"},type:"close"}),d.a.createElement("div",null,"\u6ca1\u6709\u6743\u9650"))},S=Object(x.connect)(function(e){return Object(p.a)({},e.global)})(B=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.history,n=e.viewAuthority;return t.location.state&&0!==n.length?-1===n.findIndex(function(e){return e.view_id===t.location.state.id})?d.a.createElement(H,null):d.a.createElement(_.a,{childRoutes:this.props.childRoutes}):d.a.createElement(H,null)}}]),t}(h.Component))||B,M=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return window.main=this,d.a.createElement(j,{breadcrumb:d.a.createElement(I,null),aside:d.a.createElement(C,{childRoutes:this.props.childRoutes}),header:d.a.createElement(K,null)},d.a.createElement(S,this.props))}}]),t}(h.Component);t.default=M}}]);
//# sourceMappingURL=13.dd86c1f5.chunk.js.map