<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello there!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Taha Fersi</strong>, a software developer with 8 years of experience.<br/>
        I am also a video game enthusiast since my early childhood, and that's why I mainly specialize in game development (mostly gameplay programming, on the client with Unity or Unreal Engine and on the server in Java, or tool development using either Unity, C#/WPF or Angular/Electron).<br>
        I also have experience, as a web developer, in both front and back ends.
      </div>

      <div style="margin-top: 20px;">During those first years of <router-link to="/resume">my professional journey</router-link>, I worked on <router-link to="/game-projects">game-related projects</router-link>(either games or gamified projects using game development technologies), and <router-link to="/other-projects">non-game projects</router-link>.</div>

      <div style="margin-top: 40px;">I'm currently working as a freelance gameplay programmer on Knight Arena, an MMORPG built on the Atavism engine. You can reach me at <a href="mailto:tictacf12@gmail.com">tictacf12@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Taha" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>


<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>
