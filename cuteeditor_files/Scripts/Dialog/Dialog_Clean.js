var OxO1014=["ig","\x3C/?[^\x3E]*\x3E","","allhtml","\x3C\x5C?xml[^\x3E]*\x3E","\x3C/?[a-z]+:[^\x3E]*\x3E","(\x3C[^\x3E]+) class=[^ |^\x3E]*([^\x3E]*\x3E)","$1 $2","(\x3C[^\x3E]+) style=\x22[^\x22]*\x22([^\x3E]*\x3E)","\x3Cspan[^\x3E]*\x3E\x3C/span[^\x3E]*\x3E","\x3Cspan\x3E\x3Cspan\x3E","\x3Cspan\x3E","\x3C/span\x3E\x3C/span\x3E","\x3C/span\x3E","[ ]*\x3E","\x3E","word","css","\x3C/?font[^\x3E]*\x3E","font","\x3C/?span[^\x3E]*\x3E","span"];var editor=Window_GetDialogArguments(window);function execRE(Ox193,Ox194,Ox195){var Ox196= new RegExp(Ox193,OxO1014[0]);return Ox195.replace(Ox196,Ox194);} ;function getContent(){return editor.GetBodyInnerHTML();} ;function setContent(Ox195){editor.SetHTML(Ox195);} ;function codeCleaner(Ox108){var Ox195=getContent();switch(Ox108){case OxO1014[3]:Ox195=execRE(OxO1014[1],OxO1014[2],Ox195);break ;;case OxO1014[16]:Ox195=execRE(OxO1014[4],OxO1014[2],Ox195);Ox195=execRE(OxO1014[5],OxO1014[2],Ox195);Ox195=execRE(OxO1014[6],OxO1014[7],Ox195);Ox195=execRE(OxO1014[8],OxO1014[7],Ox195);Ox195=execRE(OxO1014[9],OxO1014[2],Ox195);Ox195=execRE(OxO1014[10],OxO1014[11],Ox195);Ox195=execRE(OxO1014[12],OxO1014[13],Ox195);Ox195=execRE(OxO1014[14],OxO1014[15],Ox195);break ;;case OxO1014[17]:Ox195=execRE(OxO1014[6],OxO1014[7],Ox195);Ox195=execRE(OxO1014[8],OxO1014[7],Ox195);break ;;case OxO1014[19]:Ox195=execRE(OxO1014[18],OxO1014[2],Ox195);break ;;case OxO1014[21]:Ox195=execRE(OxO1014[20],OxO1014[2],Ox195);break ;;} ;setContent(Ox195);} ;