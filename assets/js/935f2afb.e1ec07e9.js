"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Syllabus","href":"/50033/docs/syllabus","docId":"syllabus"},{"type":"category","label":"Unity for Newborns","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation and Setup","href":"/50033/docs/newborns/installation","docId":"newborns/installation"},{"type":"link","label":"Super Mario Bros","href":"/50033/docs/newborns/basics","docId":"newborns/basics"},{"type":"link","label":"User Interface","href":"/50033/docs/newborns/ui","docId":"newborns/ui"},{"type":"link","label":"Checkoff","href":"/50033/docs/newborns/checkoff","docId":"newborns/checkoff"}],"href":"/50033/docs/category/unity-for-newborns"},{"type":"category","label":"Unity for Babies","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Animation","href":"/50033/docs/babies/animation","docId":"babies/animation"},{"type":"link","label":"Camera Movement","href":"/50033/docs/babies/camera","docId":"babies/camera"},{"type":"link","label":"Physics2D","href":"/50033/docs/babies/physics","docId":"babies/physics"},{"type":"link","label":"Checkoff","href":"/50033/docs/babies/checkoff","docId":"babies/checkoff"}],"href":"/50033/docs/category/unity-for-babies"},{"type":"category","label":"Unity for Toddlers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"The Input System","href":"/50033/docs/toddlers/management","docId":"toddlers/management"},{"type":"link","label":"The Observer Pattern","href":"/50033/docs/toddlers/observer-pattern","docId":"toddlers/observer-pattern"},{"type":"link","label":"Audio Management","href":"/50033/docs/toddlers/audio-management","docId":"toddlers/audio-management"},{"type":"link","label":"Checkoff","href":"/50033/docs/toddlers/checkoff","docId":"toddlers/checkoff"}],"href":"/50033/docs/category/unity-for-toddlers"},{"type":"category","label":"Unity for Children","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"The Singleton Pattern","href":"/50033/docs/children/singletons","docId":"children/singletons"},{"type":"link","label":"C# Quick Tour","href":"/50033/docs/children/static","docId":"children/static"},{"type":"link","label":"Scriptable Objects","href":"/50033/docs/children/scriptableobjects","docId":"children/scriptableobjects"},{"type":"link","label":"Polishing with Coroutines","href":"/50033/docs/children/coroutines","docId":"children/coroutines"},{"type":"link","label":"Checkoff","href":"/50033/docs/children/checkoff","docId":"children/checkoff"}],"href":"/50033/docs/category/unity-for-children"},{"type":"category","label":"Unity for Teens","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"ScriptableObject Game Architecture","href":"/50033/docs/teen/scriptobjgamearch","docId":"teen/scriptobjgamearch"},{"type":"link","label":"Finite State Machine","href":"/50033/docs/teen/fsm","docId":"teen/fsm"},{"type":"link","label":"Checkoff","href":"/50033/docs/teen/checkoff","docId":"teen/checkoff"}],"href":"/50033/docs/category/unity-for-teens"}]},"docs":{"babies/animation":{"id":"babies/animation","title":"Animation","description":"You can continue from where you left off in the previous Lab. Note that you need to finish the previous lab before starting on this one. In this lab we will upgrade our game by adding animation, sound effect, camera movement, and obstacles (leveraging on Unity\'s Physics2D engine) in the game.","sidebar":"tutorialSidebar"},"babies/camera":{"id":"babies/camera","title":"Camera Movement","description":"We want the Camera follow the player, but clamped so that it doesn\u2019t go out of screen too much the left or too much the right. Create a new script called CameraController.cs and declare the following variables:","sidebar":"tutorialSidebar"},"babies/checkoff":{"id":"babies/checkoff","title":"Checkoff","description":"Once you\'ve implemented everything in this handout, then for checkoff you\'re required to add these new features listed below.","sidebar":"tutorialSidebar"},"babies/physics":{"id":"babies/physics","title":"Physics2D","description":"The goal of this section is to create some obstacles (breakable boxes, platforms, static blocks, pipes) that exists in Super Mario Bros. Using this, we will learn more about Unity\'s Physics2D Engine and manage our GameObjects by creating Prefabs (a sort of reusable object).","sidebar":"tutorialSidebar"},"children/checkoff":{"id":"children/checkoff","title":"Checkoff","description":"As usual, the grading for this lab is binary (completed or not completed). This means you should implement all features above to obtain the mark. In this checkoff, the features we are looking for are: meaningful player feedback, multiple scenes in the game, some kind of persistent data (could be highscore, user setting, etc), existence of interactable powerups (can be anything that benefits the player or introduce dilemma), and properly polished game restart functionality.","sidebar":"tutorialSidebar"},"children/coroutines":{"id":"children/coroutines","title":"Polishing with Coroutines","description":"To polish our game further, we need to ensure that:","sidebar":"tutorialSidebar"},"children/scriptableobjects":{"id":"children/scriptableobjects","title":"Scriptable Objects","description":"A ScriptableObject (abbreviated as SO) is a data container that you can use to save large amounts of data, independent of class instances. An example scenario where this will be useful is when your game needs to instantiate tons of Prefab with a Script component that stores unchanging variables. We can save memory by storing these data in a ScriptableObject instead and these Prefabs can refer to the content of the ScriptableObject at runtime.","sidebar":"tutorialSidebar"},"children/singletons":{"id":"children/singletons","title":"The Singleton Pattern","description":"When we switch from one game scene to another, we will destroy all GameObjects (along with its components) in the previous scene. Sometimes we want some GameObjects to persist, or more specifically","sidebar":"tutorialSidebar"},"children/static":{"id":"children/static","title":"C# Quick Tour","description":"Quick Tour","sidebar":"tutorialSidebar"},"newborns/basics":{"id":"newborns/basics","title":"Super Mario Bros","description":"Yes, this classic game. Who doesn\'t know this game? Mario, our favourite plumber!","sidebar":"tutorialSidebar"},"newborns/checkoff":{"id":"newborns/checkoff","title":"Checkoff","description":"Once you\'ve implemented everything in this handout, then for checkoff you\'re required to add one new feature","sidebar":"tutorialSidebar"},"newborns/installation":{"id":"newborns/installation","title":"Installation and Setup","description":"We are using the following versions of Unity editor, mono, dotnet, Unity VSCode Extension, and C# VSCode extension:","sidebar":"tutorialSidebar"},"newborns/ui":{"id":"newborns/ui","title":"User Interface","description":"The most basic UI that a game typically has is score, time, lives (HP), and buttons for users to interact (exit game, start game, restart game). We will learn more about various UI components in a game (diegetic, spatial, etc) in the later weeks during lecture hours.","sidebar":"tutorialSidebar"},"syllabus":{"id":"syllabus","title":"Syllabus","description":"The contents of these labs are made to teach and stress some learning points and for mere \u201cpractice\u201d, e.g: getting used to Unity layout, terminologies, etc.","sidebar":"tutorialSidebar"},"teen/checkoff":{"id":"teen/checkoff","title":"Checkoff","description":"As usual, the grading for this lab is binary (completed or not completed). This means you should implement all features above to obtain the mark. If you\'re already experienced with Unity and would like to experiment, you\'re free to implement similar features. In this checkoff, the feature we are looking for are: usage of Scriptable Object Game Architecture, usage of Pluggable FSM (must be at least as complex as the checkoff requirements below, similar number of states and transitions etc). Show it clearly in your recording by either showing your inspector for Mario when playing the game, or show us relevant scripts on your code editor for a few seconds.","sidebar":"tutorialSidebar"},"teen/fsm":{"id":"teen/fsm","title":"Finite State Machine","description":"A pluggable state machine implemented as a ScriptableObject in Unity is a powerful way to create flexible and reusable state-based logic for your game objects. It allows you to define custom data structures and behaviors that can be shared across multiple game objects.","sidebar":"tutorialSidebar"},"teen/scriptobjgamearch":{"id":"teen/scriptobjgamearch","title":"ScriptableObject Game Architecture","description":"This amazing talk inspires the existence of this section. We simply do not have enough time (unfortunately) to go into every single detailed implementation of common concepts such as game inventory, skill tree, etc but we hope that this quick introduction will point you into the right direction in the future.","sidebar":"tutorialSidebar"},"toddlers/audio-management":{"id":"toddlers/audio-management","title":"Audio Management","description":"Audio (background music, sound effects, sound cues) is an integral part of a good game. Unity\'s audio system can import most audio file formats (.mp3, .wav), emulate sounds in 3D space, and apply filters (lowpass, highpass, etc) during runtime. There can be many audio sources in the scene, but only one AudioListener per scene can be active.","sidebar":"tutorialSidebar"},"toddlers/checkoff":{"id":"toddlers/checkoff","title":"Checkoff","description":"As usual, the grading for this lab is binary (completed or not completed). This means you should implement all features above to obtain the mark. If you\'re already experienced with Unity and would like to experiment, you\'re free to implement similar features. In this checkoff, the feature we are looking for are: meaningful usage of the use of AudioMixer in the game, and allowing the player to increment some kind of score or stats after overcoming an obstacle (can be enemies or alike), as well as utilisation of the Observer Pattern.","sidebar":"tutorialSidebar"},"toddlers/management":{"id":"toddlers/management","title":"The Input System","description":"The main purpose of this Lab is to introduce a few tools that can be used to manage the game better. For example, right now we have game states spread all over various scripts, audio source spread everywhere on each object, hard-to-read game logic, etc. We can improve the structure of the game better with the help of AudioMixer, ScriptableObject, Unity Event, and a few other C# basics like Coroutines, Async functions, Singletons, and many more.","sidebar":"tutorialSidebar"},"toddlers/observer-pattern":{"id":"toddlers/observer-pattern","title":"The Observer Pattern","description":"The Observer Pattern is a software design pattern that allows you to create modular game logic that is executed when an event in the game is triggered. It typically works by allowing observers, in this case, other scripts, to subscribe one or more of their own functions to a subject\u2019s event.","sidebar":"tutorialSidebar"}}}')}}]);