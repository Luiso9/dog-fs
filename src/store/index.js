// import { createStore } from 'vuex'
// import dogsData from '@/assets/perkapalan/dogs.js'

// export default createStore({
//   state: {
//     dogs: dogsData.dogs,
//     genderFilter: {
//       male: false,
//       female: false,
//     },
//     filteredDogs: [...dogsData.dogs],
//   },
//   getters: {
//     filteredDogs: (state) => state.filteredDogs,
//   },
//   mutations: {
//     sortDogs(state, selectedOption) {
//       switch (selectedOption) {
//         case 'newest':
//           state.filteredDogs.sort((a, b) => new Date(b.date) - new Date(a.date))
//           break
//         case 'price_low_high':
//           state.filteredDogs.sort((a, b) => a.price - b.price)
//           break
//         case 'price_high_low':
//           state.filteredDogs.sort((a, b) => b.price - a.price)
//           break
//         default:
//           state.filteredDogs = [...state.dogs]
//       }
//     },
//     filterDogs(state) {
//       state.filteredDogs = state.dogs.filter((dog) => {
//         const genderMatch =
//           (!state.genderFilter.male && !state.genderFilter.female) ||
//           (state.genderFilter.male && dog.gender === 'Male') ||
//           (state.genderFilter.female && dog.gender === 'Female')
//         return genderMatch
//       })
//     },
//     updateGenderFilter(state, { gender, value }) {
//       state.genderFilter[gender] = value
//     },
//   },
// })
