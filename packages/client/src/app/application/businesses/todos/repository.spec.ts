import * as MockData from './mock-data';
import * as Repository from './repository';

describe('repository', () => {
  describe('TodosRepository', () => {
    let data: ConstructorParameters<typeof Repository.TodosRepository>[0];

    beforeEach(() => {
      data = {
        ...MockData.TodosRepositoryData,
      };
    });
    describe('toEntityTodos', () => {
      it('when called, then return todos define as entity', () => {
        const result = new Repository.TodosRepository(data).toEntityTodos;

        expect(result).toStrictEqual([
          {
            createdAt: '2020-02-02 12:47',
            description: 'District Branding Coordinator',
            id: '066eef12-c162-4079-97b5-001e90baf565',
            isDone: true,
            updatedAt: '2021-06-16 09:28',
          },
          {
            createdAt: '2019-10-05 11:32',
            description: 'Dynamic Division Officer',
            id: 'c722ca14-190e-4b3b-b965-d71cf2c64763',
            isDone: true,
            updatedAt: '2021-06-16 21:44',
          },
          {
            createdAt: '2019-12-25 02:44',
            description: 'Direct Data Producer',
            id: '87ee6fdf-4f2a-4a39-96d0-1b6d6364f1dc',
            isDone: true,
            updatedAt: '2020-08-07 09:59',
          },
          {
            createdAt: '2020-09-01 01:14',
            description: 'Corporate Web Administrator',
            id: 'cb5bd8c3-a754-4903-a484-8e8d75357b24',
            isDone: false,
            updatedAt: '2021-06-16 00:27',
          },
          {
            createdAt: '2020-05-16 09:05',
            description: 'District Marketing Associate',
            id: 'abab5cc1-6937-45f5-9c3c-da9aac2f271b',
            isDone: false,
            updatedAt: '2020-09-07 21:13',
          },
        ]);
      });
    });

    describe('toEntityPageInfo', () => {
      it('when called, then return PageInfo define as entity', () => {
        const result = new Repository.TodosRepository(data).toEntityPageInfo;

        expect(result).toStrictEqual({
          endCursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        });
      });
    });
  });
});
