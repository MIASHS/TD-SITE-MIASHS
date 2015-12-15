	function organiClasse() {
		this.aleatoire = function(){Math.floor((Math.random() * 3)+1);};	
		this.remplirTab = function(var chapeau, var poolTab[]){
			var i=0;
			var y = this.aleatoire();
			var trucVrai = 1;
			var verifTab=new Array();
			while (i < chapeau.length) {
				while (poolTab[i][y]!==undefined){
			  		y = this.aleatoire();
			  	};
			  	do{	
			  		trucVrai=1;
			  		if (i==5) {
			  			x=0
			  			for (var k = 0; k < verifTab.length; k++) {
			  				x+=verifTab[k];
			  			};
			  			x=15-x;
			  		}else{
			  			x = Math.floor((Math.random() * 5));
			  			for (var j = 0; j < verifTab.length; j++) {
			  				if (x==verifTab[j]){trucVrai=0};
			  			};
			  		};
			  	}while(trucVrai!==1);
			  	poolTab[i][y]=chapeau[x];
			  	verifTab[i]=x;
			  	i++;
			  	y = this.aleatoire();
			};
		};	
	};
