<template>
    <div>
        <NavBar/>
        <JumboTron/>
    </div>
</template>
<script>
import NavBar from "./NavBar.vue";
import JumboTron from "./JumboTron.vue";

export default {
    name:"TheHeader",
    components: {
    NavBar,
    JumboTron,
}
}
</script>