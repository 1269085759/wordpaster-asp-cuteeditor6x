var OxO1426=["value","","onload","upload_image","contentWindow","browse_Frame","height","style","250px","btn_CreateDir","btn_zoom_in","btn_zoom_out","btn_Actualsize","TargetUrl","framepreview","innerHTML","HTML","document","body","DIV","innerText","?","\x26#",";","zoom","wrapupPrompt","iepromptfield","display","none","div","id","IEPromptBox","promptBlackout","border","1px solid #b0bec7","backgroundColor","#f0f0f0","position","absolute","width","330px","zIndex","100","\x3Cdiv style=\x22width: 100%; padding-top:3px;background-color: #DCE7EB; font-family: verdana; font-size: 10pt; font-weight: bold; height: 22px; text-align:center; background:url(../Images/formbg2.gif) repeat-x left top;\x22\x3E","\x3C/div\x3E","\x3Cdiv style=\x22padding: 10px\x22\x3E","\x3CBR\x3E\x3CBR\x3E","\x3Cform action=\x22\x22 onsubmit=\x22return wrapupPrompt()\x22\x3E","\x3Cinput id=\x22iepromptfield\x22 name=\x22iepromptdata\x22 type=text size=46 value=\x22","\x22\x3E","\x3Cbr\x3E\x3Cbr\x3E\x3Ccenter\x3E","\x3Cinput type=\x22submit\x22 value=\x22\x26nbsp;\x26nbsp;\x26nbsp;","\x26nbsp;\x26nbsp;\x26nbsp;\x22\x3E","\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;","\x3Cinput type=\x22button\x22 onclick=\x22wrapupPrompt(true)\x22 value=\x22\x26nbsp;","\x26nbsp;\x22\x3E","\x3C/form\x3E\x3C/div\x3E","top","100px","left","offsetWidth","px","block","onmouseover","CuteEditor_ColorPicker_ButtonOver(this)"];setMouseOver();function setMouseOver(){} ;function ResetFields(){TargetUrl[OxO1426[0]]=OxO1426[1];} ;function reset_hiddens(){} ;Event_Attach(window,OxO1426[2],reset_hiddens);var upload_image=Window_GetElement(window,OxO1426[3],true);upload_image=upload_image[OxO1426[4]];var browse_Frame=Window_GetElement(window,OxO1426[5],true);if(!Browser_IsWinIE()){browse_Frame[OxO1426[7]][OxO1426[6]]=OxO1426[8];} ;browse_Frame=browse_Frame[OxO1426[4]];var btn_CreateDir=Window_GetElement(window,OxO1426[9],true);var btn_zoom_in=Window_GetElement(window,OxO1426[10],true);var btn_zoom_out=Window_GetElement(window,OxO1426[11],true);var btn_Actualsize=Window_GetElement(window,OxO1426[12],true);var TargetUrl=Window_GetElement(window,OxO1426[13],true);var framepreview=document.getElementById(OxO1426[14])[OxO1426[4]];var editor=Window_GetDialogArguments(window);var htmlcode=OxO1426[1];function do_preview(){try{htmlcode=framepreview[OxO1426[17]].getElementsByTagName(OxO1426[16])[0][OxO1426[15]];} catch(er){htmlcode=framepreview[OxO1426[17]][OxO1426[18]][OxO1426[15]];var div=document.createElement(OxO1426[19]);div[OxO1426[15]]=htmlcode;htmlcode=div[OxO1426[20]];} ;} ;function do_insert(){var Ox127=TargetUrl[OxO1426[0]];if(Ox127.indexOf(OxO1426[21])!=-1){htmlcode=framepreview[OxO1426[17]][OxO1426[18]][OxO1426[15]];} ;htmlcode=htmlcode.replace(/[\u00A0-\u00FF|\u00FF-\uFFFF]/g,function (Ox165,Ox20,Ox13a){return OxO1426[22]+Ox165.charCodeAt(0)+OxO1426[23];} );editor.PasteHTML(htmlcode);Window_CloseDialog(window);} ;function do_Close(){Window_CloseDialog(window);} ;function Zoom_In(){if(framepreview[OxO1426[17]][OxO1426[18]][OxO1426[7]][OxO1426[24]]!=0){framepreview[OxO1426[17]][OxO1426[18]][OxO1426[7]][OxO1426[24]]*=1.1;} else {framepreview[OxO1426[17]][OxO1426[18]][OxO1426[7]][OxO1426[24]]=1.1;} ;} ;function Zoom_Out(){if(framepreview[OxO1426[17]][OxO1426[18]][OxO1426[7]][OxO1426[24]]!=0){framepreview[OxO1426[17]][OxO1426[18]][OxO1426[7]][OxO1426[24]]*=0.8;} else {framepreview[OxO1426[17]][OxO1426[18]][OxO1426[7]][OxO1426[24]]=0.8;} ;} ;function Actualsize(){framepreview[OxO1426[17]][OxO1426[18]][OxO1426[7]][OxO1426[24]]=1;do_preview(htmlcode);} ;if(Browser_IsIE7()){var _dialogPromptID=null;function IEprompt(Ox112,Ox113,Ox114){that=this;this[OxO1426[25]]=function (Ox115){val=document.getElementById(OxO1426[26])[OxO1426[0]];_dialogPromptID[OxO1426[7]][OxO1426[27]]=OxO1426[28];document.getElementById(OxO1426[26])[OxO1426[0]]=OxO1426[1];if(Ox115){val=OxO1426[1];} ;Ox112(val);return false;} ;if(Ox114==undefined){Ox114=OxO1426[1];} ;if(_dialogPromptID==null){var Ox116=document.getElementsByTagName(OxO1426[18])[0];tnode=document.createElement(OxO1426[29]);tnode[OxO1426[30]]=OxO1426[31];Ox116.appendChild(tnode);_dialogPromptID=document.getElementById(OxO1426[31]);tnode=document.createElement(OxO1426[29]);tnode[OxO1426[30]]=OxO1426[32];Ox116.appendChild(tnode);_dialogPromptID[OxO1426[7]][OxO1426[33]]=OxO1426[34];_dialogPromptID[OxO1426[7]][OxO1426[35]]=OxO1426[36];_dialogPromptID[OxO1426[7]][OxO1426[37]]=OxO1426[38];_dialogPromptID[OxO1426[7]][OxO1426[39]]=OxO1426[40];_dialogPromptID[OxO1426[7]][OxO1426[41]]=OxO1426[42];} ;var Ox117=OxO1426[43]+InputRequired+OxO1426[44];Ox117+=OxO1426[45]+Ox113+OxO1426[46];Ox117+=OxO1426[47];Ox117+=OxO1426[48]+Ox114+OxO1426[49];Ox117+=OxO1426[50];Ox117+=OxO1426[51]+OK+OxO1426[52];Ox117+=OxO1426[53];Ox117+=OxO1426[54]+Cancel+OxO1426[55];Ox117+=OxO1426[56];_dialogPromptID[OxO1426[15]]=Ox117;_dialogPromptID[OxO1426[7]][OxO1426[57]]=OxO1426[58];_dialogPromptID[OxO1426[7]][OxO1426[59]]=parseInt((document[OxO1426[18]][OxO1426[60]]-315)/2)+OxO1426[61];_dialogPromptID[OxO1426[7]][OxO1426[27]]=OxO1426[62];var Ox118=document.getElementById(OxO1426[26]);try{var Ox119=Ox118.createTextRange();Ox119.collapse(false);Ox119.select();} catch(x){Ox118.focus();} ;} ;} ;if(!Browser_IsWinIE()){btn_zoom_in[OxO1426[7]][OxO1426[27]]=btn_zoom_out[OxO1426[7]][OxO1426[27]]=btn_Actualsize[OxO1426[7]][OxO1426[27]]=OxO1426[28];} ;if(btn_CreateDir){btn_CreateDir[OxO1426[63]]= new Function(OxO1426[64]);} ;if(btn_zoom_in){btn_zoom_in[OxO1426[63]]= new Function(OxO1426[64]);} ;if(btn_zoom_out){btn_zoom_out[OxO1426[63]]= new Function(OxO1426[64]);} ;if(btn_Actualsize){btn_Actualsize[OxO1426[63]]= new Function(OxO1426[64]);} ;