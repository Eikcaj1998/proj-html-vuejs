<template>

    <nav class="navbar py2">
        <div class="container-fluid">
            <NavBar/>
            <JumboTron/>
        </div>
    </nav>
</template>
<script>
import NavBar from "./NavBar.vue";
import JumboTron from "./JumboTron.vue";

export default {
    name:"TheHeader",
    components: {
    NavBar,
    JumboTron
}
}
</script>