/* Global Styles */
body, h1, h2, h3, h4, h5, h6, .w3-bar-item {
  font-family: "Rock Salt", sans-serif;
  background-color: #28343c;
  color: #00FF00;
  font-size: 22px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  margin: 0;
  padding: 0;
}

/* Matrix Falling Code Effect */
#matrixCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 0.7;
  pointer-events: none;
}

/* Top Navigation */
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid gray;
  z-index: 1000;
  padding: 10px 0;
  text-align: center;
  transition: background-color 0.3s ease;
}

.top-nav.translucent {
  background-color: rgba(0, 0, 0, 0.5);
}

/* Footer */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  box-shadow: 0 -4px 6px rgba(255, 255, 255, 0.3);
  border-top: 2px solid gray;
  color: #00FF00;
  text-align: center;
  padding: 10px 0;
  z-index: 1000;
}

/* Content Wrapper */
.content-wrapper {
  padding-top: 80px;  /* Leave room for nav and welcome text */
  padding-bottom: 80px; /* Leave room for footer */
  flex: 1;
}

/* Welcome Paragraph */
.content-text {
  margin-top: 80px;
  text-align: center;
  padding: 20px;
}

/* Button Styles for All Buttons */
button {
  background-color: black;
  color: #00FF00;
  border: none;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  padding: 10px 20px;
}

/* Menu & Dropdown Specific */
.menu {
  display: none;
  position: fixed;
  top: 60px;
  left: 0;
  width: 125px;
  height: calc(100% - 120px);
  background-color: black;
  border: 2px solid #696969;
  box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.3);
  overflow-y: auto;
  transition: left 0.3s ease;
  z-index: 1001;
}

.menu.open {
  display: block;
}

.menu a {
  display: block;
  color: #00FF00;
  text-decoration: none;
  padding: 10px;
}

/* Dropdown Content */
.dropdown-content {
  display: none;
  background-color: black;
  border: 1px solid #696969;
  margin-top: 5px;
  box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.3);
}

.dropdown.open .dropdown-content {
  display: block;
}

/* 3D Cube Carousel */
.carousel-container {
  margin-top: 10000px;  /* Positioned 10,000px from the top */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  perspective: 1000px;
}

.cube {
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  transition: transform 2s;
}

.cube-face {
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center;
  border: 1px solid #00FF00;
}

/* Hacker-themed images for cube faces (update URLs as needed) */
.cube-front  { background-image: url('hacker1.jpg'); transform: rotateY(0deg) translateZ(150px); }
.cube-back   { background-image: url('hacker2.jpg'); transform: rotateY(180deg) translateZ(150px); }
.cube-right  { background-image: url('hacker3.jpg'); transform: rotateY(90deg) translateZ(150px); }
.cube-left   { background-image: url('hacker4.jpg'); transform: rotateY(-90deg) translateZ(150px); }
.cube-top    { background-image: url('hacker5.jpg'); transform: rotateX(90deg) translateZ(150px); }
.cube-bottom { background-image: url('hacker6.jpg'); transform: rotateX(-90deg) translateZ(150px); }

/* Satellite (Floating Element) */
#satellite {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 150px;
  opacity: 0.8;
  z-index: 999;
  animation: floatSatellite 3s infinite ease-in-out;
}

@keyframes floatSatellite {
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .menu {
    width: 50%;
  }
}