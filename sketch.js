var nametext, nameInput, ageText, ageInput, genderText, genderInput, heightText, heightInput, weightText, weightInput, submit;
var pername, perage, pergender, perheight, perweight;
var greeting1, greeting2, greeting3, greeting4, greeting5, greeting6, greeting7;
var upo = perweight/perheight;

function setup() {

  canvas= createCanvas(400,400);


   nameText = createElement('h3', 'Name:');
  nameText.position(displayWidth/2-650, displayHeight/2-220);
  nameInput = createInput("Name");
  nameInput.position(displayWidth/2-650, displayHeight/2-180);
 
  ageText= createElement('h3', 'Age:');
  ageText.position(displayWidth/2-650, displayHeight/2-170);
  ageInput = createInput("Age");
  ageInput.position(displayWidth/2-650, displayHeight/2-130)

  genderText = createElement('h3', 'Gender:');
  genderText.position(displayWidth/2-650, displayHeight/2-120)
  genderInput = createInput("Gender");
  genderInput.position(displayWidth/2-650, displayHeight/2-80);

  heightText = createElement('h3', 'Height (in m):');
  heightText.position(displayWidth/2-650, displayHeight/2-70)
  heightInput = createInput("Height");
  heightInput.position(displayWidth/2-650, displayHeight/2-30);

  weightText = createElement('h3', 'Weight (in kg):');
  weightText.position(displayWidth/2-650, displayHeight/2-20)
  weightInput = createInput("Weight");
  weightInput.position(displayWidth/2-650, displayHeight/2+20);

 

  greeting1 = createElement('h2');
  greeting1.position(displayWidth/2, displayHeight/2 - 235);

  greeting2 = createElement('h2');
  greeting2.position(displayWidth/2, displayHeight/2 - 185);

  greeting3 = createElement('h2');
  greeting3.position(displayWidth/2, displayHeight/2 - 135);

  greeting4 = createElement('h2');
  greeting4.position(displayWidth/2, displayHeight/2 - 85);
  
  greeting5 = createElement('h2');
  greeting5.position(displayWidth/2, displayHeight/2 - 35);

  greeting6 = createElement('h2');
  greeting6.position(displayWidth/2, displayHeight/2 + 15);

  greeting7 = createElement('h2');
  greeting7.position(displayWidth/2, displayHeight/2 + 65);

  submit = createButton('Submit');
  submit.position(displayWidth/2-650, displayHeight/2+70);
  submit.mousePressed(personalize);
  
}

function draw(){
 
  submit.mousePressed(personalize);

}

function personalize() {

  pername = nameInput.value();
  greeting1.html('Hello ' + pername + '!');
  console.log(pername)

  perage = ageInput.value();
  console.log(perage);  

  if(perage < 100 && perage > 0) {
    greeting2.html('You are ' + perage + ' years old.');
  } else if(perage > 100 || perage < 0) {
    greeting2.html('This software can only be used for living people.'); 
  } else {
    greeting2.html('Your age is invalid. Kindly enter a number.');
  }

  pergender = genderInput.value();
  console.log(pergender);

  if(pergender === "Male") {
    greeting3.html('You are Male.');
  } else if(pergender === "Female") {
    greeting3.html('You are Female.');
  } else {
    greeting3.html('Your gender is invalid. Kindly enter either Male or Female.');
  }
  
  perheight = heightInput.value();
  console.log(perheight);

  if(perheight < 0.5) {
    greeting4.html('This software is probably not best for babies or dwarves.');
    greeting5.position(displayWidth/2, displayHeight/2 - 35);
  } else if(perheight > 3) {
    greeting4.html('This software is probably not best for giants.');
    greeting5.position(displayWidth/2, displayHeight/2 - 35);
  } else if(perheight >= 0.5 && perheight <= 3) {
    greeting4.html('You are ' + perheight + ' m tall.');
    greeting5.position(displayWidth/2, displayHeight/2 - 35);
  } else {
    greeting4.html('Your height is invalid. Kindly enter a number (your height in meters).');
    greeting5.position(displayWidth/2, displayHeight/2 - 10)
  }

  perweight = weightInput.value();
  console.log(perweight);

  if(perweight < 2) {
    greeting6.position(displayWidth/2, displayHeight/2 + 15);
    greeting5.html('This software is probably not best for babies or dwarves.')
  } else if(perweight > 700) {
    greeting6 .position(displayWidth/2, displayHeight/2 + 15);
    greeting5.html('This software is probably not best for giants.');
  } else if(perweight >= 2 && perweight <= 700) {
    greeting6.position(displayWidth/2, displayHeight/2 + 15);
    greeting5.html('You weigh ' + perweight + ' kg.');
  } else {
    greeting6.position(displayWidth/2, displayHeight/2 + 65);
    greeting5.html('Your weight is invalid. Kindly enter a number (your weight in kilograms).');
  } 

  if(perage < 1) {
    greeting6.html('There is no set time for you to sleep. You may sleep for as long as you wish.');
  } else if(perage >= 1 && perage < 5) {
    greeting6.html('You need 12 hours of sleep everyday.');
  } else if(perage >= 5 && perage < 10) {
    greeting6.html('You need 11 hours of sleep everyday.');    
  } else if(perage >= 10 && perage < 18) {
    greeting6.html('You need 10 hours of sleep everyday.');
  } else if(perage >= 18) {
    greeting6.html('You need 8 hours of sleep everyday.');
  }

  upo = perweight/perheight;
  console.log(upo)
  
  if(upo < 18) {
    greeting7.html('You are underweight. Eating a nutrious diet, while going for a walk for 30 minutes everyday should help you!');
  } else if(upo > 25) {
    greeting7.html('You are overweight. Eating a nutrious diet with a little bit less fat while being active in sports should help you!');
  } else if(upo > 18 && upo < 25) {
    greeting7.html('You weigh... perfect? You weigh perfect for your height and should continue doing what you do!');
  }

}

