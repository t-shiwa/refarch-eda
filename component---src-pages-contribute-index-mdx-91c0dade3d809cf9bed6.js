(window.webpackJsonp=window.webpackJsonp||[]).push([[36,101],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("NmYn"),i=a.n(o),l=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),u=a.n(s),p=a("QH2O"),m=a.n(p),d=a("qKvR"),h=function(e){var t,a=e.title,r=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(d.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===r,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,r=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,o=n.baseUrl,i=n.subDirectory,c=o+"/edit/"+n.branch+i+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),f=a("dI71"),y=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,n=r.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===n,c=new RegExp(n+"/?(#.*)?$"),b=r.replace(c,a);return Object(d.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=o,t),y.listItem)},Object(d.b)(l.Link,{className:y.link,to:""+b},e))}));return Object(d.b)("div",{className:y.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:y.list},o))))))},t}(n.a.Component),w=a("MjG9"),x=a("CzIb"),v=a("Asxa"),k=a("OIbQ"),T=a.n(k),P=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(v.c,{className:T.a.row},Object(d.b)(v.a,null,Object(d.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,o=t.frontmatter,s=void 0===o?{}:o,u=t.relativePagePath,p=t.titleType,m=s.tabs,j=s.title,f=s.theme,y=s.description,v=s.keywords,k=s.date,T=Object(x.a)().interiorTheme,q=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=q?r.pathname.replace(q,""):r.pathname,I=m?C.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",H=f||T;return Object(d.b)(b.a,{tabs:m,homepage:!1,theme:H,pageTitle:j,pageDescription:y,pageKeywords:v,titleType:p},Object(d.b)(h,{title:n?Object(d.b)(n,null):j,label:"label",tabs:m,theme:H}),m&&Object(d.b)(N,{title:j,slug:C,tabs:m,currentTab:I}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:u}),Object(d.b)(P,{date:k})),Object(d.b)(g.a,{pageContext:t,location:r,slug:C,tabs:m,currentTab:I}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Kr8m:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var r,n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("013z"),c=(a("qKvR"),{}),b=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),s={_frontmatter:c},u=l.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(u,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"PageDescription"},"Anyone can contribute to IBM Cloud Architecture reference applications and their associated projects, whether you are an IBMer or not. We welcome your collaboration & contributions happily, as our reference applications are meant to reflect your real world scenarios. There are multiple ways to contribute: report bugs and improvement suggestions, improve documentation, and contribute code."),Object(i.b)("h2",null,"Bug reports, documentation changes, and feature requests"),Object(i.b)("p",null,"If you would like to contribute your experience with an IBM Cloud Architecture project back to the project in the form of encountered bug reports, necessary documentation changes, or new feature requests, this can be done through the use of the repository’s ",Object(i.b)("a",{parentName:"p",href:"#"},Object(i.b)("strong",{parentName:"a"},"Issues"))," list."),Object(i.b)("p",null,"Before opening a new issue, please reference the existing list to make sure a similar or duplicate item does not already exist.  Otherwise, please be as explicit as possible when creating the new item and be sure to include the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Bug reports"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Specific Project Version"),Object(i.b)("li",{parentName:"ul"},"Deployment environment"),Object(i.b)("li",{parentName:"ul"},"A minimal, but complete, setup of steps to recreate the problem"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Documentation changes"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"URL to existing incorrect or incomplete documentation (either in the project’s GitHub repo or external product documentation)"),Object(i.b)("li",{parentName:"ul"},"Updates required to correct current inconsistency"),Object(i.b)("li",{parentName:"ul"},"If possible, a link to a project fork, sample, or workflow to expose the gap in documentation."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Feature requests"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Complete description of project feature request, including but not limited to, components of the existing project that are impacted, as well as additional components that may need to be created."),Object(i.b)("li",{parentName:"ul"},"A minimal, but complete, setup of steps to recreate environment necessary to identify the new feature’s current gap.")))),Object(i.b)("p",null,"The more explicit and thorough you are in opening GitHub Issues, the more efficient your interaction with the maintainers will be.  When creating the GitHub Issue for your bug report, documentation change, or feature request, be sure to add as many relevant labels as necessary (that are defined for that specific project).  These will vary by project, but will be helpful to the maintainers in quickly triaging your new GitHub issues."),Object(i.b)("h2",null,"Code contributions"),Object(i.b)("p",null,"We really value contributions, and to maximize the impact of code contributions, we request that any contributions follow the guidelines below.  If you are new to open source contribution and would like some more pointers or guidance, you may want to check out ",Object(i.b)("a",{parentName:"p",href:"http://yourfirstpr.github.io/"},Object(i.b)("strong",{parentName:"a"},"Your First PR"))," and ",Object(i.b)("a",{parentName:"p",href:"https://www.firsttimersonly.com/"},Object(i.b)("strong",{parentName:"a"},"First Timers Only")),".  These are a few projects that help on-board new contributors to the overall process."),Object(i.b)("h3",null,"Coding and Pull Requests best practices"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Please ensure you follow the coding standard and code formatting used throughout the existing code base.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This may vary project by project, but any specific diversion from normal language standards will be explicitly noted."))),Object(i.b)("li",{parentName:"ul"},"One feature / bug fix / documentation update per pull request",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Always pull the latest changes from upstream and rebase before creating any pull request."),Object(i.b)("li",{parentName:"ul"},"New pull requests should be created against the ",Object(i.b)("inlineCode",{parentName:"li"},"integration")," branch of the repository, if available."),Object(i.b)("li",{parentName:"ul"},"This ensures new code is included in full-stack integration tests before being merged into the ",Object(i.b)("inlineCode",{parentName:"li"},"master")," branch"))),Object(i.b)("li",{parentName:"ul"},"All new features must be accompanied by associated tests.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Make sure all tests pass locally before submitting a pull request."),Object(i.b)("li",{parentName:"ul"},"Include tests with every feature enhancement, improve tests with every bug fix")))),Object(i.b)("h3",null,"Github and git flow"),Object(i.b)("p",null,"The internet is littered with guides and information on how to use and understand git.\nHowever, here’s a compact guide that follows the suggested workflow"),Object(i.b)("img",{src:"https://github.com/ibm-cloud-architecture/ibm-cloud-architecture.github.io/raw/master-content/assets/img/github_flow.png",alt:"Github flow"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Fork the desired repo in github.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Clone your repo to your local computer.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add the upstream repository"),Object(i.b)("p",{parentName:"li"},"Note: Guide for step 1-3 here: ",Object(i.b)("a",{parentName:"p",href:"https://help.github.com/articles/fork-a-repo/"},"forking a repo"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create new development branch off the targeted upstream branch.  This will often be ",Object(i.b)("inlineCode",{parentName:"p"},"master"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"git checkout -b <my-feature-branch> master\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Do your work:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Write your code"),Object(i.b)("li",{parentName:"ul"},"Write your tests"),Object(i.b)("li",{parentName:"ul"},"Pass your tests locally"),Object(i.b)("li",{parentName:"ul"},"Commit your intermediate changes as you go and as appropriate"),Object(i.b)("li",{parentName:"ul"},"Repeat until satisfied"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Fetch latest upstream changes (in case other changes had been delivered upstream while you were developing your new feature)."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"git fetch upstream\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Rebase to the latest upstream changes, resolving any conflicts. This will ‘replay’ your local commits, one by one, after the changes delivered upstream while you were locally developing, letting you manually resolve any conflict."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"git branch --set-upstream-to=upstream/master\ngit rebase\n")),Object(i.b)("p",{parentName:"li"},"Instructions on how to manually resolve a conflict and commit the new change or skip your local replayed commit will be presented on screen by the git CLI.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Push the changes to your repository"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"git push origin <my-feature-branch>\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a pull request against the same targeted upstream branch."),Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-pull-request/"},"Creating a pull request")))),Object(i.b)("p",null,"Once the pull request has been reviewed, accepted and merged into the main github repository, you should synchronise your remote and local forked github repository ",Object(i.b)("inlineCode",{parentName:"p"},"master")," branch with the upstream master branch. To do so:"),Object(i.b)("ol",{start:10},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Pull to your local forked repository the latest changes upstream (that is, the pull request)."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"git pull upstream master\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Push those latest upstream changes pulled locally to your remote forked repository."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"git push origin master\n")))),Object(i.b)("h3",null,"What happens next?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All pull requests will be automatically built and unit tested by travis-ci, when implemented by that specific project.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You can determine if a given project is enabled for travis-ci unit tests by the existence of a ",Object(i.b)("inlineCode",{parentName:"li"},".travis.yml")," file in the root of the repository or branch."),Object(i.b)("li",{parentName:"ul"},"When in use, all travis-ci unit tests must pass completely before any further review or discussion takes place."))),Object(i.b)("li",{parentName:"ul"},"The repository maintainer will then inspect the commit and, if accepted, will pull the code into the upstream branch."),Object(i.b)("li",{parentName:"ul"},"Should a maintainer or reviewer ask for changes to be made to the pull request, these can be made locally and pushed to your forked repository and branch."),Object(i.b)("li",{parentName:"ul"},"Commits passing this stage will make it into the next release cycle for the given project.")))}p.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-contribute-index-mdx-91c0dade3d809cf9bed6.js.map