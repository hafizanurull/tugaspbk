<template>
  <div class="container">
    <h1>TO-DO LIST PROJECT</h1>
    <section class="sesi1"> 
      <form @submit.prevent="addActivity">
        <input type="text" v-model="newActivity" placeholder="Add a task">
        <button>Add</button>
      </form>
    </section>
    <section class="sesi2">
      <ul>
        <li v-for="(activity, index) in filteredActivities" :key="index" :class="{ done: activity.completed }">
          <div class="checkbox-wrapper-31">
            <input type="checkbox" v-model="activity.completed"/>
            <svg viewBox="0 0 35.6 35.6">
              <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
              <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
              <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
            </svg>
          </div>
          <span>{{ activity.text }}</span>
          <button @click="removeActivity(index)">Remove</button>
        </li>
      </ul>
    </section>
    <section class="sesi3">
      <label>Show only unfinished activities:</label>
      <input type="checkbox" v-model="showUnfinished">
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newActivity: '',
      activities: [],
      showUnfinished: false
    }
  },
  methods: {
    addActivity() {
      if (this.newActivity.trim() !== '') {
        this.activities.push({ text: this.newActivity, completed: false });
        this.newActivity = '';
      }
    },
    removeActivity(index) {
      this.activities.splice(index, 1);
    }
  },
  computed: {
    filteredActivities() {
      if (this.showUnfinished) {
        return this.activities.filter(activity => !activity.completed);
      } else {
        return this.activities;
      }
    }
  }
}
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f3f0;
  background-image: url(/src/assets/6194995.jpg);
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
}

.done {
  text-decoration: line-through;
  text-decoration-color: #996633;
}

input[type="text"]::placeholder {
  color: #996633;
}

.sesi2 ul {
  padding: 0;
}

.sesi2 li {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e0d6d0;
  background-color: #fff;
}

.checkbox-wrapper {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.checkbox-wrapper svg {
  fill: none;
  stroke: #c7a586;
  stroke-width: 2px;
  transition: ease all 0.2s;
}

.checkbox-wrapper circle.background {
  fill: #fff;
  transition: ease all 0.2s;
}

.checkbox-wrapper input[type="checkbox"]:checked + svg .background {
  fill: #ffc107;
}
</style>
