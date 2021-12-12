//sript is to test to make sure node is working
//console.log('script is working')

const randNum = (maxNum) => {
    if (maxNum === undefined) {
        maxNum = 0
    }
    return Math.floor(Math.random() * maxNum)
    
};

//generates the first part of the message 
const msg1 = () => { 
    //gets a random number
    let msgNum = randNum(2);
    //compares random numbers to messages and display's it 
    switch(msgNum) { 
        case 0:
            return 'Knock Knock';
            break;
        case 1:
            return 'Not in the mood for a joke. Try again later!';
            break;
        default:
            return 'There was an error in generating Message 1'; 
            break; 
    };
};
//get's the second message
const msg2 =  () => {
    //gets a random number
    let msgNum = randNum(4);
    //compares random numbers to messages and display's it
    switch(msgNum) { 
        case 0: 
            return 'Orange'; 
            break;
        case 1: 
            return 'Who';
            break;
        case 2: 
            return 'banana';
            break;
        case 3: 
            return 'brick';
            break;
        default: 
            return 'There was an error in generating Message 2';
            break;
    }
};


const tempMsg1 = msg1(); //gets the beginning of the joke.  

if (tempMsg1 === "Not in the mood for a joke. Try again later!") {
    console.log(tempMsg1);
    process.exit();
};
const tempMsg2 = msg2(); // gets the second message of the joke 


//this is the original one. 

console.log(tempMsg1 + '\n' + 'Whose there?' + '\n' + tempMsg2 + '\n' + tempMsg2 + ' who?') //prints out the beginning of the jokes 

if (tempMsg2 === 'banana') { //sets up all the jokes
    for (let i = 0; i < 5; i++) {
        console.log(tempMsg2 + '\n' + tempMsg2 + ' who?');
    };
    console.log('Orange you glad I didn\'t say ' + tempMsg2 + ' again!?!?')
} else if ( tempMsg2 === 'Orange') {
    console.log('Who ever heard of a talking ' + tempMsg2 + '!');
 } else if (tempMsg2 === 'Who') { 
     console.log('I didn\'t know there was an Owl in here!');
 } else if (tempMsg2 === 'brick') { 
     console.log('It\'s a ' + tempMsg2 + ' house!'); 
 } else { 
     console.log('There was an error with generating the joke. Try again later')
 }

