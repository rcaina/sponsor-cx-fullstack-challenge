
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model organizations
 * 
 */
export type organizations = $Result.DefaultSelection<Prisma.$organizationsPayload>
/**
 * Model accounts
 * 
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>
/**
 * Model deals
 * 
 */
export type deals = $Result.DefaultSelection<Prisma.$dealsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organizations.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organizations.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organizations`: Exposes CRUD operations for the **organizations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organizations.findMany()
    * ```
    */
  get organizations(): Prisma.organizationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deals`: Exposes CRUD operations for the **deals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deals
    * const deals = await prisma.deals.findMany()
    * ```
    */
  get deals(): Prisma.dealsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    organizations: 'organizations',
    accounts: 'accounts',
    deals: 'deals'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organizations" | "accounts" | "deals"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      organizations: {
        payload: Prisma.$organizationsPayload<ExtArgs>
        fields: Prisma.organizationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          findFirst: {
            args: Prisma.organizationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          findMany: {
            args: Prisma.organizationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>[]
          }
          create: {
            args: Prisma.organizationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          createMany: {
            args: Prisma.organizationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organizationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>[]
          }
          delete: {
            args: Prisma.organizationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          update: {
            args: Prisma.organizationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          deleteMany: {
            args: Prisma.organizationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.organizationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>[]
          }
          upsert: {
            args: Prisma.organizationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          aggregate: {
            args: Prisma.OrganizationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizations>
          }
          groupBy: {
            args: Prisma.organizationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizationsCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationsCountAggregateOutputType> | number
          }
        }
      }
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>
        fields: Prisma.accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      deals: {
        payload: Prisma.$dealsPayload<ExtArgs>
        fields: Prisma.dealsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dealsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dealsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dealsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dealsPayload>
          }
          findFirst: {
            args: Prisma.dealsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dealsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dealsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dealsPayload>
          }
          findMany: {
            args: Prisma.dealsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dealsPayload>[]
          }
          create: {
            args: Prisma.dealsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dealsPayload>
          }
          createMany: {
            args: Prisma.dealsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dealsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dealsPayload>[]
          }
          delete: {
            args: Prisma.dealsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dealsPayload>
          }
          update: {
            args: Prisma.dealsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dealsPayload>
          }
          deleteMany: {
            args: Prisma.dealsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dealsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dealsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dealsPayload>[]
          }
          upsert: {
            args: Prisma.dealsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dealsPayload>
          }
          aggregate: {
            args: Prisma.DealsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeals>
          }
          groupBy: {
            args: Prisma.dealsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealsGroupByOutputType>[]
          }
          count: {
            args: Prisma.dealsCountArgs<ExtArgs>
            result: $Utils.Optional<DealsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    organizations?: organizationsOmit
    accounts?: accountsOmit
    deals?: dealsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationsCountOutputType
   */

  export type OrganizationsCountOutputType = {
    accounts: number
  }

  export type OrganizationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | OrganizationsCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationsCountOutputType
     */
    select?: OrganizationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
  }


  /**
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    accounts: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | AccountsCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dealsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model organizations
   */

  export type AggregateOrganizations = {
    _count: OrganizationsCountAggregateOutputType | null
    _min: OrganizationsMinAggregateOutputType | null
    _max: OrganizationsMaxAggregateOutputType | null
  }

  export type OrganizationsMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrganizationsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrganizationsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrganizationsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type OrganizationsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type OrganizationsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrganizationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to aggregate.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizations
    **/
    _count?: true | OrganizationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationsMaxAggregateInputType
  }

  export type GetOrganizationsAggregateType<T extends OrganizationsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizations[P]>
      : GetScalarType<T[P], AggregateOrganizations[P]>
  }




  export type organizationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationsWhereInput
    orderBy?: organizationsOrderByWithAggregationInput | organizationsOrderByWithAggregationInput[]
    by: OrganizationsScalarFieldEnum[] | OrganizationsScalarFieldEnum
    having?: organizationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationsCountAggregateInputType | true
    _min?: OrganizationsMinAggregateInputType
    _max?: OrganizationsMaxAggregateInputType
  }

  export type OrganizationsGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    _count: OrganizationsCountAggregateOutputType | null
    _min: OrganizationsMinAggregateOutputType | null
    _max: OrganizationsMaxAggregateOutputType | null
  }

  type GetOrganizationsGroupByPayload<T extends organizationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationsGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationsGroupByOutputType[P]>
        }
      >
    >


  export type organizationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    accounts?: boolean | organizations$accountsArgs<ExtArgs>
    _count?: boolean | OrganizationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizations"]>

  export type organizationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["organizations"]>

  export type organizationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["organizations"]>

  export type organizationsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type organizationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["organizations"]>
  export type organizationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | organizations$accountsArgs<ExtArgs>
    _count?: boolean | OrganizationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type organizationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type organizationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $organizationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organizations"
    objects: {
      accounts: Prisma.$accountsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["organizations"]>
    composites: {}
  }

  type organizationsGetPayload<S extends boolean | null | undefined | organizationsDefaultArgs> = $Result.GetResult<Prisma.$organizationsPayload, S>

  type organizationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organizationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationsCountAggregateInputType | true
    }

  export interface organizationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organizations'], meta: { name: 'organizations' } }
    /**
     * Find zero or one Organizations that matches the filter.
     * @param {organizationsFindUniqueArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizationsFindUniqueArgs>(args: SelectSubset<T, organizationsFindUniqueArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organizations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organizationsFindUniqueOrThrowArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizationsFindUniqueOrThrowArgs>(args: SelectSubset<T, organizationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsFindFirstArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizationsFindFirstArgs>(args?: SelectSubset<T, organizationsFindFirstArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsFindFirstOrThrowArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizationsFindFirstOrThrowArgs>(args?: SelectSubset<T, organizationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organizations.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organizations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationsWithIdOnly = await prisma.organizations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organizationsFindManyArgs>(args?: SelectSubset<T, organizationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organizations.
     * @param {organizationsCreateArgs} args - Arguments to create a Organizations.
     * @example
     * // Create one Organizations
     * const Organizations = await prisma.organizations.create({
     *   data: {
     *     // ... data to create a Organizations
     *   }
     * })
     * 
     */
    create<T extends organizationsCreateArgs>(args: SelectSubset<T, organizationsCreateArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {organizationsCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organizations = await prisma.organizations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizationsCreateManyArgs>(args?: SelectSubset<T, organizationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {organizationsCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organizations = await prisma.organizations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationsWithIdOnly = await prisma.organizations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organizationsCreateManyAndReturnArgs>(args?: SelectSubset<T, organizationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organizations.
     * @param {organizationsDeleteArgs} args - Arguments to delete one Organizations.
     * @example
     * // Delete one Organizations
     * const Organizations = await prisma.organizations.delete({
     *   where: {
     *     // ... filter to delete one Organizations
     *   }
     * })
     * 
     */
    delete<T extends organizationsDeleteArgs>(args: SelectSubset<T, organizationsDeleteArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organizations.
     * @param {organizationsUpdateArgs} args - Arguments to update one Organizations.
     * @example
     * // Update one Organizations
     * const organizations = await prisma.organizations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizationsUpdateArgs>(args: SelectSubset<T, organizationsUpdateArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {organizationsDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organizations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizationsDeleteManyArgs>(args?: SelectSubset<T, organizationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organizations = await prisma.organizations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizationsUpdateManyArgs>(args: SelectSubset<T, organizationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {organizationsUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organizations = await prisma.organizations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationsWithIdOnly = await prisma.organizations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends organizationsUpdateManyAndReturnArgs>(args: SelectSubset<T, organizationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organizations.
     * @param {organizationsUpsertArgs} args - Arguments to update or create a Organizations.
     * @example
     * // Update or create a Organizations
     * const organizations = await prisma.organizations.upsert({
     *   create: {
     *     // ... data to create a Organizations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizations we want to update
     *   }
     * })
     */
    upsert<T extends organizationsUpsertArgs>(args: SelectSubset<T, organizationsUpsertArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organizations.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends organizationsCountArgs>(
      args?: Subset<T, organizationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationsAggregateArgs>(args: Subset<T, OrganizationsAggregateArgs>): Prisma.PrismaPromise<GetOrganizationsAggregateType<T>>

    /**
     * Group by Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends organizationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationsGroupByArgs['orderBy'] }
        : { orderBy?: organizationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, organizationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organizations model
   */
  readonly fields: organizationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organizations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends organizations$accountsArgs<ExtArgs> = {}>(args?: Subset<T, organizations$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the organizations model
   */
  interface organizationsFieldRefs {
    readonly id: FieldRef<"organizations", 'String'>
    readonly name: FieldRef<"organizations", 'String'>
    readonly created_at: FieldRef<"organizations", 'DateTime'>
    readonly updated_at: FieldRef<"organizations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * organizations findUnique
   */
  export type organizationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations findUniqueOrThrow
   */
  export type organizationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations findFirst
   */
  export type organizationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * organizations findFirstOrThrow
   */
  export type organizationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * organizations findMany
   */
  export type organizationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizations.
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * organizations create
   */
  export type organizationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * The data needed to create a organizations.
     */
    data: XOR<organizationsCreateInput, organizationsUncheckedCreateInput>
  }

  /**
   * organizations createMany
   */
  export type organizationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationsCreateManyInput | organizationsCreateManyInput[]
  }

  /**
   * organizations createManyAndReturn
   */
  export type organizationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * The data used to create many organizations.
     */
    data: organizationsCreateManyInput | organizationsCreateManyInput[]
  }

  /**
   * organizations update
   */
  export type organizationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * The data needed to update a organizations.
     */
    data: XOR<organizationsUpdateInput, organizationsUncheckedUpdateInput>
    /**
     * Choose, which organizations to update.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations updateMany
   */
  export type organizationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationsUpdateManyMutationInput, organizationsUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationsWhereInput
    /**
     * Limit how many organizations to update.
     */
    limit?: number
  }

  /**
   * organizations updateManyAndReturn
   */
  export type organizationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationsUpdateManyMutationInput, organizationsUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationsWhereInput
    /**
     * Limit how many organizations to update.
     */
    limit?: number
  }

  /**
   * organizations upsert
   */
  export type organizationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * The filter to search for the organizations to update in case it exists.
     */
    where: organizationsWhereUniqueInput
    /**
     * In case the organizations found by the `where` argument doesn't exist, create a new organizations with this data.
     */
    create: XOR<organizationsCreateInput, organizationsUncheckedCreateInput>
    /**
     * In case the organizations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationsUpdateInput, organizationsUncheckedUpdateInput>
  }

  /**
   * organizations delete
   */
  export type organizationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
    /**
     * Filter which organizations to delete.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations deleteMany
   */
  export type organizationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationsWhereInput
    /**
     * Limit how many organizations to delete.
     */
    limit?: number
  }

  /**
   * organizations.accounts
   */
  export type organizations$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    cursor?: accountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * organizations without action
   */
  export type organizationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationsInclude<ExtArgs> | null
  }


  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsMinAggregateOutputType = {
    id: string | null
    name: string | null
    organizationId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    organizationId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    name: number
    organizationId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AccountsMinAggregateInputType = {
    id?: true
    name?: true
    organizationId?: true
    created_at?: true
    updated_at?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    name?: true
    organizationId?: true
    created_at?: true
    updated_at?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    name?: true
    organizationId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithAggregationInput | accountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: string
    name: string
    organizationId: string
    created_at: Date
    updated_at: Date
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    organizationId?: boolean
    created_at?: boolean
    updated_at?: boolean
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
    accounts?: boolean | accounts$accountsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    organizationId?: boolean
    created_at?: boolean
    updated_at?: boolean
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    organizationId?: boolean
    created_at?: boolean
    updated_at?: boolean
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectScalar = {
    id?: boolean
    name?: boolean
    organizationId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type accountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "organizationId" | "created_at" | "updated_at", ExtArgs["result"]["accounts"]>
  export type accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
    accounts?: boolean | accounts$accountsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type accountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }
  export type accountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationsDefaultArgs<ExtArgs>
  }

  export type $accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accounts"
    objects: {
      organization: Prisma.$organizationsPayload<ExtArgs>
      accounts: Prisma.$dealsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      organizationId: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type accountsGetPayload<S extends boolean | null | undefined | accountsDefaultArgs> = $Result.GetResult<Prisma.$accountsPayload, S>

  type accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accounts'], meta: { name: 'accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountsFindUniqueArgs>(args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountsFindFirstArgs>(args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountsFindManyArgs>(args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends accountsCreateArgs>(args: SelectSubset<T, accountsCreateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountsCreateManyArgs>(args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountsCreateManyAndReturnArgs>(args?: SelectSubset<T, accountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends accountsDeleteArgs>(args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountsUpdateArgs>(args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountsDeleteManyArgs>(args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountsUpdateManyArgs>(args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {accountsUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends accountsUpdateManyAndReturnArgs>(args: SelectSubset<T, accountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends accountsUpsertArgs>(args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs['orderBy'] }
        : { orderBy?: accountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accounts model
   */
  readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends organizationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizationsDefaultArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accounts<T extends accounts$accountsArgs<ExtArgs> = {}>(args?: Subset<T, accounts$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dealsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the accounts model
   */
  interface accountsFieldRefs {
    readonly id: FieldRef<"accounts", 'String'>
    readonly name: FieldRef<"accounts", 'String'>
    readonly organizationId: FieldRef<"accounts", 'String'>
    readonly created_at: FieldRef<"accounts", 'DateTime'>
    readonly updated_at: FieldRef<"accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts create
   */
  export type accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
  }

  /**
   * accounts createManyAndReturn
   */
  export type accountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * accounts update
   */
  export type accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * accounts updateManyAndReturn
   */
  export type accountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * accounts.accounts
   */
  export type accounts$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsInclude<ExtArgs> | null
    where?: dealsWhereInput
    orderBy?: dealsOrderByWithRelationInput | dealsOrderByWithRelationInput[]
    cursor?: dealsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DealsScalarFieldEnum | DealsScalarFieldEnum[]
  }

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
  }


  /**
   * Model deals
   */

  export type AggregateDeals = {
    _count: DealsCountAggregateOutputType | null
    _min: DealsMinAggregateOutputType | null
    _max: DealsMaxAggregateOutputType | null
  }

  export type DealsMinAggregateOutputType = {
    id: string | null
    value: string | null
    status: string | null
    accountId: string | null
    started_at: Date | null
    ended_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DealsMaxAggregateOutputType = {
    id: string | null
    value: string | null
    status: string | null
    accountId: string | null
    started_at: Date | null
    ended_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DealsCountAggregateOutputType = {
    id: number
    value: number
    status: number
    accountId: number
    started_at: number
    ended_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DealsMinAggregateInputType = {
    id?: true
    value?: true
    status?: true
    accountId?: true
    started_at?: true
    ended_at?: true
    created_at?: true
    updated_at?: true
  }

  export type DealsMaxAggregateInputType = {
    id?: true
    value?: true
    status?: true
    accountId?: true
    started_at?: true
    ended_at?: true
    created_at?: true
    updated_at?: true
  }

  export type DealsCountAggregateInputType = {
    id?: true
    value?: true
    status?: true
    accountId?: true
    started_at?: true
    ended_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DealsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deals to aggregate.
     */
    where?: dealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deals to fetch.
     */
    orderBy?: dealsOrderByWithRelationInput | dealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned deals
    **/
    _count?: true | DealsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealsMaxAggregateInputType
  }

  export type GetDealsAggregateType<T extends DealsAggregateArgs> = {
        [P in keyof T & keyof AggregateDeals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeals[P]>
      : GetScalarType<T[P], AggregateDeals[P]>
  }




  export type dealsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dealsWhereInput
    orderBy?: dealsOrderByWithAggregationInput | dealsOrderByWithAggregationInput[]
    by: DealsScalarFieldEnum[] | DealsScalarFieldEnum
    having?: dealsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealsCountAggregateInputType | true
    _min?: DealsMinAggregateInputType
    _max?: DealsMaxAggregateInputType
  }

  export type DealsGroupByOutputType = {
    id: string
    value: string
    status: string
    accountId: string
    started_at: Date
    ended_at: Date
    created_at: Date
    updated_at: Date
    _count: DealsCountAggregateOutputType | null
    _min: DealsMinAggregateOutputType | null
    _max: DealsMaxAggregateOutputType | null
  }

  type GetDealsGroupByPayload<T extends dealsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealsGroupByOutputType[P]>
            : GetScalarType<T[P], DealsGroupByOutputType[P]>
        }
      >
    >


  export type dealsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    status?: boolean
    accountId?: boolean
    started_at?: boolean
    ended_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    account?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deals"]>

  export type dealsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    status?: boolean
    accountId?: boolean
    started_at?: boolean
    ended_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    account?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deals"]>

  export type dealsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    status?: boolean
    accountId?: boolean
    started_at?: boolean
    ended_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    account?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deals"]>

  export type dealsSelectScalar = {
    id?: boolean
    value?: boolean
    status?: boolean
    accountId?: boolean
    started_at?: boolean
    ended_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type dealsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "status" | "accountId" | "started_at" | "ended_at" | "created_at" | "updated_at", ExtArgs["result"]["deals"]>
  export type dealsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountsDefaultArgs<ExtArgs>
  }
  export type dealsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountsDefaultArgs<ExtArgs>
  }
  export type dealsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountsDefaultArgs<ExtArgs>
  }

  export type $dealsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "deals"
    objects: {
      account: Prisma.$accountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      status: string
      accountId: string
      started_at: Date
      ended_at: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["deals"]>
    composites: {}
  }

  type dealsGetPayload<S extends boolean | null | undefined | dealsDefaultArgs> = $Result.GetResult<Prisma.$dealsPayload, S>

  type dealsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dealsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DealsCountAggregateInputType | true
    }

  export interface dealsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['deals'], meta: { name: 'deals' } }
    /**
     * Find zero or one Deals that matches the filter.
     * @param {dealsFindUniqueArgs} args - Arguments to find a Deals
     * @example
     * // Get one Deals
     * const deals = await prisma.deals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dealsFindUniqueArgs>(args: SelectSubset<T, dealsFindUniqueArgs<ExtArgs>>): Prisma__dealsClient<$Result.GetResult<Prisma.$dealsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dealsFindUniqueOrThrowArgs} args - Arguments to find a Deals
     * @example
     * // Get one Deals
     * const deals = await prisma.deals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dealsFindUniqueOrThrowArgs>(args: SelectSubset<T, dealsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dealsClient<$Result.GetResult<Prisma.$dealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dealsFindFirstArgs} args - Arguments to find a Deals
     * @example
     * // Get one Deals
     * const deals = await prisma.deals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dealsFindFirstArgs>(args?: SelectSubset<T, dealsFindFirstArgs<ExtArgs>>): Prisma__dealsClient<$Result.GetResult<Prisma.$dealsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dealsFindFirstOrThrowArgs} args - Arguments to find a Deals
     * @example
     * // Get one Deals
     * const deals = await prisma.deals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dealsFindFirstOrThrowArgs>(args?: SelectSubset<T, dealsFindFirstOrThrowArgs<ExtArgs>>): Prisma__dealsClient<$Result.GetResult<Prisma.$dealsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dealsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deals
     * const deals = await prisma.deals.findMany()
     * 
     * // Get first 10 Deals
     * const deals = await prisma.deals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealsWithIdOnly = await prisma.deals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dealsFindManyArgs>(args?: SelectSubset<T, dealsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dealsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deals.
     * @param {dealsCreateArgs} args - Arguments to create a Deals.
     * @example
     * // Create one Deals
     * const Deals = await prisma.deals.create({
     *   data: {
     *     // ... data to create a Deals
     *   }
     * })
     * 
     */
    create<T extends dealsCreateArgs>(args: SelectSubset<T, dealsCreateArgs<ExtArgs>>): Prisma__dealsClient<$Result.GetResult<Prisma.$dealsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deals.
     * @param {dealsCreateManyArgs} args - Arguments to create many Deals.
     * @example
     * // Create many Deals
     * const deals = await prisma.deals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dealsCreateManyArgs>(args?: SelectSubset<T, dealsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deals and returns the data saved in the database.
     * @param {dealsCreateManyAndReturnArgs} args - Arguments to create many Deals.
     * @example
     * // Create many Deals
     * const deals = await prisma.deals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deals and only return the `id`
     * const dealsWithIdOnly = await prisma.deals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dealsCreateManyAndReturnArgs>(args?: SelectSubset<T, dealsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dealsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deals.
     * @param {dealsDeleteArgs} args - Arguments to delete one Deals.
     * @example
     * // Delete one Deals
     * const Deals = await prisma.deals.delete({
     *   where: {
     *     // ... filter to delete one Deals
     *   }
     * })
     * 
     */
    delete<T extends dealsDeleteArgs>(args: SelectSubset<T, dealsDeleteArgs<ExtArgs>>): Prisma__dealsClient<$Result.GetResult<Prisma.$dealsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deals.
     * @param {dealsUpdateArgs} args - Arguments to update one Deals.
     * @example
     * // Update one Deals
     * const deals = await prisma.deals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dealsUpdateArgs>(args: SelectSubset<T, dealsUpdateArgs<ExtArgs>>): Prisma__dealsClient<$Result.GetResult<Prisma.$dealsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deals.
     * @param {dealsDeleteManyArgs} args - Arguments to filter Deals to delete.
     * @example
     * // Delete a few Deals
     * const { count } = await prisma.deals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dealsDeleteManyArgs>(args?: SelectSubset<T, dealsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dealsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deals
     * const deals = await prisma.deals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dealsUpdateManyArgs>(args: SelectSubset<T, dealsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deals and returns the data updated in the database.
     * @param {dealsUpdateManyAndReturnArgs} args - Arguments to update many Deals.
     * @example
     * // Update many Deals
     * const deals = await prisma.deals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deals and only return the `id`
     * const dealsWithIdOnly = await prisma.deals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends dealsUpdateManyAndReturnArgs>(args: SelectSubset<T, dealsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dealsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deals.
     * @param {dealsUpsertArgs} args - Arguments to update or create a Deals.
     * @example
     * // Update or create a Deals
     * const deals = await prisma.deals.upsert({
     *   create: {
     *     // ... data to create a Deals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deals we want to update
     *   }
     * })
     */
    upsert<T extends dealsUpsertArgs>(args: SelectSubset<T, dealsUpsertArgs<ExtArgs>>): Prisma__dealsClient<$Result.GetResult<Prisma.$dealsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dealsCountArgs} args - Arguments to filter Deals to count.
     * @example
     * // Count the number of Deals
     * const count = await prisma.deals.count({
     *   where: {
     *     // ... the filter for the Deals we want to count
     *   }
     * })
    **/
    count<T extends dealsCountArgs>(
      args?: Subset<T, dealsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DealsAggregateArgs>(args: Subset<T, DealsAggregateArgs>): Prisma.PrismaPromise<GetDealsAggregateType<T>>

    /**
     * Group by Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dealsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dealsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dealsGroupByArgs['orderBy'] }
        : { orderBy?: dealsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dealsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the deals model
   */
  readonly fields: dealsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for deals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dealsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountsDefaultArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the deals model
   */
  interface dealsFieldRefs {
    readonly id: FieldRef<"deals", 'String'>
    readonly value: FieldRef<"deals", 'String'>
    readonly status: FieldRef<"deals", 'String'>
    readonly accountId: FieldRef<"deals", 'String'>
    readonly started_at: FieldRef<"deals", 'DateTime'>
    readonly ended_at: FieldRef<"deals", 'DateTime'>
    readonly created_at: FieldRef<"deals", 'DateTime'>
    readonly updated_at: FieldRef<"deals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * deals findUnique
   */
  export type dealsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsInclude<ExtArgs> | null
    /**
     * Filter, which deals to fetch.
     */
    where: dealsWhereUniqueInput
  }

  /**
   * deals findUniqueOrThrow
   */
  export type dealsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsInclude<ExtArgs> | null
    /**
     * Filter, which deals to fetch.
     */
    where: dealsWhereUniqueInput
  }

  /**
   * deals findFirst
   */
  export type dealsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsInclude<ExtArgs> | null
    /**
     * Filter, which deals to fetch.
     */
    where?: dealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deals to fetch.
     */
    orderBy?: dealsOrderByWithRelationInput | dealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deals.
     */
    cursor?: dealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deals.
     */
    distinct?: DealsScalarFieldEnum | DealsScalarFieldEnum[]
  }

  /**
   * deals findFirstOrThrow
   */
  export type dealsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsInclude<ExtArgs> | null
    /**
     * Filter, which deals to fetch.
     */
    where?: dealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deals to fetch.
     */
    orderBy?: dealsOrderByWithRelationInput | dealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deals.
     */
    cursor?: dealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deals.
     */
    distinct?: DealsScalarFieldEnum | DealsScalarFieldEnum[]
  }

  /**
   * deals findMany
   */
  export type dealsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsInclude<ExtArgs> | null
    /**
     * Filter, which deals to fetch.
     */
    where?: dealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deals to fetch.
     */
    orderBy?: dealsOrderByWithRelationInput | dealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing deals.
     */
    cursor?: dealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deals.
     */
    skip?: number
    distinct?: DealsScalarFieldEnum | DealsScalarFieldEnum[]
  }

  /**
   * deals create
   */
  export type dealsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsInclude<ExtArgs> | null
    /**
     * The data needed to create a deals.
     */
    data: XOR<dealsCreateInput, dealsUncheckedCreateInput>
  }

  /**
   * deals createMany
   */
  export type dealsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many deals.
     */
    data: dealsCreateManyInput | dealsCreateManyInput[]
  }

  /**
   * deals createManyAndReturn
   */
  export type dealsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * The data used to create many deals.
     */
    data: dealsCreateManyInput | dealsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * deals update
   */
  export type dealsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsInclude<ExtArgs> | null
    /**
     * The data needed to update a deals.
     */
    data: XOR<dealsUpdateInput, dealsUncheckedUpdateInput>
    /**
     * Choose, which deals to update.
     */
    where: dealsWhereUniqueInput
  }

  /**
   * deals updateMany
   */
  export type dealsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update deals.
     */
    data: XOR<dealsUpdateManyMutationInput, dealsUncheckedUpdateManyInput>
    /**
     * Filter which deals to update
     */
    where?: dealsWhereInput
    /**
     * Limit how many deals to update.
     */
    limit?: number
  }

  /**
   * deals updateManyAndReturn
   */
  export type dealsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * The data used to update deals.
     */
    data: XOR<dealsUpdateManyMutationInput, dealsUncheckedUpdateManyInput>
    /**
     * Filter which deals to update
     */
    where?: dealsWhereInput
    /**
     * Limit how many deals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * deals upsert
   */
  export type dealsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsInclude<ExtArgs> | null
    /**
     * The filter to search for the deals to update in case it exists.
     */
    where: dealsWhereUniqueInput
    /**
     * In case the deals found by the `where` argument doesn't exist, create a new deals with this data.
     */
    create: XOR<dealsCreateInput, dealsUncheckedCreateInput>
    /**
     * In case the deals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dealsUpdateInput, dealsUncheckedUpdateInput>
  }

  /**
   * deals delete
   */
  export type dealsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsInclude<ExtArgs> | null
    /**
     * Filter which deals to delete.
     */
    where: dealsWhereUniqueInput
  }

  /**
   * deals deleteMany
   */
  export type dealsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deals to delete
     */
    where?: dealsWhereInput
    /**
     * Limit how many deals to delete.
     */
    limit?: number
  }

  /**
   * deals without action
   */
  export type dealsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deals
     */
    select?: dealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deals
     */
    omit?: dealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dealsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrganizationsScalarFieldEnum = (typeof OrganizationsScalarFieldEnum)[keyof typeof OrganizationsScalarFieldEnum]


  export const AccountsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    organizationId: 'organizationId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const DealsScalarFieldEnum: {
    id: 'id',
    value: 'value',
    status: 'status',
    accountId: 'accountId',
    started_at: 'started_at',
    ended_at: 'ended_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DealsScalarFieldEnum = (typeof DealsScalarFieldEnum)[keyof typeof DealsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type organizationsWhereInput = {
    AND?: organizationsWhereInput | organizationsWhereInput[]
    OR?: organizationsWhereInput[]
    NOT?: organizationsWhereInput | organizationsWhereInput[]
    id?: StringFilter<"organizations"> | string
    name?: StringFilter<"organizations"> | string
    created_at?: DateTimeFilter<"organizations"> | Date | string
    updated_at?: DateTimeFilter<"organizations"> | Date | string
    accounts?: AccountsListRelationFilter
  }

  export type organizationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    accounts?: accountsOrderByRelationAggregateInput
  }

  export type organizationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: organizationsWhereInput | organizationsWhereInput[]
    OR?: organizationsWhereInput[]
    NOT?: organizationsWhereInput | organizationsWhereInput[]
    name?: StringFilter<"organizations"> | string
    created_at?: DateTimeFilter<"organizations"> | Date | string
    updated_at?: DateTimeFilter<"organizations"> | Date | string
    accounts?: AccountsListRelationFilter
  }, "id">

  export type organizationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: organizationsCountOrderByAggregateInput
    _max?: organizationsMaxOrderByAggregateInput
    _min?: organizationsMinOrderByAggregateInput
  }

  export type organizationsScalarWhereWithAggregatesInput = {
    AND?: organizationsScalarWhereWithAggregatesInput | organizationsScalarWhereWithAggregatesInput[]
    OR?: organizationsScalarWhereWithAggregatesInput[]
    NOT?: organizationsScalarWhereWithAggregatesInput | organizationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"organizations"> | string
    name?: StringWithAggregatesFilter<"organizations"> | string
    created_at?: DateTimeWithAggregatesFilter<"organizations"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"organizations"> | Date | string
  }

  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    id?: StringFilter<"accounts"> | string
    name?: StringFilter<"accounts"> | string
    organizationId?: StringFilter<"accounts"> | string
    created_at?: DateTimeFilter<"accounts"> | Date | string
    updated_at?: DateTimeFilter<"accounts"> | Date | string
    organization?: XOR<OrganizationsScalarRelationFilter, organizationsWhereInput>
    accounts?: DealsListRelationFilter
  }

  export type accountsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    organization?: organizationsOrderByWithRelationInput
    accounts?: dealsOrderByRelationAggregateInput
  }

  export type accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    name?: StringFilter<"accounts"> | string
    organizationId?: StringFilter<"accounts"> | string
    created_at?: DateTimeFilter<"accounts"> | Date | string
    updated_at?: DateTimeFilter<"accounts"> | Date | string
    organization?: XOR<OrganizationsScalarRelationFilter, organizationsWhereInput>
    accounts?: DealsListRelationFilter
  }, "id">

  export type accountsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: accountsCountOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    OR?: accountsScalarWhereWithAggregatesInput[]
    NOT?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"accounts"> | string
    name?: StringWithAggregatesFilter<"accounts"> | string
    organizationId?: StringWithAggregatesFilter<"accounts"> | string
    created_at?: DateTimeWithAggregatesFilter<"accounts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"accounts"> | Date | string
  }

  export type dealsWhereInput = {
    AND?: dealsWhereInput | dealsWhereInput[]
    OR?: dealsWhereInput[]
    NOT?: dealsWhereInput | dealsWhereInput[]
    id?: StringFilter<"deals"> | string
    value?: StringFilter<"deals"> | string
    status?: StringFilter<"deals"> | string
    accountId?: StringFilter<"deals"> | string
    started_at?: DateTimeFilter<"deals"> | Date | string
    ended_at?: DateTimeFilter<"deals"> | Date | string
    created_at?: DateTimeFilter<"deals"> | Date | string
    updated_at?: DateTimeFilter<"deals"> | Date | string
    account?: XOR<AccountsScalarRelationFilter, accountsWhereInput>
  }

  export type dealsOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    accountId?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    account?: accountsOrderByWithRelationInput
  }

  export type dealsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: dealsWhereInput | dealsWhereInput[]
    OR?: dealsWhereInput[]
    NOT?: dealsWhereInput | dealsWhereInput[]
    value?: StringFilter<"deals"> | string
    status?: StringFilter<"deals"> | string
    accountId?: StringFilter<"deals"> | string
    started_at?: DateTimeFilter<"deals"> | Date | string
    ended_at?: DateTimeFilter<"deals"> | Date | string
    created_at?: DateTimeFilter<"deals"> | Date | string
    updated_at?: DateTimeFilter<"deals"> | Date | string
    account?: XOR<AccountsScalarRelationFilter, accountsWhereInput>
  }, "id">

  export type dealsOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    accountId?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: dealsCountOrderByAggregateInput
    _max?: dealsMaxOrderByAggregateInput
    _min?: dealsMinOrderByAggregateInput
  }

  export type dealsScalarWhereWithAggregatesInput = {
    AND?: dealsScalarWhereWithAggregatesInput | dealsScalarWhereWithAggregatesInput[]
    OR?: dealsScalarWhereWithAggregatesInput[]
    NOT?: dealsScalarWhereWithAggregatesInput | dealsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"deals"> | string
    value?: StringWithAggregatesFilter<"deals"> | string
    status?: StringWithAggregatesFilter<"deals"> | string
    accountId?: StringWithAggregatesFilter<"deals"> | string
    started_at?: DateTimeWithAggregatesFilter<"deals"> | Date | string
    ended_at?: DateTimeWithAggregatesFilter<"deals"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"deals"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"deals"> | Date | string
  }

  export type organizationsCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    accounts?: accountsCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    accounts?: accountsUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: accountsUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: accountsUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationsCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type organizationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organizationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsCreateInput = {
    id?: string
    name: string
    created_at: Date | string
    updated_at: Date | string
    organization: organizationsCreateNestedOneWithoutAccountsInput
    accounts?: dealsCreateNestedManyWithoutAccountInput
  }

  export type accountsUncheckedCreateInput = {
    id?: string
    name: string
    organizationId: string
    created_at: Date | string
    updated_at: Date | string
    accounts?: dealsUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: organizationsUpdateOneRequiredWithoutAccountsNestedInput
    accounts?: dealsUpdateManyWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: dealsUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type accountsCreateManyInput = {
    id?: string
    name: string
    organizationId: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type accountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dealsCreateInput = {
    id?: string
    value: string
    status: string
    started_at: Date | string
    ended_at: Date | string
    created_at: Date | string
    updated_at: Date | string
    account: accountsCreateNestedOneWithoutAccountsInput
  }

  export type dealsUncheckedCreateInput = {
    id?: string
    value: string
    status: string
    accountId: string
    started_at: Date | string
    ended_at: Date | string
    created_at: Date | string
    updated_at: Date | string
  }

  export type dealsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountsUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type dealsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dealsCreateManyInput = {
    id?: string
    value: string
    status: string
    accountId: string
    started_at: Date | string
    ended_at: Date | string
    created_at: Date | string
    updated_at: Date | string
  }

  export type dealsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dealsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountsListRelationFilter = {
    every?: accountsWhereInput
    some?: accountsWhereInput
    none?: accountsWhereInput
  }

  export type accountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type organizationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type organizationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrganizationsScalarRelationFilter = {
    is?: organizationsWhereInput
    isNot?: organizationsWhereInput
  }

  export type DealsListRelationFilter = {
    every?: dealsWhereInput
    some?: dealsWhereInput
    none?: dealsWhereInput
  }

  export type dealsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accountsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccountsScalarRelationFilter = {
    is?: accountsWhereInput
    isNot?: accountsWhereInput
  }

  export type dealsCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    accountId?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type dealsMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    accountId?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type dealsMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    accountId?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type accountsCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<accountsCreateWithoutOrganizationInput, accountsUncheckedCreateWithoutOrganizationInput> | accountsCreateWithoutOrganizationInput[] | accountsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutOrganizationInput | accountsCreateOrConnectWithoutOrganizationInput[]
    createMany?: accountsCreateManyOrganizationInputEnvelope
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
  }

  export type accountsUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<accountsCreateWithoutOrganizationInput, accountsUncheckedCreateWithoutOrganizationInput> | accountsCreateWithoutOrganizationInput[] | accountsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutOrganizationInput | accountsCreateOrConnectWithoutOrganizationInput[]
    createMany?: accountsCreateManyOrganizationInputEnvelope
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type accountsUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<accountsCreateWithoutOrganizationInput, accountsUncheckedCreateWithoutOrganizationInput> | accountsCreateWithoutOrganizationInput[] | accountsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutOrganizationInput | accountsCreateOrConnectWithoutOrganizationInput[]
    upsert?: accountsUpsertWithWhereUniqueWithoutOrganizationInput | accountsUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: accountsCreateManyOrganizationInputEnvelope
    set?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    disconnect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    delete?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    update?: accountsUpdateWithWhereUniqueWithoutOrganizationInput | accountsUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: accountsUpdateManyWithWhereWithoutOrganizationInput | accountsUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: accountsScalarWhereInput | accountsScalarWhereInput[]
  }

  export type accountsUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<accountsCreateWithoutOrganizationInput, accountsUncheckedCreateWithoutOrganizationInput> | accountsCreateWithoutOrganizationInput[] | accountsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutOrganizationInput | accountsCreateOrConnectWithoutOrganizationInput[]
    upsert?: accountsUpsertWithWhereUniqueWithoutOrganizationInput | accountsUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: accountsCreateManyOrganizationInputEnvelope
    set?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    disconnect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    delete?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    update?: accountsUpdateWithWhereUniqueWithoutOrganizationInput | accountsUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: accountsUpdateManyWithWhereWithoutOrganizationInput | accountsUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: accountsScalarWhereInput | accountsScalarWhereInput[]
  }

  export type organizationsCreateNestedOneWithoutAccountsInput = {
    create?: XOR<organizationsCreateWithoutAccountsInput, organizationsUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: organizationsCreateOrConnectWithoutAccountsInput
    connect?: organizationsWhereUniqueInput
  }

  export type dealsCreateNestedManyWithoutAccountInput = {
    create?: XOR<dealsCreateWithoutAccountInput, dealsUncheckedCreateWithoutAccountInput> | dealsCreateWithoutAccountInput[] | dealsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: dealsCreateOrConnectWithoutAccountInput | dealsCreateOrConnectWithoutAccountInput[]
    createMany?: dealsCreateManyAccountInputEnvelope
    connect?: dealsWhereUniqueInput | dealsWhereUniqueInput[]
  }

  export type dealsUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<dealsCreateWithoutAccountInput, dealsUncheckedCreateWithoutAccountInput> | dealsCreateWithoutAccountInput[] | dealsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: dealsCreateOrConnectWithoutAccountInput | dealsCreateOrConnectWithoutAccountInput[]
    createMany?: dealsCreateManyAccountInputEnvelope
    connect?: dealsWhereUniqueInput | dealsWhereUniqueInput[]
  }

  export type organizationsUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<organizationsCreateWithoutAccountsInput, organizationsUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: organizationsCreateOrConnectWithoutAccountsInput
    upsert?: organizationsUpsertWithoutAccountsInput
    connect?: organizationsWhereUniqueInput
    update?: XOR<XOR<organizationsUpdateToOneWithWhereWithoutAccountsInput, organizationsUpdateWithoutAccountsInput>, organizationsUncheckedUpdateWithoutAccountsInput>
  }

  export type dealsUpdateManyWithoutAccountNestedInput = {
    create?: XOR<dealsCreateWithoutAccountInput, dealsUncheckedCreateWithoutAccountInput> | dealsCreateWithoutAccountInput[] | dealsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: dealsCreateOrConnectWithoutAccountInput | dealsCreateOrConnectWithoutAccountInput[]
    upsert?: dealsUpsertWithWhereUniqueWithoutAccountInput | dealsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: dealsCreateManyAccountInputEnvelope
    set?: dealsWhereUniqueInput | dealsWhereUniqueInput[]
    disconnect?: dealsWhereUniqueInput | dealsWhereUniqueInput[]
    delete?: dealsWhereUniqueInput | dealsWhereUniqueInput[]
    connect?: dealsWhereUniqueInput | dealsWhereUniqueInput[]
    update?: dealsUpdateWithWhereUniqueWithoutAccountInput | dealsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: dealsUpdateManyWithWhereWithoutAccountInput | dealsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: dealsScalarWhereInput | dealsScalarWhereInput[]
  }

  export type dealsUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<dealsCreateWithoutAccountInput, dealsUncheckedCreateWithoutAccountInput> | dealsCreateWithoutAccountInput[] | dealsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: dealsCreateOrConnectWithoutAccountInput | dealsCreateOrConnectWithoutAccountInput[]
    upsert?: dealsUpsertWithWhereUniqueWithoutAccountInput | dealsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: dealsCreateManyAccountInputEnvelope
    set?: dealsWhereUniqueInput | dealsWhereUniqueInput[]
    disconnect?: dealsWhereUniqueInput | dealsWhereUniqueInput[]
    delete?: dealsWhereUniqueInput | dealsWhereUniqueInput[]
    connect?: dealsWhereUniqueInput | dealsWhereUniqueInput[]
    update?: dealsUpdateWithWhereUniqueWithoutAccountInput | dealsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: dealsUpdateManyWithWhereWithoutAccountInput | dealsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: dealsScalarWhereInput | dealsScalarWhereInput[]
  }

  export type accountsCreateNestedOneWithoutAccountsInput = {
    create?: XOR<accountsCreateWithoutAccountsInput, accountsUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutAccountsInput
    connect?: accountsWhereUniqueInput
  }

  export type accountsUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<accountsCreateWithoutAccountsInput, accountsUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutAccountsInput
    upsert?: accountsUpsertWithoutAccountsInput
    connect?: accountsWhereUniqueInput
    update?: XOR<XOR<accountsUpdateToOneWithWhereWithoutAccountsInput, accountsUpdateWithoutAccountsInput>, accountsUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type accountsCreateWithoutOrganizationInput = {
    id?: string
    name: string
    created_at: Date | string
    updated_at: Date | string
    accounts?: dealsCreateNestedManyWithoutAccountInput
  }

  export type accountsUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    created_at: Date | string
    updated_at: Date | string
    accounts?: dealsUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountsCreateOrConnectWithoutOrganizationInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutOrganizationInput, accountsUncheckedCreateWithoutOrganizationInput>
  }

  export type accountsCreateManyOrganizationInputEnvelope = {
    data: accountsCreateManyOrganizationInput | accountsCreateManyOrganizationInput[]
  }

  export type accountsUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: accountsWhereUniqueInput
    update: XOR<accountsUpdateWithoutOrganizationInput, accountsUncheckedUpdateWithoutOrganizationInput>
    create: XOR<accountsCreateWithoutOrganizationInput, accountsUncheckedCreateWithoutOrganizationInput>
  }

  export type accountsUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: accountsWhereUniqueInput
    data: XOR<accountsUpdateWithoutOrganizationInput, accountsUncheckedUpdateWithoutOrganizationInput>
  }

  export type accountsUpdateManyWithWhereWithoutOrganizationInput = {
    where: accountsScalarWhereInput
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type accountsScalarWhereInput = {
    AND?: accountsScalarWhereInput | accountsScalarWhereInput[]
    OR?: accountsScalarWhereInput[]
    NOT?: accountsScalarWhereInput | accountsScalarWhereInput[]
    id?: StringFilter<"accounts"> | string
    name?: StringFilter<"accounts"> | string
    organizationId?: StringFilter<"accounts"> | string
    created_at?: DateTimeFilter<"accounts"> | Date | string
    updated_at?: DateTimeFilter<"accounts"> | Date | string
  }

  export type organizationsCreateWithoutAccountsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type organizationsUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type organizationsCreateOrConnectWithoutAccountsInput = {
    where: organizationsWhereUniqueInput
    create: XOR<organizationsCreateWithoutAccountsInput, organizationsUncheckedCreateWithoutAccountsInput>
  }

  export type dealsCreateWithoutAccountInput = {
    id?: string
    value: string
    status: string
    started_at: Date | string
    ended_at: Date | string
    created_at: Date | string
    updated_at: Date | string
  }

  export type dealsUncheckedCreateWithoutAccountInput = {
    id?: string
    value: string
    status: string
    started_at: Date | string
    ended_at: Date | string
    created_at: Date | string
    updated_at: Date | string
  }

  export type dealsCreateOrConnectWithoutAccountInput = {
    where: dealsWhereUniqueInput
    create: XOR<dealsCreateWithoutAccountInput, dealsUncheckedCreateWithoutAccountInput>
  }

  export type dealsCreateManyAccountInputEnvelope = {
    data: dealsCreateManyAccountInput | dealsCreateManyAccountInput[]
  }

  export type organizationsUpsertWithoutAccountsInput = {
    update: XOR<organizationsUpdateWithoutAccountsInput, organizationsUncheckedUpdateWithoutAccountsInput>
    create: XOR<organizationsCreateWithoutAccountsInput, organizationsUncheckedCreateWithoutAccountsInput>
    where?: organizationsWhereInput
  }

  export type organizationsUpdateToOneWithWhereWithoutAccountsInput = {
    where?: organizationsWhereInput
    data: XOR<organizationsUpdateWithoutAccountsInput, organizationsUncheckedUpdateWithoutAccountsInput>
  }

  export type organizationsUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organizationsUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dealsUpsertWithWhereUniqueWithoutAccountInput = {
    where: dealsWhereUniqueInput
    update: XOR<dealsUpdateWithoutAccountInput, dealsUncheckedUpdateWithoutAccountInput>
    create: XOR<dealsCreateWithoutAccountInput, dealsUncheckedCreateWithoutAccountInput>
  }

  export type dealsUpdateWithWhereUniqueWithoutAccountInput = {
    where: dealsWhereUniqueInput
    data: XOR<dealsUpdateWithoutAccountInput, dealsUncheckedUpdateWithoutAccountInput>
  }

  export type dealsUpdateManyWithWhereWithoutAccountInput = {
    where: dealsScalarWhereInput
    data: XOR<dealsUpdateManyMutationInput, dealsUncheckedUpdateManyWithoutAccountInput>
  }

  export type dealsScalarWhereInput = {
    AND?: dealsScalarWhereInput | dealsScalarWhereInput[]
    OR?: dealsScalarWhereInput[]
    NOT?: dealsScalarWhereInput | dealsScalarWhereInput[]
    id?: StringFilter<"deals"> | string
    value?: StringFilter<"deals"> | string
    status?: StringFilter<"deals"> | string
    accountId?: StringFilter<"deals"> | string
    started_at?: DateTimeFilter<"deals"> | Date | string
    ended_at?: DateTimeFilter<"deals"> | Date | string
    created_at?: DateTimeFilter<"deals"> | Date | string
    updated_at?: DateTimeFilter<"deals"> | Date | string
  }

  export type accountsCreateWithoutAccountsInput = {
    id?: string
    name: string
    created_at: Date | string
    updated_at: Date | string
    organization: organizationsCreateNestedOneWithoutAccountsInput
  }

  export type accountsUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    organizationId: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type accountsCreateOrConnectWithoutAccountsInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutAccountsInput, accountsUncheckedCreateWithoutAccountsInput>
  }

  export type accountsUpsertWithoutAccountsInput = {
    update: XOR<accountsUpdateWithoutAccountsInput, accountsUncheckedUpdateWithoutAccountsInput>
    create: XOR<accountsCreateWithoutAccountsInput, accountsUncheckedCreateWithoutAccountsInput>
    where?: accountsWhereInput
  }

  export type accountsUpdateToOneWithWhereWithoutAccountsInput = {
    where?: accountsWhereInput
    data: XOR<accountsUpdateWithoutAccountsInput, accountsUncheckedUpdateWithoutAccountsInput>
  }

  export type accountsUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: organizationsUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type accountsUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsCreateManyOrganizationInput = {
    id?: string
    name: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type accountsUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: dealsUpdateManyWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: dealsUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dealsCreateManyAccountInput = {
    id?: string
    value: string
    status: string
    started_at: Date | string
    ended_at: Date | string
    created_at: Date | string
    updated_at: Date | string
  }

  export type dealsUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dealsUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dealsUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}