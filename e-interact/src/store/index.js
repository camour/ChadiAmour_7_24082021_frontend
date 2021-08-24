import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authentification: false,
    user:{
      id: 0,
      lastName: '',
      firstName: '',
      job: ''
    },
    articlesArray: [{userName: 'Mike02',
                    articleId: 12345,
                    articleTitle: 'Vue JS',
                    articleContent: 'Le framework Vue JS offre la possibilite d\'implementer un router',
                    comments: [{
                      userName: 'Cath_90',
                      commentContent: 'Oui et tu as même la possibilité d\'ajouter un data store centralisé'
                      }]
                    },
                    {userName: 'James_Br',
                    articleId: 12346,
                    articleTitle: 'RH mouvements',
                    articleContent: 'Remaniement du département RH avec notamment l\'arrivée d\'une manager compétente',
                    comments: [{
                      userName: 'MilerM',
                      commentContent: 'On vous souhaite plein de courage pour cette nouvelle équipe',
                    },
                    {
                      userName: 'Diana6',
                      commentContent: 'Oui je rejoins Miler sur ce point et n\'hésitez pas en cas de question'
                    }],
                    },
                    {userName: 'Nic_BOp',
                    articleId: 12347,
                    articleTitle: 'JO 2021',
                    articleContent: 'Quelle performance du Toulousain pour la filière Aviron',
                    comments: [{
                      userName: 'Santos2',
                      commentContent: 'Oui ce sport n\'est pas très médiatisé et pourtant il mérite de l\'être tout autant que d\'autres'
                    },
                  ],
    }]
  },
  mutations: {
    ENABLE_AUTHENTIFICATION(state){
      state.authentification = true;
    },
    DISABLE_AUTHENTIFICATION(state){
      state.authentification = false;
    }
  },
  actions: {
    setAuthentification({commit}, payload=false){
      if(payload){
        commit('ENABLE_AUTHENTIFICATION');
      }
      else if(!payload){
        commit('DISABLE_AUTHENTIFICATION');
      }
    }
  },
  modules: {
  }
})
