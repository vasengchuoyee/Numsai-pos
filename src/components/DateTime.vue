<template>
    <div id="app">
        <p> ວັນນີ້: {{ formattedDate }}</p>
    </div>
</template>
<script >
export default {
    data() {
        return {
            date: new Date(),
        };
    },
    computed: {
        formattedDate() {
            const day = this.date.getDate().toString().padStart(2, "0");
            const month = (this.date.getMonth() + 1)
                .toString()
                .padStart(2, "0");
            const year = this.date.getFullYear().toString();

            return `${day}/${month}/${year}`;
        },       
    }
}
</script>

<style scoped>
p {
    font-family: 'Noto Sans Lao', sans-serif;
}
</style>