<template>
  <!-- <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
</fb:login-button> -->

                            <button class="fb-login-button" data-button-type="" data-use-continue-as="true"
                                    data-width="" data-hight="" @click="checkLoginState()">
                                    Login with Facebook
                            </button> 

                                <div id="spinner"
                                    style="
                                        background: #4267b2;
                                        border-radius: 5px;
                                        color: white;
                                        height: 40px;
                                        text-align: center;
                                        width: 250px;">
                                    Loading
                                    <div
                                    class="fb-login-button"
                                    data-max-rows="1"
                                    data-size="large"
                                    data-button-type="continue_with"
                                    data-use-continue-as="true"
                                    ></div>
                                </div>
<div id="status"></div>

</template>

<script>
export default {
  name: "asdf",

  mounted() {
        // 203313835661247
        // 1616534218770661
        // 875989810135839
        // FB.init({
        //     appId: '1616534218770661',
        //     cookie: true,
        //     xfbml: true,
        //     version: 'v13.0'
        // });

          window.fbAsyncInit = function() {
        FB.init({
          appId      : '1616534218770661',
          cookie     : true,  // enable cookies to allow the server to access 
                              // the session
          xfbml      : true,  // parse social plugins on this page
          version    : 'v16.0' // Specify the Graph API version to use
        });
      }
        var finished_rendering = function() {
        console.log("finished rendering plugins");
        var spinner = document.getElementById("spinner");
        spinner.removeAttribute("style");
        spinner.removeChild(spinner.childNodes[0]);
        }
        FB.Event.subscribe('xfbml.render', finished_rendering);

      //   FB.getLoginStatus(response){
      //     this.statusChangeCallback(response);
      // };

      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    },


    methods: {
  
  // This is called with the results from from FB.getLoginStatus().
      statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          testAPI();
        } else {
          // The person is not logged into your app or we are unable to tell.
          document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
        }
      },

      // This function is called when someone finishes with the Login
      // Button.  See the onlogin handler attached to it in the sample
      // code below.
      checkLoginState() {
        FB.getLoginStatus(function(response) {
          // this.statusChangeCallback(response);
          console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          testAPI();
        } else {
          // The person is not logged into your app or we are unable to tell.
          document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
        }
        });
      },

      

      // Now that we've initialized the JavaScript SDK, we call 
      // FB.getLoginStatus().  This function gets the state of the
      // person visiting this page and can return one of three states to
      // the callback you provide.  They can be:
      //
      // 1. Logged into your app ('connected')
      // 2. Logged into Facebook, but not your app ('not_authorized')
      // 3. Not logged into Facebook and can't tell if they are logged into
      //    your app or not.
      //
      // These three cases are handled in the callback function.

  

      // Here we run a very simple test of the Graph API after login is
      // successful.  See statusChangeCallback() for when this call is made.
      testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log('Successful login for: ' + response.name);
          document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
        });
      },
},
};
</script>