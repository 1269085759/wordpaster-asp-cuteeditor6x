var OxOc779=["outer","btnbrowse","inp_src","onclick","value","cssText","style","src","FileName"];var outer=Window_GetElement(window,OxOc779[0],true);var btnbrowse=Window_GetElement(window,OxOc779[1],true);var inp_src=Window_GetElement(window,OxOc779[2],true);btnbrowse[OxOc779[3]]=function btnbrowse_onclick(){function Ox260(Ox6){if(Ox6){inp_src[OxOc779[4]]=Ox6;} ;} ;editor.SetNextDialogWindow(window);editor.ShowSelectFileDialog(Ox260,inp_src.value);} ;UpdateState=function UpdateState_Media(){outer[OxOc779[6]][OxOc779[5]]=element[OxOc779[6]][OxOc779[5]];outer.mergeAttributes(element);if(element[OxOc779[7]]){outer[OxOc779[8]]=element[OxOc779[8]];} else {outer.removeAttribute(OxOc779[8]);} ;} ;SyncToView=function SyncToView_Media(){inp_src[OxOc779[4]]=element[OxOc779[8]];} ;SyncTo=function SyncTo_Media(element){element[OxOc779[8]]=inp_src[OxOc779[4]];} ;