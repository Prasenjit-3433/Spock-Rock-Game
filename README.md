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
  <a href="https://github.com/Prasenjit-3433/Custom-Video-Player">
    <img src="player.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Custom Video Player</h3>

  <p align="center">
    A JavaScript based Spock Rock Game feat. Confetti.js, Modules
    <br />
    <a href="https://github.com/Prasenjit-3433/Custom-Video-Player"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://videoplayerinjs.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/Prasenjit-3433/Custom-Video-Player/issues">Report Bug</a>
    ·
    <a href="https://github.com/Prasenjit-3433/Custom-Video-Player/issues">Request Feature</a>
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

 ![Screenshot](demo.gif)






When looking for an online video player for your website, you might hear the names YouTube and Vimeo before any else. That’s because these are quick, easy, and free options readily available to you. However, if you want more control over your video assets, how they are displayed, and want to learn how users interact with your content and engage with it, you might need a private HTML5 video player.

Flash-based players have become less popular now and HTML5 video players have become the new industry standard. For facilitating seamless integration on your website, this is suggested best online video player for you! :smile:

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### 🛠 Built With

* ![HTML](https://img.shields.io/badge/HTML5-f06529?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS](https://img.shields.io/badge/CSS3-2965f1?style=for-the-badge&logo=CSS3&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=JavaScript&logoColor=323330)

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

* First of all, we added an SVG as a hero image because an svg can scale upto any size according as the size of the viewport.
* Then added a video element with attribute `playsinline` which gonna prevent the video to be played in full screen mode by default on mobile views.
<details>
<summary>Ui Components:</summary>
<ol>
<li>
    <details>
      <summary>Play Icon, Video, Mobile Responsiveness.</summary>
      <ul>
        <li>Making `video` element to take `min-width: 800px` & `max-width: 80vw` and on large smart phone (600px or less), `min-width: 0` & `max-width: 90%`.</li>
        <li>On the click on `play-icon` or on the video, the video starts playing and `play-icon` turn into `pause-icon` & vice-versa. Also, when the current playlist is ended i.e. when `ended` event fires, `pause-icon` turn into `play-icon`.</li>
        <li>Also, on the click at different position on Volume Bar, it'll change current volume. To do that, extract `offsetX` & `offsetWidth` value from Volume Bar element and calculate the percentage of `offsetX` in `offsetWidth`, then update `width` of volume-bar & Change `volume-icon` accordingly.</li>
      </ul>
    </details>
  </li>
  </li>
  <li>
    <details>
      <summary>Controls HTML, Show controls on hover</summary>
      <ul>
        <li>By default, `control-container` has `opacity` 0 but when hover over it, it'll get opacity of 1 and added animation of style `ease-out` with delay of 2s.</li>
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

See the [open issues](https://github.com/Prasenjit-3433/Custom-Video-Player/issues) for a full list of proposed features (and known issues).

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

Project Link: [https://github.com/Prasenjit-3433/Custom-Video-Player](https://github.com/Prasenjit-3433/Custom-Video-Player)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## ✌️ Acknowledgments

* [Fontawesome](https://fontawesome.com/)
* [Pixabay.com -- Free Videos](https://pixabay.com/videos/)
* [Heropatterns - SVG Background](https://heropatterns.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Prasenjit-3433/Custom-Video-Player.svg?style=for-the-badge
[contributors-url]: https://github.com/Prasenjit-3433/Custom-Video-Player/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Prasenjit-3433/Custom-Video-Player.svg?style=for-the-badge
[forks-url]: https://github.com/Prasenjit-3433/Custom-Video-Player/network/members
[stars-shield]: https://img.shields.io/github/stars/Prasenjit-3433/Custom-Video-Player.svg?style=for-the-badge
[stars-url]: https://github.com/Prasenjit-3433/Custom-Video-Player/stargazers
[issues-shield]: https://img.shields.io/github/issues/Prasenjit-3433/Custom-Video-Player.svg?style=for-the-badge
[issues-url]: https://github.com/Prasenjit-3433/Custom-Video-Player/issues
[license-shield]: https://img.shields.io/github/license/Prasenjit-3433/Custom-Video-Player.svg?style=for-the-badge
[license-url]: https://github.com/Prasenjit-3433/Custom-Video-Player/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://in.linkedin.com/
[product-screenshot]: images/screenshot.png
[HTML5]: https://img.shields.io/badge/HTML5-f06529?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[Css]: https://img.shields.io/badge/CSS3-2965f1?style=for-the-badge&logo=CSS3&logoColor=white
[Css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[Js]: https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=JavaScript&logoColor=323330
[Js-url]: https://www.javascript.com/

