import NextAuth from "next-auth/next";
import CognitoProvider from "next-auth/providers/cognito";

export default NextAuth({
	providers: [
		CognitoProvider({
			clientId: process.env.COGNITO_APP_CLIENT_ID,
			clientSecret: process.env.COGNITO__APP_CLIENT_SECRET,
			issuer: process.env.COGNITO_ISSUER,
		}),
	],
});
