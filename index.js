
function addData()
    {
        var fname = document.getElementById("firstname").value;
        var lname = document.getElementById("lastname").value;
        var uemail = document.getElementById("email").value;
        var upass = document.getElementById("password").value;   
        let object = { "firstname":fname, "lastname":lname, "useremail":uemail, "userpwd":upass };
        localStorage.setItem(uemail, JSON.stringify(object));
        alert("Sign In Successful! " + fname + lname);
    }
function checkData()
    {
        var givenpass = document.getElementById("password").value;
        var givenemail = document.getElementById("email").value;
        var obj = localStorage.getItem(givenemail);
        var name
        if (obj == undefined) 
        {
            alert("Invalid Details! Try again or Sign In to create a new account.");
        }
        else{
                var existpass = JSON.parse(obj).userpwd;
                if(existpass == givenpass) {
                    alert("Hurray! You have Log In Successfully!");
                }    
                else{
                    alert("Password is Incorrect");
                }
            }
    }
    



         
