<template>
  <v-layout>
     <v-toolbar color="green" app fixed block>
      <h1>
        <v-toolbar-title class="white--text" font-family="Open Sans" v-text="title"></v-toolbar-title>
      </h1>
    </v-toolbar>
    
      
      <router-view/>
  </v-layout>
</template>

<script>
  export default {
  data () {
    return {
      items: [
        {
          icon: "home",
          title: 'Filmes',
          url: "/"
        }
      ],
      title: 'SWAPI'
    }
  },

}
</script>

<style>
v-toolbar{
  display:block;
}
</style>