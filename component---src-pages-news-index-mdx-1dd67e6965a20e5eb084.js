(window.webpackJsonp=window.webpackJsonp||[]).push([[52,115],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("NmYn"),l=a.n(c),i=a("Wbzz"),o=a("Xrax"),b=a("k4MR"),d=a("TSYQ"),s=a.n(d),u=a("QH2O"),m=a.n(u),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,c=void 0===r?[]:r;return Object(p.b)("div",{className:s()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,c=r.baseUrl,l=r.subDirectory,o=c+"/edit/"+r.branch+l+"/src/pages"+t;return c?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},f=a("FCXl"),x=a("dI71"),g=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),c=a===r,o=new RegExp(r+"/?(#.*)?$"),b=n.replace(o,a);return Object(p.b)("li",{key:e,className:s()((t={},t[g.selectedItem]=c,t),g.listItem)},Object(p.b)(i.Link,{className:g.link,to:""+b},e))}));return Object(p.b)("div",{className:g.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:g.list},c))))))},t}(r.a.Component),v=a("MjG9"),k=a("CzIb"),T=a("Asxa"),w=a("OIbQ"),y=a.n(w),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(T.c,{className:y.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,c=t.frontmatter,d=void 0===c?{}:c,s=t.relativePagePath,u=t.titleType,m=d.tabs,O=d.title,x=d.theme,g=d.description,T=d.keywords,w=d.date,y=Object(k.a)().interiorTheme,E=Object(i.useStaticQuery)("2456312558").site.pathPrefix,I=E?n.pathname.replace(E,""):n.pathname,A=m?I.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",D=x||y;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:D,pageTitle:O,pageDescription:g,pageKeywords:T,titleType:u},Object(p.b)(h,{title:r?Object(p.b)(r,null):O,label:"label",tabs:m,theme:D}),m&&Object(p.b)(N,{title:O,slug:I,tabs:m,currentTab:A}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:s}),Object(p.b)(P,{date:w})),Object(p.b)(f.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:A}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},tpJo:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),c=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),o={_frontmatter:i},b=l.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(b,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",null,"12/01/2021"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Update to the reference architecture diagram to add App Connect Enterprise as a source to messaging services"),Object(c.b)("li",{parentName:"ul"},"Update to Flink note on exactly once delivery"),Object(c.b)("li",{parentName:"ul"})),Object(c.b)("h2",null,"11/04/2021"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Add kubernetes ",Object(c.b)("a",{parentName:"li",href:"/refarch-eda/introduction/reference-architecture/#event-driven-architecture"},"deployment diagram for messaging as a service")),Object(c.b)("li",{parentName:"ul"},"Update ",Object(c.b)("a",{parentName:"li",href:"/refarch-eda/use-cases/connect-mq/"},"MQ sink connector tutorial")," for lab 1 and lab 2."),Object(c.b)("li",{parentName:"ul"},"Update to ",Object(c.b)("a",{parentName:"li",href:"/refarch-eda/technology/kafka-connect/"},"Kafka Connect framework content"))),Object(c.b)("h2",null,"10/20/2021"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Integrate ",Object(c.b)("a",{parentName:"li",href:"/refarch-eda/introduction/reference-architecture/#from-soa-to-eda-and-meet-in-the-middle"},"SOA and EDA co-existence section"))),Object(c.b)("h2",null,"10/12/2021"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Learning Journey ",Object(c.b)("a",{parentName:"li",href:"/refarch-eda/journey/101"},"101 content")," to get you started on EDA."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:""},"Step by step tutorial to deploy Event Streams 2021.0.3 release on OpenShift")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/refarch-eda/introduction/usecases/"},"Generic business use cases for EDA adoption"))),Object(c.b)("h2",null,"10/02/2021"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Update to the ",Object(c.b)("a",{parentName:"li",href:"/refarch-eda/introduction/reference-architecture/#event-driven-architecture"},"reference architecture diagram")," to illustrate messaging as a service as the backbone for EDA."),Object(c.b)("li",{parentName:"ul"},"How Automation fits on top of EDA? some ",Object(c.b)("a",{parentName:"li",href:"/refarch-eda/introduction/reference-architecture/#integrating-with-automation-products"},"explanations are here"),"."),Object(c.b)("li",{parentName:"ul"},"Split ",Object(c.b)("a",{parentName:"li",href:"/refarch-eda/technology/kafka-producers/"},"producer into basic and advanced concepts")),Object(c.b)("li",{parentName:"ul"},"Split consumer content into ",Object(c.b)("a",{parentName:"li",href:"/refarch-eda/technology/kafka-consumers/"},"basics and advanced concepts"))),Object(c.b)("h2",null,"09/20/2021"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Apache Flink introduction and ",Object(c.b)("a",{parentName:"li",href:"/refarch-eda/technology/flink/"},"need to know article"))),Object(c.b)("h2",null,"07/30/2021"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/refarch-eda/concepts/model/"},"Devising data models"),": when you need to think about data views and data representation\ndepending of the needs and semantic.")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-news-index-mdx-1dd67e6965a20e5eb084.js.map