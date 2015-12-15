$(".simulation").click(function() {
  if($(".quart .vm1 a").html()==""){
	  var chapeau1= ["France","Espagne","Portugal","Allemagne","Angleterre","Belgique"];
	  var chapeau2= ["Italie","Russie","Suisse","Autriche","Croatie","Ukraine"];
	  var chapeau3= ["Rep. Theque","Roumanie","Slovaquie","Hongrie","Pologne","Suède"];
	  var chapeau4= ["Turquie","Rep. d'Irlande","Islande","Pays de Galles","Albanie","Irlande du Nord"];
	  var x = Math.floor((Math.random() * 5)+1);
	  var i = 1;
	  var groupeA=new Array();
	  var groupeB=new Array();
	  var groupeC=new Array();
	  var groupeD=new Array();
	  var groupeE=new Array();
	  var groupeF=new Array();
	  var poolTab=new Array(groupeA,groupeB,groupeC,groupeD,groupeE,groupeF);
	  var verifTab=new Array();
	  var trucVrai=1
	  poolTab[0][0]=chapeau1[0];
	  while (i < chapeau1.length) {
	  	for (var j = 0; j < verifTab.length; j++) {
	  		if (x==verifTab[j]){trucVrai=0};
	  	};
	  	if (trucVrai){poolTab[i][0]=chapeau1[x];verifTab[i]=x;i++;};
	  	x = Math.floor((Math.random() * 5)+1);
	  	trucVrai=1;
	  };
	  i=0;
	  var y = Math.floor((Math.random() * 3)+1);
	  var verifTab2=new Array();
	  
	  while (i < chapeau4.length) {
	  	do{	
	  		trucVrai=1;
	  		if (i==5) {
	  			x=0;
	  			for (var k = 0; k < verifTab2.length; k++) {
	  				x+=verifTab2[k];
	  			};
	  			x=15-x;
	  		}else{
	  			x = Math.floor((Math.random() * 6));
	  			for (var j = 0; j < verifTab2.length; j++) {
	  				if (x==verifTab2[j]){trucVrai=0};
	  			};
	  		};
	  		
	  	}while(trucVrai!==1);
	  	poolTab[i][y]=chapeau4[x];
	  	verifTab2[i]=x;
	  	i++;
	  	y = Math.floor((Math.random() * 3)+1);
	  };

	  i=0;
	   y = Math.floor((Math.random() * 3)+1);
	  var verifTab3=new Array();
	  while (i < chapeau3.length) {
	  	console.log( "pour i : ",i,"et y:",y," poolTab:",poolTab[i][y]);
	  	while(poolTab[i][y]!==undefined){
	  		y = Math.floor((Math.random() * 3)+1);
	  	};
	  	do{	
	  		trucVrai=1;
	  		if (i==5) {
	  			x=0
	  			console.log("there pour i: ",i," verifTab: ", verifTab3.length);
	  			for (var k = 0; k < verifTab3.length; k++) {
	  				x+=verifTab3[k];
	  			};
	  			x=15-x;
	  		}else{
	  			x = Math.floor((Math.random() * 5));
	  			for (var j = 0; j < verifTab3.length; j++) {
	  			console.log("there pour i: ",i, "j: ",j,"verifTab: ", verifTab3[j],"et x: ",x);
	  			if (x==verifTab3[j]){trucVrai=0};
	  			};
	  		};
	  	}while(trucVrai!==1);
	  	poolTab[i][y]=chapeau3[x];
	  	verifTab3[i]=x;
	  	i++;
	  	y = Math.floor((Math.random() * 3)+1);
	  };

	  	i=0;
	   y = Math.floor((Math.random() * 3)+1);
	   var verifTab4=new Array();
	  while (i < chapeau2.length) {
	  	while (poolTab[i][y]!==undefined){
	  		y = Math.floor((Math.random() * 3)+1);
	  	};
	  	console.log("chapeau2 étape 4 i: ",i)
	  	do{	
	  		trucVrai=1;
	  		if (i==5) {
	  			x=0
	  			console.log("there pour i: ",i," verifTab: ", verifTab4.length);
	  			for (var k = 0; k < verifTab4.length; k++) {
	  				x+=verifTab4[k];
	  			};
	  			x=15-x;
	  		}else{
	  			x = Math.floor((Math.random() * 5));
	  			for (var j = 0; j < verifTab4.length; j++) {
	  			console.log("there pour i: ",i, "j: ",j,"verifTab: ", verifTab4[j],"et x: ",x);
	  			if (x==verifTab4[j]){trucVrai=0};
	  			};
	  		};
	  	}while(trucVrai!==1);
	  	poolTab[i][y]=chapeau2[x];
	  	verifTab4[i]=x;
	  	i++;
	  	y = Math.floor((Math.random() * 3)+1);
	  };


	  $( ".huitieme .m1 a" ).text(poolTab[0][1]);
	  $( ".huitieme .m1-2 a" ).text(poolTab[2][1]);

	  $( ".huitieme .m2 a" ).text(poolTab[3][0]);
	  $( ".huitieme .m2-2 a" ).text(poolTab[1][2]);
	  
	  $( ".huitieme .m3 a" ).text(poolTab[1][0]);
	  $( ".huitieme .m3-2 a" ).text(poolTab[0][2]);

	  $( ".huitieme .m4 a" ).text(poolTab[5][0]);
	  $( ".huitieme .m4-2 a" ).text(poolTab[4][1]);
	  
	  $( ".huitieme .m5 a" ).text(poolTab[2][0]);
	  $( ".huitieme .m5-2 a" ).text(poolTab[5][2]);

	  $( ".huitieme .m6 a" ).text(poolTab[4][0]);
	  $( ".huitieme .m6-2 a" ).text(poolTab[3][1]);
	  
	  $( ".huitieme .m7 a" ).text(poolTab[0][0]);
	  $( ".huitieme .m7-2 a" ).text(poolTab[3][2]);

	  $( ".huitieme .m8 a" ).text(poolTab[1][1]);
	  $( ".huitieme .m8-2 a" ).text(poolTab[5][1]);
	}else{
		location.reload();
	};
});

$( ".buttonMiddle" ).click(function() {
	if ($(".quart .vm1 a").html()=="") {
	var matchTab=new Array();
	matchTab[0]= $(".huitieme .m1 a" ).html();
	matchTab[1]= $(".huitieme .m1-2 a" ).html();
	matchTab[2]= $(".huitieme .m2 a" ).html();
	matchTab[3]= $(".huitieme .m2-2 a" ).html();
	matchTab[4]= $(".huitieme .m3 a" ).html();
	matchTab[5]= $(".huitieme .m3-2 a" ).html();
	matchTab[6]= $(".huitieme .m4 a" ).html();
	matchTab[7]= $(".huitieme .m4-2 a" ).html();
	matchTab[8]= $(".huitieme .m5 a" ).html();
	matchTab[9]= $(".huitieme .m5-2 a" ).html();
	matchTab[10]= $(".huitieme .m6 a" ).html();
	matchTab[11]= $(".huitieme .m6-2 a" ).html();
	matchTab[12]= $(".huitieme .m7 a" ).html();
	matchTab[13]= $(".huitieme .m7-2 a" ).html();
	matchTab[14]= $(".huitieme .m8 a" ).html();
	matchTab[15]= $(".huitieme .m8-2 a" ).html();
	var x = Math.floor((Math.random() * 2));
	$( ".quart .vm1 a" ).text(matchTab[x]);
	x = Math.floor((Math.random() * 2)+2);
	$( ".quart .vm2 a" ).text(matchTab[x]);
	x = Math.floor((Math.random() * 2)+4);
	$( ".quart .vm3 a" ).text(matchTab[x]);
	x = Math.floor((Math.random() * 2)+6);
	$( ".quart .vm4 a" ).text(matchTab[x]);
	x = Math.floor((Math.random() * 2)+8);
	$( ".quart .vm5 a" ).text(matchTab[x]);
	x = Math.floor((Math.random() * 2)+10);
	$( ".quart .vm6 a" ).text(matchTab[x]);
	x = Math.floor((Math.random() * 2)+12);
	$( ".quart .vm7 a" ).text(matchTab[x]);
	x = Math.floor((Math.random() * 2)+14);
	$( ".quart .vm8 a" ).text(matchTab[x]);
	}else if($(".demi .vmq1 a").html()==""){
		var matchTab=new Array();
	matchTab[0]= $(".quart .vm1 a" ).html();
	matchTab[1]= $(".quart .vm2 a" ).html();
	matchTab[2]= $(".quart .vm3 a" ).html();
	matchTab[3]= $(".quart .vm4 a" ).html();
	matchTab[4]= $(".quart .vm5 a" ).html();
	matchTab[5]= $(".quart .vm6 a" ).html();
	matchTab[6]= $(".quart .vm7 a" ).html();
	matchTab[7]= $(".quart .vm8 a" ).html();
	var x = Math.floor((Math.random() * 2));
	$( ".demi .vmq1 a" ).text(matchTab[x]);
	x = Math.floor((Math.random() * 2)+2);
	$( ".demi .vmq2 a" ).text(matchTab[x]);
	x = Math.floor((Math.random() * 2)+4);
	$( ".demi .vmq3 a" ).text(matchTab[x]);
	x = Math.floor((Math.random() * 2)+6);
	$( ".demi .vmq4 a" ).text(matchTab[x]);
	}else{
		var matchTab=new Array();
	matchTab[0]= $(".demi .vmq1 a" ).html();
	matchTab[1]= $(".demi .vmq2 a" ).html();
	matchTab[2]= $(".demi .vmq3 a" ).html();
	matchTab[3]= $(".demi .vmq4 a" ).html();
	var x = Math.floor((Math.random() * 2));
	$( ".finale .vmd1 a" ).text(matchTab[x]);
	x = Math.floor((Math.random() * 2)+2);
	$( ".finale .vmd2 a" ).text(matchTab[x]);
	};
});