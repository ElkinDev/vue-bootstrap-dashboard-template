<template>
  
  <div id="page-top">

      <!-- Page Wrapper -->
      <div id="wrapper">

          <!-- Sidebar -->
          <leftpanel></leftpanel>
          
          <!-- End of Sidebar -->

          <!-- Content Wrapper -->
          <div id="content-wrapper" class="d-flex flex-column">

              <!-- Main Content -->
              <div id="content">


                  <navigation ></navigation>
                

                  <!-- Begin Page Content -->
                  <div class="container-fluid">

                      <!-- Page Heading -->
                      <div class="d-sm-flex align-items-center justify-content-between mb-4">
                          <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                          <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                  class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                      </div>

                      <dashboardMetrics></dashboardMetrics>

                      

                  </div>
                  <!-- /.container-fluid -->

              </div>
              <!-- End of Main Content -->

              <!-- Footer -->
              <footerc></footerc>
              <!-- End of Footer -->

          </div>
          <!-- End of Content Wrapper -->

      </div>
      <!-- End of Page Wrapper -->

      <!-- Scroll to Top Button-->
      <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up"></i>
      </a>

      <logoutc></logoutc>

    
  </div>
</template>

<script>
import dashboardMetrics from '../components/dashboard-metrics.vue'
import footerc from '../components/footer.vue'
import leftpanel from '../components/left-panel.vue'
import logoutc from '../components/logout.vue'
import navigation from '../components/navigation-header.vue'





export default {
  name: 'Home',
  data() {
      return {
          user_credentials:{}
      }
  },
  components: {
      leftpanel,
      navigation,
      dashboardMetrics,
      footerc,
      logoutc
  },

  methods: {
        // Log the user in
      login() {
        this.$auth.loginWithRedirect();
      },
      // Log the user out
      logout() {
        this.$auth.logout({
          returnTo: this.$router.push('/')
        });
      },

     
      
    },
    watch: {
      
    },
    created(){
       this.user_credentials=this.$auth.user
       console.log('this is this',this.user_credentials)
    }
  
}
</script>

<style lang="">
  
</style>
