(window.webpackJsonp=window.webpackJsonp||[]).push([[23,101],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),l=a.n(r),i=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),p=a.n(u),m=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,l=o.subDirectory,s=r+"/edit/"+o.branch+l+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===o,s=new RegExp(o+"/?(#.*)?$"),c=n.replace(s,a);return Object(m.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(m.b)(i.Link,{className:f.link,to:""+c},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},r))))))},t}(o.a.Component),k=a("MjG9"),T=a("CzIb"),w=a("Asxa"),y=a("OIbQ"),N=a.n(y),P=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:N.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,p=b.tabs,g=b.title,j=b.theme,f=b.description,w=b.keywords,y=b.date,N=Object(T.a)().interiorTheme,z=Object(i.useStaticQuery)("2456312558").site.pathPrefix,E=z?n.pathname.replace(z,""):n.pathname,I=p?E.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",C=j||N;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:C,pageTitle:g,pageDescription:f,pageKeywords:w,titleType:u},Object(m.b)(x,{title:o?Object(m.b)(o,null):g,label:"label",tabs:p,theme:C}),p&&Object(m.b)(v,{title:g,slug:E,tabs:p,currentTab:I}),Object(m.b)(k.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:d}),Object(m.b)(P,{date:y})),Object(m.b)(O.a,{pageContext:t,location:n,slug:E,tabs:p,currentTab:I}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},s4M9:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),s={_frontmatter:i},c=l.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Development deployment uses one zookeeper server. For production the replicas is set to 5 to tolerate one planned and one unplanned failure. The service defines 3 ports: one for the inter-server communication, one for client access and one for leader-election.\nPersistence volumes are needed to provide durable storage. Better to use network storage like NFS or glusterfs."),Object(r.b)("p",null,"The zookeeper manifests are defined in this project under the ",Object(r.b)("inlineCode",{parentName:"p"},"deployments/zookeeper/dev")," folder. We are using our own docker images and the Dockerfile to build this image is in ",Object(r.b)("inlineCode",{parentName:"p"},"deployments/zookeeper"),". The image is already pushed to the Docker Hub under ibmcase account."),Object(r.b)("p",null,"We are providing a script to install zookeeper as a kubernetes environment. First be sure to be connected to your kubernetes cluster then run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ pwd\n> refarch-eda/deployments/zookeeper\n$ ./deployZoopeeker.sh\n\n$ kubectl get pods -n greencompute\nNAME                            READY     STATUS    RESTARTS   AGE\ngc-zookeeper-57dc5679bb-bh29q   1/1       Running   0          1m\n")),Object(r.b)("p",null,"It creates volume, services and deployment or statefulset."),Object(r.b)("p",null,"If you want to deploy it in more resilient deployment we provide other manifests under the prod folder. To install:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ ./deployZoopeeker.sh prod\n")),Object(r.b)("p",null,"Once installed you do not need to reinstall it."),Object(r.b)("p",null,"We are also delivering a script to remove zookeeper when you are done using it. (./removeZookeeper.sh)"),Object(r.b)("p",null," When running in production it is better to use separate zookeeper ensemble for each ",Object(r.b)("strong",{parentName:"p"},"Kafka")," cluster. Each server should have at least 2 GiB of heap with at least 4 GiB of reserved memory"))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-aaa-orphans-deployments-zookeeper-readme-mdx-a7b10406b49a72484815.js.map