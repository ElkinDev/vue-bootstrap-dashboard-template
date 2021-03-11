<template>
    <ul class="navbar-nav bg-white sidebar sidebar-light accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
              
                <div class="sidebar-brand-text mx-3">Simple ecommerce <sup>2</sup></div>
            </a>

            <!-- Divider -->
            <!-- <hr class="sidebar-divider my-0"> -->

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">

                <router-link to="/" tag="a" class="nav-link">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>

            </li>

            <li class="nav-item">

                 <router-link to="/products" tag="a" class="nav-link">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Products</span>
                </router-link>
                    
            </li>

            <li class="nav-item">

                <router-link to="/" tag="a" class="nav-link">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Orders</span>
                </router-link>
                
            </li>

            

            <li class="nav-item">

                <router-link to="/Customers" tag="a" class="nav-link">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Customers</span>
                </router-link>
            </li>

             <li class="nav-item">
                 <router-link to="/Supports" tag="a" class="nav-link">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Supports</span>
                </router-link>

            </li>


            <li class="nav-item">
                <router-link to="/Settings" tag="a" class="nav-link">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Settings</span>
                </router-link>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>


    </ul>
        
    
</template>

<script>
export default {
    name:"leftpanel"
}
</script>