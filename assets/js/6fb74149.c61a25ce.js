"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[6960],{9228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),i=(n(1694),n(6596),n(6533)),s=(n(505),n(1496));n(4866),n(5162);const r={sidebar_position:1},p="The Input System",l={unversionedId:"toddlers/management",id:"toddlers/management",title:"The Input System",description:"The main purpose of this Lab is to introduce a few tools that can be used to manage the game better. For example, right now we have game states spread all over various scripts, audio source spread everywhere on each object, hard-to-read game logic, etc. We can improve the structure of the game better with the help of AudioMixer, ScriptableObject, Unity Event, and a few other C# basics like Coroutines, Async functions, Singletons, and many more.",source:"@site/docs/03-toddlers/management.md",sourceDirName:"03-toddlers",slug:"/toddlers/management",permalink:"/50033/docs/toddlers/management",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Unity for Toddlers",permalink:"/50033/docs/category/unity-for-toddlers"},next:{title:"The Observer Pattern",permalink:"/50033/docs/toddlers/observer-pattern"}},c={},d=[{value:"Installation",id:"installation",level:3},{value:"Mario&#39;s Control",id:"marios-control",level:2},{value:"Create InputActions",id:"create-inputactions",level:3},{value:"InputActions Asset Editor",id:"inputactions-asset-editor",level:2},{value:"Action Maps",id:"action-maps",level:3},{value:"Actions",id:"actions",level:3},{value:"Action Binding",id:"action-binding",level:3},{value:"Action Properties",id:"action-properties",level:3},{value:"Action Types",id:"action-types",level:4},{value:"Interactions",id:"interactions",level:4},{value:"Workflows (to Use InputAction)",id:"workflows-to-use-inputaction",level:3},{value:"Registering callbacks via the script + Action Asset",id:"registering-callbacks-via-the-script--action-asset",level:4},{value:"Using PlayerInput Component with SendMessage or BroadcastMessage Behavior",id:"using-playerinput-component-with-sendmessage-or-broadcastmessage-behavior",level:4},{value:"Using PlayerInput Component with UnityEvents Behavior",id:"using-playerinput-component-with-unityevents-behavior",level:4}],m={toc:d},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-input-system"},"The Input System"),(0,o.kt)("p",null,"The main purpose of this Lab is to introduce a few tools that can be used to manage the game better. For example, right now we have game states spread all over various scripts, audio source spread everywhere on each object, hard-to-read game logic, etc. We can improve the structure of the game better with the help of AudioMixer, ScriptableObject, Unity Event, and a few other C# basics like Coroutines, Async functions, Singletons, and many more."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"At the time of this writing, we are using Input System v1.6.3.")),(0,o.kt)("p",null,"The Input System is a newer system offered by Unity to ",(0,o.kt)("strong",{parentName:"p"},"manage")," your game's user input in an easier way. The old is called the ",(0,o.kt)("inlineCode",{parentName:"p"},"Input Manager"),", and that's one that we heave briefly touched (",(0,o.kt)("inlineCode",{parentName:"p"},"GetKeyUp"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GetKeyDown"),", etc). This Input System package is a newer, more ",(0,o.kt)("strong",{parentName:"p"},"flexible")," system, which allows you to use any kind of Input Device to control your Unity content, define specific ",(0,o.kt)("strong",{parentName:"p"},"actions"),", watch for specific ",(0,o.kt)("strong",{parentName:"p"},"interactions"),", ",(0,o.kt)("strong",{parentName:"p"},"process")," the actions, and give an overall pleasant management of the user input."),(0,o.kt)("p",null,"Let's say we have a different input bindings during the gameplay and in the main menu of the game. With The Input System, we can define ",(0,o.kt)("strong",{parentName:"p"},"Action Maps")," for different scenes, while with the old system, we need to manually manage that within our scripts. There also exist other alternatives (e.g: paid assets, using ScriptableObjects) to manage user input. The Input System is simply an ",(0,o.kt)("strong",{parentName:"p"},"alternative"),"."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Your project does not come with The Input System by default, only the Input Manager. Please proceed to read its official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.6/manual/Installation.html"},"installation")," documentation here before proceeding."),(0,o.kt)("p",null,"You can enable both systems so to not immediately break your game. This can be found under Settings for Windows, Mac, Linux --\x3e Other settings."),(0,o.kt)(i.Z,{path:n(1546).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("h2",{id:"marios-control"},"Mario's Control"),(0,o.kt)("p",null,"Right now our Mario can move (left and right, with ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"d"),") key, and jump (with a spacebar). We can also control Mario using the ",(0,o.kt)("strong",{parentName:"p"},"arrow")," keys to move left and right but the sprite wont flip (because we only check for keys ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"d")," manually), while the Input Manager bind a and left arrow key to cause negative horizontal movement (similarly with positive horizontal movement)."),(0,o.kt)(i.Z,{path:n(534).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"Suppose we also want to allow Mario to jump higher ",(0,o.kt)("em",{parentName:"p"},"if")," we hold the spacebar button down, like this:"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-3/jump-higher.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,o.kt)("p",null,'We would need to manually determine what constitutes as a "tap" and what constitutes as a "hold" manually in the script, or create a helper script to do that. The Input System however can watch for that ',(0,o.kt)("em",{parentName:"p"},"interaction")," (tap or hold or both) for you and execute a callback."),(0,o.kt)("h3",{id:"create-inputactions"},"Create InputActions"),(0,o.kt)("p",null,"Create a new directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"InputSystem")," in Assets. Then, create a new InputActions that will be used to define actions for this game inside ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets/InputSystem")," directory. Name it ",(0,o.kt)("inlineCode",{parentName:"p"},"MarioActions"),". Ignore the C# script for now, it will be ",(0,o.kt)("strong",{parentName:"p"},"autogenerated")," later."),(0,o.kt)(i.Z,{path:n(9930).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"Now click on the newly created asset, and over at the inspector you can tick the ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate C# Class")," property and then click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Apply"),". Afterwards, open the Asset window by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit Asset"),". Edit the asset window to follow exactly as shown in the video below:"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-3/setup-input-actions.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,o.kt)("h2",{id:"inputactions-asset-editor"},"InputActions Asset Editor"),(0,o.kt)("p",null,"Let's break down each section of the asset editor one by one."),(0,o.kt)("h3",{id:"action-maps"},"Action Maps"),(0,o.kt)("p",null,"Over at the leftmost pane, we can define our Action Maps, that is the ",(0,o.kt)("strong",{parentName:"p"},"entire")," set of keys that we typically want to use for different ",(0,o.kt)("strong",{parentName:"p"},"stages")," in the game or different ",(0,o.kt)("strong",{parentName:"p"},"characters")," in the game. For instance: gameplay or main menu, ",(0,o.kt)("strong",{parentName:"p"},"shooter")," or ",(0,o.kt)("strong",{parentName:"p"},"swordsman"),"."),(0,o.kt)(i.Z,{path:n(1582).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("h3",{id:"actions"},"Actions"),(0,o.kt)("p",null,"At the middle pane, we can add our Actions. ",(0,o.kt)("strong",{parentName:"p"},"This is what Mario can do"),". The ",(0,o.kt)("strong",{parentName:"p"},"name")," of the actions are typically matched to the actual capability of the player that can perform that actions, such as jump, move, crouch, run, etc."),(0,o.kt)(i.Z,{path:n(5926).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("h3",{id:"action-binding"},"Action Binding"),(0,o.kt)("p",null,"For each action, we can add a ",(0,o.kt)("strong",{parentName:"p"},"binding")," by clicking the + button. A binding is a ",(0,o.kt)("strong",{parentName:"p"},"connection")," defined between an Action and one or more Controls. For example, if we want our Mario to move to the ",(0,o.kt)("em",{parentName:"p"},"left")," (negative 1D axis) by pressing either left arrow or key A, then we can add one more 1D Axis binding to ",(0,o.kt)("inlineCode",{parentName:"p"},"move")," action:"),(0,o.kt)(i.Z,{path:n(3319).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("h3",{id:"action-properties"},"Action Properties"),(0,o.kt)("h4",{id:"action-types"},"Action Types"),(0,o.kt)("p",null,"There are ",(0,o.kt)("strong",{parentName:"p"},"three")," types of action types: ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"button"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pass through"),". This defines the ",(0,o.kt)("strong",{parentName:"p"},"callbacks")," that we implement in the script. For instance, those with action type of ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," expects some kind of ",(0,o.kt)("inlineCode",{parentName:"p"},"InputValue")," parameter defined in the callback, whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," is not. For example, here's the expected callback for ",(0,o.kt)("inlineCode",{parentName:"p"},"jump")," action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"    public void OnJump()\n    {\n        // TODO\n    }\n")),(0,o.kt)("p",null,"And here's the expected callback for ",(0,o.kt)("inlineCode",{parentName:"p"},"move")," action (you can also define ",(0,o.kt)("inlineCode",{parentName:"p"},"OnMove")," without any argument too, but that defeats the purpose):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"\n    public void OnMove(InputValue input)\n    {\n        // TODO\n    }\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Notice how the callbacks are written with the format ",(0,o.kt)("inlineCode",{parentName:"p"},"On[action-name]"),". This depends on ",(0,o.kt)("em",{parentName:"p"},"how")," you register the callbacks: via script or via inspector. More on this later.")),(0,o.kt)("h4",{id:"interactions"},"Interactions"),(0,o.kt)("p",null,"You can apply interactions on an Action, or on a Binding. Applying Interactions directly to an Action is equivalent to applying them to all Bindings for the Action. This is particularly useful if you want an automatic detection of different kinds of action interactions: tap, multi tap, hold, slow tap, etc. There are ",(0,o.kt)("strong",{parentName:"p"},"four")," stages of the behavior: waiting, started, performed, cancelled, of which you can tie up to different callbacks via the script if you wish. Here's a short example on how to register a callback once a hold interaction is ",(0,o.kt)("strong",{parentName:"p"},"performed"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'    public PlayerInput playerInput;\n    private InputAction jumpHoldAction;\n\n    void Start()\n    {\n        // must match the actions name\n        jumpHoldAction = playerInput.actions["jumphold"];\n        jumpHoldAction.performed += OnJumpHoldPerformed;\n    }\n\n    void OnJumpHoldPerformed(InputAction.CallbackContext context)\n    {\n        // TODO\n    }\n\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please consult the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.6/manual/Actions.html"},"documentation")," to find out more details about more advanced feature like ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.6/manual/Processors.html"},"Processors")," and Bindings with one or two ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.6/manual/ActionBindings.html#two-modifiers"},"modifiers"),".")),(0,o.kt)("h3",{id:"workflows-to-use-inputaction"},"Workflows (to Use InputAction)"),(0,o.kt)("p",null,"There are ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.6/manual/Workflows.html"},(0,o.kt)("strong",{parentName:"a"},"four")," different workflows")," that are provided in the documentation. We will discuss ",(0,o.kt)("strong",{parentName:"p"},"two ways")," out of the four to use InputActions: via Action Asset + Script, or via the PlayerInput Component."),(0,o.kt)("h4",{id:"registering-callbacks-via-the-script--action-asset"},"Registering callbacks via the script + Action Asset"),(0,o.kt)("p",null,"This method allows us to define actions, properties, and interactions via the GUI as shown above, ",(0,o.kt)("em",{parentName:"p"},"and then")," instantiate and register callbacks via the script attached to the GameObject we want to control. The documentation related to this section is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.6/manual/Workflow-ActionsAsset.html"},"here"),"."),(0,o.kt)("p",null,"Since we have generated the C# script: ",(0,o.kt)("inlineCode",{parentName:"p"},"MarioActions.cs")," from the Action Asset, we can instantiate it directly in the code under ",(0,o.kt)("inlineCode",{parentName:"p"},"Start"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"enable")," it. Then we can address the actions directly via ",(0,o.kt)("inlineCode",{parentName:"p"},"marioActions")," asa follows and register the callbacks we want. The callback must have the signature: return value ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," and receive one argument of type: ",(0,o.kt)("inlineCode",{parentName:"p"},"InputAction.CallbackContext"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'    public MarioActions marioActions;\n\n    void Start()\n    {\n        marioActions = new MarioActions();\n        marioActions.gameplay.Enable();\n        marioActions.gameplay.jump.performed += OnJump;\n        marioActions.gameplay.jumphold.performed += OnJumpHoldPerformed;\n        marioActions.gameplay.move.started += OnMove;\n        marioActions.gameplay.move.canceled += OnMove;\n    }\n\n    void OnJump(InputAction.CallbackContext context)\n    {\n        // TODO\n    }\n\n    void OnMove(InputAction.CallbackContext context)\n    {\n        if (context.started)\n        {\n            Debug.Log("move started");\n        }\n        if (context.canceled)\n        {\n            Debug.Log("move stopped");\n        }\n\n        float move = context.ReadValue<float>();\n        Debug.Log($"move value: {move}"); // will return null when not pressed\n\n        // TODO\n    }\n\n')),(0,o.kt)("p",null,"We can read the context's value using ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadValue<T>"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," depends on the action ",(0,o.kt)("strong",{parentName:"p"},"type")," and control type. For instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"move")," has an action type of Vanue with control type of Axis. Thus, we can read its value with ",(0,o.kt)("inlineCode",{parentName:"p"},"float"),". ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.6/manual/Controls.html#control-types"},"You can read more about Control Types here"),"."),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"using-playerinput-component-with-sendmessage-or-broadcastmessage-behavior"},"Using PlayerInput Component with SendMessage or BroadcastMessage Behavior"),(0,o.kt)("p",null,"If we don't want too much boilerplates in setting up callbacks for each action, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Player Input")," component and ",(0,o.kt)("strong",{parentName:"p"},"automatically")," register callbacks. The documentation related to this section is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.6/manual/Workflow-PlayerInput.html"},"here"),"."),(0,o.kt)("p",null,"Firstly, attach ",(0,o.kt)("inlineCode",{parentName:"p"},"Player Input")," component at Mario and select ",(0,o.kt)("inlineCode",{parentName:"p"},"MarioActions")," as the Actions asset. Select the scheme as ",(0,o.kt)("inlineCode",{parentName:"p"},"Keyboard")," and Default Map as ",(0,o.kt)("inlineCode",{parentName:"p"},"gameplay")," (because this is how we control Mario). Then, set the ",(0,o.kt)("strong",{parentName:"p"},"behavior")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Send Messages"),". This means that it will automatically find scripts attached to Mario that implements the following methods shown in the Inspector below and call them. The name of the methods is simply ",(0,o.kt)("inlineCode",{parentName:"p"},"On[actions-name]"),", with return type ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," and parameter depending on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Control type")," of the action."),(0,o.kt)(i.Z,{path:n(5038).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The component must be on the same GameObject if you are using ",(0,o.kt)("strong",{parentName:"p"},"Send Messages"),", or on the same ",(0,o.kt)("strong",{parentName:"p"},"or")," any ",(0,o.kt)("strong",{parentName:"p"},"child")," GameObject if you are using ",(0,o.kt)("strong",{parentName:"p"},"Broadcast Messages"),".")),(0,o.kt)("p",null,"We can now create a script that implements these methods and attach it at ",(0,o.kt)("inlineCode",{parentName:"p"},"Mario"),". In the example below, we wrote test callbacks inside another script called ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionManager.cs"),", which is attached as a component on Mario."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="ActionManager.cs"',title:'"ActionManager.cs"'},'\n    // triggered upon performed interaction (default successful press)\n    public void OnJump()\n    {\n        Debug.Log("OnJump called");\n        // TODO\n    }\n\n    // triggered upon 1D value change (default successful press and cancelled)\n    public void OnMove(InputValue input)\n    {\n        if (input.Get() == null)\n        {\n            Debug.Log("Move released");\n        }\n        else\n        {\n            Debug.Log($"Move triggered, with value {input.Get()}"); // will return null when released\n        }\n        // TODO\n    }\n\n    // triggered upon performed interaction (custom successful hold)\n    public void OnJumpHold(InputValue value)\n    {\n        Debug.Log($"OnJumpHold performed with value {value.Get()}");\n        // TODO\n\n    }\n\n')),(0,o.kt)("p",null,"Here's what should be printed out in the console (ignore Mario's movement for now, you have not linked it up. This is for demo only):"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-3/demo-sendmessage.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,o.kt)("admonition",{title:"Behavior and Callbacks during Interaction",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Do not assume that each callback will be called exactly once. It depends on the ",(0,o.kt)("strong",{parentName:"p"},"interaction")," you specify, as well as the Action Type of the action, e.g: button or value or pass through."),(0,o.kt)("p",{parentName:"admonition"},"If you do ",(0,o.kt)("strong",{parentName:"p"},"not")," specify any interactions to the action, consult the documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.6/manual/Interactions.html#default-interaction"},"default interaction"),". This tells you what kinds of ",(0,o.kt)("strong",{parentName:"p"},"callbacks")," can occur."),(0,o.kt)("p",{parentName:"admonition"},"If you use ",(0,o.kt)("inlineCode",{parentName:"p"},"Send Messages")," behavior on your ",(0,o.kt)("inlineCode",{parentName:"p"},"PlayerInput")," Component will trigger the corresponding callback on ",(0,o.kt)("inlineCode",{parentName:"p"},"performed")," state (e.g: when button is pressed, not released) for ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," type."),(0,o.kt)("p",{parentName:"admonition"},"However on ",(0,o.kt)("inlineCode",{parentName:"p"},"Value")," type, the callback will be called twice: upon press and release. This is what happens with ",(0,o.kt)("inlineCode",{parentName:"p"},"OnMove")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"Move")," action."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.inputsystem@1.6/api/UnityEngine.InputSystem.InputActionType.html#fields"},"Read more on differences between Button, Value, and Pass Through here"),". It's likely that you will need to use Button and Value only for most use cases, and not Pass Through.")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"using-playerinput-component-with-unityevents-behavior"},"Using PlayerInput Component with UnityEvents Behavior"),(0,o.kt)("p",null,"We can also use another behavior: ",(0,o.kt)("strong",{parentName:"p"},"Unity Events"),' instead of send/broadcast messages. The pros from this method is that you can have control in the callback naming convention and which method handles what, but the cons is that it is not "automatic", lots of manual work to do.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There's some chatter that send/broadcast message may result in slight performance hit because it goes over all scripts attached to the GameObject or its children looking for the corresponding methods. However, if you don't ",(0,o.kt)("em",{parentName:"p"},"feel")," any performance hit (which shouldn't matter because you're making a small prototype now), then stick with whichever you like.")),(0,o.kt)("p",null,'To do this, simply modify the Behavior into "Invoke Unity Events", and hook up the callbacks via the Inspector.'),(0,o.kt)(i.Z,{path:n(6046).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="ActionManager.cs"',title:'"ActionManager.cs"'},'    public void OnJumpHoldAction(InputAction.CallbackContext context)\n    {\n        if (context.started)\n            Debug.Log("JumpHold was started");\n        else if (context.performed)\n        {\n            Debug.Log("JumpHold was performed");\n        }\n        else if (context.canceled)\n            Debug.Log("JumpHold was cancelled");\n    }\n\n    // called twice, when pressed and unpressed\n    public void OnJumpAction(InputAction.CallbackContext context)\n    {\n        if (context.started)\n            Debug.Log("Jump was started");\n        else if (context.performed)\n        {\n            Debug.Log("Jump was performed");\n        }\n        else if (context.canceled)\n            Debug.Log("Jump was cancelled");\n\n    }\n\n    // called twice, when pressed and unpressed\n    public void OnMoveAction(InputAction.CallbackContext context)\n    {\n        if (context.started)\n        {\n            Debug.Log("move started");\n            float move = context.ReadValue<float>();\n            Debug.Log($"move value: {move}"); // will return null when not pressed\n        }\n        if (context.canceled)\n        {\n            Debug.Log("move stopped");\n        }\n    }\n')),(0,o.kt)("p",null,"Here's what should be printed out in the console with this new technique (ignore Mario's movement for now, you have not linked it up. This is for demo only):"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-3/unityevents-invoke.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,o.kt)("p",null,"Notice how more stuffs are printed out: that ",(0,o.kt)("strong",{parentName:"p"},"each")," state change triggers ",(0,o.kt)("inlineCode",{parentName:"p"},"On[actionName]Action")," callbacks and you need to read the ",(0,o.kt)("inlineCode",{parentName:"p"},"context"),"'s state to determine what to do. This is ",(0,o.kt)("strong",{parentName:"p"},"different")," from SendMessage behavior where the callbacks are only triggered upon ",(0,o.kt)("inlineCode",{parentName:"p"},"performed")," interaction. We also get the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," that triggered that callback and we can do more things with that context given."))}h.isMDXComponent=!0},1546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-09-10-50-47-9360c3f1958fe53633a77211355ce110.png"},534:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-09-10-54-07-7d713a04f688d302c9eed08251f5b852.png"},9930:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-09-11-00-11-be8f077504bd8ded402244569e8f8dea.png"},1582:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-09-11-18-38-5511f0efc1176adca049f905bf8c84e7.png"},5926:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-09-11-19-26-2c919ffde69414c5f15f45a984bc0f84.png"},3319:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-09-11-20-20-80b8abc652740f8ac5c62bf0a8a9f4ec.png"},5038:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-11-11-12-09-18b5d7af031b89b14b029d37bcac9212.png"},6046:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-11-13-23-49-dbdf4ea71369cb63aa45a7cef2dfd3d8.png"}}]);