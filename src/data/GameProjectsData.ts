import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "The Black Swan", "img/projects/bs/bs.webp",
        `
    <div class="paragraph">
     <strong>The Black Swan</strong> is an action rogue-like game that follows a dungeon-crawler formula and features a unique skill-casting system.  
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/RigHVhaA9o4" frameborder="0" allowfullscreen></iframe>
    </div>
    <br/><strong>The Black Swan</strong> is being developed by a team of three individuals using <strong>Unity 2022</strong>. You can keep up with the game's development progress by following the team's Twitch channel at the following channel:
    <div class="paragraph center">
        <a href="https://www.twitch.tv/theblackswandev" target="_blank"><img src="img/projects/twitch-logo.png" alt="Play Store badge" /></a>
    </div>

    <div class="paragraph">
        Main features:
        <ul>
        <li>Original skill casting and targeting system</li>
        <li>Different characters with unique passives and starting items</li>
        <li>Randomized room enemies and rewards based on conditional pools</li>
        <li>Diverse enemies with different patterns</li>
        <li>Challenging boss fights</li>
        <li>Modifiers-based skills and equipment, coupled with a rich crafting system</li>
        </ul>
    </div>

    <!--<div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/300x534/" alt="Room battle 1" />
        <img class="pc-screenshot" src="https://fakeimg.pl/300x534/" alt="Room battle 2" />
        <img class="pc-screenshot" src="https://fakeimg.pl/300x534/" alt="Slime boss" />
        <img class="pc-screenshot" src="https://fakeimg.pl/300x534/" alt="Spider boss" />
        <img class="pc-screenshot" src="https://fakeimg.pl/300x534/" alt="Craft & inventory" />
    </div>-->
    `, "#000000"),
    new ProjectData("project-2", "Magicmind", "img/projects/mm/magic-mind.webp", `
    <div class="paragraph">
        <strong>Magicmind</strong> is a wellness platform that harnesses the power of gaming technology to propose an entertaining wellness experience via gamified meditations, breathwork, and other wellness activities.
    </div>
    <div class="paragraph">
        <strong>Magicmind</strong> is accessible via applications targeting various platforms, like <strong>Mobile</strong>, <strong>Web</strong>, and <strong>VR headsets</strong>.
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Personalized experience training for users</li>
        <li>Gamified wellness activities, like breathwork and meditation</li>
        <li>Teachers to students approach</li>
        <li>Dedicated access for teachers and wellness content creators to create their wellness courses and adapt them to the gamified approach to propose them to the users.</li>
        <li>Sacred Verse: A wellness dedicated metaverse. An immersive wellness experience that helps bring together teachers and students.</li>
        </ul>
    </div>

    <!-- <div class="paragraph">
    <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    </div>
    </div> -->

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/mm/mm1.jpg" alt="Breathwork Creator" />
    <img class="pc-screenshot" src="img/projects/mm/mm2.webp" alt="Dashboard" />
    <img class="pc-screenshot" src="img/projects/mm/mm3.jpg" alt="Magic Verse" />
    </div>
    <div class="paragraph">
    <div class="notice">
        Since the project is still in development and protected by an NDA, I can't give more details about the activities and the technologies used. However, you can look for further information on the official website: <a href="https://magicmind.me" target="_blank">magicmind.me</a>.
    </div>
    </div>
    `, "#000000"),
    new ProjectData("project-3", "09", "img/projects/09/09.webp", `
    <div class="paragraph">
        Started as a Game Jam Project, then Developed into a full game at <strong>INSTEAD</strong>, <strong>09</strong> is a casual mobile game that challenges players' mental calculation abilities. The game proposes multiple game modes with different mechanics.
        <br/> This project was developed using the Unity engine. I worked on this project from its game design conception at the Game Jam until the ad <strong>mediation API</strong> and the <strong>Google services API</strong> integration, passing through the gameplay and the UI programming.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/uUz5W1N0oDM" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://www.amazon.com/instead-09-Calculation-Math-Game/dp/B07YSRNVQ3" target="_blank"><img src="img/projects/amazon.png" alt="MS Store button" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Solo mode: A scoring mode where the player races the timer to reach more milestones and realize a better score. The player has multiple milestones he can try to get in any order he wants depending on the following numbers he'll have to use in his operations and on the milestones effects(freeze timer, higher score bonus, change milestones, or score multiplicator).</li>
        <li>Duel Mode: A versus, head-to-head, two players on the same devise mod. Players must use the best operation with the given number or pass it to the opponent. The players can also manipulate the subsequent numbers assigned to them or their opponent. Both players start with 0, and the first to reach the objective number wins.</li>
        <li>Challenge Mode: A solo player levels-based puzzle mode. In every level, the player will be given a specific set of numbers and need to figure out the best way to use them to reach the level's objective.</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/09/09Solo.webp" alt="Solo Mode" />
        <img class="phone-screenshot" src="img/projects/09/09Dual.webp" alt="Duel Moode" />
        <img class="phone-screenshot" src="img/projects/09/09Challenge.webp" alt="Challange Mode" />
    </div>
    `, "#2095f2", true),
    new ProjectData("project-4", "Kingdom of No One", "img/projects/kono/kono.webp", `
    <div class="paragraph">
    <strong>Kingdom of No One</strong> is an in-development <strong>RPG/Roguelike</strong> Indie Game project that puts you in the shoes of a king embarking on a journey through a decaying kingdom he used to govern. Now, he has nothing left in this world but to atone for his sins.
    <br/> Mainly inspired by <strong>FTL: Faster Than Light</strong> and <strong>The Darkest Dungeon</strong>, this project also aims to put the story at the heart of a roguelike game.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/5kGtcWJ7Vns" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph"> 
        I Worked on this project from conception in almost every aspect of it. I especially worked on the original turn-based combat system design and implementation and the data design. I created multiple tools for data entering: Two <strong>C#/WPF</strong> to enter the data of events, choices, rewards, Mercenaries, equipment, enemies, etc. And one <strong>Unity</strong> tool to enter the map data.
    </div>
    
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/kono/kono-fight.webp" alt="Queues based battle system" />
        <img class="pc-screenshot" src="img/projects/kono/kono-tool-event.webp" alt="Quests and events tool" />
        <img class="pc-screenshot" src="img/projects/kono/kono-tool-battle.webp" alt="Game date (equipement, mercenaries, ennemies, etc) tool" />
        <!-- <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Map generation tool" /> -->
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Original turn-based combat system: The player must arrange his mercenaries in a queue to fight his enemy unit's queue and protect his caravan.</li>
        <li>Procedurally generated maps: The game's map is divided into various regions. Every region is composed of procedurally generated and arranged hexagonal cells (using <strong>XML</strong> input created in a separate <strong>Unity</strong> tool project).</li>
        <li>Non-linear adventure: The player can choose his path to the final destination through multiple paths and different regions.</li>
        <li>Variable events and sub-quests with multiple choices and consequences</li>
        <li>Team and resources management</li>
        <li>Beautiful pixel art style</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/kono/kono-map.webp" alt="Procedurally generated map" />
        <img class="pc-screenshot" src="img/projects/kono/kono-UI.webp" alt="Mercenary UI" />
        <img class="pc-screenshot" src="img/projects/kono/kono-dialog.webp" alt="Event with choices" />
    </div>
    `, "#791625"),
    new ProjectData("project-5", "Swift Touches", "img/projects/st/swift-touches-thmb.webp", `
    <div class="paragraph">
        <strong>Swift Touches</strong> is a Unity casual game developed by <a href="https://www.linkedin.com/in/ahmedbenlakhdhar/" target="blank"><strong>Ahmed Benlakhdhar</strong></a> as a game jam project and then published on <strong>Google Play</strong> and the <strong>Amazon App Store</strong>. It's a versus game on a single device where every player needs to be the first to touch the screen when his color appears.
        I participated in the development by helping finalize the game for publishing and integrating the ads API.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/VK0zVoBkgSw" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://www.amazon.com/RABIT-Swift-Touches/dp/B014HZFDY6" target="_blank"><img src="img/projects/amazon.png" alt="MS Store button" /></a>
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>2-player game Local split-screen (played on one device)</li>
        <li>Smooth, fast and intense reflex-based duels</li>
        <li>Interactive tutorial</li>
        <li>Dynamic soundtrack</li>
        <li>Simple yet smooth and colorful graphics</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/st/st-mm.webp" alt="Main Menu" />
        <img class="phone-screenshot" src="img/projects/st/st-cs.webp" alt="Color Select" />
        <img class="phone-screenshot" src="img/projects/st/st-dual.webp" alt="Dual" />
        <img class="phone-screenshot" src="img/projects/st/st-end.webp" alt="Player 1 Wins" />
    </div>`, "#fc9026", true),
    new ProjectData("project-6", "MixOkay", "img/projects/mixok/Mixok.webp", `
    <div class="paragraph">
        <strong>MixOkay</strong> is a mathematic-based puzzle game developed on Unity during my internship at <strong>DigitalMania</strong>. The game's goal is to mix cells to make the most lines of the same number in a grid of 5*5 numbers before the end of the timer. The game targets the <strong>Web</strong> and <strong>mobile platforms</strong>.
        I did most of the programming on this game; I programmed the gameplay, the UI, and the tutorial.        
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/FoxE0l2QIIQ" frameborder="0" allowfullscreen></iframe>
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Original mathematic, reflexion-based game</li>
        <li>Progressive difficulty: The more lines you realize, the more difficult it is to make other lines.</li>
        <li>Step-by-step tutorial</li>
        <li>Every starting grid has a seed. Players can play a particular grid by inputting its seed.</li>
        <li>Playable in 2 languages (French and English)</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/mixok/mixokay-config.webp" alt="Mixokay Grid Configuration " />
        <img class="phone-screenshot" src="img/projects/mixok/mixok-gameplay.webp" alt="Mixokay Game" />
    </div>`, "#052189", true),
    new ProjectData("project-7", "Thoughts", "img/projects/thoughts/Thoughts.webp", `
    <div class="paragraph">
        This bizarre Unity game jam project was developed in the <strong>Global Game Jam 2015</strong>, which had the theme "What do we do now?". As that theme suggests, <strong>Thoughts</strong> is a kind of puzzle game where the player consistently asks himself that question. Every level of this game is different, and at the start of each level, the player needs to figure out how to interact with the level to understand what to do to get to the next level.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/6nViHoXay8g" frameborder="0" allowfullscreen></iframe>
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Reflexion game</li>
        <li>Diffrent game mecanics. Every level is diffrent</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
        You can try this game by downloading it from the <a href="https://v3.globalgamejam.org/2015/games/thoughts" target="_blank">Game Jam archive</a>.
        </div>
    </div>
    `, "#78b103",),
    new ProjectData("project-8", "GearVR Playroom", "img/projects/gear/gearVR-thumb.webp", `
    <div class="paragraph">
    Developed within a team of 3 during my end-of-study internship at <strong>DigitalMania</strong>, <strong>GearVR Playroom</strong> is a multiplayer social VR experience for <strong>GearVR</strong>. The idea was to create a virtual room where multiple <strong>GearVR</strong> users could meet to chat and do various activities. My responsibility within this project was to implement the voice chat functionality. For that, I used <strong>RakVoice</strong>, a feature of the <strong>RakNet C++</strong> networking middleware, and implemented it in <strong>Unity</strong> by creating a plugin to access it.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Multiplayer VR experience</li>
        <li>Ingame Voice Chat</li>
        </ul>
    </div>

    <!--<div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    </div>-->
    `, "#ff768e"),
    new ProjectData("project-9", "Garcito", "img/projects/garcito/garcito.webp", `
    <div class="paragraph">
    Developed at <strong>DigitalMania</strong> as an advergame for the sparkling water brand <strong>Garci</strong>, <strong>Garcito</strong> is a <strong>Pacman</strong> clone for <strong>Facebook</strong>, created on <strong>Unity3D</strong>. I helped develop this game during my end-of-study internship, particularly by implementing simple AI for the ghosts.
    </div>    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/5HjppgEKoF0" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#124234"),
    // new ProjectData("project-10", "Snake", "img/projects/project-5-icon.png", `
    // <div class="paragraph">
    // This personal project was one of the first games I worked on with friends during my first years of university. This project aims to emulate the <strong>Snake</strong> game of the retro handheld brick game consoles. 
    // <br/>This project was developed using <strong>Adobe Flash</strong> and <strong>ActionScript 3</strong>.
    // </div>    
    // <div class="paragraph center">
    //     <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    // </div>
    // `, "#757653"),
    new ProjectData("project-12", "Illusion", "img/projects/illusion/Illusion.webp", `
    <div class="paragraph">
    <strong>Illusion</strong> is a project I worked on during an internship at <strong>Placeholder</strong>. It's a puzzle game for <strong>Android</strong> platforms inspired by the popular indie game <strong>Monument Valley</strong>. The game is based on the possibility of rotating the levels to change the perspective and find new ways to progress in the 3D isometric environment. 
    <br/> I worked on the game design of this project and its Unity3D development.
    </div>
    <div class="paragraph">
        Main features :
        <ul>
        <li>3D isometric environments</li>
        <li>Rotate the level to change the perspective and create new paths</li>
        <li>Point and click to move the character</li>
        <li>Pathfinding depends on the current perspective to determine if the character's move is possible.</li>
        <li>Background graphics that change depending on level rotation</li>
        </ul>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/PI7HWDqsP5w" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#a54738"),
    new ProjectData("project-11", "Bugs", "img/projects/bugs/bugs.webp", `
    <div class="paragraph">
    This academic project is one of the first original game projects I worked on on <strong>Unity3D</strong>, and it's where I started honing my skills in designing and implementing gameplay mechanics and character animations. <strong>Bugs</strong> is a two-player turn-based tactical versus game, where each player controls a team of 3 cybernetic bugs and tries to use them to destroy the opponent team. Every bug has two mods, one for movement and one for attacking, and every bug type has a unique attack pattern.
    </div>    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/v6Uv5MARa9U" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#43393c"),
    new ProjectData("project-13", "Space War", "img/projects/space/SpaceWar-thumb.webp", `
    <div class="paragraph">
    This academic project is a classic <strong>Shoot 'em up</strong> where the player needs to defend the earth a ainst waves of alien invaders. 
    <br/>This game was developed using the <strong>HTML5/javascript</strong> game framework, <strong>Phaser 2</strong>, targeting the mainly the <strong>Samsung smart TV</strong> platform.
    </div>    
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/space/SpaceWar.webp" alt="Wave 1" />
        <img class="pc-screenshot" src="img/projects/space/SpaceWar2.webp" alt="Wave 6" />
    </div>
    `, "#083170"),
];