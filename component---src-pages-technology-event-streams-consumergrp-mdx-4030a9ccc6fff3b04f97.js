(window.webpackJsonp=window.webpackJsonp||[]).push([[67,111],{"013z":function(e,t,a){"use strict";var s=a("q1tI"),r=a.n(s),c=a("NmYn"),o=a.n(c),n=a("Wbzz"),i=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),m=a("QH2O"),p=a.n(m),g=a("qKvR"),u=function(e){var t,a=e.title,s=e.theme,r=e.tabs,c=void 0===r?[]:r;return Object(g.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=c.length,t[p.a.darkMode]="dark"===s,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.a.text},a)))))},f=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,s=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||s,c=r.baseUrl,o=r.subDirectory,i=c+"/edit/"+r.branch+o+"/src/pages"+t;return c?Object(g.b)("div",{className:"bx--row "+f.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:f.link,href:i},"Edit this page on GitHub"))):null},A=a("FCXl"),O=a("dI71"),w=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,s=e.slug,r=s.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),c=a===r,i=new RegExp(r+"/?(#.*)?$"),l=s.replace(i,a);return Object(g.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=c,t),w.listItem)},Object(g.b)(n.Link,{className:w.link,to:""+l},e))}));return Object(g.b)("div",{className:w.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:w.list},c))))))},t}(r.a.Component),x=a("MjG9"),y=a("CzIb"),v=a("Asxa"),N=a("OIbQ"),k=a.n(N),B=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(v.c,{className:k.a.row},Object(g.b)(v.a,null,Object(g.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,s=e.location,r=e.Title,c=t.frontmatter,b=void 0===c?{}:c,d=t.relativePagePath,m=t.titleType,p=b.tabs,f=b.title,O=b.theme,w=b.description,v=b.keywords,N=b.date,k=Object(y.a)().interiorTheme,T=Object(n.useStaticQuery)("2456312558").site.pathPrefix,C=T?s.pathname.replace(T,""):s.pathname,S=p?C.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",I=O||k;return Object(g.b)(l.a,{tabs:p,homepage:!1,theme:I,pageTitle:f,pageDescription:w,pageKeywords:v,titleType:m},Object(g.b)(u,{title:r?Object(g.b)(r,null):f,label:"label",tabs:p,theme:I}),p&&Object(g.b)(j,{title:f,slug:C,tabs:p,currentTab:S}),Object(g.b)(x.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:d}),Object(g.b)(B,{date:N})),Object(g.b)(A.a,{pageContext:t,location:s,slug:C,tabs:p,currentTab:S}),Object(g.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},PCxb:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return b}));var s=a("wx14"),r=a("zLVn"),c=(a("q1tI"),a("7ljp")),o=a("013z"),n=(a("qKvR"),{}),i={_frontmatter:n},l=o.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(l,Object(s.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",null,"Consumer groups"),Object(c.b)("p",null,"You can review the major concepts for Kafka Consumer in ",Object(c.b)("a",{parentName:"p",href:"../../kafka-producers-consumers/#kafka-consumers"},"this note")," and the ",Object(c.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/EventStreams?topic=EventStreams-consuming_messages#consumer-groups"},"product documentation"),".\nThe following figure summarizes the concepts involved in this lab: Consumers belong to ",Object(c.b)("strong",{parentName:"p"},"consumer groups")," and partitions are dynamically allocated to consumer(s) within the group."),Object(c.b)("img",{src:"../images/consumer-groups.png",alt:null}),Object(c.b)("h2",null,"Considerations"),Object(c.b)("p",null,"Kafka automatically detects failed consumers so that it can reassign partitions to working consumers. "),Object(c.b)("p",null,"The consumer can take time to process records, so to avoid the consumer group controler removing consumer taking too long, it is possible to set the ",Object(c.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#max.poll.interval.ms"},"max.poll.interval.ms")," consumer property. If poll() is not called before expiration of this timeout, then the consumer is considered failed and the group will rebalance in order to reassign the partitions to another member.\nThe second mechanism is the heartbeat consumers send to the group cordinator to show they are alive. The ",Object(c.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#session.timeout.ms"},"session.timeout.ms")," specifies the max value to consider before removing a non responding consumer. "),Object(c.b)("h2",null,"Offset"),Object(c.b)("p",null,"Consumers do a read commit for the last processed record: "),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"676px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB6klEQVQoz21SiXKbMBDl/7+rM+lMmrapazt2fBvMLRDCYJ2vKxEnaac7Ixae3r69iIxxOGQG24vGJiHvz8XgNTbYkd+Q9/iO7t+x5H4/YduAabS9ReQfnuDt60JCjA6DdHjeqoAtTxpFa2Ed8GunIIma1CRAYt7mBwU+OPQUtz5rRPzqKJNEJzjmR4NWDOiHEbvUoL8Kql6j7iS4EDiXDg0XyJlEUlFFvEVcOZRND96P2GdUYUeCm/iGvKpJ0CKvBRi/YptaCm6wTxWK5oaStTiVQFo0SMqRxClRw4LgOeMoWE/JHaJGWBzzqeVvKwlFr7695Umh6x1W1IYYbbhfnacx1N0U0woXZu9jaBVTyyPN6/deh9Z+bHQYrifNCHt+lXiYSyyOfvgaT+uJt6TvFwp+XIyEqTBnf5KKWsabFcwgLelUk8/Iv+wVjC/3zfwfcSbBnJZyoZaXexlw5z440f3jcFFoOwNxtbQUS+1aDDf7V4DHPc/jrTD4pBM4/kT3zDUHLjTggjnENB9fSdUaKH2Pol9jAG34jddYbGOFY6rBuo/EQVBpi+/zDA8/M8zWtNnkFoh+DNq49wqTXODLU4zHWYHVoaNqNSXXaP4VtNaiZgxFVYB33NeMz3YXvA4D8rJAxSpIOf6X8wcv50mdlkhLYgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"of-1",title:"of-1",src:"/refarch-eda/static/6804c4c12cc260f154d7de73a61b4cf6/71afc/offsets.png",srcSet:["/refarch-eda/static/6804c4c12cc260f154d7de73a61b4cf6/7fc1e/offsets.png 288w","/refarch-eda/static/6804c4c12cc260f154d7de73a61b4cf6/a5df1/offsets.png 576w","/refarch-eda/static/6804c4c12cc260f154d7de73a61b4cf6/71afc/offsets.png 676w"],sizes:"(max-width: 676px) 100vw, 676px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"When a consumer starts and is assigned a partition to consume, it will start at its group’s committed offset or latest or ealiest as ",Object(c.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#auto.offset.reset"},"auto.offset.reset")," (When there is a committed offset, the auto.offset.reset property is not used)."),Object(c.b)("p",null,"If a consumer fails after processing a message but before committing its offset, the committed offset information will not reflect the processing of the message. "),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB50lEQVQoz22Sa4+aQBiF/f9/qF+aJv1iskmru+u1ugqKIBdFRO7MzNN3tK1p00lOYAY477kw6JXBrstN4yc9wUkg15XT8bHrcQ891ytkmUEpSC+Kt3XL7POS4ZeI4bji5XvEZJnixx2D9KroeoNzbJhuSyabkrVX8r7OWTiF3Ff3gXVjSFNwdoqvo47RpwWj4ZH5Nmc8XvI29TgmQsivdS0M/kmLQk2SadlrLrniVmry/KGwbSFMNOOZDHZ6Jh8NrgxMTh27Q80hbBnYj6ztnWzmbsXMKdkeWm43KAruZEVhY3lEY92EQhDGjZC3gk6UtXcy63bQdo8XT5kS0g5XEEtOWkMlbq2q32T2TGtD1fwLfYd99sdyXj6snq+a6KzYSFb7oyIIxfrlQWRXUcvgoJIsa8aTmtdpy8bt2QctcSoKzyIzLw3boGbhFlKMYHOTsG/MJHAvquk6cXA2lBLBxlG8zit+OBUrt8bdZ6zWAfNliB+WT4Xn3LCPNF4sCi+2FHXPJJdyylIIT0aAlKB4eSuZriveVw2LVcK30UrU+vgyfGCt2hy8qGV9qFjsKjzJ0aqxRFn2dylNp+8FHOOWIGqERAqSP8MLe7JcM6glTNtcIM1tA0vacJSfu65tIU8iYywM/1/P85+VCPlM3a4q7wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"of-2",title:"of-2",src:"/refarch-eda/static/8c29f64fd1f8fe592175dddda475a51d/3cbba/offsets-2.png",srcSet:["/refarch-eda/static/8c29f64fd1f8fe592175dddda475a51d/7fc1e/offsets-2.png 288w","/refarch-eda/static/8c29f64fd1f8fe592175dddda475a51d/a5df1/offsets-2.png 576w","/refarch-eda/static/8c29f64fd1f8fe592175dddda475a51d/3cbba/offsets-2.png 1152w","/refarch-eda/static/8c29f64fd1f8fe592175dddda475a51d/132e7/offsets-2.png 1404w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"This means that the message will be processed again by the next consumer in that group to be assigned the partition."),Object(c.b)("p",null,"In the case where consumers are set to auto commit, it means the offset if committed at the poll() level and if the service crashed while processing of this record as: "),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"706px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB50lEQVQoz22S2ZKbMBRE+f9PyM+kkhdPUknF4/E2ZrENxng3ZpGQBOq0YJY8RFW3hCjR9Ll9PbwtZYBSALUEitricLJI9sNeloDWtr93e7RYJxL+qsRk3uBlqXnWiDMD0XTwHlXHB4v0rDAJaiy3AtOgwiJirUvs+V5KJ8oqgEVg8H30wNOXr/g2KvDj1xqjpxmeZyny0sDTxqLtLK78c5hqbDL+7aCQXRT3BvfCoGnQC0oSBBuN31OBuV9jFkiE6zNeVyndZsgLDU/pQfBWtNhQKD5qnO5tjyeJXxG3KOw/yAZhLLHeNYiIvk0Vdgdi7xQqQeSCyJLI2UVjGoke2U9ML6aUpTsnNIhZa1nsJ/vtTHR2MOMoTTvc8T5C0XRDkZLVSoW6anG6AvnD0iHQdcMHrgX7E91tFeYrjYWvkGSK7xQaGvDuRJV8iFLZh7IIC5zGr3hePDBelkh5saWje277PdxqLMMaK9K42iQCaSaYtOB0ENlZdhiubxtGHx8MyuSI80X2bSjoVCngfLY4HsE0NX5OBF58yVAEx2qoOBUonaALpeuA481QUPXBHK4dLHOpaiLnbENlP5CvuUEUuzAkNrvPipLmcw5d/wKm9mdVY8xx8GMNwRFxgbwLvYfijn0g/ym3/gK4xvrxUZirNwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"of-3",title:"of-3",src:"/refarch-eda/static/4686853f10161b026f380c01f3e68127/46db9/offsets-3.png",srcSet:["/refarch-eda/static/4686853f10161b026f380c01f3e68127/7fc1e/offsets-3.png 288w","/refarch-eda/static/4686853f10161b026f380c01f3e68127/a5df1/offsets-3.png 576w","/refarch-eda/static/4686853f10161b026f380c01f3e68127/46db9/offsets-3.png 706w"],sizes:"(max-width: 706px) 100vw, 706px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"then the record (partition 0 - offset 4) will never be processed."),Object(c.b)("h2",null,"Consumer lag"),Object(c.b)("p",null,"The consumer lag for a partition is the difference between the offset of the most recently published message and the consumer’s committed offset."),Object(c.b)("p",null,"If the lag starts to grow, it means the consumer is not able to keep up with the producer’s pace."),Object(c.b)("p",null,"The risk, is that slow consumer may fall behind, and when partition management may remove old log segments, leading the consumer to jump forward to continnue on the next log segment. Consumer may have lost messages."),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"682px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1UlEQVQoz21Sa5OiMBD0//+z2w+3q6Csj/OBIAsRBSGBQJK+BrS2rm6naqoImfRMd88MDGuBrgeqGshvwL1wyHMgE0DKLArg8XBQyg3lEPceu1MLL9DwPjWCncYh0sRwmMnGYXtu4e8lgqPCL69ClGqoxuL36ob5+oYwaWHYsCRoUQLhRWPH2tWGuVWIYoV9qNC0FjNjHGLRY8+iMO2wIbi4dygrg8+jxCaUyMseUzi0LeBzqre5xGLT4D1QOMWsO8gJcCwjk57jSu1Qd0Ai7jhGCU4XgZKT9naosZRmonwl5dOlnTJucU40jvGTsnMO/4eDNYYAZvz+5+bH+u8YJ9RaU/QH6rpGVVVoeX7FoF0UUccwplHX8Z9UFuJmkF4NvphZbnArzchgZkgnpZXL5QpB8ImF50MIgZ7DeWuKvlOIvxQSGlMUU6NLpvGHprx7Ch++wmbXYMtzo6lhrThBnGI+97AK1lgslhBZhko6vPk5Rc+RXCegR0Wn6XKw1fhYsdm+gc+GSfZ0WT9NsVxEQ24l0fOyhuosJM15EHRI3bmnlm7c2SN3bsl1CQg4MDicFdZ7RansZMpL51pKLnU5PrXuG+S1CS9DBjcl3VfPrKnpcB7u/wJs7/4ZNlzRGQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"offsets 4",title:"offsets 4",src:"/refarch-eda/static/c3cca3accc73283d2e165bbb29377111/8bbfc/offsets-4.png",srcSet:["/refarch-eda/static/c3cca3accc73283d2e165bbb29377111/7fc1e/offsets-4.png 288w","/refarch-eda/static/c3cca3accc73283d2e165bbb29377111/a5df1/offsets-4.png 576w","/refarch-eda/static/c3cca3accc73283d2e165bbb29377111/8bbfc/offsets-4.png 682w"],sizes:"(max-width: 682px) 100vw, 682px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"You can use the kafka-consumer-groups tool to see the consumer lag, or use the Event Streams User Interface:"),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAtUlEQVQY061Qyw7DIAzr/3/mpK1dCx20vAN4CeuxxyFZ2I4TIqbn/MaybiAi/ONMq9Jw3iOmDH0kKBvRWkfvHU3Q+q1ulxY/lQoXy8B0uAAfEuzpYc4In2jgDBIQXm90HfznCSqsLzAu84ba4vFasVuHwI0CCXluOFzCvO5Q5mS/8oNhaIHUJCPZRe88PA89mcNBfSwyr11qQyG+qV2oPCjzdxQQ1yQjOsTMnEZe/M1sw6Pa8QW2NoZJHQKzSAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"es cg 1",title:"es cg 1",src:"/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/3cbba/es-cg-1.png",srcSet:["/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/7fc1e/es-cg-1.png 288w","/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/a5df1/es-cg-1.png 576w","/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/3cbba/es-cg-1.png 1152w","/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/0b124/es-cg-1.png 1728w","/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/4ea69/es-cg-1.png 2304w","/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/f6c25/es-cg-1.png 2670w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"The group can be extended to see how each consumer, within the group, performs on a multi partitions topic:"),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA8klEQVQoz5VSi27EIAzj/7+y2tqqT/rYri2P4sWpmHrS6aYhWcQkmGAwy7KgaRp0XYe6rrGuKzhSSn9CqnCeCS5cCBEw3ntZPBFCgHNO54wYo+Y437nWSxxlzYvKdhAB68PBTNOEvu8xDAPYbQY7tdaibVuwJnPehJjnWes4T5OVvOyT2DBZFAWqqlLRO2hFWZYqMI7jL2etNiFrveSqj0/hgx5ojuPAvu96XV7pvyOlE1/fl++0xVBs2zZQOPuTcffsFU98kOhhH8sVS1MqSGTB59PTW87BPblDPrChN/wu9Inm30FP3nGF7O/E01FyfJQfc1lsTb99c40AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"es cg 2",title:"es cg 2",src:"/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/3cbba/es-cg-2.png",srcSet:["/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/7fc1e/es-cg-2.png 288w","/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/a5df1/es-cg-2.png 576w","/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/3cbba/es-cg-2.png 1152w","/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/0b124/es-cg-2.png 1728w","/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/4ea69/es-cg-2.png 2304w","/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/4992e/es-cg-2.png 2458w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("h2",null,"Consumer group APIs"),Object(c.b)("h3",null,"List the consumer groups using CLI"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"ibmcloud es groups\n")),Object(c.b)("p",null,"Results:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"Group ID   \nContainerAnomalyRetrySpringConsumers   \nContainerSpringConsumers   \nOrderSpringConsumers   \nordercmd-command-consumer-grp   \nordercmd-event-consumer-grp   \norderquery-container-consumer   \norderquery-orders-consumer   \nreefer-telemetry-reactive   \nvoyage-consumer-group   \n\n")),Object(c.b)("h3",null,"Get the details of a consumer group"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"ibmcloud es group ordercmd-command-consumer-grp \n")),Object(c.b)("p",null,"and the results:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"Details for consumer group ordercmd-command-consumer-grp\nGroup ID                        State   \nordercmd-command-consumer-grp   Stable   \n\nTopic                            Partition   Current offset   End offset   Offset lag   Client                      Consumer                                                         Host   \neda-integration-order-commands   0           11               11           0            ordercmd-command-consumer   ordercmd-command-consumer-337bb052-371b-431a-b386-3a0e99fafb18   /169.254.0.3   \n")),Object(c.b)("h3",null,"Reset a group"),Object(c.b)("p",null,"Sometime it is needed to reprocess the messages. The easiest way is to change the groupid of the consumers to get an implicit offsets reset, but it is also possible to reset for some topic to the earliest offset:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"}," ibmcloud es group-reset --group ordercmd-command-consumer-grp --all-topics --mode earliest --execute\n")),Object(c.b)("p",null,"The previous command is the same as using the kafka tool:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"kafka-consumer-groups \\\n                    --bootstrap-server kafkahost:9092 \\\n                    --group ordercmd-command-consumer-grp \\\n                    --reset-offsets \\\n                    --all-topics \\\n                    --to-earliest \\\n                    --execute\n")),Object(c.b)("p",null,"To get the processing for a specific topic:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"}," ibmcloud es group-reset --group ordercmd-command-consumer-grp --topic orders\n")),Object(c.b)("h3",null,"Delete a group"),Object(c.b)("p",null,"This works only for empty group"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"ibmcloud es group-delete reefer-telemetry\n")))}b.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-technology-event-streams-consumergrp-mdx-4030a9ccc6fff3b04f97.js.map