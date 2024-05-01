<template>
  <div class="row align-items-center justify-content-center card-glass p-5">
    <div class="col-md-4 mb-4" v-for="team in teams" :key="team.name">
      <CardTeam :name="team.name" :role="team.role"></CardTeam>
    </div>
  </div>
</template>


<script setup lang="ts">
import TeamConstant from "~/constant/team.constant";

const teams = ref(TeamConstant.MEMBER);
</script>   