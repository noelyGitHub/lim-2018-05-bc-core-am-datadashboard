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
        assert.ok(user.stats.hasOwnProperty('cohort'));
        assert.isNumber(user.stats.percent);
        assert.isObject(user.stats.excercises);
        assert.isObject(user.stats.quizzes);
        assert.isObject(user.stats.reads);
      });
    });

    describe('user.stats para el primer usuario en data de prueba - ver carpeta data/', () => {
      const processed = computeUsersStats(users, progress, courses);

      it(
        'debería tener propiedad percent con valor 53',
        () => assert.equal(processed[0].stats.percent, 53)
      );

      it('debería tener propiedad exercises con valor {total: 2, completed: 0, percent: 0}', () => {
        assert.deepEqual(processed[0].stats.excercises, {
          total: 2,
          completed: 1,
          percent: 50,
        });
      });

      it('debería tener propiedad quizzes con valor {total: 3, completed: 2, percent: 67, scoreSum: 57, scoreAvg: 29}', () => {
        assert.deepEqual(processed[0].stats.quizzes, {
          total: 3,
          completed: 2,
          percent: 67,
          scoreAvg: 29,
          scoreSum: 57,
        });
      });

      it('debería tener propiedad reads con valor {total: 11, completed: 6, percent: 55}', () => {
        assert.deepEqual(processed[0].stats.reads, {
          total: 11,
          completed: 6,
          percent: 55,
        });
      });
    });
  });
  describe('sortUsers(users, orderBy, orderDirection)', () => {
      const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
      const courses = Object.keys(cohort.coursesIndex);
      const { users, progress } = fixtures;
      const result = computeUsersStats(users, progress, courses);
               
    it('debería retornar arreglo de usuarios ordenado por nombre ASC', () => {
      const  sort = sortUsers(result,'name','ASC');
      assert.equal(sort[0].stats.name,'ADRIANA VIZCARRA PAITÁN');
    });
    it('debería retornar arreglo de usuarios ordenado por nombre DESC', () => {
      const sort=sortUsers(result,'name','DES');
      assert.deepEqual(sort[0].stats.name, 'ZURISADAI ROSAS ARAMBURÚ');
   
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC', () => {
      const sort=sortUsers(computeUsersStats(users, progress, courses),'percent','ASC');
      assert.deepEqual(sort[0].stats.percent, 0);//);
   
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC', () => {
      const sort=sortUsers(computeUsersStats(users, progress, courses),'percent','DES');
      assert.deepEqual(sort[0].stats.percent, 100);//2
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC', () => {
      const sort=sortUsers(computeUsersStats(users, progress, courses),'percentExercises','ASC');
      assert.deepEqual(sort[0].stats.excercises.percent,0)//2 nurit;
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC', () => {
      const sort=sortUsers(computeUsersStats(users, progress, courses),'percentExercises','DES');
      assert.deepEqual(sort[0].stats.excercises.percent, 100)//2;
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC', () => {
      const sort=sortUsers(computeUsersStats(users, progress, courses),'percentQuizes','ASC');
      assert.deepEqual(sort[0].stats.quizzes.percent, 0)//2;
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC', () => {
      const sort=sortUsers(computeUsersStats(users, progress, courses),'percentQuizes','DES');
      assert.deepEqual(sort[0].stats.quizzes.percent, 100);//2
    });
    /*.......................................................................... */
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC', () => {
      const sort=sortUsers(computeUsersStats(users, progress, courses),'promedio','ASC');
      assert.deepEqual(sort[0].stats.name ,'NURIT SHEILA');
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC', () => {
      const sort=sortUsers(computeUsersStats(users, progress, courses),'promedio','DES');
      assert.deepEqual(sort[0].stats.name, 'MAYRA');
    });
    /*........................................................................... */
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC', () => {
      const sort=sortUsers(computeUsersStats(users, progress, courses),'percentReads','ASC');
      assert.deepEqual(sort[0].stats.reads.percent , 0);
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC', () => {
      const sort=sortUsers(computeUsersStats(users, progress, courses),'percentReads','DES');
      assert.deepEqual(sort[0].stats.reads.percent , 100);
    });

  });

  describe('filterUsers(users, filterBy)', () => {
    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;
    const processed = computeUsersStats(users, progress, courses);
    it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)',()=>{
      const  filter = filterUsers(processed,'NOELY');
      const data=filter.map(users=>{
        return users.stats.name;
      });
      assert.equal(data,'NOELY');
    });

  });

  describe('processCohortData({ cohortData, orderBy, orderDirection, filterBy })', () => {
    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    //const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;
    //processCohortData({cohort:cohort,cohortData:{users: users,progress: progress,},orderBy:'name', orderDirection:'ASC',search:'Noely'})
    //const process=processCohortData(options);
    it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter',() => {
      const process= processCohortData({cohort:cohort,cohortData:{users: users,progress: progress,},orderBy:'name', orderDirection:'ASC',search:'Noely'})
      process.forEach(user => {
        assert.ok(user.hasOwnProperty('stats'));
        assert.equal(user.stats.name,'NOELY');
      });
    });
      it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort',() => {
        const processSort= processCohortData({cohort:cohort,cohortData:{users: users,progress: progress},orderBy:'name', orderDirection:'ASC',search:''})
        processSort.forEach(user => {
          assert.ok(user.hasOwnProperty('stats'));
          });
          assert.deepEqual(processSort[0].stats.name, 'ADRIANA VIZCARRA PAITÁN');
          assert.deepEqual(processSort[processSort.length-1].stats.name, 'ZURISADAI ROSAS ARAMBURÚ');
          
      
      });

  });

});
