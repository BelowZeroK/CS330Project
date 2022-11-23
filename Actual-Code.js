inputNum1 = Math.floor(Math.random() * 100000000000000000);
inputNum2 = "06154";
inputNum3 = Math.floor(Math.random()*5)+1;
inputString = inputNum1.toString() + inputNum2 + inputNum3.toString();

StudentID = "06154";
UnlockingCode = "1";
LockingCode = "4";
digit = 0;

alert(inputString);

for (i = 0; i < inputString.length; i++) {
    
    if (inputString.charAt(i) == StudentID.charAt(digit)) {
        digit++;
        
        if(inputString.charAt(i+1) == StudentID.charAt(digit)){
            digit++;
            
            if(inputString.charAt(i+2) == StudentID.charAt(digit)){
                digit++;
                
                if(inputString.charAt(i+3) == StudentID.charAt(digit)){
                    digit++;
                    
                    if(inputString.charAt(i+4) == StudentID.charAt(digit)){
                        
                        if(inputString.charAt(i+5) == UnlockingCode){
                            alert("The correct sequence has been found. The device is now unlocked.");
                            
                        } else if(inputString.charAt(i+5) == LockingCode){
                            alert("The correct sequence has been found. The device is now locked.");
                            
                        } else {
                            resetDigit();
                        }
                        
                    }else {
                        resetDigit();
                    }
                    
                }else {
                    resetDigit();
                }
                
            }else {
                resetDigit();
            }
            
        }else {
            resetDigit();
        }
        
    }else {
        resetDigit();
    }
}

function resetDigit(){
    digit = 0;
    alert("The correct sequence has not been found.");
}
