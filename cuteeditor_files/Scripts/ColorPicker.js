var OxOad5f=["id","_colorpickerNextId","colorpicker_","=","; path=/;"," expires=",";","cookie","length","","#ffffff","CECC","RecentColors","#","attachEvent","Command","SELECT","all","visibility","currentStyle","hidden","runtimeStyle","style","_visibility","#ff0000","#993300","#333300","#003300","#003366","#000080","#333399","#333333","#800000","#FF6600","#808000","#008000","#008080","#0000FF","#666699","#808080","#FF0000","#FF9900","#99CC00","#339966","#33CCCC","#3366FF","#800080","#999999","#FF00FF","#FFCC00","#FFFF00","#00FF00","#00FFFF","#00CCFF","#993366","#C0C0C0","#FF99CC","#FFCC99","#FFFF99","#CCFFCC","#CCFFFF","#99CCFF","#CC99FF","#FFFFFF","ResourceDir","/Dialogs/ColorPicker.asp?","UseStandardDialog","true","\x26Dialog=Standard","UC=","Culture","\x26setting=","EditorSetting","_cphtc_sel","oncolorselect","_cphtc_dlg","dialogWidth:525px;dialogHeight:440px;help:0;status:0;resizable:1","parentNode","DIV","cssText","width:140px;cursor:default;position:absolute;z-index:88888888;background-color:white;border:0px;overflow:visible;","\x3Ctable cellpadding=0 cellspacing=5 style=\x27width:140px;font-family: Verdana; font-size: 6px; BORDER: #666666 1px solid;\x27 bgcolor=#f9f8f7\x3E\x3Ctr\x3E\x3Ctd\x3E","\x3Ctable cellpadding=0 cellspacing=2 style=\x27font-size: 3px;\x27\x3E","\x3Ctr\x3E","\x3Ctd colspan=10 align=center style=\x22padding:1px;border:solid 1px #f9f8f7;margin:1px\x22 onclick=\x22document.getElementById(\x27","\x27)._cphtc_sel(this.getAttribute(\x27ColorValue\x27))\x22  ColorValue=\x22\x22 onmouseover=\x22CuteEditor_ColorPicker_ButtonOver(this);\x22\x3E","\x3Ctable cellspacing=0 cellpadding=5 border=0 width=98% style=\x22font-size:3px;\x22\x3E","\x3Ctr\x3E\x3Ctd width=18\x3E\x3Cdiv style=\x22background-color:#000000; border:solid 1px #808080; width:12px; height:12px; font-size: 3px;\x22\x3E\x26nbsp;\x3C/div\x3E\x3C/td\x3E\x3Ctd align=center style=\x22font:normal 11px verdana;\x22\x3E\x26nbsp;Automatic\x3C/td\x3E\x3C/tr\x3E","\x3C/table\x3E","\x3C/td\x3E","\x3C/tr\x3E","\x3Ctd title="," align=center width=12 height=12 style=\x22width:12px; height:12px;padding:1px;border:solid 1px #f9f8f7;\x22 onmouseover=\x22CuteEditor_ColorPicker_ButtonOver(this);\x22 ColorValue=\x22","\x22 onclick=\x22document.getElementById(\x27","\x27)._cphtc_sel(this.getAttribute(\x27ColorValue\x27));\x22\x3E","\x3Cdiv style=\x22background-color:","; border:solid 1px #808080; width:12px; height:12px; font-size: 1px;\x22\x3E\x26nbsp;\x3C/div\x3E","\x3Ctd colspan=10 align=center style=\x22padding:1px;border:solid 1px #f9f8f7;\x22 onmouseover=\x22CuteEditor_ColorPicker_ButtonOver(this);\x22 onclick=\x22document.getElementById(\x27","\x27)._cphtc_dlg();\x22\x3E","\x3Ctr\x3E\x3Ctd width=18\x3E\x3Cdiv style=\x22background-color:#000000; border:solid 1px #808080; width:12px; height:12px;font-size: 3px;\x22\x3E\x3C/div\x3E\x3C/td\x3E\x3Ctd align=center style=\x22font-size:11px; vertical-Align:middle\x22\x3EMore Colors\x3C/td\x3E\x3C/tr\x3E","innerHTML","body","document","display","block","top","offsetHeight","left","px","unselectable","on","focus","onclick","none","compatMode","CSS1Compat","documentElement","offsetParent","offsetLeft","scrollLeft","offsetTop","scrollTop","getBoundingClientRect","clientLeft","clientTop","defaultView","ownerDocument","nodeType","position","absolute","relative","clientWidth","clientHeight","offsetWidth","onmousedown","onmousemove","onmouseover","onmouseout","Unregister","onlosecapture","capturemanager","element","AddElement","DelElement","FireLoseCapture","\x3CDIV style=\x27width:0px;height:0px;left:0px;top:0px;position:absolute\x27\x3E","afterBegin","click","blur","addEventListener","Register","popupColorPicker"];function CuteEditorColorPickerInitialize(element,editor){if(!element[OxOad5f[0]]){var Ox4c=window[OxOad5f[1]]||0;element.setAttribute(OxOad5f[0],OxOad5f[2]+Ox4c);window[OxOad5f[1]]=Ox4c+1;} ;function SetCookie(name,Ox4f,Ox50){var Ox51=name+OxOad5f[3]+escape(Ox4f)+OxOad5f[4];if(Ox50){var Ox52= new Date();Ox52.setSeconds(Ox52.getSeconds()+Ox50);Ox51+=OxOad5f[5]+Ox52.toUTCString()+OxOad5f[6];} ;document[OxOad5f[7]]=Ox51;} ;function GetCookie(name){var Ox54=document[OxOad5f[7]].split(OxOad5f[6]);for(var i=0;i<Ox54[OxOad5f[8]];i++){var Ox55=Ox54[i].split(OxOad5f[3]);if(name==Ox55[0].replace(/\s/g,OxOad5f[9])){return unescape(Ox55[1]);} ;} ;} ;function GetCookieDictionary(){var Ox57={};var Ox54=document[OxOad5f[7]].split(OxOad5f[6]);for(var i=0;i<Ox54[OxOad5f[8]];i++){var Ox55=Ox54[i].split(OxOad5f[3]);Ox57[Ox55[0].replace(/\s/g,OxOad5f[9])]=unescape(Ox55[1]);} ;return Ox57;} ;function GetCookieArray(){var arr=[];var Ox54=document[OxOad5f[7]].split(OxOad5f[6]);for(var i=0;i<Ox54[OxOad5f[8]];i++){var Ox55=Ox54[i].split(OxOad5f[3]);var Ox51={name:Ox55[0].replace(/\s/g,OxOad5f[9]),value:unescape(Ox55[1])};arr[arr[OxOad5f[8]]]=Ox51;} ;return arr;} ;var __defaultcustomlist=[OxOad5f[10],OxOad5f[10],OxOad5f[10],OxOad5f[10],OxOad5f[10],OxOad5f[10],OxOad5f[10],OxOad5f[10]];function GetCustomColors(){var Ox5c=__defaultcustomlist.concat();for(var i=0;i<8;i++){var Ox4=GetCustomColor(i);if(Ox4){Ox5c[i]=Ox4;} ;} ;return Ox5c;} ;function GetCustomColor(Ox5e){return GetCookie(OxOad5f[11]+Ox5e);} ;function SetCustomColor(Ox5e,Ox4){SetCookie(OxOad5f[11]+Ox5e,Ox4,60*60*24*365);} ;function Ox60(){var arr=GetCustomColors();var Ox61=GetCookie(OxOad5f[12]);if(!Ox61){return arr;} ;for(var i=0;i<arr[OxOad5f[8]];i++){var Ox62=Ox61.substr(i*6,6);if(Ox62&&Ox62[OxOad5f[8]]==6){arr[i]=OxOad5f[13]+Ox62;} ;} ;return arr;} ;function Ox63(){if(!document[OxOad5f[14]]){return ;} ;var Ox64=element.getAttribute(OxOad5f[15]);if(Ox64!=null&&Ox64!=OxOad5f[9]){return ;} ;selects=[];var Ox16=document[OxOad5f[17]].tags(OxOad5f[16]);for(var i=0;i<Ox16[OxOad5f[8]];i++){var Ox17=Ox16[i];if(Ox17[OxOad5f[19]][OxOad5f[18]]!=OxOad5f[20]){selects[selects[OxOad5f[8]]]=Ox17;var Ox18=Ox17[OxOad5f[21]]||Ox17[OxOad5f[22]];Ox18[OxOad5f[23]]=Ox18[OxOad5f[18]];Ox18[OxOad5f[18]]=OxOad5f[20];} ;} ;} ;var colorsArray= new Array(OxOad5f[24],OxOad5f[25],OxOad5f[26],OxOad5f[27],OxOad5f[28],OxOad5f[29],OxOad5f[30],OxOad5f[31],OxOad5f[32],OxOad5f[33],OxOad5f[34],OxOad5f[35],OxOad5f[36],OxOad5f[37],OxOad5f[38],OxOad5f[39],OxOad5f[40],OxOad5f[41],OxOad5f[42],OxOad5f[43],OxOad5f[44],OxOad5f[45],OxOad5f[46],OxOad5f[47],OxOad5f[48],OxOad5f[49],OxOad5f[50],OxOad5f[51],OxOad5f[52],OxOad5f[53],OxOad5f[54],OxOad5f[55],OxOad5f[56],OxOad5f[57],OxOad5f[58],OxOad5f[59],OxOad5f[60],OxOad5f[61],OxOad5f[62],OxOad5f[63]);var Ox65=colorsArray;var ShowMoreColors=true;var dlgurl=editor.GetScriptProperty(OxOad5f[64])+OxOad5f[65]+Ox66();function Ox66(){var Ox2a=OxOad5f[9];if(editor.GetScriptProperty(OxOad5f[66])==OxOad5f[67]){Ox2a=OxOad5f[68];} ;return OxOad5f[69]+editor.GetScriptProperty(OxOad5f[70])+Ox2a+OxOad5f[71]+editor.GetScriptProperty(OxOad5f[72]);} ;element[OxOad5f[73]]=function (Ox4){_color=Ox4;if(element[OxOad5f[74]]){element.oncolorselect(Ox4);} ;} ;element[OxOad5f[75]]=function (){CloseDiv();_colorpickerDialogFeature=OxOad5f[76];editor.ShowDialog(Ox67,dlgurl,{editor:editor},_colorpickerDialogFeature);function Ox67(Ox6){if(Ox6!=null&&Ox6!==false){element._cphtc_sel(Ox6);} ;} ;} ;var _color=OxOad5f[9];function _get_selectedColor(){return _color;} ;function _set_selectedColor(Ox9){_color=Ox9;} ;var div;var selects=[];var isopen=false;function _mtd_onclick(){_mtd_popupColor();} ;function _mtd_popupColor(){if(div!=null){div[OxOad5f[77]].removeChild(div);div=null;} ;if(div==null){colorsArray=Ox65;var Ox5c=Ox60();colorsArray=Ox65.concat(Ox5c);div=document.createElement(OxOad5f[78]);div[OxOad5f[22]][OxOad5f[79]]=OxOad5f[80];var Ox12=OxOad5f[9];var Ox13=colorsArray[OxOad5f[8]];var Ox14=8;Ox12+=OxOad5f[81];Ox12+=OxOad5f[82];Ox12+=OxOad5f[83];Ox12+=OxOad5f[84]+element[OxOad5f[0]]+OxOad5f[85];Ox12+=OxOad5f[86];Ox12+=OxOad5f[87];Ox12+=OxOad5f[88];Ox12+=OxOad5f[89];Ox12+=OxOad5f[90];for(var i=0;i<Ox13;i++){if((i%Ox14)==0){Ox12+=OxOad5f[83];} ;Ox12+=OxOad5f[91]+colorsArray[i]+OxOad5f[92]+colorsArray[i]+OxOad5f[93]+element[OxOad5f[0]]+OxOad5f[94];Ox12+=OxOad5f[95]+colorsArray[i]+OxOad5f[96];Ox12+=OxOad5f[89];if(((i+1)>=Ox13)||(((i+1)%Ox14)==0)){Ox12+=OxOad5f[90];} ;} ;if(ShowMoreColors){Ox12+=OxOad5f[83];Ox12+=OxOad5f[97]+element[OxOad5f[0]]+OxOad5f[98];Ox12+=OxOad5f[86];Ox12+=OxOad5f[99];Ox12+=OxOad5f[88];Ox12+=OxOad5f[89];Ox12+=OxOad5f[90];} ;Ox12+=OxOad5f[88];div[OxOad5f[100]]=Ox12;window[OxOad5f[102]][OxOad5f[101]].insertBefore(div,window[OxOad5f[102]][OxOad5f[101]].firstChild);} ;if(isopen){CloseDiv();} ;isopen=true;div[OxOad5f[22]][OxOad5f[103]]=OxOad5f[104];var Ox19=CalcPosition(div,element);Ox19[OxOad5f[105]]+=element[OxOad5f[106]];AdjustMirror(div,element,Ox19);div[OxOad5f[22]][OxOad5f[107]]=Ox19[OxOad5f[107]]+OxOad5f[108];div[OxOad5f[22]][OxOad5f[105]]=Ox19[OxOad5f[105]]+OxOad5f[108];Ox63();if(div[OxOad5f[17]]){var Ox16=div[OxOad5f[17]];for(var i=0;i<Ox16[OxOad5f[8]];i++){Ox16[i][OxOad5f[109]]=OxOad5f[110];} ;} ;if(div[OxOad5f[111]]){div.focus();} ;div[OxOad5f[112]]=Ox68;var Ox1a= new CaptureManager(element,handlelosecapture);Ox1a.AddElement(div);} ;function handlelosecapture(){CloseDiv();} ;function CloseDiv(){CaptureManager.Unregister(element);isopen=false;div[OxOad5f[22]][OxOad5f[103]]=OxOad5f[113];for(var i=0;i<selects[OxOad5f[8]];i++){var Ox17=selects[i];Ox17[OxOad5f[21]][OxOad5f[18]]=Ox17[OxOad5f[21]][OxOad5f[23]];} ;} ;function Ox68(){setTimeout(CloseDiv,100);} ;function GetScrollPosition(Ox1f){var Ox20=window[OxOad5f[102]][OxOad5f[101]];var p=Ox20;if(window[OxOad5f[102]][OxOad5f[114]]==OxOad5f[115]){p=window[OxOad5f[102]][OxOad5f[116]];} ;var Ox69=0;var Ox6a=0;for(var Ox6b=Ox1f;Ox6b!=null&&Ox6b!=Ox20;Ox6b=Ox6b[OxOad5f[117]]){Ox69+=Ox6b[OxOad5f[118]]-Ox6b[OxOad5f[119]];Ox6a+=Ox6b[OxOad5f[120]]-Ox6b[OxOad5f[121]];} ;return {left:Ox69,top:Ox6a};} ;function GetClientPosition(Ox1f){var Ox20=window[OxOad5f[102]][OxOad5f[101]];var p=Ox20;if(window[OxOad5f[102]][OxOad5f[114]]==OxOad5f[115]){p=window[OxOad5f[102]][OxOad5f[116]];} ;if(Ox1f==Ox20){return {left:-p[OxOad5f[119]],top:-p[OxOad5f[121]]};} ;if(Ox1f[OxOad5f[122]]){var Ox20=Ox1f.getBoundingClientRect();return {left:Ox20[OxOad5f[107]]-p[OxOad5f[123]],top:Ox20[OxOad5f[105]]-p[OxOad5f[124]]};} ;var Ox69=0;var Ox6a=0;for(var Ox6b=Ox1f;Ox6b!=null&&Ox6b!=Ox20;Ox6b=Ox6b[OxOad5f[117]]){Ox69+=Ox6b[OxOad5f[118]];Ox6a+=Ox6b[OxOad5f[120]];} ;return {left:Ox69-p[OxOad5f[119]],top:Ox6a-p[OxOad5f[121]]};} ;function GetStandParent(Ox1f){var Ox6c;if(!Ox1f[OxOad5f[19]]){Ox6c=Ox1f[OxOad5f[126]][OxOad5f[125]];} ;for(var Ox24=Ox1f[OxOad5f[77]];Ox24!=null&&Ox24[OxOad5f[127]]==1;Ox24=Ox24[OxOad5f[77]]){var Ox25;if(Ox24[OxOad5f[19]]){Ox25=Ox24[OxOad5f[19]][OxOad5f[128]];} else {Ox6c.getComputedStyle(Ox24,OxOad5f[9]).getPropertyValue(OxOad5f[128]);} ;if(Ox25==OxOad5f[129]||Ox25==OxOad5f[130]){return Ox24;} ;} ;return (Ox1f[OxOad5f[126]]||Ox1f[OxOad5f[102]])[OxOad5f[101]];} ;function CalcPosition(Ox27,Ox1f){var Ox28=GetScrollPosition(Ox1f);var Ox29=GetScrollPosition(GetStandParent(Ox27));var Ox2a=GetStandParent(Ox27);return {left:Ox28[OxOad5f[107]]-Ox29[OxOad5f[107]]-(Ox2a[OxOad5f[123]]||0),top:Ox28[OxOad5f[105]]-Ox29[OxOad5f[105]]-(Ox2a[OxOad5f[124]]||0)};} ;function AdjustMirror(Ox27,Ox1f,Ox19){var Ox2c=window[OxOad5f[102]][OxOad5f[101]][OxOad5f[131]];var Ox2d=window[OxOad5f[102]][OxOad5f[101]][OxOad5f[132]];if(window[OxOad5f[102]][OxOad5f[114]]==OxOad5f[115]){Ox2c=window[OxOad5f[102]][OxOad5f[116]][OxOad5f[131]];Ox2d=window[OxOad5f[102]][OxOad5f[116]][OxOad5f[132]];} ;var Ox2e=Ox27[OxOad5f[133]];var Ox2f=Ox27[OxOad5f[106]];var Ox30=GetClientPosition(GetStandParent(Ox27));var Ox31={left:Ox30[OxOad5f[107]]+Ox19[OxOad5f[107]]+Ox2e/2,top:Ox30[OxOad5f[105]]+Ox19[OxOad5f[105]]+Ox2f/2};var Ox32={left:Ox30[OxOad5f[107]]+Ox19[OxOad5f[107]],top:Ox30[OxOad5f[105]]+Ox19[OxOad5f[105]]};if(Ox1f!=null){var Ox33=GetClientPosition(Ox1f);Ox32={left:Ox33[OxOad5f[107]]+Ox1f[OxOad5f[133]]/2,top:Ox33[OxOad5f[105]]+Ox1f[OxOad5f[106]]/2};} ;var Ox34=true;if(Ox31[OxOad5f[107]]-Ox2e/2<0){if((Ox32[OxOad5f[107]]*2-Ox31[OxOad5f[107]])+Ox2e/2<=Ox2c){Ox31[OxOad5f[107]]=Ox32[OxOad5f[107]]*2-Ox31[OxOad5f[107]];} else {if(Ox34){Ox31[OxOad5f[107]]=Ox2e/2+4;} ;} ;} else {if(Ox31[OxOad5f[107]]+Ox2e/2>Ox2c){if((Ox32[OxOad5f[107]]*2-Ox31[OxOad5f[107]])-Ox2e/2>=0){Ox31[OxOad5f[107]]=Ox32[OxOad5f[107]]*2-Ox31[OxOad5f[107]];} else {if(Ox34){Ox31[OxOad5f[107]]=Ox2c-Ox2e/2-4;} ;} ;} ;} ;if(Ox31[OxOad5f[105]]-Ox2f/2<0){if((Ox32[OxOad5f[105]]*2-Ox31[OxOad5f[105]])+Ox2f/2<=Ox2d){Ox31[OxOad5f[105]]=Ox32[OxOad5f[105]]*2-Ox31[OxOad5f[105]];} else {if(Ox34){Ox31[OxOad5f[105]]=Ox2f/2+4;} ;} ;} else {if(Ox31[OxOad5f[105]]+Ox2f/2>Ox2d){if((Ox32[OxOad5f[105]]*2-Ox31[OxOad5f[105]])-Ox2f/2>=0){Ox31[OxOad5f[105]]=Ox32[OxOad5f[105]]*2-Ox31[OxOad5f[105]];} else {if(Ox34){Ox31[OxOad5f[105]]=Ox2d-Ox2f/2-4;} ;} ;} ;} ;Ox19[OxOad5f[107]]=Ox31[OxOad5f[107]]-Ox30[OxOad5f[107]]-Ox2e/2;Ox19[OxOad5f[105]]=Ox31[OxOad5f[105]]-Ox30[OxOad5f[105]]-Ox2f/2;} ;function CaptureManager(element,handlelosecapture){function Ox3c(Ox3d){Ox3d.attachEvent(OxOad5f[134],Ox43);Ox3d.attachEvent(OxOad5f[135],Ox45);Ox3d.attachEvent(OxOad5f[136],Ox47);Ox3d.attachEvent(OxOad5f[137],Ox48);} ;function Ox3e(Ox3d){Ox3d.detachEvent(OxOad5f[134],Ox43);Ox3d.detachEvent(OxOad5f[135],Ox45);Ox3d.detachEvent(OxOad5f[136],Ox47);Ox3d.detachEvent(OxOad5f[137],Ox48);} ;function Ox3f(){} ;Ox3f[OxOad5f[138]]=function (){Ox3b.detachEvent(OxOad5f[139],Ox42);Ox3e(Ox3b);Ox3b.removeNode(true);for(var i=0;i<Ox38[OxOad5f[8]];i++){var Ox3d=Ox38[i];Ox3e(Ox3d);} ;Ox37=false;element[OxOad5f[140]]=null;CaptureManager[OxOad5f[141]]=null;if(Ox3a){Ox3a=false;Ox3b.releaseCapture();Ox3f.FireLoseCapture();} ;} ;Ox3f[OxOad5f[142]]=function (Ox3d){Ox3c(Ox3d);Ox38[Ox38[OxOad5f[8]]]=Ox3d;} ;Ox3f[OxOad5f[143]]=function (Ox3d){var len=Ox38[OxOad5f[8]];for(var i=0;i<len;i++){if(Ox38[i]==Ox3d){Ox3e(Ox3d);for(var Ox41=i;Ox41<len-1;Ox41++){Ox38[Ox41]=Ox38[Ox41+1];} ;Ox38[OxOad5f[8]]=Ox38[OxOad5f[8]]-1;return ;} ;} ;} ;Ox3f[OxOad5f[144]]=function (){handlelosecapture();} ;function Ox42(){if(Ox3a){Ox3a=false;try{Ox3f.FireLoseCapture();} finally{Ox3f.Unregister();} ;} ;} ;function Ox43(){var Ox44=document.elementFromPoint(event.clientX,event.clientY);for(var i=0;i<Ox38[OxOad5f[8]];i++){var Ox3d=Ox38[i];if(Ox3d.contains(Ox44)){return ;} ;} ;Ox3f.Unregister();} ;function Ox45(){var Ox44=document.elementFromPoint(event.clientX,event.clientY);Ox46(Ox44);} ;function Ox46(Ox44){for(var i=0;i<Ox38[OxOad5f[8]];i++){var Ox3d=Ox38[i];if(Ox3d.contains(Ox44)){if(Ox3a){Ox3a=false;Ox3b.releaseCapture();} ;return ;} ;} ;if(!Ox3a){Ox3a=true;Ox3b.setCapture(true);} ;} ;function Ox47(){var Ox44=document.elementFromPoint(event.clientX,event.clientY);Ox39=false;for(var i=0;i<Ox38[OxOad5f[8]];i++){var Ox3d=Ox38[i];if(Ox3d.contains(event.fromElement)){return ;} ;if(Ox3d.contains(Ox44)){if(Ox3a){Ox3a=false;Ox3b.releaseCapture();} ;} ;} ;} ;function Ox48(){var Ox44=document.elementFromPoint(event.clientX,event.clientY);Ox39=false;for(var i=0;i<Ox38[OxOad5f[8]];i++){var Ox3d=Ox38[i];if(Ox3d.contains(event.toElement)){return ;} ;} ;if(!Ox3a){Ox3a=true;Ox3b.setCapture(true);} ;} ;if(CaptureManager[OxOad5f[141]]&&CaptureManager[OxOad5f[141]][OxOad5f[140]]){CaptureManager[OxOad5f[141]][OxOad5f[140]].Unregister();} ;var Ox37=true;var Ox38=[];var Ox39=true;var Ox3a=false;element[OxOad5f[140]]=Ox3f;CaptureManager[OxOad5f[141]]=element;Ox3f.AddElement(element);var Ox3b=document.createElement(OxOad5f[145]);document[OxOad5f[101]].insertAdjacentElement(OxOad5f[146],Ox3b);Ox3b.attachEvent(OxOad5f[139],Ox42);Ox3c(Ox3b);Ox3b.setCapture(true);Ox3a=true;return Ox3f;} ;function Element_Contains(element,Ox6e){for(;Ox6e!=null;Ox6e=Ox6e[OxOad5f[77]]){if(element==Ox6e){return true;} ;} ;return false;} ;function CaptureManager_NoneIE(element,handlelosecapture){var Ox1a={};var Ox38=[element];window[OxOad5f[102]].addEventListener(OxOad5f[147],Ox71,true);function Ox70(){setTimeout(Ox1a.Unregister,1);} ;function Ox71(){var src=Event_GetSrcElement();for(var i=0;i<Ox38[OxOad5f[8]];i++){if(Element_Contains(Ox38[i],src)){return ;} ;} ;Ox70();} ;Ox1a[OxOad5f[142]]=function Ox73(Ox3d){Ox38.push(Ox3d);} ;Ox1a[OxOad5f[138]]=function Ox74(){window.removeEventListener(OxOad5f[148],Ox70,true);window[OxOad5f[102]].removeEventListener(OxOad5f[147],Ox70,true);element[OxOad5f[140]]=null;handlelosecapture();} ;element[OxOad5f[140]]=Ox1a;return Ox1a;} ;if(window[OxOad5f[149]]){CaptureManager=CaptureManager_NoneIE;} ;CaptureManager[OxOad5f[150]]=function (element,handlelosecapture){return  new CaptureManager(element,handlelosecapture);} ;CaptureManager[OxOad5f[138]]=function (element){if(element&&element[OxOad5f[140]]){element[OxOad5f[140]].Unregister();} ;} ;element[OxOad5f[151]]=_mtd_popupColor;} ;