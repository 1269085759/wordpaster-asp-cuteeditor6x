<%@ CODEPAGE=65001 %> 

<% Response.Charset="UTF-8" %> 
<!-- #include file = "include_Security.asp" -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
		<meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
		<link href="../Themes/<%=Theme%>/dialog.css" type="text/css" rel="stylesheet" />
		<!--[if IE]>
			<link href="../Style/IE.css" type="text/css" rel="stylesheet" />
		<![endif]-->
		<style type="text/css">
	    #upload_image {VISIBILITY: inherit; Z-INDEX: 2;width:350px;height:55px;margin:10px 0 0 10px}
	    #browse_Frame{border:1px solid #a0a0a0;width:520px;height:300px}
	    #divouter{border:1px solid #a0a0a0; vertical-align: top; overflow: auto; width:200px;height:300px; background-color: white; text-align: center}
	    #divpreview{background-color: white; height: 100%; width: 100%;text-align:left;padding:10px}
		html, body,#ajaxdiv,#Form1 {height: 100%;}
	    #inp_color_preview{margin-bottom:-3px;}
		</style>
		<script type="text/javascript" src="../Scripts/Dialog/DialogHead.js"></script>
	    <title><%= GetString("Browse") %> </title>
	    <%
		    Response.Expires = -1
    				
		    Dim Current_FilesGalleryPath
		    Current_FilesGalleryPath=FilesGalleryPath
		    if Request.QueryString("MP") <> "" then
			    Current_FilesGalleryPath = Request.QueryString("MP")
		    End if
		 %>
	</head>
	<body>
		<div id="ajaxdiv">
		    <% 
                dim fs1,fullfolderpath
                fullfolderpath=Server.MapPath(Current_FilesGalleryPath)
                set fs1=Server.CreateObject("Scripting.FileSystemObject")
                if fs1.FolderExists(fullfolderpath)<>true then
                    Response.write("<div style='margin:5px'>Folder "&Current_FilesGalleryPath&" does not exist! Please use FilesGalleryPath property to specify the document gallery path!</div>")
                    Response.End
                end if
                set fs1=nothing
            %>	
			<table border="0" cellspacing="2" cellpadding="0" width="100%">
	            <tr>
		            <td style="width:520px;">
		            </td>
		            <td>
<img src="../Images/newfolder.gif" id="btn_CreateDir" onclick="CreateDir_click();" title="<%= GetString("Createdirectory") %>" <% if CBool(AllowCreateFolder) then %> class="cursor dialogButton" <% else %> class="CuteEditorButtonDisabled" <% end if%> onmouseover="CuteEditor_ColorPicker_ButtonOver(this);" /> 
<img src="../Images/zoom_in.gif" id="btn_zoom_in" onclick="Zoom_In();" title="<%= GetString("ZoomIn") %>" class="cursor dialogButton" onmouseover="CuteEditor_ColorPicker_ButtonOver(this);" /> 
<img src="../Images/zoom_out.gif" id="btn_zoom_out" onclick="Zoom_Out();" title="<%= GetString("ZoomOut") %>" class="cursor dialogButton" onmouseover="CuteEditor_ColorPicker_ButtonOver(this);" /> 
<img src="../Images/Actualsize.gif" id="btn_Actualsize" onclick="Actualsize();" title="<%= GetString("ActualSize") %>" class="cursor dialogButton" onmouseover="CuteEditor_ColorPicker_ButtonOver(this);" /> 
		            </td>
	            </tr>
				<tr>
					<td style="width:520px; height:300px;vertical-align:top;">
<iframe src="browse_Document.asp?<%=setting %>&Theme=<%=Theme%>&MP=<%=Current_FilesGalleryPath%>" id="browse_Frame" frameborder="0" scrolling="auto"></iframe>		
					</td>
					<td>
						<div id="divouter">
							<div id="divpreview">
							</div>
						</div>
					</td>
				</tr>
			</table>
			<table border="0" cellspacing="0" cellpadding="0" style="margin-top:3px;width:100%">
			    <tr>
			        <td>
			              <fieldset>
				                <legend><%= GetString("Insert") %></legend>
				                <table border="0" cellpadding="5" cellspacing="0">
				                    <tr>
				                       <td valign="middle"><%= GetString("Url") %>:</td>
						               <td>
						                   <input type="text" id="TargetUrl" style="width:360px" name="TargetUrl" />
						               </td>
						             </tr>
						         </table>
						   </fieldset>	    	    
						   <%
						   Dim Style_Display_None
							if Not CBool(AllowUpload) then
							Style_Display_None="Style='Display:none'"
						    end if
						  %>
						   <fieldset id="fieldsetUpload" <%= Style_Display_None %> >
							<legend><%= GetString("Upload") %> (<%= GetString("MaxFileSizeAllowed") %> <%=MaxDocumentSize%>K)</legend>
<iframe src="upload.asp?<%=setting %>&Theme=<%=Theme%>&FP=<%=Current_FilesGalleryPath%>&Type=document" id="upload_image" frameborder="0" scrolling="auto"></iframe>
							</fieldset> 
					</td>
				    <td>&nbsp;&nbsp;&nbsp; 
				    </td>
				    <td width="250">		
			<div style="padding-top:10px; text-align:center">
<input class="formbutton" type="button" value="<%= GetString("OK") %>" onclick="do_insert()" id="Button1" /> 
&nbsp;&nbsp;&nbsp; 
<input class="formbutton" type="button" value="<%= GetString("Cancel") %>" onclick="do_Close()" id="Button2" />
						</div>
				    </td>
				</tr>
			</table>			
		</div>
			<script type="text/javascript">	
	            var OK = "<%= GetString("OK")%>";
	            var Cancel = "<%= GetString("Cancel")%>";
	            var InputRequired = "<%= GetString("InputRequired")%>";
	            var ValidID = "<%= GetString("ValidID")%>";
	            var ValidColor = "<%= GetString("ValidColor")%>";
	            var SelectImagetoInsert = "<%= GetString("SelectImagetoInsert")%>";
	            
	            function UploadSaved(sFileName,path){
		            ResetFields();
		            try{
		    browse_Frame.location.reload();
		    }
		    catch(x)
		    {}
		            TargetUrl.value = sFileName;
		            var ext=sFileName.substring(sFileName.lastIndexOf('.')).toLowerCase();
	                switch(ext)
	                {
		                case ".jpeg":case ".jpg":case ".gif":case ".png":case ".bmp":
		                    setTimeout(function(){do_preview();}, 100); 
			                break;
		                case ".swf":
		                    setTimeout(function(){do_preview();}, 100); 
			                break;
		                case ".avi":case ".mpg":case ".mp3":case ".mpeg":case ".wav":
		                    setTimeout(function(){do_preview();}, 100); 
			                break;
			            default:
		                    setTimeout(function(){do_preview(sFileName);}, 100); 
			                break;
			            
	                }
		            row_click(sFileName,"");
	            }
            	
	            function Refresh(path)
	            {
		            browse_Frame.location="browse_Document.asp?<%=setting %>&Theme=<%=Theme%>&MP=<%=FilesGalleryPath%>&loc="+path+"";
	            }
	            function CreateDir_click()
	            {
		            <%
			            if not CBool(AllowCreateFolder) then
		            %>
			            alert("<%= GetString("Disabled")%>");
			            return;
		            <%
			            End If
		            %>		    
	                if(Browser_IsIE7())
	                {
		                IEprompt(promptCallback,'<%= GetString("SpecifyNewFolderName")%>', "");		
		                function promptCallback(dir)
		                {
			                var tempPath = browse_Frame.location;	
			                tempPath = tempPath + "&action=createfolder&foldername="+dir;
			                browse_Frame.location = tempPath;		
		                }
	                }
	                else
	                {
		                var dir=prompt("<%= GetString("SpecifyNewFolderName")%>","")
		                if(dir)
		                {
			                var tempPath = browse_Frame.location;	
			                tempPath = tempPath + "&action=createfolder&foldername="+dir;
			                browse_Frame.location = tempPath;			
		                }
	                }
	            }
	            function row_click(path,html)
	            {	
		            ResetFields();
		            TargetUrl.value=path;
		            do_preview(html);
	            }	    
        		
	            function SetUpload_FolderPath(path)
	            {	if(path.substring(path.length-1, path.length)=='/')
		            {
			            path=path.substring(0, path.length-1);
		            }
		            upload_image.src="upload.asp?<%=setting %>&Theme=<%=Theme%>&FP="+path+"&Type=document";
	            }	
	        </script>
		<script type="text/javascript" src="../Scripts/Dialog/DialogFoot.js"></script>
		<script type="text/javascript" src="../Scripts/Dialog/Dialog_SelectFile.js"></script>
	</body>
</html>