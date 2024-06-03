<template>
  <div class="home">
    <div class="welcome-container">
      <h1 class="welcome-title">APK TODOLIST!</h1>
      <p class="welcome-message">Hafiza Nurul Magfira</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #7b6f6f;
  color: #fff;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
}

h2 {
  font-size: 15px;
  text-align: center;
  margin-bottom: 20px;
  color: #ccc;
}

form {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.input-text {
  padding: 8px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
}

.btn-add {
  padding: 8px 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-table {
  width: 100%;
  border-collapse: collapse;
}

.todo-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #333;
  color: #fff;
}

.todo-table td:last-child {
  text-align: center;
}

.checkbox {
  margin-right: 10px;
}

.label {
  cursor: pointer;
}

.done {
  text-decoration: line-through;
  color: #999;
}

.btn-remove {
  padding: 5px 10px;
  background-color: #ca3c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-btn {
  margin-top: 20px;
  padding: 8px 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.welcome-message {
  color: aqua;
}
</style>
