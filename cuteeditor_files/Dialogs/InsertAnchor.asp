<!-- #include file = "Include_GetString.asp" -->
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title><%= GetString("InsertAnchor") %></title>		
		<meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
		<meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
		<link href="../Themes/<%=Theme%>/dialog.css" type="text/css" rel="stylesheet" />
		<!--[if IE]>
			<link href="../Style/IE.css" type="text/css" rel="stylesheet" />
		<![endif]-->
		<script type="text/javascript" src="../Scripts/Dialog/DialogHead.js"></script>
		<style type="text/css">
		html, body,#ajaxdiv {height: 100%;}
		</style>
	</head>
	<body>
		<div id="ajaxdiv">
		<table border="0" cellspacing="2" cellpadding="5" width="100%">
			<tr>
				<td style="white-space:nowrap">
					<div>
						<fieldset style="padding:2px">
						    <legend><%= GetString("InsertAnchor") %></legend>
							<table border="0" cellpadding="5" cellspacing="0">
								<tr>
									<td style="width:100%">
										<select size="5" name="allanchors" style="width: 255" id="allanchors" onchange="selectAnchor(this.value);">
										</select>
									</td>
									<td>
									</td>
								</tr>
							</table>
							<br />
							<br />
							<table border="0" cellpadding="5" cellspacing="0">
								<tr>
									<td style='vertical-align:middle'><%= GetString("Name") %>:</td>
									<td style='vertical-align:middle'><input type="text" id="anchor_name" style="width:210" /></td>
								</tr>
							</table>
						</fieldset>
					</div>
					<div style="margin-top:8px;width:90%; text-align:center">
						<input class="formbutton" type="button" value="<%= GetString("Insert") %>" style="width:80px" onclick="insert_link()" />&nbsp;&nbsp;
						<input class="formbutton" type="button" value="<%= GetString("Cancel") %>" style="width:80px" onclick="Close()" />
					</div>
				</td>
			</tr>
		</table>
		</div>
	</body>
	<script type="text/javascript">		
	    var ValidName = "<%= GetString("ValidName")%>";
	</script>
	<script type="text/javascript" src="../Scripts/Dialog/DialogFoot.js"></script>
	<script type="text/javascript" src="../Scripts/Dialog/Dialog_InsertAnchor.js"></script>
</html>
