import * as Routes from './routes';

describe('Routes', () => {
  let param1: string;
  let param2: string;
  beforeEach(() => {
    param1 = 'B7E8BE9D-239A-46F8-9CD8-9EBBD2CD3AAA';
    param2 = 'C3B9BD4B-92F0-4571-90CA-5BCE3EE248A8';
  });

  describe('replaceParams', () => {
    describe('paramsにあたる:<string>を、valueの値に置換した文字列を返す', () => {
      it('case1', () => {
        const uri = '/path/to/:param1';

        const result = Routes.replaceParams(uri, {
          param1,
        });

        expect(result).toBe(`/path/to/${param1}`);
      });
      it('case2', () => {
        const uri = '/path/to/:param1/:param2';

        const result = Routes.replaceParams(uri, {
          param1,
          param2,
        });

        expect(result).toBe(`/path/to/${param1}/${param2}`);
      });
      it('case3', () => {
        const uri = '/path/to/:param1/:param2/hoge';

        const result = Routes.replaceParams(uri, {
          param1,
          param2,
        });

        expect(result).toBe(`/path/to/${param1}/${param2}/hoge`);
      });
      it('case4', () => {
        const uri = '/:param1';

        const result = Routes.replaceParams(uri, {
          param1,
        });

        expect(result).toBe(`/${param1}`);
      });
      it('case4', () => {
        const uri = '/path:aaa/to/:param1';

        const result = Routes.replaceParams(uri, {
          param1,
        });

        expect(result).toBe(`/path:aaa/to/${param1}`);
      });
    });
  });
});
