import * as ta from 'type-assertions';
import ObjectResolversType from './ObjectResolversType';

type Object = {
  foo?: (
    parent: {foo: string; baz: string | null},
    args: {y: string},
    context: {z: string},
    info: {a: string},
  ) => Promise<string> | string;
  bar?: (
    parent: {foo: string; baz: string | null},
    args: {y: string},
    context: {z: string},
    info: {a: string},
  ) => Promise<string> | string;
  baz?: (
    parent: {foo: string; baz: string | null},
    args: {y: string},
    context: {z: string},
    info: {a: string},
  ) => Promise<string> | string;
};

ta.assert<
  ta.Equal<
    ObjectResolversType<Object>,
    {
      foo?: (
        parent: {foo: string; baz: string | null},
        args: {y: string},
        context: {z: string},
        info: {a: string},
      ) => Promise<string> | string;
      bar: (
        parent: {foo: string; baz: string | null},
        args: {y: string},
        context: {z: string},
        info: {a: string},
      ) => Promise<string> | string;
      baz: (
        parent: {foo: string; baz: string | null},
        args: {y: string},
        context: {z: string},
        info: {a: string},
      ) => Promise<string> | string;
    }
  >
>();
