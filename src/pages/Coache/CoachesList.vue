<template>
    <base-card>
    <ul v-if="hascoaches">
        <CoacheItem
        v-for="coach in filtercoaches"
        :key="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :id="coach.id"
        :areas="coach.areas"
        :rate="coach.rate"
        />
    </ul>
    <h2 v-else>No coaches found</h2>
    </base-card>
</template>

<script>
import CoacheItem from '../../components/coaches/CoacheItem.vue';
  export default {  
    components : {
        CoacheItem 
      },
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