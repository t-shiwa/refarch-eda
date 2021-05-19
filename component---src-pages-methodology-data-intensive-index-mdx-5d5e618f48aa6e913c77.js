(window.webpackJsonp=window.webpackJsonp||[]).push([[41,101],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),s=a("NmYn"),o=a.n(s),r=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),d=a("TSYQ"),b=a.n(d),p=a("QH2O"),m=a.n(p),g=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,i=e.tabs,s=void 0===i?[]:i;return Object(g.b)("div",{className:b()(m.a.pageHeader,(t={},t[m.a.withTabs]=s.length,t[m.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,s=i.baseUrl,o=i.subDirectory,c=s+"/edit/"+i.branch+o+"/src/pages"+t;return s?Object(g.b)("div",{className:"bx--row "+h.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},A=a("FCXl"),y=a("dI71"),v=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===i,c=new RegExp(i+"/?(#.*)?$"),l=n.replace(c,a);return Object(g.b)("li",{key:e,className:b()((t={},t[v.selectedItem]=s,t),v.listItem)},Object(g.b)(r.Link,{className:v.link,to:""+l},e))}));return Object(g.b)("div",{className:v.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:v.list},s))))))},t}(i.a.Component),O=a("MjG9"),j=a("CzIb"),N=a("Asxa"),x=a("OIbQ"),T=a.n(x),k=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(N.c,{className:T.a.row},Object(g.b)(N.a,null,Object(g.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,s=t.frontmatter,d=void 0===s?{}:s,b=t.relativePagePath,p=t.titleType,m=d.tabs,h=d.title,y=d.theme,v=d.description,N=d.keywords,x=d.date,T=Object(j.a)().interiorTheme,E=Object(r.useStaticQuery)("2456312558").site.pathPrefix,z=E?n.pathname.replace(E,""):n.pathname,C=m?z.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",S=y||T;return Object(g.b)(l.a,{tabs:m,homepage:!1,theme:S,pageTitle:h,pageDescription:v,pageKeywords:N,titleType:p},Object(g.b)(u,{title:i?Object(g.b)(i,null):h,label:"label",tabs:m,theme:S}),m&&Object(g.b)(w,{title:h,slug:z,tabs:m,currentTab:C}),Object(g.b)(O.a,{padded:!0},a,Object(g.b)(f,{relativePagePath:b}),Object(g.b)(k,{date:x})),Object(g.b)(A.a,{pageContext:t,location:n,slug:z,tabs:m,currentTab:C}),Object(g.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Lfdq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));var n=a("wx14"),i=a("zLVn"),s=(a("q1tI"),a("7ljp")),o=a("013z"),r=(a("qKvR"),{}),c={_frontmatter:r},l=o.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"In this section we are introducing the different elements of the software life cycles, particular to the development of intelligent applications that leverage data, machine learned models, analytics and cloud native microservices."),Object(s.b)("p",null,"The method supports lightweight development practices, to start the implementation of a MVP ",Object(s.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Minimum_viable_product"},"(Minimum Viable Product)"),", to support scaling-up the architecture and the complexity of an end-to-end integrated solution. This method always guarantees to have deployable components at any point in time, a concept known in CI/CD (Continuous Integration, Continuous Delivery) applied to microservices, integration, data and machine learning models."),Object(s.b)("h2",null,"Integrating data - devops and AI-Analytics development practices"),Object(s.b)("p",null,"Most organizations need to manage software lifecycles. The key tenets listed above imply the need for a separate lifecycle for data, because the outcome or deliverable for any of the key tenets should not be considered static and immutable. Like data, you can think of analytics as having its own lifecycle independent from the software lifecycle and the data lifecycle, although they are all complementary."),Object(s.b)("p",null,"To help achieve digital transformation, your organization should integrate three development lifecycles:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Software/Application"),Object(s.b)("li",{parentName:"ul"},"AI-Analytics"),Object(s.b)("li",{parentName:"ul"},"Data")),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"762px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.33333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABqklEQVQozzWR3W8SURDF+btNfPXFpjF9oFKosehLKQjUWiyFuoam6rbUWlqoYMjC8rVV3F2g++HC/ry70EluJueeO+fOzIn4gKUoaJUKerWKN50Qhu+zEGR7OOHrbY9ffTPEgghpyzNoaKfI7Q8MZz/F8+V9ZP7jiuFWjNmbJL8TcfRUCkwTT5BVxSF/8YecfE9WnAvFDv5h4mqc9pMUWhsc1F9Q7kZpjKWlIO8ykM+hJXewM2lI78G3Mzr6gqNbm+K1QbrS5vjG5KPAnfFCFBc5UV+SkdeJHTyl3I4j9bYY2z0hKAR8IXi+9hx1OxGKUypSVy2O71zey0PWk0fsywNKDZdaz+JSy1AZvCItrxHNP0HqbPNJjdGf1lcd5rKMdl4zS+1CMLL8BdXwKdQeyJ512ZVaYS7UZqh/oaVLnPQ22b/a4K30DKmb4LOawHTvifg3Nfy91HJUkf3DQ7FDg7nYx/eOQ7HuUBKdBrkqcGCMM59yPspQ7mxSUqJIahzFvFztMIjRiFC42QTbWvkYuOwzMDyamktf90L86PJ88Y/RQwt1eo3paDzGfwaV73Mm/PYxAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"SDLC",title:"SDLC",src:"/refarch-eda/static/7505e6736d2a91b202377cac2dcdcbb9/1b1fd/sdlc-ddlc-adlc.png",srcSet:["/refarch-eda/static/7505e6736d2a91b202377cac2dcdcbb9/7fc1e/sdlc-ddlc-adlc.png 288w","/refarch-eda/static/7505e6736d2a91b202377cac2dcdcbb9/a5df1/sdlc-ddlc-adlc.png 576w","/refarch-eda/static/7505e6736d2a91b202377cac2dcdcbb9/1b1fd/sdlc-ddlc-adlc.png 762w"],sizes:"(max-width: 762px) 100vw, 762px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"Each development lifecycle is representative of an iterative workflow that can be used by agile development teams to craft higher value business outcomes. Lifecycles are often timeboxed iterations and can follow a fail-fast paradigm to realize tangible assets. Speed is important in business; most businesses work to meet new needs quickly. The objective of each lifecycle iteration is to address business speed efficiently and proficiently while maximizing business value. "),Object(s.b)("h3",null,"Personas"),Object(s.b)("p",null,"We recommend reading ",Object(s.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/culture/assemble-team-for-data-driven-project"},"this article")," to ",Object(s.b)("strong",{parentName:"p"},"assemble the team to support a data-driven project")," where many roles support the project execution. The following table presents the icons we are using in subsquent figures, with a short description for the role."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"850px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.52777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrUlEQVQoz2VSW27TQBT1ptgH+2ARqGygS+CPogrxg1C/4Ie2Kq0qICRuEtlpnIcT13b89tgztk/vHTRRJSwdnTsz93murc/+Am9XNkrVIE87uAuJ5bLDZlMgSSLEcUyc4HA4aDY2I4oipGl6PGdZBuvcm+PE+YVKtWhFhyyXEKInhwy+72O32yEIAuz3e22/5O12q9/MOxez7i5/4uLTVxR5jn5QVKXBaqUIMUajPxiPx5hMJrBtW9vMjNlsdryfTqdwHOdfwt8P1/h2+wFlWUK2LfJcIAwldReT44N2Zriuq8diCRjGNmyksH5sT/Fx/RrtkCBLQYE9lh6w21c0hq+dwzDUAcw8Gt+xfnxmWYZhAH9VVcF6XJ5hPn1DuhVoGom6FmRLqpZgvV4f9WHmYMbLO2YGJ9NLyWfv0N6/QtfQYzCQNg0ct4PnHUizEQnva0fukLvisXizpnMDIQTJlcP6bvt4f7NBKRRASylLheCpJ6eCEFCS/zXjxHVd6zF5XEbf9yiKAtaXvxVOr3pkldQJ+bfxvI7GKRBHoQ42nRmbO+JgpRSklBps82KfAZk9nO454/qAAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Personas",title:"Personas",src:"/refarch-eda/static/4dc419895799b638204644f3767cfba9/e5284/personas.png",srcSet:["/refarch-eda/static/4dc419895799b638204644f3767cfba9/7fc1e/personas.png 288w","/refarch-eda/static/4dc419895799b638204644f3767cfba9/a5df1/personas.png 576w","/refarch-eda/static/4dc419895799b638204644f3767cfba9/e5284/personas.png 850w"],sizes:"(max-width: 850px) 100vw, 850px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("h4",null,"Differences between analysts and data scientists"),Object(s.b)("p",null,"The MITSloan did a review of the major differences between data scientists and business analysts by considering a set of common dimensions. The table below summarizes the results:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null}),Object(s.b)("th",{parentName:"tr",align:null},"Analysts"),Object(s.b)("th",{parentName:"tr",align:null},"Data Scientists"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"Types of data"),Object(s.b)("td",{parentName:"tr",align:null},"Structured mostly numeric data"),Object(s.b)("td",{parentName:"tr",align:null},"All data types, including unstructured data")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"Preferred tools"),Object(s.b)("td",{parentName:"tr",align:null},"Statistical and modeling tools using data repository"),Object(s.b)("td",{parentName:"tr",align:null},"Programming language with strong statistical library, machine learning, deep learning. Use ML cluster servers")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"Nature of work"),Object(s.b)("td",{parentName:"tr",align:null},"Report, predict, prescribe and optimize"),Object(s.b)("td",{parentName:"tr",align:null},"Explore, discover, investigate and visualize")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"Typical educationl background"),Object(s.b)("td",{parentName:"tr",align:null},"Operations research, statistics, applied mathematics, predictive analytics"),Object(s.b)("td",{parentName:"tr",align:null},"Computer science, data science, cognitive science")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"Mindset"),Object(s.b)("td",{parentName:"tr",align:null},"Entreprenaurial 69%, explore new ideas 58%, gain insights outside of formal projects  54%"),Object(s.b)("td",{parentName:"tr",align:null},"Entreprenaurial 96%, explore new ideas 85%, gain insights outside of formal projects  89%")))),Object(s.b)("h3",null,"DevOps lifecycle"),Object(s.b)("p",null,"The software/application development lifecycle (SDLC) is a well-known and supports both traditional and agile development. The SDLC iterates on incorporating business requirements, adopt test driven development, continuous deployment and continuous integration. The diagram below demonstrates the iteration over recurring developer tasks to build the business intelligent application (internal loop), and the release loop (external) to continuously deliver application features to production.    "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"711px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.05555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACnUlEQVQ4y32UiVITQRCGeThfySofRcCDslABIRxKkDsQTMIpIGeAEBaSEHIQ2Fy72ZnPngkEKS2narZ3prd7/v7/nu0ieYQ+OYazE/A8yDhos5c8hHwO3Wygchl0NoO6v4NWC31+ik6doM+ScHkBWqPB2q7M+x5SfW+4+fwBCjfUZsKk3/Vw8babZjwKVw4Z8aX7emnubEGpQH7oI7mhT+QG+6lMjgmQpk2oTUJvfxf/cB/vYA8tjlY6Jes9fNkPMldgEDppfNnHvUfdVXAjc1SXF6gvzVP7sQy1Gjwm5H/DlGLLUVCvohoNu7bUNJvgi1UKbfbFmtFlaxduAuHNF96U8Klr1YdEMsoliK3D4iJEZkHQqyBo+x6H8GrP7yQUwhsTIxTGhmlNf4PKbTug6qIlyXbiFaVoL9NrMRLLU3Dwy2BGpU7xhVd/YxVlKLEJtf77pEd0Rnk5YGP3JcVYN+GtdVbWVgTpvJRZp7m9ye3sFCURsrX7s53QPFSpSHM1hre5ZqcW8m3CIxFn5jveQpxgTsqVYBYGUUtiq1UB4Fu6qJQ7StuEupDnfnGWanRRVIvYjyzF1w474QTdc0WioVGiowPUYy/wE69F2YAgFqE89oXK+DB6I/GEsOErync+laJL2W3hBw80iIqNrS0KU9Imgs6dmUQtD6JL2bZfuA5yWVTm0rZUB6Fz7JDsH8AZCZEaCpE5z9tylGkPLVizjlUXc6PceqelWtL03vEBnvha2asnhHeVGtmkQ/7wjOvkBdWa12mDx/ls/SBkLb7C7USIytdRGmvxf6hso4I2wYLO+kxZezu4oqiW22NbynSB79tbZKdWz2+K/cB0vLXtd1OyDqSN5MdwPzlOengQNzwuQmXb++ZAE/NnFRL/G8ZMFfw2V4q8AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"DevOps",title:"DevOps",src:"/refarch-eda/static/42f5a62c987faf87ca9ccbff34d621d6/c7595/dev-ops.png",srcSet:["/refarch-eda/static/42f5a62c987faf87ca9ccbff34d621d6/7fc1e/dev-ops.png 288w","/refarch-eda/static/42f5a62c987faf87ca9ccbff34d621d6/a5df1/dev-ops.png 576w","/refarch-eda/static/42f5a62c987faf87ca9ccbff34d621d6/c7595/dev-ops.png 711w"],sizes:"(max-width: 711px) 100vw, 711px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"Before enterring the development iteration cycles, there are tasks to scope the high level business challenges and opportunities, define the business case for the project, define and build the development and operation strategy, define the target infrastructure, security… "),Object(s.b)("p",null,"The smaller loop represents development iteration, while the outer loop represents software release to production with continous feedback to monitor and assess features acceptance. This task list is not exhaustive, but represents a common ground for our discussion."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"“Understanding business objectives”")," is a common task in each lifecycle, but in the context of microservice solution, adoption ",Object(s.b)("a",{parentName:"p",href:"/refarch-eda/methodology/event-storming/"},Object(s.b)("strong",{parentName:"a"},"event storming"))," practice and ",Object(s.b)("a",{parentName:"p",href:"/refarch-eda/methodology/domain-driven-design/"},"domain driven design")," will help understanding the business process, the data aggregates, and the bounded contexts."),Object(s.b)("p",null,"The solution will group a lot of out of the shelves components and a set of microservices supporting the implementation of the business logic and the intelligent application. A lot of things need to be considered while implementing each microservice from a data point of view. We recommend reading ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"/refarch-eda/patterns/data-pipeline/"},"data pipeline for data intensive application"))," to assess what needs to be done, and some best practices. "),Object(s.b)("p",null,"Among the tasks described in these release and development iteration loops, we do not need to cover each of them, but may be highlight the ",Object(s.b)("strong",{parentName:"p"},"Integration service")," task  which has a blue border to demonstrate integration activities between the different lifecycles, like ML model integration which is developed in the ",Object(s.b)("a",{parentName:"p",href:"#mlops-lifecycle"},"MLops iteration"),"."),Object(s.b)("h3",null,"DataOps"),Object(s.b)("p",null,"The data development lifecycle (DataOps) places the data management philosophy into an organic and evolving cycle that is better suited to the constantly changing needs of a business. The DataOps is impacted by the DevOps and the MLOps. It iterates on both the incorporation of business requirements and on the manifestation of data. Data has value and ",Object(s.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/culture/valuation-of-data/"},"the evaluation of data article")," introduces to the concepts to recognize the value of data."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"736px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.93055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADI0lEQVQ4y2WT608cZRTG+Y/86Be/qEkTTbx8sElTE62NgoZoE5PSqqm3RtqgQZe2oZKwlVIsglBKRdrichFdCsuy6y7MshfYO2Uv7G53ZnZmd2b258ts09R4Ms+8yTxznnPe8z5vmz9/h9lED/PpK8zELxApu9mpeHGlL7OcdbKQ7sefn8FsQs2QkesFqvW8Dc2ochjNZvMJ2u7tOuj3HWdUOs0l7xu4s2N4H84yFOhkTPqE4eBH3N+9hNBjPvUjP0nv8mv0LDe2O5neOY9lGYJrYjWtlqBWV5DVCrquU9NUsOyiNAyLumEgHgz9sA1YyY5z1fcWI1unGQy0MxXpRjMNno62w1e5niFUdgksslGYIfZoXWzRsrUr9SJ3o9cZl86zknZSkvPIonBVfURRyZGQY6SVHTGCHA1TawmuZG7Ss3oEZ+B9vve8ymT4C7ua0jhgONSBw/8sF/1HOePvZDzaJYrVbX4s0sVA8E1+3v6YPt9r+HLTLUHDaKDUKhQUMexaGa2u2glL6UF6fc8xGnmZ7uCHdEUn6Pa8wEZu0uaTBwEieQ9Szks0t0ZZ3W8JSgcuJmKf8lv8GyZjn7GcGbQTbsXO0eN5nb6NYzjEOuB7ib7157mX/MHmF9MD3Nnt5m7CIf79nFh55bFgYYmJ0FdiyD1i/Zrl1HCrw4yDswu36F0cYfh2P+4Hr7Cw/gzu/Smb/ys5xGzEwUJ8iOntC8RL6y1BTBOzpqKK0zbEauqqfaqyGPS1zXN8t3aUq6snuOJ5kenwKWqmYqclylnRjIR330e4GKGoVluCW8nbXPedZCTQwQ2Bm/4PyDyMUq7qFGtJ5oTpR4X35rNDqKb6xCKXV7/lovttelc7+PLP48xFXS3BvXyQv0NOXNIA81I/SwJ5OUFJ3AalofzHZ0Utz56aQhYOSJUSxApxIgKpgyxVYae2Q3c/HaHSA3Eb2oUVTuEMnuCX8BmRrKJbJmk5zGDwHZyb7QLvcW3rJDkt+39jN4WJTavl+KKSYi01RWDvDzYyM2zuL6KbDepCsKKXxLff+WfvvuDn8Apee7wDq2naV+9fXuqEg4EnukgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Data Iteration",title:"Data Iteration",src:"/refarch-eda/static/52b80905e8ae7e577bb9a68f1797b188/d2d67/data-iteration.png",srcSet:["/refarch-eda/static/52b80905e8ae7e577bb9a68f1797b188/7fc1e/data-iteration.png 288w","/refarch-eda/static/52b80905e8ae7e577bb9a68f1797b188/a5df1/data-iteration.png 576w","/refarch-eda/static/52b80905e8ae7e577bb9a68f1797b188/d2d67/data-iteration.png 736w"],sizes:"(max-width: 736px) 100vw, 736px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"discover business objectives activity")," task, groups a set of different subjects depending of the context: data, integration, machine learning model development. The goal is to highlight the measurable outcomes expected by business stakeholders. ",Object(s.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/discover/build-a-business-objective"},"The build a business objective article"),") presents the concepts and some questions that can be used to assess the general business requirements and current knowledge of the data. And the ",Object(s.b)("a",{parentName:"p",href:"https://cloudcontent.mybluemix.net/cloud/garage/practices/discover/business-problem-to-ai-data-science-solution"},"translating a business problem into an AI and data science solution")," practice helps the analysis team to assess what data may be needed and what kind of model to develop."),Object(s.b)("p",null,"As you can see activities are addressing data preparation and understanding, so data architecture need to be in place before doing any data sciences work."),Object(s.b)("p",null,"As part of the ",Object(s.b)("strong",{parentName:"p"},"gather data requirements"),", it is important to review the dimensions of value as introduced in the ",Object(s.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/culture/valuation-of-data/"},"“valuation of data” article"),", then formalize the ",Object(s.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/discover/recognize-value-of-data"},"value chain of the data"),"  in the scope of the project, and finally address if the data contains the correct information to answer the business challenges and support the business process."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"em"},"Transform data for AI")," and ",Object(s.b)("inlineCode",{parentName:"em"},"Deploy data integration flow")," tasks have different border colors to demonstrate integration activities between the different lifecycles.")),Object(s.b)("h3",null,"MLOps lifecycle"),Object(s.b)("p",null,"The Machine learning development lifecycle supports the full spectrum of analytical work in the artificial intelligence ladder. This lifecycle incorporates model development and remediation to avoid drift. Because one of the purposes of analytics is to enable an action or a decision, MLOps relies on feedback mechanisms to help enhancing machine models and the overall analytical environment. "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"717px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.97222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKElEQVQ4y12T7W9TdRTH+4/4zje+0jBJjEpiDIYXmqGJxiyovECN04hPREFUEiTBbIPFbGOTMshgodBuAyMOF9yyOJDNdKxdS+0e2t6uu31+WO/t7e16e+/H3243JZ7k3JPfOef3vfd7v+c4EDbm1/jAXeToLyU+9BTpm1EoVAy+/LlI52SZYyL/0z0F71qNdneBT8eKfCT6ToyXUGvmFgSWZdnRsfW4MlfiwCWZU+NZDl1J0nUnT141+OR6kiOjKdpdMn3TebySxuGt3EiKzzxJTv6aJl2u22AN07KjDdg0c9sbdjQaVvNsirNhbfeIaO30Wf9de8QcWbWBx1dl1F/l6nyVG4u6TWOHQqkCEwGDqVANVW/mGgKkZpgslQo8yORYyBQIb+RQ6jUcs9EqT5yKs7dX5rnudZ49myBVNuyL4bTBIfcsT58J8WTvGvsvy/gTm3YtJgBaeuZ5eTBG27DE4x2LXA7EcDTE6xSlQragksmrVFQNw6hjCqptQyW+mf6Yt1wjvPpHjOddS+zvz9lktXqVIV+IwYUwF+aX6fcGWSoWcEiywtdumWOeNF8JPzmSIJHI4JPKPHM2JXyNli6ZljNpdnVl2NWZJpg00E2do3eiHL4V5/PxOO/eXGFSSgnARIkTrhW+vRbl+LUYP7hXKJd1ZMWi1Zmn7arOF877HB/8nVvj7/HmwJ8EU7C2UeaAyyfoPuR9T5h9znlu/C0oVzZNfPEqcxGN2VWNh+s6m9uq9s6o7O7O0XYuxNsDfg6eu86PkxJ1IYohfkmwkGQ6ITERi3M3KZHSFBz3IlV2dyZ4qS/Jiz1J9vbIyKX6tpoW/TNlWi8UeMVZpGNKAIkpagjNFENlj9PPU92rvDAQ4bHTAb6fCeFQdYMFSeWviML9VYXgegVNfLVhNof13/mzTUM1N8joZVSryFQ0yuhijLGAxGhglXAu/+hgb60PfCfW6fWLWQ4O52g9n2FoTrFruarGa24v+y4t84ZrmT3nhcL+CP83x87amNt+8W6ejt/S9ExlOX07zfRSE7CkC3EmvLTfDHDkdoB3PA8YDqzYNcNsMjIF1j/XDHzWHrHe8AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"MLops",title:"MLops",src:"/refarch-eda/static/d6ade799243e92925f80727a37dddf85/b6372/ml-dt-method.png",srcSet:["/refarch-eda/static/d6ade799243e92925f80727a37dddf85/7fc1e/ml-dt-method.png 288w","/refarch-eda/static/d6ade799243e92925f80727a37dddf85/a5df1/ml-dt-method.png 576w","/refarch-eda/static/d6ade799243e92925f80727a37dddf85/b6372/ml-dt-method.png 717w"],sizes:"(max-width: 717px) 100vw, 717px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"An example of a feedback mechanism is capturing data points on the positive or negative effects or outcomes from an action or a decision. This process iterates on data. "),Object(s.b)("p",null,"The developed AI or Analytics model is deployed as one to many services that are integrated in the microservice architecture. So synchronization with devops team is important and part of the method.  "),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Understanding the data and analytics goals")," task is explained in ",Object(s.b)("a",{parentName:"p",href:"https://cloudcontent.mybluemix.net/garage/method/practices/discover/business-problem-to-ai-data-science-solution"},"this note")," with the business analytic patterns."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Defining the analytic approach")," task groups sub activities that help to understand the past activity and assess what kind of predictions, actions are expected by the business users. The patterns and goals analysis will help to assess for supervised or unsupervised leaning needs."),Object(s.b)("h3",null,"Integrating the cycles"),Object(s.b)("p",null,"Although the three lifecycles are independents, you can use them together and establish dependencies to help drive business outcomes. Each lifecycle should be agile and should be incorporated into a DevOps process for development and deployment."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"624px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"93.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAABYlAAAWJQFJUiTwAAADsklEQVQ4y3WU+1MaVxTH/VObH/Jz25n+0DFOTSapE6MtviICCoJPFPCBoIAI4pOgiW9AbQcVFE2NUhUXdPfTy2YRTds7c/bcu7v3M997zj2nSlEUSqPkFVlGFl7W1oi1osiUx4WUYf88RuJ0gczVDtL9dWWvxqkqPWS5sunxUDSfL17y8XScyIkJa6QWnfMHvHvNzGUsHOTWKv8LaJWiwaQvFxwGgmxZbGwau9gftKNsJ5FuvrCY7Sdw0Eo43Un4yKTa3LGZuWwXwXQbf+ZWKsDS5K+dOKsNv7NeV0/mvYFsRydHrXoUq52doA7/Hzpm012EjowCalJtbENHV6AWx0oD4YyRXOHs65GLp6dEf31L3tYP7klwjYNzTJib4sgQS7MvmFv+hciRgZAGmzkwYJt9TYenGvtSvVDZzt7FohbD2XmUPjtXPQPkunu5H3Qg2x0wPMaepRVj1zPMnc/o9/5M+LiT0KGRiPDeZCvver/HHHhJKNPB+plXA45OcCtg4ZevSTa3odidqjE0RrrXSLf1OX09z/GFq4lkSvEzqt693YQl+JLh2Dtm0no2Pvs0oDieJBSuN+hINLWqChlyCagwxzCx2Vr8kReMR14xtm/EkxKJOTEzsdVE48CP2MJv1COncp8qCosCuPlbEyciu2UYQw6kQQ/jA3pq2r+j2VWDKdZG+4IO43ITIwk945vNTMSbmD+2PdzJKkXEEAFUEzE8gjJUgjmR7KNEbBFGTSEM5jf0rLxFN11HjfUnXg1WY4i24E51MHfSyed8Srs2slB4fv41bgPDKGWgY4SZln762rz4O0P47B9wbS1iXetGv9AoYI3YNgz0bYxyeHmswmStotR7qBxlUIRCpXcQ+u0UB1w4dE70tV1Yml1MRE/xJxWm4jmR3QyexAHeeBbPlkQ8q6g1VS6/KrQa5Ooa5dMGBENceEIERtbxz6Twb9/gS0pM7dwIk/Dt3OGP3wu7w7OdJ5q6fVLPVdrqSe3mru+YLAF2i0LVrQDl8Qnv3bqiJ5jE4t/CviBU7twSO5C+AZYVat2mvDa7oziiWaZ375javnmATmzkaOyZxuReFcACe2fF/1Govqh0ntVEmjqLn0BCIpAsqNBAsoh9/pB6ixejZ43gboF8QX4APiTlSct61NsmlxK0OD8wvnapqvMLuCt2inVmH8fyCdm/n8IqCh/BHrw2Lyn1fsyKLBeYFEkoqV1N33N5++89pel/KvxWaUnHZf6e8xuZ60I5zuXvypN9/wDM7zEBDY+zpgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Circles",title:"Circles",src:"/refarch-eda/static/8154d52e6a2565e24914b1423580daac/655e2/circles.png",srcSet:["/refarch-eda/static/8154d52e6a2565e24914b1423580daac/7fc1e/circles.png 288w","/refarch-eda/static/8154d52e6a2565e24914b1423580daac/a5df1/circles.png 576w","/refarch-eda/static/8154d52e6a2565e24914b1423580daac/655e2/circles.png 624w"],sizes:"(max-width: 624px) 100vw, 624px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"The intersection of the three lifecycles highlights the need for unified governance. The intersection between software/app and data, highlights integration and access paths to information. The intersection between data and analytics, highlights integration with the underlying data stores. The intersection between analytics and software/app highlights integration and the use of APIs or other data exchange techniques to assist in resolving complex algorithms or access requirements."),Object(s.b)("p",null,"An other interesting view, is to consider the high level artifacts built in those overlapping areas, as they are very important elements to project managed efficiently to avoid teams waiting for others. "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"891px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/klEQVQoz3WT3W/SYBTG+0d7460mxsvFCy9G4qITF9wQdZGM7MPJGNN9mLgBk7FFgisCK5RCW+jnz/ctsNUF3+TkbU5Pn/Oc5zxViJ0wDG/vMAgmEeVCPB8a101K5RIXFzVarTa+H0ThypfT75R5YPeP74f0LYP6b5X6rwZ6v49l2wSiVgI67hzAOJgvbl29xm42ccYmZ90dcucJvqppeo4qCeML9p5gJsOfThIBzh5mYLKrVizQfZvEfpemUkiwcfWMvLrEcv4R27UlfBz+d5QYvcnd1eisvML4sAaft8glH7BefMyRniK5+5SPZwtYQTdiqRsDMb7BYGjSN4aMxg5KEEjBp/QlYLvFzcoyWiYFO9sUMs9ZzD3k9fcF3hw+odhICUk8oVtAtXbF8fER1WoVXdcZOy5K5fwnpVKZoWlijVysoYW3vwfZ91STaVYXs6webJLIvyBT/oRmdsX2ESR8BqYdsXNcD3e6HKXX07EtK5rWsh3Gnqh2hEb1Gie7JTa+tdi/DNg67bF5aqFHpSFzzDDRUACLLYW4An3seJENZrXlRo/1E00AurzM/mDtS42Rd+cIyU5qaAyGGEJPyVSJb/i+fRzB9LDS5OByxF5FR9XsyCKy6Ug0/9PWUFUVVdir07kRS3H/tU0cPN7E8e5Yy7z8M2TcGnpqEpn7Cw5KPfMCa/EgAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Artifacts",title:"Artifacts",src:"/refarch-eda/static/086ccb0f73ae17d4102be1dc9c393b82/cad2c/artifacts.png",srcSet:["/refarch-eda/static/086ccb0f73ae17d4102be1dc9c393b82/7fc1e/artifacts.png 288w","/refarch-eda/static/086ccb0f73ae17d4102be1dc9c393b82/a5df1/artifacts.png 576w","/refarch-eda/static/086ccb0f73ae17d4102be1dc9c393b82/cad2c/artifacts.png 891w"],sizes:"(max-width: 891px) 100vw, 891px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"Interface definitions and data schema are important elements to address as early as possible in the SDLC. Data access integration includes dedicated microservices managing the full lifecycles and business operations for each major business entities of the solution. The integration can be event-based and adopt an event-driven architecture."),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"data store integration")," addresses storage of high volume data, but also access control, any transformation logic, and event data schema to be consumable by AI workbench."),Object(s.b)("p",null,"The AI model as a service can be mocked-up behind ",Object(s.b)("inlineCode",{parentName:"p"},"Facade")," interface so the developed microservice in need to get prescriptive scoring can be developed with less dependencies. "),Object(s.b)("p",null,"Finally the integration of those three lifecycle over time can be presented in a Gantt chart to illustrate the iterations and the different focuses over time."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.05555555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAACDElEQVQoz1WR608aURDF+df90KZpP9i0sUnb+GC1PiNSHtYCVmSBxlpUwJUKtrCAWnnsg11ZEHd/vVSb6kkmM3fuzDl35vqc2DZa4CN6MIyxHsRNZcB1wfPubByPoTYgsQO7adhJ0dv8zOjfOSmDnMXrWfjo9xkYJoNanZa0iBOMYG/GuNlOYkQ+MRSCYz8IRdFnJMy5BWxpidb7WXr+D1iLK3RFvr8agE4Xn8cD9C1wbDA1MAwG7Q4jTb/zusGNaYr7vqi7Fq8R8bV9Z1ZPeOvvND4xF1e9W44aDrmqwaHa46cBg0dK93A9FKXO1aWGangUmjaFuil6TM50sIfemBBa1g3HFw4/mibJkw4TwQpSpsnq118Ec+csZatsi/zuQZ136znCcpWNI5OJtROeblSYT5+Lujamc0/4EM5oRLz4nS8lhejhHglFYTO/j3x6hlxqsa9ayBWdTEVjJZUgsJdlp9hCVtqiF3xqt0hVy1NrF+jYNbrXNaxhU1xeoot46P7G6KvjBT8SvvVMhlyh26pYT4eBq3HrDgWhpnBuKMTKCZ6lnjOZnmTu2xTT2SesHrxkufwG/8ELIiU/mWqMdCPOVjVCqLGAv/CK9coMUvE18eaaELf/j1wWvzqVCzKb32LrNMGy/Ba5HCLcCBBTA0RPFoiWJMKni0jH04QEwXx+ll0t9tcnL+K4jPgD73KBvFpSCAsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Integrate plan",title:"Integrate plan",src:"/refarch-eda/static/e5bbd54dcfc1174e7a8dd544ce7c46ee/3cbba/3-dlc-gantt.png",srcSet:["/refarch-eda/static/e5bbd54dcfc1174e7a8dd544ce7c46ee/7fc1e/3-dlc-gantt.png 288w","/refarch-eda/static/e5bbd54dcfc1174e7a8dd544ce7c46ee/a5df1/3-dlc-gantt.png 576w","/refarch-eda/static/e5bbd54dcfc1174e7a8dd544ce7c46ee/3cbba/3-dlc-gantt.png 1152w","/refarch-eda/static/e5bbd54dcfc1174e7a8dd544ce7c46ee/a74a0/3-dlc-gantt.png 1418w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"Each development life cycle includes architecture and development tasks. Architecture activities focus on defining infrastructure for runtimes and machine learning environment as well as data topology etc…"),Object(s.b)("p",null,"The different iterations of the data, IA-Analytics and devops life cycle are synchronized via the integration artifacts to build. When components are ready for production, the go-live occurs and the different ",Object(s.b)("inlineCode",{parentName:"p"},"operate")," tasks are executed, combined with the different monitoring. From the production execution, the different teams get continuous feedbacks to improve the application."),Object(s.b)("p",null,"The AI-Analytics tasks are colored in blue and green, on purpose to show the strong dependencies between data and AI. This means the data activities should start as early as possible before doing too much of modeling. "),Object(s.b)("h2",null,"Challenges"),Object(s.b)("p",null,"There are a set of standard challenges while developing an IT solution which integrates results from analytics model. We are listing some that we want to address, document and support as requirements."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"How will the model be made available to developers?"),Object(s.b)("li",{parentName:"ul"},"Is it a batch process updating/appending static records or real time processing on a data stream or transactional data"),Object(s.b)("li",{parentName:"ul"},"How to control resource allocation for Machine Learning job."),Object(s.b)("li",{parentName:"ul"},"How to manage consistency between model, data and code: version management / data lineage"),Object(s.b)("li",{parentName:"ul"},"How to assess the features needed for the training sets.")),Object(s.b)("h2",null,"The Garage Method for Cloud with DataFirst"),Object(s.b)("p",null,"Every department within your organization has different needs for data and analytics. How can you start your data-driven journey? The ",Object(s.b)("a",{parentName:"p",href:"https://www.ibm.com/analytics/datafirst"},"Garage Method for Cloud with DataFirst")," provides strategy and expertise to help you gain the most value from your data. This method starts with your business outcomes that leverage data and analytics, not technology. Defining focus in a collaborative manner is key to deriving early results. Your roadmap and action plan are continuously updated based on lessons learned. This is an iterative and agile approach to help you define, design, and prove a solution for your specific business problem."))}d.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-methodology-data-intensive-index-mdx-5d5e618f48aa6e913c77.js.map