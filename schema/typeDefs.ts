const typeDefs = `#graphql


# AWS S3 Types

type imageObject {
	imgKey: String!
	original: String!
	thumbnail: String!
	originalAlt: String!
	thumbnailAlt: String!
}

type DeleteS3ObjectResponse {
	status: Int!
	message: String!
}

input DeleteS3ObjectInput {
	imgKeys: [String!]!
}



# Thumbtack Review Types 

type ThumbtackReviewAuthor {
	name: String!
}

type ThumbtackReviewRating {
	
	ratingValue: Int!
}

type ThumbtackReview {
	
	datePublished: String!
	description: String!
	author: ThumbtackReviewAuthor!
	reviewRating: ThumbtackReviewRating!
}

type Mutation {

}

# Queries

type Query {


	# S3 Queries
	# getPresignedS3Url(imgKey: String!, commandType: String!, altTag: String!): String!

	# Thumbtack Review Queries
	queryThumbtackReviews: [ThumbtackReview!]
  

}


`;

export default typeDefs;
