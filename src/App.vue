<template>
  <v-layout row>
    <v-flex>

      <v-card>
        <v-card-title class="black ">
          <span class="headline green--text text-md-center">SWAPI</span>
        </v-card-title>
      </v-card>
      
      
      <v-card  v-for="filme of films" :key="filme.id" >
      <v-container
        fluid
        grid-list-lg center 
      >
         <v-layout row wrap >
          <v-flex xs10 offset-xs1 >
            <v-card color="black" class="white--text">
              <v-card-title primary-title >
                <div >
                  <div class="headline green--text">
                      {{filme.title}} 
                  </div>

                  <div>
                    Lançamento: {{filme.release_date}}.
                  </div>

                  <div>
                      Episódio: {{filme.episode_id}}°.
                  </div>

                  <div>
                      Produtores: {{filme.producer}}°.
                  </div>
                  
                  <div>
                    Diretor: {{filme.director}}.
                  </div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-dialog v-model="dialog" persistent max-width="600px">
                <v-btn slot="activator" dark  class="black--text green center">Saiba Mais</v-btn>
                <v-card>
                  <v-card-title>
                    <span class="headline"></span>
                  </v-card-title>
                  
                  <v-card-text>
                    
                  </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                      <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                  </v-dialog>
                          </v-card-actions>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-container>
                  </v-card>



    </v-flex>
      
  </v-layout>

</template>

<script>
  import Film from './services/films'

  export default{
    
    data(){
      return {   
        dialog: false,
        films: [],
      }
    },

    mounted(){
      Film.listar().then(resposta =>{
        console.log(resposta.data.results)
        this.films = resposta.data.results
      })
    } 
  }
</script>

<style>

</style>
