persontotal = 0

comptotal = 0

decision = "y"

alert (`let’s play a game and see who can get closer to 20 between you and the computer. You will draw a # from 1-10 and the computer will stop at 16.`)
alert (`The computer begins`)

do{

  youscore = 0

  compscore = 0

  do{
      var ran = Math.floor(Math.random() *10) + 1


  compscore = compscore + ran

  alert(`The computer drew the number ${ran}, it’s new total is ${compscore}`)

  if (compscore > 20) {
        alert (` The computer has exceeded the limit meaning you have won`)
        persontotal++
        break
      }
  }while (compscore<16)

  if (compscore<=20){
      alert("Now it is your turn")
  }
  
  
  do{

    var ran = Math.floor(Math. random() *10) + 1
    var youscore = (youscore + ran);
        alert(`you drew the number ${ran}, it’s new total is ${youscore}`)
        if (youscore> 20){
          alert (`You have gone over 20, the computer has won`)
        comptotal++
        break
        }
        var decision = prompt (`Do you want to play again? Press "y" for yes and “n” for no.`)
  console.log(decision)
}while (decision == "y")



 if ((compscore > youscore) && (score <= 20)) {

  alert(`The computer has won this round with a number of ${Compscore} and you lost with a number of ${youscore}`)

  comptotal++

  } else if ((youscore > compscore) && (score <= 20)){

  alert("You have defeated the computer with a number of ${youscore} and the computer has a number of ${compscore}")

  persontotal++

  } else if (youscore = compscore)

  alert("You and the computer have scored the same number which means you have both tied. What an L")


  var decision = prompt ('Do you want to play again?     Press “y” for yes and “n” for no.')
  console.log(decision)

}while (decision == "y")


//mark total score after player has stopped playing


if (persontotal>comptotal){
  alert(`You have WON with a total of ${persontotal}  compared to the computer with a score of ${comptotal}`)
} else if (comptotal>persontotal){
  alert(`The computer has DEFEATED you with a score of ${comptotal} to ${persontotal}`)
} else if (comptotal == persontotal) {
  alert(`The computer and you have both tied with a score of ${persontotal} to ${comptotal}`)
}
