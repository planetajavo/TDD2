/* TO-DO LIST

* ""   --> 0
* "6"  --> 6
* "4,3"--> 7
* "a"  --> 0
* "aa" --> 0
* "a45"--> 0

*/

chai.should(); // invoking this function creates a "should" object on every object
context = describe;

function sumNum (string) {

	var number = parseInt(string);

	if (isNaN(number)){
		var result = 0;

		var listOfItems = string.split(",");
		for (var i = 0; i < listOfItems.length; i++) {
			if(isNaN(parseInt(istOfItems[i])){
				return 0;
			}else{
				result += parseInt(listOfItems[i]);
			}
			return result;
		};
		
	}else{
		return number;
	}
};

describe ("sumNum: ", function(){

  it("empty string returns 0", function(){

  	var result = sumNum("");
    expect(result).toEqual(0);      

  });

    it("number returns 0", function(){

  	var result = sumNum("6");
    expect(result).toEqual(6);      

  });

	it("one letter character string returns 0", function(){

	  	var result = sumNum("4,3");
	    expect(result).toEqual(7);      

	  });

 
  


});