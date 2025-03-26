import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
<!-- Top Navigation Menu -->
    <div class="topnav">
        <a href="#" onclick="toggleDropdown('menu')"><i class="fa fa-bars"></i> Menu</a>
        <div id="menu" class="dropdown-container">
            <a href="https://linktr.ee/funnygifdan">Linktree</a>
            <a href="cyberaware.html">Cyber Awareness</a>
            <a href="important.html">Important Links</a>
            <a href="#" onclick="toggleDropdown('sip')">SIP <i class="fa fa-caret-down"></i></a>
            <div id="sip" class="dropdown-container">
                <a href="sip.html">SIP</a>
                <a href="production.html">Production/Design</a>
                <a href="systems.html">Systems/Processes</a>
            </div>
            <a href="#" onclick="toggleDropdown('networking')">Networking <i class="fa fa-caret-down"></i></a>
            <div id="networking" class="dropdown-container">
                <a href="porthead.html">Ports/Header Information</a>
                <a href="subnetting.html">Subnetting</a>
                <a href="systems.html">Systems</a>
            </div>
            <a href="#" onclick="toggleDropdown('linux')">Linux <i class="fa fa-caret-down"></i></a>
            <div id="linux" class="dropdown-container">
                <a href="linuxcom.html">Linux Commands</a>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="w3-main">
        <h2>Welcome Minions</h2>
        <h3>This site is dedicated to my daughters Alycia, Aubree, and Hadley...</h3>
    </div>
      {/* Your other content goes here */}
    </div>
  );
}

export default App;
