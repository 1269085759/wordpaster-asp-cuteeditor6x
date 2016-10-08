var OxOf49c=["onload","onclick","btnCancel","btnOK","onkeyup","txtHSB_Hue","onkeypress","txtHSB_Saturation","txtHSB_Brightness","txtRGB_Red","txtRGB_Green","txtRGB_Blue","txtHex","btnWebSafeColor","rdoHSB_Hue","rdoHSB_Saturation","rdoHSB_Brightness","pnlGradient_Top","onmousemove","onmousedown","onmouseup","pnlVertical_Top","pnlWebSafeColor","pnlWebSafeColorBorder","pnlOldColor","lblHSB_Hue","lblHSB_Saturation","lblHSB_Brightness","length","\x5C{","\x5C}","BadNumber","A number between {0} and {1} is required. Closest value inserted.","Title","Color Picker","SelectAColor","Select a color:","OKButton","OK","CancelButton","Cancel","AboutButton","About","Recent","WebSafeWarning","Warning: not a web safe color","WebSafeClick","Click to select web safe color","HsbHue","H:","HsbHueTooltip","Hue","HsbHueUnit","%","HsbSaturation","S:","HsbSaturationTooltip","Saturation","HsbSaturationUnit","HsbBrightness","B:","HsbBrightnessTooltip","Brightness","HsbBrightnessUnit","RgbRed","R:","RgbRedTooltip","Red","RgbGreen","G:","RgbGreenTooltip","Green","RgbBlue","RgbBlueTooltip","Blue","Hex","#","RecentTooltip","Recent:","\x0D\x0ALewies Color Pickerversion 1.1\x0D\x0A\x0D\x0AThis form was created by Lewis Moten in May of 2004.\x0D\x0AIt simulates the color picker in a popular graphics application.\x0D\x0AIt gives users a visual way to choose colors from a large and dynamic palette.\x0D\x0A\x0D\x0AVisit the authors web page?\x0D\x0Awww.lewismoten.com\x0D\x0A","lblSelectColorMessage","lblRecent","lblRGB_Red","lblRGB_Green","lblRGB_Blue","lblHex","lblUnitHSB_Hue","lblUnitHSB_Saturation","lblUnitHSB_Brightness","pnlHSB_Hue","pnlHSB_Saturation","pnlHSB_Brightness","pnlRGB_Red","pnlRGB_Green","pnlRGB_Blue","frmColorPicker","Color","","FFFFFF","value","checked","ColorMode","ColorType","RecentColors","pnlRecent","border","style","0px","http://www.lewismoten.com","_blank","backgroundColor","target","rgb","(",")",",","display","none","title","innerHTML","backgroundPosition","px ","px","pnlGradientHsbHue_Hue","pnlGradientHsbHue_Black","pnlGradientHsbHue_White","pnlVerticalHsbHue_Background","pnlVerticalHsbSaturation_Hue","pnlVerticalHsbSaturation_White","pnlVerticalHsbBrightness_Hue","pnlVerticalHsbBrightness_Black","pnlVerticalRgb_Start","pnlVerticalRgb_End","pnlGradientRgb_Base","pnlGradientRgb_Invert","pnlGradientRgb_Overlay1","pnlGradientRgb_Overlay2","src","imgGradient","../Images/cpns_ColorSpace1.png","../Images/cpns_ColorSpace2.png","../Images/cpns_Vertical1.png","#000000","../Images/cpns_Vertical2.png","#ffffff","01234567879","which","abcdef","01234567879ABCDEF","opener","pnlGradientPosition","pnlNewColor","0123456789ABCDEFabcdef","000000","0","id","top","pnlVerticalPosition","backgroundImage","url(../Images/cpns_GradientPositionDark.gif)","url(../Images/cpns_GradientPositionLight.gif)","cancelBubble","pageX","pageY","className","GradientNormal","GradientFullScreen","_isverdown","=","; path=/;"," expires=",";","cookie","search","location","\x26","00336699CCFF","0x","do_select","frm","__cphex"];var POSITIONADJUSTX=22;var POSITIONADJUSTY=52;var POSITIONADJUSTZ=48;var ColorMode=1;var GradientPositionDark= new Boolean(false);var frm= new Object();var msg= new Object();var _xmlDocs= new Array();var _xmlIndex=-1;var _xml=null;LoadLanguage();window[OxOf49c[0]]=window_load;function initialize(){frm[OxOf49c[2]][OxOf49c[1]]=btnCancel_Click;frm[OxOf49c[3]][OxOf49c[1]]=btnOK_Click;frm[OxOf49c[5]][OxOf49c[4]]=Hsb_Changed;frm[OxOf49c[5]][OxOf49c[6]]=validateNumber;frm[OxOf49c[7]][OxOf49c[4]]=Hsb_Changed;frm[OxOf49c[7]][OxOf49c[6]]=validateNumber;frm[OxOf49c[8]][OxOf49c[4]]=Hsb_Changed;frm[OxOf49c[8]][OxOf49c[6]]=validateNumber;frm[OxOf49c[9]][OxOf49c[4]]=Rgb_Changed;frm[OxOf49c[9]][OxOf49c[6]]=validateNumber;frm[OxOf49c[10]][OxOf49c[4]]=Rgb_Changed;frm[OxOf49c[10]][OxOf49c[6]]=validateNumber;frm[OxOf49c[11]][OxOf49c[4]]=Rgb_Changed;frm[OxOf49c[11]][OxOf49c[6]]=validateNumber;frm[OxOf49c[12]][OxOf49c[4]]=Hex_Changed;frm[OxOf49c[12]][OxOf49c[6]]=validateHex;frm[OxOf49c[13]][OxOf49c[1]]=btnWebSafeColor_Click;frm[OxOf49c[14]][OxOf49c[1]]=rdoHsb_Hue_Click;frm[OxOf49c[15]][OxOf49c[1]]=rdoHsb_Saturation_Click;frm[OxOf49c[16]][OxOf49c[1]]=rdoHsb_Brightness_Click;document.getElementById(OxOf49c[17])[OxOf49c[1]]=pnlGradient_Top_Click;document.getElementById(OxOf49c[17])[OxOf49c[18]]=pnlGradient_Top_MouseMove;document.getElementById(OxOf49c[17])[OxOf49c[19]]=pnlGradient_Top_MouseDown;document.getElementById(OxOf49c[17])[OxOf49c[20]]=pnlGradient_Top_MouseUp;document.getElementById(OxOf49c[21])[OxOf49c[1]]=pnlVertical_Top_Click;document.getElementById(OxOf49c[21])[OxOf49c[18]]=pnlVertical_Top_MouseMove;document.getElementById(OxOf49c[21])[OxOf49c[19]]=pnlVertical_Top_MouseDown;document.getElementById(OxOf49c[21])[OxOf49c[20]]=pnlVertical_Top_MouseUp;document.getElementById(OxOf49c[22])[OxOf49c[1]]=btnWebSafeColor_Click;document.getElementById(OxOf49c[23])[OxOf49c[1]]=btnWebSafeColor_Click;document.getElementById(OxOf49c[24])[OxOf49c[1]]=pnlOldClick_Click;document.getElementById(OxOf49c[25])[OxOf49c[1]]=rdoHsb_Hue_Click;document.getElementById(OxOf49c[26])[OxOf49c[1]]=rdoHsb_Saturation_Click;document.getElementById(OxOf49c[27])[OxOf49c[1]]=rdoHsb_Brightness_Click;frm[OxOf49c[5]].focus();window.focus();} ;function formatString(Ox1b1){Ox1b1= new String(Ox1b1);for(var i=1;i<arguments[OxOf49c[28]];i++){Ox1b1=Ox1b1.replace( new RegExp(OxOf49c[29]+(i-1)+OxOf49c[30]),arguments[i]);} ;return Ox1b1;} ;function AddValue(Ox1b3,Ox4f){Ox4f= new String(Ox4f).toLowerCase();for(var i=0;i<Ox1b3[OxOf49c[28]];i++){if(Ox1b3[i]==Ox4f){return ;} ;} ;Ox1b3[Ox1b3[OxOf49c[28]]]=Ox4f;} ;function SniffLanguage(Ox69){} ;function LoadNextLanguage(){} ;function LoadLanguage(){msg[OxOf49c[31]]=OxOf49c[32];msg[OxOf49c[33]]=OxOf49c[34];msg[OxOf49c[35]]=OxOf49c[36];msg[OxOf49c[37]]=OxOf49c[38];msg[OxOf49c[39]]=OxOf49c[40];msg[OxOf49c[41]]=OxOf49c[42];msg[OxOf49c[43]]=OxOf49c[43];msg[OxOf49c[44]]=OxOf49c[45];msg[OxOf49c[46]]=OxOf49c[47];msg[OxOf49c[48]]=OxOf49c[49];msg[OxOf49c[50]]=OxOf49c[51];msg[OxOf49c[52]]=OxOf49c[53];msg[OxOf49c[54]]=OxOf49c[55];msg[OxOf49c[56]]=OxOf49c[57];msg[OxOf49c[58]]=OxOf49c[53];msg[OxOf49c[59]]=OxOf49c[60];msg[OxOf49c[61]]=OxOf49c[62];msg[OxOf49c[63]]=OxOf49c[53];msg[OxOf49c[64]]=OxOf49c[65];msg[OxOf49c[66]]=OxOf49c[67];msg[OxOf49c[68]]=OxOf49c[69];msg[OxOf49c[70]]=OxOf49c[71];msg[OxOf49c[72]]=OxOf49c[60];msg[OxOf49c[73]]=OxOf49c[74];msg[OxOf49c[75]]=OxOf49c[76];msg[OxOf49c[77]]=OxOf49c[78];msg[OxOf49c[42]]=OxOf49c[79];} ;function AssignLanguage(){} ;function localize(){SetHTML(document.getElementById(OxOf49c[80]),msg.SelectAColor,document.getElementById(OxOf49c[81]),msg.Recent,document.getElementById(OxOf49c[25]),msg.HsbHue,document.getElementById(OxOf49c[26]),msg.HsbSaturation,document.getElementById(OxOf49c[27]),msg.HsbBrightness,document.getElementById(OxOf49c[82]),msg.RgbRed,document.getElementById(OxOf49c[83]),msg.RgbGreen,document.getElementById(OxOf49c[84]),msg.RgbBlue,document.getElementById(OxOf49c[85]),msg.Hex,document.getElementById(OxOf49c[86]),msg.HsbHueUnit,document.getElementById(OxOf49c[87]),msg.HsbSaturationUnit,document.getElementById(OxOf49c[88]),msg.HsbBrightnessUnit);SetValue(frm.btnCancel,msg.CancelButton,frm.btnOK,msg.OKButton,frm.btnAbout,msg.AboutButton);SetTitle(frm.btnWebSafeColor,msg.WebSafeWarning,document.getElementById(OxOf49c[22]),msg.WebSafeClick,document.getElementById(OxOf49c[89]),msg.HsbHueTooltip,document.getElementById(OxOf49c[90]),msg.HsbSaturationTooltip,document.getElementById(OxOf49c[91]),msg.HsbBrightnessTooltip,document.getElementById(OxOf49c[92]),msg.RgbRedTooltip,document.getElementById(OxOf49c[93]),msg.RgbGreenTooltip,document.getElementById(OxOf49c[94]),msg.RgbBlueTooltip);} ;function window_load(Ox1f){frm=document.getElementById(OxOf49c[95]);localize();initialize();var Ox62=GetQuery(OxOf49c[96]).toUpperCase();if(Ox62==OxOf49c[97]){Ox62=OxOf49c[98];} ;if(Ox62[OxOf49c[28]]==7){Ox62=Ox62.substr(1,6);} ;frm[OxOf49c[12]][OxOf49c[99]]=Ox62;Hex_Changed(Ox1f);Ox62=Form_Get_Hex();SetBg(document.getElementById(OxOf49c[24]),Ox62);frm[OxOf49c[102]][ new Number(GetCookie(OxOf49c[101])||0)][OxOf49c[100]]=true;ColorMode_Changed(Ox1f);var Ox1a6=GetCookie(OxOf49c[103])||OxOf49c[97];var Ox1b8=msg[OxOf49c[77]];for(var i=1;i<33;i++){if(Ox1a6[OxOf49c[28]]/6>=i){Ox62=Ox1a6.substr((i-1)*6,6);var Ox1b9=HexToRgb(Ox62);var title=formatString(msg.RecentTooltip,Ox62,Ox1b9[0],Ox1b9[1],Ox1b9[2]);SetBg(document.getElementById(OxOf49c[104]+i),Ox62);SetTitle(document.getElementById(OxOf49c[104]+i),title);document.getElementById(OxOf49c[104]+i)[OxOf49c[1]]=pnlRecent_Click;} else {document.getElementById(OxOf49c[104]+i)[OxOf49c[106]][OxOf49c[105]]=OxOf49c[107];} ;} ;} ;function btnAbout_Click(){if(confirm(msg.About)){window.open(OxOf49c[108],OxOf49c[109]);} ;} ;function pnlRecent_Click(Ox1f){var Ox4=Ox1f[OxOf49c[111]][OxOf49c[106]][OxOf49c[110]];if(Ox4.indexOf(OxOf49c[112])!=-1){var Ox1b9= new Array();Ox4=Ox4.substr(Ox4.indexOf(OxOf49c[113])+1);Ox4=Ox4.substr(0,Ox4.indexOf(OxOf49c[114]));Ox1b9[0]= new Number(Ox4.substr(0,Ox4.indexOf(OxOf49c[115])));Ox4=Ox4.substr(Ox4.indexOf(OxOf49c[115])+1);Ox1b9[1]= new Number(Ox4.substr(0,Ox4.indexOf(OxOf49c[115])));Ox1b9[2]= new Number(Ox4.substr(Ox4.indexOf(OxOf49c[115])+1));Ox4=RgbToHex(Ox1b9);} else {Ox4=Ox4.substr(1,6).toUpperCase();} ;frm[OxOf49c[12]][OxOf49c[99]]=Ox4;Hex_Changed(Ox1f);} ;function pnlOldClick_Click(Ox1f){frm[OxOf49c[12]][OxOf49c[99]]=document.getElementById(OxOf49c[24])[OxOf49c[106]][OxOf49c[110]].substr(1,6).toUpperCase();Hex_Changed(Ox1f);} ;function rdoHsb_Hue_Click(Ox1f){frm[OxOf49c[14]][OxOf49c[100]]=true;ColorMode_Changed(Ox1f);} ;function rdoHsb_Saturation_Click(Ox1f){frm[OxOf49c[15]][OxOf49c[100]]=true;ColorMode_Changed(Ox1f);} ;function rdoHsb_Brightness_Click(Ox1f){frm[OxOf49c[16]][OxOf49c[100]]=true;ColorMode_Changed(Ox1f);} ;function Hide(){for(var i=0;i<arguments[OxOf49c[28]];i++){if(arguments[i]){arguments[i][OxOf49c[106]][OxOf49c[116]]=OxOf49c[117];} ;} ;} ;function Show(){for(var i=0;i<arguments[OxOf49c[28]];i++){if(arguments[i]){arguments[i][OxOf49c[106]][OxOf49c[116]]=OxOf49c[97];} ;} ;} ;function SetValue(){for(var i=0;i<arguments[OxOf49c[28]];i+=2){arguments[i][OxOf49c[99]]=arguments[i+1];} ;} ;function SetTitle(){for(var i=0;i<arguments[OxOf49c[28]];i+=2){arguments[i][OxOf49c[118]]=arguments[i+1];} ;} ;function SetHTML(){for(var i=0;i<arguments[OxOf49c[28]];i+=2){arguments[i][OxOf49c[119]]=arguments[i+1];} ;} ;function SetBg(){for(var i=0;i<arguments[OxOf49c[28]];i+=2){if(arguments[i]){arguments[i][OxOf49c[106]][OxOf49c[110]]=OxOf49c[76]+arguments[i+1];} ;} ;} ;function SetBgPosition(){for(var i=0;i<arguments[OxOf49c[28]];i+=3){arguments[i][OxOf49c[106]][OxOf49c[120]]=arguments[i+1]+OxOf49c[121]+arguments[i+2]+OxOf49c[122];} ;} ;function ColorMode_Changed(Ox1f){for(var i=0;i<3;i++){if(frm[OxOf49c[102]][i][OxOf49c[100]]){ColorMode=i;} ;} ;SetCookie(OxOf49c[101],ColorMode,60*60*24*365);Hide(document.getElementById(OxOf49c[123]),document.getElementById(OxOf49c[124]),document.getElementById(OxOf49c[125]),document.getElementById(OxOf49c[126]),document.getElementById(OxOf49c[127]),document.getElementById(OxOf49c[128]),document.getElementById(OxOf49c[129]),document.getElementById(OxOf49c[130]),document.getElementById(OxOf49c[131]),document.getElementById(OxOf49c[132]),document.getElementById(OxOf49c[133]),document.getElementById(OxOf49c[134]),document.getElementById(OxOf49c[135]),document.getElementById(OxOf49c[136]));switch(ColorMode){case 0:document.getElementById(OxOf49c[138])[OxOf49c[137]]=OxOf49c[139];Show(document.getElementById(OxOf49c[123]),document.getElementById(OxOf49c[124]),document.getElementById(OxOf49c[125]),document.getElementById(OxOf49c[126]));Hsb_Changed(Ox1f);break ;;case 1:document.getElementById(OxOf49c[138])[OxOf49c[137]]=OxOf49c[140];document.getElementById(OxOf49c[127])[OxOf49c[137]]=OxOf49c[141];Show(document.getElementById(OxOf49c[123]),document.getElementById(OxOf49c[127]));document.getElementById(OxOf49c[123])[OxOf49c[106]][OxOf49c[110]]=OxOf49c[142];Hsb_Changed(Ox1f);break ;;case 2:document.getElementById(OxOf49c[138])[OxOf49c[137]]=OxOf49c[140];document.getElementById(OxOf49c[127])[OxOf49c[137]]=OxOf49c[143];Show(document.getElementById(OxOf49c[123]),document.getElementById(OxOf49c[127]));document.getElementById(OxOf49c[123])[OxOf49c[106]][OxOf49c[110]]=OxOf49c[144];Hsb_Changed(Ox1f);break ;;default:break ;;} ;} ;function btnWebSafeColor_Click(Ox1f){var Ox1b9=HexToRgb(frm[OxOf49c[12]].value);Ox1b9=RgbToWebSafeRgb(Ox1b9);frm[OxOf49c[12]][OxOf49c[99]]=RgbToHex(Ox1b9);Hex_Changed(Ox1f);} ;function checkWebSafe(){var Ox1b9=Form_Get_Rgb();if(RgbIsWebSafe(Ox1b9)){Hide(frm.btnWebSafeColor,document.getElementById(OxOf49c[22]),document.getElementById(OxOf49c[23]));} else {Ox1b9=RgbToWebSafeRgb(Ox1b9);SetBg(document.getElementById(OxOf49c[22]),RgbToHex(Ox1b9));Show(frm.btnWebSafeColor,document.getElementById(OxOf49c[22]),document.getElementById(OxOf49c[23]));} ;} ;function validateNumber(Ox1f){var Ox1ce=String.fromCharCode(Ox1f.which);if(IgnoreKey(Ox1f)){return ;} ;if(OxOf49c[145].indexOf(Ox1ce)!=-1){return ;} ;Ox1f[OxOf49c[146]]=0;} ;function validateHex(Ox1f){if(IgnoreKey(Ox1f)){return ;} ;var Ox1ce=String.fromCharCode(Ox1f.which);if(OxOf49c[147].indexOf(Ox1ce)!=-1){return ;} ;if(OxOf49c[148].indexOf(Ox1ce)!=-1){return ;} ;} ;function IgnoreKey(Ox1f){var Ox1ce=String.fromCharCode(Ox1f.which);var Ox1d1= new Array(0,8,9,13,27);if(Ox1ce==null){return true;} ;for(var i=0;i<5;i++){if(Ox1f[OxOf49c[146]]==Ox1d1[i]){return true;} ;} ;return false;} ;function btnCancel_Click(){if(window[OxOf49c[149]]){window[OxOf49c[149]].focus();} ;top.close();} ;function btnOK_Click(){var Ox62= new String(frm[OxOf49c[12]].value);if(window[OxOf49c[149]]){try{window[OxOf49c[149]].ColorPicker_Picked(Ox62);} catch(e){} ;window[OxOf49c[149]].focus();} ;recent=GetCookie(OxOf49c[103])||OxOf49c[97];for(var i=0;i<recent[OxOf49c[28]];i+=6){if(recent.substr(i,6)==Ox62){recent=recent.substr(0,i)+recent.substr(i+6);i-=6;} ;} ;if(recent[OxOf49c[28]]>31*6){recent=recent.substr(0,31*6);} ;recent=frm[OxOf49c[12]][OxOf49c[99]]+recent;SetCookie(OxOf49c[103],recent,60*60*24*365);top.close();} ;function SetGradientPosition(Ox1f,Oxf6,Oxc4){Oxf6=Oxf6-POSITIONADJUSTX+5;Oxc4=Oxc4-POSITIONADJUSTY+5;Oxf6-=7;Oxc4-=27;Oxf6=Oxf6<0?0:Oxf6>255?255:Oxf6;Oxc4=Oxc4<0?0:Oxc4>255?255:Oxc4;SetBgPosition(document.getElementById(OxOf49c[150]),Oxf6-5,Oxc4-5);switch(ColorMode){case 0:var Ox1d5= new Array(0,0,0);Ox1d5[1]=Oxf6/255;Ox1d5[2]=1-(Oxc4/255);frm[OxOf49c[7]][OxOf49c[99]]=Math.round(Ox1d5[1]*100);frm[OxOf49c[8]][OxOf49c[99]]=Math.round(Ox1d5[2]*100);Hsb_Changed(Ox1f);break ;;case 1:var Ox1d5= new Array(0,0,0);Ox1d5[0]=Oxf6/255;Ox1d5[2]=1-(Oxc4/255);frm[OxOf49c[5]][OxOf49c[99]]=Ox1d5[0]==1?0:Math.round(Ox1d5[0]*360);frm[OxOf49c[8]][OxOf49c[99]]=Math.round(Ox1d5[2]*100);Hsb_Changed(Ox1f);break ;;case 2:var Ox1d5= new Array(0,0,0);Ox1d5[0]=Oxf6/255;Ox1d5[1]=1-(Oxc4/255);frm[OxOf49c[5]][OxOf49c[99]]=Ox1d5[0]==1?0:Math.round(Ox1d5[0]*360);frm[OxOf49c[7]][OxOf49c[99]]=Math.round(Ox1d5[1]*100);Hsb_Changed(Ox1f);break ;;} ;} ;function Hex_Changed(Ox1f){var Ox62=Form_Get_Hex();var Ox1b9=HexToRgb(Ox62);var Ox1d5=RgbToHsb(Ox1b9);Form_Set_Rgb(Ox1b9);Form_Set_Hsb(Ox1d5);SetBg(document.getElementById(OxOf49c[151]),Ox62);SetupCursors(Ox1f);SetupGradients();checkWebSafe();} ;function Rgb_Changed(Ox1f){var Ox1b9=Form_Get_Rgb();var Ox1d5=RgbToHsb(Ox1b9);var Ox62=RgbToHex(Ox1b9);Form_Set_Hsb(Ox1d5);Form_Set_Hex(Ox62);SetBg(document.getElementById(OxOf49c[151]),Ox62);SetupCursors(Ox1f);SetupGradients();checkWebSafe();} ;function Hsb_Changed(Ox1f){var Ox1d5=Form_Get_Hsb();var Ox1b9=HsbToRgb(Ox1d5);var Ox62=RgbToHex(Ox1b9);Form_Set_Rgb(Ox1b9);Form_Set_Hex(Ox62);SetBg(document.getElementById(OxOf49c[151]),Ox62);SetupCursors(Ox1f);SetupGradients();checkWebSafe();} ;function Form_Set_Hex(Ox62){frm[OxOf49c[12]][OxOf49c[99]]=Ox62;} ;function Form_Get_Hex(){var Ox62= new String(frm[OxOf49c[12]].value);for(var i=0;i<Ox62[OxOf49c[28]];i++){if(OxOf49c[152].indexOf(Ox62.substr(i,1))==-1){Ox62=OxOf49c[153];frm[OxOf49c[12]][OxOf49c[99]]=Ox62;alert(formatString(msg.BadNumber,OxOf49c[153],OxOf49c[98]));break ;} ;} ;while(Ox62[OxOf49c[28]]<6){Ox62=OxOf49c[154]+Ox62;} ;return Ox62;} ;function Form_Get_Hsb(){var Ox1d5= new Array(0,0,0);Ox1d5[0]= new Number(frm[OxOf49c[5]].value)/360;Ox1d5[1]= new Number(frm[OxOf49c[7]].value)/100;Ox1d5[2]= new Number(frm[OxOf49c[8]].value)/100;if(Ox1d5[0]>1||isNaN(Ox1d5[0])){Ox1d5[0]=1;frm[OxOf49c[5]][OxOf49c[99]]=360;alert(formatString(msg.BadNumber,0,360));} ;if(Ox1d5[1]>1||isNaN(Ox1d5[1])){Ox1d5[1]=1;frm[OxOf49c[7]][OxOf49c[99]]=100;alert(formatString(msg.BadNumber,0,100));} ;if(Ox1d5[2]>1||isNaN(Ox1d5[2])){Ox1d5[2]=1;frm[OxOf49c[8]][OxOf49c[99]]=100;alert(formatString(msg.BadNumber,0,100));} ;return Ox1d5;} ;function Form_Set_Hsb(Ox1d5){SetValue(frm.txtHSB_Hue,Math.round(Ox1d5[0]*360),frm.txtHSB_Saturation,Math.round(Ox1d5[1]*100),frm.txtHSB_Brightness,Math.round(Ox1d5[2]*100));} ;function Form_Get_Rgb(){var Ox1b9= new Array(0,0,0);Ox1b9[0]= new Number(frm[OxOf49c[9]].value);Ox1b9[1]= new Number(frm[OxOf49c[10]].value);Ox1b9[2]= new Number(frm[OxOf49c[11]].value);if(Ox1b9[0]>255||isNaN(Ox1b9[0])||Ox1b9[0]!=Math.round(Ox1b9[0])){Ox1b9[0]=255;frm[OxOf49c[9]][OxOf49c[99]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox1b9[1]>255||isNaN(Ox1b9[1])||Ox1b9[1]!=Math.round(Ox1b9[1])){Ox1b9[1]=255;frm[OxOf49c[10]][OxOf49c[99]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox1b9[2]>255||isNaN(Ox1b9[2])||Ox1b9[2]!=Math.round(Ox1b9[2])){Ox1b9[2]=255;frm[OxOf49c[11]][OxOf49c[99]]=255;alert(formatString(msg.BadNumber,0,255));} ;return Ox1b9;} ;function Form_Set_Rgb(Ox1b9){frm[OxOf49c[9]][OxOf49c[99]]=Ox1b9[0];frm[OxOf49c[10]][OxOf49c[99]]=Ox1b9[1];frm[OxOf49c[11]][OxOf49c[99]]=Ox1b9[2];} ;function SetupCursors(Ox1f){var Ox1d5=Form_Get_Hsb();var Ox1b9=Form_Get_Rgb();if(RgbToYuv(Ox1b9)[0]>=0.5){SetGradientPositionDark();} else {SetGradientPositionLight();} ;if(Ox1f[OxOf49c[111]]!=null){if(Ox1f[OxOf49c[111]][OxOf49c[155]]==OxOf49c[17]){return ;} ;if(Ox1f[OxOf49c[111]][OxOf49c[155]]==OxOf49c[21]){return ;} ;} ;var Oxf6;var Oxc4;var Ox1e0;if(ColorMode>=0&&ColorMode<=2){for(var i=0;i<3;i++){Ox1d5[i]*=255;} ;} ;switch(ColorMode){case 0:Oxf6=Ox1d5[1];Oxc4=Ox1d5[2];Ox1e0=Ox1d5[0]==0?1:Ox1d5[0];break ;;case 1:Oxf6=Ox1d5[0]==0?1:Ox1d5[0];Oxc4=Ox1d5[2];Ox1e0=Ox1d5[1];break ;;case 2:Oxf6=Ox1d5[0]==0?1:Ox1d5[0];Oxc4=Ox1d5[1];Ox1e0=Ox1d5[2];break ;;} ;Oxc4=255-Oxc4;Ox1e0=255-Ox1e0;SetBgPosition(document.getElementById(OxOf49c[150]),Oxf6-5,Oxc4-5);document.getElementById(OxOf49c[157])[OxOf49c[106]][OxOf49c[156]]=(Ox1e0+27)+OxOf49c[122];} ;function SetupGradients(){var Ox1d5=Form_Get_Hsb();var Ox1b9=Form_Get_Rgb();switch(ColorMode){case 0:SetBg(document.getElementById(OxOf49c[123]),RgbToHex(HueToRgb(Ox1d5[0])));break ;;case 1:SetBg(document.getElementById(OxOf49c[127]),RgbToHex(HsbToRgb( new Array(Ox1d5[0],1,Ox1d5[2]))));break ;;case 2:SetBg(document.getElementById(OxOf49c[127]),RgbToHex(HsbToRgb( new Array(Ox1d5[0],Ox1d5[1],1))));break ;;default:;} ;} ;function SetGradientPositionDark(){if(GradientPositionDark){return ;} ;GradientPositionDark=true;document.getElementById(OxOf49c[150])[OxOf49c[106]][OxOf49c[158]]=OxOf49c[159];} ;function SetGradientPositionLight(){if(!GradientPositionDark){return ;} ;GradientPositionDark=false;document.getElementById(OxOf49c[150])[OxOf49c[106]][OxOf49c[158]]=OxOf49c[160];} ;function pnlGradient_Top_Click(Ox1f){Ox1f[OxOf49c[161]]=true;SetGradientPosition(Ox1f,Ox1f[OxOf49c[162]]-5,Ox1f[OxOf49c[163]]-5);document.getElementById(OxOf49c[17])[OxOf49c[164]]=OxOf49c[165];_down=false;} ;var _down=false;function pnlGradient_Top_MouseMove(Ox1f){Ox1f[OxOf49c[161]]=true;if(!_down){return ;} ;SetGradientPosition(Ox1f,Ox1f[OxOf49c[162]]-5,Ox1f[OxOf49c[163]]-5);} ;function pnlGradient_Top_MouseDown(Ox1f){Ox1f[OxOf49c[161]]=true;_down=true;SetGradientPosition(Ox1f,Ox1f[OxOf49c[162]]-5,Ox1f[OxOf49c[163]]-5);document.getElementById(OxOf49c[17])[OxOf49c[164]]=OxOf49c[166];} ;function pnlGradient_Top_MouseUp(Ox1f){_down=false;Ox1f[OxOf49c[161]]=true;SetGradientPosition(Ox1f,Ox1f[OxOf49c[162]]-5,Ox1f[OxOf49c[163]]-5);document.getElementById(OxOf49c[17])[OxOf49c[164]]=OxOf49c[165];} ;function Document_MouseUp(){e[OxOf49c[161]]=true;document.getElementById(OxOf49c[17])[OxOf49c[164]]=OxOf49c[165];} ;function SetVerticalPosition(Ox1f,Ox1e0){var Ox1e0=Ox1e0-POSITIONADJUSTZ;if(Ox1e0<27){Ox1e0=27;} ;if(Ox1e0>282){Ox1e0=282;} ;document.getElementById(OxOf49c[157])[OxOf49c[106]][OxOf49c[156]]=Ox1e0+OxOf49c[122];Ox1e0=1-((Ox1e0-27)/255);switch(ColorMode){case 0:if(Ox1e0==1){Ox1e0=0;} ;frm[OxOf49c[5]][OxOf49c[99]]=Math.round(Ox1e0*360);Hsb_Changed(Ox1f);break ;;case 1:frm[OxOf49c[7]][OxOf49c[99]]=Math.round(Ox1e0*100);Hsb_Changed(Ox1f);break ;;case 2:frm[OxOf49c[8]][OxOf49c[99]]=Math.round(Ox1e0*100);Hsb_Changed(Ox1f);break ;;} ;} ;function pnlVertical_Top_Click(Ox1f){SetVerticalPosition(Ox1f,Ox1f[OxOf49c[163]]-5);Ox1f[OxOf49c[161]]=true;} ;function pnlVertical_Top_MouseMove(Ox1f){if(!window[OxOf49c[167]]){return ;} ;if(Ox1f[OxOf49c[146]]!=1){return ;} ;SetVerticalPosition(Ox1f,Ox1f[OxOf49c[163]]-5);Ox1f[OxOf49c[161]]=true;} ;function pnlVertical_Top_MouseDown(Ox1f){window[OxOf49c[167]]=true;SetVerticalPosition(Ox1f,Ox1f[OxOf49c[163]]-5);Ox1f[OxOf49c[161]]=true;} ;function pnlVertical_Top_MouseUp(Ox1f){window[OxOf49c[167]]=false;SetVerticalPosition(Ox1f,Ox1f[OxOf49c[163]]-5);Ox1f[OxOf49c[161]]=true;} ;function SetCookie(name,Ox4f,Ox50){var Ox51=name+OxOf49c[168]+escape(Ox4f)+OxOf49c[169];if(Ox50){var Ox52= new Date();Ox52.setSeconds(Ox52.getSeconds()+Ox50);Ox51+=OxOf49c[170]+Ox52.toUTCString()+OxOf49c[171];} ;document[OxOf49c[172]]=Ox51;} ;function GetCookie(name){var Ox54=document[OxOf49c[172]].split(OxOf49c[171]);for(var i=0;i<Ox54[OxOf49c[28]];i++){var Ox55=Ox54[i].split(OxOf49c[168]);if(name==Ox55[0].replace(/\s/g,OxOf49c[97])){return unescape(Ox55[1]);} ;} ;} ;function GetCookieDictionary(){var Ox57={};var Ox54=document[OxOf49c[172]].split(OxOf49c[171]);for(var i=0;i<Ox54[OxOf49c[28]];i++){var Ox55=Ox54[i].split(OxOf49c[168]);Ox57[Ox55[0].replace(/\s/g,OxOf49c[97])]=unescape(Ox55[1]);} ;return Ox57;} ;function GetQuery(name){var i=0;while(window[OxOf49c[174]][OxOf49c[173]].indexOf(name+OxOf49c[168],i)!=-1){var Ox4f=window[OxOf49c[174]][OxOf49c[173]].substr(window[OxOf49c[174]][OxOf49c[173]].indexOf(name+OxOf49c[168],i));Ox4f=Ox4f.substr(name[OxOf49c[28]]+1);if(Ox4f.indexOf(OxOf49c[175])!=-1){if(Ox4f.indexOf(OxOf49c[175])==0){Ox4f=OxOf49c[97];} else {Ox4f=Ox4f.substr(0,Ox4f.indexOf(OxOf49c[175]));} ;} ;return unescape(Ox4f);} ;return OxOf49c[97];} ;function RgbIsWebSafe(Ox1b9){var Ox62=RgbToHex(Ox1b9);for(var i=0;i<3;i++){if(OxOf49c[176].indexOf(Ox62.substr(i*2,2))==-1){return false;} ;} ;return true;} ;function RgbToWebSafeRgb(Ox1b9){var Ox1f0= new Array(Ox1b9[0],Ox1b9[1],Ox1b9[2]);if(RgbIsWebSafe(Ox1b9)){return Ox1f0;} ;var Ox1f1= new Array(0x00,0x33,0x66,0x99,0xCC,0xFF);for(var i=0;i<3;i++){for(var Ox41=1;Ox41<6;Ox41++){if(Ox1f0[i]>Ox1f1[Ox41-1]&&Ox1f0[i]<Ox1f1[Ox41]){if(Ox1f0[i]-Ox1f1[Ox41-1]>Ox1f1[Ox41]-Ox1f0[i]){Ox1f0[i]=Ox1f1[Ox41];} else {Ox1f0[i]=Ox1f1[Ox41-1];} ;break ;} ;} ;} ;return Ox1f0;} ;function RgbToYuv(Ox1b9){var Ox1f3= new Array();Ox1f3[0]=(Ox1b9[0]*0.299+Ox1b9[1]*0.587+Ox1b9[2]*0.114)/255;Ox1f3[1]=(Ox1b9[0]*-0.169+Ox1b9[1]*-0.332+Ox1b9[2]*0.500+128)/255;Ox1f3[2]=(Ox1b9[0]*0.500+Ox1b9[1]*-0.419+Ox1b9[2]*-0.0813+128)/255;return Ox1f3;} ;function RgbToHsb(Ox1b9){var Ox1f5= new Array(Ox1b9[0],Ox1b9[1],Ox1b9[2]);var Ox1f6= new Number(1);var Ox1f7= new Number(0);var Ox1f8= new Number(1);var Ox1d5= new Array(0,0,0);var Ox1f9= new Array();for(var i=0;i<3;i++){Ox1f5[i]=Ox1b9[i]/255;if(Ox1f5[i]<Ox1f6){Ox1f6=Ox1f5[i];} ;if(Ox1f5[i]>Ox1f7){Ox1f7=Ox1f5[i];} ;} ;Ox1f8=Ox1f7-Ox1f6;Ox1d5[2]=Ox1f7;if(Ox1f8==0){return Ox1d5;} ;Ox1d5[1]=Ox1f8/Ox1f7;for(var i=0;i<3;i++){Ox1f9[i]=(((Ox1f7-Ox1f5[i])/6)+(Ox1f8/2))/Ox1f8;} ;if(Ox1f5[0]==Ox1f7){Ox1d5[0]=Ox1f9[2]-Ox1f9[1];} else {if(Ox1f5[1]==Ox1f7){Ox1d5[0]=(1/3)+Ox1f9[0]-Ox1f9[2];} else {if(Ox1f5[2]==Ox1f7){Ox1d5[0]=(2/3)+Ox1f9[1]-Ox1f9[0];} ;} ;} ;if(Ox1d5[0]<0){Ox1d5[0]+=1;} else {if(Ox1d5[0]>1){Ox1d5[0]-=1;} ;} ;return Ox1d5;} ;function HsbToRgb(Ox1d5){var Ox1b9=HueToRgb(Ox1d5[0]);var Ox2a=Ox1d5[2]*255;for(var i=0;i<3;i++){Ox1b9[i]=Ox1b9[i]*Ox1d5[2];Ox1b9[i]=((Ox1b9[i]-Ox2a)*Ox1d5[1])+Ox2a;Ox1b9[i]=Math.round(Ox1b9[i]);} ;return Ox1b9;} ;function RgbToHex(Ox1b9){var Ox62= new String();for(var i=0;i<3;i++){Ox1b9[2-i]=Math.round(Ox1b9[2-i]);Ox62=Ox1b9[2-i].toString(16)+Ox62;if(Ox62[OxOf49c[28]]%2==1){Ox62=OxOf49c[154]+Ox62;} ;} ;return Ox62.toUpperCase();} ;function HexToRgb(Ox62){var Ox1b9= new Array();for(var i=0;i<3;i++){Ox1b9[i]= new Number(OxOf49c[177]+Ox62.substr(i*2,2));} ;return Ox1b9;} ;function HueToRgb(Ox1fe){var Ox1ff=Ox1fe*360;var Ox1b9= new Array(0,0,0);var Ox200=(Ox1ff%60)/60;if(Ox1ff<60){Ox1b9[0]=255;Ox1b9[1]=Ox200*255;} else {if(Ox1ff<120){Ox1b9[1]=255;Ox1b9[0]=(1-Ox200)*255;} else {if(Ox1ff<180){Ox1b9[1]=255;Ox1b9[2]=Ox200*255;} else {if(Ox1ff<240){Ox1b9[2]=255;Ox1b9[1]=(1-Ox200)*255;} else {if(Ox1ff<300){Ox1b9[2]=255;Ox1b9[0]=Ox200*255;} else {if(Ox1ff<360){Ox1b9[0]=255;Ox1b9[2]=(1-Ox200)*255;} ;} ;} ;} ;} ;} ;return Ox1b9;} ;function CheckHexSelect(){if(window[OxOf49c[178]]&&window[OxOf49c[179]]&&frm[OxOf49c[12]]){var Ox4=OxOf49c[76]+frm[OxOf49c[12]][OxOf49c[99]];if(Ox4[OxOf49c[28]]==7){if(window[OxOf49c[180]]!=Ox4){window[OxOf49c[180]]=Ox4;window.do_select(Ox4);} ;} ;} ;} ;setInterval(CheckHexSelect,10);