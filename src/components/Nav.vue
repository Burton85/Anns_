<template>
    <h1 class="logo"><router-link to="/">ANN</router-link></h1>
    <ul class="nav">
        <router-link to="/uiux" class="nav-router" :class="$route.meta.title=='UI/UX'?' nav-active':''"><li >UI/UX</li></router-link>
        <router-link to="/illustrator" class="nav-router" :class="$route.meta.title=='ILLUSTRATOR'?' nav-active':''"><li >ILLUSTRATOR</li></router-link>
        <router-link to="/contact" class="nav-router" :class="$route.meta.title=='CONTACT'?' nav-active':''"><li >CONTACT</li></router-link>
    </ul>
</template>

<script>
export default {
  name: "Nav",
};
</script>