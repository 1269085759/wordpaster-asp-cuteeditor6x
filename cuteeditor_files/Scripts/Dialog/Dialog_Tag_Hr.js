var OxOf672=["inp_width","eenheid","alignment","hrcolor","hrcolorpreview","shade","sel_size","width","style","value","px","%","size","align","color","backgroundColor","noShade","noshade","","onclick"];var inp_width=Window_GetElement(window,OxOf672[0],true);var eenheid=Window_GetElement(window,OxOf672[1],true);var alignment=Window_GetElement(window,OxOf672[2],true);var hrcolor=Window_GetElement(window,OxOf672[3],true);var hrcolorpreview=Window_GetElement(window,OxOf672[4],true);var shade=Window_GetElement(window,OxOf672[5],true);var sel_size=Window_GetElement(window,OxOf672[6],true);UpdateState=function UpdateState_Hr(){} ;SyncToView=function SyncToView_Hr(){if(element[OxOf672[8]][OxOf672[7]]){if(element[OxOf672[8]][OxOf672[7]].search(/%/)<0){eenheid[OxOf672[9]]=OxOf672[10];inp_width[OxOf672[9]]=element[OxOf672[8]][OxOf672[7]].split(OxOf672[10])[0];} else {eenheid[OxOf672[9]]=OxOf672[11];inp_width[OxOf672[9]]=element[OxOf672[8]][OxOf672[7]].split(OxOf672[11])[0];} ;} ;sel_size[OxOf672[9]]=element[OxOf672[12]];alignment[OxOf672[9]]=element[OxOf672[13]];hrcolor[OxOf672[9]]=element[OxOf672[14]];if(element[OxOf672[14]]){hrcolor[OxOf672[8]][OxOf672[15]]=element[OxOf672[14]];} ;if(element[OxOf672[16]]){shade[OxOf672[9]]=OxOf672[17];} else {shade[OxOf672[9]]=OxOf672[18];} ;} ;SyncTo=function SyncTo_Hr(element){if(sel_size[OxOf672[9]]){element[OxOf672[12]]=sel_size[OxOf672[9]];} ;if(hrcolor[OxOf672[9]]){element[OxOf672[14]]=hrcolor[OxOf672[9]];} ;if(alignment[OxOf672[9]]){element[OxOf672[13]]=alignment[OxOf672[9]];} ;if(shade[OxOf672[9]]==OxOf672[17]){element[OxOf672[16]]=true;} else {element[OxOf672[16]]=false;} ;if(inp_width[OxOf672[9]]){element[OxOf672[8]][OxOf672[7]]=inp_width[OxOf672[9]]+eenheid[OxOf672[9]];} ;} ;hrcolor[OxOf672[19]]=hrcolorpreview[OxOf672[19]]=function hrcolor_onclick(){SelectColor(hrcolor,hrcolorpreview);} ;