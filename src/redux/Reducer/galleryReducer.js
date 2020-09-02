const SET_GALLERY = 'SET_GALLERY';
const SET_CURRENTPAGE = 'SET_CURRENTPAGE';
const SET_TOTALPHOTOS = 'SET_TOTALPHOTOS';

let initialState = {
  photos: [
  ],
  pageSize: 12,
  totalPhotosCount: 0,
  currentPage: 1
}

const galleryReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_GALLERY: {
      return { 
        ...state,
       photos: [ ...action.photos]
      }
    }
    case SET_CURRENTPAGE : {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }

    case SET_TOTALPHOTOS : {
      return {
        ...state,
        totalPhotosCount: action.totalPhotos
      }
    }

    default: {
      return state;
    }
  }
}

export const setGalleryAC = (photos) => ({type: SET_GALLERY, photos})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENTPAGE, currentPage})
export const setTotalPhotosCountAC = (totalPhotos) => ({type: SET_TOTALPHOTOS, totalPhotos})


export default galleryReducer;