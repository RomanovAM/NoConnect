/*Определяем действия*/
export const    INCREMENT   = 'INCREMENT',
                DECREMENT   = 'DECREMENT',
                ADD         = 'ADD',   /*Сложение*/
                SUB         = 'SUB',   /*Вычитание*/
                CLS         = 'CLS';

/*Создаём действие*/

export function add(num1 = 0, num2 = 0) {
  return { type: ADD, num1, num2 }
};

export function sub(num1 = 0, num2 = 0) {
  return { type: SUB, num1, num2 }
};
