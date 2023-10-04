"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[9023],{3346:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=o(7462),n=(o(7294),o(3905)),r=(o(1694),o(6596),o(6533)),s=(o(505),o(1496));o(4866),o(5162);const i={sidebar_position:3},l="Checkoff",u={unversionedId:"teen/checkoff",id:"teen/checkoff",title:"Checkoff",description:"As usual, the grading for this lab is binary (completed or not completed). This means you should implement all features above to obtain the mark. If you're already experienced with Unity and would like to experiment, you're free to implement similar features. In this checkoff, the feature we are looking for are: usage of Scriptable Object Game Architecture, usage of Pluggable FSM (must be at least as complex as the checkoff requirements below, similar number of states and transitions etc). Show it clearly in your recording by either showing your inspector for Mario when playing the game, or show us relevant scripts on your code editor for a few seconds.",source:"@site/docs/05-teen/checkoff.md",sourceDirName:"05-teen",slug:"/teen/checkoff",permalink:"/50033/docs/teen/checkoff",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Finite State Machine",permalink:"/50033/docs/teen/fsm"}},c={},m=[{value:"Implement Buffs and Powerups",id:"implement-buffs-and-powerups",level:3},{value:"Utilise Scriptable Object Game Architecture",id:"utilise-scriptable-object-game-architecture",level:3},{value:"Maintain Sound Effects",id:"maintain-sound-effects",level:3},{value:"Summary",id:"summary",level:2}],d={toc:m},p="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"checkoff"},"Checkoff"),(0,n.kt)("admonition",{title:"Grading notes",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"As usual, the grading for this lab is ",(0,n.kt)("strong",{parentName:"p"},"binary")," (completed or not completed). This means you should implement ",(0,n.kt)("span",{className:"orange-bold"},"all features")," above to obtain the mark. If you're already experienced with Unity and would like to experiment, you're free to implement similar features. In this checkoff, the feature we are looking for are: ",(0,n.kt)("strong",{parentName:"p"},"usage")," of Scriptable Object Game Architecture, ",(0,n.kt)("strong",{parentName:"p"},"usage")," of Pluggable FSM (must be at least as complex as the checkoff requirements below, similar number of states and transitions etc). Show it clearly in your recording by either showing your inspector for Mario when playing the game, or show us relevant scripts on your code editor for a few seconds."),(0,n.kt)("p",{parentName:"admonition"},"We ",(0,n.kt)("span",{className:"orange-bold"},"also")," want you to demonstrate that the exist some kind of collectibles or powerup or buffs that will disappear after a few seconds. Game or level restart must also be demonstrated where every single component goes back to its original state.")),(0,n.kt)("p",null,"You are free to utilise whatever you have learned in this topic to implement the following (turn on the volume):"),(0,n.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-5/checkoff.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,n.kt)("p",null,"Your submission must have all the following features to gain fullmarks (and not exceeding 5 minutes length):"),(0,n.kt)("h3",{id:"implement-buffs-and-powerups"},"Implement Buffs and Powerups"),(0,n.kt)("p",null,"You are required to implement the FSM as per these diagrams shown in the previous section:"),(0,n.kt)(r.Z,{path:o(749).Z,customClass:"invert-color",widthPercentage:"50%",mdxType:"ImageCard"}),(0,n.kt)("p",null,"These buffs are controlled using another FSM (not ",(0,n.kt)("inlineCode",{parentName:"p"},"MarioStateController"),"). You need to create a new script inheriting ",(0,n.kt)("inlineCode",{parentName:"p"},"StateController"),", e.g: ",(0,n.kt)("inlineCode",{parentName:"p"},"BuffStateController")," and attach it to Mario to manage his buffs:"),(0,n.kt)(r.Z,{path:o(6418).Z,customClass:"invert-color",widthPercentage:"30%",mdxType:"ImageCard"}),(0,n.kt)("h3",{id:"utilise-scriptable-object-game-architecture"},"Utilise Scriptable Object Game Architecture"),(0,n.kt)("p",null,"Your lab should ",(0,n.kt)("span",{className:"orange-bold"},"not")," contain any Singleton anymore. Demonstrate it clearly by recording your Hierarchy Window (there will be no ",(0,n.kt)("inlineCode",{parentName:"p"},"DontDestroyOnLoad")," section). You must demonstrate that you can navigate between multiple scenes and values will persist."),(0,n.kt)("h3",{id:"maintain-sound-effects"},"Maintain Sound Effects"),(0,n.kt)("p",null,"You should record ",(0,n.kt)("span",{className:"orange-bold"},"with sound")," and demonstrate that each state change results in reasonable sound effects. You don't have to download more audio clips, you can just use the ones we have given to you."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("admonition",{title:"\ud83e\udd14",type:"think"},(0,n.kt)("p",{parentName:"admonition"},"What to do next?")),(0,n.kt)("p",null,"This is our ",(0,n.kt)("span",{className:"orange-bold"},"final lab"),", congratulations for making it this far \ud83c\udf89\ud83c\udf7e. You are fully equipped now to complete actual World-1-1 on your own and document your lab properly so it might be useful for you in the future. You should start thinking about the architecture of your game project from now on, and polish your game idea. Prototype and ideate on paper / tablet first before jumping straight into digital prototype."),(0,n.kt)("p",null,"If you would like to read more about other game architectures, ",(0,n.kt)("a",{parentName:"p",href:"https://resources.unity.com/games/level-up-your-code-with-game-programming-patterns?ungated=true"},"this e-book by Unity is a great source to start"),". There are plenty of other programming patterns that we can't cover in the Labs, such as the Factory, MVP (Model View Presenter), and Command patterns."),(0,n.kt)("p",null,"Be sure also to check out ",(0,n.kt)("a",{parentName:"p",href:"https://unity.com/how-to"},(0,n.kt)("strong",{parentName:"a"},"Unity Best Practices"))," that suits your game. We will populate our websites Resources tab in the weeks to come too based on selected articles on these sources so stay tuned."))}h.isMDXComponent=!0},6418:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/mario-fsm-buffs-d0af36603b4c35c5b73f66ed87b9e63f.png"},749:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/mario-fsm-6c2b94b9794fdfa0d4d3b8b8ea2ef1cb.png"}}]);