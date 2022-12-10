let valueA

let number = 50

let presseda = true


whaleysans.showNumber(number)
while(true) {
    valueA=input.buttonIsPressed(Button.A)
   if (valueA == true && presseda == true) {
       number += 1
       whaleysans.showNumber(number)
       presseda = false
   }else if (valueA == false) {
       presseda = true
    
}

}