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
	      explorer.trick = "BUZZ";
	      return explorer;
    	     }else{
	       explorer.trick = explorer.score;
            return explorer;
        }
    }//cierre de metodo

    static applyValidationInNumber(number){
//	const explorer = {score: number, trick:" "}

    	if(number%3 === 0 && number%5 === 0){
		const explorer = {score:number,trick:"Fizzbuzz"}
		return explorer;
	}else if(number%3 === 0){
		const explorer = {score:number,trick:"Fizz"}
		return explorer;
	      }else if(number%5===0){
			const explorer = {score:number,trick:"Buzz"}
			return explorer;
		}else{
			const explorer = {score:number,trick:number}
			return explorer;
		}
    }
}//cierre de clase

module.exports = FizzbuzzService;

