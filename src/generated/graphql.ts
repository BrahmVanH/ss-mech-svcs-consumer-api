import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type DeleteS3ObjectInput = {
  imgKeys: Array<Scalars['String']['input']>;
};

export type DeleteS3ObjectResponse = {
  __typename?: 'DeleteS3ObjectResponse';
  message: Scalars['String']['output'];
  status: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getPresignedS3Url: Scalars['String']['output'];
  queryThumbtackReviews?: Maybe<Array<ThumbtackReview>>;
};


export type QueryGetPresignedS3UrlArgs = {
  altTag: Scalars['String']['input'];
  commandType: Scalars['String']['input'];
  imgKey: Scalars['String']['input'];
};

export type ThumbtackReview = {
  __typename?: 'ThumbtackReview';
  author: ThumbtackReviewAuthor;
  datePublished: Scalars['String']['output'];
  description: Scalars['String']['output'];
  reviewRating: ThumbtackReviewRating;
};

export type ThumbtackReviewAuthor = {
  __typename?: 'ThumbtackReviewAuthor';
  name: Scalars['String']['output'];
};

export type ThumbtackReviewRating = {
  __typename?: 'ThumbtackReviewRating';
  ratingValue: Scalars['Int']['output'];
};

export type ImageObject = {
  __typename?: 'imageObject';
  imgKey: Scalars['String']['output'];
  original: Scalars['String']['output'];
  originalAlt: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
  thumbnailAlt: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DeleteS3ObjectInput: DeleteS3ObjectInput;
  DeleteS3ObjectResponse: ResolverTypeWrapper<DeleteS3ObjectResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  ThumbtackReview: ResolverTypeWrapper<ThumbtackReview>;
  ThumbtackReviewAuthor: ResolverTypeWrapper<ThumbtackReviewAuthor>;
  ThumbtackReviewRating: ResolverTypeWrapper<ThumbtackReviewRating>;
  imageObject: ResolverTypeWrapper<ImageObject>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  DeleteS3ObjectInput: DeleteS3ObjectInput;
  DeleteS3ObjectResponse: DeleteS3ObjectResponse;
  Int: Scalars['Int']['output'];
  Query: {};
  String: Scalars['String']['output'];
  ThumbtackReview: ThumbtackReview;
  ThumbtackReviewAuthor: ThumbtackReviewAuthor;
  ThumbtackReviewRating: ThumbtackReviewRating;
  imageObject: ImageObject;
};

export type DeleteS3ObjectResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteS3ObjectResponse'] = ResolversParentTypes['DeleteS3ObjectResponse']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getPresignedS3Url?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryGetPresignedS3UrlArgs, 'altTag' | 'commandType' | 'imgKey'>>;
  queryThumbtackReviews?: Resolver<Maybe<Array<ResolversTypes['ThumbtackReview']>>, ParentType, ContextType>;
};

export type ThumbtackReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThumbtackReview'] = ResolversParentTypes['ThumbtackReview']> = {
  author?: Resolver<ResolversTypes['ThumbtackReviewAuthor'], ParentType, ContextType>;
  datePublished?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviewRating?: Resolver<ResolversTypes['ThumbtackReviewRating'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ThumbtackReviewAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThumbtackReviewAuthor'] = ResolversParentTypes['ThumbtackReviewAuthor']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ThumbtackReviewRatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThumbtackReviewRating'] = ResolversParentTypes['ThumbtackReviewRating']> = {
  ratingValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['imageObject'] = ResolversParentTypes['imageObject']> = {
  imgKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  original?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalAlt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailAlt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DeleteS3ObjectResponse?: DeleteS3ObjectResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ThumbtackReview?: ThumbtackReviewResolvers<ContextType>;
  ThumbtackReviewAuthor?: ThumbtackReviewAuthorResolvers<ContextType>;
  ThumbtackReviewRating?: ThumbtackReviewRatingResolvers<ContextType>;
  imageObject?: ImageObjectResolvers<ContextType>;
};

