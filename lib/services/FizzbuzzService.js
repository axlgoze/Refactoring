class FizzbuzzService{

	static applyValidationInExplorer(explorer){
	    if(explorer.score === 1){
             explorer.trick = 1;
             return explorer;
            }else{//hola
              //FIZZ
	    if(explorer.score%3 === 0){
	     explorer.trick = "FIZZ";
	    return explorer;
	    }else{
	      explorer.trick = explorer.score;
              return explorer;
    	     }
            }//hola
        }//cierre de metodo
}//cierre de clase

module.exports = FizzbuzzService

