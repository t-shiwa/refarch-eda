(window.webpackJsonp=window.webpackJsonp||[]).push([[66,73,123],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),b=a.n(i),l=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),d=a("TSYQ"),s=a.n(d),m=a("QH2O"),u=a.n(m),p=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:s()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,b=r.subDirectory,c=i+"/edit/"+r.branch+b+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),i=a===r,c=new RegExp(r+"/?(#.*)?$"),o=n.replace(c,a);return Object(p.b)("li",{key:e,className:s()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(p.b)(l.Link,{className:f.link,to:""+o},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},i))))))},t}(r.a.Component),v=a("MjG9"),T=a("CzIb"),y=a("Asxa"),k=a("OIbQ"),w=a.n(k),I=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(y.c,{className:w.a.row},Object(p.b)(y.a,null,Object(p.b)("div",{className:w.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,d=void 0===i?{}:i,s=t.relativePagePath,m=t.titleType,u=d.tabs,j=d.title,x=d.theme,f=d.description,y=d.keywords,k=d.date,w=Object(T.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,D=P?n.pathname.replace(P,""):n.pathname,E=u?D.split("/").filter(Boolean).slice(-1)[0]||b()(u[0],{lower:!0}):"",L=x||w;return Object(p.b)(o.a,{tabs:u,homepage:!1,theme:L,pageTitle:j,pageDescription:f,pageKeywords:y,titleType:m},Object(p.b)(O,{title:r?Object(p.b)(r,null):j,label:"label",tabs:u,theme:L}),u&&Object(p.b)(N,{title:j,slug:D,tabs:u,currentTab:E}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:s}),Object(p.b)(I,{date:k})),Object(p.b)(h.a,{pageContext:t,location:n,slug:D,tabs:u,currentTab:E}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},DMNI:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),l=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},o=c("AnchorLinks"),d=c("AnchorLink"),s=c("InlineNotification"),m={_frontmatter:l},u=b.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o,{mdxType:"AnchorLinks"},Object(i.b)(d,{mdxType:"AnchorLink"},"Kafka Connect Scenarios"),Object(i.b)(d,{mdxType:"AnchorLink"},"Reference Implementations")),Object(i.b)(s,{mdxType:"InlineNotification"},Object(i.b)("strong",null,"EDITOR'S NOTE:")," This page should have sections that mirror the ",Object(i.b)("em",null,"Technology")," sections sub-directories."),Object(i.b)("h2",null,"Kafka Connect Scenarios"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Scenario"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Link"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Realtime Inventory"),Object(i.b)("td",{parentName:"tr",align:null},"An end-to-end data pipeline lab scenario, connecting multiple components of a realtime inventory system via Kafka Connect."),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/refarch-eda/scenarios/realtime-inventory/"},"Scenarios - Realtime Inventory"))))),Object(i.b)("h2",null,"Reference Implementations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Scenario"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Link"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Shipping fresh food over sea ",Object(i.b)("em",{parentName:"td"},"(external)")),Object(i.b)("td",{parentName:"tr",align:null},"The EDA solution implementation using event driven microservices in different language, and demonstrating different design patterns."),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"https://ibm-cloud-architecture.github.io/refarch-kc/"},"EDA reference implementation solution"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Vaccine delivery at scale ",Object(i.b)("em",{parentName:"td"},"(external)")),Object(i.b)("td",{parentName:"tr",align:null},"An EDA and cross cloud pak solution"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"https://ibm-cloud-architecture.github.io/vaccine-solution-main/"},"Vaccine delivery at scale"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Real time anomaly detection ",Object(i.b)("em",{parentName:"td"},"(external)")),Object(i.b)("td",{parentName:"tr",align:null},"Develop and apply machine learning predictive model on event streams"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"https://ibm-cloud-architecture.github.io/refarch-reefer-ml/"},"Refrigerator container anomaly detection solution"))))))}p.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-scenarios-overview-index-mdx-cb4214330bf9ab7dec0a.js.map