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
              hourlyRate: '50hr'
            },
            {
              id: 'c2',
              firstName: 'Bob',
              lastName: 'Martinez',
              description: 'Experienced data scientist who loves sharing knowledge.',
              areas: ['datascience', 'backend'],
              hourlyRate:'65hr'
            }
     ]
    }
   },
   getters,
   mutations,
   actions
}
