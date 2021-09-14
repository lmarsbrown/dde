export function install_release_notes(){
    doc_pane_content_id.innerHTML += content
    content = null //so it will be garbage collected
}

var content =
`<details><summary class="doc_top_level_summary">Release Notes</summary>
 <div style='font-size:16px;'>

<details class="doc_details"><summary>v 3.8.0, Jul 23, 2021</summary>
Highlights: Recording Jobs more reliable, simpler UI.<br/>
    Simulator improvements, including "both" option working.<br/>
    Simplified Jobs Model documentation for deeper understanding of Jobs.<br/>
    Jobs menu/Eval & Start Job improved.<br/>
    File menu new item: Load and start Job.<br/>
    Jobs menu item "Run Job on Dexter" improved.<br/>
    Dexter.set_follow_me and friends now working for J6 & J7.<br/>
    Job Engine extended with a bunch of DDE functions including require, get_page_async.
<ul>
    <li>Fixed 8 bugs in file_system_test_suite for folder_name_version_extension.</li>
    <li>Changed <code>dex_inst.remove_from_busy_job_array</code>
        to <code>Dexter.remove_from_busy_job_arrays</code>  in several places as this should
        usually be called instead.</li>
    <li>Now the simulator <b>both</b> option works.
       The simulator is about 10% faster or so than the <b>real</b> Dexter.
       Needs some work to get real dexter and sim in sync.</li>
    <li>Dexter UI: fixed a problem when you:<br/>
        1. launch DDE<br/>
        2. start Dexter UI<br/>
        3. uncheck the point down check box.<br/>
        It use to move Dexter into a bad configuration.
        Now it doesn't move Dexter at all (which is correct).</li>
    <li>Removed <i>Jobs menu/Run Instruction/PARKED_ANGLES</i>
        not useful and if Dexter is
         uncalibrated, it may run into itself.</li>
    <li>When you choose Jobs menu/<b>Dexter UI</b>,
       a warning message is printed that Dexter
        will move when you use this dialog box.</li>
    <li> <b>Dexter UI</b> tutorial improved slightly with a warning that Dexter will move.</li>
    <li>Fixed <code>Dexter.pid_move_to</code> to properly set up the passed in robot.</li>
    <li>Fixed <code>Job.send</code> when an oplet array is passed in that has a
        robot instance as its last element.</li>
    <li>Fixed Dexter <b>simulator</b> such that when simulating a PID move,
       and the simulator is not actually showing, it doesn't attempt to draw to it.</li>
    <li><b>Make Instruction</b>: twisting down the "Recording" arrow automatically scrolls
        the doc pane to documentation specific to Recording.</li>
    <li>Improved the doc for <b>Make Instruction's record</b> facility.</li>
    <li>Make Instruction record:
        fixes to controls for play, stepping and dragging the "play head" circle.</li>
    <li>Make Instruction record: insert now uses a new Brain robot for the high
        level Job so that we don't have 2 Jobs with the same default robot.</li>
    <li>Make Instruction record: clicking insert now does NOT pop up a dialog of
       options. Smarter analysis and insertion plus easer-to-understand functionality
       now make this unnecessary.</li>
    <li>Make Instruction record: clicking "record button" sets visible form's do_list
        to [] so user knows we're starting a new recording.</li>
    <li>Make Instruction insertion of trailing commas improved.</li>
    <li><code>Dexter.set_follow_me</code>, <code>force_protect</code>,
        <code>open_loop</code> and <code>keep_position</code> instructions
         now work for J6 and J7. Useful in Make Instruction record.</li>
    <li>Now there's an explicit warning for user clicking on the <button>Eval</button> button
          when only whitespace is selected.
          This can occur when user inserts a recording with a high level Job.</li>
    <li><b>Inspect</b> fixed for an edge case of inspecting 2D arrays.</li>
    <li>Ref Man/Job/Definition Time vs Run Time tweaked and greatly extended with a
          new sub-section: <b>Simplified Jobs Model</b>.
          Recommended reading if you really want to understand what Jobs are all about.</li>
    <li>Added to <b>Job engine</b> from regular DDE:<br/>
        <code>file_exists</code>, <code>is_folder</code>, <code>persistent_get</code>,
        <code>persistent_remove</code>, <code>persistent_save</code>,
        <code>make_folder</code></li>
    <li>new function: <code>append_to_file</code>
         See Ref Man/IO/File Access/append_to_file.
        Also in the Job Engine.</li>
    <li><code>get_page_async</code> now available in the Job engine.
        Doc improved at RefMan/IO/web/get_page_async</li>
    <li>Job engine index.js, <code>run_node_command</code> improved eval call to make <code>require</code> calls work.</li>
    <li>Fixed click help on a file name (path)</li>
    <li>Fixed <code>read_file_async</code> when reading a file with a defaulting folder
        name and we're reading from Dexter. This also fixes <code>copy_file_async</code>
         when copying from Dexter to DDE.</li>
    <li>Added an example to Ref Man/IO/File Access/copy_file_async for
        copying to a Dexter.</li>
    <li>DDE splitter-bar width increased from 5px to 8px to make dragging them easier.</li>
    <li><b>Jobs menu/Eval & Start Job</b>: if you select instructions to run NOT in a Job definition,
        a Job will be defined (as usual).
        But now, such defined Jobs will use the Dexter.default
        (selected in the Misc pane header.</li>
    <li>Jobs menu/Eval & Start Job now functionality better matches
        User Guide/User Interface/Editor Pane/Eval & Start Job menu item.</li>
    <li>File menu new item: Load and start Job... that lets you choose a file.
       It is loaded, and the first job in it (if any) is started.
         Particularly useful for demos.</li>
    <li><b>Simulator</b>: fixed to not attempt to display J6 & J7 movement if the simulator
        is not showing.</li>
    <li>Simulator controls for rotating Dexter improved.</li>
    <li>Simulator  Middle button/scroll_wheel down is now an additional way to pan,
        from the existing alt/option key down.</li>
    <li>Improved <code>Socket.on_receive</code> to take the Dexter instance as an argument
        rather than compute it,
       (somewhat heuristically) from a robot_status. More reliable, less code.</li>
    <li>Ref Man/Robot/Robot Instructions/<code>Control/break</code> extended to include
        an example of having an inner loop break out of an outer loop.</li>
    <li>Jobs menu item <b>Run Job on Dexter</b> fixed to work not just when
        you choose the menu item, but then click the Job button created to run the
        Job a 2nd (or 3rd ...) time. Improved the tooltip for the menu item.</li>

</ul>
</details>

<details class="doc_details"><summary>v 3.7.18, Jun 30, 2021</summary>
Highlights: New Job Param: when_do_list_done. Error system clean-up. Make Instrunction bugs fixed.
 New programmatic interface to versioned files.
<ul>
    <li><code>FileTransfer.customize_defaults_make_ins</code> def extended to
        have comments describing its inputs.</li>
    <li>Ref Man <code>choose_file</code> has a new example for choosing a folder.</li>
    <li><code>choose_file</code> doc improved.</li>
    <li><code>Simqueue.render_instruction</code> fixed warning message for job name.</li>
    <li><code>make_full_path</code> now documented in Ref Man/IO/File System/make_full_path</li>
    <li>Now, if you attempt to redefine a job while it is running, you will get a warning
        message telling you to explicitly stop the job before redefining it.
        This should lead to less surprising behavior and put the user in control if
        they accidentally attempt to re-define a job while its running.</li>
    <li>Fixed error handling in simulator for oplets "e" and "r".</li>
    <li>In <code>Dexter.robot_done_with_instruction</code> improved error handling for
        invalid job_id.</li>
    <li>In <code>Dexter.robot_done_with_instruction</code>, now set the robot's
         robot_status property earlier so its available for error cases.</li>
    <li>Improved <code>Job.prototype.rs_to_error_message</code> to show the error code if
        there's a robot_status error.</li>
    <li>In Make Instruction pane, fixed the "run" button for both simulator and real.</li>
    <li>Job parameters: new: <code>when_do_list_done</code>
         indicates action when the do_list as compeltely run.
         The existing <code>when_stopped</code> can no longer take a "wait" value,
         but you can obtain that effect by giving when_do_list_done a "wait" value.
         This makes it possible to have some 'clean up' code when a Job is finished but
         also allow a "wait" for additional instructions.</li>
    <li>Error system cleanup improving instructions: <code>Control.stop_job</code>,
         <code>Control.error</code>,
         and Job params: <code>if_instruction_error</code>, <code>if_robot_status_error</code>,
                 <code>if_dexter_connection_error</code>.</li>
    <li><code>get_latest_path</code> and <code>make_unique_path</code> for programmatically
      managing versioned files. See Ref man/IO/File Access/get_latest_path .</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.7.17, Jun 16, 2021</summary>
<ul>
    <li>Fixed 2 bugs in <code>Socket.instruction_array_degrees_to_arcseconds_maybe</code>
    S params affecting calibration. one for "J*Boundary*"
    and one for "CommandedAngles", "RawEncoderErrorLimits", "RawVelocityLimits".</li>
    <li>Improved error message for <code>Job.prototype.if_robot_status_error_default</code>
    when it can't get the errors.log file from Dexter.</li>
    <li>New Function under <code>FileTransfer</code> extended for customize_defaults_make_ins.
        This functionality not yet documented.</li>
    <li>HCA: Added cut, copy, paste keystroke commands to the network editor.
        This functionality is not yet documented or generally useful.
    </li>
    <li>Removed lots of <code>debugger;</code> statements.
</ul>
</details>
<details class="doc_details"><summary>v 3.7.16, Jun 10, 2021</summary>
Highlights: Improvements to simulation and Dexter UI esp. for pid moves.
 UpdateFirmware facility improved. Gameification for educational motivation added.
<ul>
    <li>Improved inspector for large 2D arrays:
      if there is more than 6 columns (or 10 rows),
      do not auto-expand the table in the inspector.</li>
   <li>First easter egg added</li>
    <li>New Misc pane sub-pane: Reward Board showing usage statistics and magic spells.</li>
    <li>FileTransfer.get_releases_page_callback fixed bug in call to decrypt_file
    that prevented sending files to Dexter.</li>
    <li>Uninstalled npm f4st-crypt (not used, using node's cryto instead.)</li>
    <li>Changed Jobs/Dexter Tools/Browse Dexter default to Jobs/Dexter Tools/Browse Dexter,
        to make it shorter and fit on one line of menu.</li>
    <li>Click help on a Job parameter now gives you an underlined blue link
    in the Output pane that you can click on and see the doc for that particular param.</li>
    <li>Dexter UI dialog box: new tooltips on the "donut" and the green dot to tell
        you their meanings.</li>
    <li>Uninstalled ml-classify-text.  Not used.</li>
    <li>Uninstalled zeromq package. No longer used.</li>
    <li>New Click help for <code>dexter</code> about Dexter and <code>Dexter.dexter0</code></li>
    <li><code>Dexter.prototype.is_direction</code> and <code>Kin.is_direction</code>
    methods added.</li>
    <li><code>Dexter.HOME_ANGLES</code> changed from [0,0,0,0,0,0,0] to [0,0,0,0,0,0,50] .
    If you move J7 to 0 it will likely overtorque when you have a parallel gripper on Dexter
    but by setting J7 to 50 and it won't overtorque.</li>
    <li>Reboot_joints job now uses brain robot so it can be used while Dexter UI job is running.</li>
    <li>load_job_engine.js:  exported and included about 10 fns from html_db.js</li>
    <li>Fixed bug in click help for <code>Js_info.get_info_string</code></li>
    <li><code>Editor.get_javascript</code> and <code>Editor.get_any_selection</code> now return empty string if
       the Editor.view is not  one of the standard types. Helps with experimentation.</li>
    <li>Edit menu new item 'Pretty print'. works on selection, or if none, whole editor buffer.</li>
    <li>Fixes to Dexter UI dialog, and simulator around pid moves.</li>
    <li> Dexter instruction <code>read_file</code> now does not attempt to put ANY prefix on the front
    of the path passed in. If its starts with a letter,
     it will get a file in /srv/samba/share/</li>
    <li>Robot status array for g0 for simulator now returns "angle" for J1 thru J5.</li>
    <li>Fixed bug in click help for Date instance methods like <code>getHours</code>.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.7.15, May 25, 2021</summary>
Highlights: Improvements to Jobs sending instructions to Dexter, esp.
            instructions that include a Dexter instance as their subject.
            Robot Status dialog now allows you to select the status mode (g number)
            displayed by "run rs_update job".
            Serial port, Make Instruction, Editor, doc improvements.
<ul>
    <li>Socket on error fixed bug of it not stopping the job when it should.</li>
    <li>Serial port: fixed numerous small problems including with serial_connect_low_level
        and serial_disconnect.</li>
    <li>Editor click-help Fixed infinite loop in some cases of clicking on the comment // .</li>
    <li>Editor click-help Fixed testing for end of /* and */ comments.</li>
    <li>Run Instruction dialog box: for the "mode" select box,
         the blank item now has a tooltip telling you not to select it,
         but if you do, you get a nice warning message instead of an error.</li>
    <li>Improved Ref Man/IO/File Access/ <code>read_file</code> and <code>write_file</code> for "encoding" parameter.</li>
    <li>Improved doc for <code>read_file</code> and <code>write_file</code>.</li>
    <li>Fixed bug in util: <code>is_generator_function</code> to correctly handling args
         passed of undefined, 0, null, false. This fixes a bug in the inspector when
         inspecting Jobs.</li>
    <li>Fixed similar bug in <code>is_iterator</code> .</li>
    <li><code>Dexter.set_link_lengths_using_node_server</code>
         now uses a timeout of 1 second so it will error quickly if there's no Dexter connected.</li>
    <li>Make Instruction: Now, clicking on "wrap in Job" button no longer scrolls doc to Job so
         that you don't lose doc on the inst you're wrapping,
         and makes it possible to follow the ref man tutorial.</li>
    <li>Make Instruction: updated User Guide for "Insert a Job" to "Wrap in Job."</li>
    <li>Make Instructions Insert Job dialog box, clicking the "insert" button,
         now closes the dialog box.</li>
    <li>Fixed <code>Instruction.text_for_do_list_item</code> to protect against circular printing,
          that happens sometimes in inspecting dl_list items.</li>
    <li>Made <code>folder_listing</code> accessible in the Job Engine.</li>
    <li>Now if there is an active job who's robot is a particular Dexter,
        and you start a 2nd job who's robot is that same particular dexter,
        the 2nd job will error.
        We now don't allow more than one active job to have the same dexter as its Dexter.</li>
    <li>Improvements to Dexter instructions that give a robot instance as their subject,
      ie <code>Dexter.dexter0.move_all_joints(...)</code>,
        <code>Dexter.dexter0.sleep(...)</code>.
      Using this mechanism, you can send an instruction from a job that doesn't
      have that Dexter instance as its job, to that dexter.</li>
    <li>Robot status dialog now allows you to select the status mode to be retrieved and
         shown when you click the "run update job' button, Other minor improvements to the dialog.</li>
    <li>Inspector: when passed a 2D array, it only "auto-expands it"
        if it has 10 pr fewer rows.
        This works on nested object & arrays, making it easier to see the high level structure
        of the data, but then click to see details of some part that you really care about.</li>
    <li>Fixed spelling recieve => receive in numerous doc and error messages. </li>
    <li><code>Job.prototype.send</code> now doesn't modify array instructions by popping off
       the robot on the end of a sent array,
       so that the do_list preserves the robot in it for use
       by Socket.find_dexter_instance_from_robot_status.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.7.12, Apr 23, 2021</summary>
Highlights: zeromq npm package re-installed, serial port and Dexter UI dialog tweaks.
<ul>
    <li>npm zeromq package installed version 6.0.0-beta:</li>
    <li>serial port: <code>old serial_path_to_info_map</code> is now defined to be same
        as the new <code>serial_port_path_to_info_map</code>,
        but <code>serial_path_to_info_map</code> is deprecated.</li>
    <li>serial port: <code>serial_connect_low_level</code> has a new last arg: <code>close_callback</code>
        that defaults to a callback fn that just prints out that the port has been closed.</li>
    <li>Dexter UI dialog box: improvements to underlying layout html and css.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.7.11, Apr 20, 2021</summary>
Highlights: improvements to socket handling. New Job status: "stopping'.
No longer using set_link_lengths_using_job.
<ul>
    <li>Lots of internal changes to Job and socket handling.
    Restriction of only 1 active job per robot.
    New status_code of <code>"stopping"</code> for handling jobs with <code>"F"</code>
    instructions that are stopped
    by user before the <code>"F"</code> instruction acknowledgement comes back from Dexter.
    Socket informal code to close socket now all call <code>Socket.close()</code>.
    Some calls to close now are passed true, to force close of the socket,
    ie when socket errors.</li>
    <li>No longer using  <code>Dexter.set_link_lengths_using_job</code>.
         This method is slow, unreliable and causes another job to be launched during
         the running of a job, which was confusing, and now not permitted with the
         new socket architecture.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.7.10, Apr 14, 2021</summary>
Highlights: Bug fix for re-initialization of a socket when in "real" mode.
Important bug fixes to J6 & J7 software.
Minor Improvements to Manage npm and Plot.show.
<ul>
    <li>DexterSim now correctly initializes Joint 6 to 0 degrees.</li>
    <li>Fixed conversion of degree-angles to dexter-units, to always return integers.
    <li>Fixed Socket code to properly re-initialize a socket if it times out.
    <li>Fixed the DDE Dexter settings such that if you start up DDE in real mode, and the "link lengths"
    (and min & max joint angles) are retrieved from defaults.makeins,
    but that file does not have min and max values for J6 and J7 (they don't now),
    then use default values for them.
    This fixes a bug in the Dexter UI sliders for J6 & J7 max values.</li>
    <li><code>J6_ANGLE_MIN</code> is now -150 (was 0).  <code>J6_ANGLE_MAX</code> is now 150 (was 296)</li>
    <li>Manage NPM, the help for creating the "require" code now has var names
        with hyphens changed to underscores to match JS syntax for var names.</li>
    <li>Manage NPM dialog, "List" buttons now print out list items with a new tooltip
        that tells you that clicking it will insert that package name into the NPM dialog box.</li>
    <li>Manage NPM dialog: added tooltips to the bottom 6 buttons.</li>
    <li>Ref Man: Minor reorganization of <code>DDE_NPM</code> documentation.</li>
    <li><code>Plot.show</code> fixed the show_window title default for multiple traces of 2D plots.</li>
    <li><code>Plot.show</code> Ref Man, added example for the show_window_options argument.</li>
    <li>Click_help on a string that looks like a path to a file but isn't, now doesn't error.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.7.9, Apr 7, 2021</summary>
Highlights: Fixed crashing DexRun due to faulty sending of instruction.
            Fixed Py.eval for global variables.
            Ref Man new section: "Math in JavaScript"
<ul>
    <li>Fixed DexRun crashing by removing faulty sending of instruction "E".</li>
    <li>Welcome to DDE dialog increased height slightly to avoid scroll bar.</li>
    <li>Robot Status dialog can now be brought up when no Job has run on the given robot.</li>
    <li>Robot Status dialog no longer shows incorrect units for 'Measured Torque".</li>
    <li>When you choose "JS" in the command line language menu,
        the doc pane scrolls to the User Guide section on "JavaScript".</li>
    <li>When the command line has language "Python" selected and you click one some text in it,
         now instead of erroring, you get a link to Python documentation in the output pane.</li>
    <li>Fixed <code>Py.eval</code> bug for global variables.</li>
    <li>Ref Man <code>Py.eval</code> has been extended to be a mini tutorial in Python basics.</li>
    <li>The Ref Man intro to Python in DDE has been extended to encompass a wider programming picture.</li>
    <li>Python documntation: new examples for <code>Py.init()</code> and <code>Py.kill()</code> added.</li>
    <li>Jobs bar height increased to show the bottom of the "circle i" character for inspecting
        the Job.</li>
    <li>Ref Man new top level section: <b>Math in JavaScript</b></li>
</ul>
</details>

<details class="doc_details"><summary>v 3.7.8, Apr 2, 2021</summary>
Highlights: Simulator now more accurately reflects Dexter hardware.
   Simulator new "Show Q" button.
   New Reboot Joints menu item and instruction.
   New help button on Editor pane menu bar replaces big blue quesiton mark in upper right.
   Dexter UI and its tutorial improved.
<ul>
    <li>Improved robot status to g0 to convert the "sent" j1 thru 5 from arcseconds to degrees.</li>
    <li>DDE_NPM bug fix: when clicking on File menu/Manage npm, the test for whether npm is installed on the machine or not was faulty.</li>
    <li>Bug fix for browsing several external links in the Ref Man under Python and Plot.</li>
    <li>If a file is in DDE's files menu list, and you quit DDE and the file is deleted in the OS, and you then launch DDE,
        DDE use to error or at least put deleted files on the file menu.
        Now it doesn't.</li>
    <li>Make Instruction: Dexter rare instructions menu, respelled "write" to "write_fpga".</li>
    <li>Simulator re-architecture to more accurately reflect Dexter.
        Much better simulation of J6 & 7 and Dexter.sleep</li>
    <li>Simulator: Click on the the "Show Q" button in the Misc pane,
        sim header to display a dynamic representation of Dexter's queue.</li>
    <li>Minor extension to the tooltip for the Doc pane's "Find" type in field.</li>
    <li>Dexter UI, Improved tooltip help on J4 and J5 sliders.</li>
    <li>Extended the Ref Man Python doc to be clearer about what contexts Python
        code is accepted in, and the intention of DDE's Python interface.</li>
    <li>For the 'find' results printing in the output pane: Made this non-temporary.
        Also, if not found in any TestSuites, just print nothing.
        Too confusing to tell users it isn't in test suites.</li>
    <li>Welcome to DDE window now tells you, at the bottom,
        how to get this dialog back if you close it.</li>
    <li>Improved a Job button's tooltip while running a Dexter.sleep instruction to
         include the duration.</li>
    <li>User Guide/Workflow extended to advise evaling small amounts of code often
        and keeping File Menu/Auto Save checkbox checed to avoid losing work in the event
        of a crash.</li>
    <li>New instruction: <code>Dexter.reboot_joints() </code>.
       This functionality for the default robot can also be achieved via the new item: Jobs Menu/Dexter Tools/Reboot Joints.</li>
    <li>The functionality of the upper right big blue question mark has
        been moved to the end of the Editor pane menu bar in a button named "Help"</li>
    <li>The Editor pane font size change widget and the * mark showing that the
        editor pane content needs saving is now under the "Editor" label in
        the upper left of the Editor pane.</li>
    <li>Dexter UI tutorial panes are now slightly lighter to increase contrast for
        the text in the panes.</li>
    <li>Dexter UI tutorial extended to make it more obvious what happens when "real"
        is selected but no working Dexter is connected.</li>
    <li>Dexter UI: launching this does not move Dexter (or the sim),
        it just changes the UI to conform to where Dexter (or sim) is.</li>
    <li>Dexter UI: improved tutorial flow towards the end of the tutorial and other minor fixes.</li>
    <li>Bug Fix: For robot status G0, The mapping between the robot status indexes and their names
        has been restored to the same as it was in DDE LTS, ie:<br/>
         38 J6_MEASURED_ANGLE,<br/>
         48  J6_MEASURED_TORQUE,<br/>
          18  J7_MEASURED_ANGLE,<br/>
         28  J7_MEASURED_TORQUE</li>
    <li>Inspector: now catches infinite recursion bug on computing source code. </li>
    <li>When Inspecting a 2D array, it will be "open" when you first inspect it.
        This saves the step of expanding it to see its contents.</li>
</ul>
</details>


<details class="doc_details"><summary>v 3.7.7, Mar 12, 2021</summary>
Highlghts: Significant enhancements to Plot and DDE_NPM for programmatic interface,
GUI interface and Documentation.
<ul>
    <li><code>DDE_NPM</code> now prints a helpful error message if npm is not installed when
        you choose File menu/Manage npm</li>
    <li><code>inspect_one_liner</code> for an array of strings now handles strings containing both
        single and double quotes better.</li>
    <li>Manage npm dialog now has buttons for
        <input type="button" value="info"/>,
        <input type="button" value="doc"/>,
        <input type="button" value="search"/>.</li>
    <li><code>DDE_NPM.list</code> now gets info from the relevant folder names AND prints e
        ach package_name in the inspector as a clickable link that inserts the package_name
        into the Manage npm dialog box.</li>
    <li>New Method: <code>DDE_NPM.is_installed</code>.
        See RefMan/Add Javascript/DDE_NPM.is_installed.</li>
    <li><code>DDE_NPM.uninstall</code> now won't uninstall built_in packages,
        and prints helpful warning messages.</li>
    <li>Manage npm <input type="button" value="insert require"/>
        button now fixes inserted variable names
        for package with hyphens in them to have underscores instead.</li>
    <li>Removed "npm" package from DDE."npm": "^6.13.7"</li>
    <li><code>Plot.is_3d_array(data)</code> fixed to more throughly check that it really
        has a 3D array with only numbers in it. Fixes a bug in the inspector.</li>
    <li><code>Plot.show</code> fix for title defaulting.</li>
    <li>New example in: RefMan/Window System/Plot/Plot.show/heat map.</li>
    <li>RefMan/Window System/Plot/Plot.show has lots of stying and descriptive improvements.</li>
    <li>When inspecting a 2D array of numbers, it will now always show a plot button.
        If the 2D array is not one of the special kinds of 2D array used for other plots,
        a heat map plot will be shown when you click on the plot button.</li>
    <li><code>show_window</code>: Removed the default callback of "show_window_values".
        Now no callback is called when you don't specify one and you click the
        close window button.</li>
    <li>New function: <code>browse_page</code> browses a url in your default browser.
        Unlike <code>show_page</code>, this shows you the url in an editable text field.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.7.6, Mar 8, 2021</summary>
    Highlights: New facility for DDE users installing and using NPM packages
     both in the user interface, and programmatically.
     Plot code and doc enhanced.
<ul>
    <li>Fixed a Python Ref Man example to not be in test suite as its not relevant.</li>
    <li>Fix for Plot titles that contain html.</li>
    <li>New <code>Plot.show</code> examples in Ref Man/Window System/Plot/Plot.show</li>
    <li><code>Plot.show</code> first arg can now be <code>null</code> to cause it to default to "plot_id". (<code>null</code> is shorter than <code>undefined</code>.)
    <li><code>Plot.show</code> now takes a 5th arg of <code>show_window</code> options.
        These are the same as the keyword args to show_window with some different
        defaults that make more sense for plots.
        Thus a plot can have both a show_window title and a plot title.</li>
    <li><code>Plot.show</code> now handles margins better such that you can see both the
         numbers of an axis and its axis title (if it has one).</li>
    <li><code>Plot.show</code> now doesn't (by default) inspect the values that are passed to
        <code>show_window</code>'s callback. With the new 5th arg to Plot.show,
        you can explicitly pass a callback for the show_window and
         have it do something different than nothing if you like.</li>
    <li>New File menu item: "Manage npm" for listing,
         installing and uninstalling npm packages.</li>
    <li>New class <code>DDE_NPM</code> for listing, installing and uninstalling npm packages.
        See Ref Man/Adding JavaScript</li>
    <li>New start screen tutorial: <b>Adding JavaScript</b>. It
        opens up the new Ref Man section on Adding JavaScript.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.7.5, Mar 2, 2021</summary>
Highlights: Python Interface much more useful.
            New Plot class and inspector integration.
            Simulator fixes.
<ul>
    <li>Extensions to Ref Man/Python documentation. The most substantial of which is for Windows Installation.</li>
    <li> Instruction: <code>Brain.eval_python</code> that facilitates integrating Python code into a Job.</li>
    <li>Fix for Py.init under certain circumstances for Linux.</li>
    <li>The default for the python installation in non-mac, non-windows (ie Linux, etc)
        is now "python3" instead of "python".</li>
    <li>Fixed bug in <code>Py.load_file</code> when processing slashes.</li>
    <li><code>load_files</code> can now take a .py file and it loads it using <code>Py.load_file</code>.</li>
    <li>When a Python numpy array is about to be returned to DDE,
        it is automatically converted to a list so that it can be converted to a JSON array
        and returned as a JS array.</li>
    <li>Improved callback default for <code>copy_file_async</code> to tell you the names of the files.</li>
    <li>Fixed simulator header pane numerical display for J2, J3, J4. The sign was wrong.</li>
    <li>Fixed simulator for J6 and J7.</li>
    <li>Serial Port: improved documentation on <code>serial_devices</code>.</li>
    <li>Added about 10 set_parameters to the set parameters series that shows up
        in the MakeInstruction dialog box for <code>Dexter.set_parameter</code>.</li>
    <li>Fixed Dexter set_link_lengths_using_dde_db for J6_angle_max and J7_angle_max.</li>
    <li>Compartmentalization of conversion of degrees to dexter_units (such as arcseconds) and back.</li>
    <li>Make Instruction, instructions menu now has "empty_instruction_queue" before "empty_instruction_queue_immediately"</li>
    <li>When launching DDE, now dde_init.js never comes up in the editor.
        If dde_init.js is the last file saved or it is the only file ever edited, a new buffer will come up instead.
        This prevents mistakes with this file, but you can still explicitly edit it.</li>
    <li>New class <code>Plot</code>, makes it easy to plot 1D, 2D and 3D arrays as well as move-points in Jobs.
        See Ref Man/Window System/Plot</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.7.4, Feb 5, 2021</summary>
Fix for initializing Python process with the file system.
</details>

<details class="doc_details"><summary>v 3.7.3, Feb 5, 2021</summary>
Highlights: New Python interface. New easy way to turn on/off the Startup operations
in Dexter like the PHUI interface. Bug fixes for Linux, node server interface, show_window
<ul>
<li><code>set_link_lengths_using_node_server</code> now gets it's ip address from the robot of the "job_to_start"</li>
<li><code>set_link_lengths_using_node_server</code> now sets a timeout for its attempt at 1 second, making it fail faster.</li>
<li>Now linux keybindings are like Windows keybindings,
    not like Mac as they previously were.</li>
<li>Fixed bug in switching to a file on the menu of files.</li>
<li>Minor bug fix in <code>show_window</code> callback function handling for anonymous functions.</li>
<li>Minor bug fix in <code>show_window</code>. Now passing in title: ""
     will create a window with no title bar without erroring.</li>
<li>Extended the documentation for <code>new Job</code> parameter,
    <code>if_robot_status_error</code> to include how to ignore an error.
     Extended the description of the different kinds of instructions to include null and undefined,
     under Ref Man/Robot and Ref Man/Robot/Robot Instructions.</li>
<li>Fixed <code>read_file_async</code> for node server to leave in beginning slash of path.</li>
<li>New menu item: Jobs menu/dexter tools/start options to "edit" Dexter's autoexec.jobs file
    controlling Dexter start up operations.
    Let's you turn on and off PHUI mode amongst other operations.</li>
<li>Improved User Guide/Debugging/Syntax Checker, first paragraph.</li>
<li>Fixed click_help doc scrolling for patch system methods.</li>
<li>New class <code>Py</code> for running Python code from within DDE JavaScript code.
   DDE user interface access with:
   <ul>
       <li>Eval button</li>
       <li>Command Line</li>
       <li>File menu/Load...</li>
   </ul>
    Documentation in RefMan/Python
</ul>
</details>

<details class="doc_details"><summary>v 3.7.2, Jan 13, 2021</summary>
Highlights: Improved robustness of connecting DDE to Dexter including error handling
      and no longer uses ping (to aid Linux installations and speedup).
      Simplified Misc Pane header/Simulation panel header by removing the extra "Dexter" menu.
      robot_status: now 4 different possibilities: g0 (the original), g1, g2, and g_other
      for statuses that are not yet well defined, but we can still look at them in the
      robot status dialog. TestSuite enhancements.
<ul>
    <li>Fixed the Jobs menu/Dexter Tools/Browse Dexter to always browse the current Dexter.default
        and not always 192.168.1.142</li>
    <li>Now when a user quits DDE from the Electron menu quit,
        from the Electron menu item "close window" or from clicking the main DDE window's close box,
          and there is a file in the editor with unsaved changes,
          they will be prompted as to whether they want to quit DDE without saving or not.</li>
    <li>Removed Sim pane header job and robot menu. Now just use the menu in the Misc pane header for selecting
        the default Dexter.</li>
    <li>Misc pane robot menu only gets dexter instance names on it,
        sans the "Dexter." prefix. A bunch of other code simplifcations around this.</li>
    <li>Redefined <code>default_robot_name()</code>  to return "Dexter." + Dexter.default.name
        and respelled this method to: <code>default_dexter_full_name()</code></li>
    <li> Pane header: respelled text: "default robot" to "Dexter.default:"
    <li>Changed instruction: <code>Dexter.get_robot_status</code>'s only argument's default from null to 0.
         Passing in an empty argument or null, now results in changing Dexter's status mode to 0, if it wasn't already.
         Documented in Ref Man/Robot/Dexter/Dexter Instructions/get_robot_status.</li>
    <li>Misc Pane Header: now has circle i  inspect button to inspect <code>Dexter.default</code>.</li>
    <li>When starting a Job using a Dexter for the first time since lanuching DDE,
      DDE gets the link_lengths and other settings from a file on Dexter.
      Now we first try to get that file via Dexter's node server,
      and if that fails, we fall back to getting it via a Job which is slower and more error prone.</li>
    <li>The Robot Status dialog box now has a circle-i icon to the right of the selected robot.
        Clicking it inspects the selected robot.</li>
    <li>When Inspecting a Dexter, the line for "robot_status" now has a button on the end of it
        named "Robot Status Dialog" that brings up the dialog for the inspected robot.</li>
    <li>Improved the error message: "Error running instruction" to give more information about the error.</li>
    <li>Fixed bug in sending <code>Dexter.get_robot_status(1)</code> with converting from an ascii digit
        to an integer.</li>
    <li>Robot status g2 implemented. New TestSuite file for RobotStatus.</li>
    <li><code>Dexter.start</code> removed "ping" from checking for existence of Dexter.
        This simplifies the underlying code, speeds up the starting of a job,
        and doesn't depend on Ping so should work better on Linux OS.</li>
    <li>DDE's default link length and joint angle min & max now set to Dexter HDI values.</li>
    <li>Fixed bug in <code>SimUtils.is_simulator_showing()</code></li>
    <li>Fixed when_stopped_testsuite to handle new pingless architecture.</li>
    <li>Option_click on editor now improves the display of Make Instruction by
         setting the Misc pane header correctly to "Make Instruction".</li>
    <li>Improved <code>show_in_misc_pane</code> to accept arg1 of the source code for make_instruction.</li>
    <li>Improved logic in <code>show_in_misc_pane</code> to coordinate its setting from various sources.</li>
    <li>Improved instruction <code>Control.wait_until</code> by not having it send periodic
        "keep_alive" g instructions during a long wait.
         This new code is simpler, removes a bug in waiting,
         and shifts the retrying to Socket.send which already had that mechanism in place.</li>
    <li>Fixed the setting of the Misc pane menu item in two places.</li>
    <li>Using option-click to select a whole <code>new TestSuite</code> expression in the editor
        no longer switches the Misc pane to "Make Instruction"
        because usually you want to run a TestSuite with Simulate Dexter in the Misc pane.</li>
    <li>The Output Pane header STOP button now also stops running TestSuites.</li>
    <li>Fixed Simulator to compute the <i>actual</i> last frame of simulation instead of one short,
       thus improving the accuracy of simulation.</li>
    <li>The manual TestSuite has been improved with a large PHUI_GUI test.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.7.1, Dec 27, 2020</summary>
Highlights: Support for robot status's g1, and g_other.
<ul>
    <li>Jobs menu/Run Instruction/Show_dialog the "Change mode to" select element now is initialized to empty.
        It did not show correct mode on initialization (and can't) so better to show blank.</li>
    <li>Bug fix to <code>is_phui_button_down()</code> which was returning the opposite of the correct boolean.</li>
    <li>User Guide/User Interface/Dexter User Interface: new section describing the "point down" checkbox.</li>
    <li>Robot Status now supports g0 (the original), g1(measured angles, velocity, torque) and
        g_other (generic, any non 0 or 1 status_mode).
        Lots of improvements to the robot_status dialog box.</li>
    <li>The "I" letter to the lower right of a Job button is now a &#9432; (circle i)
          for inspecting the job. &#9432; is used other places in DDE for inspecting objects.</li>
    <li>Ref Man/Robot/Dexter/Dexter Modes/set_keep_position,
         <code>set_open_loop</code> documentation extended slightly to be clearer.</li>
    <li>Instruction <code>IO.out</code> now takes a new 4th optional arg, print_job_info.
        If true, it prints the extra info it use to: Job name, instruction ID and instruction type.
         Default is false so that old calls to this instruction now won't have this "job info".</li>
</ul>
</details>
<details class="doc_details"><summary>v 3.7.0, Dec 14, 2020</summary>
Highlights: Dexter User Interface: numerous fixes. Support for Robot Status "g1".
<ul>
    <li>Fixed (on WinOS only) run the "Buttons column" example code in RefMan/Lesson.
        Fixed the bug when you clicked on the button "Dexter Picture".</li>
    <li>Remove from the testsuite, the RefMan example of:  new Job({name: "my_job8",
        works on WinOS but is intermittent on MacOS. See Doc on <code>Picture</code>.</li>
    <li>Fixed bug when choosing: File menu/New (also fixed in patch_3.6.9_1.dde)</li>
    <li>Dexter User Interface dialog improvements:
    <ul><li>Reduced width of row under big square so it wouldn't wrap to another line</li>
        <li>User Guide/User Interface/Dexter User Interface now documents keyboard control
             and the FromDex checkbox</li>
        <li>Now has a ? button in its upper right, to scroll the doc to help.</li>
        <li>Initial instructions are now a <code>Dexter.move_all_joints</code> and a
             <code>Dexter.pid_move_all_joints</code></li>
        <li>Now uses <code>insert_last_instruction_overwrite</code>
              which doesn't cause the do_list to continually
              build up but rather replaces the last instruction.</li>
        <li>Fixed: when user holds down only the shift key,
              now nothing happens, not even a warning message.</li>
        <li>Now the number keys increment the corresponding joint angle and shift-number-key decrements
            it. It use to be the reverse.</li>
    </ul>
    <li>Job now has defaults:<br/>
     keep_history: false, <br/>
     show_instructions: false</li>
    <li><code>Dexter.END_EFFECTOR_IN</code> has been deprecated.
        The new, and distant past spelling is <code>Dexter.END_EFFECTOR_IO_IN</code> which is compatible
         with Dexter firmware.</li>
    <li><code>Dexter.get_robot_status</code> now takes an optional argument, status_mode,
         which can be null (the default) 0, or 1.</li>
    <li><code>make_ins</code> now doesn't warn or error.</li>
    <li>DexterSim improvements now more accurately model Dexter.</li>
</ul>
</details>
<details class="doc_details"><summary>v 3.6.9, Nov 30, 2020</summary>
    <ul>
        <li> Fixed Release 3.6.8 build problems</li>
    </ul>
</details>
<details class="doc_details"><summary>v 3.6.8, Nov 27, 2020</summary>
<ul>
    <li> Fixed Release 3.6.7 build problems</li>
    <li>Fixed bug in simulator: when the Misc pane is not showing the graphical simulator.
         Now there's  a clear warning message.</li>
    <li>Improved the Ref Man/Lesson/Other Outputs for Education/Insert into Editor Pane/ "everything" example.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.6.7, Nov 27, 2020</summary>
    Highlights: Dexter User Interface: support for keystrokes, getting points from Dexter, and more.
    Big fix for the editor interface to the file system.
    Fix for MotionSetup code.
    Lesson improvements for helping teachers create tutorials for students.
    Jobs menu/Show Robot Status improvments.
    copy_file_async now is much more "async" for copying files from DDE to Dexter.
    Jobs Menu/Show Robot Status: fixes and extensions.
<ul>
    <li><code>get_in_ui</code> bug fix which fixes bug in MotionSetup code.</li>
    <li>TestSuite: added "typical duration" to the final report for comparison of that
        test suite run time.</li>
    <li>New Job Instruction: <code>Control.continue</code> for use within <code>Control.loop</code>.
        See Ref Man/Robot/Robot Instructions/Control.</li>
    <li>Improved click_help for Job.</li>
    <li>Fixed click_help for all "Control." and "IO." paths, especially <code>Control.break</code>
       which was confused with Javascript break.</li>
    <li>Fixed Jobs/Dexter Tools/ Calibrate Dexter dialog when clicking the close dialog box.
        Now does not display errors or warnings in the output pane.</li>
    <li>Fixed Jobs/Dexter Tools/ Calibrate Dexter dialog when simulate is on.
        Changed the alert box telling you more accurately how to change from simulate to real,
        and changed it from a "confirm" dialog to an "alert" as only 1 button is needed.</li>
    <li>Ammo caused infinite loop on JSON.stringify(Ammo) and inspect(Ammo)
         so those calls have been eliminated. This was breaking inspect(window)</li>
    <li>The asterisk that shows that the current editor needs saving now has a tooltip that explains it.</li>
    <li>Fixed bugs in the editor's file handling</li>
    <li>Extended <code>Lesson.make_button_column</code>
        with an example of a button that evals any JavaScript.</li>
    <li>Organized RefMan/Lesson/Lesson  and extended it with new section:
       Insert into Editor Pane, which lets you also replace the selection or all editor content,
       and select the newly inserted text.</li>
    <li>Improved the definition of a Job at the top of  RefMan/Job</li>
    <li>New User Guide/Installation/Multiple DDEs Installed</li>
    <li><code>copy_file_async</code> now truely is async and works for copying nested folders
        from laptop to Dexter's linux file system.</li>
    <li>Dexter User Interface: added methods: <code>Kin.J6_to_roll</code> and <code>Kin.roll_to_j6</code>
    which support the new Dexter User Interface dialog J6 roll feature.</li>
    <li>Dexter User Interface: Fixed dui2.dui_instance_under_mouse() that caused problems.</li>
    <li>Dexter User Interface: changed initial value of j3 from 0 to epslion, like J2 is now.
        This gets rid of the bug on initial start of the dialog and decrimenting Z.</li>
    <li>Dexter User Interface: can now be controlled by keyboard keys. This is modified
        by the new "key inc" menu.
        See tooltip on big x-y square for doc.</li>
    <li>Dexter User Interface: now has "FromDex" checkbox to populate the fields with values
         from Dexter after setting it to follow_me mode.
         Doc printed in Output pane when you check it.</li>
    <li>Dexter User Interface:  insert "Job" button now does not insert a first instruction,
         it just inserts an empty Job. This is better if you are using from Dexter to get points.</li>
    <li>When launching DDE, the initial file edited will be the file you were editing when you quit DDE.</li>
    <li>When launching DDE, the initial file edited will be the file you were editing when you quit DDE.</li>
    <li>Jobs menu/Show Robot Status: bug fix for
           <ol>
               <li>when simulate off</li>
               <li>choose jobs menu/Show Robot Status</li>
               <li>click Run update job</li>
               <li>click window close box, get error.</li>
           </ol>
    </li>
    <li>Jobs menu/Show Robot Status: Fix: when the latest run Job had a robot that wasn't a Dexter.</li>
    <li>Jobs menu/Show Robot Status:  New button <button>Inspect Array</button> that shows you the robot status array with the index numbers, labels, and values.</li>
    <li>Jobs menu/Show Robot Status:  New button <button>Browse</button> that let's you see the main web page for the selected Dexter.</li>
    <li>Editor: The most common syntactic stylistic "errors" have been removed or replaced with warnings.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.6.6, Nov 5, 2020</summary>
Highlights: Fix to Job Engine build process.
<ul>
    <li>patch_3.6.5_1 Extension to Ref Man/IO/Picture/Camera IO about setting permissions for camera in MacOS.</li>
    <li><code>write_file_async</code> fixed to not print contents to the Chrome console.</li>
    <li>Fix for Job Engine build process by removing unused npm package
        uvc-control that required package usb@1.6.3 which couldn't compile.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.6.5, Nov 3, 2020</summary>
Highlights: New PatchDDE for deprecation, 2_to_3 compatibility and patching system.
            New Tutorial authoring tools.
            Serial port, File handling, Picture improvements.

<ul>
    <li> serial.js imported <code>stringify_value</code> to fix bug in
          <code>serial_connect_low_level</code>
          Also imported it to messaging.js and robot.js</li>
    <li>serial.js <code>serial_connect_low_level</code> new arg: open_callback</li>
    <li>serial: changed "path" to "port_path" in most places.
        Changed "options" to "port_options" in parameter names.</li>
    <li> serial port: <code>serial_get_or_make_port</code> now if it finds an existing port,
         and that port is  not open, it opens it.</li>
    <li><code>serial_disconnect</code>  improved version that prints status to Output pane
         and has more reliable algorithm</li>
    <li>Changed hover cursor for big blue question mark to a pointer.</li>
    <li>Welcome screen tutorial items now have a hover background color and a pointer cursor.</li>
    <li>"Move Dexter" steptorial now does not present the
         Dexter UI dialog box until after the user has chosen simulate or real
         so that that choice will be used.</li>
    <li>Fix to <code>espeak</code> for text to speech on Dexter </li>
    <li>Fix for the "double rendering of Dexter" problem.</li>
    <li>JS Editor Lint: Eliminated warning for not having spacing around a colon f
         or a JS literal object.
         Also eliminated warning for <code>typeof(foo)</code>.</li>
    <li>JS Editor Lint: now "unused variables & uncalled fn defs get a warning
          (yellow triangle , not an error (red dot in left margin.)</li>
    <li>Fixed click help infinite loop with unclosed open bracket inside of a /* ..*/ comment.</li>
    <li><code>Editor.enable_click_help</code> is a new global variable to
         turn on or off click help.
         Its default value is true.
         See User Guide/User Interface/Editor Pane/Editor.enable_click_help.</li>
    <li><code>show_in_misc_pane</code>, if passed a string starting with &lt; will display it as html.</li>
    <li><code>show_in_misc_pane</code> if passed a dom elt, displays it in the misc pane.</li>
    <li>Ref Man new top level section "Lesson" on how to create lessons in DDE.</li>
    <li>New utility function: <code>is_string_base64</code>.
         See Ref man/IO/Picture/Low Level/is_string_base64</li>
    <li>Fix for taking pictures on Mac OS</li>
    <li><code>Picture.show_picture</code> can now take a base64 string as its "content" to display.</li>
    <li><code>Picture.save_picture()</code> now works for using all defaults for args.
        Better error message for no valid canvas_or_mat arg.</li>
    <li>Improvements to inspect for inspecting a class.</li>
    <li>Exported function: <code>folder_separator</code>, now available in DDE and job engine.
         Was formerly available only in LTS.</li>
    <li>Fixed <code>new Dexter()</code> to work just like  <code>new Dexter({})</code>
         This also fixed Jobs menu/Insert Example/Human Instrs/</li>
    <li>New class <code>PatchDDE</code> which formalizes deprecate,
        loading code to make DDE 3 more compatible with DDE 2,
        and provides a patching facility for quick fixes to a given release.</li>
    <li><code>patch_until</code> fixed, deprecated, moved to <code>PatchDDE.patch_until</code> and
          added to dde_2_to_3 compatibility.
          See Ref Man/PatchDDE/patch system/patch_until</li>
    <li>Ref Man documentation for <code>write_file</code>'s 3rd (encoding) parameter has been written.</li>
    <li>Ref man for <code>write_file_async</code> was mislabeled. Now fixed.</li>
    <li>New function: <code>copy_file_async</code>.
          See Ref Man/IO/File Access/copy_file_async</li>
    <li>fixed doc for <code>write_file_async</code>.
        The callback takes only 1 arg, an error object,
        but not a 2nd arg of content as previously documented.</li>
    <li><code>write_file_async</code> extended.
        Now if the path argument contains folder(s)
        that don't exist, they are automatically created.</li>
    <li>new function: <code>copy_folder_async</code>. See Ref Man/IO/File Access/copy_folder_async.
           Not yet working for copying folders to and from Dexter.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.6.4, Sep 29, 2020</summary>
Highlights: New Steptorial for Learn JS.
            Improvements to the Welcome window.
            read_file_sync and write_file_sync now have efficient file transfer between
            DDE and Dexter.
            Saving Files UI in DDE improved.
            Bug fix for Dexter.set_parameter("CartesianSpeed") and friends.
    <ul>
        <li>Welcome Dialog: shortened title to "Welcome to DDE" so that you can drag the title bar
             to reposition it.</li>
        <li>Welcome dialog now when you click an item, it checks it and leaves it checked.
            User can no longer uncheck it by clicking on it. This is just simpler.</li>
        <li>When you close the Welcome dialog, a printout in the output pane tells you
            how to get it back.</li>
        <li>Clicking on the big blue question mark in the upper right now shows
            the Welcome dialog box of tutorials. The last one is "help system" to see what
            the big blue question mark use to show you.</li>
        <li>Misc Pane new checkbox "Expand". Check to maximize the Misc pane,
            uncheck to put it back where it was. Pays attention to the Edit menu "animate ui"
             checkbox.</li>
        <li>serial_disconnect now has flush before close, and a try_catch around it.</li>
        <li>Improved error message when selecting from Misc Pane menu fails.</li>
        <li>"Save on eval" and "Animate UI" menu item checkboxes now check and uncheck
            if you choose the menu item OUTSIDE of the checkbox.</li>
        <li>For a lesson's button, checks a button at most once.</li>
        <li>Misc pane menu is now a combo box allowing type in, and it is
            automatically updated when the content of the Misc pane changes,
            esp when choosing "Choose File"</li>
        <li>Bug fix for instruction <code>Dexter.set_parameter("CartesianSpeed", 300000)</code>
             and similar fix for  set_parameter of names that start with: "Link"</li>
        <li>ESLint added ok to have node.js fns, commonjs fns, and globals
            that are not known to eslint, but are none the less defined.</li>
        <li> Adjusted Move Dexter tutorial to allow you to select simulate OR real,
            (with a warning).</li>
        <li>Clicking on Welcome dialog "Learn JavaScript now brings up a guided tour of
            how to learn JS, closes the Welcome dialog and tells you how to get it back.</li>
        <li> File menu/Save (ctrl S) now always saves to the local computer. </li>
            It does not ask you what dexter you might want to save on.</li>
        <li>File menu/Save to Dexter as:  removed incorrect first para in the dialog box.</li>
        <li>Minor improvement to User Guide/Configure Dexter/Data Connection/on MacOS</li>
        <li><code>read_file_async</code> and <code>write_file_async</code> can now write to Dexter efficiently.
           See Ref Man/IO/File Access/read_file_async, write_file_async.
        </li>
</ul>
</details>
<details class="doc_details"><summary>v 3.6.3, Sep 4, 2020</summary>
Hightlights: Simulator now displays much more realistic Dexter.
             New tutorial for Dexter UI.
             New "Dexter Platform Architecture" diagram.
             Green blinking to alert for hidden info displays.
             Bug fixes for low level instructions.
<ul>
    <li>Much more realistic simulated dexter from the CAD files that print its skin.</li>
    <li>Support for displaying glTF files in Misc Pane/choose file.</li>
    <li>Adjusted initial splitter panes now show more of output and misc panes.</li>
    <li>Wecome screen top tutorial title now spelled "Move Dexter".</li>
    <li>When you click on the Welcome dialog box's "Move Dexter" tutorial, you get a multi-step,
            highlighted region guided tour of the dialog box.</li>
    <li>Fixed <code>append_in_ui</code> by replacing call of insertAdjacentElement with insertAdjacentHTML.</li>
    <li>Moved <code>html_db</code> to core folder so that now make_html and friends are available in job engine.</li>

    <li>Fix "Making Music" url in Ref man to point at the specific making music video.</li>
    <li>Inspector: extended to show "name: foo" for each item when inspecting an array of objects and an object has a name property.</li>
    <li>Inspector: title when inspecting an object, if that has a "class" or "type", its shown.</li>
    <li>Misc Pane now remembers, across dde launches,  the file shown in it and displays it upon relaunch if the file still exists.</li>
    <li>to_source_code: Changed its depth_limit default value from Infinity to 100, and for newObjects, now passes in a depth of depth + 1 to stop infinite recursion potential.</li>
    <li>speak extended to work on Job Engine. See  Ref Man/IO/Sound/speak/node_callback</li>
    <li>Improved messaging dialog insert button formatting of inserted text.</li>
    <li>New Insert menu show_window example for input range sliders.</li>
    <li>Fixed to_source code for make_ins instruction via aux fn to_source_code_instruction_array</li>
    <li>Fixed is_literal_object utility. And that fixed:inspect(make_ins("S", "RebootServo", 3))</li>
    <li>When there is new output in the doc pane or the output pane, and the pane is hidden (collapsed),
         its corresponding splitter bar control blinks green to let the user know there is
         something new to see in the hidden pane.</li>
    <li>User Guide/Calibrate Dexter updated for Dexter HDI.</li>
    <li>Fixed show_window menu widgets and the Insert menu/show_window/Menu example</li>
    <li>Misc pane new option "Dexter Architecture" shows The Dexter Platform Architecture block diagram.</li>
    <li>Dexter UI: zslider appearance and color tweaks.</li>
    <li>Dexter UI: When DUI is initialized, its job moves the robot to 0,0,0,90,0,0,0.</li>
    <li>Fixed Dexter Photo   ... now part of DDE instead of hitting hdrobotic.com</li>
    <li>SimBuild the template block and the new blocks made now have phong shading material for a more 3D look.
        (but this still needs work)</li>
    <li>Bug fix: when picking up an already made block, it doesn't make a copy, it just grips the existing block.</li>
    <li>Extensions to "manual_testsuite" to make it more definitive for running all tests.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.6.2, Aug 10, 2020</summary>
Highlights: Dexter User Interface dialog extensions.<br/>
            Simplified "Welcome" dialog box.
<ul>
    <li>Fixed Job Human instruction examples (actually done in 3.6.1)</li>
    <li>Fixed inserting a color such that # will be inserted before a
        hex value of a color. (actually fixed in 3.6.1)</li>
    <li>Windows version now no longer has redundant File/Edit/etc menu bar.
       (actually fixed in 3.6.1)</li>
    <li>Fixed initialization of the new "misc_pane_content" persistent variable by correctly
        setting defaults.</li>
    <li>Internal: Removed font "creepster" that was used in the Welcome dialog.</li>
    <li>Removed "Configure DDE" from "Getting Started". Its not important to know when first
        learning DDE and its covered in its own section in the User Guide.</li>
    <li>On DDE launch, if the only remembered edited file is dde_init.js (as it is on initial launch),
        then it does not show up in the editor but rather a new buffer does.</li>
    <li>Improved formatting in User Guide/Doc Pane.</li>
    <li>Reduced welcome dialog from 17 tutorial to 9, no scrolling.
       Also removed reference to the big blue question mark, but have a new last tutorial of
       "Help System".</li>
    <li>Improved confusing persistent.json formatting.</li>
    <li>Reworded "no dde_init.json" error message, and made it not come up if user hasn't
        saved any files as in when they first launch DDE.</li>
    <li>Fixed the link to the debugging video in the User Guide Debugging section.</li>
    <li>Fixed show_window content elements of class "clickable" that have a "name" property to have
         that be the value of the literal object passed in to the show_window callback's
         clicked_button_value property, and that such elements will have their "innerHTML"
         be the value of their "name" or "id" in the show_window callback.
         See Ref Man/Window System/show_window/content/clickable.</li>
    <li>Testsuite: selection_to_test now automatically computes a reasonable testsuite name
        when making a new testsuite.</li>
    <li>Dexter UI: Improved Documentation.</li>
    <li>Dexter UI: Now there's 4 arrow buttons for stepping through the instructions of
        a Job defined in the editor.</li>
    <li>Dexter UI: The dialog now has a horizontal line above the Insert row to separate it
        from the rest of the dialog.</li>
    <li>Dexter UI: Jobs menu/Dexter Tools/Dexter UI has been moved to Jobs menu/Dexter UI
        for easier access.</li>
    <li>Simulator: in Sim pane header, respelled "Move duration 2.1 seconds" => "Move dur: 2.1 s"
        and shift it to right of the job/robot select menu to save vertical space. (actually done in 3.6.1)</li>
    <li>Simulator: Tooltips now shown on radio and checkbox labels, J1 through J7 labels,
        and X, Y, Z labels.</li>
    <li>Fixed click-help and inspector when clicking on file names of long files.</li>
    <li>MacOS certificate installed so users won't get warning of untrusted file when installing DDE.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.6.1, Jul 24, 2020</summary>
Highlights: Significant extensions for Simulator, Dexter User Interface, SimBuild.
New "Splash Screen" of tutorials for aiding new users.
Minor bugs fixed in Kin.js and serial.js.
<ul>
    <li>Removed underline from the big blue question mark and made it slightly larger.</li>
    <li> Extended Inflow doc with how to pass in options query args to <b>get</b>
         to increase records returned, sorting order, etc.</li>
    <li>Fixed Test Suite bug: Inflow.put call should have been "not in testsuite" now it isn't.</li>
    <li>Removed printout in output pane for the big blue question mark as that's now in the splash screen.</li>
    <li>Improved <code>Dexter.move_to</code> such that if what's passed in for J6 and J7 is the default, [0],
        then only 5 angles are sent to Dexter. If only J7 is the default,
        then only 6 angles are sent to Dexter.
        If J5 is [0] but J7 is not, then 7 "angles" are sent to dexter,
        but the angle for J6 is "N" meaning "don't change it from its current position.
        This means Dexter will "do nothing" for those unpassed in Joints,
        solving a problem with the gripper.</li>
    <li>Improved <code>Dexter.move_all_joints</code> similarly, ie if j6 and/or j7 is [0], send a NaN to dexter.</li>
    <li>Removed folder .license_temp_gen from the electron_dde folder .It never should have been there.</li>
    <li>Splash screen comes up when you first launch DDE. Provides convenient check-box menu of
       17 tutorials to view with a click. Checks are perisistent accross launches of DDE so you can
       keep track of what you've seen and what you haven't.</li>
    <li><code>show_window</code>
        <ul>
            <li>show_window with a title of "" will now have NO title bar, meaning no title, close box, collapse control, and you can't drag the window.</li>
            <li>show_window has two new init params: title_bar_height, title_bar_color</li>
            <li>show_window collapse icon improved.</li>
            <li>show_window, when the user clicks the "X" to close the window, now the show_window's
                callback function is also called, with the clicked_button_value
                value of  "close_button".</li>
            <li><code>show_window_values</code> The default callback for show_window is now a global variable so it is available for all show_window calls.</li>
        </ul>
    </li>
    <li>Click help for Control.loop fixed.</li>
    <li>RefMan for <code>Control.loop</code> extended to have 4 more examples and
        a more complete explanation of body_fn returned instructions.</li>
    <li>In DDE 3.4.7, 17 "Robot" instructions were deprecated and replaced with same_named
       "Control" or "IO" instructions.
    Example: <code>Robot.loop</code> is now  <code>Control.loop</code>.
    The depricated insructions are;
    <ul><li><code>Robot.break</code></li>
        <li><code>Robot.go_to</code></li>
        <li><code>Robot.loop</code></li>
        <li><code>Robot.label</code></li><li><code>Robot.suspend</code></li>
        <li><code>Robot.unsuspend</code></li>
        <li><code>Robot.sync_point</code></li>
        <li><code>Robot.wait_until</code></li>

        <li><code>Robot.include_job</code></li>
        <li><code>Robot.send_to_job</code></li>
        <li><code>Robot.sent_from_job</code></li>
        <li><code>Robot.start_job</code></li>
        <li><code>Robot.stop_job</code></li>

        <li><code>Robot.debugger</code></li>
        <li><code>Robot.step_instructions</code></li>
        <li><code>Robot.error</code></li>
        <li><code>Robot.if_any_errors</code></li>
    </ul>
    New in this release is click help for each of those deprecated instructions
    telling you that they are deprecated, and directing you to their replacements.</li>
    <li>RefMan/Robot/Dexter/Dexter Instructions/move_to for Dexter.move_to instruction extended
        to contain "move to" so that it will be found when searching with the Find button.
        Also added 2 examples.</li>
    <li>RefMan for <code>Dexter.pid_move_all_joints</code> and <code>Dexter.pid_move_to</code> now have examples.
        Minor improvements made to other examples in the "move" instruction documentation.</li>
    <li>Find type in: click help now works on this text.</li>
    <li>Jobs menu/Dexter tools/Ping Dexter now auto-scrolls to the User Guide section on Ping.
        Also Ping in "Test Connectivity" section, now has a link to the User Guide section on Ping.</li>
    <li>The big blue question mark is now visible even when the doc pane is very narrow.</li>
    <li>Getting started: first line: removed the word "fundamentally".</li>
    <li>If user is not running the latest dde beta version, its now not printed out
       in the Out pane as a 'warning' but just a note in purple.
       The Doc pane is no longer auto-scrolled to the page for downloading the latest version.</li>
    <li>Simulator
        <ul>
            <li>Simulator: fixed new DexterSim to init <code>J6_MEASURED_ANGLE</code> to 512.</li>
            <li>Upon first DDE launch, the content of the misc pane is the simulator.</li>
            <li>Misc pane content is now a persistent variable meaning whatever was in the
                content when you quit DDE, that will be the content when you relaunch it.</li>
         </ul>
    </li>
    <li>Simulator_builder
        <ul>
            <li>Simulator can sense J7 (gripper) as open or closed</li>
            <li>A "template" box that can be cloned when the gripper closes on it.</li>
            <li>New button in Misc pane header for "load sim build".
        </ul>
    </li>
    <li>Simulator Extensions
        <ul>
            <li>Sim pane now oriented to up up with +X on the right.</li>
            <li>The "Z" label now shows you a non-backwards Z in the default view.</li>
            <li>Simulator table changed to Dexcell dimensions</li>
        </ul>
    </li>
    <li>Dexter User Interface
    <ul><li>For insert instruction into editor, improved whitespace.</li>
        <li>The "editor" button grabs the instruction in the editor and populates the Dexter UI dialog with it.
        <li>Smarter pruning of default args when inserting instructions into the Editor.
        <li>Respelled Dexter User Interface 2 to Dexter User Interface.
            Respelled old Human Instruction Job of Dexter User Interface to
            Dexter Simple UI to avoid confusion.</li>
        <li>Now preventing the dragging of the  green X,Y dot into the donut hole.</li>
        <li>New button called "ready" which moves robot (and GUI) to angles[0, 0, 90, 0, 0]
            because that positions robot to be good for normal moving whereas home position isn't.</li>
        <li>New button called "editor" to grab an instruction from the editor and populate
            the dialog plus move the robot.</li>
        <li>New User Guide section for Dexter User Interface.
           The doc is scrolled to automatically when the dialog comes up.</li>
        <li>When inserting an instruction into the editor for move_all_joints, now all 7 args are inserted.</li>
    </ul>
    <li>DDE now automatically creates the dde_apps folder if it doesn't exist.</li>
    <li>Replaced Ref Man and other code examples of deprecated <code>Robot.out</code>
        with <code>IO.out</code></li>
    <li>Fixed <code>Kin.point_down</code> for J5.</li>
    <li>The menu item Jobs menu/Run Instruction/selection can now be invoked with
        Ctr-R on windows and Cmd-R on MacOS.</li>
    <li>Jobs menu/Run Instruction/HOME_ANGLES has been extended to to run,
        after <code>Dexter.move_all_joints(0,0,0,0,0,0,0)</code>,
        a <code>Dexter.pid_move_all_joints(0,0,0,0,0,0,0)</code>
        and <code>Dexter.empty_instruction_queue()</code></li>
    <li>Fixed import/export problems with dde_error in Kin.js and serial.js</li>
    <li>Fixed click-help and inspector when clicking on file names of long files.</li>
    <li>MacOS certificate installed so users won't get warning of untrusted file when installing DDE.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.6.0, Jul 4, 2020</summary>
Highlights: Updated versions of foundational software.<br/>
    Doc improvements, esp. Learning JS via Stepping
    and JavaScript for Python programmers.<br/>
    Simulator bugs fixed.<br/>
    Dexter UI improvements.<br/>
    Improvement for Kin.point_down<br/>
<ul>
    <li>Underlying Software updates:
        <ul>
            <li>node.js   version upped from 10 to 12.</li>
            <li>Electron  version upped from 4 to 5.</li>
            <li>serial_port version upped from ^7.0.2 to ^8.0.0</li>
            <li>jqxwdigets upgraded from version 5 to version 9.</li>
            <li>Three.js upgraded to v 0.118.3 and converted to using npm to install it.</li>
            <li>three-2dtext upgraded to v0.6.0 and converted to using npm to install it.</li>
        </ul>
    </li>
    <li>TestSuite "Run TestSuite File" extended to be able to accept ref_man.html and guide.html
         when chosen by the user to run those doc files as testsuites.</li>
    <li>Cleaned up User Guide Help System section including fixed webinar videos url in
        The User Guide to:https://www.hdrobotic.com/blog/programming-in-dexter-development-environment-archive</li>
    <li>Fixed bug in latest release so that clicking on a splitter pane "expander" bar will
         expand the editor pane or doc pane, not the other panes like it did in DDE v 2.</li>
    <li>User Guide: Improvements to "JavaScript" section.</li>
    <li>User Guide: new section: "JavaScript for Python Programmers"</li>
    <li>Added tooltips to all menu bar menus</li>
    <li>Updated Help System doc
        <ul>
            <li>At top of Help system doc, new paragraph about different learning styles</li>
            <li>User Guide section on Learning JavaScript extended to have a step by step tutorial on using the stepper to learn JS.</li>
            <li>Added Jobs menu/Dexter Tools/Dexter U2 for the "donut dialog".</li>
            <li>Emphahsized "STRUCTURED LEARNING" where relevent</li>
        </ul>
    </li>
    <li>User Guide new section under Javascript/Learning JavaScript for learning via Stepping.</li>
    <li>New doc: User Guide/JavaScript/JS for Python Programmers</li>
    <li>New function: <code>is_folder</code> returns true if the passed in string is a folder.
        See Ref Man/IO/File Access/is_folder</li>
    <li>New function: <code>folder_listing</code> returns an array of the files and/or subfolders of a folder.
        See Ref Man/IO/File Access/folder_listing</li>
    <li>Output pane made slightly less high to reduce wasted vertical space.</li>
    <li>Dexter UI2 and simulator
        <ul>
            <li>Dexter UI2 extended to have its Job name the same as its file name WHEN it is running on the Job Engine.</li>
            <li>Choosing Dexter UI2 Jobs menu item automatically switches Misc Pane to "Simulate Dexter" .</li>
            <li>Dexter UI2 fix X axis wrong sign for the green dot, sim j1 and j5 fixed.</li>
            <li>New limits to j1 thru j5 sliders of: [185, 105, 150, 120, 185] in
                robot.js J1_ANGLE_MIN and friends.</li>
            <li>Dexter UI2 bug fixed when updating Joint angles via the number spinners.</li>
            <li>Dexter UI2 now points down by default.</li>
            <li>Dexter UI2 New button "home"</li>
            <li>Fixed <code>Kin.point_down</code></li>
            <li>Dexter UI2 New controls for Inserting JS of current location, only when Dexter UI2 running in DDE.</li>
            <li>Fixed relaunching of Dexter UI2 dialog</li>
        </ul>
    <li>New oplet: "C" for pid_move_to</li>
    <li>New Oplet "D" for pid_move_to_straight</li>
    <li>New class: Inflow for reading and writing data from the Inflow inventory management system.
        See Ref Man/IO/Inflow</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.5.12, Jun 16, 2020</summary>
 Highlights: version 3.5.11 build did not produce a .exe file so
            this release was made.
<ul>
    <li> Fixed Messaging.login call in ref man to not be run in TestSuite.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.5.11, Jun 16, 2020</summary>
Highlights: Inspector extended with 2D capability for arrays of objects.
            WinOS: fix for tiny window on launch and workaround documented for
                 installation hang bug.
            Serial port fix, and many others.
<ul>
    <li> Fixed bug in TestSuite for <code>Vectorproject_point_onto_line</code> </li>

    <li> Documented <code>Control.start_job</code>'s if_started parameter's default.</li>

    <li> <code>Control.start_job</code> added: "running_when_stopped" processing.</li>

    <li> <code>Control.stop_job</code> fixed bug wherein a job that has
         when_stopped="wait" and
         a Control.stop_job didn't, in fact, stop.
         New TestSuite test added for it.</li>

    <li> Inspecting a array of literal objects now can be displayed as a 2D table.</li>

    <li> Inspecting arrays now has a "2D" checkbox to toggle 2D vs 1D display formats.</li>

    <li> When DDE is launched, the Output pane now includes:<br/>
          "For help on using DDE, click ? in the upper right."</li>

    <li> On DDE launch, changed the printout:
         "The latest beta version" to "The latest public beta version"
         as that's more accurate.</li>

    <li> Test menu/Navigation/* fixed keystroke designations on MacOS from "Alt-" to "Opt-".</li>

    <li> Fix for DDE coming up as a tiny window in WinOS.</li>

    <li> The install bug for Windows 10 of ""Installing, please wait..." forever.
         Documented workaround in User Guide/Installation/Windows OS Problems/Install Hang Bug
        and Github DDE Issues.</li>

    <li> <code>Human.notify</code> instruction has a new parameter:
        close_same_titled_windows.
       Like its same-named parameter in <code>show_window</code>
        except that the default is <code>false</code>.</li>

    <li> serial port:  Now caches the port object so that at most,
         only one is created for a path in a given DDE session.</li>

    <li> <code>serial_disconnect_all</code> now documented under Ref Man/Robot/Serial/Low Level Serial/
    </li>
</ul>
</details>

<details class="doc_details"><summary>v 3.5.10, May 30, 2020</summary>
Highlights: Bugs fixed in serial port, the "out" function, Job.start,
    show_window, click-help,
    Vector.project_point_onto_line, Kin.three_torques_to_force,
    Editor keystroke: ctrl-O (for open), Editor coloring JavaScript keywords.<br/>
    Editor now displays "unsaved" state.<br/>
    Inspector works on HTML DOM elements.
<ul>
    <li> serial.js fixed bugs in <code>serial_onReceiveCallback</code></li>

    <li> Respelled serial_devicies_async_callback_default to
         <code>serial_devices_async_callback_default</code></li>

    <li> DDE buttons now look more like buttons: rounded corners, outset border shading,
         hover border color to let you know you're really on the button.</li>

    <li> Improved Job.start and Job.init_do_list to better handle a new do_list
         passed in to <code>Job.start</code>'s options.</li>

    <li> Fixed the <code>out</code> function argument of "code" to properly print in
         the HTML <code>code</code> font.</li>

    <li> Extended User Guide/Editor Pane with "Click, Select, Drag" section now containing:
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
    </li>

    <li> Fixed bug in <code>Vector.project_point_onto_line</code>
         of misspelling of Vector.project_point_onto_linepoint.</li>

    <li> Fixed a bug in <code>Kin.three_torques_to_force</code> with
         sign error in y and z.</li>

    <li> new TestSuites for <code>Vector.project_point_onto_line</code> and
         <code>Kin.three_torques_to_force</code>.</li>

    <li> Vastly improved error message for when a show_window callback errors.</li>

    <li> Fixed on Mac & windows ctrl-O (for open)</li>

    <li> Now the editor pane colors JS keywords  such as
        "return", "function", "debugger" purple like it use to in DDE version 2.</li>

    <li> in dde editor, put a "*" to the left of the file name in the Editor Header
    to indicate that the file needs savings.</li>

    <li> show_window fixed bug in <code>SW.get_show_window_title</code> which also fixes a bug in
         <code>SW.windows_of_title</code></li>

    <li> inspector can now inspect HTML DOM Elements.</li>

    <li> click_help onclick_for_click_help now protects against getting a "full_src" that isn't a string.</li>

    <li> Fix for <code>params_string_to_param_names_and_defaults</code>
         when clicking on certain fn calls with keyword args.</li>

    <li> Job engine: now defines global vars: <code>dde_version</code> and <code>dde_release_date</code>.
        Previously these vars were defined in DDE proper only.
        They are printed to the console when index.js (the job_engine) is loaded.</li>
    </ul>
</details>

<details class="doc_details"><summary>v 3.5.9, May 14, 2020</summary>
Highlights: bug fixes.
<ul>
    <li> Slight improvement of doc for <code>New Serial</code>New parameter: capture_extras.</li>

    <li>  <code>show_window</code> textarea now sets in the arg lit obj to a show_window handler
        the textarea "id" if there is no "name" attribute in the
        html for the show_window content.</li>

    <li>  Fix to utils.js  <code>params_string_to_param_names</code> when the string starts with a "{"</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.5.8, May 9, 2020</summary>
Highlights: New Job debugging facility for stepping through JavaScript.<br/>
            Improvements to the auto-generated email when you make a suggestion/bug report.<br/>
            Signficant bugs fixed.
<ul>
    <li> Removed redundancy from Ref Man/IO/Web/get_page</li>

    <li> Now when choosing from the Insert menu, the items:
         beep, beeps, get_page, show_page, speak, speak with options,<br/>
         the doc pane will scroll to their documentation.</li>

    <li> show_page is now known by the linter and won't give you a warning.</li>

    <li> show_page now returns a window instance that you can call
         win.chose() on plus a variety of other methods.
         See: Ref Man/Window System/show_page.</li>

    <li> get_page: improved Ref Man doc, eliminated comments inserted
         when choosing Insert menu, get_page because
         they are now redundant with the Ref Man.</li>

    <li> Fixed bug that the back and forward arrows in the Doc pane didn't work
         for most of the time.</li>

    <li> The former <code>Control.debugger</code> instruction has been renamed to
         <code>Control.step_instructions</code> </li>

    <li> <code>Control.debugger</code> now means an instruction that pauses a Job
        and allows you to step through the JavaScript of a running job,
        not just each instruction. This is a low-level but powerful tool.
        See User Guide/Debugging/Stepping Instructions/step_instructions.</li>

    <li> The Misc Pane header has a new checkbox, "Js debugger". This
         allows you to start stepping the JavaScript of a running Job.</li>

    <li> Improved the organization of the User Guide for debugging,
        especially for stepping.</li>

    <li> Fixed a click help bug that caused an error when clicking in the editor.</li>

    <li> Calls to the function <code>shouldnt</code> improved by scrolling the
         doc pane to user guide Contacts.</li>

    <li> Improvements to the auto-generated email that is created when you
        click on the email address to send bug reports to in User Guide/Contact.
        Now the editor selection and a list of the running Jobs with
        their status and currently executing instruction are shown.</li>

    <li> Removed the "save file when DDE quits" functionality
        because it looks like that was causing an empty file to be saved
        for the current file, thus losing the whole contents of the file.
        Now you may lose the contents of the buffer since you last saved it
        if there is an unexpected quit of DDE.
        Note that if you have the File menu item "Auto Save" checked,
        saves will happen upon clicking the eval button and switching
        editor buffers, so with this checked, if you eval via the
        Eval button some horrible crashing code, your latest editor buffer
        will still be saved (with the crashing code!)</li>

    <li> robustified utils is_string_a_integer to return false if passed a non-string.</li>

    <li> fixed bug in Job.report() of undefined fn now in SW class.</li>

    <li> serial_port_init() is no longer called during startup, to
        avoid the message:
        "Warning: Calling serial_port_init() is no longer necessary to use the serial port
        capability. It now does nothing."</li>

    <li> tweaked Job.insert_instruction so that instructions inserted at location "end"
        always are top level instructions on the do_list.
        This improves inspecting the do_list hierarchy.</li>

    <li> RefMan/Robot/Robot Instructions/Control/start_job  improved.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.5.7, Apr 21, 2020</summary>
Highlights: Extensive Error handling improvements.<br/>
    See Ref Man/Job/Error Handling for an overview.<br/>
    Expanded click help & doc on make_ins("w" ...)<br/>
    modbus-serial installed<br/>
    serial port improvements for Job Engine.<br/>
    Bug fix for Control.loop/Control.break with nested loops.
<ul>
    <li>Fix to ref man example in Object.entries_doc_id
        for the function definition that screwed up the test suite.</li>

    <li> Changed generator (function*) examples in the ref man and in
        Jobs menu/Insert Example/Generators from
        function* foo(){...} to
        var foo function* (){...}
        because JavaScript doesn't bind the "foo" in function* foo(){...}</li>


    <li> Jobs menu/Insert Example/Human Instr/ Job Example 7g: Dexter User Interface
          replace min & max of ranges on the
          7 sliders with actual J1 thru j7 min and max.</li>

    <li> inspect improvements:
      <ul>
          <li>when calling inspect(foo) the source of the arg is shown.</li>
          <li>primitives (numbers, etc.) are shown in a proper inspect formatting
              including their type, instead of just printing the primitive.</li>
          <li>inspecting NaN improved with type information and NaN as
              an array element.</li>
          <li>Proper grammar in Inspect title w.r.t. "a" and "an", esp. with noun "array".</li>
      </ul>
    </li>

    <li> Improved the stop reasons in many Human instructions.</li>

    <li> Now npm modbus-serial package is installed in DDE.
         See Ref Man/Robot/Serial/Modbus</li>

    <li> Serial Port improvements:
         <ul>
            <li>serial_port_init() is now no longer necessary.
                Calling it does nothing except print out a warning that it is no longer necessary.</li>
             <li> Function: <code>serial_devices</code> can only work on the dde platform, not on the Job Engine.
                  New method <code>serial_devices_async</code> works on both dde and Job Engine.
                  See Ref Man/Robot Serial/Low Level Serial/serial_devices/async</li>
             <li>Other serial port functions now available in the job engine.</li>
         </ul>
    </li>

    <li> Improved documentation of User Guide/User Interface/Help System/Eval button</li>

    <li> Fixed bug in "Save on eval" that was not saving the editor buffer every time
         the eval button was clicked.</li>

    <li> Improved doc and tooltip help for keystrokes that run test suites.</li>

    <li>The Recording INSERT dialog  box: improved radio button label from
        "Job containing reference" to  "new Job def containing reference"
        to make it clearer what that radio button inserts.</li>

    <li> In Make Instruction pane, Instructions menu, improved tooltips for
         Misc/function, function*, new Dexter, new Serial.</li>

    <li> Job.prototype.to_source_code now prints out the robot property
         if the robot is NOT Dexter.dexter0</li>

    <li>Error Handling
       <ul>
           <li> Control.error The reason for the Job ending made less redundant.</li>
           <li> Improved error messages:
               When a job's instruction errors, an error message with
               the source code of that instruction is printed in the output pane.</li>
           <li><b>if_error</b> Job Param replaced with Params:
               <code>if_robot_status_error</code>,
               </code>if_instruction_error</code>/>
               See Ref Man/Job/New Job Parameters.
            </li>
           <li><code>if_dexter_connect_error</code> added to catch connection errors.
               See Ref Man/Job/New Job Parameters.
           </li>
           <li><code>when_stopped</code> extended: See Ref Man/Job/New Job Parameters.</li>
           <li><code>when_stopped_conditions</code>: See Ref Man/Job/New Job Parameters.</li>
           <li>Instructions: <code>Control.stop_job</code> and <code>Control.error</code>
               now both take a  perform_when_stopped argument
               that defaults to <code>true</code>.
            </li>
           <li>New Job status_code:  <code>"running_when_stopped"</code> which is
              used when the Job is performing the when_stopped instruction while
              finishing a Job.</li>
           <li>New testsuite files: when_stopped_testsuite.js, manual_testsuite.js</li>
           <li>New doc Ref Man/Job/Error Handling</li>
       </ul>
    </li>
    <li><code>Control.break</code> bug fix for when you had a
        nested Control.loop, and a break instrution in the outer loop but
        after the nested loop.
    </li>

    <li> Lots of improvements to: make_ins("w", ...)
        <ul>
           <li> click help including replace the numerical address with a symbolic one.</li>
           <li> documentation including
                new Ref Man doc for Dexter.write_fpga.</li>

            <li>New series on Series menu/DDE/Dexter Robot/w oplet address.</li>

            <li> make_ins now allows any non-neg integer to be a valid address (first arg after "w")</li>
            <li> Links to https://github.com/HaddingtonDynamics/Dexter/wiki/oplet-write</li>
         </ul>
    </li>

    <li> Ref Man Jobs slight reorganization for improved modularity with
         Starting and Stopping Jobs, a job's <code>start</code> method,
         as well as insert_instruction (with improved doc).
    </li>
</ul>
</details>

<details class="doc_details"><summary>v 3.5.5, Feb 19, 2020</summary>
  Fix for build problems.
</details>


<details class="doc_details"><summary>v 3.5.4, Feb 19, 2020</summary>
<ul>
    <li>Uninstalled npm three-text2d to fix a build problem.</li>

    <li>Removed print statements: "in drag x:" and "inserted instr:"</li>
</ul>
</details>


<details class="doc_details"><summary>v 3.5.3, Feb 18, 2020</summary>
Highlights: User Interface 2 extended.
            Simulator extended.
            New Kin functions for Dexter control.
            Experimental code for camera control.
<ul>
    <li> When defining a new Job, if your job name is invalid, such as starting with a digit,
        it errors, telling you why and what to do about it.</li>

    <li> When defining a new Robot, if your Robot name is invalid, such as starting with a digit,
          it errors, telling you why and what to do about it.</li>

    <li> <code>selector_set_in_ui</code>, when used to set the <code>checked</code> property of
        an INPUT checkbox element,
        the second arg to <code>selector_set_in_ui</code> can be:
        <code>false</code>, <code>"false"</code>, <code>null</code> or <code>undefined</code>
        (not passed) to indicate unchecked. All other values indicate checked.
        See Ref Man/Window System/Window Utilities/selector_set_in_ui</li>
    <li>Dexter UserInterface 2 improvements
        <ul>
            <li> Fixed bug in Dexter UserInterface 2 that caused a low-level warning
                 upon initialization.</li>

            <li> Dexter User Interface 2 now uses pid_move_all_joints to get smoother movement.</li>

            <li> Dexter User Interface 2 window title bar now tells you the name of the
                 Dexter its controlling.</li>

            <li> Dexter User Interface 2 window title bar now tells you the name of the
                 Dexter its controlling.</li>

            <li> Dexter User Interface 2 now has a "Point Down" checkbox so that
                regardless of other controls, Dexter tries to point the end effector down
                towards the table.</li>

            <li> Dexter User Interface 2, when point_down is checked, the sliders for sliders for j4 and j5
                are disabled since user shouldn't be able to adjust those,
                but they will be adjusted automatically.</li>

            <li> Dexter User Interface 2, xy slider now has pink background
                 with a white donut. The white area is valid territory for the
                 green dot (end effector).
                 That donut size will be affected by the Z position of the end effector.</li>

            <li> Dexter User Interface 2, Z slider now has its height adjusted according
                to the maximum Z that can be acheived with the given x, y position.
                This maximum Z will be dynamically adjusted as you drag x & y green dot.</li>
        </ul>
    </li>

    <li> Kin (kinematics) improvements:
       <ul>
            <li> Kin.xy_donut_slice_approx(a_z, a_dir) Now never returns a NaN.
                If the outer_r was going to be a NaN, now it returns 0, and
                in such cases the inner_r is made 0 as well.</li>

            <li> New fn: <code>Kin.reach_extents()</code></li>

            <li> New fn: <code>Kin.max_z()</code></li>

            <li> New fn: <code>Kin.J_angles_to_dir(angles)</code> => direction of link 5.</li>

            <li> Simplified <code>Kin.point_down</code> implementation.</li>

            <li> None of these new Kin fns now take L (for Links). At a later date,
                they will take a Dexter instance and get link lengths from that.</li>
        </ul>
    </li>

    <li> Improved display of info in Output Pane from Picture.show_video_cameras.</li>

    <li> Fixed console.log error about "Cannot find module './robot.js'
         Despite this error message, DDE robots still worked,
         but there was some inconsequential code causing this error message
         that has been fixed.</li>

    <li> DDE menu Insert/Color added suffix "..." to indicate that it causes a dialog to pop up.</li>

    <li> Simulator improvements:
        <ul>
            <li>  got rid of the "tool rack".</li>
            <li>  added bright green labels for x, y and z dimensions.</li>
            <li>  added a maroon circuit board to one side of link 2 so that you
                   can tell Dexter's orientation.</li>
            <li> repositioned the virtual camera on the simulation so that when
                 the simulator comes up,
                 you see +x pointing to the right, and +y pointing towards you.</li>
         </ul>
    </li>

    <li> Added  multicast-dns package to DDE
        now var mdns = require('multicast-dns')()
        is available as documented in https://www.npmjs.com/package/multicast-dns</li>

    <li> Fix documentation so that the version of the User Guide that is on hdrobotic.com
         has the correct version number and release date under About.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.5.2, Jan 21, 2020</summary>
Highlights: New function for dynamically setting show_window elements: selector_set_in_ui.
            New Dexter User Interface dialog for operating Dexter via sliders.
            Increased flexibility for show_video and take_picture.
            Lots of Window System tweaks.
<ul>
    <li><code>show_window combo_box</code> now has a wider "down arrow".</li>

    <li> For the Human instructions, if a dependent job doesn't exist and we're trying to stop
        all the dependent jobs because the user is stopping the job of the human instruction,
        don't error, just do nothing
        as the dependent job already isn't running.</li>

    <li> Control.wait_until(a_num) and Control.loop had a bug in that
        if the job its in was stopped in the middle of one of these instructions,
        then the NEXT time you ran the job, it would not be properly initialized.
        Fixed.</li>

    <li> For Human instructions, new init param: <code>add_stop_button=true</code>
        (not for speak, recognize_speech, but for:
        <ul>
            <li> task</li>
            <li> enter_choice</li>
            <li> enter_instruction</li>
            <li> notify </li>
         </ul>
         Other Human instructions where this button makes sense already have this option.
    </li>

    <li> Much more complete documentation under Ref Man/Robot/Human on the
        parameters that are in common with most Human Instructions.</li>

    <li> svg functions extended to be able to take NO args and not error.</li>

    <li> Dragging svg elements in a show_window can now be enabled.
        See Ref Man/Window System/SVG/html_class.</li>

    <li> Fixed bug in Job.insert_instruction that caused an error message,
        but often wouldn't affect job performance.</li>

    <li> Drastically reduced calls to <code>color_job_button</code>
         when a job is waiting for more instructions.
        This reduces computation for waiting jobs esp.
        more important for job engine browser interface.</li>

    <li> Bug fixed in simulator pane header that was causing x,y,z values not to update properly.</li>

    <li> Simulator pane header Joint degrees formatting improved.</li>

    <li> New hidden input to a <code>show_window</code> content of "show_window_elt_id"
         with the string value of the id,
          so that the handler fn can easily find the show-window in order to modify it.</li>

    <li> Sim pane header x,y,z display now shows millimeters, not just centimeters,
         for negative number.</li>

    <li> added to each Dexter instance, the properties:
         J6_angle_min, J6_angle_max, J7_angle_min, J7_angle_max.</li>

    <li> now SW.all_show_windows returns a proper array instead of a nodelist.</li>

    <li> Fixed <code>SW.close_all_show_windows()</code> to not depend on its subject to work.</li>


    <li> New Jobs menu/Dexter Tools/Dexter UI... item that brings up a show_window to
        operate Dexter. Jas slider and number controls for J1 -> J7 and X,Y,Z.</li>

    <li> SW.close_window, fixed internal bug.</li>

    <li> <code>Picture.save_picture</code> and <code>IO.save_picture</code>
        no longer display the picture that it is saving.
        If you want that, you'll have to explicitly show_picture it.</li>


    <li> Fixed bug in <code>Picture.show_video</code> for its "playing" state.</li>


    <li> Add a visible=true init param to <code>show_video</code>.</li>

    <li><code>take_picture</code> doesn't automatically <code>show_video now</code>.</li>

    <li> Fixed  dragging a <code>show window</code> in Job Engine browser interface.</li>

    <li> New function: <code>selector_set_in_ui</code>.
         Uses CSS selector syntax to identify HTML elements which
        can be removed, replaced, modified, or extended.
        See Ref Man/ Window System/Window Utilities/selector_set_in_ui.</li>

    <li> New Insert menu item: show_window/Modify Window
        Inserts an example of using the new <code>selector_set_in_ui</code>
        to change a button color
        and insert HTML into a show_window.</li>

    <li> New Example under Jobs menu/Insert Example/Human Instrs
         for "Dexter User Interface" (the simple version with just 7 sliders, one for each joint).
        This is far simpler than the Insert menu item: show_window/Modify Window,
        and so much easier to understand as a code tutorial.</li>

    <li> During the "progress" report on a job, if a function is encountered,
        it prints out the NAME of the function, not its entire def.
        This gets rid of what is usually unnecessary detail for certain
        debugging situations.</li>

    <li> The <code>RobotStatus</code> class is now part of the Job engine.</li>

    <li> <code>Control.loop</code> documentation extended with a description to the loop example
         and an additional loop example added.</li>

    <li> <code>SW.close_window</code> extended to take a dom elt as its arg.
         If that dom_elt is within a <code>show_window</code>, that show_wikndow is closed.</li>

    <li> <code>Kin.point_down</code> and <code>Kin.xy_donut_slice_approx</code> added.
        These are still experimental and so not yet documented.</li>

    <li> <code>write_file</code>  Improved error message when the file to write is in a non-exisitent folder.</li>

    <li> <code>make_folder</code> fixed for passing in an arg of the empty string and
          some other cases.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.5.1, Dec 23, 2019</summary>
Updated npm packages only to get Mac version to build.

</details>


<details class="doc_details"><summary>v 3.5.0, Dec 22, 2019</summary>
Highlights: SSH for DDE-Dexter communications improved.
            New implementation of show_window enabling browser-based Job Engine Interface.
            New save_picture instruction and method.
            Picture taking now can have user-determined resolution.
            Job Engine verified to work on PHUI2RCP and Find index eye Jobs.
            Job parameter "if_error" improvements.
            Clicking Eval button with selected HTML now renders that
            HTML in the output pane for easier debugging of HTML.
<ul>
    <li> Inspecting a Job, click button "Show Robot Status History"
         bug fix and
    improvement of columns to show "unused" slots in the array,
    to show correct values for end effector x, y, z,
    to show the index numbers of the robot_status array.</li>

    <li> When choosing the Misc Pane menu, fixed cases where it
        errors with sim_graphics_pane_id is not defined.</li>

    <li> File menu item "Open From Dexter" moved up next to the other "Open" items.
        Improved the tooltip.</li>

    <li> Updated "could not connect with Dexter" Job button tooltip error message.</li>

    <li> Job Engine verified to work on PHUI2RCP and Find index eye Jobs</li>

    <li>When an error happens, a new item is stuck on the do_list right below the
    erroring instruction which is a new anonymous method that looks like:<br/>
<pre><code>function() {
        return this.if_error(rs) //this === job_instance, rs is closed over
    }
    </code></pre>
    Now the user writes the if_error method, and it can return instructions,
    that get added to the do_list,
    one of which can be stop_job if you like,
    or call <code>job_instance.if_error_default</code></li>

    <li> Ref Man for if_error, has an example and
        documents that "this" is the job_instance.</li>

    <li>Job.prototype.rs_to_error_message now has extended clauses of:<br/>
    <pre><code>
    if(error_code & (1 << 27)) {msg+=" SPAN Servo, Joint 7. r 0 errors.log &lt;br/>"}
    if(error_code & (1 << 28)) {msg+=" ROLL Servo, Joint 6. r 0 errors.log &lt;br/>"}
    if(error_code & (1 << 30)) {msg+=" Joint Monitor. r 0 errors.log &lt;br/>"}
</code></pre>
    Now adds the content of errors.log into the content of the errors msg to return,
    THEN clears the errors.log. but set to "" (but ok if we deleted the file.)</li>

    <li> Fixed bug in saving file to Dexter using File menu/Save to Dexter as.</li>

    <li> <b>File menu/Save to Dexter as</b>  now uses the default dexter in the Misc Pane header menu,
        so it doesn't need to pop up a list of Dexters to choose from.</li>

    <li> The SSH Cmds menu has a new item "Find file..." that prints
        file names in the output pane matching the FIND criteria.
        The syntax for FIND is a bit hard to remember, so this makes it easy.</li>

    <li> Fixed bug in <code>write_file_async</code>, when writing to Dexter.</li>

    <li> SSH file & dir menus: minor improvements for menu item naming, tooltip and cmd line insertion,
        especially for "move or rename".</li>

    <li> SSH for Directory Listing, a new button: "clear output below"
        clears the text in the output pane below the directory listing.</li>

    <li> The utility Job:  "set_link_lengths" which gets Dexter's link lengths from Dexter into DDE,
        now has <code>show_instructions: false</code>
        to cut down on noise in the output pane.</li>

    <li> The utility Job:  "set_link_lengths" which gets Dexter's link lengths
          from Dexter into DDE,
        <code>Job.prototype.set_status_code</code>
        If the status code being set is the same as the existing
        status code, do nothing i.e. don't set the button color.
        Helps cut down traffic for Dexter server.</li>

    <li> Fixed minor bug in displaying result in output pane.</li>

    <li> If you click EVAL with HTML selected, it is rendered in the output pane.</li>

    <li> Fixed bug in creating a 2nd window of the show_window menu example.
        Still doesn't properly get the previous top, left, width, height of the
        previous same-titled window, but at least it still presents the window without erroring.</li>

    <li> Minor improvements to show_window examples.</li>

    <li> Minor fix to <code>show_window</code>'s capture of the name/id/value of a UI element.</li>

    <li> <code>Window.window_index</code> is now: null to begin with, then
        set to 0 and used for the first show window.
        window_index is the index used in the LAST show_window made,
        not for the NEXT window made (as it use to be).
        So window_index is bound to the index of the last window made.</li>

    <li> DDE menu item: Insert/show_window/buttons updated to get rid of dependency on the
        "dex" object and use more obvious and common DOM functionality.</li>

    <li> Fixed bug in <code>show_window</code> callback getting a textarea's width and height.
        Now it works even before the user drags the textarea AND
        my values in the callback are integers, not strings with suffix "px".
        Much more useful.</li>

    <li> show_window combo_box <span style="color:red">incompatibility</span>:
        Previously you could use either the 'name' or 'id' attributes
        in the DIV tag that creates a combo box. Now you must use 'id' only.
        Beware that id attributes in HTML become global variables, so spell it
        uniquely. DDE uses the convention of a suffix of "_id", that
        is usually good enough.</li>

    <li> Calls to <code>beep</code>, when running in the Job Engine,
          now uses Dexter's text to speech to say "beep".</li>

    <li> The functions <code>beep</code> and <code>beeps</code> are now part of the Job Engine.
        They behave the same as always in DDE.
        If you're running the job engine and you want to hear them,
        you'll have to install a sound card.</li>

    <li> Insert menu, <code>show_window</code>, onchange example, minor formatting improvements.</li>

    <li> <code>Picture.show_picture</code> can now take a partial path for its "content" argument,
        so if that's "my_pic.png", then it will grab the file in your dde_apps folder
        of that name.</li>

    <li> New Instruction <code>IO.save_picture</code> and new method:
         <code>Picture.save_picture</code> for making it easy
         to save pictures to a file.
          Now only saves in .png format.
          See Ref Man/IO/Picture/Camera IO/save_picture</li>

    <li> Replaced jquery calls in out.js with JS DOM methods. We are slowly removing
         calls to jquery to reduce dependencies on this library
         and get rid of its confusing syntax.</li>

    <li> Insert menu/Show Window, respelled item "Close all" to "Close all windows".</li>

    <li> Instruction classes <code>Control</code>, <code>IO</code>  and the global variable
         <code>dde_apps_folder</code> are now defined for JS lint purposes.</li>

    <li> In Job Engine, <code>dde_apps_folder</code> now bound to: "/srv/samba/share/dde_apps".
        (set in index.js)</li>

    <li> <code>Human.show_window</code>  The handler function now:<br/>
        - if the callback is null, it doesn't error, it just does nothing.<br/>
        - If the user clicked on a submit button, the dialog box is closed
            and the job is allowed to proceed.<br/>
        Previously it checked for to see if its <code>show_window</code>
        was closed to allow proceeding,
        but that's not compatible with how the new browser code is implemented.
        In most cases, this will have the same behavior as previously,
        but now, if the show_window is closed in some other way than
        a submit button, the job will hang at this human show window instruction
        with no way to get it to proceed. To be fixed later.</li>

    <li> Fixed bug in <code>Human.enter_file_path.to_source()</code>.</li>

    <li> Browser Job Engine interface has "keep_alive" checkbox.
         See "help" in Browser interface.
         Allows Jobs to share state accross running them, like DDE.</li>

    <li>The instruction <code>IO.take_picture</code> now takes a "camera_id"
         argument just like
        its function counterpart: <code>Picture.take_picture</code></li>

    <li> A timing skew bug in <code>IO.take_picture</code> has been fixed.
        This sometimes caused the instruction to not wait until the picture was taken
        before allowing the next instruction to be run.</li>

    <li> For the output pane cmd line,
         when in SSH mode and clicking in the cmd line for click help,
        if there is a space anywhere before the clicked char in the whole cmd line string,
        it now doesn't perform click help, it just nothing BECAUSE
        when click help is attempted on such click places, often bad ref man comes out
        in bad format.</li>

    <li> <code>show_picture_of_mat</code> extended to grab width and height
        from mat and show that, not
        the default width and height of <code>Picture.show_picture</code></li>

    <li> <code>Picture.init</code>, <code>IO.take_picture</code>, <code>Picture.take_picture</code>,
        <code>IO.show_picture</code>, <code>Picture.show_video</code>,
        <code>IO.show_picture</code>, <code>Picture.show_picture</code>
          now all have args: width=320, height=240</li>

    <li> <code>Picture.show_video</code> default title now shows video resolution.</li>

    <li> <code>Picture.take_picture()</code> automatically calls
         <code>Picture.init()</code> if cv hasn't been inited.</li>

    <li> <code>show_window</code> title font made smaller to 20px so more chars can be in the title.</li>

    <li> Adjusted the Jobs button bar to use more of the available space for Job buttons.</li>

    <li> Jobs menu/Dexter Tools/ submenu now has its items ordered alphabetically.</li>

    <li> CALIBRATE: Copied the function def for <code>init_view_eye</code>
          from the latest LTS release
          and put it in this release, at the bottom of ViewEyeRealTime.js
          This speeds up calibration and fixes a bug in clicking on the "Start Jx" buttons
          in the Calbirate dialog.</li>

    <li> CALIBRATE: In the dialog, when you click a "Start Jx" button,
         the degrees shown updates to where the joint is while calibrating.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.4.9, Oct 20, 2019</summary>
Highlights: Improved file handling between DDE and Dexter.<br/>
Added user control over how a job handles errors from Dexter.<br/>
Minor improvements to Calibration, Job Engine,  MakeInstruction, Simulator, SSH.

<ul>
    <li> <code>load_files</code>, <code>file_content</code>, <code>write_file</code>
         are now all available in Job engine code.</li>

    <li> Verifed: <code>_ms</code> is in the Job engine.</li>

    <li> Calibration: Updated <code>init_view_eye</code> def to contain a new faster def of
        <code>AxisTable</code>.</li>

    <li> SSH: improved error message when you enter a bad user name or password.</li>

    <li> SSH cmds menu now has "Reboot..." on it to shut down and restart Dexter.</li>

    <li> new Jobs menu item "Browse a Dexter".</li>

    <li> new Jobs menu item "Show errors.log".</li>

    <li> Jobs menu now has new submenu <b>Dexter Tools</b> that has under it
          the previous items:<br/> Calibrate Dexter, Ping a Dexter<br/>
           and the new items:<br/>
           Browse a Dexter,
           Show errors.log</li>

    <li> <code>read_file_async</code> added the "encoding" arg to the low level call to
        <code>fs.readFile</code></li>

    <li> Fixed bug when the currently edited file is a Dexter file and you attempt
        to change to another file.</li>

    <li> Fixed bug when saving a file from the editor to Dexter.</li>

    <li> Fixed MakeInstruction: picking Instruction menu items under
        "Control" and "IO" submenus now works.</li>

    <li> Simulation: fixed the "last frame" problem of it not going all the way
        to the target joint angles.</li>

    <li> Simulation: improved formatting of:<br/>
         Move Duration, X, Y, X, J1, J2, J3, J4, J5.</li>

    <li> Simulation: now displays values for J6 and J7 (but doesn't graphically render these joints.)</li>

    <li> Move the File menu item<br/>"Save to Dexter as..." to immediately under
        <br/>"Save as..." to make its existence more obvious.</li>

    <li> new init parameter for <code>Job</code> : <b>if_error</b>,
        giving the Job author control when a Dexter error occurs.<br/>
        Improved error reporting for Dexter bugs.<br/>
        See Ref Man/Job/new Job parameters/if_error
    </li>

</ul>
</details>

<details class="doc_details"><summary>v 3.4.8, Sep 30, 2019</summary>
    Highlights: Updated DDE's npm packages to fix deployment bug.
</details>

<details class="doc_details"><summary>v 3.4.7, Sep 30, 2019</summary>
Highlights: Bug fixes to Job Engine.<br/>
    Gamepad, serial port, SSH improvements.<br/>
    New capability to customize more colors in DDE, esp for the editor.<br/>
    FPGA support.<br/>
    Calibration improvements.<br/>
    New definitions for Dexter.set_follow_me and friends.
<ul>
    <li>Improved documentation for <code>speak</code> in the Ref Man, including the callback args.</li>

    <li> Made the exporting/importing for speak and utilities that it uses consistent.
     Speak is now in the Job engine code, since it now supports not just
     the normal text to speech but a "Robotic" voice on Dexter as well.
     (you need extra hardware to hear it.)</li>

    <li> After you click a Job button, or the Step button, it is automatically defocused so that
        pressing the SPACE or ENTER key isn't interpreted as a button click.</li>

    <li> When you are inserting a recorded job, a dialog pops up.
        If you click on the "Preview" button, that first dialog no longer
        is automatically closed, so that when you close the "preview" dialog, you
        see the orig dialog.</li>

    <li> Tweaked the version number message in the Output pane upon dde launch to say "beta" version.</li>

    <li> Respelled obsolete doc from <code>Control.grab_robot_status</code> to
         <code>IO.grab_robot_status</code>.
        Tweaks to the ref man for IO.grab_robot_status.</li>

    <li> New function: <code>set_css_properties</code>. See Ref Man/Window System/set_css_properties
        which includes examples for DDE's editor words color changes and error message
        customization.</li>

    <li> Fixed bugs in Job Engine by adding the importing and globalization of:
        <code>sind, cosd, tand, asind, acosd, atand, atan2d</code></li>

    <li> <code>_nbits_cf</code>  and <code>_arcsec</code> now availible for Job engine Jobs.</li>

    <li> Job engine: fixes to require/importing to get the correct modules loaded.</li>

    <li> new instruction: <code>Dexter.set_fpga_command_reg</code>
        See Ref Man/Robot/Dexter/Dexter_instructions/set_fpga_command_reg</li>

    <li> The 81 registers that you can set with calls to (make_ins "w" register, value)
        are now defined as constants. Example: <code>FPGA.BASE_POSITION</code>
        See Ref Man/Robot/Dexter/Dexter Instructions/Dexter.make_ins/FPGA registers
        Tests in test_suite/testsuite_fpgs.js, now part of the standard tests.
        However, not all are useful. When calling make_ins("w", 1, 123) and others that are non-functional,
        you will get an error.</li>

    <li> Changed calibrate_optical.js to call<br/>
        <code>make_ins("S", "RunFile", "Cal.make_ins")</code><br/>
       to make customization of calibration easier.
    </li>

    <li> The calibrate dialog has a new combo box to the right of the
        "Calibrate optical encoders"  button for selecting the "Calibration process".
        The pre-populated choices are <code>"Cal.make_ins"</code> and <code>"FastCal.make_ins"</code> but
        you can type in your own make_ins file name if you like.</li>

    <li> The SSH table listing for a directory now includes the items<br/>
        <b>Copy file: local to remote</b>  and<br/>
        <b>Copy file: remote to local</b><br/>
        See user Guide/Secure Shell(SSH)/Copying Files.
        This doc automatically is scrolled to when you choose either of those menu items.</li>

    <li> Removed Learn Js menu/User Interaction/prompt (because <code>prompt</code>
         can no longer be used in Electron.)</li>

    <li> New File menu item: "Insert file path" with options for inserting into the editor or the cmd input.
         Particularly useful for SSH copy commands.</li>

    <li> <code>Job.prototype.do_next_item</code>  fixed robot.is_busy to robot.is_busy()<br/>
        Defined Robot.prototype.is_busy() to always return false
        which fixes bug in Serial robots.<br/>
        Also, defined Robot.add_to_busy_job_array(a_job){ } //no-op. shadowed by Dexter.<br/>
        Robot.remove_from_busy_job_array(a_job){}<br/>
        Also Serial.start, now calling set_a_robot_instance_socket_id with a 2nd arg of job_instance
        because set_a_robot_instance_socket_id really needs it, and can't fake it my just getting
        passed the path, as there might be > 1 job a serial robot with that path, including
        both active and inactive ones.<br/>
        Changed call in start of Serial.set_a_robot_instance_socket_id(...)
        to this.set_a_robot_instance_socket_id(...)<br/>
        Serial.prototype.init now takes job_instance arg.<br/>
        Serial.prototype.init now passes the trim_whitespace arg to serial_connect<br/>
        Serial.prototype.send now passes job_instance to init(...)
    </li>

    <li> In the Output pane, when you have a selection and click the Eval button,
         there is no longer a spurious "..." at end of showing the source code that was evaled.</li>

    <li> Serial port access upgraded to accomodate recent DDE changes.</li>

    <li> <code>serial_connect_low_level</code> now takes 2 new last args: callback and error_callback.
        Each takes 2 args. It is called with "this" of null.</li>

    <li> <code>serial_on_done_with_sending</code> fixed unbound variable bug for ins_id.</li>

    <li> low_level serial port improvements:
        <ul>
            <li>Respelled "Debugging Serial" to "Low Level Serial"</li>
            <li>Fixed example call in the serial.js source code to <code>onReceiveCallback_low_level</code>
                with better comments.
            </li>
        </ul>
    </li>

    <li> Added <code>serial_flush(path)</code> call to <code>serial_disconnect</code> to enforce the stopping
        of serial callbacks.</li>

    <li> Bug fix for <code>DXF.init_drawing()</code> (removed a "simulate" arg to a Job definition.)</li>

    <li> Ref Man/IO/Gamepad and Keyboard/keycodes and names:  improved key 32  "space" description.</li>

    <li> New method: <code>Gamepad.is_key_down</code>. See Ref Man/IO/Gamepad and Keyboard/is_key_down</li>

    <li> Gamepad: Function now documented with increased functionality:
        <code>Gamepad.start_remembering_keydown</code> now with a "sticky" parameter.</li>

    <li> new method: <code>Gamepad.clear_down_keys</code>.
         See Ref Man/Gamepad & Keyboard/clear_down_keys</li>

    <li> <code>Dexter.set_follow_me</code><br/>
         <code>Dexter.set_force_protect</code><br/>
         <code>Dexter.set_open_loop</code><br/>
         <code>Dexter.set_keep_position</code><br/>
    now are defined using make_ins("S", "RunFile", "setFollowMeMode.make_ins")
    and friends to get their instructions directly from Dexter,
    instead of from the definitions in Dexter_Modes.js of setFollowMe and friends.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.4.6, Sep 6, 2019</summary>
Highlights: Minor bug fixes to release: 3.4.5 for file system and SSH.
<ul>
    <li> File System: adjust_path_to_os generalized to change \C:\foo\bar to C:\foo\bar
     for WindowsOS pathnames.</li>

    <li> File System: Bug fix to make_folder, particularly relevant to WindowsOS.</li>

    <li> Bug fix for SSH when changing between dde_conputer and dexter0 computer,
          the right default directory wasn't being used for the new computer.</li>

    <li> Bug fix for SSH on Dexter computer:
         In some cases, //srv/samba/share was accidentally made.
         Changed to /srv/samba/share</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.4.5, Sep 5, 2019</summary>
Highlights: Command line now has SSH option.<br/>
            Vector/Convert deep_copy reverted back to old version to fix bug.<br/>
            Job speed up via inter_do_item_dur.<br/>
            Misc bug fixes including for Job Engine.

<ul><li>Doc Improvements to:
    <ul>
        <li>Ref Man/Job</li>
        <li>Ref Man/Job/Definition Time vs Run Time</li>
        <li>Ref Man/Robot/Robot Instructions/Any JS Function Def</li>
        <li>Ref Man/Window System/Making Applications/show_window restrictions
            and "kiosk mode".</li>
    </ul></li>

    <li> Reverted the change in Vector.js back to using Convert.deep_copy
        because the Vector.deep_copy causes some problems when
        J_angles_to_xyz is called and has to call deep_copy.
        Convert.deep_copy is better for that use case.</li>

    <li> For all Control instructions, fn defs, and set_parameter instructions,
        automatically have them take a zero inter_do_item_dur.</li>

    <li> Improved clarity of Output pane output section header.</li>

    <li> Fixed bug in show_window handler for combo boxes
        that now enables the correct getting of the value of the combo box.</li>

    <li> Bug fix: check_for_latest_release now I trim off the "v" prefix
        for the version from github (if any) before comparing to dde_version,
        which never contains a "v" prefix.
        Also, new tooltip on the version "A" tag so you know what
        you get if you click it. (the release notes)</li>

    <li> The internal function "shouldn't" now prints its error to
        the Output pane. Previously it only printed it to the console,
        hiding it from users.</li>

    <li> Bug fix: added var {Instruction} = require('./instruction.js')
         to instruction_control.js to fix job engine loading bug.</li>

    <li> Job Engine bug fixed: Job.define_and_start_job fixed variable misspelling bug,
        fixed bad error message that causes another bug itself.</li>

    <li> Bug fixed in Job Engine for robot.js by requiring file_exists, read_file.</li>

    <li> Command Line now has a language menu for switching between
         JS and SSH allowing you to type in any bash command and
         run it on any computer that has an SSH server running.
         (all Dexter's do, documentation tells how
         to set this up for DDE's computer so you can easily SSH to it as well).
         <p></p>
         From DDE you can now do normal
         linux maintenance operations on Dexters.
         A few commands are handled specially (pwd;ls -l)
         being the main one to present a "dialog like" interface
         in the output pane. With links in that, you can navigate
         the file hierarchy, and do the most common operations
         on files including edit them in dde and run job
         files (that are on Dexter) on the job engine.
         With the new "Cmds" menu and the per-file menus,
         many common operations can be done without typing,
         while preserving the ability TO TYPE.
         Inserting of paths into the DDE editor and
         the ability to run selected bash script in the editor
         facilitate interoperation of DDE with linux.
         This tool helps you "learn by doing" bash,
         reminiscent of how DDE proper helps you learn JavaScript.
         <p></p>
         Choosing "SSH" from the command line lang menu
         scrolls the doc pane to the User Guide new section on SSH
         which tells you about the general capabilities and how
         to set up SSH on your DDE computer. The details of
         the actual bash commands are conveyed with long
         menu item titles, tooltips for "just in place" help,
         and the "dialog" for directory browsing.
         Clicking on a bash cmd name gives the "man page"
         for that command in the Output pane.</li>


    <li> JS prompt is not supported in Electron,
        and so DDE can't support it.
        Now, calling <code>prompt()</code>
        prints out an explicit error message rather than
        crashing DDE.</li>


    <li> Fixed lack of default value for Human.enter_choice "choices"
        and added add_stop_button to the method arguments.
        Improved consistency of args to the Human methods
        and the underlying classes and their default values.
    </li>
</ul>
</details>

<details class="doc_details"><summary>v 3.4.4, Aug 1, 2019</summary>
Highlights: Improvements to Vector methods, ping dialog box.
    New kiosk mode for making end user applications.
    Tweaks to Recording.
    Streamline of Output pane header. (See new menu items
    File/Auto Save and Jobs/Eval&Start Job.)
    Simulation of Dexter now moves in an animation fashion.
    Some relevant numbers displayed in the Simulation pane.

<ul>
    <li> New "kiosk" boolean property in dde_persistent.json.
        controls DDE kiosk mode.</li>

    <li> New RefMan/Window System/Making Applications
        describes show_window restrictions and kiosk mode
        for making and running focused apps in DDE.</li>

    <li> During recording, the printing of the angles
        to the output pane has been removed to speed up processing.</li>

    <li> Recording: When clicking on the "delete" button,
        if there is no job, prints a warning in the output pane.
        If there is a job that is starting, running, waiting or or
        suspended, it is stopped, before being given its
        new do_list.
        This prevents an error when attempting to play a job
        right after deleting some instructions from it.</li>


    <li> Recording: When playing back, if
        <code>Job.run_one</code> is running, stop it to avoid conflict.</li>

    <li> Ping dialog box can now accept
        ip addresses of the format 123.456.789.1**
        i.e. two stars on the end to check
        123.456.789.100 through  123.456.789.199</li>

    <li> Ping dialog box help and possible ip address menu options improved.</li>

    <li> Fixed 2 misspellings of technique in the User Guide.</li>

    <li> The <button>Eval&Start</button> button in the Output pane header has been removed.
        The core functionality of this is now available
        in the new Job Menu item "Eval&Start Job".</li>

    <li> The <button>Start Job</button> button in the Output pane header has
        been replace by the new Job Menu item "Eval&Start Job".
        The functionality is similar to, but slightly improved from,
        the old "Start Job" button.</li>

    <li> The "Start Job" section in the User Guide has been
        modified to match the new Job Menu item "Eval&Start Job".
        Choosing that menu item causes the doc pane to scroll to
        this new documentation.</li>

    <li> The JS & ROS radio buttons have been removed from the
        output pane header. Now the command line input
        is exclusively for JS.
        We may provide better support for ROS at a later date.</li>

    <li> The save checkbox in the Output pane header has been
        moved to the File menu.</li>

    <li> Fixed bug when Output pane header checkbox "code" is checked
        and you eval a Job definition.</li>

    <li> Eliminated the annoying blue rect around buttons:
        <button>Eval</button>, <button>Undef</button>, <button>Find</button>, when you click on them.</li>

    <li> Fixed "is_calibrated" displayed value in the robot_status dialog box.</li>

    <li> Improved File menu "select expr" item tooltip.</li>

    <li> Simulation of Dexter now moves in an animation fashion,
        not just immediately to new position.
        New "number line" in sim pane shows
        x,y,z and J1 through 5 at animation rate of 30 frames per second.</li>

    <li> <code>Vector.multiply</code> robustified implementation with
        better arg checking and eariler erroring.'</li>

    <li> <code>Vector</code> methods replaced <code>arguments</code>
         with <code>...args</code></li>

    <li> <code>Vector</code> methods  replaced out("Error...") with dde_error("...")</li>

    <li> <code>Vector.concatinate</code>  now takes a 4th arg of ...args
        and body adjustments so that it uses args instead of arguments.
        We decided to leave in the misspelling of
        "concatinate" (properly "concatenate")
        for backwards compatibility.
        This won't be called by high-level users.</li>

    <li> <code>Convert.deep_copy</code> has been removed.
        Use Vector.deep_copy instead.</li>

    <li> <code>Vector.deep_copy</code> has a new implementation of
        return JSON.parse(JSON.stringify(arg))
        This allows us to copy to much deeper depths
        and more data types.
        But it converts <code>undefined</code> and <code>NaN</code> to null.</li>

    <li> Extended <code>Vector.is_equal</code>,
        <code>Vector.round</code> and <code>Vector.matrix_dimensions</code>
        to be able to accept null and arrays of null.
        New utility method <code>Vector.is_NaN_null_or_undefined</code>
        and utils.js global function <code>is_NaN_null_or_undefined</code>
        play supporting roles.
        This fixed a bug in <code>Kin.xyz_to_J_angles</code>.</li>

    <li> new TestSuites for <code>Vector.is_equal</code>,
        <code>Vector.matrix_dimensions</code>, <code>Vector.round</code></li>

    <li> Improved error messages for
        <code>Vector.subtract</code>, <code>Vector.multiply</code>,
        <code>Vector.divide</code>, <code>Vector.average</code>.</li>

    <li> <code>Vector.make_pose</code> now doesn't rely on <code>Convert</code> methods.</li>

    <li> If you attempt to make a <code>Dexter.move_all_joints</code> (or friends)
        instruction with more than 7 angles, you get a warning.</li>

    <li> <code>similar(NaN, NaN)</code> now returns true.
        This is useful because in JS, <code>NaN != NaN</code>.
        (I don't understand why.)
        This extension to similar also makes it
        possible to test for <code>NaN</code> in TestSuites.</li>

    <li> <code>Kin.predict_move_dur</code> new implementation protects against
        2 args of different lengths and
        only counts at most 5 joints.
        New small TestSuite for Kin.predict_move_dur</li>

</ul>
</details>

<details class="doc_details"><summary>v 3.4.3, Jul 19, 2019</summary>
Highlights: Improvements to Recording, including UI and extensive documentation.
             show_window minor improvements.
<ul>
    <li> Fixed bug in <code>append_in_ui</code> when the html to be appended has content.
        This also fixes bug in <code>svg_text</code></li>

    <li> <code>get_in_ui</code> fixed.
        It now no longer takes a callback, it just
        returns the value. If the value is
        going to be a string of a number,
        the number is returned instead.</li>

    <li> <code>show_window</code> added "draggable" param, default=true.
        When false, you can't move the window by dragging
        the title bar as usual. This helps "lock down" the user interface
        to protect specialized interfaces from casual users.</li>

    <li> <code>show_window</code> documentation example code better formatted.
        Added "see also" for <code>close_window</code>.</li>

    <li> Documentation: Improved the description of user_data in
        RefMan/Job/new Job parameters/user_data</li>

    <li> Fixed bug in series when replacing values of
        a selected series element via option-right-arrow.</li>

    <li> Make Instruction clickable pane header now in black (instead of blue).</li>

    <li> Recording: removed print statement about "set_play_loc"
        while recording.</li>

    <li> Recording: dragging playback circle moves robot to the instruction at that location,
        but only if the new Job being built looks like a recording.
        because there can be other jobs besides recordings, and
        you might want to skip over some instructions, or
        never play it backwards, etc.</li>

    <li> Recording: Fixed Bugs in dragging the playback
          head to move the robot.</li>

    <li> Recording: the
        "Delete" button has been implemented to
        delete either instructions from the middle,
        or instructions on the end of the do_list, adding
        significant editing capability to recordings.</li>

    <li> Recording: Now when recording,
        the pause button is enabled. Clicking on it
        pauses recording and turns the button yellow.
        Clicking it again resumes recording and
        turns the button black.
        while recording is paused, you can also
        click the Record button to stop recording.</li>

    <li> Updated the documentation for the Misc Pane header
        at the top of the section:
        User Guide/User Interface/Misc Pane</li>

    <li> Documented how to use the recording facility at
        User Guide/User Interface/Misc Pane/Recording
        Long and detailed. Includes 36 step self-guided tutorial.</li>

    <li> The Dexter instanance variable of <code>is_calibrated</code>
        has been replace by a method of the same name that checks
        Dexter's measured angles.</li>

    <li> Recording: extensive improvements to testing and running
         calibration before recording. Now at the top of
         the Recording job, we check measured angles
         (no longer dexter's "is_calibrated" instance variable)
         and use Dexter's local calibration instruction.
         Now after calibration, verification of it is
         made and if it fails, the Recording is stopped
          before causing Dexter to flail.</li>

    <li> Recording section now hidden by a twistdown.
        Twisting down scrolls to the Recording doc.</li>

    <li> Recording: the "middle" & "ends" radio buttons moved closer
        to the "marks" bar.</li>

    <li> The Record Job now has show_instructions=false.
        Jobs created by clicking the Record button
        will have show_instructions=false
        to speed up playback.</li>

    <li> Recording insert: fixed high-level job source code
        when "Reference to low-level Job only" radio
        button is selected.</li>

    <li> In Recording Insert Job dialog,
        when the Insert button is clicked, the window is closed.</li>

    <li> The "Find Home" functionality has never worked.
        Now a completely different mechanism is being developed,
        so "find home" has been removed from:
        <ul>
            <li>the code</li>
            <li>the instructions: Dexter.find_home, Dexter.find_home_rep
                and support for corresponding oplets "f" and "p".</li>
            <li>the user guide documentation</li>
            <li>Removed files in example folder of:
                FindHome.js, FindHomeDocA.stl, FindHomeDocB.stl</li>
        </ul>
    </li>
    <li> When the user changes the default robot in the Misc pane header,
        <code>Dexter.default</code> is set to the indicated robot.
         Transitioning to this new mechanism for defaulting the robot
         is a work in progress.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.4.2, Jul 7, 2019</summary>
Highlights: Record improvements, tweaks to calibration inferface including
            interaction with Record, and a zillion little things.
<ul>
    <li>Minor fix to Ref Man/Job/Definition Time vs Run Time.</li>

    <li> Minor fix to "While calling the show_window handler function ..." error message.</li>

    <li> Bug fix in File menu/open special/show dde_persistent.json</li>

    <li> Make Instruction -  improved tooltip on play button
         "Play is disabled when ..."</li>

    <li> Changed background color of record button to green
         When recording keep the "recording" text when recording.</li>

    <li> Make instruction smarter defaulting of args:
        If there was a previous Make Instruction dialog
        with exactly the same instruction name,
        use the values of that for the defaults.
        else if there was a previous dialog from the
        same FAMILY of instruction ie move_all_joints, move_to or human,
        then use values from that (when they exist)
        else default values from the actual instruction named class
        itself.</li>

    <li> New Job name defaulting algorithim.
        First default job name is "job2" IFF there is no defined job
        of that name, else moves to "job3" , etc.
        With this change, default job names don't contain the job_id number.</li>

    <li> In Make Instruction, use the above default job name to populate
        a job.</li>

    <li> Make Instruction Insert Dialog made bigger to accomodate the content
        without scrolling for WinOS.</li>

    <li> Make Instruction Fixed bug in make_folder on WinOS.</li>

    <li> Make Instruction dialog:
        When recording is stopped, the Dexter is set to keep_position mode.</li>

    <li> Calibrate dialog box, warning message for Calibrate optical encoders updated.</li>

    <li> Dexter.is_calibrated is now a formal init param when
        creating a new Dexter. Default value null, meaning
        calibration status unknown.
        See new Doc in Ref Man/Robot/Dexter/new Dexter parameters/is_calibrated</li>

    <li> When a job is started, and we are in "real" mode (not simulated)
        its robot's "is_calibrated" property
        is set to false if all 5 measured_angles are 0,
        otherwise is_calibrated is set to true.</li>

    <li> Extended init_calibrate_optical to take a dexter instance as an arg.
        If not passed, it gets it from the calibrate dialog box
        as it has always done.</li>

    <li> make instruction record:
        User is promoted to calibrate the robot
        and allowed to continue recording when its done.</li>

    <li> Make Instruction dialog, recording section, the numbers in instructions
        that are an array of numbers are rounding to 3 decimal places.</li>

    <li> Make Instruction: The job that performs recording now has show_instructions=false.</li>

    <li> Fixed bug in Control.start_job when error checking the job_name argument.</li>

    <li> Fix for DDE menu items taking up 2 lines when they should be taking up just one.</li>

    <li> A Dexter instance's default name has been changed from "dex1" to
        the next undefined dexter in the series "dexter1", "dexter2", dexter3" etc.
        This new dynamic default is used in Make Instruction when
        making a new Dexter.</li>


    <li> Fixed click help bug when clicking on keywords of function calls
        that have default values.</li>

    <li>  Make Instruction dialog, inserting arrays,
        now each inner instruction array takes up just one line.</li>

    <li>  If there is an error in an instruction sent to Dexter,
        and the error is in the 600's,
        Dexter's errors.log file content is shown in the Output pane.</li>


    <li> Improved formatting of inserted code on the LearnJS menu, the Insert menu,
        and DXF.init_drawing() on the Jobs menu.</li>

    <li> Improved formatting for the JS inserted by Make Instruction "insert" button.</li>

    <li> Slight improvements to Control.start_job in error checking the job_name
        argument for validity.
        Extension of the documentation to indicate that job_name can also
        be a file path.</li>

    <li> fixed Calibrate dialog displayed angle for each joint being calibrated.</li>

    <li> New "default robot" select box in the Misc Pane header.
         Now no longer a robot select box in the Make Instruction dialog
        as Make Instruction just uses this new "default robot" select box.</li>

    <li> Make Instruction dialog for new Job now allows you to hide most of the params,
        giving more space for the Record functionality and remove rarely used "clutter".</li>

    <li> In MI dialog, the title Make Instruction is underlined in blue.
        Clicking on it scrolls to its doc.</li>

    <li> User guide for Make Instruction, "edit" extended to let users
        know that they can enter JS code for instruction argument values
        as well as select them and hit the <button>Eval</button> button.</li>

    <li> In the Output pane on start up it, tells you what
        release you're running. Now that release number is underlined in blue and
        you can click on  it to scroll to the release notes in the Doc pane.</li>

    <li>In the Output pane on start up it, "How to update" is now
        underlined in blue. Clicking on it scrolls the Doc pane to the section of
        the User Guide that tell you how to update.
    </li>
</ul>
</details>

<details class="doc_details"><summary>v 3.4.1, Jun 27, 2019</summary>
Higlights: read_file and write_file, both instructions and functions improved.<br/>
           Click help: new 2nd line describing "context".<br/>
           New Ref Man/Job/Definition Time Vs Run Time section.<br/>
           set_parameter improved.<br/>
           Robot.instructions deprecated and are now divided into
           Control.instructions & IO.instructions.<br/>
           Editor improvements.
<ul>
    <li> Removed the "ws" package from the "dependencies" list in package.json.
        This was not being used. Github called it a security risk.</li>

    <li> Click help handles literal strings better.</li>

    <li> Click help improvements for string, "new" calls, keywords.</li>

    <li> New click help printed on a new line just below regular click help
         that shows the "context" of what you clicked on.
         If you click on the argument of a fn call, it
         tells you which argument and the name of the function.
         This context help is not implemented for all JS syntactic constructs,
         but does supply useful help for many common situations.</li>

    <li> <code>make_folder</code> now works for WindowsOS too.
        This fixes a bug in write_file on WindowsOS when hte dir is none-existent.</li>

    <li> Extended Ref Man for how to get the current default robot from a running job
         under both Job and Robot.</li>

    <li> Major new Ref Man/Job/Definition Time Vs Run Time section
         to help the user's model of how a Job operates.</li>

    <li> <code>to_source_code_instruction_array</code>
         fixed bug when the "indent" property doesn't exist on arg.</li>

    <li> Make Instruction fixed bug in inserting a low level Job that has never been
         run and we're not attempting to segment its do_list, just print its source
         as is in the dialog's do_list item.</li>

    <li> Make Instruction, if you switch instructions to set_parameter, and
         the previous instruction had a name field, and that previous value
         for "name" isn't a valid set_parameter name, the new name is set to "Acceleration",
         i.e. the default set_parameter name.</li>

    <li> Click help now works on textareas presented in the Make Instruction dialog.</li>

    <li> Editor tab has indented to 4 spaces. Now you can "unindent" 4 spaces by typing
         ctrl [  (on the PC, or cmd [ (on the mac)</li>

    <li> Slight reorg of DDE's Learn JS menu:
         Now "Comments" has its own submenu and its close to the top.
         "Debugging, etc" submenu renamed to "Debugging" and
         doesn't contain the comment menu items.</li>

    <li> Editor: when you switch to another file, and your current file has not been saved,
         and the "Save" checkbox in the output pane is not checked,
         You will be prompted as to whether the current file should be saved.
         If the "Save" checkbox is checked, the current file will automatically
         be saved as always.</li>

    <li> Big fix to Dexter.read_file for real, as well as making Simulator more
         compatible with real.</li>

    <li> Ref Man/Robot/Robot Instructions/grab_robot_status
         the set of robot_status index constants has been updated.</li>

    <li> Ref Man/Robot/Dexter/RobotStatus doc corrected and extended
         with explanation and examples.</li>

    <li> For <code>Dexter.read_file</code> and <code>Dexter.write_file</code>,
         if the path starts with a #,
         don't modify it by adding "dde_apps", just leave it alone.</li>

    <li> Conversion of <code>Dexter.set_parameter</code> args
         from DDE high level (degrees, meters) to
        what is actually sent to Dexter (arcseconds, microns)
        updated to match https://github.com/HaddingtonDynamics/Dexter/wiki/set-parameter-oplet
        which included fixing:<br/>
        AngularSpeed<br/>
        AngularSpeedStartAndEnd<br/>
        AngularAcceleration<br/>
        all the Cartesian parameters<br/>
        RawEncoderErrorLimits<br/>
        RawVelocityLimits.</li>

    <li> User Guide/Configure Dexter/Verify Joint Wiring,
        now refers the user to
        https://github.com/HaddingtonDynamics/Dexter/wiki/Troubleshooting
        for verifying jumper wires.</li>

    <li> Ref Man/Robot/Robot Instructions/get_page, and the functions
         <code>get_page</code> & <code>get_page_async</code> extended with:
        (Permissible options) include the HTTP methods of:<br/>
        GET (the default)<br/>
        POST<br/>
        PUT<br/>
        PATCH<br/>
        DELETE<br/> HEAD<br/>
        OPTIONS<br/>
        plus a zillion other options for authentication, etc.</li>

    <li> Reorg of instructions.
        The <code>Robot</code> instructions have been moved to
        <code>Control</code> and <code>IO</code> classes.
        Control now has:<br/>
        "break", "go_to", "loop","label", "suspend", "unsuspend", "sync_point", "wait_until"
        "include_job", "send_to_job", "sent_from_job" "start_job", "stop_job"
        "debugger", "error", "if_any_errors"<br/>
        IO now has:<br/>
         "get_page", "grab_robot_status", "out",
        "show_picture", "show_video", "take_picture"<br/>
        So the preferred way to reference these is:
        <code>Control.loop</code>, <code>IO.get_page</code>, etc.<br/>
       <code>Robot.loop</code> and <code>Robot.get_page</code>, etc.
       are deprecated but still available.
       Ref Man for Robot instructions moved into new sections for Control and IO.
       All examples updated.</li>

    <li> <code>IO.show_picture</code>, <code>IO.show_video</code>, <code>IO.take_picture</code>
     are now formally documented under Ref Man/Robot/Robot Instructions/IO</li>

    <li> The Jobs examples are better formatted with insert 4 spaces for every indent.</li>

    <li> new Jobs menu item: "New Job", inserts
<pre><code>new Job({
    name: "my_job",
    do_list: [
        |   (vert vbar is whare cursor is left)
    ]
})</code></pre>
    into the editor. If there is a select, it assumes its one or more do_list items
    and wraps the new Job around the selection.
    Keystroke Ctrl-j</li>

    <li> New menu item: Editor/Indent Sel(ection)
        Indents the selected code, being clever about JS code.
        Preserves existing number of lines,
        but does a pretty good job at intending semantically.
        Keystroke shift-tab</li>

    <li> With save checkbox unchecked, and new buffer that has new content in it,
        attempt to switch to a new buffer, you get a dialog of cancel, save, delete.
        If you choose delete, it *should* just delete the buffer,
        But instead you get the confirm dialog:<br/>
         "before editing ____ save _____ ?</li>

    <li> <code>read_file</code>, <code>write_file</code> both instructions and functions:
        their default folder is dde_apps, including on Dexter, srv/samba/share/dde_apps
        BUT the "r" and "W" oplets and the older instructions
        <code>Dexter.read_from_robot</code>, <code>Dexter.write_to_robot</code> (deprecated)
        instructions use srv/samba/share as their default folders.
        Ref Man/Robot/Dexter/Dexter Instructions/read_file and write_file documentation updated.</li>

    <li> Instructions <code>Dexter.read_file</code> and
        <code>Dexter.read_from_robot</code> given default value
        for "destination" param of: "read_file_content".</li>

    <li> New menu on File menu "open special..." shows dialog
         for editing or showing DDE and Dexter system files:<br/>
         dde_init.js,<br/> dde_persistent.json,<br/> error.logs,<br/> Defaults.make_ins</li>

    <li> Slight improvement to Ref Man/IO/Sound/Music with MIDI/Synthesizers/Midi.init</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.3.8, Jun 5, 2019</summary>
Highlights: Improvements to Job Engine, Dexter.set_parameter, Kin.js and
getting dexter-specific link lengths.
<ul>
    <li> <code>make_folder</code> fixed to adjust to OS file path conventions.
         needs testing on WindowsOS since it changes slashes to backslashes.</li>

    <li> Renamed <code>Dexter.write</code> =>  <code>Dexter.write_fpga</code></li>

    <li> Dexter.write_fpga now has params: address, value
         instead of the less helpful ...args
         (Note this this instruction is still not documented.)</li>

    <li>  Job engine, <code>make_ins(...)</code>  made into a global variable.</li>

    <li>  Job engine, <code>out(...)</code>  made into a global variable.</li>

    <li> Dexter default link lengths (<code>Dexter.LINK1</code> thru 5)
          updated to have values: 228600, 320676, 330201, 50801, 82551</li>

    <li> Fix to <code>Dexter.read_file</code> instruction: when file not found,
         now handled properly and
         the user_data.destination is filled with an integer error code, typically 1.</li>

    <li> Fixed bugs in <code>Control.loop</code> that caused it not to initialize correctly
         when restarting a job with a loop instruction in it.</li>

    <li> new testsuite file: loop_testsuite.js</li>

    <li> <code>make_full_path</code> now handles prefixes of ./ and ../</li>

    <li> Make Instruction dialog for <code>Dexter.set_parameter</code>
         "name" arg is now a combo-box, not a select.
          This allows you to type in as well as select a string from a menu.
         You can type in illegal values, or even integers here (as is sometimes valid),
         so be careful.
        The menu of set_parameter names now has all the names
          in https://github.com/HaddingtonDynamics/Dexter/wiki/set-parameter-oplet </li>

    <li> <code>Dexter.set_parameter</code>  "CommandedAngles"
         now converting the degrees arguments
         to arcseconds before sending to Dexter.</li>

    <li> Ref Man for <code>Dexter.set_parameter</code>  updated to have more accurate info and
          a link to the githb page describing set_parameter.</li>

    <li> Commented out obsolete code in robot.js for:
         <code>cache_of_dexter_instance_files</code>,<br/>
         <code>get_dexter_props_file_object</code>, <br/>
         <code>prop</code>.
    </li>

    <li> Improved robustness of <code>DexterSim.empty_instruction_queue_now</code> when there's
         a faulty job, making it easier to properly stop the job.</li>

    <li> TestSuite: minor improvement to error reporting by
         replacing "=>" with "returned" to
         distinguish the result of an evaluation from its expected result more clearly.</li>

    <li>  Error message for running a job in real mode when no Dexter connected now tells
          users about the "simulate" button.</li>

    <li> The default default for the <i>simulate</i> radio button
         has been changed to false ("real").
         Affects first use of DDE, but since the value of this button is preserved
         across DDE sessions, if you change it, it will stay changed until
         you change it back.</li>


    <li> Dexter instance properties now initialized at start of the first job that
         uses a given Dexter, i.e.
         <code>Dexter.dexter0.j1_angle_min</code> set from J1BoundryLow.
         j1_angle_min is in degrees.
         Same true for Joints 1 through 5. min/Low and max/High.
         Here'e the new properties on each Dexter instance with their default values:<br/>
         J1_angle_max: 150<br/>
         J1_angle_min: -150<br/>
         J2_angle_max: 90<br/>
         J2_angle_min: -90<br/>
         J3_angle_max: 150<br/>
         J3_angle_min: -150<br/>
         J4_angle_max: 90<br/>
         J4_angle_min: -90<br/>
         J5_angle_max: 140<br/>
         J5_angle_min: -140<br/>
         Link1: 0.2286<br/>
         Link2: 0.32067599999999996<br/>
         Link3: 0.33020099999999997<br/>
         Link4: 0.050801<br/>
         Link5: 0.082551<br/>
         Documented in Ref Man/Robot/Dexter/Dexter Instance Properties
    </li>

    <li> <code>Dexter.J1_ANGLE_MIN</code> changed from -Infinity to -150<br/>
         <code>J1_ANGLE_MAX</code> changed from  Infinity to 150</li>

    <li> made <code>Dexter.set_parameter("Link1", 22)</code> ... thru Link5.</li>

    <li> <code>Vector.is_equal</code> bug fixed for recursive comparisons of arrays.</li>

    <li> TestSuite("Inverse to Forward Kinematics and Back" now calls
         <code>Vector.is_equal</code> so that it can be more tolerant of small differences.</li>

    <li> kin.js improvements:
         <ul>
             <li>Deleted <code>Kin.xyz_dir_config_to_J_angles</code> as no longer needed.</li>
             <li><code>Kin.signed_angle_test</code> commented out as no longer used.</li>
             <li>All methods that use "L" for link lengths now initialize L and
                use ONLY L to refer to link lengths.</li>
             <li>Kin.js methods that can now be passed a dexter_instance to
                 extract link lengths and pose:
                 <ul>
                     <li><code>Kin.inverse_kinematics forward_kinematics</code></li>
                     <li><code>Kin.is_in_reach</code></li>
                     <li><code>Kin.check_J_ranges</code></li>
                     <li><code>Kin.J_angles_to_config</code></li>
                     <li><code>Kin.J_angles_to_coor</code></li>
                     <li><code>Kin.three_positions_to_pose</code></li>
                     <li><code>Kin.three_torques_to_force</code></li>
                     <li><code>Kin.tip_speed_to_angle_speed</code></li>
                     <li><code>Kin.xyz_to_J_angles</code></li>
                     <li><code>Kin.xyz_to_J_points</code></li>
                     <li><code>Kin.xyz_to_J_planes</code></li>
                     <li><code>Kin.xyz_to_J_angles_6_axes</code></li>
                     <li><code>Kin.J_angles_to_xyz</code></li>
                     <li><code>Kin.move_to_straight</code></li>
                 </ul>
             </li>
         </ul>
    </li>

    <li> <code>Dexter.joints_out_of_range</code> now takes 2nd arg of a dexter instance
         so that it can compare based on actual robot instance values.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.3.7, May 20, 2019</summary>
<ul>
    <li>Fixed bug in persistent_load to get rid of backslashes on the files-menu files.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.3.6, May 19, 2019</summary>
Highlights: Fixed bugs in: Linter/Editor, saving files, and
            Dexter.set_parameter sending "NaN"s to Dexter.<br/>
            Help for Dexter.set_parameter and Dexter.move_to improved.
<ul>
    <li>Fixed numerous problems with the linter, including
        cases where it was:
        <ul><li>causing an error in the Editor</li>
            <li>warning about removed older options</li>
            <li>some non-helpful warnings</li>
        </ul>
    </li>
    <li> Fixed bug in <code>Dexter.set_parameter</code> that sent "NaN" instead of a number,
          for the params of:<br/>
           <code>"MaxSpeed"</code>,
          <code>"StartSpeed"</code>,
          <code>"Acceleration"</code><br/>
        This also fixed the setting of ultra-low speeds inadvertently.
    </li>

    <li> Renamed Job.init to Job.class_init to make it less ambiguous.
         Also consistent with the new Dexter.class_init</li>

    <li> <code>new Dexter</code> params click help improved with links for each param,
         just like was recently done for new Job.</li>


    <li> MakeInstruction insert for new Dexter, and new Job always prints out the name property.</li>

    <li> MakeInstruction insert for new Job, always prints out the do_list property, even if its the default.</li>

    <li> MakeInstruction for <code>Dexter.set_parameter</code>  dialog,
         has a menu of all the parameter names.</li>

    <li> Ping dialog box now selects by default, Dexter0 in the select widget
            at the bottom of the dialog automatically.</li>

    <li> Ref Man/Robot/Dexter/Dexter Instruction for
         <code>Dexter.move_to</code> and
         <code>Dexter.move_to_straight</code> :
         formatting improved.</li>

    <li> <code>persistent_load</code> improved to convert backslashed file paths to slashed file paths.
         Related: <code>choose_save_file</code>  now converts any backslashes to slashes.
         These fix a bug with the Edit menu/Save as ... menu item.</li>

    <li> <code>Dexter.move_to</code> instruction,
         config param values of <code>Dexter.RIGHT_UP_OUT</code> and friends:
         when you click on them in the editor, the doc pane scrolls to
         Ref Man/Robot/Dexter/Dexter Instructions/move_to</li>

    <li> <code>Dexter.move_to</code>, <code>Dexter.move_to_straight</code> <code>Dexter.pid_move_to</code>
          instructions,  <i>config</i> param now has a combo box for the 18 possible
          named values ( <code>Dexter.RIGHT_UP_OUT</code> and friends) as well as a type-in for
          explicit values like <code>[1, 1, 1]</code></li>

    <li> Dexter.move_to instruction now has the default for its config param
    documented as: <code>Dexter.RIGHT_UP_OUT</code></li>


    <li> New testsuite file named "file_system_testsuite.js"
          minimally tests <code>Dexter.write_file</code> and <code>Dexter.read_file</code>
    </li>
</ul>
</details>

<details class="doc_details"><summary>v 3.3.5, May 8, 2019</summary>
Highlights: Bug fixes for Job Engine, etc.
<ul>
    <li> Changed Robot.js to export differently.</li>

    <li> Output pane <button>Undef</button> button: back by popular demand.</li>

    <li> Make OutPane Header taller because there could be a scroll bar
         when you have a lot of Job buttons.</li>

    <li> job_engine improvements:
        <ul>
            <li>made global variables of Robot, Dexter, Job, Kin, Vector</li>
            <li>fixed require statements for calibrate_built_tables and DXF.</li>
            <li>load_files fixed to permit loading in the job_engine.</li>
            <li>required init_units and called call it. </li>
            <li>Globals bound: Dexter, Job, Robot, Vector, Kin  </li>
        </ul>
    </li>

    <li> If you have dde new buffer in the editor and it is empty,
        then when you choose open (to get an exiting file)
        you now don't DON'T get a up dialog asking to delete the new buffer,
        it just automatically deletes it.</li>

    <li> new Dexter now properly checks for a "simulate" argument.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.3.4, May 6, 2019</summary>
Highlights: Googleapis now accessible (sorry, no doc yet).
     Improvements to Find, click_help, Job buttons, file system I/O
<ul>
    <li>Minor improvements to the definition of Job in Ref Man/Job</li>

    <li><code>file_content</code> now defined. Note that this is deprecated.
       New uses should use <code>read_file</code> instead.</li>

    <li><code>DXF</code> available for job_engine jobs.</li>

    <li>The default folder that <code>Dexter.read_file</code> and
         <code>Dexter.write_file</code> uses is<br/>
         /srv/samba/share/dde_apps/</li>

    <li> <code>Dexter.read_file</code> and
    <code>Dexter.write_file</code> now support file paths beginning with<br/>
        <code>./</code> meaning /srv/samba/share/dde_apps/ and<br/>
        <code>../</code> meaning  /srv/samba/share/<br/>
        <code>/</code> just passed through to Dexter as is to access root and below.</li>

    <li> File menu save as... now just allows saving on dde's computer.
         Use File menu item "Save to Dexter as..." to save to Dexter.</li>

    <li> <code>read_file_async</code> and <code>write_file_async</code> bugs fixed.</li>

    <li> File menu save to dexter as..." If there is only one Dexter instance defined,
        it now doesn't  ask the user to choose a computer, it just uses the
        one defined Dexter instance.</li>

    <li> Now if you have a selection in a textarea or a text input and
         you click the eval button, just that selected text will be evaled.</li>

    <li> If you click the Find button when the find type in is empty and
         there is a selection, that selection will be treated as the text to find.</li>

    <li> Fixed inspection of <code>Job.job_default_params</code>.</li>

    <li> For both Job and Dexter defining:
        If you give a keyword arg that is invalid, DDE errors.</li>

    <li> click help on <code>Job</code> now displays in 5 different lines
        so you can read all params without scrolling.
        Each param name is a link to its documentation.</li>

    <li> Output pane Header: reduced height to save space.</li>

    <li> Jobs buttons now have a "close" box (X) and an "inspect button (I).
        Removed the "Undef" button in the Output pane as is now
        redundant with a Job button's close box.</li>

    <li> googleapis now available under the global variable <code>google</code></li>
</ul>
</details>

<details class="doc_details"><summary>v 3.3.3, May 2, 2019</summary>
Highlights: bug fixes.
<ul>
    <li> Fixed bug: DXF.string_to_lines is now bound to txt.string_to_lines</li>

    <li> improved documentation for read_file and write_file.</li>

    <li> file menu open bug on WindowsOS fixed.</li>

</ul>
</details>


<details class="doc_details"><summary>v 3.3.2, May 2, 2019</summary>
Hightlights: File menu extensions. read_file & write_file names
             now more consistent. Eval button functionality improved.
<ul>
    <li> Improved handing of what code the EVAL button executes.
    You can now execute code in textareas and text inputs.
    Less conflict between the command input and the text editor.</li>

    <li> Documentation on simulate: User Guide/Misc Pane/Simulate Dexter,
        added a link to the Ref Man/Robot/Dexter/new Dexter parameters
        that discusses the Dexter simulate param.
        Updated ref man doc here to refer to the new location of the
        simulate UI from the Jobs menu to the Misc Pane header.</li>

    <li> THREEjs updated from version 83 to 104.</li>

    <li> eslint updated to version 5.  This is an attempt to fix
        an apparent bug in the linter that froze DDE under
        certain (rare) conditions.</li>

    <li> Fixed bug in Files menu/remove</li>

    <li> <code>DXF.string_to_lines</code> is now bound to <code>txt.string_to_lines</code>.
         The full set of visible ascii chars now supported
         (lots of punctuation chars added).
         string_to_lines is not yet documented, but will be soon.</li>

    <li>  <code>file_content</code> deprecated and replaced by <code>read_file</code>.<br/>
          <code>file_content_async</code> deprecated and replace by <code>read_file_async</code><br/>
        <code>Dexter.read_from_robot</code> deprecated and replaced by <code>Dexter.read_file</code>.<br/>
            <code>Dexter.write_to_robot</code> deprecated and replaced by <code>Dexter.write_file</code>.
        Note that write_file has a different arg order than write_to_robot.
        Dexter.write_file has args of (path, content) like the other write_file methods.</li>

    <li> File menu items : <i>Open</i> and <i>Save as...</i>,
         only save files to DDE's computer as they long have.<br/>
         New items: <i>Open from Dexter...</i> and<br/>
         <i>Save to Dexter as...</i>
        deal only with Dexter files.<br/>
        <i>Save as...</i> now allows you to save to Dexter or to DDE's computer.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.3.1, Apr 25, 2019</summary>
Highlights: Numerous bug fixes. Prototype of access to Dexter file system from
             within DDE ... a work in progress.
<ul>
    <li> Click-help now recognizes defined Job and Robots names
      and existing File names when they are in
      literal strings. Click just in front of the first quote or double quote
      mark to inspect the value of the object.</li>

    <li> <code>txt</code> class for drawing now fixed. Work is ongoing
    on string_to_lines. Expect improvements soon.</li>

    <li> Extended the doc for Ref Man show_window about its callback function</li>

    <li> Dexter.write_file respelled first arg from "a_string" to "content".</li>

    <li> Jobs menu/Run Job on Dexter bug fixed.</li>

    <li> Root pathnames are now recognized to be
        starting with slash or "A:" through "Z:" as is WindowsOS convention.
        Formerly they were just starting with slash or "C:" through "G:".</li>

    <li> Dexter instances can no longer be created with a single upper case letter
        because this conflicts with the file system and new file paths such as dexter0:foo.js</li>

    <li> Fix for the bad dir that installing DDE windows exe went into in 3.3.0 and
        a few other recent releases.</li>

    <li> Fixed bug in replace_substrings utility.</li>

    <li> When you choose file menu items of open, save, save_as.
         you now get the option of getting and saving the file to Dexter,
         as well as the computer that DDE is on.
        This is a work in progress. Expect improvements soon.
         </li>

    <li>Renaming of "new file" to "new buffer" and a new policy:
         It is never saved to the file system. If you move to a new buffer
         and "auto save" is checked, you'll be prompted to save the buffer
          to an actual file.
    </li>

    <li> New instruction <code>Dexter.calibrate_build_tables</code>.
        See Ref Man/Robot/Dexter/Dexter_instructions</li>

    <li> Inspector <button>more</button> now increases the number of
        lines shown from times 2 to times 4.
        This means, for example, a single more click will now display all the
        properties of Job.</li>

    <li> MakeInstrution dialog,  insert button sub-dialog,
         when no name for the job given, it now pops up a
         choose file dialog to let the user choose a place from a menu
         to save the job to.</li>

    <li> The underlying software for implementing the text editor, CodeMirror,
         and the JS syntax checker (eslint) have been updated to
         their latest version. This will hopefully fix some
         intermittent bugs on WindowsOS and some "new Javascript" false warnings.</li>

    <li> The global constant: <code>dde_apps_dir</code>
         has been respelled to <code>dde_apps_folder</code>
         to make it more consistent with other uses of "folder" in DDE.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.3.0, Apr 15, 2019</summary>
Highlights: MakeInstruction lots of improvements, esp Insert.<br/>
            New Jobs menu item: "Run Job on Dexter".<br/>
            Simulator fidelity increased.<br/>
            New Instruction type: Strings on do_list are sent to Dexter as is, except
            for the prefix of job id, instruction, id, start time, stop time.<br/>
            New instruction type: data_array<br/>
            More than 1 Job can send instructions to a particular Dexter.<br/>
            New Dexter property: is_calibrated
<ul>
    <li>Make Instruction: Improvement to start_record error message.</li></li>

    <li>Make Instruction:  Fixed INSERT button with lots of improvements to its dialog box,
        including adding of the new "data" instruction type,
        default name for high level job is now "high_level",
        overwrites selection when inserting high_level reference or job.</li></li>

    <li>Make Instruction:  Inserting a Job's  instructions now inserts the
    other properties of the job, observing the defaults checkbox.</li></li>

    <li>Make Instruction: When recording a new job, computes the inter_item_dur for the whole do_list
        by usisng the average dur for a do_list item
        and set the inter_item_dur of the recording job to that value.</li>

    <li>Make Instruction:  When printing out the source of a job,
         the do_list is printed as the LAST job prop.</li>

    <li>Make Instruction: When a recording is done, its job button is removed.</li>

    <li> In socket.js changed new Buffer(128) to Buffer.alloc(128)
    to get rid of Node deprication warning when running the Job Engine.</li></li></li>

    <li>Simulator now accepts the exact array buffer sent to Dexter,
    to make higher fidelity simulation from that pure data transmission
    standpoint.</li>

    <li>Simulator now supports the "W" oplet for <code>Dexter.write_to_robot</code>.</li>

    <li>Simulator <code>Dexter.read_file</code> simulation now much better.
         Also handles file_not_found condition well.
        See improved doc Ref Man/Robot/Dexter/Dexter Instructions/read_from_robot</li>

    <li>Simulator now more consistent in handling the data from Dexter and
        the data from the Simulator.</li>

    <li>Simulator now more accurately returns "robot status" for all the instructions
        that Dexter does.</li>

    <li> Strings on do_list are sent to Dexter as is, except
    for the prefix of job id, instruction, id, start time, stop time.
    No conversion of degrees to arc_seconds or any other data conversion.
    See Ref Man/Robot/Dexter/Dexter Instruction/Instruction String.</li>

    <li> New Job property: <code>sent_instructions_strings</code> which
    is like sent_instructions, BUT, its that raw string that
    actually goes to dexter.
    So twisting down  "sent_instructions_strings"  would show something like
    <pre><code>"1, 0, 123456789, undefined, a, 23456, 43433234, 55443323455;"
"1, 1, 123456999, undefined, a 23456, 43433234, 55443323455;"</code></pre>
    Useful for debugging low level.
    Only recorded if keep_history is true to avoid big build up of data
    when you don't want it.</li>

    <li>Renamed internal method: is_instruction_array to is_oplet_array.</li>

    <li> New instruction type: data_array.
      See Ref Man/Job/new Job parameters/data_array_transformer
      and Ref Man/Robot/Dexter/Dexter Instructions/Data Array.</li>

    <li> Multi jobs on same robot:
    If Job param: start_if_robot_busy is true (default false),
    more than one job having the same default robot can be started.
    See Ref Man/Job/new Job parameters/start_if_robot_busy.</li>

    <li> Fixed bug in Robot.start_job when attempting to
    start a job with status_code "completed".</li>

    <li>Job.finish_job big clean up and bug fix when
    when_stopped is an instruction location w.r.t the instruction_location's job.</li>

    <li> <code>Robot.start_job</code> now accepts as its job_name arg:
    A job instance, a string "Job.job_name",
    the job name, i.e. "my_job" (like it use to) and
    a file pathname
     (wherein it gets the FIRST job defined in the file).</li>

    <li> <code>Robot.include_job</code> Now gets the FIRST job defined in the file
       when a file is specified as the place to get the do_list.</li>

    <li> New Jobs menu item: "Run Job on Dexter".
        Takes the selected source and writes it to Dexter's file system,
        then starts the first Job defined in that selection.
        The new Job button in the Output pane header for that Job
        is customized to behave well with stopping the remote Job.</li>

    <li> <code>load_files</code> partial bug fix:
        Now load_files is more likely to return the value of the last top-level expression
        in the file than before, but its still not perfect.
        See extended doc in Ref Man/IO/File Access/load_files.</li>

    <li> <code>Job.define_and_start_job</code> changed to use FIRST job in file, not last.</li>

    <li>Job.start now properly handles a do_list passed in.</li>

    <li> New file utility: make_folder  makes nested folders.
    See Ref Man/IO/File Access/make_folder.</li>


    <li> Each Dexter instance now has a property <code>is_calibrated</code>.
    See Ref Man/Robot/Dexter/Dexter Utilities
    This value is displayed by Jobs menu/show robot status.
    Recording is prevented on non-calibrated Dexters.</li>


    <li>Improved ping error message when Dexter is not connected.
    It is now printed in orange and scrolls to the Data Connection
    section of the User Guide./li>

    <li> User Guide Configure Dexter/Data Connection and Test Connectivity tweaked.</li>

    <li> Extended User Guide/Configure Dexter/Test Connectivity/Troubleshooting
        with a link to the "Dexter Networking" Github page.</li>

    <li> <code>Robot.loop</code>
        Slight optimization to having the array of instructions to
        execute upon each iteration not include undefined or null.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.2.2, Mar 25, 2019</summary>
    Highlights: Fixed build problem for Mac by updating npm packages.
</details>

<details class="doc_details"><summary>v 3.2.1, Mar 24, 2019</summary>
Highlights: bug fixes, refinements to Make Instruction UI & functionality.
<ul>
    <li> Fixed bugs in documentation tests suite of include_job examples.</li>

    <li> Extended TestsSuite running software to allow SAMP tags to
        not eval their innerHTML.</li>

    <li> Improved the error message for attempting to run a job  with
        a robot that's already in use.</li>

    <li> Fixed Instruction.is_instructions_array to account
         for short_instruction and at_sign_instruction  Arrays.</li>

    <li> Robot.loop: Extended to accomodate short_instruction and at_sign_instruction</li>

    <li> Make Instruction: Now clicking on a job button that was suspended by Make Instruction
        causes the job to stop.</li>

    <li> Make Instruction: When you click Record and the robot it wants to use is already
        in use by an active job, that job is automatically stopped,
        and the recording is allowed to proceed.</li>

    <li> Make Instruction: change the play middle checkbox to radio buttons:<br/>
        include only:  o middle   o ends</li>

    <li> Make Instruction: now the "reset" functionality has its own proper button.</li>

    <li> Make Instruction: now the end mark is "exclusive" when "middle" is selected.</li>

    <li> Make Instruction: Top level and "excluded" icon now placed next
         to play, begin mark, and end mark locations.</li>

    <li> Make Instruction: color refinement of sliders.</li>
</details>

<details class="doc_details"><summary>v 3.2.0, Mar 21, 2019</summary>
Highlights: Major improvement to Make Instruction recording and playing jobs.
            Job Engine improvements. New instruction type: strings.
            New Instruction: Robot.include_job.
            New doc for: short instruction, at_sign instruction, string,
                     and include_job instructions.
<ul>
    <li> Make Instruction: Replaced "Insert Job" button with "Wrap in Job"</li>

    <li> Make Instruction: Fixed doc scrolling to right place when an instruction name
        starts with "new ", i.e. "new Job".</li>

    <li> Make Instruction: New step forwards and backwards buttons.</li>

    <li> Make Instruction: new double-knobbed slider to restrict which
        instructions to play.</li>

    <li> Make Instruction: new dialog for saving source code to editor.</li>

    <li> Ref Man for new Job parameters of program_counter and ending_program counter
        extended for clarity.</li>

    <li> Ref Man for stopping jobs: Fixed and extended in  Ref Man/Jobs documentation.</li>

    <li> Ref Man for Robot.suspend: improved formatting.</li>

    <li> Sped up Instruction.sync_point by sending its Dexter.empty_instruction_queue()
     directly to Dexter rather than putting it on the do_list and incurinng
     another instruction cycle.</li>


    <li> Bug fixed: Dexter.prototype.get_robot_status now properly handles
     sending the instruction to the "this" robot.</li>

    <li> Bugs fixed in <code>to_source_code</code> for many Instructions
     that used to print out a prefix of "undefined".</li>

    <li> to_source_code for Dexter.read_from_robot  defined.</li>

    <li> New instruction type. A string.
        just prints itself out, with instruction id ie
        Job.my_job, instruction 123:  "hi dexter"
        Fast way to make print statements.
        Any function that returns a string will also be placed on the do_list.
        Thus you can construct such "print statements" dynamically at
        instruction-run time.
        See Ref Man/Robot/Robot Instructions/Any String</li>

    <li> New instruction Robot.include_job. See Ref Man/Robot/Robot Instructions/include_job</li>

    <li> New documentation Ref Man/Robot/Dexter/Dexter Instructions/short instruction</li>

    <li> New documentation Ref Man/Robot/Dexter/Dexter Instructions/at_sign instruction</li>

    <li> New documentation Ref Man/Job/new Job parameters/at_sign_function.</li>

    <li> Extended test suite to include a string, a short instruction,
     and an at_sign instruction.</li>

    <li> Extended inspect of do_list to accomodate
     short_instructions, at_sign instructions and strings.</li>

    <li> Fixed bug in the Step button action that wasn't grabbing the
         full selected source code to step over.</li>

    <li> Job Engine: doc improved.<br/>
        - There's a new file electron_dde/core/job_engine_doc.txt.<br/>
        - When you run the job engine, it prints out in the console:<br/>
        "Read electron_dde/core/job_engine_doc.txt for how to use the Job Engine."</li>

    <li> Job Engine: improved the error messages for define_and_start_job, used
    when using the job_engine.</li>

    <li> Job Engine: serial.js now set up to not error when job engine is
    loaded on Dexter, but still doesn't give you serial port access :-( .</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.1.2, Feb 27, 2019</summary>
Highlights: bug fixes.
<ul>
    <li> MakeInstruction: fixed bug in validate args that caused Eval Instr to fail
         and other things.</li>

    <li> When simulator pane isn't showing, print out a temporary
        line of the action in the output pane (not lots of perminant lines.)</li>

    <li> MakeInstruction: When recording, the output angles in the
        Output pane have been changed to a brown, temporary printout,
        prefixed with "Recording Dexter joint angles:"</li>

    <li> MakeInstruction: Insert recording now inserts code that doesn't
        error when you evaluate it in order.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.1.1, Feb 26, 2019</summary>
Highlights: Extensions to Make Itruction dialog and bug fixes.
<ul>
    <li> MakeInstruction moved "new Dexter" and "new Serial" to the bottom of the
     Instruction/Misc menu and gave them a tooltip of:
     "A Robot instance is not a valid do_list item."</li>

    <li> MakeInstruction fixed bugs processing function definitions.</li>

    <li> MakeInstruction fixed bug in editor, option click on Dexter.move_to([0, 0, 0])
         and the other args besides x,y,z don't get fields made from them in MI Dialog.</li>

    <li> MakeInstruction improved error message for all "move" instructions when
        they use their Job's default robot and that robot isn't a Dexter.
        Also, made this error happen early when you click Make Instructions's
        <button>Run</button>.</li>

    <li> MakeInstruction: when user chooses move_to from the menu,
        don't insert its code defaults, but rather:
        Change defaults to move_to to Dexter.move_to([0, 0.3, 0.4], [0, 0, -1],
        Dexter.RIGHT_UP_OUT, Vector.make_pose(0, 0, 0), [0], [0])</li>

    <li> MakeInstruction: When clicking <button>Eval Instr</button>, for new Job instructions,
        much better error messages for bad do_list items.</li>

    <li> MakeInstruction: Choosing an instruction of a robot for which no instances exist
        now gives an explicit, helpful error message.</li>

    <li> MakeInstruction: if the user chooses an instruction superclass that
        is incompatible with the robot for the job,
        auto select the first instance of that robot in the
        instruction_instance_name field.</li>

    <li> MakeInstruction: when switching instructions, the previous values for those
        new arg names are displayed in the UI.
        To get the instruction defaults (the previous version's behavior),
        choose Replace arg values with .../Defaults</li>

    <li> MakeInstruction: Bug fixed: if you grab a cmd from the editor into MI, then it
        gets the prev values for defaults,
        then save it out (withut editing in the MakeInstruction dialog)
        and you insert that instrution,
        you get something that was NOT in the original instruction.</li>

    <li> MakeInstruction: several items added to "replace arg values" menu customized
        for move_all_joints and move_to families:
        <ul><li>convert to move_to/move_all_joints</li>
            <li>get from Dexter.</li>
            <li>HOME, NEUTRAL, PARKED</li>
        </ul>
    </li>

    <li> MakeInstruction bug fix:  In move_all_joints you can run
           [0, 30, 0, 0, 0, 0, 0] and it moves the physical robot
            but when you try to go back to [0, 0, 0, 0, 0, 0, 0] it doesn't move.</li>

    <li> MakeInstruction Job Robot: select menu: added
            tooltip: Supplies the robot for instructions prefixed
            with a robot class (like Dexter or Serial)
            but no robot class.</li>

    <li> MakeInstruction new "Record" facility. See tooltips for docmentation
         on the buttons at the bottom of the MakeInstruction dialog.</li>

    <li> Calibration bug fixed: When starting the calibration window it
         tries to do a read_from_robot to get the Eye Centers.
         There was a bug in read_from_robot.</li>

    <li> Improved the error message for file_content when a file's content
         can't be retrieved.</li>

    <li> Fixed Bug: Editor Cmd-e isn't doing EVAL but is designed to.</li>

     <li> The WindowsOS build for DDE now includes code for 32 bit computers.
          (previously it was only for 64 bit computers which are more common now days.)
          To install just download the one .exe file regardless of whether you have win32 or win64
          and installation should do the right thing.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.1.0, Feb 14, 2019</summary>
Highlights: Major extensions & fixes to Make Instruction.
  Bug fixes to serial port, error message improvements.
<ul>
    <li> Fixed some bugs in the serial port interface.
        Lots of internal code clean up for this and other instructions.</li>

    <li> Better error messages when the robot that an instruction needs, and
         the robot for its Job, are not compatible.</li>

    <li> When attempting to play a Note or a Phrase with no connected MIDI
        synthesizer, you always got an error message. Now that message
        includes a link to the documentation for how to set up a synthesizer.</li>

    <li> Now running a job with a Robot on the do_list errors, like it should.</li>

    <li> <code>Robot.out</code>'s 3rd arg (temp) now has a proper default value of
          <code>false</code>.
          this does not change its behavior, it just makes click help better.</li>

    <li> <code>new TestSuite</code> now has a default value for its name parameter,
        <code>"rename_me"</code>.
         You always saw this when auto-creating a test suite from
         the Test Menu/selection to test, but now
         its displayed in click help and Make Instruction dialog to
         give the user a sense of what a name should be (a string).</li>

    <li> Make Instruction has a new "Misc" submenu under the Instruction menu
         with 9 new items. These complete the possible kinds of instructions
         you can put on a do_list (including function defs and arrays).<br/>
         From this menu, you can also create
         instances for Dexter, Serial and Job. All of these you
         can insert into the editor as well as read them back into
         the Make Instruction menu by option_clicking on their beginning
         i.e. "new Job", "[", etc.</li>

    <li> Make Instruction doc in the User Guide about simulate and real extended.</li>

    <li> When a new robot is defined, it is
         added to the Make Instruction robot menu automatically.
         This is used by the RUN button and the Insert Job button.</li>

    <li> Make Instructions now supports rest args.</li>

    <li> The User's Guide's <b>Help System</b> section now refers to
         <i>Make Instruction</i> instead of <i>Run Instruction</i>.
         Run Instruction is still available on the Job's menu since
         Make Instruction is not yet a superset of its functionality.</li>

    <li> Make Instruction <button>Run</button> behavies better
        when you have a Job as an instruction and its not
        allowed to run due to a conflict with another job
        using the same Robot. An explicit warning is
        printed in the Output pane.</li>


    <li> Make Instruction dialog has a new checkbox for "insert defaults" (or not)
         of arguments to the instruction. This is especially useful for
          move_all_joints and Jobs, wherein there's likely to be
          lots of args that just have their default values,
          and would take up a lot of code if you inserted them.
          BUT you might want to anyway, so check the box!</li>


    <li> Make Instruction: fixed bug that inserted extra
         code for a robot of a Job instance when the robot is not the default robot.</li>

    <li> Now when you click Make Instruction's <button>Run</button>,
         the simulator pane no longer pops up and animates when the
         'real' radio button is selected.</li>


    <li> Now when you click Make Instruction's <button>Run</button>
        and simulate is selected, and the simulator is shown,
        then when the Make Instruction dialog is restored,
        the Job's robot menu is correctly restored to its previously selected value.</li>

    <li> Make Instruction <button>Insert</button> now formats
         keyword arguments better, esp important for Job.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.0.8, Feb 5, 2019</summary>
Highlights: New Make Instruction dialog,
Lots of little bug fixes
and default value additions to instructions to make them easier to try out,
Ubuntu install fix.
<ul>
    <li>The Sim pane has been renamed to "Misc" to reflect its increased functionality.</li>

    <li> On the Misc pane header, the menu now contains just sub-panes for the
        Misc pane content. The Robots and Jobs formerly on this menu have
        been moved to the "Sim" sub-pane.
        New items on the Misc pane menu are "Make Instruction" and "Simulate Dexter"</li>

    <li> The Jobs menu, Simulate? submenu's items and
         the Jobs Menu "real time sim" checkbox have been moved
         to the header of the Misc pane.</li>

    <li> The new Make Instruction dialog is intended as a replacement for
    the Job's menu/Run instruction/show dialog. When Make Instruction becomes
    a superset of the older dialog, we'll cut the older dialog.
    Make Instruction Dialog facilitates a new, easier way to create instructions and their Jobs.
    This process is detailed in the User Guide. Click the new "Misc" pane
    header title to see that doc.</li>

    <li> Fixed bug in blob detector software. (misspelling of require("..core/utils.js") )</li>

    <li> Removed "End" from series: series_set_parameter_name_id</li>

    <li> Added "Robot.loop" to series_robot_instruction_id</li>

    <li> Now doc scrolls when you want doc on Dexter.make_ins (as opposed to just make_ins,
          which always worked). Dexter.make_ins and make_ins are synonyms.</li>

    <li> When a new robot is defined, it is added to the MakeInstruction robot menu.</li>

    <li> Selecting Misc pane menu to 'Simulate Dexter' now shows dexter
         as it was last simulated, not always straight up like it used to.
         Make Instruction dialog is similarly preserved when switching between
         Misc menu sub-panes.</li>

    <li> When running DDE on Dexter's processor board,
        dde_apps folder is now created under
        root/Documents (instead of root/) to
        be compatible with WinOS and MacOS platforms.</li>

    <li> The default colors for DDE have been changed to a lighter blue
        to make it easier to read black text on top of those colors.
        You can set these new colors in your dde_init.js like so:
        <pre><code>
        set_pane_header_background_color("#bae5fe") //was: #93dfff
        set_menu_background_color("#93dfff")        //was: #4cc9fd
        set_button_background_color("#93dfff")      //was: #4cc9fd
        </code></pre></li>

    <li> The splitter bar locations now persist across DDE launches.</li>

    <li> New checkbox on the Edit menu: "Animate UI"
        controls the speed of menu pull downs and doc pane scrolling.
        Unchecked is fastest. The value of this checkbox persistents
        across DDE launches.</li>

    <li> <code>Human.enter_choice</code>: changed the default value for choices
        from <code>[]</code>
        which errored, to <code>[["Yes", true], ["No", false]]</code>
        which displays a menu of "Yes" or "No" and
        sets the user_data variable to true or false.
        Ref man documentation for <code>Human.enter_choice</code> extended and improved slightly.</li>

    <li> <code>show_window</code> and <code>Human.show_window</code> default value for the content
    param changed from <code>""</code> to <code><input type="submit" value="Done"/></code>
    This let's users who call either of these, close the window
    when they just use all the defaults. It's also documentation by example,
    easily visable when editing Human.show_window instrutions in the Make Instruction
    dialog.</li>

    <li> Output pane: changed "Eval result of" to the less ambiguous "Result of evaling"
        for the header to showing the result of an evaluation.</li>

    <li> Changed calls to <code>dde_warning</code> to the
         correct spelling <code>warning</code>
        in Job.js and Vector.js
        Added require statement for <code>warning</code> in Vector.js</li>

    <li> <code>Robot.loop</code> the first arg of "times_to_loop" used to be
        required or the instruction would error.
        Now there's a default of <code>2</code> indicating times to repeat.
        The 2nd arg is still required.</li>

    <li> <code>Robot.label</code> takes one arg. It used to be required,
        Now it has a default of <code>"my_label"</code></li>

    <li> Improved error message for <code>Robot.unsuspend</code>.</li>

    <li> <code>Robot.wait_until</code> takes one arg. It used to be required meaning
        that a call to it without that arg would error.
        Now it has a default of <code>1</code>,  meaning wait for one second.
        wait_until ref man doc slightly improved.</li>

    <li> <code>Robot.out</code> first arg use to not have a default value which
        didn't error but caused a confusing output.
        Now that first arg has a default value of <code>""</code>
        making a prettier default output for this instruction.</li>

    <li> <code>Robot.send_to_job</code> fixed bug in an error call.
        The function still errors where it use to, but now
        you can see a meaningful error message.</li>

    <li> <code>Robot.start_job</code> improved error messages that catch some
        errors at Job definition time rather than later at Job run time.</li>

    <li> <code>Robot.debugger</code> instruction: fixed a stepping problem of not
        advancing program_counter when clicking the Go button.
        Doc slightly improved.</li>

    <li> <code> Control.if_any_errors</code> ref man doc improved.</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.0.5, Jan 22, 2019</summary>
Highlights: Preparations for new Job Engine using require.
<ul>
    <li> Changes to make job_engine requires. <br/>
         <i style="color:red">Warning:</i> We anticipate this will introduce
            a bunch of small bugs.
            These will probably be easy to fix, so please send us
             bug reports! </li>
    <li> Removed unused folder jqwidgets_4_2</li>
    <li> Fixed bug preventing Jobs menu/Show Robot Status item from working at all.</li>
    <li> Fixed bug in Test menu/Run Testsuite File that caused an error when
        running testsuite files that start with a comment, such as
        math_testsuite.js</li>

    <li> Removed Sim pane menu item of "Dexter Videos" because it couldn't show
        the videos in the sim pane. You can still browse the Dexter Videos page
        by clicking on the link User Guide/About/Videos on Dexter.</li>
    <li> Fixed bug in Job's 'when_stopped' parameter
    <li> Fixed bug when a TestSuite is a do_list item in a job.</li>
</ul>
</details>


<details class="doc_details"><summary>v 3.0.4, Dec 19, 2018</summary>
    Highlights: Just a rebuild due to a glitch in the build process.
    No code changes.
</details>

<details class="doc_details"><summary>v 3.0.3, Dec 19, 2018</summary>
Highlights: Minor UI improvements, source code regorganization.
<ul>
    <li> Minor improvements to 3.0.1 release notes.</li>

    <li> File/Open menu item is now File/Open...</li>

    <li> Jobs menu/Simulate? subitems names extended:<br/>
        true => true (simulate)<br/>
        false => false (real)</li>

    <li> Moved the 10 job engine files to new folder named "core".</li>
</ul>
</details>

<details class="doc_details"><summary>v 3.0.2, Dec 14, 2018</summary>
Just a fix for a release build glitch.
</details>


<details class="doc_details"><summary>v 3.0.1, Dec 14, 2018</summary>
Note: DDE version 3.0.0 is the same code as DDE version 2.5.13.
The "2" branch is the long term support version intended to be stable.
We will fix bugs in the LTS branch but not add features.
<p></p>
The "3" branch is the "development branch" which has bug fixs as well as new features.<br/>
3.0.1 is the first development release since creating the LTS branch.
<p></p>
Highlights: All Dexter instruction calls can now take a subject
 of a dexter instance as well as their usual Dexter class.<br/>
 ping improved.<br/>
 TestSuite fixes for running test suites NOT under simulation.
<ul>
    <li>When you Eval some code in the editor, an error message is printed
        in the output pane. But until now, the evaled code didn't appear
        after "Eval result" in the output pane IF the code errored.
        Now it does, clarifying which code produced the error.</li>

    <li> Ref Man <code>Robot.loop</code> improved doc for an array first arg.</li>

    <li> Removed calls to "debugger" esp in <code>ping</code> code.
          Removed comments of "debugger" just to get rid of the noise when searching.</li>

    <li> ping:  when pinging a single address and its true, you
        can now click a link to insert the dexter def just like when pinging a range of numbers.</li>

    <li> ping: You can have an address with a * in it
        to ping 10 addresses. Now documented in the ping dialog box.</li>

    <li> The mathjs npm package is now installed in DDE.<br/>
        To try it:<br/>
        <code>var math = require('mathjs')</code><br/>
        <code>math.sqrt(-4)</code><br/>
        Doc: http://mathjs.org/docs/index.html</li>

    <li> TestSuite: TestSuite Menu/Insert Example now inserts an example
        who's summary is consistent with the actual number of failed tests.</li>

    <li> TestSuite: lots of fixes for starting Jobs in the test suite,
        including both changes to the test running code as well as
        some of the examples in the Ref Man.
        This fixes cases of attempting to run all the test suites
        not under simulation when dexter0 isn't at the default IP address.
        Also, removed from testSuite, the code in User Guide that defines dexter0
        so as not to impact a user that intentionally put dexter at a non-default
        ip_address.</li>

    <li> New function: <code>add_robot_to_instruction(inst, robot)</code>
         New function: <code>add_robot_to_instructions(inst_array, robot)</code></li>

    <li> Ref Man Dexter Utilities now has doc for add_robot_to_instruction
        and add_robot_to_instructions.</li>

    <li> There are now Dexter instance versions of ALL Dexter instructions
         including:<br/>
        <code>make_ins</code><br/>
        <code>Dexter.draw_dxf</code>: fixed link lengths default args.
            restored original link lengths at end of processing
            added robot as a possible last arg.<br/>
            The 4 set mode instructions have also been extended to accept a robot.</li>

    <li> Ref Man Dexter Instructions and Dexter Modes extended to
        describe the new optional Dexter instance subject.</li>

    <li> Added file: DEXTER_logo.dxf, under the examples folder.
         This contains the dxf for drawing the string "DEXTER".</li>

    <li> Extended Getting Started and the User Guide/First Launch and
    "On MacOS" to make connecting your computer to Dexter clearer. </li>
</ul>
</details>

<details class="doc_details"><summary>v 2.5.13, Nov 20, 2018</summary>
    Highlights: bug fixes.
<ul>
    <li> J6_MEASURED_TORQUE swapped with J7_MEASURED_TORQUE
        in robot_status table.</li>

    <li> While reading robot status into DDE from Dexter, adjusted conversion for J6.</li>

    <li> robot status window widened to accommodate long numbers.</li>


    <li> Fixed bug in robot status dialog that when switching between
        robots the table wasn't updated.
        Also fixed bug that when switching to a defined robot that
        never had a job run on it, it errored.</li>

    <li> robot status dialog "Run Update Job" button now works.</li>

    <li> Fixed bug when a file in DDE's menu of files has only a name and no folder.
        It now defaults the folder to "dde_apps".</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.5.12, Nov 18, 2018</summary>
    Highlights: new Job() with no args now works. Many bug fixes.
<ul>
    <li>Now when a new job is started that is connected to a robot,
        if that robot is connected to a socket,
        that robot's socket connection is destroyed then a new one is created.</li>

    <li> Output pane horizontal scroll bar at bottom is now visible when
        the content of the output pane exceeds the output pane width.</li>

    <li> Fixed typo in <code>move_all_joints_relative</code> implementation name.</li>

    <li> robot_status dialog: Removed "m" at end of "no status" for measured angles.
        Improved formatting of measured angle number.</li>

    <li> robot status dialog: No longer displays scroll bars when empty of content.</li>

    <li> robot status dialog: fixed <b>Measured X, Y, Z</b> displayed numbers.
        Prefixed the header for these fields with "J5".</li>

    <li> robot status dialog: When 2 robots are being used,
        only the data from the selected robot in the robot status dialog is
        shown. Previously, data from other robots could have been shown.</li>

    <li> robot status dialog: At most, only one robot status dialog will be shown.
        Attempting to show a 2nd one will result in a warning message.</li>

    <li> Fixed socket.js <code>instruction_array_degrees_to_arcseconds_maybe</code> conversion to dynamixel
        units for Joint 6 and 7.
        Also corresponding change of subtracting 512 from
        convert_robot_status_to_degrees' J6.</li>

    <li> Swapped the positions of J6 and J7 measured angles in the robot status
        array to conform to Dexrun.c's filling in of these values.
        This fixes a bug in displaying those values in the robot status dialog box.</li>

    <li> In making a new Job, the do_list arg is no longer required.
        You can now let a defined's job do_list
        default to the empty list. That will cause the warning message:
        Warning: While starting job: job_1 the do_list is empty.
        The job still requests the status of Dexter, but does not cause it to move.
        Now <code>new Job()</code> is a valid Job that can be defined and run without error.</li>

    <li> Ref Man: Improved <b>new Job parameters</b> documentation for default values.</li>

    <li> <code>new Job when_stopped</code> arg: when this is a fn, the job is now stopped.
        Only when the arg is <code>"wait"</code> is the job not stopped.</li>

    <li> Fixed bug in <code>Dexter.read_from_robot</code> that prevented it from
        being used twice in a job.
    </li>
</ul>
</details>

<details class="doc_details"><summary>v 2.5.11, Nov 11, 2018</summary>
Highlights: New "Ping" item on Jobs menu, bug fixes & tweaks.
<ul>
    <li> New item on Jobs menu: "Ping a Dexter..."
        gives you a dialog box allowing you to choose a Dexter to ping,
        or a network address (sans host number) to scan the 256 possible
        host numbers and display those hosts that are connected.
        User Guide documentation on "ping" extended to alert users
        to this new menu item.</li>

    <li> Chrome debugger window no longer pops up when you launch Dexter.</li>

    <li> DDE files menu puts file name before file folder for each item.</li>

    <li> Fixed minor bug in Socket instruction_array_to_array_buffer
        so that instructions sent to Dexter would end in semicolon but
        NOT have a space before that semicolon.</li>

    <li> calibrate_ui.js fixed bug with selecting the "Choose" value for a robot.
         Now selecting Choose does nothing rather than presuming "Choose" is the name of a Dexter.</li>

    <li> run instruction dialog has been set back to its previous behavior that
        defines job_00 each time an instruction is run rather than add to the already
        running job_00.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.5.10, Oct 29, 2018</summary>
    <ul>
        <li> Fixed bug with duplicate 'Calibrate optical encoder' buttons.</li>
    </ul>
</details>

<details class="doc_details"><summary>v 2.5.9, Oct 24, 2018</summary>
<ul>
    <li> User Guide debugging section: extended and slight re-organization.</li>

    <li> Fixed socket code bug by putting a space between arguments in instructions.</li>
</ul>
</details>


<details class="doc_details"><summary>v 2.5.8, Oct 23, 2018</summary>
Highlights: Calibration dialog extended. Bug fixes.
<ul>
    <li> Jobs menu/Calibrate Dexter isolated init_calibrate fn
    to make redefining it easier.</li>

    <li> Jobs Menu Calibrate Dexter dialog box extended.<br/>
         When you select a robot, it does "robot_cal_init".<br/>
         If there is only one robot defined when the user
         choose Jobs menu/calibrate dexter,
         automatically run robot_cal_init
         else, have the "default" robot that shows up in the select box be "choose robot",
         then all the defined robots are on that select menu below "choose robot",
         BUT make the top one be Dexter.last_robot<br/>
         robot_cal_init:<br/>
         pop up modal show_window dialog  (doesn't allow clicking outside of dialog)<br/>
         Says "Please wait while initializing Robot for calibration".<br/>
         Has button "Cancel".<br/>
         Normal operation is that it creates a job with a
         read_from_robot instruction,
         and when the job completes, the show_window is automatically closed.</li>

    <li> Fixed machine vision demos to load pictures with slight a delay,
         so their data is accessible by subsequent code.
         Reduced size of too-large show_windows.</li>

    <li> Fixed the ref man, serial robot, testsuite, unknown failure.
         Now all 1777 tests pass.</li>
</details>

<details class="doc_details"><summary>v 2.5.5, Oct 14, 2018</summary>
Highlights: move instructions extentions include handling joints 6 & 7,
            NaN for "no change" and sending instructions to
            any robot.<br/>
            Documentation extensions include new Getting Started guide.<br/>
            TestSuite extensions include the automaitc starting of Jobs
            in tests with Job definitions.<br/>
            Run Instruction dialog extensions include support for J6 & J7.<br/>
            Robot Status dialog improvements.<br/>
            gcode improvements.
<ul>
    <li> Fixed 3 pieces of code in the RefMan that failed in running the
        ref man test suite.</li>

    <li>inspect: for "short info" of an object instance var val, increased
        the potential length for an array being displayed from 6 to 10.</li>

    <li> Bug fixed in Jobs menu/Run Instruction/Show Dialog for move cmds.</li>

    <li> Added
       <ul><li><code>Dexter.J6_ANGLE_MIN</code> => <samp> 0 </samp></li>
           <li><code>Dexter.J6_ANGLE_MAX</code> => <samp> 296 </samp></li>
           <li><code>Dexter.J7_ANGLE_MIN</code> => <samp> 0 </samp></li>
           <li><code>Dexter.J7_ANGLE_MAX</code> => <samp> 296 </samp></li>
        </ul>
        used only for Run Instruction dialog
    </li>

    <li> Run Instruction dialog added J6 and J7.

    <li> Run Instruction dialog: the number spinner controls constrain the value
        to be within the indicated range for the joint.
        But you can type in other values in the input if you like.
     </li>

    <li> Run Instruction dialog: move_all_joints and move_to values can now be blank
        signifying "no change" for that joint or x,y,z.
        A tooltip on the input inputs explains this.</li>

    <li> Run Instruction dialog now has a button in upper right named
        "Insert Dexter Def" that inserts new Dexter
        definition with its name and ip address.</li>

    <li> For move_all_joints and "a" oplet instructions,
        DDE converts the degrees given for J6 and J7 into
        the dynamixel units of 0.29 of a degree
        before sending that value to Dexter.</li>

    <li> robot.status for J6_MEASURED_ANGLE and J7_MEASURED_ANGLE
        are presumed to be in dynamixel units coming from Dexter.
        These are converted to degrees for DDE's use in robot_status.</li>

    <li><code>Job.prototype.gcode_to_instructions</code>
        got rid of file_content call
        with callback, which is no longer supported.</li>

    <li> <code>Job.gobj_to_move_to</code>
         extended to accept a line of gcode as a string.</li>

    <li> The parameters to <code>Dexter.run_gcode</code> have been changed.
        It used to take by_position arguments. Now it takes keyword arguments.
        The scale parameter has been replaced with workspace_pose so that it
        can perform scale, rotation and offset.
        A new argument is gcode, used to pass in a string of gcode that
        is prepended to the filepath arguments.
        See Ref Man/Robot/Dexter/Dexter Instructions/run_gcode
        for updated doc.</li>

    <li> <code>Socket.send</code> Fixed bug in getting the JOB_ID out of the instruction array,
        which prevented DDE from connecting to Dexter.</li>

    <li> <code>Socket.close</code> 2nd argument now defaults to null
        so that its default value
        uses the value of the simulate radio button in DDE.
        (This is obscure. Most users won't call this method directly.)</li>

    <li> <button>Eval</button> button behavior w.r.t. selection has been improved.
        When there's a selection in the cmd input, hitting ENTER will
        eval just that selected source.</li>

    <li> Doc: clarified the instructions to download DDE in the User Guide.</li>

    <li> Extended User Guide/Configure Dexter/Data Connection
        documentation about using an IP scanner to find and set a Dexter's IP address
        in DDE.</li>

    <li> Doc pane <b>Articles</b> moved down to below the Ref Man.</li>

    <li> At hdrobotic.com/software
        Now the documentation has twist-downs similar to the twist downs
        in DDE doc pane for easier browsing</li>

    <li> Doc: new <b>Getting Started</b> top level section in the Doc pane.</li>

    <li> Fixed bug in User Guide/Data Connection near "Go to Start/Control Panel"</li>

    <li> Simplified the Robot Status dialog to not let you choose a Job.
        You can now only select a robot.</li>

    <li> Fixed bug in Robot Status dialog whereby it did not automatically
        update the displayed data as the selected robot's job is running.</li>

    <li> Robot Status dialog now has a new button "run status job"
        which runs a job to get the robot status.</li>

    <li> Robot Status dialog now comes up even if no job has been run on
        that robot. The data for the robot displays as "no status",
        but you can click the new "run status job" button
        to get data from the robot.</li>


    <li> Fixed click help to scroll to doc for "Dexter.write_to_robot".</li>

    <li> Fixed click help to display name of function being clicked on
        when showing its source code.</li>

    <li>Minor improvements to User Guide/Why Use DDE? and Installation.</li>

    <li> Fixed Ref Man/Dexter.get_robot_status description.</li>

    <li> Slight improvement to formatting in User Guide/Help System.</li>

    <li> Clicking on a word in the cmd input now displays click help on it.</li>

    <li> Test menu new item: <i>Run TestSuite File</i>
        allows you to choose a file and run just the tests in that file.</li>

    <li> Added make_html_testsuite.js to run all TestSuites.</li>

    <li> Added move_all_joints_testsuite.js to run all TestSuites.</li>

    <li> <i>Run all TestSuites</i> now displays a summary of
           statistics at the end of its report.</li>

    <li>A test in a TestSuite can now contain source code for
        creating a Job. (i.e. <code>new Job({...})</code>.
        When such a test is run, the Job is defined then
        started. The Test suite is suspended until the
        job is completed, then the test site is resumed.
        This allows tests after the Job-defining test to
        verify values in the Job that were created while
        running the job.</li>

    <li> Fixed bug in read_from_robot in getting its "payload".</li>

    <li> Fixed bug in move_to_straight AND made it accept a robot subject
        so that it can move a different robot than the default one for the job.</li>

    <li> <code>Dexter.make_ins</code> is a synonym for shortcut make_ins.
        This long cut is consistent with other dexter command and
        more explicit.</li>

    <li> <code>Robot.dexter0.make_ins</code>
         syntax now works to send the instruction to another
        Dexter instance.</li>

    <li> Fixed bug in the simulator for recording of angles
        for <code>Dexter.pid_move_all_joints</code> instructions.</li>

    <li> Standardized examples of calls to move_all_joints to always take its
        joint angles as an array.</li>

    <li> <code>dexter0.pid_move_all_joints(...)</code> now works.
        The joint angles passed can all be in an array.</li>

    <li> <code>Dexter.move_all_joints</code>,<br/>
         <code>Dexter.pid_move_all_joints</code>,<br/>
         <code>Dexter.move_all_joints_relative</code><br/>
    instructions can take 5, 6 or 7 angles.
    Can take the angles passed in as one array or spread out as individual args.
    Can take NaN angles (keep the same)
    move_all_joints, pid_move_all_joints can take relative angles
    (surrounded by square brackets).
    if user specifies 5 or less items , send 5 to dexter.
    if user specifies 6, send 6,
    if user specifies 7, send 7.
    When the degree values for joints 6 and 7 are sent to Dexter,
    they are converted to Dynamixel units, each is worth 0.29 degrees.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.5.4, Sep 6, 2018</summary>
    <ul>
        <li>Lots of new docmmentation in the Ref Man for the
             new features listed in DDE 2.5.0 release notes
             including all the Dexter.move* instructions
             and the new RobotStatus class.
             More doc needs to be done for RobotStatus, but
             this is a healthy start.
        <li>Updated version of build script to help make Mac release</li>
    </ul>
</details>

<details class="doc_details"><summary>v 2.5.3, Sep 5, 2018</summary>
<ul>
    <li>Updated version of npm serialport package to fix Mac release problems.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.5.2, Sep 4, 2018</summary>
<ul>
  <li>The underlying software package for speech recognition was
      interfering with building DDE releases so that
       underlying support has been removed for now.
       If you were depending on soeech reco, please use
       an eariler version of DDE, and let us know what
       you were doing with speech recognition.
       </li>
  <li>Insert Menu/Sound/recognize_speech item has been removed.</li>
</ul>
</details>


<details class="doc_details"><summary>v 2.5.0, Aug 29, 2018</summary>
Highlights: Jobs may run instructions on more than one Dexter.<br/>
            Support for Joint 6 & Joint 7<br/>
            Reconfiguration of robot_status 1D array.<br/>
            New RobotStatus class<br/>
            move_to_straight extended, including a new "T" oplet for it.
<p></p>
<i><b>Lots of low-level software has changed in this release.
Mostly this is backwards-compatible but there might be a few
unusual cases where this is not the case.
<p></p>
This is a "test" release for Haddington internal testing purposes.
The extensions in this release will be more formally documented in a subsequent
release. For now, please make-do with the below.</b></i></li>
<ul>
    <li> Ref man entries for load_files and file_content now point at each other.</li>

    <li>Undid first item in 2.4.6 release notes, regarding Sockets because
        it caused bugs.</li>

    <li>A job may now contain instructions for more than one Dexter.
        The "move" instructions can take a subject of an instance of a Dexter,<br/>
        i.e. <code>Robot.dexter0.move_all_joints([1, 2, 3, 4, 5, 6, 7])</code><br/>
        These instructions don't incur an extra item added to the do_list like
        they use to so they will be faster.</li>


    <li> Most places you use an array or list of joints now take
         7 joint angles instead of 5.<br/>
         The "move_to" instructions also take new args for J6 and J7.<br/>
         J6 is generally the "twist" of the end effector, and<br/>
         J7 is generally the gripper motor degrees for opening
           and closing a gripper.</li>

    <li> <code>move_all_joints, pid_move_all_joints, move_all_joints_relative</code>
        have their
        params named: <code>array_of_5_angles</code> renamed to <code>array_of_angles</code></li>


    <li> Dexter.robot_status_labels  updated:
<pre><code>Depricated:
Dexter.DMA_READ_DATA    = 6
Dexter.READ_BLOCK_COUNT = 7

Dexter.J1_PLAYBACK = 16
Dexter.J1_SLOPE    = 18

Dexter.J2_PLAYBACK = 26
Dexter.J2_SLOPE    = 28

Dexter.J3_PLAYBACK = 36
Dexter.J3_SLOPE    = 38

Dexter.J4_PLAYBACK = 46
Dexter.J4_SLOPE    = 48

Dexter.J5_PLAYBACK = 56
Dexter.J5_SLOPE    = 58
</code></pre>
</li>

    <li><code>Dexter.J1_FORCE_CALC_ANGLE</code> and on up to <code>J5_FORCE_CALC_ANGLE</code>
         have been deprecated.
         Now these values are set to the same index of the new
         <code>Dexter.J1_MEASURED_ANGLE</code> (and friends)
         so that asking for the value of the robot_status 1D array at <code>Dexter.J1_FORCE_CALC_ANGLE</code>
         will now get the value at <code>Dexter.J1_MEASURED_ANGLE</code></li>

    <li>New fields in the 1D robot_status array:
        <ul><li><code>Dexter.J6_MEASURED_ANGLE</code>
            <li><code>Dexter.J7_MEASURED_ANGLE</code>
            <li><code>Dexter.J6_MEASURED_TORQUE</code>
            <li><code>Dexter.J7_MEASURED_TORQUE</code>
            <li><code>Dexter.JOB_ID_OF_CURRENT_INSTRUCTION</code>
            <li><code>Dexter.CURRENT_INSTRUCTION_ID</code>
        </ul>
    </li>

    <li> Socket.instruction_array_degrees_to_arcseconds_maybe can now take
        "a" and "P" instructions with any number of angle args.</li>

    <li><code>make-ins("a" ...)</code> calls now take any number of joint angle args.</li>

    <li> <code>make_ins</code> new optional last arg of a robot_instance,
        where the instruction is sent. If no such last arg exists,
        the instrution will be sent to the "default" robot defined
        in the Job instance.</li>

    <li> <code>Dexter.pid_move_all_angles</code> & <code>Dexter.pid_move_to</code> now consistently
        get default angles from and set robot.pid_angles.</li>

    <li> <code>move_all_joints</code>, <code>pid_move_all_joints</code>,
         <code>move_to</code>, <code>pid_move_to</code>, <code>move_to_straight</code>,
        All default unpassed values for joint angles (or x, y, z) to their
        previous values.</li>

    <li> If a passed in degree  (or x,y,z) value for a "move" command is
        wrapped in an array,
        then the first value of that array is considered to be "relative"
        and is added to the existing value to come up with the new value.<br/>
        Example: <br/>
        <code>Robot.dexter0.move_all_joints([1, [2.5], 3, [4.5], 5, 6, 7])</code>
        Above the values of 2.5 and 4.5 are <i>relative</i> to the previously
        commanded degrees for joints 2 and 4.</li>

    <li> <code>Dexter.HOME_ANGLES</code> <code>NEUTRAL_ANGLES</code>, <code>PARKED_ANGLES</code>
        all are now of length 7 with two zeros on the end.</li>

    <li>New Oplet "T" for the Dexter-side version of <code>Dexter.move_to_straight</code>.
        Example:<br/>
        <pre><code>make_ins("T",
            x, y, z,
            J5_direction[0], J5_direction[1], J5_direction[2],
            config[0], config[1], config[2],
            tool_speed, resolution,
            j6_angle, j7_angle)</code></pre>
            with an optional robot_instance as an additional last arg.
    </li>

    <li> <code>Dexter.move_to_straight</code> instruction has been extended
         with a new param: <code>single_instruction</code>.
         Default false. But if true,
        a <code>make_ins("T" ...)</code> instruction is generated and sent to Dexter
        instead of a long array of other low level instructions.
    </li>

    <li>To support the new "T" instruction, the Socket code now converts
         tool_speed and resolution args from "meters" to "microns",
         ie they are multiplied by 1,000,000</li>

    <li> move_to_straight's generated make_ins instructions now take
         a last array elt of the robot instance.</li>

    <li> Bug fix: <code>Dexter.move_to_relative</code>  changed
       from using <code>job_instance.robot.pose</code>
        to
       <code>this.workspace_pose</code></li>


    <li> <code>Dexter.move_to_straight</code> now takes a new <code>workspace_pose</code> arg.</li>

    <li> <code>Dexter.move_to_straight</code> now takes keyword args.
      This is an incompatible change.
       An explicit error message is displayed when you call move_to_straight with
       by_position args.</li>

    <li> Bugs fixed in <code>Dexter.move_to_relative</code> with the workspace_pose.
        It had some params misspelled of "workspace_pos".</li>

    <li> <code>robot.pid_angles</code> used more consistently for the pid instructions.</li>


    <li> <code>robot.angles</code> and <code>robot.pid_angles</code> now inited to
        <code>[0,0,0,0,0,0,0]</code>
         (was <code>[0,0,0,0,0]</code> ).</li>

    <li>Updated Dexter simulator to the new 7 angles, etc. Fixes to
         compution duration.</li>

    <li>The "Show Robot Status" dialog box has been updated to the new
        robot_status fields.</li>

    <li><code>RobotStatus</code> class provides high level access to the robot_status array.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.4.6, Aug 3, 2018</summary>
Highlghts: Jobs gracefully finish under some conditions of the
socket connection between DDE and Dexter failing.
<ul>
    <li> If the socket connection between DDE and Dexter is broken after
    DDE has sent an instruction but before that instruction's reception is acknowledged
    from Dexter to DDE, then DDE will stop the job formally.
    DDE waits 200ms after sending the instruction to declare that the
    socket connection is broken.
    </li>


    <li> Picture.make_classifier doc extended to say that you can't use a url for the path argument,
    it must be a local file.
    The doc also explains that the default xml works poorly with faces with glasses on.
    </li>

    <li> Picture.classifier_detect doc updated to explain the example.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.4.5, July 31, 2018</summary>
<ul>
<li> Fixed bug in display of Evaled source code in the Output pane header.
This bug was also responsible for breaking the Insert menu/Machine Vision/ demos,
and probably a bunch of other things, especially when evaling a large
amount of source code (that would likely include single quotes).
</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.4.4, July 27, 2018</summary>
Highlights: Serial port robot improved greatly.<br/>
            new OpenCV classifier interface for detecting objects in images.<br/>
            Click help for built-in JS constructs improved.<br/>
            Eval&Start button can run a robot instruction.<br/>
            patch_until helps manage software patches.<br/>
            Improvements to the Vector library.<br/>
<ul>
    <li> Removed console printouts when evaling a Job,
        related to: inspect_set_new_object_onclick,
        Inspect_next_value_id and not Inspect_prev_value_id
        as their not indicating something that's wrong.</li>

    <li> Removed undocumented & unused utility function dom_child_elts_of_class
         Use  <code>html_db.dom_elt_children_of_class(elt, a_class)</code> instead.
        Note that html_db.dom_elt_children_of_class does not take a return_first_or_null,
        it always returns an array (which might be empty).</li>

    <li> When printing out a result of an eval in the output pane,
        the source is now shown. Note that you can select the source
        or a portion of it, then click the Eval button to eval it again.
        If the source is long, only its first line, and maximally only 55 chars
        is shown (with ... indicated it has been truncated).
        But hovering over it gives a tooltip of the full source.</li>

    <li> Bug fix for the run instruction dialog when you attempt to start
        running a new instruction before the previous one has completed.</li>

    <li> Extended the documentation for <code>Picture.show_video</code> for the content and camera_id
        parameters.</li>

    <li>The serial port Job example, simulate flag on the robot definition
        has been changed from <code>false</code> to <code>null</code>
        so that it pays attention to the Jobs menu/Simulate? flag.</li>

    <li><code>new Serial()</code> can now take a simulate arg that is null,
        so that the actual simulate comes from the Jobs menu/Simulate? submenu.
        null is the new default.</li>

    <li> Fixed bug that had the Instruction class for string_instruction
        erroneously named "suspend".</li>

    <li><code>Serial.string_instruction</code> and <code>Robot.grab_robot_status</code> have been extended
        to accept a robot instance in place of <code>Serial</code> and <code>Robot</code>
        respectively,
        to direct the instruction to a particular robot regardless of the
        default robot declared in the job.
        Ref Man/Robot/Serial and
        Ref Man/Robot/Robot Instructions/grab_robot_status
        have been improved and extended to describe these
        new capabilities.
        See especially the new section: Ref Man/Robot/Serial/Multiple Serial Ports</li>

    <li>New Series: JavaScript Object Names.</li>

    <li>Improved click_help for built-in JS classes and misc DDE global functions.</li>

    <li> Eval&Start button extended to run a selected Dexter (or other) Instrucdtion
        on an automatically defined job.</li>

    <li> new function: patch_until for helping to manage patch source code.
        See Ref Man/Operating System, etc./patch_until</li>

    <li> <code>Picture.mat_to_gray</code> documentation extended to include that
        it mat_in is already gray, it is just returned.</li>

    <li>New method: <code>Picture.make_classifier</code>.
        Use an xml file to create a classifier.</li>

    <li>New method: <code>Picture.classifier_detect</code>. Use a classifier to
        identify objects in a picture. Especially good for face detection.</li>

    <li> <code>Vector</code> Library - Matrix Math Test Suite #24 bug fixed.</li>

    <li> <code>Vector.concatinate</code> improved to take in an unlimited number of matrices instead of just two.</li>

    <li> New method: <code>Vector.ellipse_fit</code>.
         This fits a shifted, tilted, and squished ellipse
         to a set of data points that are passed as arguments of:<br/>
         - an array of x numbers and<br/>
         - an array of y numbers.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.4.3, July 18, 2018</summary>
Highlights: New methods: Picture.detect_blobs, Picture.similarity_by_detect_blobs.
Arrow keys in editor behave more conventionally. Sim pane more useful.
<ul>
    <li> Sim Pane menu "Dexter Photo" now expands the photo as the user expands the pane.
    "Reference Manual" displays the ref man in the sim pane.
    "Choose File" allows you to choose and image file, HTML file
    or various text files to display.</li>

    <li> Insert menu/Machine Vision/Locate Object code cleaned up to
    remove lint formatting warnings. Picture declared as a known value.</li>

    <li> Insert menu/Machine Vision/Locate Object demo slightly improved.</li>

    <li> New method: <code>Picture.detect_blobs</code>
        See Ref Man/IO/Picture/High Level/detect_blobs</li>

    <li> New method: <code>Picture.similarity_by_detect_blobs</code>
        See Ref Man/IO/Picture/Similarity/similarity_by_detect_blobs</li>

    <li> New Insert menu/Machine Vision/Picture Similarity  demo</li>

    <li> All Picture.similarity methods now take keyword, instead of by-position args.</li>

    <li> <code>Picture.show_picture</code> dialog box now has a more informative title when
        displaying a mat, giving its type and size.</li>

    <li> Choosing Insert menu/Machine Vision/Locate Object and
        Insert menu/Machine Vision/Picture Similarity
        scrolls the doc to the appropriate method.</li>

    <li> Robot status dialog box fixed for displaying non-numbers.</li>

    <li> In the previous releases, using the arrows keys in the editor
    navigated TestSuites and Series. This conflicted with more
    conventional uses of the arrow keys for text editing operations.
    In this release, DDE's special uses of arrow keys have been switched
    to Alt- arrow key, and the conventional use of the arrow keys
    is now available.
    Test menu/Navigation and User Guide/TestSuite have been
    updated accordingly.</li>

    <li> Joint limits: Now the Dexter instructions:
       <ul><li><code>move_to</code></li>
           <li><code>pid_move_to</code></li>
           <li><code>move_all_joints</code></li>
           <li><code>pid_move_all_joints</code></li>
       </ul>
       do not error when they are passed angles that exceed the joint limits.</li>

    <li> <code>show_window</code> new parameter: resizable.
        Previously, show_windows were unresizable.
        Now you can set resizable to true (the default)
        such that existing calls to show_window are now all resizable
        by the user.
        See Doc Ref Man/Window System/show_window/resizable.</li>

    <li> Series menu/DDE/Robot/Robot subclass now inserts
    <code title="not in test suite.">new Dexter({name: "my_dex", ip_address: "192.168.1.142", simulate: null})</code>
    (added ip_address and simulate args)</li>

    <li> Jobs bar buttons now scroll horizontally if there are
        too many of them to fit in the Output pane header.
        You can still drag DDE's vertical splitter bar to the right
        to show more job buttons at a time.</li>

    <li> Fixed <code>number_similarity</code> bug for a neg and a pos number.</li>

    <li> DDE menu bar menus: now you have to click to pull them down.
         Hovering no longer does it.</li>
    </ul>
</details>

<details class="doc_details"><summary>v 2.4.1, July 7, 2018</summary>
<ul>
 <li> fixed typo in test_suites.js</li>

 <li> fixed typo in Picture1.js</li>

 <li> update pkg.json webmidi version number from  "^2.0.0-rc.7", to "^2.0.0"
    to fix octave problems in testsuite.</li>

 <li> Fixed test suite tests for Vector library poses.</li>

  <li> improved Sim pane doc slightly. (click on "Sim" in the Sim pane header.)</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.4.0, July 6, 2018</summary>
Highlights: new Picture class for machine vision. Bug fix for Vector.rotate.
<ul>
<li>Improved face reco demo to not depend on Internet connection.</li>

<li><code>string_to_literal</code> now places backquote around strings with embedded
newlines. Fixes bug in selection to test for tests returning multi-lined
results.</li>

<li>Updated numerous packages that DDE uses to their latest version
(with the same MAJOR version).<br/>
This caused an incompatibility with webmidi.
Previously, Middle C (midi pitch 60) was in octave 3.
Now it is octave 4.<br/>
    <code>WebMidi.guessNoteNumber("C4")</code> => <samp>60</samp>
This is more standard amongst musicians
that actually know what an octave is, and thus better.
Lacking still is the mistake by MIDI designers of
making Middle C being pitch number 60 instead of 48
(because 4 * 12 = 48, not 60),
but most standards have these kinds of illogic in them.</li>

<li><code>close_window</code>  Extended functionality:
If no argument is passed, the latest <code>show_window</code> is closed.
if there is no existing window specified by the argument, a warning
is printed but does not error.
See Ref Man/Window System/Window Utilities/close_window.</li>

<li> Ref Man/Robot/Dexter Instructions/move_to improved.</li>

<li> Bug in <code>Vector.rotate()</code> fixed.</li>

<li> <code>Picture</code> is a new class that's a high level wrapper for
some simpler, more common OpenCV.js use cases.
There are 34 new methods and a LOT of doc (with example calls) in<br/>
Ref Man/IO/Picture<br/>
New menu item: Insert Menu/Machine Vision/Locate Object.<br/>
Still a work in progress.</li>

<li>Inspector specializes OpenCV "mat" instances to make inspecting and viewing them easier.
  When inspecting a "mat", a "show_picture" button is displayed.
  Clicking on the button shows you the image.
  If you click on a pixel in the image, you see its
  x, y, red, green, blue values displayed in the Output pane.</li>

</ul>
</details>

<details class="doc_details"><summary>v 2.3.18, June 12, 2018</summary>
<ul>
    <li> Fixed <code>Robot.sync_point</code> and all calls to <code>Job.insert_instruction</code>
        to better handle being called inside of a loop.</li>

    <li> Fixed <code>Robot.break</code> instruction to properly handle skipping past end of loop
        when the loop body has nested instructions.</li>

    <li> Improved doc for <code>Control.go_to</code></li>

    <li> Improved doc for <code>Job.insert_instruction</code></li>

</ul>
</details>

<details class="doc_details"><summary>v 2.3.17, June 11, 2018</summary>
<ul>
    <li> <code>isLeafObject</code> new newObject system method.
        See Ref Man/Object System/New Object System Methods/isLeafObject</li>

    <li> <code>leafObjectNamed</code> new newObject system method.
        See Ref Man/Object System/New Object System Methods/leafObjectNamed</li>

    <li> Added to Edit menu: <b>Find Next</b> and <b>Find Prev</b> to
        find next and previous instances of the search term</li>

    <li> Improved tool tips for Find and Replace menu items.</li>

    <li> Fixes for infinite looping bug over
        <code>wait_until</code> and <code>sync_point</code> instructions.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.3.16, June 4, 2018</summary>
    Highlights: Face Recognition example added. Dexter.read_from_robot fixed. EzTeach fixed.
    <ul>
<li> Job simplest example, <code>Dexter.move_all_joints</code>
    call is now more normal call format of
     being passed 1 array of 5 numbers.</li>

<li> <code>array_to_csv</code> improved formatting of its ref man example.</li>

<li> <code>Dexter.read_from_robot</code> bug fixed.

<li> Documented <code>Dexter.read_from_robot</code></li>

<li> <code>Serial</code> Job example: fixed typo.</li>

<li>  <code>make_ins("I"...)</code> instruction:
       got rid of warning message
       which is generated by Serial.string_instruction.</li>

<li> Minor improvement to Ref Man <code>Serial</code> robot doc.</li>

<li> User Guide/Installation new section: <b>Windows 10 Problem</b>
about how to work-around a recent change to Windows 10
that prevented DDE launch.
Added to Github release notes as well.</li>

<li>  Fixed bug in inspect when looking for 'objectPath' on objects
    that don't have one.</li>

<li>  insert menu/Machine Vision/Face Recognition is a new demo
       with comments on how to use it.</li>

<li> Blob Detector Demo:<br/>
fixed bug in initial loading with the "image" not being ready to be processed.<br/>
fixed spelling in documentation<br/>
fixed the two columns from jumping around because they were vertically "centered".
now their tops are always at the top of the window.
</li>

<li> EZTeach A bug has been fixed.</li>

<li> <code>kin.move_to_straight</code>
   had an erroneous fourth arg that previously did not do anything.
However a fourth arg was added to kin.xyz_to_jangles which caused it to error.
This fourth arg has been removed.
This bug is not expected to come up anywhere else.</li>

<li> Made <i>Show robot status</i> more robust in the face of potentially
unexpected non-numerical inputs to the table. (changed calls to toFixed)</li>


<li><code>Dexter.dummy_move</code>, bug fixed that prevented
   Dexter.dummy_move from working if
your job's robot wasn't named "my_dex".
From James W. It looks like Dexter.dummy_move() is broken on the DDE side.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.3.15, May 11, 2018</summary>
    Highlights: numerous bug fixes, minor other improvements.
<ul>
    <li>Updated jqxwidgets to latest version (was over a year old)</li>

    <li> fixed click help for Array functions.</li>

    <li> fixed Robot.loop so that jobs containing it can be restarted successfully.</li>

    <li> dxf drawing characters now supports period and comma.</li>

    <li> improved error message when a Job is started with an empty do_list.</li>

    <li> click_help supported for <code>window</code>.</li>

    <li> click_help supported for <code>--</code>. (decrement)</li>

    <li> numerous other little fixes to click_help including "Job".</li>

    <li> Improved error message printing for show_window handler function.</li>

    <li> documentation for <code>out</code>'s "code" argument fixed and extended.</li>

    <li> <code>out</code>'s "val" argument's default value changed from undefined to ""</li>

    <li> Dexter.write_to_robot changed max_content_chars from 252 to 244.</li>

    <li> A job's button tooltip tells you the instruction number
        (Job Program Counter) that its currently at.</li>

    <li> When a job reaches a wait_until instruction the job's button tooltip is
        more explicit.</li>

    <li> Robot.wait_until, fixed bug when you pass a Duration instance
    as wait_until's argument.</li>

    <li> Doc for Ref Man/Robots/Dexter/new Dexter parameters extended
        with an example of:
        new Dexter({name: "my_dex",
        simulate: true,
        ip_address: "192.186.1.142",
        port: 50000 //the default
        })</li>

    <li> Robot.wait_until instruction now can take a Job as an instance.
         The job containing the wait_until instruction waits until
         the passed in Job completes (or errors).</li>

    <li> Extend Robot.start_job to take another arg: wait_until_job_done (default false)
        if true, the job containing the Robot.start_job instruction pauses until
        the designated job is finished.
        Now we can make a sequence of jobs in another job,
        a la
        new Job({do_list: [ Robot.start_job("a"), Robot.start_job("b")}
        and have b be started after a is done.</li>

    <li> fixed typo in "Overview" article.</li>

    <li> bug fix: Dexter.write_to_robot  escapes written characters properly.
          needs new files on Dexter to work properly.</li>

    <li> Fixed minor text in recognize_speech ref man doc.</li>

    <li> When defining a job, invalid initial instructions are now
         caught, rather than waiting until the job is started.
         Doc pane automatically scrolls to the "do_list" documentation.</li>

    <li> Expanded doc in Ref Man/Job/new Job paramaters/do_list</li>

    <li> New instruction: Dexter.write_to_robot writes a file to Dexter.
        See Ref Man/Robot/Dexter/Dexter Instructions/write_to_robot
        example file arg:
        "/srv/samba/share/AdcCenters.txt"
        but in the ViewEyeRealTime.js its
        path =  "//" + ip_address + "/share/AdcCenters.txt"</li>

    <li> User Guide "Debugging" section extended with "Click on Delimiter"
         and a bit of reorganizing for easier access.</li>

    <li>Added a warning in: Editor.restore_files_menu_paths_and_last_file
        if it can't find dde_persistent.json file.</li>

    <li>  DDE now always opens the chrome dev tools window at the beginning
         of the launch process.</li>

    <li>Job.start sets "starting" status earlier and colors job button accordingly
       job button is now a pale green during "starting".</li>

    <li> fixed bug in EasyTeach with workspace pose.</li>

    <li> While running a job, if there is an error in a user defined function
    (and some other possible errors) they are now caught and
    the job terminates properly turning the job button red
    and showing an error message in the tooltip relating to the cause.</li>

    <li> improved formatting of sync point job example.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.3.14, Mar 18, 2018</summary>
    Highlights: Dexter.pid_move_to updated.
    <ul>
        <li><code>Dexter.pid_move_to</code> updated to the improvements for move_to
            in release 2.3.13.</li>
    </ul>
</details>

<details class="doc_details"><summary>v 2.3.13, Mar 18, 2018</summary>
Highlights: move_to defaulting args fixed.
<ul>
    <li>Fixed bugs in <code>Dexter.move_to</code> clever defaulting of args.</li>
    <li>Fixed bugs in Job with new param: <code>default_workspace_pose</code>.</li>
    <li>Kin bug fixed.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.3.12, Mar 17, 2018</summary>
Highlights: Dexter.move_to extensions
<ul>
<li>Dexter.move_to 2nd argument (J5-direction) can now take
   additional types.</li>

<li>Dexter.move_to 4th argument is now workspace_pos.</li>

<li>Extended doc in ref man/Robot/Dexter/Dexter Instructions/move_to/J5_direction
    and workspace_pose</li>

<li>Extended doc in ref man/Job/new Job parameters/default_workspace_pose</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.3.11, Mar 12, 2018</summary>
Highlights: Kin test suite fixed. Coor improvements.
<ul>
<li> Bugs in Kin.js test suite fixed.</li>

<li> Defaults added to Coor.move_points_to_coor() and Coor.move_vectors_to_coor()</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.3.10, Mar 12, 2018</summary>
Highlights: Kinematics improved, dxf drawing extended,
  error messages & click help improved.
<ul>
<li>The bottom horizontal scroll bar in the output pane is now visible.</li>

<li> Warning message improved to:
"DDE can't reach the web to check for the latest release."</li>

<li> click_help: made "in_a_comment" lower priority, for more useful information.</li>

<li> For a long time, a Job being created with a name of null (the default),
meant that a new unique name would be generated a la "job_123".
Now, in addition to null, "" (the empty string) can be passed
for the name param. Furthermore, "" is the new default.
This provides more useful click help since the default value
is of the same type as a normal value, i.e. a string.</li>

<li> make_dom_elt improved warning message when a property is both HTML and CSS.</li>

<li> Kinematics: cartisian computations improved, affecting move_to instruction.</li>

<li>Dexter.draw_dxf extended to handle: LWPOLYLINE</li>

<li>click help for Job, Dexter and Serial improved with more accurate
calling syntax. (replaced "=" with ":")</li>

<li> Errors in a show_window handler function are now caught and displayed.</li>

<li>Many other error messages that are dispalyed with calls to <code>dde_error</code></li>
</ul>
</details>

<details class="doc_details"><summary>v 2.3.9, Feb 12, 2018</summary>
Highlights: Bug fixes and UI tweaks.
<ul>
    <li>Fixed output pane height to compute itself for the available space.
        Now you can drag the splitter bar between the editor pane up and
        the output pane and the OUTPUT (lower) portion of the output pane
        will always fill up all the available space.</li>

    <li> Calibration Start buttons J1 thru J4
        now have tooltips of:<br/>
        "Expect a circle of points to be drawn counter-clockwise."</li>

    <li> Calibration Start button J5
        now has a tooltip of:<br/>
        "Expect a circle of points to be drawn clockwise."</li>

    <li> J3 UI section now has the min angle value on the left,
        and the max vale value on the right, just
        like the other joints.</li>

    <li> File menu item of "Save As..." given a more complete tooltip of:<br/>
        <i>Save the current editor content under a new name.<br/>
        The old file remains unchanged.<br/>
        It will remain on the list of files.</i></li>
</ul>
</details>

<details class="doc_details"><summary>v 2.3.8, Feb 9, 2018</summary>
Highlights: Fix for Dexter's "jitters" and 6 other bug fixes.
<ul>
    <li>In Dexter's modes, pidBase changed to prevent oscillations.</li>

    <li>Robot.start: at beginning of a job, if a 'ping' to Dexter
    is successful, wait 500ms before sending instructions to give
    Dexter initialization a chance to complete.</li>

    <li> <code>Dexter.set_parameter("MaxSpeed", 0)</code> (or less)  causes an error.
        (but not in low level make_ins calls)</li>

    <li> <code>Dexter.set_parameter("MaxSpeed", 0.0000001)</code> warns:
        Dexter.set_parameter called with MaxSpeed of: 0.0000001
        which is too low.
        MaxSpeed set to the minimum permissible speed of:
        0.00012895346330171073</li>

    <li> <code>Dexter.set_parameter("StartSpeed", -1)</code> now errors immediately.
         0 is ok but less than 0 causes an error.</li>

    <li> If a Job attempts to start that has a robot that is in use
        by another job, the 2nd job errors.</li>

    <li> Increased the likelihood that the last file edited
        will be the file that comes up in the editor when you launch dde.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.3.7, Feb 7, 2018</summary>
 Highlights: Calibration bugs fixed, Dexter connectivity checked,
 Extra Units series help
<ul>
    <li> <code>make_dom_elt</code> is now documented.
        It and <code>make_html</code> are now in the 'window' series.</li>

    <li>Now, before instructions are sent to a Dexter,
        it is pinged. If it responds, the instructions are sent.
        If not, the job errors with an instructive error message.</li>

    <li> Now when you choose Series menu/Units System/any item
        besides Help and temperature,
        in addition to the usual insertion of the first series item
        and a line in the output pane about it,
        a <i>second</i> line in the output pane lists all the units in the
        series you've selected.
        The tooltip on each item gives you details about it.
        Clicking the item itself inserts the
        item in the editor, preceded by "*".
        This is an experimental feature.</li>

    <li> Calibration has some connectivity bugs fixed.</li>
</ul>
</details>
<details class="doc_details"><summary>v 2.3.6, Jan 31, 2018</summary>
Highlights: Calibration bug fixes. First pass fix for connectivity
   while Dexter is booting bug.
<ul>
    <li> Fixed make_html_test_suite.js last test</li>

    <li> Fixed test_suites.js is_integer (last test) AGAIN.</li>

    <li> Formatting improvement for test report on a testsuite with multiple errors.</li>

    <li> Fixed to_source_code methods for instructions when not passed "indent".</li>

    <li> <code>make_html</code> fixed bug with style property ending quote.</li>

    <li> New utility <code>make_dom_elt</code>  takes same args as make_html,
        but returns a dom elt.</li>

    <li> HTML DB, added the previously omitted
         "on" html properties (about 80 of them)</li>

    <li> html_db fixed omission in html properties. Now allows "data-*" props.</li>

    <li> Minor fixes to Object system doc.</li>

    <li> Extended User Guide/UI Design Criteria.</li>

    <li> <code>Job.inter_do_item_dur</code> had a mistake in the documentation.
        It said this was in milliseconds, but its actually seconds.
        There was another error in recording the default value
        that might have affected something else.
        Both fixed.</li>

    <li>Better formatting for data output from exTeach to make it much
        more human readable.</li>

    <li><code>newObject.callPrototypeConstructor</code> fixed infinite recursion bug.</li>

    <li>Extended Ref Man/IO/Sound/Music With Midi/Connecting Midi Apps/
      On Windows OS  with better doc from Github issue #16, now closed.</li>

    <li>The example for "beating" with
        <code>beep({frequency: 440,   dur: 10})</code>
        has its dur increased from 1 to 10 to make the effect more obvious.</li>


    <li> Calibration fixes for attempting to use dexter0 when it shouldn't be.</li>

    <li> First pass at fixing connectivity to dexter while its booting.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.3.5, Jan 19, 2018</summary>
Highlights: Bug fixes and a few internal mods.
<ul>
    <li> Improvements to Ref Man/Robot/Robot Instructions/Any Start Object</li>

    <li> Extended the Insert Menu/show_window/svg menu item label
         with the suffix "(2D drawing)" just in case uses don't know
         what svg means.</li>

    <li> show robot_status dialog now prints the bulk of the numbers
        as having exactly 3 digits to the right of the decimal point
        and right-justifies the number so that the decimal points
        of the cells in a column will line up.
        This should also reduce the dynamic changing of the width of
        a column as a robot is moving.
        May still need improvement. Feedback welcome.</li>

    <li> Bug fix to the Kinematics "vector.add" bug.
         Removed "known issue" about this bug.
    </li>

    <li>Kinematics: Singularity error message updated to check if
         link length are in correct units.</li>

    <li> Fixed release date (2.3.4 wrongly had Jan 20) </li>

    <li> Fixed test suite for is_integer </li>
</ul>
</details>

<details class="doc_details"><summary>v 2.3.3, Jan 16, 2018</summary>
Yet another attempt to fix the Windows 10 "OneDrive" bug.
</details>

<details class="doc_details"><summary>v 2.3.2, Jan 15, 2018</summary>
Highlights: Windows 10 OneDrive bug fix
<ul><li> Improved User Guide doc on the Eval button.</li>

    <li> Another attempt to fix Windows 10 OneDrive bug.</li>
</details>

<details class="doc_details"><summary>v 2.3.1, Jan 15, 2018</summary>
Highlights: Fixes for Calibrate and maybe Windows "OneDrive" bug.
<ul>
    <li> Fix for calibrate "merge" problem of ViewEyeRealTime.js </li>

    <li>Maybe fix, (needs testing) bug on windows with OneDrive
        and defining <code>dde_apps_dir</code>.</li>


    <li> New example for <code>show_window</code> that uses <code>make_html</code>
       In Ref man/Window System/show_window.</li>

    <li> Explanation in the special error message for <code>shouldnt</code> calls.</li>

    <li> Now, when there is a selection in
        both editor and non-editor, the <button>Eval</button> button,
        uses the non-editor selection
        as that was made most recently.</li>
</ul>
</details>
<details class="doc_details"><summary>v 2.3.0, Jan 15, 2018</summary>
Highlights: Robot.loop instruction, make_html function, Step button,
            Calibration improvements
<ul>
    <li> Minor improvement in testSuite reporting for bad "expected source".</li>

    <li> Running all tests now warns you to expect 2 unknown and 1 known
         error in the first test suite.</li>

    <li> <code>to_source_code</code> for <code>Note</code> and <code>Phrase</code> now implemented and in test suite,
         fixing the test suite errors they had caused.</li>

    <li> Bug fix to <code>to_source_code({value: a_fn})</code></li>

    <li> Improved tooltip on the Command Line.</li>

    <li> new instruction: <code>Robot.loop</code> See Ref Man/Robot/Robot.instructions/loop</li>

    <li> new instruction: <code>Robot.break</code> for use with Robot.loop. See Ref Man/Robot/Robot.instructions/break</li>

    <li> New menu item: Job menu/Insert Example/Robot.loop
        Choosing this example inserts 6 loop example jobs AND
        scrolls to the Robot.loop documentation in the Ref Man.</li>

    <li> The instruction <code>"debugger"</code> has been replaced with <code>Robot.debugger()</code>
        This makes DDE API more consistent with itself, and makes the
        implementation more modular.
        This is an incompatible change, but since "debugger" instructions
        are necessarily temporary, this won't affect perminent Job definitions.
        See Ref Man/Robot/Robot Instructions/debugger</li>

    <li> New <button>Step</button> button in Output pane to left of <button>Eval</button> button.
        Just like Eval button, but steps through the selected code instead.
        Reduces need to insert <code>debugger;</code> in your code AND
        need to set breakpoints in Chrome Dev Tools.<br/>
        Opens Chrome Dev Tools automatically<br/>
        See new doc in User Guide/Debugging/Stepping</li>


    <li> New doc: Ref Man/Robot/Dexter/Dexter instructions/move_all_joints/Dexter Positive Joint Direction    Diagrams.</li>

    <li> Extended calibration with better error message when the view eye goes in the working direction.</li>

    <li> New Doc section: User Guide/Calibrate Dexter/Calibrate Optical Sensors/Troubleshooting</li>

    <li> Fixed calibration dialog box to be able to take advantage of selecting
          which Dexter you're calibrating.</li>

    <li> Updated opencv.js to the latest version.</li>

    <li> New function: <code>make_html</code><br/>
        Advantages:
     <ol><li>Just js syntax. You don't have to know HTML & CSS punctuation.</li>
         <li>Easier to embedded computed values into the HTML. (better than string concat)</li>
         <li>Don't have to remember what's an html attribute and what's a style.</li>
         <li>Error checking for html tags, attribute names and style names which
             browsers don't do.</li>
    </ol>
    See Ref Man/Window System/make_html</li>

    <li> 3 new series': html_tags, html_property, css_property.
        New item on Series menu: HTML that has a submenu of all 3.
        Click help on each item has extensive links to doc for each.</li>

    <li> Improved Output pane printing of literal strings by removing
        backslash in some cases.</li>

    <li> Removed the undocumented utility fn <code>own_properties</code> because its behavior is
        the same as standard JS <code>Object.getOwnPropertyNames(an_object)</code>
        This is an incompatibility, but a slight one. Any users that
        happened to use own_properties will get an error as soon as its called,
        and can find the standard JS fn Object.getOwnPropertyNames.
        own_properties was not used within DDE before this so
        its need is probably quite uncommon.</li>

    <li> New utility function: <code>intersection</code>.</li>

    <li> Added "inspect" to known function for syntax linting.</li>

    <li> Improved User Guide/Configure Dexter/Data Connection for MacOS.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.2.10, Dec 26, 2017</summary>
    Highlights: show_window & Human.enter_number extensions.
                New User Guide section: UI Design Criteria
                new instruction Human.speak
<ul>
    <li> show_window, default callback inspects the arg passed
    to the callback, allowing you to see more of its values and
    in a better format.</li>

    <li> show_window has new way to initialize a show_window after its popped up.
        See Ref Man/Window System/show_window/init_elt_id.</li>

    <li> Now show_window, just after its called, gets the keyboard focus
    so that typing a char won't go into the editor.</li>

    <li> Documented the "click" method in Ref Man/Window System/click</li>

    <li> updated Insert menu/Machine Vision/Blob Detector to
        use init_elt_id, improved formatting.</li>

    <li> Human.enter_number now displays the min and max values automatically.</li>

    <li> Human.enter_number If you type in an out of range number, it
         tells you and let's you fix it.</li>

    <li> New User Guide Section: User Interface/UI Design Criteria.</li>

    <li> new instruction:
        Human.speak("some text") that says the text before moving on to the next
        instruction. See RefMan/Robot/Human/Human Instructions/speak.</li>

    <li> Though there have been some significant extensions to
         speech_recognition in this release, it is not now working.</li>

</ul>
</details>

<details class="doc_details"><summary>v 2.2.9, Dec 8, 2017</summary>
Highlights: CSV conversion for DDE reading and writing spreadsheets.
FindHome calibration improved but still a work-in-progress
<ul>
    <li> "dde_error" and "dde_version" defined for lint.
    <li>  Ref man "operating_system" now documents that
         Ubuntu OS has the value "linux".

    <li> Human.enter_number now errors if the initial value
        is less than the min or more than the max.

    <li> show robot_status dialog expanded so you don't have
        to scroll to see it all

    <li> new functions array_to_csv and csv_to_array
        for converting between JavaScript arrays and
        common-separated-value strings that are used
        by spreadhsheets and other programs.
        See Ref Man/IO/CSV

    <li> extended user Guide/Configure Dexter/Data Connection/Ping
        about trouble shooting with an IP scanner.

    <li>  FindHome button on the Calibrate window improved.
          At the very least, the doc for this is incomplete,
          though it has been extended in User Guide/Calibrate Dexter/Find Home


</ul>
</details>
<details class="doc_details"><summary>v 2.2.8, Dec 1, 2017</summary>
Highlights: Bug fixes for Calibrate, FindHome. Doc improvements
<ul>
    <li> DDE now saves the editor buffer when you quit with the save checkbox checked.
         (this was in the 2.2.7 release but I forgot to put it in the release note.)</li>

    <li> Documented a software music synthesizer for Windows OS in
          Ref Man/IO/Sound/Music with MIDI/Synthesizers</li>

    <li> <code>close_window</code> can now take the title of a window to close.</li>

    <li> <code>cshow_window</code> has a new init option: close_same_titled_windows
      default <code>true</code>. See Ref Man/Window System/show_window/close_same_titled_windows</li>

    <li> calibrate sped up by reducing the updating of joint angles in the display.</li>

    <li> new calibrate algorithm.</li>

    <li> FindHome button in Calibration dialog now
    uses the Robot that is set at the top of the
    Calibration dialog.</li>

    <li> User Guide/Configure Dexter/Data Connection re-written
    to remove the WiFi connectivity and indicate
    the problem of connecting a Mac that doesn't have
    a direct Ethernet socket.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.2.7, Nov 21, 2017</summary>
Highlights: Bug fixes, including calibrate optical encoders
<ul>
    <li> <code>to_source_code</code> top level now can take just a data without ({value: data}),
        ie to_source_code(3)  works just like to_source_code({value: 3})</li>

    <li> Fixed bug in inspection of Notes and Phrases.</li>

    <li> DDE main window now has a title suffix of the version number.</li>

    <li> Fix for calibrate optical encoders not doing anything.</li>

    <li> Fixed 2 example code Jobs in Ref Man/Robot/Robot Instructions/Any Array of Instructions</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.2.6, Nov 21, 2017</summary>
Highlights: Bug fixes and improved doc.
<ul>
    <li> Fixed release notes formatting that caused
         hiding of know issues and other release notes at top level under
         release notes.</li>

    <li> More explicit error messages when the "Dexter.move_" instructions
         are out of range.</li>

    <li> When a job is defined that has a job of that definiton active,
          that active job is stopped automatically.
          The time allowed for that job to stop
          was 3 times the inter_do_item_dur. Now its 200ms.</li>

    <li> Fixed simulator joint 5, changed sign.</li>

    <li> "B" oplet added. "set_boundries"</li>

    <li>  New section of ref man: Robot/Robot Instructions/Any Array of Instructions</li>

    <li> Inspector: improved printing of 2D arrays.</li>

    <li> 5 Informative and pretty pictures on coordinates added to
         Ref Man/Dexter/Dexter Instructions/move_to</li>

    <li>  If the save (on eval) checkbox is checked and the user quits the application,
          the current file is saved.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.2.3, Nov 16, 2017</summary>
Highlight: Calibrate fixes, Convert v1 to v2 doc more complete.
<ul>
    <li> Calibrate button: "Start FindHome" bugs fixed, now functional.</li>

    <li> Calibrate ui, small fixes</li>

    <li> Minor syntactic bug in Kin.js in a TestSuite fixed.</li>

    <li> Extended Convert v1 to v2 in DDE 2.2.2 to be more complete.</li>

    <li> inter_do_item_dur: changed from 0.91 to 0.001 (1 millisecond.</li>
</ul>
</details>
<details class="doc_details"><summary>v 2.2.2, Nov 15, 2017</summary>
Highlights: Bug fixes in calibrate, support for converting code from DDE 1 to DDE 2.
          New insructions: Robot.unsuspend, Human.enter_filepath
<ul>
<li>Completed implementation of to_source_code methods for do_list Instructions.</li>

    <li> to_source_code "original_do_list" param renamed to "job_orig_args" (more accurate).
    </li>

    <li> start_job can now take a job in addition to a job_name for its first arg.</li>

    <li> Robot.suspend can now take optional args job_name (string or job instance) and "reason" string arg.
reason is displayed in job button tooltip when job is suspended.
See Ref Man/Robot/Robot Instructions/suspend</li>

    <li> New Instruction: Robot.unsuspend. takes Job_name of job to unsuspend.
        Compliments Job instance method "unsuspend".
        See Ref Man/Robot/Robot Instructions/unsuspend.</li>

    <li> New instruction: Human.enter_filepath
        See Ref Man/Robot/Human Instructions/enter_filepath</li>

    <li> Now the DDE documentation points to all the DDE webinar videos from
        the appropriate places.</li>

    <li> Human instructions: Changed The label on the "DONE"/Submit button to
        "Continue Job" title="Close dialog box and\ncontinue this job"
        For the cancel button, changed label to
        "Stop Job" add tooltip: title="Close dialog box,\nstop this job and all dependent jobs."</li>

    <li> Fix to calibrate math and ui colored center dots from James W.
        FindHome button at bottom now is horizontal so takes up less vertical space.</li>


    <li> [ ].micron()
        Returns a new array.
        All numbers in the input array are assumed to be in microns.
        Those numbers are converted to meters in the output array
        by dividing them by 1 million.</li>

    <li> [ ].arcsec()
        make_ins("a", 36000, 36000, 36000, 36000, 36000).arcsec()
        make_ins("P", 36000, 36000, 36000, 36000, 36000).arcsec()
        If the array is an instruction array with an oplet of "a" or "P" then
        convert its 5 angles to degrees
        else convert all numbers to degrees.
        Returns a new array, does not modify the input array.</li>

    <li> New function Kin.xyz_to_J_angles_v1() args in v1 format, return value in v1 format
        very similar to Kin.xyz_to_J_angles except that
        the args are in DDE v1 format, ie microns.</li>

    <li> New function Kin.J_angles_to_xyz_v1() args in v1 format.
         Return value in v1 format.</li>

    <li> New variables:<br/>
        Dexter.LINK1_v1 = Dexter.LINK1 * 1000000 //in microns<br/>
        Dexter.LINK2_v1 = Dexter.LINK2 * 1000000 //in microns<br/>
        Dexter.LINK3_v1 = Dexter.LINK3 * 1000000 //in microns<br/>
        Dexter.LINK4_v1 = Dexter.LINK4 * 1000000 //in microns<br/>
        Dexter.LINK5_v1 = Dexter.LINK5 * 1000000 //in microns<br/></li>

    <li> Convert v1 to v2 extended in new doc:<br/>
        "Convert v1 to v2 in DDE 2.2.2"
        This is now a top level, "special" release notes doc.</li>

</ul>
</details>
<details class="doc_details"><summary>Convert V.1 to V.2 in DDE 2.2.2</summary>
DDE Jobs written in DDE version 1 will likely break in DDE version 2 because
we have changed the default units for:
<ul><li><b>angles</b> from arcseconds to degrees.<br/>
    There are 3600 arcseconds in 1 degree.<br/>
    Affects instructions:<br/>
    <code>Dexter.move_all_joints</code>,<br/>
    <code>Dexter.move_all_joints_relative</code>, <br/>
    <code>make_ins("a" ...)</code><br/>
    <code>make_ins("P" ...)</code><br/>
    The <code>Dexter.set_parameter</code> names that contain <code>Boundry</code>
    have changed from referring to arcseconds to referring to degrees.</li>
    <li><b>lengths</b> from microns to meters.<br/>
        There are 1 million microns in a meter.<br/>
        Affects instructions:<br/>
        <code>Dexter.move_to</code><br/>
        <code>Dexter.move_to_relative</code><br/>
        <code>Dexter.LINK1</code> thru <code>Dexter.LINK5</code></li>
    <li><b>durations</b> from milliseconds to seconds <br/>
        There are 1 thousand milliseconds in a second.<br/>
        Affects<br/>
         <code>Robot.wait_until</code> when passed a number,<br/>
        <code>Dexter.sleep</code> instruction<br/>
        Job's <code>inter_do_item_dur</code> parameter,<br/>
        all of which now expect durations in seconds.<br/>
        Note that inter_do_item_dur's default has also changed from 100 milliseocnds
        to 10 milliseconds, (now represented as 0.01 seconds)
         which should increase job running speed slightly. <br/>
        The <code>Dexter.set_parameter</code> names of <code>MaxSpeed</code>, <code>StartSpeed</code>,
        <code>Acceleration</code> have also changed into now being "seconds" based.
    </li>
</ul>
To convert your Jobs to the new units, search for each of the names
in white above and adjust their arguments accordingly. If you want
to preserve the actual numbers, you can leave them in place but
enter a "conversion suffix" after them using our new Ref Man documented
<a href="#" onclick="DocCode.open_doc(units_system_help_doc_id)">Units System</a>
<p></p>
    <b>A Step by Step Conversion Process</b><br/>
    DDE code  from v1 to v2:
    <ul><li>Search for all "move_all_joints(" and "move_all_joints_relative"<br/>
            Add suffix to first arg like so:<br/>
             Dexter.move_all_joints([1, 2, 3, 4, 5].arcsec())<br/>
             arcsec() makes a copy of the array with the arcseconds
             converted to degrees.
             Note for calls like<br/>
            move_all_joints(1, 2, 3, 4, 5) it's easiest to change them to:
        move_all_joints([1, 2, 3, 4, 5].arcsec())
             </li>
        <li>When the code is READING values out of robot_inst.robot_status
            (user code shuld never write robot_status)
            most of the values will be angles that must be converted from degrees
            into arcseconds. These are
            <pre>
            "J1_ANGLE",            // BASE_POSITION_AT           10
            "J1_DELTA",            // BASE_POSITION_DELTA        11
            "J1_PID_DELTA",        // BASE_POSITION_PID_DELTA    12
            "J1_FORCE_CALC_ANGLE",            // BASE_POSITION_FORCE_DELTA  13
            "J1_MEASURED_ANGLE",   // actual angle from Dexter   19
            for all 5 joints.
            </pre>
            a la robot_inst.robot_status[Dexter.J1_ANGLE]*_arcsec or
            [robot_inst.robot_status[Dexter.J1_ANGLE],
             robot_inst.robot_status[Dexter.J2_ANGLE],
             robot_inst.robot_status[Dexter.J3_ANGLE],
             robot_inst.robot_status[Dexter.J4_ANGLE],
             robot_inst.robot_status[Dexter.J5_ANGLE]
             ].arcsec()
            </li>

        <li>Add to make_ins("a" ...) a suffix like so:<br/>
            make_ins("a" ...).arcsec()</li>

        <li>Add to make_ins("P" ...) a suffix like so:<br/>
            make_ins("P" ...).arcsec()</li>

        <li>Search for all "move_to(" and "move_to_relative("<br/>
            Add suffix to first arg like so:<br/>
             Dexter.move_to([1, 2, 3].micron() ...)<br/>
             micron makes a copy of the array with all numbers
             converted from microns to meters.
        </li>

        <li>Replace Kin.xyz_to_J_angles with Kin.xyz_to_J_angles_v1</li>

        <li>Replace Kin.J_angles_to_xyz() with Kin.J_angles_to_xyz_v1()</li>

        <li>Convert Dexter.LINK1 to Dexter.LINK1_v1.<br/>
            Same for  LINK's 2 through 5.</li>

        <li>Convert calls like:<br/>
            Robot.wait_until(1234) to <br/>
            Robot.wait_until(1234*_ms) or <br/>
            Robot.wait_until(1.234)
            Note that wait_until takes several OTHER types for its
            input arg that shouldn't be changed, but if
            it has as number, that number should be in seconds.
            </li>
        <li>Convert calls Dexter.sleep smilarly to wait_until
            except that sleep <i>only</i> take a number
            of seconds as its one required arg.</li>
        <li>In calls to <code>Dexter.set_parameter</code>,
           when its first arg is <code>"MaxSpeed"</code>, <code>"StartSpeed"</code> or
            <code>"Acceleration"</code>, add a suffix to the second arg like so:<br/>
            Dexter.set_parameter("MaxSpeed", 30000 / _nbits_cf)<br/>
            or the third arg in:<br/>
            make_ins("S", "MaxSpeed", 30000 / _nbits_cf)
        </li>
        <li>
            In calls to <code>Dexter.set_parameter</code>,
            when its first arg is <code>"J1BoundryHigh"</code>, <code>"J1BoundryLow"</code>
            change the call to be:<br/>
            Dexter.set_parameter("J1BoundryHigh", 648000*_arcsec) or<br/>
            make_ins("S", "J1BoundryHigh", 648000*_arcsec)
        </li>
        <li>Calls to Kin.angles_to_direction are now unnecessary.
           <pre>
            Change:
            J5_dir = Kin.angles_to_direction(GripperPossition[2], GripperPossition[3])
            movCMD.push(Dexter.move_to(oldPoint.micron(), J5_dir))
            To:
            J5_dir = [GripperPossition[2], GripperPossition[3]]
            movCMD.push(Dexter.move_to(oldPoint.micron(), J5_dir))
           </pre>
        <li>Change calls to making a new Job that use parameter <code>inter_do_item_dur</code>
            like so:<br/>
            new Job({inter_do_item_dur*_ms} ...)</li>
    </ul>
    This process is only for code that originally ran in DDE 1.
    Mixing DDE 1 and DDE 2 code is much more complex.<br/>
    Numbers to be converted must be converted exactly once.
    Converting a number more than once will cause a bug.
    Sticking to the above process helps convert numbers exactly once,
    but code can be complex so this process is not a guarantee of success.
</details>
<details class="doc_details"><summary>v 2.2.1, Nov 10, 2017</summary>
Highlights: Calibrate dialog improved, generators in Jobs functionality expanded.
<ul><li> User Guide/Configure Dexter/Verify Joint Wiring:  fix for the picture no showing up.</li>

    <li> Small graphical improvements to Machine Vision "blur" example.</li>

    <li> Click help for "for": changed "var" to "let".</li>

    <li> Simplified syntax for the First Job generator example.</li>

    <li> Major improvements to Calibrate dialog.
        See User Guide/Calibrate and tooltips in the Calibrate Dialog.</li>

    <li> Improved Ref Man/IO/File Access/choose_save_file and write_file documentation</li>
    <li>  Generators: extended so that a Job now handles all 4 cases of
           generator iterations, ie keep generator alive with or without an instruction to add and
           kill generator with or without a final instruction to add.</li>

    <li> New last example Job in Jobs/Insert Example/Generators
         demonstrating the new generator options.</li>

    <li> Fixed bug in defaulting arguments for move_all_joints</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.2.0, Nov 7, 2017</summary>
Highlights: Machine Vision Blob Detection, Testsuite on do_list,
hierarchical do_list improvements, simulator joint angle fix.

<ul><li>Fix for Job.prototype.total_sub_instruction_count improves
        hierarchical do_list display and processing.</li>

    <li> added_items_count initialized to the length of the do_list in Job.start.
        Better for the do_list display of sub-items.</li>

    <li>Hierarchical do_list display now has a black border surrounding the item
        at the Job's program counter.</li>

    <li> Start Job button in Output pane header: Lots of fixes
        including select isolated instruction and run it.
        See functionality in
        User Guide/user Interface/Output Pane/Start Job Button
        or just click on the Output Pane header "Output" title.</li>

    <li>  show_window() with no args now pops up an empty window rather than error.</li>

    <li> Inspector:New title "INSPECTing" so that you know "this is the inspector".</li>


    <li> Inspector: Changed The refresh circle icon into a button named "Refresh" to make it more obvious.</li>

    <li>  TestSuite now a start_object and has a method "start" to run an instance of a testsuite.
            After an instance is run, it will have properties
            known_failures, unknown_failures,
            bound to a non-neg integers of the failure count,
            and  report, a string of HTML about the failures.</li>

    <li>New Jobs menu/Insert Example/TestSuite in Job</li>

    <li>Improved/added toString for Job, Brain, Human, Serial, Dexter, Duration, Note, Phrase</li>

    <li> new Menu item: Insert/Machine Vision/Blob Detector
        updated to opencv.js 1.2.1</li>

    <li> Documented in Ref Man/Robot/Robot Instructions/Any Start Object
        all the start objects including: jobs, notes, phrases, TestSuites
        Documented in User Guide/TestSuite that its a start object.</li>

    <li>  show_window, HTML input elements of type "range" now automatically
        have their values passed into the callback function as numbers,
        rather than strings of numbers.</li>

    <li>  Documented how to get a show_window's callback function to be called
        as soon as an input element's value is changed.
        See Ref Man/Window System/show_window/onchange.
        Improved doc for Insert menu/show_window/onchange calls</li>

    <li>Bug fix for rendering of Joint 1, changed the sign of the angle.</li>

    <li> Music: added Ref Man/IO/Sound/Music with MIDI/Connecting MIDI Apps</li>

    <li> New submenu: Insert/Music/ with Help, Phrase Examples, Midi.init().</li>

    <li> New documentation section in User Guide/Configure Dexter/Verify Joint Wiring</li>

    <li> Fixed a couple bugs in the TestSuite obj_sys_js_fns_on_new_objects2</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.1.14, Nov 1, 2017</summary>
<ul>
    <li> Fixed bug in do_list hierarchy.</li>
    <li> Fixed bug in new move Instructions,  instance creation</li>
    <li> Inspect: changed circle-arrow icon to more obvious "Refresh" button.</li>
    <li>Added "INSPECTing" in title to indicate what the "tan" region in output pane is.</li>
    <li> Inspect: fixed bug in lookup of stack_position</li>
</ul>
</details>
<details class="doc_details"><summary>v 2.1.13, Oct 31, 2017</summary>
Highlights: No code or doc changes. Just made this release to
overcome release packaging issues.
</details>

<details class="doc_details"><summary>v 2.1.12, Oct 31, 2017</summary>
Highlights: Fixed backwards go_to bug. dde_version_between, to_source_code
<ul>
    <li> <code>verify_dde_version_between</code> renamed to <code>dde_version_between</code>,<br/>
         changed 3rd parameter to "action" that can take values "error", "warn", "boolean".<br/>
         Fixed bug.<br/>
         See Ref Man/Operating System, etc/dde_version_between.</li>

    <li> Jobs that are defined but not yet started now have their user_data property inited
            to the user_data value in the new constructor, just in case
            we want to call to_source_code on unstarted jobs.</li>

    <li> to_source_code for Jobs: indenting improved.</li>

    <li> Utility fn last now returns undefined instead of null when passed a zero lengthed item.
        If passed an unhandled type of arg, it now errors.</li>

    <li> to_source_code on a Job that has been run and NOT using orig_do_list prints out
        the trailing instruction of make_ins(3, 3, 1509036422423, "g")
        but beware that printing jobs that have been run, with orig_do_list=false
        will print both a move_all_joints and a make_inst("a")
        for a job with just 1 do_list item of move_all_joints in its def.</li>

    <li> new to_source_code methods for: Robot.grab_robot_status, Human.task, Human.enter_choice</li>

    <li> Robot.grab_robot_status instruction now has a default for the
         first arg (user data var) of "grabbed_robot_status".</li>

    <li> bug fixed in inserting instructions into do list that was not properly updating
        the hierarchical added_items_count array.
        This caused some instructions to be skipped when a <code>Control.go_to</code>
        backwards instruction was executed.</li>
</ul>
</details>
<details class="doc_details"><summary>v 2.1.11, Oct 27, 2017</summary>
Highlights: exTeach bug fixes
<ul><li>ezTeach fixed runtime bugs</li>
    <li>improved exTeach dialog box</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.1.10, Oct 26, 2017</summary>
Highlights: socket timeout bug fix. FindHome, ezTeach
<ul><li>dde_version_between documentation: Added an example call and return value
        to the Ref Man doc.</li>

    <li>Improvements to <code>to_source_code</code> including commas between elements
        in Jobs and literal objects.</li>

    <li>Changed default_default_dexter_port from a string "50000" to an integer: 50000</li>

    <li>Auto-re-init for Dexter socket that has timed out.
        This tries several times to connect at increasing durations between tries.
        If it can't connect after 4 tries lasting up to a second, the
        job errors.</li>

    <li>ezTeach now available from the Insert menu/ezTeach
        which scrolls to the new User Guide section: "ezTeach".</li>

    <li>FindHome is a new button on the Calibrate dialog box.
        It is also a new top level section in the User Guide.
        Clicking on its button  in the Calibrate dialog
        defines the FindHome job and scrolls
        the doc pane to the FindHome section.</li>
</ul>
</details>
<details class="doc_details"><summary>v 2.1.9, Oct 25, 2017</summary>
Highlights: to_source_code implemented but not complete.
            dde version checking code improved plus new
            function dde_version_between
<ul><li> Doc for objectPath extended. See Ref Man/Object System/New Object System Methods/objectPath</li>

    <li> The "last" function has been extended to work on NodeList and HTMLCollection</li>

    <li><code>out</code> function now takes another arg: "code" controls formatting of the output as rendered HTML or code.
        Default null gets its real value (true or false) from the new checkbox named "Code" in the
        Output pane. The label for the "Save on Eval" checkbox has been reduced to "Save"
        to make room for this new checkbox.
        Just like simulate, the value of this checkbox is persistent.</li>

    <li> option click now selects more expressions such as function calls (when you click on the function name)
        and variable declarations (when you click on let and var)
        Edit menu item changed from "Select call" to "Select expr".</li>

    <li> <code>inspect</code> doc improved slightly. Now click help gives you a link to the doc on it in the User Guide.</li>

    <li> <code>Duration</code> class simplified: defaults for all 4 arguments is now 0.
        Passing just the first argument gives you hours, not milliseconds.
        To pass only milliseconds, example: new Duration(0, 0, 0, 123) for 123 ms.
        new Duration instance method: to_seconds()
        See Ref Man/Units Systems/Duration.</li>

    <li> Fixed bug for generator instructions that wasn't utilizing all the "generated" instructions.</li>

    <li> Slight improvement to Generator Job Example 4b and Job Example 4c, the job definitions.</li>

    <li> Jobs menu/Insert Example/  added new item:
         Control.go_to with several jobs using the Control.go_to instruction</li>

    <li> dde_version_equal, dde_version_less_than dde_version_more_than renamed to not start with "dde_".
         doc and click_help improved.</li>

    <li> New function:  <code>dde_version_between("1.2.3", null, warn=false)</code>
      If the current version is NOT 1.2.3, then
    if first arg is null, the default, dde version must be before the 2nd arg.
    If 2nd arg is null, the default dde version must be after the first arg.
    If both are null ??? maybe just error.
    if 3rd arg (warn) is false (the default) then error if dde_version is not between first and 2nd arg (inclusive)
    else if warn is true, just print out a warning message.
    This is kind of a "declaration" at the top of a dde src file.
    See Ref Man/Operating System,etc.  dde_version_between</li>


    <li> New global var <code>loading_file</code> bound to the path of the loading file.
        See Ref Man/IO/File Access/loading_file.
        This is used to print error messages indicating errors in loading files,
        but may be useful for users loading special files.</li>

    <li> Click help printing of values of variables improved.</li>

    <li> Extended <code>Human.enter_choice</code> doc with an example of Yes & No buttons returning true or false.</li>
</ul>
</details>
<details class="doc_details"><summary>v 2.1.8, Oct 10, 2017</summary>
Highlights: Improvements to newObject.sourceCode().<br/>
           Many minor improvements to show_window.<br/>
           New Learn JS submenu: User Interaction.

<ul><li> newObject sourceCode method: fixed and extended.
         See Ref Man/Object System/New Object System Methods/sourceCode</li>

    <li> Updated newObject.sourceCode test suite</li>

    <li> New LearnJS submenu "User Interaction" containing insertions for:
        <ul><li>alert</li>
            <li>confirm</li>
            <li>prompt</li>
        </ul>
    </li>

    <li> show_window example "many inputs" now calls "inspect" instead of "out"
        so you can see ALL the passed in values.</li>

    <li> show_window examples: Now commented at the top to say what example it is
        so that the inserted src corresponds to the menu item you chose.</li>

    <li> Insert menu/show_window/Build Window
         Moved the 2 windows so they don't overlap.
         Previous versions of the window being built are now closed when
          the most recent change is made.</li>

    <li> show_window documentation now documents:
          <ul><li>is_modal</li>
              <li>show_close_button</li>
              <li>show_collapse_button</li>
              <li>trim_strings</li>
              <li>background_color</li>
           </ul>
    </li>

    <li>show_window Insert menu/onchange call: improved the callback to show the name
        of the widget and its new value.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.1.6, Oct 6, 2017</summary>
  Highlights: WARNING: Bug fix in Kin may break existing code.
<ul><li>Kin.forward_kinematics() and Kin.J_angles_to_xyz()
        no longer return a negative value for the first joint.
    </li>
    <li>Fixed string length computation in inspector for strings that have newlines in them.</li>

    <li>Default titles for Human.enter_choice, Human.enter_number and Human,enter_text fixed to
    reflect the type of data to be entered.</li>
</ul>
</details>
<details class="doc_details"><summary>v 2.1.5, Oct 5, 2017</summary>
Highlights: Fixed Eval button bug.
<ul><li>Fixed bug in clicking the eval button with no selection. It now
        properly evals the whole buffer like it use to.</li>

    <li>Removed annoying beeps from test suite.
        Runs test suite much faster, esp on WindowsOS.</li>

    <li>Made Open File dialog, Save As  dialog and choose_file function dialogs
         be "modal", ie clicking outside the popped up dialog does nothing.
        This fixes some bad user interface conditions, esp on WindowsOS.</li>
</ul>
</details>
<details class="doc_details"><summary>v 2.1.4, Oct 3, 2017</summary>
Highlights: Improvements to Coor(dinate) system.
            Extensions to Music.
<ul><li>Coor updated with bug fixes and new functions
    <ul><li> Coor.move_points_to_coor() now accepts just one point
             (instead of list of points) and ref coor now functional</li>
        <li>Coor.move_vector_to_coor() function added</li>
        <li>Coor.get_xy_plane_direction() function added</li>
        <li>Coor.get_xz_plane_direction() function added</li>
        <li>Coor.get_yz_plane_direction() function added</li>
        </ul>
    </li>

    <li>Fixed Eval&Start error handling.</li>

    <li>Eval&Start now will use the whole editor buffer if there's no selection.</li>

    <li>Now Job.start returns the job instance just like Note and Phrase start.</li>

    <li>hdrobotic.com software page fixed to reduce scrolling.</li>

    <li>The two calibrate Jobs now have show_instructions: false (to increase running speed).</li>

    <li>Jobs menu Examples Simplest changed to call Dexter.move_all_joints.</li>

    <li>Updated several Job examples to use port 50000 and use new units system.</li>

    <li>New menu item Insert menu/Debugging Etc/"debugger" for the "debugger" instruction
        on a do_list. Added doc on "debugger" in Ref Man/Robots/Robot instructions/"debugger"</li>

    <li> Many syntactic bugs fixed throughout documentation.</li>

    <li>Fixed bug with getting selection from Doc pane.</li>

    <li>new music methods for Note and Phrase: filter, time_interval, repeat, arpeggio, pattern.
        See Ref Man/IO/Sound/Music with MIDI/</li>

    <li>Music examples now insertable via Insert menu/Examples/Music/Note  & Phrase</li>

    <li>Fixed: diatonic_transpose</li>

    <li>New Series' for Note and for Phrase</li>

    <li>Updated URL for OpenCV "Cheat Sheet" in Ref Man Machine Vision section.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.1.3, Sep 26, 2017</summary>
Highlights: DXF drawing improvements.
            New instructions Dexter.pid_move_all_joints, Dexter.pid_move_to.
<ul>
    <li>New Instructions: <code>Dexter.pid_move_all_joints</code>,
        <code>Dexter.pid_move_to</code></li>

    <li> <code>beep</code>: the "duration" argument has been respelled to "dur",
        conforming with Note, Phrase, and other places.
        Because beep takes its arguments as keywords, this is an incompatibility.</li>

    <li> Fixed history recording of Find button for first history item.</li>

    <li> When you initialized a job's user data to a var with an array or lit obj
        as its data, then when restarting a job, it used to
        keep the content of whatever was pushed into that array when
        the job was restarted. Now it initializes the user-data var's value of
        an array to a copy of its original self.</li>

    <li>DXF J5 direction bug fixed</li>

    <li> Default value (functions) for DXF.init_drawing and Dexter.draw_dxf
        for action_on_function and action_off_function
        now uses Dexter.dummy_move in place of dummy_move.</li>

    <li> <code>DXF.init_drawing</code> and Robot.draw_dxf now can take an array of points to be drawn for their
        dxf_filepath argument. See User Guide/ Drawing with DXF/DXF.init_drawing/dxf_filepath</li>
</ul>
</details>
<details class="doc_details"><summary>v 2.1.1, Sep 22, 2017</summary>
Highlights: Small fixes for DXF drawing.
<ul>
    <li> Date on About for 2.1.0 fixed from Sep 3 to Sep 21</li>

    <li> Doc in Ref Man Dexter.draw_dxf Job examples 2 and 3
        code fixed from Robot.draw_dxf to Dexter.draw_dxf</li>

    <li> Fixed Ref Man Dexter.draw_dxf default value for three_J_angles.</li>

    <li> new instruction Dexter.dummy_move takes no args. Used in DXF.init_drawing.
         It reads the robot_status and moves the robot to that location.</li>

    <li> Fixed "dur" for start_object. Added example in Ref Manof using "dur"
         in a start object.</li>

    <li> User Guide DX.Finit_drawing added documentation for params:
        <ul><li> tool_action</li>
            <li> tool_action_on_function</li>
            <li> tool_action_off_function</li>
        </ul>
    </li>

    <li> Fixed display of shortcut key in DDE menus on WindowsOS.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.1.0, Sep 21, 2017</summary>
Highlights: New subsystems of Drawing with Dexter and Music with MIDI.
  New kind of instruction: start_object.
  New Articles: "A Mental Model of Memory" and "The Language of Music"
<ul>
    <li> Improved formatting of Ref Man Human.enter_choice examples</li>

    <li> Added Help menu item to Insert/show_window menu</li>

    <li> Added Help menu item to Insert/Machine Vision menu</li>

    <li> Now there's click help for "cv", the global var accessing OpenCV.</li>

    <li> Click_help for "for": replaced "var i" with "let i"</li>

    <li> Now Find window prev and next buttons also include Find string searches.</li>

    <li> Human.notify ref man doc: improved first example formatting.</li>

    <li> Fixed bug that disabled all shortcut keys and "operating_system" name.</li>

    <li> minimum saved DDE window width now is 60 instead of 20.</li>

    <li> Fixed bug in windowsOS for minimized DDE window that caused
    the x and y location of the window to be saved to an invisible negative integer,
    making a launched DDE invisible.
    If you have this problem, with DDE closed, edit dde_apps/dde_persistent.json
    file to give dde_window_width & dde_window_height values of several hundred,
    and dde_window_y & dde_window_x positive values.</li>

    <li> Fixed Linux .desktop file requirements.</li>

    <li> Added functions dde_version_equal, dde_version_less_than, dde_version_more_than.
    Docmentation along with dde_version under: Ref Man/operating_system, etc.
    These functions compare strings like  "2.0.9" and 2.0.12" to yield the right answer.</li>

    <li> Learn JS "for" examples: changed "var" to "let"</li>

    <li> Insert menu/Machine Vision/ new examples in menu items:
    "in_range B&W" for super high contrast feature detection.
    "Blur" for making a blurry image.</li>

    <li> Support for playing musical notes and phrases with Midi
        and constructing higher level sequences of notes.
        <ul><li>Documentation in Ref Man/IO/Sound/Music with Midi</li>
            <li>Article in Doc pane: "The Language of Music"
                about the benefits of language design using the example of music.
            </li>
            <li> Insert Menu/Sound has new item "Midi.init()"</li>
            <li> new Eval&Start button will evaluate JS source code that
                 creates a note or phrase and immediately play it.</li>
             <li> Notes and Phrases can put put directly on a Job's do_list
                  and will play when that "instruction" is run.</li>
         </ul>
    </li>

    <li> Replaced Tests menu item "Find Test Suites" with similar functionality added to the
    existing functionality of the doc pane Find button.
    Now when you click find, it gets the selection
    (from more places than the old places).
    and displays found tests in the Output pane.</li>

    <li> Now when you make a selection in a temporary output region,
    you do NOT get click help on it, rather, the text you selected
    stays selected and you can now use in in a Find or Eval operation,
    or copy and paste it.</li>

    <li> Minor fixes to "How to Think Like a Computer"
    along with a deeper explanation of how calling a function works and
    tweaks to the code examples.</li>

    <li> Ref Man/Window System/Mouse Input now documents how to
         get the current position of the mouse and capture mouse clicks.</li>

    <li> Run instruction dialog now has the word "degrees" in 4 strategic places
    and "meters" in 3 places.</li>

    <li> Jobs menu/Simulate? menu radio buttons now work when you click on the label
        In addition to the circle radio button itself.</li>

    <li> Jobs menu/Simulate? tooltip updated.</li>

    <li> New menu item Jobs menu/Simulate?/Help taking you to the Ref man section that
        describes simulate.</li>

    <li> now output pane tells you "Could not connect to Dexter"
         when a job attempts to and fails.</li>

    <li> robot status dialog: Now displays measured x, y, z,
          values in a new bottom row.</li>

    <li> New documentation section: Ref Man/Window/System/DDE Window Dimensions</li>

    <li> New Article in the doc pane: A Mental Model of Memory which
        compliments  "How to Think Like a Computer"</li>

    <li> New Kind of instruction on the do_list: "start object".
         Documented under Ref Man/Robot/Robot Instructions/Any Start Object<br/>
        Allows, job instances, music notes and phrases,
        methods with callbacks to go on the do_list.</li>

    <li> New Article: "The Language of Music" about the benefits of
         language design using the example of music.</li>

    <li> Clicking on a running job's button now flushes its queue.</li>

    <li> Fix for redefining a job while its running which
    use to cause the error:
    "in Dexter Simulation, could not find a job with job_id: 3"
    The fix is to kill the old job if it is redefined while running.</li>

   <li> Drawing with DXF
       <ul><li>New user Guide section: Drawing with DXF</li>
           <li>New method: DXF.init_drawing</li>
           <li>New instruction: Dexter.draw_dex.</li>
               See Ref Man/Robot/Dexter/Dexter Instructions/draw_dxf</li>
        </ul>
    </li>
</ul>
</details>

<details class="doc_details"><summary>v 2.0.15, Sep 3, 2017</summary>
Highlights: Video capture & processing example with OpenCV.<br/>
            Human.enter_choice greatly extended.<br/>
            All Human instructions now have examples.<br/>
            Kin.is_in_reach() updated.
<ul>
    <li>Fixed the Real time sim checkbox on the Jobs menu.
    Now it is checked when you launch DDE, and the simulator tries to
    run at the same speed as the robot with that checkbox checked.
    verify that "both" simulate ignores the "real time sim".</li>

    <li> <code>console.log</code> and "call" click_help now works.</li>

    <li> fixed documentation for Job param "show_instructions" method values
        to be <code>Job.prototype.show_progress</code> and
       <code>Job.prototype.show_progress_and_user_data</code></li>

    <li> Improved printout for <code>Job.prototype.show_progress_and_user_data</code></li>

    <li> Fixed bug in Job.insert_instruction.</li>

    <li> <code>Human.enter_choice</code> was not correctly recording the selected value in
        user_data when show_choices_as_buttons: true. Fixed.</li>

    <li> Human.enter_choice was not correctly recording the selected value in
        user_data when show_choices_as_buttons: true. Fixed.</li>

    <li> Human.enter_choice has powerful new features and documentation to match in
        Ref Man/Robot/Human/Human Instructions/enter_choice.</li>

    <li> <code>Human.enter_instruction</code> changed default angles to 0,0,0,0,0</li>

    <li> <code>Human.enter_choice</code> was not correctly recording the selected value in
        user_data when show_choices_as_buttons: true. Fixed.</li>

    <li> The Human.enter instructions now have a new param: "add_stop_button: true"
        Behavior without using this button is the same, but you can now "turn off"
        the display of a stop button.</li>


    <li> Fixed bugs in <code>Human.enter_instruction</code> with initializing the selected instruction.</li>

    <li> All Human.enter instructions now have code examples in their Ref Man doc
         including: task, choice, number, text, instruction, notify.</li>

    <li> Doc pane header now has "back" & "forward" buttons  ("<" and ">").</li>

    <li> In doc pane, if there is no selection and no text in the find input,
        the colored sections are removed and the find pane is collapsed.</li>

    <li> More intra-Ref-Man clickble links esp for Control.go_to,
         and uman.task references.</li>

    <li> <code>Kin.is_in_reach()</code> has been updated.</li>

    <li> New keyboard shortcut: Crtl n for "new file" in the editor.</li>

    <li> Clean up of keystroke shortcuts and their menu item labels.
         Now both labels and actual keybindings are properly OS-specific (MacOS vs WindowsOS)</li>

    <li> "b" is no longer a valid oplet for Dexter instructions.</li>

    <li> New menu: Insert/Machine Vision/
        now contains "Convert to B&W" (from the previous version of DDE, but
        with a larger window size to accommodate bigger pictures)<br/>
        and a new item: "Process Webcam" which displays the video from
        a laptop webcam, let's you take a snapshot, then processes
        the image into two different formats.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.0.14, Aug 30, 2017</summary>
Highlights: OpenCV integrated into DDE. Article: "How to Think Like a Computer".
Extended Debugging Documentation. Inspector improvements. Run instruction improvements.
<ul><li>Fixed bug with not getting the selection when clicking the Eval button.</li>

    <li> New function <code>clear_output()</code>
         clears output pane. See doc Ref Man/Window System/Window Utilities/clear_output</li>

    <li> Inspector
        <ul><li>New function <code>inspect(item)</code> lets you programmatically inspect data.</li>
            <li>Ungrayed-out the "refresh" button.</li>
            <li>Now supports JS Typed Arrays.</li>
            <li>Now handles long arrays and objects interactively.</li>
            <li>Fix for literal objects with first prop val of a function. (formattimg)</li>
        </ul>
    </li>
    <li> New documentation section: User Guide/Debugging/Print Statements,
         includes console.log, out, Robot.out, Job's show_instructions param,
         inspect, clear_output.</li>

    <li> Updated 2 cases of example calls to <code>beep</code> durations from ms to seconds.</li>

    <li> DDE window's width and height now have minimum saved values of 20
         to prevent relaunching DDE and having the window be invisible.</li>

    <li> New Article in the doc pane: "How to Think Like a Computer"</li>

    <li> New Series "global js functions", provides click help for "eval", "parseFloat"
        and several more top level JS functions.</li>

    <li> Improved <code>wait_until</code> reason text.</li>

    <li><code>show_page</code> options argument now properly default the options of
         x, y, width, and height.</li>

    <li>Fixed calibrate menu item doc.</li>

    <li>Fixed web help for: function, this, push (and other Array methods), String methods,
        Math, Number constants, JSON (stringify and parse), apply.</li>

    <li> Updated: <br/><code>Dexter.J4_ANGLE_MAX = 130</code>
                  <br/><code>Dexter.J4_ANGLE_MIN = -130</code></li>

    <li> Run instruction
        <ul><li> Dialog box: changed the default mode from "set_keep_position" to
                 to "set_open_loop".</li>

            <li> Dialog box: If you select a new mode, then choose the "Job",
                 that mode change instruction now appears just once in the created Job's do_list.</li>

            <li> Dialog box: Added tooltip to the mode change select menu
                 and improved its label.</li>

            <li> Menu items: HOME_ANGLES, NEUTRAL_ANGLES, PARKED_ANGLES and "selection"
                 now all first set Dexter's default speed to 25 (degrees per second)
                 before the move.</li>
        </ul>
    </li>


    <li> <code>show_window</code> with content of<br/>
         <code>&lt;input type=file".../&gt;</code><br/>
               now has a "value" of
         the full path of the chosen file,
         not just the "name" (sans folder) part of the path.</li>

    <li> OpenCV is now integrated into DDE.
         See Ref Man/Window System/Machine Vision with OpenCV.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.0.13, Aug 23, 2017</summary>
    Highlights: show_page
<ul><li> <code>beep</code> fixed durations from ms to seconds in the examples.</li>

    <li> Fixed test suite obj_sys_source_code item 5.</li>

    <li> Fixed Sim pane Dexter videos, Dexter Photo.

    <li><show_web_page renamed to <code>show_page</code> and now works.
        It is now documented in Ref Man/Window/show_page</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.0.12, Aug 22, 2017</summary>
    Highlights: UI Tweaks and minor bug fixes.
<ul><li> Spurious printout of matrix from Kinematics code removed.</li>

    <li> Extended the user Guide/Help System to include the Inspector and URL to the
         Webinar videos.</li>

    <li> Inspector refresh icon now has a "refresh" tooltip.</li>

    <li> Inspector forward and back arrows are grayed-out when inapplicable.</li>

    <li> Inspector the "hand" cursor shows when hovering over a clickable item.</li>

    <li> Now running all test suites does not reset the DDE window color scheme to its default.</li>

    <li> Now choosing Save or using the keystroke to save a file prints into the
         output pane: "Saved: foo.js"</li>

    <li> Cmd/ctrl-o  now "opens" the file chooser, same as picking File Menu item: Open.</li>

    <li> When running a job with simulate=true, the output pane does not say
         that it has connected to a socket.</li>

    <li> Job Example 3, renamed the job to "j3",
         improved sleep to sleep for 2 seconds.</li>

    <li> Fixed bug with Jobs menu/real time sim checkbox.</li>

    <li> Improved test suite error reporting format.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.0.11, Aug 18, 2017</summary>
    Highlights: New Inspector, robot status includes Joint measured angles,
                Job init param: show_instructions extended.
<ul><li> Added: Dexter.J1_MEASURED_ANGLE constants,  thru J5
    robot_status now contains MEASURED_ANGLES for each of the 5 joints in
    addition to the ANGLES (where the joints were *told* to go).
    New row in the dialog produced by Jobs menu/show_robot_status
    shows you the measured angles.</li>

    <li> when attempting a socket connection to Dexter, a message is printed in the output pane.
         when the connection is successful, another message is printed.</li>

    <li> Robot.out instruction extended to have the same 3rd arg as "out", ie "temp".
          Documented, and links between Robot.out and out added to the ref man doc for each.</li>

    <li> fixed bug in the simulator not updating robot status angles to degrees.</li>

    <li> The Job init parameter of <code>show_instructions</code> can now accept
         a method as the value to be called at the start of the running of each instruction.
          See doc Ref Man/Job/new Job parameters. Includes doc on how to show user data</li>

    <li> option click on /*, */  or // selects whole comment.</li>

    <li> while loading init file, if there's an error, a better error message is output.</li>

    <li> Improved the initialization of the file dde_init.js</li>

    <li> _arcsec and the other units conversion constants: disabled editor warnings.</li>

    <li> new data Inspector   used for Eval results.</li>

    <li> when a job completes, rather than print out lots of stuff like it use to,
         now an INSPECT button is added to the progress bar in the output pane.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.0.10, Aug 11, 2017</summary>
Highlights: Behind the scenes bug fixes.
<ul><li> Fixed rounding bug in <code>Robot.move_to</code> and <code>Robot.move_to_relative</code></li>

    <li> Extended Browser VS DDE to contain the full name "Dexter Development Environment"</li>

    <li> <code>Robot.start</code> now always inits its Socket and sets processing_flush to false.</li>

    <li> Now the Job init param of <code>show_instructions</code> turns on or off
        the display of the progress bar while the Job is running.
        Default is true.</li>

    <li> Now the DDE window position is preserved across launching DDE (along with
         its size).</li>

    <li> Now when a job runs a <code>Robot.stop_job</code> instruction, that's considered to be
         a normal completion, not an error or interruption.</li>

    <li> Improvements to Kinematics math.</li>

    <li> The robot_status returned from Dexter now has its arcseconds converted to degrees,
         and related changes for our new Units system.</li>

    <li> Improved the error message on "no dde_apps" folder upon DDE startup.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.0.9, Aug 3, 2017</summary>
Highlights: Improvements to Calibrate Dexter (on the Jobs menu).
New instruction: Human.show_window
<ul><li><code>show_window</code>
        <ul><li>Fixes to show_window callback functions.
             <li>Fixes to show_window examples.
             <li>Extensions to show_window documentation.
        </ul>
    </li>
    <li> New instruction: <code>Human.show_window</code>
         very similar to the show_window function
        but acts like a Human instruction by pausing the job. Useful
        for entering multiple values in one dialog.
        Lots of doc in<br/>
        Ref Man/Robot/Human/show_instruction.</li>

    <li> Moved menu bar Insert/Build Application to Insert/show_window/Build Window.</li>

    <li> Extended all the human instructions to set the status of
        "waiting" and a wait_reason
        of "waiting for Human.enter_*".</li>

    <li> Extended sync_point to declare that a job is waiting if its waiting for
        a sync point, with proper yellow coloring of the waiting Job's button.</li>

    <li> In the editor, Ctrl/cmd-s now saves the current file.</li>

    <li> Reduced startup display of spurious content.</li>

    <li> Runnng a job with a function that errors now terminates the Job properly.</li>

    <li>Now when you relaunch DDE, the window is the same size as it was the last time
        you resized it.</li>

    <li> Improvements to calibrate including the data for calibrate_optical_sensors
    is now saved automatically (for windows OS only).</li>

    <li> Fix to click help for oplets in printing the function name associated
         with the oplet.</li>

    <li> Removed menu bar Insert/Train Dexter (obsolete).</li>

</ul>
</details>

<details class="doc_details"><summary>v 2.0.8, Jul 29, 2017 private</summary>
Highlights: Improvements for Calibrate & other minor but important details
<ul><li> The "?" help icon in the Doc pane header made bigger and bolder for easier finding.</li>

    <li> Run instruction dialog box menu item moved from selecting
        "Jobs menu/Run Instruction" to  "Jobs menu/Run Instruction/Show Dialog..."
        to make it more obvious.</li>

    <li> Caught an error for empty_instruction_queue_now when it can't write to a socket.</li>

    <li> Fix for robot_done_with_instruction w.r.t. "a" oplet setting rob.angles.</li>

    <li> Fix for Socket.empty_instruction_queue_now attempting to write to a closed socket.</li>

    <li> When DDE automatically creates a dde_init.js file, it now adds persistent_set("ROS_URL",...)</li>

    <li>Calibrate fixes:
        <ul><li> Fixed bug in smlinex with "axis" undefined.</li>

            <li> Doc calibrate optical sensor now has: ideal circle should just
                 fill up whole square, not more, not less.</li>

            <li> Calibrate dialog, clicking on Joint 1 fixed.</li>

            <li> Calibrate dialog "save" button fix for the path of the file saved to.</li>

            <li> Calibrate, witb sim == true, clicking calibrate optical button now
                 warns you that you must not be simulating to calibrate.</li>
        </ul></li>
</ul>
</details>

<details class="doc_details"><summary>v 2.0.7, Jul 27, 2017 private</summary>
Highlights: Calibrate dialog and doc improvements.
<ul>
    <li>Calibrate dialog: numerous small bug fixes and improvements.</li>

    <li>Calibrate dexter doc: numerous improvements.</li>

    <li> extended show_window to accept "id" instead of just "name" for identifying checkboxes
        and all other input types.</li>

    <li> show_window for file chooser widget fixed to not error if no selected file.
        Just uses the value of null.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.0.6, Jul 24, 2017 private</summary>
Highlights: Calibrate Dexter menu item, Job progress bar,
            Many extensions to: User Guide/Configure Dexter
<ul><li>Tweaks to Gamepad doc headers: shorter to fit in Doc pane.</li>

    <li> <code>out</code> functionality expanded w.r.t. the temp arg.
        See the extended doc in Ref Man/IO/out</li>

    <li> progress bar now shown in the output pane when a Job is running
         with the "last instruction sent" to Dexter or executed.</li>

    <li> User Guide and Ref Man instances of "unevalable" respelled to "unEVALable".</li>

    <li> Warning message added to Jobs menu/Show Robot Status when no jobs have been run.</li>

    <li> Brain and Human robots given an "all_names" field just like Dexter and Serial
    example: Brain.all_names  returns an array of all Brain robot names.</li>

    <li> Now loading DDE is more robust against the last file edited no longer
        being available. You get a warning in the Output pane,
        but otherwise loading DDE completes.</li>

    <li> load_files removed the restriction that "root" file paths have
        to end in ".js" to load.</li>

    <li> load_files extended to be able to have a path that starts
    and ends with a slash and thus becomes an absolute prefix
    for subsequent files. Ref Man/IO/File Access/load_files rewritten.</li>

    <li> User Guide/Configure Dexter/Data Connection
         new section on Mac.</li>

    <li> New doc section: User Guide/Configure Dexter/Dexter's File System.</li>

    <li> New doc: User Guide/Configure Dexter/Data Connection/On MacOS.</li>

    <li> New doc: User Guide/Configure Dexter/Dexter's File System.</li>

    <li> New menu item: Test/Calibrate Dexter which
         opens a dialog box and scrolls to new doc section:
         User Guide/Calibrate Dexter.</li>

    <li> Fixed bug in EVAL button not evaling selection of cmd line.</li>

    <li> Bug fixed in File menu/Remove not working for non-existent files.</li>

    <li> Fixed bug in empty_instruction_queue_now of typo "make_inst"</li>

    <li> Moved init_ros from happening always during start up
        to the new first menu item on the OPS menu.
        Now you must choose that meny item before using ROS.
        This eliminates the error in the console upon startup if ROS can't be inited.</li>

    <li> Hide the Ops menu until user clicks on the "ROS" radio button.</li>

    <li> Renamed "Ops" menu to "ROS".</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.0.5, Jul 21, 2017 private</summary>
Highlights: Gamepad & keyboard input,
            Help system doc,
            Configure Dexter Doc,
            All User Guide code examples now in test suite just like ref man.
<ul>
    <li> Ref Man <code>move_to_straight</code>: The header fixed from
         "move_to" to "move_to_straight".</li>

    <li> Glossary: added definitions for:<br/>
          config<br/>
          J5_direction<br/>
          position,<br/>
          pose</li>

    <li> A job now stops if it cannot connect.</li>

    <li> <code>move_to</code> now stops its job for 2 more error conditions.</li>

    <li> Fixed bug in <code>Robot.wait_until</code> with a number (duration) argument.</li>

    <li> Added to Dexter Constant Series:<br/>
        "Dexter.NEUTRAL_ANGLE"<br/>
        "Dexter.HOME_POSITION"<br/>
        "Dexter.NEUTRAL_POSITION"</li>

    <li> Stop sign now empties the instruction queue ASAP.</li>

    <li> The user_guide code examples are now a TestSuite just like
         the code examples in the ref man.</li>

    <li> The white-background code examples in the User Guide and
        Ref Man that can NOT be evaled or are not part of the TestSuite,
        now have tooltips explaining that.</li>

    <li> Extended <code>show_window</code> such that if a SELECT tag has
        an attribute of data-onchange, and no "name" but an "id",
        that it uses the "id" for the "name" as do other inputs
        in show_window.</li>

    <li> run_instruction dialog: Now when you choose an instruction
        from the instruction menu, it defaults the args to
        the settings above for:<br/>
        move_to<br/>
        move_to_relative<br/>
        move_to_straight<br/>
        move_all_joints<br/>
        move_all_joints_relative<br/>
        set_parameter</li>

    <li> run_instruction dialog, parameter documentation:
        long parameter strings are put in a smaller font to show more
        of it in the limited space.</li>

    <li> http://hdrobotic.com/software/ now has a purple header for "Glossary"
        like the other sections.</li>

    <li> http://hdrobotic.com/software/ expanded region for showing documentation
        now eliminates the redundant vertical scroll bar.</li>

    <li> New doc section: User Guide/User Interface/<b>Help System</b>
        12 ways to get help.</li>

    <li> "?" link in upper right corner of Doc pane header now
        scrolls the doc pane to doc on the "Help System".</li>

    <li> New File menu item: "Load ..."</li>

    <li> Glossary new terms:<br/>
        Job<br/>
        robot<br/>
        do_list<br/>
        instruction</li>

    <li> Ref Man/IO reorg: new section: "Web" which includes the existing doc for:<br/>
        <code>get_page</code><br/>
        <code>get_page_async</code><br/>
        <code>make_url</code>.</li>

    <li> Support for using gamepads and keyboards for real-time control of Dexter
        and other processes added.
        Extensive documentation in Ref Man/IO/Gamepad & Keyboard
        including an example of using a gamepad and/or keyboard for incrementing
        Dexter joint angles inside a Job.</li>

    <li> Fix to <code>Socket.instruction_array_degrees_to_arcseconds_maybe</code>
        that precluded the "ViewEye" calibration process from working.</li>

    <li> Updated Job examples, calls to <code>Dexter.sleep</code> to
        use time in seconds, not milliseconds.</li>

    <li> Updated Job Example 2 for new <code>move_to</code> arguments.</li>

    <li> Fixed simulator for processing z oplets.</li>

    <li> New Jobs menu/Job Example 2 (simple dexter-moving with
         <code>move_all_joints</code>
        and <code>move_to</code> instructions.
        The subsequent Job examples have had their example numbers incremented.</li>

    <li> <code>speak</code> extended to be able to accept any JavaScript data
        (except null) as an argument: ie speak(123)
        Extended doc in Ref Man/IO/Sound/speak</li>

    <li> User Guide new top level section: <b>Configure Dexter</b>
         includes power up and data connection instructions.</li>
    </ul>
    </details>

<details class="doc_details"><summary>v 2.0.4, Jul 8, 2017</summary>
Highlights: load_files can now load file of any extensions.<br/>
           New Article: Browser vs. DDE.<br/>
           New instruction: Dexter.move_to_straight.<br/>
<ul>
    <li>load_files can now load files with any extension or no extension,
        not simply  ".js" files.</li>

    <li> Ref Man make_url & persistent_get examples improved for test suite.</li>

    <li> make_ins now warns if passed an invalid instruction_type.</li>

    <li> Click help now correctly identifies floating point numbers
        as well as integers.</li>

    <li> New article: Browser vs. DDE now in doc pane.</li>

    <li> Doc pane re-org: now all 4 articles under one twist-down: "Articles".</li>

    <li>New instruction: Dexter.move_to_straight
        in Instruction series, click help and Ref Man.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.0.3, Jul 7, 2017 private</summary>
Highlights: run_instruction dialog extensions, Ref Man Examples are now tests.
            bug fixes.
<ul><li>run_instruction dialog now has menu for selecting any Robot instruction.
        Shows param list of selected instruction.</li>

    <li> run_instruction dialog clicking an instruction button or selecting
         a new instruction from the instruction menu displays the params
          of the instruction and scrolls doc pane to the appropriate section
          if doc exists on that instruction.</li>

    <li>  Now documented in Ref Man and with click help: All 7 temperature conversion
          functions. See Ref Man/Units System/</li>

    <li> fixed bug in make_url with lack of ampersands between args in the result.</li>

    <li>  move_to_relative modified to fully use new Kin.J_angles_to_xyz</li>

    <li>  fixed bug in run_instruction dialog with move_to.</li>

    <li>  fixed bug in Dexter.move_to with wrong defaulting of args.</li>

    <li> kinematics range bug fixed.</li>

    <li> jobs now stop when they error.</li>


    <li> the FIND algorithm changed. Now searching for "dexter kin"
         will find only terms that contain "dexter" followed by a space,
        followed by "kin", NOT all instances of "dexter" and all instances of "kin.
        This permits more accurate searches.
        All are case insensitive.</li>

    <li>   DDE can now turn the code examples of Ref Man into TestSuite.
    This test suite is automatically created and run when you choose:
    DDE menu bar/Tests/Run All TestSuites.
    It now contains 487 tests, all passing, and helps immensely in keeping
    the examples in the Ref Man will be kept up to date with the code.
    As part of this project, the expected results of examples now have a pale
    green background. About 60 examples and a bunch of underlying code
    was fixed in this process.</li>

    <li>New help item to top of units series menu that scrolls to Unit System doc.</li>
 </ul>
</details>

<details class="doc_details"><summary>v 2.0.2, Jul 2, 2017 private</summary>
<ul>
    <li> fixed run_instruction move_to button action.</li>
    <li> run_instruction dialog/move_to/J5_direction:
          fixed bug in converting xyz to angles.</li>
    <li> now there's click_help when you click in the output pane.</li>
</ul>
</details>

<details class="doc_details"><summary>v 2.0.1, Jul 2, 2017 private</summary>
Highlight: Run Instruction dialog extended. Units System documented.
           More details of new units system converted.
<ul><li> Eval button now can eval selected text in Output pane, Doc pane and Command input as
    well as the editor buffer. If no selection, the whole editor buffer is evaled as usual.
    Removed the "Eval Doc" button at the top of the Doc pane.
    New mini-tutorial about this under User Guide/Learning JavaScript.</li>

    <li> show_window documented how to have a show_window cover the DDE window completely
        in Doc pane/Ref Man/Window System/show_window
        and comments in DDE Menubar/Insert/show_window/Window Options</li>

    <li> show_window, input elements: if they don't have a "name" attribute but
        do have an "id" attribute, that id attribute value is used as the input's "name".</li>

    <li>show_window: fixed to properly have the value of the file name for
a &lt;input type="file"/&gt; tag. Includes extension, does not include directory.</li>

<li>DDE menu bar/Insert/show_window/many_inputs example extended
    to have an example of &lt;input type="file"/&gt;
    Fixed and extended the big show_window example in the Ref Man.</li>

    <li> choose_file and choose_save_file now documented under
         Doc pane/Ref Man/IO/File Access.</li>

    <li> Find button can now find documentation on text selected in the command line.

    <li> new series "oplet". Click help shows the full instruction name,
         which, if documented, you can click on it to see ref man documentation.</li>

    <li> reoganization of the Series menu to make all menu items visible on
short screens. Also helps classify series.</li>

    <li> instruction_array_degrees_to_arcseconds_maybe fixed ar01 bug to arg0
          and the "Boundries" bug</li>


    <li> default content for dde_init.js and Ref Man now has the default colors
         in the calls for:
    <ul><li>set_window_frame_background_color</li>
        <li>set_pane_header_background_color</li>
        <li>set_menu_background_color</li>
        <li>set_button_background_color</li>
    </ul>

    <li> Dexter.set_parameter documented and
        click help now underlines set_parameter help.</li>

    <li>fixed click help for empty_instruction_queue_immediately.</li>

    <li>Extending Run instruction dialog box:
    <ul><li>put min and max on J1 thru J5
        <li> put step size of 5 on j1 through j5 (you can still type in a more precise number.</li>
        <li>  put step size of 0.01 on X, Y, Z (you can still type in a more precise number.)</li>
        <li> Set parameter: name:  turn into select menu (first make the set params into a series)</li>
        <li> show user the source code of a generated instruction.</li>
        <li> new "run" button and place to enter an instruction's source code.</li>
        <li> If there's a selection anywhere when you choose "run instructions",
             it is put in the "source" type in. Use it to run a selected instruction.</li>
        <li>now the source type in works like other places of code:
            <ul><li>click_help works on it</li>
                <li>make a selection and hit Eval button</li>
                <li>make a selection and hit Find button</li>
            </ul>
        </li>
    <li>run instruction dialog: added insert and "job" buttons at end of Run typein.
        When inserting whole job, the "set_mode" instruction is inserted as well as
        the new actual instruction.</li>

    <li> move_to J5_direction:  has radio button  angles, xyz
        that toggles between 2 number inputs (for angles) and 3 number inputs (for xyz)</li>
    <li>move_to config:
        made 3 sets of ratio buttons for lEFT RIGHT,  UP DOWN,  IN OUT.</li>
    </ul>
</li>

    <li> inter_do_item_dur now is interpreted as seconds,
        not milliseconds like it was previously.</li>

    <li> click help on a unit, ie _km  tells you what the "base" for units
        in that series is ie _m.</li>

    <li>Dexter.sleep now takes seconds as its argument and converts
          to milliseconds just before sending to Dexter.</li>

    <li>new "Convert V.1 to V.2" guide in Release Notes section of the doc pane.</li>

    <li>Ref Man new top level section "Units System"</li>
</ul>
</details>

<details class="doc_details"><summary>Convert V.1 to V.2</summary>
DDE Jobs written in DDE version 1 will likely break in DDE version 2 because
we have changed the default units for:
<ul><li><b>angles</b> from arcseconds to degrees <br/>
                      (3600 times lower value for the same effect).<br/>
                      Affects instructions: <code>Dexter.move_all_joints</code>,
                     <code>Dexter.move_all_joints_relative</code>.
                     The Dexter.set_parameter names that contain <code>Boundry</code>
                     have changed from referring to arcseconds to referring to degrees.</li>
<li><b>lengths</b> from microns to meters<br/>
                   (1M times lower value for the same effect).<br/>
                   Affects instructions: <code>Dexter.move_to</code>,
                   <code>Dexter.move_to_relative</code>.</li>
<li><b>durations</b> from milliseconds to seconds <br/>
                    (1K times lower value for the same effect).<br/>
                 Affects <code>Robot.wait_until</code> when passed a number,
                 <code>Dexter.sleep</code> instruction,
         and Job's <code>inter_do_item_dur</code>,
         all of which now expect durations in seconds.<br/>
  Note that inter_do_item_dur's default has also changed from 100 milliseocnds
  to 10 milliseconds, which should increase job running speed slightly. <br/>
  The Dexter.set_parameter names of <code>MaxSpeed</code>, <code>StartSpeed</code>,
  <code>Acceleration</code> have also changed into now being "seconds" based.
  </li>
</ul>
To convert your Jobs to the new units, search for each of the names
in white above and adjust their arguments accordingly. If you want
to preserve the actual numbers, you can leave them in place but
enter a "conversion suffix" after them using
our new <i>Units System</i> See doc pane/Ref Man/Units System.
</details>

<details class="doc_details"><summary>v 2.0.0, June 27, 2017 private</summary>
    Incompatible Changes: We have adopted SI standard units throughout DDE,
    meaning that we will use: meters, degrees, kilograms, seconds where feasible.
    In particular:<br/>
    Angles are now specified in degrees, not arcseconds.
    Lengths are specified in meters, not microns.
    Durations mostly now specified in seconds, not milliseconds.
    We expect these changes will break most jobs, however, its simple to fix them using
    our new units system.
    <p/>
    Highlights: New "units" system to help convert numerical values into SI units.
    New top level article in Doc Pane: "Dexter Kinematics".
    DDE menu bar/Jobs/Run Instruction is now clickable and pops up a multi-instruction dialog.
    Click help now works in Command input (in Output pane header) and code examples in Doc pane.

<ul><li>units system for converting numbers into SI units.
    <li>show_window buttons extended to look at name and id before value for
        binding the clicked_button_value</li>

    <li> ref man now has all JavaScript examples formatted in white for easier identification.</li>

    <li> The command input typein now has click help.
         Type in something and click within it,
         and you'll see the same click help that you see when
         you click on that thing in the editor.</li>

    <li> The "code" examples in the doc pane (white background)
         now have click help.</li>

    <li> New top level article in Doc pane: "Dexter Kinematics"</li>

    <li> Now the simulator is keeping track of set_parameter (oplet "S") instructions.</li>

    <li> Now the simulator is handling and keeping track of write (oplet "w") instructions.</li>

    <li> The simulator more faithfully simulates "empty_instruction_queue_immediately"</li>

    <li> The previous release added a DDE menu bar menu Jobs/move dexter0.
         This has been renamed to Jobs/Run Instruction.
         Clicking on "Run Instruction" itself pops up a dialog allowing
         you more control over running an instruction on Dexter
         including:
         <ul>
             <li>move_to</li>
             <li>move_to_relative</li>
             <li>move_all_joints</li>
             <li>move_all_joints_relative</li>
             <li>empty_instruction_queue_immediate</li>
             <li>switching between the 4 Dexter modes</li>
             <li>sending instructions to any defined Dexter (not just dexter0)</li>
         </ul>
    </li>
    <li> show_window has been extended to handle onchange events for SELECT tags.</li>

    <li> The comment at the top of DDE menubar/Insert/show_window/onchange calls
         has been improved. The Ref Man for show_window now has a brief
         section for onchange.</li>

    <li> move_to and move_to_relative now check for out of range positions
        and error if they are passed them.</li>

    <li> Before the "move_all_joints" instruction (oplet "a") is sent
         to Dexter, its angles in degrees are converted into the arcseconds
         that Dexter requires.</li>

    <li> The method: <code>Dexter.xyz_invalid</code> has been removed.</li>

    <li>Dexter instruction: <code>Dexter.set_keep_position_lock</code>
        has been renamed to Dexter.set_open_loop<li>

    <li>Many changes for converting DDE to SI units including, but not limited to:
        <ul><li>Constants: Dexter.HOME_ANGLES, Dexter.NEURAL_ANGLES Dexter.PARKED_ANGLES converted
                from arcsecondss to degrees.</li>
             <li>move_to, got rid of its 3 base_* args.</li>

             <li>J5_direction can now accept an array of 2 items,
                  each is in degrees (an angle).
                  See RefMan/Robots/Dexter/Dexter Instructions/move_to/J5_direction</li>

             <li>Making a new Dexter robot has had its 3 base_* params replaced with the
                  "pose" param.</li>

            <li> Dexter.move_to if J5_direction and/or config are passed in as null,
                 then get their values from the existing angles in the robot.</li>

             <li>move_to now errors if passed a J5_direction of <br/>
                [90, 90] [-90, -90], [-90 90] or [90, -90]</li>

             <li>wait_until no longer accepts a Duration instance as its first arg.
                 You can still pass it a number, but this number is now
                 interpreted as seconds, not milliseconds.</li>

            <li> beep now takes its duration in seconds, not milliseconds</li>
            <li> The constant Dexter.MAX_SPEED  now has a value of 30 (was 100)
                  and is in units  "degrees per second" not "arcseconds per millisecond"</li>
            <li>  New value: Dexter.MAX_SPEED = 30 // degrees per second</li>

            <li> New value: Dexter.START_SPEED = .05 // degrees per second</li>

            <li> New contant: Dexter.HOME_POSITION    = [0, 0.08255, 0.866775] //meters</li>
            <li> New contant: Dexter.NEUTRAL_POSITION = [0, 0.5,     0.075],   //meters</li>

            <li> Before sending S params of :
                 MaxSpeed, StartSpeed, Acceleration,
                 there values are converted via: Math.round(MaxSpeed * _nbits_cf)</li>
            <li>Before sending S param of: JBoundries,
                 it is now converted to arcseconds.</li>

            <li> All Job examples converted from microns, arcseconds, milliseconds to
                  meters, degrees, seconds.</li>

            <li> Dexter instance variable "xyz" removed.</li>
        </ul>
</ul>
</details>

<details class="doc_details"><summary>v 1.1.10, June 23, 2017</summary>
    Highlights: New DDE menu bar menu Jobs/move dexter0, prop method extended,
                generators extended and documented.
    <ul>
    <li>Minor fix to rel notes 1.1.9 highlights: now: New Robot.dexter0.prop("prop_name")</li>
    <li>"make_ins" is now known to the editor so it won't show a warning red dot.</li>
    <li>Fixed typo in ref man example which now reads: Robot.dexter0.prop("LINK1")</li>
    <li>fixed bug in Robot.dexter0.prop()</li>
    <li> Dexter's prop method has a new parameter: "get_from_dexter"
         See Ref Man/Robots/Dexter/Dexter Utilities/prop for details</li>
    <li> Updated Dexter constants:
        <ul><li>J2_ANGLE_MIN</li>
            <li>J2_ANGLE_MAX</li>
            <li>J3_ANGLE_MIN</li>
            <li>J3_ANGLE_MAX</li>
            <li>J4_ANGLE_MIN</li>
            <li>J4_ANGLE_MAX</li>
         </ul>
    </li>
    <li>simulation simulates actual duration that
        Dexter takes to move between positions.
        Fixes in surrounding code.
        Some other internal problems with simulation fixed.</li>

    <li>When using a JavaScript generator as an instruction,
        you can now yield (with no argument) and
        it will not quit the generator, but just
        do nothing and keep calling the generator
        on the next iteration of the running job.
        You quit the generator by a "return" statement.</li>

    <li> Using JavaScript generators as Job instructions now
         documented in Ref Man/Robot/Robot Instructions/Any JS Generator</li>

    <li>New DDE menu bar menu Jobs/move dexter0 to
         with submenu items:
         <ul><li>HOME_ANGLES</li>
             <li>NEUTRAL_ANGLES</li>
             <li>PARKED_ANGLES</li>
             <li>selection</li>
         </ul>
    </li>
    <li> 11 new unit-converting series added for physics computation. <br/>
         See Series/Units menu.<br/>
         DDE now has 50 series'.
    </li>
</ul>
</details>

<details class="doc_details"><summary>v 1.1.9, June 9, 2017</summary>
    Highlights: New simulate archtecture that more closely models Dexter
    hardware. New Job param: when_stopped. New instructions:
    Dexter.move_all_joints_relative and 4 new Dexter "mode" instructions.
    New Robot.dexter0.prop("prop_name")
<ul>
<li>Now when you switch to edit a file that's in the files menu,
then relaunch DDE, the last file you edited will show up in the editor
after you relaunch.</li>

<li> New Reference manual section Object System/Calling Methods</li>

<li> Ref Man documentation for Control.go_to now has the word
"goto" in it so that users can "find" such a string
if they type in it.</li>

<li> New Dexter instruction Dexter.move_all_joints_relevative takes same params as move_all_joints
     angles default to 0. See Ref Man/Robots/Dexter/Dexter utilities/prop</li>


<li>Dexter.move_all_joints, Dexter.move_to and
Dexter.move_to_relative now properly stores the angles
it causes Dexter to move to.</li>

<li> Cleaned up Dexter.move_all_joints for defaulting values.</li>

<li>Dexter.move_to now errors if told to move out of range.</li>

<li>Dexter.move_to_relative: fixed bugs and documented in the ref man.</li>

<li>improved the program_counter argument of Job.start to
be able to accept an instuction location of a job
that is the same as the job being started, rather than
only NO JOB.</li>

<li>New <code>new Job</code> parameter of 'when_stopped', permitting
a job to loop, have a callback, or wait for an instruction.
See Ref Man/Job/new Job Parameters and
DDE menu item: Jobs/Insert Example/when_stopped.</li>

<li>Now when a job is waiting for "new_instruction",
its button is colored yellow.</li>

<li>New Dexter instructions to set Dexter in a "mode":
  <ul><li>Dexter.set_follow_me</li>
      <li>Dexter.set_force_protect</li>
      <li>Dexter.set_keep_position</li>
      <li>Dexter.set_open_loop</li>
   </ul>
New Ref Man Section: Dexter Instructions/Dexter Modes/
that documents each. Click help supported.
</li>

<li> New support for drawing characters. Not yet documented.</li>

<li> New series: "Dexter Utility" now on the series menu,
with click help for all the methods in the Dexter Utilities
section of the Ref Man.</li>

<li> Kin.J_angles_to_config fixed</li>


<li> Adjusted Jobs/Insert Example/2 microns to not error.</li>

<li>  Extended User Guide with info on "Common JS Errors".</li>

<li>Robot.stop_job now takes a 3rd arg:
       perform_when_stopped (default false )
       See Ref Man/Job/new Job parameters/when_stopped and
       DDE menu bar/Jobs/Insert Example/10. when_stopped</li>

<li> New simulation architecture that more closely models
   Dexter hardware by being more independent of DDE processing.
   This was necessary to support new Jobs param: when_stopped.</li>


<li>Ref man for show_window callback param extended to say that
returned values will be ignored.</li>

<li> DDE menu bar/Jobs/Insert Example/Multiple Jobs respelled to "Sync Jobs"</li>

<li> New constants:
<ul><li>Dexter.MAX_SPEED    = 100 //arcseconds per milliseconds</li>
    <li>Dexter.START_SPEED  = 0.5 //arcseconds per milliseconds</li>
    <li>Dexter.ACCELERATION = 1   //arcseconds^2 per millisecond</li>
</ul></li>

<li>added constant: Dexter.NEUTRAL_ANGLES
           where there's lots of room to move from this position.

<li> New value for Dexter.PARKED_ANGLES  that doesn't error: [0, 0, 486000, 162000, 0 ]</li>


<li> New method: dexter0.prop. sophisticated lookup of properties on Dexter.
   See Ref Man/Robots/Dexter/Dexster Utilities/prop.</li>

<li> New series "job_method" includes Job.insert_instruction and j1.start
     Now has click help and doc in ref man. See DDE menu bar/Series/Job/job method</li>


<li> Speed improvement for testing if a source code string is a date.</li>

<li> Dexter.sleep: fixed bug with duration being off by a factor of a million.</li>
</ul>
</details>
<details class="doc_details"><summary>v 1.1.8, May 19, 2017</summary>
    Highlights: New Robot simulation options "both" (experimental) and null.
                Bug fixes to simulate, send_to_job, serial port
<ul>
    <li> serial port error message fixes.</li>
    <li> fixed bug in running serial jobs that accidentally skipped the
        first instruction of the job.</li>
    <li>fixed bug in grab_robot_status and its documentation.</li>
    <li>fixed bug in that explicitly declaring new Dexter({simulate:false}),
        DDE still used the value of the Jobs menu "Simulate?" item.</li>
    <li><code>robot.simulate</code> now has 2 more options.
        In addition to true and false, we now have <code>"both"</code> and <code>null</code>.
        "both" means it does both simulate and "real" simultaneously.
         but note, these are not perfectly in sync.
        <code>null</code> means: get the value for robot.simulate from
             the Jobs menu item "Simulate?" which
            is persistent across DDE launches.
            See new doc in Ref Man, "new Dexter parameters" under "simulate".
            <p/>
        The Dexter init param: <code>simulate_from</code> is no longer used.
        Please search for and remove uses of it if you have any.
    </li>
    <li> Job Examples updated:
         <ul><li>Jobs/Example 0 (brand new), simplest, just a 1 instruction job with no doc.</li>
             <li>Jobs/Example 1 with new simulate architecture.</li>
             <li>Jobs/Example 4a updated</li>
             <li>Jobs/Example 4c by fixing bug in Job initialization.</li>
             <li>Jobs/Example 4d Updated to take advantage of <code>Job.start</code>'s initial_instruction param.</li>
             <li>Jobs/Example 9  fixed typo in serial port.</li>
         </ul>
    </li>

    <li>Fixed <code>send_to_job</code>, 2 bugs: the setting of user_data via functions passed into the instruction,
         and a bug with sending to a job that has yet to be started.
        New documentation in the Ref Man under send_to_job, start param
        explains the behavior of inserting into an as-yet unstarted job.</li>

     <li> <code>Dexter.move_to_relative</code> fixed default value from [ ] to [0,0,0]</li>

    <li> <code>prompt()</code> now doesn't display "undefined" if you don't give it a title for the
          first arg.</li>

    <li> editor font_size (set from the widget in DDE Editor pane header)
        is now persistent accross DDE launches.</li>

    <li>Now clicking the stop sign doesn't change the color of the button
        for jobs that have been defined but never run.</li>

    <li>hdrobotic.com DDE documentation display:
       <ul>
           <li>Increased the width of DDE documentation.</li>
           <li>Removed the redundant title of "DDE".</li>
       </ul>
     </li>
</details>

<details class="doc_details"><summary>v 1.1.7, May 3, 2017</summary>
    Highlights: Lots of UI tweaks. file system fix.
    <ul>
        <li> Added indenting to "loading persistent" output message.</li>

        <li> File menu new item: "Remove"<br/>
            Tooltip: "Remove the edited file from the file list and editor.<br/>
            Does not delete the file from disk."</li>

        <li> Moved ros url setting to be later in initialization
            to take account of dde_init.js setting.</li>

        <li> Removed big DDE title bar. Now just the little "os" title bar.</li>

        <li> New blue color scheme.</li>

        <li> Renamed "JavaScript" pane to "Editor" pane
            (shorter, more functional description, more compatible with
            future features)</li>

        <li> Editor pane header: files menu now in upper right of header.
            Names of files that are in dde_apps have the folder before
            dde_apps removed so the last part of the name will fit
            in the too-narrow menu.
            Tooltip on the menu shows you the full file path.</li>

        <li> Made files outside of dde_apps accessable.</li>
        <li> Better stop button image. There's a "pressed" indicator.</li>
    </ul>
</details>

<details class="doc_details"><summary>v 1.1.5, Apr 30, 2017</summary>
 Highlights: Fixed bug in load_files, improved doc and DDE launch print outs.
 <ul><li>overview paper
            <ul><li>Minor editing improvements</li>
                <li>Simplified the embedded HTML</li>
                <li>Made img urls work for both DDE and website.</li>
            </ul></li>
     <li> Dexter.get_robot_status Ref Man entry extended with examples.</li>

     <li> Updated Robot.grab_user_status examples.</li>

     <li> New doc section: Ref Man/Robots/Robot Instructions/Any JS Code/</li>

     <li> When DDE launches, now printed in the output pane:
        <pre>
        Now  Loading /Users/Fry/Documents/dde_apps/dde_init.js
        Done Loading /Users/Fry/Documents/dde_apps/dde_init.js</pre></li>

     <li> Fix to load_files when loading paths not starting with slash.
          Fixes a problem with loading dde_init.js</li>

     <li> Better printouts and initialization when loading dde_persistent.json</li>
</ul>
</details>

<details class="doc_details"><summary>v 1.1.2, Apr 22, 2017</summary>
<ul><li> New Insert menu item "Color".</li>

    <li> New functions to modify DDE colors.
        <ul><li><code>set_window_frame_background_color</code></li>
            <li><code>set_pane_header_background_color</code></li>
            <li><code>set_menu_background_color</code></li>
            <li><code>set_button_background_color</code></li>
         </ul>
These are commented out but inserted into the default
dde_init.js file. To get the default dde_init.js file,
rename your existing  dde_init.js  and boot dde.
Documented under Reference Manual/Window System/Set DDE Colors
Each function has click help.
</li>

    <li> <code>load_files</code>, new way to set the default folder.
        See new doc in Ref Man/IO/File Access/load_files.
    </li>

    <li> <code>recognize_speech</code> now working.</li>

    <li> DDE documentation prepared for our website.</li>
    <li> Insert/Examples/Nat Lang Reason updated.</li>

    <li> Errors in test suites for Math fixed.</li>
</ul>
</details>

<details class="doc_details"><summary>v 1.1.0, Apr 18, 2017</summary>
    Highlights: New Jobs bar for controlling Jobs. Bug fixes and UI tweaks.
    <ul>
        <li> <code>Robot.move_to_relative</code> fixed. Now storing robot.angles.</li>

        <li> Doc pane: "Overview", "User Guide", "Known Issues"
             are now top level items. New styling.</li>

        <li> Make Dictionary under the Insert/Examples menu extended.</li>

        <li> Make Dictionary, the help dialog enlarged to accommodate Windows scroll bar.</li>

        <li> When a file can't be loaded due to security restrictions,
              an error message now displayed in
             the Output pane, rather than just the Dev Tools console.</li>

        <li> Test menu item "Selection to test":
             now the selection has whitespaced trimed before using it.</li>

        <li> Fixed bug in <code>Robot.wait_until</code> duration where restarting a job a 2nd time
             didn't wait as it should.</li>

        <li> Fixed bug in <code>Robot.stop_job</code></li>

        <li>  New "Jobs bar" under Output Pane header.
              <ul>
                  <li> Start Job moved from menu item to Jobs Bar button.</li>
                  <li> Start Job Help now accessible by clicking on "Output" pane title.</li>
                  <li> Clear Stopped Jobs now accessible by Jobs bar "Undef" button.</li>
                  <li> Jobs bar contains a button for each defined job.
                        The button changes color, functionality,
                        and tooltip, reflecting the status of the job.</li>
              </ul>
        <li> pane header background color changed from orange to brown.</li>
    </ul>
</details>

<details class="doc_details"><summary>v 1.0.13, Apr 14, 2017</summary>
    Highlights: fix for file protection, first cut of new move_to_relative.
<ul>
    <li> New Insert menu item: "Examples" now contains
    "make dictionary" and "Nat Lang Reason".</li>

    <li> <code>persistent_save</code> documented in ref-man.</li>

    <li> <code>persistent_remove</code> fixed bug.</li>

    <li> The "Configuration" section of the DDE User Guide has been updated.</li>

    <li> improved "out of reach" error messages.</li>

    <li> fix for file protection.</li>

    <li> new move_to_relative, still needs work</li>

    <li> New code for closing <code>recognize_speech</code> streams but errors after several uses.</li>
</ul>
</details>


<details class="doc_details"><summary>v 1.0.11, Apr 10, 2017</summary>
    Highlights: DDE now communicating with Dexter. New default robot is Robot.dexter0.
                Extensions to dde_init.js and dde_persistent.json mean rarely having
                to define a robot with your Job definitions. "Start Job" and "Simulate?"
                menu items reduce now-extranious code in Job definition file and ease
                switching between simulate and real.
<ul>
    <li> Now access to files outside of the user's Documents/dde_apps/ folder is restricted.
                This is to prevent potentially malicious code running within DDE.</li>

    <li> <code>write_file</code> doc updated.</li>

    <li> <code>persistent_clear</code> renamed to <code>persistent_initialize</code> and
         the functionality was extended. Doc updated.</li>

    <li> Stop all jobs is now closing (disconnecting) the job's robot if its a Dexter.</li>

    <li> DDE now communicating with Dexter.</li>

    <li> dde_persistent.json now has a comment at top of file.</li>

    <li> A comment above release notes now says some releases have no release notes.</li>

    <li> Now you can edit the font size by typing, and hitting ENTER
         causes the new font size to take effect.</li>

    <li> Now clicking anywhere in the menu item of
        the "Real time sim" menu item toggles the checkbox.</li>

    <li> Choosing series menu item "Test Suite" now inserts
        the first test suite.ISSUE: Series>Test Suite, didn't seem to do anything.</li>

    <li> Replaced: "There is nothing[blue] in the editor" with
          "The Editor is empty. Type to insert text."</li>

    <li> Choosing Editor menu item Undo now works.</li>

    <li> Replaced editor menu item of:
        "Right click menu has more ops". with
        "Right click menu in JS pane has more operations."</li>

    <li> New default robot is <code>Robot.dexter0</code>.</li>

    <li> New items in dde_init.js and dde_persistent.json
        new initialization of these files to make configuration easier.
        Once you configure dexter0 in dde_init.js, mostly
        you won't have to touch it again, or use another robot.
        Thus defining a robot in a Job definition file becomes unnecessary.</li>

    <li> new Jobs menu item "Simulate?" checkbox.
        This sets the persistent variable: "default_dexter_simulate"
        and that's used when a job using dexter0 is starting.</li>

    <li> Dexter robot objects now have a property: <code>simulate_from</code>
        If this is has the value: <code>"persistent_get"</code> (the default)
        then every time a job is started with this robot,
        the robot's simulate flag is set to the value of
        <code>persistent_get("default_dexter_simulate")</code>
        Please see new doc in the ref man on Dexter and its parameter: simulate_from.</li>
</ul>
</details>


<details class="doc_details"><summary>v 1.0.10, Apr 2, 2017</summary>
    Highlights: Start Job menu item. New JS type-in, recognize_speech mostly working.
<ul>
<li> Doc, Output and Simulation pane headers fixed to not wrap when pane is shrunk.</li>

    <li> Rearranged Output pane header widgets.</li>

    <li> Added JS/ROS radio buttons to Output pane header.
    When JS is selected (the default), hitting enter evals
    the typed in JS. up and down arrows navigate js cmd history.</li>

    <li> github README and releases page documentation extended.</li>

    <li> new Jobs Menu "Start Job" item (and "Start Job help" menu item).
         Choose menu item "Start Job help" for details.</li>

    <li> html code tags now display with a white background helping them
    stand out better in the documentation.</li>

    <li><code>recognize_speech</code> working pretty well. Still some minor issues
        depending on the click_to_talk and only_once arguments. Interacts poorly with
        <code>speak</code>.</li>

    <li> Change in new object system that broke Coord system fixed,
        but still 4 bugs in Coord system test suite.</li>
</ul>
</details>

<details class="doc_details"><summary>v 1.0.9, Mar 25, 2017</summary>
    Highlights: Updating DDE much easier. Robot.start_job and Robot.stop_job.
    Improved Doc. Job init param: ending_program_counter.
<ul>
<li> When using Doc pane Find button, better help text printed in
Output pane.</li>

<li> <code>Robot.wait_until</code> can now take an instruction_location
    (only arrays and lit objs format accepted) as it argument
    to wait until that instruction_location is reached in another job.</li>

<li>when DDE launches it prints in the output pane its
DDE version and date. If its not the latest release,
it tells you what is and how to get it.</li>

<li> "Update..." is a new File menu item that tells you the same thing.</li>

<li> Removed DDE Dexter instructions: <code>move_all_joints_relative</code>
     and <code>move_to_relative</code>. Just use the new coord sys.</li>

<li> Documented "Any Function Def" as a kind of instruction in a do_list,
   under Ref Man Robot. This was an important omission: recommended reading!</li>

<li> User Guide 'Installation" now documents new github process.</li>

<li> New instruction <code>Robot.start_job</code>
    let's you start other jobs flexibly from within a job.</li>

<li>New init option for a job (and the start function)
    <code>ending_program_counter</code> allows you to
    declare at the outset to stop a job early.
    Can be any instruction_location.</li>

<li> Extended instruction: <code>Robot.stop_job</code>  (renamed from Robot.stop)
  Now takes an instruction_location so it can stop other jobs
  AND stop them at any of their instructions.</li>

<li> <code>beep</code> and <code>beeps</code> now documented in the ref man with click help.</li>

<li> Click help on [ and ] now works.</li>
</ul>
</details>

<details class="doc_details"><summary>v 1.0.4, Mar 16, 2017</summary>
Highlights: New Electron Framework, New instruction Robot.grab_robot_status,
Serial Port extensions, file access improved, dxf improvements,
go_to instruction and friends, better help in finding doc.
Please read Known Issues.
<ul>
    <li>Electron Framework replaces Google Chrome App. Facilitates
    single JavaScript environment and utilization of node.js packages.</li>

    <li>The persistent db is now stored in a file named dde_apps/persistent.json
    Unlike the previous DDE, you can now look at this file in  text editor
    and easily see exactly what's in it. If you edit this file.
    do so when DDE is not running because dde will over-write it.
    You can even move this file to another installation of DDE
    and have it work.</li>

    <li>Switching between files now remembers the old scroll position and
    selection of a file so that if you switch back to it, it scrolls
    to (almost) the same place and highlights the selection.</li>

    <li>If the "file" you are editing is "new file", and you quit and
    relaunch DDE, you will be showed an empty "new file" in the editor
    instead of one of your previously edited files.</li>

    <li>The get_page function is now syncrhonus. It does not
    take a callback, and it returns the contents of the url
    in its argument. A new function get_page_asynchronous
    <i>does</i> take a callback and does <i>not</i> return
    the contents of the url in its first argument.
    </li>

    <li> Robot.get_page has changed slightly incompatibly
    in a similar way to the get_page function call.
    Its first argument is a url_or_options,
    Its second arg is response_variable_name.
    There are no other arguments.
    The Get_page instruction cause the job to not advance to the next instruction
    until the get_page request has completed.
    If get_page has errored, the response_variable_name will contain
    a string starting with: "Error: "</li>

    <li>The Dexter and job for calibration is no longer defined upon start up.
    You have to call:
    init_calibration()
    This returns the job, which you can then do:
    init_calibration().start()  to start the job.
    We'll be making this easier in the near future.
    </li>

    <li>job examples 3 & 7 improved.</li>

    <li> file_content now doesn't take a callback and just returns the string
    of the content of the file indicated in the path of its first argument.</li>

    <li>load_files now doesn't take a callback and just returns the value of the
    last expression in the last file loaded.
    The "paths" parameter to load_files has been simplified. See the ref man doc.</li>

    <li> minor improvements to SVG examples. All SVG examples work.</li>

    <li> Documentation: added into the doc pane,
    the url to the HDRobotic video page (under About) and the DDE video
    (under "User Interface")</li>

    <li> serial port improvements:
      <ul><li> serial_devices() returns a list of available serial port devices.</li>
          <li>serial_path_to_info_map holds an object for each connected serial port device.</li>
          <li>New Job Example 9 for Serial Port & Arduino tutorial </li>
      </ul>
    </li>
    <li>Job Examples now on a submenu under the Jobs menu.</li>

    <li>Removed job instance field: robot_status. It as redundant and error prone.
         Use Job.j1.robot.rotbut_status to get it if you need it,
        but you won't because ....</li>

    <li>New instruction Robot.grab_robot_status makes getting at
        data in robot_status much easier</li>

    <li> newObject now ignores "name" arg if it is null or undefined.
        But if it is some OTHER non-string, newObject errors.</li>
    <li> <code>Root</code> is a new global variable that holds the
       root of the object system. So all object systems paths should
       now start with Root.</li>

    <li> Dexter.draw_dxf fixed bug that ignored the 3rd argument and always treated it as 2000</li>
    <li>Dexter.draw_dxf first argument is usually a string <= 512 long
      that ends in .dxf or .DXF. If it does not, the first argument
      will be assumed to be a string of actual dxf code.</li>

    <li> File access is restricted to files under the "dde_apps" folder in your
    Documents folder. You no longer need to set up a server to access these files,
    or to have edited them first.</li>

    <li>  You can now use the JavaScript functions: alert, confirm, prompt,
    quite useful for debugging and rapid prototyping.</li>

    <li> tweaks to the UI to make it "fit" better.</li>

    <li> New "Eval Doc" button in the Doc pane. Let's you evaluated
    a selected code example in the Doc pane and see the result
    in the output pane.</li>

    <li> Replaced the individual videos with
    just one url to the hdrobotic.com video page.
    </li>

    <li> new instruction Robot.label("a string"), its a no-op but provides
      target for go_to.</li>

    <li> new instruction Robot.go_to(instruction_location)
      "jumps" the program counter. Lots of functionality in ref man doc.</li>

    <li> Now clicking on TestSuite gives you click help with an underlined
    "TestSuite" that you can click on to see documentation.</li>

    <li>job.start  now can take "program_counter" and its an instruction_location
    to init the program_counter to something other than the first instruction.
    The default is 0, meaning first instruction on do_list is the first one run.
    Like "go_to" at the beginning of a job.</li>

    <li> job.start now can take initial_instruction as an instruction to run first.
    This replaces the old param to Job.start of "sent_from_job" which was
    used when a non-started job was sent an instruction.
    The new initial_instruction is much more general since it can be used
    when creating a job, when calling Job.start or by send_to_job.
    The default is "no instruction". When it exists and
    a job is started, the initial_instruction is run just BEFORE the
    instruction at the initialized program_counter (which defaults to 0).</li>

    <li> The documentation "About" section now shows the release date of
    the DDE version loaded.</li>

    <li> load_files ref man documentation now has examples.</li>

    <li> dde_init.js now documented (under "Installation/Launch DDE").</li>

    <li>  start method now takes a program_counter
       program_counter: allow a new items: "highest_completed_instruction"
    and "highest_completed_instruction_or_zero"
    So that if the job errors, and pc init is "highest_completed_instruction_or_zero"
    we DON"T reset the do_list to the orig do_list,
    but keep it the same, and go and grab the id of the
    instruction that errored and use it.</li>

    <li>  Instruction.send_to_job no longer takes a "to_job_name"
    as an explicit parameter, however,
    the where_to_start param can be any instruction_location
    used by Robot.go_to, or program_counter setting.
    Can include a job property but defaults to "this job".</li>

    <li>  New static method Job: Job.insert_instruction(instruction, location )
      where location same format as go_to, setting program_counter.</li>

    <li>  sent_from_job was documented but I've undocumented it.
     Users should use new facilities in
    new job and start's initial_instruction, Job.insert_instruction.</li>

    <li>  Instruction Robot.wait_until extended to take new value for
       its argument "new_instruction" meaning
    when wait_until first gets called, it captures the
    instruction after it (which could be none, if the wait_until is
    the last instruction), then waits until
    the next instruction is different,
    then it unpauses.
    Often put on the end of a do_list, or maybe the only thing
    initially on a do_list, and waits until something gets on it.</li>

    <li> If the search type-in box is empty when you click the doc "Find" button,
    the selected text in the Doc, Editor, or Output pane is used,
    as noted in the new tooltip for the Find type-in box.</li>
</ul>
</details>
</details> <!-- end rel notes -->
`
