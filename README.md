<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Prasenjit-3433/Spock-Rock-Game">
    <img src="player.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Spock Rock Game</h3>

  <p align="center">
    A JavaScript based Spock Rock Game feat. Confetti.js, Modules
    <br />
    <a href="https://github.com/Prasenjit-3433/Spock-Rock-Game"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://videoplayerinjs.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/Prasenjit-3433/Spock-Rock-Game/issues">Report Bug</a>
    ·
    <a href="https://github.com/Prasenjit-3433/Spock-Rock-Game/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#implementation">Implementation</a></li>
    <li><a href="#feature">Features</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## 🙋 About The Project

 ![Screenshot]()






When looking for an online video player for your website, you might hear the names YouTube and Vimeo before any else. That’s because these are quick, easy, and free options readily available to you. However, if you want more control over your video assets, how they are displayed, and want to learn how users interact with your content and engage with it, you might need a private HTML5 video player.

Flash-based players have become less popular now and HTML5 video players have become the new industry standard. For facilitating seamless integration on your website, this is suggested best online video player for you! :smile:

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### 🛠 Built With

* ![HTML](https://img.shields.io/badge/HTML5-f06529?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS](https://img.shields.io/badge/CSS3-2965f1?style=for-the-badge&logo=CSS3&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=JavaScript&logoColor=323330)
* ![Confetti.js](confetti.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## 🚀 Getting Started

This is an example of how you may start on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Live Server Extension
  ![Live-Server](Screenshot%202022-08-30%20133644.png)

### Installation

1. First of all install `Live Server` extension by `Ritwick Dey`.
2. Once the extension was installed, then `right-click` on `index.html` and select `Open with Live Server`.
3. It'll open a new tab in browser & start serving the video player. Enjoy!.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## 🏗️ Implementation

* First of all, we need to gather all `functional requirements` of the game like:
*  <details>
    <summary>Functional Requirements:</summary>
    <ol>
      <li>Two players play the game by each picking a symbol randomly: the selected symbols determine who the winner is.</li>
      <li>
        <p>The allowed moves are Paper, Rock, Scissors, Lizard, Spock and they interact as follows:        
           “Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, rock crushes scissors.”</p>
      </li>
      <li>If both players pick the same symbol, your application will not select a winner and declare the game a tie</li>
    </ol>
  </details>
  
![game-cycle](functions.jpg)

* Then break the whole game into small `Ui Components` & start building indivisual components.
<details>
<summary>Ui Components:</summary>
<ol>
<li>
    <details>
      <summary>Game Board</summary>
      <ul>
        <li>The whole game'll be inside of a Game-Board which receives certain width on different viewports.</li>
        <li>There'll be two players: User & Computer.</li>
        <li>The icons are outsourced from FontAwesome's regular icon collection & Each icon represents a player's move </li>
        <li>The player container divided into two sections - one for User & one for computer.</li>
        <li>Each section'll contain "player-name" followed by "score" and then "name-of-the-choice" the player selects. </li>
        <li>Next, all the "move-icons" sits in line.</li>
      </ul>
    </details>
  </li>
  </li>
  <li>
    <details>
      <summary>Player's Move Icon</summary>
      <ul>
        <li>For user's selection, when user click on an icon, it's color turns into black & updates the "name-of-the-choice" portion from "choice" (by-default) to the selected one.</li>
        <li>Before allowing user to click again, the game board automatically reset previous choices of both player and computer.</li>
        <li>Here "Switch Statement" is used to implement such feature.</li>
        <li>For computer's choice, generate a number between 0 & 1 and divided whole (0, 1) interval into 5 parts - each of width 0.2. According as where the generated number lies, we assign one from 'rock', 'paper', 'scissors', 'lizard', 'spock' respectively.</li>
      </ul>
    </details>
    </li>
  <li>
    <details>
      <summary>Progress Bar - width-increment, hover-effect</summary>
      <ul>
        <li>A progress-bar consists of two parts: the `progress-range` & the `progress-bar` itself. We used `calc()` CSS function to set width of `progress-range` and added some `animation` on hover as the `thikness` increases!.</li>
        <li> On the fire of `canPlay`, `timeupdate` events, the values of these properties `currentTime`, `duration` extracted from `video` element and calculated percentage of `currentTime` in `duration` & set it as `width` of Progress-Bar. Followed by `time-elapsed`, `total-duration` update.</li>
        <li>Also, on the click at different position on progress bar, it'll change current playback position. To do that, extract `offsetX` & `offsetWidth` value from Progress Bar element and calculate the percentage of `offsetX` in `offsetWidth`along `duration`, then update `width` of progress-bar, `time-elapsed`, `total-duration` etc.</li>
      </ul>
    </details>
  </li>
  <li>
  <details>
      <summary>Playback Speed Dropdown</summary>
    <ul>
        <li>On change of playback speed, the `change` event fires on `select` element and then `playbackRate` property on video element is set to selected value of Playback Speed Dropdown.</li>
      </ul>
    </details>
  </li>
</ol>
</details>

_To see in action, please visit to the [Link](https://videoplayerinjs.netlify.app/)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## 💎 Features

- [ ] Plays anything: Plays “traditional” file formats such as MP4 and WebM, but also supports adaptive streaming formats such as HLS and DASH. There’s even a special UI for live streams!
- [ ] Easy to style: Designed to be a reliable and consistent base to build on top of. The player looks great out of the box, but can be easily styled with a little bit of extra CSS.
- [ ] Supported everywhere: Your video should work everywhere your app does. The team makes an effort to support every modern browser we can, including desktop and mobile.

See the [open issues](https://github.com/Prasenjit-3433/Spock-Rock-Game/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## 📜 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## 📮 Contact

Prasenjit Sutradhar - [@twitter_handle](https://twitter.com/twitter_handle) - prasenjitsutradhar3433@gmail.com

Project Link: [https://github.com/Prasenjit-3433/Spock-Rock-Game](https://github.com/Prasenjit-3433/Spock-Rock-Game)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## ✌️ Acknowledgments

* [Fontawesome](https://fontawesome.com/)
* [Pixabay.com -- Free Videos](https://pixabay.com/videos/)
* [Heropatterns - SVG Background](https://heropatterns.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Prasenjit-3433/Spock-Rock-Game.svg?style=for-the-badge
[contributors-url]: https://github.com/Prasenjit-3433/Spock-Rock-Game/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Prasenjit-3433/Spock-Rock-Game.svg?style=for-the-badge
[forks-url]: https://github.com/Prasenjit-3433/Spock-Rock-Game/network/members
[stars-shield]: https://img.shields.io/github/stars/Prasenjit-3433/Spock-Rock-Game.svg?style=for-the-badge
[stars-url]: https://github.com/Prasenjit-3433/Spock-Rock-Game/stargazers
[issues-shield]: https://img.shields.io/github/issues/Prasenjit-3433/Spock-Rock-Game.svg?style=for-the-badge
[issues-url]: https://github.com/Prasenjit-3433/Spock-Rock-Game/issues
[license-shield]: https://img.shields.io/github/license/Prasenjit-3433/Spock-Rock-Game.svg?style=for-the-badge
[license-url]: https://github.com/Prasenjit-3433/Spock-Rock-Game/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://in.linkedin.com/
[product-screenshot]: images/screenshot.png
[HTML5]: https://img.shields.io/badge/HTML5-f06529?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[Css]: https://img.shields.io/badge/CSS3-2965f1?style=for-the-badge&logo=CSS3&logoColor=white
[Css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[Js]: https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=JavaScript&logoColor=323330
[Js-url]: https://www.javascript.com/

