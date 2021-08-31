export function install_known_issues(){
    doc_pane_content_id.innerHTML += content
    content = null //so it will be garbage collected
}
var content =
`<details id="known_issues_doc_id"><summary class="doc_top_level_summary">Known Issues</summary>
<div style='font-size:16px;'>
     This section lists the significant problems we are aware of
with this DDE release. All of them are on our "do list".
<p></p>
<ul>
  <li>Sometimes, on Windows 10 computers, the editor pane won't accept typed in characters.
      Workaround: Shrink and expand the DDE window or click outside the DDE window
      then click back in it.</li>
  <li> <code>Plot.show(...)</code> shows a bunch of icons in the upper right of a plot window.
       Most of these don't work (at least well).</li>
   <li> The simulator <b>both</b> setting basically works but real and sim are not in
       perfect sync.</li>
   <li> The simulator does not work for DELTA, PID_DELTA, A2D_SIN, A2D_COS.</li>
  <li>The Messaging software is not yet intended for public use. We're still testing.</li>
  <li>Jobs menu/Run Jobs on Dexter will take some work to get it to operate smoothly.
      You'll also need a new SD card image on your Dexter.</li>
   <li>Picture.detect_blobs: the data about each blob is inconsistent with
       itself. detect_blobs <i>appears</i> to work but actual x, y locations
       for each blob are wrong.</li>
   <li>Picture.show_video() sometimes comes up with a blank video, not showing the
       output of your webcam. Often just closing the show_window that is attempting
       to display the video and starting over will work.
       This intermittent problem also occurs when calling Picture.take_picture
       which needs webcam output.</li>
    <!-- not sure this is really needed with the new timeout<li>Do not attempt to run a Job while Dexter is in the process of booting.
        Wait for its "dance" to be over. </li> -->
    <li>Speech Recognition is busted.</li>
    <li>The new subsystems in DDE of ezTeach to_source_code, OpenCV, and
        Drawing with DXF are works in progress. They need better support,
        and their API may change.</li>
    <li>Dexter Kinematics article in doc pane is incomplete.</li>
    <li>None of the apps for the 3 platforms are "signed", thus you get warnings
        when installing them about being "untrusted". You might have
        to turn off virus protection, or click right on the
        <code>dexter_dev_env</code> file to launch it.
    </li>
    <li>Linux release poorly tested.</li>
    <li>Dexter.run_gcode needs many extensions.</li>
</ul>
</div>
</details>
`