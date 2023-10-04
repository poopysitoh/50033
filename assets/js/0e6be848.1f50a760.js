"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[7126],{109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>h});var a=n(7462),i=(n(7294),n(3905)),o=(n(1694),n(6596),n(6533)),r=(n(505),n(1496)),s=n(4866),l=n(5162);const p={sidebar_position:1},m="ScriptableObject Game Architecture",c={unversionedId:"teen/scriptobjgamearch",id:"teen/scriptobjgamearch",title:"ScriptableObject Game Architecture",description:"This amazing talk inspires the existence of this section. We simply do not have enough time (unfortunately) to go into every single detailed implementation of common concepts such as game inventory, skill tree, etc but we hope that this quick introduction will point you into the right direction in the future.",source:"@site/docs/05-teen/scriptobjgamearch.md",sourceDirName:"05-teen",slug:"/teen/scriptobjgamearch",permalink:"/50033/docs/teen/scriptobjgamearch",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Unity for Teens",permalink:"/50033/docs/category/unity-for-teens"},next:{title:"Finite State Machine",permalink:"/50033/docs/teen/fsm"}},d={},h=[{value:"Preparation",id:"preparation",level:2},{value:"The Singleton Architecture",id:"the-singleton-architecture",level:2},{value:"Powerup Collection",id:"powerup-collection",level:3},{value:"Score Update",id:"score-update",level:3},{value:"Thoughts",id:"thoughts",level:2},{value:"Scriptable Object Game Architecture",id:"scriptable-object-game-architecture",level:2},{value:"Scriptable Object Event System",id:"scriptable-object-event-system",level:3},{value:"Create Game Events",id:"create-game-events",level:3},{value:"Subscribe/Register to Game Events with GameEventListener",id:"subscriberegister-to-game-events-with-gameeventlistener",level:3},{value:"Migrate",id:"migrate",level:2}],u={toc:h},k="wrapper";function g(e){let{components:t,...p}=e;return(0,i.kt)(k,(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scriptableobject-game-architecture"},"ScriptableObject Game Architecture"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=raQ3iHhE_Kk"},"amazing talk")," inspires the existence of this section. We simply do not have enough time (unfortunately) to go into every single detailed implementation of common concepts such as game inventory, skill tree, etc but we hope that this quick introduction will point you into the right direction in the future.")),(0,i.kt)("p",null,"This topic covers an entirely new game architecture which separates data from code to make your game more maintanable and all around pleasant to work with. You can choose to go down the Singleton Path and utilising some SO for parts of your data that is supposed to be persistent. The choice is entirely up to you but we feel that it is our responsibility to introduce you to another great alternative using Scriptable Objects. This will revamp our existing project by quite a lot, but the benefits are worth it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scenes are clean slates"),(0,i.kt)("li",{parentName:"ul"},"No dependency between Systems and they are modular"),(0,i.kt)("li",{parentName:"ul"},"Prefabs work on their own"),(0,i.kt)("li",{parentName:"ul"},"Pluggable custom components")),(0,i.kt)("h2",{id:"preparation"},"Preparation"),(0,i.kt)("p",null,"We need at least two Scenes with completely clean slate. That\u2019s right. ",(0,i.kt)("span",{className:"orange-bold"},"Clean Slates"),". We can\u2019t reuse any of these Scripts anymore: GameManager, PowerupController, PlayerController, etc. To get you up to speed, you can:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy your main menu or loading scene if any, and World-1-1 and World-1-2 into a new folder"),(0,i.kt)("li",{parentName:"ol"},"Copy all prefabs used in these two worlds into a new folder, name it something else"),(0,i.kt)("li",{parentName:"ol"},"Replace the prefabs with the new prefabs (same, just another copy)"),(0,i.kt)("li",{parentName:"ol"},"Remove ",(0,i.kt)("strong",{parentName:"li"},"all scripts")," attached to any GameObject, do the same for the new set of prefabs")),(0,i.kt)("p",null,"Here's a complete recording on what we do to prepare for this lab. Lots of the setup is about step 3 above. If you want to simply copy the entire project and work on the copy directly, you may do so."),(0,i.kt)(r.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-5/setup.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,i.kt)("admonition",{type:"playtest"},(0,i.kt)("p",{parentName:"admonition"},"If your main menu and loading screen is simple, you may leave it as-is. Some error might pop up because the event called in some animation clip, e.g: mario-jump animation doesn't exist and it's fine. We can fix that later. Also, do not forget to update the ",(0,i.kt)("strong",{parentName:"p"},"build setting")," to include these new scenes instead. The setting can be found at File >> Build Settings.")),(0,i.kt)("h2",{id:"the-singleton-architecture"},"The Singleton Architecture"),(0,i.kt)("p",null,"If you've been following the lab faithfully so far, your current game architecture utilising Singletons is somewhat as follows:"),(0,i.kt)(o.Z,{path:n(5256).Z,customClass:"invert-color",widthPercentage:"100%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"It's ",(0,i.kt)("em",{parentName:"p"},"decent"),", in a way that there's no cross-referencing between scripts attached to gameObject instances, ",(0,i.kt)("strong",{parentName:"p"},"except")," to Singletons: ",(0,i.kt)("inlineCode",{parentName:"p"},"GameManager")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PowerupManager"),". Most chain of actions are triggered via events. Let's recap the event flow for powerup-related events and score change."),(0,i.kt)("h3",{id:"powerup-collection"},"Powerup Collection"),(0,i.kt)("p",null,"Every Powerup box (brick or question box) is controlled by a script inheriting ",(0,i.kt)("inlineCode",{parentName:"p"},"BasePowerupController"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whenever Mario hits a box (brick or question box), the ",(0,i.kt)("inlineCode",{parentName:"li"},"OnCollisionEnter2D")," will be called by Unity, which will trigger an ",(0,i.kt)("span",{className:"orange-bold"},"Animation")," (bouncing box, etc)."),(0,i.kt)("li",{parentName:"ul"},"From this animation, we call ",(0,i.kt)("inlineCode",{parentName:"li"},"SpawnPowerup()")," on the powerup inside the box. Any powerup (coin, starman, magic mushroom, and one-up mushroom) are spawned via ",(0,i.kt)("inlineCode",{parentName:"li"},"SpawnPowerup()")," method. ",(0,i.kt)("inlineCode",{parentName:"li"},"SpawnPowerup()")," ",(0,i.kt)("strong",{parentName:"li"},"invokes")," ",(0,i.kt)("inlineCode",{parentName:"li"},"powerupCollected")," event in PowerupManager Singleton, passing ",(0,i.kt)("strong",{parentName:"li"},"reference")," to itself in the process")),(0,i.kt)("p",null,"This calls the subscribers of ",(0,i.kt)("inlineCode",{parentName:"p"},"powerupCollected"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"FilterAndCastPowerup")," which decides whether to invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"powerupAffectsManager")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"powerupAffectsPlayer")," based on the type of powerup invoking the event."),(0,i.kt)("p",null,"The subscribers of ",(0,i.kt)("inlineCode",{parentName:"p"},"powerupAffectsPlayer")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"powerupAffectsManager")," (Mario or Manager) will then be called. Any gameObject subscribing to these two ",(0,i.kt)("inlineCode",{parentName:"p"},"powerupAffectsX")," event should conform to ",(0,i.kt)("inlineCode",{parentName:"p"},"IPowerupApplicable")," interface containing ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestPowerupEffect")," method, which is the method subscribing to ",(0,i.kt)("inlineCode",{parentName:"p"},"powerupAffectsX")," event."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestPowerupEffect"),", one simply passes itself (",(0,i.kt)("inlineCode",{parentName:"p"},"this"),") to the powerup triggering the chain of events from the start by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"i.ApplyPowerup(this)"),". Then, the ",(0,i.kt)("strong",{parentName:"p"},"actual")," implementation (how this powerup is affecting ",(0,i.kt)("inlineCode",{parentName:"p"},"this"),") is implemented in that powerup script itself."),(0,i.kt)("p",null,"For instance, when Mario hits a question box containing MagicMushroom, it triggers ",(0,i.kt)("inlineCode",{parentName:"p"},"SpawnPowerup()")," which will animate the spawning of the MagicMushroom."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When Mario ",(0,i.kt)("span",{className:"orange-bold"},"collides")," with the MagicMushroom, ",(0,i.kt)("inlineCode",{parentName:"li"},"OnCollisionEnter2D")," on MagicMushroom's BasePowerup will be triggered, which will ",(0,i.kt)("strong",{parentName:"li"},"invoke")," ",(0,i.kt)("inlineCode",{parentName:"li"},"powerupCollected")," event, passing itself in the process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FilterAndCastPowerup")," (",(0,i.kt)("span",{className:"orange-bold"},"subscriber")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"powerupCollected"),") will examine the ",(0,i.kt)("inlineCode",{parentName:"li"},"PowerupType")," triggering this event (which is MagicMushroom) and hence it ",(0,i.kt)("span",{className:"orange-bold"},"invokes")," ",(0,i.kt)("inlineCode",{parentName:"li"},"powerupAffectsPlayer")," event, passing MagicMushroom instance as the argument."),(0,i.kt)("li",{parentName:"ul"},"This ",(0,i.kt)("span",{className:"orange-bold"},"triggers")," the callback ",(0,i.kt)("inlineCode",{parentName:"li"},"RequestPowerupEffect")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"PlayerMovement.cs")," attached on Mario.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"RequestPowerupEffect"),", we pass ",(0,i.kt)("inlineCode",{parentName:"li"},"this")," (which is Mario gameobject instance) to MagicMushroom via ",(0,i.kt)("inlineCode",{parentName:"li"},"ApplyPowerup")," method."))),(0,i.kt)("li",{parentName:"ul"},"Finally, in the MagicMushroomPowerup script we can decide ",(0,i.kt)("em",{parentName:"li"},"what the effect of this powerup is to Mario"),": which is to call ",(0,i.kt)("inlineCode",{parentName:"li"},"MakeSuperMario()")," method implemented in ",(0,i.kt)("inlineCode",{parentName:"li"},"PlayerMovement"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This is just one of the suggested method to prevent cross-referencing of scripts that needed to be done manually via inspector during runtime. The main idea is to modularise the implementation of the powerup effect as much as possible, implementing parts concerning that instances in the instance script and nowhere else. For instance: it is the MagicMushroom's responsibility to call Mario's: MakeSuperMario, and it is Mario's responsibility to decide what \"Super Mario\" should be.")),(0,i.kt)("h3",{id:"score-update"},"Score Update"),(0,i.kt)("p",null,"There are two ways currently to increase the current score: by stomping on Goomba from above or spawning a coin. Both ",(0,i.kt)("inlineCode",{parentName:"p"},"EnemyController")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CoinPowerup")," calls ",(0,i.kt)("inlineCode",{parentName:"p"},"GameManager.instance.IncreaseScore(int value)")," anytime those conditions are valid. This calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"SetScore")," method inside ",(0,i.kt)("inlineCode",{parentName:"p"},"GameManager"),", which invokes the ",(0,i.kt)("inlineCode",{parentName:"p"},"scoreChange")," event and eventually triggers its subscriber: ",(0,i.kt)("inlineCode",{parentName:"p"},"SetScore")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"HUDManager")," to update the UI. The actual score is stored at ",(0,i.kt)("inlineCode",{parentName:"p"},"GameScore"),", an ",(0,i.kt)("inlineCode",{parentName:"p"},"IntVariable")," Scriptable Object, which is updated inside ",(0,i.kt)("inlineCode",{parentName:"p"},"IncreaseScore")," method."),(0,i.kt)("h2",{id:"thoughts"},"Thoughts"),(0,i.kt)("p",null,"The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. In Unity, it is often used to manage game-wide systems or managers that need to exist throughout the entire game's lifetime. They are commonly used for managing things like GameManager, AudioManager, UIManager, InputManager, and other central systems. These classes need to be accessible from different parts of the game, and a Singleton pattern ensures there is only one instance to coordinate these tasks. It is relatively easy to implement, but can lead to ",(0,i.kt)("span",{className:"orange-bold"},"tight coupling")," between the systems as discussed before. It can also be cumbersome to sharing data between different scenes or across multiple game objects."),(0,i.kt)("p",null,"We also utilise some Scriptable Objects to manage data assets (like score) that can be shared across different parts of the game, including scenes, game objects, and scripts. They are primarily used for ",(0,i.kt)("em",{parentName:"p"},"storing")," and ",(0,i.kt)("em",{parentName:"p"},"sharing")," data."),(0,i.kt)("h2",{id:"scriptable-object-game-architecture"},"Scriptable Object Game Architecture"),(0,i.kt)("p",null,"In this new game architecture, we take everything one step further to promote a more modular and decoupled architecture. There's ",(0,i.kt)("strong",{parentName:"p"},"no")," interaction between scripts (well, at least not between scripts of unrelated gameObjects, interaction between scripts in the same perfab is understandable)."),(0,i.kt)("p",null,"We first create various ",(0,i.kt)("inlineCode",{parentName:"p"},"GameEvents")," based on Scriptable Objects. Each instance can subscribe to it ",(0,i.kt)("inlineCode",{parentName:"p"},"OnEnable()"),", and unsubscribe from it ",(0,i.kt)("inlineCode",{parentName:"p"},"OnDisable()"),". As per the previous lab, we also use SO to store persistent data so that new instances in the next scene can load values from there. This way, we do not need to implement any object as a Singleton."),(0,i.kt)("p",null,"A sketch of the architecture is as follows:"),(0,i.kt)(o.Z,{path:n(3590).Z,customClass:"invert-color",widthPercentage:"100%",mdxType:"ImageCard"}),(0,i.kt)("h3",{id:"scriptable-object-event-system"},"Scriptable Object Event System"),(0,i.kt)("p",null,"Create two new scripts called ",(0,i.kt)("inlineCode",{parentName:"p"},"GameEvent.cs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GameEventListener.cs"),". This SO-based event will store a ",(0,i.kt)("strong",{parentName:"p"},"list")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"GameEventListeners"),", and notify them whenever the GameEvent is ",(0,i.kt)("strong",{parentName:"p"},"Raised"),"."),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"1",label:"GameEvent.cs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using System.Collections.Generic;\nusing Unity.VisualScripting;\nusing UnityEngine;\n\n\npublic class GameEvent<T> : ScriptableObject\n{\n    private readonly List<GameEventListener<T>> eventListeners =\n        new List<GameEventListener<T>>();\n\n    public void Raise(T data)\n    {\n        for (int i = eventListeners.Count - 1; i >= 0; i--)\n            eventListeners[i].OnEventRaised(data);\n    }\n\n    public void RegisterListener(GameEventListener<T> listener)\n    {\n        if (!eventListeners.Contains(listener))\n            eventListeners.Add(listener);\n    }\n\n    public void UnregisterListener(GameEventListener<T> listener)\n    {\n        if (eventListeners.Contains(listener))\n            eventListeners.Remove(listener);\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"2",label:"GameEventListener.cs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"\nusing UnityEngine;\nusing UnityEngine.Events;\n\n// if attached to an object that might be disabled, callback will not work\n// attach it on a parent object that wont be disabled\npublic class GameEventListener<T> : MonoBehaviour\n{\n    public GameEvent<T> Event;\n\n    public UnityEvent<T> Response;\n\n    private void OnEnable()\n    {\n        Event.RegisterListener(this);\n    }\n\n    private void OnDisable()\n    {\n        Event.UnregisterListener(this);\n    }\n\n    public void OnEventRaised(T data)\n    {\n        Response.Invoke(data);\n    }\n}\n\n")))),(0,i.kt)("p",null,"These are currently of a ",(0,i.kt)("inlineCode",{parentName:"p"},"generic")," type because ",(0,i.kt)("inlineCode",{parentName:"p"},"UnityEvent")," can have any signature: without zero to three arguments of any time. For the sake of the lab, we need at least three different types: no argument, a single ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," type argument, and a single ",(0,i.kt)("inlineCode",{parentName:"p"},"IPowerup")," type argument. For each type, we need a pair of scripts: the GameEvent and the GameEventListener variant."),(0,i.kt)("p",null,'The following creates the "no argument" variant:'),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"1",label:"SimpleGameEvent.cs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n// no arguments\n[CreateAssetMenu(fileName = "SimpleGameEvent", menuName = "ScriptableObjects/SimpleGameEvent", order = 3)]\npublic class SimpleGameEvent : GameEvent<Object>\n{\n // leave empty\n}\n'))),(0,i.kt)(l.Z,{value:"2",label:"SimpleGameEventListener.cs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class SimpleGameEventListener : GameEventListener<Object>\n{\n\n}\n")))),(0,i.kt)("p",null,"Do the same for the other two types."),(0,i.kt)(r.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-5/setup-events.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,i.kt)("h3",{id:"create-game-events"},"Create Game Events"),(0,i.kt)("p",null,"When done, create some SO Game Events as follows (your actual number of events may vary, but if we follow the suggested diagram then you shall make 11 events). Rename them properly based on their type."),(0,i.kt)(r.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-5/create-game-events.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,i.kt)("h3",{id:"subscriberegister-to-game-events-with-gameeventlistener"},"Subscribe/Register to Game Events with GameEventListener"),(0,i.kt)("p",null,"Once created, each ",(0,i.kt)("inlineCode",{parentName:"p"},"GameEvent"),' serves as a "container" that store a list of GameEventListeners. Whenever any script calls their ',(0,i.kt)("inlineCode",{parentName:"p"},"Raise")," method, it will call the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnEventsRaised")," method on all of its GameEventListener (subscribers), which will then call a list of methods registered under ",(0,i.kt)("inlineCode",{parentName:"p"},"Response")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"GameEventListener"),". For instance, we want to ",(0,i.kt)("strong",{parentName:"p"},"reset")," our Camera to its starting location whenever ",(0,i.kt)("inlineCode",{parentName:"p"},"OnGameRestart")," event is Raised. When we were using the Singleton Method, we first register some callback ",(0,i.kt)("inlineCode",{parentName:"p"},"GameRestart()")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"CameraController.cs"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="CameraController.cs" showLineNumbers',title:'"CameraController.cs"',showLineNumbers:!0},"    void Start()\n    {\n        GameManager.instance.gameRestart.AddListener(GameRestart);\n    }\n\n    void GameRestart()\n    {\n        // reset camera position\n        transform.position = startPosition;\n    }\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Delete")," line 3 above, and we register ",(0,i.kt)("inlineCode",{parentName:"p"},"GameRestart")," as a callback to ",(0,i.kt)("inlineCode",{parentName:"p"},"OnGameRestart")," Game Event using ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleGameEventListener")," Script component as follows:"),(0,i.kt)(o.Z,{path:n(1592).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," field of the SimpleGameEventListener script is linked to ",(0,i.kt)("inlineCode",{parentName:"p"},"OnGameRestart")," SO GameEvent, and as its ",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),", we register ",(0,i.kt)("inlineCode",{parentName:"p"},"CameraController"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"GameRestart()")," method. When another script calls ",(0,i.kt)("inlineCode",{parentName:"p"},"OnGameRestart.Raise()"),", this will automatically cause ",(0,i.kt)("inlineCode",{parentName:"p"},"OnGameRestart")," to loop through its ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleEventGameListeners")," and call ",(0,i.kt)("inlineCode",{parentName:"p"},"OnEventRaised()")," on it. This will then trigger ",(0,i.kt)("inlineCode",{parentName:"p"},"Response.Invoke()")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"Response")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"GameRestart()")," method from ",(0,i.kt)("inlineCode",{parentName:"p"},"CameraController"),". Finally, the method ",(0,i.kt)("inlineCode",{parentName:"p"},"GameRestart()")," is performed on the ",(0,i.kt)("inlineCode",{parentName:"p"},"CameraController"),"'s ",(0,i.kt)("span",{className:"orange-bold"},"instance"),"."),(0,i.kt)("p",null,"What is this ",(0,i.kt)("em",{parentName:"p"},"other")," script who can call ",(0,i.kt)("inlineCode",{parentName:"p"},"OnGameRestart.Raise()"),"? One possible candidate is the ",(0,i.kt)("inlineCode",{parentName:"p"},"RestartButtonController"),". We can have a following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="RestartButtonController.cs"',title:'"RestartButtonController.cs"'},"\n    public UnityEvent gameRestart;\n\n    void ButtonClick()\n    {\n        gameRestart.Invoke();\n    }\n\n")),(0,i.kt)("p",null,"Attach this to the restart Button, and set ",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonClick()")," as the callback of the button component. Then link ",(0,i.kt)("inlineCode",{parentName:"p"},"OnGameRestart")," SimpleGameEvent SO as ",(0,i.kt)("inlineCode",{parentName:"p"},"gameRestart")," UnityEvent that is invoked by clicking the restart button."),(0,i.kt)(o.Z,{path:n(5877).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"Now you can ask Mario and Goomba to do the same: attach a SimpleGameEvent script to both gameObjects, with ",(0,i.kt)("inlineCode",{parentName:"p"},"events")," field referring to SO ",(0,i.kt)("inlineCode",{parentName:"p"},"OnGameRestart")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"GameRestart()")," callback in each of its controller as follows. The video below also shows that each gameObject (e.g: Mario) can contain multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"GameEventListeners")," so that you can register various callbacks from any script in that gameObject."),(0,i.kt)(r.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-5/game-restart.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is ",(0,i.kt)("span",{className:"red-bold"},"important")," for you to be able to trace properly the chain of events that make this works. The following diagram illustrates what actually happened from the moment restart button is clicked to the moment all ",(0,i.kt)("inlineCode",{parentName:"p"},"GameRestart()")," functions in the scripts attached to Mario, Camera, and all Goombas are called:"),(0,i.kt)(o.Z,{path:n(4909).Z,customClass:"invert-color",widthPercentage:"100%",mdxType:"ImageCard"})),(0,i.kt)("h2",{id:"migrate"},"Migrate"),(0,i.kt)("p",null,"Now that you know how ScriptableObject Event System work, carefully migrate your entire project (all scenes) to adopt this new event system."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Delete each old ",(0,i.kt)("inlineCode",{parentName:"li"},"GameManager.instance.[event].AddListener(CallbackMethod)")," line, and replace it by attaching the corresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"GameEventListener")," script to the GameObject"),(0,i.kt)("li",{parentName:"ul"},"Ensure that you select the correct ",(0,i.kt)("inlineCode",{parentName:"li"},"GameEventListener")," type (no argument, ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"IPowerup")," type argument)"),(0,i.kt)("li",{parentName:"ul"},"Link up the right ",(0,i.kt)("inlineCode",{parentName:"li"},"GameEvent")," in the Inspector to match that ",(0,i.kt)("inlineCode",{parentName:"li"},"[event]")," you are replacing"),(0,i.kt)("li",{parentName:"ul"},"Link up ",(0,i.kt)("inlineCode",{parentName:"li"},"CallbackMethod")," at the ",(0,i.kt)("inlineCode",{parentName:"li"},"GameEventListener")," Inspector. Make sure that this method is ",(0,i.kt)("span",{className:"orange-bold"},"public"))),(0,i.kt)("p",null,"After a few tries, the procedure should be quite standard. Firstly, create the ",(0,i.kt)("inlineCode",{parentName:"p"},"GameEvent"),"s."),(0,i.kt)("p",null,"Secondly, figure out which callback methods should be run for each event. Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," callback method where you will handle a particular event in a script. Then, on the same gameObject where that script is attached to, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"GameEventListener")," script with that ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," method as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),"."),(0,i.kt)("p",null,"Thirdly, figure out which scripts shall ",(0,i.kt)("inlineCode",{parentName:"p"},"Raise")," the events. To ",(0,i.kt)("inlineCode",{parentName:"p"},"Raise")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"GameEvent"),", attach that ",(0,i.kt)("inlineCode",{parentName:"p"},"GameEvent")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Raise")," method as a listener to ",(0,i.kt)("inlineCode",{parentName:"p"},"public UnityEvent event")," member in that script that wants to ",(0,i.kt)("em",{parentName:"p"},"cast")," (raise) it, for as written in the ",(0,i.kt)("inlineCode",{parentName:"p"},"RestartButtonController")," above."),(0,i.kt)("p",null,"Here's a quick video for your reference:"),(0,i.kt)(r.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-5/migrate.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,i.kt)("admonition",{title:"For reference only",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Your actual implementation might differ and that's alright, so don't be alarmed. As long as the game works as intended with this new architecture, that's fine.")))}g.isMDXComponent=!0},4909:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gamerestart-soga-74421533f7fac78d8f02f4af76381ddd.png"},1592:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-09-22-16-16-26-cafd61a7520077a674700d8393e73e05.png"},5877:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-09-22-16-25-30-198f5f511382d72651bf58dd48bb99db.png"},5256:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/singleton-archi-c1928ec9c01c579f99d96d2739e5a948.png"},3590:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/soga-arch-471ecb0548cfa55af568d60f8e0d8a1a.png"}}]);