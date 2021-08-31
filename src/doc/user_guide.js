export function install_user_guide(){
    doc_pane_content_id.innerHTML += content
    content = null //so it will be garbage collected
}
var content =
`<details><summary class="doc_top_level_summary">User Guide</summary>
 <div style='font-size:16px;'>

<details class="doc_details"><summary>About</summary>
    This is <a href="http://hdrobotic.com/" target="_blank">Dexter</a> Development Environment<br/>
    version: <span id="dde_version_id">3.8.0</span><br/>
    released: <span id="dde_release_date_id">Jul 23, 2021</span>
    <p></p>
    DDE helps you create, debug, and send software to a Dexter robot.
    You can use any JavaScript augmented with DDE-specific functions to help find out about,
    and manipulate, a robot.<br/>
    <a href="http://hdrobotic.com/videos/" target="_blank">Videos on Dexter</a><br/>
    <!-- <span id="dde_overview_id" style="color:blue; text-decoration:underline;">DDE Overview Paper</span> -->
</details>
<details class="doc_details"><summary>Why Use DDE?</summary>
    Dexter has a limitless variety of capabilities.
    We couldn't think of them all let alone program them.
    And if we could, finding the right button for each program would be
    extremely difficult, besides overfilling screen real estate.
    <br/><br/>
    By providing a general purpose language that is broad enough to cover all the bases,
    yet detailed enough to specify the action details, users can specify the
    precise behavior they desire.
    We've extended JavaScript, the most common web page programming language,
    with dexter-specific functions like
    "move" and ways to get values from sensors (like cameras).
    This allows you to specify things like:
    <i>If part X is in the workspace, then move it 10 millimeters to its left</i>.
    <br/><br/>
    You need a general purpose language to customize that "10"
    with any computable number in a myriad of ways. We may want to
    create actions that depend on conditions that differ with the environment, time,
    or materials. Instead of move, we might want to rotate, or grasp, or drill, etc.
    <details class="doc_details"><summary>Won't a Text Editor Do?</summary>
        You could use any old text editor to write code. But you'd need to know:
        <ol>
            <li>What capabilities are available?</li>
            <li>What do they actually do? (semantic details)</li>
            <li>How do I use them? (syntactic details)</li>
            <li>How do I run the code?</li>
            <li>How do I localize bugs?</li>
            <li>How do I understand and fix them?</li>
            <li>How do I store and re-run programs I've created?</li>
            <li>How do I change and extend existing code?</li>
        </ol>
        DDE helps you with all of the above.
    </details>
</details>
<details class="doc_details"><summary>Prerequisites</summary>
    You'll need a Dexter robot and a basic knowledge of JavaScript to make full use of DDE.
    DDE provides a lot of help for learning JavaScript directly and the
    <b>Learning JavaScript</b> section of this documentation gives you a number of
    very good on-line sources to smooth your path.
    Without a robot, you can still use DDE to <i>simulate</i> one.
</details>
<details class="doc_details"><summary>Installation</summary>
    <details class="doc_details"><summary>First Install</summary>
        To get the latest DDE release, start the process by:
        <ul><li> Browse <a href="https://github.com/cfry/dde/releases/latest" target="_blink">Github</a></li>
            <li> Click on the file for your operating system:
                <ul><li>For Windows: <samp>.exe</samp></li>
                    <li>For Mac: <samp>.dmg</samp></li>
                    <li>For Linux: <samp>.AppImage</samp> </li>
                    <li>Sorry, other OS's like ChromeOS are not now supported.</li>
                </ul></li>
            <li> The clicked file will be copied to your downloads folder.
                For Windows and Mac, you may have to click on it to
                complete installation, or that might start automatically.
                For Linux, you will have to make the file executable like so:<br/>
                <samp>$ chmod +x dexter_dev_env.AppImage</samp><br/>
                in order to run it.
            </li>
        </ul>
    </details>
    <details id="update_doc_id" class="doc_details"><summary>Updating to the latest DDE</summary>
        Follow the directions under <b>First Install</b> above.
        This will not change any files in your <samp> Documents/dde_apps</samp> folder.
        <p></p>
        Twist down the <b>About</b> row in the Doc pane to see the installed version number of DDE.
    </details>
    <details class="doc_details"><summary>Launch DDE</summary>
        On Windows, the DDE application is installed in
        <samp>C:\Program Files\dexter_dev_env\dexter_dev_env.exe</samp>
        and on the desktop.<br/>
        On Mac, <samp>Macintosh HD/Applications/dever_dev_env.app</samp>
        <p></p>
        Double click on the file to launch DDE.<br/>
        The first time you launch, you will be told that you need to create a
        dde_apps folder under your Documents folder.
        The message you get should include the full path of this folder.
        For instance, on MacOS it will be "/Users/your_name/Documents/dde_apps/".
        <br/>
        If there is a file
        <samp>Documents/dde_apps/dde_init.js</samp>, it will be
        loaded automatically. (If it does not exist in that folder, a new one
        will be made.) Thus you can put any code in that file
        that you want to be evaled at start-up, such as libraries you've
        written, etc.
    </details>
    <details class="doc_details"><summary>Windows OS Problems</summary>
        If you have additional useful information about these issue, please tell us!
    <details class="doc_details"><summary>OneDrive on Windows 10</summary>
      We suspect Microsoft's change to the default setting for a OneDrive configuration
      checkbox in a Windows 10 update in Feb or Mar 2018 causes DDE
      to not launch correctly. The underlying cause is that
      DDE can't find the right folder for its dde_init.js and/or dde_persistent.json
      files. This results in numerous problems like loading and saving files.
      Applications besides DDE have had similar problems.
      <p/>
      If you are using Windows 10, we recommend:
      <ol><li>Right-click the OneDrive icon on the Windows Task Bar.</li>
          <li>In the dialog box that comes up, in its right-hand column,
              click "Settings"</li>
          <li>In the next dialog box that comes up, click the "Settings" tab.</li>
          <li> In the "Files on Demand" section, uncheck
               "Save space and download files as you use them"</li>
      </ol>
    </details>
    <details class="doc_details"><summary>Installation Hangs Bug</summary>
        <b>Symptom:</b> While installing DDE on WinOS 7, 10, and maybe others,
        you get a dialog box that says<br/>
        "Installing, please wait..."<br/>
        whose progress bar stops progressing and you have to wait for more than 1 minute.<br/>
        <b>Work Around:</b>
        <ol><li>Close the dialog box.</li>
            <li>Win7:  choose Start menu/Control Panel/Programs and Features<br/>
                Win10: choose Start menu/Windows System/Control Panel/Programs and Features</li>
            <li>Click right on "dexter_dev_env".</li>
            <li>Choose "uninstall"</li>
            <li>You may get a dialog that says:<br/>
                "An error occurred while trying to uninstall...
                Would you like to remove ..."<br/>
                Click the "Yes" button.</li>
            <li>Double click on Downloads/dexter_dev_env-setup-(version number).exe  to reinstall.
                DDE Should install in 1 minute or less.</li>
        </ol>
        <b>Why this happens:</b> If you rename or remove C:\Program Files\dexter_dev_env
        it screws up the Windows registry, and the DDE installer program can't handle it.
        Electron Apps (like DDE) use a program called NSIS for installation,
        and it has this, ahem, feature.
    </details>
    </details> <!-- end Windows OS Problems -->
    <details class="doc_details"><summary>Multiple DDEs Installed</summary>
      You can have multiple versions of DDE installed on your computer at once,
      and even run them simultaneously. You might want to do this
      when you have some code that works fine in a version, and are nervous that
      installing a new version will cause something to break.
      (Normally, installing a new version overwrites the previous version.)
      Keeping the old version installed lets you easily go back to it.
      Here's how to keep your old version:
      <p></p>
      <b>WinOS</b> Before installing the new version,
         <ol>
          <li>copy the old version from Local Disc (C:)/Program Files/dexter_dev_env</li>
          <li>paste it into (C:)/Program Files/</li>
          <li>rename it with its old version i.e. dexter_dev_env_3.6.6.</li>
          <li>install the new version, which will go in the C:/Program Files/dexter_dev_env folder.</li>
         </ol>
      <b>MacOS</b>
      <ol>
        <li>Rename MacintoshHD/Applications/dexter_dev_env.app to something like
            MacintoshHD/Applications/dexter_dev_env_3.6.6.app</li>
        <li>Install a new version.</li>
      </ol>
      You can keep as many versions of DDE as you like as long as their folder names differ.
      <p></p>
      On Windows, you can launch a 2nd instance of DDE from the File Explore by double clicking on it
      again. On Mac, this won't launch a 2nd instance, but if you copy the dexter_dev_env.app file
      and rename it, then you can double click that and run a 2nd instance of the same
      DDE version.

    </details>
</details> <!-- end installation -->
<details class="doc_details"><summary>Configure DDE</summary>
    DDE uses a folder under your Documents folder named <samp> dde_apps</samp>.
    If one is not there, it will be created when you launch DDE.
    It's the default folder for JS code that you write.
    <p></p>
    dde_apps also stores
    a file called <samp>dde_persistent.json</samp> which stores settings you've made in
    DDE so that the next time DDE launches it can restore these settings.
    Mostly you can ignore this file.
    <p></p>
    The dde_apps folder also stores
    a file named <samp>dde_apps.js</samp>. It will be automatically created if
    it doesn't exist. This file contains JS. It is loaded every time
    DDE is launched. You can use it to customize your DDE environment.
    <p></p>
    DDE requires that you have a default robot named "dexter0". Usually the one
    that is automatically inserted into the file dde_apps/dde_init.js is fine.
    However, in that file you may need to modify the ip_address and port number
    of Dexter. The default ip_address is <code>"192.168.1.142"</code> The port number
    is typically <code>"50000"</code>.
</details>

<details id="configure_dexter_id" class="doc_details"><summary>Configure Dexter</summary>
    <details class="doc_details"><summary>Key Parts</summary>
     Dexter has 5 joints and 5 links between them. The two longest links
    are each about 32 centimeters long and made of square carbon fiber tubes.
    The tube closest  to Dexter's base is LINK2.
    <p></p>
    Mounted on it is the
    <i>motor controller</i> printed circuit board, 17cm x 6 cm. Mounted on top
    of it is the <i>processor</i> board, 10cm x 6cm. Mounted on the bottom of the processor
    board is a metal housing containing an <i>Ethernet socket</i> for an RJ45 connector.
    The lower portion of the housing for the RJ45 contains a USB socket.
    To the left of the housing hanging over the bottom of the processor board
    is a micro USB socket.
    Underneath this
    housing on the motor controller board is a green-yellow LED.
    This is the "power" LED. It is fairly hidden, but you can see
    it between the boards if you look carefully.
    </details>
    <details class="doc_details"><summary>Power Up</summary>
When Dexter is off and disconnected from the power, you can move each joint
manually with just a little resistence from Dexter. When transporting
Dexter you should move the joints to fold it up into a compact configuration.
<p></p>
Moving a joint will cause a corresponding drive belt to move.
You'll hear a "whirring" sound from the transmission.
You should also see the power light to go on. Dexter's motors act as generators
and will generate electricity which powers the power LED. Seeing the light go
on when you move a joint is a diagnostic that the wiring is, at least partially, correct.
<p></p>
Dexter does not have an on-off switch. You just plug it into its
power adapter and the wall to turn it on.
The power adapter that comes with Dexter is a fairly common "power brick" or "wall wart" used
on many PC laptops. It is about 3 meters long.
The wall end is a 2 prong, unpolarized connector, common
for USA appliances. Electrically, it accepts input of 100 to 240 volts, 50 to 60 Hz AC,
which is supplied throughout the world. However, mechanical connections vary from
country to country. Adapter plugs that accept the USA 2 prong plugs are commonly available.
<p></p>
The Dexter end of the power adapter is a male cylinder 5mm in outer diameter, common
on older PC laptops. The Power Adapter consumes 1.5 Amps and outputs
3.15 Amps at 19 volts. If you lose it, many PC laptop power adapters will work.
<p></p>
Before turning on Dexter, move its joints so that its standing straight up.
With the power board facing you, the final link should be horizontal pointing to the left.
Dexter's power socket is connected by 2 short wires to Dexter's base. You turn on Dexter by
plugging in the the power adapter to Dexter and the wall.
If the wall has power, an LED on the power adapter will go on.
<p></p>
When Dexter is turned on, after about 8 seconds, it does a 5 second or so little "dance"
moving each of its joints.
<p></p>
The processor board has 3 bright LEDs.
<ul>
    <li><b style="color:green;">green</b> lights when the processor board is getting power.</li>
    <li><b style="color:blue;">blue</b>   lights when the FPGA is programmed and ready for operation.</li>
    <li><b style="color:red;">red</b>     lights during disk access (to the 8 Gigabyte SD card.) </li>
</ul>
The base of the motor controller board has 3
<b style="color:#c6ff21;">green-yellow</b> LEDs on one side and 2 on the other.
Each indicates that a joint has power.
    </details> <!-- end Power Up -->

    <details id="data_connection_doc_id" class="doc_details" ><summary>Data Connection</summary>
    <b>Ethernet Cable</b><br/>
    Use an Ethernet cable (with RJ45 male connectors) to go between
    Dexter and your computer. Available at Staples, Home Depot, Best Buy, Amazon, etc.
    Ethernet cables come in different "Categories". Get "Cat 5e".
    The <i>Ethernet socket</i> on Dexter is on the bottom of the processor
    board with the socket facing down. Most modern laptop computers lack an Ethernet socket but there
    are <i>USB 3.0 to Ethernet RJ45 adaptors</i> for about $15
    <a href="https://www.amazon.com/s/ref=nb_sb_noss_2?tag=laptop-magazine-20&url=search-alias%3daps&field-keywords=USB+to+Ethernet&rh=i%3aaps%2ck%3aUSB+to+Ethernet"
       target="_blank">here</a>.
    Get one that purports to work with your OS, as there are some incompatibilities.
    Beware that for some adaptors for some OS's you need to install a software driver,
    typically downloadable for free from the USB to Ethernet adaptor's website.
    <p></p>
    For connecting an Apple MacBook to Dexter, we recommend
    <a target="_blank" href="https://www.apple.com/shop/product/MC704LL/A/apple-usb-ethernet-adapter?afid=p238%7Cs6ZAsQ09l-dc_mtid_1870765e38482_pcrid_52243316890_&cid=aos-us-kwgo-pla-btb--slid--product-MC704LL/A">Apple USB Ethernet Adapter</a>.
    However, Apple does a great job of changing their connectors every year or two so that
    your old peripherals won't work. For instance, on the 2018 MacBook Pro, the <i>only</i>
    connector they have is USB-C. USB-C has a lot of functionality, but
    the connector is physically different than previous USB connectors. Be careful
    when getting an Ethernet adaptor that it matches the socket on your computer.
    <p></p>
    <!--Instead of getting a USB to Ethernet adaptor, you can use a USB cable that
    has a male micro USB and a regular (larger) USB male.
    The micro USB male plugs into the micro USB socket on Dexter's processor board.
    See the <b>Key Parts</b> section above for how to find the micro USB socket. -->
    <p></p>
    The software setup for such direct-wire connectivity is a bit tricky.
        First, make sure your cable is plugged into and firmly seating in
        both your computer and Dexter.<br/>
    <b>On Windows 7:</b>
    <ol><li>Go to Start/Control Panel</li>
        <li>Click on: "Network and Sharing Center"</li>
        <li>In the left column, click on "Change adapter settings".</li>
        <li>In the new dialog, click right on "Local Area Connection" and </li>
        <li>Choose "Properties".</li>
        <li>In the new dialog, in "Network" tab, click on "Internet Protocol Version 4" to select it.</li>
        <li>Click on the "Properties" button. This presents yet another dialog box.</li>
        <li>Select "Use the following IP address"</li>
        <li>Enter ip address: <code title="unEVALable">192.168.1.50</code></li>
        <li>The Subnet mask should be:<br/><code title="unEVALable">255 255 255 0</code></li>
        <li>Leave the "Default gateway blank.</li>
        <li>Click the OK button and close the remaining dialogs.</li>
     </ol>
     <b>On MacOS:</b> <br/>
     First, newer new Macintoshes that don't have an Ethernet socket will need a
     "dongle" from USB (or Thunderbolt) to Ethernet socket.
     You can buy these at a Apple store or online (see above Apple URL).
     <p></p>
      For an older Mac with an Ethernet socket, or one you manage to get working
      with a dongle:
     <ol>
         <li>Select Apple Menu/System Preferences</li>
         <li>If your OS version is Sierra, a mostly useless dialog will come up.
             You have to click the left arrow in the upper left of this dialog
             to get the useful System Preferences with lots of choices.</li>
         <li>Click the "Network" icon to get another dialog box.</li>
         <li>Running down the left side of this dialog is an unlabeled column of
             all the possible connections. Apple cleverly made this column too
             narrow to be useful, so hover your mouse over each items to
             be able to read one in full. You're looking for a USB to Ethernet connection.
             Look for one with the phrase "Connected" under it, though for
             some flavors of MacOS, you have to click on the link to see
             "Connected" in the right portion of the dialog box.
             For the dongle we recommend above, it will be labeled
             "Apple USB Ethernet Adaptor"</li>
         <li>Clicking on the connection changes the inputs to the right.<br/>
             For the <b>Configure IPV4</b> field, choose <code title="unEVALable">Manually</code><br/>
             Choosing Manually causes the inputs below it to change.<br/>
             For the <b>IP Address</b> field, enter: <code title="unEVALable">192.168.1.11</code><br/>
             For the <b>Subnet Mask</b> field, type in <code title="unEVALable">255.255.255.0</code><br/>
             For the <b>Router</b> field, leave it blank.</li>
         <li>Click the "Apply" button.
             If you are wired to Dexter, the left column entry for "Apple USB Eithernet Adaptor"
             should now show a green dot.
         </li>
      </ol>
      We are working on making this easier.
      <p></p>
        <b id="ping_doc_id">ping</b><br/>
        Dexter is shipped with an ip_address of <code title="unEVALable">192.168.1.142</code>
        The Jobs menu item "Ping a Dexter" lets you test connectivity of a specific
        Dexter as well as find all the "host" Dexters that are connected at a "network"
        address. This is effectively an IP address scanner, useful when you don't know
        what ip addresses are connected.
        <p></p>
        You can also use a low level tool called "command prompt" or "terminal"
        to verify connectivity. Windows and Mac OS's do an excellent job
        at hiding these useful tools.<br/>
        On Windows 7, <br/>
        Start/All Programs/Accessories/Command Prompt.<br/>
        On MacOS: try <br/>Favorites/Applications/Utilities/terminal.app.<br/>
        Enter <code title="unEVALable">ping 192.168.1.142</code>
        <p></p>
        If you have connectivity you
        should see something like the cryptic:<br/>
        <samp>Reply from 192.168.1.142 bytes=32 time 1ms</samp><br/>
        several times. Without connectivity you'll see something like:<br/>
        <samp>Destination host unreachable</samp> or<br/> <samp>Request timeout</samp>
        or<br/><samp>Host is down</samp>
        several times.
        <p></p>
        To stop the output of ping, type Cottrol_c.
        <p></p>
        Select the Misc pane's <b>simulate</b> radio button.
        <p></p>
        You should now be able to move Dexter from DDE.
        For instance, choose Jobs menu/Run Insruction/NEUTRAL_ANGLES
        or, in case the robot is already at NEUTRAL_ANGLES,
        choose Jobs menu/Run Insruction/HOME_ANGLES,
        and Dexter should move.
        <p></p>
        Problems with data connectively can be do to an improper IP address of your Dexter,
        i.e. at some other address than 192.168.1.142. It might also have to do
        with its "MAC" address (nothing to do with "Macintosh") not being correctly set.
        You can use an IP scanner to see what devices are connected to your computer,
        including a Dexter robot.
        There are many such apps available on the net.
        We suggest:
        <ul><li>Windows OS: <a target="_blank" href="http://www.advanced-ip-scanner.com/">
                Advanced IP Scanner</a></li>
            <li>MacOS: "IP Scanner Home", $5 from Apple's "App Store". Use the "App Store.app"
            application that should be in your Applications folder to buy and download.</li>
            <li>Linux: <a target="_blank" href="http://angryip.org/">Angry IP Scanner</a>
               This claims to work for Windows and Mac OS too,
               but requires a Java SDK to be installed.
            </li>
        </ul>
        If you have just one Dexter, use the correct IP address to redefine
        dexter0 in your dde_apps/init_dde.js file like so:
        <pre><code title="not in TestSuite"> <!-- because that would be redefining dexter0 from what the user might have had with a different ip address -->
        new Dexter({name: "dexter0", ip_address: "192.168.1.142"})
        </code></pre>
        You can insert the definition of a Dexter using the Misc pane's Make Instruction dialog.
    </details> <!-- end Data Connectivity -->

    <details class="doc_details"><summary>Verify Joint Wiring</summary>
    To verify that all 5 joints are wired correctly:
    <ol><li>Verify that the jumpers on Dexter's processor board are configured correctly.
            See <a href="https://github.com/HaddingtonDynamics/Dexter/wiki/Troubleshooting" target="_blank">Troubleshooting</a>
            for details.
        </li>
        <li>Choose DDE's Jobs menu/Run Instruction/Show Dialog..."</li>
        <li>for J1 through J5, make each Joint's 30 degrees with the others at 0,
            and click on move_all_joints and observe that that joint should move by 30 degrees.
            The movement should make a low volume continuous whirring sound.
            If there are any abrupt noises, that can indicate a mechanical error in assembly.</li>
     </ol>
    </details>

    <details class="doc_details"><summary>Test Connectivity</summary>
        You should now be able to ping Dexter and have connectivity.<br/>
        (See <a href="#" onclick="DocCode.open_doc(ping_doc_id)">ping</a>.)<br/>
        <b>Troubleshooting</b><br/>
        Ping doesn't find the host? Try reseating all the cables. Try power cycling
        Dexter and/or your computer. <br/>
        If you are using an Ethernet cable, there are two LEDs on top of the RJ45 socket.
        When the amber one is lit, it shows connectivity. The green LED indicates
        data transfer.<br/>
        Usually you can leave your WIFI running, but sometimes
        it interferes with a wired connection.<br/>
        On Macs, click on the "Radio waves" icon in the upper right of the screen.<br/>
        Choose "Turn WiFi Off".
        <p></p>
        <a target="_blank" href="https://github.com/HaddingtonDynamics/Dexter/wiki/Dexter-Networking">
        Dexter Networking details.</a><br/>
        <b>Using DDE</b><br/>
        In the Misc pane header simulate radio buttons, choose "real".
        Now choose Jobs menu/Run Instruction/NEUTRAL_ANGLES,
        or other angles.
        <p></p>
        If the robot moves, you can control it from DDE!
        The next step is calibrating Dexter. Choose the menu item
        Jobs menu/Calibrate Dexter to start.
        <p></p>
        We recommend choosing <span style="color:blue;">?</span>
        in the upper right corner of the Doc pane to understand the Help System.
    </details>
    <details id="dexters_file_system_doc_id" class="doc_details"><summary>Dexter's File System</summary>
    Dexter's processor board runs Linux. Once you are connected to Dexter,
    you should be able to browse this file system using your computer's
    file navigation tools. Dexter's file system will show up as
    a separate "Volume" or "Device".
    On the Mac, in the Finder, you should see, in the left column,
    <samp>Localhost</samp>. Click on it. In a half minute or so,
    you should see in the right (main) pane of the finder a
    single folder <samp>share</samp>. This folder is on Dexter.
    Expand it to see several files on Dexter.
    <p></p>
    DDE can also access this share folder on Dexter.
    Use the File menu/Open to edit a file. You can save modified
    files on Dexter too.

    </details>


    </details><!-- end Set Up Dexter -->

<details class="doc_details" id="calibrate_doc_id"><summary>Calibrate Dexter</summary>
<b>When</b><br/>
To obtain optimal precision, Dexter must be calibrated after it is built.
<p></p>
    Environmental effects of heat, humidity, movement, and orientation towards gravity,
    all conspire to make minor changes that affect Dexter's accuracy.
    If you have an HD version of Dexter, you will need to <b>calibrate optical encoders</b>
    every time Dexter is turned on. If you have an HDI version of Dexter,
    the HDI will automatically find its
    home position when it is turned on and upon every restart.
    If you are building a kit, you must calibrate it when the building is complete.
    If Dexter is having sporadic movement or is not smooth
    in FollowMe mode, try going through a full calibration.
<p></p>
<b>How</b><br/>
Choose the Jobs menu item of "Calibrate Dexter..." to open a dialog
aiding calibration.
<h5>Step 1</h5>
Select the robot to calibrate. If you have only one Dexter, the default of
<i>dexter0</i> will already be selected.
<h5>Step 2</h5>
<b>Calibrate optical sensors</b> by
calibrating each of the five joints. When you click the start button for a joint,
this begins a Job that draws thousands of points in the
large white square plot area on the right of the dialog.
If you don't see points drawn, you probably have your robot set to <i>simulate</i>
i.e. <code title="not in TestSuite">new Dexter({simulate: true})</code> or
have that simulate init param set to <code>null</code> which causes it
to look at the Misc pane's Simulate radio buttons for a value,
or there is a discontinuity in your wiring.
If the robot has its <i>simulate</i> init parameter
set to <code>null</code> (the default
and the case for dexter0), choose the Misc pane's <b>real</b> radio button.
<p></p>
For each Joint, you are tyring to get the drawn points to form a near-circle.
Twist the two trim pots on the small printed circuit board
(the "optical board" which is several centimeters per side)
for the joint that you are calibrating,
until the drawn points form a circle, or as near a circle as you can make.
The desired circle fills the white plot area in the dialog, not smaller and
not larger.
<p></p>
Joints 1, 4, and 5 also have two screws to adjust the position of the optical blocks.
 If you see the drawn points form the pattern of an elongated diagonal oval,
 that indicates that the positional screws need to be adjusted.
 <p></p>
 All adjustments can be made with the provided small screw driver.
 <p></p>
 As you adjust, the screen will become cluttered with now obsolete dots.
 Click the "Restart" button to clear the dots and start calibrating the
 selected Joint over again.
 <p></p>
 Allow the drawing of points to complete (several minutes).
 If the circle looks good, click the mouse in the center of the circle.
 This will draw a red point there. If you are not satisfied with the
 center you've chosen, click the mouse again at a new location.
 <p></p>
 Once you are satisfied with the circle center you've chosen,
 click the next joint's start button
 <p></p>
 When you've completed calibrating all five joints, click the
 "Save" button. This saves the center points for each joint in
 a file named "AdcCenters.txt" in Dexter's shared folder.
 (currently only working on a PC).

 <h5 id="calibration_troubleshooting_doc_id">Troubleshooting</h5>
 During calibration, if you get an alert error message:<br/>
 "The direction of the eye ..." then it means one of two possible problems:
 <ol><li>The direction of the joint motion is reversed. Verify by
 moving the joint in question
 by adding degrees to its current position
 (use Jobs menu/Run Instruction/Show Dialog)
 and seeing if it moves in the direction indicated in these
 diagrams.<br/>
     <img src="doc/coor_images/Positive_Joint_Directions_J15.PNG" width="304"/><br/>
     <img src="doc/coor_images/Positive_Joint_Directions_J234.PNG"/><br/>
     If you find that the joint motion is reversed, the file
     on Dexter shared/AxisCal.txt needs to be edited to
     flip the sign of the 5 numbers,i.e. if they are positive,
     add a "-" in front of each number, if they are negataive, remove
     the "-".
     </li>
     <li>If joint moves in right direction. then the optical sensor
        wire polerity could be reversed. Check wiring.
     </li>
 </ol>
 <h5>Advanced Step 2</h5>
 To save time or examing a specific joint angle range, use the
 2 number widgets to confine joint angle motion to between the
 min and max degrees in the number widgets.
 Click the "Reset Ranges" button at the bottom of the dialog
 to initialize the min and max angles to their defaults for all joints.
 <br/>
 You can also check the "looping" checkbox for a joint to
 have Dexter ossilate between the min and max set degrees.
 <p></p>
 Points are recorded as Dexter is running for a given joint.
 You can click the "eye" radio button to the right of
 a joint's start button to show its recorded points.
 The clear button at the bottom of the dialog erases
 the recorded points for the currently selected joint.

 <h5>Step 3</h5>
 <b>Calibrate optical encoders</b><br/>
 <span style="color:red;">Caution! Clear area for large robot movements.</span><br/>
    Calibrate the optical encoders by clicking the bottom button in the dialog.
 This will take about a minute.
 When the directions line in Step 2 says that calibration is complete, you
 can close this dialog by clicking the <b>x</b> in its upper right corner.<br/>
 See also <a href="#" onclick="DocCode.open_doc('Dexter.is_calibrated_doc_id', event)">is_calibrated</a>
</details>

<details class="doc_details"><summary>User Interface</summary>
    <details id="help_system_doc_id" class="doc_details"><summary>Help System</summary>
        Web programmers spend an inordinate amount of time searching the web
        because of missing or incomplete documentation. DDE bends over backwards to
        provide the documentation you need to create jobs. There are quite a number
        of ways to get "just in time & place" help within DDE. We've tried to
        make them easy to discover, but in such a sophisticated environment,
        you might miss a few.
        <p></p>
        The Dexter platform enables a wide variety of actions. This is necessarily complex.
        So we provide multiple ways to learn about the availble capabilities, because people learn
        in different ways. Below we supply numerous ways to understand and program Dexter.
        They support different learning styles and different needs. We suggest that you
        at least sample each of them, then loop back and concentrate on several that
        are most appealing to you.
        <ul>
            <li>The Welcome Dialog is a fancy presentation of the below. By default, it
                comes up at DDE launch. You can disable this by a checkbox in the dialog.
                If you have disabled it, you can show the dialog by clicking
                <button>Help</button> at the end of the Editor pane menu bar.
                <p></p></li>
            <li><a href="https://www.hdrobotic.com/features" target="_blank">Dexter Features</a>
                 Videos of some things Dexter is capable of plus an early overveiw of DDE.<p></p></li>
            <li><a href="http://hdrobotic.com/videos/" target="_blank">Haddington videos</a>
            Videos on Haddington's mission, and the hardware.<p></p></li>
            <li>Jobs menu/<b>Dexter UI</b> brings up a dialog box that allows you
                to interactively control a Dexter (or the simulator of Dexter, depending on the
                <i>simulate/real</i> radio buttons in the Misc Pane header). This dialog is
                a great way to learn the relationship between joint angles and xyz (Cartesian)
                coordinates, a.k.a. kinematics.</li>
            <li><a href="https://www.hdrobotic.com/blog/programming-in-dexter-development-environment-archive" target="_blank">Webinar videos</a> on DDE</li>
            Each of these 11 videos is 45 minutes to an hour long. Watching them in order, especially the first several, is recommended.
            The first one, <b>Intro to DDE</b>, is primarily about the Help System itself.<p></p></li>
            <li><a href="http://hdrobotic.com/software" target="_blank">http://hdrobotic.com/software</a>
                Download various versions of DDE.
                Also shows DDE's latest documentation.
                Its usually better to view this content
                from within DDE, but there may be times when this web page is handy.
                For instance, <b>User Guide/Installation</b> tells you how to install DDE.
                You can also browse the <b>Release Notes</b> before installing a version.<p></p></li>
            <li><b id="tooltips_doc_id">tooltips</b> Many menu items and buttons provide concise help. Place the
                mouse over the item and don't move it for a couple of seconds to see the help.<p></p></li>
            <li><b id="code_examples_doc_id">code examples</b> DDE's
                <button>Learn JS&#9660;</button>, <button>Insert&#9660;</button>, <button>Series&#9660;</button>, <button>Jobs&#9660;</button> and <button>Test&#9660;</button> menus let you insert,
                into the editor buffer,
                practical examples of JavaScript which you can then customize to your needs.
                If you like to interact with code examples, use this.
                <ol>
                   <li>If you don't know JavaScript, try the "Learn JS" menu items in order to learn the JS
                       most useful in programming Dexter.</li>
                    <li> Next, try each menu item, in order, on the "Insert" menu, to learn useful
                         utilities for programmming in DDE.</li>
                    <li>Next, use the Jobs menu, "Insert Example" submenu items, in order, to
                        learn how to program increasingly sophisticated Jobs.</li>
                </ol>
                <p></p></li>
            <li><b>Step through code</b> One of the best ways to understand a programming
                 language is to step through working code.
                 <a href="#" onclick="DocCode.open_doc(learning_js_doc_id)">Learning JavaScript</a> takes you
                 through this process, step by step.</li>
            <li><b id="TestSuite_for_help_doc_id">TestSuite</b> DDE's test suite is used primarily to verify functionality.
                But you can also use the Test/Insert All menu item to
                see the source code of many of the tests. This will generally
                be <i>less</i> useful than explicit examples, but
                may come in handy for edge cases.
                <p></p>
                To find a relevant test suite:
                <ul><li>Enter a string into the Find type-in or, with that type-in empty,
                        select a string in the editor (or Doc or Output pane)
                        that you want to search for.</li>
                    <li>Click "Find". The Output pane tells you not just where in the Documentation
                        that string is, but also which test suites its in,
                        and allows you to browse those test suites.
                    </li>
                </ul>
                <p></p></li>
            <li><b id="doc_pane_doc_id">Doc Pane</b> <br/>
                <i>Getting Started</i> is the concise, bare-bones doc to get you running quickly.<br/>
                <i>User Guide</i> helps you with the DDE programming environment.<br/>
                <i>Reference Manual</i> provides details of the <i>language</i>
                   that is used to create Jobs.<br/>
                <i>Articles</i> provide abstract as well as concrete help. Code in
                articles can be selected then evaled by clicking the <button> Eval </button> button.
                Understanding how <code>eval</code> works is central to understanding not just JavaScript,
                but programming languages in general. That's the topic of the article <i>How To Think Like A Computer</i><br/>
                <i>Release Notes</i> tell you what has changed between releases.
                The vast majority of this information is folded into the regular documentation
                upon each release, but if you want to know what's changed,
                browse the release notes, which is recommended each time you update DDE.<br/>
                <i>Known Issues</i> tell you about large omissions and problems within DDE.
                Please don't send us any bug reports about things documented here.<p></p></li>
            <li><b id="find_button_doc_id">Find button</b> In the Doc pane header, there's a type-in box.
                Enter text and click the Find button. Sections containing
                that text will have an orange background. Expand them.
                The text itself will have a yellow background.
                This scheme allows you to avoid looking at sections
                that you may not care about, such as Release Notes.
                <p></p>
                If the text type-in is blank, the Find button will grab
                the selected text and search for that text in the documentation.
                You can select text in the Editor, Output, and Doc panes.
                You can also select text in the Command type-in (Output pane
                header) and the Run Instruction dialog box's source code type-in.<p></p></li>
            <li><a href="https://github.com/cfry/dde" target="_blank">https://github.com/cfry/dde</a>
                Rarely should you need to examine
                DDE's source code to figure out how something works, but its all
                available on github, including the documentation. <p></p>
                <a href="https://github.com/cfry/dde/releases" target="_blank"> https://github.com/cfry/dde/releases</a> has download instructions.</li>
            <li><b>New Releases</b> Each time you launch DDE, the Output pane will
                tell you whether or not there is a later release and how to download it.<p></p></li>

            <li><b id="click_help_doc_id">Click Help</b> If you click on text in the Editor pane, Output pane,
                Command line type-in or Doc pane code examples,
                a line of help about what you clicked on will appear
                in the output pane. Often this will have a blue, underlined
                link that you can click on for more information.<p></p></li>
            <li><b id="eval_button_doc_id">Eval button</b> The Eval button lets you run code pretty much
                where ever you find it in DDE, including the Editor, Output, and Doc panes.
                The result of the evaluation
                will appear in the Output pane. While coding, we recommend
                evaling little pieces of code often. This will prevent
                hard-to-find bugs by helping to localize bugs to a small amount
                of code.  Its also a great way to learn about functionality.
                <ul><li>If there is a selection in the Editor or other pane,
                    it will be evaled when you click the <button>Eval</button> button in
                    the Output pane header.
                    Triple click on a line in the editor to select
                    the whole line.
                    Note that all "valid" code won't necessarily
                    be valid <i>in isolation</i>. For instance, in:<br/>
                    <code>function foo(my_arg){ my_arg + 2 + 3 }</code><br/>
                    selecting <code  title="unEVALable code fragment"> my_arg</code> (either place)
                    will error because <code title="unEVALable code fragment"> my_arg</code> is undefined.
                    However, <code>2 + 3</code> => <samp>5</samp></li>
                    <li>If there is a selection in the Output pane,
                        Doc pane, or Command type-in, it will be evaled.</li>
                    <li>If there is no selection, the entire contents of
                        the Editor pane will be evaluated.</li>
                </ul><p></p></li>
            <li><b>Inspector</b> When you select some code and click the <button>Eval</button> button,
               the result of running that code is shown in the Output pane in an Inspector.
               This allows you to navigate complex data strutures (including circular ones)
               expanding just those parts you're interesting in, giving you control
               over the visualization of any data that can be produced by Eval.
               You can programmatically invoke the Inspector:<br/>
               <code>inspect([100, 200, 300])</code>
             </li>
            <li><b>Make Instruction</b> The
                <a href="#" onclick="DocCode.open_doc(make_instruction_pane_doc_id, event)">Make Instruction</a>
                dialog let's you trivally create instructions and run them.
                Open it by choosing the Misc pane's menu item of Make Instruction.
                This dialog also let's you create Jobs and instances of Robots too.
                In the editor, option-clicking on a call throws it into the
                Make Instruction dialog which let's you manipulate code in a more
                constrained fashion that's easier for some purposes.
            </li>
        </ul>
    </details>
    <details id="javascript_pane_doc_id" class="doc_details"><summary>Editor Pane</summary>
        The Editor pane is a text editor. You can view and edit any text documents in it,
        but primarily you will be editing JavaScript that defines a job to make something
        with Dexter. DDE expects you to save such "apps" in your <samp> Documents/dde_apps/</samp>
        folder.<p></p>
        The red dots on the left column of the editor indicate possible syntactic errors.
        Many of these are unnecessary or trivial formatting issues that will
        not affect running the code. If the code doesn't Eval, look at the red dots and their
        tooltips for clues.
        <details class="doc_details"><summary>Click, Select, Drag</summary>
        <ul>
            <li>If you click anywhere in the editor, you'll get "click help" printed in the Output pane
                about the code you clicked on.</li>
            <li>If you double click, it will select the "word" under the mouse.</li>
            <li>If you triple click, it will select the whole line under the mouse.</li>
            <li>You can drag a selection of text to a new location.
                On MacOS: mouse down on the selection and hold on that selected text.
                Then drag it to a new location. A cursor shows you the new location.
                When you release the mouse, the text will be moved from its original location
                to the new location.<br/>
                On WinOS: Mouse down then up then down and hold. Now you can drag the
                text to a new location. Mouse up to "drop it off".
            </li>
        </ul>
        </details>
        <details id="Editor.enable_click_help_doc_id" class="doc_details"><summary>Editor.enable_click_help</summary>
           Click help is automatically called when the user clicks in the Editor pane,
           or other text that's likely to be JS and help is needed.
           It is a complex process to parse, identify and format useful help.
           Occasionally errors happen in click-help. You also *might* not
           want output in the Output pane whenever you click.
           <p></p>
           You can turn off click help by evaling:
           <code title="not in Testsuite">Editor.enable_click_help = false</code>
           The default value of this variable is <code>true</code>
            <p></p>
           If you want to always have click help off, stick the above
           code in your dde_init.js file.
       </details>
        <details id="eval_and_start_job_doc_id" class="doc_details"><summary>Eval & Start Job menu item</summary>
            This defines and starts a job with instructions determined by the
            selection or cursor position within the Editor.
            <p></p>
            If the cursor is in a job's source code but not in the do_list,
            then the job source will be evaled, and the job started.
            <p></p>
            If the cursor is on an instruction in the do_list with no selection,
            the job will be evaled and started with the first instruction run being
            the one the cursor is on.
            <p></p>
            If there is a selection within the do_list, then the selected instructions
            and any instruction that they produce will be run.
            <p></p>
            If you have selected the source code for one or more instructions
            (with comma's between them) and there is no <code  title="not in TestSuite"> new Job()</code> wrapper
            around the instructions, then a Job wrapper will be automatically made
            behind the scenes, the Job will be defined, and started.
            Such Jobs will use the Dexter.default robot, chosen in the Misc pane header.
        </details>
    </details> <!-- end Editor pane -->
    <details id="output_pane_doc_id" class="doc_details"><summary>Output Pane</summary>
        DDE prints information in the Output pane that will be useful in your current context.
        You can explicitly print in the output pane with a call to the JavaScript function <code>out</code>.
        Example:<br/>
        <code>out("hi <i>world</i>", "blue")</code><br/>
        <code>out</code> accepts any valid HTML as its first argument. It will be rendered in the Output pane.

    </details>
    <details id="documentation_pane_doc_id" class="doc_details"><summary>Documentation Pane</summary>
        The Documentation pane describes the core knowledge you'll need to command Dexter to make things.
        Admittedly we'll always fall short of this goal, but let us know if some crucial information
        is missing and we'll do our best to fill the void.<p></p>
        You can find out what version of DDE is running and the latest changes under the
        <b>Release Notes</b> section of the documentation.
        Details about programming Dexter are in the <b>Reference Manual</b> section.
    </details>
    <details id="misc_pane_doc_id" class="doc_details"><summary>Misc Pane</summary>
        The header of this pane displays:
        <ul>
        <li> A select menu of possible contents for the Misc pane.</li>
        <li> A select menu of robots for setting the default robot used in various other operations.</li>
        <li> <a href="#" onclick="DocCode.open_doc(stepping_instructions_doc_id, event)">
        stepping controls</a> for Job instructions (not JavaScript stepping).</li>
        <li>Radio buttons for determining whether a Job with a robot who's <i>simulate</i>
            property is <code>null</code> will be simulated or run on the real robot.</li>
        </ul>
        <details id="make_instruction_pane_doc_id" class="doc_details"><summary>Make Instruction</summary>
           The Make Instruction dialog box shows when you choose "Make Instruction" in the menu in the
           Misc oane header.
           It allows you to create, edit & debug instructions as well
           as incorporate them into Jobs.
           <ol><li><b>Create</b> an instruction by choosing it from <button>Instruction&#9660;</button></li>
               <li><b>Edit</b> both the instruction name and the argument type-in fields.
                              If you edit the instruction name and hit the ENTER key, it
                              will recompute the arguments for the new instruction name.
                              <p></p>
                   Values for instruction properties can be JS source code.
                   For example, a distance that is normally in meters can
                   be entered in as inches via: <code> 6 * _in </code> &nbsp;
                   This source will appear when you insert the instruction in the editor
                   buffer. You can also select property values and click the <button>Eval</button>
                   button to see the result.
               </li>
               <li><b>Debug</b> those values by clicking <button>Eval Instr</button>.
                   This evaluates each argument and highlights the first one that errors.
                   This will catch syntactic bugs and a few others.
                   If all arguments seem to be ok,
                    the entire instruction's source is evaluated and the resulting
                   object is displayed in the output pane so that you can Inspect it.</li>
               <li><b>Simulate</b>  Click <span style="background-color:#bae5fe;">&nbsp;<input type="radio"/> simulate </span>&nbsp;
                   in the Misc pane header.
                   We want to first test our instruction without complications from
                   the physical robot or its connectivity.</li>
               <li><b>Run</b> the instruction by clicking <button>Run</button>.
                   This wraps the instruction in a Job and runs that Job on the
                   Robot selected at the top of the dialog.</li>
               <li><b>Real</b> Now that we're confident that our software works by itself,
                   click <span style="background-color:#bae5fe;">&nbsp;<input type="radio"/> real </span>&nbsp; in the the Misc pane header
                   and click the <button>Run</button> again to try it on Dexter.</li>
               <li><b>Wrap in Job</b></li> Once you're satisfied with the instruction,
                   you can create a Job with that one instruction in it by
                   clicking <button>Wrap in Job</button>.</li>
               <li><b>Insert Instruction</b> You can insert the source code of the instruction
                   that you're creating, into the editor
                   by clicking <button>Insert</button>. If there is a selection,
                   that selection will be replaced by the new instruction.
                   Otherwise, the instruction's source code will just be inserted
                   at the editor's cursor.<br/>
                   If you are creating a Job, this inserts the whole Job's source code,
                   including its do_list.
                   <p></p>
                   The Insert button tries to
                   insert a comma after an instruction to prepare the Job
                   for the <i>next</i> insertion, but this sometimes gets screwed up,
                   so be careful that all the instructions in a Job's do_list are
                   separated by one comma.</li>
               <li><b>Copy</b> an instruction whose source is in the editor into
                   the <i>Make Instruction</i> dialog, <br/>
                   by option-clicking the name of the instruction in the editor.
                   This will highlight the whole instruction, preparing it
                   to be replaced when you click <button>Insert</button>.</li>
               <li><b>Run entire Job</b> by selecting it in the Editor pane
                    (option-click on <code title="unEVALable">new Job</code>)
                    then click <button>Eval</button> to define the job.
                    Then click the button with the Job's name in it that's
                    now in the Output pane header to run it.</li>
               <li><b>Debug entire Job</b> by:
                  <ul><li>Looking at its output in the Output pane from
                           error messages and <a href="#" onclick="DocCode.open_doc('IO.out_doc_id', event)">IO.out</a> instructions.</li>
                      <li>Looking at the <i>Simulate Dexter</i> pane
                           (select from the Misc pane header menu).</li>
                      <li>Inspect the Job's data structure
                           (click on its <button>Inspect</button> in the Output pane and
                      examine at least its <code title="unEVALable">do_list</code> and
                      <code title="unEVALable">user_data</code> fields).
                  </ul>
           </ol>
           Make Instruction is useful for demoing & learning the functionality of instructions.
           Most can be run using their default arguments. Those that can't will
           display an error message in the Output pane.
        </details> <!-- end make instruction -->

        <details  id="make_instruction_recording_doc_id" class="doc_details" id="recording_doc_id" class="doc_details"><summary>Recording</summary>
        <i>Programming by example</i> is an end-user programming technique used to
        decrease the complexity and time of entering explicit instructions.
        The simplest kind of programming by example is making a "recording" (program)
        of what you want the robot to do, then simply "play back" that recording
        to run the program.
        <p></p>
        On Dexter, you can create a Job who's do_list contains instructions for moving the
        robot through the same path that you manually move the robot.
        This is done by setting the robot to <i>follow_me</i> mode, and
        recording the positions of all the joints into a Job as they are moved.
        <p></p>
        The controls in the Record section let you start, pause, and stop recording.
        You can play the recording forwards and backwards, including single stepping forwards
        and backwards. You can select a starting position for playing and limit
        playing to a particular portion of the total recording.
        You can pause and resume the playing of a Job.
        You can also play a segment of a job by dragging the
        "playback head" of a recording. This is analogous to the "jog wheel" of
        audio recorders, video recorders, or a turntable that DJ's manually move to
        have fine control over the playing of a portion of a record.
        You can delete portions of the recording by preserving a middle portion,
        or by splicing out a middle portion and keeping just the ends.
        <p></p>
        When you are satisfied with a recording, you can insert the definition
        of a Job into the Editor that, when run, will <i>play</i> your recording.
        Inserting a job has lots of flexibility. After the Job is inserted into
        the editor buffer, you can edit and run it just like other Jobs.
        Inserting contains a special facility to make the building up
        of a higher level Job that concatenates lower level recording Jobs.
        This is analogous to piecing together a movie from snippets of film,
        only in the context of all the programmatic control that Jobs have.
        <p></p>
        The user interface for recording provides a lot of flexibility
        in a small space with (hopefully) obvious controls.
        Each control has an informative tool tip.
        Most of the controls can manipulate Job do_lists <i>not</i> derived from a recording,
        but the controls are optimized for recordings.
        <p></p>
        Below is one of an infinite variety of scenarios for you to use this recording facility.
        <ol>
            <li>In the Misc Pane header, select <select><option>Make Instruction</option></select>
            </li>
            <li>In the Misc Pane header, select <input type="radio" checked="checked"/>real .<br/>
                You can record in <i>simulate</i> mode, but it just records a bunch of static positions.
            </li>
            <li>At the very bottom of the dialog, twist down
                <details><summary style="font-weight: 400; font_size:12px;">Recording</summary></details>
                (You might have to expand the height of this pane to see it.)
                </li>
            <li>Click the <input style='background-color:#ff8899;' type='button' value='Record'/> button.
                If the Make Instruction being edited is <i>not</i> a Job, a new Job will be
                inserted there. This is the Job that the recording will be recorded into.
                If there is already a Job there, its do_list will be replaced by the recording.
                The recording button changes to:
                <input style='background-color:rgb(136, 255, 136);' type='button' value='recording'/> ,
                green, signifying that a recording is in progress.
            </li>
            <li> Grab the robot. In newer Dexters, put one hand on the "handle" at Joint 3, and
                 the other hand on the end effector. If you have a parallel gripper with finger
                 holes, stick your index finger and thumb into the holes so you can move
                 the gripper opening and closing. This will be recorded as Joint 7,
                 with gripper <i>twist</i> as Joint 6.
            </li>
            <li> Move the robot slowly and purposefully to one or more destinations.
                 If you want Dexter to pick up an object
                 <ol>
                     <li>Open the gripper</li>
                     <li> move the gripper over the object</li>
                     <li>close the gripper on the object</li>
                     <li>move the end effector (while holding the object in the gripper)
                     to the desired location</li>
                     <li>open the gripper to let the object go.</li>
                 </ol>
            </li>
            <li> While recording, you can pause the recording by clicking
                <b style='font-size:28px;'>&#8545</b> , the pause button.
                It will change to <b style='font-size:28px;background-color:#FFF019'>&#8545</b> , yellow,
                signifying that recording is temporarily paused.
                While paused you can move objects on the workspace or even Dexter without
                its path being recorded.
            </li>
            <li> Click the pause button again to resume recording.
                 It will change back to <b style='font-size:28px;'>&#8545</b> .
                 Note that it will help to have a
                 second person to start/pause/stop recording while
                 the first person is moving the robot.
            </li>
            <li> Click <input style='background-color:rgb(136, 255, 136);' type='button' value='recording'/>
                to stop recording. The button will change back to
                <input style='background-color:#ff8899;' type='button' value='Record'/> .
                The do_list field of the Job edited in the Make Instruction dialog
                will be populated with the joint angles pf the recording.
                <p></p>
                Observe that each instruction is just an array of 7 numbers.
                Such "data arrays" in the do_list are used as arguments
                to the instruction type indicated in the Job's
                <i>data_array_transformer</i> parameter.
                (Twist down "more args..." to see it.)
                If the value of that parameter is a string of a single character,
                that character represents a Dexter oplet. In the case of a recording,
                that value is <code>"P"</code> , indicating <code>Dexter.pid_move_all_joints</code>.
            </li>
            <li> You can edit the values in the Make Instruction properties for the new Job,
                 including for do_list. You can tweak values, or even put
                 in a computation such as <code>6 * 3.14</code> for a joint value.
            </li>
            <li>If your recording is beyond repair, just click
                <input style='background-color:#ff8899;' type='button' value='Record'/>
                and record over the top of your previous recording.
            </li>
            <li> To play the recording, click
                <span style='font-size:25px;'>&#9654;</span> .
                That big right arrow will change to <span style='font-size:25px;color:#00f036;'>&#9654;</span> ,
                green.
                The "playback head" will move along the horizontal track
                representing the position of each instruction as it is being run.
                That instruction and its location in the do_list is shown in the interface.
                Your Dexter should move along the path that you recorded.
            </li>
            <li> While playing, click <b style='font-size:28px;'>&#8545</b> or
                <span style='font-size:25px;color:#00f036;'>&#9654;</span> to pause playing.
                Click <span style='font-size:25px;'>&#9654;</span> to resume playing.
            </li>
            <li> You can drag the playback head (left or right) to move the Dexter and to change
                 the starting instruction for the next time you click
                 <span style='font-size:25px;'>&#9654;</span>.
            </li>
            <li> <span style='font-size:25px;'>&#9664;</span> plays backwards.<br/>
                 <span style='font-size:15px;'>&#9654;</span> single steps forwards.<br/>
                 <span style='font-size:15px;'>&#9664;</span> single steps backwards.
            </li>
            <li> The two vertical black rectangles on the green horizontal bar indicate
                 begin and end <i>marks</i> on your "tape" recording. These effectively
                 divide your recording into a middle segment, and "ends".
                 Drag the left (begin) mark right. Drag the right (end) mark left.
                 Notice that only the portion of the bar between the two marks is green,
                 while the part of the bar outside the marks is gray.
                 This is useful for trimming off the beginning and end of a recording.
            </li>
            <li> Click <span style='font-size:25px;'>&#9654;</span>. Only the
                 green portion of your recording will play.
            </li>
            <li> Select the <input type="radio" checked="checked">ends</input> radio button.
                 Notice that the middle portion on the marker bar is now gray
                 and the ends are green.
            </li>
            <li> Click <span style='font-size:25px;'>&#9654;</span>. Only the
                green portions (ends) of your recording will play.
                This is useful for splicing out a bad section of a recording.
            </li>
            <li> The <input type="button" value="Delete ends"/> button
                 will elminate the gray portions of the recording.
                 Once you click it, the recording becomes shorter, getting rid
                 of the parts of the recording that the markers exclude.
            </li>
            <li> When you change from <input type="radio" checked="checked">middle</input> to
                <input type="radio" checked="checked">ends</input> , the delete button changes from
                <button>Delete ends</button> to
                <button>Delete middle</button> .
                You can use the delete button(s) multiple times in any order on a recording,
                each time removing more unnecessary instructions until you're left with
                just what you want.
            </li>
            <li> Once you have the recording the way you want it, its time to save it
                 for future use. For all types of instructions, the <button>Insert</button> button
                 inserts the JavaScript for the Make Instruction dialog's instruction
                 into the editor pane.
                 <p></p>
                 When you are editing a Job made via recording,
                 the  the <button>Insert</button> button has some special functionality.
                 If the editor buffer is empty, or has no Job definitions,
                 two Job definitions are inserted at the end of the buffer.<br/>
                 1. A high level Job definition
                 containing just one instruction, a <code>Control.start_job</code> instruction,
                 that references<br/>
                 2. A "low-level" Job that contains, in its do_list, the actual
                 move instructions captured in the recording.
                <p></p>
                If there is already at least one Job in the editor, in place of the
                above "high level" Job, a <code>Control.start_job</code> instruction
                is inserted at the bottom of the do_list of the first Job in the editor.
                Then, at the bottom of the editor, a new low-level Job is inserted
                containing the recorded move instructions. This low-level Job
                will have a unique name (for the editor buffer).
            </li>
            <li> Click the <button>Eval</button> to define the Jobs in the editor.</li>
            <li> Click the high level Job button to run the Jobs that it starts,
                 or any of the low-leve Job buttons to run them individually.
            </li>
            <li>Edit the Jobs just like an ordinary Job. A high leverage thing
               to do is reorder, and/or duplicate <code>Control.start_job</code> instructions
               in the high level Job without touching the low level Jobs.
            <li>When you're satisfied with your Job set, save the file</li>
            <li>Now you can load and start that Job, (and others), perhaps after
               shutting down and re-launching DDE,  by choosing from
               DDE's File menu <b>Load and start Job...</b>.
            </li>
            <li>You can build ever higher hierarchies by creating Jobs such as:
            <pre><code title="not in TestSuite.">new Job({
    name: "my_job",
    robot: new Brain({name: "b0"}),
    do_list: [
        Control.start_job("my_recording1.dde", undefined, undefined, true)
        //...
    ]})</code></pre></li>
    </ol>
    <!-- obsolete Insert Job dialog box description
            <li> Click the <button>Insert</button> button. If you just want your Job
                 inserted with nothing fancy, click this dialog's <button>Insert</button>
                 button and the source code for the Job will be inserted into the editor.
            </li>
            <li> Now let's look at the options. The dialog is divided into two parts,
                a "High Level Job" and a "Low Level Job". <b>Insert</b> makes it easy to create
                a library of low level recordings, and refer to each of them
                in a higher level job that starts the lower level Jobs in sequence.
                That sequence can be reordered just by editing the sequence of
                instructions in the higher level Job. You can play a lower level Job
                zero or more times. You can programmatically select them using
                <code title="unEVALable">function</code> definitions and JavaScript's <code title="unEVALable">if</code> or
                have them returned from the body of a loop to play them again and again.
                The <code>Control.start_job</code> instruction turns an entire recording
                into just another instruction that can be mixed and matched just like
                any instructions.
            </li>
            <li> Click the <input type="radio" checked="checked">new Job def containing reference</input>
                 radio button.
                 This will create a high level Job with one <code>Control.start_job</code> instruction
                 that, when run, will "play" our recording.
            </li>
            <li> Because inserting a Job produces a fair amount of code, we provide a
                 <i>preview</i> to let you see just what will be inserted
                 before screwing up your editor buffer with unwanted code.
                 Click the <button>Preview...</button> button now.
            </li>
            <li> The Preview dialog, like the Insert Job dialog, has a
                 <i>high level</i> and a <i>low level</i>,
                 one for each Job to be inserted. First take a look at the low level
                 Job definition. This is just your original recording.
                <p></p>
                The high level job definition looks like:
                <pre><code title="not in Testsuite">new Job({
    name: "high_level",
    do_list: [
        Control.start_job("Job.job2", {start_if_robot_busy: true}, "error", true),
    ]})</code></pre>
            When the high level job is run, it will start the low level job indicated
            by its first argument (here it's <code>"Job.job2"</code>), wait
            for it to complete, and then proceed to the next instruction.
            In this case, since there is no next instruction, the high level Job just finishes.
            In fact, with just one <code>Control.start_job</code> instruction, running the high level
            Job has the same effect as just running the low level Job by itself.
            </li>
            <li> Click the "X" in the upper right corner of the Preview dialog to close it.
            </li>
            <li> Before we insert the code, we recommend you start a new Editor buffer
                 by choosing the File menu's "new" item.
            </li>
            <li> Now click the <button>Insert</button> button in the Insert Job dialog box.
            </li>
            <li> The Editor pane now contains the code. Click the <button>Eval</button> button
                 and you'll see two new Job buttons on the Job bar. You can start
                 either one by clicking on it, just like if you had defined the
                 Jobs from scratch. This will play your recording. By saving the file,
                 you can open it at a later time and play the recording, or send
                 the file to someone else to play, just like for any Job.
            </li>
            <li> We can edit the code for either Job. Copy the instruction in the
               high level Job and paste it below the original.
               Make sure there's a comma between the two instrutions.
               Define the new Job by selecting it can clicking the <button>Eval</button>.
               Clicking its Job button in the Output pane header will now play
               our recording twice.
            </li>
            <li> Now let's extend our high level Job with a new recording.
                 Click on the <input style='background-color:#ff8899;' type='button' value='Record'/>
                 button and move the robot.
                 Click the <input style='background-color:rgb(136, 255, 136);' type='button' value='recording'/>
                 button to stop recording.
                 This will replace the do_list in the Make Insrtuction pane
                 with a new do_list of your new robot path. The Job will also have a new default
                 name, which you can edit if you like.
            </li>
            <li> Cut out parts of the recording if you like as described above
                and click the <button>Insert</button> button.
            </li>
            <li>In the upper portion of the Insert dialog, select the<br/>
                <input type="radio" checked="checked">Reference to low-level Job only</input><br/>
                radio button. This will cause just the reference to the
                recording to be inserted for the High Level, not the whole
                High Level Job definition, i.e.
                <code>Control.start_job("Job.job2")</code>.
                That reference will be inserted into the editor buffer
                at the place of its cursor, so
                make sure your editor cursor is in the do_list of
                the high level job. Also, verify that all the instructions
                in the do_list are separated by commas.
            </li>
            <li>The low level Job will be inserted at the bottom of the buffer.
                It will have the same Job name as the call to start_job's first argument.</li>
            <li>The Insert Job dialog box has lots of options for the low level (recording)
                Job as to
                <ul> <li>what instructions are to be inserted</li>
                     <li>how they are wrapped up</li>
                     <li>where they are inserted.</li>
                </ul>
                Please experiment with them!
            </li>
            -->
        </ol>
        </details> <!-- end Recording -->

        <details  class="doc_details" id="simulate_pane_doc_id" class="doc_details"><summary>Simulate Dexter</summary>
            <div style="padding-left:20px">
                The simulate pane shows a graphical simulation of Dexter with
                joint angles from the last robot status returned.
                <p></p>
                Use the mouse in the <i>Simulate</i> pane to:
                <ul style="padding:0px;margin-left:20px;display:inline-block;" >
                    <li><b>Rotate table</b>: mouse-down then drag.</li>
                    <li><b>Zoom</b>: shift-down then mouse-down then <br/>
                                     drag right to make bigger, drag left to make smaller</li>
                    <li><b>Pan</b>: alt or option down,then mouse-down,
                        OR  middle-button (scroll-wheel) down,
                        then drag.</li>
                </ul><br/>
                See also <a href="#" onclick="DocCode.open_doc(new_dexter_parameters_doc_id, event)">
                    New Dexter Parameters</a>
                <p></p>
                <button>Demo</button> shows Dexter randomly flailing around, not
                correlated to a connected Dexter.
            </div>

        </details>  <!-- end simulate pane -->
    </details> <!--end misc_pane -->
    <details id="dexter_user_interface_doc_id" class="doc_details">
         <summary>Dexter User Interface</summary>
         This dialog box can be brought up by choosing Jobs menu/Dexter UI.
         It allows you to control a Dexter (actual robot or the simulator, depending on the
         radio button settings in the Misc Pane header) by dragging and clicking
         widgets. Notice that when you move one widget, it adjusts the other related
         widgets pro-actively so you can see in the dialog box the affect your having,
         as well as the effect on Dexter itself. Watching how the change in one value
         affects others is a great way to understand the basics of robot kinematics.
        <p></p>
         The controlled Dexter is the one selected in the Misc pane header when you
         bring up the dialog.
         <p></p>
         The major sections of this dialog are:<br/>
         <b>Top button bar</b> for moving Dexter to
            <ul><li><input type="button"  style="padding:2px;height:22px;"value="ready"/>
               This moves Dexter joints to 0 angles except J3 which goes to 90 degrees.
               This provides a flexible starting position for many moves, in contrast to...</li>
               <li><input type="button"  style="padding:2px;height:22px;"value="home"/>
                   which is all joint angles 0 (straight up). Think about reaching up
                   to a ceiling that you can just barely touch. You can't keep touching
                   the ceiling if you change just about any configuration of your body.
                   So such a position is, constraining. We recommend that you start exploring
                   this interface by clicking the ready button and not be in home position.</li>
                <li> <span style="font-size: 24px; color: rgb(0, 200, 0); vertical-align:-10%;">◀</span>
                    <b>Move to begining</b> This positions the editor cursor before the first
                      instruction in the do_list of the job that the cursor started in.
                      Now you can click on "Step Forward" or "Run Forward" to execute
                      instruction(s).
                </li>
                <li> <span style="font-size: 18px; margin-left: 5px; color: rgb(0, 200, 0); vertical-align:-10%;">◀</span>
                    <b>Step backward</b> If there is no selection, clicking this button selects the instruction before the
                      cursor. If there is a selection, it selects the instruction before that selection.
                      Then it does what "Step Forward" does with the selected instruction.
                      <span style="color:red">Beware: </span> Stepping backward <i>can</i> lead to
                      unexpexted behavior in a Job, but at least for move instructions,
                      its what you would expect.
                </li>
               <li> <span style="font-size: 18px; margin-left: 5px; color: rgb(0, 200, 0); vertical-align:-10%;">▶</span>
                       <b>Step forward</b> If the cursor in the editor is before a Job instruction, that instruction is
                       selected. If there is a selection, the NEXT instruction in the job is selected instead.
                       If this newly selected instruction is a "move" instruction of:
                       <ul>
                           <li><code>Dexter.move_all_joints</code></li>
                           <li><code>Dexter.pid_move_all_joints</code></li>
                           <li><code>Dexter.move_to</code></li>
                           <li><code>Dexter.pid_move_to</code></li>
                       </ul>
                        the joint angle or xyz arguments are used to populate the wigets in the Dexter User Interface dialog
                        <i>and</i> the robot (or simulation) of the Dexter User Interface is sent this instruxtion
                        to run.
                        <p></p>With a selected instruction, you can drag the wigets in
                           the dialog and it will update the corresponding arguments
                           in the editor.
                        <p></p>
                       The insert buttons on the bottom,
                       move instructions from the dialog to the editor. The "step forward"
                       and "step backward" buttons
                       moves an instruction in the other direction.
                       This provides a "two way street" between
                       values in the editor and the Dexter User Interface dialog.
               </li>
                <li> <span style="font-size: 24px; color: rgb(0, 200, 0); vertical-align:-10%;">▶</span>
                    <b>Run Forward</b> Runs all the instructions in the Job after the selection,
                    or, if none, the cursor.
                </li>
            </ul>
            <b>XYZ widgets</b> The big rectangle lets you drag the green dot to
                set the x and y of Dexter. Valid locations are in the white "donut"
                in the center of the box. Outside the donut (and in the donut hole)
                are places Dexter can't reach, either because they're too far away,
                or Dexter's body prevents its end effector from going there.
                Use the vertical slider on the right to move Dexter's end effector
                vertically. The X, Y, and Z number spinners also let you move
                Dexter, but with the advantage of showing you the exact meters
                of your movement. You can also type into these number spinners.
                <p></p>

            <b>Joint widgets</b> Sliders for all 7 joints and associated number
               spinners. A great kinematics learning experience is moviing a joint slider,
                then watching green dot and Z slider change in concert.
                (and visa versa). Note that the donut varies dramatically
                as Z changes.
            <p></p>
            <b>Point Down Checkbox</b> If checked, (the default), it disables the sliders for
            joints 4 and 5 because those are used to keep the end effector pointing down.
            When this is checked, and you drag the sliders for J2 and J3, you'll see
            the J4 slider position automatically change.
            <p></p>
            <b>Keyboard Control</b> You can change xyz values, joint values, and J6roll by
            pressing keys. First, you must click on the big XY square to select it, then,
            clicking a key will change a value the minimum amount. Holding the key
            down will gradually accelerate the amount the value changes up to a maximum.
            The delay duration between the first change and the start of "repeats" is
            user settable in WinOS and MacOS. (Default is about a half a second.)
            After that delay, the number of repeats per second is also settable in the OS.
            <p></p>
            <table>
                <tr><th>Values to change</th><th>Keys to press</th></tr>
                <tr><td>-X</td><td>left arrow, a</td></tr>
                <tr><td>+X</td><td>right arrow, d</td></tr>
                <tr><td>-Y</td><td>down arrow, s</td></tr>
                <tr><td>+Y</td><td>up arrow, w</td></tr>
                <tr><td>-Z</td><td>comma, c</td></tr>
                <tr><td>+Z</td><td>period, e</td></tr>
                <tr><td>-J6Roll</td><td>v</td></tr>
                <tr><td>+J6Roll</td><td>r</td></tr>
                <tr><td>-Joints 1 thru 7</td><td>1 thru 7</td></tr>
                <tr><td>+Joints 1 thru 7</td><td>shift 1 thru 7</td></tr>
            </table>
            <br/>
            <b>FromDex Checkbox</b> If checked, the dialog input widgets are disabled,
            and you can manually move the robot. The joint angles of the robot are
            transmitted to the dialog box and update the appropriate values for
            joints and x,y,z.<br/>
            Clicking the PHUI button on the end effector
            (if you have one) will be the same as clicking the insert <button>Instruction</button> button.
            This allows you to record a sequence of "waypoints" in a Job to move
            Dexter through. The most important are the beginning and end points,
            but you may wish to record several intermediate waypoints to make
            sure Dexter clears obstacles in the workspace on its way to the end point.
            <p></p>
            <b>Insert widgets</b> Let you take the current position in the dialog
            and copy it into the cursor location of the editor as an instruction.
            Click the <input type="button" style="padding:2px;height:22px;"value="Job"/>
            button first to create a Job with its first instruction.
            Then move the sliders, etc. to where you want the robot to go
            and notice that the numbers in the editor change to follow suit.
            With an instruction highlighted, clicking the
            <input type="button"  style="padding:2px;height:22px;"value="instruction"/>
            button inserts a new instruction right below the selected one.
            With no selection, you can insert an instruction at the cursor.
            The type of instruction inserted is selectable in the select menu on the left.
    </details>

 </details> <!-- end user interface -->

<details id="JavaScript_guide_id" class="doc_details"><summary>JavaScript</summary>
    DDE let's you control a Dexter robot with Javascript. You can execute all of JS.
    DDE extends JavaScript with libraries of functions that control Dexter, allow access to Unix commands
    on Dexter's computer, allows access to HTML and the DOM, has a convenient window system
    and a variety of other facilities for general purpose programming.<p></p>
    In DDE, <code>console.log</code> sends its output
    to the (usually hidden) Chrome console.
    Use <code>out</code> (on the <button>Insert&#9660;</button> menu) to see output in the Output pane.
    Click right on the DDE window and choose "Inspect Element" to see the Chrome console.

<details class="doc_details" id="learning_js_doc_id"><summary>Learning JavaScript</summary>
    The quickest way to learn most of the JavaScript you'll need is from the
    Editor Pane's <button>Learn JS&#9660;</button> menu.
    Read menu item tooltips, choose an item to insert code, then click <button>Eval</button>
    to eval all the code in the Editor.
    If there's a selection when you click <button>Eval</button>,
    just the selected code will be evaluated. In fact, <button>Eval</button>
    works on any selected text. Try it by:
    <ul><li>Select the all below code in white.</li>
        <li><code style='padding:4px;'>6 / 2 + " * 4 "  </code></li>
        <li>Click the Eval button.</li>
        <li>In the Output pane, select<br/> 3 * 4 (not including the quotes).</li>
        <li>Click the Eval button.</li>
     </ul>
    Choose menu items under  <button>Learn JS&#9660;</button> in depth-first order for a JavaScript overview, and later you can choose
    exactly those items you need to insert a code snippet.<br/>
    <fieldset><legend><span style="color:red;">Warning</span></legend>
        <b>Code in the editor that has not been evaled will have no effect.</b></fieldset><br/>
    <button>Step</button> is like <button>Eval</button> only it shows you each intermediate expression
    as it is being evaled
    and the returned values, so you can watch your code run in detail. Normally steppers
    are used for "debugging", but the essenence of debugging is understanding what your
    code is doing. Stepping through known good code is a great way to let the computer
    show you exactly what its doing. Here's a step by step (ahem) guide to using the
    JavaScript stepper for learning JS:
    <ol>
      <li>Choose File menu/New to make a new Editor buffer.</li>
      <li>Choose <i>Learn JS menu/JavaScript Example</i> to insert a function definition and
          a call to it. </li>
      <li>Read the comments.</li>
      <li> Click <button>Eval</button> . When there is no selection, all the code in the editor
           is evaluated.</li>
      <li> Observe the print statements in the Output pane caused by the calls to <code>out</code>
          in the definition of "foo", and the returned value of the call.</li>
      <li> Select the call to foo, i.e. the last line of code.</li>
      <li> Click <button>Step</button></li>
      <li> The Chrome Dev Tools window will pop up.<br/>
           In the upper right, observe the stepper controls.
           <img src="doc/coor_images/stepper_buttons.png" width="120" alt="stepper buttons"/>
           (if you narrow the window to see this text, those controls will move.)
           The big blue right pointing triangle will just run the code until its end,
           or until it hits a breakpoint.
           The <i>over arrow</i> (to its right), steps to the next expression at the current level.
           Click it.</li>
       <li> Now you'll see "foo", the name of our method highlighted.
            Click the stepper control <i>down arrow</i>.</li>
       <li> Now you'll see the source code of our definition of "foo".
            Clicking the <i>over arrow</i> to step through the code.</li>
       <li>While stepping, place the mouse on top of an argument or variable to
           see its current value.</li>
       <li>Click the <i>over arrow</i> or the <i>up arrow</i> to evaluate a bunch of code in one fell swoop.</li>
       <li>Click the "Console" tab to get a "JavaScript" terminal.</li>
       <li>Type in some JS code and hit return. It will show you the result of evaling that code.
            You can use local variables in your typed in code and they will be bound to the
            same values as they are at the point where the stepper is in the code you're stepping.</li>
       <li>If you keep stepping past the end of the function definition, you'll go into
           DDE internal code. You can keep stepping to see it if you like, or
           just click the big blue triangle to complete stepping.</li>
       <li>Congrats. You're now a JavaScript programmer!</li>
    </ol>
    A nice interactive tutorial is available at:
    <a target="_blank" href="https://www.codecademy.com/learn/javascript">
        https://www.codecademy.com/learn/javascript</a>
    Beware that <code>console.log</code> prints to the
    <i>normally hidden</i> chrome console. DDE's
    <a href="#" onclick="DocCode.open_doc(out_doc_id)"><code>out</code></a> is easier to use.
    <p></p>
    If you want more prose, there are lots of JavaScript tutorials on the web. You will not need to know
    HTML, CSS or JQuery that are commonly taught in conjunction with JavaScript.
    <p></p>
    <a href="http://jsforcats.com" target="_blank">A very gentle intro to JavaScript.</a>
    Ignore the parts that use the <i>Underscore</i> library.<br/>
    A more formal (and long) <a href="http://www.w3schools.com/js/" target="_blank">tutorial</a>.
    </details> <!-- end Learning JavaScript -->
    <details id="js_for_python_programmers_doc_id" class="doc_details"><summary>JS for Python Programmers</summary>
        DDE supports calling <a href="#" onclick="DocCode.open_doc(python_doc_id)">Python from JavaScript</a> and DDE's user interface.
        Python and JavaScript are two of the most popular general purpose programming languages in use today.
        Though they differ in many details, for describing the instructions that are the core of DDE's Jobs,
        they are amazingly similar for the most common operations. Especially with DDE's tools for learning
        JavaScript, the Python programmer won't have a lot of difficulty adapting.<br/>
        Similarities:
        <ul>
            <li>Literal numbers (integers and floats) look the same <code>123</code> <code>-45</code>  <code>0.56</code></li>
            <li>Operators that are the same:
                <ul>
                    <li>Arithmetic: <code title="unEVALable">+</code>  <code title="unEVALable">-</code>  <code title="unEVALable">*</code>  <code title="unEVALable">/</code>  <code title="unEVALable">**</code>  <code title="unEVALable">%</code></li>
                    <li>Comparison: <code title="unEVALable">==</code> <code title="unEVALable">!=</code> <code title="unEVALable"><</code>  <code title="unEVALable"><=</code>  <code title="unEVALable">></code>  <code title="unEVALable">>=</code></li>
                    <li>Assignment: <code title="unEVALable">=</code>  <code title="unEVALable">+=</code> <code title="unEVALable">-=</code> <code title="unEVALable">*=</code>  <code title="unEVALable">/=</code> <code title="unEVALable">**=</code></li>
                </ul>
            </li>
            <li>Literal strings in both are surrounded by either single or double quotes. i.e. <code>"foo"</code></li>
            <li>Variables: You don't need to declare types for either JS or Python. <br/>
                Same syntax for variable names:
                <ul>
                    <li>Start with letter or underscore.</li>
                    <li>Non first characters: letters, digits, underscore and hyphen.</li>
                    <li>Case-sensitive: <code title="unEVALable">age</code>, <code title="unEVALable">Age</code> and <code title="unEVALable">AGE</code> are three different variables.</li>
                </ul>
            </li>
            <li>Booleans: Python <code title="unEVALable">True</code> <code title="unEVALable">False</code>  JS: <code>true</code> <code>false</code></li>
            <li>Python's "list" is like JS's "array".<br/>
                  Make a literal JS with the same syntax as Python's list: <code>[0, 1, 2]</code><br/>
                  Reference an element the same i.e. <code  title="unEVALable">myarray[2]</code><br/>
                  The first element in both languages is at index 0.</li>
            <li>Ordinary function and method calls look the same.<br/>
                Example Job instruction:<br/>
                <code>Dexter.move_all_joints(10, 20, 30, 40, 50) </code><br/>
                Example Job do_list:
                <pre><code>[Dexter.move_all_joints(10, 20, 30, 40, 50),
 Dexter.move_to([0.5, -0.4, 0.3])] </code></pre></li>
            <li>Both are English based, have dynamic typing, have automatic garbage collection, are interpreted (no need for compiled files)</li>
            <li>Object orientation similar, esp. in method call syntax.
            <li>Functions definitions: similar functionality
                <ul><li>default values</li>
                    <li>arguments by position</li>
                    <li>arguments by keyword with slightly different syntax.</li>
                 </ul>
            </li>
         </ul>
         Lots of help available on the web, including:<br/>
        <a target="_blank" href="https://runestone.academy/runestone/books/published/JS4Python/index.html">Tutorial for Python programmers learning JS.</a><br/>
        <a target="_blank" href="https://observablehq.com/@ballingt/javascript-for-python-programmers">Concise, Computer-sciency JS for Python programers.</a>
          Beware: One misleading sentence in it is: "JavaScript has default parameters but no keyword arguments".
          Newer versions of JS, such as DDE uses, do have keyword args, though they aren't exactly the same as Python's.<br/>
        <a target="_blank" href="https://medium.com/@alexander.s.augenstein/beginners-guide-to-python-vs-javascript-in-one-big-table-22bc78bdf880">Comparison Table</a>
           Not complete, but still useful for common operations.
    </details> <!-- end JS for Python Programmers -->

    <details class="doc_details"><summary>JS for Other Programmers</summary>
        If you're already a competent programmer but don't know JS specifics,
        here's a few tips:<br/>
        JavaScript is an <b>untyped</b> language. That means you don't declare types
        of variables, function parameters, or return values. So for instance,
        <br/>C's &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code  title="unEVALable code fragment"> int foo = 32;</code> <br/>
        in JS is <code>var foo = 32;</code><br/>
        The type system is,
        um, weak. The <b>object system</b> is also in somewhat of disarray. Because of that
        there are many packages adding a more rational Object system, but they all
        differ, confusingly.
        <p></p>
        There's no <b>compiler</b> in JavaScript. There are no "includes" or
        "pre processors" or "macros". The code is run in an iterpreter inside
        a browser (every browser, actually). The major browsers also offer a
        debugging environment, though typically no Editor. DDE gives you an editor
        and a lot of other convenieces for developing code.
        <p></p>
        <b>Whitespace</b> characters are those characers that "take up space" but you can't
        otherwise see. This includes space, tab, newline and a few others. In Javascript,
        mostly its the case that 1 whitespace character is equivalent to any number of
        contiguous whitespace characters. Except that function calls need to be ended
        with either a semicolon or a newline, not just a space.
        For example:<br/>
        <code>Math.min(3, 4); Math.min(5, 6)</code><br/>
        is legal, as is:<br/>
        <code>Math.min(3, 4)<br/>
            Math.min(5, 6)</code><br/>
        but not:<br/>
        <code title="errors"> Math.min(3, 4)  &nbsp;Math.min(5, 6)</code>
        <p></p>
        There is no <b>Window System</b> per se in JavaScript but it ties into
        HTML, CSS and the browser's Document Object Model. This is confusing since
        it requires several different syntaxes and ways-of-thinking. DDE
        simplifies this by providing
        the key window system facilites you'll need for commanding Dexter
        via the function <code>show_window</code>, the <code title="unEVALable code fragment"> Human.enter_*</code> instructions
        and a few other utilities. See the <button>Insert&#9660;</button> menu.
        <p></p>
        Javascript's functionality greatly expanded in 2016 with a new version who's name
        itself is confusing. You'll see <b>EcmaScript 6</b>, JavaScript 2015 and a few variants.
        Browsers vary as to how much of this they implement, but Chrome, the browser
        DDE uses, has nearly 100% of this new standard implemented as of June, 2016.
        DDE depends on these new features.
        <p></p>
        See in, this documentation, <b>Installation/Keep Chrome up to date</b>.
        JS 6 can run code from earlier versions of JS, but there's an awful lot
        of new functionality that isn't in most existing JS documentation.
        <p></p>
        Like all popular programming languages, JavaScript has its problems.
        But its unique in its "deployability". JS and DDE runs on Windows, Macs,
        Linux, and Chromebooks. Its new features are quite powerful, and DDE strives
        to make learning and using JS as simple as possible. Your new skills will
        serve you well in Web programming for billions of users.
        <p></p>
        Recommended JS Tutorials for the experienced programmer (both of which ignore
        the new JS 6 extensions):<br/>
        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">
            JS re-introduction</a><br/>
        <a target="_blank" href="http://www.2ality.com/2013/06/basic-javascript.html">more comprehensive</a>
    </details> <!-- end JS for Other Programmers -->
</details> <!-- end JavaScript -->

<details class="doc_details"><summary>Workflow</summary>
    DDE let's you execute arbitrary JavaScript that is entered into the Editor pane.
    <ol><li>The Editor pane's menus allow you to insert useful code snippets into
        the Editor pane.</li>
        <li>You can edit and extend the inserted code. Use any valid JavaScript.</li>
        <li>Click the <button>Eval</button> button. The result of the last expression evaluated
            will appear in the Output pane.</li>
        <li>If there is a selection when the <button>Eval</button> button is clicked, only the selected
            code will be executed.</li>
        <li>Triple click on a line to select it.</li>
        <li>Alt-click on a JS function call to select it.</li>
    </ol>
    Try this: type into the editor<br/>
    <code>2 + 3</code><br/>
    Click <button>Eval</button> and see <b>5</b> in the Output pane.
    <p></p>
    We highly recommend that you enter/edit only small amounts of code before
    selecting and Evaling it. This makes it quite likely that new bugs that you introduce
    will be in the small amount of code you just entered,
    making the "locate bug" task easy. When adding an instruction to the definition of a Job,
    the source code for every Job instruction should eval without an error.
    <p></p>
    The File menu contains a checkbox named "Auto Save". When checked,
    the file you're working on will be saved before every <button>Eval</button> button click.
    Keeping this checked and following the above advice about only editing small
    amounts of code before Evaling means you won't lose a lot of work if DDE crashes.

    <details class="doc_details"><summary>Persistent Data</summary>
        When you have defined a named function, set a global variable or a property
        reachable by a global variable, that data will remain in the JS environment until
        you relaunch DDE. This is even true if you bring a new buffer into the editor.
        <p></p>
        Overall this facilitates programming, but it does have some behavior that may be unexpected.
        Imagine you define
        <br/><code>function foo(){return bar()}</code> and
        <br/><code>function bar(){return 'stuff'}</code>
        <br/>You call <code>foo()</code> => <samp>'stuff'</samp>.
        Now you rename <code>bar</code> to <code title="unEVALable code fragment"> baz</code> like so:
        <code>function baz(){return 'stuff'}</code>and test
        <code>baz()</code> => <samp>'stuff'</samp> as expected, as does calling
        <code>foo()</code> => <samp>'stuff'</samp>. Now
        <ul><li>Save this code in a file</li>
            <li>Relaunch DDE</li>
            <li>Open the file in the editor</li>
            <li>Eval it</li>
            <li>Call <code>foo()</code></li>
        </ul>
        The call to <code>foo</code> will error because <code>bar</code> is no longer defined.
        When redefining function and global variables, its a good idea to save your
        code in file(s), relaunch DDE, and reload your code periodically, to check against such issues.
    </details>
    <details class="doc_details"><summary>Working with Dexter</summary>
        <ol><li>In the output pane, enter any Unix BASH shell command in the <i>shell</i> type in
            and hit enter. It is run on Dexter's computer.  Returned text will be printed below.
            The command you typed in will also be added to the Output pane's <button>Ops&#9660;</button> menu under
            "User Commands" should you want to execute it again.
            </li>
            <li>The Output pane's <button>Ops&#9660;</button> menu allows easy access to finding out about the ROS environment.</li>
            <li>If you click on underlined text in the Output pane, it will scroll to
                a relevent section of the Doc pane, or, in the case of core JavaScript,
                pop up a window of documentation.</li>
        </ol>
    </details>
</details> <!-- end Workflow -->
<details class="doc_details"><summary>UI Design Critera</summary>
    Criteria for Choosing Best UI Design Candidate:
    <ul><li> Ease of learning and using the first few times.
        This is the most important criteria for DDE because there
        are MANY functionalities and each user
        should use many of them.
        This criteria includes good documentation or better, a UI that doesn't need any.
        </li>
        <li>Quickness of use for experienced users.
            If you expect a user to use the interface many
            times in a row, this becomes important, though usually
            this conflicts with first-time users. Try hard to accommodate both.
        </li>
        <li>Quickness and confidence of implementation.
            Sadly this is rarely highly predictable, through generally
            a more complex design takes longer to create and is more
            likely to have bugs, a usability no-no.
        </li>
        <li>Reduce redundancy so users don't waste time scanning the UI.
            <i>Exception</i>: A little redundancy to satisfy "just in place" information
            is often warranted.
        </li>
        <li>Be concise so users don't waste time scanning the UI,
            but just-in-place essential information is really useful.
            Hiding more text behind tooltips is often a good strategy.
            Use newlines i.e. <code title="unEVALable">\n</code> in tooltips
            to improve readability.
        </li>
        <li>Don't use synonyms. Pick one word/term and always use that to
            describe the same thing.<br/>
            <i>Exception</i>: when you are <i>defining</i> the
            word/term for a user, synonyms can help.
        </li>
        <li>Make the area your UI takes up small so screen real estate
            can be used for other things.
            Use tooltips to meet "Ease of learning" and this criteria
            simultaneously. Graphic designers love lots of whitespace, tiny fonts,
            non-functional pictures, and low contrast between text &amp; its background.
            But usability is more important than aesthetics
            for anyone actually <i>using</i> the software.<br/>
            <i>Exception</i>: Video games.
         </li>
        <li> Reduce typing when possible. Example: If the user is to enter a number,
             dont use<br/>
             <code title="unEVALable">&lt;input/&gt;</code>,<br/>
             use something like:<br/>
             <code title="unEVALable">&lt;input type="number" min="0" max="10" step="0.1"/&gt;</code>.<br/>
             If there's a few possible words to enter, use an HTML
             <code title="unEVALable">select</code> tag or radio buttons if just a couple.
             For booleans use <code title="unEVALable">&lt;input type="checkbox"/&gt;</code><br/>
             <i>Exception</i>: When prototyping and you're not sure what the input should be,
             just use a text input.
         </li>
        <li>Demoability: big controls for easy hitting
            while standing up & talking,
            Big text so demo watchers can see easily.
            Conflicts directly with "Small".
        </li>
    </ul>
    Such criteria, if complete, nearly always have "opposites" in them
    such that 1 design can't possibly do all best,
    though that is something to strive for.
    If all design criteria are met best by one design,
    you don't have to weight the criteria, which
    is always problematic.
</details> <!-- ui design -->
<details class="doc_details" id='series_doc_id'><summary>Series</summary>
    A useful way to organize knowledge is to construct lists of similar-typed concepts.
    DDE calls such lists <b><i>series</i></b>. There are over 30 series in DDE, including
    numbers, dates, colors, functions for math, strings, arrays, etc.
    The most useful functions and data structures in DDE are in a series.
    <p></p>
    The <button>Series&#9660;</button> menu allows you to insert into the
    editor, an example item from each series. When you click on a series item in the editor,
    help is given on that item in the Output pane. Using the Right and Left arrow
    keys, you can replace a selected series item with the next or previous item
    in its series. The Up and Down arrow buttons replace a selected series item
    with an item from <i>another</i> series. Effectively this uses the series of series.
    <p></p>
    An example of a series is <i>boolean</i>. Choose it from the <button>Series&#9660;</button>
    menu. It inserts <code>true</code>. Now hit the right arrow key to see additional items
    in the series (<code>false</code>, <code>null</code>, etc.) The left arrow goes backwards through the series.
    <p></p>
    With any series item selected, hit the down arrow. If you're on a member of the boolean series,
    this will replace the selection with an item from the <i>integer</i> series.
    Press the up and down arrows to go to a new series.
    <p></p>
    Each time you go to a new item from series or click on one already in the editor,
    help on it will be displayed in the Output pane.
</details>
<details class="doc_details"><summary>Jobs</summary>
    A job feeds the instructions in its do_list to a robot for making things.
    Most users of DDE will spend most of their time creating and running jobs.
    <p></p>
    The <button>Series&#9660;</button> menu gives help on Jobs and Robots.
    <br/>
    The <button>Jobs&#9660;</button> menu contains numerous examples of defining Jobs and
    how to run them. Choose <b>Insert example 1</b> and read the comments to understand Job syntax.
    See the <b>Reference Manual</b> on <b>Job</b> for the details of specifying a job.
</details>
<details class="doc_details" id='robots_doc_id'><summary>Robots</summary>
    A robot is a machine capable of performing the instructions in its instruction set.
    The class hierarchy of DDE Robots is:<br/>
    <ul><li><code>Robot</code>
        <ul><li><code>Brain</code></li>
            <li><code>Dexter</code></li>
            <li><code>Human</code></li>
            <li><code>Serial</code></li>
        </ul>
    </li>
    </ul>
    To get a robot to perform instructions, you create an instance of its class, giving it
    at least a name (and in the case of Dexter, an ip_address and a port number) then
    create an instance of Job and give it a robot property of the robot you created.
    The job should also have a do_list, which is the sequence of instructions to run
    on the robot. When the <code title="unEVALable code fragment"> start</code> method is called on a Job, it sends the items
    on its do_list to the associated robot, sequentially, one at a time.
    <p></p>
    From a software standpoint, a robot <i>is</i> its instruction set.
    The key difference between different kinds of Robots is the difference
    between their instruction sets. If a robot is sent
    an instruction not in its instruction set, it will error, because it doesn't know
    how to perform that kind of instruction.
    <p>
        <b>Robot</b> is the superclass of all robot classes. It contains instructions that
        can run on all robots. These are <i>control</i> instructions because they help
        manage the flow of instructions in a job. Examples include: <code>Robot.stop</code>
        to end a job immediately without processing the insructions after the stop instruction,
        and <code>Control.wait_until</code> which pauses execution of the job's instructions until
        the calling of the given JS function returns true.
    <p></p>
    See <button>Series&#9660;</button> submenu "robot" for details about robots as
    well as the <b>Reference Manual</b> section on Robots.
</details>
<details class="doc_details" id='drawing_with_DXF_doc_id'><summary>Drawing with DXF</summary>
Dexter can draw the lines specified in a dxf file. To do that, Dexter needs to know
a bunch of other information, most importantly the plane that it will be drawing on.
Note that only line segments are currently supported.
The DXF shapes of Circles, fillets, and polylines etc. are not.
<p></p>
To draw, you must define the plane of the drawing surface.
A plane can be defined by specifying three points.
We define each point using an array of 3 numbers, x, y, and z in meters
for each point.
You set these points in the 2nd argument to DXF.init_drawing
as an array of three points or in other words, an array of
three element where each element is an array of three numbers.
By doing repeated calls to DXF.init_drawing
(tweaking the points each iteration)
and running a job to see where the robot moves, you can hone-in on good locations
for these points.
<p></p>
The default input args assume that the plane that you are defining is approximately horizontal, in the x-y plane.
If this is not the case, the plane_normal_guess arg can be changed to specify the approximate desired plane normal vector.
This variable controls the orientation of the last joint while you are searching for the plane points but will not affect the drawing process.
<p></p>
The drawing process will calculate the direction
(See Glossary on 'direction') based off of the the plane that was defined by the three points and move Dexter to be perpendicular to it.
<p></p>
If it is desired to have the robot point in the direction of the
calculated plane during the point finding process,
set the calc_plane_normal arg to true.
This is not recommended until the points are dialed in due to large changes in normal direction.
<p></p>
The 3 points should form a right triangle. The vertices of this triangle will
be the three points that define the plane.
The order these points are chosen will not matter.
If the "DXF_units" argument
to DXF.init_drawing is <code>undefined</code>, ie not passed in,
tben DXF_units will automatically be chosen.
<p></p>
Here's how.
The legs of the right triangle (the non-hypotenuse sides) form an x and y axis for the drawing's coordinate system. The triangle leg that is in the clockwise direction from the other leg will always define the x-axis and counter-clockwise, the y-axis. With the origin being the point they share and the z-axis being perpendicular. This clockwise calculation is from the endeffector's point of view with assumption that if the robot can physically touch the point then it's last joint is on the front facing side of the plane.
The rectangular bounding box is also formed by these three points.
The two points on the x-axis leg of the triangle define the base line segment of the rectangle.
While the third point determines the rectangle's height.
Note that the angle between the x-axis and y-axis triangle legs can be between 45º and 180º apart for this to still work.
Where the y-axis and rectangle height will be defined by the perpendicular from the x-axis to the third point.
In other words it creates a perfect right triangle from the approximate one.
This is important because the points that define the x-axis contribute to the orientation of the local coordinate system more than the y-axis point.
<p></p>
When DXF_units is undefined, the size of the drawing
 will be set such that the
drawing will be the maximum size that
it can be and still be contained within the bounding box. The "aspect ratio"
of the drawing won't change to completely fill the bounding box. So usually
the drawing will touch only 3 sides of the bounding box.
<p></p>
    <details class="doc_details"><summary>Drawing Details</summary>
    <ol><li>Attach drawing end effector such as a pen or laser to Dexter</li>
        <li>On a flat work surface within Dexter's reach,
            place a flat work piece (paper, cardboard etc.)
        <li>Before turning Dexter on, orient all joints to<br/>
           [0, 0, 0, 0, 0] (straight up)</li>
        <li>Choose Jobs menu/DXF.init_drawing() to insert a call to init_drawing
            into the editor buffer.
        </li>
        <li>Edit the DXF_filepath argument to contain a string
            of the filepath of the dxf file you want to draw.
        <li>
        <li>Select the call and click <button>Eval</button>.<br/>
            This defines a bunch of jobs that use the arguments to init_drawing.
        </li>
        <li>Start Job.Cal by clicking <button style="background-color:#CCC">Cal</button>  added to the Jobs bar by
             DXF.init_drawing. When it is complete ...</li>
        <li>Start Job.Point1 by clicking <button style="background-color:#CCC">Point1</button> in the Jobs bar.
            Dexter will move to the first point defined in the three_points argument to
            init_drawing.
        </li>
        <li>If it is not where you want it, adjust the x, y and z of the first point.</li>
        <li>Now evaluate the call to init_drawing again. If the point is closer to
            where you want it, good, you're moving in the right direction.
            If not, adjust the x, y and z values to move in the correct direction.</li>
        <li>Keep tweaking x, y, and z until the first point is where you want it.</li>
        <li> Now follow this process for the other two points in the three_points argument,
             clicking <button style="background-color:#CCC">Point2</button> and
            <button style="background-color:#CCC">Point33</button> to move Dexter
             until you have the 3 points defining a right triangle on the
             drawing surface.
        </li>
        <li>Once the points are just about where you want them,
            set the calc_plane_normal argument to true to check the points
            using the calculated normal.
            This is the normal that will be used while drawing.</li>
        <li>Adjust the lift_height argument to init_drawing for the
            height above the drawing surface
            that the pen will go to when moving to start drawing a new line.</li>
        <li>Adjust the resolution, draw_speed and DXF_units in the remaining arguments to
            init_drawing. Select the call and click <button>Eval</button></li>
        <li>Start drawing by clicking on <button style="background-color:#CCC">Draw_DXF</button></li>
    </ol>
    </details>
    <details class="doc_details" id="DXF.init_drawing_doc_id"><summary>DXF.init_drawing</summary>
    <code>DXF.init_drawing</code> defines a bunch of jobs to help set point locations
    and initialize the values used by jobs for laser cutting or drawing with a pen.
    <p></p>
    <i>Parameters:</i><br/>
    <b>dxf_filepath</b> This argument has several different formats for allowing the user
    to specify the lines to be drawn.<br/>
       <ul><li><code>"choose_file"</code> The default. When the call is evaluated,
                a dialog box pops up to allow the user to choose a .dxf file.</li>
           <li>The filepath of a dxf file as a string.</li>
           <li>A string of the content of a dxf file. If the string is 500 or more characters long,
               it will be considered to be the <i>content</i> of a dxf file, not a pathname to it.</li>
           <li>An array of points, each which is an array of 3 numbers, x, y, z which are auto-scaled
                to fit the bounding box decribed by the three_points argument, unless you supply
                a DXF_units arg.
                <p></p>
                The even indexed points in the array are considered to be the starting point of
                a line, and the odd indexed points are considered to be its ending point.
                <p></p>
                In the other formats for dxf_filepath, the drawing is 2 dimensional.
                With an array of points, it can be 3 dimensional, though if you don't supply
                DXF_units, the x and y of those 3D points will
                still be bounded in X and Y to the bounding box described in the "three_points" argument.
                <br/>
                <i>Example:</i> <code>[[0, 0, 0] [1, 2, 3], [10, 20, 30], [40, 50, 60]]</code><br/>
                The above array describes 2 points to be drawn.
           </li>
       </ul>
       <b>Other args</b> Please see the below example.
       <p></p>
    <i>Example:</i>
<pre><code title="not in TestSuite">DXF.init_drawing({
    DXF_filepath: "choose_file",        //file_path to DXF
    three_points: [[0, .50, 0.1],    //Point1
                    [0, .35, 0.1],   //Point2
                    [.200, .35, 0.1] //Point3
                    ], //all numbers in meters
    plane_normal_guess: [0, 0, 1], //initial guess of plane normal. (usually [0, 0, 1], [+-1, 0, 0], or [0, -1, 0])
    calc_plane_normal: false, //if true then plane_normal_guess is ignored and plane_normal is determined by three points
    tool_height: 0.057000, //if in home position, vertical distance from the tool tip down to axis of rotation of J4
    tool_length: 0.140000, //if in home position, horizontal distance from the tool tip down to axis of rotation of J4
    DXF_units: undefined,  //units the DXF was drawn in, _mm, _in, _cm etc.
                           //undefined means the drawing will fit the bounding box
    draw_speed: .03,       //cartesian speed in (m/s)
    draw_res: 0.0005,      //resolution for max step size of interpolated straight line in meters
    lift_height: 0.01,     // height that the pen lifts between unconnected lines in meters
    tool_action: false,    ///enable tool actions (true or false)
    tool_action_on_function:  function(){
                                  return [make_ins("w", 64, 2),
                                          Dexter.dummy_move()]},
    tool_action_off_function: function(){
                                  return [make_ins("w", 64, 0),
                                          Dexter.dummy_move()]}
    })
</code></pre>
    The tool_action_on function is called when drawing a line just after the
    "pen goes down" on the surface. For a laser the function would turn on the laser.
    <p></p>
    The tool_action_off function is called when drawing a line just before the
    "pen goes up" from the surface as it completes drawing a line.
     For a laser, the function would turn off the laser.
    </details>
    See also <a href="#" onclick="DocCode.open_doc('Dexter.draw_dxf_doc_id', event)">draw_dxf instruction</a>
</details>

<details class="doc_details" id='ez_teach_doc_id'><summary>ezTeach</summary>
EZ Teach is a tool to help you create jobs that move Dexter
along a path of points.
The points are recorded from you positioning Dexster either
by hand, or by using a gamepad controller.
The EZ Teach code is encapulated in 2 jobs.
<p/></p>
    <i>User scenario:</i><br/>
<ul><li>Plug in a gamepad and press any button to initialize.</li>
    <li>Create new ezTeach project by choosing Insert menu/ezTeach</li>
    <li>Edit the inserted code to customize your ezTeach project.</li>
    <li>Eval the editor buffer to define 2 Jobs, ezCreate and ezRun</li>
    <li>Save the editor buffer with a name and folder of your choosing.</li>
    <li>See below for running each Job.</li>
</ul>

<b id="ez_create_doc_id">ezCreate</b> is a job that helps you create and save the points
of the path that you want Dexter to follow.
<p/></p>
    <i>User scenario:</i><br/>
<ul><li>Click on the exCreate Job button to start that Job.</li>
    <li>See gamepad picture in pop-up window for functionality.</li>
</ul>
<p/></p>
<b id="ez_run_doc_id">ezRun</b> is a job that helps you run the job that follows
the points defined in ez_create.
<p></p>
<i>User scenario:</i><br/>
<ul><li>Click on the exRun Job button to start that Job.</li>
    <li>See gamepad picture in pop-up window for functionality.</li>
</ul>
</details>

<details class="doc_details" id='TestSuite_doc_id'><summary>TestSuite</summary>
    For a video presentation of the Test System, please watch
    <a href="http://hdrobotic.com/webinar#testing" target="_blank">Reliability via Testing</a>.
    <p></p>
    DDE has the capability to compose, run and report on Test Suites.
    DDE comes with several Test Suites and you can define more.
    <p></p>
    Each Test Suite has a name and an array of <i>tests</i>.
    A <i>test</i> is composed of an array of 1, 2, or 3 literal strings.
    <ol><li>A literal string of JavaScript code to evaluate that
            returns a value to be tested.
            If that string evals to an instance of a Job,
            then the rest of the test array is ignored, the
            job is started, and the running of the test suite
            is suspended until the job has finished.
            Then the test suite is resumed at the next instruction
            after the Job-defining test. Subsequent tests can now
            verify values in the finished job.
            </li>
        <li>The expected value of the above JavaScript code, also represented by
            a literal string of JavaScript.</li>
        <li>A literal string of a comment to aid in understanding the purpose or behavior of this test.
            If the comment starts with "known", then if the test does not pass, it
            will be reported on as an "known" failure. Other failures will be
            reported as "unknown". Often it is convenient to mark a test as "known" when
            you'd like to defer fixing it and just want to see the "unknown" failures.</li>
    </ol>
    Choose <button>Test&#9660;</button> <b>Insert Example</b> to see a demonstation
    Test Suite. <p></p>
    You run a Test Suite by selecting it,<br/>
    holding down:<br/>
    &nbsp;&nbsp;On WinOS: Alt key<br/>
    &nbsp;&nbsp;On MacOS: option key<br/>
    and hitting the right arrow key or<br/>
    choosing the Editor pane's <b>Test/naviation/Run & sel next item</b> menu item.
    Use the Alt-down arrow key to select the next level down item such as a test or
    even a part of a test. In each case, the Alt-right arrow executes the item and
    selects the next item at that level. See the Test/Navigation menu for
    selecting different parts of a test suite.
    <p></p>
    To create a Test Suite, type in the JavaScript source of the suite's first test,
    select it, and choose <button>Test&#9660;</button> <b>Selection to test</b>.
    This will wrap a Test Suite around the item and fill in the test's expected value
    with the result of evaluating the code you have selected. If you do that again
    for a second JavaScript selection, it will also create a test, but this time,
    because the test is <i>already</i> in a Test Suite, it will not create a new
    Test Suite.
    <p></p>
    Other operations on the <button>Test&#9660;</button> menu are documented with tooltips.
    <p></p>
    A TestSuite instance is a
    <a href="#" onclick="DocCode.open_doc(start_object_doc_id, event)">Start Object</a>
    and as such can be put directly on a Job's do_list.
</details>
<details class="doc_details" id='debugging_id'><summary>Debugging</summary>
    For a video presentation of many of these concepts, please watch
    <a href="https://drive.google.com/file/d/0B6PCkmO9RJLJTDFfYTNqYS1PdHM/view" target="_blank">Debugging</a>.<br/>
    Most programmers spend most of their time debugging.
    Don't sweep this problem under the rug --- confront it with the following strategies:

    <details class="doc_details"><summary>Test Early and Often</summary>
    We recommend entering just a bit of code at a time; a line or less before testing it.
    That way, when a bug shows up, you'll know it was in the last bit that you added.
    </details>

    <details class="doc_details"><summary>Keep Backups</summary>
    Before making a major change, copy the file your code is in and
    name the copy something like "orig_name_the_date.js"
    or "orig_name_before_implementing_foo.js".
    Then at worst, you can go back to previously working code.
    </details>

    <details class="doc_details"><summary>Syntax Checker</summary>
    DDE uses an automatic syntax checker named <i>ESLint</i>. It
    indicates syntax errors in the Editor pane as red dots in the left margin.
    The tooltip on a red dot gives you details about the error.
    <p></p>
    There are many different styles of JS coding and different versions
    of JS so its hard to get such errors correct. Even if you have syntax
    errors indicated, your code may run fine. As a first pass though, try
    to fix such errors before evaling. If you can't, go ahead and evaluate
    your code. Perhaps runtime errors will help you fix the bug,
    or perhaps it will run OK and you'll know to just ignore the JS Pane syntax
    bug indication.
    </details>

    <details class="doc_details"><summary>Click on Delimiter</summary>
    Many syntax errors occur because of unmatched delimiters.
    Click on an open or closed paren, square bracket or curley brace.
    It should highlight in green, and highlight its corresponding
    delimiter in green as well.
    </details>

    <details class="doc_details"><summary>Selective Eval</summary>
    Evaling just selected portions is another way to isolate bugs. If there is a selection
    of JavaScript code, only that code will be evaled when you click <button>Eval</button>
    </details>

    <details class="doc_details"><summary>Comment Out Code</summary>
    Another technique is to comment out code until your bug goes away.<br/>
    <b><code title="unEVALable code fragment"> // </code></b> comments out to the end of the line.<br/>
    <b><code title="unEVALable code fragment"> /* comment */</code></b> Wrap JavaScript in <br/>
    slash-star ... star-slash<br/> to comment
    out code in the middle of a line or multiple lines.
    See the Editor pane's <button>Learn JS&#9660;</button> <i>debugging</i> menu items.
    </details>

    <details id="print_statements_doc_id" class="doc_details"><summary>Print Statements</summary>
    The oldest and crudest debugging technique is embedding print statements
    in your code. DDE supports a number of these to make debugging easier.
    <ul><li><b>console.log</b> Wrapping <code>console.log()</code> around a complex data structure will print it
    out in the Chrome Developer Tools console with arrows to allow you to expand
    data pieces of your choice to inspect. To see the console,
    click right anywhere in DDE and choose "Inspect".</li>

    <li><b>out</b> <code>out</code> prints its first argument
    into the Output pane. Because <code>out</code> returns
    its 1st argument, you can embed it in code to see an intermediate value.<br/>
    <code>out(2 + 3) * 4</code> => <samp>20</samp><br/>will print out 5, but return 20.<br/>
    It also can print it different colors to keep your outputs separate. It can also
    print just temporarily to the output pane and print to a named spot in the output
    pane.
    <button>Insert&#9660;</button> <i>Print to output</i> has items that print in a few different colors
    so that you can distinquish some outputs from others in a complex debugging session.
    See <a href="#" onclick="DocCode.open_doc(out_doc_id, event)">out</a>.</li>

    <li><b>IO.out</b> <code>IO.out("some data")</code> creates an
    instruction in a Job's do_list to print content to the output console
    with similar functionality to <code>out</code>
    See <a href="#" onclick="DocCode.open_doc('IO.out_doc_id', event)">IO.out</a>.</li>

    <li><b>show_instructions</b> <code title="unEVALable">new Job({show_instructions=some_fn})</code>
    lets you call an arbitrary function (with clever defaults) before each
    instruction in a Job is run.
    See <a href="#" onclick="DocCode.open_doc(new_job_parameters_doc_id, event)">new Job parameters</a>.</li>

    <li><b id="inspect_doc_id">inspect</b> <code title="unEVALable"> inspect(some_data) </code>
       will print a representation of its argument in the output pane.
       If it is a complex data structure, an interactive inspector will be displayed
       that will let you navigate to its parts. This mechanism is used when you
       click the <button>Eval</button> button, but you can call it programmatically
       from the middle of your code to inspect an intermediate value.</li>
    <li><b>clear_output</b> To erase all content in the output pane,
       click the <button>Clear</button> button in the Output pane or
       Eval <code>SW.clear_output()</code><br/>
       See <a href="#" onclick="DocCode.open_doc(clear_output_doc_id, event)">SW.clear_output</a>.</li>
    <li><b>speak</b> behaves similarly to <code>out</code> in that it returns its 1st arg.
        It can be useful in contexts where you want to know a value but don't
        want to look at the screen to find it.
        An example of speak is on the Insert menu, under <i>Learn Javascript/debugging</i>.
        See also <a href="#" onclick="DocCode.open_doc(speak_doc_id, event)">speak doc</a>.
    </li>
    <li><b>Human.notify</b> is an instruction that you can place ina Job's do_list to pop up a window
           and give the user a message.
           See <a href="#" onclick="DocCode.open_doc('Human.notify_doc_id', event)">Human.notify</a>.</li>
    </ul>
    </details>

    <details class="doc_details"><summary>Stepping JavaScript</summary>
    Entering <code title="not in TestSuite"> debugger;</code> into the body of a JS function definition will set a breakpoint there.
    When <code  title="not in TestSuite"> debugger;</code> is evaluated (after you call the function) and the <i>Chrome Developer Tools</i>
    window is open, execution will pause and highlight the <code title="not in TestSuite"> debugger;</code> statement in a copy
    of your source code.
    (To open the <i>Chrome Developer Tools</i> window, click right on any DDE pane and choose
    <b>Inspect Element</b>.
    Use the arrow buttons <img src="doc/coor_images/stepper_buttons.png" width="120" alt="stepper buttons"/>
    in the Developer Tools window upper right to step execution.
    <p></p>
    Rather than enter <code title="not in TestSuite">debugger;</code> into your code,
    its often easier to select the code you want to step through and click the
    <button>Step</button> button. This works just like the <button>Eval</button> button
    in that if there is no selection, all the code in the editor is stepped.
    </details>

    <details id="stepping_instructions_doc_id" class="doc_details"><summary>Stepping Instructions</summary>
        To understand a Job's behavior, its useful to <i>step</i> through the code
        of a running Job.
        You can do this at two levels. The higher level is to step at the instruction
        level, one instruction at a time. The lower level is to step through the
        JavaScript that implements instructions. This can be done by inserting
        instruction into the do_list, making effectively "break points".
        Or you can check boxes in the Misc pane's header, while a job
        is running to start stepping it at the place in the do_list where its currently at.
        <details id="Control.step_instructions_doc_id" class="doc_details"><summary>step_instructions</summary>
            The instruction of <code>Control.step_instructions()</code> in a do_list will cause
            the Misc pane <b>pause</b> checkbox to be checked and the job to pause.
            A function that returns the result of <code>Control.step_instructions()</code> or
            even an array that has an element of the result of <code>Control.step_instructions()</code>
            will cause a pause in the Job immediatly after the place of that instruction.
            <p></p>
            You can insert this instruction using the Learn JS menu/Debugging etc/Control.step_instructions().
            <p></p>
        Checking the <b>pause</b> checkbox will cause running jobs to pause
        when they have completed their current instruction. Jobs started when
        the pause button is checked will pause right before the first user instruction
        on the do_list is run. If the running Job executes a <code>Control.debugger</code>
        instruction, that will also cause the job to pause.
        <p></p>
        When a job is paused, clicking the <button>Go</button> button will cause
        it to execute the next instruction, print out useful information in the Output
        pane, and pause. If a job is paused, and you uncheck the pause checkbox,
        then click the <button>Go</button> button, the job will begin running normally.
        </details> <!--end step_instructions-->

        <details id="Control.debugger_doc_id" class="doc_details"><summary>debugger</summary>
            The debugger instruction is similar to the Control.step_instructions
            instruction in that it pauses the job immediately after that instruction.
            But it differs in that, rather than stepping instruction by instruction,
            it allows you to step at a lower level, the JavaScript that implmements
            the instructions in the do_list.
            <p></p>
            Note that using <code>Control.debugger()</code>
            is intentionally similar to using the JavaScript constant <code title="not in TestSuite">debugger</code>.
            If you have the constant <code title="not in TestSuite">debugger</code>
            in the body of a function that is a do_list item, or is called by
            a do_list item, it will cause a JavaScript breakpoint and you
            can step through that code using the Chrome dev tools.
            <p></p>
            You can also cause JavaScript debugging in a running Job by
            clicking the "JS debugger" checkbox in the Misc Pane header.
        </details>

    </details> <!--end stepping instructions -->

    <h4>JS Idiosyncracies</h4>
    Because JavaScript, like all popular textual programming languages, has not been
    designed <i>carefully</i> with the "user experience" in mind, it is full of
    idiosyncracies that make learning how to use it require remembering a lot
    of "gotchas". The web has pages on common JavaScript programming errors.
    A good one is: <a href="https://www.w3schools.com/js/js_mistakes.asp">
        https://www.w3schools.com/js/js_mistakes.asp</a> , incomplete, but
        a good start.

    <h4>Boot</h4>
    Sometimes computers just get screwed up.
    Booting often fixes such problems.
    <ol>
        <li>You can start with quiting and relaunching DDE.</li>
        <li>If that fails, shut down your whole computer and restart it.</li>
        <li>If that fails, shut off Dexter and restart it.</li>
    </ol>
</details>

<details id="ssh_doc_id" class="doc_details"><summary>Secure Shell (SSH)</summary>
Most of your interaction with Dexter from DDE can be done via JavaScript.
But there are times you need to get lower level information or control
to Dexter's computer, which runs the Linux OS.
To do this, from within DDE, you can issue shell commands to Dexter (or DDE's computer),
and see the results in DDE's Output pane.
<p></p>
    When Dexter is started,
    it automatically launches an SSH server listening for commands
    from a remote client like DDE.
    If an SSH connection is not established, choose DDE menu bar/Jobs/Ping a Dexter...
    to verify, in a lower level way, that you have basic connectivity to
    the Dexter of your choice.
    <p></p>
    <b>Using SSH From DDE</b><br/>
    The Output Pane Header has a <i>select</i> widget<br/>
    <select><option>JS    </option></select>
    This lets you choose the <i>language</i> of the code you write in the
    command line. The default is "JS" for JavaScript.
    <p></p>
    To SSH to Dexter, choose "SSH", allowing you to use the 'bash' shell script.
    This will bring up a dialog box allowing you to choose the computer, user name,
    and password to connect to.
    Upon initialization, a command is sent to get the contents of a useful directory
    on that computer. From the returned table, you can:
    <ul>
        <li>Click on file names to edit them in DDE's editor (provided they are plain text files).</li>
        <li>Click on subdirectories to browse them.</li>
        <li>Click on the components of the displayed directory to "go up" the
            file hierarchy and browse them.</li>
        <li>Click on the menu to the left of the file or directory name in the table
            to invoke common commands on that file or directory.
            Menu items that have ... in them don't execute commands, but
            insert those commands into the command line and let you edit them
            before hitting ENTER to run them.
    </ul>
    When you choose "SSH", an additional <button>Cmds&#9660;</button> menu appears near the
    language selector. This lets you enter a few common commands without typing.
    You can edit those commands in the command line and hit ENTER to re-run them,
    or type in whole new commands of your choosing.
    <p></p>
    <b>SSH to DDE's computer</b><br/>
    It is also occassionally useful to interact with DDE's computer via a command
    line terminal. Your computer supports such an application,
    but sometimes its more convenient to do that from within DDE.
    You can accomplish that by selecting "dde_computer" when switching the
    language to SSH.
    <p></p>
    To use SSH to DDE's computer, you must launch an SSH Server on DDE's
    computer first.

    <details class="doc_details"><summary>Launch SSH server on WinOS</summary>
        To launch openSSH server on Windows 10,<br/>
        see:
        <a href="https://winscp.net/eng/docs/guide_windows_openssh_server"
           target="_blank">Windows 10 openSSH</a><br/>
        Roughly, the steps are:
        <ol><li>Go to Control Panel > System and Security > Administrative Tools and open Services.</li>
            <li>Locate OpenSSH SSH Server service.</li>
            <li>If you want the server to start automatically when your machine is started:
                Go to Action > Properties.
            </li>
        </ol>
    </details>

    <details class="doc_details"><summary>Launch SSH server on MacOS</summary>
        To launch openSSH server on MacOS,<br/>
        see:
        <a href="http://osxdaily.com/2011/09/30/remote-login-ssh-server-mac-os-x/"
           target="_blank">Mac SSH Server</a><br/>
        Roughly, the steps are:
        <ol><li>Choose AppleMenu/System Preferences/Sharing</li>
            <li>Check "Remote Login"</li>
            <li>For tighter security.
                We recommend selecting Remote Login: "only for these users".
                When that is selected , only Administrators
                will be able to log in
            </li>
        </ol>
    </details>

    SSHing to DDE's computer operates very similarly to SSHing to Dexter, except that you
    must give your user name and password.
    This is the same user name and password you must give when you
    restart your computer and login.

    <details id="ssh_copying_files_doc_id" class="doc_details"><summary>Copying Files</summary>
    When you get an SSH directory listing table in the output pane, each file
    will have a menu to the left of its name.
    The menu item <br/>
    <b>Copy file: local to remote</b><br/>
    allows you to copy a file from DDE's computer (the localhost)
    to a Dexter's file system. To use this facility,
    you must SSH log in to the Dexter computer.
    Choosing <b>Copy file: local to remote</b> simply sets the
    command line type-in to something like:<br/>
    <code title="unEVALable">copy_local_to_remote /[file to copy] /buildjunk.js</code><br/>
    "copy_local_to_remote" is a special DDE command that takes two
    arguments, a local file to be copied, and a remote destination file path
    to copy into. You'll have to edit each of these to get what you want,
    then hit ENTER to run the command.
    <p></p>
    The menu item
    <br/><b>Copy file: remote to local</b><br/>
     is similar
    but has its first argument of the remote file to copy and
    a 2nd argument of a DDE computer file path to copy into.
    <p></p>
    All the arguments to these two commands are just straight paths
    with no "computer" designation in them. Don't prepend them
    with "host:path", just use the path.
    <p></p>
    When you choose <b>Copy file: local to remote</b> or <b>Copy file: remote to local</b>,
    the string inserted into the cmd input will have its placeholder "local" argument selected.
    You can now use the DDE File menu item <i>Insert file path/into cmd input</i>
    to replace the placeholder "local" path. Beware, you may have to edit either argument
    after doing this, but at least you'll get long directories correct.
    <p></p>
    Note that in the Macintosh's finder, you'll typically see something like<br/>
    Macintosh HD/Users/Fry/...<br/>
    Don't including the "Macintosh HD" part, just start with "/Users..."
    <p></p>
    <i>Warning:</i> There can be errors in the copying process that
    don't show up in the DDE output pane. We recommend keeping an
    eye on the Chrome console while copying.
    (Click right in DDE and choose "Inspect Element".)
    </details>

    </details> <!-- end ssh_doc_id -->


<details id="contact_doc_id" class="doc_details"><summary>Contact</summary>
    Please help us by emailing a bug report or suggestion to
    <a id="email_bug_report_id" href="#">cfry@hdrobotic.com</a><br/>
    If the above does not create an email or you want to send your bug report
    from a different computer, please Eval: <br/>
    <code>make_dde_status_report() </code><br/>
    then copy and paste the output text into your email.<br/>
    Take a look at the
    latest <a href="#" onclick="DocCode.open_doc(release_notes_doc_id)">Release Notes</a><br/>
     and the <a href="#" onclick="DocCode.open_doc(known_issues_doc_id)">Known Issues</a> to help hone your
    suggestions.
</details>
</details>
`