<%  
   Response.ContentType = "text/x-component"
   dim Culture
   Culture = Trim(Request.QueryString("UC"))  
   dim FilePath
   FilePath = Trim(Request.QueryString("F"))  
   Public Function GetString(instring)
	    dim t
    	
	    t = GetStringByCulture(instring,Culture)
    	
	    If t = ""  then
		    t= GetStringByCulture(instring,"_default")
	    End If
    	
	    If t = ""  then
		    t= "{"&instring&"}"	
	    End If
	    GetString= t	
    End Function
    
    
   FilePath = Left(request.ServerVariables("PATH_INFO"),InStr(request.ServerVariables("PATH_INFO"),FilePath)+len(FilePath)-1)

    Public Function GetStringByCulture(instring,input_culture)
	    dim scriptname,xmlfilename,doc,temp
	    dim node,selectednode,optionnodelist,errobj
	    dim selectednodes

	    xmlfilename= Server.MapPath(FilePath&"/languages/"&input_culture&".xml")

	    ' Create an object to hold the XML
	    set doc = server.CreateObject("Microsoft.XMLDOM")

	    ' For ASP, wait until the XML is all ready before continuing
	    doc.async = False

	    ' Load the XML file or return an error message and stop the script
	    if not Doc.Load(xmlfilename) then
		    Response.Write "Failed to load the language text from the XML file.<br>"
		    Response.End
	    end if

	    ' Make sure that the interpreter knows that we are using XPath as our selection language
	    doc.setProperty "SelectionLanguage", "XPath"

	    set selectednode= doc.selectSingleNode("/resources/resource[@name='"&instring&"']")
	    if IsObject(selectednode) and not selectednode is nothing  then
		    GetStringByCulture=CuteEditor_Decode(selectednode.text)
	    else
		    GetStringByCulture=""		
	    end if
    End Function    
    
     PUBLIC FUNCTION CuteEditor_Decode(input_str)        
	    input_str=Replace(input_str,"#1","<")
	    input_str=Replace(input_str,"#2",">")
	    input_str=Replace(input_str,"#3","&")
	    input_str=Replace(input_str,"#4","*")
	    input_str=Replace(input_str,"#5","o")
	    input_str=Replace(input_str,"#6","O")
	    input_str=Replace(input_str,"#7","s")
	    input_str=Replace(input_str,"#8","S")
	    input_str=Replace(input_str,"#9","e")
	    input_str=Replace(input_str,"#a","E")
	    input_str=Replace(input_str,"#0","#")
	    CuteEditor_Decode = input_str
     END FUNCTION
%>
<PUBLIC:COMPONENT>
	<PUBLIC:EVENT ID="event_oncolorchange" name="oncolorchange" />
	<PUBLIC:EVENT ID="event_oncolorpopup" name="oncolorpopup" />
	<PUBLIC:PROPERTY name="selectedColor" GET="_get_selectedColor" PUT="_set_selectedColor"/>
	<PUBLIC:METHOD name="popupColor" INTERNALNAME="_mtd_popupColor" />
	<PUBLIC:ATTACH EVENT="onclick" ONEVENT="_mtd_onclick()" />
</PUBLIC:COMPONENT>

<script type="text/javascript">
var OxO683b=["#000000","#993300","#333300","#003300","#003366","#000080","#333399","#333333","#800000","#FF6600","#808000","#008000","#008080","#0000FF","#666699","#808080","#FF0000","#FF9900","#99CC00","#339966","#33CCCC","#3366FF","#800080","#999999","#FF00FF","#FFCC00","#FFFF00","#00FF00","#00FFFF","#00CCFF","#993366","#C0C0C0","#FF99CC","#FFCC99","#FFFF99","#CCFFCC","#CCFFFF","#99CCFF","#CC99FF","#FFFFFF","dialogWidth:500px;dialogHeight:330px;help:0;status:0;resizable:1","disableVisual","","\x3CDIV style=\x27width=140;cursor:default;position:absolute;z-index:88888888;background-color:white;border:0px;overflow:visible;\x27\x3E","length","\x3Ctable cellpadding=0 cellspacing=5 style=\x27width:100%;font-family: Verdana; font-size: 6px; BORDER: #666666 1px solid;\x27 bgcolor=#f9f8f7\x3E\x3Ctr\x3E\x3Ctd\x3E","\x3Ctable cellpadding=0 cellspacing=2 style=\x27font-size: 3px;\x27\x3E","\x3Ctr\x3E","\x3Ctd colspan=10 align=center style=\x22padding:1px;border:solid 1px #f9f8f7;margin:1px\x22 onmouseup=\x22document.all.","uniqueID","._cphtc_sel(this.ColorValue)\x22  ColorValue=\x22\x22 onmouseover=\x22CuteEditor_ColorPicker_ButtonOver(this);\x22\x3E","\x3Ctable cellspacing=0 cellpadding=0 border=0 width=90% style=\x22font-size:3px\x22\x3E","\x3C/table\x3E","\x3C/td\x3E","\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd\x3E\x26nbsp;\x3C/td\x3E\x3C/tr\x3E","\x3Ctd title="," align=center style=\x22padding:1px;border:solid 1px #f9f8f7;\x22 onmouseover=\x22CuteEditor_ColorPicker_ButtonOver(this);\x22 ColorValue=\x22","\x22 onmouseup=\x22document.all.","._cphtc_sel(this.ColorValue);\x22\x3E","\x3Cdiv style=\x22background-color:","; border:solid 1px #808080; width:12px; height:12px; font-size: 3px;\x22\x3E\x26nbsp;\x3C/div\x3E","\x3C/td\x3E\x3C/tr\x3E","\x3Ctd colspan=10 align=center style=\x22padding:1px;border:solid 1px #f9f8f7;\x22 onmouseover=\x22CuteEditor_ColorPicker_ButtonOver(this);\x22 onmouseup=\x22document.all.","._cphtc_dlg();\x22\x3E","innerHTML","body","document","onclick","SELECT","all","visibility","currentStyle","hidden","runtimeStyle","style","_visibility","top","left","display","block","offsetHeight","px","unselectable","on","none"];var colorsArray= new Array(OxO683b[0],OxO683b[1],OxO683b[2],OxO683b[3],OxO683b[4],OxO683b[5],OxO683b[6],OxO683b[7],OxO683b[8],OxO683b[9],OxO683b[10],OxO683b[11],OxO683b[12],OxO683b[13],OxO683b[14],OxO683b[15],OxO683b[16],OxO683b[17],OxO683b[18],OxO683b[19],OxO683b[20],OxO683b[21],OxO683b[22],OxO683b[23],OxO683b[24],OxO683b[25],OxO683b[26],OxO683b[27],OxO683b[28],OxO683b[29],OxO683b[30],OxO683b[31],OxO683b[32],OxO683b[33],OxO683b[34],OxO683b[35],OxO683b[36],OxO683b[37],OxO683b[38],OxO683b[39]);var ShowMoreColors=true;var dlgurl='<%=FilePath%>/Dialogs/ColorPicker.Asp?<%=Request.ServerVariables("QUERY_STRING") %>&setting=<%= Request.Cookies("CESecurity") %>';function element._cphtc_sel(Ox4){_color=Ox4;event_oncolorchange.fire();} ;function element._cphtc_dlg(){CloseDiv();event_oncolorpopup.fire();var Ox5=OxO683b[40];if(element[OxO683b[41]]){var Ox6=showModalDialog(dlgurl,{color:Ox7},Ox5);if(Ox6!=null&&Ox6!=false){_color=Ox6;event_oncolorchange.fire();} ;} else {var Ox7=_color;var Ox6=showModalDialog(dlgurl,{color:Ox7,onchange:Ox8},Ox5);if(Ox6!=null&&Ox6!=false){_color=Ox6;} else {_color=Ox7;} ;event_oncolorchange.fire();function Ox8(Ox9){_color=Ox9;event_oncolorchange.fire();} ;} ;} ;var _color=OxO683b[42];function _get_selectedColor(){return _color;} ;function _set_selectedColor(Ox9){_color=Ox9;} ;var div;var selects;var isopen=false;function _mtd_onclick(){_mtd_popupColor();} ;function _mtd_popupColor(){if(div==null){div=document.createElement(OxO683b[43]);var Ox12=OxO683b[42];var Ox13=colorsArray[OxO683b[44]];var Ox14=8;Ox12+=OxO683b[45];Ox12+=OxO683b[46];Ox12+=OxO683b[47];Ox12+=OxO683b[48]+element[OxO683b[49]]+OxO683b[50];Ox12+=OxO683b[51];Ox12+='<tr><td width=18><div style="background-color:#000000; border:solid 1px #808080; width:12px; height:12px; font-size: 3px;">&nbsp;</div></td><td align=center style="font:normal 11px verdana;">&nbsp;<%= GetString("Automatic") %></td></tr>';Ox12+=OxO683b[52];Ox12+=OxO683b[53];Ox12+=OxO683b[54];Ox12+=OxO683b[55];for(var i=0;i<Ox13;i++){if((i%Ox14)==0){Ox12+=OxO683b[47];} ;Ox12+=OxO683b[56]+colorsArray[i]+OxO683b[57]+colorsArray[i]+OxO683b[58]+element[OxO683b[49]]+OxO683b[59];Ox12+=OxO683b[60]+colorsArray[i]+OxO683b[61];Ox12+=OxO683b[53];if(((i+1)>=Ox13)||(((i+1)%Ox14)==0)){Ox12+=OxO683b[54];} ;} ;Ox12+=OxO683b[55];Ox12+=OxO683b[52];Ox12+=OxO683b[62];if(ShowMoreColors){Ox12+=OxO683b[47];Ox12+=OxO683b[63]+element[OxO683b[49]]+OxO683b[64];Ox12+=OxO683b[51];Ox12+='<tr><td width=18><div style="background-color:#000000; border:solid 1px #808080; width:12px; height:12px;font-size: 3px;"></div></td><td align=center style="font-size:11px"><%= GetString("MoreColors") %></td></tr>';Ox12+=OxO683b[52];Ox12+=OxO683b[53];Ox12+=OxO683b[54];} ;Ox12+=OxO683b[52];div[OxO683b[65]]=Ox12;element[OxO683b[67]][OxO683b[66]].appendChild(div);div[OxO683b[68]]=CloseDiv;} ;if(isopen){CloseDiv();} ;isopen=true;selects=[];var Ox16=element[OxO683b[67]][OxO683b[70]].tags(OxO683b[69]);for(var i=0;i<Ox16[OxO683b[44]];i++){var Ox17=Ox16[i];if(Ox17[OxO683b[72]][OxO683b[71]]!=OxO683b[73]){selects[selects[OxO683b[44]]]=Ox17;var Ox18=Ox17[OxO683b[74]]||Ox17[OxO683b[75]];Ox18[OxO683b[76]]=Ox18[OxO683b[71]];Ox18[OxO683b[71]]=OxO683b[73];} ;} ;div[OxO683b[75]][OxO683b[77]]=0;div[OxO683b[75]][OxO683b[78]]=0;div[OxO683b[75]][OxO683b[79]]=OxO683b[80];var Ox19=CalcPosition(div,element);Ox19[OxO683b[77]]+=element[OxO683b[81]];AdjustMirror(div,element,Ox19);div[OxO683b[75]][OxO683b[78]]=Ox19[OxO683b[78]]+OxO683b[82];div[OxO683b[75]][OxO683b[77]]=Ox19[OxO683b[77]]+OxO683b[82];var Ox16=div[OxO683b[70]];for(var i=0;i<Ox16[OxO683b[44]];i++){Ox16[i][OxO683b[83]]=OxO683b[84];} ;div.focus();var Ox1a= new CaptureManager(element,handlelosecapture);Ox1a.AddElement(div);} ;function handlelosecapture(){CloseDiv();} ;function CloseDiv(){CaptureManager.Unregister(element);isopen=false;div[OxO683b[75]][OxO683b[79]]=OxO683b[85];for(var i=0;i<selects[OxO683b[44]];i++){var Ox17=selects[i];Ox17[OxO683b[74]][OxO683b[71]]=Ox17[OxO683b[74]][OxO683b[76]];} ;} ;

</script>

<script type="text/javascript">


var OxO273b=["body","document","compatMode","CSS1Compat","documentElement","scrollLeft","scrollTop","clientLeft","clientTop","parentElement","position","currentStyle","absolute","relative","left","top","clientWidth","clientHeight","offsetWidth","offsetHeight","element","capturemanager","\x3CDIV style=\x27width:0px;height:0px;left:0px;top:0px;position:absolute\x27\x3E","afterBegin","onlosecapture","onmousedown","onmousemove","onmouseover","onmouseout","length"];function GetScrollPosition(Ox1f){var Ox20=window[OxO273b[1]][OxO273b[0]];var p=Ox20;if(window[OxO273b[1]][OxO273b[2]]==OxO273b[3]){p=window[OxO273b[1]][OxO273b[4]];} ;if(Ox1f==Ox20){return {left:0,top:0};} ;with(Ox1f.getBoundingClientRect()){return {left:p[OxO273b[5]]+left,top:p[OxO273b[6]]+top};} ;} ;function GetClientPosition(Ox1f){var Ox20=window[OxO273b[1]][OxO273b[0]];var p=Ox20;if(window[OxO273b[1]][OxO273b[2]]==OxO273b[3]){p=window[OxO273b[1]][OxO273b[4]];} ;if(Ox1f==Ox20){return {left:-p[OxO273b[5]],top:-p[OxO273b[6]]};} ;with(Ox1f.getBoundingClientRect()){return {left:left-p[OxO273b[7]],top:top-p[OxO273b[8]]};} ;} ;function GetStandParent(Ox1f){for(var Ox24=Ox1f[OxO273b[9]];Ox24!=null;Ox24=Ox24[OxO273b[9]]){var Ox25=Ox24[OxO273b[11]][OxO273b[10]];if(Ox25==OxO273b[12]||Ox25==OxO273b[13]){return Ox24;} ;} ;return window[OxO273b[1]][OxO273b[0]];} ;function CalcPosition(Ox27,Ox1f){var Ox28=GetScrollPosition(Ox1f);var Ox29=GetScrollPosition(GetStandParent(Ox27));var Ox2a=GetStandParent(Ox27);return {left:Ox28[OxO273b[14]]-Ox29[OxO273b[14]]-Ox2a[OxO273b[7]],top:Ox28[OxO273b[15]]-Ox29[OxO273b[15]]-Ox2a[OxO273b[8]]};} ;function AdjustMirror(Ox27,Ox1f,Ox19){var Ox2c=window[OxO273b[1]][OxO273b[0]][OxO273b[16]];var Ox2d=window[OxO273b[1]][OxO273b[0]][OxO273b[17]];if(window[OxO273b[1]][OxO273b[2]]==OxO273b[3]){Ox2c=window[OxO273b[1]][OxO273b[4]][OxO273b[16]];Ox2d=window[OxO273b[1]][OxO273b[4]][OxO273b[17]];} ;var Ox2e=Ox27[OxO273b[18]];var Ox2f=Ox27[OxO273b[19]];var Ox30=GetClientPosition(GetStandParent(Ox27));var Ox31={left:Ox30[OxO273b[14]]+Ox19[OxO273b[14]]+Ox2e/2,top:Ox30[OxO273b[15]]+Ox19[OxO273b[15]]+Ox2f/2};var Ox32={left:Ox30[OxO273b[14]]+Ox19[OxO273b[14]],top:Ox30[OxO273b[15]]+Ox19[OxO273b[15]]};if(Ox1f!=null){var Ox33=GetClientPosition(Ox1f);Ox32={left:Ox33[OxO273b[14]]+Ox1f[OxO273b[18]]/2,top:Ox33[OxO273b[15]]+Ox1f[OxO273b[19]]/2};} ;var Ox34=true;if(Ox31[OxO273b[14]]-Ox2e/2<0){if((Ox32[OxO273b[14]]*2-Ox31[OxO273b[14]])+Ox2e/2<=Ox2c){Ox31[OxO273b[14]]=Ox32[OxO273b[14]]*2-Ox31[OxO273b[14]];} else {if(Ox34){Ox31[OxO273b[14]]=Ox2e/2+4;} ;} ;} else {if(Ox31[OxO273b[14]]+Ox2e/2>Ox2c){if((Ox32[OxO273b[14]]*2-Ox31[OxO273b[14]])-Ox2e/2>=0){Ox31[OxO273b[14]]=Ox32[OxO273b[14]]*2-Ox31[OxO273b[14]];} else {if(Ox34){Ox31[OxO273b[14]]=Ox2c-Ox2e/2-4;} ;} ;} ;} ;if(Ox31[OxO273b[15]]-Ox2f/2<0){if((Ox32[OxO273b[15]]*2-Ox31[OxO273b[15]])+Ox2f/2<=Ox2d){Ox31[OxO273b[15]]=Ox32[OxO273b[15]]*2-Ox31[OxO273b[15]];} else {if(Ox34){Ox31[OxO273b[15]]=Ox2f/2+4;} ;} ;} else {if(Ox31[OxO273b[15]]+Ox2f/2>Ox2d){if((Ox32[OxO273b[15]]*2-Ox31[OxO273b[15]])-Ox2f/2>=0){Ox31[OxO273b[15]]=Ox32[OxO273b[15]]*2-Ox31[OxO273b[15]];} else {if(Ox34){Ox31[OxO273b[15]]=Ox2d-Ox2f/2-4;} ;} ;} ;} ;Ox19[OxO273b[14]]=Ox31[OxO273b[14]]-Ox30[OxO273b[14]]-Ox2e/2;Ox19[OxO273b[15]]=Ox31[OxO273b[15]]-Ox30[OxO273b[15]]-Ox2f/2;} ;function CaptureManager(element,handlelosecapture){if(CaptureManager[OxO273b[20]]&&CaptureManager[OxO273b[20]][OxO273b[21]]){CaptureManager[OxO273b[20]][OxO273b[21]].Unregister();} ;var Ox37=true;var Ox38=[];var Ox39=true;var Ox3a=false;element[OxO273b[21]]=Ox3f;CaptureManager[OxO273b[20]]=element;Ox3f.AddElement(element);var Ox3b=element[OxO273b[1]].createElement(OxO273b[22]);element[OxO273b[1]][OxO273b[0]].insertAdjacentElement(OxO273b[23],Ox3b);Ox3b.attachEvent(OxO273b[24],Ox42);Ox3c(Ox3b);Ox3b.setCapture(true);Ox3a=true;return Ox3f;function Ox3c(Ox3d){Ox3d.attachEvent(OxO273b[25],Ox43);Ox3d.attachEvent(OxO273b[26],Ox45);Ox3d.attachEvent(OxO273b[27],Ox47);Ox3d.attachEvent(OxO273b[28],Ox48);} ;function Ox3e(Ox3d){Ox3d.detachEvent(OxO273b[25],Ox43);Ox3d.detachEvent(OxO273b[26],Ox45);Ox3d.detachEvent(OxO273b[27],Ox47);Ox3d.detachEvent(OxO273b[28],Ox48);} ;function Ox3f(){} ;function Ox3f.Unregister(){Ox3b.detachEvent(OxO273b[24],Ox42);Ox3e(Ox3b);Ox3b.removeNode(true);for(var i=0;i<Ox38[OxO273b[29]];i++){var Ox3d=Ox38[i];Ox3e(Ox3d);} ;Ox37=false;element[OxO273b[21]]=null;CaptureManager[OxO273b[20]]=null;if(Ox3a){Ox3a=false;Ox3b.releaseCapture();Ox3f.FireLoseCapture();} ;} ;function Ox3f.AddElement(Ox3d){Ox3c(Ox3d);Ox38[Ox38[OxO273b[29]]]=Ox3d;} ;function Ox3f.DelElement(Ox3d){var len=Ox38[OxO273b[29]];for(var i=0;i<len;i++){if(Ox38[i]==Ox3d){Ox3e(Ox3d);for(var Ox41=i;Ox41<len-1;Ox41++){Ox38[Ox41]=Ox38[Ox41+1];} ;Ox38[OxO273b[29]]=Ox38[OxO273b[29]]-1;return ;} ;} ;} ;function Ox3f.FireLoseCapture(){handlelosecapture();} ;function Ox42(){if(Ox3a){Ox3a=false;try{Ox3f.FireLoseCapture();} finally{Ox3f.Unregister();} ;} ;} ;function Ox43(){var Ox44=element[OxO273b[1]].elementFromPoint(event.clientX,event.clientY);for(var i=0;i<Ox38[OxO273b[29]];i++){var Ox3d=Ox38[i];if(Ox3d.contains(Ox44)){return ;} ;} ;Ox3f.Unregister();} ;function Ox45(){var Ox44=element[OxO273b[1]].elementFromPoint(event.clientX,event.clientY);Ox46(Ox44);} ;function Ox46(Ox44){for(var i=0;i<Ox38[OxO273b[29]];i++){var Ox3d=Ox38[i];if(Ox3d.contains(Ox44)){if(Ox3a){Ox3a=false;Ox3b.releaseCapture();} ;return ;} ;} ;if(!Ox3a){Ox3a=true;Ox3b.setCapture(true);} ;} ;function Ox47(){var Ox44=element[OxO273b[1]].elementFromPoint(event.clientX,event.clientY);Ox39=false;for(var i=0;i<Ox38[OxO273b[29]];i++){var Ox3d=Ox38[i];if(Ox3d.contains(event.fromElement)){return ;} ;if(Ox3d.contains(Ox44)){if(Ox3a){Ox3a=false;Ox3b.releaseCapture();} ;} ;} ;} ;function Ox48(){var Ox44=element[OxO273b[1]].elementFromPoint(event.clientX,event.clientY);Ox39=false;for(var i=0;i<Ox38[OxO273b[29]];i++){var Ox3d=Ox38[i];if(Ox3d.contains(event.toElement)){return ;} ;} ;if(!Ox3a){Ox3a=true;Ox3b.setCapture(true);} ;} ;} ;function CaptureManager.Register(element,handlelosecapture){return  new CaptureManager(element,handlelosecapture);} ;function CaptureManager.Unregister(element){if(element&&element[OxO273b[21]]){element[OxO273b[21]].Unregister();} ;} ;
</script>
