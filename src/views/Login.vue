<template>
   <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form class="user">
                                        <!-- <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address...">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password">
                                        </div> -->
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>

                                           <div v-if="!$auth.loading">
                                            <!-- show login when not authenticated -->

                                            <a v-if="!$auth.isAuthenticated" @click="login" class="btn btn-primary btn-user btn-block">
                                                 Login / sign up
                                             </a>

                                             <a v-if="$auth.isAuthenticated" @click="logout" class="btn btn-primary btn-user btn-block">
                                                 Logout 
                                             </a>

                                              <a v-if="$auth.isAuthenticated" @click="access()" class="btn btn-primary btn-user btn-block">
                                                 Access to Dashboard 
                                             </a>
                                            <!-- show logout when authenticated -->
                                          </div>
                                        
                                        <!-- <hr>
                                        <a href="index.html" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a> -->
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="register.html">Create an Account!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>


export default {
  name: 'Login',
  methods: {
        // Log the user in
      login() {
        this.$auth.loginWithRedirect();
      },
      // Log the user out
      logout() {
        this.$auth.logout({
          returnTo: window.location.origin
        });
      },
      access(){
          this.$router.push('/Dashboard')
      }
      
    },
   created() {

    //   if(!this.$auth.loading){
    //     if(this.$auth.isAuthenticated){
    //       this.$router.push('/Dashboard')

    //     }
    //   }

    //    if(this.$auth.isAuthenticated){
    //       this.$router.push('/Dashboard')

    //     }
   }, 
   watch: {
       router:function(val){
           console.log('what ',val)
       }
   },
   mounted() {

      if(!this.$auth.loading){
        if(this.$auth.isAuthenticated){
          this.$router.push('/Dashboard')

        }
      }

       if(this.$auth.isAuthenticated){
          this.$router.push('/Dashboard')

        }
   } 
  
}
</script>

<style lang="">
  
</style>
