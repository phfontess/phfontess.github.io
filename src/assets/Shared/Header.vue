<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/portfolio" class="navbar-brand">Pedro Fontes</router-link>
            </div>
            <ul class="nav navbar-nav">
                <router-link tag="li" activeClass="active" to="/portfolio/contact">
                    <a>Contact</a>
                </router-link>
                <router-link tag="li" activeClass="active" to="/portfolio/about">
                    <a>About</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar-default {
    background-color: #24292e;
}

.navbar-header {
    float: left;
}

.nav>li {
    display: inline-block;
}

.navbar-default .navbar-brand {
    color: rgba(255,255,255,0.75);

}

.navbar-default .navbar-nav>li>a {
    color: rgba(255,255,255,0.75);
}


.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
    color: #24292e;
} 
</style>


