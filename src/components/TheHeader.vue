<template>
  <header>
    <nav class="header">
      <h1><router-link to="/coaches">FindCoach</router-link></h1>
      <ul>
        <li><router-link to="/coaches">Coaches</router-link></li>
        <li><router-link to="/request">Request</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgb(95, 95, 158);
  border-bottom: 2px solid #e2e2e2;
}

h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
}

h1 a {
  text-decoration: none;
  color: #fffdfd;
}

ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border-radius: 6px solid rgb(0, 0, 0);

}

li a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  transition: color 0.2s ease;
  font-size: large;
}

li a:hover {
  color: #a5c5e7;
}
</style>
