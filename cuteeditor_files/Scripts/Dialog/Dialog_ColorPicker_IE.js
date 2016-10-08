var OxO1fb3=["onerror","onload","onclick","btnCancel","btnOK","onkeyup","txtHSB_Hue","onkeypress","txtHSB_Saturation","txtHSB_Brightness","txtRGB_Red","txtRGB_Green","txtRGB_Blue","txtHex","btnWebSafeColor","rdoHSB_Hue","rdoHSB_Saturation","rdoHSB_Brightness","rdoRGB_Red","rdoRGB_Green","rdoRGB_Blue","onmousemove","onmousedown","onmouseup","{format}","length","\x5C{","\x5C}","BadNumber","A number between {0} and {1} is required. Closest value inserted.","Title","Color Picker","SelectAColor","Select a color:","OKButton","OK","CancelButton","Cancel","AboutButton","About","Recent","WebSafeWarning","Warning: not a web safe color","WebSafeClick","Click to select web safe color","HsbHue","H:","HsbHueTooltip","Hue","HsbHueUnit","%","HsbSaturation","S:","HsbSaturationTooltip","Saturation","HsbSaturationUnit","HsbBrightness","B:","HsbBrightnessTooltip","Brightness","HsbBrightnessUnit","RgbRed","R:","RgbRedTooltip","Red","RgbGreen","G:","RgbGreenTooltip","Green","RgbBlue","RgbBlueTooltip","Blue","Hex","#","RecentTooltip","Recent:","\x0D\x0ALewies Color Pickerversion 1.1\x0D\x0A\x0D\x0AThis form was created by Lewis Moten in May of 2004.\x0D\x0AIt simulates the color picker in a popular graphics application.\x0D\x0AIt gives users a visual way to choose colors from a large and dynamic palette.\x0D\x0A\x0D\x0AVisit the authors web page?\x0D\x0Awww.lewismoten.com\x0D\x0A","UNDEFINED","FFFFFF","value","checked","ColorMode","ColorType","RecentColors","","pnlRecent","all","border","style","0px","backgroundColor","srcElement","display","none","title","innerHTML","backgroundPosition","px ","px","000000","zIndex","01234567879","keyCode","abcdef","01234567879ABCDEF","returnValue","0123456789ABCDEFabcdef","0","id","pnlGradient_Top","pnlVertical_Top","top","opacity","filters","backgroundImage","url(../Images/cpie_GradientPositionDark.gif)","url(../Images/cpie_GradientPositionLight.gif)","cancelBubble","clientX","clientY","className","GradientNormal","button","GradientFullScreen","=","; path=/;"," expires=",";","cookie","00336699CCFF","0x","do_select","frm","__cphex"];var POSITIONADJUSTX=21;var POSITIONADJUSTY=46;var POSITIONADJUSTZ=43;var msg= new Object();window[OxO1fb3[0]]=alert;var ColorMode=1;var GradientPositionDark= new Boolean(false);var frm= new Object();window[OxO1fb3[1]]=window_load;function initialize(){frm[OxO1fb3[3]][OxO1fb3[2]]=btnCancel_Click;frm[OxO1fb3[4]][OxO1fb3[2]]=btnOK_Click;frm[OxO1fb3[6]][OxO1fb3[5]]=Hsb_Changed;frm[OxO1fb3[6]][OxO1fb3[7]]=validateNumber;frm[OxO1fb3[8]][OxO1fb3[5]]=Hsb_Changed;frm[OxO1fb3[8]][OxO1fb3[7]]=validateNumber;frm[OxO1fb3[9]][OxO1fb3[5]]=Hsb_Changed;frm[OxO1fb3[9]][OxO1fb3[7]]=validateNumber;frm[OxO1fb3[10]][OxO1fb3[5]]=Rgb_Changed;frm[OxO1fb3[10]][OxO1fb3[7]]=validateNumber;frm[OxO1fb3[11]][OxO1fb3[5]]=Rgb_Changed;frm[OxO1fb3[11]][OxO1fb3[7]]=validateNumber;frm[OxO1fb3[12]][OxO1fb3[5]]=Rgb_Changed;frm[OxO1fb3[12]][OxO1fb3[7]]=validateNumber;frm[OxO1fb3[13]][OxO1fb3[5]]=Hex_Changed;frm[OxO1fb3[13]][OxO1fb3[7]]=validateHex;frm[OxO1fb3[14]][OxO1fb3[2]]=btnWebSafeColor_Click;frm[OxO1fb3[15]][OxO1fb3[2]]=rdoHsb_Hue_Click;frm[OxO1fb3[16]][OxO1fb3[2]]=rdoHsb_Saturation_Click;frm[OxO1fb3[17]][OxO1fb3[2]]=rdoHsb_Brightness_Click;frm[OxO1fb3[18]][OxO1fb3[2]]=rdoRgb_Red_Click;frm[OxO1fb3[19]][OxO1fb3[2]]=rdoRgb_Green_Click;frm[OxO1fb3[20]][OxO1fb3[2]]=rdoRgb_Blue_Click;pnlGradient_Top[OxO1fb3[2]]=pnlGradient_Top_Click;pnlGradient_Top[OxO1fb3[21]]=pnlGradient_Top_MouseMove;pnlGradient_Top[OxO1fb3[22]]=pnlGradient_Top_MouseDown;pnlGradient_Top[OxO1fb3[23]]=pnlGradient_Top_MouseUp;pnlVertical_Top[OxO1fb3[2]]=pnlVertical_Top_Click;pnlVertical_Top[OxO1fb3[21]]=pnlVertical_Top_MouseMove;pnlVertical_Top[OxO1fb3[22]]=pnlVertical_Top_MouseDown;pnlVertical_Top[OxO1fb3[23]]=pnlVertical_Top_MouseUp;pnlWebSafeColor[OxO1fb3[2]]=btnWebSafeColor_Click;pnlWebSafeColorBorder[OxO1fb3[2]]=btnWebSafeColor_Click;pnlOldColor[OxO1fb3[2]]=pnlOldClick_Click;lblHSB_Hue[OxO1fb3[2]]=rdoHsb_Hue_Click;lblHSB_Saturation[OxO1fb3[2]]=rdoHsb_Saturation_Click;lblHSB_Brightness[OxO1fb3[2]]=rdoHsb_Brightness_Click;lblRGB_Red[OxO1fb3[2]]=rdoRgb_Red_Click;lblRGB_Green[OxO1fb3[2]]=rdoRgb_Green_Click;lblRGB_Blue[OxO1fb3[2]]=rdoRgb_Blue_Click;pnlGradient_Top.focus();} ;function formatString(Ox1b1){if(!Ox1b1){return OxO1fb3[24];} ;for(var i=1;i<arguments[OxO1fb3[25]];i++){Ox1b1=Ox1b1.replace( new RegExp(OxO1fb3[26]+(i-1)+OxO1fb3[27]),arguments[i]);} ;return Ox1b1;} ;function AddValue(Ox1b3,Ox4f){Ox4f=Ox4f.toLowerCase();for(var i=0;i<Ox1b3[OxO1fb3[25]];i++){if(Ox1b3[i]==Ox4f){return ;} ;} ;Ox1b3[Ox1b3[OxO1fb3[25]]]=Ox4f;} ;function SniffLanguage(Ox69){} ;function LoadLanguage(){msg[OxO1fb3[28]]=OxO1fb3[29];msg[OxO1fb3[30]]=OxO1fb3[31];msg[OxO1fb3[32]]=OxO1fb3[33];msg[OxO1fb3[34]]=OxO1fb3[35];msg[OxO1fb3[36]]=OxO1fb3[37];msg[OxO1fb3[38]]=OxO1fb3[39];msg[OxO1fb3[40]]=OxO1fb3[40];msg[OxO1fb3[41]]=OxO1fb3[42];msg[OxO1fb3[43]]=OxO1fb3[44];msg[OxO1fb3[45]]=OxO1fb3[46];msg[OxO1fb3[47]]=OxO1fb3[48];msg[OxO1fb3[49]]=OxO1fb3[50];msg[OxO1fb3[51]]=OxO1fb3[52];msg[OxO1fb3[53]]=OxO1fb3[54];msg[OxO1fb3[55]]=OxO1fb3[50];msg[OxO1fb3[56]]=OxO1fb3[57];msg[OxO1fb3[58]]=OxO1fb3[59];msg[OxO1fb3[60]]=OxO1fb3[50];msg[OxO1fb3[61]]=OxO1fb3[62];msg[OxO1fb3[63]]=OxO1fb3[64];msg[OxO1fb3[65]]=OxO1fb3[66];msg[OxO1fb3[67]]=OxO1fb3[68];msg[OxO1fb3[69]]=OxO1fb3[57];msg[OxO1fb3[70]]=OxO1fb3[71];msg[OxO1fb3[72]]=OxO1fb3[73];msg[OxO1fb3[74]]=OxO1fb3[75];msg[OxO1fb3[39]]=OxO1fb3[76];} ;function localize(){} ;function window_load(){frm=frmColorPicker;LoadLanguage();localize();initialize();var Ox62=OxO1fb3[77];if(Ox62==OxO1fb3[77]){Ox62=OxO1fb3[78];} ;if(Ox62[OxO1fb3[25]]==7){Ox62=Ox62.substr(1,6);} ;frm[OxO1fb3[13]][OxO1fb3[79]]=Ox62;Hex_Changed();Ox62=Form_Get_Hex();SetBg(pnlOldColor,Ox62);frm[OxO1fb3[82]][ new Number(GetCookie(OxO1fb3[81])||0)][OxO1fb3[80]]=true;ColorMode_Changed();var Ox1a6=GetCookie(OxO1fb3[83])||OxO1fb3[84];var Ox1b8=msg[OxO1fb3[74]];for(var i=1;i<33;i++){if(Ox1a6[OxO1fb3[25]]/6>=i){Ox62=Ox1a6.substr((i-1)*6,6);var Ox1b9=HexToRgb(Ox62);var title=formatString(msg.RecentTooltip,Ox62,Ox1b9[0],Ox1b9[1],Ox1b9[2]);SetBg(document[OxO1fb3[86]][OxO1fb3[85]+i],Ox62);SetTitle(document[OxO1fb3[86]][OxO1fb3[85]+i],title);document[OxO1fb3[86]][OxO1fb3[85]+i][OxO1fb3[2]]=pnlRecent_Click;} else {document[OxO1fb3[86]][OxO1fb3[85]+i][OxO1fb3[88]][OxO1fb3[87]]=OxO1fb3[89];} ;} ;} ;function pnlRecent_Click(){frm[OxO1fb3[13]][OxO1fb3[79]]=event[OxO1fb3[91]][OxO1fb3[88]][OxO1fb3[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function pnlOldClick_Click(){frm[OxO1fb3[13]][OxO1fb3[79]]=pnlOldColor[OxO1fb3[88]][OxO1fb3[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function rdoHsb_Hue_Click(){frm[OxO1fb3[15]][OxO1fb3[80]]=true;ColorMode_Changed();} ;function rdoHsb_Saturation_Click(){frm[OxO1fb3[16]][OxO1fb3[80]]=true;ColorMode_Changed();} ;function rdoHsb_Brightness_Click(){frm[OxO1fb3[17]][OxO1fb3[80]]=true;ColorMode_Changed();} ;function rdoRgb_Red_Click(){frm[OxO1fb3[18]][OxO1fb3[80]]=true;ColorMode_Changed();} ;function rdoRgb_Green_Click(){frm[OxO1fb3[19]][OxO1fb3[80]]=true;ColorMode_Changed();} ;function rdoRgb_Blue_Click(){frm[OxO1fb3[20]][OxO1fb3[80]]=true;ColorMode_Changed();} ;function Hide(){for(var i=0;i<arguments[OxO1fb3[25]];i++){arguments[i][OxO1fb3[88]][OxO1fb3[92]]=OxO1fb3[93];} ;} ;function Show(){for(var i=0;i<arguments[OxO1fb3[25]];i++){arguments[i][OxO1fb3[88]][OxO1fb3[92]]=OxO1fb3[84];} ;} ;function SetValue(){for(var i=0;i<arguments[OxO1fb3[25]];i+=2){arguments[i][OxO1fb3[79]]=arguments[i+1];} ;} ;function SetTitle(){for(var i=0;i<arguments[OxO1fb3[25]];i+=2){arguments[i][OxO1fb3[94]]=arguments[i+1];} ;} ;function SetHTML(){for(var i=0;i<arguments[OxO1fb3[25]];i+=2){arguments[i][OxO1fb3[95]]=arguments[i+1];} ;} ;function SetBg(){for(var i=0;i<arguments[OxO1fb3[25]];i+=2){arguments[i][OxO1fb3[88]][OxO1fb3[90]]=OxO1fb3[73]+arguments[i+1];} ;} ;function SetBgPosition(){for(var i=0;i<arguments[OxO1fb3[25]];i+=3){arguments[i][OxO1fb3[88]][OxO1fb3[96]]=arguments[i+1]+OxO1fb3[97]+arguments[i+2]+OxO1fb3[98];} ;} ;function ColorMode_Changed(){for(var i=0;i<6;i++){if(frm[OxO1fb3[82]][i][OxO1fb3[80]]){ColorMode=i;} ;} ;SetCookie(OxO1fb3[81],ColorMode,60*60*24*365);Hide(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background,pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);switch(ColorMode){case 0:Show(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background);Hsb_Changed();break ;;case 1:Show(pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxO1fb3[78],pnlGradientRgb_Overlay2,OxO1fb3[99]);pnlGradientRgb_Overlay1[OxO1fb3[88]][OxO1fb3[100]]=5;pnlGradientRgb_Overlay2[OxO1fb3[88]][OxO1fb3[100]]=6;Hsb_Changed();break ;;case 2:Show(pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxO1fb3[99],pnlGradientRgb_Overlay2,OxO1fb3[78]);pnlGradientRgb_Overlay1[OxO1fb3[88]][OxO1fb3[100]]=6;pnlGradientRgb_Overlay2[OxO1fb3[88]][OxO1fb3[100]]=5;Hsb_Changed();break ;;case 3:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,0,pnlGradientRgb_Invert,256,0);Rgb_Changed();break ;;case 4:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,0,256,pnlGradientRgb_Invert,0,256);Rgb_Changed();break ;;case 5:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,256,pnlGradientRgb_Invert,256,256);Rgb_Changed();break ;;default:break ;;} ;} ;function btnWebSafeColor_Click(){var Ox1b9=HexToRgb(frm[OxO1fb3[13]].value);Ox1b9=RgbToWebSafeRgb(Ox1b9);frm[OxO1fb3[13]][OxO1fb3[79]]=RgbToHex(Ox1b9);Hex_Changed();} ;function checkWebSafe(){var Ox1b9=Form_Get_Rgb();if(RgbIsWebSafe(Ox1b9)){Hide(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} else {Ox1b9=RgbToWebSafeRgb(Ox1b9);SetBg(pnlWebSafeColor,RgbToHex(Ox1b9));Show(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} ;} ;function validateNumber(){var Ox1ce=String.fromCharCode(event.keyCode);if(IgnoreKey()){return ;} ;if(OxO1fb3[101].indexOf(Ox1ce)!=-1){return ;} ;event[OxO1fb3[102]]=0;} ;function validateHex(){if(IgnoreKey()){return ;} ;var Ox1ce=String.fromCharCode(event.keyCode);if(OxO1fb3[103].indexOf(Ox1ce)!=-1){event[OxO1fb3[102]]=Ox1ce.toUpperCase().charCodeAt(0);return ;} ;if(OxO1fb3[104].indexOf(Ox1ce)!=-1){return ;} ;event[OxO1fb3[102]]=0;} ;function IgnoreKey(){var Ox1ce=String.fromCharCode(event.keyCode);var Ox1d1= new Array(0,8,9,13,27);if(Ox1ce==null){return true;} ;for(var i=0;i<5;i++){if(event[OxO1fb3[102]]==Ox1d1[i]){return true;} ;} ;return false;} ;function btnCancel_Click(){top.close();} ;function btnOK_Click(){var Ox62= new String(frm[OxO1fb3[13]].value);try{window[OxO1fb3[105]]=Ox62;} catch(e){} ;recent=GetCookie(OxO1fb3[83])||OxO1fb3[84];for(var i=0;i<recent[OxO1fb3[25]];i+=6){if(recent.substr(i,6)==Ox62){recent=recent.substr(0,i)+recent.substr(i+6);i-=6;} ;} ;if(recent[OxO1fb3[25]]>31*6){recent=recent.substr(0,31*6);} ;recent=frm[OxO1fb3[13]][OxO1fb3[79]]+recent;SetCookie(OxO1fb3[83],recent,60*60*24*365);top.close();} ;function SetGradientPosition(Oxf6,Oxc4){Oxf6=Oxf6-POSITIONADJUSTX+5;Oxc4=Oxc4-POSITIONADJUSTY+5;Oxf6-=7;Oxc4-=27;Oxf6=Oxf6<0?0:Oxf6>255?255:Oxf6;Oxc4=Oxc4<0?0:Oxc4>255?255:Oxc4;SetBgPosition(pnlGradientPosition,Oxf6-5,Oxc4-5);switch(ColorMode){case 0:var Ox1d5= new Array(0,0,0);Ox1d5[1]=Oxf6/255;Ox1d5[2]=1-(Oxc4/255);frm[OxO1fb3[8]][OxO1fb3[79]]=Math.round(Ox1d5[1]*100);frm[OxO1fb3[9]][OxO1fb3[79]]=Math.round(Ox1d5[2]*100);Hsb_Changed();break ;;case 1:var Ox1d5= new Array(0,0,0);Ox1d5[0]=Oxf6/255;Ox1d5[2]=1-(Oxc4/255);frm[OxO1fb3[6]][OxO1fb3[79]]=Ox1d5[0]==1?0:Math.round(Ox1d5[0]*360);frm[OxO1fb3[9]][OxO1fb3[79]]=Math.round(Ox1d5[2]*100);Hsb_Changed();break ;;case 2:var Ox1d5= new Array(0,0,0);Ox1d5[0]=Oxf6/255;Ox1d5[1]=1-(Oxc4/255);frm[OxO1fb3[6]][OxO1fb3[79]]=Ox1d5[0]==1?0:Math.round(Ox1d5[0]*360);frm[OxO1fb3[8]][OxO1fb3[79]]=Math.round(Ox1d5[1]*100);Hsb_Changed();break ;;case 3:var Ox1b9= new Array(0,0,0);Ox1b9[1]=255-Oxc4;Ox1b9[2]=Oxf6;frm[OxO1fb3[11]][OxO1fb3[79]]=Ox1b9[1];frm[OxO1fb3[12]][OxO1fb3[79]]=Ox1b9[2];Rgb_Changed();break ;;case 4:var Ox1b9= new Array(0,0,0);Ox1b9[0]=255-Oxc4;Ox1b9[2]=Oxf6;frm[OxO1fb3[10]][OxO1fb3[79]]=Ox1b9[0];frm[OxO1fb3[12]][OxO1fb3[79]]=Ox1b9[2];Rgb_Changed();break ;;case 5:var Ox1b9= new Array(0,0,0);Ox1b9[0]=Oxf6;Ox1b9[1]=255-Oxc4;frm[OxO1fb3[10]][OxO1fb3[79]]=Ox1b9[0];frm[OxO1fb3[11]][OxO1fb3[79]]=Ox1b9[1];Rgb_Changed();break ;;} ;} ;function Hex_Changed(){var Ox62=Form_Get_Hex();var Ox1b9=HexToRgb(Ox62);var Ox1d5=RgbToHsb(Ox1b9);Form_Set_Rgb(Ox1b9);Form_Set_Hsb(Ox1d5);SetBg(pnlNewColor,Ox62);SetupCursors();SetupGradients();checkWebSafe();} ;function Rgb_Changed(){var Ox1b9=Form_Get_Rgb();var Ox1d5=RgbToHsb(Ox1b9);var Ox62=RgbToHex(Ox1b9);Form_Set_Hsb(Ox1d5);Form_Set_Hex(Ox62);SetBg(pnlNewColor,Ox62);SetupCursors();SetupGradients();checkWebSafe();} ;function Hsb_Changed(){var Ox1d5=Form_Get_Hsb();var Ox1b9=HsbToRgb(Ox1d5);var Ox62=RgbToHex(Ox1b9);Form_Set_Rgb(Ox1b9);Form_Set_Hex(Ox62);SetBg(pnlNewColor,Ox62);SetupCursors();SetupGradients();checkWebSafe();} ;function Form_Set_Hex(Ox62){frm[OxO1fb3[13]][OxO1fb3[79]]=Ox62;} ;function Form_Get_Hex(){var Ox62= new String(frm[OxO1fb3[13]].value);for(var i=0;i<Ox62[OxO1fb3[25]];i++){if(OxO1fb3[106].indexOf(Ox62.substr(i,1))==-1){Ox62=OxO1fb3[99];frm[OxO1fb3[13]][OxO1fb3[79]]=Ox62;alert(formatString(msg.BadNumber,OxO1fb3[99],OxO1fb3[78]));break ;} ;} ;while(Ox62[OxO1fb3[25]]<6){Ox62=OxO1fb3[107]+Ox62;} ;return Ox62;} ;function Form_Get_Hsb(){var Ox1d5= new Array(0,0,0);Ox1d5[0]= new Number(frm[OxO1fb3[6]].value)/360;Ox1d5[1]= new Number(frm[OxO1fb3[8]].value)/100;Ox1d5[2]= new Number(frm[OxO1fb3[9]].value)/100;if(Ox1d5[0]>1||isNaN(Ox1d5[0])){Ox1d5[0]=1;frm[OxO1fb3[6]][OxO1fb3[79]]=360;alert(formatString(msg.BadNumber,0,360));} ;if(Ox1d5[1]>1||isNaN(Ox1d5[1])){Ox1d5[1]=1;frm[OxO1fb3[8]][OxO1fb3[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;if(Ox1d5[2]>1||isNaN(Ox1d5[2])){Ox1d5[2]=1;frm[OxO1fb3[9]][OxO1fb3[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;return Ox1d5;} ;function Form_Set_Hsb(Ox1d5){SetValue(frm.txtHSB_Hue,Math.round(Ox1d5[0]*360),frm.txtHSB_Saturation,Math.round(Ox1d5[1]*100),frm.txtHSB_Brightness,Math.round(Ox1d5[2]*100));} ;function Form_Get_Rgb(){var Ox1b9= new Array(0,0,0);Ox1b9[0]= new Number(frm[OxO1fb3[10]].value);Ox1b9[1]= new Number(frm[OxO1fb3[11]].value);Ox1b9[2]= new Number(frm[OxO1fb3[12]].value);if(Ox1b9[0]>255||isNaN(Ox1b9[0])||Ox1b9[0]!=Math.round(Ox1b9[0])){Ox1b9[0]=255;frm[OxO1fb3[10]][OxO1fb3[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox1b9[1]>255||isNaN(Ox1b9[1])||Ox1b9[1]!=Math.round(Ox1b9[1])){Ox1b9[1]=255;frm[OxO1fb3[11]][OxO1fb3[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox1b9[2]>255||isNaN(Ox1b9[2])||Ox1b9[2]!=Math.round(Ox1b9[2])){Ox1b9[2]=255;frm[OxO1fb3[12]][OxO1fb3[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;return Ox1b9;} ;function Form_Set_Rgb(Ox1b9){frm[OxO1fb3[10]][OxO1fb3[79]]=Ox1b9[0];frm[OxO1fb3[11]][OxO1fb3[79]]=Ox1b9[1];frm[OxO1fb3[12]][OxO1fb3[79]]=Ox1b9[2];} ;function SetupCursors(){var Ox1d5=Form_Get_Hsb();var Ox1b9=Form_Get_Rgb();if(RgbToYuv(Ox1b9)[0]>=0.5){SetGradientPositionDark();} else {SetGradientPositionLight();} ;if(event[OxO1fb3[91]]!=null){if(event[OxO1fb3[91]][OxO1fb3[108]]==OxO1fb3[109]){return ;} ;if(event[OxO1fb3[91]][OxO1fb3[108]]==OxO1fb3[110]){return ;} ;} ;var Oxf6;var Oxc4;var Ox1e0;if(ColorMode>=0&&ColorMode<=2){for(var i=0;i<3;i++){Ox1d5[i]*=255;} ;} ;switch(ColorMode){case 0:Oxf6=Ox1d5[1];Oxc4=Ox1d5[2];Ox1e0=Ox1d5[0]==0?1:Ox1d5[0];break ;;case 1:Oxf6=Ox1d5[0]==0?1:Ox1d5[0];Oxc4=Ox1d5[2];Ox1e0=Ox1d5[1];break ;;case 2:Oxf6=Ox1d5[0]==0?1:Ox1d5[0];Oxc4=Ox1d5[1];Ox1e0=Ox1d5[2];break ;;case 3:Oxf6=Ox1b9[2];Oxc4=Ox1b9[1];Ox1e0=Ox1b9[0];break ;;case 4:Oxf6=Ox1b9[2];Oxc4=Ox1b9[0];Ox1e0=Ox1b9[1];break ;;case 5:Oxf6=Ox1b9[0];Oxc4=Ox1b9[1];Ox1e0=Ox1b9[2];break ;;} ;Oxc4=255-Oxc4;Ox1e0=255-Ox1e0;SetBgPosition(pnlGradientPosition,Oxf6-5,Oxc4-5);pnlVerticalPosition[OxO1fb3[88]][OxO1fb3[111]]=(Ox1e0+27)+OxO1fb3[98];} ;function SetupGradients(){var Ox1d5=Form_Get_Hsb();var Ox1b9=Form_Get_Rgb();switch(ColorMode){case 0:SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox1d5[0])));break ;;case 1:var Ox20= new Array();for(var i=0;i<3;i++){Ox20[i]=Math.round(Ox1d5[2]*255);} ;SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox1d5[0])),pnlVerticalHsbSaturation_Hue,RgbToHex(HsbToRgb( new Array(Ox1d5[0],1,Ox1d5[2]))),pnlVerticalHsbSaturation_White,RgbToHex(Ox20));pnlGradientRgb_Overlay1[OxO1fb3[113]][0][OxO1fb3[112]]=(100-Math.round(Ox1d5[1]*100));break ;;case 2:SetBg(pnlVerticalHsbBrightness_Hue,RgbToHex(HsbToRgb( new Array(Ox1d5[0],Ox1d5[1],1))));pnlGradientRgb_Overlay1[OxO1fb3[113]][0][OxO1fb3[112]]=(100-Math.round(Ox1d5[2]*100));break ;;case 3:pnlGradientRgb_Invert[OxO1fb3[113]][3][OxO1fb3[112]]=100-Math.round((Ox1b9[0]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(0xFF,Ox1b9[1],Ox1b9[2])),pnlVerticalRgb_End,RgbToHex( new Array(0x00,Ox1b9[1],Ox1b9[2])));break ;;case 4:pnlGradientRgb_Invert[OxO1fb3[113]][3][OxO1fb3[112]]=100-Math.round((Ox1b9[1]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox1b9[0],0xFF,Ox1b9[2])),pnlVerticalRgb_End,RgbToHex( new Array(Ox1b9[0],0x00,Ox1b9[2])));break ;;case 5:pnlGradientRgb_Invert[OxO1fb3[113]][3][OxO1fb3[112]]=100-Math.round((Ox1b9[2]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox1b9[0],Ox1b9[1],0xFF)),pnlVerticalRgb_End,RgbToHex( new Array(Ox1b9[0],Ox1b9[1],0x00)));break ;;default:;} ;} ;function SetGradientPositionDark(){if(GradientPositionDark){return ;} ;GradientPositionDark=true;pnlGradientPosition[OxO1fb3[88]][OxO1fb3[114]]=OxO1fb3[115];} ;function SetGradientPositionLight(){if(!GradientPositionDark){return ;} ;GradientPositionDark=false;pnlGradientPosition[OxO1fb3[88]][OxO1fb3[114]]=OxO1fb3[116];} ;function pnlGradient_Top_Click(){event[OxO1fb3[117]]=true;SetGradientPosition(event[OxO1fb3[118]]-5,event[OxO1fb3[119]]-5);pnlGradient_Top[OxO1fb3[120]]=OxO1fb3[121];} ;function pnlGradient_Top_MouseMove(){event[OxO1fb3[117]]=true;if(event[OxO1fb3[122]]!=1){return ;} ;SetGradientPosition(event[OxO1fb3[118]]-5,event[OxO1fb3[119]]-5);} ;function pnlGradient_Top_MouseDown(){event[OxO1fb3[117]]=true;SetGradientPosition(event[OxO1fb3[118]]-5,event[OxO1fb3[119]]-5);pnlGradient_Top[OxO1fb3[120]]=OxO1fb3[123];} ;function pnlGradient_Top_MouseUp(){event[OxO1fb3[117]]=true;SetGradientPosition(event[OxO1fb3[118]]-5,event[OxO1fb3[119]]-5);pnlGradient_Top[OxO1fb3[120]]=OxO1fb3[121];} ;function Document_MouseUp(){event[OxO1fb3[117]]=true;pnlGradient_Top[OxO1fb3[120]]=OxO1fb3[121];} ;function SetVerticalPosition(Ox1e0){var Ox1e0=Ox1e0-POSITIONADJUSTZ;if(Ox1e0<27){Ox1e0=27;} ;if(Ox1e0>282){Ox1e0=282;} ;pnlVerticalPosition[OxO1fb3[88]][OxO1fb3[111]]=Ox1e0+OxO1fb3[98];Ox1e0=1-((Ox1e0-27)/255);switch(ColorMode){case 0:if(Ox1e0==1){Ox1e0=0;} ;frm[OxO1fb3[6]][OxO1fb3[79]]=Math.round(Ox1e0*360);Hsb_Changed();break ;;case 1:frm[OxO1fb3[8]][OxO1fb3[79]]=Math.round(Ox1e0*100);Hsb_Changed();break ;;case 2:frm[OxO1fb3[9]][OxO1fb3[79]]=Math.round(Ox1e0*100);Hsb_Changed();break ;;case 3:frm[OxO1fb3[10]][OxO1fb3[79]]=Math.round(Ox1e0*255);Rgb_Changed();break ;;case 4:frm[OxO1fb3[11]][OxO1fb3[79]]=Math.round(Ox1e0*255);Rgb_Changed();break ;;case 5:frm[OxO1fb3[12]][OxO1fb3[79]]=Math.round(Ox1e0*255);Rgb_Changed();break ;;} ;} ;function pnlVertical_Top_Click(){SetVerticalPosition(event[OxO1fb3[119]]-5);event[OxO1fb3[117]]=true;} ;function pnlVertical_Top_MouseMove(){if(event[OxO1fb3[122]]!=1){return ;} ;SetVerticalPosition(event[OxO1fb3[119]]-5);event[OxO1fb3[117]]=true;} ;function pnlVertical_Top_MouseDown(){SetVerticalPosition(event[OxO1fb3[119]]-5);event[OxO1fb3[117]]=true;} ;function pnlVertical_Top_MouseUp(){SetVerticalPosition(event[OxO1fb3[119]]-5);event[OxO1fb3[117]]=true;} ;function SetCookie(name,Ox4f,Ox50){var Ox51=name+OxO1fb3[124]+escape(Ox4f)+OxO1fb3[125];if(Ox50){var Ox52= new Date();Ox52.setSeconds(Ox52.getSeconds()+Ox50);Ox51+=OxO1fb3[126]+Ox52.toUTCString()+OxO1fb3[127];} ;document[OxO1fb3[128]]=Ox51;} ;function GetCookie(name){var Ox54=document[OxO1fb3[128]].split(OxO1fb3[127]);for(var i=0;i<Ox54[OxO1fb3[25]];i++){var Ox55=Ox54[i].split(OxO1fb3[124]);if(name==Ox55[0].replace(/\s/g,OxO1fb3[84])){return unescape(Ox55[1]);} ;} ;} ;function GetCookieDictionary(){var Ox57={};var Ox54=document[OxO1fb3[128]].split(OxO1fb3[127]);for(var i=0;i<Ox54[OxO1fb3[25]];i++){var Ox55=Ox54[i].split(OxO1fb3[124]);Ox57[Ox55[0].replace(/\s/g,OxO1fb3[84])]=unescape(Ox55[1]);} ;return Ox57;} ;function RgbIsWebSafe(Ox1b9){var Ox62=RgbToHex(Ox1b9);for(var i=0;i<3;i++){if(OxO1fb3[129].indexOf(Ox62.substr(i*2,2))==-1){return false;} ;} ;return true;} ;function RgbToWebSafeRgb(Ox1b9){var Ox1f0= new Array(Ox1b9[0],Ox1b9[1],Ox1b9[2]);if(RgbIsWebSafe(Ox1b9)){return Ox1f0;} ;var Ox1f1= new Array(0x00,0x33,0x66,0x99,0xCC,0xFF);for(var i=0;i<3;i++){for(var Ox41=1;Ox41<6;Ox41++){if(Ox1f0[i]>Ox1f1[Ox41-1]&&Ox1f0[i]<Ox1f1[Ox41]){if(Ox1f0[i]-Ox1f1[Ox41-1]>Ox1f1[Ox41]-Ox1f0[i]){Ox1f0[i]=Ox1f1[Ox41];} else {Ox1f0[i]=Ox1f1[Ox41-1];} ;break ;} ;} ;} ;return Ox1f0;} ;function RgbToYuv(Ox1b9){var Ox1f3= new Array();Ox1f3[0]=(Ox1b9[0]*0.299+Ox1b9[1]*0.587+Ox1b9[2]*0.114)/255;Ox1f3[1]=(Ox1b9[0]*-0.169+Ox1b9[1]*-0.332+Ox1b9[2]*0.500+128)/255;Ox1f3[2]=(Ox1b9[0]*0.500+Ox1b9[1]*-0.419+Ox1b9[2]*-0.0813+128)/255;return Ox1f3;} ;function RgbToHsb(Ox1b9){var Ox1f5= new Array(Ox1b9[0],Ox1b9[1],Ox1b9[2]);var Ox1f6= new Number(1);var Ox1f7= new Number(0);var Ox1f8= new Number(1);var Ox1d5= new Array(0,0,0);var Ox1f9= new Array();for(var i=0;i<3;i++){Ox1f5[i]=Ox1b9[i]/255;if(Ox1f5[i]<Ox1f6){Ox1f6=Ox1f5[i];} ;if(Ox1f5[i]>Ox1f7){Ox1f7=Ox1f5[i];} ;} ;Ox1f8=Ox1f7-Ox1f6;Ox1d5[2]=Ox1f7;if(Ox1f8==0){return Ox1d5;} ;Ox1d5[1]=Ox1f8/Ox1f7;for(var i=0;i<3;i++){Ox1f9[i]=(((Ox1f7-Ox1f5[i])/6)+(Ox1f8/2))/Ox1f8;} ;if(Ox1f5[0]==Ox1f7){Ox1d5[0]=Ox1f9[2]-Ox1f9[1];} else {if(Ox1f5[1]==Ox1f7){Ox1d5[0]=(1/3)+Ox1f9[0]-Ox1f9[2];} else {if(Ox1f5[2]==Ox1f7){Ox1d5[0]=(2/3)+Ox1f9[1]-Ox1f9[0];} ;} ;} ;if(Ox1d5[0]<0){Ox1d5[0]+=1;} else {if(Ox1d5[0]>1){Ox1d5[0]-=1;} ;} ;return Ox1d5;} ;function HsbToRgb(Ox1d5){var Ox1b9=HueToRgb(Ox1d5[0]);var Ox2a=Ox1d5[2]*255;for(var i=0;i<3;i++){Ox1b9[i]=Ox1b9[i]*Ox1d5[2];Ox1b9[i]=((Ox1b9[i]-Ox2a)*Ox1d5[1])+Ox2a;Ox1b9[i]=Math.round(Ox1b9[i]);} ;return Ox1b9;} ;function RgbToHex(Ox1b9){var Ox62= new String();for(var i=0;i<3;i++){Ox1b9[2-i]=Math.round(Ox1b9[2-i]);Ox62=Ox1b9[2-i].toString(16)+Ox62;if(Ox62[OxO1fb3[25]]%2==1){Ox62=OxO1fb3[107]+Ox62;} ;} ;return Ox62.toUpperCase();} ;function HexToRgb(Ox62){var Ox1b9= new Array();for(var i=0;i<3;i++){Ox1b9[i]= new Number(OxO1fb3[130]+Ox62.substr(i*2,2));} ;return Ox1b9;} ;function HueToRgb(Ox1fe){var Ox1ff=Ox1fe*360;var Ox1b9= new Array(0,0,0);var Ox200=(Ox1ff%60)/60;if(Ox1ff<60){Ox1b9[0]=255;Ox1b9[1]=Ox200*255;} else {if(Ox1ff<120){Ox1b9[1]=255;Ox1b9[0]=(1-Ox200)*255;} else {if(Ox1ff<180){Ox1b9[1]=255;Ox1b9[2]=Ox200*255;} else {if(Ox1ff<240){Ox1b9[2]=255;Ox1b9[1]=(1-Ox200)*255;} else {if(Ox1ff<300){Ox1b9[2]=255;Ox1b9[0]=Ox200*255;} else {if(Ox1ff<360){Ox1b9[0]=255;Ox1b9[2]=(1-Ox200)*255;} ;} ;} ;} ;} ;} ;return Ox1b9;} ;function CheckHexSelect(){if(window[OxO1fb3[131]]&&window[OxO1fb3[132]]&&frm[OxO1fb3[13]]){var Ox4=OxO1fb3[73]+frm[OxO1fb3[13]][OxO1fb3[79]];if(Ox4[OxO1fb3[25]]==7){if(window[OxO1fb3[133]]!=Ox4){window[OxO1fb3[133]]=Ox4;window.do_select(Ox4);} ;} ;} ;} ;setInterval(CheckHexSelect,10);