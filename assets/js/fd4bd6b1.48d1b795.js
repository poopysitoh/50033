"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[8292],{8794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var a=n(7462),o=(n(7294),n(3905)),i=(n(1694),n(6596)),r=n(6533),s=(n(505),n(1496)),l=n(4866),p=n(5162);const c={sidebar_position:2},d="C# Quick Tour",m={unversionedId:"children/static",id:"children/static",title:"C# Quick Tour",description:"Quick Tour",source:"@site/docs/04-children/static.md",sourceDirName:"04-children",slug:"/children/static",permalink:"/50033/docs/children/static",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"The Singleton Pattern",permalink:"/50033/docs/children/singletons"},next:{title:"Scriptable Objects",permalink:"/50033/docs/children/scriptableobjects"}},u={},h=[{value:"C# Static Variable",id:"c-static-variable",level:2},{value:"Utilise <code>static instance</code> with Singleton",id:"utilise-static-instance-with-singleton",level:3},{value:"Remove Mario and HUDManager Singleton",id:"remove-mario-and-hudmanager-singleton",level:3},{value:"Restart Button",id:"restart-button",level:3},{value:"Setting Score Upon Scene Change",id:"setting-score-upon-scene-change",level:3},{value:"C#: Interface",id:"c-interface",level:2},{value:"Interactive Button",id:"interactive-button",level:3},{value:"Powerups",id:"powerups",level:3},{value:"C#: Properties",id:"c-properties",level:2},{value:"C#: <code>enums</code>",id:"c-enums",level:2},{value:"C#: Abstract Class",id:"c-abstract-class",level:2},{value:"Abstract Keyword",id:"abstract-keyword",level:3},{value:"Virtual Keyword",id:"virtual-keyword",level:3},{value:"New Keyword",id:"new-keyword",level:3},{value:"<code>override</code> vs <code>new</code>",id:"override-vs-new",level:3},{value:"Implement Powerups",id:"implement-powerups",level:2},{value:"Important Notes",id:"important-notes",level:3}],g={toc:h},k="wrapper";function b(e){let{components:t,...c}=e;return(0,o.kt)(k,(0,a.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"c-quick-tour"},"C# Quick Tour"),(0,o.kt)("p",null,"We shall refactor our existing game further so that it becomes more modular and maintainable, especially when we want to create multiple ",(0,o.kt)("strong",{parentName:"p"},"scenes")," (stages) in our game."),(0,o.kt)("h2",{id:"c-static-variable"},"C# Static Variable"),(0,o.kt)("p",null,"When a variable is declared as static, then a ",(0,o.kt)("strong",{parentName:"p"},"single")," copy of the variable is created and shared among all objects at the class level. Static variables are accessed with the ",(0,o.kt)("strong",{parentName:"p"},"name")," of the class, they do not require any instance for access. In the Singleton class, we define ",(0,o.kt)("inlineCode",{parentName:"p"},"instance")," getter and setter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"    private static T _instance;\n    public static T instance\n    {\n        get\n        {\n            return _instance;\n        }\n    }\n")),(0,o.kt)("h3",{id:"utilise-static-instance-with-singleton"},"Utilise ",(0,o.kt)("inlineCode",{parentName:"h3"},"static instance")," with Singleton"),(0,o.kt)("p",null,"This allows any Singleton to be referenced directly by other scripts as such:"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"1",label:"PlayerMovement.cs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="PlayerMovement.cs"',title:'"PlayerMovement.cs"'},"\n    void Awake(){\n        // other instructions\n        //highlight-start\n        // subscribe to Game Restart event\n        GameManagerWeek4.instance.gameRestart.AddListener(GameRestart);\n        //highlight-end\n    }\n\n"))),(0,o.kt)(p.Z,{value:"2",label:"EnemyManager.cs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"    void Awake()\n    {\n        // other instructions\n        //highlight-start\n        GameManagerWeek4.instance.gameRestart.AddListener(GameRestart);\n    //highlight-end\n    }\n\n"))),(0,o.kt)(p.Z,{value:"3",label:"HUDManager.cs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"\n    void Awake()\n    {\n        // other instructions\n        //highlight-start\n        // subscribe to events\n        GameManagerWeek4.instance.gameStart.AddListener(GameStart);\n        GameManagerWeek4.instance.gameOver.AddListener(GameOver);\n        GameManagerWeek4.instance.gameRestart.AddListener(GameStart);\n        GameManagerWeek4.instance.scoreChange.AddListener(SetScore);\n        //highlight-end\n\n    }\n")))),(0,o.kt)("p",null,"This way, we ",(0,o.kt)("span",{className:"orange-bold"},"remove")," references to ",(0,o.kt)("inlineCode",{parentName:"p"},"PlayerMovement")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EnemyManager")," instance from ",(0,o.kt)("inlineCode",{parentName:"p"},"GameManager")," Singleton, going from here:"),(0,o.kt)(r.Z,{path:n(2753).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"... to here:"),(0,o.kt)(r.Z,{path:n(7555).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We need to ensure that GameManager Singleton is created ",(0,o.kt)("em",{parentName:"p"},"before")," we try to reference ",(0,o.kt)("inlineCode",{parentName:"p"},"instance")," in each ",(0,o.kt)("inlineCode",{parentName:"p"},"Awake()")," function via other scripts above. Ensure your order of execution prioritizes GameManager first:"),(0,o.kt)(r.Z,{path:n(5899).Z,widthPercentage:"100%",mdxType:"ImageCard"})),(0,o.kt)("h3",{id:"remove-mario-and-hudmanager-singleton"},"Remove Mario and HUDManager Singleton"),(0,o.kt)("p",null,"We can then ",(0,o.kt)("span",{className:"orange-bold"},"only")," put GameManager under ",(0,o.kt)("inlineCode",{parentName:"p"},"DontDestroyOnLoad"),", while the rest of the objects (Mario, Canvas, Enemies, etc) can remain normal (new instance per scene). A few housekeeping:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure that Mario does ",(0,o.kt)("strong",{parentName:"li"},"not")," refer to GameManager instance on the scene, ",(0,o.kt)("span",{className:"orange-bold"},"all")," references to ",(0,o.kt)("inlineCode",{parentName:"li"},"GameManager")," should be obtained via ",(0,o.kt)("inlineCode",{parentName:"li"},"static instance")," property."),(0,o.kt)("li",{parentName:"ol"},"Ensure that ",(0,o.kt)("inlineCode",{parentName:"li"},"GameManager")," is a ",(0,o.kt)("strong",{parentName:"li"},"root")," GameObject, best if it does NOT have any children. You can easily make a mistake referring to GameManager's children who are not Singletons")),(0,o.kt)("p",null,"Don't forget to ",(0,o.kt)("span",{className:"orange-bold"},"remove")," subscription to ",(0,o.kt)("inlineCode",{parentName:"p"},"activeSceneChanged")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"PlayerMovement.cs"),' because your Mario will not need to "reset" its position anymore in the new scene.'),(0,o.kt)("h3",{id:"restart-button"},"Restart Button"),(0,o.kt)("p",null,"Initially, the restart button is made to call ",(0,o.kt)("inlineCode",{parentName:"p"},"GameRestart")," function at that scene's GameManager instance."),(0,o.kt)(r.Z,{path:n(8913).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"You need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"GameRestart")," via script instead. Create a new script called ",(0,o.kt)("inlineCode",{parentName:"p"},"ButtonController.cs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="ButtonController.cs"',title:'"ButtonController.cs"'},"    public void ButtonClick()\n    {\n        GameManagerWeek4.instance.GameRestart();\n    }\n")),(0,o.kt)("p",null,"Then attach the script to the restart button, and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"ButtonClick()")," function as a callback."),(0,o.kt)(r.Z,{path:n(3131).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If your button somehow is ",(0,o.kt)("strong",{parentName:"p"},"not")," Clickable in ",(0,o.kt)("inlineCode",{parentName:"p"},"World-1-2"),", remember to check if you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"EventSystem")," enabled with the ",(0,o.kt)("strong",{parentName:"p"},"new")," InputSystem:"),(0,o.kt)(r.Z,{path:n(2232).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("p",{parentName:"admonition"},"Typically this will be automatically created the moment you create any interactive UI GameObject.")),(0,o.kt)("h3",{id:"setting-score-upon-scene-change"},"Setting Score Upon Scene Change"),(0,o.kt)("p",null,"You may not need to reset Mario's position anymore because you have a new Mario instance in World-1-2 that you have placed in the correct starting position. However, the GameManager must do some housekeeping:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Remove the HUD when scene changes, this used to be done at ",(0,o.kt)("inlineCode",{parentName:"li"},"Start()")," in GameManager"),(0,o.kt)("li",{parentName:"ol"},"Set the score to curent score (from World-1-1)")),(0,o.kt)("p",null,"The GameManager can now subscribe to ",(0,o.kt)("inlineCode",{parentName:"p"},"activeSceneChanged"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="GameManager.cs"',title:'"GameManager.cs"'},"using UnityEngine.SceneManagement;\n\n\n    void Start()\n    {\n\n        gameStart.Invoke();\n        Time.timeScale = 1.0f;\n        //highlight-start\n        // subscribe to scene manager scene change\n        SceneManager.activeSceneChanged += SceneSetup;\n        //highlight-end\n    }\n\n    public void SceneSetup(Scene current, Scene next)\n    {\n        gameStart.Invoke();\n        SetScore(score);\n    }\n\n")),(0,o.kt)("p",null,"If everything works right, you can then have ",(0,o.kt)("span",{className:"orange-bold"},"everything")," (HUD, Mario, GameManager) in each World independently (for testing):"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-4/singleton-static.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,o.kt)("admonition",{title:"Notable features",type:"note"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"World-1-1 works as per normal: score increase, Goomba respawn and death, coins, game restart must all work as usual"),(0,o.kt)("li",{parentName:"ol"},"World-1-2 carries over scores from World-1-1 to demonstrate persistence"),(0,o.kt)("li",{parentName:"ol"},"World-1-2 can be played independently for testing, restart and scoring works too"),(0,o.kt)("li",{parentName:"ol"},"Only GameManager is part of ",(0,o.kt)("inlineCode",{parentName:"li"},"DontDestroyOnLoad")),(0,o.kt)("li",{parentName:"ol"},"There's no ",(0,o.kt)("inlineCode",{parentName:"li"},"NullReferenceError")," on the Console"),(0,o.kt)("li",{parentName:"ol"},"There's only one Goomba for demonstration purposes in World-1-2. We have not managed Green Goombas (underground) yet")),(0,o.kt)(r.Z,{path:n(6953).Z,widthPercentage:"100%",mdxType:"ImageCard"})),(0,o.kt)("h2",{id:"c-interface"},"C#: Interface"),(0,o.kt)("p",null,"It is very common in a game to have various types of buttons, powerups, or enemies, but they should have common methods that will be called by other scripts such as ",(0,o.kt)("inlineCode",{parentName:"p"},"cast")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"consume"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"click"),", etc. To do this more uniformly, we can utilise an interface. Interface members must be ",(0,o.kt)("span",{className:"orange-bold"},"public")," by default, because they\u2019re meant to define the public API of a type, hence the name ",(0,o.kt)("span",{className:"orange-bold"},"interface"),": a contract meant to be use by other classes."),(0,o.kt)("h3",{id:"interactive-button"},"Interactive Button"),(0,o.kt)("p",null,"Let's try to create one simple interface for all interactive buttons:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="IInteractiveButton.cs"',title:'"IInteractiveButton.cs"'},"\npublic interface IInteractiveButton\n{\n    void ButtonClick();\n}\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There's no need to declare ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," in the methods")),(0,o.kt)("p",null,"Rename your ",(0,o.kt)("inlineCode",{parentName:"p"},"ButtonController.cs")," script into ",(0,o.kt)("inlineCode",{parentName:"p"},"RestartButtonController.cs"),", and create another ",(0,o.kt)("inlineCode",{parentName:"p"},"PauseButtonController.cs")," script to pause the game. Both controllers must inherit ",(0,o.kt)("inlineCode",{parentName:"p"},"IInteractiveButton")," interface:"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"1",label:"RestartButtonController.cs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\n// later on, teach interface\npublic class RestartButtonController : MonoBehaviour, IInteractiveButton\n{\n    // implements the interface\n    public void ButtonClick()\n    {\n        Debug.Log("Onclick restart button");\n        GameManagerWeek4.instance.GameRestart();\n    }\n}\n\n'))),(0,o.kt)(p.Z,{value:"2",label:"PauseButtonController.cs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"\nusing System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\nusing UnityEngine.UI;\n\npublic class PauseButtonController : MonoBehaviour, IInteractiveButton\n{\n    private bool isPaused = false;\n    public Sprite pauseIcon;\n    public Sprite playIcon;\n    private Image image;\n    // Start is called before the first frame update\n    void Start()\n    {\n        image = GetComponent<Image>();\n    }\n\n    // Update is called once per frame\n    void Update()\n    {\n\n    }\n\n    public void ButtonClick()\n    {\n        Time.timeScale = isPaused ? 1.0f : 0.0f;\n        isPaused = !isPaused;\n        if (isPaused)\n        {\n            image.sprite = playIcon;\n        }\n        else\n        {\n            image.sprite = pauseIcon;\n        }\n    }\n}\n\n")))),(0,o.kt)("p",null,"An error will be raised if we do not implement ",(0,o.kt)("inlineCode",{parentName:"p"},"ButtonClick")," method:"),(0,o.kt)(r.Z,{path:n(1700).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,o.kt)("h3",{id:"powerups"},"Powerups"),(0,o.kt)("p",null,"In Super Mario Bros, there are a few ",(0,o.kt)("a",{parentName:"p",href:"https://www.mariowiki.com/World_1-1_(Super_Mario_Bros.)"},"powerups"),". Power-ups are unique items that give special abilities to characters that use them."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Magic Mushroom"),": Upgrades Mario to Super Mario"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"1-up Mushroom")," (green mushroom): Grants Mario extra life"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Starman"),": Grants Mario invincibility for a period of time"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Coin"),': Increases score (not exactly special abilities, but something to "interact" with)')),(0,o.kt)("p",null,"The main idea is that no matter which powerup is being collected by the player, we ",(0,o.kt)("span",{className:"orange-bold"},"filtered")," and invoke the right subscribers for ",(0,o.kt)("em",{parentName:"p"},"that")," powerup:"),(0,o.kt)(r.Z,{customClass:"invert-color",path:n(4578).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"Create a new script called ",(0,o.kt)("inlineCode",{parentName:"p"},"IPowerup.cs"),", where we can declare the following interfaces:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="IPowerup.cs"',title:'"IPowerup.cs"'},"using UnityEngine;\n\npublic interface IPowerup\n{\n    void DestroyPowerup();\n    void SpawnPowerup();\n    void ApplyPowerup(MonoBehaviour i);\n\n    PowerupType powerupType\n    {\n        get;\n    }\n\n    bool hasSpawned\n    {\n        get;\n    }\n}\n\n\npublic interface IPowerupApplicable\n{\n    public void RequestPowerupEffect(IPowerup i);\n}\n")),(0,o.kt)("h2",{id:"c-properties"},"C#: Properties"),(0,o.kt)("p",null,"We can get (and set) C# properties to allow access control over class members. It's pretty straightforward to implement just like in any other programming language. This example explains itself:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"//Member variables can be referred to as fields.\nprivate  int _healthPoints;\n\n//healthPoints is a basic property\npublic  int healthPoints {\n    get {\n        //Some other code\n        // ...\n        return _healthPoints;\n    }\n    set {\n        // Some other code, check etc\n        // ...\n        _healthPoints = value; // value is the amount passed by the setter\n    }\n}\n\n// usage\nDebug.Log(player.healthPoints); // this will call instructions under get{}\nplayer.healthPoints += 20; // this will call instructions under set{}, where value is 20\n")),(0,o.kt)("p",null,"Optionally, you can have ",(0,o.kt)("inlineCode",{parentName:"p"},"private set")," instead of just ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," to disallow other classes from setting that member."),(0,o.kt)("h2",{id:"c-enums"},"C#: ",(0,o.kt)("inlineCode",{parentName:"h2"},"enums")),(0,o.kt)("p",null,"Right now we have four different types of powerups. Sure, we can use ",(0,o.kt)("em",{parentName:"p"},"tags"),", or object ",(0,o.kt)("em",{parentName:"p"},"name")," or some kind of pre-determined ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," to ",(0,o.kt)("em",{parentName:"p"},"name")," each of them but we would benefit more if we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"enum")," type as we can name them more intuitively."),(0,o.kt)("admonition",{title:"enum type",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"An enumeration type (or enum type) is a ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types"},"value type")," defined by a set of named constants of the underlying ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types"},"integral numeric")," type.")),(0,o.kt)("p",null,"Add the following code to ",(0,o.kt)("inlineCode",{parentName:"p"},"IPowerup.cs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"\npublic enum PowerupType\n{\n    Coin = 0,\n    MagicMushroom = 1,\n    OneUpMushroom = 2,\n    StarMan = 3\n}\n\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you wish, you can create two separate files: ",(0,o.kt)("inlineCode",{parentName:"p"},"IPowerup.cs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PowerupType.cs")," to physically separate the two.")),(0,o.kt)("h2",{id:"c-abstract-class"},"C#: Abstract Class"),(0,o.kt)("p",null,"Apart from sharing the same interface, each of our powerups will also share certain similar ",(0,o.kt)("strong",{parentName:"p"},"characteristics")," (properties and protected methods, or interface implementation), for instance:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Properties: ",(0,o.kt)("inlineCode",{parentName:"li"},"PowerupType type")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"GetPowerupType()")," has the same implementation no matter which Powerup implements it")),(0,o.kt)("p",null,"We can create an ",(0,o.kt)("strong",{parentName:"p"},"abstract")," base class."),(0,o.kt)("admonition",{title:"Abstract Class",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In C#, an abstract class is a class that cannot be instantiated directly but serves as a ",(0,o.kt)("strong",{parentName:"p"},"blueprint")," for other classes. It's meant to be subclassed (derived) by other classes, which provide implementations for its abstract members (methods, properties, events, and indexers). It can contain both ",(0,o.kt)("strong",{parentName:"p"},"abstract")," or ",(0,o.kt)("strong",{parentName:"p"},"concrete")," members."),(0,o.kt)("p",{parentName:"admonition"},"Abstract classes are useful for creating hierarchies of related classes while ensuring a consistent structure and behavior across those classes.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="BasePowerup.cs"',title:'"BasePowerup.cs"'},"using UnityEngine;\n\n\npublic abstract class BasePowerup : MonoBehaviour, IPowerup\n{\n    public PowerupType type;\n    public bool spawned = false;\n    protected bool consumed = false;\n    protected bool goRight = true;\n    protected Rigidbody2D rigidBody;\n\n    // base methods\n    protected virtual void Start(){\n        rigidBody = GetComponent<Rigidbody2D>();\n    }\n\n    // interface methods\n    // 1. concrete methods\n    public PowerupType powerupType\n    {\n        get // getter\n        {\n            return type;\n        }\n    }\n\n    public bool hasSpawned\n    {\n        get // getter\n        {\n            return spawned;\n        }\n    }\n\n    public void DestroyPowerup()\n    {\n        Destroy(this.gameObject);\n    }\n\n    // 2. abstract methods, must be implemented by derived classes\n    public abstract void SpawnPowerup();\n    public abstract void ApplyPowerup(MonoBehaviour i);\n}\n\n")),(0,o.kt)("p",null,"We can typically add the ",(0,o.kt)("inlineCode",{parentName:"p"},"abstract")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"virtual")," keywords on methods/properties/events etc in the base class."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Feel free to modify the above to your own usage. For instance, we added more methods to manage Game Restart event and manage Audio Source better.")),(0,o.kt)("h3",{id:"abstract-keyword"},"Abstract Keyword"),(0,o.kt)("p",null,"Methods or properties with ",(0,o.kt)("inlineCode",{parentName:"p"},"abstract")," keywords indicate that the thing being modified has a ",(0,o.kt)("em",{parentName:"p"},"missing")," or ",(0,o.kt)("em",{parentName:"p"},"incomplete")," implementation. We are ",(0,o.kt)("span",{className:"orange-bold"},"supposed")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"override")," these methods in the derived classes (otherwise there will be errors)."),(0,o.kt)("h3",{id:"virtual-keyword"},"Virtual Keyword"),(0,o.kt)("p",null,"Methods or properties with ",(0,o.kt)("inlineCode",{parentName:"p"},"virtual")," keywords means that we ",(0,o.kt)("em",{parentName:"p"},"can")," modify this method or property, and allow for it to be ",(0,o.kt)("strong",{parentName:"p"},"overridden")," in a derived class. In other words, we ",(0,o.kt)("em",{parentName:"p"},"may")," ",(0,o.kt)("inlineCode",{parentName:"p"},"override")," virtual methods if we would like to modify or extend it. We can still call the base class' method using ",(0,o.kt)("inlineCode",{parentName:"p"},"base.methodName()"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Both abstract and virtual method ",(0,o.kt)("span",{className:"orange-bold"},"cannot")," be declared as ",(0,o.kt)("inlineCode",{parentName:"p"},"private")," because they're meant to be modified by the derived class. You need to use either the ",(0,o.kt)("inlineCode",{parentName:"p"},"protected")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," keyword, but the former makes more sense as ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," methods should've been declared on the interface instead and implemented either in the base class or the derived class.")),(0,o.kt)("h3",{id:"new-keyword"},"New Keyword"),(0,o.kt)("p",null,"If your base class has implemented some concrete method and you would like to ",(0,o.kt)("span",{className:"orange-bold"},"hide")," it in your derived classes (with completely new implementation), use the ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," keyword in your method or property declaration."),(0,o.kt)("h3",{id:"override-vs-new"},(0,o.kt)("inlineCode",{parentName:"h3"},"override")," vs ",(0,o.kt)("inlineCode",{parentName:"h3"},"new")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"override")," vs ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"new")," Keyword"),(0,o.kt)("p",{parentName:"admonition"},"The override modifier ",(0,o.kt)("strong",{parentName:"p"},"extends")," the ",(0,o.kt)("strong",{parentName:"p"},"base")," class ",(0,o.kt)("strong",{parentName:"p"},"virtual or abstract")," method, and the new modifier ",(0,o.kt)("strong",{parentName:"p"},"hides")," an accessible base class method. At first glance, using concrete method implementation in the base class and calling ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," in the derived class (then using ",(0,o.kt)("inlineCode",{parentName:"p"},"base.someMethod()")," to invoke the base class method too) might seem to have the same effect as using virtual method in the base class and overriding it in the derived class. However, this is not always quite the expected behavior."),(0,o.kt)("p",{parentName:"admonition"},"TL;DR: If you're expecting ",(0,o.kt)("strong",{parentName:"p"},"standard")," polymorphism behavior, use ",(0,o.kt)("inlineCode",{parentName:"p"},"virtual")," methods in base class and ",(0,o.kt)("inlineCode",{parentName:"p"},"override")," keyword in derived classes, and call ",(0,o.kt)("inlineCode",{parentName:"p"},"base.methodName()")," wherever appropriate."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/knowing-when-to-use-override-and-new-keywords"},"Read more about when to use ",(0,o.kt)("inlineCode",{parentName:"a"},"override")," vs new ",(0,o.kt)("inlineCode",{parentName:"a"},"keyword")," here"),".")),(0,o.kt)(i.Z,{mdxType:"DeepDive"},(0,o.kt)("p",null,"The difference between the two is very apparent in this example, especially when we declare object type ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseClass")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"DerivedClass")," constructor. The output of line ",(0,o.kt)("inlineCode",{parentName:"p"},"40")," will be ",(0,o.kt)("strong",{parentName:"p"},"different")," to the output of line ",(0,o.kt)("inlineCode",{parentName:"p"},"39"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'using UnityEngine;\n\n\nclass BaseClass\n{\n    public virtual void Method1()\n    {\n        Debug.Log("Base - Method1");\n    }\n    public void Method2()\n    {\n        Debug.Log("Base - Method2");\n    }\n}\n\nclass DerivedClass : BaseClass\n{\n    public override void Method1()\n    {\n        base.Method1();\n        Debug.Log("Derived - Method1");\n    }\n    public new void Method2()\n    {\n        base.Method2();\n        Debug.Log("Derived - Method2");\n    }\n}\n\npublic class Playground : MonoBehaviour\n{\n    // Start is called before the first frame update\n    void Start()\n    {\n        // here, both methods behave similarly\n        DerivedClass dc = new DerivedClass();\n        dc.Method1();\n        dc.Method2();\n        // but here, these methods behave differently\n        //highlight-start\n        BaseClass bc = new DerivedClass();\n        bc.Method1();\n        bc.Method2();\n        //highlight-end\n    }\n\n    // Update is called once per frame\n    void Update()\n    {\n\n    }\n}\n')),(0,o.kt)("p",null,"The output is:"),(0,o.kt)(r.Z,{path:n(1106).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,o.kt)("p",null,"Notice how ",(0,o.kt)("inlineCode",{parentName:"p"},"bc.Method2()")," does ",(0,o.kt)("strong",{parentName:"p"},"not")," have any reference to ",(0,o.kt)("inlineCode",{parentName:"p"},"DerivedClass"),"' ",(0,o.kt)("inlineCode",{parentName:"p"},"Method2")," due to the ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," implementation in the derived class.")),(0,o.kt)("h2",{id:"implement-powerups"},"Implement Powerups"),(0,o.kt)("p",null,"We can now use the ",(0,o.kt)("inlineCode",{parentName:"p"},"BasePowerup")," class to create MagicMushroom powerup and we want to ",(0,o.kt)("strong",{parentName:"p"},"extend")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Start()")," virtual method in MagicMushroomPowerup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="MagicMushroomPowerup.cs"',title:'"MagicMushroomPowerup.cs"'},'\nusing System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class MagicMushroomPowerup : BasePowerup\n{\n    // setup this object\'s type\n    // instantiate variables\n    protected override void Start()\n    {\n        base.Start(); // call base class Start()\n        this.type = PowerupType.MagicMushroom;\n    }\n\n    void OnCollisionEnter2D(Collision2D col)\n    {\n        if (col.gameObject.CompareTag("Player") && spawned)\n        {\n            // TODO: do something when colliding with Player\n\n            // then destroy powerup (optional)\n            DestroyPowerup();\n\n        }\n        else if (col.gameObject.layer == 10) // else if hitting Pipe, flip travel direction\n        {\n            if (spawned)\n            {\n                goRight = !goRight;\n                rigidBody.AddForce(Vector2.right * 3 * (goRight ? 1 : -1), ForceMode2D.Impulse);\n\n            }\n        }\n    }\n\n    // interface implementation\n    public override void SpawnPowerup()\n    {\n        spawned = true;\n        rigidBody.AddForce(Vector2.right * 3, ForceMode2D.Impulse); // move to the right\n    }\n\n\n    // interface implementation\n    public override void ApplyPowerup(MonoBehaviour i)\n    {\n        // TODO: do something with the object\n\n    }\n}\n')),(0,o.kt)("p",null,"The question box that spawned the Magic Mushroom must be set into some kind of disabled state after the mushroom is spawned. You can create a simple controller for that:"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"1",label:"IPowerupController.cs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public interface IPowerupController\n{\n    void Disable();\n}\n\n"))),(0,o.kt)(p.Z,{value:"2",label:"QuestionBoxPowerupController.cs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class QuestionBoxPowerupController : MonoBehaviour, IPowerupController\n{\n    public Animator powerupAnimator;\n    public BasePowerup powerup; // reference to this question box\'s powerup\n\n    void Start()\n    {\n\n    }\n\n    // Update is called once per frame\n    void Update()\n    {\n\n    }\n\n\n    private void OnCollisionEnter2D(Collision2D other)\n    {\n        if (other.gameObject.tag == "Player" && !powerup.hasSpawned)\n        {\n            // show disabled sprite\n            this.GetComponent<Animator>().SetTrigger("spawned");\n            // spawn the powerup\n            powerupAnimator.SetTrigger("spawned");\n        }\n    }\n\n    // used by animator\n    public void Disable()\n    {\n        this.GetComponent<Rigidbody2D>().bodyType = RigidbodyType2D.Static;\n        transform.localPosition = new Vector3(0, 0, 0);\n    }\n\n\n\n}\n')))),(0,o.kt)("p",null,"Then create a simple prefab extending the bouncy question box you did in the earlier week. There are many ways to implement this prefab, here's one sample:"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-4/setup-magic-mushroom.mp4",widthPercentage:"100%",mdxType:"VideoItem"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"While the above implementation seems working at first glance, there exist one particular bug. We will fix this ",(0,o.kt)("a",{parentName:"p",href:"/50033/docs/children/coroutines#powerup-bug"},"later")," since we are not equipped for it yet.")),(0,o.kt)("h3",{id:"important-notes"},"Important Notes"),(0,o.kt)("p",null,"Note that methods that are declared on the interface are meant to be ",(0,o.kt)("strong",{parentName:"p"},"public"),": used by other instances."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SpawnPowerup")," might be called by Animators or events"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ApplyPowerup")," might be called by some PowerupManager or instances that consumes the powerup"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DestroyPowerup")," might be called after some timeout")),(0,o.kt)("p",null,"On the contrary, if you have some methods that are meant to be extended within the powerup only, then these methods should be declared in the BaseClass instead (either as abstract, virtual, or concrete methods)."),(0,o.kt)("admonition",{type:"playtest"},(0,o.kt)("p",{parentName:"admonition"},"Refactor your Coin box to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"Powerup")," and inherit ",(0,o.kt)("inlineCode",{parentName:"p"},"BasePowerup")," as well so you can have similar functionalities. You can begin by creating ",(0,o.kt)("inlineCode",{parentName:"p"},"BrickPowerupController.cs")," which implements ",(0,o.kt)("inlineCode",{parentName:"p"},"IPowerupController")," interface, because how a brick is controlled is eventually different from the question box (brick is ",(0,o.kt)("em",{parentName:"p"},"breakable")," by SuperMario). Here's an example where we can dynamically set whether the coin brick is eventually breakable (by SuperMario) or not:"),(0,o.kt)(s.Z,{path:"https://50033.s3.ap-southeast-1.amazonaws.com/week-4/powerup-coin.mp4",widthPercentage:"100%",mdxType:"VideoItem"})))}b.isMDXComponent=!0},2753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-24-11-52-07-20d87544bd7ea23a8d350831c6b022ea.png"},7555:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-24-12-02-34-79596a0c74c43f6b49fe3b18d5d1ea78.png"},8913:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-24-13-39-56-2eb94dfe7a1c100ea90455aeb38a9ba4.png"},3131:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-24-13-42-53-3d172457fd9d7c6eedd6adbe79c8bc62.png"},2232:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-24-13-44-04-a83913467a8603707b652795997fb0b4.png"},5899:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-24-14-02-56-778014739886ace60483dd42b74bc45c.png"},6953:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-24-14-16-55-fef49c7c53a6c769eee65159379a390f.png"},1700:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-25-10-42-12-192a3b6d6cf3632ef54577f8a31b2846.png"},1106:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-08-29-10-40-05-3a47b6f27d97f81aa3ba49e8fe191c0f.png"},4578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/50033-2023.drawio-aa6ef7047b00728d4fdcc5b5280180bd.png"}}]);