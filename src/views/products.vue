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


                  <navigation></navigation>
                

                  <!-- Begin Page Content -->
                  <div class="container-fluid">

                      <!-- Page Heading -->
                      <div class="d-sm-flex align-items-center justify-content-between mb-4">
                          <h1 class="h3 mb-0 text-gray-800">Product Management</h1>

                             <a href="javascript:;"  @click="creating_product = !creating_product"  class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                  class="fas fa-download fa-sm text-white-50"></i> Create a Product</a>
                      </div>

                      <!-- product -->
                      <div class="card shadow mb-4" v-if="!creating_product">
                          <div class="card-header py-3">
                              <h6 class="m-0 font-weight-bold text-primary">Product Listing</h6>
                          </div>
                          <div class="card-body">

                               <b-row class="mb-3">
                                <b-col md="3">
                                    <b-form-input striped hover outlined v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
                                    </b-col>
                                </b-row>
                              <div class="table-responsive">
                                  <b-table striped hover :items="products" :filter="filter" :fields="fields" head-variant="light" responsive="sm" show-empty>
                                    

                                    <template v-slot:cell(image_feature)="imagedata">
                                        <img :src="imagedata.item.image_feature" class="img-fluid rounded" :alt="imagedata.item.metaTitle" style="height:80px">
                                    </template>

                                     <template v-slot:cell(actions)="data">
                                         <a href="javascript:;" @click="deleteItem(data.item.id)">
                                             <i class="fas fa-trash text-danger mr-4"></i>
                                        </a>
                                         <a href="javascript:;" @click="editItem(data.item.id)">
                                             <i class="fas fa-edit text-info"></i>
                                         </a>
                                    </template>


                                  </b-table>

                              </div>
                              <b-pagination
                                v-model="currentPage"
                                :total-rows="totalRows"
                                :per-page="perPage"
                                aria-controls="my-table"
                                ></b-pagination>
                          </div>
                      </div>

                      <div class="container" v-if="creating_product">
                        <div class="row">
                          <div class="col-md-6">
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                            <b-form-group
                              id="input-group-1"
                              label="Title:"
                              label-for="input-1"
                              description="Name the product"
                            >
                              <b-form-input
                                id="input-1"
                                v-model="form.title"
                                type="text"
                                placeholder="Enter title"
                                required
                              ></b-form-input>
                            </b-form-group>


                            <b-form-group
                              id="input-group-metatitle"
                              label="Meta title:"
                              label-for="input-1"
                              description="Meta tags"
                            >
                              <b-form-input
                                id="input-metatitle"
                                v-model="form.metaTitle"
                                type="text"
                                placeholder="Divide them with ,"
                                required
                              ></b-form-input>
                            </b-form-group>

                            <b-form-group
                              id="input-group-slug"
                              label="SLUG URL:"
                              label-for="input-1"
                              description="Meta tags"
                            >
                              <b-form-input
                                id="input-slug"
                                v-model="form.slug"
                                type="text"
                                placeholder="Product Detail url"
                                required
                              ></b-form-input>
                            </b-form-group>

                            <b-form-group
                              id="input-group-2"
                              label="Summary:"
                              label-for="input-1"
                              description="Define briefly the product"
                            >
                              <b-form-textarea
                                id="input-2"
                                v-model="form.summary"
                                placeholder="Enter Summary"
                                required
                                rows="3"
                                max-rows="6"
                              ></b-form-textarea>
                            </b-form-group>

                            <b-form-group
                              id="input-group-3"
                              label="Content:"
                              label-for="input-1"
                              description="detail content product"
                            >
                              <b-form-textarea
                                id="input-3"
                                v-model="form.content"
                                placeholder="Enter Content"
                                required
                                rows="3"
                                max-rows="6"
                              ></b-form-textarea>
                            </b-form-group>

                            <b-form-group
                              id="input-group-image"
                              label="Image url:"
                              label-for="input-1"
                              description="paste image url located"
                            >
                              <b-form-input
                                id="input-3"
                                v-model="form.image"
                                placeholder="Image url here"
                                type="url"
                                required

                              ></b-form-input>
                            </b-form-group>


                            <b-form-group
                              id="input-group-price"
                              label="Price:"
                              label-for="input-1"
                              description="Set a price"
                            >
                              <b-form-input
                                id="input-price"
                                v-model="form.price"
                                type="number"
                                placeholder="price"
                                required
                              ></b-form-input>
                              
                            </b-form-group>

                            <b-form-group
                              id="input-group-quantity"
                              label="Quantity:"
                              label-for="input-1"
                              description="Quantity"
                            >
                              <b-form-input
                                id="input-quantity"
                                v-model="form.quantity"
                                type="number"
                                placeholder="Stock number"
                                required
                              ></b-form-input>
                              
                            </b-form-group>

                            

                            <b-form-group id="input-group-3" label="Type:" label-for="input-3">
                              <b-form-select
                                id="input-type"
                                v-model="form.type"
                                :options="types"
                                required
                              ></b-form-select>
                            </b-form-group>

                            <!-- <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                              <b-form-checkbox-group
                                v-model="form.checked"
                                id="checkboxes-4"
                                :aria-describedby="ariaDescribedby"
                              >
                              </b-form-checkbox-group>
                            </b-form-group> -->

                            <b-button type="submit" variant="primary">Submit</b-button>
                            <b-button type="reset" variant="danger">Reset</b-button>
                        </b-form>
                          </div>
                        </div>
                      </div>

                       
                      <!-- <dashboardMetrics></dashboardMetrics> -->

                      

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
            <logoutc></logoutc>

      <!-- End of Page Wrapper -->

  

    
  </div>
</template>

<script>
import footerc from '../components/footer.vue'
import leftpanel from '../components/left-panel.vue'
import logoutc from '../components/logout.vue'
import navigation from '../components/navigation-header.vue'



export default {
  name: 'productsController',
  data() {
      return {
          filter: "",
          totalRows: 1,
          perPage: 5,
          currentPage: 1,
          user_credentials:{},
          products:[],
          fields: [{
            key: 'id',
            sortable: true
          },
          {
            key: 'image_feature',
            sortable: true
          },
          {
            key: 'title',
            sortable: true 
          },
          {
            key: 'summary',
            sortable: true   
          },
          {
            key: 'price',
            sortable: true   
          },
          {
            key: 'quantity',
            sortable: true 
          },
          {
            key: 'actions',
            sortable: false 
          }
          ],

          // creating product data controller
          creating_product:false,
           form: {
            title:'',
            summary:'',
            metaTitle:'',
            slug:'',
            price:'',
            quantity:'',
            image:'',
            content:'',
            email: this.$auth.user,
            type: null,
            checked: []
          },
          types: [{ text: 'Select One', value: null }, 'Product', 'Course'],
                  show: true


      }
  },
  components: {
      leftpanel,
      navigation,
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

     async get_products(){
                

        const response = await fetch("https://dbshoppingcartnodejs.herokuapp.com/api/v1.0/productlist");
        const data = await response.json();
        this.products=data
        console.log('here it goes',data)
        this.rows=  this.products.length;
        this.totalRows = this.products.length
        


     },
     pushdata(data){
       if (data[0]) {
         this.products.push(data[0])
         this.clearform()
         this.creating_product=false
       }else{
          this.clearform()
          this.creating_product=false
      }
     },

     async create_product(data){       
          const response = await fetch('https://dbshoppingcartnodejs.herokuapp.com/api/v1.0/products', {
                method: 'post',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: data
            })
            const response_data = await response.json();

            this.pushdata(response_data)

        


     },
     
     async deleteItem(id) {
    //   const index = this.posts.indexOf((x) => x.id === id);
    //   this.posts.splice(index, 1);


    let data_send=JSON.stringify({id:id,delete:true})

        const response1 = await fetch('https://dbshoppingcartnodejs.herokuapp.com/api/v1.0/products', {
                method: 'post',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: data_send
            })
            const response_data = await response1.json();
            

            console.log('let me know this',response_data)

              const index = this.products.indexOf((x) => x.id === id);
              this.products.splice(index, 1);


        
    },

    editItem() {
    //   const index = this.posts.indexOf((x) => x.id === id);
    //   this.posts.splice(index, 1);

        alert('edit')
    },

    clearform(){
             this.form.title=''
                this.form.summary=''
                this.form.metaTitle=''
                this.form.slug=''
                this.form.price=''
                this.form.quantity=''
                this.form.image=''
                this.form.content=''
                this.form.email= ''
                this.form.type=null;
                this.form.checked = []

                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                  this.show = true
                })
    },


     onSubmit(event) {
        event.preventDefault()
        console.log('this is what ',JSON.stringify(this.form))

        this.create_product(JSON.stringify(this.form))
     },
      onReset(event) {
        event.preventDefault()

        this.clearform()
      }

     
      
    },
    mounted(){
        this.user_credentials=this.$auth.user
        this.get_products()
        this.totalRows = this.products.length


    }
  
}
</script>

<style scoped>
  .table td.fit, 
.table th.fit {
    white-space: nowrap;
    width: 1%;
}
</style>
