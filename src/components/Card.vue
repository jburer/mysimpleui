<template>
  <router-link
    class="shindig-link"
    :to="{ name: 'show', params: { id: shindig.id } }"
  >
    <div class="shindig-card -shadow">
      <span class="eyebrow">@{{ shindig.time }} on {{ shindig.date }}</span>
      <h4 class="title">{{ shindig.title }}</h4>
      <BaseIcon name="users">{{ shindig.attendees.length }} attending</BaseIcon>
      <span></span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    shindig: Object
  }
};
</script>

<style scoped>
.shindig-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.shindig-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.shindig-card > .title {
  margin: 0;
}

.shindig-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
