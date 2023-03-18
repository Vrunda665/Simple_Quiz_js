var myQuestions = [
  {
    question: "Who is the Father of our Nation?",
    answers: {
      a: "Narendra Modi",
      b: "Sardar Patel",
      c: "Mahatma Gandhi",
      d: "Dr. B. R. Ambedkar"
    },
    correctAnswer: 'c'
  },
  {
    question: "What is 30/3?",
    answers: {
      a: '3',
      b: '5',
      c: '20',
      d: '10'
    },
    correctAnswer: 'd'
  },
  {
    question: "What is 12*12?",
    answers: {
      a: '300',
      b: '144',
      c: '200',
      d: '100'
    },
    correctAnswer: 'b'
  }
];
var con = document.getElementById('container');
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var genButton = document.getElementById('generate');

var maxInputAllowed = 5;
var inputCount = 1;
var Count = 0;

var inputBox = document.createElement('input');
        inputBox.placeholder = 'Enter your Question';
        inputBox.id = 'que';
        con.appendChild(inputBox); 

    for(i=0 ; i<4 ; i++){
        var inputBox = document.createElement('input');
        inputBox.placeholder = 'Enter your Options';
            inputBox.id = i+1;
        con.appendChild(inputBox); 
    }

    var inputBox = document.createElement('input');
        inputBox.placeholder = 'Enter your Answer';
        inputBox.id = 'ans';
        con.appendChild(inputBox); 

function addBox(){
    /*inputCount++;
    if(inputCount>6){
        alert('You can add maximum 6 input fields.');
        return;
    }*/
        var inputBox = document.createElement('input');
        inputBox.placeholder = 'Enter your Question';
        inputBox.id = 'que';
        con.appendChild(inputBox); 

    for(i=0 ; i<4 ; i++){
        var inputBox = document.createElement('input');
        inputBox.placeholder = 'Enter your Options';
            inputBox.id = i+1;
        con.appendChild(inputBox); 
    }

    var inputBox = document.createElement('input');
        inputBox.placeholder = 'Enter your Answer';
        inputBox.id = 'ans';
        con.appendChild(inputBox); 

        /*var btn = document.createElement('button');
        btn.id='submit';
        btn.textContent = "Submit";
        con.appendChild(btn); 


    let inBox = document.createElement('input');
    for(var i=0; i<6; i++){
    inBox.id[i]= i;
    inBox.id[i]++;  
    inBox.placeholder = 'Enter your Question';
    con.appendChild(inBox); 
}*/
}
var submitButton = document.getElementById('submit');

submitButton.onclick = function(){

    for(let i=0 ; i<6 ; i++){
       // var val = document.getElementsByClassName('que').innerText;
       var val = document.getElementById('que').value;
       var op1 = document.getElementById('1').value;
       var op2 = document.getElementById('2').value;
       var op3 = document.getElementById('3').value;
       var op4 = document.getElementById('4').value;
       
       var ans = document.getElementById('ans').value;
       // var obj= [{questions : val },{questions : val }];
    }
        var data =  [
                    {   questions : val,
                        option1 :  op1,
                        option2 :  op2,
                        option3 :  op3,
                        option4 : op4,
                        answer : ans
                    }];
        var tempData = [];
        
        tempData.push( data );

        data = tempData;
        console.log(data);
   //console.log();
       // localStorage.setItem("value",data.values);
       window.localStorage.setItem("data1", JSON.stringify(val) );
       window.localStorage.setItem("data2", JSON.stringify(op1) );
       window.localStorage.setItem("data3", JSON.stringify(op2) );
       window.localStorage.setItem("data4", JSON.stringify(op3) );
       window.localStorage.setItem("data5", JSON.stringify(op4) );
       window.localStorage.setItem("data6", JSON.stringify(ans) );

        var loc1 = localStorage.getItem("data1");
        var loc2 = localStorage.getItem("data2");
        var loc3 = localStorage.getItem("data3");
        var loc4 = localStorage.getItem("data4");
        var loc5 = localStorage.getItem("data5");
        var loc6 = localStorage.getItem("data6");

        //concat("This is a Data from Local storage...")  
        var table = document.getElementById("quizList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = loc1;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = loc2;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = loc3;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = loc4;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = loc5;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = loc6;
}

/*
genButton.onclick = function(){
    var text = document.createElement('input');
    text.type  ='text';
    text.className= 'getText';
    text.placeholder = "Enter Your Question";

    container.appendChild(text);
    //generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
}

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
            answers = [];
      for(letter in questions[i].answers){
        answers.push(
          '<label>'
            + '<br><input type="radio" name="question'+i+'" value="'+letter+'">'
            
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numCorrect = 0;
    
    for(var i=0; i<questions.length; i++){

      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      ans = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{});
      
      if(userAnswer===questions[i].correctAnswer){
        numCorrect++;
        
        //answerContainers[i].querySelector('input[name=question'+i+']:checked').style.color = 'lightgreen';
        answerContainers[i].style.color = 'green';

      }
      else{
        answerContainers[i].style.color = 'red';
      }
    }

    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }
  showQuestions(questions, quizContainer);
}*/