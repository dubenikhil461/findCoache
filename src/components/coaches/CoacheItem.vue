<template>
  <li class="coach-card" @click="goToCoachDetailsPages">
    <div class="header">
      <h1 class="name">{{ fullName }}</h1>
      <h1 class="rate">${{rate}}/hour</h1>
    </div>

    <div class="areas">
      <span v-for="area in areas" :key="area" class="badge">{{ area }}</span>
    </div>

    <div class="actions">
      <router-link :to="goToContactPage" class="btn">Contact</router-link>
      <router-link :to="goToCoachDetailsPage" class="btn btn--outline">View Details</router-link>
    </div>
  </li>
</template>


<script>
 export default {
    props : ['id','firstName','lastName','areas','rate'],
    computed : {
    fullName(){
        return this.firstName + " " + this.lastName ;
    },
    goToContactPage() {
      return `/coaches/${this.id}/contact/`;
    },
    goToCoachDetailsPage() {
      return `/coaches/${this.id}/`;
    }
  },
  methods :{
     goToCoachDetailsPages(){
         return this.$router.push(`/coaches/${this.id}/`)
     }
  }}
</script>

<style scoped>
.coach-card {
  list-style: none;
  padding: 1.5rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.coach-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.name {
  font-size: 1.5rem;
  font-weight: 600;
}

.rate {
  color: #4caf50;
  font-size: 1.2rem;
}

.areas {
  margin-bottom: 1rem;
}

.badge {
  display: inline-block;
  background-color: #e0f7fa;
  color: #00796b;
  padding: 0.3rem 0.6rem;
  margin-right: 0.5rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  background-color: #007bff;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.btn--outline {
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}

.btn--outline:hover {
  background-color: #007bff;
  color: white;
}
</style>