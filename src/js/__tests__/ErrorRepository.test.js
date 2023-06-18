import ErrorRepository from '../ErrorRepository';

test('получаем текст ошибки по коду', () => {
  const error = new ErrorRepository();
  error.add(400, 'ошибка неверного запроса');
  expect(error.translate(400)).toBe('ошибка неверного запроса');
});

test('если кода ошибки не нашли, выдает Unknown error', () => {
  const error = new ErrorRepository();
  expect(error.translate(77)).toBe('Unknown error');
});
