class FizzbuzzService{

	static applyValidationInExplorer(explorer){
 	   const assignBuzzTrick = function(explorer){
            if(explorer.score === 1){
             explorer.trick = 1;
             return explorer;
            }else{
              explorer.trick = explorer.score;
              return explorer;
    	   }
	   }
	}
}

module.exports = FizzbuzzService
