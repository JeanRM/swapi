<template >
  <v-layout>
    <v-flex>
      <v-dialog v-model="dialog">
        <v-card>
          <v-card-title>
            <span class="headline">Star Wars Episode {{films.episode_id}}: {{films.title}}</span>
          </v-card-title>

          <v-card-text >
            <v-container>
              <v-layout>
                <v-flex>
                <v-flex mb-2>
                  <span>Sinopse:</span>
                  <label> {{films.opening_crawl}} </label>
                </v-flex>

                <v-flex mb-2>
                  <span>Diretor:</span>
                  <label> {{films.director}} </label>
                </v-flex>

                <v-flex mb-2>
                  <span>Producer:</span>
                  <label> {{films.producer}} </label>
                </v-flex>
                
                <v-flex mb-2>
                  <span class="headline center">Curiosidades</span>
                </v-flex>

                 <v-flex mb-2>
                  <span>Planeta:</span>
                  <label> Nome: {{planets.name}}, População: {{planets.population}} </label>
                  <v-btn color="blue darken-1" flat @click="curiosidades(films.planets[1])"> Clique</v-btn>
                </v-flex>

                 <v-flex mb-4>
                  <span>StarShips:</span>
                  <label> {{films.starships}} </label>
                </v-flex>

                 <v-flex mb-4>
                  <span>Characters:</span>
                  <label> {{films.characters}} </label>
                </v-flex>

                <v-flex mb-4>
                  <span>Vehicles:</span>
                  <label> {{films.vehicles}} </label>
                </v-flex>

                <v-flex mb-4>
                  <span>Species:</span>
                  <label> {{films.species}} </label>
                </v-flex>

                </v-flex>


              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-container mt-5 fluid grid-list-sm>
        <v-layout row wrap>
          <v-flex d-flex xs12 order-xs5>
            <v-data-table
              :headers="headers"
              :items="films"
              
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.title }}</td>
                <td>{{ props.item.episode_id }}</td>
                <td>{{ props.item.release_date }}</td>
                <td>{{ props.item.director }}</td>
                <td class="center">
                  <v-icon small class="ml-3" @click="exibir(props.item)">
                    add
                  </v-icon>
                </td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  import Film from '../services/films'
  import { http } from '../services/config'

  export default {
    data: () => ({
      
      dialog: false,
      
        headers: [
          { text: 'Nome', align: 'left', sortable: false, value: 'title'},
          { text: 'Episódio', align: 'left',  value: 'episodie_id' },
          { text: 'Ano de Lançamento', value: 'created' },
          { text: 'Diretor', value: 'director' },
          { text: 'Saiba Mais', sortable: false}
        ],
        films: [],
        planets: [],
    }),

    methods: {
      exibir (item) {
        this.films = item;
        this.dialog = true
        curiosidades(films.planets, films.planets.length);
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      curiosidades(vetor,valor) {

           Film.teste(vetor).then(resposta =>{
              console.log(resposta.data)
             this.planets = resposta.data;
            })
            
             
      }
    },     

    mounted(){
      Film.listarFilmes().then(resposta =>{
        this.films = resposta.data.results
      })
    }      
  }

</script>
