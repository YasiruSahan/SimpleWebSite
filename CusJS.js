

function display(){
		var name;
		name=document.getElementById("txtName").value;
		document.getElementById("divName").innerHTML="";
		document.getElementById("divName").style.backgroundColor="#ddffff";
		
		var nic;
		
		nic=document.getElementById("txtNic").value;
		document.getElementById("divNIC").innerHTML="";
		document.getElementById("divNIC").style.backgroundColor="#ddffff";
		
		var TP;
	
		TP=document.getElementById("txtTP").value;
		document.getElementById("divTP").innerHTML="";
		document.getElementById("divTP").style.backgroundColor="#ddffff";
		
		var address;
		address=document.getElementById("AreaAddress").value;
		document.getElementById("divAddress").innerHTML="";
		document.getElementById("divAddress").style.backgroundColor="#ddffff";
		
		if(name==""){
			document.getElementById("divName").innerHTML=
				"<p style='color:red'>Please enter Name</p>";
			document.getElementById("txtName").style.borderColor="red";
			document.getElementById("btnSub").style.display="none";
		}
		else if(nic=="" ){
			document.getElementById("divNIC").innerHTML=
				"<p style='color:red'>Please enter nic</p>";
			document.getElementById("txtNic").style.borderColor="red";
			document.getElementById("btnSub").style.display="none";
			}
		else if(!((nic.length==10) || (nic.length==12)) ){
			document.getElementById("divNIC").innerHTML=
				"<p style='color:red'>Chack you entered NIC length</p>";
			document.getElementById("txtNic").style.borderColor="red";
			document.getElementById("btnSub").style.display="none";
				}
		else if(TP=="" ){
			document.getElementById("divTP").innerHTML=
				"<p style='color:red'>Please enter Phone number</p>";
			document.getElementById("txtTP").style.borderColor="red";
			document.getElementById("btnSub").style.display="none";
			}
		else if(!((TP.length[1]==0) || (TP.length==10))){
			document.getElementById("divTP").innerHTML=
				"<p style='color:red'>Invalid Phone number </p>";
				document.getElementById("txtTP").style.borderColor="red";
				document.getElementById("btnSub").style.display="none";
		}
		else if(address==""){
			document.getElementById("divAddress").innerHTML=
				"<p style='color:red'>Please enter your Address</p>";
			document.getElementById("AreaAddress").style.borderColor="red";
			document.getElementById("btnSub").style.display="none";
		}
		else{
		
		document.getElementById("btnSub").style.display="";	
		document.getElementById("txtName").style.borderColor="green";
		
		
		document.getElementById("btnSub").style.display="";
		document.getElementById("txtNic").style.borderColor="green";
		
		document.getElementById("btnSub").style.display="";
		document.getElementById("txtTP").style.borderColor="green";
		
			
		document.getElementById("btnSub").style.display="";
		document.getElementById("AreaAddress").style.borderColor="green";
		}
		return false;
}
				
		
		
/* confirmRequest(){
		var C=confirm("If the 'Check' Button confirms that the data you entered is correct, press the OK button. Otherwise, check the correctness of the data and press the 'Submit' button.");
		if(C==true){
			location.href='@Url.Action("PreviewBills","sites",new{id=model.Id},null)';
		}
}*/
function msg1(){
		alert("You clicked on 'Reset'");
		
		var name;
		name=document.getElementById("txtName").value;
		document.getElementById("divName").innerHTML="";
		document.getElementById("divName").style.backgroundColor="#ddffff";
		
		var nic;
		nic=document.getElementById("txtNic").value;
		document.getElementById("divNIC").innerHTML="";
		document.getElementById("divNIC").style.backgroundColor="#ddffff";
		
		var TP;
		TP=document.getElementById("txtTP").value;
		document.getElementById("divTP").innerHTML="";
		document.getElementById("divTP").style.backgroundColor="#ddffff";
		
		var address;
		address=document.getElementById("AreaAddress").value;
		document.getElementById("divAddress").innerHTML="";
		document.getElementById("divAddress").style.backgroundColor="#ddffff";
		
		document.getElementById("txtName").style.borderColor="#43a5be";	
		document.getElementById("txtNic").style.borderColor="#43a5be";	
		document.getElementById("txtTP").style.borderColor="#43a5be";	
		document.getElementById("AreaAddress").style.borderColor="#43a5be";	
		
		document.getElementById("btnSub").style.display="";
}
function setFocus(){
		document.forms["Myform"]["txtName"].focus();
		
}
