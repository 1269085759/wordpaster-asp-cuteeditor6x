var OxOe5e3=["0123456789ABCDEF","0000","all","getElementById","","|","fond","\x3Cimg src=\x22../Images/multiclavier.gif\x22 width=404 height=152 border=\x220\x22\x3E\x3Cbr /\x3E","sign","car","simpledia","simple","majus","\x26nbsp;","double","minus","doubledia","kb-","kb+","Delete","Clear","Back","CapsLock","Enter","Shift","\x3C|\x3C","Space","\x3E|\x3E","clavscroll(-3)","clavscroll(3)","faire(\x22del\x22)","RAZ()","faire(\x22bck\x22)","bloq()","faire(\x22\x5Cn\x22)","haut()","faire(\x22ar\x22)","faire(\x22 \x22)","faire(\x22av\x22)","act","action","clav","clavier","masque","\x3Cimg src=\x22../Images/1x1.gif\x22 width=404 height=152 border=\x220\x22 usemap=\x22#clavier\x22\x3E","\x3Cmap name=\x22clavier\x22\x3E","\x3Carea coords=\x22",",","\x22 href=\x22javascript:void(0)\x22 onClick=\x27javascript:ecrire(",")\x27\x3E","\x22 href=\x22javascript:void(0)\x22 onClick=\x27javascript:","\x27\x3E","\x22 href=\x27javascript:charger(","\x3C/map\x3E","length"," ","%0D%0A","av","ar","bck","del","\x3Cspan class=","\x3E","\x3C/span\x3E","\x3Cdiv id=\x22","\x22 \x3E","\x3C/div\x3E","left","style","px","top","innerHTML","act0","act1","langue=","cookie",";","langue","=","; ","expires="];var caps=0,lock=0,hexchars=OxOe5e3[0],accent=OxOe5e3[1],clavdeb=0;var clav= new Array();j=0;for(i in Maj){clav[j]=i;j++;} ;var ns6=((!document[OxOe5e3[2]])&&(document[OxOe5e3[3]]));var ie=document[OxOe5e3[2]];var langue=getCk();if(langue==OxOe5e3[4]){langue=clav[clavdeb];} ;CarMaj=Maj[langue].split(OxOe5e3[5]);CarMin=Min[langue].split(OxOe5e3[5]);var posClavierLeft=0,posClavierTop=0;if(ns6){posClavierLeft=0;posClavierTop=80;} else {if(ie){posClavierLeft=0;posClavierTop=80;} ;} ;tracer(OxOe5e3[6],posClavierLeft,posClavierTop,OxOe5e3[7],OxOe5e3[8]);var posX= new Array(0,28,56,84,112,140,168,196,224,252,280,308,336,42,70,98,126,154,182,210,238,266,294,322,350,50,78,106,134,162,190,218,246,274,302,330,64,92,120,148,176,204,232,260,288,316,28,56,84,294,322,350);var posY= new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,42,42,42,42,42,42,42,42,42,42,42,42,70,70,70,70,70,70,70,70,70,70,70,98,98,98,98,98,98,98,98,98,98,126,126,126,126,126,126);var nbTouches=52;for(i=0;i<nbTouches;i++){CarMaj[i]=((CarMaj[i]!=OxOe5e3[1])?(fromhexby4tocar(CarMaj[i])):OxOe5e3[4]);CarMin[i]=((CarMin[i]!=OxOe5e3[1])?(fromhexby4tocar(CarMin[i])):OxOe5e3[4]);if(CarMaj[i]==CarMin[i].toUpperCase()){cecar=((lock==0)&&(caps==0)?CarMin[i]:CarMaj[i]);tracer(OxOe5e3[9]+i,posClavierLeft+6+posX[i],posClavierTop+3+posY[i],cecar,((dia[hexa(cecar)]!=null)?OxOe5e3[10]:OxOe5e3[11]));tracer(OxOe5e3[12]+i,posClavierLeft+15+posX[i],posClavierTop+1+posY[i],OxOe5e3[13],OxOe5e3[14]);tracer(OxOe5e3[15]+i,posClavierLeft+3+posX[i],posClavierTop+9+posY[i],OxOe5e3[13],OxOe5e3[14]);} else {tracer(OxOe5e3[9]+i,posClavierLeft+6+posX[i],posClavierTop+3+posY[i],OxOe5e3[13],OxOe5e3[11]);cecar=CarMin[i];tracer(OxOe5e3[15]+i,posClavierLeft+3+posX[i],posClavierTop+9+posY[i],cecar,((dia[hexa(cecar)]!=null)?OxOe5e3[16]:OxOe5e3[14]));cecar=CarMaj[i];tracer(OxOe5e3[12]+i,posClavierLeft+15+posX[i],posClavierTop+1+posY[i],cecar,((dia[hexa(cecar)]!=null)?OxOe5e3[16]:OxOe5e3[14]));} ;} ;var actC1= new Array(0,371,364,0,378,0,358,0,344,0,112,378);var actC2= new Array(0,0,14,42,42,70,70,98,98,126,126,126);var actC3= new Array(32,403,403,39,403,47,403,61,403,25,291,403);var actC4= new Array(11,11,39,67,67,95,95,123,123,151,151,151);var act= new Array(OxOe5e3[17],OxOe5e3[18],OxOe5e3[19],OxOe5e3[20],OxOe5e3[21],OxOe5e3[22],OxOe5e3[23],OxOe5e3[24],OxOe5e3[24],OxOe5e3[25],OxOe5e3[26],OxOe5e3[27]);var effet= new Array(OxOe5e3[28],OxOe5e3[29],OxOe5e3[30],OxOe5e3[31],OxOe5e3[32],OxOe5e3[33],OxOe5e3[34],OxOe5e3[35],OxOe5e3[35],OxOe5e3[36],OxOe5e3[37],OxOe5e3[38]);var nbActions=12;for(i=0;i<nbActions;i++){tracer(OxOe5e3[39]+i,posClavierLeft+1+actC1[i],posClavierTop-1+actC2[i],act[i],OxOe5e3[40]);} ;var clavC1= new Array(35,119,203,287);var clavC2= new Array(0,0,0,0);var clavC3= new Array(116,200,284,368);var clavC4= new Array(11,11,11,11);for(i=0;i<4;i++){tracer(OxOe5e3[41]+i,posClavierLeft+5+clavC1[i],posClavierTop-1+clavC2[i],clav[i],OxOe5e3[42]);} ;tracer(OxOe5e3[43],posClavierLeft,posClavierTop,OxOe5e3[44]);document.write(OxOe5e3[45]);for(i=0;i<nbTouches;i++){document.write(OxOe5e3[46]+posX[i]+OxOe5e3[47]+posY[i]+OxOe5e3[47]+(posX[i]+25)+OxOe5e3[47]+(posY[i]+25)+OxOe5e3[48]+i+OxOe5e3[49]);} ;for(i=0;i<nbActions;i++){document.write(OxOe5e3[46]+actC1[i]+OxOe5e3[47]+actC2[i]+OxOe5e3[47]+actC3[i]+OxOe5e3[47]+actC4[i]+OxOe5e3[50]+effet[i]+OxOe5e3[51]);} ;for(i=0;i<4;i++){document.write(OxOe5e3[46]+clavC1[i]+OxOe5e3[47]+clavC2[i]+OxOe5e3[47]+clavC3[i]+OxOe5e3[47]+clavC4[i]+OxOe5e3[52]+i+OxOe5e3[49]);} ;document.write(OxOe5e3[53]);function ecrire(i){txt=rechercher()+OxOe5e3[5];subtxt=txt.split(OxOe5e3[5]);ceci=(lock==1)?CarMaj[i]:((caps==1)?CarMaj[i]:CarMin[i]);if(test(ceci)){subtxt[0]+=cardia(ceci);distinguer(false);} else {if(dia[accent]!=null&&dia[hexa(ceci)]!=null){distinguer(false);accent=hexa(ceci);distinguer(true);} else {if(dia[accent]!=null){subtxt[0]+=fromhexby4tocar(accent)+ceci;distinguer(false);} else {if(dia[hexa(ceci)]!=null){accent=hexa(ceci);distinguer(true);} else {subtxt[0]+=ceci;} ;} ;} ;} ;txt=subtxt[0]+OxOe5e3[5]+subtxt[1];afficher(txt);if(caps==1){caps=0;MinusMajus();} ;} ;function faire(Oxa7c){txt=rechercher()+OxOe5e3[5];subtxt=txt.split(OxOe5e3[5]);l0=subtxt[0][OxOe5e3[54]];l1=subtxt[1][OxOe5e3[54]];c1=subtxt[0].substring(0,(l0-2));c2=subtxt[0].substring(0,(l0-1));c3=subtxt[1].substring(0,1);c4=subtxt[1].substring(0,2);c5=subtxt[0].substring((l0-2),l0);c6=subtxt[0].substring((l0-1),l0);c7=subtxt[1].substring(1,l1);c8=subtxt[1].substring(2,l1);if(dia[accent]!=null){if(Oxa7c==OxOe5e3[55]){Oxa7c=fromhexby4tocar(accent);} ;distinguer(false);} ;switch(Oxa7c){case (OxOe5e3[57]):if(escape(c4)!=OxOe5e3[56]){txt=subtxt[0]+c3+OxOe5e3[5]+c7;} else {txt=subtxt[0]+c4+OxOe5e3[5]+c8;} ;break ;;case (OxOe5e3[58]):if(escape(c5)!=OxOe5e3[56]){txt=c2+OxOe5e3[5]+c6+subtxt[1];} else {txt=c1+OxOe5e3[5]+c5+subtxt[1];} ;break ;;case (OxOe5e3[59]):if(escape(c5)!=OxOe5e3[56]){txt=c2+OxOe5e3[5]+subtxt[1];} else {txt=c1+OxOe5e3[5]+subtxt[1];} ;break ;;case (OxOe5e3[60]):if(escape(c4)!=OxOe5e3[56]){txt=subtxt[0]+OxOe5e3[5]+c7;} else {txt=subtxt[0]+OxOe5e3[5]+c8;} ;break ;;default:txt=subtxt[0]+Oxa7c+OxOe5e3[5]+subtxt[1];break ;;} ;afficher(txt);} ;function RAZ(){txt=OxOe5e3[4];if(dia[accent]!=null){distinguer(false);} ;afficher(txt);} ;function haut(){caps=1;MinusMajus();} ;function bloq(){lock=(lock==1)?0:1;MinusMajus();} ;function tracer(Oxa81,Oxa82,haut,Oxa7c,Oxa83){Oxa7c=OxOe5e3[61]+Oxa83+OxOe5e3[62]+Oxa7c+OxOe5e3[63];document.write(OxOe5e3[64]+Oxa81+OxOe5e3[65]+Oxa7c+OxOe5e3[66]);if(ns6){document.getElementById(Oxa81)[OxOe5e3[68]][OxOe5e3[67]]=Oxa82+OxOe5e3[69];document.getElementById(Oxa81)[OxOe5e3[68]][OxOe5e3[70]]=haut+OxOe5e3[69];} else {if(ie){document.all(Oxa81)[OxOe5e3[68]][OxOe5e3[67]]=Oxa82;document.all(Oxa81)[OxOe5e3[68]][OxOe5e3[70]]=haut;} ;} ;} ;function retracer(Oxa81,Oxa7c,Oxa83){Oxa7c=OxOe5e3[61]+Oxa83+OxOe5e3[62]+Oxa7c+OxOe5e3[63];if(ns6){document.getElementById(Oxa81)[OxOe5e3[71]]=Oxa7c;} else {if(ie){doc=document.all(Oxa81);doc[OxOe5e3[71]]=Oxa7c;} ;} ;} ;function clavscroll(Ox93){clavdeb+=Ox93;if(clavdeb<0){clavdeb=0;} ;if(clavdeb>clav[OxOe5e3[54]]-4){clavdeb=clav[OxOe5e3[54]]-4;} ;for(i=clavdeb;i<clavdeb+4;i++){retracer(OxOe5e3[41]+(i-clavdeb),clav[i],OxOe5e3[42]);} ;if(clavdeb==0){retracer(OxOe5e3[72],OxOe5e3[13],OxOe5e3[40]);} else {retracer(OxOe5e3[72],act[0],OxOe5e3[40]);} ;if(clavdeb==clav[OxOe5e3[54]]-4){retracer(OxOe5e3[73],OxOe5e3[13],OxOe5e3[40]);} else {retracer(OxOe5e3[73],act[1],OxOe5e3[40]);} ;} ;function charger(i){langue=clav[i+clavdeb];setCk(langue);accent=OxOe5e3[1];CarMaj=Maj[langue].split(OxOe5e3[5]);CarMin=Min[langue].split(OxOe5e3[5]);for(i=0;i<nbTouches;i++){CarMaj[i]=((CarMaj[i]!=OxOe5e3[1])?(fromhexby4tocar(CarMaj[i])):OxOe5e3[4]);CarMin[i]=((CarMin[i]!=OxOe5e3[1])?(fromhexby4tocar(CarMin[i])):OxOe5e3[4]);if(CarMaj[i]==CarMin[i].toUpperCase()){cecar=((lock==0)&&(caps==0)?CarMin[i]:CarMaj[i]);retracer(OxOe5e3[9]+i,cecar,((dia[hexa(cecar)]!=null)?OxOe5e3[10]:OxOe5e3[11]));retracer(OxOe5e3[15]+i,OxOe5e3[13]);retracer(OxOe5e3[12]+i,OxOe5e3[13]);} else {retracer(OxOe5e3[9]+i,OxOe5e3[13]);cecar=CarMin[i];retracer(OxOe5e3[15]+i,cecar,((dia[hexa(cecar)]!=null)?OxOe5e3[16]:OxOe5e3[14]));cecar=CarMaj[i];retracer(OxOe5e3[12]+i,cecar,((dia[hexa(cecar)]!=null)?OxOe5e3[16]:OxOe5e3[14]));} ;} ;} ;function distinguer(Oxa88){for(i=0;i<nbTouches;i++){if(CarMaj[i]==CarMin[i].toUpperCase()){cecar=((lock==0)&&(caps==0)?CarMin[i]:CarMaj[i]);if(test(cecar)){retracer(OxOe5e3[9]+i,Oxa88?(cardia(cecar)):cecar,Oxa88?OxOe5e3[10]:OxOe5e3[11]);} ;} else {cecar=CarMin[i];if(test(cecar)){retracer(OxOe5e3[15]+i,Oxa88?(cardia(cecar)):cecar,Oxa88?OxOe5e3[16]:OxOe5e3[14]);} ;cecar=CarMaj[i];if(test(cecar)){retracer(OxOe5e3[12]+i,Oxa88?(cardia(cecar)):cecar,Oxa88?OxOe5e3[16]:OxOe5e3[14]);} ;} ;} ;if(!Oxa88){accent=OxOe5e3[1];} ;} ;function MinusMajus(){for(i=0;i<nbTouches;i++){if(CarMaj[i]==CarMin[i].toUpperCase()){cecar=((lock==0)&&(caps==0)?CarMin[i]:CarMaj[i]);retracer(OxOe5e3[9]+i,(test(cecar)?cardia(cecar):cecar),((dia[hexa(cecar)]!=null||test(cecar))?OxOe5e3[10]:OxOe5e3[11]));} ;} ;} ;function test(Oxa8b){return (dia[accent]!=null&&dia[accent][hexa(Oxa8b)]!=null);} ;function cardia(Oxa8b){return (fromhexby4tocar(dia[accent][hexa(Oxa8b)]));} ;function fromhex(Oxa8e){out=0;for(a=Oxa8e[OxOe5e3[54]]-1;a>=0;a--){out+=Math.pow(16,Oxa8e[OxOe5e3[54]]-a-1)*hexchars.indexOf(Oxa8e.charAt(a));} ;return out;} ;function fromhexby4tocar(Oxa7c){out4= new String();for(l=0;l<Oxa7c[OxOe5e3[54]];l+=4){out4+=String.fromCharCode(fromhex(Oxa7c.substring(l,l+4)));} ;return out4;} ;function tohex(Oxa8e){return hexchars.charAt(Oxa8e/16)+hexchars.charAt(Oxa8e%16);} ;function tohex2(Oxa8e){return tohex(Oxa8e/256)+tohex(Oxa8e%256);} ;function hexa(Oxa7c){out=OxOe5e3[4];for(k=0;k<Oxa7c[OxOe5e3[54]];k++){out+=(tohex2(Oxa7c.charCodeAt(k)));} ;return out;} ;function getCk(){fromN=document[OxOe5e3[75]].indexOf(OxOe5e3[74])+0;if((fromN)!=-1){fromN+=7;toN=document[OxOe5e3[75]].indexOf(OxOe5e3[76],fromN)+0;if(toN==-1){toN=document[OxOe5e3[75]][OxOe5e3[54]];} ;return unescape(document[OxOe5e3[75]].substring(fromN,toN));} ;return OxOe5e3[4];} ;function setCk(Oxa8e){if(Oxa8e!=null){exp= new Date();time=365*60*60*24*1000;exp.setTime(exp.getTime()+time);document[OxOe5e3[75]]=escape(OxOe5e3[77])+OxOe5e3[78]+escape(Oxa8e)+OxOe5e3[79]+OxOe5e3[80]+exp.toGMTString();} ;} ;