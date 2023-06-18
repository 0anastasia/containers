import Team from '../team';
// не делала тесты на Character т.к делала их в предыдущих задачах
// надеюсь так можно

test('cоздание новой Team', () => {
  const description = new Team('qwer');
  const result = { name: 'qwer', members: new Set() };
  expect(description).toEqual(result);
});

test('add', () => {
  const team = new Team('qwer');
  const unit = new Character('0');
  team.add(unit);
  const result = {
    name: 'qwer',
    members: new Set([{
      name: '0',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('oшибка при дублировании', () => {
  const team = new Team('qwer');
  const unit = new Character('0');
  team.add(unit);
  expect(() => team.add(unit)).toThrow(new Error('такой персонаж уже есть'));
});

test('addAll', () => {
  const team = new Team('qwer');
  const unit1 = new Character('1');
  const unit2 = new Character('2');
  const unit3 = new Character('3');
  team.addAll(unit1, unit2, unit3);
  const result = {
    name: 'qwer',
    members: new Set([{
      name: '1',
      level: 1,
      health: 100,
    },
    {
      name: '2',
      level: 1,
      health: 100,
    },
    {
      name: '3',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('addAll, задвоение персонажа не возникает', () => {
  const team = new Team('qwer');
  const unit1 = new Character('1');
  const unit2 = new Character('2');
  const unit3 = new Character('3');
  team.addAll(unit1, unit2, unit3, unit3);
  const result = {
    name: 'qwer',
    members: new Set([{
      name: '1',
      level: 1,
      health: 100,
    },
    {
      name: '2',
      level: 1,
      health: 100,
    },
    {
      name: '3',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('конвертация Set в массив', () => {
  const team = new Team('qwer');
  const unit1 = new Character('1');
  const unit2 = new Character('2');
  const unit3 = new Character('3');
  team.addAll(unit1, unit2, unit3);
  const result = [
    {
      name: '1',
      level: 1,
      health: 100,
    },
    {
      name: '2',
      level: 1,
      health: 100,
    },
    {
      name: '3',
      level: 1,
      health: 100,
    }];
  expect(team.toArray()).toEqual(result);
});
