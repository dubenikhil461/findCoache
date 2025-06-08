<template>
    <h1 v-if="hascoaches">
        <ul v-for="coaches in filtercoaches" :key="coaches.id">
           {{ coaches.firstName }}
        </ul>
    </h1>
    <h2 v-else>No coaches Found</h2>
</template>

<script>
  export default {
    computed : {
        filtercoaches(){
            return this.$store.getters['coaches/coaches']
        },
        hascoaches(){
            return this.$store.getters['coaches/hascoaches']
        }
    }
  }
</script>