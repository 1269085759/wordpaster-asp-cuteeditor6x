var OxOb47c=["value","","nodeType","nodeName","divpreview","Width","Height","AutoStart","ShowControls","ShowStatusBar","WindowlessVideo","TargetUrl","Button1","Button2","btn_zoom_in","btn_zoom_out","btn_Actualsize","btn_CreateDir","upload_image","contentWindow","browse_Frame","checked","\x3Cembed name=\x22MediaPlayer1\x22 src=\x22","\x22 autostart=\x22","\x22 showcontrols=\x22","\x22  windowlessvideo=\x22","\x22 showstatusbar=\x22","\x22 width=\x22","\x22 height=\x22","\x22 type=\x22application/x-mplayer2\x22 pluginspage=\x22http://www.microsoft.com/Windows/MediaPlayer\x22 \x3E\x3C/embed\x3E\x0A","\x3Cobject classid=\x22CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95\x22 "," codebase=\x22http://activex.microsoft.com/activex/"," controls/mplayer/en/nsmp2inf.cab#Version=6,0,02,902\x22 "," standby=\x22Loading Microsoft Windows Media Player components...\x22 "," type=\x22application/x-oleobject\x22","  height=\x22","\x22 \x3E","\x3Cparam name=\x22FileName\x22 value=\x22","\x22/\x3E","\x3Cparam name=\x22autoStart\x22 value=\x22","\x3Cparam name=\x22showControls\x22 value=\x22","\x3Cparam name=\x22showstatusbar\x22 value=\x22","\x3Cparam name=\x22windowlessvideo\x22 value=\x22","\x3C/object\x3E","innerHTML","onbeforeunload","onunload","Please choose a Media movie to insert","\x22 windowlessvideo=\x22","zoom","style","wrapupPrompt","iepromptfield","display","none","body","div","id","IEPromptBox","promptBlackout","border","1px solid #b0bec7","backgroundColor","#f0f0f0","position","absolute","width","330px","zIndex","100","\x3Cdiv style=\x22width: 100%; padding-top:3px;background-color: #DCE7EB; font-family: verdana; font-size: 10pt; font-weight: bold; height: 22px; text-align:center; background:url(../Images/formbg2.gif) repeat-x left top;\x22\x3E","\x3C/div\x3E","\x3Cdiv style=\x22padding: 10px\x22\x3E","\x3CBR\x3E\x3CBR\x3E","\x3Cform action=\x22\x22 onsubmit=\x22return wrapupPrompt()\x22\x3E","\x3Cinput id=\x22iepromptfield\x22 name=\x22iepromptdata\x22 type=text size=46 value=\x22","\x22\x3E","\x3Cbr\x3E\x3Cbr\x3E\x3Ccenter\x3E","\x3Cinput type=\x22submit\x22 value=\x22\x26nbsp;\x26nbsp;\x26nbsp;","\x26nbsp;\x26nbsp;\x26nbsp;\x22\x3E","\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;","\x3Cinput type=\x22button\x22 onclick=\x22wrapupPrompt(true)\x22 value=\x22\x26nbsp;","\x26nbsp;\x22\x3E","\x3C/form\x3E\x3C/div\x3E","top","100px","left","offsetWidth","px","block","onmouseover","CuteEditor_ColorPicker_ButtonOver(this)"];setMouseOver();function setMouseOver(){} ;function ResetFields(){TargetUrl[OxOb47c[0]]=OxOb47c[1];} ;function RequireFileBrowseScript(){} ;function Actualsize(){} ;function getParent(Ox137,Ox309){if(Ox137==null){return null;} else {if(Ox137[OxOb47c[2]]==1&&Ox137[OxOb47c[3]].toLowerCase()==Ox309.toLowerCase()){return Ox137;} else {return getParent(Ox137.parentNode,Ox309);} ;} ;} ;RequireFileBrowseScript();var divpreview=Window_GetElement(window,OxOb47c[4],true);var Width=Window_GetElement(window,OxOb47c[5],true);var Height=Window_GetElement(window,OxOb47c[6],true);var AutoStart=Window_GetElement(window,OxOb47c[7],true);var ShowControls=Window_GetElement(window,OxOb47c[8],true);var ShowStatusBar=Window_GetElement(window,OxOb47c[9],true);var WindowlessVideo=Window_GetElement(window,OxOb47c[10],true);var TargetUrl=Window_GetElement(window,OxOb47c[11],true);var Button1=Window_GetElement(window,OxOb47c[12],true);var Button2=Window_GetElement(window,OxOb47c[13],true);var btn_zoom_in=Window_GetElement(window,OxOb47c[14],true);var btn_zoom_out=Window_GetElement(window,OxOb47c[15],true);var btn_Actualsize=Window_GetElement(window,OxOb47c[16],true);var CreateDir=Window_GetElement(window,OxOb47c[17],true);var upload_image=Window_GetElement(window,OxOb47c[18],true);upload_image=upload_image[OxOb47c[19]];var browse_Frame=Window_GetElement(window,OxOb47c[20],true);browse_Frame=browse_Frame[OxOb47c[19]];var editor=Window_GetDialogArguments(window);do_preview();function do_preview(){var Ox30e;var Ox14;var Ox266;if(TargetUrl[OxOb47c[0]]==OxOb47c[1]){return ;} ;var Ox30f,Ox310,Ox311;if(AutoStart[OxOb47c[21]]){Ox30f=1;} else {Ox30f=0;} ;if(ShowStatusBar[OxOb47c[21]]){Ox310=1;} else {Ox310=0;} ;if(ShowControls[OxOb47c[21]]){Ox311=1;} else {Ox311=0;} ;if(WindowlessVideo[OxOb47c[21]]){windowlessvideo=true;} else {windowlessvideo=false;} ;Ox14=Width[OxOb47c[0]]+OxOb47c[1];Ox266=Height[OxOb47c[0]]+OxOb47c[1];Ox14=parseInt(Ox14);Ox266=parseInt(Ox266);var Ox2ca=OxOb47c[22]+TargetUrl[OxOb47c[0]]+OxOb47c[23]+Ox30f+OxOb47c[24]+Ox311+OxOb47c[25]+windowlessvideo+OxOb47c[26]+Ox310+OxOb47c[27]+Ox14+OxOb47c[28]+Ox266+OxOb47c[29];var Ox2a5=OxOb47c[30]+OxOb47c[31]+OxOb47c[32]+OxOb47c[33]+OxOb47c[34]+OxOb47c[35]+Ox266+OxOb47c[27]+Ox14+OxOb47c[36];Ox2a5=Ox2a5+OxOb47c[37]+TargetUrl[OxOb47c[0]]+OxOb47c[38];Ox2a5=Ox2a5+OxOb47c[39]+Ox30f+OxOb47c[38];Ox2a5=Ox2a5+OxOb47c[40]+Ox311+OxOb47c[38];Ox2a5=Ox2a5+OxOb47c[41]+Ox310+OxOb47c[38];Ox2a5=Ox2a5+OxOb47c[42]+windowlessvideo+OxOb47c[38];Ox2a5=Ox2a5+Ox2ca+OxOb47c[43];Ox2ca=Ox2a5;divpreview[OxOb47c[44]]=Ox2ca;} ;window[OxOb47c[45]]=window[OxOb47c[46]]=function (){divpreview[OxOb47c[44]]=OxOb47c[1];} ;var parameters= new Array();function do_insert(){divpreview[OxOb47c[44]]=OxOb47c[1];if(TargetUrl[OxOb47c[0]]==OxOb47c[1]){alert(OxOb47c[47]);return false;} ;var Ox30f,Ox310,Ox311;if(AutoStart[OxOb47c[21]]){Ox30f=1;} else {Ox30f=0;} ;if(ShowStatusBar[OxOb47c[21]]){Ox310=1;} else {Ox310=0;} ;if(ShowControls[OxOb47c[21]]){Ox311=1;} else {Ox311=0;} ;if(WindowlessVideo[OxOb47c[21]]){windowlessvideo=true;} else {windowlessvideo=false;} ;width=Width[OxOb47c[0]]+OxOb47c[1];height=Height[OxOb47c[0]]+OxOb47c[1];width=parseInt(width);height=parseInt(height);var Ox2ca=OxOb47c[22]+TargetUrl[OxOb47c[0]]+OxOb47c[23]+Ox30f+OxOb47c[24]+Ox311+OxOb47c[26]+Ox310+OxOb47c[48]+windowlessvideo+OxOb47c[27]+width+OxOb47c[28]+height+OxOb47c[29];var Ox2a5=OxOb47c[30]+OxOb47c[31]+OxOb47c[32]+OxOb47c[33]+OxOb47c[34]+OxOb47c[35]+height+OxOb47c[27]+width+OxOb47c[36];Ox2a5=Ox2a5+OxOb47c[37]+TargetUrl[OxOb47c[0]]+OxOb47c[38];Ox2a5=Ox2a5+OxOb47c[39]+Ox30f+OxOb47c[38];Ox2a5=Ox2a5+OxOb47c[40]+Ox311+OxOb47c[38];Ox2a5=Ox2a5+OxOb47c[41]+Ox310+OxOb47c[38];Ox2a5=Ox2a5+OxOb47c[42]+windowlessvideo+OxOb47c[38];Ox2a5=Ox2a5+Ox2ca+OxOb47c[43];Ox2ca=Ox2a5;editor.PasteHTML(Ox2ca);Window_CloseDialog(window);} ;function do_Close(){divpreview[OxOb47c[44]]=OxOb47c[1];Window_CloseDialog(window);} ;function Zoom_In(){if(divpreview[OxOb47c[50]][OxOb47c[49]]!=0){divpreview[OxOb47c[50]][OxOb47c[49]]*=1.2;} else {divpreview[OxOb47c[50]][OxOb47c[49]]=1.2;} ;} ;function Zoom_Out(){if(divpreview[OxOb47c[50]][OxOb47c[49]]!=0){divpreview[OxOb47c[50]][OxOb47c[49]]*=0.8;} else {divpreview[OxOb47c[50]][OxOb47c[49]]=0.8;} ;} ;function Actualsize(){divpreview[OxOb47c[50]][OxOb47c[49]]=1;do_preview();} ;if(Browser_IsIE7()){var _dialogPromptID=null;function IEprompt(Ox112,Ox113,Ox114){that=this;this[OxOb47c[51]]=function (Ox115){val=document.getElementById(OxOb47c[52])[OxOb47c[0]];_dialogPromptID[OxOb47c[50]][OxOb47c[53]]=OxOb47c[54];document.getElementById(OxOb47c[52])[OxOb47c[0]]=OxOb47c[1];if(Ox115){val=OxOb47c[1];} ;Ox112(val);return false;} ;if(Ox114==undefined){Ox114=OxOb47c[1];} ;if(_dialogPromptID==null){var Ox116=document.getElementsByTagName(OxOb47c[55])[0];tnode=document.createElement(OxOb47c[56]);tnode[OxOb47c[57]]=OxOb47c[58];Ox116.appendChild(tnode);_dialogPromptID=document.getElementById(OxOb47c[58]);tnode=document.createElement(OxOb47c[56]);tnode[OxOb47c[57]]=OxOb47c[59];Ox116.appendChild(tnode);_dialogPromptID[OxOb47c[50]][OxOb47c[60]]=OxOb47c[61];_dialogPromptID[OxOb47c[50]][OxOb47c[62]]=OxOb47c[63];_dialogPromptID[OxOb47c[50]][OxOb47c[64]]=OxOb47c[65];_dialogPromptID[OxOb47c[50]][OxOb47c[66]]=OxOb47c[67];_dialogPromptID[OxOb47c[50]][OxOb47c[68]]=OxOb47c[69];} ;var Ox117=OxOb47c[70]+InputRequired+OxOb47c[71];Ox117+=OxOb47c[72]+Ox113+OxOb47c[73];Ox117+=OxOb47c[74];Ox117+=OxOb47c[75]+Ox114+OxOb47c[76];Ox117+=OxOb47c[77];Ox117+=OxOb47c[78]+OK+OxOb47c[79];Ox117+=OxOb47c[80];Ox117+=OxOb47c[81]+Cancel+OxOb47c[82];Ox117+=OxOb47c[83];_dialogPromptID[OxOb47c[44]]=Ox117;_dialogPromptID[OxOb47c[50]][OxOb47c[84]]=OxOb47c[85];_dialogPromptID[OxOb47c[50]][OxOb47c[86]]=parseInt((document[OxOb47c[55]][OxOb47c[87]]-315)/2)+OxOb47c[88];_dialogPromptID[OxOb47c[50]][OxOb47c[53]]=OxOb47c[89];var Ox118=document.getElementById(OxOb47c[52]);try{var Ox119=Ox118.createTextRange();Ox119.collapse(false);Ox119.select();} catch(x){Ox118.focus();} ;} ;} ;if(!Browser_IsWinIE()){btn_zoom_in[OxOb47c[50]][OxOb47c[53]]=btn_zoom_out[OxOb47c[50]][OxOb47c[53]]=btn_Actualsize[OxOb47c[50]][OxOb47c[53]]=OxOb47c[54];} else {} ;if(CreateDir){CreateDir[OxOb47c[90]]= new Function(OxOb47c[91]);} ;if(btn_zoom_in){btn_zoom_in[OxOb47c[90]]= new Function(OxOb47c[91]);} ;if(btn_zoom_out){btn_zoom_out[OxOb47c[90]]= new Function(OxOb47c[91]);} ;if(btn_Actualsize){btn_Actualsize[OxOb47c[90]]= new Function(OxOb47c[91]);} ;