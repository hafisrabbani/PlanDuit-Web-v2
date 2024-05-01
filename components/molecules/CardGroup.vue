<template>
    <div class="row align-items-center justify-content-center card-glass p-5"> 
        <CardTeam v-for="team in teams" :name="team.name" :role="team.role"></CardTeam>              
    </div>
</template>


<script setup lang="ts">
import TeamConstant from "~/constant/team.constant"; 
const teams = ref(TeamConstant.MEMBER);
</script>   