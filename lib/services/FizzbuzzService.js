class FizzbuzzService{

	static applyValidationInExplorer(explorer){
	    if(explorer.score%5 === 0 && explorer.score%3 === 0){
             explorer.trick = "FIZZBUZZ";
             return explorer;
            }else if(explorer.score%3 === 0){
              //FIZZ
	      explorer.trick = "FIZZ";
	      return explorer;
	    }else if(explorer.score%5 === 0){
	      explorer.trick = "BUZZ"
	      return explorer;
    	     }else{
	       explorer.trick = explorer.score;
               return explorer;
              }
        }//cierre de metodo
}//cierre de clase

module.exports = FizzbuzzService

