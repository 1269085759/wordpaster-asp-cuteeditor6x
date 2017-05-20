<!-- #include file = "cuteeditor_files/include_CuteEditor.asp" --> 
<html>	
    <head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>WordPaster For CuteEditor6.x</title>
		<link rel="stylesheet" href="asp.css"  type="text/css" />
        <link type="text/css" rel="Stylesheet" href="WordPaster/css/WordPaster.css"/>
	<link type="text/css" rel="Stylesheet" href="WordPaster/js/skygqbox.css"/>
    <script type="text/javascript" src="WordPaster/js/json2.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="WordPaster/js/jquery-1.4.min.js" charset="utf-8"></script>
	<script type="text/javascript" src="WordPaster/js/w.edge.js" charset="utf-8"></script>
    <script type="text/javascript" src="WordPaster/js/w.app.js" charset="utf-8"></script>
    <script type="text/javascript" src="WordPaster/js/w.file.js" charset="utf-8"></script>
	<script type="text/javascript" src="WordPaster/js/WordPaster.js" charset="utf-8"></script>
	<script type="text/javascript" src="WordPaster/js/skygqbox.js" charset="utf-8"></script>
	</head>
    <body>
		
		<form name="theForm" action="Get_HtmlContent.asp" method="post">
		<h1>Enable All Toolbars</h1>
		<hr>
	<div style="font-size: medium; line-height: 130%;">
		<p>
			演示方法：</p>
		<ul style="list-style-type: decimal;">
			<li>打开Word文档，复制多张图片，在编辑器中按下 Ctrl + V 键，编辑器将自动上传所有图片。</li>
			<li>复制电脑中任意图片文件，然后点击编辑器中的粘贴图片按钮<img src="WordPaster/css/paster.png" width="16px" height="16px" />。</li>
			<li>通过QQ或其它软件截屏，复制图片，然后点击编辑器中的图片粘贴按钮<img src="WordPaster/css/paster.png" width="16px" height="16px" />。</li>
		</ul>
		<p>
			相关问题：</p>
		<ul style="list-style-type: decimal;">
			<li><a target="_blank" href="http://yunpan.cn/lk/sVvphpFh7YvFJ?sid=301">crx安装包</a>安装后可支持Chrome(谷歌)浏览器，高版本Chrome需要手动将crx安装包拖拽到Chrome"扩展程序"面板中安装。</li>
			<li><a target="_blank" href="http://yunpan.cn/lk/sVv4Rc2iwrC9B?sid=301">xpi安装包</a>安装后可支持Firefox(火狐浏览器)浏览器。</li>
			<li>下载exe安装包手动安装后可支持IE/Firefox/Chrome。<a target="_blank" href="http://yunpan.cn/QX4tdHFfHbmV5">exe安装包</a></li>
			<li>如果无法安装组件请下载进行安装<a target="_blank" href="http://www.microsoft.com/downloads/details.aspx?FamilyID=9b2da534-3e03-4391-8a4d-074b9f2bc1bf%20">Microsoft Visual C++ 2008 Redistributable Package (x86)</a></li>
			<li>如果有任何问题或建议请向我们<a target="_blank" href="http://www.ncmem.com/blog/guestbook.asp">反馈</a></li>
			<li><a target="_blank" href="http://www.ncmem.com/webplug/wordpaster/index.asp">产品介绍</a></li>
		</ul>
	</div>		<br />
		<%
			Dim editor
			Set editor = New CuteEditor
			editor.ID = "Editor1"
			editor.Text = "WordPaster For CuteEditor6.6整合示例"
			
			editor.EditorBodyStyle = "font:normal 12px arial;"
			editor.EditorWysiwygModeCss = "asp.css"
			editor.CustomAddons = "<img class=""CuteEditorButton"" onmouseover=""CuteEditor_ButtonCommandOver(this)"" onmouseout=""CuteEditor_ButtonCommandOut(this)"" onmousedown=""CuteEditor_ButtonCommandDown(this)"" onmouseup=""CuteEditor_ButtonCommandUp(this)"" Command=""WordPaster"" src=""WordPaster/css/paster.png"" title=""粘贴来自剪帖板，QQ，Word文档中的图片"" />"   
			editor.Draw()
												
			' Request.Form(ID) access from other page
		%>
					
		<script type="text/javascript">
        var pasterMgr = new WordPasterManager();
			pasterMgr.Config["PostUrl"] = "http://localhost:85/asp/upload.asp"
            //pasterMgr.Config["PostUrl"] = "http://www.ncmem.com/products/upload_ori.aspx";
            pasterMgr.Load(); //加载控件
            var edt = document.getElementById('<%= editor.ClientID%>');
    
            $(document).ready(function()
            {
    	    pasterMgr.SetEditor(edt);
            });
			
			function CuteEditor_OnCommand(editor,command,ui,value)    
			{    
				//handle the command by yourself    
				if(command=="WordPaster")
				{    
					pasterMgr.Paste();
					return true;    
				}    
			}    
        </script>
		</form>
	</body>
</html>