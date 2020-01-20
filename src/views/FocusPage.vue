<template>
    <section>
        <b-clockpicker
            v-model="time"
            inline
            type='is-primary'
            hour-format="12"/>
    </section>
</template>

<script>
export default {
    data() {
        return {
            time: new Date()
        }
    },
    computed: {
    }
}
</script>