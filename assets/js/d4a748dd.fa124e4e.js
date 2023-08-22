"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[8603],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(6010);const o={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.default)(o.tabItem,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),i=n(7294),o=n(6010),r=n(2466),l=n(6550),s=n(1980),m=n(7392),p=n(12);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=u(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,m]=c({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=s??d;return h({value:e,tabValues:o})?e:null})();(0,i.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),g(e)}),[m,g,o]),tabValues:o}}var k=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:m}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=p.indexOf(t),a=m[n].value;a!==l&&(d(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},t)},m.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:u},r,{className:(0,o.default)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return i.createElement("div",{className:(0,o.default)("tabs-container",f.tabList)},i.createElement(b,(0,a.Z)({},e,t)),i.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return i.createElement(w,(0,a.Z)({key:String(t)},e))}},7518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),o=(n(1694),n(6596),n(6533)),r=(n(505),n(1496));n(4866),n(5162);const l={sidebar_position:1},s="Animation",m={unversionedId:"babies/animation",id:"babies/animation",title:"Animation",description:"You can continue from where you left off in the previous Lab. Note that you need to finish the previous lab before starting on this one. In this lab we will upgrade our game by adding animation, sound effect, camera movement, and obstacles (leveraging on Unity's Physics2D engine) in the game.",source:"@site/docs/02-babies/animation.md",sourceDirName:"02-babies",slug:"/babies/animation",permalink:"/50033/docs/babies/animation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Unity for Babies",permalink:"/50033/docs/category/unity-for-babies"},next:{title:"Camera Movement",permalink:"/50033/docs/babies/camera"}},p={},d=[{value:"Mario&#39;s Animation",id:"marios-animation",level:2},{value:"Animation Controller",id:"animation-controller",level:3},{value:"Animation Clips",id:"animation-clips",level:3},{value:"Animator State Machine",id:"animator-state-machine",level:3},{value:"Transition Time",id:"transition-time",level:3},{value:"Exit time",id:"exit-time",level:3},{value:"Animation Event",id:"animation-event",level:3},{value:"Death Animation",id:"death-animation",level:3},{value:"Disable Control when not <code>alive</code>",id:"disable-control-when-not-alive",level:2}],u={toc:d},h="wrapper";function c(e){let{components:t,...l}=e;return(0,i.kt)(h,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"animation"},"Animation"),(0,i.kt)("p",null,"You can continue from where you left off in the previous Lab. Note that you ",(0,i.kt)("strong",{parentName:"p"},"need")," to finish the previous lab before starting on this one. In this lab we will upgrade our game by adding animation, sound effect, camera movement, and ",(0,i.kt)("strong",{parentName:"p"},"obstacles")," (leveraging on Unity's Physics2D engine) in the game."),(0,i.kt)("h2",{id:"marios-animation"},"Mario's Animation"),(0,i.kt)("p",null,"Mario\u2019s animation can be broken down into five main states:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Idle")," state, when he\u2019s not moving at all"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Running")," state, when he\u2019s moving left or right"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Skidding")," state, when he switches direction while running and brake too hard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Jumping")," state, when he\u2019s off the ground"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Death")," state, when he hits the enemy")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Mario sprite given in the starter asset already contain the corresponding sprite that\u2019s suitable for each state.")),(0,i.kt)("p",null,"To begin animating a GameObject, we need these things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("inlineCode",{parentName:"li"},"Animator")," element attached to the GameObject,"),(0,i.kt)("li",{parentName:"ul"},"An Animator ",(0,i.kt)("inlineCode",{parentName:"li"},"Controller")," (need to create it in the Project Window under ",(0,i.kt)("inlineCode",{parentName:"li"},"Assets"),"),"),(0,i.kt)("li",{parentName:"ul"},"and several ",(0,i.kt)("strong",{parentName:"li"},"Animation Clips")," to be managed by the controller.")),(0,i.kt)("h3",{id:"animation-controller"},"Animation Controller"),(0,i.kt)("p",null,"Open the Animation Window (Window >> Animation >> Animation), then click on Mario. You will be then prompted to create an ",(0,i.kt)("strong",{parentName:"p"},"Animator")," for Mario, along with an animation clip. When you click ",(0,i.kt)("inlineCode",{parentName:"p"},"create"),", both are created by default. You can then begin ",(0,i.kt)("strong",{parentName:"p"},"recording")," Mario's changes on each frame/time on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/animeditor-AdvancedKeySelectionAndManipulation.html"},"dopesheet"),". First, create the folders: ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets/Animation/Mario")," to contain all your Mario animation. Then, here's how to create a running Mario animation:"),(0,i.kt)(r.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/create-mario-anim-run.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,i.kt)("h3",{id:"animation-clips"},"Animation Clips"),(0,i.kt)("p",null,"Now create three more animation ",(0,i.kt)("strong",{parentName:"p"},"clips")," for idle, skidding, and jumping:"),(0,i.kt)(r.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/create-mario-other-anims.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Each GameObject that you want to animate should have one Animator (just one). Each Animator is responsible over ",(0,i.kt)("strong",{parentName:"p"},"several animation clips")," that you can create. Always create new animation clip from the Dopesheet when focusing on current GameObject with Animator attached. If you create it straight from the project inspector, then it won't be automatically associated with the animation controller.")),(0,i.kt)("h3",{id:"animator-state-machine"},"Animator State Machine"),(0,i.kt)("p",null,"If you press ",(0,i.kt)("inlineCode",{parentName:"p"},"Play")," right now, you should see that your Mario immediately goes to play ",(0,i.kt)("inlineCode",{parentName:"p"},"mario-run")," animation clip. We do not want that. We want to have the following animation depending on Mario's state:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If Mario's moving (have velocity), then we play ",(0,i.kt)("inlineCode",{parentName:"li"},"mario-run")," clip on a loop"),(0,i.kt)("li",{parentName:"ol"},"If Mario's off the ground, then we play ",(0,i.kt)("inlineCode",{parentName:"li"},"mario-jump")," clip"),(0,i.kt)("li",{parentName:"ol"},"If we change Mario's running direction from right to left, we want it to play ",(0,i.kt)("inlineCode",{parentName:"li"},"mario-skid")," clip"),(0,i.kt)("li",{parentName:"ol"},"Otherwise, Mario stays at ",(0,i.kt)("inlineCode",{parentName:"li"},"mario-idle")," clip")),(0,i.kt)("p",null,"To enable correct transition conditions, we need to create ",(0,i.kt)("inlineCode",{parentName:"p"},"parameters"),". These parameters will be used to trigger transition between each animation clip (motion). Create these three parameters on Animator Window:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onGround")," of type bool"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xSpeed")," of type float"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onSkid")," of type trigger (a boolean parameter that is reset by the controller when ",(0,i.kt)("strong",{parentName:"li"},"consumed")," by a transition)")),(0,i.kt)("p",null,"Then add the following inside ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerMovement.cs"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="PlayerMovement.cs"',title:'"PlayerMovement.cs"'},'\n    // for animation\n    public Animator marioAnimator;\n\n    void Start(){\n        // ...\n\n        //highlight-start\n        // update animator state\n        marioAnimator.SetBool("onGround", onGroundState);\n        //highlight-end\n    }\n    void Update()\n    {\n\n        if (Input.GetKeyDown("a") && faceRightState)\n        {\n            faceRightState = false;\n            marioSprite.flipX = true;\n            //highlight-start\n            if (marioBody.velocity.x > 0.1f)\n                marioAnimator.SetTrigger("onSkid");\n//highlight-end\n        }\n\n        if (Input.GetKeyDown("d") && !faceRightState)\n        {\n            faceRightState = true;\n            marioSprite.flipX = false;\n            //highlight-start\n            if (marioBody.velocity.x < -0.1f)\n                marioAnimator.SetTrigger("onSkid");\n                //highlight-end\n        }\n\n        //highlight-start\n        marioAnimator.SetFloat("xSpeed", Mathf.Abs(marioBody.velocity.x));\n        //highlight-end\n    }\n\n    void OnCollisionEnter2D(Collision2D col)\n    {\n        //highlight-start\n        if (col.gameObject.CompareTag("Ground") && !onGroundState)\n        {\n            onGroundState = true;\n            // update animator state\n            marioAnimator.SetBool("onGround", onGroundState);\n        }\n        //highlight-end\n    }\n\n    void FixedUpdate(){\n        // ...\n\n        if (Input.GetKeyDown("space") && onGroundState)\n        {\n            marioBody.AddForce(Vector2.up * upSpeed, ForceMode2D.Impulse);\n            onGroundState = false;\n            //highlight-start\n            // update animator state\n            marioAnimator.SetBool("onGround", onGroundState);\n            //highlight-end\n        }\n    }\n')),(0,i.kt)("h3",{id:"transition-time"},"Transition Time"),(0,i.kt)("p",null,"Let's gradually test it by setting Mario's running animation first. Pay attention on when we ",(0,i.kt)("strong",{parentName:"p"},"untick")," exit time and ",(0,i.kt)("strong",{parentName:"p"},"setting")," the transition duration to 0:"),(0,i.kt)("admonition",{title:"Transition duration",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Transition duraton: The duration of the transition itself, in normalized time or seconds depending on the Fixed Duration mode, relative to the current state\u2019s duration. This is visualized in the transition graph as the portion between the two blue markers.")),(0,i.kt)("admonition",{title:"Exit time",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If Has Exit Time is checked, this value represents the exact time at which the transition can take effect. This is represented in normalized time (for example, an exit time of 0.75 means that on the first frame where 75% of the animation has played, the Exit Time condition is true). On the next frame, the condition is false.")),(0,i.kt)(r.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/set-animation-transition-run.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,i.kt)("h3",{id:"exit-time"},"Exit time"),(0,i.kt)("p",null,"Now completethe rest of the state animation state machine. It will definitely take a bit of time to setup the right ",(0,i.kt)("strong",{parentName:"p"},"exit")," time. We want most transition to happen ",(0,i.kt)("strong",{parentName:"p"},"immediately"),", but the transition between skidding state and running state should have some exit time. What we want is for the entire skidding state to complete (all frames played) before transitioning to the running state. The transition itself takes no time."),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Read more documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/class-Transition.html"},"transition properties here"),".")),(0,i.kt)("p",null,"Here's a sped up recording to help you out. Pause it at certain key frames if needed. The key is to always check your output frequently."),(0,i.kt)(r.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/set-animation-therest.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,i.kt)("h3",{id:"animation-event"},"Animation Event"),(0,i.kt)("p",null,"We can create animation events on animation clips, of which we can ",(0,i.kt)("strong",{parentName:"p"},"subscribe")," a callback from a script ",(0,i.kt)("strong",{parentName:"p"},"attached")," to the GameObject where that animator is added to, as long as the signature matches (",(0,i.kt)("inlineCode",{parentName:"p"},"void")," return type, and accepting either of the parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"Float"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),")."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"As stated in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/AnimationEventsOnImportedClips.html"},"documentation"),", make sure that any ",(0,i.kt)("strong",{parentName:"p"},"GameObject")," which uses this animation in its animator has a corresponding script attached that contains a ",(0,i.kt)("strong",{parentName:"p"},"function")," with a matching event name. If you wish to call other functions in other script, you need to create a ",(0,i.kt)("strong",{parentName:"p"},"custom")," animation event tool script. You will learn more about this in Week 3.")),(0,i.kt)("p",null,"For instance, let's say we want to play a sound effect whenever Mario jumps. First, create the following global variable and function in ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerMovement.cs"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    // for audio\n    public AudioSource marioAudio;\n\n        void PlayJumpSound()\n    {\n        // play jump sound\n        marioAudio.PlayOneShot(marioAudio.clip);\n    }\n")),(0,i.kt)("p",null,"Then:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create AudioSource component at Mario GameObject, and load the ",(0,i.kt)("inlineCode",{parentName:"li"},"smp_jump_small")," AudioClip. Ensure that you disable Play on Awake property."),(0,i.kt)("li",{parentName:"ol"},"Then link this AudioSource component to ",(0,i.kt)("inlineCode",{parentName:"li"},"marioAudio")," on the script from the inspector"),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"mario_jump")," animation clip, and create an event at timestamp ",(0,i.kt)("inlineCode",{parentName:"li"},"0:00")," as shown in the recording below"),(0,i.kt)("li",{parentName:"ol"},"Ensure that ",(0,i.kt)("inlineCode",{parentName:"li"},"mario-jump")," Animation clip Loop Time property is ",(0,i.kt)("strong",{parentName:"li"},"unticked"))),(0,i.kt)(r.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/anim-event.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,i.kt)("admonition",{type:"playtest"},(0,i.kt)("p",{parentName:"admonition"},"You should hear the jumping sound effect ",(0,i.kt)("strong",{parentName:"p"},"exactly ONCE")," each time Mario jumps.")),(0,i.kt)("h3",{id:"death-animation"},"Death Animation"),(0,i.kt)("p",null,"Now add death animation and sound effects. This is slightly more complicated because we want Mario to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Show the death sprite when colliding with Goomba"),(0,i.kt)("li",{parentName:"ol"},"Apply impulse force upwards"),(0,i.kt)("li",{parentName:"ol"},"Play death sound effect (",(0,i.kt)("inlineCode",{parentName:"li"},"smb_death.mp3"),"), ",(0,i.kt)("a",{parentName:"li",href:"https://www.dropbox.com/scl/fi/fbskuwdv5nd01fgstghg0/smb_death.mp3?rlkey=8w4ufx5sic7f3homrjhctxy7y&dl=0"},"download here")),(0,i.kt)("li",{parentName:"ol"},"Then show Game Over scene"),(0,i.kt)("li",{parentName:"ol"},"Restart everything when restart button is pressed")),(0,i.kt)("p",null,"Here's the overview of the end product:"),(0,i.kt)(r.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/mario-death.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,i.kt)("p",null,"First, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"mario_die")," animation with 4 samples, simply changing the sprite."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"gameRestart")," Trigger parameter to Mario's animator"),(0,i.kt)("li",{parentName:"ul"},'Remove "Has Exit Time"'),(0,i.kt)("li",{parentName:"ul"},"Add transition between ",(0,i.kt)("inlineCode",{parentName:"li"},"mario_die")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"mario_idle")),(0,i.kt)("li",{parentName:"ul"},"and add the ",(0,i.kt)("inlineCode",{parentName:"li"},"gameRestart")," condition to this newly created transition")),(0,i.kt)(o.Z,{path:n(5275).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"Also, make sure to ",(0,i.kt)("strong",{parentName:"p"},"turn off")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Loop Time")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"mario_die")," animation clip. This is because we don't want the clip to loop and just play it once."),(0,i.kt)(o.Z,{path:n(2253).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"Then head to ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerMovement.cs")," and edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnTriggerEnter2D")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ResetGame"),", while adding these two functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="PlayerMovement.cs"',title:'"PlayerMovement.cs"'},'\n//highlight-start\n    public AudioClip marioDeath;\n\n    // state\n    [System.NonSerialized]\n    public bool alive = true;\n    //highlight-end\n\n\n//highlight-start\n    void PlayDeathImpulse()\n    {\n        marioBody.AddForce(Vector2.up * deathImpulse, ForceMode2D.Impulse);\n    }\n//highlight-end\n\n//highlight-start\n    void GameOverScene()\n    {\n        // stop time\n        Time.timeScale = 0.0f;\n        // set gameover scene\n        gameManager.GameOver();\n    }\n//highlight-end\n\n\n    void OnTriggerEnter2D(Collider2D other)\n    {\n        if (other.gameObject.CompareTag("Enemy") && alive)\n        {\n            Debug.Log("Collided with goomba!");\n\n            //highlight-start\n            // play death animation\n            marioAnimator.Play("mario-die");\n            marioAudio.PlayOneShot(marioDeath);\n            alive = false;\n            //highlight-end\n        }\n    }\n\n    public void ResetGame()\n    {\n        // reset position\n        marioBody.transform.position = new Vector3(-5.33f, -4.69f, 0.0f);\n        // ... other instruction\n\n        //highlight-start\n        // reset animation\n        marioAnimator.SetTrigger("gameRestart");\n        alive = true;\n        //highlight-end\n\n\n    }\n')),(0,i.kt)("p",null,"The idea is not to immediately stop time when Mario collides with Goomba but to play the animation first for about 1 second before stopping time, to give enough time for the Physics engine to simulate the effect of ",(0,i.kt)("inlineCode",{parentName:"p"},"deathImpulse"),". We also have the ",(0,i.kt)("strong",{parentName:"p"},"state")," ",(0,i.kt)("inlineCode",{parentName:"p"},"alive")," to prevent collision with Goomba to be re-triggered. Then create ",(0,i.kt)("strong",{parentName:"p"},"two events")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"mario_die")," animation, one to trigger ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayDeathImpulse")," and the other to trigger ",(0,i.kt)("inlineCode",{parentName:"p"},"GameOverScene"),". Hook it up to the respective functions in ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerMovement.cs"),". Also, do not forget to link up the ",(0,i.kt)("inlineCode",{parentName:"p"},"AudioClip")," (",(0,i.kt)("inlineCode",{parentName:"p"},"MarioDeath"),") in the Inspector:"),(0,i.kt)(r.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/setup-death-script.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Also notice how although ",(0,i.kt)("inlineCode",{parentName:"p"},"alive")," is a public state, we do not see it serialized in the INspector due to ",(0,i.kt)("inlineCode",{parentName:"p"},"[System.NonSerialized]")," attribute.")),(0,i.kt)("h2",{id:"disable-control-when-not-alive"},"Disable Control when not ",(0,i.kt)("inlineCode",{parentName:"h2"},"alive")),(0,i.kt)("p",null,"The final thing that you need to do is to ",(0,i.kt)("strong",{parentName:"p"},"disable")," Mario's movement when he is ",(0,i.kt)("strong",{parentName:"p"},"dead"),". Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerMovement.cs")," ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedUpdate"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="PlayerMovement.cs"',title:'"PlayerMovement.cs"'},'    void FixedUpdate()\n    {\n        //highlight-start\n        if (alive)\n        {\n            //highlight-end\n\n            float moveHorizontal = Input.GetAxisRaw("Horizontal");\n            // other code\n\n            //highlight-start\n        }\n        //highlight-end\n    }\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Our game starts to become a little ",(0,i.kt)("span",{className:"orange-bold"},"messier"),". We have states everywhere: player's status (alive or dead), score, game state (stopped or restarted), etc. We have ",(0,i.kt)("inlineCode",{parentName:"p"},"GameManager")," that's supposed to manage the game but many other scripts that sort of manages itself (like ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerMovement.cs"),"). We will refactor our game to have a better architecture next week.")))}c.isMDXComponent=!0},5275:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-03-10-26-52-db11fff1f84584768e959775d6a09f16.png"},2253:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-03-10-28-16-fb83ffab44a2ce51e4b1096e7cf27af4.png"}}]);