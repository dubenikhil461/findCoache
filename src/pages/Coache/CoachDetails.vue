<template>
  <section>
    <base-card class="coach-detail-card">
      <h2 class="coach-name">{{ fullName }}</h2>
      <h2 class="coach-rate">${{ selectedcoache.rate }}/hour</h2>
    </base-card>
  </section>

  <section>
    <base-card>
      <header class="coach-actions">
        <button class="contact-button" @click="gotocontactpage">Contact</button>
      </header>
    </base-card>
  </section>
  <section>
    <base-card class="coach-info">
      <ul class="area-list">
        <li v-for="area in selectedcoache.areas" :key="area" class="area-item">{{ area }}</li>
      </ul>
      <p class="coach-description">{{ selectedcoache.description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedcoache: null
    };
  },
  computed: {
    fullName() {
      return this.selectedcoache.firstName + ' ' + this.selectedcoache.lastName;
    }
  },
  methods: {
    gotocontactpage() {
      this.$router.push(`/coaches/${this.id}/contact`);
    }
  },
  created() {
    this.selectedcoache = this.$store.getters['coaches/coaches'].find(
      coach => coach.id === this.id
    );
  }
};
</script>


<style scoped>
.coach-detail-card {
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.coach-name {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.coach-rate {
  font-size: 1.4rem;
  color: #27ae60;
}

.coach-actions {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.contact-button {
  background-color: #3498db;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #2980b9;
}

.area-list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.area-item {
  background-color: #ecf0f1;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.coach-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}
</style>
