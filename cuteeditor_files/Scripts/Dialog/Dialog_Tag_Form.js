var OxObb32=["inp_action","sel_Method","inp_name","inp_id","inp_encode","sel_target","Name","value","name","id","action","method","encoding","application/x-www-form-urlencoded","","target"];var inp_action=Window_GetElement(window,OxObb32[0],true);var sel_Method=Window_GetElement(window,OxObb32[1],true);var inp_name=Window_GetElement(window,OxObb32[2],true);var inp_id=Window_GetElement(window,OxObb32[3],true);var inp_encode=Window_GetElement(window,OxObb32[4],true);var sel_target=Window_GetElement(window,OxObb32[5],true);UpdateState=function UpdateState_Form(){} ;SyncToView=function SyncToView_Form(){if(element[OxObb32[6]]){inp_name[OxObb32[7]]=element[OxObb32[6]];} ;if(element[OxObb32[8]]){inp_name[OxObb32[7]]=element[OxObb32[8]];} ;inp_id[OxObb32[7]]=element[OxObb32[9]];if(element[OxObb32[10]]){inp_action[OxObb32[7]]=element[OxObb32[10]];} ;if(element[OxObb32[11]]){sel_Method[OxObb32[7]]=element[OxObb32[11]];} ;if(element[OxObb32[12]]==OxObb32[13]){inp_encode[OxObb32[7]]=OxObb32[14];} else {inp_encode[OxObb32[7]]=element[OxObb32[12]];} ;if(element[OxObb32[15]]){sel_target[OxObb32[7]]=element[OxObb32[15]];} ;} ;SyncTo=function SyncTo_Form(element){element[OxObb32[8]]=inp_name[OxObb32[7]];if(element[OxObb32[6]]){element[OxObb32[6]]=inp_name[OxObb32[7]];} else {if(element[OxObb32[8]]){element.removeAttribute(OxObb32[8],0);element[OxObb32[6]]=inp_name[OxObb32[7]];} else {element[OxObb32[6]]=inp_name[OxObb32[7]];} ;} ;element[OxObb32[9]]=inp_id[OxObb32[7]];element[OxObb32[10]]=inp_action[OxObb32[7]];element[OxObb32[11]]=sel_Method[OxObb32[7]];try{element[OxObb32[12]]=inp_encode[OxObb32[7]];} catch(e){} ;element[OxObb32[15]]=sel_target[OxObb32[7]];if(element[OxObb32[15]]==OxObb32[14]){element.removeAttribute(OxObb32[15]);} ;if(element[OxObb32[6]]==OxObb32[14]){element.removeAttribute(OxObb32[6]);} ;if(element[OxObb32[10]]==OxObb32[14]){element.removeAttribute(OxObb32[10]);} ;} ;