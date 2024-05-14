export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <tr><b><label htmlFor="wd-name">Assignment Name</label></b></tr>
        <br></br>
        <tr><input id="wd-name" value="A1 - ENV + HTML" /></tr>
        <br></br>
        <textarea id="wd-description" rows={10} cols={50}>
        The assignment is available online Submit a
link to the landing page of your Web
application running on Netlify. The landing
page should include the following: Your full
name and section Links to each of the lab
assignments Link to the Kanbas application
Links to all relevant source code repositories
The Kanbas application should include a link
to navigate back to the landing page.
        </textarea>
        <br></br>
        <table>
            <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          
          <td>
            <input id="wd-points" value={100} />
</td> </tr>
<br></br>
<tr>
          <td align="right" valign="top">
            <label htmlFor="wd-grp">Assignment Group</label>
          </td>
          <td>
          <select name="Assignment" id="Assignment">
    <option value="Assignment">Assignment</option>
  </select>
</td> </tr>
<br></br>
<tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
          <select name="Display-grade" id="Display-grade">
    <option value="Percentage">Percentage</option>
  </select>
</td> </tr>
<br></br>
<tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
          <select name="submission-type" id="submission-type">
    <option value="Online">Online</option>
  </select>
</td> </tr>
<br></br>
<tr>
    <td></td>
    <td><b>Online Entry Options</b></td>
    </tr>
<tr>
    <td></td>
          <td align="left" valign="top">
            <input type="checkbox"></input>
            <label htmlFor="wd-text-entry">Text Entry</label>
          </td>
          </tr>

<tr>
<td></td>
          <td align="left" valign="top">
          <input type="checkbox"></input>
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
           </tr>

<tr>
<td></td>
          <td align="left" valign="top">
          <input type="checkbox"></input>
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
          </tr>

<tr>
<td></td>
          <td align="left" valign="top">
          <input type="checkbox"></input>
            <label htmlFor="wd-student-annotation">Student Annotations</label>
          </td>
          </tr>

<tr>
<td></td>
          <td align="left" valign="top">
          <input type="checkbox"></input>
            <label htmlFor="wd-file-ipload">File Upload</label>
          </td>
         </tr>
<br/>


<tr><td align="right">Assign</td><label htmlFor="wd-assign-to">Assign to:</label></tr>

<tr><td></td><input type="text" id="everyone" name="everyone" placeholder="Everyone"/></tr>


<tr><td></td><label htmlFor="wd-assign-to">Due:</label></tr>

<tr><td></td><input type="date" id="wd-points" value="2024-05-13" /></tr>



<tr><td></td><td><label htmlFor="wd-assign-to">Available From:</label></td>
<td><label htmlFor="wd-assign-to">Available Until:</label></td>
</tr>

<tr><td></td><td><input type="date" id="wd-points" value="2024-05-13" /></td>
<td><input type="date" id="wd-points" value="2024-05-13" /></td></tr>
<tr>
    <td><hr></hr></td>
    <td><hr></hr></td>
    <td><hr></hr></td>
    
</tr>



<tr>
        <td></td>
        <td></td>
        <td><input type="button" id="wd-points" value="CANCEL" />
        <input type="button" id="wd-points" value="SAVE" /></td>

</tr>

      </table>
</div>
);}