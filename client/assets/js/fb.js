window.fbAsyncInit = function() {
    FB.init({
      appId      : 1717477278324681,
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    });

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   function statusChangeCallback(response){
     if(response.status == 'connected'){
       console.log('Loggin in and authen');
       testAPI();
     } else {
       console.log('Not Connected');
     }
   }

    function checkLoginState() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    }

    function testAPI(){
      FB.api('/me?fields=name,email,birthday', function(response){
        if(response && !response.error){
          console.log(response);
        }
      })
    }

    FB.logout(function(response) {
    console.log('berhasil logout');
    });
