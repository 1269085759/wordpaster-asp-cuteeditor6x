var OxOeae5=["contains","parentNode","selection","document","type","None","Text","body","rangeCount","window","Control","anchorOffset","childNodes","anchorNode","isCollapsed","focusNode","length","nodeType","nodeName","INPUT","TEXTAREA","BUTTON","IMG","SELECT","TABLE","position","style","absolute","relative","top","contentWindow","contentDocument","parentWindow","id","frames","frameElement","//TODO:frame contentWindow not found?","iframe","editor","img","onload","src","","src_cetemp","contentEditable","designMode","on","clearAttributes","marginTop","0","marginLeft","color","black","background","white","unselectable","2D-Position","LiveResize","innerHTML","outerHTML","MAP","name","useMap","#","areas","href","target","alt","coords",",","\x3Cimg id=\x27myIMAGE","\x27 border=1 src=\x27Images/space.gif\x27 title=\x27","\x27 style=\x27position:absolute;left:","px;top:","px;width:","px;height:","px;z-index:","\x27\x3E","MapLink.asp","dialogWidth:380px;dialogHeight:200px;help:no;scroll:no;status:no;resizable:0;","zoom","width","height","\x27  border=1 src=\x27Images/space.gif\x27 title=\x27","\x27 style=\x27position:absolute;z-index:",";width:20;height:20;left:",";top:","myIMAGE","\x3Carea shape=\x27rect\x27 coords=\x27","\x27","href=\x27","\x27 ","target=\x27","alt=\x27","\x3E","PasteHTML","\x3Cmap name=\x27","\x3C/map\x3E","off","AutoMap","display","img_zoom_in","none","img_zoom_out","img_bestfit","img_actualsize"];function Element_Contains(element,Ox6e){if(!Browser_IsOpera()){if(element[OxOeae5[0]]){return element.contains(Ox6e);} ;} ;for(;Ox6e!=null;Ox6e=Ox6e[OxOeae5[1]]){if(element==Ox6e){return true;} ;} ;return false;} ;function Window_CreateSelectionRange(Ox95){var Ox119;if(Browser_UseIESelection()){var Ox17=Ox95[OxOeae5[3]][OxOeae5[2]];if(Ox17[OxOeae5[4]]==OxOeae5[5]||Ox17[OxOeae5[4]]==OxOeae5[6]){Ox119=Ox17.createRange();} else {Ox119=document[OxOeae5[7]].createTextRange();Ox119.moveToElement(Ox17.createRange().item(0));} ;} else {var Ox17=Ox95.getSelection();if(Ox17[OxOeae5[8]]==0){Ox119=Ox95[OxOeae5[3]].createRange();} else {Ox119=Ox17.getRangeAt(0).cloneRange();} ;} ;Ox119[OxOeae5[9]]=Ox95;return Ox119;} ;function Window_GetSelectionNode(Ox95){var Ox6e=Window_GetSelectionNode_Core(Ox95);if(Ox6e==Ox95[OxOeae5[3]][OxOeae5[7]]){return null;} ;if(!Element_Contains(Ox95[OxOeae5[3]].body,Ox6e)){return null;} ;return Ox6e;} ;function Window_GetSelectionNode_Core(Ox95){var Ox17;if(Browser_UseIESelection()){Ox17=Ox95[OxOeae5[3]][OxOeae5[2]];if(Ox17[OxOeae5[4]]==OxOeae5[5]||Ox17[OxOeae5[4]]==OxOeae5[6]){return Ox17.createRange().parentElement();} ;return Ox17.createRange().item(0);} ;var Ox17=Ox95.getSelection();if(Window_GetSelectionType(Ox95)==OxOeae5[10]){return Ox17[OxOeae5[13]][OxOeae5[12]][Ox17[OxOeae5[11]]];} ;if(Ox17[OxOeae5[14]]){return Ox17[OxOeae5[13]];} ;if(Ox17[OxOeae5[13]]==Ox17[OxOeae5[15]]){return Ox17[OxOeae5[13]];} ;var p=Ox17[OxOeae5[13]];var Ox245=p[OxOeae5[12]];for(var i=0;i<Ox245[OxOeae5[16]];i++){var Ox13a=Ox245.item(i);if(Ox17.containsNode(Ox13a,true)){if(i!=0&&Ox17.containsNode(Ox245.item(i-1),false)){continue ;} ;if(i<Ox245[OxOeae5[16]]-1&&Ox17.containsNode(Ox245.item(i+1),false)){continue ;} ;return Ox13a;} ;} ;if(Ox17[OxOeae5[8]]==1){return Range_GetParentNode(Window_CreateSelectionRange(Ox95));} ;if(!Element_Contains(Ox95[OxOeae5[3]].body,Ox17.anchorNode)){return null;} ;return Element_GetSameParent(Ox17.anchorNode,Ox17.focusNode);} ;function Window_GetSelectionElement(Ox95){var Ox6e=Window_GetSelectionNode(Ox95);if(Ox6e==null){return null;} ;if(Ox6e[OxOeae5[17]]==1){return Ox6e;} ;return Ox6e[OxOeae5[1]];} ;function Window_GetSelectionType(Ox95){if(Browser_UseIESelection()){return Ox95[OxOeae5[3]][OxOeae5[2]][OxOeae5[4]];} ;var Ox17=Ox95.getSelection();if(Ox17[OxOeae5[14]]){return OxOeae5[6];} ;if(Ox17[OxOeae5[13]]!=Ox17[OxOeae5[15]]){return OxOeae5[6];} ;var p=Ox17[OxOeae5[13]];var Ox245=p[OxOeae5[12]];for(var i=0;i<Ox245[OxOeae5[16]];i++){var Ox13a=Ox245.item(i);if(Ox13a[OxOeae5[17]]!=1){continue ;} ;if(Ox17.containsNode(Ox13a,true)){if(i!=0&&Ox17.containsNode(Ox245.item(i-1),false)){continue ;} ;if(i<Ox245[OxOeae5[16]]-1&&Ox17.containsNode(Ox245.item(i+1),false)){continue ;} ;if(Element_IsBlockControl(Ox13a)){return OxOeae5[10];} ;return OxOeae5[6];} ;} ;return OxOeae5[6];} ;function Element_IsBlockControl(element){var name=element[OxOeae5[18]];if(name==OxOeae5[19]){return true;} ;if(name==OxOeae5[20]){return true;} ;if(name==OxOeae5[21]){return true;} ;if(name==OxOeae5[22]){return true;} ;if(name==OxOeae5[23]){return true;} ;if(name==OxOeae5[24]){return true;} ;var Ox19=element[OxOeae5[26]][OxOeae5[25]];if(Ox19==OxOeae5[27]||Ox19==OxOeae5[28]){return true;} ;return false;} ;function Window_GetDialogTop(Ox95){return Ox95[OxOeae5[29]];} ;function Frame_GetContentWindow(Ox24b){if(Ox24b[OxOeae5[30]]){return Ox24b[OxOeae5[30]];} ;if(Ox24b[OxOeae5[31]]){if(Ox24b[OxOeae5[31]][OxOeae5[32]]){return Ox24b[OxOeae5[31]][OxOeae5[32]];} ;} ;var Ox95;if(Ox24b[OxOeae5[33]]){Ox95=window[OxOeae5[34]][Ox24b[OxOeae5[33]]];if(Ox95){return Ox95;} ;} ;var len=window[OxOeae5[34]][OxOeae5[16]];for(var i=0;i<len;i++){Ox95=window[OxOeae5[34]][i];if(Ox95[OxOeae5[35]]==Ox24b){return Ox95;} ;if(Ox95[OxOeae5[3]]==Ox24b[OxOeae5[31]]){return Ox95;} ;} ;Debug_Todo(OxOeae5[36]);} ;var iframe=Window_GetElement(window,OxOeae5[37],true);var iframe_win=Frame_GetContentWindow(iframe);var obj=Window_GetDialogArguments(window);var editor=obj[OxOeae5[38]];var editwin=obj[OxOeae5[9]];var editdoc=obj[OxOeae5[3]];var oImg=obj[OxOeae5[39]];var oMap=null;var aMapName= new Array();var aLeft= new Array();var aTop= new Array();var aWidth= new Array();var aHeight= new Array();var aHref= new Array();var aTarget= new Array();var aTitle= new Array();var aCoords= new Array();window[OxOeae5[40]]=function window_onload(){var src;src=oImg.getAttribute(OxOeae5[41])+OxOeae5[42];if(oImg.getAttribute(OxOeae5[43])){src=oImg.getAttribute(OxOeae5[43])+OxOeae5[42];} ;oImg[OxOeae5[41]]=src;if(Browser_IsWinIE()){iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[44]]=true;} else {iframe_win[OxOeae5[3]][OxOeae5[45]]=OxOeae5[46];iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[44]]=true;} ;iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[47]];iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[26]][OxOeae5[48]]=OxOeae5[49];iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[26]][OxOeae5[50]]=OxOeae5[49];iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[26]][OxOeae5[51]]=OxOeae5[52];iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[26]][OxOeae5[53]]=OxOeae5[54];oImg[OxOeae5[55]]=OxOeae5[46];if(Browser_IsWinIE()){iframe_win[OxOeae5[3]].execCommand(OxOeae5[56],true,true);iframe_win[OxOeae5[3]].execCommand(OxOeae5[57],true,true);} ;iframe_win.focus();if(Browser_IsWinIE()){iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[58]]=oImg[OxOeae5[59]];} else {iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[58]]=outerHTML(oImg);} ;var Ox259=editdoc[OxOeae5[7]].getElementsByTagName(OxOeae5[60]);for(var i=0;i<Ox259[OxOeae5[16]];i++){aMapName[i]=Ox259[i][OxOeae5[61]].toUpperCase();} ;var Ox25a=oImg[OxOeae5[62]];if(Ox25a!=OxOeae5[42]){Ox25a=Ox25a.toUpperCase();for(var i=0;i<Ox259[OxOeae5[16]];i++){if((OxOeae5[63]+aMapName[i])==Ox25a){oMap=Ox259[i];} ;} ;} ;if(oMap){for(var i=0;i<oMap[OxOeae5[64]][OxOeae5[16]];i++){aHref[i]=oMap[OxOeae5[64]][i][OxOeae5[65]];aTarget[i]=oMap[OxOeae5[64]][i][OxOeae5[66]];aTitle[i]=oMap[OxOeae5[64]][i][OxOeae5[67]];aCoords[i]=oMap[OxOeae5[64]][i][OxOeae5[68]];var Ox165=aCoords[i].split(OxOeae5[69]);aLeft[i]=parseInt(Ox165[0]);aTop[i]=parseInt(Ox165[1]);aWidth[i]=parseInt(Ox165[2])-aLeft[i];aHeight[i]=parseInt(Ox165[3])-aTop[i];iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[58]]+=OxOeae5[70]+i+OxOeae5[71]+AddLinktoImageMap+OxOeae5[72]+aLeft[i]+OxOeae5[73]+aTop[i]+OxOeae5[74]+aWidth[i]+OxOeae5[75]+aHeight[i]+OxOeae5[76]+(i+1)+OxOeae5[77];} ;} ;} ;function SearchSelectionElement(Ox25c){var body=iframe_win[OxOeae5[3]][OxOeae5[7]];for(var Ox1f=Window_GetSelectionElement(iframe_win);Element_Contains(body,Ox1f);Ox1f=Ox1f[OxOeae5[1]]){if(Ox1f[OxOeae5[18]]==Ox25c){return Ox1f;} ;} ;return null;} ;function Addlink(){var img=SearchSelectionElement(OxOeae5[22]);if(!img){return ;} ;function Ox260(arr){if(arr){aHref[Ox262]=arr[0];aTarget[Ox262]=arr[1];aTitle[Ox262]=arr[2];} ;} ;var Ox261=img[OxOeae5[33]];var Ox262=parseInt(Ox261.substr(7));var obj={editor:editor,href:aHref[Ox262],target:aTarget[Ox262],title:aTitle[Ox262]};editor.SetNextDialogWindow(window);editor.ShowDialog(Ox260,OxOeae5[78]+query_string,obj,OxOeae5[79]);} ;function do_Close(){Window_SetDialogReturnValue(window,null);Window_CloseDialog(window);} ;function Zoom_In(){if(iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[26]][OxOeae5[80]]!=0){iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[26]][OxOeae5[80]]*=1.2;} else {iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[26]][OxOeae5[80]]=1.2;} ;} ;function Zoom_Out(){if(iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[26]][OxOeae5[80]]!=0){iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[26]][OxOeae5[80]]*=0.8;} else {iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[26]][OxOeae5[80]]=0.8;} ;} ;function BestFit(){if(!oImg){return ;} ;var Ox266=280;var Ox14=290;iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[26]][OxOeae5[80]]=1/Math.max(oImg[OxOeae5[81]]/Ox14,oImg[OxOeae5[82]]/Ox266);} ;function Actualsize(){iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[26]][OxOeae5[80]]=1;} ;function newMap(){var Ox93=aHref[OxOeae5[16]];var Ox269=(oImg[OxOeae5[81]]-20)*0.5;var Ox23c=(oImg[OxOeae5[82]]-20)*0.5;aHref[Ox93]=OxOeae5[42];aTarget[Ox93]=OxOeae5[42];aTitle[Ox93]=OxOeae5[42];iframe_win[OxOeae5[3]][OxOeae5[7]][OxOeae5[58]]+=OxOeae5[70]+Ox93+OxOeae5[83]+AddLinktoImageMap+OxOeae5[84]+(Ox93+1)+OxOeae5[85]+Ox269+OxOeae5[86]+Ox23c+OxOeae5[77];iframe_win.scrollBy(0,0);iframe_win.focus();} ;function do_insert(){var Ox20=false;for(var i=0;i<aHref[OxOeae5[16]];i++){var obj=Window_GetElement(iframe_win,OxOeae5[87]+i,false);if(obj){Ox20=true;} ;} ;if(Ox20){var Ox17c=OxOeae5[42];for(var i=0;i<aHref[OxOeae5[16]];i++){var obj=Window_GetElement(iframe_win,OxOeae5[87]+i,false);if(obj){var Ox26a=parseInt(obj[OxOeae5[26]].left);var Ox26b=parseInt(obj[OxOeae5[26]].top);var Ox26c=parseInt(obj[OxOeae5[26]].width);var Ox26d=parseInt(obj[OxOeae5[26]].height);var Ox26e=Ox26a+Ox26c;var Ox26f=Ox26b+Ox26d;Ox17c+=OxOeae5[88]+Ox26a+OxOeae5[69]+Ox26b+OxOeae5[69]+Ox26e+OxOeae5[69]+Ox26f+OxOeae5[89];if(aHref[i]!=OxOeae5[42]){Ox17c+=OxOeae5[90]+aHref[i]+OxOeae5[91];} ;if((aTarget[i]!=OxOeae5[42])&&aTarget[i]){Ox17c+=OxOeae5[92]+aTarget[i]+OxOeae5[91];} ;if(aTitle[i]!=OxOeae5[42]&&aTitle[i]!=null){Ox17c+=OxOeae5[93]+aTitle[i]+OxOeae5[91];} ;Ox17c+=OxOeae5[94];} ;} ;if(oMap){oMap[OxOeae5[58]]=Ox17c;} else {var Ox25a=getAutoMapName();oImg[OxOeae5[62]]=OxOeae5[63]+Ox25a;editor.ExecCommand(OxOeae5[95],false,OxOeae5[96]+Ox25a+OxOeae5[77]+Ox17c+OxOeae5[97]);} ;} else {if(oMap){if(Browser_IsWinIE()){oMap[OxOeae5[59]]=OxOeae5[42];} ;} ;oImg[OxOeae5[62]]=OxOeae5[42];} ;oImg[OxOeae5[55]]=OxOeae5[98];oImg.removeAttribute(OxOeae5[55]);if(!Browser_IsWinIE()){editor.InsertElement(oImg);} ;Window_CloseDialog(window);} ;function getAutoMapName(){for(var i=1;true;i++){var Ox2a=OxOeae5[99]+i;if(isValidMapName(Ox2a)){return Ox2a;} ;} ;} ;function isValidMapName(Ox61){Ox61=Ox61.toUpperCase();for(var i=0;i<aMapName[OxOeae5[16]];i++){if(aMapName[i]==Ox61){return false;} ;} ;return true;} ;function do_Close(){oImg.removeAttribute(OxOeae5[55]);Window_CloseDialog(window);} ;if(!Browser_IsWinIE()){Window_GetElement(window,OxOeae5[101],true)[OxOeae5[26]][OxOeae5[100]]=OxOeae5[102];Window_GetElement(window,OxOeae5[103],true)[OxOeae5[26]][OxOeae5[100]]=OxOeae5[102];Window_GetElement(window,OxOeae5[104],true)[OxOeae5[26]][OxOeae5[100]]=OxOeae5[102];Window_GetElement(window,OxOeae5[105],true)[OxOeae5[26]][OxOeae5[100]]=OxOeae5[102];} ;