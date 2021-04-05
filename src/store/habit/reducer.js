const reducer = (state=[], action) => {
    switch(action.type) {
      case 'POST':
       return [
        ...state,
        {
          id: action.id,
          name: action.name,
          triger: action.triger,
          genre: action.genre,
          count: 0,
          today: false,
          isCompleted: false
        },
      ];
      // filterで特定の要素を取得するっぽい
      // とりあえず、配列の要素を変更する関数を組めばいい。（reducer特有のルールとか調べない）
      case 'DONE':
        console.log(state)
        return [
          ...state.map(item => item.id === action.id ? {
            id: item.id,
            name: item.name,
            triger: item.triger,
            genre: item.genre,
            count: item.count + 1,
            today: true,
            isCompleted: false
          } : item)
        ];
      case 'COMPLETE':
        return [
          ...state.filter(item => item.id !== action.id)
        ];
      case 'TIME':
        return [
          ...state.map(item => item.today === true ? {
            id: item.id,
            name: item.name,
            triger: item.triger,
            genre: item.genre,
            count: item.count,
            today: false,
            isCompleted: false
          } : item)
        ];
      default:
        return state
    }
  }
  
  export default reducer