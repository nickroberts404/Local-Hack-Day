ref.authWithOAuthRedirect("facebook", function(error) {
                    if (error) {
                        // the access token will allow us to make Open Graph API calls
                        console.log("JUST DOESN'T work");
                    }
                else{
                    console.log(authData.facebook.accessToken);
                }