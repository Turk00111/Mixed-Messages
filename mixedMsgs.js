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
        case '0':
            return 'Knock Knock';
            break;
        case '1':
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
        case '0': 
            return 'Orange'; 
            break;
        case '1': 
            return 'Who';
            break;
        case '2': 
            return 'banana';
            break;
        case '3': 
            return 'brick';
            break;
        default: 
            return 'There was an error in generating Message 2';
            break;
    }
};

const tempMsg1 = msg1(); 
const tempMsg2 = msg2(); 



