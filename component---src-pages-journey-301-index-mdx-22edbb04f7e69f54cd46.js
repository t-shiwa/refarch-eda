(window.webpackJsonp=window.webpackJsonp||[]).push([[46,114],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),c=a("Wbzz"),l=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,l=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),v=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,l=new RegExp(r+"/?(#.*)?$"),b=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(p.b)(c.Link,{className:v.link,to:""+b},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:v.list},i))))))},t}(r.a.Component),w=a("MjG9"),T=a("CzIb"),k=a("Asxa"),N=a("OIbQ"),y=a.n(N),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(k.c,{className:y.a.row},Object(p.b)(k.a,null,Object(p.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,j=s.theme,v=s.description,k=s.keywords,N=s.date,y=Object(T.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,D=I?n.pathname.replace(I,""):n.pathname,E=m?D.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",C=j||y;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:C,pageTitle:g,pageDescription:v,pageKeywords:k,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:C}),m&&Object(p.b)(f,{title:g,slug:D,tabs:m,currentTab:E}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:d}),Object(p.b)(P,{date:N})),Object(p.b)(O.a,{pageContext:t,location:n,slug:D,tabs:m,currentTab:E}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},tzHk:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),l={_frontmatter:c},b=o.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(b,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this article we are presenting mor advanced concepts and practices for developers\nand operations."),Object(i.b)("h2",null,"Security review - RBAC"),Object(i.b)("h2",null,"Producer advanced"),Object(i.b)("p",null,"In ",Object(i.b)("a",{parentName:"p",href:"/refarch-eda/technology/kafka-producers/#advanced-producer-discussion"},"this section"),", we address how to support exactly once delivery\nbetween producer and consumer, discuss about idempotence and avoid getting duplicate messages from the producer. "),Object(i.b)("h2",null,"Consumer Advanced"),Object(i.b)("h2",null,"Design patterns"),Object(i.b)("p",null,"Event-driven solutions are based on a set of design pattern for application design."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/refarch-eda/patterns/intro/"},"This article")," presents the most common ones."),Object(i.b)("h2",null,"Adoption Domain Driven Design"),Object(i.b)("h2",null,"Reactive system"),Object(i.b)("p",null,"We have introduction and overview of why Reactive Manifesto is important and the supporting technologies, in ",Object(i.b)("a",{parentName:"p",href:"/refarch-eda/advantages/reactive/"},"this article"),"."),Object(i.b)("h2",null,"Quarkus Reactive Messaging"),Object(i.b)("h2",null,"Doing data processing with Flink"),Object(i.b)("h2",null,"Always-On"),Object(i.b)("h2",null,"Monitoring"),Object(i.b)("h2",null,"Governance"))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-journey-301-index-mdx-22edbb04f7e69f54cd46.js.map