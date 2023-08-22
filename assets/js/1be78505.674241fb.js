"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[9514,4972],{7131:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ge});var n=a(7294),l=a(6010),o=a(1944),r=a(5281),c=a(3320),i=a(3438),s=a(4477),d=a(1116),m=a(3981),u=a(5999),b=a(2466),p=a(5936);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),o=(0,n.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,a)=>{let{scrollY:n}=e;const r=a?.scrollY;r&&(o.current?o.current=!1:n>=r?(c(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:a,scrollToTop:()=>r(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.default)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=a(1442),g=a(6550),k=a(7524),_=a(6668),v=a(1327),C=a(7462);function I(e){return n.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function N(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.default)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},n.createElement(I,{className:S.collapseSidebarButtonIcon}))}var T=a(9689),x=a(902);const B=Symbol("EmptyContext"),w=n.createContext(B);function y(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(w.Provider,{value:o},t)}var L=a(6043),A=a(8596),M=a(9960),Z=a(2389);function F(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function H(e){let{item:t,onItemClick:a,activePath:o,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),f=function(e){const t=(0,Z.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,o),k=(0,A.Mg)(h,o),{collapsed:v,setCollapsed:I}=(0,L.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,n.useContext)(w);if(e===B)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),T=function(e){void 0===e&&(e=!v),N(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,x.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:g,collapsed:v,updateCollapsed:T}),(0,n.useEffect)((()=>{b&&null!=S&&S!==s&&E&&I(!0)}),[b,S,s,I,E]),n.createElement("li",{className:(0,l.default)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":v},p)},n.createElement("div",{className:(0,l.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(M.Z,(0,C.Z)({className:(0,l.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{a?.(t),h?T(!1):(e.preventDefault(),T())}:()=>{a?.(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!v:void 0,href:b?f??"#":f},d),u),h&&b&&n.createElement(F,{categoryLabel:u,onClick:e=>{e.preventDefault(),T()}})),n.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},n.createElement(Y,{items:m,tabIndex:v?-1:0,onItemClick:a,activePath:o,level:c+1})))}var P=a(3919),W=a(9471);const V={menuExternalLink:"menuExternalLink_NmtK"};function D(e){let{item:t,onItemClick:a,activePath:o,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,o),E=(0,P.Z)(m);return n.createElement("li",{className:(0,l.default)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},n.createElement(M.Z,(0,C.Z)({className:(0,l.default)("menu__link",!E&&V.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:a?()=>a(t):void 0},d),u,!E&&n.createElement(W.Z,null)))}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function z(e){let{item:t,level:a,index:o}=e;const{value:c,defaultStyle:i,className:s}=t;return n.createElement("li",{className:(0,l.default)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(a),i&&[R.menuHtmlItem,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:c}})}function U(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(H,(0,C.Z)({item:t},a));case"html":return n.createElement(z,(0,C.Z)({item:t},a));default:return n.createElement(D,(0,C.Z)({item:t},a))}}function K(e){let{items:t,...a}=e;return n.createElement(y,null,t.map(((e,t)=>n.createElement(U,(0,C.Z)({key:t,item:e,index:t},a)))))}const Y=(0,n.memo)(K),j={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function G(e){let{path:t,sidebar:a,className:o}=e;const c=function(){const{isActive:e}=(0,T.nT)(),[t,a]=(0,n.useState)(e);return(0,b.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.default)("menu thin-scrollbar",j.menu,c&&j.menuWithAnnouncementBar,o)},n.createElement("ul",{className:(0,l.default)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(Y,{items:a,activePath:t,level:1})))}const q="sidebar_njMd",O="sidebarWithHideableNavbar_wUlq",X="sidebarHidden_VK0M",J="sidebarLogo_isFc";function Q(e){let{path:t,sidebar:a,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,_.L)();return n.createElement("div",{className:(0,l.default)(q,c&&O,r&&X)},c&&n.createElement(v.Z,{tabIndex:-1,className:J}),n.createElement(G,{path:t,sidebar:a}),i&&n.createElement(N,{onClick:o}))}const $=n.memo(Q);var ee=a(3102),te=a(3163);const ae=e=>{let{sidebar:t,path:a}=e;const o=(0,te.e)();return n.createElement("ul",{className:(0,l.default)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(Y,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ne(e){return n.createElement(ee.Zo,{component:ae,props:e})}const le=n.memo(ne);function oe(e){const t=(0,k.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement($,e),l&&n.createElement(le,e))}const re={expandButton:"expandButton_pI3x",expandButtonIcon:"expandButtonIcon_Vtwu"};function ce(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:re.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(I,{className:re.expandButtonIcon}))}const ie={docSidebarContainer:"docSidebarContainer_rpaz",docSidebarContainerHidden:"docSidebarContainerHidden_wC1p",sidebarViewport:"sidebarViewport_YVHi"};function se(e){let{children:t}=e;const a=(0,d.V)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function de(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,g.TH)(),[i,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{i&&s(!1),!i&&(0,f.n)()&&s(!0),o((e=>!e))}),[o,i]);return n.createElement("aside",{className:(0,l.default)(r.k.docs.docSidebarContainer,ie.docSidebarContainer,a&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&a&&s(!0)}},n.createElement(se,null,n.createElement("div",{className:(0,l.default)(ie.sidebarViewport,i&&ie.sidebarViewportHidden)},n.createElement(oe,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&n.createElement(ce,{toggleSidebar:d}))))}const me={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function ue(e){let{hiddenSidebarContainer:t,children:a}=e;const o=(0,d.V)();return n.createElement("main",{className:(0,l.default)(me.docMainContainer,(t||!o)&&me.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.default)("container padding-top--md padding-bottom--lg",me.docItemWrapper,t&&me.docItemWrapperEnhanced)},a))}const be={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function pe(e){let{children:t}=e;const a=(0,d.V)(),[l,o]=(0,n.useState)(!1);return n.createElement(m.Z,{wrapperClassName:be.docsWrapper},n.createElement(E,null),n.createElement("div",{className:be.docPage},a&&n.createElement(de,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(ue,{hiddenSidebarContainer:l},t)))}var he=a(4972),Ee=a(197);function fe(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(Ee.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),n.createElement(o.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ge(e){const{versionMetadata:t}=e,a=(0,i.hI)(e);if(!a)return n.createElement(he.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(fe,e),n.createElement(o.FG,{className:(0,l.default)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(pe,null,c)))))}},4972:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(7294),l=a(5999),o=a(1944),r=a(3981);function c(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(r.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);