import * as grid from "./grid.js";



export function startLabyrinthRoom(onSolve) {

    console.log('startLavaRoom', onSolve)

    const map = [
      '#############################',
      '# #           #             #',
      '# ####### ### # ##### # ### #',
      '#    M  # #   # #   # #   # #',
      '####### # # ##### # # ### # #',
      '#   #   # # #     # #   # # #',
      '### # ### # ### ### ##### # #',
      '#   # #   #   #   #     # # #',
      '# ### # ##### ### ##### # # #',
      '#     #   # #   #   #   # # #',
      '# ####### # ### ### # ### #  ',
      '#         #         #     # #',
      '#############################',
    ];

    console.log('startLabyrinthRoom')
    grid.startGrid(map, onSolve)
    grid.setNotification("Oh no! Can you help Matias find his way out of the maze?");
    
}




