function createCookie(name,pwds){
    let username = document.getElementById("user");
    let pwd = document.getElementById("pd");
  
  
    today = new Date();
    var expire = new Date();
    expire.setTime(today.getTime() + 3600000*24*15);
   
  
    document.cookie = "name="+username.value+";path=/" + ";expires="+expire.toUTCString();
    document.cookie = "password="+encodeURI(pwd.value)+";path=/" + ";expires="+expire.toUTCString();
    //can only write one entity at a time (name, pass)
  }  
  
  //event handler for page load - runs on every refresh
  window.onload = function(){
    
    //for now
    var uname = 'guest';
    var pass = '123456';
  
    document.getElementById('user').value = uname;
    document.getElementById('pd').value = pass;
  
  }