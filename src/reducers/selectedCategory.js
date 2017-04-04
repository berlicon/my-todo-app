let selectedCategoryId = 1;

const selectedCategory =  (state = selectedCategoryId, action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return action.text;
    default:
      return state;
  }
}

export default selectedCategory
