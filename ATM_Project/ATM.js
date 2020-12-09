var validPINS = ['0098', '8933'];
var foundPIN = [];

function BankUser(fname, lname, currentChecking, currentSavings){
    this.fname = fname;
    this.lname = lname;
    this.currentChecking = currentChecking;
    this.currentSavings = currentSavings;
}

const user1 = new BankUser('Samuel', 'Richards', '3,000', '1,000');
const user2 = new BankUser('Aimee', 'Richards', '8,000', '500');
const selectedUser = new BankUser('', '', '', '');

function inputNumber(val)
{
    var pinLength = document.getElementById('pinInput').value;
    if (pinLength.length < 4)
    {
        document.getElementById("pinInput").value += val
    }
}

function removeLast()
{
    var pinInput = document.getElementById("pinInput").value;
    const slicedInput = pinInput.slice(0, -1);
    document.getElementById("pinInput").value = slicedInput;
}

function submitPin() {
    var pinInput = document.getElementById('pinInput').value;
    if (pinInput.length < 4){
        alert("PIN must be 4 characters long!");
        document.getElementById('pinInput').value = '';
    }
    else {
        for(i=0; i < validPINS.length; i++){
            if(validPINS[i].match(pinInput)){
                foundPIN.push(validPINS[i]);
            }
        }
        if(foundPIN == '0098')
        {
            //alert(user1.fname);
            selectedUser.fname = user1.fname;
            selectedUser.lname = user1.lname;
            selectedUser.currentChecking = user1.currentChecking;
            selectedUser.currentSavings = user1.currentSavings;
            alert('Welcome ' + selectedUser.fname + '!');
            login();
            
        }
        else if(foundPIN == '8933')
        {
            //alert(user2.fname);
            selectedUser.fname = user2.fname;
            selectedUser.lname = user2.lname;
            selectedUser.currentChecking = user2.currentChecking;
            selectedUser.currentSavings = user2.currentSavings;
            alert('Welcome ' + selectedUser.fname + '!');
            login();
            
        }
        else{
            alert("Invalid PIN!!");
            document.getElementById('pinInput').value = '';

        }
        }
}

function login(){
    window.location.href = "ATM_Selection.html";  
}

function loadUserData()
{
const currentUser = new BankUser('', '', '', '');
currentUser.fname = selectedUser.fname;
currentUser.lname = selectedUser.lname;
currentUser.currentChecking = selectedUser.currentChecking;
currentUser.currentSavings = selectedUser.currentSavings;
alert("This is your options page " + currentUser.fname);

}

