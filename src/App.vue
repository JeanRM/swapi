<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-card-title class="blue white--text">
          <span class="headline">SWAPI</span>

          <v-spacer></v-spacer>

          <v-menu bottom left>
            <v-btn
              slot="activator"
              dark
              icon
            >
              <v-icon>more_vert</v-icon>
            </v-btn>

            <v-list>
              <v-list-tile
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-card-title>
              </v-card>
        <v-flex xs10 offset-xs1 >
          
                  <v-data-table
              :headers="headers"
              :items="films"
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.title }}</td>
                <td class="text-xs-right">{{ props.item.episodie_id }}</td>
                <td class="text-xs-right">{{ props.item.fat }}</td>
                <td class="text-xs-right">{{ props.item.carbs }}</td>
                <td class="text-xs-right">{{ props.item.protein }}</td>
                <td class="text-xs-right">{{ props.item.iron }}</td>
              </template>
            </v-data-table>
        </v-flex>
    </v-flex>
  </v-layout>

  
</template>

<script>
  import Film from './services/films'

  export default{

    data(){
      return {
        headers: [
          {
            text: 'Nome',
            align: 'left',
            sortable: false,
            value: 'title'
          },
          { text: 'Episódio', value: 'episodie_id' },
          { text: 'Ano de Lançamento'},
          { text: 'Diretor'},
          { text: 'Sinopse'},
        ],

        films: [],

        desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
          ]
      }
    },

    mounted(){
      this.Film.listar().then(resposta =>{
        console.log(resposta.data)
        this.films = resposta.data;
      })
    } 
  }
</script>

<style>

</style>
