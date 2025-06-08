import getters from './getters'
import mutations from './mutations'
import actions from './actions'


export default{ 
   namespaced: true,    
   state (){
    return {
    coaches :
    [
            {
              id: 'c1',
              firstName: 'Alice',
              lastName: 'Johnson',
              description: 'Passionate about teaching modern frontend technologies.',
              areas: ['frontend', 'backend'],
              rate: 50
            },
            {
              id: 'c2',
              firstName: 'Bob',
              lastName: 'Martinez',
              description: 'Experienced data scientist who loves sharing knowledge.',
              areas: ['datascience', 'backend'],
              rate:65
            }
     ]
    }
   },
   getters,
   mutations,
   actions
}
