var OxOd844=["onload","contentWindow","idSource","innerHTML","body","document","","designMode","on","contentEditable","fontFamily","style","Tahoma","fontSize","11px","color","black","background","white","length","\x3C$1$3","\x26nbsp;","\x22","\x27","$1","\x26amp;","\x26lt;","\x26gt;","\x26#39;","\x26quot;"];var editor=Window_GetDialogArguments(window);function cancel(){Window_CloseDialog(window);} ;window[OxOd844[0]]=function (){var iframe=document.getElementById(OxOd844[2])[OxOd844[1]];iframe[OxOd844[5]][OxOd844[4]][OxOd844[3]]=OxOd844[6];iframe[OxOd844[5]][OxOd844[7]]=OxOd844[8];iframe[OxOd844[5]][OxOd844[4]][OxOd844[9]]=true;iframe[OxOd844[5]][OxOd844[4]][OxOd844[11]][OxOd844[10]]=OxOd844[12];iframe[OxOd844[5]][OxOd844[4]][OxOd844[11]][OxOd844[13]]=OxOd844[14];iframe[OxOd844[5]][OxOd844[4]][OxOd844[11]][OxOd844[15]]=OxOd844[16];iframe[OxOd844[5]][OxOd844[4]][OxOd844[11]][OxOd844[17]]=OxOd844[18];iframe.focus();} ;function insertContent(){var iframe=document.getElementById(OxOd844[2])[OxOd844[1]];var Ox195=iframe[OxOd844[5]][OxOd844[4]][OxOd844[3]];if(Ox195&&Ox195[OxOd844[19]]>0){Ox195=_CleanCode(Ox195);if(Ox195.match(/<*>/g)){Ox195=String_HtmlEncode(Ox195);} ;editor.PasteHTML(Ox195);Window_CloseDialog(window);} ;} ;function _CleanCode(Ox23c){Ox23c=Ox23c.replace(/<\\?\??xml[^>]>/gi,OxOd844[6]);Ox23c=Ox23c.replace(/<([\w]+) class=([^ |>]*)([^>]*)/gi,OxOd844[20]);Ox23c=Ox23c.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi,OxOd844[20]);Ox23c=Ox23c.replace(/\s*mso-[^:]+:[^;"]+;?/gi,OxOd844[6]);Ox23c=Ox23c.replace(/<o:p>\s*<\/o:p>/g,OxOd844[6]);Ox23c=Ox23c.replace(/<o:p>.*?<\/o:p>/g,OxOd844[21]);Ox23c=Ox23c.replace(/<\/?\w+:[^>]*>/gi,OxOd844[6]);Ox23c=Ox23c.replace(/<\!--.*-->/g,OxOd844[6]);Ox23c=Ox23c.replace(/[\\]/gi,OxOd844[22]);Ox23c=Ox23c.replace(/[\\]/gi,OxOd844[23]);Ox23c=Ox23c.replace(/<\\?\?xml[^>]*>/gi,OxOd844[6]);Ox23c=Ox23c.replace(/<(\w+)[^>]*\sstyle="[^"]*DISPLAY\s?:\s?none(.*?)<\/\1>/ig,OxOd844[6]);Ox23c=Ox23c.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/gi,OxOd844[21]);Ox23c=Ox23c.replace(/<span\s*[^>]*><\/span>/gi,OxOd844[6]);Ox23c=Ox23c.replace(/\s*style="\s*"/gi,OxOd844[6]);Ox23c=Ox23c.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxOd844[6]);Ox23c=Ox23c.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxOd844[6]);Ox23c=Ox23c.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxOd844[6]);while(Ox23c.match(/<span\s*>(.*?)<\/span>/gi)){Ox23c=Ox23c.replace(/<span\s*>(.*?)<\/span>/gi,OxOd844[24]);} ;while(Ox23c.match(/<font\s*>(.*?)<\/font>/gi)){Ox23c=Ox23c.replace(/<font\s*>(.*?)<\/font>/gi,OxOd844[24]);} ;Ox23c=Ox23c.replace(/<a name="?OLE_LINK\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOd844[24]);Ox23c=Ox23c.replace(/<a name="?_Hlt\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOd844[24]);Ox23c=Ox23c.replace(/<a name="?_Toc\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOd844[24]);Ox23c=Ox23c.replace(/<p([^>])*>(&nbsp;)*\s*<\/p>/gi,OxOd844[6]);Ox23c=Ox23c.replace(/<p([^>])*>(&nbsp;)<\/p>/gi,OxOd844[6]);return Ox23c;} ;function String_HtmlEncode(Ox17c){if(Ox17c==null){return OxOd844[6];} ;Ox17c=Ox17c.replace(/&/g,OxOd844[25]);Ox17c=Ox17c.replace(/</g,OxOd844[26]);Ox17c=Ox17c.replace(/>/g,OxOd844[27]);Ox17c=Ox17c.replace(/'/g,OxOd844[28]);Ox17c=Ox17c.replace(/\x22/g,OxOd844[29]);return Ox17c;} ;