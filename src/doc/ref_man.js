export function install_ref_man(){
    doc_pane_content_id.innerHTML += content
    content = null //so it will be garbage collected
}
var content =
`<details><summary class="doc_top_level_summary">Reference Manual</summary>
 <div style='font-size:16px;'>


<details id="i/o_doc_id" class="doc_details"><summary>I/O</summary>
        <details class="doc_details"><summary>CSV</summary>
        CSV stands for "Comma Separated Value". It is a file format for spreadsheets
        and some other two-dimensional data using programs.
        Both MicroSoft Excel and Apple Numbers spreadsheets can read and write CSV files.
        <p></p>
        CSV is not a tight standard. There are variants so beware.
        DDE's CSV methods convert a string of CSV into a two dimensional array,
        and converts 2 dimensional arrays into strings.
        These functions are simple, not meant to handle complex data or lots
        of variants.
            <details class="doc_details"><summary>array_to_csv</summary>
            Converts a two dimensional array into a string that has
            its rows separated by the newline character, \n and
            the "cells" within each row separated by commas.<br/>
            <i>Parameter:</i></br/>
            <b>an_array</b> The array is expected to be two dimensional
            with the outer arrays representing rows, and
            the inner arrays representing cells.<br/>
            <i>Example:</i>
            <pre><code>array_to_csv([["head one", "head two"],
              [10, 20], [100, 200]])    </code></pre> =>
            <samp>&#96;head one,head two\n10,20\n100,200&#96;</samp> <br/>
            Note that there are no quotes around the string values of "head one" and "head two".
            If this string is read in by <code>csv_to_array</code>,
            "head one" and "head two" will be strings and the other values
            will be numbers.
            <p></p>
            You can use DDE's <a href="#" onclick="DocCode.open_doc(write_file_doc_id, event)">write_file</a>
            to write the result of calling <code>array_to_csv</code> to a file.
            </details>
            <details class="doc_details"><summary>csv_to_array</summary>
                Converts a string of csv format into a two dimensional array.
                If the string has a newline char, \n, then newline is used
                for the row separator, otherwise \r is used.
                (Excel uses \r.)<br/>
                If the string has a comma char, then comma is used as the
                separator between cells in a row, otherwise tab, \t, is used.
                <br/>
                <i>Parameter:</i></br/>
                <b>a_string</b> The string is expected to have newlines or \r separate rows
                and commas or tab characters separate cells within a row.<br/>
                <i>Example:</i>
                <code>csv_to_array(&#96;head one,head two\n10,20\n100,200&#96;)</code> <br/>=>
                <samp>[["head one", "head two"], [10, 20], [100, 200]])</samp>
                Note that the numbers in the csv are converted to JS numbers,
                and the other values are left as strings.
                <p></p>
                You can use DDE's <a href="#" onclick="DocCode.open_doc(read_file_doc_id, event)">read_file</a>
                to get the content of a csv file, then pass it to <code>csv_to_array</code> to
                turn it into an array.
            </details>
        </details> <!-- end CSV -->

        <details class="doc_details"><summary>File Access</summary>
            Web clients reading an writing files to their local file system has been impossible in the past.
            DDE gives you programmatic read/write access to all files under the dde_apps folder
            under your Documents folder, typically under the user's home folder.
            <p></p>
            The code for your Job definitions should live under that folder (at any depth beneath
            that folder).
            If you do not have a dde_apps folder under your Documents folder, please create one.



        <details id="append_to_file_doc_id" class="doc_details"><summary>append_to_file</summary>
            Append content to a file path. Leaves the existing content in place but
            adds to the end of it. If the file does not exist, it is created.<br/>
            <i>Parameters</i><br/>
            <b>path</b> Usually a string of a file name, but can be a buffer or URL.
              If a string arg does not start with a slash, and is not a url,
              <code>dde_apps_folder</code> is prepended to it.<br/>
            <b>content</b> a string, Buffer or Uint8Array to append to the file.<br/>
            <b>encoding</b> Default: <code>"utf8"</code> See
            <a href="#" onclick="DocCode.open_doc(write_file_doc_id)">encoding details</a><br/>
            <i>Example:</i><br/>
            <code>append_to_file("log6.txt", "hey world")</code>
        </details>

            <details id="choose_file_doc_id" class="doc_details"><summary>choose_file</summary>
            Pops up a dialog box allowing you to navigate the file system to choose a file.
            Returns a string of the full path of the file.
            <br/>
            <i>Parameter:</i><br/>
            <b>show_dialog_options</b> A JS literal object of name-value pairs, all of which
            are optional. See the options under "showOpenDialog" in <a target="_blank" href="https://github.com/electron/electron/blob/master/docs/api/dialog.md">showOpenDialog</a>
            for details.<br/>
            <i>Example:</i><br/>
            <code title="not in TestSuite"> choose_file({buttonLabel: "pick the best"})</code> Just lets you choose files.<br/>
            If the user chooses "cancel" in the dialog box, this function returns <code>null</code>.
            If the options indicate that the user can choose more than one path, and they do,
            (using shift-click)
            an array of paths is returned. Otherwise (the default) just one path (a string) is returned.<br/>
            See also <a href="#" onclick="DocCode.open_doc(choose_folder_doc_id)">choose_folder</a>
        </details>

        <details id="choose_save_file_doc_id" class="doc_details"><summary>choose_save_file</summary>
            Pops up a dialog box allowing you to enter a name to save a file as,
            and navigate the file system &amp; choose a directory to save it in.
            Returns a string of the full path of the file.
            Does not actualy <i>save</i> the contents of the file. Use
            <code>write_file</code> for that.
            <br/>
            <i>Parameter:</i><br/>
            <b>show_dialog_options</b> A JS literal object of name-value pairs, all of which
            are optional. See the options under showSaveDialog in <a target="_blank" href="https://github.com/electron/electron/blob/master/docs/api/dialog.md">showSaveDialog</a>
            for details.<br/>
            <i>Example:</i><br/>
            <code title="not in TestSuite"> choose_save_file({buttonLabel: "save the best"})</code>
        </details>

        <details id="choose_folder_doc_id" class="doc_details"><summary>choose_folder</summary>
            Pops up a dialog box allowing you to navigate the file system to choose a folder.
            Returns a string of the full path of the folder.
            <br/>
            <i>Parameter:</i><br/>
            <b>show_dialog_options</b> A JS literal object of name-value pairs, all of which
            are optional. See the options under "showOpenDialog" in <a target="_blank" href="https://github.com/electron/electron/blob/master/docs/api/dialog.md">showOpenDialog</a>
            for details.<br/>
            <i>Example:</i><br/>
            <code title="not in TestSuite"> choose_folder()</code> Just lets you choose folders.<br/>
            If the user chooses "cancel" in the dialog box, this function returns <code>null</code>.
            If the options indicate that the user can choose more than one path, and they do,
            (using shift-click)
            an array of paths is returned. Otherwise (the default) just one path (a string) is returned.<br/>
            See also <a href="#" onclick="DocCode.open_doc(choose_file_doc_id)">choose_file</a>
        </details>

        <details id="copy_file_async_doc_id" class="doc_details"><summary>copy_file_async</summary>
        Copy a file from a source to a destination file.
        <p></p>
        <i>Parameters:</i><br/>
        <b>source_path</b> Required. A string of a file path. The file can be of any type.<br/>
        <b>destination_path</b> Required. A string of a file path. Will create a new
        file if it doesn't exist, or overwrite an existing file if it does exist.<br/>
        <b>callback</b> Default: a function that prints out success or failure in the output pane.
          The function takes one argument, an error object.
        The function is called if the read operation of the source_path errors,
        such as when the source_path file doesn't exist.
        If no error on the read operation, the write operation is called
        with the callback passed as its callback. If the error object passed is
        <code>null</code>, that means the operation succeeded.
        <p></p>
        <i>Examples:</i><br/>
        <pre><code>copy_file_async(
    "dde_init.js",
    "dde_init_copy_for_testing.js",
    function(err){
        if(err) {warning("copying dde_init.js errored with: " + err.message)}
        else { out("dde_init.js copied successfully.")}
        })    </code></pre>

        <code>copy_file_async("foo.js", "Dexter.dexter0:foo_copy.js")</code>
        Copies the file "dde_apps/foo.js"<br/>
        to the ip address in</br/>
        Dexter.dexter0, and file: /srv/samba/share/dde_apps/foo_copy.js<br/>
        The callback defaults to one that prints success or failure
        to DDE's output pane.
        </details>

        <details id="copy_folder_async_doc_id" class="doc_details"><summary>copy_folder_async</summary>
         Copies a folder and all its contents recursively to another folder.<br/>
         <i>Parameters:</i><br/>
         <b>source_folder</b> The folder containing the existing files to be copied.<br/>
         <b>destination_folder</b>
                  The folder that will contain new copies of the content
                  of the source_folder.
                  If the destination folder or any of its sub-folders don't exist,
                  they will be created.<br>
         <b>callback</b>
            A function of one arg, an error object. If the arg passed is <code>null</code>
            that means that their is no error and the copy succeeded.
            Default: A function that just prints its error object arg's message
             to the Output pane.<br/>
         <i>Example:</i><br/>
         <code title="unEVALable">copy_folder_async("old", "new")</code><br/>
         The parent folders of both "old" and "new" is the normal default in dde,
         i.e. the "dde_apps" folder.
         Upon successful completion, the dde_apps folder will contain a new sub-folder
         named "new", whose contents is a copy of the contents of the "old" folder.
        </details>

        <details id="dde_apps_folder_doc_id" class="doc_details"><summary>dde_apps_folder</summary>
            <code>dde_apps_folder</code> is a global constant whose value is a string
            of the name of the folder beneath which DDE has programmatic access.
            You cannot set this constant. It will have a value something like:
            <code>"/Users/Fry/Documents/dde_apps"</code> on the Mac.
        </details>

        <details id="Editor.edit_file_doc_id" class="doc_details"><summary>Editor.edit_file</summary>
            <code>Editor.edit_file</code> takes an argument of a filepath, similar to <code>load_files</code>,
            and puts that file in DDE's editor.
            <p></p>
            Its 2nd argument is a callback that takes no arguments. It is called when the file's content
            is in DDE's editor.<br/>
            <b>Example:</b> <code>Editor.edit_file("dde_init.js")</code> edits the
            file Documents/dde_apps/dde_init.js<br/>
            You can also edit docs in subfolders, ie <code>"my_fold/junk.js"</code>
        </details> <!-- end edit_file -->

        <details id="file_exists_doc_id" class="doc_details"><summary>file_exists</summary>
        Returns true if the file path in the first argument exists.<br/>
        <I>Example</i>:<br/>
        <code>file_exists("dde_init.js")</code> => true
        </details>

        <details id="folder_listing_doc_id" class="doc_details"><summary>folder_listing</summary>
            Returns an array of strings naming the files and/or subfolders in a folder.<br/>
            <i>Parameters:</i><br/>
            <b>folder</b> Default: <code>dde_apps_folder</code> A string of the name of
               the folder to get the listing of.<br/>
            <b>include_files</b> Default: <code>true</code>  Whether or not to include
               files in the returned array.<br/>
            <b>include_folders</b> Default: <code>true</code>  Whether or not to include
            subfolders in the returned array.<br/>
            <b>include_folder_name</b> Default: <code>true</code>  Whether or not to include
               the full path of the file or folder in the string returned for
               each folder entry, or just its name and extension.<br/>
            <i>Example:</i> <code>folder_listing()</code><br/>
              Returns an array of strings naming the files and subfolder in
              your dde_apps folder (under your "Documents" folder).
        </details>
        <details id="folder_separator_doc_id" class="doc_details"><summary>folder_separator</summary>
            A function of no arguments that returns the character used to separate folders in a filepath.
            For Windows OS's this is "\\" (backslash).
            For others its "/" (forward slash).
        </details>
        <details id="get_latest_path_doc_id"class="doc_details"><summary>get_latest_path</summary>
           DDE has a file versioning convention. File pathames of the format
           <code>"/foo/bar/baz_2.txt"</code> are considered to be "version 2" of
           the file <code>"/foo/bar/baz.txt"</code>
           Version numbers start at 0 and increment up.
           <p></p>
            get_latest_path returns the full path of a file in the designated folder
            that has the highest version number. If there is no versioned file
            (ie its file name doesn't end with an underscore followed by an integer)
            with the designated folder, name, and extension, then <code>null</code> is returned.<br/>
            <i>Parameter:</i><br/>
            <b>path</b> Required string. If the path does not start with a slash,
            it is expected to be under <code>dde_apps_folder</code>. The path
            may or may not have a version number or file extension.
            <p></p>
            <i>Examples</i><br/>
            <code>get_latest_path("foo")</code> If "foo" does not exist in <code>dde_apps_folder</code>, returns <code>null</code>.
                               If "foo"  exists, but there is no "foo_0" or
                               similar versioned foo, returns null.
                               If foo_0 and foo_3 exists but no higher version numbers, returns
                               <code>"/Users/Fry/Documents/dde_apps/foo9_3.txt"</code>
                               (or wherever your <code>dde_apps_folder</code> is.
            <p></p>
            <code title="not in TestSuite">get_latest_path("/foo/bar/foo_3.txt")</code>
              If no file in "/foo/bar/ with a name of "foo_*.txt
              (where * means any non-negative integer) exists, then <code>null</code> is returned.
              Otherwise, the file path with the highest version number is returned, such as:
              <code>"/foo/bar/foo_5.txt"</code>
            <p/>
            Version numbers do not have to be contiguous.<p></p>
            See also <a href="#" onclick="DocCode.open_doc(make_unique_path_doc_id)">make_unique_path</a>
        </details>
        <details id="is_folder_doc_id"class="doc_details"><summary>is_folder</summary>
             Returns <code>true</code> if the argument represents a folder, <code>false</code> otherwise.
             <i>Parameters:</i><br/>
             <b>path</b> Default: <code>dde_apps_folder</code> The string naming the
                file or folder to test.<br/>
            <i>Example:</i> <code>is_folder()</code> => <samp>true</samp>
        </details>
        <details id="load_files_doc_id" class="doc_details"><summary>load_files</summary>
            <code>load_files</code> gets the content of files from disk
            (expected to be JavaScript) and evaluates
            it in the DDE environment programmatically. You can pass any number of file paths to
            load files. It will load the files sequentially, such that later files
            can depend on the contents of earlier files loaded.
            <p></p>
            File paths that start with slash are absolute and have no prefix prepended to them.
            File paths that don't start with slash have a prefix appended to them.
            The default prefix is the value of <code>dde_apps_folder + "/"</code>
            A file path that is exactly <code>"/"</code> sets the prefix
            to the default.
            <p></p>
            File paths that end in slash don't load files but do set the prefix to be
            prepended for files in later args.
            If such a file path starts with slash, it becomes the prefix
            (other than <code>"/"</code> , see above).
            If not, the new prefix is <code title="unEVALABLE">dde_apps_folder + "/" + path</code>
            This saves repetition of long folder names.
            <p></p>
            <i>Examples</i>:<br/>
            <code title="not in TestSuite"> load_files("foo.js")</code> Loads the file in your dde_apps folder named foo.js<br/>
            <pre style="background-color:white;"><code title="not in TestSuite"> load_files(
 "c.js",   //loads .../dde_apps/c.js
 "a/b.js", //loads .../dde_apps/a/b.js
 "d/e/",   //no load but sets prefix to ".../dde_apps/d/e/"
 "f.js,    //loads .../dde_apps/d/e/f.js
 "g.js",   //loads .../dde_apps/d/e/g.js
 "/",      //no load but sets prefix to .../dde_apps/
 "h.js"    //loads .../dde_apps/h.js
)
</code></pre>
            <p></p>
            load_files <i>tries</i> to return the result of evaluating the last top level expression in the last file loaded.
            <span style="color:red;">Warning</span>: Sometimes the last expression
            is NOT returned, so if you really want a returned value,
            its safer if the file contains only ONE top level expression.
            <p></p>
            It is conventional to use a file extension of ".js" for files containing JavaScript,
            but not strictly necessary.
            <p></p>
            See <a href="#" onclick="DocCode.open_doc(read_file_doc_id, event)">read_file</a>
            for getting the file contents as a string but not evaling it.
            <p></p>
            See <a href="#" onclick="DocCode.open_doc('Py.load_file_doc_id')">Py.load_file</a>
            for importing a Python file into DDE's Python process.
        </details> <!-- end load_files  -->

        <details id="loading_file_doc_id" class="doc_details"><summary>loading_file</summary>
        <code>loading_file</code> is a global variable bound to the full path
        of the file being loaded. If no file is being loaded, it is <code>undefined</code>
        </details>

        <details id="make_folder_doc_id" class="doc_details"><summary>make_folder</summary>
        Creates potentially nested folders in the file system.<br/>
        <i>Parameter:</i><br/>
        <b>path</b> Required. Similar to other DDE file utilities, if the
        path doesn't start with "/", the top level folder name in path
        is created under the Documents/dde_apps folder. If specified folders already exist,
        they are ignored, but subsequent folder names in the path are created under
        the existing folders.<br/>
        <i>Example:</i><br/>
        <code title="not in TestSuite">make_folder("foo/bar/baz")</code>
        Makes the folder dde_apps/foo. Inside of it is placed
        a folder named "bar", and inside of that is placed a folder "baz".
        </details>

        <details id="make_full_path_doc_id" class="doc_details"><summary>make_full_path</summary>
           Most DDE functions that take a path will accept a partial path
           (that doesn't start with a slash) by defaulting the starting folder to
           the value of <code>dde_apps_folder</code>. This conversion is done by calling
            <code>make_full_path</code>. <br/>
           <i>Parameter</i><br/>
           <b>path</b> A string. required.
           <ul>
                <li>If path starts with slash, path is returned.</li>
                <li>If path starts with ./ or a letter, a full path like:
                    <code>"/Users/Fry/Documents/dde_apps/foo.js"</code> is returned.</li>
                <li>If path starts with ../  a full path like:
                   <code>"/Users/Fry/Documents/foo.js"</code> is returned.</li>
           </ul>
           <i>Example:</i><br/>
           <code title="not in TestSuite">make_full_path("foo.js")</code> => <samp>"/Users/Fry/Documents/foo.js"</samp>
           <br/>
           Note that the file doesn't have to actually exist for make_full_path to work.
        </details>
        <details id="make_unique_path_doc_id"class="doc_details"><summary>make_unique_path</summary>
            DDE has a file versioning convention.
            See also <a href="#" onclick="DocCode.open_doc(get_latest_path_doc_id)">get_latest_path</a>
            for details.
            <p></p>
            <i>Parameter:</i><br/>
            <b>path</b> Required string. If it doesn't start with slash, <code>dde_apps_folder</code>
            will be prepended. Returns a path that is the next highest version number of the file
            from all the other similar files in that folder.
            If there are no versions of this file, return a path with version number 0.
            <p></p>
            <i>Examples:</i><br/>
            <code>make_unique_path("foo.txt")</code> returns something like:
                <code>"/foo/bar/foo_5.txt"</code> if <code>"/foo/bar/foo_4.txt"</code>
                is the highest version of foo.txt in the folder.
            <p></p>
            <code title="not in TestSuite">write_file(make_unique_path("foo.txt"))</code>
            for ensuring that each time you call the above code, it makes a new file
            and does not overwrite, any existing version.
        </details>
        <details id="read_file_doc_id" class="doc_details"><summary>read_file</summary>
            <code>read_file</code> is a function that takes an argument of a file path,
            and returns a string of the content of the file.<br/>
            <i>Parameters:</i><br/>
            <b>path</b> A string of a path to the file. Usually this will not start with a slash,
            but rather the first character of a file name inside of your <code>dde_apps_folder</code>.
            If the path starts with a slash, it should be a complete path from the root
            of your file system, on through to the file you want to read.
            <br/>
            <b>encoding</b> Default: <code>"utf8"</code> A string indicating the
            type of file to be read.
            The default works fine for most plain text files, including .js files.
            Some possible values:
            <ul>
                <li><code>"utf8"</code></li>
                <li><code>"ascii"</code></li>
                <li><code>"base64"</code></li>
                <li><code>"hex"</code></li>
            </ul>
            <a href="#" onclick="browse_page('https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings')"
            >Encoding details</a>
            <p></p>
            <b>Example:</b> <code>read_file("dde_init.js")</code>
            <p></p>
            See <a href="#" onclick="DocCode.open_doc(load_files_doc_id, event)">load_files</a>
            for grabbing the file contents, then evaling it.
            <p/></p>
            See also Dexter instruction: <a href="#" onclick="DocCode.open_doc('Dexter.read_file_doc_id', event)">Dexter.read_file</a>
            <p></p>
            <span style="color:red;">file_content</span> has been deprecated.
            Please use <code>read_file</code> instead.
        </details> <!-- end read_file -->

        <details id="read_file_async_doc_id" class="doc_details"><summary>read_file_async</summary>
           Similar to <a href="#" onclick="DocCode.open_doc(read_file_doc_id)">read_file</a>
           but does not return the
           file contents. Instead, it takes an additional argument
           of <b>callback</b>.
           The callback is passed an error object and the content of the file.
           If the error object is null, there was no error, and the content
           argument contains the content of the file.
           <p></p>
           The <b>path</b> argument may refer to a Dexter robot to get the file from.<br/>
           <i>Example:</i><br>
           <pre><code title="not in TestSuite">read_file_async("Dexter.dexter0:dde_init.js", "utf8",
               function(err, content){
                   out("read_file_async got err: " + err + " content: " + content)
               })    </code></pre>
        </details>


     <details id="write_file_doc_id" class="doc_details"><summary>write_file</summary>
        <code>write_file</code> is a function that takes an argument of a file path
        and a new content string. It sets the content of that file.<br/>
        Arguments:<br/>
        <b>filepath</b> A string. The location to save to. It will overwrite the current content.
        Defaults to the file currently in the
        editor. If this is a string, usually this will not start with a slash,
         but rather the first character of a file name inside of your dde_apps folder.
         (  <code>dde_apps_folder</code> ).
         If the path starts with a slash, it should be a complete path from the root
         of your file system, on through to the file you want to write.<br/>
        <b>content</b> A string of the content you wish to be in the written file.
        Defaults to the text currently in the editor.<br/>
        <b>encoding</b> Default: <code>"utf8"</code> A string indicating the
        type of file to be written.
         The default works fine for most plain text files, including .js files.
         Some possible values:
        <ul>
            <li><code>"utf8"</code></li>
            <li><code>"ascii"</code></li>
            <li><code>"base64"</code></li>
            <li><code>"hex"</code></li>
        </ul>
        <a href="#" onclick="browse_page('https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings')"
           >Encoding details</a>
        <p></p>
        Examples: <br/>
        <code>write_file("no_exist.js", "stuff")</code> Creates the named file and gives it a content of "stuff".<br/>
        <code>write_file("junk.js")</code> Gives foo.js the content now in the editor.
        This is the <i>save_as</i> functionality.<br/>
        <code>write_file("junk.js", "new content")</code> Replaces the existing content
        of the given file with "new content".
        <p></p>
        See also Dexter instruction: <a href="#" onclick="DocCode.open_doc('Dexter.write_file_doc_id', event)">Dexter.write_file</a>
    </details>

     <details id="write_file_async_doc_id" class="doc_details"><summary>write_file_async</summary>
            Similar to <a href="#" onclick="DocCode.open_doc(write_file_doc_id)">write_file</a>
            but takes an extra argument of a <b>callback</b>.
            The callback is passed an error object.
            If the error object is null, there was no error.
            <p></p>
            The <b>path</b> argument may refer to a Dexter robot to write the file to.
            If the path contains a folder that doesn't exist, it is automatically
            created.<br/>
            <i>Example:</i><br>
            <pre><code title="not in TestSuite">write_file_async("Dexter.dexter0:junk.js", "some content", "utf8",
           function(err){
               out("write_file_async got err: " + err)
           })    </code></pre>
            "some content" is written into dexter0's
            <code>"/srv/samba/share/dde_apps/junk.js"</code> file.
     </details>


        <!-- removed for security reasons
        <details id="folder_listing_doc_id" style="margin-left:40px;"><summary>folder_listing</summary>
          <code>folder_listing</code> retrieves an array of filenames and/or folder names that are somewhere
              beneath the <b>dde_apps</b> folder. This function only works if you have
              <i>Web Server for Chrome</i> installed. (See the doc for <b>load_files</b>.)<br/>
          Arguments:<br/>
          <b>folder</b> Default: <code>"/"</code>. The name of the folder to retreive the listing of.
                    A folder of "/" finds the files and/or folders immediately below the <b>dde_apps</b> folder.
                    Folder should begin and end with a slash, but if it doesn't, it will be added.<br/>
          <b>include_folders</b> Default: <code>true</code>. Retrieved folder names end in slash.<br/>
          <b>include_files</b> Default: <code>true</code>.<br/>
          <b>callback</b> Default: <code>out</code> A function of one argument. It is passed the
              array of file and/or folder names determined by the other arguments.<br/>
          Examples:<br/>
          <code>folder_listing()</code> Retrieves the files and folders immediately under <code>dde_apps</code>.<br/>
          <code>folder_listing("/test_folder/", true, false)</code> Retrieves only the folder names immediately under <code>test_folder</code>.<br/>
          <code>folder_listing("/whatever/", false, false)</code> Retrieves nothing. An empty array will be passed to the callback.
        </details> -->
</details> <!-- end File Access -->

<details class="doc_details"><summary>Gamepad & Keyboard</summary>
The handheld gamepad, popular in video games, are surprisingly
sophisticated input devices. They differ from keyboards in that
they have fewer keys, have some "analog" joysticks, and are usually
not "event" based like a keyboard, but rather "polled" to see
what buttons are currently pressed.
<p></p>
DDE supports gamepads in this "currently pressed" mode.
DDE also can use the computer keyboard for similar "real time" input.
It is even easy to write one program that can use either
a gamepad, your computer keyboard, or both.
Because connectivity between a computer and a gamepad can
be problematic, having the option of "both" aids testing
and reliability.
    <details class="doc_details"><summary>Gamepad Setup</summary>
        Gamepads differ in number and names of keys. DDE assumes
        an XBOX One or XBOX 360 gamepad. Though we have not done
        extensive testing, probably many other gamepads will work.
        These plug into a computer via their USB connector.
        <p></p>
        Windows OS supports gamepads natively. MacOS requires
        that you install driver software.
        For XBOX One & 360 gamepads, you can get a free driver
        <a href="https://github.com/360Controller/360Controller/releases" target="_blank">here</a>.
        <p></p>
        To "initialize" the gamepad, you must press a key on it before
        you start using it. It doesn't matter which key you press.
        If DDE is not detecting key presses, try unplugging and replugging
        the gamepad USB connector and pressing a key again.
    </details>

    <details id="Gamepad.clear_down_keys_doc_id" class="doc_details"><summary>clear_down_keys</summary>
       If a key is down, either because you have called
       <code title="not in TestSuite">Gamepad.start_remembering_down_keys(true)</code>
       and you've processed that action,
       or a key is just "stuck" down, call<br/>
       <code>Gamepad.clear_down_keys()</code><br/>
       so that no keys will be considered to be down.
    </details>

        <details id="Gamepad.down_keys_doc_id" class="doc_details"><summary>down_keys method</summary>
        <code>Gamepad.down_keys</code> is the primary interface
        to both gamepads and keyboards. It returns an array of literal objects
        that represent the keys on the keyboard and/or gamepad that
        are pressed when this method is called.
        <p></p>
        <i>Parameters:</i><br/>
        <b>device</b> A string that determines which
        devices have their keys monitored. Valid values are <code>"keyboard"</code>,
        <code>"gamepad"</code> and <code>"keyboard_gamepad"</code>, the default.
        The default allows you to use both gamepad and keyboard simultaneously.<br/>
        <b>which_gamepad</b> You can have up to 4 gamepads plugged in to your computer,
        named 0, 1, 2, and 3. <code>0</code> is the default.
        <p></p>
        <i>Returned value:</i><br/>
         <code>Gamepad.down_keys</code> returns an array
        of 0 or more literal objects, each representing a key that is down.
        The properties of these objects are:<br/>
        <b>device</b> <code>"keyboard"</code> or <code>"gamepad"</code> of the down key.<br/>
        <b>gamecode</b> An integer, usually between 0 and 16 inclusive, indicating
          the button on the gamepad that is pressed, or its equivalent from
          a keyboard key pressed. Not all keyboard keys have an equivalent gamepad button.<br/>
        <b>gamename</b> A string corresponding to the gamepad button pressed
                        or its equivalent from a keyboard key pressed.<br/>
        <b>keycode</b> An integer indicating a key on the keyboard that is pressed,
                        or its equivalent on a gamepad.
                       Note this is <i>not</i> an ascii number though keycodes are similar.
                       There are 256 possible keycodes, ranging from 0 to 255.
                       More than half (especially the upper half) are rarely used. <br/>
        <b>keyname</b> A string indicating the key on the keyboard that is pressed,
                      or its equivalent on a gamepad. For keys that have a name printed
                      on them, this is that name.
                      <p></p>
                      Note that the standard QWERTY keyboards
                      have many design deficiencies. Relevant here is the fact that
                      keys indicating letters are generally labeled with their
                      upper case equivalent, even though just pressing the key gives
                      you a lower case letter. None-the-less, the keyname for lettered
                      keys is the upper case letter. For keys with two names, (i.e. 2 and @)
                      the keyname is the unshifted (lower) name (i.e. 2).
                      <p></p> The space bar is named <code>" "</code>. Other names are multi-lettered,
                      upper case with underscores separating words (i.e. <code>"BACK_SPACE"</code>).
                      <br/>
        <b>value</b> A number. For most keys this is <code>1</code> indicating that
                 its down. It would be <code>0</code> when its up, but
                 down_keys only tells you about down keys.<br/>
                 Gamepad "LEFT_TRIGGER" and "RIGHT_TRIGGER" are a float varying between 0 and 1.
                 If the "LEFT_TRIGGER" was indicated using the keyboard equialent of
                 the digit keys 1, 2, 3, or 4, the values will be, correspondingly:
                 0.25, 0.5, 0.75, or 1.<br/>
                 If the "RIGHT_TRIGGER" was indicated using the keyboard equialent of
                 the digit keys 5, 6, 7, or 8, the values will be, correspondingly:
                 0.25, 0.5, 0.75, or 1.
        <p></p>
        <i>Example:</i><br/>
        <code title="not in TestSuite">Gamepad.down_keys()</code> =>
        <pre><samp>[{
    device: "keyboard",
    gamecode: 15,
    gamename: "RIGHT",
    keycode: 39,
    keyname: "RIGHT"
    value: 1
    }]</samp></pre>
    </details> <!-- end down_keys -->

    <details id="Gamepad.is_key_down_doc_id"class="doc_details"><summary>is_key_down</summary>
       This method returns true if the given key is down and false otherwise.<br/>
       <i>Parameter:</i><br/>
       <b>keycode_or_keyname</b> If the given keycode (a non-negative integer)
        or keyname (a string) is down when this function is called,
        the function returns true, otherwise it returns false.<br/>
        <i>Example:</i><br/>
        <pre><code title="not in TestSuite">
new Job({
    name: "is_key_down_job",
    do_list: [function() {Gamepad.start_remembering_keydown(true)},
              Robot.wait_until(function(){
                 return Gamepad.is_key_down("Q") }),
              function(){Gamepad.stop_remembering_keydown()
                         Gamepad.clear_down_keys()
              },
              IO.out("game over")
    ]
}) </code></pre>
<!-- doesnt' work <code>Gamepad.simulate_keydown("Q")</code><br/> -->
   When this Job is started, it waits for the "Q" key on the keyboard to be pressed
   (no need to also hold down the shift key), then proceeds to the next
   instruction.
    </details>


    <details class="doc_details"><summary>Gamepad names &amp; codes</summary>
    <table>
     <tr><th>keycode</th><th>keyname</th><th>gamecode</th><th>gamename</th><th>description</th></tr>
      <tr><td>none</td><td>none</td><td>-1</td><td>LEFT_STICK_X</td><td>value: -1 to 1</td></tr>
      <tr><td>none</td><td>none</td><td>-2</td><td>LEFT_STICK_Y</td><td>value: -1 to 1</td></tr>
      <tr><td>none</td><td>none</td><td>-3</td><td>RIGHT_STICK_X</td><td>value: -1 to 1</td></tr>
      <tr><td>none</td><td>none</td><td>-4</td><td>RIGHT_STICK_Y</td><td>value: -1 to 1</td></tr>
      <tr><td> </td></tr>
     <tr><td>65</td><td>A</td><td>0</td><td>A</td><td>right thumb</td></tr>
     <tr><td>66</td><td>B</td><td>1</td><td>B</td><td>right thumb</td></tr>
     <tr><td>88</td><td>X</td><td>2</td><td>X</td><td>right thumb</td></tr>
     <tr><td>89</td><td>Y</td><td>3</td><td>Y</td><td>right thumb</td></tr>
     <tr><td>76</td><td>L</td><td>4</td><td>LEFT_BUMPER</td><td>left  forefinger (above trigger)</td></tr>
     <tr><td>82</td><td>R</td><td>5</td><td>RIGHT_BUMPER</td><td>right forefinger (above trigger)</td></tr>
     <tr><td>52</td><td>4</td><td>6</td><td>LEFT_TRIGGER</td><td>left  forefinger 0 to 1</td></tr>
     <tr><td>57</td><td>9</td><td>7</td><td>RIGHT_TRIGGER</td><td>right forefinger 0 to 1</td></tr>
     <tr><td>86</td><td>V</td><td>8</td><td>VIEW</td><td>left  thumb (near center, little button)</td></tr>
     <tr><td>77</td><td>M</td><td>9</td><td>MENU</td><td>right thumb (near center, little button)</td></tr>
     <tr><td>219</td><td>[</td><td>10</td><td>LEFT_STICK</td><td>left  thumb joystick button 0 or 1 and horizontal -1 to 1 and vertical -1 to 1</td></tr>
     <tr><td>221</td><td>]</td><td>11</td><td>RIGHT_STICK</td><td>11 right thumb joystick button 0 or 1 and horizontal -1 to 1 and vertical -1 to 1</td></tr>
     <tr><td>38</td><td>UP</td><td>12</td><td>UP</td><td>left thumb Direction pad</td></tr>
     <tr><td>40</td><td>DOWN</td><td>13</td><td>DOWN</td><td>Left thumb Direction pad</td></tr>
     <tr><td>37</td><td>LEFT</td><td>14</td><td>LEFT</td><td>Left thumb Direction pad</td></tr>
     <tr><td>39</td><td>RIGHT</td><td>15</td><td>RIGHT</td><td>Left thumb Direction pad</td></tr>
     <tr><td>91</td><td>OS_KEY</td><td>16</td><td>OS_KEY</td><td>XBOX either thumb (top center of gamepad)</td></tr>
    </table>
    </details>
    <details class="doc_details"><summary>keycodes & names</summary>
     <table><tr><th>keycode</th><th>keyname</th><th>Description</th></tr>
            <tr><td>0</td><td></td><td></td></tr>
            <tr><td>1</td><td></td><td></td></tr>
            <tr><td>2</td><td></td><td></td></tr>
            <tr><td>3</td><td>CANCEL</td><td></td></tr>
            <tr><td>4</td><td></td><td></td></tr>
            <tr><td>5</td><td></td><td></td></tr>
            <tr><td>6</td><td>HELP</td><td></td></tr>
            <tr><td>7</td><td></td><td></td></tr>
            <tr><td>8</td><td>BACK_SPACE</td><td>sometimes called "delete"</td></tr>
            <tr><td>9</td><td>TAB</td><td></td></tr>
            <tr><td>10</td><td></td><td></td></tr>
            <tr><td>11</td><td></td><td></td></tr>
            <tr><td>12</td><td>CLEAR</td><td></td></tr>
            <tr><td>13</td><td>ENTER</td><td></td></tr>
            <tr><td>14</td><td>ENTER_SPECIAL</td><td></td></tr>
            <tr><td>15</td><td></td><td></td></tr>
            <tr><td>16</td><td>SHIFT</td><td></td></tr>
            <tr><td>17</td><td>CONTROL</td><td></td></tr>
            <tr><td>18</td><td>ALT</td><td>called "option" on Mac</td></tr>
            <tr><td>19</td><td>PAUSE</td><td></td></tr>
            <tr><td>20</td><td>CAPS_LOCK</td><td></td></tr>
            <tr><td>21</td><td>KANA</td><td></td></tr>
            <tr><td>22</td><td>EISU</td><td></td></tr>
            <tr><td>23</td><td>JUNJA</td><td></td></tr>
            <tr><td>24</td><td>FINAL</td><td></td></tr>
            <tr><td>25</td><td>HANJA</td><td></td></tr>
            <tr><td>26</td><td></td><td></td></tr>
            <tr><td>27</td><td>ESCAPE</td><td></td></tr>
            <tr><td>28</td><td>CONVERT</td><td></td></tr>
            <tr><td>29</td><td>NONCONVERT</td><td></td></tr>
            <tr><td>30</td><td>ACCEPT</td><td></td></tr>
            <tr><td>31</td><td>MODECHANGE</td><td></td></tr>
            <tr><td>32</td><td>" "</td><td>space</td></tr>
            <tr><td>33</td><td>PAGE_UP</td><td></td></tr>
            <tr><td>34</td><td>PAGE_DOWN</td><td></td></tr>
            <tr><td>35</td><td>END</td><td></td></tr>
            <tr><td>36</td><td>HOME</td><td></td></tr>
            <tr><td>37</td><td>LEFT</td><td>arrow key</td></tr>
            <tr><td>38</td><td>UP</td><td>arrow key</td></tr>
            <tr><td>39</td><td>RIGHT</td><td>arrow key</td></tr>
            <tr><td>40</td><td>DOWN</td><td>arrow key</td></tr>
            <tr><td>41</td><td>SELECT</td><td></td></tr>
            <tr><td>42</td><td>PRINT</td><td></td></tr>
            <tr><td>43</td><td>EXECUTE</td><td></td></tr>
            <tr><td>44</td><td>PRINTSCREEN</td><td></td></tr>
            <tr><td>45</td><td>INSERT</td><td></td></tr>
            <tr><td>46</td><td>DELETE</td><td></td></tr>
            <tr><td>47</td><td></td><td></td></tr>
            <tr><td>48</td><td>0</td><td></td></tr>
            <tr><td>49</td><td>1</td><td></td></tr>
            <tr><td>50</td><td>2</td><td></td></tr>
            <tr><td>51</td><td>3</td><td></td></tr>
            <tr><td>52</td><td>4</td><td></td></tr>
            <tr><td>53</td><td>5</td><td></td></tr>
            <tr><td>54</td><td>6</td><td></td></tr>
            <tr><td>55</td><td>7</td><td></td></tr>
            <tr><td>56</td><td>8</td><td></td></tr>
            <tr><td>57</td><td>9</td><td></td></tr>
            <tr><td>58</td><td>COLON</td><td></td></tr>
            <tr><td>59</td><td>SEMICOLON</td><td></td></tr>
            <tr><td>60</td><td>LESS_THAN</td><td></td></tr>
            <tr><td>61</td><td>EQUALS</td><td></td></tr>
            <tr><td>62</td><td>GREATER_THAN</td><td></td></tr>
            <tr><td>63</td><td>QUESTION_MARK</td><td></td></tr>
            <tr><td>64</td><td>AT</td><td></td></tr>
            <tr><td>65</td><td>A</td><td></td></tr>
            <tr><td>66</td><td>B</td><td></td></tr>
            <tr><td>67</td><td>C</td><td></td></tr>
            <tr><td>68</td><td>D</td><td></td></tr>
            <tr><td>69</td><td>E</td><td></td></tr>
            <tr><td>70</td><td>F</td><td></td></tr>
            <tr><td>71</td><td>G</td><td></td></tr>
            <tr><td>72</td><td>H</td><td></td></tr>
            <tr><td>73</td><td>I</td><td></td></tr>
            <tr><td>74</td><td>J</td><td></td></tr>
            <tr><td>75</td><td>K</td><td></td></tr>
            <tr><td>76</td><td>L</td><td></td></tr>
            <tr><td>77</td><td>M</td><td></td></tr>
            <tr><td>78</td><td>N</td><td></td></tr>
            <tr><td>79</td><td>O</td><td></td></tr>
            <tr><td>80</td><td>P</td><td></td></tr>
            <tr><td>81</td><td>Q</td><td></td></tr>
            <tr><td>82</td><td>R</td><td></td></tr>
            <tr><td>83</td><td>S</td><td></td></tr>
            <tr><td>84</td><td>T</td><td></td></tr>
            <tr><td>85</td><td>U</td><td></td></tr>
            <tr><td>86</td><td>V</td><td></td></tr>
            <tr><td>87</td><td>W</td><td></td></tr>
            <tr><td>88</td><td>X</td><td></td></tr>
            <tr><td>89</td><td>Y</td><td></td></tr>
            <tr><td>90</td><td>Z</td><td></td></tr>
            <tr><td>91</td><td>OS_KEY</td><td>Windows Key (Windows) or Command Key (Mac)</td></tr>
            <tr><td>92</td><td></td><td></td></tr>
            <tr><td>93</td><td>CONTEXT_MENU</td><td></td></tr>
            <tr><td>94</td><td></td><td></td></tr>
            <tr><td>95</td><td>SLEEP</td><td></td></tr>
            <tr><td>96</td><td>NUMPAD0</td><td></td></tr>
            <tr><td>97</td><td>NUMPAD1</td><td></td></tr>
            <tr><td>98</td><td>NUMPAD2</td><td></td></tr>
            <tr><td>99</td><td>NUMPAD3</td><td></td></tr>
            <tr><td>100</td><td>NUMPAD4</td><td></td></tr>
            <tr><td>101</td><td>NUMPAD5</td><td></td></tr>
            <tr><td>102</td><td>NUMPAD6</td><td></td></tr>
            <tr><td>103</td><td>NUMPAD7</td><td></td></tr>
            <tr><td>104</td><td>NUMPAD8</td><td></td></tr>
            <tr><td>105</td><td>NUMPAD9</td><td></td></tr>
            <tr><td>106</td><td>MULTIPLY</td><td></td></tr>
            <tr><td>107</td><td>ADD</td><td></td></tr>
            <tr><td>108</td><td>SEPARATOR</td><td></td></tr>
            <tr><td>109</td><td>SUBTRACT</td><td></td></tr>
            <tr><td>110</td><td>DECIMAL</td><td></td></tr>
            <tr><td>111</td><td>DIVIDE</td><td></td></tr>
            <tr><td>112</td><td>F1</td><td></td></tr>
            <tr><td>113</td><td>F2</td><td></td></tr>
            <tr><td>114</td><td>F3</td><td></td></tr>
            <tr><td>115</td><td>F4</td><td></td></tr>
            <tr><td>116</td><td>F5</td><td></td></tr>
            <tr><td>117</td><td>F6</td><td></td></tr>
            <tr><td>118</td><td>F7</td><td></td></tr>
            <tr><td>119</td><td>F8</td><td></td></tr>
            <tr><td>120</td><td>F9</td><td></td></tr>
            <tr><td>121</td><td>F10</td><td></td></tr>
            <tr><td>122</td><td>F11</td><td></td></tr>
            <tr><td>123</td><td>F12</td><td></td></tr>
            <tr><td>124</td><td>F13</td><td></td></tr>
            <tr><td>125</td><td>F14</td><td></td></tr>
            <tr><td>126</td><td>F15</td><td></td></tr>
            <tr><td>127</td><td>F16</td><td></td></tr>
            <tr><td>128</td><td>F17</td><td></td></tr>
            <tr><td>129</td><td>F18</td><td></td></tr>
            <tr><td>130</td><td>F19</td><td></td></tr>
            <tr><td>131</td><td>F20</td><td></td></tr>
            <tr><td>132</td><td>F21</td><td></td></tr>
            <tr><td>133</td><td>F22</td><td></td></tr>
            <tr><td>134</td><td>F23</td><td></td></tr>
            <tr><td>135</td><td>F24</td><td></td></tr>
            <tr><td>136</td><td></td><td></td></tr>
            <tr><td>137</td><td></td><td></td></tr>
            <tr><td>138</td><td></td><td></td></tr>
            <tr><td>139</td><td></td><td></td></tr>
            <tr><td>140</td><td></td><td></td></tr>
            <tr><td>141</td><td></td><td></td></tr>
            <tr><td>142</td><td></td><td></td></tr>
            <tr><td>143</td><td></td><td></td></tr>
            <tr><td>144</td><td>NUM_LOCK</td><td></td></tr>
            <tr><td>145</td><td>SCROLL_LOCK</td><td></td></tr>
            <tr><td>146</td><td>WIN_OEM_FJ_JISHO</td><td></td></tr>
            <tr><td>147</td><td>WIN_OEM_FJ_MASSHOU</td><td></td></tr>
            <tr><td>148</td><td>WIN_OEM_FJ_TOUROKU</td><td></td></tr>
            <tr><td>149</td><td>WIN_OEM_FJ_LOYA</td><td></td></tr>
            <tr><td>150</td><td>WIN_OEM_FJ_ROYA</td><td></td></tr>
            <tr><td>151</td><td></td><td></td></tr>
            <tr><td>152</td><td></td><td></td></tr>
            <tr><td>153</td><td></td><td></td></tr>
            <tr><td>154</td><td></td><td></td></tr>
            <tr><td>155</td><td></td><td></td></tr>
            <tr><td>156</td><td></td><td></td></tr>
            <tr><td>157</td><td></td><td></td></tr>
            <tr><td>158</td><td></td><td></td></tr>
            <tr><td>159</td><td></td><td></td></tr>
            <tr><td>160</td><td>CIRCUMFLEX</td><td></td></tr>
            <tr><td>161</td><td>EXCLAMATION</td><td></td></tr>
            <tr><td>162</td><td>DOUBLE_QUOTE</td><td></td></tr>
            <tr><td>163</td><td>HASH</td><td></td></tr>
            <tr><td>164</td><td>DOLLAR</td><td></td></tr>
            <tr><td>165</td><td>PERCENT</td><td></td></tr>
            <tr><td>166</td><td>AMPERSAND</td><td></td></tr>
            <tr><td>167</td><td>UNDERSCORE</td><td></td></tr>
            <tr><td>168</td><td>OPEN_PAREN</td><td></td></tr>
            <tr><td>169</td><td>CLOSE_PAREN</td><td></td></tr>
            <tr><td>170</td><td>ASTERISK</td><td></td></tr>
            <tr><td>171</td><td>PLUS</td><td></td></tr>
            <tr><td>172</td><td>PIPE</td><td></td></tr>
            <tr><td>173</td><td>HYPHEN_MINUS</td><td></td></tr>
            <tr><td>174</td><td>OPEN_CURLY_BRACKET</td><td></td></tr>
            <tr><td>175</td><td>CLOSE_CURLY_BRACKET</td><td></td></tr>
            <tr><td>176</td><td>TILDE</td><td></td></tr>
            <tr><td>177</td><td></td><td></td></tr>
            <tr><td>178</td><td></td><td></td></tr>
            <tr><td>179</td><td></td><td></td></tr>
            <tr><td>180</td><td></td><td></td></tr>
            <tr><td>181</td><td>VOLUME_MUTE</td><td></td></tr>
            <tr><td>182</td><td>VOLUME_DOWN</td><td></td></tr>
            <tr><td>183</td><td>VOLUME_UP</td><td></td></tr>
            <tr><td>184</td><td></td><td></td></tr>
            <tr><td>185</td><td></td><td></td></tr>
            <tr><td>186</td><td>;</td><td>SEMICOLON</td></tr>
            <tr><td>187</td><td>=</td><td>EQUALS</td></tr>
            <tr><td>188</td><td>,</td><td>COMMA</td></tr>
            <tr><td>189</td><td>-</td><td>MINUS</td></tr>
            <tr><td>190</td><td>.</td><td>PERIOD</td></tr>
            <tr><td>191</td><td>/</td><td>SLASH</td></tr>
            <tr><td>192</td><td>&#96;</td><td>BACK_QUOTE</td></tr>
            <tr><td>193</td><td></td><td></td></tr>
            <tr><td>194</td><td></td><td></td></tr>
            <tr><td>195</td><td></td><td></td></tr>
            <tr><td>196</td><td></td><td></td></tr>
            <tr><td>197</td><td></td><td></td></tr>
            <tr><td>198</td><td></td><td></td></tr>
            <tr><td>199</td><td></td><td></td></tr>
            <tr><td>200</td><td></td><td></td></tr>
            <tr><td>201</td><td></td><td></td></tr>
            <tr><td>202</td><td></td><td></td></tr>
            <tr><td>203</td><td></td><td></td></tr>
            <tr><td>204</td><td></td><td></td></tr>
            <tr><td>205</td><td></td><td></td></tr>
            <tr><td>206</td><td></td><td></td></tr>
            <tr><td>207</td><td></td><td></td></tr>
            <tr><td>208</td><td></td><td></td></tr>
            <tr><td>209</td><td></td><td></td></tr>
            <tr><td>210</td><td></td><td></td></tr>
            <tr><td>211</td><td></td><td></td></tr>
            <tr><td>212</td><td></td><td></td></tr>
            <tr><td>213</td><td></td><td></td></tr>
            <tr><td>214</td><td></td><td></td></tr>
            <tr><td>215</td><td></td><td></td></tr>
            <tr><td>216</td><td></td><td></td></tr>
            <tr><td>217</td><td></td><td></td></tr>
            <tr><td>218</td><td></td><td></td></tr>
            <tr><td>219</td><td>[</td><td>OPEN_BRACKET</td></tr>
            <tr><td>220</td><td>\</td><td>BACK_SLASH use "\\"</td></tr>
            <tr><td>221</td><td>]</td><td>CLOSE_BRACKET</td></tr>
            <tr><td>222</td><td>'</td><td>QUOTE</td></tr>
            <tr><td>223</td><td></td><td></td></tr>
            <tr><td>224</td><td>META</td><td></td></tr>
            <tr><td>225</td><td>ALTGR</td><td></td></tr>
            <tr><td>226</td><td></td><td></td></tr>
            <tr><td>227</td><td>WIN_ICO_HELP</td><td></td></tr>
            <tr><td>228</td><td>WIN_ICO_00</td><td></td></tr>
            <tr><td>229</td><td></td><td></td></tr>
            <tr><td>230</td><td>WIN_ICO_CLEAR</td><td></td></tr>
            <tr><td>231</td><td></td><td></td></tr>
            <tr><td>232</td><td></td><td></td></tr>
            <tr><td>233</td><td>WIN_OEM_RESET</td><td></td></tr>
            <tr><td>234</td><td>WIN_OEM_JUMP</td><td></td></tr>
            <tr><td>235</td><td>WIN_OEM_PA1</td><td></td></tr>
            <tr><td>236</td><td>WIN_OEM_PA2</td><td></td></tr>
            <tr><td>237</td><td>WIN_OEM_PA3</td><td></td></tr>
            <tr><td>238</td><td>WIN_OEM_WSCTRL</td><td></td></tr>
            <tr><td>239</td><td>WIN_OEM_CUSEL</td><td></td></tr>
            <tr><td>240</td><td>WIN_OEM_ATTN</td><td></td></tr>
            <tr><td>241</td><td>WIN_OEM_FINISH</td><td></td></tr>
            <tr><td>242</td><td>WIN_OEM_COPY</td><td></td></tr>
            <tr><td>243</td><td>WIN_OEM_AUTO</td><td></td></tr>
            <tr><td>244</td><td>WIN_OEM_ENLW</td><td></td></tr>
            <tr><td>245</td><td>WIN_OEM_BACKTAB</td><td></td></tr>
            <tr><td>246</td><td>ATTN</td><td></td></tr>
            <tr><td>247</td><td>CRSEL</td><td></td></tr>
            <tr><td>248</td><td>EXSEL</td><td></td></tr>
            <tr><td>249</td><td>EREOF</td><td></td></tr>
            <tr><td>250</td><td>PLAY</td><td></td></tr>
            <tr><td>251</td><td>ZOOM</td><td></td></tr>
            <tr><td>252</td><td></td><td></td></tr>
            <tr><td>253</td><td>PA1</td><td></td></tr>
            <tr><td>254</td><td>WIN_OEM_CLEAR</td><td></td></tr>
            <tr><td>255</td><td></td><td></td></tr>
        </table>
    </details>

    <details id="Gamepad.start_remembering_keydown_doc_id" class="doc_details"><summary>start_remembering_keydown</summary>
       When you want to start noticing that keyboard keys are down,
       call this method.<br/>
       <i>Parameters:</i><br/>
       <b>sticky</b> Boolean. default: <code>false</code>
       With a false value, when a key is pressed down,
       it is now considered to be a "down key".
       When the key is released, (key up) it is no longer
       considered to be a down key.
       However, with a <code>true</code> value,
       once the key goes down, it is considered down even after
       the key comes up. To consider it "up", call
       <code>Gamepad.clear_down_keys()</code><br/>
       This "sticky=true" is useful when there might be
       a time delay between when the key is down and when
       you can check to see if the key is down.
       If the user just "tapped" the key very quickly,
       your code might not notice that it was ever down.
       This is where "sticky=true" is valuable.
       Make sure to call <code>Gamepad.clear_down_keys()</code> after
       your code discovers that the key is down.
       <p></p>
       <i>Example:</i><br/>
        <code title="not in TestSuite">Gamepad.start_remembering_keydown(true)</code><br/>
       The methods, <code>Gamepad.is_key_down</code> and <code>Gamepad.down_keys</code>
       automatically call<br/>
       <code title="not in TestSuite">Gamepad.start_remembering_keydown()</code><br/>
       (that is, with sticky=false).
    </details>

    <details id="Gamepad.stop_remembering_keydown_doc_id" class="doc_details"><summary>stop_remembering_keydown</summary>
        <code>Gamepad.stop_remembering_keydown</code> is used to
        end the handling of keyboard down keys. Call this when
        the part of your program that uses keyboard keys for
        real-time apps is done. It takes no arguments.<br/>
        <i>Example:</i><br/>
        <code>Gamepad.stop_remembering_keydown()</code>
    </details>

    <details class="doc_details"><summary>Job with wait_until</summary>
     This simple example of wrapping <code>Gamepad.down_keys</code>
     in a Job is not good for constructing instructions, but
     is useful for learning and when you don't need to
     extend a Job's do_list.
     <p></p>
     If the function arg to <code>Control.wait_until</code> returns false when it is called
     by the job running process, the Job continues
     waiting. Hit the ESC key on the keyboard to end the wait_until.
     Because <code title="not in TestSuite">Gamepad.down_keys()</code>
     has its first arg default to <code>"gamepad_keyboard"</code>,
     you can use either a gamepad or the keyboard, though
     as written, you must use the keyboard to end the wait_until.
     <!-- not in TestSuite because it runs jobs and this job waits for user interaction -->
    <pre><code title="not in TestSuite">new Job({
  name: "gamepad_job1",
  do_list: [IO.out("Press RIGHT arrow or ESC to exit."),
            Control.wait_until(function(){
              let dks = Gamepad.down_keys() //returns array of down key objects
              if (dks.length == 0){ return false }  //keep waiting
              else if (dks[0].keyname == "ESCAPE"){ //end the "wait_until"
                Gamepad.stop_remembering_keydown()
                return true
              }
              else if (dks[0].keyname == "RIGHT"){
                out(dks, "green")  //your action here when RIGHT arrow key is pressed down.
                return false  //keep waiting
              }
              else {
                out(dks, "black", true)
                return false //keep waiting
              }
            }),
            IO.out("done")
           ]})</code></pre>

    </details>

    <details class="doc_details"><summary>Job with generator</summary>
    Using a generator makes it relatively easy to add instructions
    to the Job based on keystrokes. The <code>Dexter.move_all_joints_relative</code>
    calls create instructions which are "yielded" i.e. returned from the generator
    and added to the Job's do_list each time an appropriate key or gamepad button
    is pressed.
    <p></p>
    These calls just rotate a Dexter join by 1 degree so it moves slowly.
    You can increase that 1 degree to move faster.
    The Job's argument of <code title="unEVALable JS fragment">inter_do_item_dur: 0.05</code>
    also affects speed.
    <p></p>Operation: When you start this job, press the 4 arrow keys and/or a and b keys
    on either the keyboard or a gamepad to move Dexter's joints.
     <!-- not in TestSuite because it runs jobs and this job waits for user interaction -->
     <pre><code  title="not in TestSuite">function* gamepad_moves(){
    out("top of gen_moves")
    while(true) {
      let dks = Gamepad.down_keys("keyboard_gamepad") //automatically will start_remembering_keydown
      let first_keyname  = ((dks.length == 0) ? null : dks[0].keyname)
      let first_gamename = ((dks.length == 0) ? null : dks[0].gamename)
      if (first_keyname == null) { yield }
      else if ((first_keyname == "ESCAPE") || ( first_gamename == "OS_KEY"))
         { //done with this generator
          out("got ESCAPE or OS_KEY", "green", true)
          Gamepad.stop_remembering_keydown()
          return null
      }
      else if (first_keyname == "LEFT") {
          out("got LEFT", "green", true)
          yield Dexter.move_all_joints_relative([1]) //joint 1
      }
      else if (first_keyname == "RIGHT") {
          out("got RIGHT", "green", true)
          yield Dexter.move_all_joints_relative([-1]) //joint 1
      }
      else if (first_keyname == "UP") {
          out("got UP", "green", true)
          yield Dexter.move_all_joints_relative([0, -1]) //joint 2
      }
      else if (first_keyname == "DOWN") {
          out("got DOWN", "green", true)
          yield Dexter.move_all_joints_relative([0, 1]) //joint 2
      }

      else if (first_keyname == "A") {
          out("got A", "green", true)
          yield Dexter.move_all_joints_relative([0, 0, -1]) //joint 3
      }
      else if (first_keyname == "B") {
          out("got B", "green", true)
          yield Dexter.move_all_joints_relative([0, 0, 1]) //joint 3
      }
      else { out("unrecognized key: " + first_keyname +
                 " Press LEFT, RIGHT, UP, DOWN arrows or a, b, or ESC to exit",
                 "orange",
                 true)
             yield null
      }
    }
}

new Job({name: "gamepad_job2",
         inter_do_item_dur: 0.05,
         do_list: [Dexter.move_all_joints(Dexter.NEUTRAL_ANGLES),
                   gamepad_moves]})
        </code></pre>
    </details>
</details> <!-- end Gamepad -->

<details id="Inflow_doc_id" class="doc_details"><summary>Inflow</summary>
   <a target="_blank" href="https://www.inflowinventory.com/">Inflow</a> is a commercial inventory
   management system that Haddington uses to keep track of parts for building robots.
   For an extra fee, you can get access to an API to programmatically use Inflow's database.
   We've developed an interface to enable DDE users to read and write to that API.
   Should you need to automate inventory and customer data,
   using DDE's interface is an easy way to do it. <p></p>
   The <a target="_blank"
   href="https://cloudapi.inflowinventory.com/docs/index.html#section/OverviewInflow"> Inflow API doc</a>
   isn't easy for JavaScript programmers to understand,
   so we've packaged up the most useful features.
    <p></p>
   <i>Configuration:</i><br/>
    To use this API, you must first buy the Inflow software plus their API and, in DDE, set 2
    variables. Your Documents/dde_init.js file is a convenient place to set these variables.<br/>
    <b id="Inflow.if_company_id_doc_id">Inflow.if_company_id</b> A string. Your Inflow "company id" that you get as an Inflow customer.<br/>
    Example: <code title="not in TestSuite">Inflow.if_company_id = "your company id"</code><br/>
    <b id="Inflow.if_api_key_doc_id">Inflow.if_api_key</b> A string. Your Inflow api key that you get from Inflow when you have access to their api.<br/>
    Example: <code title="not in TestSuite">Inflow.if_api_key = "your api key"</code>
    <p></p>
    <i>Methods</i>
    <details id="Inflow.get_doc_id" class="doc_details"><summary>Inflow.get</summary>
    Get data from Inflow.<br/>
    <i>Parameters:</i><br/>
    <b>path</b>:  Default: <code>"categories"</code> . A string that determines the data
    you're after. The string should not start with a slash.
    The default gets an array of the categories
    (the product categories you're tracking with Inflow)
    within your Inflow installation.
    When you pass in a path without slashes,
    it will cache the resulting array in
    Inflow.{path} to the array of the result.
    <p></p>
    Each of its array elements is a JS literal object with properties:
        <ul>
            <li><b>categoryID</b>: A unique string</li>
            <li><b>name</b>:       A human readable meaningful string such as "A", or "Default Category".</li>
            <li><b>parentCategoryID</b>:  If there is a parent category, its ID string.
                   Otherwise: <code>null</code>.</li>
            <li><b>timeStamp</b>:  A string of a Hexidecimal number indictating when
                 the category was last modified.</li>
        </ul>
        Note that by default, get returns a maximum of 20 records. You can increase this,
        and pass sorting information via query arguments that are appended on to a path.
        Here's an example that returns the first 50 customers sorted by contactName,
        alphabetically:<br/>
        <code title="not in TestSuite">Inflow.get("customers?count=50&sort=contactNamer&sortDesc=true")</code><br/>
        With sortDesc=false, it returns records in the opposite order.
        More query parameters are available on
        <a target="_blank"
           href="https://cloudapi.inflowinventory.com/docs/index.html#section/OverviewInflow"> Inflow API doc</a>
        i
        but are difficult to find. Look for a particular path like Customer, then look under List Customers/Query Parameters/request?
        to see numerous query parameters.<br/>
    <b>callback</b>: Default: <code>inspect</code>. A method of one argument, a JSON object
         representing the information you requested in the Inflow.get call.
    <p></p>
    <i>Examples:</i><br/>
        <code title="not in TestSuite">Inflow.get()</code> retrieves your Inflow categories.<br/>
        <code title="not in TestSuite">Inflow.categories</code> An array of the categories (or any slashless path) retrieved.<br/>
        <code title="not in TestSuite">Inflow.get("categories/" + Inflow.categories[0].categoryId)</code>
              passes to the callback function a JS lit object that looks like:
        <!-- bug in JS eval that it can't eval the below. Maybe because its not set to a variable-->
        <pre><code title="not in TestSuite">
{name: "3Dprint",
catgoryId: "12345c6...",
parentCategoryId: null,
timestamp: "000000000001E074"
} </code></pre>
  <code title="not in TestSuite">Inflow.get("customers")</code> passes to the callback an array of customer
      literal objects containing properties of<br/>
      name, customerID, phone, etc.<br/>
  <code title="not in TestSuite">Inflow.customers</code> An array of customer JS literal objects.<br/>
  <code title="not in TestSuite">Inflow.get("customers/" + Inflow.customers[0].customerId)</code>
  <p></p>
  <code title="not in TestSuite">Inflow.get("products")</code> , etc.<br/>
You can use this pattern for:
<ul>
  <li>categories</li>
  <li>customers</li>
  <li>locations</li>
  <li>payment-terms</li>
  <li>pricing-schemes</li>
  <li>products</li>
  <li>product-cost-adjustments</li>
  <li>purchase-orders</li>
  <li>sales-orders</li>
  <li>stock-adjustments</li>
  <li>stock-transfers</li>
  <li>tax-codes</li>
  <li>taxing-schemes</li>
  <li>vendors</li>
</ul>
</details> <!--end Inflow.get-->
<details id="Inflow.put_doc_id" class="doc_details"><summary>Inflow.put</summary>
    Put new data into Inflow. This could also be called "write" or "insert".<br/>
    <i>Parameters:</i><br/>
        <b>path</b>: Default <code>"categories"</code>
           See <a href="#" onclick="DocCode.open_doc('Inflow.get_doc_id')">Inflow.get</a> for options.<br/>
        <b>put_data</b>:  A JSON object of the data to be put into Inflow.
        For properites, browse <a target="_blank" href="https://cloudapi.inflowinventory.com/docs/index.html">
            https://cloudapi.inflowinventory.com/docs/index.html</a>
        then in the left column click a data item to show its details.<br/>
        Click the "PUT" details to show properties.
    <p></p>
    An example for <a target="_blank"
    href="https://cloudapi.inflowinventory.com/docs/index.html#tag/StockAdjustment/paths/~1{companyId}~1stock-adjustments/put">
    stock-adjustments</a>
    <p></p>
    <i>Examples:</i><br/>
     <code title="not in TestSuite">Inflow.get("customers")</code><br/>
     <code title="not in TestSuite">Inflow.put("customers", {customerId: Inflow.make_guid(), name: "Fake R. Customer"})</code><br/>
     <code title="not in TestSuite">Inflow.get("customers")</code><br/>
     <pre><code title="not in TestSuite">
Inflow.put("products",
           {"productId":"72bab90c-a00a-4fb0-8c09-c010a1b1d59f",
            "description": "API TESTING",
            "reorderPoint":"4.0000",
            "reorderQuantity":"10.0000",
            "customFields":{"custom4":"printmeplz"}
            }) </code></pre>
</details><!--end Inflow.get-->
</details> <!-- end Inflow -->

<details id="out_doc_id" class="doc_details"><summary>out</summary>
    <code>out</code> prints html that is rendered in the Output pane.<br/>
    <i>Parameters:</i><br/>
    <b>val</b> Default: <code>""</code>. The JavaScript data to be printed.
               Typically this is a string.<br/>
    <b>color</b> Default: <code>"black"</code>. The color of the text to be printed.<br/>
    <b>temp</b> Default: <code>false</code>. With the default, printed output stays in the
       Output pane until DDE is relaunched.
       <p></p>
       If temp is <code>true</code>,
       then <b>val</b> is still printed in the Output pane, but is over-ridden
       by subsequence calls to out with temp == true. Calls to out with temp == false
       will erase any "temp" output.
       <p></p>
       If temp is a string, then out prints <b>val</b> similarly to temp == true in that
       the previous call to out with that temp string will be over-ridden in place.
       However, when another call to out with a different value for temp occurs,
       the output of out with a temp string will <i>not</i> be erased.
       Thus the last call to out with a given temp string remains in the Output pane,
       in its place, regardless of other out calls.<br/>
    <b>code</b> A boolean or null. Default: <code>null</code>. A <code>false</code> value renders the
    first argument's string as HTML. <code>true</code> renders the
    string as code. Newline chars actual cause a newline in the output
    and HTML tags are shown as their source code, not rendered HTML.
    A <code>true</code> value is useful for some kinds of debugging.
    <p></p>
    A <code>null</code> value looks at the value of the "Code" checkbox
    in the Output pane header to get its real value. The checked or uncheched status
    (true or false) is saved persistently accross DDE sessions.
    If the checkbox is checked, <code>out</code> behaves as if its code
    argument was <code>true</code>, otherwise as if its code argument was <code>false</code>.
    <p></p>
    <i>Example:</i><code>out("hi", "blue")</code><p></p>
    If you have a lot of out calls, it can be helpful to give them
    different colors so you can easily find a particular one.
    <p></p>
    See also <a href="#" onclick="DocCode.open_doc(print_statements_doc_id, event)">print statements</a>
</details>

    <details class="doc_details"><summary>Persistent Database</summary>
        DDE has a very simple database, whose values remain in tact accross DDE sessions.
        The DB stores a JSON object. The top level is a literal object
        with string keys and values that can be any JSON objects, including null, booleans,
        numbers, strings, arrays and other literal objects nested as deep as you like.
        It is not meant to store a large amount of data, mostly preferences and
        small objects.
        <p></p>
        The DB is stored in the file <code>"dde_apps/persistent.json"</code> as plain text.
        You can view the entire by opening it in DDE's editor if you like.
        However, we do not recommend editing it from DDE. That's because
        any changes will be overwritten the next time something is written
        to the DB by DDE. If you'd like to edit it as a file,
        close DDE and edit it with another editor. Be careful to
        get the JSON syntax correct.

        <details id="persistent_get_doc_id" style="margin-left:40px;"><summary>persistent_get</summary>
            Retreives a literal that was set with <code>persistent_set</code>
            The argument is the key to retreive. Its default value is <code>"get_all"</code>
            which gets a JavaScript literal object that has key-value pairs for all the
            calls to <code>persistent_set</code>. If a key is not in the database,
            <code>undefined</code> will be retreived.
            <p></p>
            persistent_get returns the value of the variable in the argument.<br/>
            <b>Example:</b> <br/>
            <code>persistent_set("test4", 44)</code><br/>
            <code>persistent_get("test4")</code> => <samp>44</samp><br/>
        </details> <!-- end persistent_get -->

        <details id="persistent_initialize_doc_id" style="margin-left:40px;"><summary>persistent_initialize</summary>
            Initializes the values in the persistent db.<br/>
            If the argument is true, (the default), it will
            ensure that specific required properties exist, and if not,
            set them to their default value.<br/>
            If the argument is false, it will remove all the existing persistent properties
            and set the required properties to their default values.
            <p></p>
            <b>Warning:</b> DDE uses the persistent db to store the keys of edited files amongst
            other things, so an argument of false will get rid of your editing history.
            <i>This function should only rarely, if ever, called by users.</i>
        </details>

        <details id="persistent_remove_doc_id" style="margin-left:40px;"><summary>persistent_remove</summary>
            Removes the binding between the first argument (key) and a stored value in the persistent db.<br/>
            <b>Example:</b> <code>persistent_remove("test4")</code><br/>
            After such a call, attempting to retreive the value of that key will get <code>undefined</code>.
        </details>

        <details id="persistent_save_doc_id" style="margin-left:40px;"><summary>persistent_save</summary>
            Saves all persistent values to the file dde_apps/persistent.json.
            This function is called automatically when you call <code>persistent_set</code>.
            If you modify (not set) a persistent value that is an array or a literal object,
            call this function to save it. If you have a bunch of such modifications,
            do them all, then call <code>persistent_save</code> once at the end.<br/>
            <i>Example:</i> <pre><code>var orig_array = [10, 11, 12]
persistent_set("my_array", orig_array)</code><br/>
<code>orig_array[1] = 111</code><br/>
<code>persistent_save()</code>
//relaunch DDE
<code>persistent_get("my_array")</code> => <samp>[10, 111, 12]</samp> <br/>
<code>persistent_remove("my_array")</code>
<code>persistent_get("my_array")</code> => <samp>undefined</samp> </pre>
        </details>

        <details id="persistent_set_doc_id" style="margin-left:40px;"><summary>persistent_set</summary>
            Binds a literal to a string key that can be retreived in a later DDE session.
            Null, booleans, numbers, strings, arrays, and literal objects can all be stored.<br/>
            <b>Example:</b> <code>persistent_set("test4", 44)</code><br/>
            <code>persistent_get("test4")</code> => <samp>44</samp>
        </details>

    </details> <!-- end Persistent -->

<details id="Picture_doc_id" class="doc_details"><summary>Picture</summary>
The web has a long and tortured history of using images.
This undesigned mess consists of:
<ul>
<li>Numerous file formats: jpeg, png, gif, etc.</li>
<li>Numerous video formats.</li>
<li>3 HTML tags: img, canvas, video.</li>
<li>No good internal representation standard.</li>
<li>Asynchronous interfaces that make grown men cry.</li>
</ul>
On top of that mess we'd like to do conceptually simple tasks like
show pictures, videos, and take pictures. We'd
also like to do complex machine vision tasks such as recognize
objects.
<p></p>
DDE attempts to make this reasonable with our Picture class,
associated Robot instructions and OpenCV.js. Please understand
that this is not nearly as easy as you can imagine and will
no doubt have unexpected behavior. But we're doing the best we can
from the perplexing foundation we're building upon.
For lower level, but broader capabilities, see
 <a href="#" onclick="DocCode.open_doc('machine_vision_doc_id', event)">Machine Vision with OpenCV</a>

<details id="Picture.init_doc_id" class="doc_details"><summary>init</summary>
Before Picture methods can be used,<br/>
<code>Picture.init() </code><br/> must be evaled.
It takes a few seconds because it loads in OpenCV.js and other libraries.
The 2nd through nth times it is called, it does nothing and
returns very quickly so no harm in calling it multiple times a session.
<p></p>
<i>Parameters:</i><br/>
<b>width</b> Default: <code>320</code>. Picture width of what you're going to be using<br/>
<b>height</b> Default: <code>240</code>. Picture height of what you're going to be using<br/>
<i>Example:</i><br/>
<code>Picture.init({width:640, height:480})</code><br/>
Note: If you use an aspect ratio that does not match your camera,
your pictures will be distorted.
Many (but probably not all) computer cameras have an aspect ratio matching
the default width/height of: 320 x 240 (1/4 VGA).
This would include:<br/>
648 x 480 (VGA) and<br/>
1440 x 1080 (the height of 1080p. 1080p width is 1920, which nakes
 a different aspect ratio than VGA.  But 1440 x 1080 is VGA aspect ratio.)
<p></p>
Picture.init need not be called for the Robot instructions
that correspond to the Picture methods, though it might
be a good idea to make sure that Picture is "inited" in time
for its first use, as not doing that might result in taking some "blank" pictures.
</details>

<details class="doc_details"><summary>Camera I/O</summary>

    <details class="doc_details"><summary><span style="color:red;">Attention Mac Users</span></summary>
        Camera-using methods: <code>Picture.show_picture</code>,
        <code>Picture.show_video</code>,
        and <code>Picture.take_picture</code> depend on
        camera permissions granted by the user.
        Calling these methods may pop up a dialog asking
        for permission the first time you call them
        in a DDE session. But we've had cases where
        such dialog boxes are obscured by other windows
        or simply don't pop up. In the later case,
        often the camera "picture" is blank.
        <p></p>
        If you use these methods on a Mac,
        we strongly suggest that you permit DDE to
        have camera access by choosing:<br/>
        Apple menu/System Preferences/Security & Privacy/Camera
        and checking the "dde_dev_env" app. Even if it is already
        checked, we've had a case where you must uncheck and then
        recheck for permissions to be granted. Perhaps this happens
        the first time you use a new DDE release.
    </details>

<details id="Picture.save_picture_doc_id" class="doc_details"><summary>save_picture</summary>
<code>Picture.save_picture</code> saves a picture to a file.<br/>
<i>Parameters:</i><br/>
<b>canvas_id_or_mat</b> Default: <code>"canvas_id"</code>
This is the source of the picture to save.
Can be a canvas HTML element, the string of that element's id, or an OpenCV mat.<br/>
<b>path</b> Default: <code>"my_pic.png"</code>
The string of the file to save the picture to.
If the string does not begin with slash, the file is saved under your
dde_apps folder.<br/>
<i>Example:</i><br/>
Try this out when you have evaled the DDE menu example:<br/> Insert/Machine Vision/Process Webcam,<br/>
clicked on "init" and clicked on "snap photo".
<code title="not in TestSuite">  Picture.save_picture({canvas_id_or_mat: "canvas_id", path: "mypic2.png"})
  Picture.show_picture({canvas_id: "out1_canvas_id", content: "mypic2.png"})
</code>

</details>

<details id="Picture.show_picture_doc_id" class="doc_details"><summary>show_picture</summary>
<code>Picture.show_picture()</code><br/>
 pops up a window that displays an image.<br/>
<i>Parameters:</i><br/>
<b>canvas_id</b> Default: <code>"canvas_id"</code> The string id to
a canvas dom element, or a canvas dom element itself, to render the
picture in. If this is a string that is NOT the id of a canvas dom element,
such a dom element will be created inside a new show_window and used to
display the image. The id of that dom element will be the canvas_id.<br/>
This makes it easy to show pictures in a given place, or make a new place.<br/>

<b>content</b> The picture to be shown. The default is:<br/>
<code>__dirname + "/examples/snickerdoodle_board.png"</code>
which is a picture of a printed circuit board similar to Dexter's processor board
that is included in DDE. You can also show pictures stored in your dde_apps folder
by using their name (without a prefix).
Content can also be a url or <br/>
OpenCV.js's "mat" object or<br/>
a base64 string of the actual image to show.<br/>

<b>title</b> Default: <code>undefined</code>. If undefined or null, and a new window is
created for showing this picture, a title for the window will be made up
based on the <i>content</i> arg. If its a string, that string will be shown in the title.<br/>

<b>x</b> Default: <code>200</code> If a new window is created, the x location
    of that window. 0 means left.</b><br/>

<b>y</b> Default: <code>40</code> If a new window is created, the y location
    of that window. 0 means top.<br/>

<b>width</b> Default: <code>320</code>.  If a new window is created, the width
    of the image shown in that window.<br/>

<b>height</b> Default: <code>240</code>.  If a new window is created, the height
    of the image shown in that window.<br/>

<b>rotate</b> Default: <code>0</code>. Number in degrees. Rotate the picture clockwise.<br/>
<b>scale_x</b> Default: <code>1</code>. Number to multiply the width of the picture by.
      If this number is negative, the picture displayed will be a mirror image
      of the original picture, i.e. flipped left to right. <br/>
<b>scale_y</b> Default: <code>1</code>. Number to multiply the height of the picture by.
   Note that scale_y can differ from scale_x if you want to distort the picture.<br/>
<b>translate_x</b> Default: <code>0</code>. Number in pixels to shift the picture right by.<br/>
<b>translate_y</b> Default: <code>0</code>. Number in pixels to shift the picture down by.<br/>

<b>rect_to_draw</b> Default: <code>null</code>. If this is an array of 4 non-negative integers,
it is used to make a single pixel wide red box at the
x, y, width and height specified in the array.<br/>
<b>show_window_callback</b> Default <code>show_window_callback_for_canvas_click</code>.
If canvas_id does not exist, a new show_window will be created that has an HTML canvas
tag that displays the content image. That show_window gets its callback argument
from this argument.
<p></p>
The default prints details about the pixel clicked on,
into the Output pane. View its source (by selecting and Evaling the function's name)
to see how you might write
a custom callback that does what you want with the clicked on pixel.
<i>Examples</i><br/>
<code>Picture.show_picture()</code><br/> Uses all the defaults.
<pre><code>Picture.show_picture({content:
"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"})</code></pre>
  A picture from the web you've seen before.<p><p/>
<pre><code>Picture.show_picture({content: __dirname + "/examples/snickerdoodle_board.png",
rect_to_draw:[20, 20, 50, 50]})</code></pre>
A picture file in DDE.<p><p/>
<pre><code>Picture.show_picture({canvas_id: "mycan", x: 20, y: 100,
        width: 200, height: 300})</code></pre>
 The default picture in a canvas with id: "mycan".</pre>
<pre><code>Picture.show_picture({canvas_id: "mycan", content:
    "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"})</code></pre>
  Another picture displayed in "mycan".
  <p></p>
  There is a corresponding instruction, <a href="#" onclick="DocCode.open_doc('IO.show_picture_doc_id', event)">IO.show_picture</a>
</details>

<details id="Picture.show_video_cameras_doc_id"class="doc_details">
         <summary>show_video_cameras</summary>
A given computer may have 0 or more cameras.
If you don't have one on your computer, "webcams" that plug into
a USB port are cheap and plentiful. We bought a Logitec c170 Webcam for $20
in June, 2018. It has 640 x 480 video resolution and works fine with the DDE software.
<br/>
A higher end camera, especially good for pictures of tiny objects that
we've used is <a target="_blank" href="https://www.amazon.com/Opti-Tekscope-Digital-Microscope-Definition-1600x1200/dp/B00PEZ3GMK/ref=pd_sbs_421_7">
Opti-Tekscope</a>
<p></p>
Even if you do have a webcam on your computer, you may want one or more to attach
to your Dexter. The above Logitec has a small table top stand. If you hacked
that off, you'd be left with a 2 inch wide, 1 inch high, 1/2 inch deep camera.
<p></p>
Its 3 foot USB cord isn't long enough to allow mounting on Dexter, but you can
get USB extention cables. We have seen 10 feet long USB cables work.
The USB 2 spec says 16 feet is the maximum length. USB 2 is the most common
version in use in 2018, but USB 3 is the new version and it is not recommended
to be longer than 10 feet.
<p></p>
The "default" webcam for the DDE software will be the one built-in to
your computer (if any). But if you're attaching a webcam to a computer,
you'll have to specify the ID of the camera you intend to use.<br/>
<code>Picture.show_video_cameras() </code></br> prints out a list of the video cameras
that are currently connected to your computer. Each camera has a:
<ul>
<li><b>kind</b> Always "videoinput"</li>
<li><b>label</b> For the Logitec, this is: "Webcam C170 (046d:082b)"</li>
<li><b>deviceId</b> A 50 character or so random string containing digits and lower case letters.
  I guess this is a unique ID. Its certainly long enough.
  This string can be used for the camera_id input for
  <code title="unEVALable">show_video</code> and
  <code title="unEVALable">take_picture</code>.
  Copy it from DDE's output pane and paste it into your camera_id argument.</li>
</ul>
<i>Parameter:</i><br/>
<b>callback</b> Default: <code>null</code>. If present, this
is a function that takes one argument, an array of camera "devices".
Each device is represented as a literal object with properties of kind, label, deviceId,
all with string values.<br/>
<i>Example:</i>
<pre><code>Picture.show_video_cameras(
        function(cams){
          out("You've got " +
              cams.length +
              " cameras.")})
        </code></pre>
</details>

<details  id="Picture.show_video_doc_id" class="doc_details"><summary>show_video</summary>
In order to take a picture for machine vision, you need to set up a video
stream and take a snapshot of it. This is quite difficult using web-based
sofware so we've made a wrapper for it.<br/>
<i>Parameters:</i><br/>
<b>video_id</b> Default: <code>"video_id"</code>. The location
that the video will be put in. This can be the id of a dom element
or the dom element object itself. If you give an id string
that does not have a corresponding dom element, a new
one will be made and wrapped in a show_window.
<br/>
<b>content</b> Default: <code>"webcam"</code> Where
the content displayed in the video_id will come from.
This can be the url or file name of a video file.
If its value is "webcam" (the default), the "content" will come from a webcam.
But your computer can have multiple webcams.
The actual webcam used is specified in the <i>camera_id</i> argument.
If you let camera_id default, the default webcam for your computer
will be used, but you can supply another one. See the doc for <i>camera_id</i> below.
<p></p>
For grabbing urls from <a target="_blank" href="http:www.youtube.com">Youtube</a>:
<ol><li>Click right on a video for a menu of operations.</li>
    <li>Click on "Copy video URL".</li>
    <li>Paste the string into the content argument in a call to show_video.</li>
</ol>
<b>title</b> A string. Default: <code>undefined</code> which will make a title
based on the <i>content</i> arg.<br/>
<b>x</b> Default: <code>400</code> The horizontal position of the show_window
  created if the video_id does not refer to an existing dom element.
  0 is on the left.<br/>
<b>y</b> Default: <code>0</code> The vertical position of the show_window
    created if the video_id does not refer to an existing dom element.
    0 is on the top. <br/>
<b>width</b> Default: <code>320</code>The width of the video element
    created if the video_id does not refer to an existing dom element.<br/>
<b>height</b> Default: <code>240</code> The height of the video element
    created if the video_id does not refer to an existing dom element.<br/>
<b>play</b> Default: <code>true</code> If true, the
video is played as soon as the display can handle it.<br/>
<b>camera_id</b> Default: <code>undefined</code> If the content is
    <code>"webcam"</code>, then this is the id of the camera used
    for the video stream. If no such ID exists, or if you don't pass this argument,
    the default webcam for
    your computer will be used. See <a href="#"
    onclick="DocCode.open_doc('Picture.show_video_cameras_doc_id', event)">show_video_cameras</a>
    or click <button onclick="Picture.show_video_cameras()">show video cameras</button>
    for a list of attached cameras and their id's. <br/>
<b>visible</b> Default: <code>true</code> A boolean.
If true, a show_window will be displayed containing the video from <i>content</i>.
If false, nothing will be shown. <code>false</code> is used when you want to use show_video to
snap high resolution pictures, but you don't want to take up the huge area
that showing a high resolution video would take up.
In such a case, you can use a different call to show_video with smaller width and height
to show what you're about to take a picture of, or none at all, if you prefer.<br/>
<b>callback</b> Default: <code>undefined</code>
Once the video display is up, this method is called with the created VIDEO dom element as its argument.
The default is to do nothing.
<p></p>
<i>Examples:</i>
<pre><code title="not in testsuite"> Picture.show_video() </code></pre>
<!-- we should be able to do at least one of a show_video or take_picture,
but when running all tests, I get error: "DomException: The play() request..."
with any show_video or take_picture calls in the test suite. -->
<pre><code title="not in testsuite"> Picture.show_video({content:
  "https://youtu.be/JAiHGA_I-P4"})
    </code></pre>

There is a corresponding instruction <a href="#" onclick="DocCode.open_doc('IO.show_video_doc_id', event)">IO.show_video</a>
</details>

<details id="Picture.take_picture_doc_id" class="doc_details"><summary>take_picture</summary>
To capture a picture from a camera, you must create a video stream to
the camera and take a snapshot. This is what take_picture does.<br/>
<i>Parameters:</i><br/>
<b>video_id</b> Default: <code>"video_id"</code> This can be a string of
the id of a VIDEO DOM element to show the video, or the DOM element itself.
If its a string and the corresponding DOM element doesn't exist,
one is created in a new show_window.<br/>
<b>camera_id</b> Default: <code>undefined</code> If there is already
a DOM element in, or pointed to, by video_id, this argument is ignored.
Otherwise its the ID of the camera to take the picture with.<br/>
<b>width</b> Default: <code>320</code>. Picture width in pixels.<br/>
<b>height</b> Default: <code>240</code>. Picture height in pixels.<br/>
<b>callback</b> Default: <code>Picture.show_picture_of_mat</code>
Called with an argument of the OpenCV.js mat made from this snapshot.<br/>
<i>Examples:</i><br/>
<pre><code title="not in testsuite"> Picture.take_picture() </code></pre>
<pre><code title="not in testsuite"> Picture.take_picture({callback: inspect}) </code></pre>


There is a corresponding instruction <a href="#" onclick="DocCode.open_doc('IO.take_picture_doc_id', event)">IO.take_picture</a>
</details>
</details> <!-- Camera I/O -->
<details class="doc_details"><summary>Low Level</summary>
OpenCV.js's low level data structures are tricky, probably
due to being based on C++ and the need for speed and memory efficiency.
See all of the links on <a target="_blank"
  href="https://docs.opencv.org/3.4.1/d1/d78/tutorial_js_table_of_contents_core.html">
  OpenCV.js Core Operations</a>.
DDE's easier-to-use wrappers for them slows them down a bit, but for many uses, not
enough to matter. (The slowest code is non-working code!)
<p></p>
We've tried to design
Picture such that it is essentially compatible with OpenCV.js so you can
mix and match Picture constructs with OpenCV.js's.
<p></p>
<i>The most important of the data structures are ...</i>
<details id="cv.Scalar_doc_id" class="doc_details"><summary>Scalar</summary>
In computer software, usually this term refers to a single number.
OpenCV uses it to mean an array of 4 numbers, usally representing a pixel's
red, green, blue, and alpha channels. In OpenCV.js you can often use<br/>
<code>[0, 55, 128, 255]</code><br/>
in place of<br/>
<code>new cv.Scalar(0, 55, 128, 255)</code>.<br/>This represents a blue-green color.
</details>

<details id="mat_doc_id" class="doc_details"><summary>mat</summary>
OpenCVs representation of a picture, or image. It is a 2D matrix
with some meta-data attached. There are many kinds of elements in mats,
with different number of bytes, etc. Picture concerns itself with just two.<br/>
1. A mat with a single byte for an element used for gray pictures (values 0 through
255 inclusive).<br/>
2. A mat with 4 bytes, one for each of red, green, blue, and alpha (rgba).
Alpha is transparency wherein 0 is completely transparent and 255 is opague.
Picture defaults alpha to 255.<br/>
These two mat types can get you through a lot of image processing.
</details>

<details id="is_string_base64_doc_id" class="doc_details"><summary>is_string_base64</summary>
    Returns <code>true</code> if the passed in string is base64 format, often
    used in tranferring image data on the web.
    The primary characters of Base64 strings are:<br/>
     letters, digits, plus_sign and slash.<br/>
    Sometimes they can contain newlines every 76 characters.
    The length is always a multiple of 4. To make that true, they
    may have equal-signs at the end to pad them to a length
    that is a multiple of 4.
    <br/>
    <i>Parameters:</i><br/>
    <b>a_string</b> Required. If the passed in value is a string of
    base64 format, <code>true</code> is returned</br/>
    <b>permit_trailing_newline</b> Boolean. Default: <code>false</code>.
    If true, a_string can have an extra newline on the end and still
    be considered as a base64 string if the rest of the string
    matches base 64. Some situations permit trailing newlines,
    so setting this to true is convenient in those cases.
    <i>Examples:</i><br/>
    <code>is_string_base64("abc=")</code> => <samp>true</samp><br/>
    <code>is_string_base64("abc")</code> => <samp>false</samp><br/>
    <code>is_string_base64(4321)</code> => <samp>false</samp><br/>
</details>

<i>Low-Level Methods ...</i>

    <details id="Picture.is_mat_doc_id" class="doc_details"><summary>is_mat</summary>
Returns true if the passed in object is a mat, otherwise false.<br/>
<i>Parameters:</i></br/>
<b>mat</b> A mat. Required.<br/>
<b>type</b> Default: <code>null</code> meaning any type of mat is ok.<br/>
Possible values:<br/>
    <code>null</code> meaning any type of mat is ok.<br/>
    <code>"gray"</code>. This function will return <code>true</code> only if mat is a gray mat.
        (Each matrix is a byte where 0 means black and 255 means white.<br/>
        <code>"color"</code> This function will return <code>true</code> only if mat is a color mat.<br/>
    <i>Examples:</i><br/>
     <code>Picture.is_mat(Picture.make_mat(), "rgba")</code> => <samp>true</samp><br/>
     <code>Picture.is_mat(42)</code> => <samp>false</samp>
</details>

<details id="Picture.make_mat_doc_id" class="doc_details"><summary>make_mat</summary>
A wrapper for <br/>
<code> new cv.Mat() </code><br/>
Creates an OpenCV image.<br/>
    <i>Parameters:</i><br/>
    <b>type</b> Default: <code>"rgba"</code> <br/>
    Possible values:<br/>
    <code>"rgba"</code> Makes a color mat.<br/>
    <code>"gray"</code> Makes a gray-scale mat. Don't use "grey".<br/>
    <b>width</b> Default: <code>320</code><br/>
    <b>height</b> Default: <code>240</code><br/>
    <b>color</b> Default: <code>[0, 0, 0, 255]</code>
    For "rgba" mats, an array of 4 numbers, one for red, green, blue, and alpha
    ranging from 0 through 255 inclusive.<br/>
     For "gray" mats, only the first
    element is used. If this is a number, say, 33, it is used to
    construct [33, 33, 33, 255] which is used in place of the number.<br/>
    <i>Examples:</i><br/>
    <code>Picture.make_mat()</code><br/>
     Makes a color initialized to all black.<p></p>
    <code>Picture.make_mat({type: "gray", color: 75} )</code><br/>
    A gray-scale mat initialized to a dark gray.<p></p>
    <code>Picture.make_mat({type: "rgba", color: [255, 0, 200, 255]})</code><br/>
    A color mat initiaized to magenta.
</details>
<details id="Picture.mat_width_doc_id" class="doc_details"><summary>mat_width</summary>
Returns the width of the mat argument.<br/>
<i>Example:</i><br/>
<code>Picture.mat_width(Picture.make_mat())</code><br/> => <samp>320</samp>
</details>
<details id="Picture.mat_height_doc_id" class="doc_details"><summary>mat_height</summary>
    Returns the height of the mat argument.<br/>
    <i>Example:</i><br/>
    <code>Picture.mat_height(Picture.make_mat())</code><br/> => <samp>240</samp>
</details>

<details id="Picture.mat_red_doc_id" class="doc_details"><summary>mat_red</summary>
    Returns the integer value of the red component of the pixel in
    the given mat at the x and y args.<br/>
    <i>Parameters:</i><br/>
    <b>mat</b> Required.<br/>
    <b>x</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>y</b> Required. An integer between 0 and (mat height - 1) inclusive.<br/>
    <i>Example:</i><br/>
    <code>Picture.mat_red(Picture.make_mat(), 16, 25)</code><br/>=> <samp>0</samp>
</details>
<details id="Picture.mat_green_doc_id" class="doc_details"><summary>mat_green</summary>
    Returns the integer value of the green component of the pixel in
    the given mat at the x and y args.<br/>
    <i>Parameters:</i><br/>
    <b>mat</b> Required.<br/>
    <b>x</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>y</b> Required. An integer between 0 and (mat height - 1) inclusive.<br/>
    <i>Example:</i><br/>
    <code>Picture.mat_green(Picture.make_mat(), 16, 25)</code><br/>=> <samp>0</samp>
</details>
<details id="Picture.mat_blue_doc_id" class="doc_details"><summary>mat_blue</summary>
    Returns the integer value of the blue component of the pixel in
    the given mat at the x and y args.<br/>
    <i>Parameters:</i><br/>
    <b>mat</b> Required.<br/>
    <b>x</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>y</b> Required. An integer between 0 and (mat height - 1) inclusive.<br/>
    <i>Example:</i><br/>
    <code>Picture.mat_blue(Picture.make_mat(), 16, 25)</code><br/>=> <samp>0</samp>
</details>

<details id="Picture.mat_alpha_doc_id" class="doc_details"><summary>mat_alpha</summary>
    Returns the integer value of the alpha component of the pixel in
    the given mat at the x and y args.<br/>
    <i>Parameters:</i><br/>
    <b>mat</b> Required.<br/>
    <b>x</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>y</b> Required. An integer between 0 and (mat height - 1) inclusive.<br/>
    <i>Example:</i><br/>
    <code>Picture.mat_alpha(Picture.make_mat(), 16, 25)</code><br/>=> <samp>255</samp>
</details>

<details id="Picture.mat_gray_doc_id" class="doc_details"><summary>mat_gray</summary>
    Returns the integer value of the gray component of the pixel in
    the given mat at the x and y args.<br/>
    <i>Parameters:</i><br/>
    <b>mat</b> Required.<br/>
    <b>x</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>y</b> Required. An integer between 0 and (mat height - 1) inclusive.<br/>
    <i>Example:</i><br/>
    <code>Picture.mat_gray(Picture.make_mat(), 16, 25)</code><br/>=> <samp>255</samp>
</details>

<details id="Picture.mat_pixel_doc_id" class="doc_details"><summary>mat_pixel</summary>
    Returns the typed array of the pixel in
    the given mat at the x and y args.<br/>
    For a "rgba" mat this array is 4 long.<br/>
    For a "gray" mat this array is 1 long.<br/>
    <i>Parameters:</i><br/>
    <b>mat</b> Required.<br/>
    <b>x</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>y</b> Required. An integer between 0 and (mat height - 1) inclusive.<br/>
    <i>Example:</i><br/>
    <code>Picture.mat_pixel(Picture.make_mat(), 16, 25)</code><br/>
    => <samp>Uint8Array.from([0, 0, 0, 255])</samp><br/>
    Note that a Uint8 Array is a JS typed array. Most untyped array operations work on it
    including length, getting and setting elements.<br/>
    <code>Picture.mat_pixel(Picture.make_mat({type: "gray"}), 16, 25)</code><br/>
    => <samp>Uint8Array.from([0])</samp><br/>
    Note that you can set the element of this typed array and that will
    be reflected in the mat that it came from, ie.<br/>
    <code title="uneVALable">the_pixel[0] = 23 </code>
    <code title="uneVALable">Picture.mat_pixel(16, 25)[0]</code><br/>
    => <samp>23</samp><br/>
</details>

<details id="Picture.set_mat_red_doc_id" class="doc_details"><summary>set_mat_red</summary>
    Sets the red component of the pixel in the given mat at x and y.<br/>
    <i>Parameters:</i>
    <b>mat</b> Required.<br/>
    <b>x</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>y</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>value</b> Default: <code>0</code> The new value of the pixel's red component.
    An integer between 0 and 255 inclusive.<br/>
    <i>Example:</i><br/>
    <pre><code> let mat = Picture.make_mat()
 Picture.set_mat_red(mat, 2, 3, 128)
 Picture.mat_red(mat, 2, 3)
    </code></pre>
=> <samp>128</samp>
</details>

<details id="Picture.set_mat_green_doc_id" class="doc_details"><summary>set_mat_green</summary>
    Sets the green component of the pixel in the given mat at x and y.<br/>
    <i>Parameters:</i>
    <b>mat</b> Required.<br/>
    <b>x</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>y</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>value</b> Default: <code>0</code> The new value of the pixel's green component.
    An integer between 0 and 255 inclusive.<br/>
    <i>Example:</i><br/>
    <pre><code> let mat = Picture.make_mat()
 Picture.set_mat_green(mat, 2, 3, 128)
 Picture.mat_green(mat, 2, 3)
    </code></pre>
    => <samp>128</samp>
</details>

<details id="Picture.set_mat_blue_doc_id" class="doc_details"><summary>set_mat_blue</summary>
    Sets the blue component of the pixel in the given mat at x and y.<br/>
    <i>Parameters:</i>
    <b>mat</b> Required.<br/>
    <b>x</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>y</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>value</b> Default: <code>0</code> The new value of the pixel's red component.
    An integer between 0 and 255 inclusive.<br/>
    <i>Example:</i><br/>
    <pre><code> let mat = Picture.make_mat()
 Picture.set_mat_blue(mat, 2, 3, 128)
 Picture.mat_blue(mat, 2, 3)
    </code></pre>
    => <samp>128</samp>
</details>

<details id="Picture.set_mat_alpha_doc_id" class="doc_details"><summary>set_mat_alpha</summary>
    Sets the alpha component of the pixel in the given mat at x and y.<br/>
    <i>Parameters:</i>
    <b>mat</b> Required.<br/>
    <b>x</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>y</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>value</b> Default: <code>0</code> The new value of the pixel's alpha component.
    An integer between 0 and 255 inclusive.<br/>
    0 means transparent. 255 means opague.
    <i>Example:</i><br/>
    <pre><code> let mat = Picture.make_mat()
 Picture.set_mat_alpha(mat, 2, 3, 128)
 Picture.mat_alpha(mat, 2, 3)
    </code></pre>
    => <samp>128</samp>
</details>

<details id="Picture.set_mat_gray_doc_id" class="doc_details"><summary>set_mat_gray</summary>
    Sets the gray value of the pixel in the given mat at x and y.<br/>
    <i>Parameters:</i>
    <b>mat</b> Required.<br/>
    <b>x</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>y</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>value</b> Default: <code>0</code> The new value of the pixel's gray component.
    An integer between 0 and 255 inclusive.<br/>
    <i>Example:</i><br/>
    <pre><code> let mat = Picture.make_mat({type: "gray"})
 Picture.set_mat_gray(mat, 2, 3, 128)
 Picture.mat_gray(mat, 2, 3)
    </code></pre>
    => <samp>128</samp>
</details>

<details id="Picture.set_mat_pixel_doc_id" class="doc_details"><summary>set_mat_pixel</summary>
    Sets the blue component of the pixel in the given mat at x and y.<br/>
    <i>Parameters:</i>
    <b>mat</b> Required.<br/>
    <b>x</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>y</b> Required. An integer between 0 and (mat width - 1) inclusive.<br/>
    <b>value</b> Default: <code>0</code> The new value of the pixel.
    An integer between 0 and 255 inclusive.<br/>
    <i>Example:</i><br/>
    <pre><code> let mat = Picture.make_mat()
 Picture.set_mat_pixel(mat, 2, 3, [128, 129, 130, 250])
 Picture.mat_pixel(mat, 2, 3)
    </code></pre>
    => <samp>Uint8Array.from([128, 129, 130, 250])</samp>
</details>

<details id="Picture.set_mat_reds_doc_id" class="doc_details"><summary>set_mat_reds</summary>
    Sets the red component of all the pixels in the given mat.<br/>
    <i>Parameters:</i><br/>
    <b>mat</b> Required.<br/>
    <b>value</b> Default: <code>0</code> The new value of all the pixels' red component.
    An integer between 0 and 255 inclusive.<br/>
    <i>Example:</i><br/>
    <pre><code> let mat = Picture.make_mat()
 Picture.set_mat_reds(mat, 133)
 Picture.mat_red(mat, 2, 3)
    </code></pre>
    => <samp>133</samp>
</details>

<details id="Picture.set_mat_greens_doc_id" class="doc_details"><summary>set_mat_greens</summary>
    Sets the green component of all the pixels in the given mat.<br/>
    <i>Parameters:</i><br/>
    <b>mat</b> Required.<br/>
    <b>value</b> Default: <code>0</code> The new value of all the pixels' green component.
    An integer between 0 and 255 inclusive.<br/>
    <i>Example:</i><br/>
    <pre><code> let mat = Picture.make_mat()
 Picture.set_mat_greens(mat, 133)
 Picture.mat_green(mat, 2, 3)
    </code></pre>
    => <samp>133</samp>
</details>

<details id="Picture.set_mat_blues_doc_id" class="doc_details"><summary>set_mat_blues</summary>
    Sets the blue component of all the pixels in the given mat.<br/>
    <i>Parameters:</i><br/>
    <b>mat</b> Required.<br/>
    <b>value</b> Default: <code>0</code> The new value of all the pixels' blue component.
    An integer between 0 and 255 inclusive.<br/>
    <i>Example:</i><br/>
    <pre><code> let mat = Picture.make_mat()
 Picture.set_mat_blues(mat, 133)
 Picture.mat_blue(mat, 2, 3)
    </code></pre>
    => <samp>133</samp>
</details>

<details id="Picture.set_mat_grays_doc_id" class="doc_details"><summary>set_mat_grays</summary>
    Sets the gray component of all the pixels in the given mat.<br/>
    <i>Parameters:</i><br/>
    <b>mat</b> Required.<br/>
    <b>value</b> Default: <code>0</code> The new value of all the pixels' gray component.
    An integer between 0 and 255 inclusive, or an array, who's first element is used.<br/>
    <i>Example:</i><br/>
    <pre><code> let mat = Picture.make_mat({type: "gray"})
 Picture.set_mat_grays(mat, 133)
 Picture.mat_gray(mat, 2, 3)
    </code></pre>
    => <samp>133</samp>
</details>

<details id="Picture.set_mat_pixels_doc_id" class="doc_details"><summary>set_mat_pixels</summary>
    Sets all the pixels in the given mat to the given value.<br/>
    <i>Parameters:</i><br/>
    <b>mat</b> Required. May be an "rgba" or a "gray" mat.<br/>
    <b>value</b> Default: <code>[0, 0, 0, 255]</code> The new value of all the pixels.
    An array of integers between 0 and 255 inclusive.
    If the value is an integer, it is converted to [value, value, value, 255]
    before being used to set the pixels.
     <br/>
    <i>Example:</i><br/>
    <pre><code> let mat = Picture.make_mat()
 Picture.set_mat_pixels(mat, [133, 134, 135, 250])
 Picture.mat_pixel(mat, 2, 3)
    </code></pre>
    => <samp>Uint8Array.from([133, 134, 135, 250])</samp>
</details>
</details> <!-- ends Low Level -->

<details class="doc_details"><summary>High Level</summary>
These methods are, for the most part, wrappers around
one or more OpenCV.js methods that take a mat or two as inputs
and return a mat or some analysis of the input mats.
<p></p>
In OpenCV.js, generally the methods must take a "dst" (destination) argument
which is a mat that is "filled in" by the method.
Picture methods allow you to NOT pass in this "dst" argument
(which Picture calls "mat_out"). If it is not passed in,
a new one of the appropriate size is automatically created.
Regardless of whether the mat is created, the mat_out is returned
by the method. It is efficient to "reuse" output mats.

<details id="Picture.mat_average_color_doc_id" class="doc_details"><summary>mat_average_color</summary>
Returns the average of all the pixels in the passed in mat.
Think of this as a drastic simplification of a picture, which
is sometimes all you need. You can use it to compare two
pictures for "overall color balance".<br/>
The workhorse of this method is <code>cv.mean</code>
<br/>
<i>Parameters:</i><br/>
<b>mat</b> Required. May be of type "rgba" or "gray".<br/>
<b>return_integer</b> Default: <code>false</code>
When  <code>false</code>, an array of 4 nuumbers is returned.
If the mat is "gray", the first number in the array will be the
average gray value of all the pixels and the other array elements
will be 0. <br/>
If the mat is "rgba", the average of each component is returned.
So for example, a picture of a forrest will likely have a higher
value for the green component than the red and blue components.
<p></p>
If return_integer is  <code>true</code> ,
and if the mat is of type "gray", the first element of the
average color array is returned, ie the average gray value for
the whole image.<br/>
If the mat is "rgba", then the red, green and blue pixel values
are averaged and that is returned.
The integer will be between 0 and 255 inclusive.<br/>
<i>Examples:</i><br/>
<code>Picture.mat_average_color(Picture.make_mat(), true)</code><br/>
    => <samp>0</samp><br/>
<code title="unEVALable">Picture.mat_average_color(mat, true) > 128</code>
is a great first cut at sensing if its day time or the lights are on.
A value closer to 1 than 0 indicates a more lighted area.<br/>
</details>

<details id="Picture.mat_to_gray_doc_id" class="doc_details"><summary>mat_to_gray</summary>
    Converts a color mat to a gray mat that has just one numerical value
    (0 to 255 inclusive) per pixel.<br/>
    <i>Parameters:</i><br/>
    <b>mat_in</b> Required. Usually a color mat.
    If mat_in happens to already be a gray mat, it is returned and mat_out is not used.<br/>
    <b>mat_out</b> Default: <code>null</code> meaning that a new mat of the
    same width and height of mat_in will be created.
    Whether or not a new mat is created, a gray mat will be returned.<br/>
    <i>Example:</i><br/>
    <code>Picture.mat_to_gray(Picture.make_mat())</code><br/>
</details>

<details id="Picture.mats_diff_doc_id" class="doc_details"><summary>mats_diff</summary>
    Subtracts each component of each pixel in mat_in1 from the corresponding
    pixel in mat_in2, and places the absolute value of the result
    into mat_out, which is returned. The output mat will be
    of the same type as the input mat (i.e. "rgba" or "gray".)
    <i>Parameters:</i><br/>
    <b>mat_in1</b> Required. mat of type "rgba" or "gray".<br/>
    <b>mat_in2</b> Required. mat of type "rgba" or "gray". Must be the same type as mat_in1.
    Which of the two input mats is mat_in1 and mat_in2 doesn't matter.<br/>
    <b>mat_out</b> Default: <code>null</code> meaning that a new mat of the
    same width, height and type of mat_in1 will be created.
    Whether or not a new mat is created, the output mat will be returned.<br/>
    <i>Example:</i><br/>
    <code>Picture.mats_diff({mat_in1: Picture.make_mat(), mat_in2: Picture.make_mat()})</code>
    <p></p>
    This method is especially useful in subtracting a background from a picture
    with the same background except that there's a foreground object,
    thus giving you a picture with a black background and just the
    pixels of the foreground. Note that because the foreground region
    will also have the background "behind it" subtracted, the
    colors of resultant image in the foreground region will not
    be the same as the forefround in the original picture,
    but they are very likely to have positive (not zero) values.
</details>

<details id="Picture.threshold_doc_id" class="doc_details"><summary>threshold</summary>
    The input mat can be either "rgba" or 'gray".
    The output mat will be of the same type as the input,
    but the color components of its pixels will be one of two values.
    The two values are chosen from a set of 4 values:
    0, thresh, max_value, and the original value of the pixel.
    Which 2 out of the 4 possible values and how those two
    are used, is determined by the threshold_type argument.
    This function is a wrapper around <code>cv.threshold</code>
    <br/>
    <i>Parameters:</i><br/>
    <b>mat_in</b> Required. An "rgba" or "gray" mat.<br/>
    <b>thresh</b> Default: <code>30</code>. A number between 0 and 255 inclusive.<br/>
    <b>max_value</b> Default: <code>255</code>. A number between 0 and 255 inclusive.<br/>
    <b>threshold_type</b> Default: <code>cv.THRESH_BINARY</code>.
    Determines each output pixel's value based on the relationship
    between the input pixel's value and the thresh input.
    The output pixel values are computed like so:
    <ul>
        <li><code>cv.THRESH_BINARY</code><br/>(in > thresh) ? max_value : 0 </li>
        <li><code>cv.THRESH_BINARY_INV</code><br/>(in > thresh) ? 0 : max_value</li>
        <li><code>cv.THRESH_TRUNC</code><br/>(in > thresh) ? thresh : in</li>
        <li><code>cv.THRESH_TOZERO</code><br/>(in > thresh) ? thresh : 0</li>
        <li><code>cv.THRESH_TOZERO_INV</code><br/>(in > thresh) ? 0 : in</li>
    </ul>
    <i>Example:</i><br/>
    <pre><code>Picture.threshold({
    mat_in: Picture.make_mat(),
    thresh: 1,
    max_value: 254,
    threshold_type: cv.THRESH_BINARY_INV})
    </code></pre>
</details>
<details id="Picture.remove_noise_doc_id" class="doc_details"><summary>remove_noise</summary>
    The input mat can be either "rgba" or "gray".
    The output mat will be of the same type as the input,
    but it will have less detail. Small, isolated patches of a color will
    be removed.
    <br/>
    <i>Parameters:</i><br/>
    <b>mat_in</b> Required. An "rgba" or "gray" mat.<br/>
    <b>noise_size</b> Default: <code>3</code>. A positive integer that
    is the number of pixels of the side of a square.
    That "square" is conceptually placed over the top of
    each pixel in mat_in. That pixel is replaced by the
    median value of the pixels in the surrounding square.
    The larger the square, the larger the particles of noise are
    filtered out, but the more detail lost.<br/>
    This method is a wrapper around <code>cv.medianBlur</code>
    <br/>
    <i>Example:</i><br/>
    <pre><code>Picture.remove_noise({
    mat_in: Picture.make_mat(),
    noise_size: 5})
    </code></pre>
</details>

<details id="Picture.locate_object_doc_id" class="doc_details"><summary>locate_object</summary>
The input mat can be either "rgba" or "gray".
The output mat will be "gray".
The returned rectangle says where an object is in the input mat.
<p></p>
The secrete to locate_object works by subtracting a background mat (mat_in2) from
a mat containing an object you want to locate (in mat_in1).
Although its cleanest if you have a "pure background" mat and a background + object
mat, you can also have two mat's that both contain the object that
has moved a slight amount. In that case, the center of the located object
will be between the center's of the objects in the two mats and the
rect contains a union of the object's points in both mats.
If the difference in the position of the object in the two input mats is slight,
this is often good enough at locating the object.<br/>
It calls, in order:
<ol><li>Picture.mats_diff</li>
    <li>Picture.mat_to_gray</li>
    <li>Picture.threshold</li>
    <li>Picture.remove_noise</li>
</ol>
<i>Parameters:</i><br/>
<b>mat_in1</b> Default: Required. The "foreground" mat.<br/>
<b>mat_in2</b> Default: <code>null</code>. The background mat.
If null, assume that the foreground mat is a picture of
an object surrounded by black.<br/>
<b>mat_out</b> Default: <code>null</code>.
If null, a new mat is created for the output. It will be of type "gray".<br/>
<b>threshold</b> Default: <code>30</code>. An integer between 0 and 255 inclusive.
Pixel values below or equal to the threshold will be converted to black.
Those above it will be converted to white. Those white pixels will
depict the object you want to locate.<br/>
<b>noise_size</b> Default: <code>3</code>. See <a href="#" onclick="DocCode.open_doc('Picture.remove_noise_doc_id', event)">noise_size</a>.<br/>
<b>out_format</b> Default: <code>"min_area_rect"</code>.
Determines what kind of rectangle is computed to locate the object.<br/>
<i style="color:darkorange;">The details of the object returned by locate_object depend on
this argument but are in flux and will likely change in future releases.</i><br/>
<code>"rect"</code> returns a rect that is oriented with the pixel grid
and represented as an array of x, y, width and height.<br/>
<code>"min_area_rect"</code> causes the returned rect to be a rotated rect of the
minimum area to enclose the points of the object. It often has
a smaller area to enclose the object points than "rect". Please inspect the returned
value to see its fields. A work in progress!<br/>
<code>"hull"</code> does not return a rectangle at all but rather
a set of points that describe lines that surround the object.
Whereas a rectangle will have, effectively just 4 such points,
with 4 lines, where lines 1 and 3 are parallel and lines 2 and 4
are parallel, "hull" may have many lines, none of which may be parallel.
The described hull is convex, meaning that the angle between two adjacent
lines is less than 180 degrees from the standpoint of the center of the object.
"hull" gives the most accurate shape of the object, (hugs the object tightest)
 but is more complex to work with.<br/>
 If there are no points for a located object, <code>null</code> will be returned
 from locate_object.
<b>avg_center</b> Default: <code>true</code>.
Only relevent for "min_area_rect". If this is <code>false</code>,
 the center_x and center_y properties of the returned object
 represent the center of the rectangle locating the object.
 If it is <code>true</code>, center_x and center_y represent
 a kind of "center of mass", wherein for all the pixels of the
 object (white), center_x is the average of all the x locations,
 and center_y is the average of all the y locations.
 If the recognized object's pixels solidly fill in the rectangle
 with no external points, the rect center and  average center are
 the same. But often the recognized object's pixels are more "clumped"
 with lots of blackspace in between clumps.
 If there happen to be a few "noise points" not part of the object,
 these are effectively averaged out by the more numerous in-object points.
 Thus the noise points are less damaging to the accuracy of the real
 center of the object.<br/>
<b>show</b> Default: <code>true</code>.
After location of the object, display a show_window containing the
black and white mat of the white points of the located object
with the rect and center_x and center_y shown as an overlay in red.<br/>
<i>Example:</i><br/>
<pre><code>Picture.locate_object({
    mat_in1: Picture.make_mat(),
    mat_in2: Picture.make_mat(),
    mat_out:null,
    threshold:30,
    noise_size:3,
    out_format:"min_area_rect", //or "rect", "hull"
    avg_center:true,
    show:true})
    </code></pre>
    => <samp>null</samp>
</details> <!-- locate_object -->

<details id="Picture.detect_blobs_doc_id" class="doc_details"><summary>detect_blobs</summary>
In machine vision, a blob is a small, dense set of connected pixels of similar color
often forming a simple geometric shape like a filled in circle or rectangle.
Many pictures will contain several to numerous blobs. By identifying the
size, shape and location of such blobs, you can locate particular "features"
within an image, or even use the pattern of such blobs to identify
complex objects.
<p></p>
Picture.detect_blobs is a complex wrapper for the complex <code>cv.SimpleBlobDetector</code>.
It returns an array of objects, one for each blob.<br/>
<i>Parameters:</i><br/>
    <b>mat_in</b> Default: Required. The mat to detect the blobs in. It can be of type "rgba" or "gray".<br/>
    <b>mat_out</b> Default: <code>null</code>. A mat to use in internal processing. If null,
    one is created. <br/>
    <b>white_level</b> Default: <code>128</code>. An integer from 0 through 255 inclusive.
    This converts the mat_in to a black and white image wherein the all the values
    in mat_in that are between 0 and 128 are converted to 255 (white) and
     the values above white_level are converted to 0 (black).
     Thus it inverts the colors. mat_in light areas are converted to black.
     mat_in dark areas are converted to white.
     Our blobs are formed by the lighter areas in mat_in.
     white_level is used as the "lowerb" in <code>cv.inRange</code> to implement this
     stage of processing mat_in.<br/>
    <b>show_picture</b> Default: <code>true</code>. If true, a picture is shown with
    the detected blobs circled in a color. Useful for debugging and tweaking
    other parameters.<br/>
    <b>show_keypoints</b> Default: <code>true</code>. Shows a window of the detected blobs
    and their properties. Useful for debugging.<br/>
    <b>sort_by</b> Default: <code>"max_size_first"</code>.  How to order the array of returned
    blob objects. <br/>
    Possible values:<br/>
    <code>"max_size_first"</code> Orders the blobs by largest first.<br/>
    <code>"size"</code> Orders the blobs by smallest first.<br/>
    <code>"max_x_first"</code> Orders the blobs by right-most first.<br/>
    <code>"x"</code> Orders the blobs by left-most first.<br/>
    <code>"max_y_first"</code> Orders the blobs by bottom-most first.<br/>
    <code>"y"</code> Orders the blobs by top-most first.<br/>

    <b>opencv_result_format</b> Default: <code>false</code>. If false, the result array
    has objects with properties:
    <ul>
        <li><b>x</b> The number of pixels from the left of the picture of the blob.</li>
        <li><b>y</b> The number of pixels from the top of the picture of the blob</li>
        <li><b>size</b> A rough measure of the size or diameter of the blob.</li>
    </ul>
    If <code>true</code>, the result objects are OpenCV's format for keypoints that's more confusing.
    <p></p>
     <i>The rest of these parameters are passed to cv.SimpleBlobDetector.
     See OpenCV for documentation.</i><br/>
     <b>thresholdStep</b> Default: <code>10</code>.<br/>
     <b>minThreshold</b> Default: <code>50</code>.<br/>
     <b>maxThreshold</b> Default: <code>220</code>.<br/>

     <b>minRepeatability</b> Default: <code>2</code>.<br/>
     <b>minDistBetweenBlobs</b> Default: <code>10</code>.<br/>

     <b>filterByColor</b> Default: <code>true</code>. Use false to not filter by color<br/>
     <b>blobColor</b> Default: <code>0</code>.  Use 0 to select darker blobs, 255for lighter blobs<br/>

     <b>filterByArea</b> Default: <code>true</code>. Use true to filter by area, false to not filter by area.<br/>
     <b>minArea</b> Default: <code>40</code>.   Area is in pixels.<br/>
     <b>maxArea</b> Default: <code>700</code>. A non negative integer. <br/>
     <b>filterByCircularity</b> Default: <code>true</code>.<br/>
     <b>minCircularity</b> Default:  <code>0</code>.  0 means the least circular shape. <br/>
     <b>maxCircularity</b> Default: <code>1</code>. 1 means a perfect circle. 0.785 is a square. <br/>

     <b>filterByInertia</b> Default:  <code>false</code>.<br/>
     <b>minInertiaRatio</b> Default:  <code>0.1</code>.  0 means a line. 1 means a circle<br/>
     <b>maxInertiaRatio</b> Default:  <code>1</code>.   0 to 1. An ellipse is recognized by a value between 0 and 1.<br/>

     <b>filterByConvexity</b> Default: <code>false</code>.<br/>
     <b>minConvexity</b> Default: <code>0.95</code>.  0 to 1.  0 means lots of concave parts of the perimeter (like a star)<br/>
     <b>maxConvexity</b> Default:  <code>1</code>. <br/>
     <i>Example:</i><br/>
     <pre><code>Picture.init()
Picture.show_picture() //uses a picture of a PC board.
//Wait for picture to show
var mat1 = cv.imread(canvas_id)
Picture.detect_blobs({mat_in: mat1, sort_by:"y"})
    </code></pre>
</details>

<details id="make_classifier" class="doc_details"><summary>make_classifier</summary>
OpenCV.js has a way to detect objects based on a compilation of features of
numerous pictures of the object you want to detect.
A compilation of these features is stored in an xml file.
<i>make_classifier</i> makes and returns an object that encapsulates such xml files
for use by <code>Picture.classifier_detect</code>.<br/>
<i>make_classifier</i> is a wrapper for OpenCV's <code>new cv.CascadeClassifier()</code><br/>
<i>Parameter:</i><br/>
<b>path</b> Default: <code>null</code> which uses the file
at the path: <code>__dirname + "/vision/lbpcascade_frontalface.xml"</code>,
stored inside of DDE.
This is a small, simple face recognition classifier.
Beware, it works poorly on faces with glasses on.
A larger, 1Mbyte face classifier is available at:<br/>
https://raw.githubusercontent.com/opencv/opencv/master/data/lbpcascades/lbpcascade_frontalface.xml<br/>
More xml files are under: https://github.com/opencv/opencv/tree/master/data
<p></p>
You can't use a url for the path argument. You must first download
the file to your local machine. The simplest place to put it is in your
<code>dde_apps_folder</code> folder because then you can just use the file's name and extension
(without a folder name) as the path argument to <i>make_classifier</i>.
<br/>
<i>Examples:</i><br/>
<code>Picture.init()</code><br/>
<code>Picture.make_classifier()</code><br/>
<code>Picture.make_classifier(__dirname + "/vision/lbpcascade_frontalface.xml")</code><br/>
Both these examples use the same xml file because the file
given in the 2nd example is the default file.
<p></p>
DDE does not yet document how to make such xml files from a set of pictures in an object.
This is not easy, but can be done with OpenCV.
</details>

<details id="classifier_detect" class="doc_details"><summary>classifier_detect</summary>
Finds objects specified by a classifier in a given picture.
The returned value is an array of rectangles where the recognized objects
appear in the given picture.<br/>
It is a wrapper for OpenCV's <code title="unEVALable psuedocode">classifier.detectMultiScale()</code><br/>
<i>Parameters:</i><br/>
    <b>classifier</b> Required. A classifier object made with
        <code>Picture.make_classifier()</code><br/>
    <b>mat_in</b> Required. A color or gray mat. <br/>
    <b>scale_factor</b> Default: <code>1.1</code>
        How much the image size is reduced at each image scale.<br/>
    <b>min_neighbors</b> Default: <code>3</code> An integer. A lower value
        makes the detection of an object more likely. A higher value
        is more discerning when detecting an object.<br/>
    <b>min_size</b>  Default: <code>new cv.Size()</code> The minimum size
        of an object to be detected.<br/>
        Example: <code> new cv.Size(50, 50)</code><br/>
    <b>max_size</b>  Default: <code>new cv.Size()</code> <br/>
        Example: <code> new cv.Size(200, 100)</code><br/>
    <b>show</b> Default: <code>true</code>. If true,
        a show_window pops up showing mat_in with red rectangles around
        each detected object.<br/>
<i>Example:</i><br/>
<pre><code title="not in test suite"> Picture.init()
 var my_classifier = Picture.make_classifier()
 var mat1
 Picture.take_picture({callback: function(mat) { mat1 = mat }} )
 //pause to allow picture to be taken.
 Picture.classifier_detect({classifier: my_classifier,
                            mat_in: mat1})
    </code></pre>
In the above example, the first line creates the cloassifier object
that is used as an arugment in the last line.
The 2nd line declares a global variable which
is set in the callback of the 3rd line.
This global variable is used in the last line as the mat_in
to look in for the object being detected.
</details>
</details>    <!-- High Level -->

<details class="doc_details"><summary>Similarity</summary>
Understanding how similar two pictures are can help classify pictures into categories,
tell you if the scene is as expected and a variety of other useful machine vision tasks.
<p></p>
Similarity has many potential dimensions. The Picture class contains
some methods for telling you how similar two mats are along different dimentions.
They all take 2 mats as inputs and return a floating point number between
0 and 1, with 0 meaning very dissimilar and 1 meaning very similar.

<details id="Picture.mats_similarity_by_average_color_doc_id" class="doc_details"><summary>mats_similarity_by_average_color</summary>
    This method gets the average color of the two input methods,
    subtracts them, takes the absolute value of that,
    divides it by 255 and subtracts it from 1.
    Its a crude similarity wherein what counts is the overall color balance
    of a picture, not <i>where</i> those colors are in the picture.
    Thus its possible that a picture of white clouds and a picture of a white wedding dress
    would be very similar. But different camera angles or lighting on those two subjects
    might have very different similarities.<br/>
    <i>Parameters:</i><br/>
    <b>mat_in1</b> Required. mat of type "rgba" or "gray".<br/>
    <b>mat_in2</b> Required. mat of type "rgba" or "gray". in1 and in2
    needn't be the same type, nor even the same width and height.
    Which of the two input mats is mat_in1 and mat_in2 doesn't matter.<br/>
    <i>Example:</i><br/>
    <pre><code>Picture.mats_similarity_by_average_color({
    mat_in1: Picture.make_mat(),
    mat_in2: Picture.make_mat()})
    </code></pre>
    => <samp>1</samp>
    This method is less discerning than Picture.mats_similarity_by_color.
</details>

<details id="Picture.mats_similarity_by_color_doc_id" class="doc_details"><summary>mats_similarity_by_color</summary>
    Uses Picture.mats_diff to substract one mat from another, then
    gets the average value of that mat to return a number
    between 0 and 1. The result is adjusted such that
    0 means the pictures are very different, and 1 means they are very similar.
    The two input mats can both be "rgba" or both be "gray".
    <i>Parameters:</i><br/>
    <b>mat_in1</b> Required. mat of type "rgba" or "gray".<br/>
    <b>mat_in2</b> Required. mat of type "rgba" or "gray". Must be the same type as mat_in1.
    Which of the two input mats is mat_in1 and mat_in2 doesn't matter.<br/>
    <b>mat_out</b> Default: <code>null</code> meaning that a new mat of the
    same width, height and type of mat_in1 will be created to store the
    difference of the two input mats temporarily.<br/>
    <i>Example:</i><br/>
    <pre><code>Picture.mats_similarity_by_color({
    mat_in1: Picture.make_mat(),
    mat_in2: Picture.make_mat()})
    </code></pre>
    => <samp>1</samp>
    This method is a cheap way to tell how similar two mats are.
</details> <!-- mats_similarity_by_color -->

<details id="Picture.mats_similarity_by_detect_blobs_doc_id" class="doc_details"><summary>mats_similarity_by_detect_blobs</summary>
<code>Picture.detect_blobs</code> is called on each of the two input mats. Then the arrays of blob objects
are compared for similarity.<br>
<i>Parameters:</i><br/>
<b>mat_in1</b> Default: Required. Can be of type "rgba" or "gray".<br/>
<b>mat_in2</b> Default: Required. Can be of type "rgba" or "gray".<br/>
<b>mat_out</b> Default: <code>null</code>. A mat used for internal processing. It will be automatically created if not passed in.<br/>
<b>point_count</b> Default: <code>10</code>. The number of blobs to consider from
each input mat. You may want to set this number low to avoid "noise" blobs.<br/>
If the number of blobs found in one or more input mats is
less than this number, then only that number are considered.
When the number of blobs in one or two input mats is less than point_count,
and the blob counts from each mat are not equal, that will boost the dissimilarity
of the input mats.<br/>
<b>sort_by</b> Default: <code>"max_size_first"</code> The array of blobs found
in each input mat are sorted by this. As blobs are compared,
the first blob from mat_in1 is compared to the first blob in mat_in2,
then the second blob from each input mat is compared, etc. on up
to point_count blobs. Thus the value of sort_by is crucial for determining
the kind of similarity you will get.
See <a href="#" onclick="DocCode.open_doc('Picture.detect_blob_doc_id', event)">Picture.detect_blob</a>
for sort_by details.
<p></p> Each blob comparison contributes a score to the similarity returned value.
Each attribute within each blob object is compared with its counterpart in
the other input mat. So for instance,
mat_in1's first blob, x attribute is compared with
mat_in2's first blob, x attribute. If they happen to be the same,
that comparison indicates maximum similarity. If they differ by a bit,
say 105 and 107 then they are considered to be very similar.
If they differ by a lot, say 2 to 103, they are considered to be quite dissimilar.
The comparison of numbers is not a simple difference. For instance,
the similarity between 1 and 2 is much less than the similarity of 67 and 68
even through their strict difference in both cases is just 1.
<p></p>
mats_similarity_by_detect_blobs takes all the arguments of
<a href="#" onclick="DocCode.open_doc('Picture.detect_blobs_doc_id', event)">Picture.detect_blob</a>
except that Picture.detect_blobs' <i>mat_in</i> is replaced by
Picture.mats_similarity_by_detect_blob's <i>mat_in1</i> and <i>mat_in2</i>.<br/>
<i>Example:</i><br/>
<pre><code>Picture.mats_similarity_by_detect_blobs(
    {mat_in1: Picture.make_mat(),
     mat_in2: Picture.make_mat()})
     </code></pre> =>
<samp>0.5</samp><br/>
Because we are passing in mats where no blobs are detected, we can't really say much about
their similarity. so <code>0.5</code> is returned.
</details> <!-- ends mats_similarity_by_detect_blobs -->
</details> <!-- Similarity -->
</details> <!-- ends Picture -->


<details class="doc_details"><summary>Sound</summary>

<details id="beep_doc_id" class="doc_details"><summary>beep</summary>
Plays an electronic sound.<br/>
<i>Parameters</i>:<br/>
<b>dur</b> The duration in number seconds to beep. Default: 0.5<br/>
<b>frequency</b> A number in Hertz. Default: 400<br/>
<b>volume</b> A number between zero and 1. Default: 1<br/>
<b>waveform</b> The timbre or waverform of the sound. Default: "triangle".
    Other options are: "sine", "square", "sawtooth".<br/>
<b>callback</b> A function of no arguments that is called when the beep finishes playing.
               Default: null, meaning do nothing.<br/>
<i>Examples</i>:<br/>
    <code> beep() </code>
<pre><code>
beep({dur: 0.125,
      frequency: 440,
      volume: 1,
      waveform: "triangle",
      callback: function(){beep({dur: 0.125, frequency: 493.88})}
     })    </code></pre>
</details>

<details id="beeps_doc_id" class="doc_details"><summary>beeps</summary>
Beeps the indicated number of times with the default <code>beep</code> settings.<br/>
<i>Parameters</i>:<br/>
    <b>times</b> An integer indicated the number of times to beep. Default: 1.<br/>
    <b>callback</b> A function of no arguments that is called when beeps finishes playing.
    Default: null, meaning do nothing.<br/>
    <i>Example</i>: <pre><code>beeps(2,
      function(){
        speak({speak_data: "Second Floor, home robots"})
      })
</code></pre>
</details>

<details id="music_with_midi_doc_id" class="doc_details"><summary>Music with MIDI</summary>
DDE facilitates using MIDI to play and receive MIDI notes.
There are higher level "phrase processors" that make creating scores
relatively easy. <a href="#" onclick="DocCode.open_doc(music_article_doc_id, event)">
The Language of Music</a> describes DDE's approach to music in broad themes.<br/>
For a video presentation of many of these ideas, watch
<a href="https://drive.google.com/open?id=0B6PCkmO9RJLJU2VUVkhReGd6RjA">Making Music</a>
     target="blank">Making Music</a>
<p></p>
The fundamental class is Note, that represents a musical note, including
its duration (and, effectively, its ending time).
Phrase is a class who's instances hold sequences of Note instances.
Notes and Phrases share nearly the same instances variables and methods.
<p></p>
In order to play notes, we need to interface to MIDI.
<details id="MIDI_doc_id" class="doc_details"><summary>MIDI</summary>
MIDI is an acroymn for Musical Instrument Digital Interface.
Its a decades old standard for how to control sounds using
electronics, that has been applied to lighting and other
remote control situations.
<p></p>
DDE uses the <a href="https://github.com/cotejp/webmidi" target="_blank">WebMidi</a> Javascript library to connect
DDE and MIDI. DDE layers software on top of WebMidi to form higher level
msuic data structures and methods including integrating them into Jobs
for making things. One of the things you can make in DDE is music.
<p></p>
DDE can be used to both create MIDI events and receive them.
To hear a MIDI note that DDE creates, you must connect a synthesizer to
the computer running DDE. Numerous hardware synthesizers are avaiable
starting at about $100. You can also use free or commercial "software synthesizers".
</details>
<details  class="doc_details"><summary>Synthesizers</summary>
One such software synthesizer is in Apple's GarageBand,
which is now free for Mac and Windows.
On modern Macs, in your Applications folder
you should see GarageBand.app which comes comes with the OS.
Double click on it. This will cause its full contents
to download. I takes 15 minutes or so because GarageBand uses
mmany digitally recorded instruments to create natural sounds.
(Other synthesizers uses alorithms to create sounds which are typcally
much smaller, have lots of "variations" but none of them sound
like acoustic instruments.)
Once GarageBand downloading complete, launch it by double clicking the file,
if it isn' already up.
<p></p>
On WindowsOS, see https://garagebandforwindowspc.org/ for the more
complex installation on Windows.
Another approach to getting good-sounding synthesized sounds on Windows is
<a target="_blank" href="http://coolsoft.altervista.org/en/virtualmidisynth">
VirtualMIDISynth</a> with some sampled instrument
"sound fonts" such as
<a target="_blank" href="http://www.synthfont.com/soundfonts.html">FluidR3 GM Bank</a>
<p></p>
With GB launched, double click on "Keyboard Collection".
You can leave the default instrument, or
select another one from the left side of GB.
Then choose GB menu bar/Window/Show Keyboard.  The image of a piano
keyboard should appear. Click on any note. If you don't hear
a sound, verify that the unlabeled
horizontal slider in the upper right of GB is slid to the right for
a non-zreo volume.
(Note Apple has followed its standard user interface guidelines
here, spending effort to make the slider look pretty
but difficult to figure out what it actually means.)
Also check that the volume control on your computer is up.
<p></p>
<b id="Midi.init_doc_id">Midi.init</b> initializes Midi.
This is automatically done when you attempt to play a note
and Midi has not been inited, but there will be a slight delay in that case.<br/>
<i>Example:</i><br/>
<code title="not in TestSuite">Midi.init()</code><br/>

If Midi has previously been inited, this calls <code>Midi.all_notes_off</code>.
This can also be called by choosing Insert menu/Sound/Midi.init().<br/>
<i>Parameters:</i> None.
<p></p>
<b id="Midi.all_notes_off_doc_id">Midi.all_notes_off</b> Turns off
all curently on notes on all channels. Does not work when using
GarageBand for a synthesizer.<br/>
<i>Parameters:</i> None.
<p></p>
<b id="Midi.describe_midi_event_doc_id">Midi.describe_midi_event</b>
used as a diagnostic function to print out the properties of
a MIDI event.
<i>Example:</i>
<code title="not in TestSuite">WebMidi.inputs[1].addListener('noteon',  "all", Midi.describe_midi_event)</code>
<p></p>

In DDE, Eval <code title="not in TestSuite">Midi.init()</code>.<br/>
Now eval <code title="not in TestSuite">new Note("C").start()</code><br/>
OR select <code>new Note("C")</code><br/>
and click <button>Eval&Start</button><br/>
Often the first note or two will get lost so do it a few times
and you should hear Middle C played on the instrument you have
selected in GarageBand. <br/>
<code>Midi.init</code> can also be called by choosing
Insert menu/Sound/Midi.init().
<p></p>
If you don't hear a sound, check the MIDI connections in
GarageBand: menu bar/GarageBand/Preferences.<br/>
Select "Audio/Midi"<br/>
In the bottom of the dialog you should see
"Midi Status: X MIDI inputs detected."<br/>
(if X == 0, try clicking the "Reset Midi Drivers" button.)
</details>

<details class="doc_details"><summary>Connecting MIDI Apps</summary>
DDE and GarageBand (or another synthesizer) are both MIDI Apps.
To have DDE send a MIDI event to a synthesizer, you have to
connect those apps via the operating system using a
"Virtual Port".
This is tricky.
<span style="color:red">Beware, the details change from one OS version to another.</span>
<p></p>
<b>On Mac OS</b> <i>in Sierra (10.12)</i><br/>
<ol><li>Launch Applications/Utilities/Audio Midi Setup.app</li>
    <li>Choose menubar/Window/Show Midi Studio.</li>
    <li>In the dialog box that comes up, double click "IAC Driver".</li>
    <li>In the new dialog box that comes up, click on the port "Bus 1" to select it.</li>
    <li>Above that, check "Device is online".</li>
    <li>Click the "Apply" button.</li>
</ol>
<b>On Windows OS</b><br/>
    One of our most savvy tech users advises:
    <ol>
        <li>Install <a target="_blank" href="http://coolsoft.altervista.org/en/virtualmidisynth#soundfonts">VirtualMIDISynth</a></li></li>
        <li>From <a target="_blank" ref="http://www.synthfont.com/soundfonts.html">synthfont</a>
                 download and extract "FluidR3 GM Bank"</li>
        <li>In VirtualMIDISynth, import the "FuidR3 GM Bank" sound fonts.</li>
        <li>Restart DDE land oad a MIDI example code and eval it.</li>
    </ol>
    <a target="_blank" href="http://www.tobias-erichsen.de/software/loopmidi.html">LoopMIDI</a>
    also looks promising.
</details>


<details class="doc_details"><summary>Note</summary>
Note is the fundamental class for creating music. It contains
a number of instance variables to hold the properties of a note,
and a bunch of methods to manipulate Notes.
    <details class="doc_details"><summary>Note's Instance Variables</summary>
        <ul><li><b>time</b> A number. The starting time of the note. This is in beats.
             <i>time</i> defaults to <code>0</code>. seconds_per_beat defaults to
             1, but is usually supplied by the Phrase that contains the note.
             If the Note isn't being played from a phrase, the default seconds_per_beat of 1 will
             be used.
        </li>
        <li><b>dur</b> A positive number indicating note duration. The amount of time from <i>time</i> that the note ends,
             in beats
        </li>
        <li><b>pitch</b> Default <code>60</code>. An integer between 0 and 127.
             This determines the frequency of the note. 60 is Middle C, 72 is the C an octave higher.
             <p></p>
             When you are creating notes, you can use the more friendly notation of "C" for
             Middle C, "C5" for C an octave higher, "C#" for C sharp, "Db" for D flat, etc.<br/>
             "R" is used to mean "rest", useful when you're making a sequnce of
             notes in a phrase.
             Beware: Sometimes MIDIcians use the term "note" to mean pitch.
             Beware: Middle C can be refered to as "C4" (as is a somewhat
             standard practice in music) but it produces
             the MIDI pitch of 60. It would have been more logical to have
             "C4" map to 48 since that's 4 times 12 (the number of pitches in an octave).
             MIDI's designers were not logical.
        </li>
        <li><b>velocity</b> Default <code>0.5</code>. MIDI's misspelling for "volume".
            The term comes from
            the harder you hit a piano key, the faster it goes, making a louder sound.
            A number between 0 and 1. This results in an actual MIDI velocity
            of an integer between 0 and 127. WebMidi wisely chose to make this
            a float between 0 and 1 by default (which DDE follows)
            as volumes are often multiplied
            to increase or decrease them. 0 to 1 is more convenient for that.
        </li>
        <li><b>channel</b> Default 1. An integer between 1 and 16 inclusive,
            determining the MIDI channel of the note. Think of this as the instrument
            to play the note on, though beware. Channel can be remapped by syntheizer software
            to play different instruments.
        </li>
        </ul>
    </details> <!-- end Note Instance Vars -->
    <details class="doc_details">
      <summary>Making Notes with <code title="unEVALable">new</code></summary>
      DDE provides 2 different ways to make notes. The hard, comprehensive way
      is to use JS literal object notation:
      <pre><code>new Note({time:     0,
          dur: 1,
          pitch:    60,
          velocity: 0.5,
          channel:  1})
      </code></pre>
      The above values are the defaults. Leave a property out and you
      get its default value.
      <p></p>
      The easy way is to use a string with
      <ol><li>the (optional) duration first (default 1),
            <li>followed by the pitch class (C, D, E, F, G, A, B)</li>
            <li>that may include a trailing accidental (# or b)</li>
            <li>and ending with an optional octave integer (-2 to 8 inclusive)
            The "C"s in each octave are:
            Octave -2 is MIDI pitch 0,<br/> -1 is 0,<br/>
            0 is 12,<br/> 1 is 24,<br/>  2 is 36,<br/>
            3 is 48,<br/> 4 is 60 (Middle C),<br/>
             5 is 71,<br/> 6 is 84,<br/> 7 is 96,<br/> 8 is 108<br/>
             9 is 120.
           </li>
      </ol>
            <i>Examples:</i><br/>
            <code>"C"</code> and <code>"1C4"</code>
            are both a one beat long Middle C.<br/>
        <code>"0.5C#5"</code> is an eighth note C sharp an octave and a half-step above Middle C.<br/>
        <code>"0.5Db5"</code> is the same.<br/>
            For creating an actual note the easy way use:<br/>
            <code>new Note("0.5C#5")</code><br/>
            This is equivalent to the hard way:
             <pre><code>new Note({dur: 0.5, pitch: 73})</code></pre>
            or you can use the string technique for pitch:
            <pre><code>new Note({dur: 0.5, pitch: "C#5"})</code></pre>
      You may place a Note directly on the do_list of a Job.
      When that "instruction" is run, it will call the Note's start method
      to play it, and delay running the next instruction until the note is done.
    </details>

    <details class="doc_details"><summary>Note Methods</summary>
        <details id="Note.start_doc_id" class="doc_details"><summary>start</summary>
            Plays the note.
            You can also play a Note by selecting it and clicking <button>Eval&Start</button><br/>
            <i>Parameter:</i><br/>
            <b>seconds_per_beat</b> Default = 1.<br/>
            <i>Example:</i> <code title="not in TestSuite"> new Note("C").start()</code><br/>
        </details>

        <details id="Note.arpeggio_doc_id" class="doc_details"><summary>arpeggio</summary>
        An arpeggio is several small, short notes played in rapid succession.
        Often the pitches are those of a chord played from lowest to highest.
        The arpeggio method on a note returns a phrase based in the intervals
        and durations it is passed.<p></p>
        <i>Parameters:</i><br/>
        <b>interval_or_array</b> If this is one number, it represents an interval from the
        incoming pitch to be output. If this is an array, it represents several intervals,
        each of which will be made into a new pitch (and note). Usually this is an array
        since a 1 note arpegio is easier to accomplish in other ways.<br/>
        <b>key</b> Default: <code>"chromatic"</code>. If "chromatic", interpret the
        intervals as half-steps to add to the incoming pitch to form the new pitch(es).
        If this is a pitch class, ie "C", "D#", etc. interpret the intervals as diatonic,
        with 1 meaning the "unison".<br/>
        <b>dur_or_array</b> Default: <code>null</code>
        <ul><li>If this is a number,
        it is the duration of the note(s) produced by this arpeggio.</li>
        <li>If it is an array,
        it is the duration of the notes corresponding to the intervals in interval_or_array,
        which should be an array of the same length.</li>
        <li>If it is null, and there is just an integer for interval_or_array,
        the dur of the output note will be the same as its original dur.
        But if interval_or_array is an array, then the dur of each note
        in the arpeggio will be the original dur divided by the number
        of notes specified in interval_or_array. For instance,
        if the original note has a dur of 0.5 and the
        interval_or_array has 2 intervals and the dur is null.
        each note in the output arpeggio will have a dur of<br/>
        <code>0.5 / 2</code> => <samp>0.25</samp>.
        </li></ul>
        <i>Example:</i><br/>
        <code>new Note("C").arpeggio([1, 3, 5], "C")</code>=><br/>
        <samp>new Phrase("1/3C 1/3E 1/3G")</samp>
        </details>

        <details id="Note.copy_doc_id" class="doc_details"><summary>copy</summary>
           Copies the note. Most note processors copy their note.<br/>
            <i>No Parameters</i><br/>
            <i>Example:</i> <code> new Note("C").copy()</code>
        </details>
        <details id="Note.concat_doc_id" class="doc_details"><summary>concat</summary>
            Concatenates the <code title="unEVALable">this</code>
            note with any number of another supplied note arguments.<br/>
            <i>Example:</i><br/>
            <pre><code>new Note("E").concat(
    new Note("D"),
    new Note("C"))
    </code></pre><br>
         Returns a phrase that's a melody, with the last note starting on beat 2 and
         ending on beat 3.<br/>
         Equivalent to<br/><code>new Phrase("E D C")</code>
        </details>
        <details id="Note.filter_doc_id" class="doc_details"><summary>filter</summary>
            This returns either null or the note passed in as "this".
            If the filter_in arg is true (the default), then
            if this is between min_note and max_note in all
            the properties supplied in min_note and max_note, then
            this is returned. Otherwise null is returned.
            <i>Parameters:</i><br/>
            <b>min_note</b> Default <code>{}</code>. A note or a literal object
            with possible properties of channel, dur, pitch, time, velocity.
            The note will possibly be "filtered in" if the corresponding
            values in this are more than or equal to the values in min_note.
            Pitch may be an integer or a "named" pitch ("C", "D#4", etc.)
            <br/>
            <b>max_note</b> Default <code title="unEVALable">min_note</code>. A note or a literal object
            with possible properties of channel, dur, pitch, time, velocity.
            The note will possibly be "filtered in" if the corresponding
            values in this are less than the values in min_note.
            Pitch may be an integer or a "named" pitch ("C", "D#4", etc.)
            <br/>
            <b>max_is_inclusive</b> Default <code>true</code>. A boolean.
            If the corresponding values of this and max_note are equal,
            then if max_is_inclusive is true, then this is returned.
            Otherwise null is returned.
            <br/>
            <b>filter_in</b> Default: <code>true</code> A boolean.
            If true, the above descriptions of the returned value are correct.
            If false, then return this only when the note is "filtered out" by
            the above. In other words, for two calls to filter,
            if we keep all the parameters the same
            except for filter_in, then one of those two calls will return this,
            and the other will return null.
            <br/>
            <i>Examples:</i><br/>
            <code>new Note("C").filter({pitch: "B2"}, {pitch: "D"})</code> <br/>
            returns the note because "C" is between "B2" and "D".<br/>
            <code>new Note("C").filter({pitch: "D"}, {pitch: "F"})</code> <br/>
            returns null because "C" is not between "D" and "F".<br/>
            <code>new Note("C").filter({pitch: 60, velocity: 0.25}, {pitch: 60, velocity: 0.75})</code><br/>
            returns this because the pitch for this, min_note & max_note is 60 <i>and</i>
            because the velocity of this (0.5) is between 0.25 and 0.75.
            <p></p>
            You may include any combination of the 5 properties of a note.
            You do not have to include the same properties in min_note and max_note.
            Unincluded properties when filter_in is true do not filter-out the note.
            <p></p>
            <b>Rests</b><br/>
            If min_note's pitch is a rest, then max_note's pitch is not considered.
            If this' pitch is also a rest, the note is "filtered in", but
            if this's pitch is not a rest, it is filtered out.
            If this's pitch is a rest and min_note's pitch is not a rest.
            the note is filtered in. (unless of course, filter_in is false,
            in which case it is filtered out).
        </details>
        <details id="Note.merge_doc_id" class="doc_details"><summary>merge</summary>
            Merges the <code title="unEVALable">this</code>
            note with any number of another supplied note arguments.<br/>
            <i>Example:</i>
            <pre><code>new Note("C").merge(
    new Note("E"),
    new Note("G"))
    </code></pre>
            Returns a phrase that's a C major chord, with all notes starting
            on beat 0 and ending on beat 1.<br/>
            Equivalent to<br/> <code>new Phrase("CEG")</code>
        </details>
        <details id="Note.repeat_doc_id" class="doc_details"><summary>repeat</summary>
            Returns a phrase that contains the given number of copies of note with
            times of the previous note's time plus its duration.<br/>
            <i>Parameters:</i><br/>
            <b>repetitions</b> Default: <code>2</code><br/>
            0 means return an empty phrase with no notes.<br/>
            1 means return a phrase with a copy of the note.<br/>
            2 or more means that many notes in the output phrase.
            <p></p>
            You may supply a non-integer. i.e. 1.5 will yield a 2 note phrase
            where the last note is half the duration of the first.
            <p></p>
            <i>Example:</i><br/>
            <code>new Note("C").repeat(2.5)</code> =><br/><samp>new Phrase("C C 1/2C")</samp>
        </details>
        <details id="Note.time_interval_doc_id" class="doc_details"><summary>time_interval</summary>
            Returns a note that fits within the passed in start and end times.
            <p></p>
            <i>Parameters:</i><br/>
            <b>start_time</b> Default: <code>0</code>. Returns a note whose start time
            is more than or equal to this arg's value.<br/>
            <b>end_time</b> Default: the time + dur of this.<br/>
            Returns a note whose time + dur is less than or equal to end_time.
            <p></p>
            <i>Example:</i><br/>
            <code>new Note("C").time_interval(0.25, 0.75)</code>.
            The returned note has a time of 0.25 and a dur of 0.5.
            All its other properties are the same as the input note.
        </details>
        <details id="Note.transpose_doc_id" class="doc_details"><summary>transpose</summary>
        Increments the pitch by an interval or possibly multiple intervals to make
        a chord.<br/>
        <i>Parameters:</i><br/>
        <b>interval_or_array</b> Add this value to the original pitch. Can be negative
        or positive. If an array, create a note for each interval in the array
        and return a phrase. The number (or numbers in the array) are usually
        whole numbers but can be mixed numbers with a 0.5 fractional part.
        These <i>may</i> yeild out-of-key pitches. See below.
        <br/>
            <b>key</b> Default: "chromatic". If "chromatic", treats each interval as
            half_steps and directly adds them to the pitch. If a pitch class
            ("C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",
            or the flat equivlents, ie "Db"),
            considers the intervals to be
            "diatonic". 1 is unison (no change from original pitch). 2 is a 2nd, either
            major or minor to keep the new pitch within the key specified. Same for a
            third, forth, fifth, etc. If the interval ends in .5, ie 3.5, then
            a half-step is added to the whole interval which is, in this case, "3".
            <p></p>
            Observe that "chromatic" is zero based, (as is JavaScript for array indexing),
            whereas the diatonic transpose is
            one based, as is convention music notation.
            Using a diatonic key, any value between -1 and +1 is
            the "unison" interval, ie no change.
            <p></p>
            The result might
            or might not be within the given key depending on the whole number of the interval.
            For instance, in the key of "C", an interval of 3.5 yields an "F', ie the
            same as an interval of 4 and in the given key.
            However 4.5 yields F#, out of the key.
            <i>Examples:</i><br/>
            <code>new Note("D4").transpose(1)</code><br/>=> <samp>new Note("D#4")</samp><br/>
            <code>new Note("D4").transpose(1, "C")</code><br/>=> <samp>new Note("D4")</samp><br/>
            <code>new Note("D4").transpose(2, "C")</code><br/>=> <samp>new Note("E4")</samp><br/>
            <code>new Note("D4").transpose(3, "C")</code><br/>=> <samp>new Note("F4")</samp><br/>
            Using a negative number in the <code>"chromatic"</code> key, just subtracts
            that number from the pitch to transpose it. Using a negative number for
            a diatonic key also "subtracts" it, but is more compelex.
            A negative interval does NOT mean
            a "minor second interval". It means go down 1 "scale degree".
            Thus In the key of "C", starting with a pitch of "C4", if we have -2,
            it transposes "C" to "B3". -3 transposes to "A3".

            <p></p>
            <i>Examples:</i><br/>
            <code>new Note("D4").transpose(0, "C")</code> <br/>=> <samp>new Note("D4")</samp><br/>
            <code>new Note("D4").transpose(-1, "C")</code><br/>=> <samp>new Note("D4")</samp><br/>
            <code>new Note("D4").transpose(-2, "C")</code><br/>=> <samp>new Note("C4")</samp><br/>
            <code>new Note("D4").transpose(-3, "C")</code><br/>=> <samp>new Note("B3")</samp>
            <p></p>
            The discrepancy between one-based and zero-based
            is not just an inconsistency in DDE, its a descrepancy in the English
            designators for items in a list and math. If the first item in a list was
            called "zeroth" instead of "first", that would fix the problem. I suspect
            the concept and term of "first" occured before the concept of zero. Such "off by one"
            issues account for an astoundingly high percentage of bugs in programs, so
            be on the lookout for them.<br/>
            <code>new Note("D4").transpose([1, 3, 5], "C")</code><br/>
            => <samp>new Phrase("D4F4A4")</samp><br/>
            <i>A D minor triad (chord), all of whose pitches are in the designated key of C.</i>
            <p></p>
            Diatonic intervals are normally whole numbers. When they are, transposing
            an in-key pitch using an integer interval will yeild another in-key pitch.
            However, you can also use intervals such as 1.5, 2.5, etc.
            These use the whole number to transpose as above, then add a half step to
            the resulting pitch. That might or might not end up with an in-key pitch
            depending on the original pitch.
            <p></p>
            Negative mixed-number intervals such as -1.5 and -2.5 are also allowed.
            These use the integer component to find a new pitch then decrease the pitch
            by a half-step to complete the transpose.<br/>
            <i>Example:</i> transposing "C" in the key of "C" by 1.5 yields "C#".
            The 1 is used for "unison" transpose, i.e. no change, and the 0.5 is
            used to go one half step more, giving us an out-of-key pitch.<br/>
            <i>Examples:</i><br/>
            <code>new Note("C").transpose([1, 3, 5, 7], "C")</code><br/>
            => <samp>new Phrase("CEGB")</samp> i.e. a C Major 7 chord.<br/>
            <code>new Note("C").transpose([1, 2.5, 5, 6.5], "C")</code><br/>
            => <samp>new Phrase("CEbGBb")</samp> i.e. a C Minor 7 chord.<br/>


        </details>
        <details id="Note.set_property_doc_id" class="doc_details"><summary>set_property</summary>
            Returns a copy of "this" except with one of its properties
            set to a new value.<br/>
            <i>Parameters:</i><br/>
         <b>prop_name</b> The property within the Note to set. One of:
          "time", "dur", "pitch", "velocity", "channel".
          An extra "virtual" prop_name of "octave" may also be used.
          <br/>
        <b>new_value</b> The new value to give the designated prop-name.
         A number unless prop_name is "pitch", in which case new_value
         may also be a pitch name, i.e. "C#4"<br/>
        <b>min</b> Default -2. (-2 is the lowest possible octave and thus the lowest likely
           valid new_value.) If new_value is less than min,
           then prop_name will be set to min.<br/>
           Does not apply to prop_name of "time".<br/>
            Usually a number but if prop_name is "pitch", new_value
            may also be a pitch name, i.e. "C#4".<br/>
            If min is null, no minimum is enforced.<br/>
        <b>max</b> Default 128. A number. If new_val is more than max,
           then prop_name will be set to max.
           Usually a number but if prop_name is "pitch",  new_value
            may also be a pitch name, i.e. "C#4".<br/>
            If max is null, no maximum is enforced.<br/>
            <i>Examples:</i><br/>
            <code>new Note("C").set_property("pitch", 61)</code><br/>=>
            <samp>new Note("C#4")</samp><br/>
            <code>new Note("C").set_property("pitch", "B2")</code><br/>=>
            <samp>new Note("B2")</samp>

        </details>
        <details id="Note.increment_property_doc_id" class="doc_details"><summary>increment_property</summary>
        Similar to set_property with
        the 2nd argument being the amount to <i>increase</i> the given
        prop_name's value by. The increment number may be negative.
        </details>
        <details id="Note.multiply_property_doc_id" class="doc_details"><summary>multiply_property</summary>
            Similar to set_property with
            the 2nd argument being the amount to <i>multiply</i> the given
            prop_name's value by. The multiplication factor may be negative.
        </details>

        </details> <!-- end Note Methods -->

</details> <!-- end Note -->

<details class="doc_details"><summary>Phrase</summary>
    <details class="doc_details"><summary>Phrase's Instance Variables</summary>
        <ul><li><b>notes</b> An array of instances of Note. May be empty.</li>
            <li><b>time</b> A number. The starting time of the note. This is in beats.
            <i>time</i> defaults to <code>0</code>. The start time in beats of the
            first note when using a string argument to <code>new Phrase()</code>.
            </li>
            <li><b>dur</b> A positive number indicating the phrase duration. The amount of time from <i>0</i> that the phrase ends,
                in beats. Defaults to the ending tome of the last note in the phrase or 0 if no
                notes in the phrase. dur repressents the "logical duration of the phrase from time 0 to the end of the phrase.
                This is often <i>not</i> the duration from the start time of the first note to the
                end time of the last note. For instance a phrase might have some negative time "pick-up" notes,
                and have the last note end before or after the logical end. dur is used for concat in
                knowing when the start time of the 2nd through nth phrases will be.
                Thus phrase durs are often 4 or 8 beats even though the actual duration of the
                notes in the phrase are longer or shorter.
            </li>
            <li><b>velocity</b> Default <code>0.5</code>.
                The initial velocity of all the notes in the phrase.
                Velocity is MIDI's misspelling for "volume". (Tech-musicians often fail English class.)
                The term comes from
                the harder you hit a piano key, the faster it goes, making a louder sound.
                A number between 0 and 1. This results in an actual MIDI velocity
                of an integer between 0 and 127. WebMidi wisely chose to make this
                a float between 0 and 1 by default (which DDE follows)
                as volumes are often multiplied
                to increase or decrease them. 0 to 1 is more convenient for that.
            </li>
            <li><b>channel</b> Default <code>1</code>. An integer between 1 and 16 inclusive,
                determining the MIDI channel of the note. Think of this as the instrument
                to play the note on, though beware. Channel can be remapped by syntheizer software
                to play different instruments.
            </li>
        </ul>
    </details> <!-- end Phrase's Instance Vars -->
    <details class="doc_details">
        <summary>Making Phrases with <code title="unEVALable">new</code></summary>
        DDE provides 2 different ways to make a phrase. The hard, comprehensive way
        is to use JS literal object notation to create each note for the notes instance
        variable like so:
        <pre><code>
new Phrase({notes: [new Note({time: 0, dur: 1, pitch: 60, velocity: 0.25, channel:  1}),
                    new Note({time: 3, dur: 1, pitch: 61, velocity: 0.75, channel:  2})
            ]})
      </code></pre>
        This gives us lots of flexibility. Notice that the 2nd note starts a whole beat after
        the first note ends. This flexibility, explicitness and ease of programming
        comes at the cost of verbosity. We can use a concise language to
        describe all but the channel and velocity attributes with:<br/>
        <code>new Phrase("C R C#")</code><br/> The R stands for "rest" giving us a
        start time for the 2nd note of 3 (beats).
        <p></p>
        The easier way uses strings with notes that are separated from other notes by a space.
        See the documentation on making Notes for details.
        <p></p>
        <i>Parameters:</i><br/>
        <b>time</b> Default <code>0</code>. A number. time in beats that the first note will have
            when the "notes" parameter is a string.<br/>
        <b>seconds_per_beat</b> Default: <code>1</code>. A non-negative number. The duration in seconds of a beat.
         The default corrsponds to 60 beats per minute. A typical value for modern music is
         <code>0.5</code><br/>
         <b>dur</b> Default: <code>null</code> meaning the ending time of the last note in the phrase.
         dur representes the "logical duration of the phrase from time 0 to the end of the phrase.
         This is often <i>not</i> the duration from the start time of the first note to the
         end time of the last note. For instance a phrase might have some negative time "pick-up" notes,
         and have the last note end before or after the logical end. dur is used for concat in
         knowing when the start time of the 2nd through nth phrases will be.
         Thus phrase durs are often 4 or 8 beats even though the actual duration of the
         notes in the phrase are longer or shorter.<br/>
        <b>velocity</b> Default: 0.5. A number from  though 1 inclusive indicating the default volume
           or loudness of the notes in a phrase when they aren't each given an explicit velocity.<br/>
           <i>Example:</i><br/>
            <code>new Phrase({velocity: 0.25, notes:"C D"})</code><br/>
            Both notes will have a velocity of 0.25, a low volume.<br/>
        <br/>
        <code>new Phrase({channel: 3, notes:"C D"})</code><br/>
        Both notes will have a channel of 3.<br/>
         <b>channel</b> Default: 1. An integer from 1 though 16 inclusive.<br/>
           <code>new Phrase({channel: 3, notes:"C D"})</code><br/>
           Both notes will have a channel of 3.
        <p></p>
        <i>Examples:</i><br/>
        <code>new Phrase("C E G")</code> A three note melody.<br/>
        <code>new Phrase("CEG")</code> A three note chord (C Major triad).<br/>
        <code>new Phrase({seconds_per_beat: 0.5, notes:"C E G"})</code><br/>
         A faster three note melody.
         <p></p>
        <code>new Phrase("C R G")</code><br/> A 2 note melody with a rest in the middle.
        Rests can have a duration ie "0.5R" but not an accidental or octave.
        <p></p>
        <pre><code>new Phrase({
     seconds_per_beat: 0.5,
      channel: 2,
      notes: &#96;CEG CEG 0.5R 0.5FAC5 FAC5
              GBD5 GBD5 0.5R 0.5FAC5 FAC5
              0.5CEG 0.5CEG CEG 0.5R 0.5FAC5
              0.5R 0.6FAC5 GBD5 0.125R GBD5
              2/3R 2/3F 2/3FA
              2/3FAC5 2/3FAC5E5 2/3FACE5G5 8CEGBD5&#96;
            })
            </code></pre>
            A standard 3-chord rock and roll chord progression.
        <p></p>
        You may place a Phrase directly on the do_list of a Job.
        When that "instruction" is run, it will call the Phrase's start method
        to play it, and delay running the next instruction until the Phrase is done.
    </details>

    <details class="doc_details"><summary>Phrase Methods</summary>
    All of these phrase processors return a phrase.
    None of them modify the subject phrase but rather make a copy.
    <details id="Phrase.start_doc_id" class="doc_details"><summary>start</summary>
    Plays the phrase. Will call Midi.init() if Midi has yet to be enabled.
    Returns the input phrase as is.
    You can also play a phrase by selecting it's soruce code and clicking <button>Eval&Start</button>
    </details>

    <details id="Phrase.arpeggio_doc_id" class="doc_details"><summary>arpeggio</summary>
    Very similar to <a href="#" onclick="DocCode.open_doc('Note.arpeggio_doc_id', event)">Note.arpeggio</a>
    Takes the same parameters and returns a phrase of arpeggios, one for
    each note in the "this" phrase.
    </details>

    <details id="Phrase.copy_doc_id" class="doc_details"><summary>copy</summary>
    Returns a copy of the input Phrase. Most Phrase methods return a new phrase.
    </details>

    <details id="Phrase.concat_doc_id" class="doc_details"><summary>concat</summary>
    Takes any number of Phrases as arguments and
    concatenates them together with the subject. Each Phrase's "dur" is used
    to deterime the starting time of the next phrase. Use concat for
    making long phrases.
    </details>

    <details id="Phrase.filter_doc_id" class="doc_details"><summary>filter</summary>
        Employs <a href="#" onclick="DocCode.open_doc('Note.filter_doc_id', event)">Note.filter</a>
        to filter in or out notes.
        Takes the same parameters as Note.filter.
    </details>

    <details id="Phrase.merge_doc_id" class="doc_details"><summary>merge</summary>
    akes any number of Phrases as arguments and merges them together.
    The notes in the new returned phrase will have their same start times as
    their input start times. The resultant Phrase will have a dur that is the
    maximum of all the input phrases. Use merge for layering the parts of a piece
    together.
    </details>

    <details id="Phrase.pattern_doc_id" class="doc_details"><summary>pattern</summary>
    Pattern creates a phrase based on a pattern of other notes or phrases.
    Pattern is perhaps the highest level phrase processor. It exists only as a
    method on Phrases, not notes. It is also a <i>static</i> method in that it is
    called with a subject of the <code>Phrase</code> class itself, not an instance.<br/>
    <i>Parameters:</i><br/>
    <b>pattern_array</b> Required. An array of non-negative integers that are less than
    the length of the phrase_library array. Each element refers to the phrase at that
    index in the phrase_library. The length of the pattern_array is the number of
    phrases to be used from the phrase_library. A given phrase in the phrase library
    maybe used zero or more times.<br/>
    <i>Example:</i><br/>
    <code>[0, 0, 1, 0]</code><br/>
    Here we are playing the first phrase in the phrase library, followed by playing
    that same phrase again, then the 2nd phrase in the phrase library and concluding
    with the first phrase. This implements the common pattern in poopular music of "AABA".<br/>
    <b>phrase_library</b> Required. An array of Notes and Phrases of possibilities to use
    in the output phrase. Each may be used zero or more times.<br/>
    <b>merge</b> Default: <code>false</code>. A boolean. If false,
    concat the phrases together in the returned phrase. If true, merge the phrases
    together. Using merge is unusual but an intriguing possibility of "layering"
    phrases on top of each other and having the pattern be a simultaneous one rather
    than a sequential one.
    <p></p>
    <i>Examples:</i>
    <pre><code>Phrase.pattern([0, 0, 1, 0],
           [new Phrase("C D"),
            new Phrase("E F")])
    </code></pre> =>
        <samp>new Phrase("C D C D E F C D")</samp><br/>
    Since both phrases in the library have 2 notes, think of the output as
    4 pairs of notes, where a pair is either "C D" or "E F".
    <p/>
    We can get the same output by inverting our pattern and reversing
    the phrases in our library like so:<br/>
    <pre><code>Phrase.pattern([1, 1, 0, 1],
       [new Phrase("E F"),
        new Phrase("C D")])
    </code></pre> =>
    <samp>new Phrase("C D C D E F C D")</samp>
    <p></p>
    There's no restriction that library items be the same length
    or even the same type as each other.
    <p></p>
    Here's a pattern using a Note and a Phrase in its library.
    <pre><code>Phrase.pattern([0, 1, 0],
        [new Note("C"),
         new Phrase("E F")])
    </code></pre>
     =>   <samp>new Phrase("C E F C")</samp>
     <p></p>
     Mixing and matching pattern_arrays and phrase_libraries is an important way to consider
     compositional choices in making music. By using JavaScript to automatically
     generate patterns (or even the phrases in a library), an enormous range
     of possibilities are available.
    </details>

    <details id="Phrase.repeat_doc_id" class="doc_details"><summary>repeat</summary>
    Concatenates the given number of phrases into one long phrase and returns it.<br/>
    <i>Parameters:</i><br/>
    <b>repetitions</b> Default: <code>2</code>. Can be fractional like 1.5
    to create a phrase that's 1.5 times as long as the first phrase.
    The last half of the 2nd repetition will be missing in the output.<br/>
    <i>Example:</i><br/>
        <code>new Phrase("C D").repeat(2.25)</code> =><br/>
        <samp>new Phrase("C D C D 1/2C")</samp>
    </details>

    <details id="Phrase.time_interval_doc_id" class="doc_details"><summary>time_interval</summary>
        Employs <a href="#" onclick="DocCode.open_doc('Note.time_interval_doc_id', event)">Note.time_interval</a>
        to filter in or out notes.
        Takes the same parameters as Note.time_interval.
        <p></p>
        It is different than filter in that it only deals with times and durs.
        time_interval will modify the time
        of notes that overlap start_time to start at the start time.
        It also changes the dur of any notes that overlap end_time such
        that they will end at end_time.
    </details>

    <details id="Phrase.transpose_doc_id" class="doc_details"><summary>transpose</summary>
    Increments the pitch of all the notes in the input Phrase.<br/>
    <i>Parameters:</i><br/>
        <b>interval_or_array</b> Add this value to the original pitch. Can be negative
        or positive.<br/>
        <code>new Phrase("C D").transpose(1)</code><br/>=>
        <samp>new Phrase("C# D#")</samp>
         If an array, create a note for each interval in the array
        and include them all in the output phrase. This is quite useful for
        turning a base line into a chord progression.<br/>
        <code>new Phrase("C D").transpose([0, 4, 7])</code><br/>=>
        <samp>new Phrase("CEG DF#A")</samp>
        <br/>
        <b>key</b> Default: "chromatic". If "chromatic", increment the pitch of each
        note by the interval_or_array. Otherwise see
        <a href="#" onclick="DocCode.open_doc('Note.transpose_doc_id', event)">Note.transpose</a>
        for incrementing pitch by a diatonic interval.
    </details>

    <details id="Phrase.set_property_doc_id" class="doc_details"><summary>set_property</summary>
        Returns a copy of "this" except that eacn note in
        the phrase will have one of its properties set to a new value.<br/>
        <i>Parameters:</i><br/>
        <b>prop_name</b> The property within the Notes to set. One of:
        "time", "dur", "pitch", "velocity", "channel".
        An extra "virtual" prop_name of "octave" may also be used.
        <br/>
        <b>new_value</b> The new value to give the designated prop-name.
        A number, unless prop_name is "pitch", in which case new_value
        may also be a pitch name, i.e. "C#4"<br/>
        <b>min</b> Default -2. (-2 is the lowest possible octave and thus the lowest likely
        valid new_value.) If new_value is less than min,
        then prop_name will be set to min.<br/>
        Does not apply to prop_name of "time".<br/>
        Usually a number but if prop_name is "pitch", new_value
        may also be a pitch name, i.e. "C#4".<br/>
        If min is null, no minimum is enforced.<br/>
        <b>max</b> Default 128. A number. If new_val is more than max,
        then prop_name will be set to max.
        Usually a number but if prop_name is "pitch",  new_value
        may also be a pitch name, i.e. "C#4".<br/>
        If max is null, no maximum is enforced.<br/>
        <i>Examples:</i><br/>
        <code>new Phrase("C D").set_property("pitch", 63)</code><br/>=>
        <samp>new Phrase("C#4 C#4")</samp><br/>
        </details>

        <details id="Phrase.increment_property_doc_id" class="doc_details"><summary>increment_property</summary>
        Similar to set_property with
        the 2nd argument being the amount to <i>increase</i> the given
        prop_name's value by. The increment number may be negative.<br/>
        <code>new Phrase("C D").increment_property("pitch", 1)</code><br/>=>
        <samp>new Phrase("C#4 D#4")</samp><br/>
        Note that incrementing pitch is a transpose, but we can increment
        any other note property.
        </details>

        <details id="Phrase.multiply_property_doc_id" class="doc_details"><summary>multiply_property</summary>
          Similar to set_property with
        the 2nd argument being the amount to <i>multiply</i> the given
        prop_name's value by. The multiplication factor may be negative.
        <code>new Phrase("C D").multiply_property("velocity", 2)</code>
        Since the default velocity is 0.5, the returned phrase
        will have all of its note at a velocity of 1 (the maximum).
      </details>
      For more extended examples of using Phrases see Insert menu/Examples/Music.
      </details> <!-- end of Phrase methods -->

</details> <!-- end Phrase -->
    <details class="doc_details"><summary>Listening for MIDI input</summary>
        Even though GB has a soft keyboard, it can't send out Midi.
        You can download <a href="http://vmpk.sourceforge.net/" target="_blank">VMPK software</a>
        for a virtual midi controller,
        for Mac/Windows/Linux. It has no synthesizers in it.
        <p></p>
        In the VMPK menu bar, choose "MIDI Connections".<br/>
        For "MIDI OUT Driver", choose "CoreMIDI".<br/>
        For "Output MIDI Connection" Choose "IAC Driver Bus 1"
        (the default on the Mac, it will be something else on Windows.)<br/>
        Click the OK button.<br/>
        Choose VMPK menu bar/Tools/Note Input/Computer Keyboard,<br/>
        and also in the same sub menu, "Mouse".<br/>
        Now click on the keyboard or hit a key (like "q")<br/>
        and you should see "Got Midi event..." in DDE.
        You should also hear the note played in GarageBand or any synthezier you have
        that listens to the appropriate MIDI channel.
        <p></p>
        VMPK has a nice feature for labeling the keys on its
        piano keyboard: Choose menu bar/View/Note names.
        <p></p>
        You can call a method when a particular kind of Midi event occurs.<br/>
        <i>Example:</i><br/>
        <code title="not in TestSuite">WebMidi.inputs[1].addListener('noteon',  "all", Midi.describe_midi_event)</code><br/>
        Above we are adding a listener on input 1.<br/>
        If you configured GarageBand as mentioned above, it will be on input[0], so
        input[1] will get you the VMPK keyboard.
        This listener is listening for Midi events of<br/>
        type "noteon". ("noteoff" is another choice here.)<br/>
        We are listening on "all" channels, but you can use an integer from 1 to 16 here to
        narrow this down to a particular channel.<br/>
        The last argument is a callback function.<br/>
        <code>Midi.describe_midi_event</code> is a DDE utility function that
        prints out important properties of the event that is passed as the one argument
        to the callback.<br/> Eval <code>Midi.describe_midi_event</code> to inspect
        its source code, which will show you how to
        access pitch, channel, velocity and other properties from the passed in event.

    </details> <!-- end Listening -->
</details> <!-- end Music with MIDI -->

<!--Doesn't work. Needs support from Google.
<details id="recognize_speech_doc_id" class="doc_details"><summary>recognize_speech</summary>
    Speech recognition has a long history in AI.
    It hasn't been taken advantage of where ever possible because:
    <ul><li>The accuracy of recognition has been poor.</li>
        <li>The API for calling the functionality has been poor.</li>
        <li>The user interface has been poor</li>
    </ul>
    DDE goes a long ways towards solving these problems.
    <ul><li>DDE uses Google's speech recognition. Although it isn't perfect,
           its much better than past systems and improving.</li>
        <li>DDE hides Google's API behind a much easier to call function and
            an comparitively easy to use do_list instruction, named
            Human.recognize_speech</li>
        <li>DDE's dialog box provides clear help to users with an option to
            type in text should recognition (or your network connnetion) fail.
            We also have a mechanism to correct recognition mistakes. (ie "for" vs "four").</li>
    </ul>
    Don't expect recognition to be as reliable as a human. Google's speech
    recognition sends digital audio over the net to be recognized on Google's servers.
    If you don't have: 
    <ul><li>a good microphone in your computer,</li>
        <li>a quiet room,</li>
        <li>a reliable net connection or</li>
        <li>a fast net connection</li>
    </ul>
        don't use recognize_speech.
        However, because of the type-in capability, programs written to take
        advantage of speech recognition in poor conditions can still
        be servicable via typing in instead of talking.
    <b><i>Be sure to crank up the volume of your mic.</i></b>
    <p></p>
    Recognized text comes with a <b>confidence</b> number indicating
    how good the recognizer <i>thinks</i> the text is at matching what you've said.
    In theory its nice to have this confidence number but in practice, it might
    not matter much. The number varies from 0 (unconfident) to 100 (very unconfident)
    though these numbers themselves might not be so, ahem, confident.
    Also in the middle of a session, you may well see network bugs even though
    it seems like your network is fine to you. 
    <p></p>
    If you are using speech to dictate
    a critical process, we recommend displaying or saying (via the <code>speak</code> function)
    the recognized text and asking the user for a simple <i>yes</i> or <i>no</i> confirmation.
    <p></p>
    When <b>recognize_speech</b> is called, it pops up a dialog telling you to speak. 
    The arguments to recognize_speech configure this dialog and the callbacks that receive the
    recognized text and confidence numbers. All of these are keyword arguments with defaults. See
    <button>Insert&#9660;</button> menu, <b>sound/recognize_speech</b> for an example call.
    <ul><li><b>title</b> Default: "Recognize Speech". Shows in the title bar of the dialog.
        </li>
        <li><b>prompt</b> Default: "". Displays instructions for the user at the top of the dialog.
            Can be any HTML.
        </li>
        <li><b>only_once</b> Default <code>true</code>. When <code>true</code>, the dialog is automatically closed at the end of the first phrase.
                                  When <code>false</code>, the dialog re-initializes after you pause and permits another phrase to be recognized.
                                  Say <i>finish</i> to close the dialog. 
        </li>
        <li><b>click_to_talk</b> Default <code>true</code>. When <code>true</code>, the user
             must click <button>click to talk</button> to start the recognition. 
             When <code>false</code>, recognition starts as soon as the dialog is shown,
             or as soon as it has recognized the previous phrase (when <code title="unEVALable code fragment"> only_once=false</code>).
             </li>
        <li><b>width</b> Default: <code>400</code>. The distance from the left edge of the dialog to the right edge in pixels.
        </li>
        <li><b>height</b> Default: <code>180</code>. The distance from the top edge of the dialog to the bottom in pixels.
             If you have multiple lines for the prompt, this should be increased. 
        </li>
        <li><b>x</b> Default: <code>400</code>. The distance from the left edge of the DDE window to the left edge of the dialog in pixels.
        </li>
        <li><b>y</b> Default: <code>200</code>. The distance from the top edge of the DDE window to the top of the dialog in pixels.
        </li>
        <li><b>background_color</b> Default: <code>"rgb(238, 238, 238)"</code> i.e. light gray. Can be one of the names (strings) in the color series.
        </li>
        <li><b>phrase_callback</b> Default <code>recognize_speech_default_phrase_callback</code>.
             This function is called when the user pauses after speaking. 
             It is passed the recognized text, and the confidence number (0 to 1).
             If only_once=true, only this callback is called.
             The default prints these two arguments into the Output pane.
         </li>
        <li><b>finish_callback</b> Default <code>null</code> meaning no action.
             This function is called when the user says the finish_phrase.
             It is passed an array of arrays. Each inner array has elements of the text
             and the confidence number of each phrase spoken in this use of recognize_speech.
             This argument is moot if <code title="unEVALable code fragment"> only_once=true</code>.
         </li>
         <li><b>finish_phrase</b> Default: <code>"finish"</code>. The phrase that the user should speak to
             end the dialog. Moot when <code title="unEVALable code fragment"> only_once=true</code>.
        </li>
    </ul>
</details> end of recognize_speech
-->

<details id="speak_doc_id" class="doc_details"><summary>speak</summary>
<code>speak</code> uses text to speech technology.<br/>
When there is just one by-position argument, speak will
treat that argument as the "speak_data" argument (see below) and say it.<br/>
<i>Example:</i><br/>
<code>speak("hello world")</code><br/>
If you want to have more control over how it is said, pass in keyword arguments
of the following:<br/>
<i>Parameters:</i><br/>
<b>speak_data</b> Default: <code>"hello"</code>. If the argument is a string it will
just be said. If it is some other data type (undefined, boolean, number, date, array, etc.)
<code>speak</code> will do its best to convert it to a string, which can be said.<br/>
<b>volume</b> Float 0 through 1. Default: <code>1.0</code> .
    <code>0</code> means silent, <code>1.0</code> means the loudest it can talk.<br/>
<b>rate</b> Float 0.1 through 1. Default: <code>1.0</code> The speed of the speech.
The further away from 1 this value is, the funnier it is.<br/>
<b>pitch</b> Float 0 through 2. Default: <code>1.0</code> The lower the value,
the lower the frequency of the voice. Low pitches sound older and more male,
high pitches sound younger and more female.<br/>
<b>lang</b> A string. Default: <code>"en_US"</code> The language that
the text to be spoken is in. The syntax for "lang"
 is a country code followed by an underscore (or maybe a hyphen) followed by
 a "region" which is often a country code. The W3C, Wikipedia, various standards
 organizations and the web in general, has done a great job of hiding an actual
 list of valid "lang" values. You can get a start at
    <a target="_blank" href="https://www.w3.org/International/articles/language-tags/">lang codes</a> and
    searching for "BCP 47". We don't notice a difference between "en_US", "en_GB" and "fr_CA",
    so maybe this argument is, in practice, useless.
    <br/>
<b>voice</b> An integer from 0 through 3. Default: <code>0</code>
    Though the underlying software claims to support different "voices", we've
    noticed that changing the voice parameter from 0 through 3 does not change the
    actualy quality of the voice. Perhaps some day this will work.<br/>
<b>callback</b> A function that is called when the call is performed in DDE (not on the Job Engine)
               and the speaking is done.
               The callback is passed one argument: "event".
The most useful properties of the event are:
<ul>
    <li><code title="unEVALable">event.utterance.text</code> The spoken text.</li>
    <li><code title="unEVALable">event.utterance.volume</code> The spoken loudness.</li>
    <li><code title="unEVALable">event.utterance.rate</code> The spoken speed.</li>
    <li><code title="unEVALable">event.utterance.pitch</code> The spoken frequency.</li>
    <li><code title="unEVALable">event.utterance.lang</code> The designated language of the spoken text.</li>
    <li><code title="unEVALable">event.utterance.voice</code> An object with fields of "name" (i.e. "Alex"), "lang" and a few others.</li>
    <li><code title="unEVALable">event.elapsedTime</code> A number in milliseconds from start to end of the spoken text.</li>

</ul>
    <b>node_callback</b> When speak is called from the Job Engine,
    the node_callback is called. It uses a speech synthesizer named "espeak".
    The node_callback is passed the arguments of:
    <ol>
        <li>An error obj (or null if no error)</li>
        <li>A string of the text printed to stdout by this call to speak.</li>
        <li>A string of the text printed to stderr by this call to speak.</li>
    </ol>
    For more details on the node_callback function,
    see the node.js documentation for
    <a target="_blank" href="https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback"> child_process.exec</a>.
    <p></p>
    When calling <code>speak</code> in the Job Engine (running purely on Dexter),
    you need a speaker connected to a sound card, which is connected to Dexter's micro USB port.
    We've tested the <a target="_blank" href="https://www.amazon.com/dp/B01J7P0OGI">
         TechRise USB External Stereo Sound Adapter</a>
    You get an, ahem, more robotic voice than when running in DDE.
<p></p>
<i>Examples:</i><br/>
<code>speak("testing 1, 2, 3")</code><br/>
<code title="not in TestSuite">speak(123)</code><br/>
<code title="not in TestSuite">speak(true)</code><br/>
<code title="not in TestSuite">speak(new Date())</code><br/>
<code title="not in TestSuite">speak(["It is now ", new Date()])</code>
<p></p>
By passing a literal object, you can control many aspects of <code>speak</code>.
The <code title="unEVALable code fragment"> speak_data</code> input can be any JavaScript data
(such as a boolean, a number, a date, an array, etc.) and it will do its best to say it out loud.<br/>
Example:<pre><code title="not in TestSuite"> speak({speak_data: [true, "It is", new Date()],//default="hello"
        volume: 1.0,   //default=1.0   0 to 1.0,
        rate: 1.0,     //default=1.0   0.1 to 10,
        pitch: 1.0,    //default=1.0   0 to 2,
        lang: "en-US", //default="en-US"
        voice: 0,      //default=0     0, 1, 2, or 3
        callback: function(event) {out('Dur in nsecs: ' + event.elapsedTime)}  //default=null  called when speech is done.
          })
</code></pre>
<code title="errors">speak(null)</code> errors but<br/>
<code title="not in TestSuite">speak({speak_data: null})</code> will work.
<p></p>
When speaking from a Job in DDE, we recommend using the Job instruction:
<a href="#" onclick="DocCode.open_doc('Human.speak_doc_id', event)"><code>Human.speak</code></a>
This will not work for Jobs run on the Job Engine on Dexter.
</details> <!-- end of speak -->

</details> <!-- end of Sound -->

<details class="doc_details"><summary>Web</summary>
    <details id="get_page_doc_id" class="doc_details"><summary>get_page</summary>
        <code>get_page</code> retrieves the contents of a web page.<br/>
        <i>Parameter:</i><br/>
        <b>url_or_options</b> The url whose contents this instruction gets.<br/>
        Instead of a url as the argument, you can pass a literal JS object with lots of options, described at:
        <a target="_blank" href="https://www.npmjs.com/package/request">options</a>
        These include the HTTP methods of: GET (the default), POST, PUT, PATCH, DELETE, HEAD, OPTIONS,
        plus a zillion other options for authentication, etc.
        <p></p>
        <i>Example:</i><br/>
         <code title="not in TestSuite"> get_page("http://ibm.com")</code><br/>
        If there is an error, the returned string will start with "Error:"
        and be followed by some clues as to why the error happened.
        <p></p>
        It will not eval scripts on the page
        so you may see an error when retriving a page containing JavaScript.
        Also, pages that refer to another file for CSS won't have the required
        CSS on them. With get_page you literally just get the string of the content
        of that one page.
        <p></p>
        <code>get_page</code> is also useful for getting data on the web.
        Most such date requires passwords or keys.
        A couple that don't:<br/>
        <code>get_page("http://jsonip.com")</code> returns your IP address<br/>
        <code>get_page("http://www.nactem.ac.uk/software/acromine/dictionary.py?sf=BMI")</code>
        Medical acronym defs. Takes 15 seconds or so.<br/>
        If you're getting a string representing JSON, pass that string
        as the first argument to the function JSON.parse to get an object.
        <p></p>
        See also: <a href="#" onclick="DocCode.open_doc(show_page_doc_id, event)">show_page</a>
    </details>

    <details id="get_page_async_doc_id" class="doc_details"><summary>get_page_async</summary>
        A call to get_page_async is asynchronus. It returns immediately,
        but when the actual page content is finally retrieved from the web,
        a callback is called and passed an error object, a response object, and the body string
        of the page.
        <p></p>
        <i>Parameters:</i><br/>
        <b>url_or_options</b> The url whose contents this instruction gets.<br/>
        Instead of a url as the argument, you can pass a literal JS object with lots of options, described at:
        <a target="_blank" href="https://www.npmjs.com/package/request">options</a>
        These include the HTTP methods of: GET (the default), POST, PUT, PATCH, DELETE, HEAD, OPTIONS,
        plus a zillion other options for authentication, etc.<br/>
        <b>callback</b> When the content of the web page is retrieved,
        this callback is called, passing:
        <ol>
        <li>an error object (or null), if no error.</li>
        <li>the response object</li>
        <li>the body, i.e. a string of the content of the page, typically HTML.</li>
        </ol>
        JavaScript on the page will not be evaled, but if the page is not found,
        there will be an error.
        <p></p>
        Example: <pre><code title="not in TestSuite"> get_page_async("http://ibm.com",
  function(err, response, body){
     if(err) { out("get_page_async got error.") }
     else if (response.statusCode !== 200){
        out("Got an error with statusCode: " + response.statusCode)
     }
     else { out(body) }
  })</code></pre><br/>
        <p></p>
        Instead of a url as the argument, you can pass a literal JS object
        with lots of options, described at:
        <a target="_blank" href="https://www.npmjs.com/package/request">options</a>
    </details>

    <details id="make_url_doc_id" class="doc_details"><summary>make_url</summary>
        <i>url</i> is a poorly designed language for transfering data on the web.
        <a target="_blank" href="https://en.wikipedia.org/wiki/Uniform_Resource_Locator">Documentation.</a>
        It's normal behavior is as an asyncrhonous function call, where the
        call is typically on a web device known as a 'client', and it is sent to
        a different device on the web known as a 'server'.
        <p></p>
        Usually its used to
        get the content of a web page into a browser. Usually the content of a web page
        is written in a polyglot of languages (HTML, CSS, JavaScript, etc.) but
        we can use urls to retrieve data in other syntaxes such as JSON or just plain strings.
        <p></p>
        <i>make_url</i> does two things:
        <ol><li>Prepends "http://" to the url being constructed, if it looks like
            there is no protocol in the url already. If there is no "://" in the
            first 16 chars of the url, it prepends "http://". If you want a
            different protocol, such as https, or you are using "://" in the value
            of an argument, you should include the protocol in the passed in url.</li>
            <li>Makes creating arguments easier and appends them to the end of the url.</li>
        </ol>
        <i>Parameters</i>:<br/>
        <b>url</b>: A string containing the base url. If the protocol is to be "http",
        you can omit it in most cases.<br/>
        Example: <code>"www.ibm.com"</code><br/>means the same thing as<br/>
        <code>"http://www.ibm.com"</code><br/>
        <b>arguments</b>: A string of arguments, formally called a <i>query string</i>.<br/>
        Example: <code>"x=123&y=45&color=blue"</code> <i>OR</i>
        A literal object with name-value pairs representing the arguments.<br/>
        Example:<br/><code>{x: 123, y: 45, color: "blue"}</code><br/>
        This later form makes it easy to compute and set indivudal args.<br/>
        Example:<pre><code>
      var args = {x: 12.3 * 10}
      args.y = 40 + 5
      make_url("www.ibm.com", args)</code> => <samp>"http://www.ibm.com?x=123&y=45"</samp></pre>
    </details>
</details> <!-- end Web -->



</details> <!-- end i/o -->

<details id='Job_doc_id' class="doc_details"><summary>Job</summary>
A DDE Job is, fundamentally, a description of an automated process to make something.
It's core part is a do_list of instructions that it feeds, one at a time,
to a robot, to tell it how to perform a step to make something.
The syntax of defining a simple job is:
<pre><code>new Job({name: "my_job",
         robot: Robot.dexter0,
         do_list: [ Dexter.move_to([0, 0.5, 0.075]),
                    Control.wait_until(2)
                    //more instructions here
                   ]
        })</code></pre>
Evaling that JavaScript code (by selecting it above or similar code in the editor and
clicking the <button>Eval</button> button)
defines the Job.
This will cause a button for the Job to be placed in the Output Pane header, such as
    <button>my_job</button>.  Clicking the button runs the Job.
<p></p>
Webinar videos for Job:<br/>
<a target="_blank" href="http://hdrobotic.com/webinar#making_jobs"   target="_blank">Making Jobs</a><br/>
<a target="_blank" href="http://hdrobotic.com/webinar#advanced_jobs" target="_blank">Advanced Jobs</a><br/>

<details class="doc_details"><summary>Starting and Stopping Jobs</summary>
Defined jobs remain inert until they are started by clicking their button in the Output pane header
    i.e. <button>my_job</button>
    or evaling:<br/>
<code title="not in TestSuite"> Job.my_job.start()</code><br/>
The method <code title="unEVALable code fragment"> start</code> initializes the job and feeds the instructions in its do_list to
the job's robot, which executes the instructions.
Jobs either run to completion, error, or are stopped by the user via:
<ul><li>Clicking on a running Job's button in the Output pane header</li>
    <li>Calling <code title="not in TestSuite">Job.my_job.stop_for_reason("interrupted", "why you want it stopped")</code></li>
    <li>In a running Job, executing the instruction:
         <a href="#" onclick='DocCode.open_doc("Control.stop_job_doc_id", event)'><code>Control.stop_job()</code></a></li>
 </ul>
 You can stop all jobs by:
 <ul>
   <li>Clicking the stop sign icon <img src='stop_sign.png'/>in the output pane</li>
   <li>Calling <code>Job.stop_all_jobs()</code></li>
</ul>

    <details id="start_doc_id" class="doc_details"><summary>start</summary>
        In addition to clicking a Job's button, Jobs can be started programmatically
        by calling the <code title="unEvalable  code fragment">start</code> method on a Job instance.
        <code title="unEVALable code fragment"> start</code> is an instance method on <code>Job</code> that
        causes the job instance to feed its do_list to the Job's robot instance.
        After a job instance is done running, you can call <code title="unEVALable code fragment">start</code>
        again to run it again.<p></p>
        <i>Example</i> <code title="unEVALable code fragment"> Job.my_job.start()</code><p></p>
        <i>Parameters</i><br/>
        <code title="unEVALable code fragment">start</code> takes an object literal as its argument with the
        same names and values as <code title="unEVALable code fragment"> new Job</code> except that it can't
        take "name" as a property (i.e. you can't rename the job when you start it).
        Below are two of the most useful properties you can use:
        <ul>
            <li><b>program_counter</b> Initialize the program_counter to an instruction id.
                The default is 0. You can use any instruction_location here.
                See <a href="#" onclick="DocCode.open_doc('Control.go_to_doc_id', event)">Control.go_to</a>
                for documentation on all the different kinds of instruction_locations.
            </li>
            <li><b>initial_instruction</b> Add an initial instruction to the do_list at
                the location of program_counter. Thus this instruction will be executed
                first when the job is run. Default null (no instruction added).
            </li>
        </ul>
        Note that these parameters override the same-named properties used in making
        a new job, but they are only used for this call to start. They
        do not perminently affect the job definition.<br/>
        <i>Examples</i>:<br/>
        <code title="not in TestSuite"> Job.my_job.start()</code> which uses
        all the original new Job parameters, or<br/>
        <code title="unEVALable code fragment"> Job.my_job.start({program_counter: "highest_completed_instruction_or_zero"})</code><br/>
        which over-rides some of those original new Job parameters.
        If a job errored the last time it ran, you can use <code title="unEVALable code fragment">program_counter: "highest_completed_instruction_or_zero"</code>
        to restart the job with the errored instruction being the first one run.
    </details>

</details>

<details class="doc_details"><summary>Definition Time vs Run Time</summary>
    To fully understand how a Job operates, you must understand the difference
    between <i>Job Definition Time</i> and <i>Job Run Time</i>.
    <p></p>
    <b>Job Definition Time</b></br/>
    When you select and evaluate the source code of a job, you are
    <i>defining</i> the Job. This simply uses JavaScript's <code>eval</code>
    function to evaluate the source code, just like evaling any source code.
    The result of evaling<br/>
    <code title="unEVALable">new Job({name: "my_job" ...})</code><br/>
    is an instance of the
    class Job. Once done, you can access the Job instance via
    <code title="unEVALable">Job.my_job</code><br/>
    Many properties of the job are accessible via, for example,
    <code>Job.my_job.robot</code> , which returns the default robot of the Job.<br/>
    Of particular import is the do_list. In the case of:
    <pre><code>var ang1 = 90
new Job({name: "my_job",
         do_list: [Dexter.move_all_joints(ang1)]
         })</code></pre>
    , evaluation sets the global variable <code>ang1</code> to 90.<br/>
    Then it sets Job.my_job to the new Job instance.
    Within this instance, the property Job.my_job.do_list will
    be effectively set to an array of instructions.
    We say "effectively" because the actual do_list isn't bound
    until the job is started. It is cached away so that it
    can be copied afresh for each starting of the job.
    But in any case, the do_list will now be an array containing
    just one instance of the move_all_joints instruction.
    This instance will have its joint1 angle set to 90 because <code>ang1</code>
    is evaled when the Job definition is evaluated, and <code>ang1</code> evals
    to 90. By using a global variable in multiple instructions or even multiple Jobs,
    we can change lots of instructions to have a particular consitent value
    with just one <code>var ang1 = 90</code> .
    <p></p>
    If you simply eval <code>Dexter.move_all_joints(90)</code>,
    you can inspect the returned object and see that it has an
    <i>array_of_angles</i> property storing where the Dexter's angles will
    be commanded to go when the Job is actually run.
    <p></p>
    <b>Job Run time</b></br/>
    Now let's walk through <i>Job Run Time</i>. You run a Job
    by clicking its <button>job name</button> button or by calling
    <code title="unEVALable">Job.my_job.start()</code><br/>
    One way to think of starting a Job is that it is a <i>second</i> evaluation
    of the Job. Only this time, it is not using JavaScript's <code>eval</code>, it is using
    Job's special evaluator. Instead of taking an input of JavaScript source code,
    its taking input of the items on the do_list (created via JS eval when defining the Job)
    which can be of many different types.
    Each instruction is "evaluated" by the Job differently, depending on its type.
    (similar to JavaScript's eval!)
    In the case of an instance of the move_all_joints instruction,
    that instance is transformed to a lower level instruction
    that is very similar to what you get when evaluating
    <code>make_ins("a", 90)</code>, then the 90 is convertered from
    degrees into arcseconds, and sent to the Job's default robot, which better be a Dexter.
    <p></p>
    <b>Re-Running a Job</b></br/>
    After a Job has finished, you can rerun it by clicking its
    <button>job name</button> button or calling its <code title="not Evalable">start</code> method again.
    This does not redefine the job.
    So for instance, if between two runnings of a Job, we set our
    global variable of <code title="unEVALable">ang1</code> to 45,
    that will have no effect on
    the 2nd running of our job, because we are not re-evaluating
    <code title="unEVALable">ang1</code> or even
    <code title="unEVALable">Dexter.move_all_joints(ang1)</code>.
    Nor are we re-defining my_job.
    That Joint1 inside the instance of move_all_joints is still 90,
    so our 2nd running of my_job should behave the same, even
    if we modify the value of <code title="unEVALable">ang1</code>.
    Actually if you do re_run my_job, Dexter won't behave exactly the same
    as it did the first time,
    because the Dexter robot will now be at a pose with Joint 1 equal to 90,
    so in our 2nd running, the robot won't move. But besides this initial
    "set up move", following moves would be the same between the two runnings.
    <p></p>
    <b>Functions on the do_list</b></br/>
    A Job definition can look like it contains random old JS code.
    But like calling any constructor or function in JS
    (or any popular general purpose programming language), it can't be random old JS code.
    Constructors or function arguments must be code that, when evaluated,
    return data that the constructor or function was designed to take.
    If the source code for an argument evals to data that the function
    wasn't designed to take, the function call will error or cause unexpected behavior.
    <p></p>
    Jobs are no different. In particular, the array that becomes the do_list for
    a Job can only contain certain types of elements. For instance, if a do_list
    item is a number or a boolean, that is invalid and will cause running the Job
    to error. For more about do_lists, see <a href="#" onclick="DocCode.open_doc(job_param_do_list_doc_id, event)">do_lists</a>
    and the kinds of instructions they can take  <a href="#" onclick="DocCode.open_doc(Robot_doc_id, event)">Robot</a>.
    <p></p>
    The most flexible of instruction types is a JavaScript function.
    This allows you to execute arbritary JavaScript at Job Run Time.
    You might need to do this because you want to use the current environment
    to help determine what instruction to run next. That current environment
    may not be knowable at Job Definition Time. Perhaps you want to
    verify that Dexter really is where you told it to go, or
    you want to check on the status of some other Job before
    proceeding with this one.
    <p></p>
    To run arbitrary JS code during the running of a Job, wrap that code
    in a function definition like so:
    <pre><code>new Job({name: "my_job1",
         do_list: [function(){return Dexter.move_all_joints(30)}]
        })</code></pre>
    To achieve the same result, we could also do:
    <pre><code>function move_it_buddy(){return Dexter.move_all_joints(30)}
new Job({name: "my_job1",
         do_list: [move_it_buddy]
        })</code></pre>
    particulary helpful for long functions or functions we want to
    call multiple times.
    <p></p>
    We are not doing:
    <code title="unEVALable">do_list: [move_it_buddy()]</code> because
    we don't want to CALL <code title="unEVALable">move_it_buddy</code>, as that would put its result on
    the do_list at define time. We just want to eval the global variable
    <code title="unEVALable">move_it_buddy</code> to put its value, a function definition, onto the do_list
    at define time.
    <p></p>
    When a JavaScript function is called,
    including when a running Job calls a function definition on its do_list,
    it sets local variables of the function's parameters to the values passed in,
    and evaluates the code in the body of the function.
    <p></p>
    Anything returned by a function definition on the do_list will be
    dynamically added to the do_list right below the function definition.
    Our do_list started out with just one item, but after running
    that one item, our do_list is extended by an instance of move_all_joints.
    That instance of move_all_joints is inserted into the do_list immediately after
    the function that generated it, making it run immediately after the function.
    <p></p>
    A function definition on a do_list doesn't
    have to return anything. It may just have side effects like calling <code>out</code>
    for a print statement. But if it returns something that is not a valid instruction,
    the Job will error.
    <p></p>
    <b>Job Instance Access</b><br/>
    If you want to access the running Job instance at run time, use a
    function definition on the do_list, and reference <code>this</code> in
    the body of that function definition.<br/>
    <i>Example:</i><br/>
    <pre><code>new Job({name: "my_job3",
         do_list:[function(){ this.user_data.foo = 2},
                 function(){ out("foo: " + this.user_data.foo +
                                 ", robot: " + this.robot.name) }
                 ]})
    </code></pre>
    Note that using <code title="unEVALable">user_data</code> is a convenient way to pass values from one
    instruction to another, without cluttering the global variable space.
    <p></p>
    <b>Flexibility and Complexity</b><br/>
    Jobs have a great deal of flexibility. We can use the full power of
    a general purpose programming language (JS) plus DDE's libraries
    to define them. During their
    running, Jobs can also use the full power of JavaScript plus DDE's libraries, or any
    that you import or create.
    <p></p>
    Though powerful, this flexibility comes
    at the cost of complexity. Using JavaScript's function defining
    capability, you can hide (but not eliminate) many details.
    Also, DDE attempts to make writing JavaScript and Jobs as simple as
    possible, but it is still not simple, especially if you want
    to understand what's going on beneath the surface. The goal of Dexter
    is to enable you to make as many things as possible. This is why DDE needs to be so flexible.
    <p></p>

    For a more complete understanding of JavaScript <code>eval</code>, see the DDE article:
    <a href="#" onclick="DocCode.open_doc('how_to_think_like_a_computer_doc_id', event)">How to Think like a Computer</a>

        <details class="doc_details"><summary>Simplified Jobs Model</summary>
            Programmers know that you don't really understand
            a process until you can code it.
            But we also want the ability to effectively
            use high level code without having to
            understand the details.
            These are contradictory until you realize that
            there's a middle ground. We want to understand
            a process just enough to know its behavior without
            needing to understand all the details of its
            implementation.
            <p></p>
            Authoring and running Jobs for a robot in DDE is a
            complex process implemented with a huge amount of code.
            A lot of that code simplifies the process by elevating the level
            of coding a Job author must to. None the less,
            to have an accurate-enough model of authoring and running
            Jobs is not trivial. The advantage of this "non-trivial"
            is a tremendous amount of flexibility.
            <p></p>
            You can grasp the essence of this process by
            examining a simplified model of authoring Jobs and
            their running. We've constructed one in a bare bones
            JavaScript representation. It lacks the bells and whistles of
            full blown DDE,
            but hopefully is just enough for you to mentally model
            the process of authoring and running Jobs to take advantage of DDE's power.
            <p></p>
            Select and <button>Eval</button> the below code as you read.
            Examine the Output pane for the results of the evaluation.<br/>

            <b>DDE model:</b>
            <pre><code>function model_new_job(do_list_array){
   return {do_list: do_list_array,
           program_counter: 0}
}</code></pre>

<b>Job author model:</b><br/>
<code>var my_job = model_new_job([[15, 30, 45], "abc" + "def"])</code>
<p></p>
<b>Explanation:</b></br>
A Job is essentially a named do_list.
So to make one, we pass in an array and
set the resulting Job to a variable: <code>my_job </code>
<p></p>
The do_list is an array of instructions to be run
when we start the Job.
Here we're creating a Job with just two instructons.
<ol>
<li>an array of 3 integers</li>
<li>a string of 6 letters</li>
</ol>
The <i>source code</i> for those instructions is
a string of<br/>
<code>'[[15, 30, 45], "abc" + "def"]' </code> <br/>
Evaluating that string (select the above without the surrounding single quotes and
click <button>Eval</button> ) returns a 2 element array.
That array becomes the Job's do_list.
<p></p>
You can select and eval:
<ol>
<li>an individual argument to an instruction</li>
<li>the whole instruction</li>
<li>the whole do_list</li>
<li>the entire Job definition</li>
</ol>
Do all of these. Examine the content of the result in
the inspector that appears in DDE's Output pane
after clicking the <button>Eval</button> button.
For more complex real jobs, piece by piece evaluation and
inspection aids understanding and debugging.
When evaling <code>my_job </code> , notice that we initialize the Job's program counter
to 0 to point at "the current instruction".
<p></p>
Now its time to run our Job.<br/>
<b>DDE Model:</b>
<pre><code>function model_start_job(a_job){
     let pc = a_job.program_counter
     if (pc >= a_job.do_list.length) {
        out("Finished Job.")
        a_job.program_counter = 0 //prepare for next start of Job.
     }
     else {
     	let cur_inst = a_job.do_list[pc]
        model_do_instruction(cur_inst)
        model_set_up_next_instruction(a_job)
     }
}

function model_do_instruction(a_inst){
   if(Array.isArray(a_inst)) {
      out("running array instruction: " + a_inst, "green")
   }
   else if(typeof(a_inst) == "string") {
      out("running string instruction: " + a_inst, "green")
   }
}

function model_set_up_next_instruction(a_job){
    //sleep for inter_do_item_dur
    a_job.program_counter = a_job.program_counter + 1
    model_start_job(a_job)
}</code></pre>

<b>Job author model:</b><br/>
<code> model_start_job(my_job) </code>
<br/>
<b>Explanation:</b><br/>
<code>model_start_job</code> grabs the instruction in the do_list
at the program counter, passes it to model_do_instruction
which models running the instruction by printing it out in <span style="color:green;">green</span>.
In real DDE, the instruction
is sent to a robot (or the simulator) to run.
<p></p>
Then model_start_job calls <code>model_set_up_next_instruction </code> .
In real DDE, this pauses or "sleeps" the Job running, for
a fraction of a second, to give other active Jobs a chance
to run <i>their</i> instructions.
<p></p>
Then model_set_up_next_instruction increments <code>my_job.program_counter</code> and
calls <code>model_start_job</code>
to start the process all over again.
This keeps going until we run out of items
in the do_list.
<p></p>
DDE has many different kinds of instructions,
but we'll describe just one particularly versatile one here,
a function definition.
If you have a function call in the do_list source code,
it will be called when the Job definition is evaled,
just like all the other arguments. But you might
want to have the call evaled during the <i>running</i> of a job instead.
just like another instruction is run.
Perhaps that call depends on something that happens
when a previous instruction is run or another condition,
only available at run-time.
We can "protect" the call from being evaled at Job definition
time, by wrapping it in a function definition.
<p></p>
Let's say we want to print the exact time
when an instruction in the middle of the do_list is called.
If we defined our Job like so:<br/>
<b>Job author model:</b><br/>
<pre><code>model_new_job([[15, 30, 45],
               out(new Date(), "green")])</code></pre>
then <code>out(new Date(), "green")</code>
gets evaled at Job definition time, and returns a Date object
(<code>out</code> returns its first argument)
that goes into the do_list array.
Since DDE doesn't know what to do with a Date on the do_list,
DDE will error if you run such a Job.
But, if we define our Job like this instead:<br/>
<b>Job author model:</b><br/>
<pre><code>var my_job = model_new_job([[15, 30, 45],
                      function(){
                          out(new Date(), "green")
                      }
]) </code></pre>
Then extend the <b>DDE model:</b>
<pre><code>function model_do_instruction(a_inst){
   if(Array.isArray(a_inst)) {
      out("running array instruction: " + a_inst, "green")
   }
   else if(typeof(a_inst) == "string") {
      out("running string instruction: " + a_inst, "green")
   }
   else if (typeof(a_inst) == "function"){
       a_inst.call()
   }
}</code></pre>
Now when we call<br/>
<b>Job author model:</b><br/>
<pre><code>var my_job = model_new_job([[15, 30, 45],
          function(){
              out(new Date(), "green")
          }
]) </code></pre>
the code <code>out(new Date(), "green")</code> is <i>not</i> evaled.<br/>

<b>Job author model:</b><br/>
<code> model_start_job(my_job) </code>,<br/>
runs our Job as usual, but with our extension to
<code>model_do_instruction</code>, the function on the do_list is
called, our <code>new Date</code> code is evaled,
and we get a printout of the time when the instruction is run,
not when the Job is defined.
<p></p>
We can run this Job definition many times (without redefining it)
and it will always print out the correct time.
Having a function definition be an "instruction" means
we can put <i>any</i> JavaScript on the do_list
and have it run between any two other instructions.
<p></p>
Furthermore, if a function on a do_list has a return value,
that value is <i>automatically</i> inserted into the do_list immediately after the function
instruction (in real DDE).
Thus, such return values are treated as an instruction. The instruction's arguments
can be determined programmatically at Job run time by the function
creating those instructions.
<p></p>
An array of instructions on the do_list is treated
just as if all its instructions were at top level,
so a function can return multiple instructions in an array.
We can return a different number of instructions based on
run-time conditions. Each can be a different kind of instruction.
All this computation can happen
<i>while</i> the Job is running, giving DDE controled robots the
ability to respond to conditions not exiting
at Job definition time.
This "self-modifying code"
makes Jobs exceedingly dynamic and powerful.
</details> <!-- end Simplified Jobs Model -->
</details> <!-- end Job Definition Time vs Run Time -->

<details id="new_job_parameters_doc_id" class="doc_details"><summary>new Job parameters</summary>
The parameters used to define a new Job all have defaults.<br/>
<code> new Job() </code><br/>
is a valid job to define and run, though it will give a warning message:<br/>
    <span style="color:#e50;">Warning: While starting job: job_1, the do_list is empty.<br/>
    The job still requests the status of Dexter, but does not cause it to move.</span><br/>
    You can customize a job with the parameters:
    <ol><li id="job_param_name_doc_id"><b>name</b> Default's to an unused name of the format: <code>"job_1"</code>, <code>"job_2"</code>, <code>"job_3"</code>, etc.
         You can use <code title="unEVALable code fragment"> Job.a_job_name</code> to get the instance programmatically.</li>
        <li id="job_param_robot_doc_id"><b>robot</b> Default: <code>Robot.dexter0</code> An instance of one of the subclasses of <code>Robot</code>, such as
            <code>Dexter</code>. This is the <i>default</i> robot to send the job's instructions to if
            the instruction itself doesn't designate a robot. The default for a Job's default robot is
            <code>Robot.dexter0</code>. For example, if we have:
         <pre><code title="unEVALable">new Job({do_list: [Dexter.move_all_joints([0, 10, 20, 30, 40]),
                   Robot.dexter1.move_all_joints([0, 10, 20, 30, 40]) ]})
             </code></pre>
            The 1st instruction will be sent to <code>Robot.dexter0</code> (the default),
            and the 2nd to <code  title="unEVALable">Robot.dexter1</code>.
            You can also use a Serial robot instance as the subject of a "string_instruction"
            instruction so that you can have one job that feeds instructions to
            multiple serial robots as well as multiple Dexters.
         </li>
        <li id="job_param_do_list_doc_id"><b>do_list</b> Default: <code>[]</code> (an empty array). The do list of a Job, represented as an array of instructions to be sent to the job's robot when the
             Job is run. There are a number of different kinds of instructions, including
             user-defined JavaScript functions that can call arbitrary JS code.
             <p></p>
             Instructions may add additional instructions to the do_list by returning
             them as a single instruction or an array of instructions.
             Such instructions are inserted into the do_list just below the instruction that 
             made them.
             <p></p>In the source code of a Job definition, the code for a do_list must evaluate
             to an array. <br/>
             Normally a Job definition will look something like:
             <pre><code>
new Job({name: "my_job",
      do_list: [IO.out("hi")]})
      </code></pre>
            The call to <code>IO.out</code> is evaled when the call to new Job is evaled.
            <code title="unEvalable">IO.out("hi")</code> evals to an instruction object.
            (Go ahead and select the call to IO.out and click
            <button>Eval</button> .)
            It is that object which is put on the do_list.
            If that call to IO.out was inside a function and returned,
            and that function was on the do_list, the result of the IO.out
            would be put on the do_list.
            If instead we had put on our do_list:
<pre><code title="unEVALable">
new Job({name: "my_job",
         do_list: [out("hi")]})
</code></pre>
        The call to <code>out</code> returns its argument.
        (It is useful in a debugging context to wrap <code>out</code> around
        some intermediate value.) Since "hi" is a string,
        that will be what would go on the do_list.
        However, that's not a valid item for a do_list, so
        the above call to new Job will error.
        <p></p>
        Instructions are documented with the kind of robot that they run on.
        For a list of valid instructions, see
        <a href="#" onclick="DocCode.open_doc(robot_instructions_doc_id, event)">Robot Instructions</a>
        </li>
        <li id="job_param_keep_history_doc_id"><b>keep_history</b> true or false, Default: <code>true</code>. If true, the robot_status arrays
            returned from running instructions on the robot
            are stored in <code title="unEVALable code fragment"> Job.the_job_name.rs_history</code>.
            This is useful for debugging, but uses memory, which can be
            saved by setting keep_history to <code>false</code>.</li>
        <li id="job_param_show_instructions_doc_id"><b>show_instructions</b> Possible values:
           <ul><li><code>true</code> The default. Each time Dexter begins the execution of an instruction, it
               is printed in the Output pane, refreshing that section of the output pane as
               each new instruction is run. The method used is <code>Job.prototype.show_progress</code>.
               Eval that to see its source code.</li>
               <li><code>false</code> Do nothing. Use this for time-sensitive jobs.</li>
               <li>A method &nbsp; The method will be called (with the job as <code title="unEVALable">this</code>)
                   as each instruction is run, so you can do whatever you like.
                   A function written for this purpose is
                   <code>Job.prototype.show_progress_and_user_data</code>.
                   This allows you to see user_data as it is updated by the job.
                   Eval the above code to see the method's source code.</li>
           </ul>
           See <a href="#" onclick="DocCode.open_doc(print_statements_doc_id, event)">print statements</a>
         </li>
        <li id="job_param_inter_do_item_dur_doc_id"><b>inter_do_item_dur</b> Default: <code>0.01</code> A number indicating the number of seconds between
           when an instruction is completed by its robot, and when the next instruction is
           computed and sent to the robot of the job. This "taking a breath" gives other
           jobs a chance to run. Default 100.</li>
        <li id="job_param_user_data_doc_id"><b>user_data</b> Default <code>{}</code> (an empty object). A literal object of name-value pairs where arbitrary data created
           at the beginning of a job or during the execution of an instruction can be stored
           and retrieved.
           It can be initialized in the call to new job like so:<br/>
           <code>new Job ({name:"j22", user_data:{color: "blue", weight: 123} })</code><br/>
           Within an instruction, you can get a user_data value via 
           <br/><code title="unEVALable code fragment"> this.user_data.color</code><br/>
           or set it via<br/>
           <code title="unEVALable code fragment"> this.user_data.color = "green"</code><br/>
           You can set existing user_data names or create new ones by setting them.
           <p></p>
           If you restart a
           job, the user_data from its previous runnng is lost.
           For data that you want to persist across restarts,
           or for user_data that doesn't really belong with any one job but is used
           by mulitple ones, use the <i>class</i> property <code>Job.global_user_data</code>.
           This can be written to like so: <code>Job.global_user_data.my_count = 123</code>.
           <p></p>
           The value for user_data is passed in when creating a job is shallow_copied when
           the job starts. So if this value was stored in some external-to-the-job way
           and a job is run twice with that very same user_data, the 2nd time the job
           is started, it will see <i>the same</i> top level keys as the first time,
           and all the top level values that are immutable (booleans, strings, numbers).
           However, if there is a mutable value (say an element of an array or a literal object,
           the first job might have modified that and that modification will be see
           when the job is run a 2nd time. Mostly all this doesn't matter because
           most jobs don't use user_data at all. Others look at it but don't
           write to it, and most of the others would only write top level, immutable
           values to it. But nested mutable data in user_data can "leak" over to
           another running of a job, or even other jobs. This might or might not
           be what you want.
           <p></p>
           <code>Job.global_user_data</code> is initialized to <code>{}</code> when DDE launches.
           You can store data here that you wish to persist across running jobs, but realize
           that if a job modifies <code>Job.global_user_data</code>, the 2nd time that
           job is run, it will see a different <code>Job.global_user_data</code> than the first.        
           If you want data to persist across launches, see 
           <b>Reference Manual/IO/Persistent Database</b>.         
           </li>
        <li id="job_param_default_workspace_pose_doc_id"><b>default_workspace_pose</b>
            Default: <code>Coor.Table</code> .
            <p/>
            <code>Dexter.move_to</code>
            and <code>Dexter.pid_move_to</code>
            instructions take an argument of: workspace_pose.
            (See <a href="#" onclick="DocCode.open_doc('Dexter.move_to_doc_id', event)">Dexter.move_to</a>)<br/>
          If you have a move_to instruction in a Job's do_list that is not passed
          a pose, it defaults to the value of the Job's default_workspace_pose.<br/>
          Below we show a Job with a move_to instruction that does <i>not</i>
          default it's workspace_pose, but rather creates it explicitly.
          A pose is composed of an xyz array, and an orientation array.<br/>
          <i>Example:</i><br/>
<pre><code>new Job({name: "my_job",
         do_list: [Dexter.move_to([-0.1, 0.4, 0.075],
                                  undefined,
                                  undefined,
                                  Vector.make_pose([0, 0, 0],
                                                   [0, 0, 45]
                                  ))]})
     </code></pre>
        </li>
        <li id="job_param_program_counter_doc_id"><b>program_counter</b> Default: <code>0</code> Initialize the program_counter to an instruction id.
         Use this when you want  a job to start with an instruction other than
         the first instruction in the do_list. Thus you can skip performing some of
         the initial instructions when running the job.
         This is most commonly a non-negative integer but
         you can use any instruction_location here.
        See <a href="#" onclick="DocCode.open_doc('Control.go_to_doc_id', event)">Control.go_to</a>
        for documentation on all the different kinds of instruction_locations.
        </li>
        <li id="job_param_ending_program_counter_doc_id"><b>ending_program_counter</b> Default: <code>"end"</code> Declare at the outset of a job that it
            will not execute the indicated instruction or beyond. This can be any
            valid instruction_location that does not include a job. It is evaluated
            at the start of each instruction, so if labels move as a result of
            dynamically added instructions, that's OK.
            See <a href="#" onclick="DocCode.open_doc('Control.go_to_doc_id', event)">Control.go_to</a>
            for documentation on all the different kinds of instruction_locations.
            <p></p>
            Use program_counter and ending_program_counter to "play" just a segment
            of a Job's do_list.
        </li>
        <li id="job_param_initial_instruction_doc_id"><b>initial_instruction</b> Default <code>null</code> (no instruction added).Add an initial instruction to the do_list at
        the location of program_counter. Thus this instruction will be executed
        first when the job is run.
        </li>
        <li id="job_param_data_array_transformer_doc_id"><b>data_array_transformer</b> Default <code>"P"</code> .<br/>
            Transforms data array instructions
            into other instructions. Usually the result of the transform are Dexter instructions,
            but needn't be. See <a href="#" onclick="DocCode.open_doc(data_array_doc_id, event)">data array instructions</a>
            for more about data arrays.
        </li>
        <li id="job_param_start_if_robot_busy_doc_id"><b>start_if_robot_busy</b> A Boolean. Default: <code>false</code><br/>
            Normally if a Job is started with a Dexter robot and there is
            another active Job with that same Dexter robot, the 2nd job will error.
            But if start_if_robot_busy: true, then the 2nd Job is allowed to proceed.<br/>
            <span style="color:red;">Warning</span>: When there is more than one Job running on a robot,
             a Job can't expect Dexter to be where it told it to go, as another Job
             might have changed its position.</li>
        <li id="job_param_if_robot_status_error_doc_id"><b>if_robot_status_error</b>
            The value is a <a href="#" onclick="DocCode.open_doc(Robot_doc_id)">do_list item</a> that
            is automatically put on the do_list when a Dexter robot_status comes back to DDE with an error
            (i.e. a non-zero error code.)
            <p></p>
            The value of this Job param is placed on the do_list immediately after the program_counter
            when a robot_status error is received back from Dexter.
            It can be any valid do_list item including an annoymous function.
            It behaves like a usual do_list item.
            If an instance of a <code>Control.stop_job</code> or <code>Control.error</code>
            instruction is the value, that will cause the job to stop but otherwise
            the Job proceeds as usual.
            <p></p>
            The default value for <i>if_robot_status_error</i> is <code>Job.prototype.if_robot_status_error_default</code> .
            It prints a warning message to the Output pane and returns a Control.error instruction,
            stopping the Job.
            <p></p>
            If the instruction is null, the Job will ignore the error and just keep going.
            <p></p>
            You can see the possible
            <a target="_blank" href="https://github.com/HaddingtonDynamics/Dexter/wiki/status-errors">error codes</a>.
        </li>
        <li id="job_param_if_instruction_error_doc_id"><b>if_instruction_error</b> The value is a do_list item that
            is automatically put on the do_list when an instruction in the Job is attempted to
            be run, and errors.
            <p></p>
            The value of this Job param is placed on the do_list immediately after the program_counter
            when an error in running an instruction occurs.
            It can be any valid do_list item including an annoymous function.
            It behaves like a usual do_list item. If an instance of a <code>Control.stop_job</code> or <code>Control.error</code>
            instruction is the value of if_instruction_error, that will cause the job to stop.
            <p></p>
            The default value for <i>if_instruction_error</i> is <code>Job.prototype.if_instruction_error_default</code> .
            It prints a warning message to the Output pane and returns a Control.error instruction,
            stopping the Job.
        </li>
        <li id="job_param_if_dexter_connect_error_doc_id"><b>if_dexter_connect_error</b> Unlike the other if...error
            Job params, the value of if_dexter_connect_error is a function.
            That funciton is <i>not</i> placed on the do_list, but rather called directly
            when connection to the Job's Dexter robot fails. This param is ignored if
            the Job doesn't have a Dexter robot.
            <p></p>
            The reason this is not put on the do_list is that connection errors happen at
            the very initial stages of starting a Job, before any instructions on the do_list
            are run. If there is a dexter_connect error, the Job will stop no matter what,
            with a status_code of <code>"errored"</code>. After the Job is stopped,
            this function will be called with a <code>this</code> of the Job and
            one argument, <i>robot_name</i>, a string of the name of the Dexter of the attempted connection.
            The function called can do anything that a JS function can do, including
            restart this Job, start another Job, switch the robot of this Job or
            even change the ip_address of the Dexter robot in this Job.
            <p></p>
            With great power comes great responsibility. We recommend that any such
            complex actions be explained to the user by calling <code>out</code> to print
            a message telling the user what's going on, or even popping up a <code>show_window</code>
            dialog or a <code>confirm</code> dialog to permit the user to cancel a
            perhaps-undesirable complex operation. Be careful to avoid infinite loops.
            <p></p>
            The default value for <i>if_dexter_connect_error</i> is <code>Job.prototype.if_dexter_connect_error_default</code> .
            It prints an error message to the output pane after the Job has stopped.<br/>
            <i>Example:</i><br/><pre><code title="not in Testsuite.">
new Job({name: "my_job",
         robot: new Dexter({name: "disconnected_dex",
                            ip_address: "111.111.1.111",
                            simulate: false}),
         if_dexter_connect_error: function(robot_name) {
              out("Failed to connect " + this.robot.name + " at ip_address: " + this.robot.ip_address)
              let orig_ip_address = this.robot.ip_address
              let old_last_digit = parseInt(last(orig_ip_address))
              let new_last_digit = old_last_digit + 1
              let new_ip_address = orig_ip_address.substring(0, orig_ip_address.length - 1) +
                                   new_last_digit
              if(confirm("try again with ip_address: " + new_ip_address + "?")){
                  this.robot.ip_address = new_ip_address
                  this.start()
              }
         },
         do_list:[IO.out("its working!")
                 ]})  </code></pre>
         Note that a Dexter connect error takes several seconds to trigger, so be patient.
        </li>
        <li id="job_param_when_do_list_done_doc_id"><b>when_do_list_done</b> controls what happens
        when all the items on a do_list have been run. The default: <code>"run_when_stopped"</code>
        performs the "when_stopped" action, after which the job is finished.<br/>
         <code>"wait"</code>  pauses the job waiting to run new instructions that are added
         to the end of the do_list by some other process. Call
            <code><a href="#" onclick="DocCode.open_doc('Job.insert_instruction_doc_id', event)">Job.insert_instruction</a></code>
            from any JavaScript code to do this.</li>
        <li id="job_param_when_stopped_doc_id"><b>when_stopped</b> controls what happens
             when a job stops.<br/>
             <i>Possible Values</i>:<br/>
             <code>"stop"</code> The default. The job stops.<br/>
             <code title="unEVALable code fragment"> Any valid do_list item</code>
             When the job reaches its normal stopping point, the value of <i>when_stopped</i>
             is put on the do_list immediately after the program counter
             and the Job is permitted to resume.
             This causes that when_stopped instruction to run.
             But when that instruction is completed, the Job will stop.
             (It does not recursively add the when_stopped do_list item again.)
             <span style="color:red">But</span> see Job param <i>when_stopped_conditions</i>.
             <p></p>
             A <code>Control.stop_job</code> or <code>Control.error</code> instruction can be used to end a loop.
             <p></p>
             See the menu item: Jobs/Insert Example/when_stopped
        </li>
        <li id="job_param_when_stopped_conditions_doc_id"><b>when_stopped_conditions</b>
            allows you to selectively turn off running of the
            when_stopped instruction for certain conditions.<br/>
            <i>Possible Values</i><br/>
            <code>true</code> The default. Allows the when_stopped instruction to run
               regardless, of the condition, except errored_from_dexter_connect which
               never runs the when_stopped instruction.<br/>
            <code>false</code>  Disallows the  when_stopped instruction to run
                regardless of the condition.<br/>
            <code title="unEVALable">A JS Literal Object</code> An object with properties for
              each condition. The values of a property can only be <code>true</code>
               (the default)
              to allow the when_stopped instruction to run, or <code>false</code>
              to disallow the when_stopped instruction to run.
              <p></p>
              <b><i>when_stopped_condition Properties:</i></b><br/>
              <b>completed</b> If the do_list of a Job is run successfully,
                this is the when_stopped_condition. Usually you want
                this to be true because we want the when_stopped instruction
                (if any) to run. This can be the status_code of a finished Job.<br/>
              <b>errored</b> A non-specific error has occured.
                 This can be the status_code of a finished Job.<br/>
              <b>errored_from_dexter</b> An error from Dexter, usually
               reflected in the robot_status error slot.
               The final status_code of the job will be <code>"errored"</code>.<br/>
              <b>errored_from_dexter_connect</b> A connection to the Job's
                Dexter robot. Note this isn't actually used to determine
                if the when_stopped instruction is run because
                the when_stopped instruction is never run when there's
                a dexter connection failure. But the Job's if_dexter_connect_error
                method is.
              The final status_code of the job will be <code>"errored"</code><br/>
              <b>interrupted</b> A normal interruption, often caused by
              the user clicking on the Job's button while it is running.
              This can be the status_code of a finished Job.<br/>
              <b>interrupted_by_stop_button</b> An interruption caused
              by the user clicking the <img src='stop_sign.png'/> button.
              Often you want the same behavior here as clicking the Job's button,
              but by making separate conditions, we allow for the possibility of
              the Job button permitting the when_stopped instruction to run
              but clicking the <img src='stop_sign.png'/> button
              <i>not</i>
              running the when_stopped instruction.
              The final status_code of the job will be <code>"interrupted"</code>.<br/>
        </li>
        <li id="job_param_callback_param_doc_id"><b>callback_param</b> An advanced feature of
            <a href="#" onclick="DocCode.open_doc(start_object_doc_id, event)">start_object</a>, not normally used.
    </ol>
    All of these parameters are accessible as properties from the job instance that they help create.<br/>
    <i>Example:</i><br/>
    <code title="unEVALable">Job.my_job.robot</code> gets the default robot for the job.<br/>
    To access these properties from an instruction in a running job, use a function definition
    on the do_list. When a running job encounters a function definition on its do_list,
    it calls that function with no arguments, but with a <code>this</code> of
    the job instance. From that you can get the Job's properties like so:<br/>
    <pre><code>new Job ({name: "my_job",
          do_list: [function(){out(this.robot.name)}]})</code></pre>
    where <code>this</code> refers to <code title="unEVALable">Job.my_job</code>.
    When run, my_job prints its default robot's name to the Output pane.
</details> <!-- end new Job parameters -->



<details id="Job.insert_instruction_doc_id" class="doc_details"><summary>insert_instruction</summary>
Insert an instruction into a Job's do_list at a particular location.<br/>
<i>Parameters</i>:<br/>
<b>instruction</b> The instruction to insert. This can be an array of instructions
if you effectively want to insert more than one.<br/>
<b>location</b> Any instruction_location documented under
              <a href="#" onclick="DocCode.open_doc('Control.go_to_literal_doc_id', event)">Control.go_to literal</a> can be used
including integers, names of labels, etc. <br/>
<i>Example</i>: <pre><code title="unEVALable code fragment"> Job.insert_instruction(IO.out("the end"),
                       {job: "my_job",
                        offset: "end"})</code></pre><br/>
Adds an instruction that prints "the end" at the end of <code title="unEVALable code fragment"> Job.my_job.do_list</code>.<br/>
<p></p>
You can insert an instruction into a Job that's running.
Be sure to insert it <i>after</i> the current program counter or the instruction
won't run and even screw up the length of the do_list causing
an instruction to be skipped.
A Job can even insert an instruction into its own do_list. This is
an example of self-modifying code.
<p></p>
The instruction <a href="#" onclick="DocCode.open_doc('Control.send_to_job_doc_id', event)"><code>Control.send_to_job</code></a>
 performs the core of this functionality
in an instruction format.<br/>
See <a href="#" onclick="DocCode.open_doc('Control.wait_until_doc_id', event)"><code>Control.wait_until</code></a> documentation for its "new_instruction" argument
on how to continually add and execute a new instruction in a running job.
</details>

<details  class="doc_details"><summary>Error Handling</summary>
As Jobs become more complex, more critical and operatate with potentially
dangerous tools or in dangerous situations, reliability becomes
increasingly important. We recommend lots of testing, including
capturing tests to automatically run via DDE's
<a href="#" onclick="DocCode.open_doc('TestSuite_doc_id', event)">TestSuite</a> facility.
<p></p>
None-the-less, you can still run into errors and other unexpected behavior.
Job's have a number of mechanisms that allow a Job author to
"expect the unexpected" and handle errors in a controlled manor,
to turn a bad situation into a manageable one.
<p></p>
There are a number of new Job parameters that let you run some code,
including put instructions on the do_list to be run when a Job
errors but before it stops.<br/>
<a href="#" onclick="DocCode.open_doc('job_param_if_robot_status_error_doc_id', event)">if_robot_status_error</a>
 and<br/>
<a href="#" onclick="DocCode.open_doc('job_param_if_instruction_error_doc_id', event)">if_instruction_error</a>
allow you to specify
any valid do_list item to place on the do_list right after the offending
instruction. Since this includes a JS function definition,
you can run arbitrary code giving you a wide range of possibilities.
these possibilites include doing nothing, making print statements
to warn you of the errors, popping up windows, moving a robot,
all while either allowing the Job to continue or to stop.<br/>
<a href="#" onclick="DocCode.open_doc('job_param_if_dexter_connect_error_doc_id', event)">if_connect_error</a><br/>
doens't let you specify an instruction to put on the do_list because these
errors happen before the do_list processing begins, but
do allow an arbitrary JS function that can peform clean-up or restart
code from Dexter connection errors.
<p></p>
The <a href="#" onclick="DocCode.open_doc('job_param_when_stopped_doc_id', event)">when_stopped</a>
Job parameter allows the Job author to run any valid_do_list item
when a Job stops for whatever reason, including errors.
This comes in handy when you have to "take down" something that a Job has
"set up" to run. One example is to turn off a laser that has been
turned on by the Job. Regardless of how a job stops, we
want to make sure anything dangerous is rendered harmless.<p/>
The <a href="#" onclick="DocCode.open_doc('job_param_when_stopped_doc_id', event)">when_stopped_conditions</a>
Job parameter gives you fine grained control over just what stopping
conditions will trigger the when_stopped instruction.
<p></p>
Some useful instructions when writing robust and safe Jobs.<br/>
<a href="#" onclick="DocCode.open_doc('Control.stop_job_doc_id', event)">stop_job</a> and
<a href="#" onclick="DocCode.open_doc('Control.error_doc_id', event)">error</a>
both allow you to run the when_stopped instruction on a case-by-case basis.<br/>
<a href="#" onclick="DocCode.open_doc('Control.if_any_errors_doc_id', event)">if_any_errors</a>
allows you to detect errors in <i>other</i> Jobs and run a
do_list item of your choosing if such an error has occured.<br/>
The <a href="#" onclick="DocCode.open_doc('Control.debugger_doc_id', event)">debugger</a>
instruction is handy to place on the do_list right before some
erroring instruction to pause the job and allow you to step through
the JavaScript code that implements Job instructions.





</details>
</details> <!-- end job -->


<details id="Robot_doc_id" class="doc_details"><summary>Robot</summary>
  A robot is a machine that can execute the instructions in its instruction set.
  There are lots of different kinds of instructions.
  In general,
  each kind of robot will have its own instruction set. The primary
  difference between robots is the difference in their instruction sets,
  though there are some kinds of instructions that can be run on any kind of Robot.
  Those "common instructions" opperate completely within DDE as they have
  no need to be sent to a special piece of hardware.
  <p></p>
  All Jobs have a default <i>robot</i> property. You can access the robot property
  from a running job like so:<br/>
  <pre><code>new Job ({name: "my_job",
          do_list: [function(){ this.robot }]})</code></pre>
    where <code>this</code> refers to <code title="unEVALable">Job.my_job</code>.<br/>
    You might use this to print out the current robot's name, by replacing<br/>
    <code title="unEVALable">this.robot</code> with:<br/>
    <code title="unEVALable">out(this.robot.name)</code>
  
<details id="robot_instructions_doc_id" class="doc_details" ><summary>Robot Instructions</summary>
These instructions can be used for any robot, as can the instructions for
the Human robot.

    <details  class="doc_details"><summary>Any Array of Instructions</summary>
        Any valid instruction can be wrapped in an array of any length
        and put on a do_list. This is often useful when you have a function
        that makes a number of instuctions. The instructions need not be of the same type.
        <p></p>
        An empty array is valid but will have no effect.<br/>
        Arrays may be nested to any depth.<br/>
        <i>Example:</i><br/>
        <pre><code>new Job({name: "Job1",
         do_list: [[Dexter.move_all_joints([10, 20, 0, 0, 0]), IO.out("did it")],
                    function(){
                        let result = []
                        for(let ang = 0; ang <= 90; ang += 15){
                             result.push(Dexter.move_all_joints([ang, 0,0,0,0,]))
                        }
                        return result
                    }
                   ]})
     </code></pre>
        The first insruction above puts 1 array with two instructions on the do_list.
        Both will be run in order.
        The second instruction, an anonymous function definition,
        creates an array of <code>Dexter.move_all_joints</code> instructions.
        Those instructions have Joint 1 increasing in angles from 0 through 90,
        incrementing by 15 degrees.
        <p></p>
        If we have a function (fun1) which returns an array of instructions, and a second
        function (fun2) that returns a different array of instructions,
        and we wanted to return them all, we could write:
        <pre><code title="unstartable in TestSuite">new Job({name: "Job1",
         do_list: [function(){ return [fun1(), fun2()] }
        ]})
        </code></pre>
        We could also write:
        <pre><code title="unstartable in TestSuite">new Job({name: "Job1",
         do_list: [function(){ return [fun1, fun2] }
        ]})
         </code></pre>
        as long as those functions take no arguments.<br/>
        We could also just put both at top level on the do_list,
        i.e. <pre><code title="unEVALable"/>new Job({name: "Job1",
         do_list: [fun1, fun2]
        })
            </code></pre>
        DDE gives you lots of options!
</details>

<details class="doc_details"><summary>Any JS Function Def</summary>
Any function definition can be put on the do_list as an instruction.
When it is run, the function is called with <code>this</code>
being the instance of Job that the function def is in. Since you can put any
JavaScript inside a function definition, you can have an instruction
execute any JS whatsoever.
<p></p>
Often you'll make functions that have no returned value.
(Such functions actually return <code>undefined</code>, which is
OK.) If so, after the function is called, then the next instruction
on the do_list will be run. But if the function returns
another instruction, or an array of instructions, then those
will be inserted into the do_list immediately below the
function def, and they will be run next.<br/>
<i style="color:red;">Warning: if the function returns something that is not a valid instruction,
the Job will error.</i><br/>
Keep reading to understand what are valid instructions.
<p></p>
<i>The below functionality is advanced use of DDE.</i><br/>
The function
body might have an <code title="unEVALable code fragment"> if</code> in it. Under certain
conditions the function will return one instruction,
and it other cases, it will return another (or <code>null</code>, meaning
just do the next instruction on the do_list, or an array of
instructions to do them all).
<p></p>
If a function returns the special string
<code>"dont_call_set_up_next_do"</code>,
then that will cause nothing to happen in the job. It won't advance.
This is not a good thing to do by itself, but you might
want to conditionally call
<code title="unEVALable code fragment"> this.set_up_next_do()</code>. This tells DDE to
continue processing this job's instructions.
The argument to this function is an integer saying how much
to increment the program counter. It defaults to 1, meaning
do the next instruction. Another useful value is 0,
which will mean that after a short pause, run this instruction
again. Then in some other running of the instruction, a different
branch of an <code title="unEVALable code fragment"> if</code> may be taken that will call
<code title="unEVALable code fragment"> this.set_up_next_do(1)</code> causing the job to proceed.
<i>Example</i>:<pre><code>function pause_a_bit(){
   if (new Date().getSeconds() < 30){
      this.set_up_next_do(0)
   }
   else {
      this.set_up_next_do(1)
   }
   return "dont_call_set_up_next_do"
}
</code></pre>
The above example could better be implemented using
<code>Control.wait_until</code>, but there are
cases where the increased flexibility of the above is convenient.
<p></p>
You can put both named and anonymous functions on a do_list.
A named instruction allows you to add a bit of "documentation" to
the function. You can also use the name of a function like a
label and "go to"
that name using a <a href="#" onclick="DocCode.open_doc('Control.go_to_doc_id', event)">Control.go_to</a> instruction,
or use the function's name in
any uses of an instruction_location.
<p></p>
If you name your function definition,
you can define it <i>outside</i> of the do_list, then just
have its name in the do_list source code. This lets you put
the same function in multiple locations on the do_list and
only have to define it once.
</details>

<details class="doc_details"><summary>Any JS Code</summary>
If you have some JavaScript code that you want to go between 2
other instructions on a Job's do_list, your first inclination
might be to just stick it on the do_list like so
<pre><code title="unEVALable code fragment"> do_list: [IO.out("hi"),
          my_fn(12, 34),
          IO.out("bye")
          ]
</code></pre>
What happens here is that when the <i>definition</i> of the job is evaled,
the function my_fn will be called with args 12 and 34.
Whatever that function returns will be put on the do list
between the other 2 instuctions.
So if my_fn  <i>returns</i> an instruction to run, and the making of that instruction
does not depend on anything that happens while running the instructions of the job,
then you're all set.
<br/>
<b>BUT</b> if what you want is for the eval of <code title="unEVALable code fragment"> my_fn(12, 34)</code>
to occur after the instruction returned by <code>IO.out("hi")</code> is run,
then you'll want to wrap your code in a function, and put the definition
of that wrapper function on the do_list like so:<br/>
<code>function(){ my_fn(12, 34) }</code><br/>
In the body of the above function, <code>this</code> will be bound
to the instance of the running job.
Note that if calling my_fn returns an instruction (or an array of instructions)
that you want to run in the job, then our code for this do_list item should
look like:
    <code>function(){ return my_fn(12, 34) }</code>
<p></p>
If you are confused about what a given instruction on a Job's do_list
returns, just select it in the editor and EVAL it.
</details>

<details class="doc_details"><summary>Any JS Generator</summary>
A relatively new feature of JavaScript is generators.
A generator is a function that can effectively return a value
in the middle of its definition via 'yield', then be called again
and resume after the previous 'yield'.
<a target="_blank" href="https://davidwalsh.name/es6-generators">Tutorial</a>
<p></p>
A generator can be used as a do-list instruction.
Running a job automatically handles the re-calling
of a generator until it is exhausted i.e. no more
yield statements, or a return statement is executed.
<p></p>
Generators are useful when you want to dynamically compute
a bunch of instructions, but are not sure how many until
after you've started generating the instructions. Real-time
control or interaction with other jobs often have these chracteristics.
<p></p>
Usually a generator will have one or more yield statements
with a following value of a dynamcially computed instruction
to insert and run in the job. The software that controls
the execution of instructions in a Job will call a generator's
"next" method until the "done" flag is returned,
in which case the generator is done and on the
next iteration of the job, the following instruction will
be run.
<p></p>
You may have a yield statement
with nothing following it to simply do nothing for
that iteration, but the generator will still be called
for the next job iteration until the generator is exhausted.
<p></p>
<p>The body of a generator looks like a function.
Often its yield statement(s) will be wrapped in a loop,
that has an <code title="unEVALable code fragment"> if</code> statement with
a clause (or more) that terminates the loop by calling <code title="unEVALable code fragment"> return</code>
and a clause (or more) that uses <code title="unEVALable code fragment"> yield</code> to produce
an instruction.<br/>
<i>Example:</i><pre><code>
var my_gen = function* (){
  while(true){
    if(Math.random() > 0.2) {
        yield IO.out("my_gen still alive")
    }
    else { return IO.out("gotta go") }
  }
}
new Job({name: "my_job",
         do_list: [my_gen]})
</code></pre>
See DDE menu bar/Jobs/Insert Example/Generators<br/>
for code examples. Related Job facilities are:
<ul><li>
 using instruction
<code>Control.wait_until("new_instruction")</code></li>
<li>Job parameter: <code title="unEVALable code fragment"> when_stopped</code></li>
</ul>
</details>

<details id="start_object_doc_id" class="doc_details"><summary>Any Start Object</summary>
<i>Caution: this is advanced functionality not needed by
simple uses of DDE.</i>
<p></p>
In the body of an ordinary JavaScript function with a sequence
of top level function calls, a function call will begin
executing as soon as the previous function call returns.
But sometimes we don't want that
because a preceeding call may "return" but it is not really done,
since it has passed processing off to another process. In order to
delay the start of another call, there are various tricks in
JS.
<p></p>
One of the tricks JS uses is to pass a function a "callback" function
as an argument. Then when the original function is really "done",
it calls the callback function.
<p></p>
A DDE Job and its do_list is another way to carefully control
when "instructions" on the do_list are started.
DDE has a number of instruction types that help you control
when the next instruction is run. A primary one is called
<a href="#" onclick="DocCode.open_doc('Control.wait_until_doc_id', event)">wait_until</a>
that blocks the processing of the following instruction.
<p></p>
In order to provide a more general mechanism to handle such methods
without special casing Job processing for each one, we've invented the
<i>start_object</i> instruction. This is not like other more constrained
instructions, but it does fit a pattern that you can leverage to
accomplish a wide variety of tasks by reusing code written by others
within a Job that you create.
<p></p>
A start_object is any JS object that has a method named start.
After a Job's instruction prcessing has exhausted all other possibilities,
it looks to see if an instruction has a start method.
If it does not, it errors with "invalid instruction type".
But if it does, it calls the <code title="unEVALable">start</code> method with the instruction object
as <code title="unEVALable">this</code>. Classes whose instances have start
methods in DDE include:
<ul><li><code>Job</code> the Job is started and the next instruction in the do_list
         is run immediately.</li>
    <li><code>Note</code> a musical note. The note is played, but the next instruction
        is not run until the note is finished playing. For the note to sound,
         you must have called <code title="not in TestSuite">Midi.init()</code> and connected
         a synthesizer (hardware or software).
    </li>
    <li><code>Phrase</code> A sequence of notes. Played under similar conditions to Note.</li>
    <li><code>TestSuite</code> A sequence of tests that test validity. The start method
        runs all the tests and populates properties of the TestSuite instance of
        <code title="unEVALable">known_failure_count</code>, (non-negative integer)<br/>
        <code title="unEVALable">unknown_fallure_count</code>,(non-negative integer)<br/> and
        <code title="unEVALable">report</code> (string hf HTML).
</ul>
There are several other properties that control the starting, processing and the
delay caused by start_objects.
<ul><li><b>start_args</b> Default: <code>null</code>
If the start_object has a property named "start_args",
its value is used to supply arguments to the start method when it is called.
If the method accepts arguments in the  normal, by_position configuration<br/>
<i>Example:</i> <code title="unEVALable">foo(1, 2, 3)</code><br/>
start_args should be an array. However, if the method takes arguments
by keyword<br/>
 <i>Example:</i> <code title="unEVALable">foo({a: 1, b:2})</code><br/>
 then start_args should be a literal object.</li>

<li><b>callback_param</b> If this property is present and non-null,
it indicates that a callback function will be created by DDE and
passed to the start function at the position indicated by the
callback_param's value. If start_args is an array, callback_param,
if present, must be a non-negative integer. The start method will
have the callback method passed at that position in the argument list.
For instance, if the start_args are <code>["one", "two"]</code> and the
callback_param is <code>2</code> then the call to start will look like<br/>
<code title="unEVALable">the_start_object.start("one", "two", function(){...}</code>
<p></p>
However, if start_args is a literal object, then the callback_param,
if present, must be a string that names the keyword of the callback function
in the argument list. For instance,
if the start_args are<br/>
<code>{speak_data: "hi there"}</code> and the
callback_param is<br/>
<code>"callback"</code>, then the
call will look like: <br/>
<code title="unEVALable">the_start_object.start({speak_data: "hi there", callback: function(){...}</code>
</li>

<li><b>dur</b> If there's no callback_param but there is a dur, then
     the Job will pause for the number of seconds in the dur field before
     running the next instruction.
<pre><code>new Job({name: "Job1",
      do_list: [{start: function(){out("wait a sec or 3")},
                 dur: 3},
                 IO.out("done")]})
      </code></pre></li>
<li><b>user_data_variable</b> Default: <code>null</code> If present and non-null,
 the automatically synthesized callback
function will set the given user_data variable in the job to an array of
the arguments passed to the callback function. This is so that
subsequent instructions can retrieve the real result of the start method
and use them. For instance, if the value the of user_data_variable is <code>"foo"</code>,
then after this instruction has completed,<br/>
<code title="unEVALable">job_instance.user_data.foo = ["array", "of", "args", "passed", "to the callback"]</code></li>
</ul>
<i>Examples:</i>
<pre><code title="unstartable in TestSuite">new Job({name: "my_job1",
         do_list: [IO.out("hey from my_job1")]})
new Job({name: "my_job2",
         robot: new Brain({name: "brain2"}),
         do_list: [Job.my_job1]})
         </code></pre>
When Job.my_job2 is started, it will cause my_job1 to start
by calling its start method (the same way you can programmatcally
start a Job).
Immediately after starting my_job1,
my_job2 runs its "next" instruction, but since there isn't one,
my_job2 will finish, perhaps before my_job1 does.
<pre><code title="unstartable in TestSuite">
new Job({name: "my_job",
         do_list: [function(){Midi.init()},
                   new Note("E"),
                   new Note("D"),
                   new Note("C"),
                   new Note("R"), //rest
                   new Phrase("G F E"),
                   new Note("R"),
                   new Phrase("2/3G 1/3G 2/3F 1/3F E") //triplets
                  ]})
        </code></pre>
When a note is created, it has a duration (default 1 second).
The above plays a melody, with each note waiting for the previous note to
complete because running start_object checks for a "dur" field and,
if present, waits for that amount of time before proceedng to the next
instruction.<br/>
See <a href="#" onclick="DocCode.open_doc('music_with_midi_doc_id', event)">Music with MIDI</a>.
<pre><code>
new Job({name: "my_job",
         do_list: [{start: function(){out("wait a sec or 3")},
                    dur: 3},
                   IO.out("done waiting")]})
    </code></pre>
    Above when the job starts, the first instruction's start method is
    called, which prints in the Output pane, "wait a sec or 3".
    Then there's a pause of 3 seconds
    (the value of "dur" in the start_object).
    Finally the Job's 2nd instruction is run
    and prints out "done waiting".

<pre><code>new Job({name: "my_job4",
    do_list: [IO.out("hey"),
    {start: speak,
     start_args: {speak_data: "Clean my work space.", rate:0.8},
     callback_param: "callback",
     user_data_variable: "the_text"
    },
    {start: speak,
     start_args: {speak_data: "Don't forget the end effector.", rate:1.2},
     callback_param: "callback",
     user_data_variable: "the_text2"
    },
    IO.out("you")
    ]})
    </code></pre>
    The above job first prints out "hey", then speaks
    "Clean my work space." slowly, then speaks
    "Don't forget the end effector." faster,
    and when that's done, finally prints out "you".<br/>
    To run the first speak instruction, DDE evals an automatically synthesized call
    that looks like:
    <pre><code title="unEVALable">the_start_object.start({speak_data: "Clean my work space.",
                        rate:0.8,
                        callback: function(...args){
                                    job_instance.user_data.the_text = args
                                    job_instance.wait_until_this_prop_is_false = false
                        }})
            </code></pre>
    When its all done, Job.my_job.user_data.the_text has a value of the
    array of args passed to the synthesized callback function,
    for use by subsequent instructions.
    <pre><code>function test_cb(a, b, callback){
    out("got: " + a + " " + b)
    callback(b, a, 123)
    }
new Job({name: "my_job5",
    do_list: [IO.out("hey"),
    {start: test_cb,
    start_args: [11, 22],
    callback_param: 2,
    user_data_variable: "the_args_to_the_cb"
    }]})
    </code></pre>
    Above we define a "start" method so you can get a little deeper insight.
    We call it "test_cb". It looks like a normal method in that it has
    args. The first thing it does is print out its first two arguments.
    But its 3rd argument is a method that is called in the 2nd (and last) line
    of the method with the original args a and b reversed in order
    and one extra arg, 123.
    <p></p>
    On the Job's do_list, we have a start_object because it is
    an object with a method as the value of the "start" property
    of the object. Note that it doesn't matter that the real method
    being called is named "test_cb". What's important is that
    the start_object has a field named "start" whose value is some function.
    <p></p>
    When our Job is run, the first instruction is run by
    calling the value of the "start" property with arguments
    [11, 22, synthesized_callback_fn]. Then test_cb is run
    and it executes its<br/>
     <code title="unEVALable">out("got: " + a + " " + b)</code><br/>
     then calls <code title="unEVALable">callback(b, a, 123)</code>
     which sets the value of<br/>
    <code title="unEVALable">Job.my_job.user_data.the_args_to_the_cb</code>
    to <samp>[22, 11, 123]</samp> Note that we reversed the order of a & b
    just to show flexibility here.
    <p></p>
    We can make jobs that have any combination of the above kinds of
    start_objects, plus others, plus any other valid instructions.
    They will all wait for each other (if so configured).
    <p></p>
    This syntax is complex, but not as complex as other ways of
    doing the same thing and makes Jobs significantly more flexible than
    they already were.
</details>

<details class="doc_details"><summary>Control</summary>
    Control instructions can be used in any Job regardless of its default robot.
<details id="Control.break_doc_id" class="doc_details"><summary>break</summary>
    The Control.break() instruction, when returned from the body function of a
    <a href="#" onclick="DocCode.open_doc('Control.loop_doc_id', event)">Control.loop</a>
    instruction, will end the loop.
    <p></p>
    <i>Parameters:</i> None.<br/>
    <i>Example:</i> <pre><code>new Job({name: "my_job6",
     do_list: [IO.out("start of job"),
               Control.loop(true,
                          function(iter_index, iter_val, iter_total){
                              if(iter_index < 3) {
                                 return IO.out("index: "       + iter_index +
                                                  " iter_val: "   + iter_val +
                                                  " iter_total: " + iter_total)}
                              else { return Control.break() } }),
               IO.out("end of job")
               ]})    </code></pre>
    If Control.break is not in a loop, a warning will be printed in the Output pane.
    <p></p><p></p>
    If you have nested loops, Control.break ends the inner loop only.
    However, here's a technique to break from the outer loop based on a condition
    set by an innner loop:
<pre><code>new Job({
    name: "my_job",
    user_data: {break_outer_loop: false},
    do_list: [
        Control.loop(3, function(){
            out("outer loop start")
            if(this.user_data.break_outer_loop) {
              return Control.break()
            }
            return Control.loop(3, function(){
               out("inner loop")
               this.user_data.break_outer_loop = true
               return Control.break()
            })
         })
    ]
}) </code></pre>
   Observe that the outer loop <i>starts</i> a 2nd iteration, but is
   cut short when <code title="unEVALable">this.user_data.break_outer_loop</code> evaluates to <code>true</code>.
   You can put the test for <code title="unEVALable">this.user_data.break_outer_loop</code>
   at the very top of the outer loop's body function if you like.
   <p></p>
    Note that Javascript also uses the symbol (not a call) <code title="unEVALable">break</code>
    to end JavaScript <code title="unEVALable">for</code> and <code title="unEVALable">while</code> loop.
</details>

<details id="Control.continue_doc_id" class="doc_details"><summary>continue</summary>
    Control.continue is similar to the JavaScript continue statement inside a loop.
    When in the body of a
    <a href="#" onclick="DocCode.open_doc('Control.loop_doc_id', event)">Control.loop</a>,
    instruction, it immediately jumps to the top of the next iteration of the
    loop, skipping passed instructions after the continue instructions within
    the loop body.
    <p></p>
    <i>Parameters:</i> None.<br/>
    <i>Example:</i> <pre><code>new Job({
    name: "test_continue_job",
    do_list: [Control.loop(3,
    			function(i){
                    return [IO.out("top of loop " + i),
                            ((i === 1) ? Control.continue() : null),
                            IO.out("bottom of loop " + i)
                           ]
            	}),
             IO.out("the end")
    ]
})   </code></pre>
    The above will print to the Output Pane:<br/>
    <ul>
        <li>top of loop 0</li>
        <li>bottom of loop 0</li>
        <li>top of loop 1</li>
        <li>top of loop 2</li>
        <li>bottom of loop 2</li>
        <li>the end</li>
    </ul>
    Notice that it <i>doesn't</i> print: "bottom of loop 1" because
    on the "1" iteration, the <code>Control.continue()</code>
    instruction is placed before the
    <code title="unEVALable">IO.out("bottom of loop " + i)</code>
    so that that out instruction is never run.
</details>

<!-- the real doc for Control.step_instructions is in the user guide -->
<details  class="doc_details"><summary>step_instructions</summary>
    <code>Control.step_instructions()</code> allows you to pause and step through the JavaScript
    of DDE as it is executing instructions. This will pause the Job right after this
    <code>Control.step_instructions()</code><br/>
    See <a href="#" onclick="DocCode.open_doc('Control.step_instructions_doc_id', event)">Control.step_instructions</a>
</details>

<!-- the real doc for Control.debugger is in the user guide -->
<details  class="doc_details"><summary>debugger</summary>
    <code>Control.debugger()</code> allows you to pause and step through the
    rest of the instructions in a running Job.<br/>
    See <a href="#" onclick="DocCode.open_doc('Control.debugger_doc_id', event)">Control.debugger</a>
</details>

<details id="Control.error_doc_id" class="doc_details"><summary>error</summary>
  Causes the job to error, immediately stopping it.<br/>
  <i>Parameters:</i><br/>
  <b>reason</b> Default: <code>""</code> A string.
      The string is automatically prefixed with<br/>
      <code>"Instruction Control.error run with reason: "</code>
      when printed out and setting the Job's stop_reason.<br/>
  <b>perform_when_stopped</b> Default: <code>true</code>
     If false, prevents the Job's normal when_stopped instruction from being run,
     so that the Job stops immediately.<br/>
  <i>Example:</i>
  <pre><code>Control.error("FUBAR", false)</code></pre>
</details>



<details id="Control.go_to_doc_id" class="doc_details"><summary>go_to</summary>
In the 1960's programs were usually characterized by a list of instructions.
As more flexible control was needed, the "goto" instruction was added to
cause the program_counter that was pointing at the executing instruction to jump to
a new location, instead of just incrementing. Overuse
of this control structure gave rise to difficult-to-debug code and
goto fell out of favor, to the extent that it isn't even <i>in</i> popular modern
general purpose languages.
<p></p>
The process of making things often has a long list
of instructions that are executed sequentially. DDE provides the
more conventional function calling, including return, if, and for loops.
But sometimes the most convenient thing to do is "leap over" some instructions
on a job's do_list and proceed from there.
Thus DDE provides the taboo <code title="unEVALable code fragment"> go_to</code> instruction.
Don't use it a lot. Going backwards is particularly dangerous.
But we give you enough rope to hang yourself or build a masterpiece.
<p></p>
DDE's go_to is more versatile than go_to's of the past.
If this complexity is too hard, just don't use it.
<p></p>
The go_to instruction takes just one argument: <code title="unEVALable code fragment"> instruction_location</code>.
It has a number of different kinds of arguments.<br/>
<b>a positive integer</b> Moves the program counter to the indicated instruction id.
The instruction at that id will be the one executed after the go_to instruction.<br/>
<b>a negative integer</b> Sets the program counter to the length of the
do_list, plus this negative integer. Thus an integer of -1 sets the program counter
to the last instruction, so that it will be executed next. -2 goes to the second to last
instruction, etc.<br/>
<b>the name of a label instruction</b> The program counter is set to that label's id.<br/>
<b>the name of a sync_point instruction</b> The program counter is set to that instruction's id.<br/>
<b>the name of a function def instruction</b> The program counter is set to that instruction's id.<br/>
<b>the type of instruction</b> Examples:
<code>"go_to"</code> <code>"label"</code> <code>"sync_point"</code> etc.
For example, if we have "label", then we're not going to a specific label, just
the next instruction of type "label" found.<br/>
<b>Instruction oplet</b> Low level instructions to Dexter have a letter that
designates their type. For example <code>"a"</code> would refer to
the <code>Dexter.move_all_joints</code> instruction. You can see the oplet for
an instruction by evaling the call to make it, i.e. <code>Dexter.move_all_joints([45])</code><br/>
<b>"program_counter"</b> Set's the program_counter to the program_counter. Only useful
when the instruction_location is an array. <br/>
<b>"before_program_counter"</b> Set's the program_counter to the instruction just
before the program_counter.<br/>
<b>"after_program_counter"</b> Set's the program_counter to the instruction just
    after the program_counter.<br/>
<b>"end"</b> Sets the program counter to one greater than the last instruction id,
effectively ending the job.<br/>
<b>"next_top_level"</b> A top level instruction can cause multiple instructions to
be inserted right beneath it. This sets the program counter to the next top level
instruction, even though it may now be executing "sub" instructions. <br/>
<b>"highest_completed_instruction"</b> When you are re-starting a job, this
becomes handy to start the job at the last instruction that completed.
Perhaps the instruction completed, but it inadvertently caused an error.
You can fix the problem, then rerun that last instruction and continue on.
Take care to not execute that last instruction twice if you don't want to.
You can go one beyond it like so:<br/>
<code>["highest_completed_instruction", 1]</code><br/>
<b>"highest_completed_instruction_or_zero"</b> Like <code>"highest_completed_instruction"</code>
but if the job hasn't been started yet, or has completed successfully,
this sets the program_counter to its default, 0 so that the first
executed instruction will be the first instruction in the do_list.
Generally <code>"highest_completed_instruction_or_zero"</code> is more useful than
    <code>"highest_completed_instruction"</code>.
<br/>
<b id="Control.go_to_literal_doc_id">A literal object</b> The literal object can have up to three properites.
<ul><li><b>offset</b> Can be any one of the above instruction_locations.<br/>
    <i>Example</i>: <code>{offset: 12}</code>
    </li>
    <li><b>process</b> Describes how the offset is searched for. Note that since
      you may have more than one label with a given name, the order in which
      you traverse the do_list looking for such labels can matter. Possible values:
    <ul><li><b>forward</b> Search forward from the current location (default 0)
        for the location in the <code title="unEVALable code fragment">  offset</code>
        <i>Example</i>: <code>{offset: "label3", process: "forward"}</code>
        searches forward from the current location in the do_list to
        the first label or sync_point instruction named "label3".
        If it is not found, error.
        </li>
        <li><b>backward</b> Search backwards for the location of the offset. Error
        if not found.</li>
        <li><b>forward_then_backward</b> Search forward from the current location
        to the end of the do_list. If the offset is not found, search backwards from
        the current location. Error if not found. This is the default process.</li>
        <li><b>backward_then_forward</b> Search backward from the current location
            to the beginning of the do_list. If the offset is not found, search forwards from
            the current location. Error if not found.</li>
    </ul>
    <li><b>job</b> An instruction location can indicate a job of the described instruction.
    By default, that's the job that the go_to instruction is in. But you can
    tell another job to jump to a new instruction for its next instruction
    if you like. <br/>
    <i>Example</i>: <code>{job: "my_other_job", offset: "label3"}</code></li>
    </ul>
    <b>An array</b> There may not be a convenient "one shot" way to
    describe a location, however, by using two or more designators, you may
    better be able to describe it.<br/>
    <i>Examples</i>:<br/>
    <code>["myLabel", 1]</code> indicates the instruction immediately after "myLabel".<br/>
    <code>["myLabel", -1]</code> indicates the instruction immediately before "myLabel".<br/>
    <code>["program_counter", {offset: "sync_point", process: "backward"}]</code>
    Searches backwards from the program_counter to
    the first instruction of type "sync_point".
</ul>
Instruction_locations are also used in
initializing a Job's <code title="unEVALable code fragment"> program_counter</code> in defining the job, as well as
in calling a job's start method. The <code>Control.send_to_job</code> instruction
uses an instruction_location for identifying
where within the job to insert the given instruction as does the method
<code>Job.insert_instruction</code>.
<p></p>
    Much of the time that you'd be tempted to use a backwards
    Control.go_to,
    <a href="#" onclick="DocCode.open_doc('Control.loop_doc_id', event)">Control.loop</a> is better.
</details>

<details id="Control.if_any_errors_doc_id" class="doc_details"><summary>if_any_errors</summary>
    <code>Control.if_any_errors</code> checks to see if any of the supplied jobs have errored.
    If so, it inserts the supplied instruction into the do_list on the job
    that this instruction is on. In either case, <code>Control.if_any_errors</code> continues
    the job that its on.
    <i>Parameters</i><br/>
    <b>job_names</b> An array of strings of job names. If a named job doesn't exist, error.<br/>
    <b>instruction_if_error</b> Default: <code>Control.error()</code> An instruction that will be inserted into the do_list
    immediately after this instruction IF one of the named jobs has errored.
    The default for <code title="unEVALable code fragment"> instruction_if_error</code> is a function that
    inserts an instance of Control.error into the do_list of this job, causing it to error.
    The "reason" for that error instruction is explicit about the cause of the error.
    <p></p>
    Generally a job should be stopped quickly if there is an error.
    This instruction makes it easy to stop jobs that are concurrently cooperating
    with the current job. The instruction_if_error can be a function (called with the
    current job for "this") so that some arbitrary compensation can be made for the error.
</details>

<details id="Control.include_job_doc_id" class="doc_details"><summary>include_job</summary>
Inserts a do_list or a portion thereof into the current Job, right after this instruction.<br/>
The job_name parameter takes a wide variety of data to specify where to get a do_list from.
Most of those data formats are not actual Job names, but
they perform a similar role to a Job name in referencing a do_list to include.
<p></p>
Control.include_job has a large number of very specific error messages to help you correct mistakes.<br/>
<i>Parameters:</i><br/>
<b>job_name</b> Required. Indicates a do_list, which will be "clipped" by start_loc and end_loc.
    Formats:
    <ol><li><b>A Job instance</b>. <i>Example:</i> <code>Job.my_job</code><br/>
        The Job's orig_args.do_list is used. It doesn't matter if the included job has been run or not.</li>
        <li><b>An Array</b>.<br/>
         <i>Example:</i> <code>[[36000, 72000], [37000, 73000]]</code><br/>
            This can be an instructions array or a data array.
            It cannot be an oplet array.<br/>
             See <a href="#" onclick="DocCode.open_doc(data_array_doc_id, event)">Data Array</a>.
        </li>
        <li><b>A String</b>. A variety of strings can be used. One advantage of using strings
            instead of Jobs or Arrays is that the string is resolved at instruction run-time
            whereas Job and Array are resolved at Job definition time. By delaying the
            resolution, you can place the definition that the string refers to
            AFTER the Job definition containing the <code>Control.include_job</code> instruction.
            String formats:
            <ul><li><b>Job.a_job_name</b> <i>Example:</i> <code>"Job.my_job"</code><br/>
                     This is the prefered way to reference a Job.
                     If a Job of that name is not defined when this instruction is run, error.
                </li>
                <li><b>a_job_name</b> <i>Example:</i> <code>"my_job"</code><br/>
                    A shortcut way to reference a job. More ambiguous than using the "Job." prefix.
                    If there is both a Job name and a variable of that same name, the Job name is used.
                </li>
                <li><b>a_variable_name</b> <i>Example:</i> <code>"foo"</code><br/>
                      The variable is expected to be bound to an array
                      of instructions. If a_variable_name is both a Job name and a global variable,
                      the Job name will be used.
                </li>
                <li><b>file_path</b></li> <i>Example:</i> <code>"my_job.dde"</code><br/>
                    Any string that isn't prefixed by "Job." but has a dot in it,
                    is considered to be a file_path.<br/>
                     A file path that doesn't start with a slash refers to a job in your "dde_apps" folder under
                    your "Documents" folder.<br/>
                    The file is evaluated. The result of the evaluation can be:<br/>
                    <ul><li><b>A Job</b> The Job used will be the <i>first</i> Job definition in the file.</li>
                        <li><b>A variable assignment</b> The first JavaScript code in the file should be<br/>
                            <code title="unEvalable">var some_name = [instr1, instr2, ...]</code><br/>
                             preceeded only by comments and whitespace, if any.
                        <br/>
                         <i>Example:</i><br/>
                          <code>var my_do_items = [[36000, 72000], [37000, 73000]]</code>
                        </li>
                        <li><b>An instructions array</b><br/><i>Example:</i>
                            <code>[[36000, 72000], [37000, 73000]]</code><br/>
                            The instructions array should be the <i>last</i> top-level expression in the file.
                            <span style="color:red;">Warning</span>: Sometimes the last top-level expression
                            is NOT returned, so its safer if the file contains only ONE top-level
                            expression.
                            </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>

<b>start_loc</b> Grab the instructions from the indicated do_list, starting with start_loc.
                 If <i>job_name</i> refers to an instructions array, the default for start_loc is
                 <code>0</code>.<br/>
                 If <i>job_name</i> refers to a Job, the default is the Job's orig_args.program_counter,
                 whose default is, in turn, <code>0</code>
                 When <i>job_name</i> refers to a job, <i>start_loc</i> can be any 'instruction_location'.<br/>
                 See <a href="#" onclick="DocCode.open_doc('Control.go_to_doc_id', event)">Control.go_to</a> for details
                 on the <code title="unEVALable code fragment">instruction_location</code> format.<br/>
<b>end_loc</b>   Grab the instructions from the indicated do_list, up to, but not including, end_loc.
                 If <i>job_name</i> refers to an instructions array, the default for end_loc is
                 the length of the array.
                 If <i>job_name</i> refers to a Job, the default is the Job's orig_args.ending_program_counter,
                 whose default is, in turn, the length of the Job's orig_args.do_list.
                 When <i>job_name</i> refers to a job, <i>end_loc</i> can be any 'instruction_location',
                 and its default is the ending_program_counter for the job, which is, by default, "end".
    <p></p>
    See <a href="#" onclick="DocCode.open_doc('Control.go_to_doc_id', event)">Control.go_to</a> for details
    on the <code title="unEVALable code fragment"> instruction_location</code> format.
    <p></p>
<i>Example:</i><br/>
   <code>Control.include_job("Job.my_job")</code><br/>
   Inserts all the original instructions that are normally run when running "my_job",
   into the current job, right below this instruction.
   <p></p>
   <i>Control.include_job</i> makes it easy to build up jobs hierarchically, effectively
      treating a low level Job as a single instruction in a higher level Job.<br/>
      See also: <a href="#" onclick="DocCode.open_doc('Control.start_job_doc_id', event)">Control.start_job</a>
</details>

<details id="Control.label_doc_id" class="doc_details"><summary>label</summary>
This instruction is a no-op. However, it provides a target location
for <a href="#" onclick="DocCode.open_doc('Control.go_to_doc_id', event)">Control.go_to</a>, initializing the program_counter of a job, and
a location to insert an instruction using <code>Control.send_to_job</code>.<br/>
<i>Example</i>: <code>Control.label("lab2")</code>
</details>

<details id="Control.loop_doc_id" class="doc_details"><summary>loop</summary>
    <code>Control.loop</code> lets a Job repeat a sequence of instructions a number of times.
    This instruction is one of the most powerful and complex
    in DDE, providing a wide range of looping behavior.<br/>
    <i>Parameters</i> (2)<br/>
    <b>times_to_loop</b> Default: <code>2</code>. Determines the number of times that the body_fn is called,
    i.e. the iteration count of the loop. It can be one of five types:
    <p></p>
    <i>boolean</i><br/> If <code>false</code>, loop no times. This loop becomes a no-op.<br/>
    If <code>true</code>, loop forever, or until a
    <a href="#" onclick="DocCode.open_doc('Control.break_doc_id', event)">Control.break()</a> instruction in the body_fn
    is returned. Like all arguments, this is evaluated at Job definition time to
    supply a value of a boolean (true or false).<br/>
    <i>Example:</i> <pre><code>
new Job({
    name: "my_job",
    do_list: [
        Control.loop(true,
                     function(index) {out("on iteration: " + index)
                                      return Control.break() })
    ]
}) </code></pre>
    The above example will only call the 2nd argument once, since it breaks at
    the end of the first time.
    Note that the first argument can be a boolean or any expression that evaluates to a boolean.
    If a loop instruction is at top level in a do_list, that evaluation will happen at
    Job definition time, but if it is nested inside of a function definiton on the do_list,
    that evaluation will happen while the Job is running.
    <p></p>
    <span style="color:red">Warning: </span> Using a first argument to loop that always evaluates to
    <code>true</code> puts you at risk of making an infinite loop. You'll have to manually stop
    the Job or have some other code outside the Job to stop the loop unless the body_fn
    returns a <code>Control.break()</code>.
    <p></p>
    <i>non-negative integer</i><br/> Number of times to call the body_fn. If <code>0</code>,
    the loop becomes a no-op, just like when this arg is <code>false</code>.
    This can be <code>Infinity</code> such that looping would only
    be limited by a <code>Control.break()</code> instruction in the body_fn or
    stopping the Job.<br/>
    <i>Example:</i> <pre><code>
new Job({
    name: "my_job",
    do_list: [
        Control.loop(2 + 3,
                     function(index) {out("on iteration: " + index) })
    ]
}) </code></pre>
    <p></p>
    <i>array</i><br/> The length of the array is the number of times to loop.
    If this arg is <code>[]</code> i.e. the empty array, this loop is a no-op
    just like a value of <code>false</code> or <code>0</code>.
    At each iteration, the iter_val will be a successive value in the array.
    The iter_index will be the index of each successive value in the array,
    taking on the values of 0 through array.length - 1.
    iter_total will be the length of the array.<br/>
    <i>Example:</i> <pre><code>
new Job({
    name: "my_job",
    do_list: [
    Control.loop([1, 3, "five", 7, new Date()],
    function(index, value) {out("on iteration: " + index +
                                " with " + value) })
    ]
    }) </code></pre>
    <p></p>
    <i>object</i><br/> The number of own properties of the object is the number
    of times to loop. At each iteration, the iter_key will be a property name in the object,
    and iter_val will be the property's value.
    <p></p>
    <i>function</i><br/> At the beginning of the first iteration, this function is
    called with the arguments of:
    <ul>
        <li>this=the_job_instance</li>
        <li>iter_index=<code>0</code></li>
        <li>iter_value=<code>undefined</code></li>
        <li>iter_total=<code>undefined</code></li>
        <li>iter_key=<code>undefined</code></li>
     </ul>
    If it returns a:
    <ul><li>non-neg-integer: Used for the rest of this loop.</li>
        <li>array: Used for the rest of this loop.</li>
        <li>object: Used for the rest of this loop.</li>
        <li>boolean: The function is called upon every iteration to determine if
    looping should stop or not. If <code>false</code> is returned,
    no looping occurs, this loop is a no-op. If <code>true</code> is returned,
    that "true" is used for the first iteration, and the function is called
    at the beginning of every subsequent iteration until <code>false</code>
    is returned or the body_fn executes a <code>Control.break()</code> instruction.</li>
    </ul>
    You want to use a function here instead of directly using a boolean, non-neg-integer,
    or array, when you want those values to be computed at the time
    the Control.loop instruction is executed as opposed to Job definition time.<br/><pre><code>
new Job({
    name: "my_job",
    do_list: [
        Control.loop({
            "NYC": "too crowded",
            "LA": "too much traffic",
            "New O": "nice if it doesn't flood"},
            function(index, value, total, key) {
                out(key + " <b>is</b> " + value)
            }
        )
    ]}) </code></pre>
    <p></p>
    <b>body_fn</b> This function is called with basically the same args as
    are used to call times_to_loop when it is a function.<br/>
    <ol>
        <li>this=the_job_instance</li>
        <li>iter_index= a non negative integer of the iteration number i.e. 0, 1, 2, etc.</li>
        <li>iter_val If times_to_loop is:
           <ul><li> true: So is this arg.</li>
               <li> integer: This arg is the same as iter_index</li>
               <li> array: Uses the element of the array at the iter_index
            position in the array.</li>
            </ul>
        </li>
        <li>iter_total If times_to_loop is:
           <ul><li> true: Uses <code>Infinity</code>.</li>
               <li> integer: Uses that integer.</li>
               <li> array: Uses length of the array.</li>
           </ul>
        </li>
        <li>iter_key</li> the same as iter_index except if the times_to_loop
            is an object (or a function that returns one), in which case
            iter_key is the property name of the property being looped
            through for this iteration.<br/>
             Note that the order that the properties
            are used in looping is strictly speaking indeterminant as JS does not
            specify an order to object properties. However, we've found that
            the order of string-named properties are usually the order in
            which they were added to the object. <br/>
            Beware: If you have created the object with number keys, i.e.
            <code>{6:"some val"}</code>,
            the iter_key will be a string: <code>"6"</code> not
            a number <code>6</code> and generally appear before normal string-named keys.
            Its best if you don't depend on an ordering of the properties.</li>
    </ol>
    Loop instructions may be nested. <code>Control.break()</code> instructions will
    end the inner-most loop that contains the <code>Control.break()</code>.
    <p></p>
    Much of the time that you'd be tempted to use a backwards
    <a href="#" onclick="DocCode.open_doc('Control.go_to_doc_id', event)">Control.go_to</a>,
    loops are better.
    <p></p>
    <i>Examples</i>
    <pre><code>new Job({name: "my_job7",
    do_list: [IO.out("start of job"),
              Control.loop([100, 101, 102, 103, 104],
                         function(iter_index, iter_val, iter_total){
                             if(iter_index < 3) {
                                return IO.out("index: "       + iter_index +
                                                 " iter_val: "   + iter_val +
                                                 " iter_total: " + iter_total)}
                             else { return Control.break() }
                         }
                        ),
               IO.out("end of job"),
]})     </code></pre>
    In the above example, the 2nd arg to the loop instruction (an anonymous function)
    is called 5 times, one time for each of the numbers in the array
    <code>[100, 101, 102, 103, 104]</code>
    The 2nd arg passed to that function, iter_val, will be an element of the array.

    <pre><code>
new Job({
    name: "my_job",
    do_list: [
        Control.loop(function() {return (Math.random() > 0.1)},
                     function(iter) {return IO.out(iter)}
                     )
    ]
})</code></pre>
  At each iteration, the function in the first argument to loop is called.
  If it returns true, the function in the 2nd argument is called.
  But if it returns false, the loop is stopped.
  <code>Math.random()</code> returns a float between 0 and 1.
  Most of the time it will return a number greater than 0.1, allowing
  the loop to continue. But as soon as <code>Math.random()</code> returns
  a number that is less than or equal to 0.1, the loop stops.
    <p></p>
    Whatever the function in the 2nd argument returns should be a valid instruction.
    This will be added to the do_list and run by the Job. Above we return the
    value of <code title="unEVALable">IO.out(iter)</code> so that one extra instruction will be
    run upon each iteration. If you want to run more than one extra instruction
    per iteration, return an array of them. At the top of each iteration, all instructions
    added by the previous instruction are removed. body_fn returned instructions can
    be different upon each iteration if you like.
  <p></p>

   See Jobs menu/Insert Example/Control.loop for more examples.
</details>

<details id="Control.start_job_doc_id" class="doc_details"><summary>start_job</summary>
 <code>Control.start_job</code> starts another job.<br/>
 <i>Parameters:</i><br/>
 <b>job_name</b> Required. Can be:
 <ul><li>An instance of the Job to start.</li>
    <li>A string starting with "Job." followed by the Job's name.</li>
    <li>A string of the Job's name (and, if none of those ...)</li>
    <li>A string of a path (file name) to a file that contains a definition of the
        Job to start. The first Job definition in the file will be used.
        If the string does not start with /, then the path is relative to
        <code>dde_apps_folder</code>, as per DDE convention.
    </li>
 </ul>
 <b>start_options</b> A literal object. Name-value pairs that can
 be passed when creating a new Job can also be passed to a job's <i>start</i> method and
 are done so when a Job starts another Job.<br/>
 <i>Example</i>: <code>{program_counter: 2}</code> <br/>
    causes the job to be started, executing its 3rd do_list item first.<br/>
 <b>if_started</b> A string. Default: <code>"ignore"</code> . In combination with the status_code of the Job to be started,
       the value of if_started determines the behavior.
     If the status of the job to be started is:
    <ul><li> <code>"running"</code> or <code>"waiting"</code>
           and the value of if_started is:
        <ul><li><code>"ignore"</code> Don't start the job. Just do nothing. This is the default.</li>
            <li><code>"error"</code> Stop the job running this instruction with an error.</li>
            <li><code>"restart"</code> Stop and restart the job named by <b>job_name</b>.</li>
        </ul>
        </li>
        <li><code>"starting"</code>, this instruction is ignored.</li>
        <li><code>"suspended"</code> The job is unsuspended.</li>
        <li><code>"not_started"</code>, <code>"completed"</code>, <code>"errored"</code>, or <code>"interrupted"</code>,
                    the job is started.</li>
    </ul>
    <b>wait_until_job_done</b> Boolean. Default: <code>false</code>
    If the value of this argument is <code>false</code>, start_job behaves
    as documented above. However if it is <code>true</code>,
    generally this instruction will wait until the Job named in job_name
    is completed before proceeding to the next instruction.
    Thus, a <code>false</code> value is good for running the job_name in
    parallel, whereas <code>true</code> is good for running it in serial.
    You might, for instance have a "master Job" that starts off a whole
    slew of other jobs. Whether those jobs run in serial or parallel
    depends on the setting of wait_until_job_done.<br/>
    <i>The Details</i><br/>
    When wait_until_job_done=true, the <b>if_started</b> argument is ignored.<br/>
    The exact behavior of wait_until_job_done=true depends on the
    status of the job_name job. If it is:
    <ul>
        <li><b>not_started</b> Start the job_name job and wait for it to complete.</li>
        <li><b>starting, running, waiting</b> wait for the job_name job to complete.</li>
        <li><b>suspended</b> Unsuspend the job_name job and wait for it to complete.</li>
        <li><b>completed</b> Continue on with this job.</li>
        <li><b>errored</b> This job errors and stops.</li>
        <li><b>interrupted</b> This job is interrupted and stops.</li>
    </ul>
    <i>Examples:</i><br/>
    job2 starts job1. job2 does not wait for job1 to complete before running its next instruction,
    if any.
    <!-- the below works in isolation, but not with TestSuite auto-starting of jobs. -->
    <pre><code title="unstartable in TestSuite">
new Job({name: "job1",
         do_list: [IO.out("in job 1"),
                   Control.wait_until(5)]})
new Job({name: "job2",
         robot: new Brain({name: "b1"}),
          do_list: [Control.start_job("Job.job1"),
                    IO.out("last instruction")
                    ]
})    </code></pre>
    job2 starts job1 and waits for job1 to complete before continuing,
    because the last arg to start_job is <code>true</code>.
    <pre><code title="unstartable in TestSuite">
new Job({name: "job1",
         do_list: [IO.out("in job 1"),
                   Control.wait_until(5)]})
new Job({name: "job2",
          do_list: [Control.start_job("job1", undefined, undefined, true),
                    IO.out("last instruction")]
})    </code></pre>
    job2 starts job1 and waits for job1 to complete before continuing,
    because the last arg to start_job is <code>true</code>.
    job2 can start job1 even though they both are using the default <code>Robot.dexter0</code>
    because job2's 2nd argument explicitly allows this.<br/>
    <span style="color:red">Caution</span>: 2 jobs sending instructions to one Dexter means
    neither can rely on the Dexter being where they last told it to go.
    <pre><code title="unstartable in TestSuite">
new Job({name: "job1",
         do_list: [IO.out("in job 1"),
                   Control.wait_until(5)]})
new Job({name: "job2",
         robot: new Brain({name: "b1"}),
          do_list: [Control.start_job("job1", {start_if_robot_busy: true}, undefined, true),
                    IO.out("last instruction")]
})    </code></pre>
    See also <a href="#" onclick="DocCode.open_doc('Control.include_job_doc_id', event)">Control.include_job</a>
</details>

<details id="Control.stop_job_doc_id" class="doc_details"><summary>stop_job</summary>
  Causes the indicated job to stop just before executing a particular instruction.<br/>
  <i>Parameters</i>:<br/>
  <b>instruction_location</b> Optional. Determines the job to stop and the instruction within that
  job that it should stop before executing. If <code title="unEVALable code fragment"> instruction_location</code> does
  not indicate a job, then the job that this instruction is in will be stopped.
  If <code title="unEVALable code fragment"> instruction_location</code> is not given, then
  the offset will be <code>"program_counter"</code>, i.e. the job will
  stop before executing its next instruction. Thus the default is that
  the current job will be stopped immediately.
  See <a href="#" onclick="DocCode.open_doc('Control.go_to_doc_id', event)">Control.go_to</a> for details
  on the <code title="unEVALable code fragment"> instruction_location</code> format.<br/>
  <b>reason</b> A string. The reason that the job is being told to stop.<br/>
  <b>perform_when_stopped</b> A boolean. When <code>true</code> (the default)
  the job will behave as if the do_list is completed normally,
  i.e. the job's when_stopped action will be performed.<br/>
  If it is false, the when_stopped action won't be run.
  Example:<code>Control.stop_job({job: "my_job", offset: "label1"})</code>
  <code title="unEVALable code fragment"> Job.my_job</code> will stop when it reaches the instruction named "label1".
</details>

<details id="Control.suspend_doc_id" class="doc_details"><summary>suspend</summary>
  Causes the indicated job to pause. It will not execute any more of its instructions
  until it is unsuspended. <br/>
  <i>Parameters:</i> <br/>
  <b>job_name</b> Default: <code>null</code>
  The job to be suspended. <code>null</code> means suspend the job that
  this instruction is in. A string means suspend the job with that name.
  May also be a job_instance to suspend.<br/>
  <b>reason</b> Default: <code>""</code>. A string of why the job is suspended.<br/>
  <i>Example:</i>
  <code>Control.suspend()</code>.<br/>
  Suspends the current job for no reason.
</details>

<details id="Control.unsuspend_doc_id" class="doc_details"><summary>unsuspend</summary>
Unsuspends a suspended job. If the job to be suspended is not suspended,
no action will be taken. Note that a job cannot unsuspend itself,
because it is not running.
<i>Parameters:</i> <br/>
<b>job_name</b> Default: <code>"required"</code>
The job name or job instance to be unsuspended.
<b>stop_reason</b> Default: <code>false</code> If false, the job is unsuspended.
   If a string, the job is stopped, with the reason of this stop_reason.
<p></p>
<i>Example:</i><br/>
<code>Control.suspend("my_job")</code> <p></p>
<b>unsuspend</b> is also a method on a job.<br/>
<i>Example:</i><br/>
<code title="unEVALable code fragment"> Job.my_job.unsuspend()</code>.<br/>
This causes the job to resume from a suspension. You can call it
from any JavaScript code such as in a function that's a do_list item.
The method takes 1 arg, "stop_reason" that behaves as documented above.
</details>


<details id="Control.sync_point_doc_id" class="doc_details"><summary>sync_point</summary>
  A sync_point instruction causes all running jobs with the same-named sync_point
  to pause until they all reach the sync_point. Once that happens, they
  are all allowed to proceed executing their instructions.<br/>
  <i>Parameters</i><br/>
  <b>name</b> The name of the sync point. Must be identical with other sync points
              that you expect to be in-sync. There should only be one sync_point
              with a given name in a job.<br/>
  <b>job_names</b> An array of job names containing same_named sync points that
    you want to all pause at the same place. A sync_point instruction may
    contain the name of the job its in. Effectly that doesn't matter,
    but does allow all the same-named sync points to have the same list of job_names.<br/>
    Example: <code>Control.sync_point("midway", ["job_one", "job_two"])</code><br/>
   <p></p>
   If a sync point instruction has no job names, or only its own job name,
   it will not wait but rather breeze right through its sync_point.
   <p></p>
   By having different job_names, you can configure a sync_point in one job
   to wait for the other job's sync point to be reached, yet <i>not</i> have
   the other job wait for the first job. Any combination of such lop-sided
   waits can be set up amongst jobs with same-named sync_points for
   a lot of flexibility. This can increase the overall speed of a cooperating
   robot group over merely "all pause at each same-named sync_points" 
   because it allows those jobs that <i>can</i> proceed to do so.
</details>

<details id="Control.send_to_job_doc_id" class="doc_details"><summary>send_to_job</summary>
<code>Control.send_to_job</code> inserts instructions into another job's do_list. It can also
start, unsuspend and grab data from another job. <code>Control.send_to_job</code> is complex, powerful,
and rarely used. Example: <pre>
Control.send_to_job({do_list_item: Dexter.move_to([0, 0.5, 0.075]),
                   where_to_insert: "end",
                   unsuspend: true,
                   wait_until_done: true})</pre>
<i>Parameters:</i><ul>
<li><b>do_list_item</b> An instruction or array of instructions to insert into the to_job.</li>
<li><b>where_to_insert</b> The location in the do_list of the to_job to insert the do_list_item.
  The full list of instruction_locations for <code title="unEVALable code fragment"> where_to_insert</code>
  can be seen in the documentation for the
  <a href="#" onclick="DocCode.open_doc('Control.go_to_doc_id', event)">Control.go_to</a> instruction.
  Particularly useful ones for send_to_job are:<br/>
  <ul><li><code>{job: "other_job", offset: "next_top_level"}</code> Inserts the do_list_item
  after the program_counter and just before the next original (top level) do_list item
  in the referenced job.
  If a function do_list item in to_job returns an array of instructions,
  this ensures that the inserted do_list_item will not go in the middle of such instructions.
  Thus if the instructions from the function must be executed as a continuous group, 
  "next_top_level" is a safe place to insert additional do_list items.</li>
    <li><code>"after_program_counter"</code> Immediately after the destination job's program_counter.
    Not as safe as "next_top_level".</li>
    <li><code>"end"</code> At the very end of the do_list. With no job designator,
    this will extend the current job's do_list by one new instruction on the end.</li>
    </ul>
</li>
 <li><b>wait_until_done</b> (default false) If true, the from_job will wait until the to_job
    executes its newly inserted instructions.</li> 
 <li><b>start</b> (default false) If true, and the to_job has yet to be started,
    it will be started after the do_list_item is inserted into its do_list.
    <p></p>
    If a job has yet to be started and you send instructions to it, those
    instructions will be stored in a special place until the job is started.
    During the start process, after the do_list is made but before the
    initial_instruction (if any) is prepended to the do_list,
    the sent instructions will be inserted into the do_list at
    the location specified in 'where_to_insert'. These instructions will
    be used for that initial running of the job only. Even if the job is running
    at the time its sent instructions, they will only run in that running of the job.
    They will not be present if you restart the job. Restarating the job uses
    the do_list defined for the job only.
 </li>
 <li><b>unsuspend</b> (default false) If true, and the to_job is suspended,
     the to_job will be unsuspended after the do_list_item is inserted into its do_list.</li> 
 <li><b>status_variable_name</b> The name of a field placed in the user_data of the from_job.
     It is initialized to <code>"sent"</code>. When the inserted do_list_item has been executed,
     this field is set to <code>"done"</code>. </li> 
  <li><b>other variable names</b> If a parameter to send_to_job is not one of the above,
    it is assumed to be the name of a field to create in the user_data of the to_job.
    "Other variable names" have a value of a function. After the do_list_item is executed,
    the function for each of the other varible names is called within the to_job and
    the returned value is set to its corresponding other variable name in the 
    user_data of the from_job. This allows the from_job to get data from the to_job
    immediately after the do_list_item is run. </li>
 </ul>
 To achieve the same effect of send_to_job, see documention on the method
    <code>Job.insert_instruction</code>.
</details> <!-- end send_to_job -->

<!-- obsoleted by initial_instruction and insert_instruction <details id="Control.sent_from_job_doc_id" class="doc_details"><summary>sent_from_job</summary>
This instruction is typically not created by users directly. send_to_job creates
such an instruction and places it on the to_job as a container for the newly inserted
instructions. However, if you want to extend the do_list of a job when starting it,
you can pass an instance of <code>sent_from_job</code> as an option
of start. This will insert the new instruction(s) just before the job is started.
Example:<pre>Job.j8.start({sent_from_job: Control.sent_from_job(
          {do_list_item: function(){out("special insert")},
           where_to_insert: "sp1"})})
</pre>
<b>do_list_item</b> can be a single instruction or an array of instructions.<br/>
<b>where_to_insert</b> See doc for send_to_job<br/>
The inserted instructions will not be present if, after running the job,
you call start with no argument.
</details> --> <!-- end sent_from_job -->

<details id="Control.wait_until_doc_id" class="doc_details"><summary>wait_until</summary>
This instruction causes a job to pause until the supplied condition is met.<br/>
Example:<code>Control.wait_until(2)</code><br/>
<i>Parameter:</i><br/>
<b>fn_date_dur</b> Default: <code>1</code> This argument can be one of:
<ul><li><b>an integer</b> The number of seconds for the wait. </li>
    <li><b>a Duration instance</b> The amount of time for the wait. </li>
    <li><b>a Date instance</b> Causes a wait until the JavaScript date occurs.
         Careful, you can easily cause a job to wait for years!</li>
    <li><b>a function</b> The function is called at each do_loop iteration.
          The function's return value is used in a JavaScript <code title="unEVALable code fragment"> if</code> statement.
          false, undefined, null, 0, NaN, or the empty string ("") are considered to be false.
          Anything else is considered to be true and the wait will be over.
          The function is called with a <code>this</code> of the current job,
          so you can access the entire job's state when determining whether
          or not to return <code>true</code>.
    </li>
    <li><b>a Job Instance</b> Waits until the passed in Job instance completes.
          If the passed in Job Instance, errors or is interrupted then
         then this job also errors or is interrupted.
    </li>
    <li><b>"new_instruction"</b> Causes a wait_until instruction to be added
    just below this instruction on the do_list. If this is the last instruction
    on the do_list, then this job waits until a new instruction is added on the
    end of a do list.<br/>
    <i>Example</i>:<pre><code title="unstartable in TestSuite"> new Job({name: "my_job",
         do_list: [IO.out("first instruction"),
                   Control.wait_until("new_instruction")]})
    </code></pre>
        Evaling <code title="unEVALable code fragment"> Job.my_job.start()</code><br/>
        causes "first instruction" to be printed out, then the
        job pauses until an instruction is inserted into the do_list right after this "wait_until" instruction.<pre>
<code title="unEVALable code fragment"> Job.insert_instruction(IO.out("the end"),
                       {job: "my_job",
                        offset: "after_program_counter"})</code></pre>
        Causes wait_until to stop waiting, "the end" is printed and the job completes successfully.<br/>
        If instead of that argument to <code>Job.insert_instruction</code>, we had instead used:<pre>
<code title="unEVALable code fragment"> Job.insert_instruction([IO.out("the middle"),
                        Control.wait_until("new_instruction")],
                        {job: "my_job",
                         offset: "after_program_counter"})</code></pre>
        then each time we eval that code, it prints "the middle" and
        <code title="unEVALable code fragment"> Job.my_job</code> pauses again.
        We can end the pause by inserting an instruction after the program counter
        that doesn't contain a wait_until,
        such as our first call to <code>Job.insert_instruction</code> above.
    </li>
    <li><b>instruction_location</b> <i>Only applies to instruction_locations that
         are arrays or literal objects.</i> Waits for the instruction location
         to refer to a program_counter that is less than or equal to
         the program_counter in the job referenced by the instruction_location.
         This instruction waits until a job gets to a certain instruction.
         This performs like a one_sided <code>Control.sync_point</code> instruction
         where the job this instruction is in will wait for the job
         specified in the instruction_location, but not the other way around.
         Its advantage over <code>Control.sync_point</code> is that you don't have
         to have a Control.sync_point instruction in the job you're waiting for.
         Thus you can wait for a job reaching one of its instructions
         that never expected it to be waited for.<br/>
         Warning: If the instruction_location specifies the job
         that this <code>Control.wait_until</code> instruction is in, or lets the instruction_location
         default to that, this job could wait for itself and thus forever.</li>

</ul>
</details> <!-- end wait_until -->
</details> <!-- end Control -->
<details class="doc_details"><summary>IO</summary>
    IO instructions can be used in any Job, regardless of its default robot.
    <details id="IO.get_page_doc_id" class="doc_details"><summary>get_page</summary>
        Similar to the function <code>get_page</code>, only made into an instruction.
        This instruction gets the content of a url and places it in a given user_data variable
        on the job instance before allowing the next instruction in the do_list to run.<br/>
        Example:<pre><code>new Job({name: "j1",
         do_list: [IO.get_page("http://www.nactem.ac.uk/software/acromine/dictionary.py?sf=BMI"),
                   function(){out("got response of: " +
                                    this.user_data.http_response)}
         ]}) </code></pre>
        <i>Parameters:</i><br/>
        <b>url_or_options</b>: The url whose contents this instruction gets.<br/>
        Instead of a url as the argument, you can pass a literal JS object with lots of options, described at:
        <a target="_blank" href="https://www.npmjs.com/package/request">options</a>
        These include the HTTP methods of: GET (the default), POST, PUT, PATCH, DELETE, HEAD, OPTIONS,
        plus a zillion other options for authentication, etc.
        <p></p>
        <b>response_variable_name</b>: Default: <code>"http_response"</code>. The name
        of the property in the job instance's user_data object to set to the
        content of the url.
        <p></p>
        Using <code>make_url</code> can help make constructing calls to <code>get_page</code> a bit easier.
        Example:<pre><code title="not in TestSuite"> Control.get_page(make_url("www.nactem.ac.uk/software/acromine/dictionary.py",
                         {sf: "BMI"}))</code></pre>
        <code>make_url</code> is documented in the reference manual under "I/O".
    </details> <!-- end get_page -->

    <details id="IO.grab_robot_status_doc_id" class="doc_details"><summary>grab_robot_status</summary>
        robot_status is an array that holds data from the robot, along with aspects of the instruction
        that was sent to the robot to capture that data. This array is the value of the robot
        instance field <code title="unEVALable code fragment"> robot_status</code>. <p></p>
        The instruction: <code>IO.grab_robot_status()</code> provides an easy way to get values out of that array
        and made available for other instructions to use.<br/>
        <i>Parameters</i><br/>
        <b>user_data_variable</b> Default: <code>"grabbed_robot_status"</code> A string of the name of the job's
        <code title="unEVALable code fragment"> user_data</code> variable to shove the grabbed
        robot_status data into. If there is already such a variable,
        its value is over-written. If not, it is created and intialized
        with the new value.
        <p></p>
        After this instruction is run, the grabbed value
        is available globally Job.the_job_name.user_data.the_val_of_this_arg.<br/>
        For instance, if this job is named "my_job" and the value of
        user_data_variable is "my_var" then:
        <code title="unEVALable code fragment"> Job.my_job.user_data.my_var</code>
        But inside another instruction that is defined as a function,
        <code>this</code> will be bound to the current job instance so:
        <code title="unEVALable code fragment"> this.user_data.my_var</code> will access the grabbed data.<br/>

        <b>start_index</b> A non-negative integer signifying the
        first data item to extract from the robot_status array.
        Its default value is the value of <code>Serial.DATA0</code>
        Another normal value would be <code>Dexter.J1_ANGLE</code>
        See below for a comprehensive list.
        <br/>
        <i>Special values:</i><br/>
        <code>"all"</code> The entire 60 element robot_status
        array is used. The value of end_index is ignored.<br/>
        <code>"data_array"</code> The part of the robot_status array after
        the header information is used. For Serial robots, this will be just
        the data returned by the serial port. For Dexter robots, this
        will be the data about Dexter's joint angles, etc.
        The value of end_index is ignored.<br/>
        <b>end_index</b> A non-negative integer signifying the last element of the
        robot_status array to extract. The default value is <code>null</code>.
        If this value is null or not passed, only the data at the start_index
        is used. The value stored in the user_data variable will NOT be an array,
        just that one element.<br/>
        <i>Special value</i> <code>"end"</code> The portion of the robot_status
        from start_index through the end of the robot_status array is extracted.
        <p></p>
        If both the start_index and end_index are not passed,
        then the value will be: For a Serial robot, the first "item"
        returned from the serial port in response to a send.
        For Dexter, it will be DMA_READ_DATA.
        <p></p>
        You can use some constants for the values of start_index and end_index.<br/>
        For a Dexter robot in "g0" status_mode, these are: <br/>
        <code>Dexter.JOB_ID</code><br/>
        <code>Dexter.INSTRUCTION_ID</code><br/>
        <code>Dexter.START_TIME</code> //ms since jan 1, 1970 from Dexter's clock<br/>
        <code>Dexter.STOP_TIME</code><br/>
        <code>Dexter.INSTRUCTION_TYPE</code> //a letter signifying the instruction type.<br/>
        <br/>
        <code>Dexter.ERROR_CODE</code> //0 means no error.<br/>
        <code>Dexter.STATUS_MODE</code> //0 for g0. In general, a small non-negative interger. The kind of data that's in the robot_status array.<br/>
        <code>Dexter.END_EFFECTOR_IO_IN</code><br/>
        <br/>
        <code>Dexter.J6_MEASURED_ANGLE</code><br/>
        <code>Dexter.J6_MEASURED_TORQUE</code><br/>
        <code>Dexter.J7_MEASURED_ANGLE</code><br/>
        <code>Dexter.J7_MEASURED_TORQUE</code><br/>
        and, for J1 through J5,
        <br/>
        <code>Dexter.J1_ANGLE</code><br/>
        <code>Dexter.J1_DELTA</code><br/>
        <code>Dexter.J1_PID_DELTA</code><br/>
        <code>Dexter.J1_A2D_SIN</code><br/>
        <code>Dexter.J1_A2D_COS</code><br/>
        <code>Dexter.J1_MEASURED_ANGLE</code><br/>
        <code>Dexter.J1_SENT</code><br/>

        <p></p>
        For a Serial robot these are:<br/>
        <code>Serial.JOB_ID</code><br/>
        <code>Serial.INSTRUCTION_ID</code><br/>
        <code>Serial.START_TIME</code>          // ms since jan 1, 1970 from Dexter's clock<br/>
        <code>Serial.STOP_TIME</code>          // ms since jan 1, 1970 from Dexter's clock<br/>
        <code>Serial.INSTRUCTION_TYPE</code>   // A letter indicating the instruction type<br/>

        <code>Serial.ERROR_CODE</code>          // means no error.<br/>
        <code>Serial.DATA0</code>               // data coming back from the board<br/>
        <code>Serial.DATA1</code><br/>
        <code>Serial.DATA2</code><br/>
        <code>Serial.DATA3</code><br/>
        <code>Serial.DATA4</code><br/>
        <code>Serial.DATA5</code><br/>
        <code>Serial.DATA6</code><br/>
        <code>Serial.DATA7</code><br/>
        <code>Serial.DATA8</code><br/>
        <code>Serial.DATA9</code><br/>
        <br/>

        In order to insure that the Dexter robot_status array is up to date,
        you should place <code>Dexter.get_robot_status()</code> in your do_list before
        the grab_robot_status instruction.<br/>
        <i>Examples of 2 adjacent instructions on a job's do_list:</i><br/>

        <code>Dexter.get_robot_status()</code><br/>
        <code>IO.grab_robot_status("my_zero_data", Serial.DATA0) </code><br/>
        grab_robot_status can be called with a subject of a job instance in place
        of <code>Robot</code> like so:<br/>
        <code> Robot.dexter0.grab_robot_status("my_user_data_var")</code>
        <p></p>
        See Jobs menu/Insert Example/Serial Port for an extended example.
    </details> <!-- end grab_robot_status -->

    <details id="IO.out_doc_id" class="doc_details"><summary>out</summary>
        Very similar to the function <code>out</code> but made for use as a robot instruction.
        Prints a message to the Output pane in the color of your choice.
        This is the "print statement" as an instruction, so useful in debugging.<p></p>
        <i>Example:</i><br/>
        <code>IO.out("hey " + 345, "green")</code><p></p>
        <i>Parameters:</i><br/>
        <b>val</b> Any JavaScript data. Most commonly this is a string, but
        can be a number, an array etc.<br/>
        <b>color</b> A string representing a color. Default "black". Can
        be any string in the <b>color</b> series, or have the format:<br/>
        <code>"rgb(255, 100, 0)"</code>.<br/>
        <b>temp</b> Default: <code>false</code>. With the default, printed output stays in the
        Output pane until DDE is relaunched.<br/>
        If temp is <code>true</code>,
        then <b>val</b> is still printed in the Output pane, but is over-ridden
        by subsequence calls to out with temp == true. Calls to out with temp == false
        will erase any "temp" output.
        <p></p>
        If temp is a string, then out prints <b>val</b> similarly to temp == true in that
        the previous call to out with that temp string will be over-ridden in place.
        However, when another call to out with a different value for temp occurs,
        the output of out with a temp string will <i>not</i> be erased.
        Thus the last call to out with a given temp string remains in the Output pane,
        in its place, regardless of other out calls.
        <p></p>
        <b>print_job_info</b> boolean. Default <code>false</code> .
        If <code>true</code>, prints out the name of the job that this instruction is in,
        the instruction ID,
        and the instruction type (which is always IO.out).
        <p></p>
        Unlike an instruction such as:<br/>
        <code>function(){out("The status is: " + this.status_code)}</code><br/>
        IO.out cannot access its job instance, but it does print out
        its job name and instruction ID right before printing <code title="unEVALable code fragment"> val</code>.
        <p></p>
        See also <a href="#" onclick="DocCode.open_doc(print_statements_doc_id, event)">print statements</a>
    </details> <!--end out -->
    <details id="IO.save_picture_doc_id" class="doc_details"><summary>save_picture</summary>
        This instruction takes the same arguments and has the same functionality as the method
        <a href="#" onclick="DocCode.open_doc('Picture.save_picture_doc_id', event)">Picture.save_picture</a>.<br/>
        <i>Example:</i>
        <pre><code title="not in TestSuite">new Job({name: "my_job8",
         do_list: [IO.take_picture({callback: "the_mat"}),
                   function(){return IO.save_picture({canvas_id_or_mat: this.user_data.the_mat, path: "mypic.png"})}
            ]})
      </code></pre>
      Above, the instruction <code>IO.take_picture</code> stores an open cv value of type mat (for matrix), representing
      the picture taken in <code title="unEVALED">Job.my_job.user_data.the_mat</code>.
      Then the IO.save_picture instruction grabs that value out of
      <code title="unEVALED">Job.my_job.user_data.the_mat</code> and saves it out into the file dde_apps/mypic.png.
      Note that IO.save_picture needs to be wrapped in a function definition because
      we don't want <code title="unEVALED">this.user_data.the_mat</code> to be evaluated
      before the <code>IO.take_picture</code> instruction has completed.
    </details>
    <details id="IO.show_picture_doc_id" class="doc_details"><summary>show_picture</summary>
    This instruction takes the same arguments and has the same functionality as the method
    <a href="#" onclick="DocCode.open_doc('Picture.show_picture_doc_id', event)">Picture.show_picture</a>
    except that it doesn't take a callback argument.<br/>
    <i>Example:</i>
        <pre><code>new Job({name: "my_job",
         do_list: [IO.show_picture()]})
      </code></pre>
    </details>
    <details id="IO.show_video_doc_id" class="doc_details"><summary>show_video</summary>
        This instruction takes the same arguments and has the same functionality as the method
        <a href="#" onclick="DocCode.open_doc('Picture.show_video_doc_id', event)">Picture.show_video</a>
        except that it doesn't take a callback argument.<br/>
        <i>Example:</i>
        <pre><code>new Job({name: "my_job",
     do_list: [IO.show_video()]})
      </code></pre>
    </details>
    <details id="IO.take_picture_doc_id" class="doc_details"><summary>take_picture</summary>
        This instruction takes the same arguments and has similar functionality as the method
        <a href="#" onclick="DocCode.open_doc('Picture.take_picture_doc_id', event)">Picture.take_picture</a>.
        <p></p>
        When the callback is a function definition, as in Picture.take_picture,
        the callback is called with <code>this</code> bound to the job
        that this instruction is running in.<br/>
        If the callback is a string instead of a function definition,
        there is added funtionality from Picture.take_picture_doc_id.
        The string is considered to be the name of
        a user_data variable that is set to the mat created
        with take_picture. You can then use this mat in further instructions.
        <br/>
        <i>Example:</i>
        <pre><code>new Job({name: "my_job",
         do_list: [IO.take_picture({callback: "my_pic"})]})
  </code></pre>
        <code>Job.my_job.user_data.my_pic</code><br/>
        returns the mat.
    </details>
    </details> <!--end IO -->
  <details  class="doc_details"><summary>null, undefined</summary>
  A null or undefined on the do_list does nothing. It is a "no-op".
  You wouldn't explicitly put one of these on a do_list, but you may have a
  function on the do_list that is used for a side-effect. It can have a
  <code title="unEVALable">return null</code> statement in it or no return at all
   (which returns <code>undefined</code>).
  </details>

    </details> <!-- end Robot Instructions -->

<details id="Brain_doc_id" class="doc_details"><summary>Brain</summary>
<b>Brain</b> is a virtual robot used to manage other robots or do purely software tasks.
It has few special instructions of its own, but can use Control, Human, IO and the
miscellaneous Robot instructions (function definitions, etc),
just like all the other robots.
    <details id="Brain.eval_python_doc_id" class="doc_details"><summary>eval_python</summary>
       Evals python code, puts result in user_data and pauses the Job until its done.<br/>
       <i>Parameters:</i><br/>
        <b>python_source</b> Required. A string of Python source code. If it is exactly one
        expression that returns a value, that value will be put in user_data.
        Otherwise, <code>null</code> will be put in user_data.<br/>
        <b>user_data_variable</b> Default: <code>"python_value"</code> A string of the
        name of the user_data variable that will store the value of evaluating the python_source.<br/>
        A user data variable whose prefix is the user_data_variable_name with a suffix of
        <code>"_python_source"</code> is also created with the value of python_source.
        This is set before the source is executed. After starting the Job,
        examining the Job's user_data variables helps debugging.
        <p></p>
        <i>Example:</i>
<pre><code>new Job({
    name: "my_py_job",
    do_list: [
        Brain.eval_python('import math'),
        Brain.eval_python('2 + math.pi', "my_sum"),
        function() {
          let src = this.user_data.my_sum + ' * 4'
          return Brain.eval_python(src, "my_multiply")
        },
        function(){
          return Dexter.move_all_joints(0, this.user_data.my_multiply)
        }
    ]
})    </code></pre>
    <ol>
    <li>The first instruction initializes the Python process,
    imports the math library into the process
    and stores the result into  <code>Job.my_py_job.user_data.python_value</code> => <samp>null</samp>.
    </li>
    <li>The second instruction evaluates <code>'2 + math.pi'</code> and stores the
    result into <code>Job.my_py_job.user_data.my_sum</code> => <samp>5.141592653589793</samp>.
    </li>
    <li>The third instruction must be a function because we must get the
    value from <code>Job.my_py_job.user_data.my_sum</code> after it has been computed,
    not at Job definition time. We make the value of src, <code>"5.141592653589793 * 4"</code>,
    then use it in our next instruction,
    <code title="unEVALable">Brain.eval_python(src, "my_multiply")</code>.
    We must return the result of calling <code>Brain.eval_python</code> because it returns
    instructions to stick on the do_list. The src is evaluated in Python
    and stored in <code>Job.my_py_job.user_data.my_multiply</code> => <samp>20.566370614359172</samp>.
    </li>
    <li>The last instruction uses <code>Job.my_py_job.user_data.my_multiply</code> to move
    joint 2 of Dexter.
    </li>
    </ol>
    Eval: <code>inspect(Job.my_py_job.user_data)</code> to see the stored state.
    <p></p>
    See <a href="#" onclick="DocCode.open_doc(python_doc_id)">Python</a> for details on
    controlling Python processes.
    </details>
</details> <!-- End Brain -->

<details id="Dexter_doc_id" class="doc_details"><summary>Dexter</summary>
Dexter can perform instructions that command it to move. After it does
an instruction, it sends back information from its sensors confirming where it has moved
and additional data. This data can be used in subsequent instructions to both verify
Dexter's position as well as respond to forces on the arm and other sensor data.
<p></p>
An instance of Dexter is created like so:
<pre><code title="not in TestSuite"> new Dexter({name: "my_dex",
             simulate: true
           })</code></pre>
<p></p>
<!--Multiple jobs may use a given robot instance as their robot. It is up to the programmer
to make sure such jobs don't screw each other up. You may not have more than one
active robot with the same name or ip_address.-->
It is recommended that each job have their own robot.
<p></p>
The default robot is <code>Robot.dexter0</code>. This is created in your dde_apps/dde_init.js file.
Set dexter0's <code title="unEVALable code fragment"> ip_address</code> and
<code title="unEVALable code fragment"> port</code> in that file.
We recommend allowing dexter0's simulate param to default to <code>null</code> so that
it can take advantage of the Misc pane header's  simulate radio buttons.
<p></p>
If you are using DDE to control zero or one Dexter, just use dexter0. No need
to create your own Robot instance.

<details id="new_dexter_parameters_doc_id" class="doc_details"><summary>new Dexter parameters</summary>
The parameters used to define an instance of Dexter are:
<ul>
    <li id="dexter_param_name_doc_id"><b>name</b> Any string, but must be unique across all robots.
    The instance of the robot is stored in
    <code title="unEVALable code fragment"> Robot.the_name</code></li>
    <li id="dexter_param_simulate_doc_id"><b>simulate</b> Possible values:
         <ul>
             <li><b>true</b> Instructions will not be sent to the Dexter robot but rather
               to DDE's Dexter simulator, showing an image of Dexter in DDE's "Sim" pane.</li>
             <li> <b>false</b> Instructions will only be sent to the ip_address and port
                  designated for a Dexter. </li>
             <li><b>"both"</b> Instructions will be sent to both Dexter and DDE's simulator.
                 Note DDE's simulation might not be perfectly in sync with the position
                 of the actual robot.</li>
             <li><b>null</b> (the default). The value for simulate will be taken from
                 the Misc pane header's simulate radio buttons. The value you choose
                 will be persistent accross DDE launches.</li>
          </ul>
    </li>
    <li id="dexter_param_ip_address_doc_id"><b>ip_address</b> A string of an ip_address such as: <code>"192.168.1.1"</code>
        Default null. You can use a Dexter without an ip_address, but only with
        <code title="unEVALable code fragment"> simulate: true</code></li>
    <li id="dexter_param_port_doc_id"><b>port</b> An integer. Default 50000. </li>
    <li id="dexter_param_pose_doc_id"><b>pose</b> Indicates the position and orientation of a Dexter as a
        4 x 4 matrix of numbers.
     </li>
    <li id="dexter_param_enable_heartbeat_doc_id"><b>enable_heartbeat</b> A Dexter instance sends a "heartbeat" to a Dexter robot to
      keep the connection alive. If true, the default, that heartbeat will be sent.</li>
    <li id="dexter_param_is_calibrated_doc_id"><b>is_calibrated</b> Default: <code>null</code>
       means that it is not known if the robot is calibrated.<br/>
       <code>true</code> means that the robot IS calibrated.<br/>
       <code>false</code> means that the robot is NOT calibrated.<br/>
    </li>
</ul>
     <i>Example:</i>
    <pre><code title="not in TestSuite"> new Dexter({name: "my_dex",
            simulate: true,
            ip_address: "192.186.1.142",
            port: 50000 //the default
           })</code></pre>
</details> <!-- end new Dexter parameters -->

<details class="doc_details"><summary>Dexter Instructions</summary>
All of the Dexter instructions can take a Dexter instance i.e. <code>Robot.dexter0</code>
as a subject to the call. That will direct the instruction to that Dexter.
The subject in an instruction call can also be the Dexter class, i.e. <code>Dexter</code>
in which case the instruction will go to the robot of the job. This is the
normal case.<br/>
This makes it easy for one job to control multiple robots and for
one job to just use one <i>default</i> robot as is most common.<br/>
<i>Examples</i> of instructions in a Job's do_list:
<pre><code>
  Dexter.move_all_joints([30, 40])
  Robot.dexter0.move_all_joints([30, 40])
</code></pre>

<details id="data_array_doc_id" class="doc_details"><summary>Data Array</summary>
Do_lists for Jobs with a Dexter Robot can be of 4 different kinds.
<ol>
<li><b>oplet array</b> An array containing a prefix of meta-information, an oplet,
and arguments for that oplet.
</li>
<li><b>empty array</b> An array containing potentially other arrays of any nested depth,
but with no "leaf" values. Such arrays are "no-ops" meaning they are just thrown out.
Sometimes they are accidently automatically generated by filtering code that
filters out all useful instructions. Throwing out empty arrays simplifies
writing functions that create instructions arrays.
</li>
<li><b>instructions array</b> An array of instructions nested to any depth.
Such arrays are usually "automatically flattened" before their leaf instructions
are added to the do_list.
</li>
<li><b>data array</b> An array that is not one of the above types.
The "running" of a data array instruction consists of its elements
being passed as arguments to their Job's <i>data_array_transformer</i> function.
Whatever this function returns is put on the do_list.
It may return null or an empty array, thus "filtering out" that
data array instruction.
<p></p>
A data_array_transformer may also be an oplet, in which case
that oplet and the elements of the data array are passed to
<a href="#" onclick="DocCode.open_doc(make_ins_doc_id, event)">make_ins</a>,
whose return value is placed on the do_list.
The default data_array_transformer is <code>"P"</code>,
creating effectively a pid_move_all_joints instruction.
</li>
</ol>
<i>Example:</i><br/>
<pre><code>
new Job({name: "my_t_job",
         data_array_transformer: "a",
         do_list: [
                    [0, 0, 0, 0, 0],
                    [10, 20, 30, 40, 50]
                  ]})
    </code></pre>
This Job has an effective do_list of:<br/>
<code>[Dexter.move_all_joints(0, 0, 0, 0, 0),
 Dexter.move_all_joints(10, 20, 30, 40, 50)]
</code><br/>
because <code>"a"</code> is the oplet for Dexter.move_all_joints.
</details>

<details id="Dexter_instruction_string_doc_id" class="doc_details"><summary>Instruction String</summary>
A string on the do_list is interpreted as a string to be sent to Dexter.
The first character of the string should be a Dexter "oplet", such as
"a" for Dexter.move_all_joints, or "P" for Dexter.pid_move_all_joints.
Following that should be a space, and the arguments to that oplet,
separated by a space.
The string should end in a semicolon.
<p></p>
Before the string is sent to Dexter, it is given a prefix of values for:<br/>
<code title="unEVALable">job_id instruction_id start_time stop_time </code>.<br/>
Example of the whole string sent to Dexter for move_all_joints functionality:<br/>
<samp>1 37 1554079143946 undefined a 0 36000 72000;</samp>
If the original string supplied in the do_list does not end in a semicolon, it is given one
before being sent to Dexter.
<p></p>
Note that this is similar to a
<a href="#" onclick="DocCode.open_doc(make_ins_doc_id, event)">make_ins</a> instruction,
except that the arguments are not converted, but passed as indicated in the string.
</details>

<details id="Dexter.calibrate_build_tables_doc_id" class="doc_details"><summary>calibrate_build_tables</summary>
This instruction sets lots of parameters on Dexter and causes it to move twice,
which calibrates the optical encoders of each joint.
Unlike the Jobs menu/Calibrate Dexter, no user interface is required.
When this instruction is complete, it sets the
Dexter's <i>is_calibrated</i> property to <code>true</code>.<br/>
<i>Parameters:</i> passed by keyword: <br/>
<b>J_move_max</b> Default: <code>[180, 100, 165, 110, 180]</code>
    The maximum angles in degrees that Dexter will move to
    during calibration<br/>
<b>J_move_min</b> Default:<code>[-180, -100, -165, -110, -180]</code>
    The minimum angles in degrees that Dexter will move to
    during calibration<br/>
<b>inner_factor</b> Default:<code>1</code>
    <br/>
<b>outer_factor</b> Default:<code>1.1</code>
    <br/>
<b>diff_beta</b> Default:<code>5</code>
    <br/>
<b>ixyz_beta</b> Default:<code>5</code>
    <br/>
<b>move_speed</b> Default:<code>35</code>
    <br/>
<b>cal_speed</b> Default:<code>30</code>
<p></p>
<i>Examples:</i><br/>
Calibrate the default Dexter of the job its in:<br/>
<code>Dexter.calibrate_build_tables({outer_factor: 1.2})</code>
<p></p>
Calibrate a particular Dexter:<br/>
<code>Dexter.dexter0.calibrate_build_tables()</code><br/>
See also: <a href="#" onclick="DocCode.open_doc(calibrate_dexter_doc_id, event)">Calibrate Dexter</a>
</details>

<details id="Dexter.draw_dxf_doc_id" class="doc_details"><summary>draw_dxf</summary>
    <code>Dexter.draw_dxf</code> accepts the name of a file as input along with other information,
    and returns instructions (which will automatically be placed on the job's do_list)
    to move Dexter to "draw the lines" indicated by the dxf file.<br/>
    <i>Parameters:</i>
    The arguments to this instruction are the same as those documented for
    DXF.init_drawing documented in
    <a href="#" onclick="DocCode.open_doc('drawing_with_DXF_doc_id', event)">Drawing with DXF</a><br/>
    <i>except that</i> the init_drawing arguments of
    <ul><li>three_points</li>
        <li>plane_normal_guess</li>
        <li>calc_plane_normal</li>
    </ul>
    are replaced by one argument: three_J_angles, that defines the drawing surface.
    Its default value is:<br/>
    <code>[[0, 30, 90, -30, 0], [0, 45, 90, -45, 0], [15, 45, 90, -45, 0]]</code>
    <p></p>
    <i>Examples:</i>
<pre><code title="unstartable in TestSuite">new Job({name: "Draw",
    show_instructions: false, //speeds drawing of many tiny lines
    do_list: [Dexter.draw_dxf]})
    </code></pre>
    This uses all the defaults. When the first instruction is run, it
    pops up a choose file dialog to ask for the dxf file you want to draw.
    <p></p>
    You may CALL this function at Job definition time like so:<br/>
    <pre><code title="unEVALable">new Job({name: "Draw",
    do_list: [Dexter.draw_dxf({dxf_filepath: "foo.dxf"})]})
    </code></pre>
    or call it at run instruction time like so:
    <pre><code title="unstartable in TestSuite">new Job({name: "Draw",
    do_list: [function(){ Dexter.draw_dxf({dxf_filepath: "foo.dxf"})} ]})
    </code></pre>
    with as many args as you like.

</details> <!-- end draw_dxf -->

<details id="Dexter.empty_instruction_queue_doc_id" class="doc_details"><summary>empty_instruction_queue</summary>
<i>Parameters:</i> None.<br/>
A Dexter robot has an <i>instruction queue</i> which contains instructions that have been sent from
DDE but not yet executed. As soon as Dexter receives an instruction from DDE, it typically acknowledges receipt
to DDE,
which causes DDE to send the next instruction in the Job's do_list.
A <code>Dexter.empty_instruction_queue</code> instruction changes that behavior and causes all the instructions in the
queue to be executed before DDE attempts to run another instruction on the do_list.
</details> <!-- end empty_instruction_queue -->

<details id="Dexter.empty_instruction_queue_immediately_doc_id" class="doc_details"><summary>empty_instruction_queue_immediately</summary>
<i>Parameters:</i> None.<br/>
A Dexter robot has an <i>instruction queue</i> which contains instructions that have been sent from
DDE but not yet executed. As soon as Dexter receives an instruction from DDE, it typically acknowledges receipt
to DDE,
which causes DDE to send the next instruction in the Job's do_list.
An <code>Dexter.empty_instruction_queue_immediately</code> instruction removes all the
instructions from the instruction queue
without executing them. It then informs DDE to send the next instruction.
This is an unusual instruction as it implies that the instructions sent to Dexter were in error.
You might want to do this in an emergency situation or if the environment unexpectedly changes.
</details>

<details id="Dexter.get_robot_status_doc_id" class="doc_details"><summary>get_robot_status</summary>
    Retrieves lots of information from Dexter. This is placed in an array of 60 items (most are numbers)
    that becomes the value of
    the job's robot's <code title="unEVALable code fragment"> robot_status</code> field, and, if the job's
    <code title="unEVALable code fragment"> keep_history</code> is true, gets pushed onto the
    job's <code title="unEVALable code fragment"> rs_history</code> array.
    <p/>
    When any an instruction is sent to Dexter, Dexter immediately returns a robot status array.
    Dexter can return several different kinds of status modes, each represented by a small
    non-negative integer. The kind of status mode that
    is sent back from Dexter is the kind passed in as the argument to get_robot_status or
    its lower level oplet "g" instructions. A given get_robot_status  mode sent to Dexter remains
    in effect until over-ridden by the next get_robot_status instruction.
<i>Paramenter:</i> <br/>
<b>status_mode</b> Default: <code>0</code><br/>
    <code>null</code> Same as passing in 0.<br/>
    <code>0</code> The original status array returned by Dexter. Dexter boots up
                   with a value of 0 here. All Jobs start off with a status_mode of 0.<br/>
    <code>1</code> Another status mode that returns measured angles, torques and velocities
                   of Dexter's joints.
<p></p>
<i>Examples</i>:
<code>Dexter.get_robot_status()</code>  //how the source for this instruction should look on a job's do list.<br/>
<code title="unEVALable code fragment"> Job.j1.robot.robot_status</code>  //getting the whole status array after the above instruction is run.<br/>
<code title="unEVALable code fragment"> Job.j1.robot.rs.measured_angles()</code> //returns an array of joint angles in degrees.
<p></p>
See also the instruction: <code>IO.grab_robot_status</code>
</details>

<details id="make_ins_doc_id" class="doc_details"><summary>make_ins</summary>
    Normally you should make instructions for Dexter using one of the high level method calls,
    ie <code>Dexter.move_all_joints</code>. However, we provide the function <code>make_ins</code>,
    useful in some low level situations. The first argument is the instruction type, (nickname: "oplet")
    a single letter string such as "a". The remaining arguments are whatever that instruction type
    accepts. Example:<br/>
    <code>make_ins("a", 10, 20, 30, 40, 50)</code> =>
    <samp>[undefined, undefined, undefined, undefined, "a", 10, 20, 30, 40, 50]</samp>
    creates an instruction that moves the 5 joints
    by 10, through 50 degrees respectively.
    If you have the arguments in an array, you can use this syntax:<br/>
    <code title="unEVALable code fragment"> make_ins("a", ...my_array)</code>
    <p></p>
    Note that for make_ins calls with an "a" first argument, they must pass
    at least 5 other numbers for joint angles.
    <p></p>
    If the last argument passed in a make_ins call is a Dexter robot instance,
    the instruction will be sent to that Dexter.
    <p></p>
    The returned value is an array that has its first several fields empty. DDE uses them
    for storing the job_id, instruction_id and some timing information.
    <p></p>
    The make_ins "w" command writes a register in the FPGA. Following the
    "w" is an address and a value. <br/>
    <i>Example:</i><br/>
    <code>make_ins("w", FPGA.ACCELERATION_MAXSPEED, 12)</code><br/>
    There are 82 such addresses or "registers".
    You can use integers 0 through 81 to indicate the address, or the following
    constants:
    <details id="fpga_addresses_doc_id" class="doc_details"><summary>FPGA addresses</summary>
    <pre><code>
    FPGA.BASE_POSITION = 0
    FPGA.END_POSITION = 1
    FPGA.PIVOT_POSITION = 2
    FPGA.ANGLE_POSITION = 3
    FPGA.ROT_POSITION = 4
    FPGA.ACCELERATION_MAXSPEED = 5
    FPGA.BASE_SIN_CENTER = 6
    FPGA.BASE_COS_CENTER = 7
    FPGA.END_SIN_CENTER = 8
    FPGA.END_COS_CENTER = 9
    FPGA.PIVOT_SIN_CENTER = 10
    FPGA.PIVOT_COS_CENTER = 11
    FPGA.ANGLE_SIN_CENTER = 12
    FPGA.ANGLE_COS_CENTER = 13
    FPGA.ROT_SIN_CENTER = 14
    FPGA.ROT_COS_CENTER = 15
    FPGA.PID_DELTATNOT = 16
    FPGA.PID_DELTAT = 17
    FPGA.PID_D = 18
    FPGA.PID_I = 19
    FPGA.PID_P = 20
    FPGA.PID_ADDRESS = 21
    FPGA.BOUNDRY_BASE = 22
    FPGA.BOUNDRY_END = 23
    FPGA.BOUNDRY_PIVOT = 24
    FPGA.BOUNDRY_ANGLE = 25
    FPGA.BOUNDRY_ROT = 26
    FPGA.SPEED_FACTORA = 27
    FPGA.SPEED_FACTORB = 28
    FPGA.FRICTION_BASE = 29
    FPGA.FRICTION_END = 30
    FPGA.FRICTION_PIVOT = 31
    FPGA.FRICTION_ANGLE = 32
    FPGA.FRICTION_ROT = 33
    FPGA.MOVE_TRHESHOLD = 34
    FPGA.F_FACTOR = 35
    FPGA.MAX_ERROR = 36
    FPGA.FORCE_BIAS_BASE = 37
    FPGA.FORCE_BIAS_END = 38
    FPGA.FORCE_BIAS_PIVOT = 39
    FPGA.FORCE_BIAS_ANGLE = 40
    FPGA.FORCE_BIAS_ROT = 41
    FPGA.COMMAND_REG = 42
    FPGA.DMA_CONTROL = 43
    FPGA.DMA_WRITE_DATA = 44
    FPGA.DMA_WRITE_PARAMS = 45
    FPGA.DMA_WRITE_ADDRESS = 46
    FPGA.DMA_READ_PARAMS = 47
    FPGA.DMA_READ_ADDRESS = 48
    FPGA.REC_PLAY_CMD = 49
    FPGA.REC_PLAY_TIMEBASE = 50
    FPGA.MAXSPEED_XYZ = 51
    FPGA.DIFF_FORCE_BETA = 52
    FPGA.DIFF_FORCE_MOVE_THRESHOLD = 53
    FPGA.DIFF_FORCE_MAX_SPEED = 54
    FPGA.DIFF_FORCE_SPEED_FACTOR_ANGLE = 55
    FPGA.DIFF_FORCE_SPEED_FACTOR_ROT = 56
    FPGA.DIFF_FORCE_ANGLE_COMPENSATE = 57
    FPGA.FINE_ADJUST_BASE = 58
    FPGA.FINE_ADJUST_END = 59
    FPGA.FINE_ADJUST_PIVOT = 60
    FPGA.FINE_ADJUST_ANGLE = 61
    FPGA.FINE_ADJUST_ROT = 62
    FPGA.RECORD_LENGTH = 63
    FPGA.END_EFFECTOR_IO = 64
    FPGA.SERVO_SETPOINT_A = 65
    FPGA.SERVO_SETPOINT_B = 66
    FPGA.BASE_FORCE_DECAY = 67
    FPGA.END_FORCE_DECAY = 68
    FPGA.PIVOT_FORCE_DECAY = 69
    FPGA.ANGLE_FORCE_DECAY = 70
    FPGA.ROTATE_FORCE_DECAY = 71
    FPGA.PID_SCHEDULE_INDEX = 72
    FPGA.GRIPPER_MOTOR_CONTROL = 73
    FPGA.GRIPPER_MOTOR_OFF_WIDTH = 74
    FPGA.GRIPPER_MOTOR_ON_WIDTH = 75
    FPGA.START_SPEED = 76
    FPGA.ANGLE_END_RATIO = 77
    FPGA.RESET_PID_AND_FLUSH_QUEUE = 78
    FPGA.XYZ_FORCE_TIMEBASE = 79
    FPGA.DIFFERENTIAL_FORCE_TIMEBASE = 80
    FPGA.PID_TIMEBASE = 81 </code></pre>
    <a target='_blank' href="https://github.com/HaddingtonDynamics/Dexter/wiki/oplet-write">
        The latest on FPGA addresses</a>
    </details>

</details> <!-- end make_ins -->

<details id="Dexter.move_all_joints_doc_id" class="doc_details"><summary>move_all_joints</summary>
move_all_joints is a lower level instruction than move_to, giving you the ability to dicate
the angle of each of Dexter's 5 main joints, J1 through J5
as well as the two "end effector" joints J6 and J7. A joint's angle is specified in degrees.
The min and max angles of each joint are in constants: <br/>
    <code>Dexter.J1_ANGLE_MIN</code> and
    <code>Dexter.J1_ANGLE_MAX</code><br/>
through <code>Dexter.J5_ANGLE_MIN</code>
and     <code>Dexter.J5_ANGLE_MAX</code>,<br/>
all included in the series <b>Dexter_constant</b>.
<i>Examples:</i><br/>
<code>Dexter.move_all_joints([15, NaN, 30])</code><br/>
You can pass in an array of up to 7 long, each indicating the
degrees you want the corresponding joint to move to.<br/>
<code>NaN</code> or the lack of enough numbers means keep the angle for that joint what the
last instruction run in a Job set it to.
<p></p>
If a joint angle is passed in as an array of one number, that number will
be used as the "relative" degrees to add to the current joint angle.
So for instance, if the previous move_all_joints instruction
for j1 indicated <code>30</code>,
and the next move_all_joints command for j1 indicated <code>[5]</code>, then
j1 would be moved to 35 degrees. The syntax of using a number wrapped in an array
can be used for any joint of any move joints instruction.
It can also be used for the x, y, and z positions of any move_to instruction.
<p></p>
<b id="dexter_positive_joint_direction_diagrams_id">Dexter Positive Joint Direction Diagrams</b><br/>
<img src="doc/coor_images/Positive_Joint_Directions_J15.PNG" width="304"/><br/>
<img src="doc/coor_images/Positive_Joint_Directions_J234.PNG"/>
</details>

<details id="Dexter.move_all_joints_relative_doc_id" class="doc_details"><summary>move_all_joints_relative</summary>
Similar to <code>Dexter.move_all_joints</code> except that the joint angles
are not used absolutely, but are added to the previous angles
indicated by the last DDE Dexter move instruction.
Note that this "base" that is added to is not literally the output of Dexter's optical sensors
for joint position, but rather where the robot was <i>told</i> to go in its last move instruction
in a Job.
<p></p>
A <code>NaN</code> or missing angle default to 0, meaning
move 0 degrees relative to the last value given for that joint<br/>
<i>Example:</i><br/>
<code>Dexter.move_all_joints_relative([15, 15])</code><br/>
tells the Job's robot to move joints 1 and 2 to
an angle that is 15 degrees <i>more</i> than it is currently at.
Joints 3, 4, 5, 6 and 7 stay the same.
<p></p>
Note that the syntax used for move_all_joints to declare that an
individual joint angle is relavtive (i.e. wrapping it in square brackets) cannot be used for
move_all_joints_relative, as those joint angles are already relative.
</details>

<details id="Dexter.move_home_doc_id" class="doc_details"><summary>move_home</summary>
Moves all joints to 0. J1 is facing forwards, J2, J3, J4 are straight up. J5 
causes Link 5 to be horizontal pointing forwards.<br/>
<i>Example</i> <code>Dexter.move_home()</code>
</details>

<details id="Dexter.move_to_doc_id" class="doc_details"><summary>move_to</summary>
        This instruction commands Dexter to move from where ever it is, to position its
        end effector at the given x, y, z location. "Move to" is complicated by the fact that
        usually there is more than one configuration of Dexter's joints that
        can achieve that position and that Dexter is inherently limited by the
        lengths of its links.<br/>
        <i>Parameters</i><br/>
        <b>xyz</b> tells Dexter to position its end effector to a position.
        An array of 3 numbers, each indicating meters from the position 0, 0, 0
        which is at the center of the base of Dexter, in its surface (think table) plane.
        Imagine yourself as Dexter facing forwards. <br/>
        The <b>X axis</b> is to your left and right
        with left being negative and right being positive.<br/>
        The valid range is from <br/>
        -0.747804 to 0.747804. <br/>
        The <b>Y axis</b> runs from behind you to in front of you with
        negative behind you and positive in front of you.<br/>
        The valid range is from<br/>
         -0.747804 to 0.747804.<br/>
        The <b>Z axis</b> is vertical with the table surface at 0,
        below the surface being negative and above the surface being positive.<br/>
        The valid range is from <br/>
        -0.582704 to 0.912904.
        <p></p> If an x, y, or z argument is wrapped in an array, ie <code>[0.1]</code>
        it means move the robot that number of meters relative to where it was told to
        go in the last move command.
        Note that this argument is required. Position <code>[0, 0, 0]</code>
        is at the vry base of the robot and is invalid because Dexter's end effector
        can't go to this location.
        <p></p>
        The J5_direction parameter also affects reachability.
        <p></p>
        <b>J5_direction</b> indicates the direction you want the end effector to be pointing.
        This is usually an array of 3 numbers (each ranging from -1 to 1)
        that you can think of as indicating a "point" off
        of the end of the end effector. The default is [0, 0, -1] which
        causes the end effector to point straight down.
        <p></p>
        J5_direction can alternatively be an array of two angles (in degrees)
        indicating a direction (pitch and yaw). However it cannot be<br/>
        [90, 90], [-90, 90], [90, -90] or [-90, -90]<br/>
        because they represent singularities. If that's the direction you
        want, use an array of 3 numbers.<br/>
        If J5_direction is null, the current direction of the robot (as set by
        the most recent DDE instruction) is used.
        <p></p>
        OR, J5_direction can also be a Coor object or the pose of a
        Coor object (a 2D array). If this is format is given for
        J5_direction, then the config and workspace_pose arguments
        are ignored.
        <p></p>
        <b id="Dexter.move_to.config_doc_id">config</b> Default: <code>Dexter.RIGHT_UP_OUT</code> For most points within the reachability of Dexter, there are multiple
        ways in which Dexter can get there. config helps you specify your preference
        as to <i>how</i> Dexter configures its joints to get to the indicated x, y, z.
        There are 3 independent boolean values to determining this configuration.
        They are: <ul>
            <li><i>base-rotation</i> <code title="unEVALable code fragment"> LEFT</code> means J1, the base joint has a negative value,
                ie it is to the right of facing front. Looking down from the top at Dexter this would
                mean its rotated counter clockwise. The opposite direction is
                <code title="unEVALable code fragment"> RIGHT</code>
                or clockwise.</li>
            <li><i>J3-position</i> Joint 3 can be thought of as Dexter's elbow. The elbow can be either
                <code title="unEVALable code fragment"> UP</code> i.e. away from the table or
                <code title="unEVALable code fragment"> DOWN</code>, closer to the table./li>
            <li><i>J4 Position</i> Joint 4 can be thought of as Dexter's wrist. It can be pointing either
                <code title="unEVALable code fragment"> IN</code>, towards the base, or
                <code title="unEVALable code fragment"> OUT</code>, away from the base.</li>
        </ul>
        Config is most easily specified using one of 26 constants such as:
        <code>Dexter.LEFT_DOWN_IN</code> or <code>Dexter.RIGHT_UP_OUT</code>. You can omit 1 or 2 of these value as in
        <code>Dexter.LEFT_IN</code> or <code>Dexter.OUT</code>. The complete list is:<br/>
    <code>Dexter.LEFT</code> => <samp>[0, null, null]</samp><br/>
    <code>Dexter.LEFT_DOWN</code> => <samp>[0, 0,    null]</samp><br/>
    <code>Dexter.LEFT_UP</code> => <samp>[0, 1,    null]</samp><br/>
    <code>Dexter.LEFT_IN</code> => <samp>[0, null, 0]</samp><br/>
    <code>Dexter.LEFT_OUT</code> => <samp>[0, null, 1]</samp><br/>
    <code>Dexter.LEFT_DOWN_IN</code> => <samp>[0, 0,    0]</samp><br/>
    <code>Dexter.LEFT_DOWN_OUT</code> => <samp>[0, 0,    1]</samp><br/>
    <code>Dexter.LEFT_UP_IN</code> => <samp>[0, 1,    0]</samp><br/>
    <code>Dexter.LEFT_UP_OUT</code> => <samp>[0, 1,    1]</samp><br/>
<p></p>
    <code>Dexter.RIGHT</code> => <samp>[1, null, null]</samp><br/>
    <code>Dexter.RIGHT_DOWN </code> => <samp>[1, 0,    null]</samp><br/>
    <code>Dexter.RIGHT_UP</code> => <samp>[1, 1,    null]</samp><br/>
    <code>Dexter.RIGHT_IN</code> => <samp>[1, null, 0]</samp><br/>
    <code>Dexter.RIGHT_OUT </code> => <samp>[1, null, 1]</samp><br/>
    <code>Dexter.RIGHT_DOWN_IN</code> => <samp>[1, 0,    0]</samp><br/>
    <code>Dexter.RIGHT_DOWN_OUT</code> => <samp>[1, 0,    1]</samp><br/>
    <code>Dexter.RIGHT_UP_IN</code> => <samp>[1, 1,    0]</samp><br/>
    <code>Dexter.RIGHT_UP_OUT</code> => <samp>[1, 1,    1]</samp><br/>
<p></p>
    <code>Dexter.DOWN</code> => <samp>[null, 0, null]</samp><br/>
    <code>Dexter.DOWN_IN</code> => <samp>[null, 0, 0]</samp><br/>
    <code>Dexter.DOWN_OUT</code> => <samp>[null, 0, 1]</samp><br/>
    <code>Dexter.UP</code> => <samp>[null, 1, null]</samp><br/>
    <code>Dexter.UP_IN</code> => <samp>[null, 1, 0]</samp><br/>
    <code>Dexter.UP_OUT</code> => <samp>[null, 1, 1]</samp>
<p></p>
    <code>Dexter.IN</code>  => <samp>[null, null, 0]</samp>
    <code>Dexter.OUT</code> => <samp>[null, null, 1]</samp>
        The above list is in the series <b>Robot/robot config</b>.
        Not mentioning a boolean (null) means "don't care", ie let DDE figure it out. Since config limits
        the possible options, some configurations will be impossible with some xyz settings and/or
        J5_direction settings. Impossible settings cause an error.<br/>
        If config is null, then the config set by the previous instruction in DDE
        that set config is used.<br/>
    <img width="350" src="doc/coor_images/Coordinate_System_Iso.PNG" alt="Coordinate_System picture."/><br/>
    <img width="350" src="doc/coor_images/Coordinate_System_Top.PNG" alt="Coordinate_System picture."/><br/>
    <img width="350" src="doc/coor_images/Direction_Vector.PNG"      alt="Coordinate_System picture."/><br/>
    <img width="350" src="doc/coor_images/Tooltip_Location.PNG"      alt="Coordinate_System picture."/><br/>
    <button onclick="show_configurations_image()">Show Configurations Image</button>
    <p></p>
    <b>workspace_pose</b> If not passed in or <code>null</code>, this
    defaults to the containing Job's
    <a href="#" onclick="DocCode.open_doc('job_param_default_workspace_pose_doc_id', event)">default_workspace_pose</a>
    which itself defaults to <code>Coor.Table</code> .
    Determines the "offset" of the xyz arg.<br/>
    <b>j6_angle</b>  Default: <code>[0]</code> The angle to move Joint 6 to.
    Wrapping it in an array makes the movement relative.
    The default of <code>[0]</code> causes Joint 6 not to move.<br/>
    <b>j7_angle</b>  Default: <code>[0]</code> The angle to move Joint 7 to.
    Wrapping it in an array makes the movement relative.
    The default of <code>[0]</code> causes Joint 7 not to move.<br/>
    <i>Examples:</i><br/>
    <code>Dexter.move_to([0, 0.3, 0.4])</code>
    <p></p>
    Below is an example using all default values except for the first one.
    <pre><code>
Dexter.move_to([0.1, 0.2, 0.3],      // xyz position
               [0, 0 ,-1],           // direction
               Dexter.RIGHT_UP_OUT,  // config
               null,                 // workspace_pose
               [0],                  // J6_angle
               [0]                  // J7_angle
)  </code></pre>
</details> <!--end move_to -->

<details id="Dexter.move_to_relative_doc_id" class="doc_details"><summary>move_to_relative</summary>
    This instruction is similar to <code>Dexter.move_to</code> except that the passed in
    xyz array values (in meters) that are ADDED to Dexter's
    existing end effector xyz values, not taken as absolutes. The other arguments to move_to
    are not passed to this function but rather their previously supplied values are used.<br/>
    <i>Parameter</i><br/>
    <b>delta_xyz</b> Default: <code>[0, 0, 0]</code> The other instructions that move Dexter: Dexter.move_all_joints, Dexter.move_home, Dexter.move_to,
     record the position that they've told Dexter to move to. Then Dexter.move_to_relative
     uses that stored position and "increments" it by the supplied delta_xyz.
     Note this "base" is not exactly the position of Dexter, but rather
     the position that its been told to go by previous instructions.
    <b>workspace_pose</b> If not passed in or <code>null</code>, this
    defaults to the containing Job's
    <a href="#" onclick="DocCode.open_doc('job_param_default_workspace_pose_doc_id', event)">default_workspace_pose</a>
    which itself defaults to <code>Coor.Table</code> .
    Determines the "offset" of the xyz arg.<br/>
    <b>j6_delta_angle</b>  Default: <code>0</code> The relative amount to move Joint 6 to.<br/>
    <b>j7_delta_angle</b>  Default: <code>0</code> The relative amount to move Joint 7 to.
     <p></p>
     <i>Example:</i>
<pre><code>new Job({name: "job_mtr",
         do_list: [Dexter.move_all_joints(Dexter.NEUTRAL_ANGLES),
                   Dexter.move_to_relative([0.005, 0.01, 0])
                   ]})</code></pre>
    Unlike move_to, you cannot wrap x, y. or z in an array as those values
    are already relative.
</details>

<details id="Dexter.move_to_straight_doc_id" class="doc_details"><summary>move_to_straight</summary>
<code>Dexter.move_to_straight</code> is quite similar to <code>Dexter.move_to</code>.
It takes the same first three arguments as move_to and moves Dexter to
the same spot. The difference is the path that Dexter's end effector takes
to getting to the destination. move_to's path is the path that results
from moving all the joints such that they all start moving at the same
time and stop moving at the same time, but each joint may move at
a different speed than the others. In move_to_straignt,
the path approximates a straight line.
<p></p>
Dexter achieves this by breaking up the distance between the start
and end xyz locations into many short straight-line segments where
the start and end location of each of these segments is on
a straight line between the starting and ending locations.
<p></p>
<i>Parameters passed by keyword:</i><br/>
<b>xyz</b> An array of 3 numbers indicating the x, y, and z location to
           move to. Same as move_to.<br/>
<b>J5_direction</b> The ending direction that LINK5 will be pointing when
    the move is complete. Same as move_to.<br/>
<b>config</b>  Default: <code>Dexter.RIGHT_UP_OUT</code> The configuration of the joints at the end of the move.
    Same as move_to.<br/>
<b>tool_speed</b> The maximum speed that Dexter's end effector will move.
                  Default: 5 millimeters per second. Not in move_to.<br/>
<b>resolution</b> How short to make the straight lines that connect the
starting xyz to the ending xyz. Default: 0.5 millimeters.<br/>
<b>j6_angle</b>  Default <code>[0]</code> The degrees move move Joint 6 to.
If it is wrapped in an array, move relative by that amount.<br/>
<b>j7_angle</b>  Default <code>[0]</code> The degrees move move Joint 7 to.
    If it is wrapped in an array, move relative by that amount.<br/>
<b>single_instruction</b> Default: <code>false</code> False means generate
many instructions within DDE to send to Dexter to cause it to
move in a straight line.
A true value means generate just one make_ins "T" instruction
to send to Dexter. Dexter will then compute the numerous little moves
to get Dexter to move in a straight line.
A make_ins with an oplet of "T" looks like:
<pre><code title="unEVALable">
make_ins("T",
         x, y, z,
         J5_direction[0], J5_direction[1], J5_direction[2],
         config[0], config[1], config[2],
         tool_speed, resolution,
         j6_angle, j7_angle)
         </code></pre>
<p></p>
<i>Example:</i><br/>
<pre><code> new Job({name: "job_mts",
          do_list: [Dexter.move_to([0, 0.55, 0.075]),
                    Dexter.move_to_straight({xyz: [0, 0.546, 0.075]})]
          })</code></pre>
Moves Dexter's end effector from location: [0, 0.55, 0.075] to
location [0, 0.5, 0.075] in a straight line.
</details>

<details id="Dexter.pid_move_all_joints_doc_id" class="doc_details"><summary>pid_move_all_joints</summary>
Similar to <a href="#" onclick="DocCode.open_doc('Dexter.move_all_joints_doc_id', event)">Dexter.move_all_joints</a>
except that it uses a <a href="https://en.wikipedia.org/wiki/PID_controller" target="_blank">
proportional–integral–derivative controller</a>.<br/>
<i>Example:</i><br/>
<code>Dexter.pid_move_all_joints(0, 10, 20, 30, 40)</code>
</details>

<details id="Dexter.pid_move_to_doc_id" class="doc_details"><summary>pid_move_to</summary>
    Similar to <a href="#" onclick="DocCode.open_doc('Dexter.move_to_doc_id', event)">Dexter.move_to</a>
    except that it uses a
    <a href="https://en.wikipedia.org/wiki/PID_controller" target="_blank">
        proportional–integral–derivative controller</a>.<br/>
    <i>Example:</i></br/>
    <code>Dexter.pid_move_to([0, 0.1, 0.2])</code>
</details>

<details id="Dexter.read_file_doc_id" class="doc_details"><summary>read_file</summary>
    This instruction allows you to transfer the content of a file on Dexter into
    a user_data variable in the enclosing Job.
    <p></p>
    If you are using the simulator, this can move the contents of a file meant to
    simulate a file on Dexter (but is really on
    the computer running DDE) into a user_data variable.
    <br/>
    <i>Parameters:</i><br/>
    <b>source</b> A string. Required. The path of a file on Dexter's file system who's
    contents you want to get.<br/>
    If the file starts with a letter (not a slash), then, for example,<br/>
    <code>"foo.txt"</code> resolves to:<br/>
    When not simulating: <code>"/srv/samba/share/foo.txt"</code><br/>
    When simulating: <code>"Documents/dde_apps/dexter_file_systems/{robot_name}/foo.txt"</code><br/>
    <b>destination</b> A string. Default: <code>"read_file_content"</code><br/>
     The name of a user_data variable on the running
    job that will be written (or over-written) with the contents
    of the file indicated in "source".<br/>
    If the file does not exist, the value of the_job_instance.user_data.{destination}
    will be set to a positive integer error code, usually 1. <br/>
    An error message will be printed in the output pane telling you that the file content
    could not be retrieved, but the Job itself does not error.
    Subsequent instructions can test for the validity of the content with
    <code title="unEVALable">typeof(this.user_data.{destination}) == "string")</code><br/>
    Thus <i>Dexter.read_file</i> can be used to test for the existence of the file,
    not just get its content.
    <p></p>
    <i>Example:</i>
    <pre><code title="not in TestSuite">new Job({name: "job_rfr",
         do_list: [
                   Dexter.read_file("aa.dde", "aa_content"),
                   function(){
                     if(typeof(this.user_data.aa_content) == "string"){
                        out("got the aa content!")
                     }
                     else { out("can't find file: aa.dde") }
                   }
               ]})</code></pre>
    See also <a href="#" onclick="DocCode.open_doc(read_file_doc_id, event)">read_file</a>
    <p></p>
    <code id="Dexter.read_from_robot_doc_id">Dexter.read_from_robot</code> is a similar instruction, except that the default folder
    for the <i>source</i> is "/srv/samba/share/" and not
    "/srv/samba/share/dde_apps" as it is for <code>Dexter.read_file</code>.
    <code>Dexter.read_from_robot</code> is maintained for backwards compatibility.
    Most users are expected to use <code>Dexter.read_file</code>
</details>

<details id="Dexter.reboot_joints_doc_id" class="doc_details"><summary>reboot_joints</summary>
Dexters build before March, 2021, have Dynamixel 320 motors for Joints 6 and 7.
When these motors are commanded to push past an immovable object,
the motors overheat. After about 5 seconds, a motor will
stop trying to push, become disabled, and start flashing a red light
(blinking red, <i>not</i> steady red).
This condition can happen when the jaws of a parallel gripper
attempt to close more than an unsquisible object between the jaws will allow.
<p></p>
Once a motor is disabled, it can't be used until it is rebooted.
The rebooting process takes 2 seconds.
You can start this process via the Jobs menu/Dexter Tools/Reboot Joints,
or start it with the reboot_joints instruction in a Job.
This instruction will stop DDE from sending new instructions to Dexter
until it is complete,
but will not prevent instructions that are already in Dexter's queue (for Joint's 1 thru 5)
from running.
<p></p>
<i>Parameter:</i><br/>
<b>joint_number_array</b> Default: <code>"all"</code>. An array of integers of
the number of a joint to reboot. The only permissible numbers as of March, 2021 are
6 and 7. Passing <code>"all"</code> is the same as passing <code>[6, 7]</code> .
<p></p>
<i>Example:</i><br/>
<pre><code>new Job({
    name: "reboot_the_joints",
    do_list: [Dexter.reboot_joints()]
})    </code></pre>
</details>

<details id="Dexter.run_gcode_doc_id" class="doc_details"><summary>run_gcode</summary>
This instruction accepts the name of a file as input and creates additional instructions 
to move Dexter to "draw the lines" indicated by the gcode file. Most of
the instructions created are <code>Dexter.move_to</code> instructions.
<ul><li><b>filepath</b> Default: <code>null</code> A string representing the name of the gcode file under the <b>dde_apps</b> folder
    containing the gcode instructions. The file can be directly under dde_apps or
    nested in subfolders of any depth. Typically the filepath will have an extension of ".gcode"
    but that isn't required by filepath.
    If this defaults to <code>null</code>, only the <i>gcode</i> argument supplies the
    actual gcode to use.
    </li>
    <li><b>gcode</b> Default: <code>""</code> This string is
    prepended to the gcode from the filepath argument. It is intended to
    allow a user to "customize" the gcode in the file with some "header" codes.
    A second use case is if you have a string of gcode but no file,
    you can just let the filepath default to null and only the value of the <i>gcode</i>
    argument will be used.</li>
    <li><b>workspace_pose</b> Default:
         <code>Vector.make_pose([0, 0.5, 0.1], [0, 0, 0], _mm)</code>
        Gcode files indicate line endpoint positions as dimensionless units.
       DDE requires the x,y,z positions passed to the <code>Dexter.move_to</code>
       instructions created by run_gcode to be in meters.
       <code title="unEVALable code fragment"> workspace_pose</code> acts to scale,
       rotate and offset the positions in the gcode.
       <p></p>
       For instance, if the last argument to a call to <code>Vector.make_pos</code>
       is <code>_mm</code>
       as it is in the default for workspace_pose,
       you are declaring that the position numbers in the gcode
       are intended to be in millimeters. The position numbers will be multipled
       by the value of _mm (which is 0.001) before they are passed into
       the generated move_to instructions. Thus a gcode position value of 2
       will be multipled by 0.001 to yield 0.002 and that is the number
       used in the move_to argument, since move_to expects meters.
       Conversely, if you pass in <code>_m</code> (which is 1),
       your gcode position values are expeceted to be in meters.
       <p></p>
       See <a href="#" onclick="DocCode.open_doc(units_system_help_doc_id, event)">Units System</a>
    </li>
</ul>
    <i>Examples:</i><br/>
    <pre><code>Dexter.run_gcode({gcode: "G1 X0 Y5 Z8",
                  position_units: _mm})
          </code></pre>
    run_gcode can also take a robot instance as its subject like so:
    <pre><code>Robot.dexter0.run_gcode({gcode: "G1 X0 Y5 Z8",
                  position_units: _mm})
          </code></pre>
    <code>Dexter.run_gcode</code> is similar to <code>Dexter.draw_dxf</code>.
    <code>Dexter.run_gcode</code> only handles G0 and G1 instructions,
    and only their X, Y, and Z arguments.
    It treats G0 and G1 the same.<br/>
    <code>Dexter.run_gcode</code> needs lots of work to handle more gcodes.
</details> <!-- end run_gcode -->

<details id="Dexter.set_fpga_command_reg_doc_id" class="doc_details"><summary>set_fpga_command_reg</summary>
This instruction allows you to set the value of the
FPGA command register on Dexter. The value will be an integer of 14 bits.
Each bit can be set to true(1) or false(0) by passing in keywords of the
name of the parameter and a value of true or false. All parameters default to <code>false</code>.<br/>
<i>Parameters:</i><br/>
    <b>CapCalibrateBase</b><br/>
    <b>CapCalibrateEnd</b><br/>
    <b>CapCalibratePivot</b><br/>
    <b>MoveEnable</b><br/>
    <b>GoMove</b><br/>
    <b>EnableLoop</b><br/>
    <b>AClrLoop</b><br/>
    <b>CalRun</b><br/>
    <b>ResetMotorPosition</b><br/>
    <b>ResetForce</b><br/>
    <b>CapCalAngle</b><br/>
    <b>CapCalRot</b><br/>
    <b>AngleEnable</b><br/>
    <b>RotEnable</b>
<p></p>
<i>Example:</i><br/>
<pre><code>Dexter.set_fpga_command_reg({CapCalibrateBase: true,
                             CapCalibrateEnd: true})</code></pre>
The above is equivalent to:<br/>
    <code>make_ins("w", FPGA.COMMAND_REG, 3)</code><br/>
    and<br/>
    <code>make_ins("w", 42, 3)</code>
    <p></p>
    <b id="FPGA.command_reg_val_doc_id">FPGA.command_reg_val</b> is a utility function to help construct the value in a make_ins "w" call.
    It is called with the same keyword arguments
    as <code>Dexter.set_fpga_command_reg</code>.<br/>
    <i>Examples:</i>
    <pre><code>
FPGA.command_reg_val({CapCalibrateBase: true,
                      CapCalibratePivot: true})</code></pre>
    => <samp> 5 </samp>
    <pre><code>
make_ins("w",
         FPGA.COMMAND_REG,
         FPGA.command_reg_val({CapCalibrateBase: true,
                           CapCalibratePivot: true}))</code></pre>
</details> <!-- end set_fpga_command_reg -->

<details id="Dexter.set_parameter_doc_id" class="doc_details"><summary>set_parameter</summary>
This instruction sets a parameter within a Dexter robot.
The parameter will remain set to that value after the job is done,
and across DDE launches. Power cycling of the Dexter does not keep
set parameter values.<br/>
<b>subject</b> <code>Dexter</code> or a specific Dexter such as <code>Dexter.dexter0</code>.<br/>
<b>name</b> The name of the parameter to be set as a string, such as <code>"Acceleration"</code>.<br/>
<b>values</b> These are numbers. Most of the "names" take a single numerical
              value but a few take more than one. (separate them by commas).
              Numbers can be either integers or floats, depending on the name.
<!--<table>
   <tr><th>Name</th><th>Default Value</th></tr>
    <tr><td>J1Force</td><td>0</td></tr>
    <tr><td>J2Force</td><td>0</td></tr>
    <tr><td>J3Force</td><td>0</td></tr>
    <tr><td>J4Force</td><td>0</td></tr>
    <tr><td>J5Force</td><td>0</td></tr>
    <tr><td>J1Friction</td><td>0.1</td></tr>
    <tr><td>J2Friction</td><td>0.1</td></tr>
    <tr><td>J3Friction</td><td>0.1</td></tr>
    <tr><td>J4Friction</td><td>0.1</td></tr>
    <tr><td>J5Friction</td><td>0.1</td></tr>
    <tr><td>J1BoundryHigh</td><td></td></tr>
    <tr><td>J1BoundryLow</td><td></td></tr>
    <tr><td>J2BoundryHigh</td><td></td></tr>
    <tr><td>J2BoundryLow</td><td></td></tr>
    <tr><td>J3BoundryHigh</td><td></td></tr>
    <tr><td>J3BoundryLow</td><td></td></tr>
    <tr><td>J4BoundryHigh</td><td></td></tr>
    <tr><td>J4BoundryLow</td><td></td></tr>
    <tr><td>J5BoundryHigh</td><td></td></tr>
    <tr><td>J5BoundryLow</td><td></td></tr>
    <tr><td>Acceleration</td><td></td></tr>
    <tr><td>EERoll</td><td>512</td></tr>
    <tr><td>EESpan</td><td>512</td></tr>
    <tr><td>End</td><td></td></tr>
    <tr><td>GripperMotor</td><td>512</td></tr>
    <tr><td>MaxSpeed</td><td></td></tr>
    <tr><td>StartSpeed</td><td></td></tr>
    </table>-->
<p></p>
<i>Example Job Instruction:</i><br/>
<code>Dexter.set_parameter("J1BoundryHigh", 188)</code><br/>
For a complete list of parameter names, their ranges, and their default values,
see: <a  target="_blank" href="https://github.com/HaddingtonDynamics/Dexter/wiki/set-parameter-oplet">set_parameter</a>
</details>

<details id="Dexter.sleep_doc_id" class="doc_details"><summary>sleep</summary>
  Causes Dexter to "go to sleep" for the number of seconds in the one argument.
  When Dexter receives the instruction, it waits for that duration
  before returning control to the DDE job.<br/>
  <i>Example</i>:<code>Dexter.sleep(2)</code><br/>
  Sleeps for 2 seconds.<p></p>
  If you effectively want sleep to occur in DDE for any robot,
  you can use a do_list_item of <code>Dexter.wait_until(2)</code>
  to wait for 2 seconds.
</details>
<details id="Dexter.write_file_doc_id" class="doc_details"><summary>write_file</summary>
    A Dexter instruction that Writes a file on Dexter's file system.
    The file is transmitted through
   DDE's socket interface to the Linux OS runnning on Dexter's processor
   board.<br/>
   <i>Parameters:</i><br/>
    <b>file_name</b> The name of the file to be written on Dexter.
    Example: <code>"/srv/samba/share/AdcCenters.txt"</code> is
    where calibration data is written.<br/>
   <b>content</b> A string. Default: <code>""</code>
    The content to be written. This function automatically escapes
    null, semicolon and percent (the escape character) in a_string
    for transmission.
    <br/>
    <i>Example:</i><br/>
    <code>Dexter.write_file("/srv/samba/share/greeting.txt", "hello world")</code><br/>
    This instruction requires an upgrade to Dexter's software available May, 2018.
    <p></p>
    See also <a href="#" onclick="DocCode.open_doc('write_file_doc_id', event)">write_file</a>
    <p></p>
    <code id="Dexter.write_to_robot_doc_id">Dexter.write_to_robot</code> is a similar instruction,
    except that the default folder
    for the <i>file_name</i> is "/srv/samba/share/" and not
    "/srv/samba/share/dde_apps" as it is for <code>Dexter.write_file</code>.
    Also write_to_robot has its content argument 1st, and its file_name argument 2nd.
    <code>Dexter.write_to_robot</code> is maintained for backwards compatibility.
    Most users are expected to use <code>Dexter.write_file</code>
</details>
<details id="Dexter.write_fpga_doc_id" class="doc_details"><summary>write_fpga</summary>
    Write a value into an address in Dexter's FPGA.<br/>
    <i>Parameters:</i><br/>
    <b>address</b> The register within the FPGA to be written.
    This is a non-negative integer.
    You can use the symbolic names for these integers
    to make the code easier to read. All
    the symbolic names start with "FPGA."
    See <a href="#" onclick="DocCode.open_doc('fpga_addresses_doc_id', event)">FPGA Addresses</a><br/>
    and the Series menu/DDE/Dexter Robot/w oplet address.
    <br/>
    <b>value</b> The 32 bit integer to be written into the above address.
    Any integer between -2147483648 and 2147483647 inclusive is valid.
    Beware: Javascript uses 64 bit floats for all its numbers which can
    represent integers higher or lower than the above.
    <p></p>
    <i>Example:</i><br/>
    <code> Dexter.write_fpga(FPGA.ACCELERATION_MAXSPEED, 1) </code>
</details>
</details> <!-- end dexter_instructions -->

<details class="doc_details"><summary>Dexter Modes</summary>
Dexter can be put into one of several <i>modes</i> that governs its behavior.
This is done by putting any one of the following Dexter instructions
into a job. When the instruction is run, Dexter will go into that mode.
<p></p>
Dexter maintains the last mode it was set to even across jobs, across DDE launches,
and across power cycling Dexter.
<p></p>
The default mode is <i>set_keep_position</i>
<p></p>
All of these instructions take an optional Dexter instance argument.
If it is not passed, the instruction will be sent to the Job's robot.
If it is passed, the instruction will be sent to that robot.
    <details id="Dexter.set_follow_me_doc_id" class="doc_details"><summary>set_follow_me</summary>
        The joints are freed up and the user can drag Dexter's end-effector.
        Dexter's motion instructions (move_to, move_all_joints, etc.) will not work in this mode.
        <p></p>
        <i>Parameters:</i> None<br/>
        <i>Example</i>: (as an instruction in a job's do_list.) <br/>
        <code>Dexter.set_follow_me()</code>
    </details>
    <details id="Dexter.set_force_protect_doc_id" class="doc_details"><summary>set_force_protect</summary>
        Dexter will move to the locations it is told to by instructions.
        But if Dexter is bumped or runs into an object (ie a <i>quick</i> force)
        it will move out of the way.
        However, if a <i>slow</i> force is applied, even if that force is large,
        Dexter will counter that force and attempt to maintain its position.
        <p></p>
        <i>Parameters:</i> None<br/>
        <i>Example</i>: (as an instruction in a job's do_list.) <br/>
        <code>Dexter.set_force_protect()</code>
    </details>
    <details id="Dexter.set_keep_position_doc_id" class="doc_details"><summary>set_keep_position</summary>
        Dexter will move to the locations it is told to by instructions.
        Dexter will actively compensate for any applied forces.
        This mode creates the most accurate joint angles and paths.
        It uses the optical encoders for each joint for position feedback,
        so it is "closed loop".
        This is the default mode.
        <p></p>
        <i>Parameters:</i> None<br/>
        <i>Example</i>: (as an instruction in a job's do_list.) <br/>
        <code>Dexter.set_keep_position()</code>
    </details>
    <details id="Dexter.set_open_loop_doc_id" class="doc_details"><summary>set_open_loop</summary>
        Dexter will move to the locations it is told to by instructions.
        Dexter will not actively compensate for any applied forces.
        The stepper motors are locked at each desired location but the actually joint angles will have error.
        This mode can be useful for accurately measuring torque.
        It does not use the joint optical encoders.<br/>
        <i>Example</i>: (as an instruction in a job's do_list.)
        <p></p>
        <i>Parameters:</i> None<br/>
        <code>Dexter.set_open_loop()</code>
    </details>
</details> <!--End Dexter Modes-->

<details class="doc_details"  id="RobotStatus_doc_id"><summary>RobotStatus</summary>
    When an instruction is sent to Dexter from DDE, Dexter sends back to DDE
    an array of 60 numbers containing robot status information. The DDE menu
    item <b>Jobs/Show robot status</b> presents this array in a chart labeling
    each number so you can make sense of it.
    <p></p>
    The Robot status array is stored on each Dexter instance under, for example:<br/>
    <code>Dexter.dexter0.robot_status</code><br/>
    You can use constants bound to index
    values to extract particular values like so:
    <code>Dexter.dexter0.robot_status[Dexter.J1_MEASURED_ANGLE]</code><br/>
    See the full list of such constants in the documentation for
    <a href="#" onclick="DocCode.open_doc('IO.grab_robot_status_doc_id', event)">IO.grab_robot_status</a>
    <p></p>
    <code>RobotStatus</code> is a class whose instances store information about
    a Dexter robot. Each Dexter robot instance has a field named <code title="unEVALable">rs</code>
    i.e. <code>Dexter.dexter0.rs</code>
    whose value is an instance of <code>RobotStatus</code>.
    <p></p>
    The following are instance methods on <code>RobotStatus</code> that make it easy
    to access various robot status values.<br/>
    <i>Examples:</i><br/>
    <code>Dexter.dexter0.rs.job_id()</code><br/>
    <pre><code>new Job({name: "my_job",
         do_list:[function(){out(this.robot.rs.measured_angle(1))}]
         })     </code></pre>
    <details id="RobotStatus.job_id_doc_id" class="doc_details"><summary>job_id</summary>
        Returns the job_id of the job corresponding to the instruction of this robot_status.
        This is usually the last instruction sent to Dexter.<br/>
        Takes no parameters.
    </details>
    <details id="RobotStatus.instruction_id_doc_id" class="doc_details"><summary>instruction_id</summary>
        Returns id of the instruction last sent to Dexter.<br/>
        Takes no parameters.
    </details>
    <details id="RobotStatus.dma_read_data_doc_id" class="doc_details"><summary>dma_read_data</summary>
        Low level fpga data.<br/>
        Takes no parameters.
    </details>
    <details id="RobotStatus.read_block_count_id_doc_id" class="doc_details"><summary>read_block_count</summary>
        Low level fpga data.<br/>
        Takes no parameters.
    </details>
    <details id="RobotStatus.start_time_doc_id" class="doc_details"><summary>start_time</summary>
        The time this instruction was sent from DDE to Dexter in milliseconds form Jan 1, 1970.<br/>
        Takes no parameters.
    </details>
    <details id="RobotStatus.stop_time_doc_id" class="doc_details"><summary>stop_time</summary>
        The time this robot status was revieved by DDE from Dexter in milliseconds form Jan 1, 1970.<br/>
        Takes no parameters.
    </details>
    <details id="RobotStatus.instruction_type_doc_id" class="doc_details"><summary>instruction_type</summary>
        The oplet of this instruction as a string of one letter.<br/>
        Takes no parameters.
    </details>
    <details id="RobotStatus.error_code_doc_id" class="doc_details"><summary>error_code</summary>
        An error code for this instruction. If <code>0</code>, that means no error.<br/>
        Takes no parameters.
    </details>

    <details id="RobotStatus.end_effector_in_doc_id" class="doc_details"><summary>end_effector_in</summary>
        ??? <br/>
        Takes no parameters.
    </details>

    <details id="RobotStatus.a2d_cos_doc_id" class="doc_details"><summary>a2d_cos</summary>
        Returns the a2d_cos of a joint.  <br/>
        <i>Parameter</i><br/>
        <b>joint_number</b> An integer from 1 through 7 indicated the joint that you want information on.
    </details>
    <details id="RobotStatus.a2d_coses_doc_id" class="doc_details"><summary>a2d_coses</summary>
        Returns an array of a2d_cos. <br/>
        <i>Parameter</i><br/>
        <b>joint_count</b> Default: <code>5</code>
        An integer from 0 through 7 indicating the number of joints to return their values on.
    </details>

    <details id="RobotStatus.a2d_sin_doc_id" class="doc_details"><summary>a2d_sin</summary>
        Returns the a2d_sin of a joint.  <br/>
        <i>Parameter</i><br/>
        <b>joint_number</b> An integer from 1 through 7 indicated the joint that you want information on.
    </details>
    <details id="RobotStatus.a2d_sins_doc_id" class="doc_details"><summary>a2d_sins</summary>
        Returns an array of a2d_sin. <br/>
        <i>Parameter</i><br/>
        <b>joint_count</b> Default: <code>5</code>
        An integer from 0 through 7 indicating the number of joints to return their values on.
    </details>

    <details id="RobotStatus.angle_doc_id" class="doc_details"><summary>angle</summary>
        Returns the stepper motor angle of a joint. Not normally useful. <br/>
        <i>Parameter</i><br/>
        <b>joint_number</b> An integer from 1 through 7 indicated the joint that you want information on.
    </details>
    <details id="RobotStatus.angles_doc_id" class="doc_details"><summary>angles</summary>
        Returns an array of stepper motor angles. Not normally useful. <br/>
        <i>Parameter</i><br/>
        <b>joint_count</b> Default: <code>5</code>
        An integer from 0 through 7 indicating the number of joints to return their angles on.
    </details>

    <details id="RobotStatus.delta_doc_id" class="doc_details"><summary>delta</summary>
        Returns the delta of a joint.  <br/>
        <i>Parameter</i><br/>
        <b>joint_number</b> An integer from 1 through 7 indicated the joint that you want information on.
    </details>
    <details id="RobotStatus.deltas_doc_id" class="doc_details"><summary>deltas</summary>
        Returns an array of deltas. <br/>
        <i>Parameter</i><br/>
        <b>joint_count</b> Default: <code>5</code>
        An integer from 0 through 7 indicating the number of joints to return their angles on.
    </details>

    <details id="RobotStatus.pid_delta_doc_id" class="doc_details"><summary>pid_delta</summary>
        Returns the pid_delta of a joint.  <br/>
        <i>Parameter</i><br/>
        <b>joint_number</b> An integer from 1 through 7 indicated the joint that you want information on.
    </details>
    <details id="RobotStatus.pid_deltas_doc_id" class="doc_details"><summary>pid_deltas</summary>
        Returns an array of pid_deltas. <br/>
        <i>Parameter</i><br/>
        <b>joint_count</b> Default: <code>5</code>
        An integer from 0 through 7 indicating the number of joints to return their angles on.
    </details>
    <details id="RobotStatus.measured_angle_doc_id" class="doc_details"><summary>measured_angle</summary>
        Returns the a2d_cos of a joint.  <br/>
        <i>Parameter</i><br/>
        <b>joint_number</b> An integer from 1 through 7 indicated the joint that you want information on.
    </details>
    <details id="RobotStatus.measured_angles_doc_id" class="doc_details"><summary>measured_angles</summary>
        Returns an array of measured_angles from Dexter. <br/>
        <i>Parameter</i><br/>
        <b>joint_count</b> Default: <code>5</code>
        An integer from 0 through 7 indicating the number of joints to return their angles on.
    </details>

    <details id="RobotStatus.sent_doc_id" class="doc_details"><summary>sent</summary>
        Returns the sent angle of a joint.  <br/>
        <i>Parameter</i><br/>
        <b>joint_number</b> An integer from 1 through 7 indicated the joint that you want information on.
    </details>
    <details id="RobotStatus.sents_doc_id" class="doc_details"><summary>sents</summary>
        Returns an array of sent angles to Dexter. <br/>
        <i>Parameter</i><br/>
        <b>joint_count</b> Default: <code>5</code>
        An integer from 0 through 7 indicating the number of joints to return their angles on.
    </details>

</details> <!-- end RobotStatus -->


<details  class="doc_details"><summary>Dexter Utilities</summary>
<details id="Instruction.add_robot_to_instruction_id" class="doc_details"><summary>add_robot_to_instruction</summary>
This static method on the Instructon class adds the given robot to the instruction.
If the instruction already has a robot, it is replaced. If there is no robot,
the instruction is given one.
If the instruction cannot take a robot, nothing is done.<br/>
<i>Parameters:</i><br/>
<b>instruction</b> Required. Any kind of instruction that a job can accept can be passed.
An array instruction and an Instruction instance of the "move" kind will be modified
with the passed in robot.<br/>
<b>robot</b> Default: <code>undefined</code> The given robot will be added to
the instruction, if it accepts one. If robot is <code>undefined</code>, the
instruction will not be modified.
<p></p>
The possibly modified instruction will be returned.<br/>
<i>Example:</i>
<code>Instruction.add_robot_to_instruction(Dexter.move_all_joints([30, 40]), Robot.dexter0)</code><br/>
Note that a simpler way to accomplish the above is:<br/>
<code>Robot.dexter0.move_all_joints([30, 40])</code><br/>
This function is primarily used to implement <code>Instruction.add_robot_to_instructions</code>
</details>

<details id="Instruction.add_robot_to_instructions" class="doc_details"><summary>add_robot_to_instructions</summary>
This static method on the Instruction class adds the given robot to each of the passed in instructions
by calling <code>Instruction.add_robot_to_instruction</code>.<br/>
<i>Parameters:</i><br/>
<b>instructions</b> Default <code>[]</code>. An array of any kind of instruction
that a job can accept can be passed.<br/>
<b>robot</b> Default: <code>undefined</code>. The given robot will be added to
each passed in instruction, if it accepts one. If robot is <code>undefined</code>, the
instruction will not be modified.<br/>
<i>Example:</i>
<code>Instruction.add_robot_to_instructions([Dexter.move_all_joints([30, 40])], Robot.dexter0)</code>
<p></p>
See <a href="#" onclick="DocCode.open_doc('Instruction.add_robot_to_instruction_id', event)">Instruction.add_robot_to_instruction</a>
for details.
</details>

<details id="Dexter.is_calibrated_doc_id" class="doc_details"><summary>is_calibrated</summary>
is_calibrated is an instance variable on a Dexter instance.
It is set by system code. It is not intended to be set by users.
<i>Possible Values</i><br/>
<ul><li><code>null</code> When a Dexter instance is created, is_calibrated is set to null,
meaning that it is not known if it is calibrated or not.
We must run a job on that robot (not simulated) to determine calibration.</li>
    <li><code>false</code> The robot is not calibrated. Use Job's menu/Calibrate Dexter.</li>
    <li><code>true</code> The robot is calibrated.</li>
</ul>
<i>Example:</i><br/>
<code>Dexter.dexter0.is_calibrated</code><br/>
You cannot set the robot to follow_me mode without it being calibrated, nor can you record.
Uncalibrated robots will not accurately position themselves.
</details>


<details id="Robot.dexter0.joint_angle_doc_id" class="doc_details"><summary>joint_angle</summary>
Returns the present angle of the joint indicated in the argument in arc_seconds.
Example:<br/><code title="unEVALable code fragment"> Robot.dexter0.joint_angle(2)</code> => some_arc_seconds.
The argument defaults to 1, ie the base joint.
</details>

<details id="Robot.dexter0.joint_angles_doc_id" class="doc_details"><summary>joint_angles</summary>
Takes no arguments. Returns an array of the angles of the 5 joints in arc_seconds.
Example:<br/><code title="unEVALable code fragment"> Robot.dexter0.joint_angles()</code> => <br/>
[j1_arc_seconds, j2_arc_seconds, j3_arc_seconds, j4_arc_seconds, j5_arc_seconds]
</details>

<details id="Robot.dexter0.joint_xyz_doc_id" class="doc_details"><summary>joint_xyz</summary>
Takes one argument, an integer from 1 to 5 indicating a joint.
Returns the present angle of the indicated joint in arc_seconds.
Example:<br/><code title="unEVALable code fragment"> Robot.dexter0.joint_xyz(2)</code> => some number in microns.
The argument defaults to 5, ie the end effector.
</details>

<details id="Robot.dexter0.joint_xyzs_doc_id" class="doc_details"><summary>joint_xyzs</summary>
Takes no arguments. Returns an array of the xyzs of the 5 joints with
the base position prepended on the beginning of the returned array.
Positions are in microns.
Example:<br/><code title="unEVALable code fragment"> Robot.dexter0.joint_xyzs()</code> => <pre><samp>
[
[0, 0, 0],
[0, 0, 165100],
[77002.98143799945, -310537.62354316347, 186765.19879492428],
[10000.000000000044, -40328.00000000006, 9200],
[10000.000000000044, -40328.00000000006, 59999.99999999999],
[10000.00000000006, 42221.99999999993, 60000]
]</samp></pre>
</details>

<!--
<details id="Robot.dexter0.prop_doc_id" class="doc_details"><summary>prop</summary>
<b>prop</b> is a Dexter instance method that takes a string
naming a property and returns it's value.
Most of the values are numbers.<br/>
<i>Example</i>:<br/>
<code>Robot.dexter0.prop("LINK1")</code> => <samp>0.1651</samp><p></p>
<i>Parameters</i>:<br/>
<b>prop</b> A string naming the property who's value will be returned.<br/>
<b>get_from_dexter</b> If <code>true</code>, the value will be retrieved from the
current value of the file //robot.ip_address./share/robot_props.json<br/>
If <code>false</code> (the default):<br/>
If the Dexter instance has the property as an instance property,
its value is returned.<br/>
Else if the property is included in the file
on the dexter robot named //robot.ip_address./share/robot_props.json<br/>
<i>Example:</i><br/>
<code>"//192.168.1.142/share/robot_props.json"</code><br/>
then a value specific to the robot is returned.
This is used for link lengths (properties LINK1, LINK2 ... LINK5)
because each Dexter has very slightly different link lengths.
Due to Dexter's precision, we must take these lengths into
account when moving the robot to a location.<br/>
Else if the property is a class property of Dexter
(used for "typical values" or values appropriate for all Dexters),
then that value is returned.<br/>
Otherwise, <code>undefined</code> is returned.
<p></p>
You may add a property to a dexter instance like so:<br/>
<code title="unEVALable code fragment"> Robot.dexter0.my_val = 123</code><br/>
and you can access that via <br/>
<code>Robot.dexter0.my_val</code> or <br/>
<code>Robot.dexter0.prop("my_val")</code><br/>
If you want this value to persist accross DDE launches,
just stick<br/>
<code title="unEVALable code fragment"> Robot.dexter0.my_val = 123</code><br/>
in the file "dde_apps/dde_init.js"
</details>
end Dexter prop-->
</details> <!-- end Dexter Utilities -->

<details class="doc_details"><summary>Dexter Instance Properties</summary>
  Each instance of the Dexter class has quite a few properties.
  Inspect the Dexter instance to see them all.
  This section just documents a few of them.<br/>
  <b>Link Lengths</b> <code>Dexter.dexter0.Link1</code>,
                      <code>Dexter.dexter0.Link2</code>,
                      <code>Dexter.dexter0.Link3</code>,
                      <code>Dexter.dexter0.Link4</code>,
                      <code>Dexter.dexter0.Link5</code>
    contain the length in meters of each link. These are all between
    <code>0.34</code> and <code>0.08</code> for normal Dexters, but vary depending on hte particular Dexter.
    Note that <code>Dexter.LINK1</code> (through 5) are constants for the typical Dexter,
    but Dexter.dexter0.Link1 are likely to be more accurate for the particular Dexter.<br/>
  <b>J1_angle_max</b> thru <b>J5_angle_max</b>
     These properties contain the maximum angle in degrees for a given Joint.
     Values range from 90 to 150 degrees.
     Rarely are these changed, but you <i>can</i> set them using an instruction like:<br/>
     <code>Dexter.set_parameter("J1BoundryHigh", 95)</code><br/>
  <b>J1_angle_min</b> thru <b>J5_angle_min</b>.
    These properties contain the minimum angle in degrees for a given Joint.
    Values range from -150 to -90 degrees.<br/>
    Rarely are these changed, but you <i>can</i> set them using an instruction like:<br/>
    <code>Dexter.set_parameter("J1BoundryLow", -95)</code><br/>
    <i>Example:</i><br/>
    <code>Dexter.dexter0.J2_angle_max</code><br/>
    These parameters are initialized at the start of the first job that uses the given robot.
    If values for a specific robot are not found on the robot,
    values are set from constants such as:<br/>
     <code>Dexter.LINK3</code><br/>
     <code>Dexter.J4_ANGLE_MIN</code><br/>
     <code>Dexter.J5_ANGLE_MAX</code>
</details>

<details class="doc_details"><summary>Dexter Constants</summary>
values in meters<br/>
<code>Dexter.LINK1</code> => <samp>0.2352</samp><br/>
<code>Dexter.LINK2</code> => <samp>0.339092</samp><br/>
<code>Dexter.LINK3</code> => <samp>0.3075</samp><br/>
<code>Dexter.LINK4</code> => <samp>0.0595</samp><br/>
<code>Dexter.LINK5</code> => <samp>0.08244</samp><br/>
<p></p>
<code>Dexter.LINK1_AVERAGE_DIAMETER</code> => <samp>0.090000</samp><br/>
<code>Dexter.LINK2_AVERAGE_DIAMETER</code> => <samp>0.120000</samp><br/>
<code>Dexter.LINK3_AVERAGE_DIAMETER</code> => <samp>0.050000</samp><br/>
<code>Dexter.LINK4_AVERAGE_DIAMETER</code> => <samp>0.035000</samp><br/>
<code>Dexter.LINK5_AVERAGE_DIAMETER</code> => <samp>0.030000</samp><br/>
<p></p>
<code>Dexter.LEG_LENGTH</code> => <samp>0.152400</samp><br/>
<p></p>
values in degrees<br/>
<code>Dexter.J1_ANGLE_MIN</code> => <samp>-185</samp><br/>
<code>Dexter.J1_ANGLE_MAX</code> => <samp>185</samp><br/>
<code>Dexter.J2_ANGLE_MIN</code> => <samp>-105</samp><br/>
<code>Dexter.J2_ANGLE_MAX</code> => <samp>105</samp><br/>
<code>Dexter.J3_ANGLE_MIN</code> => <samp>-150</samp><br/>
<code>Dexter.J3_ANGLE_MAX</code> => <samp>150</samp><br/>
<code>Dexter.J4_ANGLE_MIN</code> => <samp>-120</samp><br/>
<code>Dexter.J4_ANGLE_MAX</code> => <samp>120</samp><br/>
<code>Dexter.J5_ANGLE_MIN</code> => <samp>-185</samp><br/>
<code>Dexter.J5_ANGLE_MAX</code> => <samp>185</samp><br/>
<code>Dexter.J6_ANGLE_MIN</code> => <samp> -150 </samp><br/>
<code>Dexter.J6_ANGLE_MAX</code> => <samp> 150 </samp><br/>
<code>Dexter.J7_ANGLE_MIN</code> => <samp> 0 </samp><br/>
<code>Dexter.J7_ANGLE_MAX</code> => <samp> 296 </samp><br/>

<code>Dexter.RIGHT_ANGLE</code> => <samp>90</samp><br/>
<code>Dexter.HOME_ANGLES</code> => <samp>[0, 0, 0, 0, 0, 0, 50]</samp> degrees j2,3,4 straight up. link 5 horizontal pointing frontwards.<br/>
<code>Dexter.NEUTRAL_ANGLES</code> => <samp>[0, 45, 90, -45, 0, 0, 0]</samp><br/>
<code>Dexter.PARKED_ANGLES</code> => <samp>[0, 0, 135, 45, 0, 0, 0]</samp><br/>
<p></p>
First array of 3 values is in meters,<br/>2nd is J5_direction,<br/>3rd is config.</i><br/>
<code>Dexter.HOME_POSITION</code> => <samp>[[0, 0.08255, 0.866775],[0, 1, 0], [1, 1, 1]]</samp><br/>
<code>Dexter.NEUTRAL_POSITION</code> => <samp>[[0, 0.5,     0.075],[0, 0, -1],[1, 1, 1]]</samp><br/>
<p></p>
<code>Dexter.MAX_SPEED</code> => <samp>30</samp> degrees per second<br/>
<code>Dexter.START_SPEED</code> => <samp>0.5</samp> degrees per second<br/>
<code>Dexter.ACCELERATION</code> => <samp>0.000129</samp> degrees/(second^2)<br/>
</details> <!--end Dexter Contantants -->

</details> <!-- end Dexter -->

<details id="Human_doc_id" class="doc_details"><summary>Human</summary>
<b>Human</b> is a "robot" that is commanded to do things via pop up dialog boxes.
Examples of its instructions are <code>Human.task</code>, and <code>Human.enter_number</code>.
When a human instruction is run, a dialog box is shown and the job waits for a user to
enter some information and click on a button to either cancel the job (and dependent jobs)
or proceed.
<p></p>
Human instructions are a way to encode tasks that Dexter can't do or information
that it can't know. The inclusion of human instructions in DDE permits the design and
running of jobs that need coodination between humans and machines.
<p></p>
Although the "home" of human instructions is in the <i>Human</i> robot, you can use
these instructions in a job with <i>any</i> type of robot. They do not attempt to
access robot hardware.
<p></p>
<i>Parameters:</i>
Nearly all Human instructions take the following parameters.
Note the overlap with <code>show_window</code> parameters, because
Human Instructions that pop up a dialog are implemented with <code>show_window</code>.<br/>
<b>task</b> Default: <code>""</code> Instructions to the user on how to perform this instruction.<br/>
<b>user_data_variable_name</b> A string. Default: depends on what type of human instruction.
For instance, enter_number's default is <code>"a_number"</code>.<br/>
The <i>output</i> of most Human Instructions goes into the Job's user_data property
with this name. Then a subsequent instruction can get that value and do something with it.<br/>
<b>add_stop_button</b> Default: <code>true</code> If true, a button is added to
 the bottom of the dialog named "Stop Job", that let's the user stop
 the Job that this instruction is in.<br/>
 All Human Instruction dialogs also have a "Continue" button
 that the user should click when they're done filling in the requested information.<br/>
<b>dependent_job_names</b> Default: <code>[]</code> Names of Jobs that will be stopped
 if the user clicks the "Stop Job" button.<br/>
<b>title</b> A string. Default: Includes the Job name and the type of the Human Instruction.<br/>
 Text that appears in the title bar of the dialog.<br/>
<b>x</b> Default: <code>200</code> The position of the left of the dialog.<br/>
<b>y</b> Default: <code>200</code> The position of the top of the dialog.<br/>
<b>width</b> Default: <code>400</code> The width in pixels of the dialog.<br/>
<b>height</b> Default: <code>400</code> The height in pixels of the dialog.<br/>
<b>background_color</b> Default: <code>"rgb(238, 238, 238)"</code>, a light gray.
<p></p>
<i>Example:</i>
<pre><code title="unstartable in TestSuite"> new Job({name: "my_job",
      do_list: [Human.enter_choice({task: "Please choose your favorite.",
                                    choices: ["AAA", "BBB", "CCC"],
                                    user_data_variable_name: "the_tla",
                                    x: 50, y: 25,
                                    title: "Pick a TLA",
                                    width: 370, height: 150,
                                    background_color: "rgb(220, 200, 250)"
                                    }),
                function(){out("You chose: " + this.user_data.the_tla)}
]})     </code></pre>
<br/>
<a href="http://hdrobotic.com/webinar#human_instructions" target="_blank">Human Instructions</a>
is a video describing most of the Human instructions.

<details class="doc_details"><summary>Human Instructions</summary>

<details id="Human.speak_doc_id" class="doc_details"><summary>speak</summary>
  Human.speak is an instruction that calls <a href="#" onclick="DocCode.open_doc(speak_doc_id, event)">speak</a>.
  It takes all the same arguments except, it does not take a "callback" arg, and
  it takes one extra arg:<br/>
  <i>Parameter:</i><br/>
  <b>wait</b> Boolean, default: <code>true</code>. When true
  the job pauses while the speaking is occuring, then performs the
  next instruction when the speaking is done.
  <p></p>
  Human.speak does <i>not</i> take <b>add_stop_button</b> as
  a parameter because it doesn't display a dialog box.
  <i>Example:</i>
  <pre><code>new Job({name: "j1",
         do_list: [
           Human.speak({speak_data: "hi there folks",
                        rate: 0.25,
                        wait: true}),
           IO.out("done")
         ]})</code></pre>
   This job doesn't print "done" until after "hi there folks" has been spoken.
</details>

<details id="Human.task_doc_id" class="doc_details"><summary>task</summary>
  When run, all human instructions present a dialog box on the screen and waits until the
  user clicks the <button>Done</button> button before allowing the job to proceed to the
  next instruction in its do_list. A <button>Stop Job</button> button is
  also presented. If clicked, this job and its dependent jobs are stopped.<p></p>
  <i>Parameters:</i><br/>
  <b>task</b> Default: "". A string that will appear in the body of the dialog box. It is intended
     as an English instruction to the human reading it. When the human has completed
     the instruction, they should press <button>Done</button>.
     If the human is unable to complete the task, they should press
     <button>Stop Job</button><p></p>
  <b>add_stop_button</b> Default: <code>true</code> Adds a button that, when clicked,
     will stop this job and the give dependent jobs without executing additional instructions.<br/>
  <b>dependent_job_names</b> Default: <code>[]</code>. The names of the jobs that will be stopped if the
       user presses <button>Stop Job</button><br/>
   <b>title</b> Default: the job name and "Human Task". A string shown in the title bar of the dialog.
          To have no title, pass in <code>""</code> .<br/>
   <b>x</b> Default: 200. The number of pixels between the left edge of the dialog and the left edge of the DDE window.<br/>
   <b>y</b> Default: 200. The number of pixels between the top edge of the dialog and the top edge of the DDE window.<br/> 
   <b>width</b> Default: 400. The width of the dialog box in pixels.<br/>
   <b>height</b> Default: 400. The height of the dialog box in pixels.<br/>
   <b>background_color</b> Default: "rgb(238, 238, 238)" i.e. light gray. The background color of the dialog box.
    Each of the numbers for red, green, and blue can be between 0 and 255 inclusive. 0,0,0 is black.<br/>
    <i style="color:rgb(200,0,200);">All of these parameters are common to <b>all</b> human instructions. 
      All are optional. They affect the appearance of the dialog box, except for</i>
      <code title="unEVALable code fragment"> dependent_job_names</code>.
    <p></p>
    <i>Examples:</i>
    <pre><code title="unstartable in TestSuite"> new Job({name: "my_job",
    do_list: [Human.task({task: "Load filament now."}),
              IO.out("We're done.")]})
              </code></pre>
    <pre><code title="unstartable in TestSuite"> new Job({name: "my_job",
    do_list: [Human.task({title: "&lt;b>Attention&lt;/b> Operator!",
                          task:  "Load filament &lt;i>now&lt;/i>.",
                          add_stop_button: false,
                          dependent_job_names: [],
                          x: 100, y:50,
                          width:  300,
                          height: 120,
                          background_color: "rgb(200, 255, 200)"}),
    IO.out("We're done.")]})
    </code></pre>
</details> <!-- end task -->

<details id="Human.enter_choice_doc_id" class="doc_details"><summary>enter_choice</summary>
  <code>Human.enter_choice</code> presents a dialog
  allowing the user to choose one of several supplied options.
  It is the most flexible of the single-value entry Human instructions.
  See <a href="#" onclick="DocCode.open_doc('Human.task_doc_id', event)">Human.task</a>
  for behavior common to all Human instructions.<p></p>
  <i>Uncommon Parameters:</i><br/>
  <b>choices</b> Default: <code>[["Yes", true], ["No", false]]</code>. An array of choices.
      The user is allowed to select one of the given choices.<br/>
      Their are several different formats for a choice.
      <ul><li>A string. The string is displayed as the choice, and used as the value
              for the user_data_variable.</li>
          <li>An array of one string. Same as using just a string.</li>
          <li>An array of a string and a value.
              The first element of the array (must be a string) is displayed.
              If the value is a string, it is considered to be JS source code and
              is evaluated when the user clicks the button. The resultant value
              becomes the value of the user_data_variable.
              You may have the variable <code>this</code> in the string.
              It will have the value of the Job that this instruction is in.
              Note that you <i>might</i> not care about the value created but
              are just doing the evaluation for its side effects. This is as designed.
              You can eval any JS here for maximum flexibility.
              <p></p>
              If the value is not a string, it will be used directly as the
              value of the user_data_variable. The evaluation of this item
              happens at Job definition time.
              <p></p>
              Note that if you want the user_data variable to have the value
              as a string, you must use a format like <code>'"foo"'</code>. At Job definition
              time this becomes a string of 5 chars, <code>"foo"</code>.
              Then at button-click time, that is evaled and produces a string
              of 3 chars, <code title="unEVALable">foo</code> which is stored
              in the user_data_variable.
              </li>
          <li>An array of a string, a value and a boolean.
              Same as above but if the boolean is <code>true</code>,
              then the value produced by the array's 2nd element is
              considered to be an instruction and is inserted into
              the Job's do_list right after this Human.enter_choice instruction.</li>
      </ul>

  <b>show_choices_as_buttons</b> true or false, default: false. When false, the choices are 
    shown in a menu with the first choice selected.
    When true, each choice has a button and there is no <button>Done</button> button.<br/>
  <b>one_button_per_line</b> true or false, default: false. If true, each button
   appears on its own line in a vertical stack. If true, the buttons are positioned
   left to right, taking up more than 1 line only when necessary to display the extra buttons.<br/>
  <b>user_data_variable_name</b> Default: "choice". When the user clicks <button>Done</button>, 
  the selected choice will be made the value of the variable named in this parameter.
  That variable will be in the <code title="unEVALable code fragment"> user_data</code> of the current job.
  Within another instruction in the same job, the selected choice will be accessible using
  JavaScript. If the user_data_variable_name is 'my_color' and the choice is 'blue'.
  then <code title="unEVALable code fragment"> this.users_data.my_color</code> will return <code>'blue'</code>.
  You can access this value from <i>another</i> job via:<br/>
  <code title="unEVALable code fragment"> job.some-job-name.user_data.my_color</code>.
  Note that JavaScript from any job can also reset this value. For example:<br/>
  <code title="unEVALable code fragment"> job.some-job-name.user_data.my_color = 'green'</code>.
  <p></p>
  <i>Examples:</i>
  <pre><code title="unstartable in TestSuite"> new Job({name: "my_job",
          do_list: [Human.enter_choice({task: "Please pick one.",
                                         choices: ["aa", "bb", "cc"]}),
                    function(){out("You chose: " + this.user_data.choice)}
  ]})     </code></pre>
  Above we define 3 choices and display them in the default select menu.
  The default user_data_variable_name is <code>"choice"</code>, which
  can be read by any subsequent instruction. Using the default is a bit dangerous
  because it will be overwritten by a subsquent Human.enter_choice instruction
  (though that <i>might</i> be what you want).

  <pre><code title="unstartable in TestSuite"> new Job({name: "my_job",
          do_list: [Human.enter_choice({task: "Ready?",
                                        choices: [["Yes", true], ["No", false]],
                                        show_choices_as_buttons: true}),
                    function(){out("You chose: " + this.user_data.choice)}
  ]})     </code></pre>
  Above, When the user clicks on "Yes" or "No",
  user_data.choice will be bound to <code>true</code> or <code>false</code>.

  <pre><code title="unstartable in TestSuite">
  function myfn() {out("The job name is: " + this.name)}
  new Job({name: "my_job",
           show_instructions: Job.prototype.show_progress_and_user_data,
           do_list:
  [Human.enter_choice({
        choices: ["aa",
                  ["bb"],
                  ["cc", true],
                  ["dd", '"joe"'],
                  ["ee", 'this.name + " is cool"'],
                  ["ff", 'myfn.call(this)'],
                  ["gg", 'IO.out("hey")', true]
                 ],
           show_choices_as_buttons: true,
           add_stop_button: false,
           user_data_variable_name: "mychoice",
           height: 150
      })]})  </code></pre>
    Above we use <code title="unEVALable">show_instructions: Job.prototype.show_progress_and_user_data</code>
    so that our Job's user_data will be printed out in the progress bar, updated after
    each instruction is executed. This makes it easy to see our user-data as it is set.
    <p></p>
    We've used all the different kinds of choices described above. <br/>
    <b>"bb"</b> behaves the same as "aa"<br/>
    <b>"cc"</b> sets our user_data_variable to <code>true</code><br/>
    <b>"dd"</b> set our user_data_varabie to a string of 3 chars, joe.<br/>
    <b>"ee"</b> has the given source code evaled with <code>this</code> bound to
                the Job instance.<br/>
    <b>"ff"</b> calls <code title="unEVALable">myfn</code>. If you have
                something other than a very simple snippet, we recommend
                putting it in a function and calling it. That makes it
                easier to test and is overal more reliable.
                By using <code title="unEVALable">call</code> with a first arg,
                the value of <code>this</code> inside the function body will be
                that first arg's value.<br/>
    <b>"gg"</b> creates a new instruction and inserts it in the Job's do_list
                right below this Human.enter_choice instruction.
</details>

<details id="Human.enter_filepath_doc_id" class="doc_details"><summary>enter_filepath</summary>
When run, this instruction pops up a window containing the HTML input file
element. The user clicks a button to select a file.
When the user clicks on the submit button,
the chosen file is set to the Job's user_data variable
passed in. This instruction has the usual options for Human.enter
instructions.
<i>Parameter:</i>
<b>user_data_variable_name</b> Default: <code>"a_filepath"</code>
A string of the name of the user_data variable in the job
to set to the chosen file.
If no file is chosen, the variable is bound to <code>null</code>
<p></p>
<i>Example:</i><br/>
<pre><code title="unstartable in TestSuite">new Job({name: "my_job",
         do_list: [Human.enter_filepath(
                     {task: "Pick a file.",
                      user_data_variable_name: "my_file",
                      height: 150}),
                   function(){
                     return IO.out("You chose: " +
                                       this.user_data.my_file)
                   }]})    </code></pre>
</details>

<details id="Human.enter_instruction_doc_id" class="doc_details"><summary>enter_instruction</summary>
  Presents a dialog allowing the user to enter an instruction to be immediately run.
  This can also record instructions and create a job with the recorded do_list.
  See <a href="#" onclick="DocCode.open_doc('Human.task_doc_id', event)">Human.task</a> for behavior common to all Human instructions.<p></p>
  This instruction does not use <code title="unEVALable">user_data_variable_name</code>.<p></p>
  This instruction can only be used on jobs with a Dexter robot.<p></p>
  <i>Uncommon Paramaters:</i><br/>
  <b>instruction_type</b> Default: <code>"Dexter.move_all_joints"</code>. Set's the dialog's default instruction type.<br/>
  <b>instruction_args</b> Default <code>"0, 0, 0, 0, 0"</code>.
    Set's the dialog's default instruction args.
  <p></p>
  <i>Examples:</i><br/>
  <pre><code title="unstartable in TestSuite"> new Job({name: "my_job",
    do_list: [Human.enter_instruction({task: "do it"})]})
        </code></pre>

  <pre><code title="unstartable in TestSuite"> new Job({name: "my_job",
    do_list: [Human.enter_instruction(
              {task: "do it",
               instruction_type: "Dexter.sleep",
               instruction_args: "0, 0.2, 0.3"
                })]})
        </code></pre>
  See also <button>Jobs</button> menu/Run Instruction.<br/>
  This instruction is a work in progress. See the tooltips in the dialog for more help.
</details>

<details id="Human.enter_number_doc_id" class="doc_details"><summary>enter_number</summary>
    <code>Human.enter_number</code> presents a dialog allowing the user to enter a number via typing or clicking.
  See <a href="#" onclick="DocCode.open_doc('Human.task_doc_id', event)">Human.task</a> for behavior common to all Human instructions.<p></p>
  See <a href="#" onclick="DocCode.open_doc('Human.enter_choice_doc_id', event)">Human.enter_choice</a> for documentation on the
  <b>user_data_variable_name</b> parameter.
  <p></p>
  <i>Uncommon Paramaters:</i><br/>
  <b>initial_value</b> Default: <code>0</code>.</br/>
  <b>min</b> Default: <code>0</code>. The minimun acceptable value.<br/>
  <b>max</b> Default: <code>100</code>. The maximum acceptable value.<br/>
  <b>step</b> Default: <code>1</code>. The step size that clicking on the
            increment and decriment arrows will add or subtract
             to the current value.<br/>
  <b>user_data_variable_name</b> Default: <code>"a_number"</code>.
       Where the chosen number is stored.
  <p></p>
  <i>Examples:</i>
  <pre><code title="unstartable in TestSuite"> new Job({name: "my_job",
  do_list: [Human.enter_number({task: "How much?"}),
            function(){ out("Amount: " +
                        this.user_data.a_number)}]})
            </code></pre>
    In the above example, the 2nd instruction couldn't be simply
    <code title="unEVALable">IO.out("Amount: " this.user_data.a_number)</code><br/>
    nor even:<br/>
    <code title="unEVALable">IO.out("Amount: " Job.my_job.user_data.a_number)</code><br/>
    because each of those would be evaluated during the call to<br/>
    <code title="unEVALable">new Job(...)</code> and thus
    the new job would not yet be defined, much less have the
    first instruction run.
    By wrapping this in a function, we get the critical code
    evaled at the time the 2nd instruction is called,
    AND we have <code title="unEVALable">this</code> bound to the
    job instance so we don't have to mention the Job's name inside
    the code. This is important because you might want to change its name and
    don't want the code to break if you do.

    <pre><code title="unstartable in TestSuite"> new Job({name: "my_job",
  do_list: [Human.enter_number({task: "length to cut?",
                                min: 40,
                                max: 75,
                                initial_value: 50,
                                step: 0.5,
                                user_data_variable_name: "size"})]})
        </code></pre>
</details>

<details id="Human.enter_text_doc_id" class="doc_details"><summary>enter_text</summary>
    <code>Human.enter_text</code> presents a dialog allowing the user to enter text via typing.
  See <a href="#" onclick="DocCode.open_doc('Human.task_doc_id', event)">Human.task</a> for behavior common to all Human instructions.<p></p>
  <i>Uncommon Paramaters:</i><br/>
  <b>initial_value</b> Default: <code>""</code>.<br/>
  <b>line_count</b> Default <code>1</code>. The number of lines that the input control will be configured for.
     If this is more than 1, a user will be able to drag the lower right corner of the text field
     to increase the visible lines.<br/>
  <b>user_data_variable_name</b> Default: <code title="unEVALable">"a_text"</code>
    See <a href="#" onclick="DocCode.open_doc('Human.enter_choice_doc_id', event)">Human.enter_choice</a>
    for more documentation on this.
    <p></p>
    <i>Examples:</i><br/>
    <pre><code title="unstartable in TestSuite"> new Job({name: "my_job",
    do_list: [Human.enter_text({task: "Enter message."}),
              function(){out("The message: " + this.user_data.a_text) }]})
              </code></pre>

    <pre><code title="unstartable in TestSuite"> new Job({name: "my_job",
    do_list: [Human.enter_text({task: "Enter message.",
                                initial_value: "SOS",
                                line_count: 3,
                                user_data_variable_name: "a_mess"
                             })]})
            </code></pre>
</details>

<details id="Human.notify_doc_id" class="doc_details"><summary>notify</summary>
    <code>Human.notify</code> displays information for the user.
  See <a href="#" onclick="DocCode.open_doc('Human.task_doc_id', event)">Human.task</a> for behavior common to all Human instructions,
  but unlike other Human instructions, <b>notify</b> does not have a
  <code title="unEVALable">user_data_variable_name</code> parameter because it
  does not request any information from the user.
  It also does not have a "Continue" button, because
  it does not wait for a user action before allowing its job to continue to the next do_list item.<p></p>
  <i>Uncommon Parameters:</i><br/>
  <b>window</b> true or false. Default: <code>true</code>. Whether or not to present the information in a window.<br/>
  <b>output_pane</b> true or false. Default: <code>true</code>. Whether or not to present the task in the output pane.<br/>
  <b>beep_count</b> Non-negative integer. Default: <code>0</code>. How many beep 'alerts' to sound when
                   this instruction is run.<br/>
  <b>speak</b> true or false. Default: <code>false</code>.
         Whether or not to speak the title and task when this instruction is run.<br/>
  <b>close_same_titled_windows</b> Default: <code>false</code> This parameter
     is also in <code>show_window</code> but there, it has a default of <code>true</code>.
     Human.notify has a different default, as notifications, in general, should
     all be read by a human and explictly closed. <i>But</i>, you might
     just want the human to see the latest notification with the same title,
     in which case you should pass in a close_same_titled_windows of <code>true</code>.
   <p></p>
   <i>Examples:</i>
    <pre><code> new Job({name: "my_job",
    do_list: [Human.notify({task: "do it"}),
              Human.notify({task: "do more"})]})
        </code></pre>

    <pre><code> new Job({name: "my_job",
          do_list: [Human.notify({task: "do it",
          window: true,
          output_pane: false,
          beep_count: 3,
          speak: true
    })]})
        </code></pre>
</details>
<details id="Human.show_window_doc_id" class="doc_details"><summary>show_window</summary>
<i>show_window</i> comes in two flavors. The first is as a function that can
be called from any JS code.
It is documented under<br/><a href="#" onclick="DocCode.open_doc(show_window_doc_id, event)">
Ref Man/Window System/show_window</a>
<p></p>
The second is as a Human robot instruction. It is documented here but
you will need the function-equivalent documentation to understand the show_window instruction.
<code>Human.show_window</code> is very similar to  <code>show_window</code>,
but intended to be an instruction in a job. When the show_window instruction
is run, a dialog box pops up containing its content, just like the function,
except that it pauses the job that it is in.
Clicking on buttons, etc, calls the callback function, just like the function.
But when a "submit" button is clicked or something else in the
callback function that also closes the window, such as a call to
<code title="unEVALable code fragment.">SW.close_window(vals.window_index)</code>,
here's what happens:
<ol><li>The dialog box is closed.</li>
    <li>The argument to the callback function that contains all the values
        of all the input widgets is bound to the Job's <samp>user_data</samp> variable
        named in user_data_variable_name argument to the instruction.
        These values can be used by subsequent instructions.</li>
    <li>The instruction is finished, and the next instruction in the Job's
        do-list (if any) is run.</li>
</ol>
<p></p>
If you just want to get one value at a time from a user, its easier to
use the other Human instructions for number, text, etc. But
if you want to get multiple values in one dialog, using this
instruction is the way to go.
<p></p>
<i>Parameters:</i><br/>
The vast majority of the parameters to the show_window instruction are the same
as to the show_window function. Here we only document differences.<br/>
<b>callback</b> Very similar to the function-equivalent except that
when it is called, <code title="unEVALable JS fragment">this</code> is bound
to the job that the instruction is in. You can use <code>this</code> to, for instance, stop the job,
by calling (within the callback)
<code title="unEVALable JS fragment">this.stop_for_reason("interrupted", "your explanation.")</code>
<br/>It is common in using this instruction to not have a callback function, since the
real action(s) taken due to the values that the user has input occurs by subsequent
instructions in the job that read those values from the Job's user_data.<br/>
<b>user_data_variable_name</b> Default: <code>"show_window_vals"</code>.
Similar to other Human instructions, this is the place that values from
input elements are stored when the dialog is closed.
<p></p>
<i>Example:</i><br/>
<pre><code title="unstartable in TestSuite">new Job({name: "my_job",
         do_list:
           [Human.show_window({content:
&#96;First name: &lt;input type="text" name="first_name"/>&lt;br/>
 Last name:  &lt;input type="text" name="last_name"/>&lt;br/>
 &lt;input type="submit" value="Done"/>&#96;,
                          user_data_variable_name: "my_name"}),
            function(){ out("Hello, " +
                            this.user_data.my_name.first_name + " " +
                            this.user_data.my_name.last_name)}]})
                         </code></pre>
    In this example, we don't care about the callback function.
    The values of the first and last name that the user entered are
    stored in<br/>
    <code title="unEvalable JS fragment">Job.my_job.user_data.my_name.first_name</code> (and last_name)<br/>
    then used by the 2nd instruction to print them out.
    <p></p>
    An easy debugging trick, is that you can EVAL the call to <code>show_window</code>
    and see the dialog that will be presented, by running the instruction WITHOUT
    actually running the job. To do this for the above example, select the
    text starting with <code>show_window</code> and continuing only through
    its close paren, excluding the following comma separating it from the
    next instruction. Then click the <button>Eval</button> button.
    <p></p>
    Note that when you click on buttons in the resulting dialog,
    <code>this</code> will not be bound to
    the surrounding job, but otherwise the callback should behave the same
    as it does when running the whole job.
</details>

</details> <!-- end human instructions -->
</details> <!-- end Human -->

<details id="Serial_doc_id" class="doc_details"><summary>Serial</summary>
<i>Serial</i> is not a specific robot per se, its a connection to another computer via its serial port.
This connection is very general. It knows nothing about the actual capabilities of what its
connected to, only that it can send and receive strings on its serial port.
<p></p>
DDE's Serial robot is quite similar to Dexter from DDE's perspective. It
can be sent instructions from a Job's do_list and its output is interpreted as
a "robot_status" similarly to Dexter's robot_status. The Serial robot has been
used to connect to Arduino boards via its USB connector, and should work with Raspberry Pi and other
similar devices.

<details class="doc_details"><summary>Arduino</summary>
In order for the serial port connection to work with Arduino, you need to have
the Arduino IDE installed. Its a free and easy download from 
<a target="_blank" href="https://www.arduino.cc">https://www.arduino.cc</a>
<p></p>If you don't get a connection, sometimes unplugging and replugging the 
USB cable will help. You can also try relaunching DDE.
Another debugging techinque is using the Arduino IDE's menubar/Tools/Serial Monitor.
The upper type in area is for a string that you want to send to the board.
The lower area displays strings coming back from the board.
</details>

<details class="doc_details"><summary>Arduino and Mac</summary>
Beware: It appears that Arduino plays poorly with Macintosh computers.
We've been unsuccessful at connecting a Sparkfun RedBoard with Mac and
have heard of other problems between Arduino's Uno R3 boards. We've had success
with Arduino Leonardo and believe Arduino Micro will also work due to its
similar communication architecture. (Feb 2017) The Arduino Micro cannot
accomodate standard Arduino add-on (shield) boards but the Leonardo can.
</details> <!-- end Arduino and Mac-->

Create an instance of Serial similar to the other robots. Example: <br/>
<code title="unEVALable code fragment"> new Serial({name: "S1", ...})</code><p></p>

<details class="doc_details"><summary>Parameters to new Serial</summary>
<b>name</b> A string. Makes this instance of a Serial Robot accessible from Robot.the_name<br/>

<b>simulate</b> <code>true</code>, <code>false</code> or <code>null</code>. Default <code>null</code>.
If <code>true</code>, no data is sent or received over the actual serial port.<br/>
If <code>null</code>, the actual value for simulate comes from the Misc pane header simulate radio buttons,
just like for Dexter robots.<br/>

<b>sim_fun</b> A function. Default <code> return_first_arg</code>.
Used only when <code title="unEVALable code fragment"> simulate: true</code><br/>
When a Serial.string.instruction is simulated, its argument,
<code title="unEVALable code fragment"> instruction_string</code> is
passed to the sim_fun. The value returned from calling sim_fun is the simulated return value (a string)
from the serial port for this instruction. The function can use any JavaScript to compute
the returned string. <p></p>
Consider the item_delimiter when making up this returned string. Often
the string should end in the item_delimiter, but it doesn't have to. <p></p>
We're not expecting
the sim_fun to do exactly what the Serial hardware would do. In fact if it could,
there would be no need for the hardware! Rather sim_fun should perform as a diagnostic
for at least one case or perhaps a few cases of instruction strings.
The default value of <code title="unEVALable code fragment"> return_first_arg</code> just returns its input to help you verify that
the basic communication path is working.<br/>

<b>path</b> A string. Required. The label for the device connected to a serial port on the computer running DDE 
that you want this software robot to connect to.
Valid paths can be seen by calling<br/>
<code title="not in TestSuite">serial_devices()</code><br/>
On Windows, they look something like
 <code>"COM3"</code>.
On Mac, they look something like <code>"/dev/tty.usbmodem1411"</code>. 
 In addition to the tty path, Mac's also have a "cu" path such as: <code>"/dev/cu.usbmodem1411"</code>.
 We've found both <code title="unEVALable code fragment"> tty</code> and
 <code title="unEVALable code fragment"> cu</code> paths to work with DDE.<br/>

<b>connect_options</b> A literal object. Default <code>{}</code>. <br/>
Example: <code>{baudRate: 9600}</code> <br/>
9600 is the default baudRate (which is the same as bitrate, i.e. bits per second). All options documented at
<a target="_blank" href="https://www.npmjs.com/package/serialport#serialport-path-options-opencallback">https://www.npmjs.com/package/serialport#serialport-path-options-opencallback</a><br/>

<b>capture_n_items</b> A non-negative integer. Default <code>1</code>.<br/>
DDE waits until it has received capture_n_items from the device before calling the next instruction on
the job's do_list. The string returned by the serial device is cut up by
<code title="unEVALable code fragment"> item_delimiter</code>,
to determine the number of items returned by the serial device.
<br/>

<b>item_delimiter</b> A string. Default <code>"\\n"</code>. Note that Arduino's 
<code title="unEVALable code fragment"> Serial.println("foo")</code> will send out a 5 character string of <code>"foo\\r\\n"</code><br/>

<b>trim_whitespace</b> A boolean. Default <code>true</code>.
If this is true, then an "item" (string) returned by the serial port, will have the
whitespace at its beginning and end removed. Note that with the defaults in place
of an item_delimiter of <code>"\\n"</code>, and trim_whitespace of <code>true</code>,
then when Arduino executes: <code title="unEVALable code fragment"> Serial.println("hi")</code> the actual 4 characters
transmitted to DDE are: <code title="unEVALable code fragment"> vhi\\r\\n</code>. It is recognized as one item because
it ends in the delimiter, giving us a 3 character item, except that the
<code title="unEVALable code fragment"> vtrim_whitespace</code>
takes off that final <code title="unEVALable code fragment"> v\\r</code> and we're left with
<code title="unEVALable code fragment"> hi</code>, usually what you want.
<p></p>
This arrangement gets around our society's failure to set one standard for the most important formatting
operation, breaking up of lines, with <code title="unEVALable code fragment"> \\n</code> being used by Unix and Mac, and
<code title="unEVALable code fragment"> \\r\\n</code> being used by Windows and Arduino. DDE tries to use the more
sensible <code title="unEVALable code fragment"> \\n</code> where possible. Thus <code title="unEVALable code fragment"> \\n</code> can be our
default item_delimiter and we still win calling Arduino's
<code title="unEVALable code fragment"> Serial.println</code>.
<br/>

<b>parse_items</b> true or false. Default true. If true, the returned items will be converted from strings to
primitive JS data types: booleans, numbers, arrays, literal objects, strings, and aggrigates of such using
<code>JSON.parse</code>
Example: In Arduino C, you could have a program that executes: 
<br/><code title="unEVALable code fragment"> Serial.println("[1, 20, 300]");</code><br/>
With <code title="unEVALable code fragment"> parse_items: true</code> that would result in DDE's robot_status array as an element of
an array of three integers.<br/>

<b>capture_extras</b> One of the following strings.
<ul><li><code>"error"</code> (the default) means that any extra data output by the board will cause an error, halting the current job.</li>
    <li><code>"capture"</code> means that extra output will be appended onto the end of the robot_status associated
        with the last instruction sent. Beware that such data won't be available as soon as the expected
        data of capture_n_items has been received.</li> 
    <li><code>"ignore"</code> means that any items after capture_n_items and before the next instruction sent will
        be thrown away, but will not cause an error.</li>
</ul>
<b>instruction_callback</b> A function that is called when a valid return value is received
to control what a job should do next. The default causes the next instruction in the Job's
do_list to be executed. Usually you won't want to change this.<br/>
</details> <!-- End Serial parameters to new -->

<details class="doc_details"><summary>Serial Instructions</summary>
<details id="Serial.string_instruction_doc_id" class="doc_details"><summary>string_instruction</summary>
takes one argument, a string, which is sent to the Serial robot.
If the argument is <i>not</i> a string, it is converted to one using <code>JSON.stringify</code> .
The functionality of that string is entirely dependent on how the device
you are sending it to, interprets it.<br/>
Example: <code>Serial.string_instruction(4.5)</code><br/>
sends the 3 character string: <code>"4.5"</code>  to the serial robot.
<p></p>
This instruction causes the Job its in to pause until the instruction
completes.
<p></p>
If you'd like to send string instructions to more than one serial port,
you can use an instance of a serial port as the subject of a string_instruction.<br/>
Example:
<pre><code title="not in TestSuite">
new Serial({name: "S2",
            path: "/dev/tty.usbmodem2822"
           })
new Job({name: "j1",
         robot: new Serial({name: "S1",
                            path: "/dev/tty.usbmodem1411"}),
         do_list: [Serial.string_instruction("hi"),
                   Serial.S2.string_instruction("hey")]})
    </code></pre>
The first instruction goes to Serial robot "S1".
The second goes to Serial robot "S2".<br/>
See Jobs menu/Insert Example/Serial Port for an extended example.
</details>

<details  class="doc_details"><summary>IO.grab_robot_status</summary>
This is not a <i>Serial</i> instruction, but one that can be used
with any robot. It captures the robot_status, or some portion of it,
and saves it away in a user_data variable on the Job instance for
use by subsequent instructions.
<p></p>
When a Serial.string_instruction is run and the device retruns a value,
that string is placed in the robot_status. You can then use
IO.grab_robot_status to extract it from the robot status
and stick it in a user_data variable.
See <a href="#" onclick="DocCode.open_doc('IO.grab_robot_status_doc_id', event)">
        IO.grab_robot_status</a>
</details>


</details> <!-- end of Serial Instructions -->
<details class="doc_details"><summary>Multiple Serial Ports</summary>
Normally, each Job has a robot. If you must connect to multiple
serial ports, you can set up a Job for each one and give
its robot one of the serial ports you need to connect to.
<p></p>
However, you can also use the serial port robot as a <i>subject</i> to
the call to a string_instruction. Thus you can call multiple serial
ports in one job. The job will pause until each completes.
In other words, the serial string_instructions run <i>in serial</i>,
not parallel.
<p></p>
You can also call <code>IO.grab_robot_status</code> with a subject of
a robot instance (instead of <code>Robot</code>) so that
you can be sure to get the correct return value from
a given string_instruction instruction.<br/>
<i>Example:</i>
<pre><code title="not in testsuite because works on Mac but not on windows due to the 'comName' reference.">
new Serial({name: "S1", simulate: null,
			sim_fun: function(input){
                        return "got: " + input + "\n"
                     },
            path: last(serial_devices()).comName,
            connect_options: {baudRate: 300},
            capture_n_items: 1,
            parse_items: true}
)
new Job({name: "j10b",
         robot: new Brain(), //not used, but prevents the default Robot.dexter0 from being used
         do_list: [Robot.S1.string_instruction("y"),
                   Robot.S1.grab_robot_status("yes_result"),
                   Control.wait_until(2),
                   Robot.S1.string_instruction("n"),
                   Robot.S1.grab_robot_status("no_result", Serial.DATA0)
                   ]}
)
    </code></pre>
</details>

<details class="doc_details"><summary>Low Level Serial</summary>
Due to the interplay between two different computers (the one running DDE and the Serial device)
and their entirely different software protocols, debugging Serial robot interfaces is challenging.
DDE provides a number of low level functions that can be invoked without interacting with a job
to help you verify connectivity and may be useful in some applications.<p></p>

<b id="serial_devices_doc_id"><code>serial_devices</code></b> Returns an array of objects representing
the available devices on serial ports. the <code title="unEVALable code fragment"> comName</code> field holds the path to the serial
port that you can use to connect to that device.
<p></p>
<i>Examples:</i><br/>
<code title="not in TestSuite"> serial_devices()</code> => An array of objects that represent devices connected
to serial ports on your computer.<br/>
<code title="not in TestSuite"> serial_devices()[0].path </code> => <samp> "COM3" </samp>
Note that the same device plugged in to computers with different operating systems
will likely result in objects that contain different fields.<br/>
serial_devices does not work on the Job Engine. Use instead ...
<p></p>
<b id="serial_devices_async_doc_id"><code>serial_devices_async</code></b><br/>
<i>Parameter:</i><br/>
<b>callback</b> is a function that is passed two arguments:<br/>
<i>err</i> null, or, if there's an error, an error object.
 <code title="unEVALable code fragment.">err.message</code>
 gets an error message string<br/>
 <i>ports</i> An array of serial ports objects.<br/>
 <code title="unEVALable fragment">ports[0].comName</code> => <samp>"/dev/tty.Bluetooth-Incoming-Port"</samp>
<p></p>
<b id="serial_port_path_to_info_map_doc_id"><code>serial_port_path_to_info_map</code></b> Holds the mapping between the
path of a serial device and lots of properties about it, most of which come from defining
the associated Serial robot. The value of this global variable is a JS literal object with
keys of each path to which there is a serial connection, and values of
another JS literal object holding useful properties of that connection, i.e. its "info".
<p></p>
<i>Example:</i><br/>
<code title="unEVALable code fragment"> serial_port_path_to_info_map[spath]</code>
<p></p>

<details id="serial_connect_low_level_doc_id"><summary>serial_connect_low_level</summary>
Allows you to create a software connection between a serial device and DDE software.
Does not have to be in a Job.<br>
    <i>Parameters</i><br/>
    <b>port_path</b> Default: None. String
    <b>port_options</b> Default: <code>{}</code><br/>
    <b>capture_n_items</b> Default: <code>1</code><br/>
    <b>item_delimiter</b> Default: <code>"\n"</code><br/>
    <b>trim_whitespace</b> Default: <code>true</code><br/>
    <b>parse_items</b> Default: <code>true</code><br/>
    <b>capture_extras</b> Default: <code>false</code><br/>
    <b>callback</b> Default: <code title="unEVALable">onReceiveCallback_low_level</code><br>
      Called with a <code>this</code> of the port object, and two arguments:
      <ul>
        <li>data  a string.</li>
        <li>port_path a string.</li>
      </ul>
    <br/>
    <b>error_callback</b> Default: <code  title="unEVALable">onReceiveErrorCallback_low_level</code><br/>
        Called with a <code>this</code> of the port object, and two arguments:
        <ul>
            <li>data  a string.</li>
            <li>port_path a string.</li>
        </ul>
        <br/>
    <b>open_callback</b> Default: <code  title="unEVALable">onOpenCallback_low_level</code><br/>
        Called with a <code>this</code> of the port object, and two arguments:
        <ul>
            <li>err  an error object </li>
            <li>port_path a string.</li>
        </ul><br/>
    <b>close_callback</b> Default: <code  title="unEVALable">onCloseCallback_low_level</code><br/>
    Called with a <code>this</code> of the port object, and one arguments:
    <ul>
        <li>port_path a string.</li>
    </ul><br/>


<i>Example:</i><br/>
<code title="unEVALable code fragment"> serial_connect_low_level(spath)</code>
</details>
<hr/>

<b id="serial_send_low_level_doc_id"><code title="unEVALable code fragment"> serial_send_low_level( "some_path", "some_string")</code></b>
Allows you to send a string to a serial device from DDE but NOT in a job.
<p></p>

<b id="serial_disconnect_doc_id"><code title="unEVALable code fragment"> serial_disconnect("some_path")</code></b> Disconnects an existing connection.
<p></p>

<b id="serial_disconnect_all_doc_id"><code title="unEVALable code fragment"> serial_disconnect_all()</code></b> Disconnects all serial port connections.
<p></p>

<b id="serial_flush_doc_id"><code title="unEVALable code fragment"> serial_flush("some_path")</code></b> Removes all bytes in the given path's input and output buffers.
<p></p>
Though strictly unnecessary, we recommend:
<ol>
    <li>supplying a <i>sim_fun</i> to your Serial robot definition</li>
    <li>setting its <i>simulate</i> arg to null</li>
    <li>using the Misc pane header simulate radio buttons to toggle between
        using simulation and not</li>
</ol>
while debugging.<br/>
See Job Example <i>Serial Port</i> for examples.
</details> <!-- End Low Level Serial -->

<details class="doc_details"><summary>Modbus</summary>
Modbus is a serial communications prototcol used to share information
between PLC (Programmable Logic Controller) devices and computers.
It is commonly used in automating industrial machines.
DDE has the npm package <b>modbus-serial</b> installed in it.<br/>
<i>Example:</i><br/>
<code>var ModbusRTU = require("modbus-serial")</code><br/>
This loads the modbus-serial software into DDE.
For documentation, see
<a target="_blank" href="https://www.npmjs.com/package/modbus-serial">modbus_serial</a>.
</details>
</details> <!-- End Serial -->

</details> <!-- end Robots -->

<details id="units_system_help_doc_id" class="doc_details"><summary>Units System</summary>
    Throughout DDE, the primary functions and instructions assume SI units for their
    numerical values. Example: length is in meters.
    There are a few exceptions to this rule, but we stick to it for the major functionality.
    Internally, Dexter uses microns for length and arcseconds for degrees,
    but programmers rarely see such numbers.
    <p></p>
    However, we recognize that for various reasons, you might want to record numbers
    in some other units. To facilitate that, we provide an easy way to convert
    from other common units into DDE standard units.
    On the DDE menubar/Series/DDE/Units/ you can see the various series for the
    dimensions DDE supports. Pick one to insert it (such as "length" to insert "_km".)
    <code>_km</code> is a global variable bound to a constant number, in this case, 1000.
    To convert a number "my_length" from kilometers to the DDE standard, meters, use
    <code title="unEVALable code fragment"> my_length*_km</code> and that will eval to: my_length * 1000
    which represents my_length in meters instead of kilometers.
    If my_length is 2, and it is meant to refer to 2 kilometers, then
    my_length*_km evals to 2000 and is meant to be in meters.
    You can think of "*_km" as declaring the units that my_length is in.
    <h4>More Examples</h4>
    _unitname is the conversion factor to go from that unitname into the Base Unit for that series.
    For example 1*_rev specifies 1 revolution and because the Base Unit for angles is degrees,
    1*_rev will become 360 and 0.5*_rev will become 180 and so on.
    There is nothing fancy going on behind the scenes, _rev is just a number,
    in this case 360. To go backwards from a base unit to a desired unit simply divide.
    If you were wondering how many revolutions 1 million degrees is eval what's in white below:
    1000000 / _rev
    It works for combination of unit too. For example the Base Unit for speed is meter / second.
    If you are not familiar with how much a m/s is you specify your speed,
     then multiply by _mile / _hour for MPH or _in / _s inches per second.
     These can help with complicated conversions for example:
    <p></p>
    I've run a mile in 4:24 what is that in MPH?
    var meter_per_sec = _mile / (4*_min+24*_s)
    var MPH = meter_per_sec / (_mile/_hour)
    <p></p>
    Mathematically, the notation _unit is shorthand for base_unit / _unit.
    For example the value of _rev is 360 as in there are 360 degrees per 1 revolution.
    This system only works when the Base Unit is assumed.
    DDE "assumes" the Base Units by have every constant in those units and having every
    function only work with the Base Units.
    The majority of Base Units are SI units with a few exceptions:<br/>
    For angles: DDE uses degree instead of radian.<br/>
    For temperature DDE uses -Celsius instead of Kelvin.
    <p></p>
    <h4>Base Units</h4>
    These are the units that DDE uses in its constants and functions.
    These are also the units that the Units System converts to.
    <ul><li>For length: meters</li>
        <li>For angles: degree</li>
        <li>For duration: second</li>
        <li>For weight: kilogram</li>
        <li>For mass: Newton</li>
        <li>For frequency: hertz</li>
        <li>For Pascal</li>
        <li>For energy: Joule</li>
        <li>For power: Watt</li>
    </ul>
    <details class="doc_details"><summary>Temperature Conversion</summary>
        <details id="deg_c_to_c_doc_id" class="doc_details"><summary>deg_c_to_c</summary>
            Just returns its argument. Useful for "declaring" that a value is in centigrade.<br/>
            <i>Parameter:</i><br/>
            <b>deg_c</b> Degrees in Centigrade<br/>
            <i>Example:</i><br/>
            <code>deg_c_to_c(100)</code> => <samp>100</samp>
        </details>

        <details id="deg_c_to_f_doc_id" class="doc_details"><summary>deg_c_to_f</summary>
            Converts degrees Centigrate to degrees Fahrenheit.<br/>
            <i>Parameter:</i><br/>
            <b>deg_c</b> Degrees in Centigrade<br/>
            <i>Example:</i><br/>
            <code>deg_c_to_f(100)</code> => <samp>212</samp>
        </details>

        <details id="deg_f_to_c_doc_id" class="doc_details"><summary>deg_f_to_c</summary>
            Converts degrees Fahrenheit to degrees Centigrade.<br/>
            <i>Parameter:</i><br/>
                <b>deg_f</b> Degrees in Fahrenheit<br/>
            <i>Example:</i><br/>
            <code>deg_f_to_c(212)</code> => <samp>100</samp>
        </details>

        <details id="deg_c_to_k_doc_id" class="doc_details"><summary>deg_c_to_k</summary>
            Converts degrees Centigrade to degrees Kelvin.<br/>
            <i>Parameter:</i><br/>
            <b>deg_c</b> Degrees in Centigrate<br/>
            <i>Example:</i><br/>
            <code>deg_c_to_k(100)</code> => <samp>373.15</samp>
        </details>

        <details id="deg_k_to_c_doc_id" class="doc_details"><summary>deg_k_to_c</summary>
            Converts degrees Kelvin to degrees Centigrade.<br/>
            <i>Parameter:</i><br/>
                <b>deg_k</b> Degrees in Kelvin<br/>
                <i>Example:</i><br/>
                <code>deg_k_to_c(100)</code> => <samp>-173.14999999999998</samp>
        </details>

        <details id="deg_k_to_f_doc_id" class="doc_details"><summary>deg_k_to_f</summary>
            Converts degrees Kelvin to degrees Fahrenheit.<br/>
            <i>Parameter:</i><br/>
            <b>deg_k</b> Degrees in Fahrenheit<br/>
            <i>Example:</i><br/>
            <code>deg_k_to_f(373.15)</code> => <samp>212</samp>
        </details>

        <details id="deg_f_to_k_doc_id" class="doc_details"><summary>deg_f_to_k</summary>
            Converts degrees Fahrenheit to degrees Kelvin.<br/>
            <i>Parameter:</i><br/>
            <b>deg_f</b> Degrees in Fahrenheit<br/>
            <i>Example:</i><br/>
            <code>deg_f_to_k(212)</code> => <samp>373.15</samp>
        </details>
     </details> <!-- end Temperatur Conversion -->
    <details id="Duration_doc_id" class="doc_details"><summary>Duration</summary>
     Duration is a class. Instances of it represent an amount of time.<br/>
     <i>Constructor Parameters</i><br/>
     <b>string_or_hours</b> Default: 0. If a string, this should be in the format
        <code>"23:59:59"</code> for hours:minutes:seconds.
        If this is a number, it is the number of hours in the duration.
        Like the rest of the arguments,
        that number must be non-negative. It can be a float
        or exceed the next higher level time unit.
        In the case of hours, that's 24.
        The total duration represented by the instance is the
        hours + minutes + seconds + milliseconds
        <br/>
     <b>minutes</b> Default: 0. The number of minutes of the duration.<br/>
     <b>seconds</b> Default: 0. The number of seconds of the duration.<br/>
     <b>milliseconds</b> Default: 0. The number of milliseconds of the duration.
     <p></p>
     <i>Instance Variable</i><br/>
     <b>milliseconds</b> An instance variable holding the total number
     of miliseconds of the duration.<br/>
     <i>Method</i><br/>
     <b>to_seconds()</b> Returns the total number of seconds of the duration
     as a floating point number.
     <p></p>
     <i>Examples:</i><br/>
     <code>new Duration().to_seconds()</code> => <samp>0</samp><br/>
     <code>new Duration(0, 0, 0, 2000).to_seconds()</code>   => <samp>2</samp><br/>
     <code>new Duration(0, 0, 1.5, 7).milliseconds</code> => <samp>1507</samp>
    </details>
  </details> <!-- end units-->

<details class="doc_details"><summary>Object System</summary>
<details class="doc_details"><summary>Overview</summary>
An object system helps you organize data that can inherit from
other objects or classes. Most programming languages have a 
class-instance based object system. JavaScript's new class-based
object system is a mediocre class-instance object system.
But the original JavaScript object system is supposed to
be a "prototype" object system. Good prototype object systems
are simpler, more flexible and easier to learn than
class-instance object systems. However, JS's original object
system isn't a good prototype object system as demonstrated by
the numerous object system varients added on to JS, including
JS 6's class object system. 
<p></p>
One of the problems with class-instance object systems is that
they force you to decide whether an object should be a class
or an instance. But sometimes you want to use a particular object
as both a class (to inherit from) and an instance (that
you can set instance variables in). You may also want to
"inhert" from an "instance". One of the most powerful
descriptive mechanisms in natural language is to say
something like "The chair I want is just like this one
except its blue." This is using an instance of a chair
to describe another instance of chair that inherits 
from the first instance. Class-instance object systems
don't allow you to do this, but good prototype object systems
and DDE's object system do.
<p></p>
We've coerced JS's prototype object system into
a more useful one by adding some methods to JavaScript.
These new methods, in conjunction with existing JS functions,
give you a pretty good prototype object system.
<p></p>
</details> <!-- overview -->

<details class="doc_details"><summary>Calling Methods</summary>
Method calls look very similar to Javscript method calls.
Within the body of a method, you can use <code>this</code> to refer
to the object instance that the method was called with, just like JS.
</details>

<details class="doc_details"><summary>New Object System Methods</summary>
DDE augments JS with some new variables, functions and methods to
help you get the most value out of a prototype object system.

<details id="rootObject_doc_id" class="doc_details"><summary>Root</summary>
<code>Root</code> is a global constant that contains the root object of DDE's object system.
</details>

<details id="newObject_doc_id" class="doc_details"><summary>newObject</summary>
<code>newObject</code> let's you create a new object. It takes
literal objects as arguments, usually just one.
The properties of the arguments become the properties
of the new object. If two of the input objects have a same named property,
the property in the resulting object will have the value of the <i>last</i> argument.
There are three properties that behave 
specially.
<p></p>
<b><i>prototype</i></b> This property sets the "parent" object
of the new object. <i>prototype</i> defaults to <code>Root</code>.
Once you have the new object, <code title="unEVALable code fragment"> new_obj.prototype</code> gives you
back that prototype. Unlike most other properties, you cannot set this property and win.
Class-instance object systems don't allow you to change the class of an object.
In practice, this usually isn't needed.
<p></p>
<b><i>name</i></b> This optional property gives the new object a "name"
property (as is normal), but it also creates a field in the prototype
object with the new name and a value of the new object. By doing this,
you have a path from the <code>Root</code> to this new object using the
object names from the top on down separated by dot.
The names immediately under the root object are global so
you can omit <code>Root</code> from such paths.
<p></p>
If you want an object to have a name,
supply it when calling newObject. Don't set it afterwards.<br/>
Examples:<br/>
<pre><code>newObject({
 &nbsp;&nbsp;&nbsp;name: "vehicle",
 &nbsp;&nbsp;&nbsp;color: "white",
 &nbsp;&nbsp;&nbsp;weight: 3000})</code></pre>
    <code>Root.vehicle</code> => the new object<br/>
    <code>Root.vehicle.name</code> => <samp>"vehicle"</samp><br/>
    <code>Root.vehicle.color</code> => <samp>"white"</samp><br/>
<pre><code>newObject({
 &nbsp;&nbsp;&nbsp;prototype: Root.vehicle,
 &nbsp;&nbsp;&nbsp;name: "boat",
 &nbsp;&nbsp;&nbsp;color: "blue"})</code></pre>
<code>Root.vehicle.boat</code> => the new object<br/>
<code>Root.vehicle.boat.name</code> => <samp>"boat"</samp><br/>
<code>Root.vehicle.boat.color</code> => <samp>"blue"</samp><br/>
<code>Root.vehicle.boat.weight</code> => <samp>3000</samp> //inheited from vehicle<br/>
<code>Root.vehicle.color</code> => <samp>"white"</samp> // hasn't changed.<br/>
<code>Root.vehicle.weight = 2000</code><br/>
<code>Root.vehicle.boat.weight</code> => <samp>2000</samp> //inherits the new value from vehicle<br/>
<code>Root.vehicle.launch = function(){return "set sail"}</code><br/>
<code>Root.vehicle.launch()</code> => <samp>"set sail"</samp><br/>
<code>Root.vehicle.boat.launch()</code> => <samp>"set sail"</samp>
<p></p>
<b><i>constructor</i></b>
When creating an object, (or afterwards) you can set a property named 
<code>constructor</code> in the new object to a method. This method is called
whenever a new object is created with <code>newObject</code>.
Unlike its counterpart in JS6 classes, <code title="unEVALable code fragment"> constructor</code>
is called with no arguments. However, <code>this</code>
is our new object with all the fields populated from the properties
passed in the call to <code>newObject</code>, saving a ton of boiler plate code.
In the body of <code title="unEVALable code fragment"> constructor</code>, you can call any code you like,
including code that modifies the property values, of code title="unEVALable code fragment">this</code>,
create
entirely new properties or remove ones from <code>this</code>.
<p></p>
Example: <pre><code>newObject({name: "animal",
 constructor: function(){ this.fur = "no"}})
 newObject({prototype: Root.animal,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; name: "fido"})</code></pre>
<p></p>
Above, during the first call to newObject, <code>this</code> is bound
to the <i>animal</i> object. But when the 2nd call to newObect is
made, the <code>this</code> in animal.constructor is bound to
the object in Root.animal.fido.<br/>
Here's the state of the relevant properties:<br/>

<code>Root.animal.fur</code> => <samp>"no"</samp><br/>
<code>Root.animal.fido.fur</code> => <samp>"no"</samp> <br/>

Each object has its own copy of the "fur" property.
Setting one will not set the other.
<p></p>
JS6 class constructor methods can have a call to <code title="unEVALable code fragment"> super</code>.
It's counterpart in DDE is a method whose name makes sense:
<code>callPrototypeConstructor</code>, documented below.
</details>

<details id="callPrototypeConstructor_doc_id" class="doc_details"><summary>callPrototypeConstructor</summary>
When you have a hierarchy of objects, often you want an object low in the
hierarchy to be initialized similarly to ones higher up, but with
some modifications. Thus you'd have constructor on a "vehicle" object,
then another one on a sub-object, "boat". The boat object should
probably call the constructor for the vehicle object at the top
of the boat constructor, and then make additional modifications to
"this" in the bottom part of the boat constructor method.
<p></p>
Example: <br/>
<pre><code>newObject({name: "animal",
           constructor: function(){ this.fur = "no"}})
newObject({prototype: Root.animal, name: "mammal",
  constructor: function(){<br/>
     this.callPrototypeConstructor()<br/>
     this.fur = "usually"<br/>
     this.hair = "sometimes"<br/>
  	 out("in mammal constructor")}})</code></pre><br/>
After running the above code,<br/>

<code>Root.animal.fur</code> => <samp>"no"</samp>.<br/>
<code>Root.animal.mammal.fur</code> => <samp>"usually"</samp><br/>
<code>Root.animal.mammal.hair</code> => <samp>"sometimes"</samp><br/>

You don't <i>have to</i> call callPrototypeConstructor,
and even if you do, it doesn't have to be before
the lower level constructor function modifies <code>this</code>
though <i>usually</i> these are good practices.
</details>

<details id="Object.isNewObject_doc_id" class="doc_details"><summary>isNewObject</summary>
Returns true if the argument was created with newObject.
Examples:<br/>
<code>Object.isNewObject({a:11})</code> => <samp>false</samp><br/>
<code>Object.isNewObject(newObject({name: "trash"}))</code> => <samp>true</samp><br/>
</details>
<details class="doc_details"><summary>subObjects</summary>
Returns an array of the named subobjects of <code>this</code><br/>
Example:<br/>
<code>Root.subObjects()</code> => array of the top level named new objects.
</details>

<details id="isLeafObject_doc_id" class="doc_details"><summary>isLeafObject</summary>
Returns true if the subject has no named subobjects.<br/>
<i>Example:</i><br/>
<code>Root.isLeafObject()</code> <samp>false</samp>
</details>

<details id="leafObjectNamed_doc_id" class="doc_details"><summary>leafObjectNamed</summary>
Returns a leaf object below <code>this</code> named by the argument,
or returns null.<br/>
<i>Example:</i><br/>
<code>Root.leafObjectNamed("junk747")</code> <samp>null</samp>
</details>

<details id="isSubObject_doc_id" class="doc_details"><summary>isSubObject</summary>
The primary relationship between objects in DDE's object system
is the prototype relationship. An object inherits properties from
its prototype. If you want an object to have  a different value
for a particular property than its prototype object does,
just create a property in the object, and that will effectiely
"shadow" the prototype value and use the "local" value in the object
for that property. 
<p></p>
An object always knows which object is its prototype. (All objects
have a prototype except Root.) But prototypes only know
what objects have them as their prototype if those other objects
are named, which is optional. 
By giving an object a name, you automatically install a property
in its prototype with a key of that name and a value of the object.
Now the prototype knows about its "children". We used the term subObject
to mean such named objects.
<p></p>
With no argument, 
returns true if <code>this</code> is a named new object and that name is a
property in <code>this.prototype</code> with a value of this.<br/>
In other words: <code title="unEVALable code fragment"> this == this.prototype[this.name]</code>
Example:<br/>
<code>newObject({prototype: Root, name: "junk"}).isSubObject()</code> => <samp>true</samp>
<p></p>
With an argument, the argument is the presumed prototype of this.
If the argument is this's prototype, and the prototype has a field in it named the same as this, 
and its value is this, then isSubObect returns true.<br/>
Example:<br/>
<code>newObject({prototype: Root, name: "junk"}).isSubObject(Root)</code> => <samp>true</samp>
<br/>
</details>

<details id="isA_doc_id" class="doc_details"><summary>isA</summary>
Returns true if <code>this</code> is the same as or is
an ancestor of the argument.<br/>
Examples:<br/>
    <code>newObject({name: "junk"}).isA(Root)</code> => <samp>true</samp><br/>
        <code>newObject({name: "junk"}).isA(123)</code> => <samp>false</samp>
</details>

<details id="siblings_doc_id" class="doc_details"><summary>siblings</summary>
Returns an array of the siblings of <code>this</code>.
These will be the named objects that have the same prototype as <code>this</code>.<br/>
<i>Parameter</i><br/>
<b>include_this</b> Default: false. If true, returns an array of <i>all</i> the
   named objects that have the same prototype as <code>this</code>.
   If false, excludes <code>this</code> from the returned array.<br/>
<i>Example:</i><br/>
    <code>Root.siblings()</code> => <samp>[]</samp> //the root never has siblings.
</details>

<details id="Object.areSiblings_doc_id" class="doc_details"><summary>areSiblings</summary>
Returns true if all arguments have the same prototype,
Otherwise returns false.
<i>Examples:</i>
<code>Object.areSiblings(newObject({}), newObject({}))</code> => <samp>true</samp><br/>
<code>Object.areSiblings(newObject({}), "hey")</code> => <samp>false</samp></br/>
</details>

<details id="inheritsPropertyFrom_doc_id" class="doc_details"><summary>inheritsPropertyFrom</summary>
Returns the closest ancestor to <code>this</code> that contains the
property named by the string in the argument. If <code>this</code>
happens to have that name as a property, <code>this</code> will be returned.<br/>
Returns <code>null</code> if no such prop name.
<i>Examples:</i><br/>
<code>newObject({}).inheritsPropertyFrom("Coor")</code> => <samp>Root</samp><br/>
<code>newObject({}).inheritsPropertyFrom("isn't a prop name")</code> => <samp>null</samp>
</code>
</details>

<details id="ancestors_doc_id" class="doc_details"><summary>ancestors</summary>
Returns an array of the ancestors of <code>this</code>.<br/>
Does not include <code>this</code> in the returned array.<br/>
<i>Examples:</i><br/><
    <code>newObject().ancestors()</code> => <samp>[Root]</samp>
</details>

<details id="Object.allCommonAncestors_doc_id" class="doc_details"><summary>allCommonAncestors</summary>
Returns an array of all the ancestors that the arguments have in common.<br/>
<i>Examples:</i><br/>
    <code>Object.allCommonAncestors(newObject(), newObject())</code> => <samp>[Root]</samp>
</details>

<details id="Object.lowestCommonAncestor_doc_id" class="doc_details"><summary>lowestCommonAncestor</summary>
Returns the lowest common ancestor of the arguments. If none, return null.
<i>Examples:</i><br/>
    <code>Object.lowestCommonAncestor(newObject(), newObject())</code> => <samp>Root</samp>
</details>

<details id="normal_keys_doc_id" class="doc_details"><summary>normal_keys</summary>
Returns an array of property names in, or inherited by, <code>this</code>.<br/>
<i>Parameters</i><br/>
<b>passing no args</b> Allowing all 4 args to default to false.<br/>
Example: <code>Root.vehicle.normal_keys()</code> => <samp>["color", "weight"]</samp><br/>
<b>include_inherited</b> Property names of all ancestors excluding Root are in the resulting array.<br/>
The default is <code>false</code>.<br/>
Example: <code>Root.vehicle.normal_keys(true)</code> => <samp>["color", "weight"]</samp><br/>
<b>include_functions</b> Those properties whose values are functions are included.<br/>
The default is <code>false</code>.<br/>
Example: <code>Root.vehicle.normal_keys(true, true)</code> => <samp>["color", "weight", "launch"]</samp><br/>
The default is <code>false</code>.<br/>
<b>include_subobject_names</b> The names of the subObjects will be included.
These will be siblings, uncles, great uncles, etc. but not cousins.<br/>
The default is <code>false</code>.<br/>
Example: <code>Root.vehicle.normal_keys(true, true, true)</code> => <samp>["color", "weight", "boat", "launch"]</samp><br/>
<b>include_name_and_prototype</b> The keys "'name" and "prototype" will be included.<br/>
The default is <code>false</code>.<br/>
Example: <code title="unEVALable code fragment"> Root.vehicle.normal_keys(true, true, true, true)</code> => <samp>["color", "weight"  "name", "prototype"]</samp>
<p></p>
Note that you shouldn't depend on the order of the elements in the result array.
If you want to force them into a consistent order, you can sort them alphabetically.
<p></p>
The use of "normal" in this method's name indicates that by passing no args,
it gets you what you'll most likely want, and passing in more and more <code>true</code> arguments
gets you more of the less-frequently used properties. (Your milage may vary,
but thats the general idea behind the name.)
</details>

<details id="objectPath_doc_id" class="doc_details"><summary>objectPath</summary>
Returns a string of the path to <code>this</code> such as
<code>"Root.animal.lion"</code><br/> Evaluating the returned string
will result in the object.<br/>
<i>Example:</i><br/>
    <code>newObject({name: "junk"}).objectPath()</code> => <samp>"Root.junk"</samp><br/>
    <code>eval("Root.junk").objectPath()</code> => <samp>"Root.junk"</samp>
</details>

<details id="sourceCode_doc_id" class="doc_details"><summary>sourceCode</summary>
Returns a string of source code for <code>this</code>.
Using the default values for the args,
evaluating the returned string will return a copy of <code>this</code>, but see below.<br/><br/>
<i>Parameters:</i> (All keywords.)<br/>
<b>include_this</b> A boolean. Default: <code>true</code>.
   If <code>true</code>, prints all the properties
   of <code title="unEVALable">this</code> other than the subobjects.
   For any remaining property values that are newObjects,
   if they have names, they are printed as their full paths.
   If they don't have names, the full source of the object is printed.<br/>
<b>include_subobjects</b> A boolean. Default: <code>true</code>.
   If <code>true</code>, prints the subojects of <code title="unEVALable">this</code>,
   all the way down.<br/>
   <br/>
<i>Example:</i><br/>
    <code>newObject({name: "junk", weight: 123}).sourceCode()</code> =>
    <pre><samp>"newObject({
  prototype: Root,
  name: "junk",
  weight: 123
})"</samp></pre>
If both include_this and include_subojects are <code>false</code>, the empty string will be returned.<br/>
If only include_this is false, the returned source, when evaled, will return
an array of the subobjects.<br/>
If include_this is true, the returned source, when evaled, will return a copy of this.
</details>
</details> <!-- new ob sys methods -->

<details class="doc_details"><summary>Existing JS methods</summary>
<details id="hasOwnProperty_doc_id" class="doc_details"><summary>hasOwnProperty</summary>
  Returns true if the argument is the name of a property directly in the subject.<br/>
 <i>Example</i><br/>
  <code title="unEVALable code fragment"> Root.vehicle.hasOwnProperty("color")</code> => <samp>>true</samp>
</details>

<details id="Object.getOwnPropertyNames_doc_id" class="doc_details"><summary>getOwnPropertyNames</summary>
    Returns an array of strings of the property names directly in the subject.<br/>
    <i>Example</i><br/>
  <code>Object.getOwnPropertyNames(Root.vehicle)</code> => <samp>["name", "color", "weight", "prototype", "boat", "launch"]</samp>
</details>

<details id="Object.keys_doc_id" class="doc_details"><summary>keys</summary>
   Returns an array of strings of the property names directly in the subject.<br/>
    <i>Example</i><br/>
  <code>Object.keys(Root.vehicle)</code> => <samp>["name", "color", "weight", "prototype", "boat", "launch"]</samp><br/>
  Note: This is the same as <code>Object.getOwnPropertyNames</code> for DDE objects but on JS objects,
   <code>Object.keys</code> returns all the inherited properties too.
  
</details>

<!-- not in electron version feb 4, 2017. will probably get added later
<details id="Object.values_doc_id"class="doc_details"><summary>values</summary>
    Returns an array of the values of the properties directly in the subject.<br/>
    <i>Example</i><br/>
  <code>Object.values(Root.vehicle) =><br/> [Root, "vehicle", "blue", 3000]</code>
</details>
-->

<details id="Object.entries_doc_id" class="doc_details"><summary>entries</summary>
    Returns an array of arrays. Each inner array has elemetns of a property
    name and its value. Only includes properties directly in the subject.<br/>
    <i>Example</i><br/>
  <code>Object.entries(Root.vehicle)</code> => <samp>
        [["name", "vehicle"],
        ["color", "white"],
        ["weight", 2000],
        ["prototype", Root],
        ["boat", Root.vehicle.boat],
        ["launch", function(){return "set sail"}]
        ]</samp>
</details>

<details id="Object.is_doc_id" class="doc_details"><summary>is</summary>
    Returns true if all the arguments are the same object, false otherwise.<br/>
    <i>Example</i><br/>
  <code>Object.is(Root.vehicle, Root.vehicle)</code> => <samp>true</samp>
</details>

<details id="isPrototypeOf_doc_id" class="doc_details"><summary>isPrototypeOf</summary>
    Returns true if the subject is the same as, or an ancestor of, the argument.<br/>
    <i>Example</i><br/>
  <code>Root.isPrototypeOf(Root.vehicle)</code> => <samp>true</samp><br/>
  Note this is like <code title="unEVALable code fragment"> isA</code> (documented above) but with the
  subject and argument swapped.
</details>

<details id="Object.getPrototypeOf_doc_id" class="doc_details"><summary>getPrototypeOf</summary>
    Returns the prototype of the argument.<br/>
    <i>Example</i><br/>
  <code>Object.getPrototypeOf(Root.vehicle)</code> => <samp>Root</samp><br/>
  Note: this is the same functionality as <code>Root.vehicle.prototype</code>
</details>

<details id="toString_doc_id" class="doc_details"><summary>toString</summary>
    Returns a string representation of the subject.<br/>
    <i>Example</i><br/>
  <code>Root.vehicle.toString()</code> => <samp>"Root.vehicle"</samp><br/>
  If the object and all of its ancestors have a name field, this is the same as:<br/>
  <code>Root.vehicle.objectPath()</code> => <samp>"Root.vehicle"</samp>
  but toString can handle unnamed instances too.<br/>
  <i>Example:</i>
  <code>newObject().toString()</code> => <samp>"An instance of: Root"</samp>
</details>
</details> <!-- Existing JS methods-->
</details> <!-- ob sys -->
<details id="operating_system_etc_doc_id" class="doc_details"><summary>Operating System, etc.</summary>
    <details id="operating_system_doc_id"class="doc_details"><summary>operating_system</summary>
     <code>operating_system</code>
     is a global constant that has
    a value of the name of the current operating system.
    It will not have upper case characters in it.<br/>
    Windows OS's have the value "win".<br/>
    Macintosh OS's have the value "mac".<br/>
    Ubuntu's have the value "linux".<br/>
    If you find the value of other operating systems, please tell us!
    </details>
    <details id="dde_version_doc_id"class="doc_details"><summary>dde_version</summary>
    A global variable that contains a semantic version string
    of the format: <code>"1.2.3"</code> indicating the running version number of DDE.<br/>
    <i>Example:</i> <code>dde_version</code>
    </details>
    <details id="version_equal_doc_id"class="doc_details"><summary>version_equal</summary>
     Compare semantic version numbers.<br/>
    <i>Parameters:</i><br/>
    <b>version_string1</b> required string of the format <code>"1.2.3"</code><br/>
    <b>version_string2</b> Default: <code>dde_version</code><br/>
    <i>Example:</i> <code>version_equal("1.0.2")</code> => <samp>false</samp>
    </details>
    <details id="version_less_than_doc_id"class="doc_details"><summary>version_less_than</summary>
        Compare semantic version numbers.<br/>
    <i>Parameters:</i><br/>
    <b>version_string1</b> required string of the format <code>"1.2.3"</code><br/>
    <b>version_string2</b> Default: <code>dde_version</code><br/>
    <i>Example:</i> <code>version_less_than("1.0.2")</code> => <samp>true</samp>
    </details>
    <details id="version_more_than_doc_id"class="doc_details"><summary>version_more_than</summary>
        Compare semantic version numbers.<br/>
    <i>Parameters:</i><br/>
    <b>version_string1</b> required string of the format <code>"1.2.3"</code><br/>
    <b>version_string2</b> Default: <code>dde_version</code><br/>
    <i>Example:</i> <code>version_more_than("1.0.2")</code> => <samp>false</samp>
    </details>
    <details id="dde_version_between_doc_id"class="doc_details"><summary>dde_version_between</summary>
     A call to this method is meant to go above code that you want to declare the
     version of DDE that it can safely run in.<br/>
     <i>Parameters:</i><br/>
     <b>min</b> Default: <code>null</code> If dde_version is equal to or higher than min,
         this clause is satisfied.
         A <code>null</code> means there is no minimum and this clause will always be
         satisfied. <br/>
     <b>max</b> Default: <code>null</code> If dde_version is equal to or less than max,
        this clause will be satisfied.
        A <code>null</code> means there is no maximum, and this clause will always be
        satisfied.<br/>
        If both min and max are <code>null</code>, this function errors.<br/>
      <b>action</b> <code>"error"</code>, <code>"warn"</code> or a boolean . Default: <code>"error"</code>. <br/>
        If both min and max are satisfied, this function returns <code>true</code>.
         Otherwise, the behavior depends on the value of the action argument.<br/>
        If <code>"error"</code>, this function will error.<br/>
        If <code>"warn"</code>, this function will print a warning message and
        return <code>false</code><br/>
        If <code>"boolean"</code>, return </code>true</code> if dde_version is between min and max (inclusive) or
        </code>false</code> if it is not.
        <p></p>
        <i>Examples:</i><br/>
        <code>dde_version_between("0.1.0", "100.1.1")</code> => <samp>true</samp>
    </details>
    <details id="quit_dde_doc_id"class="doc_details"><summary>quit_dde</summary>
        Exits DDE immediately. Make sure you have files saved first!<br/>
        <i>Example:</i><br/>
        <code title="Not in TestSuite">quit_dde()</code>
    </details>

    </details> <!-- end operating system etc -->

<details class="doc_details"><summary>Window System</summary>
    Dealing with HTML, CSS and JavaScript of traditional web apps is complex.
    DDE uses those technologies but with a simplied wrapper for them to help
    users create interactive windows with the most needed features.

    <details class="doc_details"><summary>DDE Window Dimensions</summary>
    <code>window.outerWidth</code> stores the width in pixels of the DDE window.
    <p></p>
    <code>window.outerHeight</code> stores the height in pixels of the DDE window.
    <p></p>
    <code>window.screenX</code> stores the x position of the DDE window in pixels from
          the left of the screen.
    <p></p>
    <code>window.screenY</code> stores the y position of the DDE window in pixels from
        the top of the screen.
    </details>

        <details id="machine_vision_doc_id" class="doc_details"><summary>Machine Vision with OpenCV</summary>
        For a video presentation of many of these concepts, please watch
        <a href="http://hdrobotic.com/webinar#machine_vision" target="_blank">Machine Vision with OpenCV</a>
        <p></p>
        Robots need sensors to understand their environment. A very useful sensor
        is a camera. However, scene recognition is one of the more complex cognitive tasks
        that humans do. Its no different for Robots.
        <p></p>
        The most widely used vision software for Robotics is called <i>OpenCV</i>.
        OpenCV is large and complex; necessary characteristics for the task.
        DDE uses a new version of OpenCV called opencv.js, a verison of the
        original C++ program that has been transpiled into JavaScript.
        DDE's opencv.js (as of Sept, 2017) corresponds to OpenCV version 3.3.
        That version of OpenCV was released in August 2017.
        opencv.js allows you to use JavaScript calls to access most of the funtionality
        in OpenCV. It does not yet support all of OpenCV, but work is ongoing to
        add functionality.
        <p></p>
        <b id="cv_doc_id">cv</b> opencv.js functions are available
        from the <code title="unEVALable">cv</code> global variable,
        which can be initialized via:<br/>
        <code>var cv = require("opencv.js")</code><br/>
        The first time you do this after launching DDE will take several seconds.
        The rest of the times it is very quick, so no harm in calling it
        more than once.
        <p></p>
        <i>Examples:</i><br/>
        DDE's Insert menu/Machine Vision submenu has examples of
        capturing pictures and video from a webcam, modifying images
        and blob detection for object identification.
        <p></p>
        DDE is in the early stages of using opencv.js. More to come.
        <p></p>
        <b>Depth Perception</b><br/>
        Many applications in Robotics need 3D scene understanding.
        OpenCV has some tools for processing stereo-pair images for
        sensing depth. It is also possible to mount a single camera on Dexter
        and have it take pictures at different locations to give you a stereo pair.
        <p></p>
        Probably using a camera that has build-in depth sensing is the best technique.
        Intel's <a href="https://www.intel.com/content/www/us/en/architecture-and-technology/realsense-overview.html" target="_blank">RealSense</a>
        cameras are a good bet here. There is software to integrate the output of the RealSense cameras
        and OpenCV, though at this point (Aug. 2017) they are add-ons to OpenCV, not part of the
        core software. See Intel
        <a href="https://software.intel.com/sites/landingpage/realsense/camera-sdk/v1.1/documentation/html/index.html?doc_essential_image_data.html"
            target="_blank">documentation</a>.
        <p></p>
        <b>Performance</b><br/>
        Computer vision tends to eat up a lot of memory and processor power.
        Modern laptops can keep up for simple tasks, but the faster the machine and the
        more memory you have, the better, especially when processing video.
        <p></p>
        <b>OpenCV Help</b><br/>
        Because opencv.js is brand new, most of the documentation you will find
        has examples in C++. opencv.js uses very similar or identical names
        so with a bit of effort, you can make sense of C++ documentation. There
        are also bindings of OpenCV for Python, in case that's easier for you.
        <p></p>
        The most definitive guide is
        <a href="http://shop.oreilly.com/product/0636920044765.do" target="_blank">Learning OpenCV 3</a>.
        At 1024 pages, this isn't a quick read, but that length is necessary to
        describe the considerable functionality. <a href="http://opencv.org/" target="_blank">OpenCV.org</a>
        has tons of useful information.
        <p></p>
        Documentation on opencv.js is sparser.
        First, understand the DDE opencv examples on the Insert menu/Machine Vision.
        Then, you can use DDE's inspector on <code title="unEVALable">cv</code>
        to see available constants and function names. Beware, there are over
        1K properties in this object!
        Next, take a look at: <a href="https://huningxin.github.io/opencv_docs/tutorial_js_root.html" target="_blank">
         opencv.js docs</a>/  A crucial document within that last url is a
         <a href="https://huningxin.github.io/opencv_docs/d5/df1/tutorial_js_some_data_structures.html"
            target="_blank">"cheat sheet"</a> of
         data structures that will help you convert C++ examples of using OpenCV to
         opencv.js compatible syntax.
         <p></p>
         <b>Converting C++ to JS</b><br/>
         In addition to the above examples and "cheat sheet", you will find the following
         tips useful in converting C++ examples to opencv.js<br/>
         <ul>
         <li>C++ is a strongly typed language so all variables and
         function parameters have type declarations. JS does not.<br/>
         C++ <code title="unEVALable">cv::Mat foo = cv::imread(...)</code> =><br/>
         JS &nbsp;&nbsp;&nbsp;<samp>let foo = cv.imread(...)</samp> </li>
         <li>For functions and variables, generally<br/>
         C++ <code title="unEVALable">cv::foo</code> =><br/>
         JS &nbsp;&nbsp;&nbsp;<samp title="unEVALable">cv.foo</samp> <i>except ...</i></li>
         <li>C++ does not use <samp>new</samp>
         in front of types to create an instance like JS.<br/>
         C++ <code title="unEVALable">cv::Size()</code> =><br/>
          JS &nbsp;&nbsp;&nbsp;<samp>new cv.Size()</samp><br/>
         Similarly for <samp>Mat</samp>, <samp>Scalar</samp>, <samp>Point</samp>.
         </li>
         <li>opencv.js functions have the same signature as their C++ counterparts.
         This includes parameter names, types and default values.
         </li>
         <li> <code title="unEVALable">Scalar</code> usually refers to a number.
         In OpenCV and opencv.js,
         it refers to an array of 4 numbers. It is often employed to represent
         a pixel, with numbers for red, green, blue and alpha (transparency) (RGBA).
         It can also be used for any other group of 4 numbers.</li>
         <li> In normal Javascript, an automatic garbage collector deletes no-longer used objects from memory.
              C++ doesn't have an automatic garbage collector built-in so the user must delete unused objects.
              In opencv.js, the user is responsible for deleting large objects such as
              those of type <code title="unEVALable">Mat</code> used
              for images, including anything created with <code title="unEVALable">new cv.  ...</code>
              <i>Example:</i>
              <pre><code title="unEVALable">let mat = new cv.Mat()
//some code
mat.delete()</code></pre>
         </li>
         </ul>
         <b>Acknowledgement</b><br/>
         opencv.js was created by Sajjad Taheri and his collegues at the University of California, Irvine,
         supported by Intel Corporation. We greatly appreciate this valuable contribution
         to robotics and makers everywhere.
         <p></p>
         For higher level calls to some of the simpler capabilities of OpenCV.js,
         see <a href="#" onclick="DocCode.open_doc('Picture_doc_id', event)">Picture</a>.

    </details>

    <details id="make_html_doc_id" class="doc_details"><summary>make_html</summary>
    Normal web programing causes you to have to learn several different syntaxes
    for the same kind of gramatical constructs. The most common examples are
    JavaScript, HTML and CSS, all of which have their own needlessly
    different syntaxes for encoding name-value pairs. DDE primarily uses JavaScript, but
    programmers needing to create user interfaces in DDE must employ
    HTML and CSS for the content of
    <a href="#" onclick="DocCode.open_doc(show_window_doc_id, event)">show_window</a>.
    <p></p>
    <code>make_html</code> relieves a programmer from having to know the
    ideosynracies of HMTL and CSS by providing a flexible way to create
    HTML and CSS source code using pure JS syntax. You can still use
    pure HTML and CCS if you like, but the advantages of make_html are:
    <ol><li>You don't have to know HTML & CSS punctuation.</li>
        <li>It makes it easier to embedded JS computed values into the HTML & CSS
             (better than string concat).</li>
        <li>You don't have to remember what's an HTML property and what's a CSS
            property.</li>
        <li>Error checking for HTML tags, HTML properties, and CSS properties
             (which browsers don't do ...one of their worst "features")
            while maintaining the flexibility to include non-standard terms
            if you really want to.</li>
     </ol>
     <i>Example:</i>
     <pre><code> let size = Math.pow(5, 2) + "px"
 make_html("b",
           {"font-size":size, color:"red", title:"big font"},
           "text")    </code></pre> =>
     <samp>'&lt;b title="big font" style="font-size":25px; color:red;"&gt;text&lt;/b&gt;'</samp>
     <p></p>
     <i>Parameters</i><br/>
     <b>tag</b> One of the 100+ tags in HTML. If you have a non-standard tag,
        make_html will warn or error depending on the value of the "error"
        parameter.<br/>
        <i>Examples:</i> <code>"b"</code>, <code>"details"</code>
     <p></p>
     <b>properties</b> Default: <code>{}</code>.  name-value pairs of
     HTML and/or CSS properties as a JS object. <br/>
     <i>Example:</i>
     <pre><code>{href:"hdrobotic.com",
 "font-size":"12px"}</code></pre>
     Note that you don't (usually) have to declare whether a property
     is HTML or CSS. Also note that property names that have hyphens in them
     must be quoted, as per JS.
     <p></p>
     DDE uses a database of HTML and CSS to help determine whether a given
     property is HTML or CSS. There are over 100 of each.
     There are 5 property names used by both HTML and CSS:<br/>
        <code title="unEVALable">border</code>,
        <code title="unEVALable">color</code>,
        <code title="unEVALable">content</code>,
        <code title="unEVALable">height</code>,
        <code title="unEVALable">width</code>.<br/>
        Fortunately most HTML tags can't accept any of these properties and
        DDE knows which ones. The precise algorithm for determining
        whether an attribute is HTML or CSS is complex, through for the above
        properties, make_html prefers CSS over HTML. DDE prints out
        warning or error messages when it is unconfident. See the "error" parameter.
        <p></p>
        You can guarentee that a property is a style by
        including it in a property named <code title="unEVALable">style</code>,
        just as you would in normal HTML. The style property can take a string
        of CSS for its value, just like in normal syntax.<br/>
        <i>Example:</i><pre><code>make_html("b",
          {style:"color:blue;height:123;"},
          "text")</code></pre>
        Style can ALSO take a JS Object as a value.<br/>
        <i>Example:</i><br/>
        <pre><code>make_html("b",
          {style: {color: "blue", height: 123}},
          "text")</code></pre>
        <p></p>
        If you want to force a property to be HTML, you can use a similar trick,
        through you have to use a property name that's NOT standard HTML.<br/>
        The 'string' verison of this uses HTML property syntax:<br/>
        <i>Example:</i><br/>
        <pre><code>make_html("b",
          {html_properties:"color=blue height=123"},
          "text")</code></pre>
        The object version uses JS object syntax:<br/>
        <i>Example:</i><br/>
        <pre><code>make_html("b",
          {html_properties: {color: "blue", height: 123}},
          "text")</code></pre>
        Properties whose name starts with <code title="unEVALable">data-</code>
        will be treated as an HTML property by default.
     <p></p>
     <b>innerHTML</b> Default: <code>""</code>. The text for
     the content of the tag. Can also be any function that computes a string,
     such as another <code>make_html</code> call
      (or several if you concat their results together).
     <p></p>
     <b>ending</b> Default: <code>"auto"</code> Determines
     the ending of the result string of HTML. Leaving off endings helps programmers
     make partial HTML elements to be used in further dynamic code generation.
     The result string has all HTML properties before any CSS (style) properties.<br/>
     An ending of:<br/>
     <code>"auto"</code> makes an
     ending of <code title="unEVALable">/&gt;</code> if the innerHTML argument
     is <code>""</code> (its default), and otherwise uses <code title="unEVALable">&lt;/tag&gt;</code>.<br/>
     <code>"none"</code> If there are any style properties,
     the last character of the result is the ending semicolon of the last style property.
     If there are only HTML properties, the last character of the result is the end double_quote
     of the last HTML property.<br/>
     <code>"end_style_only"</code> If there are any style properties,
     the last character of the result is the end double_quote of the style properties.
     If there are only HTML properties, the ending double quote of the last HTML property ends the result.<br/>
     <code>"short"</code> The last character of the result will be the &gt; that
     ends the properties of an HTML call.<br/>
     <code>"long"</code> The result will end with <code title="unEVALable">&lt;tag&gt;</code>
     <p></p>
     <b>error</b> Default: <code>false</code> A boolean.
     If <code>true</code>, this call to make_html will error
     if it is passed an invalid HTML tag, invalid HMTL property,
     or invalid CSS property.
     If <code>false</code>, this call will print a warning in the
     Output pane but allow make_html to return normally invalid HTML.
     The error/warning messages are very explicit about what's wrong.
     <p></p>
     When debugging calls to make_html, its useful to check the Output pane checkbox
     <br>Code</b> to see the returned HTML.
    </details>

    <details id="make_dom_elt_doc_id" class="doc_details"><summary>make_dom_elt</summary>
        Same as <code>make_html</code> except that it returns a DOM element instead of
        a string. That DOM element can be used with all JS functions that manipulate
        DOM elememts. <br/>
        <i>Example:</i>
        <code>make_dom_elt("span", {color:"blue"}, "hi")</code>
    </details>

        <details class="doc_details"><summary>Mouse Input</summary>
    <b>Position</b><br/>
    Javascript doesn't have just a method you can call to get the mouse position.
    JS does support getting the mouse position from an event.
    Below is code you can evaluate to keep global variables updated to
    the current mouse position.<br/>
    <pre><code title="not in TestSuite">document.addEventListener('mousemove',
            function(e){window.mouse_x = e.clientX
                        window.mouse_y = e.clientY})
         </code></pre>
     With the above code evaluated, you can then eval<br/>
      <code title="not in TestSuite">mouse_x</code> and/or <code title="not in TestSuite">mouse_y</code>
      to get the current mouse position as a non-negative integer
      from the upper left of the DDE window.
      <p></p>
      You can extend the function definition above to perform an action
      every time the mouse moves.
      <p></p>
      <b>Clicks</b><br/>
      You can cause a function to be called every time a mouse button is clicked via:
      <pre><code title="not in TestSuite">
document.addEventListener("click", function(e){
    let x      = e.clientX
    let y      = e.clientY
    let button = e.button //left=0, middle=1, right=2
    console.log("x: " + x + " y: " + y + " button: " + button)
});</code></pre>
        <a href="https://developer.mozilla.org/en-US/docs/Web/Events/click" target="_blank">
            Additional details</a>
    </details>

    <details class="doc_details"><summary>Making Applications</summary>
    DDE is a <i>development</i> environment tailored to making it easy
    to write Dexter Jobs. But it can also <i>run</i> those Jobs
    as well as provide Graphical User Interfaces (GUIs) to those Jobs
    (or other JavaScript code) so that complex operations need
    not be invoked or controlled with code, but rather can be
    done with mouse clicks like more conventional apps.
    <p></p>
    <a href="#" onclick="DocCode.open_doc(show_window_doc_id, event)">show_window</a>
    lets you build complex dialog boxes with lots
    of different widgets, and makes it easy to extract
    user settings from the dialog boxes and execute arbitrary JavaScript
    based on those settings. Jobs can contain Human instructions,
    most of which use <code>show_window</code> underneath,
    enabling them to interact with humans to give users control
    and to allow humans to be part of compound processes that
    are too complex to implement in pure code.
    <p></p>
    DDE has lots of GUI operations to simplfy programming.
    With <code>show_window</code>, DDE users can develop their own GUIs for
    interaction in situations where GUIs, in combination with
    code, can enable a wide variety of interactivity. But what
    if we want to <i>prevent</i> users from using the normal DDE programming
    operations?

    <details id="show_window_restrictions_id" class="doc_details"><summary>show_window restrictions</summary>
    Normally, when a show_window is up, the user can:
    <ul><li>move the window around (draggable)</li>
        <li>interact with DDE that is <i>behind</i> the show_window (not modal)</li>
        <li>resize it</li>
        <li>close it</li>
        <li>minimize (colllapse) it</li>
    </ul>
    The following code allows you to turn off
    these capabilites to "lock down" the interface to just what the
    application author wants the end user to focus on.
    <pre><code title="Not in TestSuite">
show_window({draggable: false,
             is_modal: true,
             resizable: false,
             show_close_button: false,
             show_collapse_button: false,
             content: "You can't get rid of me."
             })
    </code></pre>
    If you'd like to cover the whole screen with your custom window,
    initializing show_window's x, y, width, height can do the trick.
    <pre><code title="Not in TestSuite">
show_window({draggable: false,
             is_modal: true,
             resizable: false,
             show_close_button: false,
             show_collapse_button: false,
             content: "You can't get rid of me.",
             x: 0,
             y: 0,
             width:  window.outerWidth,
             height: window.outerHeight})
     </code></pre>
    If you eval either of the above code examples,
    you have to quit DDE to gain back control.
    Type on:
    <ul><li>WinOS: Alt+F4</li>
        <li>MacOS: Cmd+Q</li>
        <li>Linux: Ctrl+Alt+Esc</li>
    </ul>
    See <a href="#" onclick="DocCode.open_doc(show_window_doc_id, event)">show_window</a>
    for a more complete description of these and other show_window parameters.
    </details>
    <details class="doc_details"><summary>kiosk mode</summary>
      Using the technique under <a href="#" onclick="DocCode.open_doc(show_window_restrictions_id, event)">show_window restrictions</a>,
      we still have
      the DDE window title bar and perhaps other OS menus peaking through.
      We can prevent the user seeing or interacting with them by
      setting DDE into "kiosk mode", which gives the content of
      DDE maximum screen real estate. Then we can cover DDE's
      main window up with a show_window as described in show_window restrictions
      and have a pretty focused end user application.
      <p></p>
      When DDE launches, it looks in the file<br/>
      Documents/dde_apps/dde_persistent.json<br/>
      for a boolean property named <code title="unEVALable">kiosk</code>.
      If this is <code>true</code>, DDE will come up in kiosk mode.
      If it is <code>false</code> or non-existent, DDE will come up in non-kiosk mode.
      <code>false</code> is the default.
      <p></p>
      You can set this by editing Documents/dde_apps/dde_persistent.json when
      DDE is not running. From within DDE, you can call<br/>
      <code>persistent_set("kiosk", true)</code> or<br/>
      <code>persistent_set("kiosk", false)</code>
      to set kiosk mode.
      Next time you launch DDE, this new mode will take effect.
      <p></p>
      You can call <code>persistent_get("kiosk")</code>
      to tell programmatically, which mode you're in.
      <p></p>
      If you are in kiosk mode with a restricted show_window covering up DDE,
      you must quit DDE via
        <ul><li>WinOS: Alt+F4</li>
            <li>MacOS: Cmd+Q</li>
            <li>Linux: Ctrl+Alt+Esc</li>
        </ul>
      and edit Documents/dde_apps/dde_persistent.json
      to get DDE to come up in non-kiosk mode the next time you launch it.
    </details>

    </details> <!-- end Making Applications -->

    <details id="Plot_doc_id" class="doc_details"><summary>Plot</summary>
    DDE makes it easy to make plots (graphs) of 1D, 2D, 3D arrays as well as
    the move-points of Jobs.
    <details class="doc_details"><summary>Inspector</summary>
    When you inspect a 1D, 2D, or 3D array of numbers, or a Job,
    there will be a <button>Plot</button> button in the title of the inspector pane.
    Clicking it pops up a window showing the points plotted.
    <b>1D array</b> This will be treated as a 2D array, wherein the "Y" values
    are the array values, and the "X" values are their associated index in the array.<br/>
    <i>Example:</i><br/>
    <code>[0, 2, 4, 8, 16]  </code> Eval this array. In the Inspector window,
    click in the <button>Plot</button> button.
    <p></p>
    <b>2D array</b> An array of 2 elements. The first is the "X" values. The second
    is the "Y" values.<br/>
    <i>Example:</i>
    <pre><code>[[0, 1, 2, 3, 4],
 [0, 2, 4, 8, 16]]  </code></pre> This will plot the same
    as the preceeding example.
     <p></p>
     <b>3D array</b> Its not really a 3D array, its a 2D array that represents
     3D points. The array has 3 elements. The first is the "X" values. The second
        is the "Y" values. The 3rd is the "Z" values.<br/>
     <i>Example:</i>
     <pre><code>[[0, 1, 2, 3, 4],
 [0, 2, 4, 8, 16],
 [0, 2, 4, 6, 8]] </code></pre>
    <b>Job Instance</b> Jobs have lots of different instructions, but the
    ones that move the robot are the most important. The inspector can extract
    the move-points from a job and graph them.<br/>
    <i>Example:</i>
    <pre><code>new Job({
    name: "my_job3",
    do_list: [
        Dexter.move_all_joints(10, 20, 30, 40, 50),
        Dexter.move_to([0.1, 0.2, 0.3]),
        make_ins("a", 10, 11, 16, 21, 26),
        function(){ return make_ins("a", 20, 11, 16, 21, 26)},
        Dexter.move_all_joints( 1, 1, 1, 1, 1),
    ]})    </code></pre>
    When you eval the above Job definition, you'll see the Job instance in the inspector pane.
    Click on the <button>Plot</button> button. You'll see just 4 points, because
    the Job has not yet been run, and without being run, the inspector extracts just the
    top level points from the Job. Now click the Job's button to run it.
    After its run, click the plot button again. Now you'll see 5 points because
    that point in the function def gets "surfaced" and is now available to be plotted.
    Comparing such plots is an easy way to see what points are computed during the
    running of the Job vs just those that are at top level when the Job is merely defined.
    <p></p>
    <b>All Job Instances</b><br/>
    <i>Example:</i>
    <pre><code>new Job({
    name: "my_job2",
    do_list: [
        Dexter.move_all_joints(10, 20, 30, 40, 50),
        Dexter.move_all_joints( 6, 11, 16, 21, 26),
        Dexter.move_all_joints(10, 11, 16, 21, 26),
        Dexter.move_all_joints( 10, 1, 1, 1, 1),
    ]})    </code></pre> Eval the above and observe that in the inspector pane title bar,
    there's a <button>Plot Jobs</button> button. Click it.
    You'll see all the defined Jobs plotted in the same window.
    <ul>
        <li>You can click on a legend item to show/hide the given Job.</li>
        <li>You can also delete a Job's button by clicking its "X". Then the next time
            you click <button>Plot Jobs</button>, that deleted Job won't show up.</li>
        <li>Mouse over a point to see its details.</li>
        <li>Right click (or Two fingers on track pad) and dragging shrinks/expands the plot.</li>
    </ul>
    </details><!-- end Plot inspector-->
    <details id="Plot.show_doc_id" class="doc_details"><summary>Plot.show</summary>
    DDE's plot capability is based on a library named Plotly (see below).
    Plotly (and Plot.show) can display *lots* of 2D and 3D graphs with many options each.
    All the graphs in DDE's inspector are made with Plot.show.
    <p></p>
    We've made a thin wrapper to Plotly to make it slightly easier to make plots,
    especially ones involving Jobs. The class <code>Plot</code> implements
    this thin wrapper. Its primary method is: <code>Plot.show</code>. It takes the same arguments
    as the underlying <code>Plotly.newPlot</code>, though the arguments to <code>Plot.show</code>  can encode
    a superset of the functionality of <code>Plotly.newPlot</code><br/>
    <details class="doc_details"><summary>Plot Colors</summary>
    Colors can be reprsented as:
    <ul>
     <li><b>Strings of color names:</b> Examples: <code>"red"</code> <code>"green"</code> <code>"blue"</code>
           and a bunch more common names.</li>
     <li><b>3 hexidecimal digits:</b> character set: 0-9 and a-f Examples: <code>"#af2"</code> <code>"#f0f"</code></li>
     <li><b>6 hexidecimal digits:</b> character set: 0-9 and a-f Examples: <code>"#aaf032"</code> <code>"#ff00ff"</code></li>
     <li><b>red-green-blue values</b> Each 0 thru 255. Examples: <code>rgb(0, 50, 100)</code>, <code>rgb(255, 16, 99)</code>
    </ul>
    </details>
    <i>Parameters:</i><br/>
    <b>graphDiv</b> A div dom-element or the string id of that dom element. Default <code>"plot_id"</code>.
    If you pass in <code>null</code> or <code>undefined</code>, it will default to <code>"plot_id"</code>.
    This is the div where the plot will be shown. Unlike <code>Plotly.newPlot</code>.
    <code>Plot.show</code> automatically creates that dom element and pops up a
    show_window to display it.
    <p></p>
    <b>data</b> Takes an array of "trace" objects just like <code>Plotly.newPlot</code>.
    But it can also take a 1D, 2D or 3D array of numbers as described under Plot/Inspector.
    It can also take a Job instance, an array of Job instances (to show each in
    their own "trace" or the string <code>"Job"</code> to show all Job instances in
    one window.<br/>
    <i>Example:</i><br/>
    <code>Plot.show(null, "Job")</code>
    <p></p>
    <b>layout</b> Default <code>null</code>. Same as <code>Plotly.newPlot</code>'s layout argument.
    <p></p>
    <b>config</b> Default <code>null</code>. Same as <code>Plotly.newPlot</code>'s config argument.<br/>
    <p></p>
    <b>show_window_options</b> Unlike Plotly.newPlot, Plot.show wraps a <code>show_window</code>
    around the plot. You can pass in an object with the values that you would normally
    pass in to show_window. Plot.show_window has different defaults for a few of them
    which are:
    <ul>
    <li><b>content</b>  Default: <code title="unEVALable">"&lt;div id='" + graphDiv + "'/>" </code></li>
    <li><b>x</b> Default: <code>50 </code></li>
    <li><b>y</b>  Default: <code>50 </code></li>
    <li><b>width</b>  Default: <code>700 </code></li>
    <li><b>height</b>  Default: <code>500 </code></li>
    </ul>
    <p></p>
    <i>Examples:</i><br/>

    <details class="doc_details"><summary>Speedometer</summary>
    A fancy way to show one number.
    <pre><code>var data = [
  { value: 128,
    title: "Joint 1 degrees",
    type:  "indicator",
    mode:  "gauge+number", //bar+number
    gauge: { axis:  { range: [0, 180] },
             shape: "angular", //also: "bullet"
             bar:   { color: rgb(100, 30, 200)}
           }
  }
]
Plot.show(undefined, data,
         {height: 250,
          width: 300,
          margin: {l:40, r:20, t:0, b:0},
          },
          null,
          {x: 20, y: 40, width: 310, height: 300} //window pos & size
          )   </code></pre>
    </details>
    <details class="doc_details"><summary>1D array</summary>
        Only one array is given, the "Y" values.<br/>
        The "X" values are the automatically generated:
        <code>[0, 1, 2, 3, 4]</code><br/>
        <code>Plot.show(null, [0, 1, 1.5, 1.5, 7])  </code>
    </details>
    <details class="doc_details"><summary>Window and axis titles</summary>
    <pre><code>Plot.show(null,
    [[10, 20, 33, 40],
     [2, 4.33, 6, 8]],
    {title:  "Not so great title",
     xaxis:  {title: 'the x Axis'},
     yaxis:  {title: 'the y Axis'}
    })    </code></pre>
    </details>
    <details class="doc_details"><summary>Title styling</summary>
     Titles can be styled with HTML.
    <pre><code>Plot.show(null,
    [[10, 20, 33, 40],
     [2, 4.33, 6, 8]],
    {title:  "&lt;i>Not &lt;span style='font-size:12px;color:red'>so&lt;/span> &lt;b>great&lt;/b> title&lt;/i>",
     xaxis:  {title: "the &lt;i style='font-size:24px;'>X&lt;/i> Axis"},
     yaxis:  {title: 'the &lt;b>Y&lt;/b> Axis'},
     plot_bgcolor:  "#ffef9f", //default: "white",
     paper_bgcolor: "#ffd9b4", //margin around the plot area
     colorway: ["#00CC00"],    //data line color for 1st trace
     margin: {l:40, r:40, t:40, b:40} //around the plot area
    })   </code></pre>
    </details>

    <details class="doc_details"><summary>show_window options</summary>
     <i>Example:</i>
     <pre><code>Plot.show(null,
   [[10, 20, 33, 40],
    [2, 4.33, 6, 8]],
   {title:  "A title inside the plot"},
   undefined,
   {title: "show_window title",
    x: 0,
    y: 0,
    width: 900,
    height: 300}
 )    </code></pre>
    </details>

    <details class="doc_details"><summary>Multiple traces in same plot</summary>
        The first trace has dots for the points connected by lines.<br/>
        The second trace is just dots, no lines between the points.<br/>
        The third trace has only lines, no dots on the points.<br/>
     <a href="#" onclick="browse_page('https://plotly.com/javascript/reference/scatter')">Plotly Styling Doc</a>
<pre><code>Plot.show(null,
     [{type: "scatter",
       name: "J1",
       mode: "lines+markers", //lines between points and dots (markers) on the points
       x: [0, 1, 2, 3, 4,   5],
       y: [0, 1, 1, 3, 1.5, 6]
      },
      {type: "scatter",
       name: "J2",
       mode: "markers", //no lines between points just the points.
       x: [0, 1, 2, 3, 4,   5  ],
       y: [5, 5, 1, 4, 2.5, 4.5],
       marker: {symbol: "square", //many options including "circle" "square", "circle-open", "diamond", "triangle-up"
                size:   10,
                color: "#a0f" //"green" or format like "#f0f" for mageneta
               }
       },
       {type: "scatter",
        name: "J3",
        mode: "lines", //just the lines
        x: [0, 1.2, 2.2, 3.2, 4.2,   5.2],
        y: [0, 1,   1,   3,   1.5,   6  ],
        line: {color: "red",
               width: 4, //default 2
               shape: "spline", //one of "linear" | "spline" | "hv" | "vh" | "hvh" | "vhv"
               smoothing: 1.3,  //only when shape is "spline" 0==straight line, 1.3 max smoothing.
               dash:  "dash"    //one of "solid", "dot", "dash", "longdash", "dashdot", or "longdashdot"
              }
       }
      ])   </code></pre>
    </details>
    <details class="doc_details"><summary>Boxes and whiskers</summary>
     <pre><code>function make_random_array(length=50, offset=0){
    let arr = []
    for (var i = 0; i < length; i ++) {
        arr[i] = Math.random() + offset
    }
    return arr
}
var trace0 = { y: make_random_array(50, 0),
               type: 'box'}
var trace1 = { y: make_random_array(50, 1),
              type: 'box'}
Plot.show(null, [trace0, trace1])   </code></pre>
    </details>
    <details class="doc_details"><summary>3D line</summary>
    5 points with lines between them.
    <pre><code>Plot.show(
    null,
    [[0, 1, 2, 3,  4],  //x values
     [0, 2, 4, 8, 16],  //y values
     [0, 2, 4, 6,  8]]) //z values
     </code></pre>
    </details>
    <details class="doc_details"><summary>Heat Map</summary>
        In the below 2D array, each number is the value at a point in the 2D grid.
        The number will be represented by a color.<br/>
        0 is displayed as yellow.<br/>
        0.5 is displayed as orange.<br/>
        1 is displayed as red.<br/>
        The first inner array is shown in the bottom row in the plot.<br/>
        The last inner array is shown in the top row in the plot.
     <pre><code>var data = [
     {z: [[0,   0,    0.3, 0,   0],
          [0,   0.2,  0.5, 0,   0],
          [0,   0.5,  1,   0.8, 0.6],
          [0.1, 0,    0.7, 0.2, 0.1],
          [0,   0.2,  0.4, 0.2, 0]],
      type: 'heatmap',
      colorscale: [[0, "yellow"], [1, "red"]]
      }]
      Plot.show(null, data, null, null,
                {title: "Heat Map 5 x 5"})  </code></pre>
      There are lots of possible colorscale values.
      Some are represented by pre-packages strings.
      To use the below, in place of the array following <code title="unEVALable">colorscales:</code>
      above, put, for instance, <code>"Bluered"</code>.
      Some of our favorite ones are:
      <ul>
          <li><code>"Bluered"</code> blue, purple, red</li>
          <li><code>"Greys"</code> monochrome</li>
          <li><code>"Electric"</code> black, blue, purple, brown, cream</li>
          <li><code>"Picnic"</code> blue to red with pastels</li>
          <li><code>"Portland"</code> blue, green, yellow, orange, red</li>
          <li><code>"Hot"</code> black, red, orange, yellow, white</li>
      </ul>
      See <a href="#" onclick="browse_page('https://plotly.com/javascript/colorscales/')">Plotly doc</a>
      for more on colorscales.
    </details>
    <details class="doc_details"><summary>Job move points</summary>Job move points</i></b><br/>
      The move_all_joints, move_to, and friends instructions
      have their target xyz points plotted in a 3D line.<br/>
     <code> Plot.show(null, Job.latest_defined_job()) </code><br/>
     You can also pass an array of Job instances to plot more than one Job,
     each in its own trace. The below plots the points of the last 2 defined Jobs,
     <span style="color:#D60">provided that you have defined at least 2 Jobs</span>.
    <pre><code> Plot.show(null, [Job.job_id_to_job_instance(Job.job_id_base - 1),
                  Job.latest_defined_job()]) </code></pre>
    </details>
    <details class="doc_details"><summary>All Jobs' move points</summary>
    Plots a 3D line for the move-points of each defined Job.
    Note that you can use the Output Pane's Job bar to undefine particular Jobs
    (by clicking on the "X" to the right of a Job's button)
    so that you get just the Jobs you want in the plot.<br/>
    <code> Plot.show(null, Job) </code>
    </details>
    </details> <!-- end Plot.show -->

    <details id="Plotly" class="doc_details"><summary>Plotly</summary>
        Plotly is the graphing library underlying DDE's plotting facility.
        You can access all of its functionality within DDE.
        Its <a target="_blank" href="https://plotly.com/javascript">
        documentation</a> is better than average, though it takes a bit of finding your
        way around it.
        <p></p>
         <code>Plotly.newPlot</code> is a (large) subset of the functionality of
         <code>Plot.show</code>. It takes the same 4 args as Plot.show
         but it doesn't:
         <ul><li>show the plot unless its first arg of graphDiv is the id of
                 a "div" html element already shown on the screen.</li>
             <li>show 1D, 2D, and "3D" arrays that are the value of the data (2nd) arg.
                 You can still show them, but you must pass in, as data, an array of
                 "trace" objects, which is a bit more complex.</li>
             <li>allow a Job instance, array of Job instances or <code>"Job"</code> as the data arg.</li>
         </ul>
    </details>

    </details> <!-- end Plot -->


    <details class="doc_details"><summary>Set DDE Colors</summary>
    Users can customize the DDE colors by calling the below functions.
    Calls to these functions appear in the default <code title="unEVALable code fragment"> dde_init.js</code> file
    commented out. By commenting them in, the DDE colors will be
    modified when DDE launches. Their default color values are given
    in the examples below.
    <ul>
        <li><code id="set_window_frame_background_color_doc_id" title="not in TestSuite">set_window_frame_background_color("#b8bbff")</code></li>
        <li><code id="set_pane_header_background_color_doc_id"  title="not in TestSuite">set_pane_header_background_color("#bae5fe")</code></li>
        <li><code id="set_menu_background_color_doc_id"         title="not in TestSuite">set_menu_background_color("#93dfff")</code></li>
        <li><code id="set_button_background_color_doc_id"       title="not in TestSuite">set_button_background_color("#93dfff")</code></li>
    </ul>
</details>

<details id="set_css_properties_doc_id" class="doc_details"><summary>set_css_properties</summary>
You can dynamically set <i>any</i> CSS properties with this function by including
the selector and the properties in the argument with the same syntax as in
a css style sheet. This will immediately change all the existing HTML that matches
the selector as well as future HTML that matches the selector.
<p></p>
If you make two calls to <code>set_css_properties</code>, the second will override the
first. To keep such modifications accross DDE sessions,
put calls to <code>set_css_properties</code> in
your dde_apps/dde_init.js file.
<p></p>
<i>Parameter:</i><br/>
<b>css_string</b> A string. Required. Change the values of the CSS properties in the
HTML tags matching the selectors. You can have multiple selector-properties pairs
in the string. Separate them with a newline.
<p></p>
<i>Examples:</i>
<pre><code title="Not in TestSuite">set_css_properties(".dde_error_css_class {font-style: italic;}")
set_css_properties(".warning_css_class   {font-weight: bold;}")
set_css_properties('div.CodeMirror span.CodeMirror-matchingbracket { color:#0000FF; }' +
                   '\n.cm-keyword {color:#666666;}' +
                   '\n.CodeMirror { background:#CCCCCC;}')
    </code></pre>
In that last example, we set colors of DDE's editor for:
<ol>
 <li>matching parens</li>
 <li>JavaScript keywords like "function" and "var"</li>
 <li>the background color of the whole text editor.</li>
</ol>
Here's the CSS for a bunch more editor properties.
<pre><code title="unEVALable">.cm-s-default .cm-header {color: blue;}
.cm-s-default .cm-quote {color: #090;}
.cm-negative {color: #d44;}
.cm-positive {color: #292;}
.cm-header, .cm-strong {font-weight: bold;}
.cm-em {font-style: italic;}
.cm-link {text-decoration: underline;}
.cm-strikethrough {text-decoration: line-through;}

.cm-s-default .cm-keyword {font-weight: bold;} /*orig "color: #708"  font-weight: bold; doesn't make keywords bolc*/
.cm-s-default .cm-atom {color: #219;}
.cm-s-default .cm-number {color: #164;}
.cm-s-default .cm-def {color: #00f;}
.cm-s-default .cm-variable,
.cm-s-default .cm-punctuation,
.cm-s-default .cm-property,
.cm-s-default .cm-operator {}
.cm-s-default .cm-variable-2 {color: #05a;}
.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}
.cm-s-default .cm-comment {color: #a50;}
.cm-s-default .cm-string {color: #a11;}
.cm-s-default .cm-string-2 {color: #f50;}
.cm-s-default .cm-meta {color: #555;}
.cm-s-default .cm-qualifier {color: #555;}
.cm-s-default .cm-builtin {color: #30a;}
.cm-s-default .cm-bracket {color: #997;}
.cm-s-default .cm-tag {color: #170;}
.cm-s-default .cm-attribute {color: #00c;}
.cm-s-default .cm-hr {color: #999;}
.cm-s-default .cm-link {color: #00c;}

.cm-s-default .cm-error {color: #f00;}
.cm-invalidchar {color: #f00;}

.CodeMirror-composing { border-bottom: 2px solid; }
    </code></pre>
</details>

<details id="show_window_doc_id" class="doc_details"><summary>show_window</summary>
        A call to <code>show_window</code> creates a dialog box using HTML and JavaScript.<br/>
        For a video presentation of much of this content, please watch
        <a href="http://hdrobotic.com/webinar#show_window" target="_blank">show_window (and friends)</a><br/>
        <i>Parameters</i><br/>
        <b>title</b> A string of the HTML displayed in the window's title bar.
                     Default: <code>"DDE Information"</code><br/>
                     If you pass in <code>""</code> , the window will have no title bar.
                     That means there will be no close box nor collapse box, nor can you drag the window.
                     This is not normally what you want, but in case you don't want the user
                     to adjust this window, that functionality is useful.<br/>
        <b>title_bar_height</b> A number in pixels, Default <code>25</code> <br/>
        <b>title_bar_color</b> A CSS color, Default <code>"#b8bbff"</code> (purple) <br/>
        <b>width</b> The number of pixels wide that the window will be. Default: 400.
                     Minimum 100: Maximum: <code>window.outerWidth</code><br/>
        <b>height</b> The number of pixels tall that the window will be. Default: 400.
                      Minimum: 50, Maximum: <code>window.outerHeight</code><br/>
         <b>resizable</b> Boolean, default: <code>true</code>. Unfortunately the
         widget library we're using to implement show_window follows the web convention
         of making the drag areas for resizing tiny and thus hard to use.
         Hover the mouse on the inside but very close to any edge of the window
         to see a little arrow pop up indicating that you can press the mouse down and drag
         to resize the window.
         Dragging any corner corner is possible but even harder.<br/>
        <b>draggable</b> Boolean, default: <code>true</code>. When false, you can't
        reposition the window by dragging its title bar as usual.<br/>
        <b>x</b> The number of pixels that the left edge of the window will be from the left edge of the DDE window.
        Default: 200 . Minimum: 0 positions window at left of DDE window.<br/>
        <b>y</b> The number of pixels that the top edge of the window will be from the top edge of the DDE window.
        Default: 200. Minimum: 0 positions window at top of the DDE window.<br/>
        <b>is_modal</b> A boolean. Default: <code>false</code>
         If <code>true</code>, prevents you from interacting with other windows.<br/>
        <b>show_close_button</b> A boolean. Default: <code>true</code>.
           Show or hide the "X" in the upper right of the window's title bar.<br/>
        <b>show_collapse_button</b> A boolean. Default: <code>true</code>.
         Allow quick shrink of window with a triangle icon near the upper right of the window's title bar.<br/>
        <b>trim_strings</b> A boolean. Default: <code>true</code>.
         Remove whitespace from beginning and end of values from inputs of type text and texareas.<br/>
        <b>background_color</b> Default: <code>"rgb(238, 238, 238)"</code> (gray).
          A string representing a color. Symbolic names like "ivory" can be used as well as
          Hexidecimal values like <code>"#EEAAEE"</code> (magenta).<br/>
         <b>close_same_titled_windows</b> A boolean, default: <code>true</code>.
         When true, all windows created with show_window with the same title
         as the one being created will be closed. The new window will have
         its x, y, width, and height parameters set to the latest show_window created
         that is still open. This allows the user to position and resize the window
         how they want it, and that will be preserved when another such window
         is created. To reset a window's x, y, width, height to their defaults,
         just close all such titled windows before opening a new one.<br/>
         To have two or more windows with the same title open at once,
         set this argument to <code>false</code>.<br/>
        <b>content</b> HTML to be rendered in the body of the window. Input tags with
        <code title="unEVALable code fragment"> type</code>
        attributes of <code title="unEVALable code fragment"> button</code> and
        <code title="unEVALable code fragment"> submit</code> will cause the window's
        callback function to be called.
        <code title="unEVALable code fragment"> submit</code> will also cause the window to be closed.
        <p></p>
        <i>clickable</i><br/>
        HTML elements with a class of "clickable" will behave as a button. Clicking on them
        will cause the window's callback button to be called with a literal object
        whose
        <code title="unEVALable code fragment"> clicked_button_value</code>
        property will have a value of the <code title="unEVALable code fragment"> name</code>, or if none, the
        <code title="unEVALable code fragment"> id</code> of the clicked on element.
        That literal object will also have a property of that name whose value
        will be the innerHTML of the element.
        Clicking on such HTML elements will <i>not</i> close the window.<br/>
        <i>Example</i>:<br/>
        <pre><code>show_window({
    content:'&lt;p id="p_id" class="clickable">some para&lt;/p>',
    callback: function (vals){ SW.append_in_ui("p_id", "&lt;h1>hey&lt;/h1>")}
})    </code></pre>
        <a href="#" onclick="DocCode.open_doc(make_html_doc_id, event)">make_html</a> has a lot of advantages for creating HTML,
        many of which are not apparent from this simple example:
<pre><code>show_window({
    content: make_html("p", {"font-size": Math.pow(6, 2) + "px"}, "some other para")
            })    </code></pre>
        <b>callback</b> A function of one argument. Any returned value will be ignored.
        It will be called when the user clicks a button in
        a show_window. It's argument will be a literal object.
        The most important property in the literal object is "clicked_button_value"
        which tells you the name or id of the element clicked on.
        <p></p>
        Note that a special
        value for "clicked_button_value" is "close_button" when the user clicks
        the X in the upper right of a show_window. This will close the window,
        but the callback function will also be called just in case
        you want to write some "clean up" code. Usually you can just ignore this.
        <p></p>
        Many of its properties are x and y positions
        relative to the top-left of html elements in or containing the clicked position.
        <p></p>
        Others of its properties will be names and the corresponding values of input elements
        designated in the <i>content</i> argument. The actual "name" used for such an element
        is: <br/>If the element has a "name" property, use the value of that.<br/>
        else if the element has an "id" property, use that. Note that "id" properties
        become global variables bound to the element, which can be useful
        if you want to programatically change them.<br/>
        else if the element has a "value" property, use that. Note that an
        "input" element of type "button" will have its displayed label be
        the value of its "value" property.
        <p></p>
        <i>Example </i> of an argument passed to the callback function:<br/><pre>
<code>{x: 300,           //relative to the parent of the elt clicked on
 y: 213,
 clientX: 300,      //relative to the content area (the viewport) of the browser window
 clientY: 213,      //This point does not move even if the user moves a scrollbar from within the browser.
 offsetX: 290,      //relative to the html element that the user clicked in
 offsetY: 68,
 pageX: 300,        //relative to the top left of the fully rendered content area in the browser.
 pageY: 213,
 screenX: 395,      //relative to the physical display
 screenY: 270,
 altKey: false,     //true if the alt key (option on Mc) was pressed when the mouse was clicked
 ctrlKey: false,    //control key
 metaKey: false,    //Windows key on Windows OS, command key on Mac
 shiftKey: false,
 show_window_elt_id: "show_window_0_id", //The id of the dialog that holds this show_window.
                    //the integer is the show_window integer, incremented in each
                    //call to show_window.
 tagName: "input",  //html element tag clicked on.
 window_index: "1", //a show_window instance identifier.
                   //SW.close_window(window_index)
                   //will close the show_window window.
 clicked_button_value: "my_in_id", //the 'name' or 'id' attribute of the clicked on element.
   //This will be "close_button" if the user clicked the close window "X" in the window.
 trim_strings: true}</code></pre>
        <i>Example callback that is called when a button is clicked:</i><br/>
<code>function show_vals(vals){out(vals)}</code><br/>
 (This is, effectively, the default callback.)
 <p></p>
<i>Example show_window call with many input types.</i>
<pre><code>show_window({
    content:
&#96;text: &lt;input type="text" name="my_text" value="Dexter"/>&lt;br/>
textarea: &lt;textarea name="my_textarea">Hi Rez&lt;/textarea>&lt;br/>
checkbox: &lt;input name="my_checkbox" type="checkbox" checked="checked"/>heated bed?&lt;br/>
    &lt;!-- you can add the checked="checked" attribute to make it initially checked. -->&lt;br/>
radio:
&lt;input type="radio" name="my_radio_group" value="abs" />ABS
&lt;input type="radio" name="my_radio_group" value="carbon"/>Carbon Fiber
&lt;input type="radio" name="my_radio_group" value="pla" checked="checked"/>PLA&lt;br/>
    &lt;!-- At most, only 1 radio button can be checked. If none are checked,
         the return value for the group will be undefined . -->
number: &lt;input type="number" name="my_number" value="0.4" min="0" max="1" step="0.2"/>&lt;br/>
range:  &lt;input type="range"  name="my_range"  value="33"  min="0" max="100"/>&lt;br/>
color:  &lt;input type="color"  name="my_color"  value="#00FF88"/>&lt;br/>
date:   &lt;input type="date"   name="my_date"   value="2017-01-20"/>&lt;br/>
select: &lt;select name="size">
            &lt;option>Gihugeic&lt;/option>
            &lt;option selected="selected">Ginormace&lt;/option> &lt;!--the inital value-->
            &lt;option>Gilossal&lt;/option>
        &lt;/select>&lt;br/>
file: &lt;input type="file" name="my_file"/>No dir info. &lt;br/>
combo_box: &lt;div id="my_combo_box" class="combo_box" style="display:inline-block;vertical-align:middle;"> <!-- Can't use attribute 'name'. Must use 'id'. -->
                &lt;option>one&lt;/option>
                &lt;option selected="selected">two&lt;/option>
           &lt;/div>&lt;br/>
button: &lt;input type="button" value="Show settings"/>&lt;br/>
submit: &lt;input type="submit" value="OK"/>&#96;,
    width:380, height:450, title:"Printer Config", x:100, y:100,
    callback: show_vals})
</code></pre>
    <span style="color:red;">Beware</span>: The callback function cannot be a closure.
    It can be an annonymous function, but its really better if it has a top level name.
    This restriction is due to implementation complexities with show_window.<br/>

    <b>init_elt_id</b> Default: <code>null</code>
    If this is a string, it is expected to be the id of an html input element
    in the content. After the window is created, an automatic programmatic click on
    the named element is performed such that the callback of this show_window
    is called. The "clicked_button_value" for this click will be the
    value of init_elt_id.
    <p></p>
    init_elt_id is not commonly needed, but when you'd like to do some
    initialization of the show_window that needs the default values of the inputs,
    this argument is quite useful.<br/>
    <i>Example:</i>
    <pre><code title="not in testsuite"/>function handle_my_win(vals){
    if(vals.clicked_button_value == "init_my_win_id"){
        out("initing my_win")
        SW.close_window(vals.window_index)
    }
}
show_window({
    content: &#96;&lt;input type="button" id="init_my_win_id" value="init"/>&#96;,
    init_elt_id:"init_my_win_id",
    callback: handle_my_win,
})
        </code></pre>
    This example calls the init code when the window first comes up and
    when the user clicks on the init button. If you want to exclude the
    user from seeing the init button, change the content to:<br/>
    <code title="not in testsuite">&lt;input type="button" id="init_my_win_id" style="display:none;"/&gt;</code>

    <h4>click</h4> You can programmatically click on an html input like so:<br/>
    <code title="not in testsuite">init_my_win_id.click()</code><br/>
    This will cause the callback in the previous example to be called
    with a vals.clicked_button_value of <code>"init_my_win_id"</code>.

    <h4>onchange</h4>
    Normally the callback is only called when the user clicks a button. However,
    you can get the callback to be called for any input HTML tag if you give it
    an attribute of<br/> <code title="unEVALable code fragment"> data-onchange='true' </code><br/>
    clicking on another element or tabbing away from an element you just changed
    will cause the callback function to be called.
    <p></p>
    You can have the callback function for any modification of the value of an element
    by adding the HTML attribute:<br/>
    <code title="unEVALable code fragment"> data-oninput='true'</code><br/>
    For text boxes, this activates on each character typed in.
    For range sliders, this activates many times as you are dragging the slider.

    <h4>Cover DDE Window</h4>
    To have a show_window cover the entire DDE window:
    <pre><code title="not in TestSuite"> show_window({content: "hi",
             x: 0,
             y: 0,
             width:  window.outerWidth,
             height: window.outerHeight})
    </code></pre>
    <p></p>
    For more examples of calling <code>show_window</code> see the DDE menubar/Insert/show_window.
    See also:<br/>
    <a href="#" onclick="DocCode.open_doc('Human.show_window_doc_id', event)">
                Ref Man/Robot/Human/show_window</a><br/>
    <a href="#" onclick="DocCode.open_doc('close_window_doc_id', event)">
                close_window</a>
    </details> <!-- end show_window -->

    <details id="show_page_doc_id" class="doc_details"><summary>show_page</summary>
       Creates a new browser window and shows a web page in it.<br/>
       Unlike <code>browse_page</code> does not show url in an editable field,
       but does allow you to set location and size of the window that pops up.<br/>
       <i>Parameters:</i><br/>
       <b>url</b> A string. The url to show in the new browser window.<br/>
       <b>options</b> A literal object. The most useful properties are:
       <ul> <li><b>x</b> An integer. Default: <code>0</code>
             which places the left edge of the window at the left edge of the screen.
             </li>
           <li><b>y</b> An integer. Default: <code>0</code>
               which places the top edge of the window, at least close to,
                the top edge of the screen.
           </li>
           <li><b>width</b> An integer. Default: <code>800</code>
                 In pixels.
           </li>
           <li><b>height</b> An integer. Default: <code>600</code>
           In pixels.
           </li>
       </ul>
       <p></p>
       <i>Example:</i>
       <pre><code>var win = show_page("http://hdrobotic.com",
          {x:100, y:150,
           width:800, height:600})
           </code></pre>
        The returned value is an instance of Electron's BrowserWindow.
        The most useful methods on it are:<br/>
        <b>getURL</b> A method of no args that returns the string representing
                      the URL shown in the window.<br/>
        <i>Example:</i> <code>win.getURL()</code><br/>
        <br/>
        <b>blur</b> A method of no args that buries the window
                    (pushes it behind other windows).<br/>
        <i>Example:</i> <code>win.blur()</code>
        <br/>
        <b>focus</b> A method of no args that brings the window to the top.
           The opposite of blur<br>
        <i>Example:</i> <code>win.focus()</code>
        <br/>
        <b>isDestroyed</b> A method of no args that returns <code>true</code>
        if the window has been closed.<br/>
        <i>Example:</i> <code>win.isDestroyed()</code> => <samp>false</samp>
        <br/>
        <b>close</b> A method of no args that closes the window. <br/>
        <i>Example:</i> <code title="not in TestSuite">win.close()</code>
        <p></p>
        For other options and what else you can do with the returned value, see:<br>
        <a href="https://github.com/electron/electron/blob/master/docs/api/browser-window.md" target="_blank">Options Doc</a><br/>
        See also: <a href="#" onclick="DocCode.open_doc(get_page_doc_id, event)">get_page</a>
    </details>

    <details id="browse_page_doc_id" class="doc_details"><summary>browse_pages</summary>
       Shows a url in your default browser, which includes an editable url at the top.
       Ofen this will open a new tab for the given url in an already open browser.<br/>
       <i>Parameter:</i><br/>
       <b>url</b> Required. A string.<br/>
       <br/>
       <i>Example:</i><br/>
       <code>browse_page("http://hdrobotic.com")</code>
    </details>

        <details class="doc_details"><summary>Window Utilities</summary>

           <details id="SW.clear_output_doc_id" class="doc_details"><summary>SW.clear_output</summary>
               Erase all content in the output pane. This does the same thing
               as clicking the "clear" button in the Output pane header.<br/>
               <i>Example:</i>
               <pre><code>  SW.clear_output()  </code></pre>
           </details>

            <details id="close_window_doc_id" class="doc_details"><summary>close_window</summary>
            Closes a window created with show_window.<br/>
            <i>Parameter:</i><br/>
            <b>window_title_index_or_elt</b>: This can be either the title of the window (a string),
            a window index, or the jQuery window object.<br/>
            Calling <code>show_window</code> returns a window_index.
            When a show_window callback function is called, it will be passed a literal object
            with a property of <code title="unEVALable code fragment"> window_index</code>.
            These window_indexes can be passed
            to <code>SW.close_window</code> to close the window. This is a non-negative integer.<p></p>
            <i>Example:</i> (from within a show_window callback function) <br/>
            <code title="unEVALable code fragment"> SW.close_window(vals.window_index)</code><br/>
            Note that when a user clicks on an input of type "submit", that
            will automatically close the window with no need to call SW.close_window explicitly.<br/>
            Also note that when show_window's close_same_titled_windows init arg is true
            (the default), same titled windows will automatically be cloaed.
            <p></p>
            If no argument is passed, the latest show_window is closed.<br/>
            <i>Example:</i> (from within a show_window callback function) <br/>
            <code title="not in test suite">SW.close_window()</code>
            <p></p>
            If SW.close_window is unable to find an open window specified in the argument,
            it prints a warning, but does not error.
        </details>

        <details id="SW.append_in_ui_doc_id" class="doc_details"><summary>SW.append_in_ui</summary>
            Creates an element from HTML and inserts it into a window.<br/>
            <i>Parameters:</i><br/>
            <b>path_string</b>: The path to a shown HTML element. Usually this will be the id of
            an element in a <code>show_window</code> window. The new element will become
            the new last child of the path element.<br/>
            <b>new_html</b>: A string of HTML to create the new element.<p></p>
            <i>Example</i>: <code title="unEVALable">SW.append_in_ui("my_in_id", "&lt;h1>hello&lt;/h1>")</code><br/>
            where "my_ui_id" is the id of a currently displayed html tag, usually in
            the content of a <code>show_window</code> window.
        </details>

        <details id="get_in_ui_doc_id" class="doc_details"><summary>get_in_ui</summary>
            Gets the value of an attribute of an HTML tag (usually from a <code>show_window</code> window). <br/>
            <i>Parameter:</i><br/>
            <b>path_string</b> The path to a shown html element. This is often
            the id of an element followed by a dot, follwed by an attribute name.<br/>
            Note that for svg objects, this is a bit tricky, but will get the value
            of the given attribute.<br/>
            If the actual value is the string of a number, the number,
            rather than the string will be returned.

            <i>Example</i>: <code title="unEVALable code fragment"> get_in_ui("my_in_id.id")</code> <samp>"my_in_id"</samp><br/>
        </details>

        <details id="remove_in_ui_doc_id" class="doc_details"><summary>remove_in_ui</summary>
            Remove an HTML element (usually from a <code>show_window</code> window). <br/>
            <i>Parameter:</i><br/>
            <b>path_string</b> The path to a shown html element. This is often just the id of an element.<p></p>
            <i>Example</i>: <code title="unEVALable code fragment"> remove_in_ui("my_in_id")</code><br/>
        </details>

        <details id="replace_in_ui_doc_id" class="doc_details"><summary>replace_in_ui</summary>
            Replace an HTML element (usually from a <code>show_window</code> window). <br/>
            <i>Parameters:</i><br/>
            <b>path_string</b> The path to a shown html element. This is often just the id of an element.<br/>
            <b>new_html</b>: A string of HTML to create the new element.<p></p><p></p>
            <i>Example</i>: <code title="unEVALable code fragment"> replace_in_ui("my_in_id", "&lt;h2>hey&lt;/h2>")</code><br/>
        </details>

        <details id="set_in_ui_doc_id" class="doc_details"><summary>set_in_ui</summary>
            Set the value of an HTML element attribute (usually from a <code>show_window</code> window). <br/>
            <i>Parameters:</i><br/>
            <b>path_string</b> The path to a shown html element's attribute.
            This is often the id of an element followed by a dot, followed by an attributre name.<br/>
            <b>value</b>: The value of an HTML element's attribute. Usually this is a string.<p></p>
            <i>Example</i>: <code title="unEVALable code fragment"> set_in_ui("my_in_id.value", "aluminum")</code><br/>
        </details>

        <details id="SW.selector_set_in_ui_doc_id" class="doc_details"><summary>SW.selector_set_in_ui</summary>
        This function uses the CSS selector syntax, also used in JS DOM method <code title="unEVALABLE">querySelector</code>,
        to identify an element on a page to change (with some extensions), and a new value. You can
        replace, remove, modify, and extend show_window HTML elements dynamically (usually from their callback functions),
        giving interactive feedback to the user.<br/>
        <i>Parameters:</i><br/>
        <b>path_string</b> A string using CSS selector syntax to identity one HTML element.
        Selector syntax is admittedly horrible. But its one of the main standards on the web,
        and it does offer a considerable degree of flexibility, allowing you to identify elements,
        absolutely and relatively along with their HTML properties and style properties, if so desired.
        <p></p>
        Such strings often start with a  "#" to
        indicate an element ID, followed by a space, then a reference to an element
        within that first "element ID", and optionally followed by a space, then a reference
        to a property that you want to modify.
        <p></p>
        Here's a list of the most useful, space-separated
        selector parts:<br/>

        <samp>#foo</samp>The ID of an element. Usually this is the first path part.
        DDE uses the convention of element id's having a suffix of "_id". We recommend this
        for your code too.<br/>
        <samp>.bar</samp> The class of an element <i>within</i> the previously idendified element
        in the path_string.<br/>
        <samp>[baz]</samp> An HTML property of an element.
        <p></p>
        SW.selector_set_in_ui has a few special properties:<br/>
        <samp>[innerHTML]</samp> Used for replacing the innerHTML of an element. The value is expected
        to be HTML and will be rendered.<br/>
        <samp>[innerText]</samp> Used for replacing the innerText of an element. The value is expected
            to be plain text and will not be rendered.<br/>
        <samp>[outerHTML]</samp> Used for replacing the whole HTML of an element, including its tag name
        and all its properties. It will be rendered.<br/>
        <samp>[outerText]</samp> Used for replacing the outerHTML of an element. The value is expected
            to be plain text and will not be rendered.
        <p></p>
        The next four are for adding content.<br/>
        <samp>[beforebegin]</samp> Use to insert HTML before the previously idendified element
            in the path_string.<br/>
        <samp>[afterbegin]</samp> Use to insert HTML as the new first child of the previously idendified element
            in the path_string.<br/>
        <samp>[beforeend]</samp> Use to insert HTML after the last child of the previously identified element
            in the path_string.<br/>
        <samp>[afterend]</samp>  Use to insert HTML after the previously identified element
            in the path_string.<br/>
        <p></p>
        <samp>[baz=val]</samp> Identifies an element <i>within</i> the previously idendified element
            in the path_string that has the property "baz" with a value of "val".<br/>
        <samp>[style]</samp>  Identifies the style property of an element.
        If you want to set the entire style string (all the properties), tben use this
        as the last element in your path_string.<br/>
        <samp>[style] [baz]</samp> Used for referencing the <i>style</i> (not HTML) property
        of an element.
        <p></p>
        <b>value</b> Default <code>null</code> If null, the <i>path_string</i> is expected to refer to
        an HTML element, an HTML property, or a style property. It will be removed.
        Otherwise <i>value</i> is expected to be a string.
        If the <i>path_string</i> refers to an element, it will be replaced by
        the HTML (or plain text) of the value. If the path_string refers to a property,
        it should be a plain string of the new value of that property.<br/>
        <p></p>
        <i>Examples:</i><br/>
        Remove the element within my_elt_id that has a name of "mydiv".<br/>
        <code title="unEVALable">SW.selector_set_in_ui("#my_elt_id [name=mydiv]", null)</code><br/>
        Set the innerHTML of mydiv to <i>hey</i><br/>
        <code title="unEVALable">SW.selector_set_in_ui("#my_elt_id [name=mydiv] [innerHTML]", "<i>hey</i>")</code><br/>
        Add <i>end</i> after mydiv.<br/>
        <code title="unEVALable">SW.selector_set_in_ui("#my_elt_id [name=mydiv] [afterend]", "<i>end</i>")</code><br/>
        Set the title (tooltip) of mydiv to "new title".<br/>
        <code title="unEVALable">SW.selector_set_in_ui("#my_elt_id [name=mydiv] [title]", "new title")</code><br/>
        Set the color of the text in mydiv to "red".<br/>
        <code title="unEVALable">SW.selector_set_in_ui("#my_elt_id [name=mydiv] [style] [color]", "red")</code>
        <p></p>
        Below we are popping up a show_window with just one button.
        Clicking on the button calls <code title="not_in_tesetsuite">modify_window_cb</code>
        which creates a new random color, then sets the button's "style" property of "background"
        to that new color. Then the string used to indicate that new color is
        added to the window just below the button.<pre><code>
function modify_window_cb(vals){
   let color = "rgb(" + Math.round(Math.random() * 255) + "," +
                        Math.round(Math.random() * 255) + "," +
                        Math.round(Math.random() * 255) + ")"
   SW.selector_set_in_ui("#" + vals.show_window_elt_id + " [name=the_button] [style] [background]",
                      color
                      )
   SW.selector_set_in_ui("#" + vals.show_window_elt_id + " [name=the_button] [afterend]",
                      "&lt;br/>" + color)
}
show_window({title: "Modify Window",
             x:300, y:20, width:300, height:200,
             callback: modify_window_cb,
             content: '&lt;input type="button" name="the_button" value="click to colorize"/>'
  })</code></pre>
    <p></p>
    <i>Beware</i>: The HTML checkbox input is exceedingly poorly designed, making
    it very confusing to use. The "checked" attribute indicates whether the
    checkbox is checked or not. Rather than have it just take values of <code>true</code>
    or <code>false</code>, if it is <i>present</i> that indicated that the checkbox
    is checked. If it is not present, the checkbox is not checked.
    <p></p>
    SW.selector_set_in_ui corrects for this confusion by allowing its
    2nd argument, "value", to be <code>false</code>, <code>"false"</code>, <code>null</code>
    or <code>undefined</code> (not passed in at all)
    to indicate unchecked. All other values mean checked.
    <p></p>
    <i>Beware</i>: Not all selectors are supported by SW.selector_set_in_ui.
     <p></p>
     See <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors">CSS Selectors</a><br/>
    </details> <!-- end of SW.selector_set_in_ui -->
    </details> <!-- end window Utilities -->

    <details class="doc_details"><summary>SVG</summary>
        SVG stands for Scalable Vector Graphics. It is a way
        to draw 2D graphics on a web page. The drawn elements
        (circles, lines, etc.) are surrounded by a svg tag wrapper
        indicating the size of the drawing area. You can use
        svg tags directly in the content for a show_window.<p></p>
        The methods documented below create that html from JavaScript calls,
        facilitating dynamic content creation as well as
        making static svg shapes a little easier to create.<p></p>
        <i>Parameters for all svg functions</i>:<br/>
        <b>id</b> The html id of the element, useful in calls to window utility functions
        such as <code>SW.append_in_ui</code>.<br/>
        <b>html_class</b>: Default: <code>""</code> Used to set the <code title="unEVALable code fragment"> class</code> attrbute of the element.
        Due to a name conflict with <code title="unEVALable code fragment"> class</code> in JavaScript, we had to name this
        <code title="unEVALable code fragment"> html_class</code>.<br/>
        With a value of <code>"clickable"</code>, clicking this element will call the show_window
        handler function when the user clicks the element.<br/>
        With a value of <code>"draggable"</code>, dragging this element will call the show_window
        handler function when the element is dropped.<br/>
        You can use both via a value of <code>"clickable draggable"</code> just
        like regular HTML elements with multiple classes. In that case,
        use the HTML <code title="unEVALable">class</code> spelling of the class property.

        <b>style</b>: A string setting the css style of the element. Note that some
        arguments to svg functions are actually rendered as style attributes, such as
        <code title="unEVALable code fragment"> color</code>,
        <code title="unEVALable code fragment"> border_color</code>,
        <code title="unEVALable code fragment"> border_width</code>.

        <details id="svg_svg_doc_id" class="doc_details"><summary>svg_svg</summary>
            svg shapes must be drawn as child elements of an <code title="unEVALable code fragment"> svg</code> element.
            The x and y of those child elements is relative to the upper left corner of
            the containing svg element. So for instance, if you draw a circle with
            x: 0, y: 0, you will see only the lower right corner of the circle
            in the upper left corner of the svg area.
            <i>Parameters</i> <br/>
            <b>width</b>:  Width  in pixels of the rectangle area to put svg shapes in.<br/>
            <b>height</b>: Height in pixels of the rectangle area to put svg shapes in.<br/>
            <b>viewBox</b>: A string of four space_separated numbers that controls the scale and positioning
            of the contained svg elements.<br/>
            <b>child_elements</b>: Default: <code>[]</code>. An array of strings of the html for
            svg shapes. Usually these strings should be created with the svg shape creator functions
            such as <code>svg_circle</code>. <p></p>
            <i>Example</i>:<pre><code title="not in TestSuite"> show_window({
   content:svg_svg({
       id:"s_id", width:500, height:200,
       html_class:"clickable",
       child_elements: [
           svg_rect({x:100, y:100,
                     width:200, height: 50,
                     color:"yellow"})
           ]})
})</code></pre>
        </details> <!-- end svg_svg -->

        <details id="svg_circle_doc_id" class="doc_details"><summary>svg_circle</summary>
            svg_circle must be drawn as a child element of an <code title="unEVALable code fragment"> svg</code> element.
            <i>Parameters</i> <br/>
            <b>cx</b>: Default: 0.  The x position of the center of the circle.<br/>
            <b>cy</b>: Default: 0.  The y position of the center of the circle.<br/>
            <b>r</b>:  Default: 10. The radius of the circle.<br/>
            <b>color</b>: Default: "black". The color of the interior of the circle.<br/>
            <b>border_color</b>: Default: "black". The color of the perimeter of the circle.<br/>
            <b>border_width</b>: Default: 1. The width of the perimeter of the circle.<p></p>
            <i>Example</i>:<br/>
            <code>svg_circle({cx: 100, cy: 50, r: 7, color: "red"})</code>
        </details>

        <details id="svg_ellipse_doc_id" class="doc_details"><summary>svg_ellipse</summary>
            svg_ellipse must be drawn as a child element of an <code title="unEVALable code fragment"> svg</code> element.
            <i>Parameters</i> <br/>
            <b>cx</b>: Default: 0.  The x position of the center of the ellipse.<br/>
            <b>cy</b>: Default: 0.  The y position of the center of the ellipse.<br/>
            <b>rx</b>: Default: 20. The x radius of the ellipse.<br/>
            <b>ry</b>: Default: 20. The y radius of the ellipse.<br/>

            <b>color</b>: Default: "black". The color of the interior of the ellipse.<br/>
            <b>border_color</b>: Default: "black". The color of the perimeter of the ellipse.<br/>
            <b>border_width</b>: Default: 1. The width of the perimeter of the ellipse.<p></p>
            <i>Example</i>:<br/>
            <code>svg_ellipse({cx: 100, cy: 50, r: 7, color: "red"})</code>
        </details>

        <details id="svg_html_doc_id" class="doc_details"><summary>svg_html</summary>
            This renders arbitrary html at the location specified.
            svg_html must be drawn as a child element of an <code title="unEVALable code fragment"> svg</code> element.<br/>
            <i>Parameters</i> <br/>
            <b>x</b>: Default: 0.  The x position of the upper left of the rendered HTML.<br/>
            <b>y</b>: Default: 0.  The y position of the upper left of the rendered HTML.<br/>
            <b>width</b>: Default: 100. The width of the area to render the HTML into.<br/>
            <b>height</b>: Default: 100. The height of the area to render the HTML into.
            <p></p>
            Unlike the other svg functions, <code>svg_html</code> does not take
            <code title="unEVALable code fragment"> id</code>,
            <code title="unEVALable code fragment"> class</code>
            and <code title="unEVALable code fragment"> style</code> arguments. If you desire these, they must be placed on the individual
            html tags within the value of the <code title="unEVALable code fragment"> html</code> argument. Note that
            here we need to spell the class attribute by its correct HTML name,
            <code title="unEVALable code fragment"> class</code>,
            not the special spelling used in the other svg functions of
            <code title="unEVALable code fragment"> html_class</code>.
            <p></p>
            <i>Example</i>:<br/>
            <pre><code>svg_html({html: &#96;&lt;i
               id="yikes_id"
               class="clickable"
               style='font-size:30px;'>
               yikes
               &lt;/i>&#96;,
          x: 60,
          y: 100})</code></pre>
        </details>

        <details id="svg_line_doc_id" class="doc_details"><summary>svg_line</summary>
            svg_line must be drawn as a child element of an
            <code title="unEVALable code fragment"> svg</code> element.
            <i>Parameters</i> <br/>
            <b>x1</b>: Default: 0.   The x position of the start of the line.<br/>
            <b>y1</b>: Default: 0.   The y position of the start of the line.<br/>
            <b>x2</b>: Default: 100. The x position of the end of the line.<br/>
            <b>y2</b>: Default: 100. The x position of the end of the line.<br/>

            <b>color</b>: Default: "black". The color of the line.<br/>
            <b>width</b>: Default: 1. The width of the line.<p></p>
            <i>Example</i>:<br/>
            <code>svg_line({x1: 10, y1: 50, x2: 75, y2: 100, color: "red", width: 5})</code>
        </details>

        <details id="svg_rect_doc_id" class="doc_details"><summary>svg_rect</summary>
            svg_rect must be drawn as a child element of an
            <code title="unEVALable code fragment"> svg</code> element.
            <i>Parameters</i> <br/>
            <b>x</b>:      Default: 0.   The x position of the upper left corner of the rectangle.<br/>
            <b>y</b>:      Default: 0.   The y position of the upper left corner of the rectangle.<br/>
            <b>width</b>:  Default: 100. The pixels between the left and right edges of the rectangle.<br/>
            <b>height</b>: Default: 100. The pixels between the top and bottom edges of the rectangle.<br/>
            <b>rx</b>:     Default: 0.   The x-axis radius of the ellipse used to round off the corners of the rectangle.
            An rx of 0 and an ry of 0 (the defaults), gives square corners.<br/>
            <b>ry</b>:     Default: 0.   The y-axis radius of the ellipse used to round off the corners of the rectangle.<br/>
            <b>color</b>:        Default: "black". The color of the interior of the rectangle.<br/>
            <b>border_color</b>: Default: "black". The color of the perimeter of the rectangle.<br/>
            <b>border_width</b>: Default: 1.       The width of the perimeter of the rectangle.<p></p>
            <i>Example</i>:<br/>
            <code>svg_rect({x: 10, y: 50, width: 75, height: 25, color: "green"})</code>
        </details>

        <details id="svg_polygon_doc_id" class="doc_details"><summary>svg_polygon</summary>
            Draws a closed figure with corners at the indicated x and y positions.
            svg_polygon must be drawn as a child element of an <code title="unEVALable code fragment"> svg</code> element.
            <i>Parameters</i> <br/>
            <b>points</b>:       Default: [].  The positions of the corners of the polygon.<br/>
            <b>color</b>:        Default: "black". The color of the interior of the polygon.<br/>
            <b>border_color</b>: Default: "black". The color of the perimeter of the polygon.<br/>
            <b>border_width</b>: Default: 1.       The width of the perimeter of the polygon.<p></p>
            <i>Example of a triangle</i>:<br/>
            <code>svg_polygon({points: [[0, 0], [100, 0], [50, 50]], color: "lime"})</code>
        </details>

        <details id="svg_polyline_doc_id" class="doc_details"><summary>svg_polyline</summary>
            Draws an open figure with corners at the indicated x and y positions.
            svg_polyline must be drawn as a child element of an <code title="unEVALable code fragment"> svg</code> element.
            <i>Parameters</i> <br/>
            <b>points</b>: Default: [].      The positions of the end points of the line segments.<br/>
            <b>color</b>:  Default: "black". The color of the line.<br/>
            <b>width</b>:  Default: 1.       The width of the line.<p></p>
            <i>Example of a triangle</i>:<br/>
            <code>svg_polyline({points: [[0, 0], [100, 0], [50, 50]], color: "brown"})</code>
        </details>

        <details id="svg_text_doc_id" class="doc_details"><summary>svg_text</summary>
            Draws text at the indicated x and y position.
            svg_text must be drawn as a child element of an <code title="unEVALable code fragment"> svg</code> element.
            <i>Parameters</i> <br/>
            <b>text</b>:   Default: "hi". The string to be displayed.<br/>
            <b>x</b>:      Default: 20.   The x position of the upper left corner of the text.<br/>
            <b>y</b>:      Default: 20.   The y position of the upper left corner of the text.<br/>
            <b>size</b>:   Default: 16.   The font size of the text.<br/>
            <b>color</b>:  Default: "black". The color of the text.<br/>
            <b>border_color</b>:  Default: "black". The color of the outline of the text.<br/>
            <b>border_width</b>:  Default: 0.       The width of the outline of the text.<br/>
            <b>transform</b>:  Default: "rotate(0, 0, 0)". Modifies the position, orientation and scale of the text.
            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform">Details</a>
            <p></p>
            <i>Example</i>:<br/>
            <code>svg_text({text: "hey", x:25, y:30, color: "brown"})</code>
        </details>

    </details> <!-- end SVG -->

</details> <!-- end window_system -->

<details id="Math_id" class="doc_details"><summary>Math in JavaScript</summary>
Arithmetic is built-in to JavaScript at top level.<br/>
See DDE menu bar/Learn JS/Math for examples to insert.
<p></p>
The class <code>Number</code> has a few constants and utility functions.<br/>
Eval <code>Number</code> to see them.
<p></p>
The class <code>Math</code> has quite a few more contants and functions
including trigonometry and exponents.<br/>
Eval <code>Math</code> to see them.
<p></p>
<code>"mathjs"</code> is an npm package containing a large number of functions.
It is built-in to DDE. It supports
numbers, big numbers, complex numbers, fractions, units, strings,
arrays, matrices, eigenvalues and symbolic math.<br/>
<a href="#" onclick='browse_page("https://mathjs.org/")'>Overview</a>
<a style="margin-left:20px;" href="#" onclick='browse_page("https://mathjs.org/docs/reference/functions.html")'>Function Reference</a>
<p></p>
<i>Examples:</i><br/>
Initialize "math" to the class containing the mathjs functions<br/>
<code>var math = require("mathjs")</code>
<p></p>
Eval <code>math</code>  to inspect the list of constants and functions available<br/>
<code>math.hypot(3, 4)</code> => <samp>5</samp>
<p></p>
There's a lot more math libraries in npm. Choose File menu/Manage npm.
Type in "math" or the name of some math function like "svd", and
click the <button>search</button> button. This will show you a page
of relevant npm packages.
</details>

<details id="Messaging_id" class="doc_details"><summary>Messaging</summary>
   <div style="color: red;"> Warning: The Messaging facility
      is now just internal prototype code, not available for public use.
      We expect to make it available in a future release.
   </div>
   You can send messages to a DDE running on another computer on the Internet.
   These messages allow you to chat with a remote DDE user, control Jobs, or even
   run arbitrary JavaScript and get back results if permitted.
   This gives you a powerful "remote control" capability of robot-to-robot,
   human-to-human or human-to-robot communication.
   <p></p>
   The user operating the remote DDE must be logged in to Haddington's Messaging server.
   To log in, Haddington must register you with a user name and password.
   Please contact Haddington to register.
   <p></p>
   <details class="doc_details"><summary>Interactive Use</summary>
   To use Messaging interactively, choose the Jobs menu/Messaging item.
   It permits you to use the Messaging capabilities via a dialog box.
   It is recommended that you try out the messaging methods via this dialog first.
   Then, if you wish to "automate" them, use the dialog box to insert JavaScript code
   into the DDE editor.
   You can then embed this code into your application, including in Jobs.

       <details class="doc_details"><summary>Help</summary>
       The list of message types you can send are in the select menu in the "New Message"
       portion of the DDE Messaging dialog box. Most messages have one main argument that is a string
       and perhaps several others. The button right below the <b>type</b> select menu toggles the
       textarea to its right from editing this one main argument to a JS literal object
       containing all arguments. The name on the button will be "All args" when you're
       editing all the arguments, and the name of the main argument for the selected message type when
       you're editing just its main argument. When editing the main argument,
       don't wrap quotes around it.
       <p></p>
       Click help works in the New Message and Sent Messages pane.
       </details>
       <details class="doc_details"><summary>Common Params and Responses</summary>
       <b id="Messaging.to_doc_id">to</b> In addition to the message type and body,
       each message must have a <b>to</b> user name (string) of a registered user to send the message to.
       (This can be yourself for testing purposes.)<br/>
       <b id="Messaging.get_result_doc_id">get_result</b> is <code>true</code> or <code>false</code>,
       (checked or unchecked) depending on whether you
       require a response from the receiving DDE. When you're sending rapid fire <i>job_instruction</i>
       messages to a job on the remote DDE, as when you are having a remote Dexter follow the motions
       that you manually move your local Dexter to, generally you want <i>get_result</i> to be <code>false</code>.
       If the internet is slow, or intermittent, such messages will only be sent once, with
       no retrys.
       <p></p>
       When get_result is <code>true</code>, the Messaging software tries harder
       to get a message through to the receiver, retrying several times over the course of about a minute
       before giving up. Messaging is much faster and more reliable if you have a solid, high-bandwidth
       Internet connection. The default value for get_result depends on the message type.
       <p></p>
       <b><i>Response</i></b><br/>
       When the response to a message comes back to the original sender, it has all of its original
       fields plus:<br/>
       <b>from:</b> A string. The user name that you originally sent the message to.<br/>
       <b>to:</b> A string. Your user name. This is because the automatic response to
         a message with get_result=true is really just anoother one-way message
         that is send back to the original sender.<br/>
       <b>result:</b> This is a string. It can be:
        <ul><li>An error message, which starts with "Error:"</li>
            <li>OK, meaning there's no specific result, just that the message peformed as intended.</li>
            <li>A message containing the requested information.<br/>
                Example: if
                its a message of type <code>"eval"</code> and the source is <code>"2 + 3"</code>, then
                the result will be <code>"5"</code>.</li>
         </ul>
       </details>
       <details class="doc_details"><summary>Debugging</summary>
           Network communications are inherently unreliable. Here's what helps.
           <ul>
               <li>DDE has lots of error messages. You can see them all by checking
               "print_debug_info" in the Messasging dialog box or evaling:
               <code>Messaging.print_debug_info = true </code> .</li>

               <li>DDE's messaging facility
                    tries to increase that reliability by automatic "retrys" when you set
                     a message's get_result to <code>true</code>.</li>

               <li>Send messages to yourself to test.</li>
               <li>Use <a href="#" onclick=DocCode.open_doc(Messaing.ping_doc_id)>Messaging.ping</a>
                   to test connectivity to a message's "to" argument.</li>
           </ul>
       </details>

       </details> <!--interactive use-->

   <details class="doc_details"><summary>Messaging Misc</summary>
       <details id="Messaging.login_doc_id" class="doc_details"><summary>login</summary>
           To send or receive messages, you must log in.<br/>
           <i>Parameters:</i><br/>
           <b>user</b> A string. Required. Must be a registered user.<br/>
           <b>pass</b> A string. Required. The password of the user.<br/>
           <b>callback</b> Default <code>null</code> .
           A function that is passed one argument, the "result" string
           from the server if login in successful.<br/>
           <i>Example:</i><br/>
           <code title="not in TestSuite">Messaging.login({user: "joe", pass:"bar"})</code>
       </details>
       <details id="Messaging.logout_doc_id" class="doc_details"><summary>logout</summary>
           Log the user out.<br/>
           <i>Example:</i><br/>
           <code>Messaging.logout()</code>
       </details>
       <details id="Messaging.print_debug_info_doc_id" class="doc_details"><summary>print_debug_info_id</summary>
       A variable that turns on or off detailed status messages to the output pane.
       Useful in debugging. Default <code>false</code> .
       </details>
       <details id="Messaging.permit_doc_id" class="doc_details"><summary>permit</summary>
       Messaging allows a remote user to perform potentially dangerous
       operations on your DDE. The <code>Messaging.permit</code> method is automatically called
       whenever another user sends you a message.<br/>
       If the permit method returns:<br/>
       <code>true</code> : the message is run.<br/>
       <code>false</code> : the message is not run.<br/>
       <code>"manual"</code> : a button is placed in your DDE Messaging dialog named "run".
       You can then examine the message, and, if you like it, click the button to run it.
       <p></p>
       The permit method has a default implementation, but that is expected to be
       over-written by a DDE user to customize permissions to the incoming message's
       users and message types that the DDE user chooses.<br/>
       <i>Parameter:</i><br/>
       <b>mess_obj</b> Each message is encoded in a JS literal object. You can test the
       properties of this object to decide if the permit method should return <code>true</code>
       or <code>false</code>.
       All messages will have the fields:<br/>
           <b><i>from</i></b> A string of the user that is sending this message.<br/>
           <b><i>type</i></b> A string of the type of the message.<br/>
           <b><i>get_result</i></b> A boolean. <code>true</code> if the message is requesting that the
         result of calling the type's "receive" method is to be returned to the "from" user.
       <p></p> Other properties are type-specific.
       </details>
       <details id="Messaging.permit_default_doc_id" class="doc_details"><summary>permit_default</summary>
       A method who's definition is set to <code>Messaging.permit</code> by default.
       If you want to change the permit method definition,
       it is recommened that you start with the definition of permit_default and
       customize it to your liking.<pre><code>
Messaging.permit_default = function(mess_obj){
   if      (mess_obj.result !== undefined)    { return true } //when you've requested a result, this prop will be bound, so permit it because you asked for it.
   else if (mess_obj.type == "eval")          { return "manual" } //the receiving user gets a "run" button that they can click on if they like, to run it
   else if (mess_obj.from === Messaging.user) { return "manual" } //run anything you send to yourself
   else if (["chat", "job_instruction", "out", "speak", "start_job"].includes(mess_obj.type)) {
        return true
   }
   else if ((mess_obj.type == "get_variable") && mess_obj.job_name) { return true }
   else { return "manual" }
} </code></pre>
   </details>
   </details> <!--end Messaging Misc -->
   <details class="doc_details"><summary>Communication</summary>
   Messaging's communications methods do the real work of interacting
   with remote DDEs.
   All communications methods take "keyword" arguments.
   They all accept <a href="#" onclick="DocCode.open_doc('Messaging.to_doc_id')">to</a> and
   <a href="#" onclick="DocCode.open_doc('Messaging.get_result_doc_id')">get_result</a> arguments.

   <details id="Messaging.chat_doc_id" class="doc_details"><summary>chat</summary>
       Send a message to another logged in user. It will appear in the
       "Sent & Received Messages" area of their DDE Messaging dialog box.
       If that box is not up, it will automatically pop up when a chat message
       is received.
       <br/>
       <i>Parameter:</i><br/>
       <b>message</b> Default:  <code>"test message"</code>
       <p></p>
       By default, get_result is <code>false</code>, but
       you can set it to true if you want to be confident that your message got through.<br/>
       <i>Example:</i><pre><code title="not in TestSuite">Messaging.chat({
       message: "hey Joe",
       to: "Joe",
       get_result: false
       }) </code></pre>
   </details>
   <details id="Messaging.eval_doc_id" class="doc_details"><summary>eval</summary>
       Evaluate JS source code on the remote DDE and return the result.
       Warning: this is dangerous and is guarded against by
       <a href="#" onclick="DocCode.open_doc('Messaging.permit_default_doc_id')"><code>Messaging.permit_default</code></a>
       which returns <code>"manual"</code>.
       <br/>
       <i>Parameters:</i><br/>
       <b>source</b> Required. A string of JS source code to eval in the remote DDE.<br/>
       <b>callback</b> Default: <code>"out"</code> A method that's passed one argument
       in the original sender's DDE when the response comes back.<br/>
       <b>pass_to_callback</b> Default: <code>"evaled_result"</code> Determines the
       argument to pass to the callback. Possibilities:
       <ul>
           <li><code>"mess_obj"</code> The whole literal object of the message.</li>
           <li><code>"unevaled_result"</code></li> JS source code representing the default.
           <li><code>"evaled_result"</code></li> The result of evaling the 'result' property
                in the original sender's DDE once the response comes back.
           <li>Any property name in the mess_obj:
               The value of that property will be passed to the callback.<br/>
               Example: <code>"source"</code></li>
       </ul>
       <br/>
       <b>get_result</b> Default: <code>true</code>. The result field will be the
       source code of the result of evaling the "source" property in the
       remote DDE.<br/>
       <br/>
       <i>Example:</i><pre><code title="not in TestSuite"> Messaging.eval({
   source: "2 + 3",
   to: "Joe",
   get_result: true
   }) </code></pre>
   The result field will contain <code>"5"</code>.
   </details>
   <details id="Messaging.get_variable_doc_id" class="doc_details"><summary>get_variable</summary>
       Get the value of a variable from a remote DDE.<br/>
       <i>Parameters:</i><br/>
       <b>variable_name</b> Required. A string. Can be a single identifier, ie "foo",
         or a path, ie "foo.bar.baz" <br/>
       <b>job_name</b> Default: <code>null</code>. If null, variable_name is a global variable
        or at least its first path part is a global variable.
        Otherwise, job_name should be the name of a defined Job in the receiver's DDE.
        In that case, variable_name is the name of a user_data variable or
        the first path part is a top level user_data variable.
        Thus a Job name of <code>"my_job"</code> with a variable_name of
        <code>"foo.bar"</code> is equivalent to
        a Job name of <code>null</code>  and a variable name of <code>"Job.my_job.user_data.foo.bar"</code><br/>
       <b>eval_kind</b> Default: <code>"JSON"</code> Determines how the value of the
       variable is converted to be transfered back to the original sender and used
       to convert the value of the result (a string) back on the original sender
       when the pass_to_callback="evaled_result". Options:
       <ul>
        <li><code>"JSON"</code> The default. In the receiving DDE, the variable value is passed to
            <code>JSON.stringify</code> to convert it for transfer back to the original
            sender.</li>
       <li><code>"eval"</code>  In the receiving DDE, the variable value is passed to
       <code>to_source_code</code> to convert it to a string for tranfer back to the original
       sender.</li>
       <b><code>null</code></b> No transformation is done on the variable value.</li>
       </ul>
       <b>callback</b> Default: <code>"out"</code> A function that is passed one argument when the message comes back
       to the original sender. <br/>
       <b>pass_to_callback</b> Default: <code>"evaled_result"</code>. The part of the message object
         that is passed to the callback. Options:
       <ul>
           <li><code>"mess_obj"</code> The whole literal object of the message.</li>
           <li><code>"unevaled_result"</code></li> JS source code representing the default.
           <li><code>"evaled_result"</code></li> The result of evaling the 'result' property
           in the original sender's DDE once the response comes back. The function used
           to perform the evaluation is indicated in the <b>eval_kind</b> argument.
           <li>Any property name in the mess_obj:
               The value of that property will be passed to the callback.<br/>
               Example: <code>"source"</code></li>
       </ul>
       <code>undefined</code> gets a bit of special processing as a variable value.
       If the variable's value is <code>undefined</code>, the result of the
       message sent back to the original sender is <code>"undefined"</code>.
       If pass_to_callback is "evaled_result", then <code>undefined</code>
       is passed to the callback if the eval_kind is "JSON" or "eval".
       This makes it easy for the sender to test if a requested variable is undefined.<br/>
       <b>get_result</b> Default: <code>true</code>.
         The result field will be a string for transfer of the variable value to
         the orginal sender.
       <p></p>
       <i>Example:</i><pre><code title="not in TestSuite"> Messaging.get_variable({
       variable_name: "foo",
       job_name: "my_job",
       callback: "out",
       eval_kind: "eval",
       to: "Joe",
       get_result: true
   }) </code></pre>
   </details>

   <details id="Messaging.job_instruction_doc_id" class="doc_details"><summary>job_instruction</summary>
       Add an instruction to the end of a Job running on a remote computer.
       A Job such as:<pre><code title="not in TestSuite">
new Job({
    name: "wait_for_message",
    when_do_list_done="wait",
    do_list: []
}) </code></pre>
      starts off with no instructions. Rather than just quit, the
      <code  title="unEVALable">when_do_list_done="wait"</code> tells it to just wait
      and if an instruction is added to the end of the do_list, run it and wait for
      the next one. You can use Messaging.job_instruction to add an instruction from
      another DDE into that Job.<br/>
       <i>Parameters:</i><br/>
       <b>do_list_item</b> Required. The do_list item (usually an instruction) to be added
       to th end of the job_name Job. <br/>
       <b>job_name</b> Default: <code>"wait_for_message"</code> The name of the Job
       in the "to" DDE to add the do_list_item to.<br/>
       <b>if_no_job</b> Default: <code>"define_start"</code> Specifies what to do
       if there is no job named "job_name" defined on the "to" DDE.
       <ul><li><code>"define_start"</code> causes a Job named "job_name" to be
            created in the "to" DDE with a definition of the above Job definition.
            It will then have the do_list_item added to it, which will run and wait
            for the next instruction to be sent to it.</li>
           <li><code>"error"</code> Sets the result of the message to an error message.
              if get_result is <code>true</code>, the message will be returned to
              the original sender.</li>
       </ul>
       By default, get_result is <code>false</code>. When false, messages are sent just once
       and forgotten. If they don't make it, too bad. No "result" message comes back. <br/>
       <br/>
       <i>Example:</i><pre><code title="not in TestSuite">
Messaging.job_instruction({do_list_item: Dexter.move_all_joints(10, 20, 30, 40, 50),
            job_name: "wait_for_message",
            to: "Joe"
}) </code></pre>
   </details>

   <details id="Messaging.out_doc_id" class="doc_details"><summary>out</summary>
       Messaging.out renders HTML in the Output pane just like the function <code>out</code>
       <br/>
       <i>Parameters:</i><br/>
       <b>val</b> Default: <code>"test message"</code> val is converted to a string
       if it isn't already, and printed in the Output pane.<br/>
       <b>color</b> Default: <code>"black"</code> The color of the text. Any HTML
       description of a color is valid, like <code>"#AAF"</code> or <code>"rgb(0, 100, 255)"</code><br/>
       <b>temp</b> Default: <code>false</code> Boolean. If <code>true</code>, the
       printout will be replaced by the next call to out<br/>
       <b>code</b> Default: <code>null</code> possible values:
       <ul><li><code>true</code>  val is printed in fixed-width (code) font.</li>
           <li><code>false</code> val is printed in variable-width (nomral) font.</li>
           <li><code>null</code>  val is printed in a font depending on the
           value of the "code" checkbox in the Output pane header.</li>
       </ul>
       By default, get_result is <code>false</code>
       <br/>
       <i>Example:</i><br/>
       <code title="not in TestSuite"> Messaging.out({val: "hey", color: "blue", temp: false})</code>
       See <a href="#" onclick="DocCode.open_doc(out_doc_id)">out</a>
   </details>

   <details id="Messaging.ping_doc_id" class="doc_details"><summary>ping</summary>
       Ping sends a message to the "to" DDE, captures the time when it reaches
       that computer in its result property, and (to be useful) returns that result.
       The default callback formats a message about how long it took.
       <br/>
       <i>Parameters:</i><br/>
       <b>callback</b> Default: <code>Messaging.ping_callback</code> A function of one
       argument, the message argument. It is called in the original sender's DDE when
       the result message is returned. Timing details are displayed in the Output pane.
       <p></p>
       By default, get_result is <code>true</code>. The result field will be <br/>
       <br/>
       <i>Example:</i><code title="not in TestSuite"> Messaging.ping({to: "Joe"})</code>
   </details>

   <details id="Messaging.set_variable_doc_id" class="doc_details"><summary>set_variable</summary>
       Set a variable on another DDE to a given value.
       <br/>
       <i>Parameters:</i><br/>
       <b>variable_name</b> Required. A string of a variable name.
       If the string has dots in it, its a path to the actual var set.
       If there's a part of the path that doesn't exist, then it is
       created with the value of {} so the next part of the path
       will be a property within that new value. <br/>
       <b>new_value</b> Default: <code>undefined</code>
       The new value to set the variable to.
       If new_value is not passed in, or is passed in as "undefined",
       then the value the variable is set to is undefined regardless
       of the eval_kind.<br/>
       <b>job_name</b> Default: <code>null</code>
       If null, variable_name is a global variable.
       Otherwise its a user_data variable in the indicated Job,
       which must be running on the receiving DDE.<br/>
       Using a Job name of <code>"foo"</code> and<br/>
       a variable name of <code>"bar"</code> is the same as<br/>
       using a Job name of <code>null</code> and
       a variable name of <code>"Job.foo.user_data.bar"</code> <br/>
       <b>eval_kind</b> Default: <code>"JSON"</code>  Possible values:
       <ul>
           <li><code>"JSON"</code> If the new_value is not a string, it is converted to a string
               via JSON.stringify(new_value) for sending.
               The receiver converts it back using JSON.parse(new_value)</li>
           <li><code>null</code> The new_value is converted to a string via
               <code title="unEvalable">new_val = "" + new_value</code>,
                then that string is used as is for the new value of the variable.</li>
           <li><code>"eval"</code>
            If the new_value is not a string, it is converted to a string
            via <code title="unEvalable">to_source_code({value: new_value"})</code> for sending.
            The receiver converts it back using <code title="unEvalable">eval(new_value)</code>
       </ul>
       By default, get_result is <code>true</code>.<br/>
       The result field will be <code>"OK"</code>
       <br/>
       <i>Example:</i><pre><code title="not in TestSuite">
Messaging.set_variable({variable_name: "joint_angles",
                        new_value: {joint1:10, joint2:20},
                        job_name:"my_job",
                        to: "Joe"})  </code></pre>
   </details>

   <details id="Messaging.speak_doc_id" class="doc_details"><summary>speak</summary>
       Say a value on a remote DDE.<br/>
       <i>Parameters:</i><br/>
       <b>speak_data</b> Default: <code>"hello"</code> <br/>
       <b>volume</b>     Default: <code>1.0</code>     <br/>
       <b>rate</b>       Default: <code>1.0</code>     <br/>
       <b>pitch</b>      Default: <code>1.0</code>     <br/>
       <b>lang</b>       Default: <code>"en_US"</code> <br/>
       <b>voice</b>      Default: <code>0</code>       <br/>
       <br/>
       By default, get_result is <code>false</code>.<br/>
       <i>Example:</i><br/>
       <code title="not in TestSuite"> Messaging.speak({speak_data:123, rate:1.5, to:"Joe"})</code>
       <p></p>
       See also <a href="#" onclick="DocCode.open_doc(speak_doc_id)">speak</a>
   </details>

   <details id="Messaging.start_job_doc_id" class="doc_details"><summary>start_job</summary>
       Start a Job on the "to" DDE after potentially defining it.<br/>
       <i>Parameters:</i><br/>
       <b>job_name</b> Required. If job_name is:
       <ul>
            <li><b>A string of an identifier</b> i.e. it looks like a Job name or variable name.
                It is expected to be a Job already defined in the "to" DDE.</li>
            <li><b>A Job instance</b> i.e. <code title="unEVALable">Job.my_job</code>
               The Job definition is converted to a string, sent to the "to" DDE,
               defined on the  "to" DDE then started.</li>
            <li><b>A string of <code title="unEVALable">"new Job( ...)"</code></b>
                The Job definition is sent to the "to" DDE,
                defined on the "to" DDE, then started.</li>
            <li><b>A string of an existing file (path) name</b>
                 The definition of the Job is read in, sent to the "to" DDE,
                defined on the  "to" DDE then started.</li>
       </ul>
        <b>start_options</b> Default: <code>{}</code> When the Job is started,
           these options over-ride the arguments that originally defined the Job.
           Any of the args passed into
           the normal definition of a Job can be start_options except for "name". <br/>
       <b>if_started</b> Default: <code>"ignore"</code> Determines the
       behavior if the Job is already defined, in combination with the status_code
       of the job. If the status code is:
       <ul>
           <li>"starting", the job is left to continue starting.</li>
           <li>"suspended", the Job is unsuspended.</li>
           <li>"running", "waiting", "running_when_stopped" then it depends on
               the value of if_started:
               <ul> <li>"ignore" The Job is left to run.</li>
                    <li>"error" The Job is stopped with an error.
                       The result of the returned message will start with "Error:"</li>
                    <li>"restart" The Job is stopped, then restarted with the start_options.</li>
               </ul>
           </li>
           <li>"not_started", "completed", "errored", "interrupted" The Job is started
                with the start_options.
           </li>
       </ul>
       <b>callback</b> Default: <code>null</code> A function that takes one agument,
       a mess_obj literal object <br/>
       <p></p>
       By default, get_result is <code>true</code>.<br/>
        If the Job was not able to start, the result field will start with <code>"Error:"</code>
        otherwise it will start with something else, meaning the Job is running.<br/>
       <br/>
       <i>Example:</i><pre><code title="not in TestSuite">
Messaging.start_job({job_name: "my_job",
            to: "Joe",
            get_result: true}) </code></pre>
       You can also define and start a default Job that waits for Messaging.job_instructions
       using <a href="#" onclick="DocCode.open_doc('Messaging.job_instruction_doc_id')">Messaging.job_instruction</a><br/>
       See also <a href="#" onclick="DocCode.open_doc('Control.start_job')">Control.start_job</a>
   </details>

   <details id="Messaging.stop_job_doc_id" class="doc_details"><summary>stop_job</summary>
       Stop a Job in the "to" DDE.<br/>
       <i>Parameters:</i><br/>
       <b>job_name</b> Required. A string. The name of the Job to stop. <br/>
       <b>reason</b> Default: <code>null</code> Normally a string describing why the Job is to be stopped.<br/>
       <b>perform_when_stopped</b> Default: <code>true</code> A boolean. When the Job is stopped,
          determines whether the Job should perform its usual when_stopped behavior.<br/>
       <b>callback</b> Default: <code>null</code> Optional. If this is a function,
           it takes one argument, the mess_obj. If non-null, it is called
           in the orginal sender when the result comes back from the receiver.
           Only relavent when get_result == true. <br/>
       <p></p>
       By default, get_result is <code>true</code>. The result field will be
       a string. If the Job could not be stopped successfully, the string starts with "Error:".
       Otherwise the string indicates success.<br/>
       <br/>
       <i>Example:</i><pre><code title="not in TestSuite">
Messaging.stop_job({job_name: "wait_for_message",
                    callback: out,
                    to: "Joe"}) </code></pre>
       See also: <a href="#" onclick="DocCode.open_doc('Control.stop_job_doc_id')">Control.stop_job</a>
   </details>

       <!-- templaete for Messaging fns
           <details id="Messaging._doc_id" class="doc_details"><summary></summary>

           <br/>
           <i>Parameters:</i><br/>
           <b></b> Default: <code></code> <br/>
           <b></b> Default: <code></code> <br/>
           <b></b> Default: <code></code> <br/>
           <b></b> Default: <code></code> <br/>
           <p></p>
           By default, get_result is <code>true</code>. The result field will be <br/>
           <br/>
           <i>Example:</i><pre><code> Messaging.({
       : "",
       to: "Joe",
       get_result: true
       }) </code></pre>
       </details> -->

   </details><!--end Messaging Communication -->
</details> <!-- end Messaging -->
<details id="Lesson_doc_id" class="doc_details"><summary>Lesson</summary>
In many ways, DDE is a cirriculua delivery platform for highly
interactive ways to learn about programming JavaScript, with an emphasis
on programming Dexter. Dexter and JavaScript are well matched because
both are general purpose tools; one in the hardware domain and one in software.
Both are also complex, hence the need for quality educational material.
<p></p>
DDE can also be used to <b><i>create</i></b> interactive lessons by:
<ul>
    <li>teachers implementing lesson plans in DDE</li>
    <li>students presenting class projects in DDE</li>
    <li>employees demoing software written in DDE</li>
    <li>marketers showing custom features built in DDE</li>
</ul>
Below are some of DDE's lesson authoring tools.
    <details id="insert_html_into_doc_pane_doc_id" class="doc_details"><summary>insert_html_into_doc_pane</summary>
    DDE users can extend the content of DDE's Doc pane with HTML of their own.
    This function facilitates inserting custom HTML at a place of your choosing.<br/>
    <i>Parameters</i><br/>
    <b>html</b> A string. Required.<br/>
    <b>summary_text_path</b> Usually a string. Default: <code>null</code>.
        This indicates the header near which to insert the html in the Doc pane.
        <code>null</code> inserts the html directly into the top level of the Doc pane.
        Separate Doc pane hierachical headers with a slash ie <code>"Reference Manual/Lesson"</code>
    <br/>
    <b>position</b> One of: <code>"beforebegin"</code>, <code>"afterbegin"</code>, <code>"beforeend"</code>, <code>"afterend"</code>.
                 Default: <code>"beforeend"</code>
        This indicates where, in relation to the summary_text_path, that the html is to
        be inserted.<br/>
        <code>"beforeend"</code>, (the default) inserts the html as
        new final content under the header of summary_text_path.<br/>
        <code>"afterbegin"</code> inserts the html as
        new initial content under the header of summary_text_path.
    <br/>
    <i>Example:</i><br/>
    <pre><code>
insert_html_into_doc_pane(&#96;&lt;details id="foo_doc_id" style="font-size:16px;">
                               &lt;summary class="doc_top_level_summary">foo&lt;/summary>
                               foo is a metasyntactic variable
                               (placeholder) used by programmers.
                           &lt;/details>&#96;)
        </code></pre>
    </details> <!-- end of insert_html_into_doc_pane-->

    <details id="DDEVideo.show_in_misc_pane_doc_id" class="doc_details"><summary>DDEVideo.show_in_misc_pane</summary>
    This function allows the user to display lots of different content
    in DDE's Misc pane programmatically.
    DDEVideo.show_in_misc_pane is automatically called with the string of
    the Misc pane combo box when you choose a value from its menu or type
    in text and hit return.<br/>
    <i>Parameters:</i><br/>
    <b>content</b> Required. Possible values used to fill the Misc Pane:
    <ul>
        <li><code>"Choose File"</code> Pops up a choose file dialog box to
        let the user select a file to display in the Misc Pane.</li>
        <li><i>Any DOM element</i> </li>
        <li><code>"Simulate Dexter"</code> Show the Dexter simulator.</li>
        <li><code>"create_dexter_marker"</code> Same as "Simulate Dexter" but
        also uses<br/>
         <b>arg1</b> as the xyz location (an array of 3 numbers in meters.) and <br/>
         <b>arg2</b> as the orientation (an array of 3 numbers in degrees)<br/>
        to place an arrow pointing at the indicated spot on the Dexter simulation.</li>
        <li><code>"Dexter Photo"</code></li> A picture of Dexter.
        <li><code>"Dexter Architecture"</code> A functional diagram of Dexter's parts.</li>
        <li><code>"Reference Manual"</code> The DDE Reference Manual.</li>
        <li><code>"Make Instruction"</code> The Make Instruction dialog box.</li>
        <li><code>"Haddington Website"</code></li>
        <li><i>A string starting with "http".</i> The URL of a web page to show.</li>
        <li><i>File paths ending in:</i>
            <ul>
                <li>.bmp<li>.dde</li>
                <li>.fbx</li>
                <li>.gif</li>
                <li>.gltf</li>
                <li>.jpg</li>
                <li>.js</li>
                <li>.json</li>
                <li>.png</li>
                <li>.stl</li>
                <li>.svg</li>
                <li>.txt</li>
             </ul>
            displays the file content.
        </li>
        <li><i>Other existing local files</i>  Show the content of the file.</li>
        <li><i>Strings starting with <b>&lt;</b></i>.  Render the string
          as HTML. </li>
    </ul>
    <b>arg1</b> Used by particular content values to customize them. See "create_dexter_marker".<br/>
    <b>arg2</b> Used by particular content values to customize them. See "create_dexter_marker".<br/>
    <i>Example:</i><br/>
    <pre><code>DDEVideo.show_in_misc_pane(
    &#96;&lt;h1 style="color:purple;">
        Hello Planet
    &lt;/hi>&#96;
)    </code></pre>
     To get the simulate pane back: <br/>
     <code>DDEVideo.show_in_misc_pane("Simulate Dexter")</code> <!-- note: I must have this here
       as we need the sim pane up to complete the rest of the test suite. -->

</details>  <!-- end of DDEVideo.show_in_misc_pane -->
<details id="Lesson.make_button_column_doc_id" class="doc_details"><summary>Lesson.make_button_column</summary>
  This function makes a column of "steps" to perform in an educational sequence.
  The column is a clickable Table of Contents for learning tasks that have
  many individual components.
  <p></p>
  Each step can be any HTML, most commonly shown in the Misc pane.
  A step can also be a button, most commonly of a snipet of video
  played in the Misc pane.
  See <a href="#" onclick=DocCode.open_doc("Lesson.make_button_html_doc_id")>Lesson.make_button_html</a>
  <p></p>
  <i>Parameters:</i><br/>
      <b>name</b> Default: <code>null</code> The name of this lession.
        Use <code>null</code> for no displayed name.<br/>
      <b>steps</b> Default: <code>[]</code> The array of steps for this lesson.
      A step may be a string of any HTML.
      The utility function<br/>
      <a href="#" onclick="DocCode.open_doc('Lesson.make_button_html_doc_id')">
          Lesson.make_button_html</a><br/>
          is convenient for creating buttons, especially those that play
          video clips.<br/>

      <b>location</b> Default: <code>null</code> The location that the
      lesson is to be shown <i>near</i>. <code>null</code> doesn't display the generated HTML
      anywhere. Regardless of the location, the grenerated HTML is returned
      by each call to <code>Lesson.make_button_column</code>. This is useful
      if you'd like to save the HTML to be displayed later.<br/>
      Possible values:
          <ul>
             <li><code>"show_window"</code> Make a new show_window to display the lesson</li>
             <li><code>"doc_pane_top_level"</code> shows the lesson at top level in the Doc pane.</li>
             <li><i>A DOM element</i> show the lesson near that DOM element.</li>
             <li><i>The ID of a DOM element</i> show the lesson near that DOM element.</li>
             <li><i>A string of a header in the Doc pane.</i>
                Separate Doc pane hierachical headers with a slash
                i.e. <code>"Reference Manual/Lesson"</code>
             </li>
          </ul>
      </li>
      <b>position</b> A string indicating the position of the inserted HTML W.R.T. the location.<br/>
              Possible values:
              <ul>
                  <li><code>"beforebegin"</code></li>
                  <li><code>"afterbegin"</code></li>
                  <li><code>"beforeend"</code> The default.</li>
                  <li><code>"afterend"</code></li>
              </ul>

      <b>html_wrapper</b> The name of an HTML tag
      that wraps the lesson.<br/>
      Reasonable values:
      <ul>
        <li><code>"details"</code> The default.</li>
          <li><code>"fieldset"</code> Draws a box around the steps.</li>
          <li><code>"div"</code></li>
          <li><code>null</code> No wrapper.</li>
      </ul>
      <b>open</b> Default: <code>false</code> If html_wrapper is <code>"details"</code>,
       the details are originally open.<br/>
      <b>add_spinner</b> Default: <code>true</code> A number spinner than appears
      in the header for the lesson that lets a user click to do the next (or previous)
      step. Particularly useful when the html_wrapper is <code>"details"</code>
      and you want to leave the steps hidden to save room.<br/>
      <b>default_method</b> Default: <code>"DDEVideo.show_in_misc_pane"</code>
      The method that is called when a user clicks on a step that
      doesn't have a method, such as a non-button HTML step.
      <p></p>
      <i>Example:</i><br/>
      <pre><code>Lesson.make_button_column({name: "Test Lesson",
      location: "show_window",
      html_wrapper: "details",
      steps: [
            Lesson.make_button_html({label: "Introduction",
                 start: 0,
                 end: "0:15", //zero minutes and 15 seconds.
                 args: ["https://www.youtube.com/embed/Al2NUrO4HAU"]
                 }),
            Lesson.make_button_html({label: "Dexter Picture",
                 args: [replace_substrings(__dirname, "\\", "/", false) +
                        "/doc/HD+Robotics-8517.jpg"]
                 }),
             Lesson.make_button_html({label: "compute 2 + 3",
             icon: "",
             method: "eval",
             args: ["out(2 + 3)"]
             }),
             Lesson.make_button_html({label: "Indicate Dexter part",
                  tooltip: "Red arrow points at simulated Dexter part.",
                  method: "DDEVideo.show_in_misc_pane",
                  args: ["create_dexter_marker", //content to show
                          [0.3, -0.25, 0.4],      //xyz location
                          [0, -90, 0]]}),         //orientation
            "&lt;div> That's all&lt;br/> folks&lt;br/>&lt;b>the end&lt;/b>&lt;/div>"
            ]
})    </code></pre>
</details> <!-- end of Lesson.make_button_column -->
<details id="Lesson.make_button_html_doc_id" class="doc_details"><summary>Lesson.make_button_html</summary>
   This method creates the HTML for a button step used by Lesson.make_button_column.
   Though you could do this by custom writing HTML, this method makes it
   a lot easier.<br/>
   <i>Parameters:</i><br/>
   <b>icon</b> Default: <code>"right_triangle"</code> An icon that appears inside the button
      on its left side indicating the kind of operation that will be performed
      when the user clicks the button.
      This can be any HTML "entity" reference like: <code>"&amp;lt;"</code>.
      A few icon values are handled specially:
      <ul>
          <li><code>"right_triangle"</code> Play a video clip.</li>
          <li><code>"info"</code> Show information to the user.</li>
          <li><code>"pencil"</code> Write or edit something.</li>
          <li><code>"bicycle"</code> Display a tour.</li>
      </ul>
    <b>label</b> Default: <code>""</code> A string of the button label. <br/>
    <b>tooltip</b> Default: <code>""</code> Text to display when the user hovers
         the mouse over the  button.<br/>
    <b>method</b> Default: <code>"DDEVideo.show_in_misc_pane"</code> The name of the method to call
        when the button is clicked.<br/>
    <b>args</b> Default: <code>[]</code> An array of arguments to pass to <i>method</i> when
       the button is clicked.<br/>
    <b>start</b> Default: <code>undefined</code> Used as the start time of
      the video when a video url is the first argument.<br/>
    <b>end</b> Default: <code>undefined</code> Used as the end time of
          the video when a video url is the first argument.<br/>
    <b>autoplay</b> Default: <code>true</code> If true, and the
    first arg is a video url, start playing the video when the button is clicked.
    the video when a video url is the first argument.
    <p></p>
    For examples, see the example for <a href="#" onclick="DocCode.open_doc('Lesson.make_button_column_doc_id')">Lesson.make_button_column</a>
</details>
<details id="Lesson.make_tour_doc_id" class="doc_details"><summary>Lesson.make_tour</summary>
   A Tour is a lesson wherein a user steps through fancy tooltips, while a portion of
   the screen is highlighted. Each tooltip has buttons to let the user go forward,
   back, or cancel the tour. <code>Lesson.make_tour</code> is an easy way to create such tours.
   It returns an instance of the class Tour.<br/>
   The underlying library for implementing tours is
   <a href="https://shepherdjs.dev/" target="_blank">Shepherd</a>.

   <p></p>
   <i>Parameters</i><br/>
    <b>name</b> Default: <code>"my_tour"</code> A string that identifies a tour. Only one tour
    can be bound to a given tour name.
    <br/>
    <b>steps</b> Default: <code>[[]]</code> An array of the "fancy tooltips" of the tour.
       Each step is represented by an array whose elements describe the steps.
       Elements of the array themselves default.
       Thus the default for steps, <code>[[]]</code>, consists of one
       step, all of whose elements default to the values provided in defaultStepOptions.
       See below for details. <br/>
    <b>useModalOverlay</b> Default: <code>true</code> If true, a gray, transparent
    "overlay is placed over the DDE window that prevents the user from clicking
    on any underlying components. A step can create a "hole" in that window
    to highlight the underlying area, and allow the user to interact with it,
    such as click on a button, or enter some text.<br/>
    A <code>false</code> value presents no
    overlay. All of the DDE window is visible as usual, and all areas may be clicked on.<br/>
    <b>defaultStepOptions</b> Default: <code>null</code>
    These options provide defaults for steps with missing properties.
    <p></p>
    <i style="font-size:20px;" >Step</i><br/>
     Each step is represented as an array.<br/>
     Its elements:<br/>
    <ol start="0">
    <li><b>text</b> Default: <code>"html goes here"</code> A string of HTML to display in the tooltip.</li>
    <li><b>selector</b> Default: <code>null</code> A string of a CSS selector used to highlight
    a particular area of the screen such as a button.
    If <code>null</code>, no area is highlighted.
    <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">
          A summary of selector types</a>.</li>
    <li><b>location</b> Default: <code>"right"</code> Where the tooltip appears w.r.t
    the selected element.<br/>
    Possible values:<br/>
        <ul>
            <li><code>"top"</code></li>
            <li><code>"top-start"</code></li>
            <li><code>"top-end"</code></li>
            <li><code>"bottom"</code></li>
            <li><code>"bottom-start"</code></li>
            <li><code>"bottom-end"</code></li>
            <li><code>"left"</code></li>
            <li><code>"left-start"</code></li>
            <li><code>"left-end"</code></li>
            <li><code>"right"</code></li>
            <li><code>"right-start"</code></li>
            <li><code>"right-end"</code></li>
        </ul>
    </li>
    <li><b>distance</b> Default: <code>0</code> The distance in pixels that the
        tooltip appears from the selected element.</li>
    <li><b>options</b> Default: <code>{}</code> The most useful properties for a step
    are above. For additional possibilities,
       <a href="https://shepherdjs.dev/docs/Step.html" target="_blank">options</a>.
    </li>
    </ol>
    <i>Example:</i><pre><code title="not in Testsuite">
Lesson.make_tour({name: "Author Lessons", steps: [
  [&#96;DDE can help you create
    &lt;i>lessons&lt;/i> using any
    &lt;h2 style="color:#00AA00;">HTML&lt;/h2>
    to make learning easier.&#96;],
  [&#96;By &lt;i>unmasking&lt;/i> an area of the screen,
    you can highlight it.&#96;,
   "#doc_pane_content_id"],
  [&#96;You can even operate the unmasked sections.
    Click the button to clear the Output pane.&#96;,
   "#clear_output_id",
   "top"]
  ]}).start()
  </code></pre>
  The above example defines a tour named "Author Lessons" and immediately starts it.
</details>
<details id="Lesson.start_tour" class="doc_details"><summary>Lesson.start_tour</summary>
   <i>Parameter:</i><br/>
    <b>name</b> A string. Name of the tour to start.
    You can define the tour one place, and start it later from somewhere else.<br/>
    <i>Example:</i><br/>
    <code title="not in Testsuite"> Lesson.start_tour("Author Lessons") </code>
</details>
<details class="doc_details"><summary>Job as a Lesson</summary>
  A Lesson is comprised of a sequence of steps for a student to perform.
  A Job is comprised of a sequence of steps (usually called "instructions") for
  a robot to perform. We can think of a Job as a "lesson" for a robot.
  <p></p>
  A Job's instruction can run many different kinds of instructions.
  One important class of instructions is called "Human" to direct a
  human "robot" to perform some action. Usually Human instructions are
  used to collect information from the robot operator, but they also
  can be used simply to deliver information to that operator.
  The <a href="#" onclick="DocCode.open_doc('Human.task_doc_id')">Human.task</a>
  instruction is intended for this.
  <p></p>
  Using a Job as a lesson is particularly effective when you want to
  intersperse robot movements, or other actions, between lesson steps.
</details> <!-- end of Job as a Lesson -->
<details class="doc_details"><summary>Other Outputs for Education</summary>
DDE is a general purpose software development environment and as such there's
an infinite range of extensions for education that can be authored in it.
Here we point out just a few that are especially easy and useful for teaching.
    <details class="doc_details"><summary>Insert into Editor pane</summary>
        Editor.insert can insert text into the editor.<br/>
        <i>Parameters:</i><br/>
        <b>text</b> Default: <code>""</code>. A string to insert.<br/>
        <b>insertion_pos</b> Default: <code>"replace_selection"</code>.<br/>
            Possible values:
            <ul>
                <li><i>a non-negative integer</i> Insert the text at that position in the editor buffer.
                       <code>0</code> inserts at the beginning. </li>
                <li><code>"start"</code> Insert the text at the start of the editor buffer.</li>
                <li><code>"end"</code>  Insert the text at the end of the editor buffer.</li>
                <li><code>"selection_start"</code>  Insert the text at the start of the selection.
                    If there is no selection, this inserts at the cursor position.</li>
                <li><code>"selection_end"</code>  Insert the text at the end of the selection.
                    If there is no selection, this inserts at the cursor position.</li>
                <li><code>"replace_selection"</code> (the default). Replace the selected text with the text.
                    If text is <code>""</code>, delete the selected text.
                    If there is no selection, insert text at the cursor.</li>
                <li><code>"whole"</code> Replace the all the text in the editor with the text.
                    If text is <code>""</code>, delete the content of the editor.</li>
            </ul><br/>
        <b>select_new_text</b> Default: <code>false</code> If <code>true</code>, the
           new text inserted will be selected.
        <p></p>
        <i>Examples:</i><br/>
        <code title="not in Testsuite">Editor.insert("hello world")</code><br/>
        Inserts the characters of "hello world" at the cursor position,
        replacing the selection if any.
        <p></p>
        <div style="color:red">Don't eval the below if you care about your editor pane content.</div>
        <code title="not in Testsuite">Editor.insert("everything", "whole")</code><br/>
        Replaces the whole editor content with the string "everything".

    </details>

    <details class="doc_details"><summary>Insert into Output pane</summary>
        Calling the <a href="#" onclick="DocCode.open_doc(out_doc_id)"><code>out</code></a> function lets you put HTML or plain text
        in any color, into the Output pane, either temporarily or until DDE is closed.
    </details>
    <details class="doc_details"><summary>Text to Speech</summary>
        Calling the <a href="#" onclick="DocCode.open_doc(speak_doc_id)"><code>speak</code></a>
        function performs text-to-speech
        with a bunch of settings for varying the voice.
    </details>
    <details class="doc_details"><summary>Pop up dialog box</summary>
        Calling the <a href="#" onclick="DocCode.open_doc(show_window_doc_id)"><code>show_window</code></a> function displays a dialog box
        of HTML with easy association of JavaScript actions to numerous input
        widgets. <a href="#" onclick="DocCode.open_doc('Human.show_window_doc_id')"><code>Human.show_window</code></a>
        is an instruction that displays
        a similar dialog box, but is used as an instruction in a Job.
        It causes the Job to pause while a human fills in values.
        Once the human clicks the <button>Continue</button> button,
        the next instruction is run in the job. It and all subsequent instructions
        can access the values filled in. <code>Human.show_window</code> is particularly useful for coordinating activites
        between humans and robots.
    </details>
</details>
</details> <!-- end of Lesson -->
<details id="PatchDDE_doc_id" class="doc_details"><summary>PatchDDE</summary>
   <code>PatchDDE</code> encompasses tools to help you keep DDE up-to-date.
   <details class="doc_details"><summary>Deprecate</summary>
         A function or variable that has been "deprecated" means that it
         is no longer the best way to do something. It might be that
         there is a new way to do it, or that the functionality has
         been dropped from the current release.
         <p></p>
         When you click on a name in the Editor pane, if the name
         has been deprecated you will be told.
         If there is a new name to use in its place, you will be told.
         If the name is defined by a compatibility file, you'll
         be told which one and how to load it.
         You may also be given a bit of documentation on how to
         work-around no longer supported names.
         <p></p>
         <i>Example:</i><br/>
         Click on the below code to see the deprecate click_help.<br/>
         <code title="not in TestSuite">dde_apps_dir </code>
   </details>
   <details class="doc_details"><summary>Backwards Compatibility</summary>
       If you have some old DDE code that no longer works in a modern DDE,
       there may be code that you can load to bring that old functionality
       into your current dde.
       <p></p>

       <b id="PatchDDE.load_dde_2_to_3_doc_id">PatchDDE.load_dde_2_to_3</b>
         Calling this function loads a JavaScript file that adds backwards
         compatibility for DDE version 2 into DDE version 3.
         It won't make *all* of your old code work, but many of the most
         common constructs will work. Many of the other constructs will be deprecated
         with a work_around documented in click-help.
         <p></p>
         <i>Example:</i><br/>
         <code title="not in TestSuite">PatchDDE.load_dde_2_to_3() </code><br/>
         Stick this code in your dde_init.js file if you're
         going to need it every time you launch DDE.
          <p></p>

         <b id="PatchDDE.dde_2_to_3_loaded_doc_id">PatchDDE.dde_2_to_3_loaded</b>
         A boolean variable that's <code>true</code> if the code for
         increasing the compatibility with version 2 has been loaded.<br/>
         <i>Example:</i><br/>
         <code>PatchDDE.dde_2_to_3_loaded </code>
         <p></p>

         <b id="PatchDDE.show_dde_2_to_3_doc_id">PatchDDE.show_dde_2_to_3</b>
         Calling this function prints the dde_2_to_3 code in the Output pane
         so you can see exactly what its doing.
         <p></p>
         <i>Example:</i><br/>
         <code>PatchDDE.show_dde_2_to_3() </code>
   </details>
   <details class="doc_details"><summary>Patch System</summary>
   DDE has a mechanism for users to get small updates
   to a DDE release automatically. This is intended for isolated
   bug fixes, not complex code or significant new features.
   This mechanism enables us to get fixes to users much faster
   than normal new releases, which take weeks.
   <p></p>
   When versions of DDE after 3.6.4 are launched, part of the
   start-up process is to ensure that there is a folder named
   "dde_patches" under your Documents folder, parallel to your
   "dde_apps" folder. If the folder isn't there, it will be created.
    DDE Launch will also ensure that a subfolder of dde_patches
    exists named "patches_for_(your dde version). For example:
    "Documents/dde_patches/patches_for_3.6.5/".
    Its fine for users to look inside these folders, but you're
    not expected to modify them. If you delete them,
    they will be recreated upon the next launch of DDE.
    <p></p>
     Patches are specific to a particular release. When you get a NEW release,
     it will, under most circumstances, have all the patches from the previous
     releases already in the new release. So even though a patch folder for
     a given release starts out empty, the release itself will contain
     the previous fixes, plus likely some new, larger amounts of code.

   <details id="PatchDDE.download_all_doc_id" class="doc_details"><summary>download_all</summary>
       This method downloads patch files from github into the folder
       Documents/dde_patches/patches_for_(your dde version number).
       Each patch file will have a small amount of code. The file's
       name will include the DDE version number that it is intended for
       and a patch number (a positive integer).
       For example, the first such patch file will be:
       "Documents/dde_patches/patches_for_3.6.5/patch_3.6.5_1.dde".<br/>
       <i>Example: </i><br/>
       <code title="not in Testsuite.">PatchDDE.download_all() </code><br/>
       Each patch file is downloaded just once (unless you delete it).
       Merely downloading a file does not affect the running of DDE.
       <p></p>
       We expect many user to have <code title="not in Testsuite.">PatchDDE.download_all() </code>
       in their dde_init.js file, so that they'll get the latest patches
       every time they launch DDE.
   </details>

   <details id="PatchDDE.load-doc_id" class="doc_details"><summary>load</summary>
      Load into the DDE JavaScript environment, the patch files for
      the release of DDE that you're running.
      <p></p>
      <i>Parameter:</i><br/>
      <b>patches</b> Default: <code>"all"</code>.
        If the value of patches is:
        <ul>
            <li><b>"all"</b> The default. Load all the patches in the local patches folder.
                   Does not download any patches.
                   Many users will want
                   <code title="not in Testsuite">PatchDDE.load()</code>
                   in their dde_init.js file.
                   BUT: if you're giving a big demo and you want to be
                   confident that you don't modify your DDE environment
                   in an unexpected way when launching DDE, we recommend NOT calling
                   load with "all" (or no) arguments.
            </li>
            <li><b>a positive integer</b> Load all the patches from 1 through
                this patch number, in order. To be confident that you won't
                get unexpected new behavior, this is a safe bet.
                But beware, you may not get the latest fixes.
            </li>
            <li><b>an array of positive integers</b>
                Load the patches with the numbers in the array.
                This enables you to load exactly as many patches as
                you want, skipping some and even loading them out of order.
                This is discouraged, unless you really know what you're doing.
                Higher patch-numbered-patches may well depend on
                lower patches, so skipping patches or loaded them out
                of order is risky. DDE gives you enough rope
                to hang yourself. It may be useful when there's a bug
                in a patch. (send us a bug report!)
                Like passing in a positive integer, you won't
                get new patches, but you won't get different
                behavior than your last launch of DDE either.
            </li>
        </ul>
        <i>Example:</i><br/>
       <code title="not in Testsuite">PatchDDE.load()</code><br/>
       Loads all the patches in this release's patch folder.
   </details>
   <details id="PatchDDE.patch_until_doc_id" class="doc_details"><summary>patch_until</summary>
       Function calls to <i>patch_until</i> are meant to surround
       code that is to be evaled conditionally based on what version of
       DDE you are running. You pass patch_until a DDE version number, code to
       eval in versions of DDE that are less than the version number, and
       code to run in versions of DDE equal to or more than the passed in version number.
       <p></p>
       This allows you to include the call to <i>patch_until</i> in your code,
       (such as your dde_init.js file) and it will automatically run the correct code
       for the version of DDE that you happen to be running. patch_until is
       not meant to be used for DDE system patches, but rather your own private patches.
       <p></p>
       The function is so named because the source code in the first argument
       is a valid patch for DDE versions up to (i.e. until) the
       version number in the 2nd argument.<br/>
       <i>Parameters:</i><br/>
       <b>before_source</b> Default: <code>null</code>
       If the current version of dde (stored in <code>dde_version</code>)
       is less than the 2nd argument, and
       before_source is a string, then before_source is passed to <code>eval</code>
       and the result is returned. In the case that before_source is <code>null</code>
       (the default), it is ignored.<br/>
       <b>version</b> The version that is compared to <code>dde_version</code>, i.e. the
       version of DDE tha you are running.<br/>
       <b>equal_and_after_source</b> Default: <code>null</code>.
       If the current version of dde
       is more than or equal to the 2nd argument, equal_and_after_source is passed to
       <code>eval</code>
       and the result is returned. In the case that equal_and_after_source is <code>null</code>
       (the default), it is ignored.<br/>
       <i>Example:</i><br/>
       <code>PatchDDE.patch_until("6 + 7", "1000.0.0", "8 + 9")</code><br/>
       => <samp>13</samp><br/>
       In the above example, until the dde_version exceeds "1000.0.0",
       the above code will return <code>13</code> i.e. the result of evaling
       the first arg.
       When dde_version is "1000.0.0" or higher, this call will return <code>17</code>,
       i.e. the result of evaling the third arg.
       <p></p>
       Since <i>patch_until</i> is just a function that returns a value,
       it can be embedded in other definitions, etc.
       <p></p>
       Note that <i>patch_until</i> was introduced in DDE 2.4.4, without the "PatchDDE" class,
       so calls to it will error in earlier versions of DDE unless you
       prefix them with "PatchDDE." or
       eval <code title="not in TestSuite">PatchDDE.load_dde_2_to_3()</code>
   </details>
   </details> <!-- end Patch System -->
   </details> <!-- End PatchDDE -->
   <details id="python_doc_id" class="doc_details"><summary>Python</summary>
       A language is a collection of tools that are designed to work synergistically
       with each other. When possible, its good to keep the code for a program in
       one language for this reason.
       <p></p>
       JavaScript was chosen for DDE because:
       <ul>
            <li>It has the largest repository of open source code for any programming language ever.</li>
            <li>Its the primary general purpose programming language on the Web.</li>
            <li>It has decent support for "eval" (which Python doesn't), necessary for
                the kind of interactive IDE that DDE is. </li>
       </ul>
       JavaScript, like all programming languages,
       especially those popular now, is far from perfect. DDE helps programmers
       work around those imperfections.
       <p></p>
       None-the-less, sometimes its worth it to put up with the difficulties of
       "foreign function calls" to get the functionality in other languages.
       This can happen because a given functionality isn't available in the primary
       language of the app, and its too big to write. Or it may be that the programmer
       is more familiar with a library in another language. There are "cultural"
       reasons as well, or simply matters of personal taste.
       <p></p>
       DDE is a JavaScript-based development environment. When you have code in DDE,
       it is expected to be JavaScript. But to accomodate useful functionality
       in Python, DDE has several ways that DDE programs can take advantage of
       existing Python code, or even write new bits of "glue code" between
       existing Python and DDE/JavaScript.
       <ul><li>The Python code is in a file with a ".py" extension.</li>
           <li>The code is wrapped in a call to DDE's (JavaScript) function:
                <code>Py.eval</code></li>
           <li>The code is in DDE's command line, and you've selected "Python"
               in the command line's language menu (to the left of the type-in area).
           </li>
       </ul>
       Only Python 3 is supported.
       <p/>
       Behind the scenes, DDE can create a process to run Python.
       Python code will be evaluated in that process until you kill, it, init a fresh one,
       or relaunch DDE. Thus you can set global variables or def's in it, import files into
       it and expect those modifications to be there when you attempt to get values or call
       functions.
       <p></p> At this time we're not expecting DDE to become an IDE for Python.
       However, we are expecting that you can load known-good Python libraries
       into DDE, call them with simple arguments from DDE, and get back results
       (in the simple data structures that can be encoded in JSON format).
       This doesn't provide all kinds of Python structures, but does provide a lot of them.
       If your Python code returns simple data or you can write some Python
       wrappers than coerce more complicated data into simpler data structures,
       DDE can be a bridge to taking advantage of Python libraries.
       <p></p>
       <a href="#" onclick='DocCode.open_doc(js_for_python_programmers_doc_id)'>Similarities</a>
       between JavaScript and Python.

       <details class="doc_details"><summary>Installing Python</summary>
          To use Python from DDE, the Python 3 interpreter must be installed on your computer.<br/>
          <details class="doc_details"><summary>MacOS</summary>
          MacOS has, for years, included Python 2.7.<br/>
          In the terminal, type: <code title="unEvalable">python</code><br/>
          More modern versions of MacOS include Python 3.<br/>
          In the terminal, type:  <code title="unEvalable">python3</code>
          to get a read_eval_print loop for Python.
          <p></p>
          For a more recent version, browse
              <a href="#" onclick="browse_page('https://www.python.org/downloads/')"/>Python.org</a>
              for download instructions.
          </details>
          <details class="doc_details"><summary>WinOS</summary>
            <b>Windows7</b><br/> We've had a hard time installing Python3 on Windows 7
              from the download direction in
              <a href="#" onclick="browse_page('https://www.python.org/downloads/')"/>Python.org</a> .
              There is a "missing file". The web documents some work arounds,
              but they aren't easy. We recommend using Windows 10.
            <p/>
            <b>Windows 10</b>
            <ol>
            <li>In the lower right search type in, type in "cmd' and hit the ENTER key.</li>
            <li>In the terminal window that comes up, type in "python" and hit the ENTER key.</li>
            <li>If Python is installed on your computer, you should see a >>> prompt
                 after it prints out the Python version number.
                 If its a recent version 3 python, you're all set.
                 <p></p>
                  If there's NO Python installed, you get a new browser window in the Microsoft store.
                  On Feb 6, 2021, that window says Python 3.91.</li>
            <li>Its free. Click the GET button.</li>
            <li>You'll be asked to log in, but you can click "no thanks" and still get it.</li>
            <li> The size of the download is hard to determine from the confusing "progress bar"
               but looks like about 30Mbytes.</li>
            <li> After its installed, again type in "python" into your terminal window
                and you should see the python prompt >>> proceeded by a version number of Python.</li>
            <li>This install puts two items on your start menu: Python and IDLE(python).<br/>
                 Choosing <b>Python</b> launches the terminal window in Python.<br/>
                 Choosing <b>IDLE(python)</b> launches a small development environment for Python.
            </li>
            </ol>
          </details>
          <details class="doc_details"><summary>Linux, etc</summary>
            To install Python on other Operating Systems browse
            <a href="#" onclick="browse_page('https://www.python.org/downloads/')"/>Python.org</a>
            for download instructions.
          </details>
       </details>

       <details id="python_user_interface_doc_id" class="doc_details"><summary>DDE's Python User Interface</summary>
           <ul>
           <li>When you are editing a file who's name ends in ".py",
           clicking <button>Eval</button> will evaluate the selection (or whole editor text if
           no selection) as Python code.<br/>
            The result will appear in the Output pane.
           <p/>
           </li>
           <li>
           When you select <select><option>Python</option></select> from the command line menu,
           and hit ENTER in the command line, the command line text will be evaluated as Python code.<br/>
           The result will appear in the Output pane.
           <p/>
           </li>
           <li>
           The File menu/Load ... item let's you choose a file.
           If you choose one with a ".py" extension,
           you will be prompted to enter an "as name".
           If you then click <button>OK</button>,
           that is the equivalent of the python code:<br/>
           <code title="unEVALable">import /the/file.py as somename</code><br/>
           You'll see confirmation in the Output pane.
           </li>
           </ul>
       </details>
       <details id="Py.python_executable_path_doc_id" class="doc_details"><summary>Py.python_executable_path</summary>
        This variable contains a string that is the path to the Python3 interpreter on your computer.
        For MacOS, it defaults to <code>"python3"</code>. For
        other OSes,  it defaults to <code>"python"</code>.
        If this is incorrect, you can set this variable before <code>Py.init</code> is called,
        (or <code>Py.eval</code> is called the first time).
        <p/>
        If you can type in to a terminal some string like <code title="unEVALable">python3</code>,
        or perhaps <code title="unEVALable">python</code> and it puts you in a Python3 read_eval_print loop,
        then that string will very likely work for the value of this variable.
        <p/>
        <i>Examples:</i><br/>
        <code>Py.python_executable_path</code><br/>
        <code title="not in TestSuite.">Py.python_executable_path = "python3"</code><br/>
       </details>
       <details id="Py.eval_doc_id" class="doc_details"><summary>Py.eval</summary>
       The <code>Py</code> class holds utilities for evaluating Python code embedded in JavaScript code.
       The most important function is <code>Py.eval</code>.<br/>
       <i>Parameters:</i><br/>
       <b>python_source_code</b> Required. A string of Python source code to be
         evaluated in the Python process.<br/>
       <b>callback</b> A function. Default: <code>Py.default_callback</code>
       The callback is called when Python is done evaluating the source code.
       It is called with one argument, a JSON object with fields:
           json_obj = {"from": "Py.eval", "is_error": is_error, "source": src, "callback_id": callback_id, "result": result}

           <ul>
           <li><b>from</b> Always "Py.eval". Allows you to distinguish this JSON object from others.</li>
           <li><b>is_error</b> Boolean. If evaling the python_source_code errors, or if
             converting its result to JSON errors, this will be <code>true</code>.
             Results of numpy arrays will be automatically converted to Python lists before
             JSONizing, so they won't error.
           </li>
           <li><b>source</b> The string of python_source_code that Py.eval was called with.</li>
           <li><b>callback_id</b> (internal) The id of the callback that Py.eval was called with.</li>
           <li><b>result</b> The result of the evaluation of the python_source_code.
               This will be JSON, ie <code>null</code>, a boolean, a number, a string, an array or
               nested object of those types.
               If evaluating python_source_code returns a value, it will be of that type.
               Otherwise, if the python_source_code returns Python's None, it will be
               <code>null</code>.
               Python's None is more similar to JS <code>undefined</code> than it is to
               <code>null</code>, but JSON can't represent <code>undefined</code>.
           </li>
       </ul>
       If you launch DDE and call <code>Py.eval</code>, a new Python process will be created
       for evaluating the Python code. That process will remain to run more Python code until
       you kill it, init a new Python process, or quit DDE.
       <p/>
       <i>Examples:</i><p/>
       Get the length of a list:<br/>
       <code>Py.eval("len([4, 5])") </code>
       <p></p>
       Set the variable "foo".<br/>
       <code>Py.eval('foo = "hi from Py"') </code><br/>
       Get the value of the varible foo:<br/>
       <code>Py.eval('foo') </code>
       <p></p>
       See the installed modules<br/>
       Note: The "sys" module is automatically installed in
             DDE's Python interface process.<br/>
       <code>Py.eval("list(sys.modules.keys())")</code>
       <p></p>
       See the folders where Python looks for modules to import.<br/>
       <code>Py.eval("sys.path")</code><br/>
       Add to that array:<br/>
       <code title="not  in TestSuite">Py.eval("sys.path.append('/Users/foo/Documents')")</code>
       <p></p>
       Import the "math" module.<br/>
       <code>Py.eval('import math') </code>
       <p></p>
       Get the value of a constant in the Math package.<br/>
       <code>Py.eval('math.pi') </code>
       <p></p>
       Add two numbers and use the result in the callback to Py.eval.
       <pre><code>Py.eval("2 + 3",
        function(json_obj){
          out(json_obj.source + " => " + json_obj.result)
       })    </code></pre>
       Redefine foo to 12<br/>
       <code>Py.eval('foo = 12')</code><br/>
       Get the new value.<br/>
       <code>Py.eval('foo')</code>
       <p></p>
       Define a function that accesses the global variable "foo" and sets it.
       <pre><code>Py.eval(&#96;def a_fn():
  global foo
  foo = foo + 1
  return foo&#96;)    </code></pre>
      Call our newly defined function. Each time we call it, foo is incremented<br/>
      <code>Py.eval('a_fn()')</code>
      <p></p>
      Define a Job that imports "math" and sets the user_data variable of "j2" to
      the result of math.pi * 10 then uses it to move Joint 2.
      <pre><code>
new Job({
  name: "my_job",
  user_data: {j2: null},
  do_list: [
    function(){ Py.eval("import math") },
    Control.wait_until(1),
    function(){
      let the_job = this
      Py.eval("math.pi * 10",
               function(json_obj){
                 the_job.user_data.j2 = json_obj.result
               })
    },
    Control.wait_until(function() {
                         out("this.user_data.j2: " + this.user_data.j2)
                         return this.user_data.j2 }),
    function() {
      return Dexter.move_all_joints(0, this.user_data.j2)
    }
  ]
})    </code></pre>
      Like the other examples, the last example isn't so practical, but understanding it will help you
      integrate Python dynamically into a running job. The details:
      <ol>
          <li> First we initialize <code title="unEVALable">user_data.j2</code> to <code>null</code>. It's going to hold the joint angle that Python computes.
          </li>
          <li> We <code title="unEVALable">import math</code> to set up our Python environment.
               Replace math with packages of your choice.
          </li>
          <li> <code>Control.wait_until(1)</code> pauses the Job for 1 second,
              giving Python a chance to initialize and load the math package.
              This 1 second is longer than the rest of the job put together.
              It could be cut down, or even moved before the Job if you like.
              The import doesn't need to be executed after the first time the Job is run.
          </li>
          <li> The next function does the real work, evaluating <code title="unEVALable">math.pi * 10</code> in Python.
               We COULD have done this particular computation before, and outside of, the Job,
               but we want to show that this can be done while running the Job. You might want
               to pass in arguments that are computed while the Job is running, for instance.
               <p></p>
               The callback function is a closure around <code title="unEVALable">the_job</code>.
               Since JS won't close over
               <code>this</code> properly, we must create a local variable via
               <code>let the_job = this</code>
               before defining the inner function.
               <p></p>
               That inner function is the 2nd argument to
               <code>Py.eval</code> i.e. our callback. Once Python has completed the multiply,
               this callback will be called with a json_object containing the result.
               The callback sets <code title="unEVALable">Job.my_job.user_data.j2</code>
               to the result from Python.
          </li>
          <li> <code>Control.wait_until</code> calls the function in its first argument
               until it returns a truthy value.
               When our callback changes the value of <code title="unEVALable">user_data.j2</code>
               from <code>null</code> to <code>31.4</code>, <code>Control.wait_until</code> is
               done waiting and we move on to the next instruction.
               <p></p>
               In this wait_until function, we print out the value of <code title="unEVALable">user_data.j2</code>
               just so you can see that the code is still working, and exactly when
               it has a good value. During this time, the Job button will be yellow.
               <p></p>
               For such a trivial computation, there might be no <code>null</code> print outs,
               and you might not even need a <code>Control.wait_until</code>.
               But if you tell Python to perform a long computation, <code>Control.wait_until</code>
               pauses the Job until we have the results back from Python.
          </li>
          <li> Our final Job instruction retrieves the value from user_data and uses it
               as the angle to move joint 2 to.
               We must wrap our call to <code>Dexter.move_all_joints</code> in a function,
               because its crucial argument, <code title="unEVALable">this.user_data.j2</code>
               must be evaled when this instruction is run, not at Job definition time.
          </li>
      </ol>
      For a simpler way to call Python from within a Job, see
      <a href="#" onclick="DocCode.open_doc('Brain.eval_python_doc_id')">Brain.eval_python</a>
       </details>

       <details  class="doc_details"><summary>dde_apps_folder for Python</summary>
         In DDE JavaScript, <code>dde_apps_folder</code> is a global variable bound
         to the full path of the dde_apps folder. It's exact value will be different
         for each computer, but will be something like
         <code>"/Users/Fry/Documents/dde_apps"</code>
         <p></p>
         This is so convenient that we've made this global variable available in
         DDE's Python process as well.
         Here's a case where you might use it. We're storing a filename to
         write to in a global variable, then using it in a function
         that writes <code>"Test47"</code> into a file in your dde_apps folder.<br/>
         <i>Example:</i>
         <pre><code>Py.eval(&#96;filename = dde_apps_folder + "/filename.txt"
def main():
  with open(filename, 'w') as f:
    f.write("Test47")&#96;)   </code></pre>
         <code>Py.eval("main()")</code> //creates the file and sets its content to "Test47"<br/>
         This is one strategy for getting a large string from Python into DDE JavaScript
         via:<br/>
         <code>read_file(dde_apps_folder + "/filename.txt")</code> .
         This call should return the content of the file, i.e. <code>"Test47"</code><br/>
         Note that our designation for the file is <i>the same</i> for both Python and JavaScript.
       </details>

       <details id="Py.load_file_doc_id" class="doc_details"><summary>Py.load_file</summary>
       Imports a file into DDE's Python process.<br/>
       <i>Parameters:</i><br/>
       <b>path</b> Required. A string of the file to load. If it doesn't start with slash,
                  it will have <code>dde_apps_folder</code> prepended to it.
                  If it starts with <code>"../"</code>, it will have the parent folder of <code>dde_apps_folder</code>
                  prepended to it.<br/>
        <b>as_name</b> Default: <code>null</code>. indicating that the
                 file name (sans folder, sans extension) will be used as the as_name,
                 just like <code title="unEVALable">import foo</code> means the same thing as
                 <code title="unEVALable">import foo as foo</code><br/>
        <b>callback</b> Same as "callback" for <a href="#" onclick="DocCode.open_doc('Py.eval_doc_id')">Py.eval_doc_id</a>
        <p/>
        <i>Example:</i><br/>
         <code title="unEVALable">Py.load_file("hello.py")</code> which means the same as <br/>
         <code  title="unEVALable">Py.load_file("/Users/Fry/Documents/dde_apps/hello.py")</code> (or whatever
              folder <code>dde_apps_folder</code> evals to.)<br/>
         <code title="unEVALable">Py.load_file("hello.py", "howdy")</code> (uses "howdy" as the "as name".)<br/>
         <code title="unEVALable">load_files("hello.py")</code> (loads the Python file "hello.py" in
         the dde_apps_folder using the default "hello" as the "as_name")<br/>
         <code title="unEVALable">load_files("hello.pyc")</code>(loads the Python file "hello.pyc")<br/>
         For all of the loads above, if the folder of the file being loaded is not on
         Python's sys.path, then it is added before the file is imported.
         <p></p>
         See <a href="#" onclick='DocCode.open_doc(load_files_doc_id)'>load_files</a> for loading
         JavaScript files</a>
       </details>
       <details id="Py.kill_doc_id" class="doc_details"><summary>Py.kill</summary>
           Ends the Python process. The Python process shouldn't take up much resources
           when idle. One reason to kill it is to get rid of the state currently
           in the Python process so the next time <code>Py.eval</code> is called,
           it will start afresh.<br/>
           <i>Example:</i><br/>
           <code>Py.kill()</code>
       </details>
       <details id="Py.init_doc_id" class="doc_details"><summary>Py.init</summary>
           This function
           <ul>
               <li>Kills the running Python process if any</li>
               <li>Creates a new Python process</li>
               <li>Puts <code>dde_apps_folder</code> on Python's
                    sys.path list
               <li>Makes the new Python process ready to accept eval commands from DDE.</li>
           </ul>
           It is called automatically the first time you call <code>Py.eval</code>
           after launching DDE or killing the Python process,
           so there isn't much need to call this function explicitly.
           After calling this function, your first call to <code>Py.eval</code> will
           be a fraction of a second faster.<br/>
           <i>Example:</i><br/>
           <code>Py.init()</code>
       </details>
       <details  class="doc_details"><summary>Troubleshooting</summary>
           Python, like all modern popular programming languages, has
           confusing aspects. This section helps you get through *some* of them
           that we've found useful.
           <p></p>
           The Python interface automatically imports
           <ul><li>json</li><li>sys</li> <li>traceback</li></ul>
           so you won't have to import those when using DDE's python interface.
           <p></p>
           To see what folders you can import files from:
           <code>Py.eval("sys.path")</code><br/>
           To extend sys.path to include another folder<br/>
           <code title="not in TestSuite">Py.eval('sys.path.append("/my/other/folder")'</code><br/>
           Note that <code title="not in TestSuite">load_files("/my/other/folder/hi.py")</code>
           automatically adds "/my/other/folder" to sys.path, then
           runs import("hi.py")
           <p></p>
           Python has numerous packages on the web that you can download and install on
           your computer for use in your Python packages.
           The easist ones to use can be found at
           <a target="_blank" href="https://pypi.org/">Python Package Index. (PyPI)</a>
           From a command line terminal, you can install a PyPI package via, for example:<br/>
           <code title="unEVALable">sudo pip3 install numpy</code><br/>
           Notes:
           <ul>
           <li><b>pip</b> stands for Package Installer for Python. You will need
           to use pip3 or a very recent version of pip for installing packages into Python3.
           You can install this installer from
           <a target="_blank" href="https://pypi.org/project/pip/">pip installation</a></li>
           <li><b>Numpy</b> is an often-used Python library for advanced math.
           Its not included in Python distributions so you have to download it using pip</li>

           <li>numpy install is complex, requing compiling on your computer.
           If you're lucky, pip will handle this compiling and installing automatically.</li>

           <li>pip attempts to install Python packages globally. You may run into
           "permissions" problems doing this, which explains the need for the
           <code code title="unEVALable">sudo</code> prefix in the above example.</li>
           </ul>
       </details>

       </details> <!-- end Py -->
       <details id="adding_javascript_doc_id" class="doc_details"><summary>Adding JavaScript</summary>
       Most applications don't allow you to change them at all.
       Some applications allow you to change "preferences" or "configurations",
       a few narrowly focused settings.
       <p></p>
       DDE, being both a development environment and an application runner is different.
       Here's ways you can add JavaScript to DDE.
       <ol>
       <li>The simplest is just perform some operation once.<br/>
            Example: In DDE's command line, type in <code>2 + 3</code> and hit the Enter key.
            It adds the two numbers, prints out 5 in the output pane and that's it.
            This doesn't extended DDE in any meaningful way, through you can hit the
            enter key a 2nd time and get it to compute 5 again.
       </li>
       <li> Next we can enter our <code>2 + 3</code> into the file dde_apps/dde_init.js
           Now every time we launch DDE, it will perform the computation.
           But we won't even be able to see the result unless we do<br/>
           <code>out(2 + 3)</code> which will print 5 in the output pane.
           That's more of a modification but it doesn't make this computation available
           to other software within DDE.
       </li>
       <li> We could wrap our computation in a function, say:<br/>
           <code>function add(a=2, b=3){ out(a + b) }</code>
           and stick that in Documents/dde_init.js.
           Now when we boot up, "add" will be defined for the duration of each DDE session.
           We can enter into DDE's command line <code>add()</code> and we'll
           see 5 in the output pane.
       </li>
       <li> Modifying dde_init.js isn't somewhere we want to put a lot of code.
           Its mostly for "configuration" tasks. So we can enter our
           <code>function add(a=2, b=3){ out(a + b) }</code> into the editor buffer.
           We can select that code, and click the <button>Eval</button> button
           and we'll define our function.
           Now we call it a la <code>add()</code> from the command line or
           as code in the editor using the <button>Eval</button> button.
           Note that if there is no selection, clicking <button>Eval</button> evaluates
           all code in the editor buffer.
       </li>
       <li> If we SAVE our file, say in dde_apps/math.js, we can get it back
            in subsequent sessions of DDE. If its in the editor buffer when
            we quit DDE, it will be there the next time we launch DDE.
            If not, we can use the File menu/Open... item to edit it.
       </li>
       <li> We can extend the code in our file with<br/>
            <code>function subtract(a=2, b=3){ out(a - b) }</code> and
            any other functions definitions, global variable settings
            and one-shot operations we like.
            After saving this file,
            We can evaluate all the code in that file via
            the <button>Eval</button>.
            But even without the code in the editor, we can evaluate all the code
            using the File menu's "Load..." item.
       </li>
       <li> We can <i>programmatically</i> load our file by evaling
           <code title="not in Testsuite">load_files("math.js")</code>. (load_files, like most other
             file manipulating functions in DDE, uses dde_apps as its default folder.)
             As the name implies,
             <a href="#" onclick="DocCode.open_doc(load_files_doc_id)">load_files</a>
             can load multiple files in one call.
       </li>
       <li>You can get JavaScript files from other people (say via email) or
           downloaded from web sites, stick them in a convenient location,
           say documents/dde_apps/ and then use them as above.
       </li>
       <li>Programs of multiple files are often put in a ".zip" file so you can
           grab them as one file, then "unzip" them on your computer
           and load its "main" file (often called "index.js") which
           may have calls to load in the other files.
       </li>
       <li>Node Package Manager (NPM) for loading open source JavaScript.
           See below.</li>
       </ol>
       <details id="DDE_NPM_doc_id" class="doc_details"><summary>DDE_NPM</summary>
           One reason DDE uses JavaScript is that it has the most freely available,
           open-source code of any language. The bulk of this is stored on
           <a href="https://www.npmjs.com/" target="_blank">the npm web site</a>
           in a format that is convenient to download and
           load into your JavaScript programs. NPM stands for Node Package Manager.
           <p></p>
           The NPM website has over 1.3M programs as of Apr 2020.
           Use the search bar on the site, or just Google to find
           packages you're interested in.
           <p></p>
           If a package has been on NPM for at least a couple months, and
           has a 1000 or more downloads, you can be fairly confident that
           it doesn't contain malicious code. Its also fairly likely to
           not have show-stopper bugs, at least for its main functionality.
           You can also be fairly confident that the documentation
           is lousy. If its a popular program, use Google to search for
           examples or bug reports/fixes, often found on
           <a href="https://stackoverflow.com/" target="_blank">Stack Overflow</a>.
           <p></p>
           <code>DDE_NPM</code> is a class of methods for managing NPM files for use with DDE.
        <details><summary>Installing Node</summary>
        To use npm, you must have "node" installed on your computer.
        Choose File Menu/Manage npm. It will tell you if you don't have node installed
        and how to install it. Or, by hand ...<br/>
        To verify that node/npm is installed:
        <ol>
        <li>open a terminal window</li>
        <li>go to Documents/dde_apps</li>
        <li> type in: npm list
             and hit return.</li>
        </ol>
        If you see something like a "not found" error message, node is not installed.
        To install it, browse: <a href="#" onclick="browse_page('https://nodejs.org/')">nodejs.org</a>,
        click on the Download LTS (long term supported) button and follow the defaults.
        </details>

       <details  id="DDE_NPM.list_doc_id" class="doc_details"><summary>List NPM Packages</summary>
           You can find out the top level NPM packages installed for use by DDE
           via choosing File menu/Manage npm and choosing one of the "list" buttons.
           <p/>
           <b>DDE_NPM.list</b> is a method that will list NPM packages.<br/>
           <i>Parameters:</i><br/>
           <b>which</b> Default: <code>"all"</code> lists top level packages available in this
             installation of DDE.<br/>
               <code>"built_in"</code> Lists the packages built in to this version of DDE.<br/>
               <code>"all_on"</code> Lists the packages you have added to your computer
               for use by DDE.<br/>
           <b>success_callback</b> A method of one argument, an array of strings, each of which
             starts with a package name followed by "@", then its semantic version number.
             The default value inspects the array.</b>
           <b>error_callback</b> A method of one argument, the error. This method is called
              if the call to DDE_NPM.list fails.
           <p></p>
           <i>Examples:</i><br/>
               <code>DDE_NPM.list("all")</code><br/>
               <code>DDE_NPM.list("built_in")</code><br/>
               <code>DDE_NPM.list("all_on")</code><br/>
       </details>

      <details  id="DDE_NPM.is_installed_doc_id" class="doc_details"><summary>is_installed</summary>
          Returns <code>true</code> if the package is installed, <code>false</code> otherwise.<br/>
          <i>Parameters:</i><br/>
          <b>pkg_name</b> Required. The string name of package you are testing.<br/>
          <b>which</b> Indicates which kind of package you are testing. Default: <code>"all"</code><br/>
          Other possibilities:<br/>
          <code>"add_on"</code> Only return true if the package was installed by you.<br/>
          <code>"built_in"</code> Only return true if the package is built in to this release of DDE.
          <p></p>
          <i>Examples:</i><br/>
          <code>DDE_NPM.is_installed("mathjs")</code> => <samp>true</samp><br/>
          <code>DDE_NPM.is_installed("mathjs", "add_on")</code> => <samp>false</samp><br/>
          <code>DDE_NPM.is_installed("mathjs", "built_in")</code> => <samp>true</samp><br/>
          <code>DDE_NPM.is_installed("some_non_package", "all")</code> => <samp>false</samp><br/>
      </details>

      <details  id="DDE_NPM.install_doc_id" class="doc_details"><summary>Installing NPM Packages</summary>
           <b style="color:#ff9300;">Caution: </b> DDE already has about 500 packages installed, many of which are common.
           Before installing a package, eval:<br>
            <code title="unEVALable">require("the package name")</code><br/>
           If it doesn't error, its already installed.
           <p></p>
           You can install NPM packages by choosing File menu/Manage npm and
           choosing <input type="button" value="Install"/>
           <p></p>
           <b>DDE_NPM.install</b> is a method that will install an npm package for use by DDE.<br/>
           <i>Parameter:</i><br/>
           <b>pkg_name</b> Required. The string name of the package to install.
           <p></p>
           <i>Example:</i><br/>
           <code>DDE_NPM.install("existy")</code>
       </details>

       <details  id="DDE_NPM.folder_doc_id" class="doc_details"><summary>DDE_NPM.folder</summary>
           NPM packages that you install will be installed under the value of this variable.
           It is under your dde_apps_folder, named "npm_packages".
           <p></p>
           <i>Example:</i><br/>
           <code>DDE_NPM.folder</code>
       </details>

       <details  id="DDE_NPM.uninstall_doc_id" class="doc_details"><summary>Uninstalling NPM Packages</summary>
           You can uninstall NPM packages by choosing File menu/Manage npm and
           choosing <input type="button" value="Uninstall"/>
           <p></p>
           <b>DDE_NPM.uninstall</b> is a method that will uninstall an npm package that you have installed
              for use by DDE.<br/>
           <i>Parameter:</i><br/>
           <b>pkg_name</b> Required. The string name of the package to uninstall.
           <p></p>
           <i>Example:</i><br/>
           <code>DDE_NPM.uninstall("existy")</code>
       </details>

       <details  id="using_npm_packages_doc_id"
                class="doc_details"><summary>Using NPM Packages</summary>
         In your code, you must "require" that package to make use of it.
         The File menu/Manage NPM item pops up a dialog box.
         Enter the name of the package you want to require and choose <input type="button" value="Insert require()"/>
         This will insert the code in the editor buffer to require the package.
         <p></p>
         <i>Examples:</i><br/>
         <code title="unEVALable">var foo = require(DDE_NPM.folder + "foo")</code><br/>
         <code title="unEVALable">var {bar, baz} = require(NPM_DDE.folder + "foo")</code><br/>
         Hopefully the doc for the package at its NPM web page will show you
         which require format to use and how to call functions in the package,
         but be forewarned: Open Source documentation is notoriously poorly documented.
       </details>
       </details> <!-- end DDE_NPM -->
       </details> <!-- ending Adding JavaScript -->

</details>` //end ref man