"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[823],{29:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(7462),o=(a(7294),a(3905)),i=(a(1694),a(6596),a(6533)),s=(a(505),a(1496));a(4866),a(5162);const r={sidebar_position:2},l="Physics2D",p={unversionedId:"babies/physics",id:"babies/physics",title:"Physics2D",description:"The goal of this section is to create some obstacles (breakable boxes, platforms, static blocks, pipes) that exists in Super Mario Bros. Using this, we will learn more about Unity's Physics2D Engine and manage our GameObjects by creating Prefabs (a sort of reusable object).",source:"@site/docs/02-babies/physics.md",sourceDirName:"02-babies",slug:"/babies/physics",permalink:"/50033/docs/babies/physics",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Camera Movement",permalink:"/50033/docs/babies/camera"},next:{title:"Checkoff",permalink:"/50033/docs/babies/checkoff"}},d={},m=[{value:"Constraint Z-Rotation",id:"constraint-z-rotation",level:2},{value:"Prefab",id:"prefab",level:2},{value:"Bricks and Question Box",id:"bricks-and-question-box",level:3},{value:"Pipes",id:"pipes",level:3},{value:"Goomba",id:"goomba",level:3},{value:"Unpack Prefab",id:"unpack-prefab",level:3},{value:"Layers",id:"layers",level:2},{value:"Layer-based Collision",id:"layer-based-collision",level:3},{value:"Collision with Obstacle or Pipes",id:"collision-with-obstacle-or-pipes",level:3},{value:"More Tags",id:"more-tags",level:3},{value:"LayerMask",id:"layermask",level:3},{value:"Physics 2D",id:"physics-2d",level:2},{value:"Effector2D",id:"effector2d",level:3},{value:"PhysicsJoint2D",id:"physicsjoint2d",level:3},{value:"Springy Question Box",id:"springy-question-box",level:3},{value:"Physics Material 2D",id:"physics-material-2d",level:3}],c={toc:m},h="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"physics2d"},"Physics2D"),(0,o.kt)("p",null,"The goal of this section is to create some obstacles (breakable boxes, platforms, static blocks, pipes) that exists in Super Mario Bros. Using this, we will learn more about Unity's Physics2D Engine and manage our GameObjects by creating Prefabs (a sort of reusable object)."),(0,o.kt)("h2",{id:"constraint-z-rotation"},"Constraint Z-Rotation"),(0,o.kt)("p",null,"Notice how we always need Mario to stand upright, and not toppling when moving too fast. We definitely do not want Mario to topple when hitting other obstacles as well like this:"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/topple.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,o.kt)("p",null,"In order to keep Mario standing upright, we need to place constraints on Mario\u2019s Rigidbody2D Z-rotation component. From this screenshot, it should be pretty clear that we want Mario's position (x,y) to vary but not his Z-rotation:"),(0,o.kt)(i.Z,{path:a(2665).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("h2",{id:"prefab"},"Prefab"),(0,o.kt)("p",null,"In Unity\u2019s Prefab system, Prefab Assets act as ",(0,o.kt)("strong",{parentName:"p"},"templates"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You create Prefab Assets in the Editor, and they are saved as an Asset in the Project window"),(0,o.kt)("li",{parentName:"ul"},"From Prefab Assets, you can create any number of Prefab instances."),(0,o.kt)("li",{parentName:"ul"},"Prefab instances can either be created in the editor and saved as part of your Scenes or instantiated at runtime.")),(0,o.kt)("p",null,"Why do we need to create Prefabs instead of regular GameObjects? To understand fully, create some obstacles for Mario."),(0,o.kt)("h3",{id:"bricks-and-question-box"},"Bricks and Question Box"),(0,o.kt)("p",null,"Now that our Mario can move around smoothly with proper animations, it\u2019s time we add some obstacles. Adding bricks that Mario can jump on is easy: simply add Box Collider 2D element on every Brick and Question Box GameObject."),(0,o.kt)(i.Z,{path:a(935).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"The ",(0,o.kt)("span",{className:"orange-bold"},"problem")," is that we have ",(0,o.kt)("strong",{parentName:"p"},"so many copies")," of those boxes and bricks in the game. We definitely do not want to manually add collider to all of them. To fix this, we need to create a ",(0,o.kt)("strong",{parentName:"p"},"Prefab")," of that brick and question box by ",(0,o.kt)("strong",{parentName:"p"},"dragging")," that GameObject into the Prefab folder. This recording should give you the idea:"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/prefab.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"From the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/Prefabs.html"},"documentation"),": Unity\u2019s Prefab system allows you to ",(0,o.kt)("strong",{parentName:"p"},"create"),", ",(0,o.kt)("strong",{parentName:"p"},"configure"),", and ",(0,o.kt)("strong",{parentName:"p"},"store")," a GameObject complete with all its components, property values, and child GameObjects as a ",(0,o.kt)("span",{className:"orange-bold"},"reusable")," Asset. The Prefab Asset acts as a template from which you can create new Prefab instances in the Scene.")),(0,o.kt)("p",null,"We have the ",(0,o.kt)("inlineCode",{parentName:"p"},"Brick")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Question Box")," prefab now, and we can duplicate it across the Scene wherever we want to spawn it. Also, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/EditingInPrefabMode.html"},"a change made in the ",(0,o.kt)("strong",{parentName:"a"},"Prefab")," in the ",(0,o.kt)("strong",{parentName:"a"},"Prefab Mode"))," will be applied across all prefabs. You can still however have Prefab ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/PrefabVariants.html"},"variants")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/PrefabInstanceOverrides.html"},"override")," existing Prefab in the Scene if you want it to differ slightly from the base prefab template."),(0,o.kt)("admonition",{title:"warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please do not skip the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/Prefabs.html"},"documentation")," and read them carefully.")),(0,o.kt)("h3",{id:"pipes"},"Pipes"),(0,o.kt)("p",null,"Create the pipes prefabs too, setting the appropriate colliders so Mario can collide with it and climb on it. Pipe's Head shape isn't exactly rectangular, so you can use either of the two methods:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Two ",(0,o.kt)("inlineCode",{parentName:"strong"},"BoxCollider2D")),":"),(0,o.kt)(i.Z,{path:a(9103).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"Using one ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"PollygonCollider2D")),", adjusting the shape to fit the Pipe head sprite:"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/pollygoncollider.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,o.kt)("h3",{id:"goomba"},"Goomba"),(0,o.kt)("p",null,"Goomba should also be set as a prefab since we will spawn many of them at once. In the end, check that you have the following Prefabs:"),(0,o.kt)(i.Z,{path:a(8390).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("h3",{id:"unpack-prefab"},"Unpack Prefab"),(0,o.kt)("p",null,"If you no longer want one of your GameObject to be assosicated with a prefab, simply right click on the GameObject in the Hierarchy and select Prefab >> Unpack Completely:"),(0,o.kt)(i.Z,{path:a(1805).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,o.kt)("h2",{id:"layers"},"Layers"),(0,o.kt)("p",null,"We can create ",(0,o.kt)("inlineCode",{parentName:"p"},"Layers")," via the Inspector of any GameObject to determine:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What can be rendered (layer-based rendering)"),(0,o.kt)("li",{parentName:"ol"},"What can collide with each other (layer-based collision)")),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"layer-based rendering"),", we can decide what to be rendered (only a selection of layers) using the Camera's ",(0,o.kt)("inlineCode",{parentName:"p"},"culling mask"),". Unselecting a particular layer in the Camera's culling mask property will omit it from being rendered in the Game Scene. Our focus now is the second point: layer-based collision. We need to decide what can collide with which object. For example, we:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Do not need Unity to compute collision between the Pipe's top head with the pipe's body"),(0,o.kt)("li",{parentName:"ol"},"Do not need Unity to compute collision between the Pipe's body and the ground"),(0,o.kt)("li",{parentName:"ol"},"Do not need Unity to trigger collision between Goomba and any of the obstacles or ground")),(0,o.kt)("h3",{id:"layer-based-collision"},"Layer-based Collision"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create")," two other layers via any GameObject Inspector: ",(0,o.kt)("inlineCode",{parentName:"p"},"Enemies")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Obstacles"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Pipes")," GameObject Layer to ",(0,o.kt)("inlineCode",{parentName:"li"},"Obstacles"),"."),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Obstacles")," GameObject Layer to ",(0,o.kt)("inlineCode",{parentName:"li"},"Obstacles")," too."),(0,o.kt)("li",{parentName:"ol"},"Set all ",(0,o.kt)("inlineCode",{parentName:"li"},"Enemies")," GameObject Layer to ",(0,o.kt)("inlineCode",{parentName:"li"},"Enemies"),". ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apply it to all their ",(0,o.kt)("strong",{parentName:"p"},"children"),".")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Setting the Prefab changes via the Scene instead of Prefab Mode only applies to that instance of that Prefab. This discrepancy is highlighted clearly in the Hierarchy. You can then choose to update the prefab to follow your changes.")),(0,o.kt)("p",null,"Then open ",(0,o.kt)("strong",{parentName:"p"},"Project Settings")," (Edit >> Project Settings) and set the collision matrix as such. If you untick the boxes that means Unity will ignore collisions between those layers:"),(0,o.kt)(i.Z,{path:a(465).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"Here's the complete walkthrough:"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/collision-layer.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,o.kt)("h3",{id:"collision-with-obstacle-or-pipes"},"Collision with Obstacle or Pipes"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"PlayerMovement.cs"),", we have yet to take into account that Mario can land on top of a Pipe or a Box. This is what happens:"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/mario-cant-jump.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,o.kt)("h3",{id:"more-tags"},"More Tags"),(0,o.kt)("p",null,"We can fix that by checking for collision against ",(0,o.kt)("inlineCode",{parentName:"p"},"Obstacles")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Pipes")," too. Sure, we can ",(0,o.kt)("strong",{parentName:"p"},"add")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Tag")," to each pipe and each Goomba and do the following check:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="PlayerMovement.cs"',title:'"PlayerMovement.cs"'},'\n    void OnCollisionEnter2D(Collision2D col)\n    {\n\n        if ((col.gameObject.CompareTag("Ground") || col.gameObject.CompareTag("Enemies") || col.gameObject.CompareTag("Obstacles")) && !onGroundState)\n        {\n            onGroundState = true;\n            // update animator state\n            marioAnimator.SetBool("onGround", onGroundState);\n        }\n\n    }\n\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The usage of Tag can be controversial sometimes, with some complaining that it's not resource efficient and whatever but there's no denying that it is ",(0,o.kt)("span",{className:"orange-bold"},"convenient"),", especially in prototyping stage right now (yes, you're building a game in less than 2 months, that's just a prototype).")),(0,o.kt)("h3",{id:"layermask"},"LayerMask"),(0,o.kt)("p",null,"However, let's be a little fancier. Although Layers are essential (to avoid extra computation on collision and unwanted collision behavior, etc), we don't want to manually ",(0,o.kt)("inlineCode",{parentName:"p"},"Tag")," every GameObject in our Scene."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Please note that ",(0,o.kt)("inlineCode",{parentName:"p"},"CompareTag")," is really fast, and there's nothing wrong with the code above in terms of performance! We do not discard it for performance reason, but simply ",(0,o.kt)("em",{parentName:"p"},"preference")," and extra convenience (not having to add Tags). Making a functional game is hard enough. If you don't have performance issues, ",(0,o.kt)("strong",{parentName:"p"},"do not blatantly attempt to optimise"),". Code readability and modularity is more important that that.")),(0,o.kt)("p",null,"Every ",(0,o.kt)("strong",{parentName:"p"},"layer")," that we set the GameObject to is represented by an ",(0,o.kt)("strong",{parentName:"p"},"integer"),":"),(0,o.kt)(i.Z,{path:a(5166).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"We can then ",(0,o.kt)("strong",{parentName:"p"},"create")," a 32-bit ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/LayerMask.html"},"LayerMask"),", a ",(0,o.kt)("strong",{parentName:"p"},"one-hot")," mapping of Layer id to a 32-bit value as such:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Ground")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"0x00000008"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This translate to ",(0,o.kt)("inlineCode",{parentName:"li"},"0000 1000")," in binary (leading zeroes are omitted)"),(0,o.kt)("li",{parentName:"ul"},"The value ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," lies on the 3rd bit from the right (we count from 0, so 0th bit from the right is the LSB)"),(0,o.kt)("li",{parentName:"ul"},"You can create this binary value using leftshift operation: ",(0,o.kt)("inlineCode",{parentName:"li"},"int groundMask = 1 << 3")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Enemies")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"0x00000040")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Obstacles")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"0x00000080"))),(0,o.kt)("p",null,"To check if ",(0,o.kt)("inlineCode",{parentName:"p"},"LayerX")," hits ",(0,o.kt)("inlineCode",{parentName:"p"},"LayerY"),", we simply perform a bitwise ",(0,o.kt)("inlineCode",{parentName:"p"},"AND")," between them and check if the resulting value is ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mo",{parentName:"mrow"},">"),(0,o.kt)("mn",{parentName:"mrow"},"0")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},">0")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,o.kt)("span",{parentName:"span",className:"mrel"},">"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"0"))))),"."),(0,o.kt)("p",null,"We can modify ",(0,o.kt)("inlineCode",{parentName:"p"},"PlayerMovement.cs")," into this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="PlayerMovement.cs"',title:'"PlayerMovement.cs"'},'    //highlight-start\n    int collisionLayerMask = (1 << 3) | (1 << 6) | (1 << 7);\n//highlight-end\n    void OnCollisionEnter2D(Collision2D col)\n    {\n        //highlight-start\n\n        if (((collisionLayerMask & (1 << col.transform.gameObject.layer)) > 0) & !onGroundState)\n        {\n            onGroundState = true;\n            // update animator state\n            marioAnimator.SetBool("onGround", onGroundState);\n        }\n//highlight-end\n    }\n')),(0,o.kt)("admonition",{type:"playtest"},(0,o.kt)("p",{parentName:"admonition"},"The resulting behavior should be as follows, where Mario can now climb obstacles (both boxes and pipes):"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/mario-can-climb.mp4",widthPercentage:"100%",mdxType:"VideoItem"})),(0,o.kt)("h1",{id:"profiler"},"Profiler"),(0,o.kt)("p",null,"If you ",(0,o.kt)("em",{parentName:"p"},"really")," want to optimise your game, or feel like some part has high latency, you can use Unity's Profiler to identify the root cause of the heavy computations. Select Window >> Analysis >> Profiler, and begin recording your gameplay."),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/profiler.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,o.kt)("p",null,"Notice that it reports CPU usage at 33ms (30FPS) because we did set the game to play at 30FPS under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Start()")," method of ",(0,o.kt)("inlineCode",{parentName:"p"},"PlayerMovement.cs"),". The rest of the results are pretty straightforward to inspect. You can ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=uXRURWwabF4"},"watch the official guide")," here, but this is not part of our syllabus. We just want to show you the recommended way to even have an idea on ",(0,o.kt)("em",{parentName:"p"},"where")," to optimise instead of optimising stuffs blindly."),(0,o.kt)("h2",{id:"physics-2d"},"Physics 2D"),(0,o.kt)("p",null,"Unity's Physics 2D engine handles 2D physics and optimises them. You don't have to reinvent the wheels. In this section, we briefly introduce to you three more components: ",(0,o.kt)("strong",{parentName:"p"},"Effectors"),", ",(0,o.kt)("strong",{parentName:"p"},"Joints"),", and ",(0,o.kt)("strong",{parentName:"p"},"Materials"),". Please read the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/Physics2DReference.html"},"documentation")," for a more detailed usage."),(0,o.kt)("h3",{id:"effector2d"},"Effector2D"),(0,o.kt)("p",null,"Suppose you want to create a platform that allows only one-way collision. You can upgrade your 2DColliders to be used with a new component called ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/Effectors2D.html"},"effectors"),". To demonstrate how this works, let\u2019s create a platform where Mario can \u201cclimb onto\u201d from underneath it but can stay upright on top of it."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Yes, World 1-1 in Super Mario Bros doesn't have this item, but we are just going to build it here for learning sake.")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"platform")," GameObject, and place it under Obstacles GameObject. Then,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"SpriteRenderer")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"moving_platform_6")," as sprite"),(0,o.kt)("li",{parentName:"ol"},"Add EdgeCollider2D and place it just at the top edge of the sprite. Tick the ",(0,o.kt)("inlineCode",{parentName:"li"},"Used By Effector")," property"),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"PlatformEffector2D")," and set the ",(0,o.kt)("inlineCode",{parentName:"li"},"SurfaceArc")," to 180, and ",(0,o.kt)("inlineCode",{parentName:"li"},"OneWay")," property ticked"),(0,o.kt)("li",{parentName:"ol"},'Set its layer to "Obstacles". Even though ',(0,o.kt)("inlineCode",{parentName:"li"},"Obstacles")," parent GameObject has its layer set as ",(0,o.kt)("inlineCode",{parentName:"li"},"Obstacles"),", this does not automatically propagate to its children all the time.")),(0,o.kt)(i.Z,{path:a(6487).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("admonition",{type:"playtest"},(0,o.kt)("p",{parentName:"admonition"},"Try jumping onto the brick and onto the platform from right underneath the platform. You should notice that Mario can\u2019t jump onto the brick from underneath it, while he can do so on the platform.\nYou shall experiment with other effectors and their properties as well so that you know what features are supported or suitable for your game idea: some kind of boost, buoyancy, etc. Effectors is what you can use if you try to implement a ",(0,o.kt)("strong",{parentName:"p"},"pinball")," game with many different areas that can affect the kinematics of the ball .")),(0,o.kt)("h3",{id:"physicsjoint2d"},"PhysicsJoint2D"),(0,o.kt)("p",null,"The question boxes should bounce when Mario collides with it from below, then turn into an empty box. We can do this easily by creating an Animation Clip, but where's the fun in that? Let's simulate it with a spring. Unity provides us with various useful ",(0,o.kt)("strong",{parentName:"p"},"joints"),". It will save you so much time if you want to implement any basic joints: hinge, spring, slider, wheel, etc."),(0,o.kt)("h3",{id:"springy-question-box"},"Springy Question Box"),(0,o.kt)("p",null,"Unpack one of the Question Box prefabs on your scene, then create a parent GameObject to it (name it ",(0,o.kt)("inlineCode",{parentName:"p"},"Question-Box-Spring")," or whatever you like) as follows, with ",(0,o.kt)("inlineCode",{parentName:"p"},"RigidBody2D")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Static")," body type. This will be the ",(0,o.kt)("strong",{parentName:"p"},"anchor")," of your spring."),(0,o.kt)(i.Z,{path:a(449).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"Then, add ",(0,o.kt)("inlineCode",{parentName:"p"},"RigidBody2D")," to the question box. Also make sure that its Transform position is at ",(0,o.kt)("inlineCode",{parentName:"p"},"(0,0,0)")," (means no relative coordinate wrt parent object). ",(0,o.kt)("span",{className:"orange-bold"},"This is important to set your spring Anchor properly later"),". Enable ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto Mass")," to reduce our headache in deciding what the box's mass should be, let Unity standardize it based on the size of the Collider2D element attached to the GameObject. Finally, ",(0,o.kt)("strong",{parentName:"p"},"constant")," ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," position and ",(0,o.kt)("inlineCode",{parentName:"p"},"Z")," rotation. We only want our box to bounce up and down along the Y-axis."),(0,o.kt)("p",null,"Then, add ",(0,o.kt)("inlineCode",{parentName:"p"},"SpringJoint2D")," component, and set the properties as follows:"),(0,o.kt)(i.Z,{path:a(3804).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"Here's a further explanation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We connect the spring to parent's static Rigidbody, and ",(0,o.kt)("strong",{parentName:"li"},"disable")," collision with it (we want this invisible anchor)"),(0,o.kt)("li",{parentName:"ol"},"We set the ",(0,o.kt)("inlineCode",{parentName:"li"},"Connected Anchor")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"(0,1)")," (this is local position). That means to set the connected anchor to ",(0,o.kt)("inlineCode",{parentName:"li"},"Question-Box-Bounce")," at 1-y distance away from this GameObject as shown on the Scene"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Distance")," is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," because we don't want the spring to shorten once the game starts"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Frequency")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Damping Ratio"),' affects the "feel" of the spring')),(0,o.kt)("admonition",{type:"playtest"},(0,o.kt)("p",{parentName:"admonition"},"You should try out different property values for ",(0,o.kt)("inlineCode",{parentName:"p"},"Frequency")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Damping Ratio")," to get the right feel:"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/bouncy.mp4",widthPercentage:"100%",mdxType:"VideoItem"})),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("span",{className:"orange-bold"},"Note that all values in the inspector that you change during Play mode will disappear"),". Make sure you only change these variables for testing purposes only, and set it later after you stop the game."),(0,o.kt)("p",null,"Once you are satisfied, set ",(0,o.kt)("inlineCode",{parentName:"p"},"Question-Box-Bounce")," as a prefab."),(0,o.kt)("h3",{id:"physics-material-2d"},"Physics Material 2D"),(0,o.kt)("p",null,"We can ",(0,o.kt)("strong",{parentName:"p"},"create")," a Physics Material to adjust the friction and bounce of 2D objects when the collide, then ",(0,o.kt)("strong",{parentName:"p"},"attach"),' it to our collider. We don\'t really need it in this game, but for demonstration purposes, lets create some "bouncy cloud" (called ',(0,o.kt)("a",{parentName:"p",href:"https://mario.fandom.com/wiki/Lakitu%27s_Cloud"},"Lakitu's cloud"),") for Mario. Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Materials")," folder in the Project Window. Then, right click and select Create >> 2D >> Physics Material 2D:"),(0,o.kt)(i.Z,{path:a(5303).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"Set the newly created material ",(0,o.kt)("inlineCode",{parentName:"p"},"Bounciness")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," (max value is 1, no loss of energy). Then, create a GameObject called ",(0,o.kt)("inlineCode",{parentName:"p"},"Bouncy-Cloud")," (",(0,o.kt)("a",{parentName:"p",href:"https://www.dropbox.com/scl/fi/kcyt9b3b2aqvq3oa0jpv0/lakitus-cloud.png?rlkey=bn9udbz2zcc68w3zounykpdhg&dl=0"},"download the Sprite here"),") with the following components and Layer. Hook up your newly created bouncy material in its Collider:"),(0,o.kt)(i.Z,{path:a(5288).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("admonition",{type:"playtest"},(0,o.kt)("p",{parentName:"admonition"},"Well, that's a bouncy cloud."),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-2/bouncy-cloud.mp4",widthPercentage:"100%",mdxType:"VideoItem"})))}u.isMDXComponent=!0},2665:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-04-09-52-37-84ecaf85bb7fb97f1cf6c74e5ad318d0.png"},935:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-04-10-13-41-574c80c00894b2d89e37f9dc37edcd87.png"},9103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-05-10-33-49-43186b1e59d1c69c4b5e2c3516462d75.png"},8390:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-05-10-38-05-6859398fa250609a03964272f3e8efa3.png"},465:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-05-10-55-40-624bfeaea856bcc9c266ac50f96f67f5.png"},5166:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-05-11-27-12-7eed1d6ab10ea226c50a558e750907ef.png"},6487:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-05-12-59-58-e40d035041a8adc16be014eddf54690d.png"},1805:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-05-13-06-23-67105d27103b4b197477812dc0c05450.png"},449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-05-13-15-48-2637445f51859d3ff39c126fbcf0fedf.png"},3804:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-05-13-18-18-6a3288962475f402056887e110960987.png"},5303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-05-13-44-06-eb97cfb1337dd1f5bb8f0b9ec34169d5.png"},5288:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-05-13-46-46-ea0977315d50333c7352c21d13fed1e6.png"}}]);