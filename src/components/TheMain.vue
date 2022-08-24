<template>
    <div>
        <GridImg/>
        <WorkingProcess/>
        <ContactMessage/>
        <EmilyFields/>
    </div>
</template>
<script>
import GridImg from "./GridImg.vue";
import WorkingProcess from "./WorkingProcess.vue";
import ContactMessage from "./ContactMessage.vue";
import EmilyFields from "./EmilyFields.vue";
export default {
    name:"TheMain",
    components: { GridImg, WorkingProcess, ContactMessage, EmilyFields }
}
</script>
