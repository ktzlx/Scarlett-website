function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        project: document.getElementById("project").value,
        description: document.getElementById("description").value,
    };


    const serviceID = "service_h7g894q";
    const templateID = "template_g1fi91k";

    emailjs
        .send(serviceID,templateID,params)
        .then(res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("project").value = "";
            document.getElementById("description").value = "";
            console.log(res);
            alert("your message sent succesfully");
        })
        .catch((err) => console.log(err));
}

