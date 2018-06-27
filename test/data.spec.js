describe('data', () => {

  it('debería exponer función computeUsersStats en objeto global', () => {
    assert.isFunction(computeUsersStats);
  });

  it('debería exponer función sortUsers en objeto global', () => {
    assert.isFunction(sortUsers);
  });

  it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  });

  it('debería exponer función processCohortData en objeto global', () => {
    assert.isFunction(processCohortData);
  });

  describe('computeUsersStats(users, progress, courses)', () => {

    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;

    it('debería retornar arreglo de usuarios con propiedad stats', () => {
      const processed = computeUsersStats(users, progress, courses);
      assert.equal(users.length, processed.length);
      processed.forEach(user => {
        assert.ok(user.hasOwnProperty('stats'));
        assert.isString(user.stats.name);
        assert.isString(user.stats.idUser);
        assert.isString(user.stats.cohort);
        assert.isNumber(user.stats.percent);
        assert.isObject(user.stats.exercises);
        assert.isObject(user.stats.quizzes);
        assert.isObject(user.stats.reads);
      });
    });

    describe('user.stats para el primer usuario en data de prueba - ver carpeta data/', () => {
      const processed = computeUsersStats(users, progress, courses);

      it(
        'debería tener propiedad percent con valor 53',
        () => assert.equal(processed[0].percent, 53)
      );

      it('debería tener propiedad exercises con valor {total: 2, completed: 0, percent: 0}', () => {
        assert.deepEqual(processed[0].excercises, {
          total: 2,
          completed: 1,
          percent: 50,
        });
      });

      it('debería tener propiedad quizzes con valor {total: 3, completed: 2, percent: 67, scoreSum: 57, scoreAvg: 29}', () => {
        assert.deepEqual(processed[0].quizzes, {
          total: 3,
          completed: 2,
          percent: 66,
          scoreAvg: 19,
          scoreSum: 57,
        });
      });

      it('debería tener propiedad reads con valor {total: 11, completed: 6, percent: 55}', () => {
        assert.deepEqual(processed[0].reads, {
          total: 11,
          completed: 6,
          percent: 54,
        });
      });

    });

  });

  describe('sortUsers(users, orderBy, orderDirection)', () => {
      const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
      const courses = Object.keys(cohort.coursesIndex);
      const { users, progress } = fixtures;
      const processed = computeUsersStats(users, progress, courses);
               
    it('debería retornar arreglo de usuarios ordenado por nombre ASC', () => {
      const sort=sortUsers(processed,'ASC','name');
      assert.deepEqual(sort[0].name == 'ADRIANA VIZCARRA PAITÁN' && sort[sort.length].name == 'ZURISADAI ROSAS ARAMBURÚ');
    });
    it('debería retornar arreglo de usuarios ordenado por nombre DESC', () => {
      const sort=sortUsers(processed,'DES','name');
      assert.deepEqual(sort[0].name == 'ZURISADAI ROSAS ARAMBURÚ' && sort[sort.length].name == 'ADRIANA VIZCARRA PAITÁN');
   
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC', () => {
      const sort=sortUsers(processed,'ASC','percent');
      assert.deepEqual(sort[0].name == 'KARLA AGRAZ' && sort[sort.length].name == 'DODA');
   
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC', () => {
      const sort=sortUsers(processed,'DES','percent');
      assert.deepEqual(sort[0].name == 'DODA' && sort[sort.length].name == 'KARLA AGRAZ');
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC', () => {
      const sort=sortUsers(processed,'ASC','percentExercises');
      assert.deepEqual(sort[0].name == 'DIANA VANESSA SOSA RIVAS' && sort[sort.length].name == 'NELLY');
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC', () => {
      const sort=sortUsers(processed,'DES','percentExercises');
      assert.deepEqual(sort[0].name == 'NELLY' && sort[sort.length].name == 'DIANA VANESSA SOSA RIVAS');
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC', () => {
      const sort=sortUsers(processed,'ASC','percentQuizes');
      assert.deepEqual(sort[0].name == 'LISBETH MARIORY GINA SOTO HERRERA' && sort[sort.length].name == 'DODA');
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC', () => {
      const sort=sortUsers(processed,'DES','percentQuizes');
      assert.deepEqual(sort[0].name == 'DODA' && sort[sort.length].name == 'LISBETH MARIORY GINA SOTO HERRERA');
    });
    /*.......................................................................... */
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC', () => {
      const sort=sortUsers(processed,'ASC','percentQuizes');
      assert.deepEqual(sort[0].name == 'DODA' && sort[sort.length].name == 'KARLA AGRAZ');
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC', () => {
      const sort=sortUsers(processed,'ASC','percentQuizes');
      assert.deepEqual(sort[0].name == 'DODA' && sort[sort.length].name == 'KARLA AGRAZ');
    });
    /*........................................................................... */
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC', () => {
      const sort=sortUsers(processed,'ASC','percentReads');
      assert.deepEqual(sort[0].name == 'GABRIELA' && sort[sort.length].name == 'YAMILLE CHUMACERO PUJAY');
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC', () => {
      const sort=sortUsers(processed,'DES','percentReads');
      assert.deepEqual(sort[0].name == 'YAMILLE CHUMACERO PUJAY' && sort[sort.length].name == 'GABRIELA');
    });

  });

  describe('filterUsers(users, filterBy)', () => {
    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;
    const processed = computeUsersStats(users, progress, courses);
    it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)',()=>{
      const  filter = filterUsers(processed, 'Noely');
      assert.deepEqual(filter[0].name);
    });

  });

  describe('processCohortData({ cohortData, orderBy, orderDirection, filterBy })', () => {
      
    it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter');

  });

});
