import todoFilter from './todoFilter'

it('todoFilter processes action CHANGE_IS_DONE correctly', () => {
  const expectedResult = {
    isDone: false,
    filter: 'abc',
    }

    const actualResult = todoFilter({ filter: 'abc', isDone: true }, { type: 'CHANGE_IS_DONE', isDone: false });

    expect(actualResult).toEqual(expectedResult)
});
