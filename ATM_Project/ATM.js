var validPINS = ['0098'];
var foundPIN = [];

function BankUser(fname, lname, currentChecking, currentSavings){
    this.fname = fname;
    this.lname = lname;
    this.currentChecking = currentChecking;
    this.currentSavings = currentSavings;
}

const user1 = new BankUser('Samuel', 'Richards', '3,000', '1,000');
const selectedUser = new BankUser('', '', '', '');
const currentUser = new BankUser('', '', '', '');


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
            window.location.href = "ATM_Selection.html";

            
        }
        else{
            alert("Invalid PIN!!");
            document.getElementById('pinInput').value = '';

        }
        }
}

function login(){
}

function loadUserData()
{
    var userFirstName = user1.fname;
    var userLastName = user1.lname;

    document.getElementById('greeting').innerHTML = "Welcome, " + userFirstName + " " + userLastName + "!";


}

function getCheckingData() {
    document.getElementById('checkingData').style.display = 'block';
    var d = new Date();
    var date = d.toLocaleDateString();
    var userChecking = user1.currentChecking;
    document.getElementById('checkingData').innerHTML = "Checking Balance: $" + userChecking + " As of " + date;
}

function getSavingData() {
    document.getElementById('savingData').style.display = 'block';
    var d = new Date();
    var date = d.toLocaleDateString();
    var userSaving = user1.currentSavings;
    document.getElementById('savingData').innerHTML = "Savings Balance: $" + userSaving + " As of " + date;
}

function logout() {
    if(confirm('Are you sure you want to logout?'))
    {
        window.location.href('ATM.html');
    }
}

