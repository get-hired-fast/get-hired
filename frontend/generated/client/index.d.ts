
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
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model SavedOpportunity
 * 
 */
export type SavedOpportunity = $Result.DefaultSelection<Prisma.$SavedOpportunityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserProfiles
 * const userProfiles = await prisma.userProfile.findMany()
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
   * // Fetch zero or more UserProfiles
   * const userProfiles = await prisma.userProfile.findMany()
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
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedOpportunity`: Exposes CRUD operations for the **SavedOpportunity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedOpportunities
    * const savedOpportunities = await prisma.savedOpportunity.findMany()
    * ```
    */
  get savedOpportunity(): Prisma.SavedOpportunityDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    UserProfile: 'UserProfile',
    Education: 'Education',
    Application: 'Application',
    SavedOpportunity: 'SavedOpportunity'
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
      modelProps: "userProfile" | "education" | "application" | "savedOpportunity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      SavedOpportunity: {
        payload: Prisma.$SavedOpportunityPayload<ExtArgs>
        fields: Prisma.SavedOpportunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedOpportunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOpportunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedOpportunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOpportunityPayload>
          }
          findFirst: {
            args: Prisma.SavedOpportunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOpportunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedOpportunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOpportunityPayload>
          }
          findMany: {
            args: Prisma.SavedOpportunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOpportunityPayload>[]
          }
          create: {
            args: Prisma.SavedOpportunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOpportunityPayload>
          }
          createMany: {
            args: Prisma.SavedOpportunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedOpportunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOpportunityPayload>[]
          }
          delete: {
            args: Prisma.SavedOpportunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOpportunityPayload>
          }
          update: {
            args: Prisma.SavedOpportunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOpportunityPayload>
          }
          deleteMany: {
            args: Prisma.SavedOpportunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedOpportunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedOpportunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOpportunityPayload>[]
          }
          upsert: {
            args: Prisma.SavedOpportunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOpportunityPayload>
          }
          aggregate: {
            args: Prisma.SavedOpportunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedOpportunity>
          }
          groupBy: {
            args: Prisma.SavedOpportunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedOpportunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedOpportunityCountArgs<ExtArgs>
            result: $Utils.Optional<SavedOpportunityCountAggregateOutputType> | number
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
    userProfile?: UserProfileOmit
    education?: EducationOmit
    application?: ApplicationOmit
    savedOpportunity?: SavedOpportunityOmit
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
   * Count Type UserProfileCountOutputType
   */

  export type UserProfileCountOutputType = {
    education: number
  }

  export type UserProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | UserProfileCountOutputTypeCountEducationArgs
  }

  // Custom InputTypes
  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileCountOutputType
     */
    select?: UserProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    age: number | null
    profileViews: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    age: number | null
    profileViews: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    profilePicture: string | null
    firstName: string | null
    lastName: string | null
    age: number | null
    dateOfBirth: Date | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    phone: string | null
    bio: string | null
    currentRole: string | null
    experience: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    leetcodeUrl: string | null
    portfolioUrl: string | null
    twitterUrl: string | null
    resumeUrl: string | null
    resumeFileName: string | null
    isProfileComplete: boolean | null
    profileViews: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    profilePicture: string | null
    firstName: string | null
    lastName: string | null
    age: number | null
    dateOfBirth: Date | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    phone: string | null
    bio: string | null
    currentRole: string | null
    experience: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    leetcodeUrl: string | null
    portfolioUrl: string | null
    twitterUrl: string | null
    resumeUrl: string | null
    resumeFileName: string | null
    isProfileComplete: boolean | null
    profileViews: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    profilePicture: number
    firstName: number
    lastName: number
    age: number
    dateOfBirth: number
    address: number
    city: number
    state: number
    country: number
    phone: number
    skills: number
    preferredJobRoles: number
    bio: number
    currentRole: number
    experience: number
    linkedinUrl: number
    githubUrl: number
    leetcodeUrl: number
    portfolioUrl: number
    twitterUrl: number
    resumeUrl: number
    resumeFileName: number
    isProfileComplete: number
    profileViews: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    age?: true
    profileViews?: true
  }

  export type UserProfileSumAggregateInputType = {
    age?: true
    profileViews?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    profilePicture?: true
    firstName?: true
    lastName?: true
    age?: true
    dateOfBirth?: true
    address?: true
    city?: true
    state?: true
    country?: true
    phone?: true
    bio?: true
    currentRole?: true
    experience?: true
    linkedinUrl?: true
    githubUrl?: true
    leetcodeUrl?: true
    portfolioUrl?: true
    twitterUrl?: true
    resumeUrl?: true
    resumeFileName?: true
    isProfileComplete?: true
    profileViews?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    profilePicture?: true
    firstName?: true
    lastName?: true
    age?: true
    dateOfBirth?: true
    address?: true
    city?: true
    state?: true
    country?: true
    phone?: true
    bio?: true
    currentRole?: true
    experience?: true
    linkedinUrl?: true
    githubUrl?: true
    leetcodeUrl?: true
    portfolioUrl?: true
    twitterUrl?: true
    resumeUrl?: true
    resumeFileName?: true
    isProfileComplete?: true
    profileViews?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    profilePicture?: true
    firstName?: true
    lastName?: true
    age?: true
    dateOfBirth?: true
    address?: true
    city?: true
    state?: true
    country?: true
    phone?: true
    skills?: true
    preferredJobRoles?: true
    bio?: true
    currentRole?: true
    experience?: true
    linkedinUrl?: true
    githubUrl?: true
    leetcodeUrl?: true
    portfolioUrl?: true
    twitterUrl?: true
    resumeUrl?: true
    resumeFileName?: true
    isProfileComplete?: true
    profileViews?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    profilePicture: string | null
    firstName: string
    lastName: string
    age: number | null
    dateOfBirth: Date | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    phone: string | null
    skills: string[]
    preferredJobRoles: string[]
    bio: string | null
    currentRole: string | null
    experience: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    leetcodeUrl: string | null
    portfolioUrl: string | null
    twitterUrl: string | null
    resumeUrl: string | null
    resumeFileName: string | null
    isProfileComplete: boolean
    profileViews: number
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    firstName?: boolean
    lastName?: boolean
    age?: boolean
    dateOfBirth?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    phone?: boolean
    skills?: boolean
    preferredJobRoles?: boolean
    bio?: boolean
    currentRole?: boolean
    experience?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    leetcodeUrl?: boolean
    portfolioUrl?: boolean
    twitterUrl?: boolean
    resumeUrl?: boolean
    resumeFileName?: boolean
    isProfileComplete?: boolean
    profileViews?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    education?: boolean | UserProfile$educationArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    firstName?: boolean
    lastName?: boolean
    age?: boolean
    dateOfBirth?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    phone?: boolean
    skills?: boolean
    preferredJobRoles?: boolean
    bio?: boolean
    currentRole?: boolean
    experience?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    leetcodeUrl?: boolean
    portfolioUrl?: boolean
    twitterUrl?: boolean
    resumeUrl?: boolean
    resumeFileName?: boolean
    isProfileComplete?: boolean
    profileViews?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    firstName?: boolean
    lastName?: boolean
    age?: boolean
    dateOfBirth?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    phone?: boolean
    skills?: boolean
    preferredJobRoles?: boolean
    bio?: boolean
    currentRole?: boolean
    experience?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    leetcodeUrl?: boolean
    portfolioUrl?: boolean
    twitterUrl?: boolean
    resumeUrl?: boolean
    resumeFileName?: boolean
    isProfileComplete?: boolean
    profileViews?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    firstName?: boolean
    lastName?: boolean
    age?: boolean
    dateOfBirth?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    phone?: boolean
    skills?: boolean
    preferredJobRoles?: boolean
    bio?: boolean
    currentRole?: boolean
    experience?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    leetcodeUrl?: boolean
    portfolioUrl?: boolean
    twitterUrl?: boolean
    resumeUrl?: boolean
    resumeFileName?: boolean
    isProfileComplete?: boolean
    profileViews?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "profilePicture" | "firstName" | "lastName" | "age" | "dateOfBirth" | "address" | "city" | "state" | "country" | "phone" | "skills" | "preferredJobRoles" | "bio" | "currentRole" | "experience" | "linkedinUrl" | "githubUrl" | "leetcodeUrl" | "portfolioUrl" | "twitterUrl" | "resumeUrl" | "resumeFileName" | "isProfileComplete" | "profileViews" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | UserProfile$educationArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      education: Prisma.$EducationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      profilePicture: string | null
      firstName: string
      lastName: string
      age: number | null
      dateOfBirth: Date | null
      address: string | null
      city: string | null
      state: string | null
      country: string | null
      phone: string | null
      skills: string[]
      preferredJobRoles: string[]
      bio: string | null
      currentRole: string | null
      experience: string | null
      linkedinUrl: string | null
      githubUrl: string | null
      leetcodeUrl: string | null
      portfolioUrl: string | null
      twitterUrl: string | null
      resumeUrl: string | null
      resumeFileName: string | null
      isProfileComplete: boolean
      profileViews: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    education<T extends UserProfile$educationArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly profilePicture: FieldRef<"UserProfile", 'String'>
    readonly firstName: FieldRef<"UserProfile", 'String'>
    readonly lastName: FieldRef<"UserProfile", 'String'>
    readonly age: FieldRef<"UserProfile", 'Int'>
    readonly dateOfBirth: FieldRef<"UserProfile", 'DateTime'>
    readonly address: FieldRef<"UserProfile", 'String'>
    readonly city: FieldRef<"UserProfile", 'String'>
    readonly state: FieldRef<"UserProfile", 'String'>
    readonly country: FieldRef<"UserProfile", 'String'>
    readonly phone: FieldRef<"UserProfile", 'String'>
    readonly skills: FieldRef<"UserProfile", 'String[]'>
    readonly preferredJobRoles: FieldRef<"UserProfile", 'String[]'>
    readonly bio: FieldRef<"UserProfile", 'String'>
    readonly currentRole: FieldRef<"UserProfile", 'String'>
    readonly experience: FieldRef<"UserProfile", 'String'>
    readonly linkedinUrl: FieldRef<"UserProfile", 'String'>
    readonly githubUrl: FieldRef<"UserProfile", 'String'>
    readonly leetcodeUrl: FieldRef<"UserProfile", 'String'>
    readonly portfolioUrl: FieldRef<"UserProfile", 'String'>
    readonly twitterUrl: FieldRef<"UserProfile", 'String'>
    readonly resumeUrl: FieldRef<"UserProfile", 'String'>
    readonly resumeFileName: FieldRef<"UserProfile", 'String'>
    readonly isProfileComplete: FieldRef<"UserProfile", 'Boolean'>
    readonly profileViews: FieldRef<"UserProfile", 'Int'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile.education
   */
  export type UserProfile$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    institution: string | null
    degree: string | null
    fieldOfStudy: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrentlyStudying: boolean | null
    grade: string | null
    description: string | null
    userProfileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    institution: string | null
    degree: string | null
    fieldOfStudy: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrentlyStudying: boolean | null
    grade: string | null
    description: string | null
    userProfileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    institution: number
    degree: number
    fieldOfStudy: number
    startDate: number
    endDate: number
    isCurrentlyStudying: number
    grade: number
    description: number
    userProfileId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    fieldOfStudy?: true
    startDate?: true
    endDate?: true
    isCurrentlyStudying?: true
    grade?: true
    description?: true
    userProfileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    fieldOfStudy?: true
    startDate?: true
    endDate?: true
    isCurrentlyStudying?: true
    grade?: true
    description?: true
    userProfileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    fieldOfStudy?: true
    startDate?: true
    endDate?: true
    isCurrentlyStudying?: true
    grade?: true
    description?: true
    userProfileId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    institution: string
    degree: string
    fieldOfStudy: string
    startDate: Date
    endDate: Date | null
    isCurrentlyStudying: boolean
    grade: string | null
    description: string | null
    userProfileId: string
    createdAt: Date
    updatedAt: Date
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    degree?: boolean
    fieldOfStudy?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrentlyStudying?: boolean
    grade?: boolean
    description?: boolean
    userProfileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    degree?: boolean
    fieldOfStudy?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrentlyStudying?: boolean
    grade?: boolean
    description?: boolean
    userProfileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    degree?: boolean
    fieldOfStudy?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrentlyStudying?: boolean
    grade?: boolean
    description?: boolean
    userProfileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    institution?: boolean
    degree?: boolean
    fieldOfStudy?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrentlyStudying?: boolean
    grade?: boolean
    description?: boolean
    userProfileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institution" | "degree" | "fieldOfStudy" | "startDate" | "endDate" | "isCurrentlyStudying" | "grade" | "description" | "userProfileId" | "createdAt" | "updatedAt", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      userProfile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      institution: string
      degree: string
      fieldOfStudy: string
      startDate: Date
      endDate: Date | null
      isCurrentlyStudying: boolean
      grade: string | null
      description: string | null
      userProfileId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
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
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
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
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userProfile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly institution: FieldRef<"Education", 'String'>
    readonly degree: FieldRef<"Education", 'String'>
    readonly fieldOfStudy: FieldRef<"Education", 'String'>
    readonly startDate: FieldRef<"Education", 'DateTime'>
    readonly endDate: FieldRef<"Education", 'DateTime'>
    readonly isCurrentlyStudying: FieldRef<"Education", 'Boolean'>
    readonly grade: FieldRef<"Education", 'String'>
    readonly description: FieldRef<"Education", 'String'>
    readonly userProfileId: FieldRef<"Education", 'String'>
    readonly createdAt: FieldRef<"Education", 'DateTime'>
    readonly updatedAt: FieldRef<"Education", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    jobTitle: string | null
    company: string | null
    jobType: string | null
    status: string | null
    appliedAt: Date | null
    deadline: Date | null
    description: string | null
    location: string | null
    salary: string | null
    jobUrl: string | null
    applicationUrl: string | null
    interviewDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    jobTitle: string | null
    company: string | null
    jobType: string | null
    status: string | null
    appliedAt: Date | null
    deadline: Date | null
    description: string | null
    location: string | null
    salary: string | null
    jobUrl: string | null
    applicationUrl: string | null
    interviewDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    userId: number
    jobTitle: number
    company: number
    jobType: number
    status: number
    appliedAt: number
    deadline: number
    description: number
    location: number
    salary: number
    jobUrl: number
    applicationUrl: number
    interviewDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    userId?: true
    jobTitle?: true
    company?: true
    jobType?: true
    status?: true
    appliedAt?: true
    deadline?: true
    description?: true
    location?: true
    salary?: true
    jobUrl?: true
    applicationUrl?: true
    interviewDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    userId?: true
    jobTitle?: true
    company?: true
    jobType?: true
    status?: true
    appliedAt?: true
    deadline?: true
    description?: true
    location?: true
    salary?: true
    jobUrl?: true
    applicationUrl?: true
    interviewDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    userId?: true
    jobTitle?: true
    company?: true
    jobType?: true
    status?: true
    appliedAt?: true
    deadline?: true
    description?: true
    location?: true
    salary?: true
    jobUrl?: true
    applicationUrl?: true
    interviewDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    userId: string
    jobTitle: string
    company: string
    jobType: string
    status: string
    appliedAt: Date
    deadline: Date | null
    description: string | null
    location: string | null
    salary: string | null
    jobUrl: string | null
    applicationUrl: string | null
    interviewDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobTitle?: boolean
    company?: boolean
    jobType?: boolean
    status?: boolean
    appliedAt?: boolean
    deadline?: boolean
    description?: boolean
    location?: boolean
    salary?: boolean
    jobUrl?: boolean
    applicationUrl?: boolean
    interviewDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobTitle?: boolean
    company?: boolean
    jobType?: boolean
    status?: boolean
    appliedAt?: boolean
    deadline?: boolean
    description?: boolean
    location?: boolean
    salary?: boolean
    jobUrl?: boolean
    applicationUrl?: boolean
    interviewDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobTitle?: boolean
    company?: boolean
    jobType?: boolean
    status?: boolean
    appliedAt?: boolean
    deadline?: boolean
    description?: boolean
    location?: boolean
    salary?: boolean
    jobUrl?: boolean
    applicationUrl?: boolean
    interviewDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    userId?: boolean
    jobTitle?: boolean
    company?: boolean
    jobType?: boolean
    status?: boolean
    appliedAt?: boolean
    deadline?: boolean
    description?: boolean
    location?: boolean
    salary?: boolean
    jobUrl?: boolean
    applicationUrl?: boolean
    interviewDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "jobTitle" | "company" | "jobType" | "status" | "appliedAt" | "deadline" | "description" | "location" | "salary" | "jobUrl" | "applicationUrl" | "interviewDate" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      jobTitle: string
      company: string
      jobType: string
      status: string
      appliedAt: Date
      deadline: Date | null
      description: string | null
      location: string | null
      salary: string | null
      jobUrl: string | null
      applicationUrl: string | null
      interviewDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly userId: FieldRef<"Application", 'String'>
    readonly jobTitle: FieldRef<"Application", 'String'>
    readonly company: FieldRef<"Application", 'String'>
    readonly jobType: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'String'>
    readonly appliedAt: FieldRef<"Application", 'DateTime'>
    readonly deadline: FieldRef<"Application", 'DateTime'>
    readonly description: FieldRef<"Application", 'String'>
    readonly location: FieldRef<"Application", 'String'>
    readonly salary: FieldRef<"Application", 'String'>
    readonly jobUrl: FieldRef<"Application", 'String'>
    readonly applicationUrl: FieldRef<"Application", 'String'>
    readonly interviewDate: FieldRef<"Application", 'DateTime'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
  }


  /**
   * Model SavedOpportunity
   */

  export type AggregateSavedOpportunity = {
    _count: SavedOpportunityCountAggregateOutputType | null
    _min: SavedOpportunityMinAggregateOutputType | null
    _max: SavedOpportunityMaxAggregateOutputType | null
  }

  export type SavedOpportunityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    company: string | null
    type: string | null
    location: string | null
    deadline: Date | null
    description: string | null
    requirements: string | null
    salary: string | null
    jobId: string | null
    opportunityUrl: string | null
    applicationUrl: string | null
    savedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavedOpportunityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    company: string | null
    type: string | null
    location: string | null
    deadline: Date | null
    description: string | null
    requirements: string | null
    salary: string | null
    jobId: string | null
    opportunityUrl: string | null
    applicationUrl: string | null
    savedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavedOpportunityCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    company: number
    type: number
    location: number
    deadline: number
    description: number
    requirements: number
    salary: number
    jobId: number
    opportunityUrl: number
    applicationUrl: number
    savedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SavedOpportunityMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    company?: true
    type?: true
    location?: true
    deadline?: true
    description?: true
    requirements?: true
    salary?: true
    jobId?: true
    opportunityUrl?: true
    applicationUrl?: true
    savedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavedOpportunityMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    company?: true
    type?: true
    location?: true
    deadline?: true
    description?: true
    requirements?: true
    salary?: true
    jobId?: true
    opportunityUrl?: true
    applicationUrl?: true
    savedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavedOpportunityCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    company?: true
    type?: true
    location?: true
    deadline?: true
    description?: true
    requirements?: true
    salary?: true
    jobId?: true
    opportunityUrl?: true
    applicationUrl?: true
    savedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SavedOpportunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedOpportunity to aggregate.
     */
    where?: SavedOpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedOpportunities to fetch.
     */
    orderBy?: SavedOpportunityOrderByWithRelationInput | SavedOpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedOpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedOpportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedOpportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedOpportunities
    **/
    _count?: true | SavedOpportunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedOpportunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedOpportunityMaxAggregateInputType
  }

  export type GetSavedOpportunityAggregateType<T extends SavedOpportunityAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedOpportunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedOpportunity[P]>
      : GetScalarType<T[P], AggregateSavedOpportunity[P]>
  }




  export type SavedOpportunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedOpportunityWhereInput
    orderBy?: SavedOpportunityOrderByWithAggregationInput | SavedOpportunityOrderByWithAggregationInput[]
    by: SavedOpportunityScalarFieldEnum[] | SavedOpportunityScalarFieldEnum
    having?: SavedOpportunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedOpportunityCountAggregateInputType | true
    _min?: SavedOpportunityMinAggregateInputType
    _max?: SavedOpportunityMaxAggregateInputType
  }

  export type SavedOpportunityGroupByOutputType = {
    id: string
    userId: string
    title: string
    company: string
    type: string
    location: string | null
    deadline: Date | null
    description: string | null
    requirements: string | null
    salary: string | null
    jobId: string
    opportunityUrl: string | null
    applicationUrl: string | null
    savedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SavedOpportunityCountAggregateOutputType | null
    _min: SavedOpportunityMinAggregateOutputType | null
    _max: SavedOpportunityMaxAggregateOutputType | null
  }

  type GetSavedOpportunityGroupByPayload<T extends SavedOpportunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedOpportunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedOpportunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedOpportunityGroupByOutputType[P]>
            : GetScalarType<T[P], SavedOpportunityGroupByOutputType[P]>
        }
      >
    >


  export type SavedOpportunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    company?: boolean
    type?: boolean
    location?: boolean
    deadline?: boolean
    description?: boolean
    requirements?: boolean
    salary?: boolean
    jobId?: boolean
    opportunityUrl?: boolean
    applicationUrl?: boolean
    savedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["savedOpportunity"]>

  export type SavedOpportunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    company?: boolean
    type?: boolean
    location?: boolean
    deadline?: boolean
    description?: boolean
    requirements?: boolean
    salary?: boolean
    jobId?: boolean
    opportunityUrl?: boolean
    applicationUrl?: boolean
    savedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["savedOpportunity"]>

  export type SavedOpportunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    company?: boolean
    type?: boolean
    location?: boolean
    deadline?: boolean
    description?: boolean
    requirements?: boolean
    salary?: boolean
    jobId?: boolean
    opportunityUrl?: boolean
    applicationUrl?: boolean
    savedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["savedOpportunity"]>

  export type SavedOpportunitySelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    company?: boolean
    type?: boolean
    location?: boolean
    deadline?: boolean
    description?: boolean
    requirements?: boolean
    salary?: boolean
    jobId?: boolean
    opportunityUrl?: boolean
    applicationUrl?: boolean
    savedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SavedOpportunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "company" | "type" | "location" | "deadline" | "description" | "requirements" | "salary" | "jobId" | "opportunityUrl" | "applicationUrl" | "savedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["savedOpportunity"]>

  export type $SavedOpportunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedOpportunity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      company: string
      type: string
      location: string | null
      deadline: Date | null
      description: string | null
      requirements: string | null
      salary: string | null
      jobId: string
      opportunityUrl: string | null
      applicationUrl: string | null
      savedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["savedOpportunity"]>
    composites: {}
  }

  type SavedOpportunityGetPayload<S extends boolean | null | undefined | SavedOpportunityDefaultArgs> = $Result.GetResult<Prisma.$SavedOpportunityPayload, S>

  type SavedOpportunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedOpportunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedOpportunityCountAggregateInputType | true
    }

  export interface SavedOpportunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedOpportunity'], meta: { name: 'SavedOpportunity' } }
    /**
     * Find zero or one SavedOpportunity that matches the filter.
     * @param {SavedOpportunityFindUniqueArgs} args - Arguments to find a SavedOpportunity
     * @example
     * // Get one SavedOpportunity
     * const savedOpportunity = await prisma.savedOpportunity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedOpportunityFindUniqueArgs>(args: SelectSubset<T, SavedOpportunityFindUniqueArgs<ExtArgs>>): Prisma__SavedOpportunityClient<$Result.GetResult<Prisma.$SavedOpportunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedOpportunity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedOpportunityFindUniqueOrThrowArgs} args - Arguments to find a SavedOpportunity
     * @example
     * // Get one SavedOpportunity
     * const savedOpportunity = await prisma.savedOpportunity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedOpportunityFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedOpportunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedOpportunityClient<$Result.GetResult<Prisma.$SavedOpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedOpportunity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOpportunityFindFirstArgs} args - Arguments to find a SavedOpportunity
     * @example
     * // Get one SavedOpportunity
     * const savedOpportunity = await prisma.savedOpportunity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedOpportunityFindFirstArgs>(args?: SelectSubset<T, SavedOpportunityFindFirstArgs<ExtArgs>>): Prisma__SavedOpportunityClient<$Result.GetResult<Prisma.$SavedOpportunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedOpportunity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOpportunityFindFirstOrThrowArgs} args - Arguments to find a SavedOpportunity
     * @example
     * // Get one SavedOpportunity
     * const savedOpportunity = await prisma.savedOpportunity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedOpportunityFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedOpportunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedOpportunityClient<$Result.GetResult<Prisma.$SavedOpportunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedOpportunities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOpportunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedOpportunities
     * const savedOpportunities = await prisma.savedOpportunity.findMany()
     * 
     * // Get first 10 SavedOpportunities
     * const savedOpportunities = await prisma.savedOpportunity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedOpportunityWithIdOnly = await prisma.savedOpportunity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedOpportunityFindManyArgs>(args?: SelectSubset<T, SavedOpportunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedOpportunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedOpportunity.
     * @param {SavedOpportunityCreateArgs} args - Arguments to create a SavedOpportunity.
     * @example
     * // Create one SavedOpportunity
     * const SavedOpportunity = await prisma.savedOpportunity.create({
     *   data: {
     *     // ... data to create a SavedOpportunity
     *   }
     * })
     * 
     */
    create<T extends SavedOpportunityCreateArgs>(args: SelectSubset<T, SavedOpportunityCreateArgs<ExtArgs>>): Prisma__SavedOpportunityClient<$Result.GetResult<Prisma.$SavedOpportunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedOpportunities.
     * @param {SavedOpportunityCreateManyArgs} args - Arguments to create many SavedOpportunities.
     * @example
     * // Create many SavedOpportunities
     * const savedOpportunity = await prisma.savedOpportunity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedOpportunityCreateManyArgs>(args?: SelectSubset<T, SavedOpportunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedOpportunities and returns the data saved in the database.
     * @param {SavedOpportunityCreateManyAndReturnArgs} args - Arguments to create many SavedOpportunities.
     * @example
     * // Create many SavedOpportunities
     * const savedOpportunity = await prisma.savedOpportunity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedOpportunities and only return the `id`
     * const savedOpportunityWithIdOnly = await prisma.savedOpportunity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedOpportunityCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedOpportunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedOpportunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedOpportunity.
     * @param {SavedOpportunityDeleteArgs} args - Arguments to delete one SavedOpportunity.
     * @example
     * // Delete one SavedOpportunity
     * const SavedOpportunity = await prisma.savedOpportunity.delete({
     *   where: {
     *     // ... filter to delete one SavedOpportunity
     *   }
     * })
     * 
     */
    delete<T extends SavedOpportunityDeleteArgs>(args: SelectSubset<T, SavedOpportunityDeleteArgs<ExtArgs>>): Prisma__SavedOpportunityClient<$Result.GetResult<Prisma.$SavedOpportunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedOpportunity.
     * @param {SavedOpportunityUpdateArgs} args - Arguments to update one SavedOpportunity.
     * @example
     * // Update one SavedOpportunity
     * const savedOpportunity = await prisma.savedOpportunity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedOpportunityUpdateArgs>(args: SelectSubset<T, SavedOpportunityUpdateArgs<ExtArgs>>): Prisma__SavedOpportunityClient<$Result.GetResult<Prisma.$SavedOpportunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedOpportunities.
     * @param {SavedOpportunityDeleteManyArgs} args - Arguments to filter SavedOpportunities to delete.
     * @example
     * // Delete a few SavedOpportunities
     * const { count } = await prisma.savedOpportunity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedOpportunityDeleteManyArgs>(args?: SelectSubset<T, SavedOpportunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedOpportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOpportunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedOpportunities
     * const savedOpportunity = await prisma.savedOpportunity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedOpportunityUpdateManyArgs>(args: SelectSubset<T, SavedOpportunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedOpportunities and returns the data updated in the database.
     * @param {SavedOpportunityUpdateManyAndReturnArgs} args - Arguments to update many SavedOpportunities.
     * @example
     * // Update many SavedOpportunities
     * const savedOpportunity = await prisma.savedOpportunity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedOpportunities and only return the `id`
     * const savedOpportunityWithIdOnly = await prisma.savedOpportunity.updateManyAndReturn({
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
    updateManyAndReturn<T extends SavedOpportunityUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedOpportunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedOpportunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedOpportunity.
     * @param {SavedOpportunityUpsertArgs} args - Arguments to update or create a SavedOpportunity.
     * @example
     * // Update or create a SavedOpportunity
     * const savedOpportunity = await prisma.savedOpportunity.upsert({
     *   create: {
     *     // ... data to create a SavedOpportunity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedOpportunity we want to update
     *   }
     * })
     */
    upsert<T extends SavedOpportunityUpsertArgs>(args: SelectSubset<T, SavedOpportunityUpsertArgs<ExtArgs>>): Prisma__SavedOpportunityClient<$Result.GetResult<Prisma.$SavedOpportunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedOpportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOpportunityCountArgs} args - Arguments to filter SavedOpportunities to count.
     * @example
     * // Count the number of SavedOpportunities
     * const count = await prisma.savedOpportunity.count({
     *   where: {
     *     // ... the filter for the SavedOpportunities we want to count
     *   }
     * })
    **/
    count<T extends SavedOpportunityCountArgs>(
      args?: Subset<T, SavedOpportunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedOpportunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedOpportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOpportunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedOpportunityAggregateArgs>(args: Subset<T, SavedOpportunityAggregateArgs>): Prisma.PrismaPromise<GetSavedOpportunityAggregateType<T>>

    /**
     * Group by SavedOpportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOpportunityGroupByArgs} args - Group by arguments.
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
      T extends SavedOpportunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedOpportunityGroupByArgs['orderBy'] }
        : { orderBy?: SavedOpportunityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedOpportunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedOpportunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedOpportunity model
   */
  readonly fields: SavedOpportunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedOpportunity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedOpportunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SavedOpportunity model
   */
  interface SavedOpportunityFieldRefs {
    readonly id: FieldRef<"SavedOpportunity", 'String'>
    readonly userId: FieldRef<"SavedOpportunity", 'String'>
    readonly title: FieldRef<"SavedOpportunity", 'String'>
    readonly company: FieldRef<"SavedOpportunity", 'String'>
    readonly type: FieldRef<"SavedOpportunity", 'String'>
    readonly location: FieldRef<"SavedOpportunity", 'String'>
    readonly deadline: FieldRef<"SavedOpportunity", 'DateTime'>
    readonly description: FieldRef<"SavedOpportunity", 'String'>
    readonly requirements: FieldRef<"SavedOpportunity", 'String'>
    readonly salary: FieldRef<"SavedOpportunity", 'String'>
    readonly jobId: FieldRef<"SavedOpportunity", 'String'>
    readonly opportunityUrl: FieldRef<"SavedOpportunity", 'String'>
    readonly applicationUrl: FieldRef<"SavedOpportunity", 'String'>
    readonly savedAt: FieldRef<"SavedOpportunity", 'DateTime'>
    readonly createdAt: FieldRef<"SavedOpportunity", 'DateTime'>
    readonly updatedAt: FieldRef<"SavedOpportunity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedOpportunity findUnique
   */
  export type SavedOpportunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOpportunity
     */
    select?: SavedOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOpportunity
     */
    omit?: SavedOpportunityOmit<ExtArgs> | null
    /**
     * Filter, which SavedOpportunity to fetch.
     */
    where: SavedOpportunityWhereUniqueInput
  }

  /**
   * SavedOpportunity findUniqueOrThrow
   */
  export type SavedOpportunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOpportunity
     */
    select?: SavedOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOpportunity
     */
    omit?: SavedOpportunityOmit<ExtArgs> | null
    /**
     * Filter, which SavedOpportunity to fetch.
     */
    where: SavedOpportunityWhereUniqueInput
  }

  /**
   * SavedOpportunity findFirst
   */
  export type SavedOpportunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOpportunity
     */
    select?: SavedOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOpportunity
     */
    omit?: SavedOpportunityOmit<ExtArgs> | null
    /**
     * Filter, which SavedOpportunity to fetch.
     */
    where?: SavedOpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedOpportunities to fetch.
     */
    orderBy?: SavedOpportunityOrderByWithRelationInput | SavedOpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedOpportunities.
     */
    cursor?: SavedOpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedOpportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedOpportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedOpportunities.
     */
    distinct?: SavedOpportunityScalarFieldEnum | SavedOpportunityScalarFieldEnum[]
  }

  /**
   * SavedOpportunity findFirstOrThrow
   */
  export type SavedOpportunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOpportunity
     */
    select?: SavedOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOpportunity
     */
    omit?: SavedOpportunityOmit<ExtArgs> | null
    /**
     * Filter, which SavedOpportunity to fetch.
     */
    where?: SavedOpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedOpportunities to fetch.
     */
    orderBy?: SavedOpportunityOrderByWithRelationInput | SavedOpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedOpportunities.
     */
    cursor?: SavedOpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedOpportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedOpportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedOpportunities.
     */
    distinct?: SavedOpportunityScalarFieldEnum | SavedOpportunityScalarFieldEnum[]
  }

  /**
   * SavedOpportunity findMany
   */
  export type SavedOpportunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOpportunity
     */
    select?: SavedOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOpportunity
     */
    omit?: SavedOpportunityOmit<ExtArgs> | null
    /**
     * Filter, which SavedOpportunities to fetch.
     */
    where?: SavedOpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedOpportunities to fetch.
     */
    orderBy?: SavedOpportunityOrderByWithRelationInput | SavedOpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedOpportunities.
     */
    cursor?: SavedOpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedOpportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedOpportunities.
     */
    skip?: number
    distinct?: SavedOpportunityScalarFieldEnum | SavedOpportunityScalarFieldEnum[]
  }

  /**
   * SavedOpportunity create
   */
  export type SavedOpportunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOpportunity
     */
    select?: SavedOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOpportunity
     */
    omit?: SavedOpportunityOmit<ExtArgs> | null
    /**
     * The data needed to create a SavedOpportunity.
     */
    data: XOR<SavedOpportunityCreateInput, SavedOpportunityUncheckedCreateInput>
  }

  /**
   * SavedOpportunity createMany
   */
  export type SavedOpportunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedOpportunities.
     */
    data: SavedOpportunityCreateManyInput | SavedOpportunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedOpportunity createManyAndReturn
   */
  export type SavedOpportunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOpportunity
     */
    select?: SavedOpportunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOpportunity
     */
    omit?: SavedOpportunityOmit<ExtArgs> | null
    /**
     * The data used to create many SavedOpportunities.
     */
    data: SavedOpportunityCreateManyInput | SavedOpportunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedOpportunity update
   */
  export type SavedOpportunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOpportunity
     */
    select?: SavedOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOpportunity
     */
    omit?: SavedOpportunityOmit<ExtArgs> | null
    /**
     * The data needed to update a SavedOpportunity.
     */
    data: XOR<SavedOpportunityUpdateInput, SavedOpportunityUncheckedUpdateInput>
    /**
     * Choose, which SavedOpportunity to update.
     */
    where: SavedOpportunityWhereUniqueInput
  }

  /**
   * SavedOpportunity updateMany
   */
  export type SavedOpportunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedOpportunities.
     */
    data: XOR<SavedOpportunityUpdateManyMutationInput, SavedOpportunityUncheckedUpdateManyInput>
    /**
     * Filter which SavedOpportunities to update
     */
    where?: SavedOpportunityWhereInput
    /**
     * Limit how many SavedOpportunities to update.
     */
    limit?: number
  }

  /**
   * SavedOpportunity updateManyAndReturn
   */
  export type SavedOpportunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOpportunity
     */
    select?: SavedOpportunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOpportunity
     */
    omit?: SavedOpportunityOmit<ExtArgs> | null
    /**
     * The data used to update SavedOpportunities.
     */
    data: XOR<SavedOpportunityUpdateManyMutationInput, SavedOpportunityUncheckedUpdateManyInput>
    /**
     * Filter which SavedOpportunities to update
     */
    where?: SavedOpportunityWhereInput
    /**
     * Limit how many SavedOpportunities to update.
     */
    limit?: number
  }

  /**
   * SavedOpportunity upsert
   */
  export type SavedOpportunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOpportunity
     */
    select?: SavedOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOpportunity
     */
    omit?: SavedOpportunityOmit<ExtArgs> | null
    /**
     * The filter to search for the SavedOpportunity to update in case it exists.
     */
    where: SavedOpportunityWhereUniqueInput
    /**
     * In case the SavedOpportunity found by the `where` argument doesn't exist, create a new SavedOpportunity with this data.
     */
    create: XOR<SavedOpportunityCreateInput, SavedOpportunityUncheckedCreateInput>
    /**
     * In case the SavedOpportunity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedOpportunityUpdateInput, SavedOpportunityUncheckedUpdateInput>
  }

  /**
   * SavedOpportunity delete
   */
  export type SavedOpportunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOpportunity
     */
    select?: SavedOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOpportunity
     */
    omit?: SavedOpportunityOmit<ExtArgs> | null
    /**
     * Filter which SavedOpportunity to delete.
     */
    where: SavedOpportunityWhereUniqueInput
  }

  /**
   * SavedOpportunity deleteMany
   */
  export type SavedOpportunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedOpportunities to delete
     */
    where?: SavedOpportunityWhereInput
    /**
     * Limit how many SavedOpportunities to delete.
     */
    limit?: number
  }

  /**
   * SavedOpportunity without action
   */
  export type SavedOpportunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOpportunity
     */
    select?: SavedOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOpportunity
     */
    omit?: SavedOpportunityOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    profilePicture: 'profilePicture',
    firstName: 'firstName',
    lastName: 'lastName',
    age: 'age',
    dateOfBirth: 'dateOfBirth',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    phone: 'phone',
    skills: 'skills',
    preferredJobRoles: 'preferredJobRoles',
    bio: 'bio',
    currentRole: 'currentRole',
    experience: 'experience',
    linkedinUrl: 'linkedinUrl',
    githubUrl: 'githubUrl',
    leetcodeUrl: 'leetcodeUrl',
    portfolioUrl: 'portfolioUrl',
    twitterUrl: 'twitterUrl',
    resumeUrl: 'resumeUrl',
    resumeFileName: 'resumeFileName',
    isProfileComplete: 'isProfileComplete',
    profileViews: 'profileViews',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    institution: 'institution',
    degree: 'degree',
    fieldOfStudy: 'fieldOfStudy',
    startDate: 'startDate',
    endDate: 'endDate',
    isCurrentlyStudying: 'isCurrentlyStudying',
    grade: 'grade',
    description: 'description',
    userProfileId: 'userProfileId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jobTitle: 'jobTitle',
    company: 'company',
    jobType: 'jobType',
    status: 'status',
    appliedAt: 'appliedAt',
    deadline: 'deadline',
    description: 'description',
    location: 'location',
    salary: 'salary',
    jobUrl: 'jobUrl',
    applicationUrl: 'applicationUrl',
    interviewDate: 'interviewDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const SavedOpportunityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    company: 'company',
    type: 'type',
    location: 'location',
    deadline: 'deadline',
    description: 'description',
    requirements: 'requirements',
    salary: 'salary',
    jobId: 'jobId',
    opportunityUrl: 'opportunityUrl',
    applicationUrl: 'applicationUrl',
    savedAt: 'savedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SavedOpportunityScalarFieldEnum = (typeof SavedOpportunityScalarFieldEnum)[keyof typeof SavedOpportunityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    profilePicture?: StringNullableFilter<"UserProfile"> | string | null
    firstName?: StringFilter<"UserProfile"> | string
    lastName?: StringFilter<"UserProfile"> | string
    age?: IntNullableFilter<"UserProfile"> | number | null
    dateOfBirth?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    address?: StringNullableFilter<"UserProfile"> | string | null
    city?: StringNullableFilter<"UserProfile"> | string | null
    state?: StringNullableFilter<"UserProfile"> | string | null
    country?: StringNullableFilter<"UserProfile"> | string | null
    phone?: StringNullableFilter<"UserProfile"> | string | null
    skills?: StringNullableListFilter<"UserProfile">
    preferredJobRoles?: StringNullableListFilter<"UserProfile">
    bio?: StringNullableFilter<"UserProfile"> | string | null
    currentRole?: StringNullableFilter<"UserProfile"> | string | null
    experience?: StringNullableFilter<"UserProfile"> | string | null
    linkedinUrl?: StringNullableFilter<"UserProfile"> | string | null
    githubUrl?: StringNullableFilter<"UserProfile"> | string | null
    leetcodeUrl?: StringNullableFilter<"UserProfile"> | string | null
    portfolioUrl?: StringNullableFilter<"UserProfile"> | string | null
    twitterUrl?: StringNullableFilter<"UserProfile"> | string | null
    resumeUrl?: StringNullableFilter<"UserProfile"> | string | null
    resumeFileName?: StringNullableFilter<"UserProfile"> | string | null
    isProfileComplete?: BoolFilter<"UserProfile"> | boolean
    profileViews?: IntFilter<"UserProfile"> | number
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    education?: EducationListRelationFilter
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    age?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    skills?: SortOrder
    preferredJobRoles?: SortOrder
    bio?: SortOrderInput | SortOrder
    currentRole?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    leetcodeUrl?: SortOrderInput | SortOrder
    portfolioUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    resumeFileName?: SortOrderInput | SortOrder
    isProfileComplete?: SortOrder
    profileViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    education?: EducationOrderByRelationAggregateInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    profilePicture?: StringNullableFilter<"UserProfile"> | string | null
    firstName?: StringFilter<"UserProfile"> | string
    lastName?: StringFilter<"UserProfile"> | string
    age?: IntNullableFilter<"UserProfile"> | number | null
    dateOfBirth?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    address?: StringNullableFilter<"UserProfile"> | string | null
    city?: StringNullableFilter<"UserProfile"> | string | null
    state?: StringNullableFilter<"UserProfile"> | string | null
    country?: StringNullableFilter<"UserProfile"> | string | null
    phone?: StringNullableFilter<"UserProfile"> | string | null
    skills?: StringNullableListFilter<"UserProfile">
    preferredJobRoles?: StringNullableListFilter<"UserProfile">
    bio?: StringNullableFilter<"UserProfile"> | string | null
    currentRole?: StringNullableFilter<"UserProfile"> | string | null
    experience?: StringNullableFilter<"UserProfile"> | string | null
    linkedinUrl?: StringNullableFilter<"UserProfile"> | string | null
    githubUrl?: StringNullableFilter<"UserProfile"> | string | null
    leetcodeUrl?: StringNullableFilter<"UserProfile"> | string | null
    portfolioUrl?: StringNullableFilter<"UserProfile"> | string | null
    twitterUrl?: StringNullableFilter<"UserProfile"> | string | null
    resumeUrl?: StringNullableFilter<"UserProfile"> | string | null
    resumeFileName?: StringNullableFilter<"UserProfile"> | string | null
    isProfileComplete?: BoolFilter<"UserProfile"> | boolean
    profileViews?: IntFilter<"UserProfile"> | number
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    education?: EducationListRelationFilter
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    age?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    skills?: SortOrder
    preferredJobRoles?: SortOrder
    bio?: SortOrderInput | SortOrder
    currentRole?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    leetcodeUrl?: SortOrderInput | SortOrder
    portfolioUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    resumeFileName?: SortOrderInput | SortOrder
    isProfileComplete?: SortOrder
    profileViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    firstName?: StringWithAggregatesFilter<"UserProfile"> | string
    lastName?: StringWithAggregatesFilter<"UserProfile"> | string
    age?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    city?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    state?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    country?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    skills?: StringNullableListFilter<"UserProfile">
    preferredJobRoles?: StringNullableListFilter<"UserProfile">
    bio?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    currentRole?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    experience?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    linkedinUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    leetcodeUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    portfolioUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    twitterUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    resumeUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    resumeFileName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    isProfileComplete?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    profileViews?: IntWithAggregatesFilter<"UserProfile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    fieldOfStudy?: StringFilter<"Education"> | string
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    isCurrentlyStudying?: BoolFilter<"Education"> | boolean
    grade?: StringNullableFilter<"Education"> | string | null
    description?: StringNullableFilter<"Education"> | string | null
    userProfileId?: StringFilter<"Education"> | string
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    userProfile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isCurrentlyStudying?: SortOrder
    grade?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userProfile?: UserProfileOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    institution?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    fieldOfStudy?: StringFilter<"Education"> | string
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    isCurrentlyStudying?: BoolFilter<"Education"> | boolean
    grade?: StringNullableFilter<"Education"> | string | null
    description?: StringNullableFilter<"Education"> | string | null
    userProfileId?: StringFilter<"Education"> | string
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    userProfile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isCurrentlyStudying?: SortOrder
    grade?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    institution?: StringWithAggregatesFilter<"Education"> | string
    degree?: StringWithAggregatesFilter<"Education"> | string
    fieldOfStudy?: StringWithAggregatesFilter<"Education"> | string
    startDate?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Education"> | Date | string | null
    isCurrentlyStudying?: BoolWithAggregatesFilter<"Education"> | boolean
    grade?: StringNullableWithAggregatesFilter<"Education"> | string | null
    description?: StringNullableWithAggregatesFilter<"Education"> | string | null
    userProfileId?: StringWithAggregatesFilter<"Education"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Education"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    userId?: StringFilter<"Application"> | string
    jobTitle?: StringFilter<"Application"> | string
    company?: StringFilter<"Application"> | string
    jobType?: StringFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    appliedAt?: DateTimeFilter<"Application"> | Date | string
    deadline?: DateTimeNullableFilter<"Application"> | Date | string | null
    description?: StringNullableFilter<"Application"> | string | null
    location?: StringNullableFilter<"Application"> | string | null
    salary?: StringNullableFilter<"Application"> | string | null
    jobUrl?: StringNullableFilter<"Application"> | string | null
    applicationUrl?: StringNullableFilter<"Application"> | string | null
    interviewDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    jobType?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    deadline?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    jobUrl?: SortOrderInput | SortOrder
    applicationUrl?: SortOrderInput | SortOrder
    interviewDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    userId?: StringFilter<"Application"> | string
    jobTitle?: StringFilter<"Application"> | string
    company?: StringFilter<"Application"> | string
    jobType?: StringFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    appliedAt?: DateTimeFilter<"Application"> | Date | string
    deadline?: DateTimeNullableFilter<"Application"> | Date | string | null
    description?: StringNullableFilter<"Application"> | string | null
    location?: StringNullableFilter<"Application"> | string | null
    salary?: StringNullableFilter<"Application"> | string | null
    jobUrl?: StringNullableFilter<"Application"> | string | null
    applicationUrl?: StringNullableFilter<"Application"> | string | null
    interviewDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    jobType?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    deadline?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    jobUrl?: SortOrderInput | SortOrder
    applicationUrl?: SortOrderInput | SortOrder
    interviewDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    userId?: StringWithAggregatesFilter<"Application"> | string
    jobTitle?: StringWithAggregatesFilter<"Application"> | string
    company?: StringWithAggregatesFilter<"Application"> | string
    jobType?: StringWithAggregatesFilter<"Application"> | string
    status?: StringWithAggregatesFilter<"Application"> | string
    appliedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    deadline?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"Application"> | string | null
    location?: StringNullableWithAggregatesFilter<"Application"> | string | null
    salary?: StringNullableWithAggregatesFilter<"Application"> | string | null
    jobUrl?: StringNullableWithAggregatesFilter<"Application"> | string | null
    applicationUrl?: StringNullableWithAggregatesFilter<"Application"> | string | null
    interviewDate?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type SavedOpportunityWhereInput = {
    AND?: SavedOpportunityWhereInput | SavedOpportunityWhereInput[]
    OR?: SavedOpportunityWhereInput[]
    NOT?: SavedOpportunityWhereInput | SavedOpportunityWhereInput[]
    id?: StringFilter<"SavedOpportunity"> | string
    userId?: StringFilter<"SavedOpportunity"> | string
    title?: StringFilter<"SavedOpportunity"> | string
    company?: StringFilter<"SavedOpportunity"> | string
    type?: StringFilter<"SavedOpportunity"> | string
    location?: StringNullableFilter<"SavedOpportunity"> | string | null
    deadline?: DateTimeNullableFilter<"SavedOpportunity"> | Date | string | null
    description?: StringNullableFilter<"SavedOpportunity"> | string | null
    requirements?: StringNullableFilter<"SavedOpportunity"> | string | null
    salary?: StringNullableFilter<"SavedOpportunity"> | string | null
    jobId?: StringFilter<"SavedOpportunity"> | string
    opportunityUrl?: StringNullableFilter<"SavedOpportunity"> | string | null
    applicationUrl?: StringNullableFilter<"SavedOpportunity"> | string | null
    savedAt?: DateTimeFilter<"SavedOpportunity"> | Date | string
    createdAt?: DateTimeFilter<"SavedOpportunity"> | Date | string
    updatedAt?: DateTimeFilter<"SavedOpportunity"> | Date | string
  }

  export type SavedOpportunityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    company?: SortOrder
    type?: SortOrder
    location?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    jobId?: SortOrder
    opportunityUrl?: SortOrderInput | SortOrder
    applicationUrl?: SortOrderInput | SortOrder
    savedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedOpportunityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavedOpportunityWhereInput | SavedOpportunityWhereInput[]
    OR?: SavedOpportunityWhereInput[]
    NOT?: SavedOpportunityWhereInput | SavedOpportunityWhereInput[]
    userId?: StringFilter<"SavedOpportunity"> | string
    title?: StringFilter<"SavedOpportunity"> | string
    company?: StringFilter<"SavedOpportunity"> | string
    type?: StringFilter<"SavedOpportunity"> | string
    location?: StringNullableFilter<"SavedOpportunity"> | string | null
    deadline?: DateTimeNullableFilter<"SavedOpportunity"> | Date | string | null
    description?: StringNullableFilter<"SavedOpportunity"> | string | null
    requirements?: StringNullableFilter<"SavedOpportunity"> | string | null
    salary?: StringNullableFilter<"SavedOpportunity"> | string | null
    jobId?: StringFilter<"SavedOpportunity"> | string
    opportunityUrl?: StringNullableFilter<"SavedOpportunity"> | string | null
    applicationUrl?: StringNullableFilter<"SavedOpportunity"> | string | null
    savedAt?: DateTimeFilter<"SavedOpportunity"> | Date | string
    createdAt?: DateTimeFilter<"SavedOpportunity"> | Date | string
    updatedAt?: DateTimeFilter<"SavedOpportunity"> | Date | string
  }, "id">

  export type SavedOpportunityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    company?: SortOrder
    type?: SortOrder
    location?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    jobId?: SortOrder
    opportunityUrl?: SortOrderInput | SortOrder
    applicationUrl?: SortOrderInput | SortOrder
    savedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SavedOpportunityCountOrderByAggregateInput
    _max?: SavedOpportunityMaxOrderByAggregateInput
    _min?: SavedOpportunityMinOrderByAggregateInput
  }

  export type SavedOpportunityScalarWhereWithAggregatesInput = {
    AND?: SavedOpportunityScalarWhereWithAggregatesInput | SavedOpportunityScalarWhereWithAggregatesInput[]
    OR?: SavedOpportunityScalarWhereWithAggregatesInput[]
    NOT?: SavedOpportunityScalarWhereWithAggregatesInput | SavedOpportunityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedOpportunity"> | string
    userId?: StringWithAggregatesFilter<"SavedOpportunity"> | string
    title?: StringWithAggregatesFilter<"SavedOpportunity"> | string
    company?: StringWithAggregatesFilter<"SavedOpportunity"> | string
    type?: StringWithAggregatesFilter<"SavedOpportunity"> | string
    location?: StringNullableWithAggregatesFilter<"SavedOpportunity"> | string | null
    deadline?: DateTimeNullableWithAggregatesFilter<"SavedOpportunity"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"SavedOpportunity"> | string | null
    requirements?: StringNullableWithAggregatesFilter<"SavedOpportunity"> | string | null
    salary?: StringNullableWithAggregatesFilter<"SavedOpportunity"> | string | null
    jobId?: StringWithAggregatesFilter<"SavedOpportunity"> | string
    opportunityUrl?: StringNullableWithAggregatesFilter<"SavedOpportunity"> | string | null
    applicationUrl?: StringNullableWithAggregatesFilter<"SavedOpportunity"> | string | null
    savedAt?: DateTimeWithAggregatesFilter<"SavedOpportunity"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedOpportunity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SavedOpportunity"> | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    firstName: string
    lastName: string
    age?: number | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    phone?: string | null
    skills?: UserProfileCreateskillsInput | string[]
    preferredJobRoles?: UserProfileCreatepreferredJobRolesInput | string[]
    bio?: string | null
    currentRole?: string | null
    experience?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    leetcodeUrl?: string | null
    portfolioUrl?: string | null
    twitterUrl?: string | null
    resumeUrl?: string | null
    resumeFileName?: string | null
    isProfileComplete?: boolean
    profileViews?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    education?: EducationCreateNestedManyWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    firstName: string
    lastName: string
    age?: number | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    phone?: string | null
    skills?: UserProfileCreateskillsInput | string[]
    preferredJobRoles?: UserProfileCreatepreferredJobRolesInput | string[]
    bio?: string | null
    currentRole?: string | null
    experience?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    leetcodeUrl?: string | null
    portfolioUrl?: string | null
    twitterUrl?: string | null
    resumeUrl?: string | null
    resumeFileName?: string | null
    isProfileComplete?: boolean
    profileViews?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    education?: EducationUncheckedCreateNestedManyWithoutUserProfileInput
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserProfileUpdateskillsInput | string[]
    preferredJobRoles?: UserProfileUpdatepreferredJobRolesInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    leetcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeFileName?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    profileViews?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    education?: EducationUpdateManyWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserProfileUpdateskillsInput | string[]
    preferredJobRoles?: UserProfileUpdatepreferredJobRolesInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    leetcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeFileName?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    profileViews?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    education?: EducationUncheckedUpdateManyWithoutUserProfileNestedInput
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    firstName: string
    lastName: string
    age?: number | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    phone?: string | null
    skills?: UserProfileCreateskillsInput | string[]
    preferredJobRoles?: UserProfileCreatepreferredJobRolesInput | string[]
    bio?: string | null
    currentRole?: string | null
    experience?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    leetcodeUrl?: string | null
    portfolioUrl?: string | null
    twitterUrl?: string | null
    resumeUrl?: string | null
    resumeFileName?: string | null
    isProfileComplete?: boolean
    profileViews?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserProfileUpdateskillsInput | string[]
    preferredJobRoles?: UserProfileUpdatepreferredJobRolesInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    leetcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeFileName?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    profileViews?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserProfileUpdateskillsInput | string[]
    preferredJobRoles?: UserProfileUpdatepreferredJobRolesInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    leetcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeFileName?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    profileViews?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateInput = {
    id?: string
    institution: string
    degree: string
    fieldOfStudy: string
    startDate: Date | string
    endDate?: Date | string | null
    isCurrentlyStudying?: boolean
    grade?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile: UserProfileCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    institution: string
    degree: string
    fieldOfStudy: string
    startDate: Date | string
    endDate?: Date | string | null
    isCurrentlyStudying?: boolean
    grade?: string | null
    description?: string | null
    userProfileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrentlyStudying?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrentlyStudying?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userProfileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateManyInput = {
    id?: string
    institution: string
    degree: string
    fieldOfStudy: string
    startDate: Date | string
    endDate?: Date | string | null
    isCurrentlyStudying?: boolean
    grade?: string | null
    description?: string | null
    userProfileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrentlyStudying?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrentlyStudying?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userProfileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    userId: string
    jobTitle: string
    company: string
    jobType: string
    status: string
    appliedAt?: Date | string
    deadline?: Date | string | null
    description?: string | null
    location?: string | null
    salary?: string | null
    jobUrl?: string | null
    applicationUrl?: string | null
    interviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    userId: string
    jobTitle: string
    company: string
    jobType: string
    status: string
    appliedAt?: Date | string
    deadline?: Date | string | null
    description?: string | null
    location?: string | null
    salary?: string | null
    jobUrl?: string | null
    applicationUrl?: string | null
    interviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    jobType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    interviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    jobType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    interviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyInput = {
    id?: string
    userId: string
    jobTitle: string
    company: string
    jobType: string
    status: string
    appliedAt?: Date | string
    deadline?: Date | string | null
    description?: string | null
    location?: string | null
    salary?: string | null
    jobUrl?: string | null
    applicationUrl?: string | null
    interviewDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    jobType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    interviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    jobType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    interviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedOpportunityCreateInput = {
    id?: string
    userId: string
    title: string
    company: string
    type: string
    location?: string | null
    deadline?: Date | string | null
    description?: string | null
    requirements?: string | null
    salary?: string | null
    jobId: string
    opportunityUrl?: string | null
    applicationUrl?: string | null
    savedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedOpportunityUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    company: string
    type: string
    location?: string | null
    deadline?: Date | string | null
    description?: string | null
    requirements?: string | null
    salary?: string | null
    jobId: string
    opportunityUrl?: string | null
    applicationUrl?: string | null
    savedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedOpportunityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobId?: StringFieldUpdateOperationsInput | string
    opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedOpportunityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobId?: StringFieldUpdateOperationsInput | string
    opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedOpportunityCreateManyInput = {
    id?: string
    userId: string
    title: string
    company: string
    type: string
    location?: string | null
    deadline?: Date | string | null
    description?: string | null
    requirements?: string | null
    salary?: string | null
    jobId: string
    opportunityUrl?: string | null
    applicationUrl?: string | null
    savedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedOpportunityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobId?: StringFieldUpdateOperationsInput | string
    opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedOpportunityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobId?: StringFieldUpdateOperationsInput | string
    opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    age?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    skills?: SortOrder
    preferredJobRoles?: SortOrder
    bio?: SortOrder
    currentRole?: SortOrder
    experience?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    leetcodeUrl?: SortOrder
    portfolioUrl?: SortOrder
    twitterUrl?: SortOrder
    resumeUrl?: SortOrder
    resumeFileName?: SortOrder
    isProfileComplete?: SortOrder
    profileViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    age?: SortOrder
    profileViews?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    age?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    currentRole?: SortOrder
    experience?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    leetcodeUrl?: SortOrder
    portfolioUrl?: SortOrder
    twitterUrl?: SortOrder
    resumeUrl?: SortOrder
    resumeFileName?: SortOrder
    isProfileComplete?: SortOrder
    profileViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    age?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    currentRole?: SortOrder
    experience?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    leetcodeUrl?: SortOrder
    portfolioUrl?: SortOrder
    twitterUrl?: SortOrder
    resumeUrl?: SortOrder
    resumeFileName?: SortOrder
    isProfileComplete?: SortOrder
    profileViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    age?: SortOrder
    profileViews?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserProfileScalarRelationFilter = {
    is?: UserProfileWhereInput
    isNot?: UserProfileWhereInput
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrentlyStudying?: SortOrder
    grade?: SortOrder
    description?: SortOrder
    userProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrentlyStudying?: SortOrder
    grade?: SortOrder
    description?: SortOrder
    userProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrentlyStudying?: SortOrder
    grade?: SortOrder
    description?: SortOrder
    userProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    jobType?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    deadline?: SortOrder
    description?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    jobUrl?: SortOrder
    applicationUrl?: SortOrder
    interviewDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    jobType?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    deadline?: SortOrder
    description?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    jobUrl?: SortOrder
    applicationUrl?: SortOrder
    interviewDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    jobType?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    deadline?: SortOrder
    description?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    jobUrl?: SortOrder
    applicationUrl?: SortOrder
    interviewDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedOpportunityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    company?: SortOrder
    type?: SortOrder
    location?: SortOrder
    deadline?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    salary?: SortOrder
    jobId?: SortOrder
    opportunityUrl?: SortOrder
    applicationUrl?: SortOrder
    savedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedOpportunityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    company?: SortOrder
    type?: SortOrder
    location?: SortOrder
    deadline?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    salary?: SortOrder
    jobId?: SortOrder
    opportunityUrl?: SortOrder
    applicationUrl?: SortOrder
    savedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedOpportunityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    company?: SortOrder
    type?: SortOrder
    location?: SortOrder
    deadline?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    salary?: SortOrder
    jobId?: SortOrder
    opportunityUrl?: SortOrder
    applicationUrl?: SortOrder
    savedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileCreateskillsInput = {
    set: string[]
  }

  export type UserProfileCreatepreferredJobRolesInput = {
    set: string[]
  }

  export type EducationCreateNestedManyWithoutUserProfileInput = {
    create?: XOR<EducationCreateWithoutUserProfileInput, EducationUncheckedCreateWithoutUserProfileInput> | EducationCreateWithoutUserProfileInput[] | EducationUncheckedCreateWithoutUserProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserProfileInput | EducationCreateOrConnectWithoutUserProfileInput[]
    createMany?: EducationCreateManyUserProfileInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutUserProfileInput = {
    create?: XOR<EducationCreateWithoutUserProfileInput, EducationUncheckedCreateWithoutUserProfileInput> | EducationCreateWithoutUserProfileInput[] | EducationUncheckedCreateWithoutUserProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserProfileInput | EducationCreateOrConnectWithoutUserProfileInput[]
    createMany?: EducationCreateManyUserProfileInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserProfileUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserProfileUpdatepreferredJobRolesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EducationUpdateManyWithoutUserProfileNestedInput = {
    create?: XOR<EducationCreateWithoutUserProfileInput, EducationUncheckedCreateWithoutUserProfileInput> | EducationCreateWithoutUserProfileInput[] | EducationUncheckedCreateWithoutUserProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserProfileInput | EducationCreateOrConnectWithoutUserProfileInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutUserProfileInput | EducationUpsertWithWhereUniqueWithoutUserProfileInput[]
    createMany?: EducationCreateManyUserProfileInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutUserProfileInput | EducationUpdateWithWhereUniqueWithoutUserProfileInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutUserProfileInput | EducationUpdateManyWithWhereWithoutUserProfileInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutUserProfileNestedInput = {
    create?: XOR<EducationCreateWithoutUserProfileInput, EducationUncheckedCreateWithoutUserProfileInput> | EducationCreateWithoutUserProfileInput[] | EducationUncheckedCreateWithoutUserProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserProfileInput | EducationCreateOrConnectWithoutUserProfileInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutUserProfileInput | EducationUpsertWithWhereUniqueWithoutUserProfileInput[]
    createMany?: EducationCreateManyUserProfileInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutUserProfileInput | EducationUpdateWithWhereUniqueWithoutUserProfileInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutUserProfileInput | EducationUpdateManyWithWhereWithoutUserProfileInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type UserProfileCreateNestedOneWithoutEducationInput = {
    create?: XOR<UserProfileCreateWithoutEducationInput, UserProfileUncheckedCreateWithoutEducationInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutEducationInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<UserProfileCreateWithoutEducationInput, UserProfileUncheckedCreateWithoutEducationInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutEducationInput
    upsert?: UserProfileUpsertWithoutEducationInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutEducationInput, UserProfileUpdateWithoutEducationInput>, UserProfileUncheckedUpdateWithoutEducationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EducationCreateWithoutUserProfileInput = {
    id?: string
    institution: string
    degree: string
    fieldOfStudy: string
    startDate: Date | string
    endDate?: Date | string | null
    isCurrentlyStudying?: boolean
    grade?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUncheckedCreateWithoutUserProfileInput = {
    id?: string
    institution: string
    degree: string
    fieldOfStudy: string
    startDate: Date | string
    endDate?: Date | string | null
    isCurrentlyStudying?: boolean
    grade?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationCreateOrConnectWithoutUserProfileInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutUserProfileInput, EducationUncheckedCreateWithoutUserProfileInput>
  }

  export type EducationCreateManyUserProfileInputEnvelope = {
    data: EducationCreateManyUserProfileInput | EducationCreateManyUserProfileInput[]
    skipDuplicates?: boolean
  }

  export type EducationUpsertWithWhereUniqueWithoutUserProfileInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutUserProfileInput, EducationUncheckedUpdateWithoutUserProfileInput>
    create: XOR<EducationCreateWithoutUserProfileInput, EducationUncheckedCreateWithoutUserProfileInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutUserProfileInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutUserProfileInput, EducationUncheckedUpdateWithoutUserProfileInput>
  }

  export type EducationUpdateManyWithWhereWithoutUserProfileInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutUserProfileInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    fieldOfStudy?: StringFilter<"Education"> | string
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    isCurrentlyStudying?: BoolFilter<"Education"> | boolean
    grade?: StringNullableFilter<"Education"> | string | null
    description?: StringNullableFilter<"Education"> | string | null
    userProfileId?: StringFilter<"Education"> | string
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
  }

  export type UserProfileCreateWithoutEducationInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    firstName: string
    lastName: string
    age?: number | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    phone?: string | null
    skills?: UserProfileCreateskillsInput | string[]
    preferredJobRoles?: UserProfileCreatepreferredJobRolesInput | string[]
    bio?: string | null
    currentRole?: string | null
    experience?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    leetcodeUrl?: string | null
    portfolioUrl?: string | null
    twitterUrl?: string | null
    resumeUrl?: string | null
    resumeFileName?: string | null
    isProfileComplete?: boolean
    profileViews?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutEducationInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    firstName: string
    lastName: string
    age?: number | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    phone?: string | null
    skills?: UserProfileCreateskillsInput | string[]
    preferredJobRoles?: UserProfileCreatepreferredJobRolesInput | string[]
    bio?: string | null
    currentRole?: string | null
    experience?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    leetcodeUrl?: string | null
    portfolioUrl?: string | null
    twitterUrl?: string | null
    resumeUrl?: string | null
    resumeFileName?: string | null
    isProfileComplete?: boolean
    profileViews?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutEducationInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutEducationInput, UserProfileUncheckedCreateWithoutEducationInput>
  }

  export type UserProfileUpsertWithoutEducationInput = {
    update: XOR<UserProfileUpdateWithoutEducationInput, UserProfileUncheckedUpdateWithoutEducationInput>
    create: XOR<UserProfileCreateWithoutEducationInput, UserProfileUncheckedCreateWithoutEducationInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutEducationInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutEducationInput, UserProfileUncheckedUpdateWithoutEducationInput>
  }

  export type UserProfileUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserProfileUpdateskillsInput | string[]
    preferredJobRoles?: UserProfileUpdatepreferredJobRolesInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    leetcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeFileName?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    profileViews?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserProfileUpdateskillsInput | string[]
    preferredJobRoles?: UserProfileUpdatepreferredJobRolesInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    leetcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeFileName?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    profileViews?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateManyUserProfileInput = {
    id?: string
    institution: string
    degree: string
    fieldOfStudy: string
    startDate: Date | string
    endDate?: Date | string | null
    isCurrentlyStudying?: boolean
    grade?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrentlyStudying?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrentlyStudying?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateManyWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrentlyStudying?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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