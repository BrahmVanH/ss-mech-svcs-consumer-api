import { connectToDb } from './connection/db';
import { Resolvers } from './generated/graphql';
// import { signToken } from './utils/auth';

import scrape from './lib/thumbtack_scraper';

const resolvers: Resolvers = {
	Query: {
		// getPresignedS3Url: async (_: {}, { imgKey, commandType, altTag }: { imgKey: string; commandType: string; altTag: string }, __: any) => {
		// 	try {
		// 		const preSignedUrl = await getPresignedUrl(imgKey, commandType, altTag);
		// 		if (!preSignedUrl) {
		// 			console.error('Error in getting presigned URL');
		// 			throw new Error('Error in getting presigned URL');
		// 		}
		// 		return preSignedUrl;
		// 	} catch (err: any) {
		// 		throw new Error('Error in getting upload url for s3: ' + err.message);
		// 	}
		// },
		queryThumbtackReviews: async () => {
			try {
				const reviews = scrape();
				if (reviews && reviews.length < 1) {
					throw new Error('Error fetching reviews from Thumbtack');
				}
				return reviews;
			} catch (err: any) {
				console.error({ message: 'error in finding reviews', details: err });
				throw new Error('Error in finding reviews: ' + err.message);
			}
		},
	},
};


export default resolvers;